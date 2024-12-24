const express = require('express');
const router = express.Router();
const PenController = require('../controllers/MhsController');

router.get('/penelitian', PenController.getpenelitian);
router.post('/penelitian/insert', PenController.insertpenelitian);
router.put('/penelitian/update/:kd_penelitian', PenController.updatepenelitian );
router.delete('/penelitian/delete/:kd_penelitian', PenController.deletepenelitian);

module.exports = router;


