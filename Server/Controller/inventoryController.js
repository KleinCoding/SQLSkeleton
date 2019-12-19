module.exports ={

getInventory: (req, res) => {
const db = req.app.get('db');

if (req.params.inventory_id) {
    db.inventory.getOne(+req.params.inventory_id).then(response => res.status(200).json(response))

} else {
    db.inventory.getAll()
        .then(response => res.status(200).json(response))
}
},

addInventory: (req, res) => {
    const db = req.app.get('db');

    const {item_name, item_desc, item_count} = req.body

    console.log('addInventory req.body', req.body)

    db.inventory.addItem(item_name, item_desc, item_count).then(response => 
        res.status(200).json(response));
}
}