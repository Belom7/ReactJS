import React from 'react';
import ReactDOM from 'react-dom';

export class Per extends React.Component {
    render() {
        return <div>
            <h1>Мое задание</h1>
            <p>Хай реакт!</p>
        </div>
    }
}

ReactDOM.render(<Per/>, document.querySelector('.react'));