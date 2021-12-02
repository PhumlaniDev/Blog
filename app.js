const express = require("express");
const router = require("./routes/route.js");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", router);

app.use("/posts/:postId", router);

app.use("/about", router);

app.use("/contact", router);

app.use("/compose", router);

app.use("/compose", router);

let port = process.env.PORT;
if (port == null || port == "") {
	port = 5000;
}

app.listen(port, function () {
	console.log(`Server has started on port ${port}`);
});
