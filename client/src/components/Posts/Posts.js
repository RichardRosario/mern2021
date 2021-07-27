import React from "react";

import Post from "./Post/Post";

import useStyles from "./styles";

const Posts = () => {
	const classes = useStyles();
	return (
		//add react fragments
		<>
			<h1 className={classes.mainContainer}>POSTS</h1>
			<Post />
			<Post />
		</>
	);
};

export default Posts;
