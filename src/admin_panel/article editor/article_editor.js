//  Подключение React-Router v6.3.0
import React from "react";
import ReactDomServer from 'react-dom/server'
import {
    Link
} from "react-router-dom";

import Upper_block from "./upper_block.js";
import Header_field from "./header_field.js"
import Image_field from "./image_field.js";
import Annotation_field from "./annotation_field.js";
import Text_editor from "./text_editor.js";

class TextEditor extends React.Component {

    constructor ( props ) {

        super ( props );

        this.state = {
            general_data : {
                selected_field: null,
            },
            title_text : null ,
            image_file : null ,
            abstract_text : null ,
            article_editor : {
                entered_text : [] ,
                selected_function : null ,
                article_entry_field : {
                    input_text: 'Начните вводить текст статьи...',
                }
            },
            data_being_sent : {
                heading : null,
                image : null,
                annotation : null,
                text : null
            }
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange ( event ) {

        console.log( typeof event.target.innerText );

        if ( this.state.general_data.selected_field === 'introduction_of_the_text_of_the_article' ) {

            this.setState(
                {
                    article_editor: {
                        article_entry_field: {
                            input_text : event.target.value
                        }
                    }
                }
            );

        }

        if ( this.state.selected_field !== 'entered_text' ) {

            let selected_field = this.state.selected_field;

            this.setState({
                [selected_field]: event.target.value
            });

        }

    }

    render ( ) {

        return (
            <div className="Text_editor_wrapper">

                {/* Блок с кнопками перехода и отправки статьи */}
                <Upper_block />

                {/* Блок с редактором статьи */}
                <div className="Editor">
                    {/* Поле ввода заголовка статьи */}
                    <Header_field />

                    {/* Поле загрузки файла изображения */}
                    <Image_field />

                    {/* Поле ввода аннотации */}
                    <Annotation_field />

                    {/* Редактор текста статьи */}
                    <Text_editor />
                </div>
            </div>
        );

    }

}

export default TextEditor;