import React, { useState, useEffect } from 'react';
import './Posts.css';
import axios from 'axios';

function Posts(props) {


    let user = props.user

    const [userData, setUserData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user}`)
            .then(response => {
                setUserData(response.data)
                setLoading(false)
            })
            .catch(function (error) {
                setError(error)
            })
    }, [user])

    let output = () => {
        if (user && !loading) {
            return userData.map(u => <><div style={{ "margin": "1em", "textAlign": "left" }}>Post title:{u.title} </div><div style={{ "textAlign": "left" }}>Post body: {u.body}</div><hr></hr></>)
        } else {
            return <h1>Select A User to See Posts</h1>
        }
    }

    return (
        <div className="Posts">
            {output()}
        </div>
    );
}


export default Posts;
