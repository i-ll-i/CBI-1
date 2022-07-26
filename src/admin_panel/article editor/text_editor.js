import React from "react";

export default class Text_editor extends React.Component {

    constructor ( props ) {

        super ( props );

        this.state = {
            selected_function : null,
            current_offer : 0,
            text_section : 0,
            offer_tree : [],
            string_object : {}
        };
        this.link_to_the_input_block = null;

    }

    componentDidMount ( ) {

        this.link_to_the_input_block = document.querySelector('#main_input_field');

        let observer = new MutationObserver(
            mutationRecord => {

                const line_entry = ( data ) => {

                    this.setState (
                        {
                            string_object: {
                                [`${ data }_${this.state.text_section}`]: mutationRecord[0].target.data
                            }
                        }
                    );

                };

                switch ( this.state.selected_function ) {
                    case 'BF':

                        line_entry('BF');

                        break;

                    case 'IF':

                        line_entry('IF');

                        break;

                    case 'UF':

                        line_entry('UF');

                        break;
                
                    default:

                        line_entry('WO');

                }

            }
            
        );

        observer.observe (
            this.link_to_the_input_block ,
            {
                childList : true ,
                subtree : true ,
                characterDataOldValue : true
            }
        );

    }

    render ( ) {

        return (
            <div className="Text_editor">
                <div className="Shell_of_the_entered_blocks">
                    {
                        this.state.offer_tree.map(
                            ( object , index ) => {

                                if ( object['WO_0'] !==  undefined ) {

                                    return (
                                        <div key={index}>
                                            <h3>
                                                {
                                                    object['WO_0']
                                                }
                                            </h3>
                                        </div>
                                    );

                                }

                            }
                        )
                    }
                </div>
                <div className="Input_field_substrate">
                    <div className="Main_input_field">
                        <div
                            id="main_input_field"
                            contentEditable={ true }
                            onKeyDown={
                                ( e ) => {

                                    if ( e.code === 'Enter' ) {

                                        let updating_the_status_tree;
                                        let new_offer = this.state.current_offer + 1;

                                        if (this.state.offer_tree.length === 0) {

                                            updating_the_status_tree = Array(this.state.offer_tree.push(this.state.string_object));

                                        }

                                        if (this.state.offer_tree.length !== 0) {

                                            updating_the_status_tree = Array(this.state.offer_tree[this.state.current_offer] = this.state.string_object);

                                        }

                                        this.setState(
                                            {
                                                current_offer: new_offer,
                                                offer_tree: updating_the_status_tree,
                                            }
                                        );

                                        console.log( this.state.offer_tree );

                                        this.link_to_the_input_block.textContent = '';

                                    }

                                }
                            }
                        ></div>
                    </div>
                    <div className="Function_panel">
                        <div className="Bold_font_button">
                            <button
                                onClick={
                                    ( e ) => {

                                        if ( this.state.selected_function !== 'BF' ) {

                                            this.setState (
                                                {
                                                    selected_function : 'BF'
                                                }
                                            );

                                        }

                                        if ( this.state.selected_function === 'BF' ) {

                                            this.setState (
                                                {
                                                    selected_function: null
                                                }
                                            );

                                        }

                                    }
                                }
                            >Жирный шрифт</button>
                        </div>
                        <div className="Italics_button">
                            <button
                                onClick={
                                    ( e ) => {

                                        if ( this.state.selected_function !== 'IF' ) {

                                            this.setState (
                                                {
                                                    selected_function : 'IF'
                                                }
                                            );

                                        }

                                        if ( this.state.selected_function === 'IF' ) {

                                            this.setState (
                                                {
                                                    selected_function : null
                                                }
                                            );

                                        }

                                    }
                                }
                            >Курсив</button>
                        </div>
                        <div className="Underline_button">
                            <button
                                onClick={
                                    ( e ) => {

                                        if ( this.state.selected_function !== 'UF' ) {

                                            this.setState (
                                                {
                                                    selected_function: 'UF'
                                                }
                                            );

                                        }

                                        if ( this.state.selected_function === 'UF' ) {

                                            this.setState (
                                                {
                                                    selected_function : null
                                                }
                                            );

                                        }

                                    }
                                }
                            >Подчёркивание</button>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}