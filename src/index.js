const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use('/api', userRoutes);



app.get('/', (req,res)=>{
    res.send('bienvenido a mi api');
});

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('conectado a mongodb altlas'))
.catch((error) => console.error(error));
app.listen(9000, () => console.log('server lintening', port));