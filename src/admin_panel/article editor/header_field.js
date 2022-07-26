import store from '../../storage/store.js';
import {
    article_title
} from '../../storage/actions/actions.js'

//  Добавление коннектора Redux
const connect = require('react-redux').connect;

function Header_field ( props ) {

    return (
        <div className="Header_field">
            <input
                type="text"
                value={
                    props.data_for_the_editor.heading
                }
                onChange={
                    ( event ) => {
                        store.dispatch (
                            article_title (
                                event.target.value
                            )
                        );
                    }
                } />
        </div>
    );

}

function mapStateToProps ( state ) {

    return {
        data_for_the_editor : state.reducerEditor
    }

}

export default connect ( mapStateToProps ) ( Header_field );