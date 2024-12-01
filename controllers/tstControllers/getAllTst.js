const tstm = require('../models/tst');

exports.getAlltst = (req, res, next) => {
  tstm.find({})
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    });
};
