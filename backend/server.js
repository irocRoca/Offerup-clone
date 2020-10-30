const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Item = require('./models/Item')
const cors = require('cors');


const app = express();


app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('connected to Mongo'))

// Find Search in Items collection
app.get('/items/search/:query', (req, res) => {
    // validate query first
    const query = req.params.query
    Item.find({title: new RegExp(query, 'i') }, (err, data) => {
        if(err) return res.status(500).send(err);
        res.send(data)
    })
})

app.post('/item/create', (req,res) => {
    // Validate data 
    //const data = req.body;
    Item.create(req.body).then((doc) => {
        console.log(doc)
        res.status(200).send("Item Created");
    }).catch(err => {
        res.status(500).send(err)
    })
})

app.get('/items', (req, res) => {
    // validate the page number
    let page = (req.query.page - 1) * 8;
    Item.find({}, null, {skip: page, limit: 8}, (err, data) => {
        if(err) return res.status(500).send(err)
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
