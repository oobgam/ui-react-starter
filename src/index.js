import 'babel-core/polyfill';
import React from 'react';

class HW {
    render() {
        return (
            <div>Hello World</div>
        );
    }
}

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

React.render(
    <HW />,
    document.getElementById('root'));
