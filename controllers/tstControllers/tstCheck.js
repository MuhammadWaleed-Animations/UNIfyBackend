const mongoose = require('mongoose');
const tstm = require('../models/tst');

exports.tstCheck = (req, res, next) => {
  console.log("tstCheck-----------------");
  console.log("req body: ", req.body);
  console.log("data: ", req.body.data);

  const tst = new tstm({
    _id: new mongoose.Types.ObjectId(),
    data: req.body.data,
  });

  tst.save()
    .then(result => {
      console.log("-----------", result);
      res.status(200).json({
        message: "tst passed",
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    });
};