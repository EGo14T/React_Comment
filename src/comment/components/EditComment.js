import React from 'react';
import '../style/Comment.scss'

class EditComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    EditComment = () => {
        return (
            <div className="editArea">
                <div>
                <textarea rows="3" cols="200" maxlength="10"/>
                </div>
                {/* <Button type="primary">Primary Button</Button> */}
            </div>
        )
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