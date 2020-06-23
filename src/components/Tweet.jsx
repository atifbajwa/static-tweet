import React from 'react'
import './index.css';

// import components
import Avatar from './Avatar'
import Author from './Author'
import Message from './Message'




const Tweet = () => {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <Author />
                <Message />
            </div>
        </div >
    )
}

export default Tweet