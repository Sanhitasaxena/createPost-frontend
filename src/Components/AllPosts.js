import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const AllPosts = () => {
  
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({})

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deletePost = (id) => {
    console.log(id);

    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const updatePost = (post) => {
   setUpdatedPost(post)

   handleShow()
  }

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setUpdatedPost(Prev => {
        return({
            ...Prev, 
            [name]: value
        })
    } )
  }
  
  const saveUpdatedPost = ()=>{
    axios.put(`/update/${updatedPost._id}`, updatedPost)
    .then(res => console.log(res))
    .catch(err => console.log(err))

    handleClose();
    window.location.reload()
  }
  useEffect(() => {
    axios
      .get("/allpost")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container text-center">
        <h1>All posts</h1>
        <Button
          onClick={() => navigate(-1)}
          style={{ width: "30%" }}
          variant="outline-dark"
        >
          BACK
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Control 
                    style={{marginBottom: "1rem"}}
                    placeholder="Title"
                    name="title"
                    value={updatedPost.title ? updatedPost.title : ""} 
                    onChange={handleChange}/>

                    <Form.Control
                    placeholder="Description"
                    name="description"
                    value={updatedPost.description ? updatedPost.description : ""}
                    onChange={handleChange}/>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-evenly" style={{width: "100%"}}>
            <Button 
            variant="outline-dark" 
            onClick={handleClose}
            style={{width: "40%"}}
            >
              CLOSE
            </Button>
            <Button 
            variant="outline-success" 
            onClick={saveUpdatedPost}
            style={{width: "40%"}}
            >
              SAVE
            </Button>
          </Modal.Footer>
        </Modal>
        {posts ? (
          <>
            {posts.map((post) => {
              return (
                <>
                  <div
                    key={post._id}
                    className="container p-3 m-3 text-center"
                    style={{
                      border: "solid grey .5px",
                      borderRadius: "10px",
                      boxShadow: ".9px .9px black",
                    }}
                  >
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <div className="d-flex justify-content-around">
                      <Button
                        style={{ width: "30%" }}
                        variant="outline-primary"
                        // onClick={handleShow}
                        onClick={()=> updatePost(post)}
                      >
                        UPDATE
                      </Button>
                      <Button
                        style={{ width: "30%" }}
                        variant="outline-danger"
                        onClick={() => deletePost(post._id)}
                      >
                        DELETE
                      </Button>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <>
            <h1>no posts present</h1>
          </>
        )}
      </div>
    </>
  );
};

export default AllPosts;
