const EXPRESS  = require('express')
const ROUTER   = EXPRESS.Router()

var connection = require('../../server')

//Delete a wit:
ROUTER.post('/deleteWit', (req, res) => {
  var witInfo        = req.body;

  var deleteSqlQuery = 'DELETE FROM events WHERE wit_id = ?'

  //Deleting from the tables the rows that contains this wit_id:
  connection.connection.query(deleteSqlQuery, witInfo.wit_id,
    function (
      err,
      respond) {
        if (err) {
          res.status(400).json("There are problem for deleting a wit")
        } else {
          res.status(200).send(respond)
        }
    }
  )
})

//Delete a reply:
ROUTER.post('/deleteReply', function(req, res) {
  var replyInfo      = req.body

  var deleteSqlQuery = 'DELETE FROM replies WHERE reply_id = ?'

  //Deleting from the tables the rows that contains this reply_id:
  connection.connection.query(deleteSqlQuery, replyInfo.reply_id,
    function (
      err,
      respond) {
        if (err) {
          res.status(400).json("There was a problem with deleting this reply from the databse")
        } else {
          res.status(200).send(respond);
        }
    }
  )
})

module.exports = ROUTER;
