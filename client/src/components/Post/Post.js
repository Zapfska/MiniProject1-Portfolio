import { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
// Create new blog post and the edit route
require("dotenv").config();

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  postButton: {
    border: "none",
    fontSize: "30px",
    backgroundColor: "darkorange",
    color: "white",
  },
  inputFields: {},
  h2: {
    textAlign: "center",
    fontFamily: "Itim, cursive",
    fontSize: "40px",
  },
  paper: {
    width: "500px",
    height: "500px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingLeft: "20px",
  },
  NewPostContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
  },
}));

const Post = () => {
  const classes = useStyles();

  const [post, setPosts] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const [imgInput, setImgInput] = useState("");

  // CREATE
  const createPost = async (e, id) => {
    e.preventDefault();
    // let noteHolder = noteInput.current.value;
    let newPost = JSON.stringify({
      title: titleInput,
      content: contentInput,
      author: authorInput,
      img: imgInput,
    });
    e.currentTarget.reset();
    try {
      const response = await fetch("http://localhost:3000/api/post", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: newPost,
      });
      const data = await response.json();
      let allPosts = [...post, data];
      // Please test this.
      // Can't remember what post returns
      setPosts(allPosts);
      setContentInput("");
      setTitleInput("");
      setAuthorInput("");
      setImgInput("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={classes.NewPostContainer}>
        <Paper elevation={3} className={classes.paper}>
          <h2 className={classes.h2}>new blog</h2>
          <div className={classes.inputFields}>
            <form
              onSubmit={createPost}
              className={classes.root}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="title"
                label="Title"
                variant="filled"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              />
              <TextField
                id="author"
                label="Author"
                variant="filled"
                value={authorInput}
                onChange={(e) => setAuthorInput(e.target.value)}
              />
              <TextField
                id="content"
                label="Content"
                variant="filled"
                value={contentInput}
                onChange={(e) => setContentInput(e.target.value)}
              />
              <TextField
                id="img"
                label="Image URL"
                variant="filled"
                value={imgInput}
                onChange={(e) => setImgInput(e.target.value)}
              />
              <Button
                variant="outlined"
                style={{
                  backgroundColor: "darkorange",
                  marginLeft: "125px",
                }}
              >
                <input
                  type="submit"
                  value="Post"
                  className={classes.postButton}
                />
              </Button>
            </form>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Post;
