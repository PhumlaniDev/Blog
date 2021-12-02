const express = require("express");
const router = require("./routes/route.js");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

const PORT = 5000;

app.use("/", router);

app.use("/posts/:postId", router);

app.use("/about", router);

app.use("/contact", router);

app.use("/compose", router);

app.use("/compose", router);

app.listen(PORT, function () {
	console.log("Server started on port 5000");
});
