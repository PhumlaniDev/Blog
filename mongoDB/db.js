const mongoose = require("mongoose");

// connect to mongoDB
const connect = mongoose.connect("mongodb://localhost:27017/blogDB");

// database structure aka schema
const postSchema = {
	title: String,
	content: String,
};

// database model
const Post = mongoose.model("Post", postSchema);

module.exports = connect;
module.exports = Post;
