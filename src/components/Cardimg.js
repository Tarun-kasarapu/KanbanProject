import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container , Row, Col} from 'react-bootstrap';
import { Message,Folder2 } from 'iconsax-react';


function Noterimg({info}){

    return(
      
    <Container>
      <Row>
        <Col>
    <Card >
      
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{info.timetocomplete}</Card.Subtitle>
        
        <Card.Title>{info.title}</Card.Title>
        {
            info.isimage=="YES"?
            <Card.Img variant="top" alt={info.about} src="holder.js/100px180" />:
            <Card.Text>{info.about}</Card.Text>
        }
        <div className='d-flex align-items-center justify-content-between'>
          <div>

          </div>
          <div >
            
            <Card.Link href="#"><Message size="16" color="#555555" variant="Outline"/></Card.Link>
            <Card.Link href="#">{info.noofcomments}comments</Card.Link>
            
            
            <Card.Link href="#"><Folder2 size="16" color="#555555"/></Card.Link>
            <Card.Link href="#">{info.nooffiles}files</Card.Link>
            
          </div>
        </div>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
  );
}


export default Noterimg;