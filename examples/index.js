// export * from './A';
// export * from './Button';


import React from 'react';
import ReactDOM from 'react-dom';
import {A, Button} from '../src/index';

const App = () => (
    <>
        <Button title="Hmm"/>
        <A>fdf</A>
    </>
);
ReactDOM.render(<App/>, document.getElementById("app"));