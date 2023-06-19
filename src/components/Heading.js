import { Container } from "react-bootstrap";
import { Link21, AddSquare } from "iconsax-react";

function Heading(){
    return (
            <Container className="mt-3">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <h1>Mobile App</h1>
                        <div style={{backgroundColor:"#BA68C8",borderRadius:"5px",marginLeft:"10px"}}><Link21 color="#555555" variant="Outline"/></div>
                    </div>
                    <div className="d-flex align-items-center">
                        
                        <div><AddSquare size="24" color="#ba68c8"/></div>
                        <div className="ms-2">invite</div>
                    </div>
                </div>
            </Container>
       
    )
}

export default Heading;