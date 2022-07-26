import axios from "axios";
import React from "react";
import {
    Link
} from "react-router-dom";

//  Добавление коннектора Redux
const connect = require('react-redux').connect;

class Upper_block extends React.Component {

    constructor ( props ) {

        super ( props );

    }

    handleSubmit = ( event ) => {
        event.preventDefault();

        axios.post ( '' , {
            params : {
                heading : this.props.data_for_the_editor.heading,
                image : this.props.data_for_the_editor.image,
                annotation : this.props.data_for_the_editor.annotation,
                text : this.props.data_for_the_editor.text
            }
        })

    }

    render ( ) {

        return (
            <div className="Upper_block">
                <div className="Return_button">
                    <Link to="/admin">Вернуться</Link>
                </div>
                <form onSubmit={
                    this.handleSubmit
                }>
                    <button type="submit">
                        Отправить
                    </button>
                </form>
            </div>
        );

    }

}

function mapStateToProps ( state ) {

    return {
        data_for_the_editor : state.reducerEditor
    }

}

export default connect ( mapStateToProps ) ( Upper_block );