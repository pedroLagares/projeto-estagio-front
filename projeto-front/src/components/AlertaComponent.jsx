import React from 'react';
import { UncontrolledAlert } from 'reactstrap';

function Alerta(props) {
  return (
    <UncontrolledAlert color="info">
      {props.chidren}
    </UncontrolledAlert>
  );
}

export default Alerta;