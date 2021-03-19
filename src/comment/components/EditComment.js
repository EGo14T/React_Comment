import React from 'react';
import '../style/Comment.scss'

import { postComments, initUserInfo, getUserInfo } from '../apis/api'

class EditComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.initUser()
        //监听message事件
        window.addEventListener("message", this.postID, false);
    }

    componentDidUpdate() {
        
    }

    EditComment = () => {
        return (
            <div className="postComment">
                <div>
                    <textarea className="editArea" rows="6" value={this.state.value} onChange={(event) => { this.updateInputValue(event) }} />
                </div>
                <div className="comentAction">
                    <input className="commentBtn" type="button" value="评论" onClick={() => this.comment()} />
                </div>

            </div>
        )
    }

    updateInputValue = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    comment() {
        var content = this.state.value
        var json = {
            "showId": this.state.showID,
            "fromUserId": localStorage.getItem("egoUUID"),
            "content": content
        }

        postComments(json).then(res => {
            if(res) {
                console.log(res);
            }
        })

    }

    postID =(e) => {
        this.setState({"showID": e.data.data})
    }

    initUser() {
        var uuid = localStorage.getItem("egoUUID")

        if (uuid) {
            getUserInfo([uuid]).then(res => {
                if (res) {
                    console.log(res.data)
                }
            })
        } else {
            initUserInfo().then(res => {
                localStorage.setItem("egoUUID", res.data)
            })

        }
    }


    render() {
        return (
            <div>
                {this.EditComment()}
            </div>
        )
    }
}

export default EditComment