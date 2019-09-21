function AuthController() {

    let roles;

    function setRoles(role) {
        roles = role;
    }

    function isAuthorized(neededRole) {
        return roles.indexOf(neededRole) >= 0;
    }

    function isAuthorizedAsync(neededRole, callback) {
        setTimeout(function () {
            callback(roles.indexOf(neededRole) >= 0)
        }, 2500)
    }
    return { isAuthorized, isAuthorizedAsync, setRoles }
}

module.exports = AuthController();