//  Подключение логотипов
import logo from './static/logo/Logo.png';
import logoFooter from './static/logo/Logo-footer.png';

//  Подключение React-Router v6.3.0
import {
  Link
} from "react-router-dom";

//  Добавление Axios
const axios = require('axios').default;

//  Добавление React и компонентов
const React = require('react');

//  Добавление коннектора Redux
const connect = require('react-redux').connect;

function App ( props ) {

  require('./index.css');

  return (
    <div className="App">
      <header className="Upper_block">
        <div className='Block_with_logo'>
          <img src={
            logo
          } />
        </div>
      </header>
      <section className="Content_block">
        {
          props.article_data.map(
            article => {
              return (
                <div className="Article_block" key={ article.id }>

                  <div className='Article_title'>
                    <h2>
                      {
                        article.heading
                      }
                    </h2>
                  </div>

                  <div className="Photo_of_the_article">
                    <img src={
                      article.link_to_the_image
                    } />
                  </div>

                  <div className='Abstract_of_the_article'>
                    <h3>
                      {
                        article.annotation
                      }
                    </h3>
                  </div>

                  <div className='Link_to_the_article'>
                    <Link to={
                      `/${ article.id }`
                    } >
                      Читать
                    </Link>
                  </div>

                </div>
              );
            }
          )
        }
      </section>
      <footer className='Lower_block'>
        <div className='Full_logo'>
          <img src={
            logoFooter
          }/>
        </div>
        <div className='Email_block'>
          <h4>
            ronomrill@yandex.ru
          </h4>
        </div>
      </footer>
    </div>
  );

}

function mapStateToProps( state ) {

  return {
    article_data: state.reducerArticles
  };

}

export default connect( mapStateToProps )( App );
