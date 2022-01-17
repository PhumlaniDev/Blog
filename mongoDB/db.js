require("dotenv").config();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

// connect to mongoDB
const connect = mongoose.connect(
	`mongodb+srv://admin-phumlani:${process.env.DB_PSWD}@cluster0.jt1kf.mongodb.net/blog?retryWrites=true&w=majority`,
	{ useNewUrlParser: true }
);

// database structure aka schema
const postSchema = {
	title: String,
	content: String,
};

// database model
const Post = mongoose.model("Post", postSchema);

module.exports = connect;
module.exports = Post;
