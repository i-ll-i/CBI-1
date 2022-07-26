//  Подключение библиотек
const express       = require('express');
const sequelize     = require('./db/connect.js');
const Articles      = require('./db/models/Articles.js');

const HTML_Shaper = require('./admin_panel/formation of HTML pages/HTML_Shaper.js');

//  Создание экземпляра сервера
const app           = express();

const icon_storage = {
    'Plus_icon': 'http://127.0.0.1:8000/Plus.png',
    'Return_pointer': 'http://127.0.0.1:8000/Return pointer.png',
    'Bold_font': 'http://127.0.0.1:8000/Bold font.png',
    'Italic_font': 'http://127.0.0.1:8000/Italic font.png',
    'Underlined_font': 'http://127.0.0.1:8000/Underlind font.png'
};

//  Синхронизация с базой данных
try {
    sequelize.sync();
} catch ( e ) {
    console.log( e );
}

//  Добавление необходимых состовляющих ко всем запросвм
app.use (
    ( req, res, next ) => {

        res.append (
            'Access-Control-Allow-Origin',
            '*'
        );
        next( );

    }
);

//  Обработка запроса на получение изображения
app.use (
    express.static('./static/image'),
    express.static('./static/icons')
);

//  Обработка запросов на отправку статей
app.get (
    '/api/articles' ,
    ( req , res ) => {

        Articles.findAll ( ).then (
            these_articles => {

                res.send(
                    these_articles
                );

            }
        )
            .catch(e => {
                console.log(e);
            });

    }
);

//  Обработка запроса на создание статьи
app.post (
    '/api/articles' , 
    ( req , res ) => {

    }
);

//  Обработка запроса на обновление статьи
app.put (
    '/api/articles' , 
    ( req , res ) => {

    }
);

//  Обработка запроса на удаление статьи
app.delete (
    '/api/articles' ,
    ( req , res ) => {

    }
);

// app.get (
//     '/api/admin' ,
//     ( req , res ) => {

//         console.log( req.query );

//         if ( req.query.home_page === 'true' ) {

//             Articles.findAll ( ).then (
//                 data => {

//                     let HTML_code_of_the_list_of_articles = data.map(
//                         object => {

//                             return (`
//                                 <div class="List_block" key="${ object.dataValues.id }">
//                                     <div class="Image_background">
//                                         <img src="${ 
//                                             object.dataValues.link_to_the_image
//                                         }" />
//                                     </div>
//                                     <div class="Text_background">
//                                         <div class="Header_background">
//                                             <h3>
//                                                 ${ 
//                                                     object.dataValues.heading
//                                                 }
//                                             </h3>
//                                         </div>
//                                         <div class="Annotation_background">
//                                             <h4>
//                                                 ${
//                                                     object.dataValues.annotation
//                                                 }
//                                             </h4>
//                                         </div>
//                                     </div>
//                                 </div>
//                             `);

//                         }
//                     );

//                     let HTML_list_string = '';

//                     for ( let elem of HTML_code_of_the_list_of_articles ) {

//                         HTML_list_string = HTML_list_string + elem;

//                     }

//                     let Large_admin_page_wrapper = `
//                         <div class="Large_admin_page_wrapper">
//                             ${ HTML_list_string }
//                             <div class="Background_button_for_adding_an_article">
//                                 <button onclick="window.location.href = 'http://127.0.0.1:8000/api/admin?creating_an_article=true';">
//                                     <img src="${
//                                         icon_storage.Plus_icon
//                                     }"/>
//                                 </button>
//                                 <script>
//                             </div>
//                         </div>
//                     `;

//                     res.send( Large_admin_page_wrapper );

//                 }
//             )

//         }

//         if ( req.query.creating_an_article === 'true' ) {

//             let HTML_code_of_the_article_creation_page = `
//                 <script>

//                     let text_editor_code = null;

//                     let Selected_font_parameter = null;

//                     const HTML_code_of_the_settings_panel = '<div class="Editor_settings_panel"><div class="Bold_font_button"><button onclick="Selected_font_parameter = 'BF';"><img src="${icon_storage.Bold_font}" /></button></div><div class="Italic_font_button"><button onclick="Selected_font_parameter = 'IF';"><img src="${icon_storage.Italic_font}" /></button></div><div class="Underlined_font_button"><button onclick="Selected_font_parameter = 'UF';"><img src="${icon_storage.Underlined_font}" /></button></div></div>';

//                     function Activating_the_settings_panel ( ) {

//                         document.querySelector('#Editor_settings_panel').innerHtml = HTML_code_of_the_settings_panel;

//                     }

//                     function Deactivating_the_settings_panel ( ) {

//                         document.querySelector('#Editor_settings_panel').innerHtml = "";

//                     }

//                 </script>
//                 <div class="Large_wrapper_of_the_article_creation_page">
//                     <div class="Upper_block">
//                         <div class="The_backing_of_the_return_button">
//                             <button onclick="window.location.href = 'http://127.0.0.1:8000/api/admin?home_page=true';">
//                                 <img src="${
//                                     icon_storage.Return_pointer
//                                 }"/>
//                             </button>
//                         </div>
//                     </div>
//                     <div class="Editor">
//                         <form>
//                             <input type="text" id="Header_field" name="Header_field" />
//                             <input type="file" id="Image_field" name="Image_field" multiple="multiple" />
//                             <textarea id="Annotation_field" ></textarea>
                            
//                             <div class="Text_editor">
//                                 <div class="Entered_text"></div>
//                                 <div class="Editor">
//                                     <textarea
//                                         id="Article_entry-field"
//                                         name="Article_entry-field"
//                                         onfocus="Activating_the_settings_panel( );"
//                                         onblur="Deactivating_the_settings_panel( );"
//                                     ></textarea>
//                                     <div class="Editor_settings_panel"></div>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             `;

//             res.send( HTML_code_of_the_article_creation_page );

//         }
//     }
// );

//  Прослушивание запросов к серверу
app.listen (
    8000 ,
    ( ) => {
        console.log( 'Server working!' );
    }
);