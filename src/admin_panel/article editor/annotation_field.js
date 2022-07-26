import React from "react";

import store from '../../storage/store.js';
import {
    abstract_of_the_article
} from '../../storage/actions/actions.js'

export default class Annotation_field extends React.Component {

    constructor ( props ) {

        super ( props );

        this.state = {
            text : 'Начните вводить текст статьи...'
        }

    }

    componentDidMount ( ) {

        const input_field = document.querySelector ( '#annotation_field' );

        let observer = new MutationObserver (
            mutationRecord => {

                store(
                    abstract_of_the_article(
                        mutationRecord[0].target.data
                    )
                );
            }
        );

        observer.observe (
            input_field ,
            {
                childList               : true ,
                subtree                 : true ,
                characterDataOldValue   : true
            }
        );

    }

    render ( ) {

        return (
            <div className="Annotation_field">
                <div
                    id="annotation_field"
                    contentEditable={ true }
                    onFocus={
                        ( ) => {

                            if ( this.state.text !== '' ) {

                                this.setState (
                                    {
                                        text : ''
                                    }
                                );

                            }

                        }
                    }
                    onBlur={
                        ( ) => {

                            if ( this.state.text === '' ) {

                                this.setState (
                                    {
                                        text : 'Начните вводить текст статьи...'
                                    }
                                );

                            }

                        }
                    }
                ></div>
            </div>
        );

    }

}