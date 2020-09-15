const express = require('express');
const mongoDb = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const memberUserSchema = require('./models/memberUserSchema');
const memberUserLeaderSchema = require('./models/memberUserLeaderSchema');
const groupSchema = require('./models/groupSchema');
let clutser;
let app;
let memberUserModel;


let adminUserLeadsModel;


dotenv.config()


const init = async () => {
    //Initualization
    app = express();


    // Ensure the request body is JSON
    const grouperDatabasePassword = process.env.grouper_database_password
    clutser = await mongoDb.connect(`mongodb+srv://User1:${grouperDatabasePassword}@grouper.24v9f.gcp.mongodb.net/userDatabase?retryWrites=true&w=majority`)
    
    //Connecting to the user collection(s)
    memberUserModel = clutser.model('memberUserModel',memberUserSchema,'memberUserDb')
    memberUserLeadsModel =  clutser.model('memberUserModel',memberUserLeaderSchema,'memberUsersDb')
    adminUserLeadsModel = clutser.model('adminUserModel',memberUserLeaderSchema,'memberUserDb')
    
    //Connecting groups
    adminUserLeadsModel = clutser.model('groupsModel',groupSchema,'groupsDb')



    app.use(bodyParser.json())
}


init(); 

//User Endpoints
app.get('/api/users',(req,res) => {
    res.status(200)
    res.send(JSON.stringify(memberUserModel));
})

app.post('/api/users',(req,res) => {
    res.status(201)
    memberUserModel.create(req.body);
});

app.get('/api/users/:type/:userid',(req,res) => {
    res.status(200)
    memberUserModel.find(req.body.params.type && req.body.params.userid);
});



app.get('/api/users/:type',(req,res) => {
    res.status(200)
    memberUserModel.find(req.body.params.type)
})


app.delete('/api/users/:type/:userid',(req,res) => {
    memberUserModel.remove(req.body.params.type && req.params.userid)
    res.status(204);
});

app.put('/api/users/:type/:userid',(req,res) => {
    res.status(200)
});


//Group Endpoints
app.get('/api/groups',(req,res) => {
    res.status(200)
});

app.get('/api/groups/:groupid',(req,res) => {
    res.status(200)
});

app.put('/api/groups/:groupid',(req,res) => {
    res.status(200)
})

app.post('/api/groups',(req,res) => {
    res.status(201)
})

app.delete('/api/groups/:groupid',(req,res) => {
    res.status(204)
})

app.listen(process.env.PORT || 3000,window.location.hostname,0)