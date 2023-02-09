import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiHomeAlt } from "react-icons/bi";

const CreatePost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const notify = () => {
    toast.error("Cannot leave the field empty!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 20000,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    //   console.log(post)

    axios
      .post("/create", post)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    navigate("allpost");
  };

  useEffect(() => {
    console.log(post);
  }, [post]);

  return (
    <>
      <div className="container text-center" style={{ width: "40%" }}>
        <ToastContainer />
        <div className="d-flex justify-content-between">
        <BiHomeAlt style={{ fontSize: "2em", marginTop: "10px", cursor: "pointer"}}
          onClick={() => navigate("/")} />
        <h1 style={{width: "95%"}}>Create a Post</h1>
        </div>
        <Form>
          <Form.Group>
            <Form.Control
              name="title"
              value={post.title}
              placeholder="Title"
              onChange={handleChange}
              style={{ marginBottom: "1rem" }}
            />

            <Form.Control
              name="description"
              value={post.description}
              placeholder="Description"
              onChange={handleChange}
              style={{ marginBottom: "1rem" }}
            />
          </Form.Group>
          <Button
            onClick={(e) => {
              if (!post.title) {
                // alert("cannot leave the fields empty")
                notify();
              } else if (!post.description) {
                // alert("cannot leave the field empty")
                notify();
              } else {
                console.log("validated!");
                handleClick(e);
              }
            }}
            style={{ width: "100%", marginBottom: "1rem" }}
            variant="outline-success"
          >
            CREATE
          </Button>
        </Form>
        <Button
          style={{ width: "100%" }}
          variant="outline-dark"
          onClick={() => navigate(-1)}
        >
          BACK
        </Button>
      </div>
    </>
  );
};

export default CreatePost;
