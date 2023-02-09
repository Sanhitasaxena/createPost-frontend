// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function App() {
  const navigate = useNavigate()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const signUp = ()=>{
   handleShow()
  }
  const signIn = ()=>{
   handleShow()
  }


  return (
    <div className="container text-center" style={{width: "40%"}}>
     <h1>Home page</h1>
     <Button 
     style={{width: "100%"}}
     variant="outline-dark"
     onClick={()=> navigate("create")}>Create Post</Button>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     <div className="d-flex flex-column justify-content-center"
     style={{height: "50vh"}}>
       <Button 
       style={{width: "100%", marginBottom: "1rem"}}
       variant="outline-dark"
       onClick={signUp}>SIGN UP</Button>
       <Button
       style={{width: "100%"}}
       variant="outline-dark"
       onClick={signIn}>SIGN IN</Button>
     </div>
    </div>
  );
}

export default App;
