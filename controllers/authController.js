function AuthController() {

    function isAuthorized(roles, neededRole) {
        return roles.indexOf(neededRole) >= 0;
    }

    function isAuthorizedAsync(roles, neededRole, callback) {
        setTimeout(function () {
            callback(roles.indexOf(neededRole) >= 0)
        }, 2500)
    }
    return { isAuthorized, isAuthorizedAsync }
}

module.exports = AuthController();