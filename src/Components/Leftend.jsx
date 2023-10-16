import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Leftend() {
  return (
    <div className='left-end'>
        <div className='d-flex flex-row'>
            <Col className='word-container p-2 m-1 my-2'> <span>New Button </span> <br/> <span>Rs.1000.00 </span></Col>
            <Col className='word-container p-2 m-1 my-2'> <span>Discount </span> <br/> <span>Rs.0.00 </span></Col>
            <Col className='word-container p-2 m-1 my-2'> <span>Tax </span> <br/> <span>Rs.99.00 </span></Col>
            <Col xs={4} className='word-containern py-2'> Item Count : 400</Col>
        </div>

        <div className='d-flex flex-row'>
            <Col className='word-container p-2 m-1 my-2'> <span>New Button </span> <br/> <span>Rs.1000.00 </span></Col>
            <Col className='word-container p-2 m-1 my-2'> <span>Sipping </span> <br/> <span>Rs.1000.00 </span></Col>
            <Col className='word-container p-2 m-1 my-2'> <span>Packaging </span> <br/> <span>Rs.1000.00 </span></Col>
            <Col xs={4} className='word-container p-2 my-2'> <span>Total </span> <br/> <span>Rs.100000.00 </span></Col>
        </div>
    </div>
  )
}
