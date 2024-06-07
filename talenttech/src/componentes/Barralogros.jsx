import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


function Barralogros() {
const now = 60;
  return (
    <div>
        <ProgressBar variant='success' now={now} label={`${now}%`} />
    </div>
  )
}

export default Barralogros