import React from 'react';
import ReactDOM from 'react-dom';
import CrazyText from './CrazyText';
import './index.css';

ReactDOM.render(
  <div style={{ marginTop: '10rem', textAlign: 'center' }}>
    <CrazyText textColor="blue" degsToRotate={-30}>
      This is CRAZY!
    </CrazyText>
    <CrazyText textColor="red" degsToRotate={45}>
      This is MORE CRAZY!
    </CrazyText>
  </div>,
  document.getElementById('root')
);
