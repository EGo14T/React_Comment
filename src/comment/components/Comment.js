import data from '../public/content.json'
import React from 'react';
import '../style/Comment.scss'
import EditComment from './EditComment'
import { getComments } from '../apis/api'

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    }
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.getHeight()
    //console.log(window.parent)
    this.getComment()
  }

  ContentItem = () => {
    var contentItem = this.state.content.map((item) =>
      <div className="commentGrid" key={item.replyComments.id} >
        <img
          className="avatar"
          src={item.replyComments.avatar}
        />
        {item.originComments == null &&
          <div className="commentItem">
            <span className="fromName">{item.replyComments.nickName}：</span>
            <span className="content">{item.replyComments.content}</span>
          </div>
        }
        {item.originComments != null &&
          <div className="commentItem">
            <span className="fromName">{item.replyComments.nickName}：</span>
            <span className="content">{item.replyComments.content}</span>
            <div className="reply">
              <span className="fromName">@{item.originComments.nickName}：</span>
              <span className="content">{item.originComments.content}</span>
            </div>
          </div>
        }
        <div></div>
        <p className="createTime">
          {item.replyComments.createTime}
        </p>
      </div>
    )
    return contentItem;
  }

  componentDidUpdate() {
    this.getHeight()
  }

  getHeight() {
    if (this.ref.current !== null) {
      let height = (this.ref.current.offsetHeight)
      window.top.postMessage(height, '*')
    }
  }

  getComment() {
    getComments(['EGobzUjMY3sM3']).then(data => {
      this.setState({ content: data.data })
    })
  }

  render() {
    return (
      <div className="container" ref={this.ref}>
        <div className="main">
          <EditComment />
          {this.ContentItem()}
        </div>
      </div>
    )
  }
}

export default Comment