const cors = require('cors');
const users = require('./users');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.listen(port, () => {
    console.log(`The server is running on port ${port}...`);
});
app.get('/', (req, res) => {
    console.log("GET request received on home route");
    res.send('Welcome to my API home page!');
});
app.get('/message', (req, res) => {
    console.log("GET request received on message route");
    res.send('Surprise! I am a ninja.');
});
app.post('/message/:secret', (req, res) => {
    console.log("Secret message received by POST request");
    res.json({ secret: "Message received: " + req.params.secret });
});
app.get('/users/:userId', (req, res) => {
    const userId = parseInt(req.params?.userId);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json({ name: user.name, age: user.age });
    } else {
        res.status(404).json({ error: 'User not found' });
    }

    console.log(`GET request received for user ID: ${userId}`);
});

console.log(users);