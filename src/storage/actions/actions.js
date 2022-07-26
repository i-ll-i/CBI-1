export function adding_a_article ( data ) {

    return {
        type: 'ADDING_A_ARTICLE',
        data
    }

}

export function article_title ( heading ) {

    return {
        type : 'ARTICLE_TITLE',
        heading
    }

}

export function abstract_of_the_article ( annotation ) {

    return {
        type : 'ABSTRACT_OF_THE_ARTICLE',
        annotation
    }

}

export function article_image ( image ) {

    return {
        type : 'ARTICLE_IMAGE',
        image
    }

}

export function the_text_of_the_article ( text ) {

    return {
        type : 'THE_TEXT_OF_THE_ARTICLE',
        text
    }

}