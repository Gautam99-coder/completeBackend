
import React, { useState ,useEffect} from "react";
import axios from "axios";

export const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: "6aa81656b01117623a06f6cc",
            image: "https://ik.imagekit.io/nsujzdx4o/image_OkqBQWPWHf.jpg",
            caption: "My first post",
            __v: 0
        }
    ]);

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            console.log(res.data);
        })
    },[])

    return (
        <section className="feed-section">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className="post-card">
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <h2>No Post Available</h2>
            )}
        </section>
    );
};
