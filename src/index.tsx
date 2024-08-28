import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import './styles/global.css';
import './styles/layout.css';
import './styles/tasks.css';
import './styles/forms.css';
import './styles/calendar.css';




ReactDOM.render(
  <Provider store={store}> {/* Wrap your App with Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
