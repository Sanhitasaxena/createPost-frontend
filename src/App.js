// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"

function App() {
  const navigate = useNavigate()
  return (
    <div className="container text-center" style={{width: "40%"}}>
     <h1>Home page</h1>
     <Button 
     style={{width: "100%"}}
     variant="outline-dark"
     onClick={()=> navigate("create")}>Create Post</Button>
    </div>
  );
}

export default App;
