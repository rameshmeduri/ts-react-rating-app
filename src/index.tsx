import React from 'react';
import { render } from 'react-dom';
import { Container } from 'react-bootstrap';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

const Main = () => (
  <Container>
    <App />
  </Container>
);

render(<Main />, document.getElementById('root'));
