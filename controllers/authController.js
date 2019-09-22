function AuthController() {

    let roles;
    let user;

    function setRoles(role) {
        roles = role;
        user.roles = role;
    }

    function setUser(inUser) {
        user = inUser;
    }

    function isAuthorized(neededRole) {
        if (user) {
            return user.isAuthorized(neededRole);
        }
    }

    function isAuthorizedCallback(neededRole, callback) {
        setTimeout(function () {
            callback(roles.indexOf(neededRole) >= 0)
        }, 500)
    }

    function isAuthorizedPromise(neededRole, callback) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(roles.indexOf(neededRole) >= 0)
            }, 500)
        });

    }
    return { isAuthorized, isAuthorizedCallback, isAuthorizedPromise, setRoles, setUser }
}

module.exports = AuthController();