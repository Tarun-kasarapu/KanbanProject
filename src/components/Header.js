import {Button, Container, Form, Image, Row, Col} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faHome,faCalendar } from '@fortawesome/free-solid-svg-icons';
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Calendar2 } from 'iconsax-react';
import { Colorfilter, ArrowLeft2 , ArrowCircleLeft, ArrowCircleRight, MessageQuestion, NotificationBing, SearchNormal, ArrowCircleDown } from "iconsax-react";

function Header({sizehandlermain}) {
  const [sz,setsz]=useState(1);
  const sizehandler=()=>{
      if(sz==1){
           
            sizehandlermain(2);
            setsz(2);
      }else{
            sizehandlermain(1);
            setsz(1);
      }
  }
   
  return (
    <>
    {sz==2?
    <Row className="border-bottom">
    <Col md={sz}  style={{borderRight:"2px solid #F5F5F5"}} > 
        
              <div style={{marginLeft:"20px",marginTop:"7px",marginRight:"5px"}}className=" d-flex align-items-center justify-content-between ">
            
              <div className="p-2"><Colorfilter color="#ba68c8" variant="Bulk"/>{" "}Project M</div>
              <div onClick={sizehandler}><ArrowCircleLeft size="32" color="#555555" variant="Outline"/></div>
              </div>
            
    </Col>
    
    <Col md={12-sz}  >    
    <div>

      <Container  className="d-flex">
      <div className="d-flex justify-content-start">
      <div style={{position:"relative",left:"30px",top:"15px"}}>
      <SearchNormal size="16" color="#555555" variant="TwoTone"/>
      </div >  
      <div style={{marginTop:"10px"}}>
      <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="     Search for anything...."
                    className="me-2"
                    aria-label="Search"
                  />
      
        </Form>  
        </div>
        </div>        
        
       
        <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">
              <Calendar2 style={{position:"relative",top:"10px"}} size="32" color="#000000" variant="Outline"/>
            </Nav.Link>
            <Nav.Link href="#action2">
            <MessageQuestion style={{position:"relative",top:"10px"}} size="32" color="#555555" variant="Linear"/>
            </Nav.Link>
            <Nav.Link href="#action3">
            <NotificationBing style={{position:"relative",top:"10px"}} size="32" color="#555555"/>
            </Nav.Link>
            <Nav.Link style={{position:"relative",top:"5px"}} href="#action3">
                  <span style={{fontWeight: 'bold'}}>
                      Anima Agarwal
                  </span>
                  <br/>
                  U.P, India
  
            </Nav.Link>
            <Image  style={{position:"relative",top:"15px",width:"37px",height:"38px", backgroundColor:"black"}} roundedCircle />
            <ArrowCircleDown style={{position:"relative",top:"20px"}} size="24" color="#555555" variant="Outline"/>
          </Nav>
                
     
        
        
    </Container>  
    </div>
    
    </Col>
    </Row>:

<div className="border-bottom">

<Container className="d-flex">

<div className="d-flex justify-content-start">
<div style={{position:"relative",left:"10px",top:"15px"}} onClick={sizehandler}><ArrowCircleRight size="32" color="#555555" variant="Outline"/></div> 

    <div className="d-flex justify-content-start">
      <div style={{position:"relative",left:"30px",top:"15px"}}>
      <SearchNormal size="16" color="#555555" variant="TwoTone"/>
      </div >  
      <div style={{marginTop:"10px"}}>
      <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="     Search for anything...."
                    className="me-2"
                    aria-label="Search"
                  />
      
        </Form>  
        </div>
        </div> 
            
      </div>
  
        
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">
              <Calendar2 style={{position:"relative",top:"10px"}} size="32" color="#000000" variant="Outline"/>
            </Nav.Link>
            <Nav.Link href="#action2">
            <MessageQuestion style={{position:"relative",top:"10px"}} size="32" color="#555555" variant="Linear"/>
            </Nav.Link>
            <Nav.Link href="#action3">
            <NotificationBing style={{position:"relative",top:"10px"}} size="32" color="#555555"/>
            </Nav.Link>
            <Nav.Link style={{position:"relative",top:"5px"}} href="#action3">
                  <span style={{fontWeight: 'bold'}}>
                      Anima Agarwal
                  </span>
                  <br/>
                  U.P, India
  
            </Nav.Link>
            <Image  style={{position:"relative",top:"15px",width:"37px",height:"38px", backgroundColor:"black"}} roundedCircle />
            <ArrowCircleDown style={{position:"relative",top:"20px"}} size="24" color="#555555" variant="Outline"/>
          </Nav>
          
  
  
  
</Container>
</div>
     
    }
    </>
    
  );
}

export default Header;