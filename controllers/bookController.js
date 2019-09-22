function BookController() {

    function getIndex(req, res) {
        res.render('index');
    }
    return { getIndex }
}

module.exports = BookController();