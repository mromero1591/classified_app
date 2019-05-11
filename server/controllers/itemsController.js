module.exports = {
    getItems: (req,res,next) => {
        const db = req.app.get('db');
        db.get_items()
        .then( items => {
            res.status(200).send(items);
        }).catch( err => {
            res.status(500).send({message: "error in getting items"});
        })
    },

    getItem: (req,res,next) => {
        const db = req.app.get('db');

        var id = req.params.id;
        db.get_item(id)
        .then(item => {
            res.status(200).send(item);
        }).catch( err => {
            res.status(500).send({message: 'erro in getting the item'});
        })
    }
}