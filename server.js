console.log('in server.js !!')
var faker = require('faker');
const { json } = require("express");
// import axios from 'axios'

const express = require("express");
const app = express();
const port = 8000;

// localhost:8000/
app.get("/", (req, res) => {
    console.log(req.url)
    res.send("<h1>Hello World!!!!</h1>")

})

// testing to show my own data 
const recipe = [
    { name: "cookies", type: ["chocochips", "peanut", "snickerdoodle"] },
    { name: "cake", type: ["vanilla", "funfetti"] }
]

// localhost:8000/test
app.get("/test", (req, res) => {
    console.log(req.url)
    res.json(recipe)
})


class User {
    constructor() {
        this.id = faker.random.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company {
    constructor() {
        this.id = faker.random.uuid()
        this.name = faker.company.companyName()
        this.address = {
            "street": faker.address.streetName(),
            "city": faker.address.city(),
            "state": faker.address.state(),
            "zipcode": faker.address.zipCode(),
            "country": faker.address.country()
        }
    }
}

const myUsers = []
const myCompanies = []
let myUserAndCompanies = []


//localhost:8000/api/users/new
app.get("/api/users/new", (req, res) => {
    user = new User()
    res.json(user)
    myUsers.push(user)
    console.log(req.url)
})

//localhost:8000/api/companies/new
app.get("/api/companies/new", (req, res) => {
    c = new Company()
    res.json(c)
    console.log(c)
    myCompanies.push(c)
    console.log(req.url)
})

//localhost:8000/api/user/company
app.get("/api/user/company", (req, res) => {
    myuser1=new User(),
            mycompany1= new Company()
    res.json(
        {
            myuser1,
            mycompany1
        })
            myUserAndCompanies.push(myuser1),
            myUserAndCompanies.push(mycompany1)
    
    console.log(req.url)
    

})

//routes to display companies and users
app.get("/api/allusers", (req, res) => {
    console.log(req.url)
    res.json(myUsers)
})

app.get("/api/allcompanies", (req, res) => {
    console.log(req.url)
    res.json(myCompanies)
})

app.get("/api/both", (req, res) => {
    console.log(req.url)
    res.json(myUserAndCompanies)
})

app.listen(port, () => console.log(`listening on port ${port}`))

/* 
ways to define; 
1- user = new User()
res.json(user)

2- res.json( new User() )

3- res.json({user: new User()})
*/