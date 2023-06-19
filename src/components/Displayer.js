import { Container} from "react-bootstrap";
import { Pause, Menu, Filter, Calendar1, ArrowCircleDown,Profile2User } from "iconsax-react";

function Displayer(){

    return(
            <Container className="mt-3">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <div style={{position:"relative",left:"22px",bottom:"2px"}}>
                        <Filter size="16" color="#555555"/>
                    </div>
                    <div>
                        <input placeholder="     Filter"/>
                    </div>
                    <div style={{position:"relative",right:"22px",bottom:"2px"}}>
                        <ArrowCircleDown size="16" color="#555555" variant="Outline"/>
                    </div>
                    <div style={{position:"relative",left:"30px",bottom:"2px"}}>
                        <Calendar1 size="16" color="#555555"/>
                    </div>
                    <div className="ms-2">
                        <input placeholder="     Today"/>
                    </div>
                    <div style={{position:"relative",right:"22px",bottom:"2px"}}>
                        <ArrowCircleDown size="16" color="#555555" variant="Outline"/>
                    </div>

                </div>
                <div className="d-flex align-items-center">
                    <div  style={{position:"relative",left:"26px",bottom:"2px"}}>
                    <Profile2User size="16" color="#555555" variant="Outline"/>
                    </div>
                    <div style={{borderRight:"1px solid black",paddingRight:"10px",marginRight:"10px"}}>
                        <input placeholder="      Share"/>
                    </div>
                    <div style={{backgroundColor:"#BA68C8",marginRight:"10px"}}>
                        <Pause color="#d9e3f0"/>
                    </div>
                    <div>
                    <Menu size="16" color="#555555"/>
                    </div>

                </div>
            </div>
            </Container>
       
    )
}

export default Displayer;