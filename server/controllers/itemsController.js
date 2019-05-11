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
        var id = parseInt(req.params.id);

        db.get_item(id)
        .then(item => {
            var newCount = item[0].view_count + 1;
            db.update_read_count(id, newCount);
            res.status(200).send(item);
        }).catch( err => {
            res.status(500).send({message: 'erro in getting the item'});
        })
    }
}