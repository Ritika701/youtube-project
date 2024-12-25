import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index} >
            <Comment data={comment} />

            {/* Replies (list of Comment) - */}
            <div className='pl-5 border border-l-black ml-5'>
                <CommentsList comments={comment.replies} /> 
                {/* CommentsList calling itself. Recursion in components */}
            </div>
        </div>
    ))
}

export default CommentsList
