const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if(err) res.status(403).json("Token is not Valid!");
            req.user = user;
            next();
        });
    }
    else {
        return res.status(401).json("You are not Authenticated!");
    }
};

const verifyTokenAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json("You Are Not Allowed To Do That!");
        }
    });
};

const verifyTokenAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json("You Are Not Allowed To Do That!");
        }
    });
};

module.exports = { 
    verifyToken,
    verifyTokenAuthorization,
    verifyTokenAdmin,
};