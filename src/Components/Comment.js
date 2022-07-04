import { useState } from "react";
import { manageLikes } from "../Services/functions";


export default function Comment(props){

    const {userName, timePosted, comment, liked, personal, replied} = props;

    const [likes, setLikes] = useState(liked);

    


    if (!personal) {
        return  <div className= {replied ===true ? "comment-container reply" : "comment-container"}>
                <div className="commentVote">
                    <button className="upVote" onClick={ e =>{
                        setLikes(parseInt(likes)  + parseInt(1))
                    }}> <img alt="upVote"  src="/images/icon-plus.svg"/> </button>
                    <p>{likes}</p>
                    <button className="downVote" onClick={ e =>{
                        setLikes(parseInt(likes)  + parseInt(-1))
                    }}> <img alt="downVote" src="/images/icon-minus.svg"/> </button>
                </div>

                <div className="commentBody">
                    <div className="commentHead">
                        <div className="commentHead-userInfo">
                            <h1 className="userName"> {userName} </h1>
                            <p className="timePosted"> {timePosted} </p>
                        </div>
                    
                        <button className="replyButton"> <img alt="arrow-reply" src="/images/icon-reply.svg" /> Reply</button>
                    </div>

                    <div className="commentContent">
                        <p> {comment} </p>
                        </div>
                    </div>
            </div>
    }

    else if (personal){
        return  <div  className={ replied === true ? "comment-container reply" : "comment-container "}>
               <div className="commentVote">
                    <button className="upVote" onClick={ e =>{
                        setLikes(parseInt(likes)  + parseInt(1))
                    }}> <img alt="upVote"  src="/images/icon-plus.svg"/> </button>
                    <p>{likes}</p>
                    <button className="downVote" onClick={ e =>{
                        setLikes(parseInt(likes)  + parseInt(-1))
                    }}> <img alt="downVote" src="/images/icon-minus.svg"/> </button>
                </div>

                <div className="commentBody">
                    <div className="commentHead">
                        <div className="commentHead-userInfo">
                            <h1 className="userName"> {userName} </h1>
                            <p className="timePosted"> {timePosted} </p>
                        </div>
                    
                        <div className="buttons">
                            <button className="deleteButton"> <img alt="arrow-reply" src="/images/icon-delete.svg" /> Delete </button>
                        
                            <button className="editButton"> <img alt="arrow-reply" src="/images/icon-edit.svg" /> Edit </button>

                            <button className="replyButton"> <img alt="arrow-reply" src="/images/icon-reply.svg" /> Reply </button>
                        </div>
                        

                    </div>

                    <div className="commentContent">
                        <p> {comment} </p>
                        </div>
                    </div>
            </div>
    }
}