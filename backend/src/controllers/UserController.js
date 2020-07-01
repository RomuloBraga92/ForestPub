const config = require("../config/auth.config");
const User = require("../database/models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
    async signup(req, res) {
        const user = new User({
            name: req.body.name,
            password: bcrypt.hashSync(req.body.password, 8),
            email: req.body.email,
            cpf: req.body.cpf
        });
    
        await user.save((err, user) => {
            if(err) {
                res.status(500).send({message: err});
                return;
            }
            return res.json(user);
        });
    },

    signin(req, res) {
        User
            .findOne({email: req.body.email})
            .exec((err, user) => {
                if(err) {
                    res.status(500).send({message: err});
                    return;
                }
    
                if(!user) {
                    return res.status(404).send({message: "Email not found!"});
                }
    
                var passwordIsValid = bcrypt.compareSync(
                    req.body.password,
                    user.password
                );
    
                if(!passwordIsValid) {
                    return res.status(401).send({
                        accessToken: null,
                        message: "Invalid password!"
                    });
                }
    
                var token = jwt.sign({id: user._id}, config.secret);
    
                return res.status(200).send({ 
                    id: user._id,
                    auth: true,
                    accessToken: token
                });
            });
    },

    async info(req, res) {
        if(req.userId === null)
            return;
        User
            .findById(req.userId)
            .exec((err, user) => {
                console.log("im here")
                if(err) {
                    return res.status(500).send({message: err})
                }
                if(!user) {
                    return res.status(404).send({message: "No user found"});
                }
                const found = {
                    name: user.name,
                    email: user.email,
                    points: user.history.total,
                    image: user.image_url
                }
                console.log("and there")
                return res.status(200).send(found);
            })
    }


}
