const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();
const port = 3001;

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.use(express.static(__dirname));
app.use("/", router);
app.listen(port, () => {
    console.log(`Our server is up and running on port ${port}!`);
});