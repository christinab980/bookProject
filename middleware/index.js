const checkAuth = (req, res, next) => {
    console.log("c", req.session.user)

    if (!!req.session.user) {
        next();
    } else {
        res.redirect('/sign-in');
    }
};

    module.exports = checkAuth;