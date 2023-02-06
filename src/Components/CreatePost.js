import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const CreatePost = ()=>{
    const navigate = useNavigate()
    const [post, setPost] = useState({
        title: "",
        description: ""
    })

    const handleChange = (e)=>{
       const {name, value} = e.target

       setPost((prev)=>{
         return{
            ...prev,
            [name]: value
         }
       })
    }

    const handleClick = (event)=>{
      event.preventDefault();
    //   console.log(post)

      axios.post("/create", post)
      .then((res)=>{
       console.log(res)
      })
      .catch((error)=>{
       console.log(error)
      })  

      navigate("allpost")
      
    }

    useEffect(()=>{
       console.log(post)
    }, [post])

    return(
        <>
        <div className="container text-center" style={{width: "40%"}}>
            <h1>Create a Post</h1>
            <Form>
                <Form.Group>
                    <Form.Control 
                    name="title"
                    value={post.title}
                    placeholder="Title"
                    onChange={handleChange}
                    style={{marginBottom: "1rem"}}/>
                    

                    <Form.Control 
                    name="description"
                    value={post.description}
                    placeholder="Description"
                    onChange={handleChange}
                    style={{marginBottom: "1rem"}}/>

                </Form.Group>
                <Button onClick={handleClick}
                style={{width: "100%",  marginBottom: "1rem"}}
                variant="outline-success">CREATE POST</Button>
            </Form>
            <Button 
             style={{width: "100%"}}
             variant="outline-dark"
             onClick={()=> navigate(-1)}>BACK</Button>
        </div>
        </>
    )
}

export default CreatePost