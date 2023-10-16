import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Header() {
  return (
    <div className='header-div px-4 pt-4 align-self-stretch'>
        <Row>
            <Col xs={2}>
                <div className='d-flex flex-row'>
                <div className='img-sun mt-1'>
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/sun--v1.png" alt="sun--v1"/>
                </div>
                <div className='select-1'>
                <select class="form-select" aria-label="Default select example">
                <option selected>Please Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
                </div>
                </div>
            </Col>
            <Col xs={2}><div className='mt-1'>11/1/2023 | Wednessday</div></Col>
            <Col xs={6}><div className=''><h3 className='heading'>STOREMATE</h3></div></Col>
            <Col xs={2}>ABCDEFG</Col>
        </Row>
        <hr/>
    </div>
  )
}
