module.exports = {
    getItems: (req,res,next) => {
        const db = req.app.get('db');
        db.get_items()
        .then( items => {
            res.status(200).send(items);
        }).catch( err => {
            res.status(500).send({message: "error in getting items"});
        })
    }
}