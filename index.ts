import express from "express";
import bodyParser from "body-parser";
const app = express();

const { port } = require('./conf');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log(`Node JS Server started at port ${port}`);
});
