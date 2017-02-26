import * as React from 'react';
import {connect} from 'react-redux'

class FieldForCreatePost extends React.Component<void, void> {
    render() {
        return (
            <div>
                <input type="text" className="form-control" placeholder="Название статьи"/>
                <input type="text" className="form-control" placeholder="Текст статьи"/>
                <button className="btn btn-lg btn-block">Опубликовать</button>
            </div>
        );
    }
}

export default connect(state => state)(FieldForCreatePost);