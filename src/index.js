//  Подключение React и библиотек для него
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//  Подключение Главной страницы
import App from './App.js';
import Article_template from './layout/Article_template.js'

import AdminPanel from './admin_panel/admin_panel.js'
import ArticleEditor from './admin_panel/article editor/article_editor.js'

//  Подлкючение Redux
import {
  Provider
} from 'react-redux';
import store from './storage/store.js';
import {
  adding_a_article
} from './storage/actions/actions.js'

//  Добавление Axios
const axios = require('axios').default;

//  Создание экземпляра React
const root = ReactDOM.createRoot (
  document.getElementById('root')
);

//  URI-адресс API-сервера
const server_API_URI = 'http://127.0.0.1:8000';

//  Отправка запроса на получение данных всех постеров
axios.get(
  server_API_URI + '/api/articles',
  {
    params: {
      posters_only: true
    }
  }
).then(
  res => {

    for (let object of res.data) {

      store.dispatch(
        adding_a_article(
          {
            id: object.id,
            heading: object.heading,
            link_to_the_image: object.link_to_the_image,
            annotation: object.annotation,
            text: object.HTMLtext,
            createdAt: object.createdAt,
            updatedAt: object.updatedAt
          }
        )
      );

    }

  }
).catch(
  e => {
    console.log(e);
  }
);

//  Корневой рендер
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={ store }>
        <Routes>
          <Route path='/' element={
            <App />
          } />
          <Route path='/:article_id' element={
            <Article_template />
          } />
          <Route exact path='/admin' element={
            <AdminPanel />
          } />
          <Route exact path='/articleeditor' element={
            <ArticleEditor />
          } />
        </Routes>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
