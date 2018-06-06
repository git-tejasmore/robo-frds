import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {robots} from './Components/robots';
import registerServiceWorker from './registerServiceWorker';
import App from './Containers/App';
import 'tachyons';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
