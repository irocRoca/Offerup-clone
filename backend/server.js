const express = require('express');
const mongoose = require('mongoose');
const bcrpyt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const Item = require('./models/Item')
const User = require('./models/User')
const cors = require('cors');
const { body, validationResult } = require('express-validator')


const app = express();


app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to Mongo'))


app.post('/user/create', [
    body('email', "Invalid Email").notEmpty().normalizeEmail().trim().isEmail().isString(),
    body('username', "Invalid Username").notEmpty().trim().isString(),
    body('password', "Invalid Password").notEmpty().trim().isString().isLength({ min: 6 })
], (req, res) => {
    // need to validate info
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    const { email, username, password } = req.body;
    // need to create a user
    User.findOne({ email })
        .then(user => {
            if (user) {
                return res.status(400).json({ message: "Email already in use" })
            }
            bcrpyt.genSalt(10, (err, salt) => {
                if (err) { return res.status(400).json({ message: "Error" }) }
                bcrpyt.hash(password, salt, (error, hash) => {
                    if (error) { return res.status(400).json({ message: "Error" }) }
                    User.create({
                        email,
                        username,
                        password: hash,
                    }).then(user => {
                        return res.status(200).send(user)
                    }).catch(err => {
                        return res.status(400).json({ message: "Failed to make user" })
                    }
                    )
                })
            })

        })
        .catch(err => res.status(500).json({ message: "Error occured" }))
})


app.post('/user/login', [
    body('email', "Invalid Email").notEmpty().normalizeEmail().trim().isEmail().isString(),
    body('password', "Invalid Password").notEmpty().trim().isString().isLength({ min: 6 })
], (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(400).json({ message: "No user found" })
        }

        bcrpyt.compare(password, user.password, (err, valid) => {
            if (!valid) {
                return res.status(400).json({ message: "Invalid username or password" });
            }
            const payload = { id: user._id, username: user.username};
            jwt.sign( payload, process.env.SECERT, { expiresIn: "1hr" }, (err, token) => {
                if(err){
                    return res.status(500).json({message: "Error in backend"})
                }
                console.log(token);
            });


            return res.status(200).send(user)
        })
    }).catch(err => { return res.status(400).json({ message: "Unable to login" })})
})


// Find Search in Items collection
app.get('/items/search', (req, res) => {
    // validate query first
    const query = req.query.title
    console.log(query)
    Item.find({ title: new RegExp(query, 'i') }, (err, data) => {
        if (err) return res.status(500).send(err);
        res.send(data)
    })
})

app.post('/item/create', (req, res) => {
    // Validate data 
    //const data = req.body;
    Item.create(req.body).then((doc) => {
        console.log(doc)
        res.status(200).send("Item Created");
    }).catch(err => {
        res.status(500).send(err)
    })
})

// Get information from a specific item
// app.get('/item/:id', (req ,res) => {

// })

app.get('/items', (req, res) => {
    // validate the page number
    let page = (req.query.page - 1) * 20;
    Item.find({}, null, { skip: page, limit: 20 }, (err, data) => {
        if (err) return res.status(500).send(err)
        // if(data.length == 0){
        //     /// Find a better method
        //     return 
        // }
        res.status(200).send(data)
    })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})
