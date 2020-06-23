import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './components/Tweet'

ReactDOM.render(
        <Tweet />,
        document.getElementById('root')
)

if (module.hot) {
    module.hot.accept()
}