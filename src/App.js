
import Header from './components/Header.js';
import { Container } from 'react-bootstrap';
import Home from "./components/Home.js";
import Displayer from './components/Displayer.js';
import Heading from "./components/Heading.js";
import Sidebar from './components/Sidebar.js';
import { useState } from 'react';
import { Row,Col, Button, Card} from 'react-bootstrap';
import { Category, Message, TaskSquare, Profile2User , Setting2 , StopCircle, AddSquare} from 'iconsax-react';
function App() {
  const [sz,setsz]=useState(1);
  
  const sizehandlermain=(data)=>{
      console.log(data);
      setsz(data);
  }
 
  return (
      <>
      {
        sz==2?
        <div>
        <Header  sizehandlermain={sizehandlermain}/>
        <Row>
          <Col md={sz} style={{borderRight:"2px solid #F5F5F5"}}>
            
            <div style={{borderBottom:"2px solid #F5F5F5",marginLeft:"20px",marginTop:"10px"}}>
              <div className='p-2'><Category size="24" color="#555555" variant="Outline"/>{"  "}Home</div>
              <div className='p-2'><Message color="#555555"/>{"  "}Messages</div>
              <div className='p-2'><TaskSquare color="#555555"/>{"  "}Tasks</div>
              <div className='p-2'><Profile2User color="#555555"/>{"  "}Members</div>
              <div className='p-2'><Setting2 color="#555555"/>{"  "}Settings</div>
            </div>
            <div style={{marginLeft:"20px"}}>
             
              <div className='p-2 d-flex justify-content-between align-items-center'>
                <div>My Projects</div>
                <div><AddSquare size="16" color="#ba68c8"/></div>
                </div>
              <div className='p-2'><StopCircle size="12" color="green" variant="Bulk"/>{"  "}Mobile App</div>
              <div className='p-2'><StopCircle size="12" color="yellow" variant="Bulk"/>{"  "}Website Redesign</div>
              <div className='p-2'><StopCircle size="12" color="#ba68c8" variant="Bulk"/>{"  "}Design System</div>
              <div className='p-2'><StopCircle size="12" color="blue" variant="Bulk"/>{"  "}Wireframes</div>

            </div>

        </Col>
      <Col md={12-sz}>
        <Heading/>
        <Displayer/>
        <Home/>
      
        
      
      </Col>
      </Row>
      </div>:
      <div>
        <Header   sizehandlermain={sizehandlermain}/>
        <Heading/>
        <Displayer/>
        <Home/>
      </div>
      
      }
      </>
    
  );
}

export default App;
