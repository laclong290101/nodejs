import User from '../models/user';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';


export const signup = (req, res) => {
    const user = new User(req.body);
    console.log(req.body);
    user.save((error, user) => {
        if (error) {
            console.log(error.message);
            return res.status(400).json({
                error: "Khong the dang ki tai khoan"
            })
        }
        user.salt = undefined
        user.hashed_password = undefined
        res.json({ user })
    })
}

export const signin = (req, res) => {
    // console.log('tao day');
    const { email, password } = req.body;
    User.findOne({ email }, (error, user) => {
        if (error || !user) {
            return res.status(400).json({
                error: "User with that email does not exist. Please signup"
            })
        }
        if (!user.authenticate(password)) {
            console.log(user.authenticate(password));
            return res.status(401).json({
                error: 'Email and password not macth'
            })
        }
        const token = jwt.sign({ _id: user._id }, 'mk');
        res.cookie('t', token, { expire: new Date() + 9999 });
        const { _id, name, email, role } = user;
        console.log("thanh cong");
        return res.json({
            token, user: { _id, email, name, role }

        })
    })
};

export const signout = (req, res) => {
    res.clearCookie('t');
    res.json({
        message: 'Signout Success'
    })
}

export const requireSignin = expressJwt({
    secret: 'abc',
    algorithms: ["HS256"],
    userProperty: "auth",
});

export const isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!user) {
        return res.status(403).json({
            error: "Access Denied"
        })
    }
    next();
}

export const isAdmin = (req, res, next) => {
    if (req.profile.role == 0) {
        return res.status(403).json({
            error: "Admin resource! Access Denined"
        })
    }
    next();
}