import React from 'react'
import './index.css';

// import components
import Avatar from './Avatar'
import Author from './Author'
import Message from './Message'
import Time from './Time'
import ReplyButton from './ReplyButton'
import ReTweetButton from './ReTweetButton'
import LikeButton from './LikeButton'
import MoreOptionsButton from './MoreOptionsButton'






const Tweet = () => {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <Author /><Time />
                <Message />
                <div className="buttons">
                    <ReplyButton />
                    <ReTweetButton />
                    <LikeButton />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    )
}

export default Tweet