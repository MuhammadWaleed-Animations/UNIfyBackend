// const express = require('express');
// const mongoose = require('mongoose');
// const { tstCheck } = require('../controllers/tstControllers/tstCheck');
// const { getAlltst } = require('../controllers/tstControllers/getAllTst');

// const router = express.Router();


// router.post('/postTest',(req,res,next)=>{
//     console.log("PostTest");
//     return res.status(200).json({
//         message: "Post Test"
//      });
// });

// router.post('/pTst',tstController.tstCheck);

// router.get('/getTest',tstController.getAlltst);

// router.delete('/deleteTest/:uid',(req,res,next)=>{
//     console.log("Delete Test");
//     return res.status(200).json({
//         message: "Delete Test: "+ req.params.uid
//      });
// });


module.exports = router;

const express = require('express');
const router = express.Router();
const { tstCheck } = require('../controllers/tst/tstCheck');
const { getAlltst } = require('../controllers/tst/getAllTst');

router.post('/check', tstCheck);
router.get('/all', getAlltst);

module.exports = router;
