const express = require('express')
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello from my second node server and exited to learn.Automatic restart');
})

const users = [
    { id: 0, name: 'abir', email: 'abir@gmail.com', phone: '01723456234' },
    { id: 1, name: 'abdul', email: 'abdul@gmail.com', phone: '01723456434' },
    { id: 2, name: 'kabir', email: 'kabir@gmail.com', phone: '01723465234' },
    { id: 3, name: 'jabir', email: 'jabir@gmail.com', phone: '01729856234' },
    { id: 4, name: 'shabnur', email: 'shabnur@gmail.com', phone: '01729236234' }
];
const peoples = [
    { id: 0, name: 'abir', email: 'abir@gmail.com', phone: '01723456234' },
    { id: 1, name: 'abdul', email: 'abdul@gmail.com', phone: '01723456434' },
    { id: 2, name: 'kabir', email: 'kabir@gmail.com', phone: '01723465234' },
    { id: 3, name: 'jabir', email: 'jabir@gmail.com', phone: '01729856234' },
    { id: 4, name: 'shabnur', email: 'shabnur@gmail.com', phone: '01729236234' }
];


app.get('/users', (req, res) => {
    res.send(users);
})

// Dynamic parameter
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);

    console.log(req.params.id)
})

app.get('/fruits', (req, res) => {
    res.send(["Mango", "Apple", "Banana"]);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("Yummy mango Fazli");
})

app.get('/peoples', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = peoples.filter(people => people.name.toLowerCase()
            .includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

})

// App Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("Hitting the post", req.body);
    //res.send('Post got hit');
    res.json(newUser);
})

app.listen(port, () => {
    console.log('Listening to Port', port);
})