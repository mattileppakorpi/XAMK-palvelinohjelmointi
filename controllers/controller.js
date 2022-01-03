const Item = require('../models/item.js');

const addNewItem = (req, res) => {
    const newitem = new Item(req.body);
    newitem.save().then(result => {
        console.log('Varastoon lisätty: ' + result);
        res.redirect('/');
    }).catch(err => console.log(err));
}


const showItems = (req, res) => {
    Item.find((err, items) => {
        if (err) {
            console.log(err);
        } else {
            res.render('storage', { items: items });
        }
    }).sort({ location: 1, name: 1 })
};

const showItemsJKL = (req, res) => {
    Item.find((err, items) => {
        if (err) {
            console.log(err);
        } else {
            res.render('storageJKL', { items: items });
        }
    }).sort({ location: 1})
};

const showItemsTRE = (req, res) => {
    Item.find((err, items) => {
        if (err) {
            console.log(err);
        } else {
            res.render('storageTRE', { items: items });
        }
    }).sort({ location: -1})
};

const showItemsOULU = (req, res) => {
    Item.find((err, items) => {
        if (err) {
            console.log(err);
        } else {
            res.render('storageOulu', { items: items });
        }
    }).sort({ location: 1})
};

const deleteItems = (req, res) => {
    console.log(req.params.ItemId);
    Item.findByIdAndRemove(req.params.itemId, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Poistettiin tuote: ' + result._id);
            res.redirect('/storage');
        }
    })
}


module.exports = { addNewItem, showItems, deleteItems, showItemsJKL, showItemsOULU, showItemsTRE };
