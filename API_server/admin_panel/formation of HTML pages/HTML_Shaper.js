class HTML_Shaper {

    constructor ( ) {

        this.the_HTML_code_of_the_list = null;

    }

    Generating_HTML_code_for_lists ( model_instance ) {

        model_instance.findAll ( ).then (
            data => {

                this.the_HTML_code_of_the_list = data.map (
                    object => {

                        return (
                            `<div className="List_block">
                                <div className="Image_background">
                                    <img src="${ object.dataValues.link_to_the_image }" />
                                </div>
                            </div>`
                        );

                    }
                );

            }
        )

    }

}

module.exports = HTML_Shaper;