

const PostCard = ({title,body,user}) => {


    return (
        <div className="post-card">
        <h3 className="post-title">{title}</h3>
        <p className="post-body">{body}</p>
        <p className="post-user">{user}</p>
        
        {/* <div className="refine">
            <div className="ui-buttons">
                <div className="ui-button-green"><button className="bluet">Edit</button></div>
                <div className="ui-button-red" >
             <button className="blue" > {setPosts}Delete</button>
                </div>
            </div>
        </div> */}
        </div>
    )
}




export default PostCard


//@installed react