import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductDisplay from './ProductDisplay';
import Scrolldown from './Scrolldown';
import Leftend from './Leftend';
import Rightend from './Rightend';

export default function Content() {
  return (
    <div className='content-div px-4'>
        <Row>
            <Col xs={7}>
                <div>
                    <Row className='coldiv-1 pt-3 pb-3'>
                        <Col xs={6}>
                        <div className='d-flex flex-row px-2'>
                        <div className='conimgcol-1'>
                            <img width="15" height="15" src="https://img.icons8.com/puffy/32/experimental-user-puffy.png" alt="experimental-user-puffy"/>
                        </div>
                        <div className='select-2'>
                        <Scrolldown/>
                        </div>
                        <div className='conimgcol-1'>
                            <img width="15" height="15" src="https://img.icons8.com/ios/50/plus--v1.png" alt="plus--v1"/>
                        </div>
                        </div>
                        </Col>

                        <Col xs={6}>
                        <div className='d-flex flex-row px-2'>
                        <div className='conimgcol-1'>
                            <img width="15" height="15" src="https://img.icons8.com/office/16/qr-code--v1.png" alt="qr-code--v1"/>
                        </div>
                        <div className='select-2'>
                        <Scrolldown/>
                        </div>
                        <div className='conimgcol-1'>
                            <img width="15" height="15" src="https://img.icons8.com/ios/50/plus--v1.png" alt="plus--v1"/>
                        </div>
                        </div>
                        </Col>
                    </Row>

                    <Row className='px-2 pb-3 coldiv-1'>                   
                        <Col>
                        <div className='select-2'>
                        <Scrolldown/>
                        </div>
                        </Col>
                        <Col>
                        <div className='select-2'>
                        <Scrolldown/>
                        </div>
                        </Col>
                        <Col>
                        <div className='select-2'>
                        <Scrolldown/>
                        </div>
                        </Col>
                    </Row>
                    <Row className='aa mx-0 py-4' style={{backgrondColor:'yellow'}}>
                        <Col>Product</Col>
                        <Col>Quantity</Col>
                        <Col>Unit Price</Col>
                        <Col>Line Price</Col>
                    </Row>
                    <Row>
                        <div className='py-1 bb'>
                            <center>Please Select Product Item</center>
                        </div>
                    </Row>
                    <Row className=''><Leftend/></Row>
                </div>
            </Col>



            <Col xs={5}>
            <div className='d-flex flex-row px-4'>
                <Scrolldown className='m-1'/>
                <Scrolldown/>
                <Scrolldown/>
            </div>
            <div className='cc'>
                <ProductDisplay/>
            </div>
            <Row><Rightend/></Row>    
            </Col>
        </Row>
    </div>
  )
}
