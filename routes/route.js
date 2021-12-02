const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connect = require("../mongoDB/db.js");
const Post = require("../mongoDB/db.js");

router.use(bodyParser.urlencoded({ extended: true }));

try {
	connect;
} catch (error) {
	alert(error);
}

router.get("/", (req, res) => {
	Post.find({}, function (err, posts) {
		res.render("home", {
			posts: posts,
		});
	});
});

router.get("/posts/:postId", (req, res) => {
	const requestedPostId = req.params.postId;

	Post.findOne({ _id: requestedPostId }, function (err, post) {
		res.render("post", {
			title: post.title,
			content: post.content,
		});
	});
});

router.get("/about", (req, res) => {
	res.render("about", {
		About: "Deem is an online journal and blog that's explorative of all topics related to design. They feel that design is everywhere and cover topics that combine design with people, brands and the world overall.",
	});
});

router.get("/contact", (req, res) => {
	res.render("contact", {
		Contact:
			"As an avid coffee drinker, I can deeply relate to this particular header. Aside from that, this is a friendly and inviting message that gets right to the point for the visitor. It shows where the company is located on one side of the page, as well as how you can contact them on the other side of the page.Now that you have ideas for a catchy header, use these examples to design the rest of your Contact Us page.Best Contact U",
	});
});

router.get("/compose", (req, res) => {
	res.render("compose");
});

router.post("/compose", (req, res) => {
	const post = new Post({
		title: req.body.postTitle,
		content: req.body.postBody,
	});
	post.save(function (err) {
		if (!err) {
			res.redirect("/");
		}
	});

	console.log(post);
});

module.exports = router;
