import React from "react";

//  Добавление коннектора Redux
const connect = require('react-redux').connect;

class Image_field extends React.Component {

    constructor ( props ) {

        super ( props );

    }

    render ( ) {

        return (
            <div className="Image_field">
                <input type="file" />
            </div>
        );

    }

}

function mapStateToProps ( state ) {

    return {
        data_for_the_editor : state.reducerEditor
    }

}

export default connect ( mapStateToProps ) ( Image_field );