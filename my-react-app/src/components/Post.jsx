import { useEffect, useState } from 'react'

export default function Post() {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
            //console.log("post component mounted");//side effect
        async function fetchData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await  response.json();
            setPosts(data);
        }
        fetchData();
    },[]);
    console.log({posts})
  return (
    <div>
      {posts.map((post)=>{
     return (   <div  key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div> )
})}
    </div>
  )
}
