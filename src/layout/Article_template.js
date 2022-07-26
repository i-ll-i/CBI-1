import logo from "../static/logo/Logo.png";
import logoFooter from "../static/logo/Logo-footer.png";
import {
    Link,
    useParams
} from "react-router-dom";
import React, {
    useEffect
} from "react";

//  Подлкючение Redux
import store from "../storage/store.js";
import {
    adding_article_data,
} from "../storage/actions/actions.js";

//  Создание экземпляра Axios
const axios = require("axios").default;

//  Добавление коннектора Redux
const connect = require("react-redux").connect;

//  URI-адресс API-сервера
const server_API_URI = "http://127.0.0.1:8000";

function Article_template ( props ) {

    const article_id = window.location.href.split('/')[3];

    try {

        document.querySelector("style").innerHTML = require("./template_styles.css");

        return (
            <div className="Article_template">
                <header className="Upper_block">
                    <div className="Block_with_logo">
                        <img src={
                            logo
                        } />
                    </div>
                </header>
                <section className="Content_block">
                    <div className="Elements_of_the_article">
                        <div className="Article_title">
                            {
                                props.article_data[ article_id - 1].heading
                            }
                        </div>
                        <div className="Article_code">
                                // Место для вставки кода
                        </div>
                    </div>
                </section>
                <footer className="Lower_block">
                    <div className="Full_logo">
                        <img src={
                            logoFooter
                        } />
                    </div>
                    <div className="Email_block">
                        <h4>
                            ronomrill@yandex.ru
                        </h4>
                    </div>
                </footer>
            </div>
        );

    } catch {

        document.querySelector("style").innerHTML = require("./Error_Page_Styles.css");

        return (
            <div className="Article_template">
                <header className="Upper_block">
                    <div className="Block_with_logo">
                        <img src={
                            logo
                        } />
                    </div>
                </header>
                <section className="Content_block">
                    <div className="Error_field">
                        <h3>
                            К сожалению, статья не найдена...
                        </h3>
                        <div className="Link_to_the_article">
                            <Link to="/">
                                Вернуться
                            </Link>
                        </div>
                    </div>
                </section>
                <footer className="Lower_block">
                    <div className="Full_logo">
                        <img src={
                            logoFooter
                        } />
                    </div>
                    <div className="Email_block">
                        <h4>
                            ronomrill@yandex.ru
                        </h4>
                    </div>
                </footer>
            </div>
        );

    }

}

function mapStateToProps( state ) {

  return {
    article_data: state.reducerArticles
  };

}

export default connect( mapStateToProps ) ( Article_template );
