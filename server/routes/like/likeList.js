const express = require("express");
const router = express.Router();
const connection = require('../../server');

//Get the list of wit's likes:
router.post('/witLikesList', function (req, res) {
  witInfo = req.body;

  retrieveWitLikesSqlQuery = "SELECT username FROM likes where wit_id = ?";

  //Retrieve the list of likes for a specific wit:
  connection.connection.query(retrieveWitLikesSqlQuery, witInfo.wit_id,
    function(
      err,
      result) {
          if (err) {
            res.status(400).json("There was a problem in retrieving the list of likes for a wit");
          }
          else {
              res.status(200).send(result);
          }
    })
})

//Get the list of reply's likes
router.post('/replyLikesList', function (req, res) {
  replyInfo = req.body;

  retrieveReplyListSqlQuery = "SELECT * FROM replylikes where reply_id = ?";

  //Retrieve the list of like for a specific reply:
  connection.connection.query(retrieveReplyListSqlQuery, replyInfo.reply_id,
    function(
      err,
      respond) {
          if (err) {
            res.status(400).json("There is a problem in retrieving the list of likes for a reply from database");
          }
          else {
              res.status(200).send(respond);
          }
    })
})

module.exports = router;
