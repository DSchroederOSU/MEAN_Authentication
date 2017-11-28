// app/routes.js

var User = require('./models/user');
var Building = require('./models/building');
module.exports = function(app, passport) {

    app.get('/api/candy', function(req, res) {
        res.json(req.user.candy); // return all candy in JSON format
    });
    app.post('/api/candy', function(req, res) {
        var user = req.user;
        var new_candy = {name: req.body.text};
        user.candy.push(new_candy);
        user.save(function(err) {
            if (err)
                throw err;
            console.log(req.user.candy);
            res.json(req.user.candy); // return all candy in JSON format
        });
    });
    app.get('/api/google_user', function(req, res) {

        res.json(req.user.google); // return google profile in JSON format
    });
    app.get('/api/buildings', function(req, res) {
        Building.find({}, function (err, buildings) {
            res.json(buildings); // return all buildings in JSON format
        });

    });
    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.html'); // load the index.html file
    });

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.html', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    // =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect : '/profile',
            failureRedirect : '/'
    }));
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.html', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // Block Routes ========================
    // =====================================
    app.get('/block', isLoggedIn, function(req, res) {
        res.render('block.html', {
            user : req.user // get the user out of session and pass to template
        });
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
