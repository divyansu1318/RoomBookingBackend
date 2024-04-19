const db = require('../models');
const users = db.users;
const jwt = require('jsonwebtoken');
const secretKey = require('../config/secret.config');

const login = (req, res, next) => {
    console.log('coming');
    users.findOne({
        where: { userName: req.body.userName, password: req.body.password }
    }).then((userDetails) => {
        if (userDetails) {
            const token = jwt.sign({ userId: 'admin' }, secretKey.key, {
                expiresIn: '1h',
            });

            users.update(
                { session: token },
                { where: { id: userDetails?.dataValues?.id } }
            )
    
            res.status(200).send({ message: 'Login Successfully!', token })
        } else {
            res.status(401).send({ message: 'Invalid username or password!' })
        }
    });
}

module.exports = {
    login
};