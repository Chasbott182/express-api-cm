const express = require("express");
const {db:destination} = require("./DB");
const {getRandom} = require("./HELPERS");
var cors = require('cors')
const server = express();

server.use(express.json());
server.use(cors());

server.post("/destinations", (req, res)=>{
    const _id = getRandom();   
    const {name, location, photo} = req.body;
    destination[_id] = {_id, name, location, photo};

    //destination.push(req.body);
    //console.log(req.body);
    res.send(destination);
})

server.put("/destinations", (req, res)=>{
    const {_id} = req.query;

    if (_id === undefined){
        return res.status(400).send({ message: "?_id required"});
    }

    if (destination[_id] === undefined){
        return res.status(410).send({ message: "no desitination with that _id to update"});
    }

    const dest = destination[_id]
    const {name, location, photo} = req.body;

    if (name !== undefined){
        dest.name=name;
    }
    if (location !== undefined){
        dest.location=location;
    }
    if (photo !== undefined){
        dest.photo=photo;
    }

    res.send(dest);
    //destination._id.location = req.body.location;
})

server.delete("/destinations", (req, res)=>{
    const {_id} = req.query;

    if (_id === undefined){
        return res.status(400).send({ message: "?_id required"});
    }

    if (destination[_id] === undefined){
        return res.status(410).send({ message: "no desitination with that _id to delete"});
    }

    const dest = destination[_id]
    const {name, location, photo} = req.body;
    
    delete destination[_id];

    res.send(dest);

})

server.get("/destinations", (req, res)=>{
        res.send(destination);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=>{
    console.log("server listening");
});