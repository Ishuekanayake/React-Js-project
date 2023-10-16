import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Rightend() {
  return (
    <div className='right-end left-end'>
        <div className='d-flex flex-row'>
            <Col className='word-container-right w1 d-flex justify-content-center'> <img width="15" height="15" src="https://img.icons8.com/pastel-glyph/64/download--v1.png" alt="download--v1"/>{' '}Cash</Col>
            <Col className='word-container-right w2  d-flex justify-content-center'> <img width="15" height="15" src="https://img.icons8.com/pastel-glyph/64/download--v1.png" alt="download--v1"/>{' '}Pay</Col>
            <Col className='word-container-right w2  d-flex justify-content-center'> <img width="15" height="15" src="https://img.icons8.com/pastel-glyph/64/download--v1.png" alt="download--v1"/>{' '}Card</Col>
            <Col className='word-container-right w2  d-flex justify-content-center'> <img width="15" height="15" src="https://img.icons8.com/pastel-glyph/64/download--v1.png" alt="download--v1"/>{' '}Credit</Col>
        </div>
      
        <div className='d-flex flex-row left-end'>
            <Col className='word-container p-2 m-1 my-2 d-flex justify-content-center'>Button</Col>
            <Col className='word-container p-2 m-1 my-2 d-flex justify-content-center'>Button</Col>
            <Col className='word-container p-2 m-1 my-2 d-flex justify-content-center'>Button</Col>
            <Col className='word-container p-2 m-1 my-2 d-flex justify-content-center'>Button</Col>
        </div>
        
    </div>
  )
}
