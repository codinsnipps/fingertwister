import express from 'express'

const app = express();
const port = 3000;

app.use(express.static("public"))
app.set('views', './views');
app.set('view engine', "views");

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log("The server is running on port " + port);
})