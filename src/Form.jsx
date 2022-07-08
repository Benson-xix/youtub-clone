
import { useState,useEffect } from 'react'
import "./css/form.css"
import PostCard from './PostCard'
// import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const [number, setNumber] = useState(0)
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const [post, setPost] = useState({
        title: "",
        userId:"",
        body:""
    })

//     const handleIncrement = () => {
// // setNumber(number + 1)
//             setNumber((prevNumber) => prevNumber + 1)
//     }
//     const handleDecrement = () => {
// setNumber((number - 1))
//     }




const generateId = (length = 3) => {
    let id = ""
    const prefix = "1234567890abcdefghijklmnopqrstuvwxyz"


    for(let i = 0; i < length; i++) {
    id += prefix[Math.floor(Math.random() * prefix.lenght)]
}


return id
}


const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
        ...post, 
        id: generateId(5)

    }





setPosts(prev => [...prev, data])
setPost(
    {
        title: "",
        userId:"",
        body:""
    }
)}

useEffect (() => {
console.log(posts)
},[posts]) 



// const handleSubmit = async (event) => {
//     setIsLoading(true)
//     event.preventDefault()


//     const options = {
//         method: "POST",
//         body: JSON.stringify({...post, id: generateId()}),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }
// const response = await fetch("http://jsonplaceholder.typicode.com/posts", options)
// const data = await response.json()
// setIsLoading(false)
// console.log(data)

// }

// useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => setPosts(data))
// },[])

// function removeItem(index) {
//     const postss = posts.filter((post, postIndex) => {
//       return postIndex !== index
//     })
//     setPosts([postss])
//   }


// console.log(posts, "post")

    return (
<div className="form-body">
        <form  onSubmit={handleSubmit}>
     <input type=" text" placeholder="title" value={post.title} onChange={(e) => setPost(prev => ({...prev,  title: e.target.value }))} name="" id="" />
     <input type=" text" placeholder="userId" value={post.userId} onChange={(e) => setPost(prev =>  ({...prev,  userId: e.target.value} ) )} name="" id="" />
            <textarea placeholder="body" onChange={(e) => setPost(prev => ({...prev, body: e.target.value }) )} value={post.body}cols="30" rows="10"></textarea>
     <button className="btn-submit" disabled={isLoading}>
         {isLoading ? "Loading..." : "Submit"}
         </button>
        </form>
        
        
        <div className="post-wrapper">
            
            {
            posts?.length ?
            posts.map(item => (
                <PostCard
                key={item.id}
              
                // onclick={removeItem(idx)}
                body={item.body}
                // onclick={deletposts}
                title={item.title}
                user={item.userId}
                 />
            ))   : (
                <h4>No Post FOUND</h4>
            ) 




        }



       
        </div>


        </div>
        
        
       


      
    //    <div><h1>{number}</h1>
    //     <button onClick={() => handleIncrement()}>Increment Count</button>
    //     <button onClick={handleDecrement}>Decrement count</button>
    //     </div> 
    )

      
} 

export default Form 