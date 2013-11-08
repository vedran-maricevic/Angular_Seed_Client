  "use strict";

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-type, Authorization, Content-Length, X-Requested-With, Origin, Accept');

    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
};

var application_root = __dirname,
    path = require("path"),
    express = require("express"),
    app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(allowCrossDomain);
    app.use(app.router);
 //Serve the root
    app.use(express.static(__dirname + './../'));
    console.log("SERVING PROUDLY ALL YOUR NEEDS !!!");
});

app.listen(9000)
