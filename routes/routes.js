const express = require('express');
const router = express.Router();
const Item = require('../controllers/controller.js')
const path = require('path');
const request = require('../controllers/saa.js');
router.use('/static', express.static(path.join(__dirname, '..', 'static')));

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/addstorageitem', (req, res) => {
    res.render('addstorageitem');

});

router.post('/addstorageitem', (req, res) => {
    Item.addNewItem(req, res);
});

router.get('/storage', (req, res) => {
    Item.showItems(req, res);
});


router.get('/remove/:itemId', (req, res) => {
    Item.deleteItems(req, res);
});

router.get('/jyvaskyla', (req, res) =>{
    Item.showItemsJKL(req, res);
})

router.get('/tampere', (req, res) =>{
    Item.showItemsTRE(req, res);
});

router.get('/oulu', (req, res) =>{
    Item.showItemsOULU(req, res);
});

router.get('/jyvaskyla/saa', (req, res) => {
    request.requestJKL(req, res);
    
});

router.get('/oulu/saa', (req, res) => {
    request.requestOulu(req, res);
});

router.get('/tampere/saa', (req, res) => {
    request.requestTRE(req, res);
});



module.exports = router;