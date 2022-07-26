export const reducerArticles = ( state = [] , action ) => {

    switch ( action.type ) {
        case 'ADDING_A_ARTICLE':
            return [
                ...state,
                {
                    id: action.data.id,
                    heading: action.data.heading,
                    link_to_the_image: action.data.link_to_the_image,
                    annotation: action.data.annotation,
                    text: action.data.HTMLtext,
                    createdAt: action.data.createdAt,
                    updatedAt: action.data.updatedAt
                }
            ]
        
        default:
            return state;
    }

};

export const reducerEditor = ( state = {} , action ) => {

    switch ( action.type ) {
        case 'ARTICLE_TITLE':
            return state.heading = action.heading;

        case 'ARTICLE_IMAGE':
            return state.image = action.image;

        case 'ABSTRACT_OF_THE_ARTICLE':
            return state.annotation = action.annotation;

        case 'THE_TEXT_OF_THE_ARTICLE':
            return state.text = action.text;

        default:
            return state;
    }

};