const express = require('express');
const router = express.Router;

const users = [{
    name: "Tony",
    email: "tony@gmail.com",
    age: 23
}]

router.get("/users", (req, res)=>{
    // res.send("hellooooo")
    res.json({
        ok: true, users
    });
});


router.get('/user/name:', (req, res) =>{
    const {name} = req.params;
    const user = users.filter((user)=> user.name === name)[0];
    res.json({ok: true, user})

});




router.post("/adduser", (req, res)=>{
    const { name, email } = req.body;
    if(name && email) {
        users.push({ name, email });
        res.json({ok: true, users});
    }

});


// const body = {
//     name: 'name',
//     email: 'email'
// }

module.exports = router;