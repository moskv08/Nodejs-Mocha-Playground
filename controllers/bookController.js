

function BookController() {

    function getIndex(req, res) {
        try {
            if (req.user.isAuthorized('admin')) {
                return res.render('profile');
            }
            res.render('index');
        } catch (error) {
            res.render('error');
        }

    }
    return { getIndex }
}

module.exports = BookController();