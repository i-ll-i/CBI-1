//  Подлкючение Redux
import store from '../storage/store.js';
import {
    add_a_poster
} from '../storage/actions/actions.js'

//  Подключение React-Router v6.3.0
import {
    Link
} from "react-router-dom";

const React = require('react');

//  Добавление Axios
const axios = require('axios').default;

//  Добавление коннектора Redux
const connect = require('react-redux').connect;

function AdminPanel ( props ) {

    return (
        <div className='Admin_panel_shell'>
            {
                props.article_data.map(
                    object => {
                        return (
                            <div className='Article_block' key={object.id}>
                                <img src={object.link_to_the_image} />
                                <div className='Text_subblock'>
                                    <div className='Header_subblock'>
                                        <h3>
                                            {
                                                object.heading
                                            }
                                        </h3>
                                    </div>
                                    <div className='Annotation_subblock'>
                                        <h4>
                                            {
                                                object.annotation
                                            }
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )
            }
            <div className='Text_editor_button'>
                <Link to="/texteditor">Кнопка плюса</Link>
            </div>
        </div>
    );

}

function mapStateToProps( state ) {

    return {
        article_data : state.reducerArticles
    };

}

export default connect ( mapStateToProps ) ( AdminPanel );