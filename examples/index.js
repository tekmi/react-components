// export * from './A';
// export * from './Button';


import React from 'react';
import ReactDOM from 'react-dom';
import {A, Button} from '../src/index';
import {Container} from "../src/Container";
import {Columns} from "../src/Columns";

const App = () => (
    <Container fluid style={{backgroundColor: 'red'}}>
        <Columns>
            <Columns.Column size={1}>
                <Button title="Hmm"/>
            </Columns.Column>
            <Columns.Column size={9}>
                <A>fdf</A>
            </Columns.Column>
            <Columns.Column style={{backgroundColor: 'green'}}>
                Hmmmm
            </Columns.Column>
        </Columns>
    </Container>
);
ReactDOM.render(<App/>, document.getElementById("app"));