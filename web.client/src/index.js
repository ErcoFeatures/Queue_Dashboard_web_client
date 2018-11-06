
// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';

// Workers
import {register} from './serviceWorker';

// App imports
import App from './app/App';
import './index.css';

addLocaleData([...en, ...fr]);
register();

ReactDOM.render(<App />, document.getElementById('root'));
