import { Container, Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

import data from "./input.js";

import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import Noterimg from "./Cardimg.js";
import { useState } from "react";
import _ from "lodash";


const item1= {
    "id":1,
    "timetocomplete": "Low",
    "title"  : "Brainstroming",
    "about"  : "Brainstroming brings team members diverse experience into play",
    "noofcomments":12,
    "nooffiles":0,
    "isimage":"NO",
};

const item2={
    "id":2,
    "timetocomplete": "High",
    "title"  : "Research",
    "about"  : "User research helps you to create an optimal product for users",
    "noofcomments":10,
    "nooffiles":3,
    "isimage":"NO",
};

const item3={
    "id":3,
    "timetocomplete": "High",
    "title"  : "Wireframes",
    "about"  : "Low fidelity wireframes include the most basic content and visuals ",
    "noofcomments":12,
    "nooffiles":0,
    "isimage":"NO",
}

const item4={
    "id":4,
    "timetocomplete": "Low",
    "title"  : "onboarding illustration",
    "image"  : "/image/",
    "noofcomments":14,
    "nooffiles":15,
    "isimage":"YES",
};

const item5={
    "id":5,
    "timetocomplete": "Low",
    "title"  : "Moodboard",
    "image"  : "/image/",
    "noofcomments":9,
    "nooffiles":10,
    "isimage":"YES",
};

const item6= {
    "id":6,
    "timetocomplete": "Completed",
    "title"  : "Mobile App Design",
    "image"  : "/image/",
    "noofcomments":12,
    "nooffiles":15,
    "isimage":"YES",
};

function Home1(){

    const [state, setState] = useState({
        "todo": {
          title: "To Do",
          items: [item1,item2,item3],

        },
        "inprogress":{
          title: "In Progress",
          items: [item4,item5],
          
        },
        "done": {
          title: "Done",
          items: [item6],
          
        },
        
        
      }
      );

      const handleDragEnd = ({destination, source}) => {
        if(!destination)  return;
    
        if(destination.droppableId === source.droppableId && destination.index === source) return;
        {/*dropped in same place */}
        const itemcopy = {...state[source.droppableId].items[source.index]}
        console.log(itemcopy);
        if(destination.droppableId === "delete" && source.droppableId !== "delete"){
          {/*deleteing an item */}
          setState(prev =>{
            prev = {...prev}
            prev[source.droppableId].items.splice(source.index,1);
            return prev;
          })
        }
        else{
          {/*adding an item*/}
        setState(prev =>{
          prev = {...prev}
          prev[source.droppableId].items.splice(source.index,1);
          {/*splice used to delete but also add */}
          prev[destination.droppableId].items.splice(destination.index,0, itemcopy);
          return prev;
        })
    
        }
      }

    return(
            <Container className="mt-3">
            <Row>
            <DragDropContext onDragEnd= {handleDragEnd}>
                {_.map(state, (data, key) => {
                    return(
                    <Col  lg={4} md={6} sm={12}> 
                    <Card >
                        <ListGroup style={{backgroundColor:"#F5F5F5"}} variant="flush" >
                            <ListGroup.Item>
                                <h1 style={{fontFamily:"Inter",fontSize:"25px" , fontWeight:'bold'}}>{data.title}{":"}{data.items.length}</h1>
                            </ListGroup.Item>

                            <Droppable droppableId={key}>
                                {(provided) => {
                                    return(
                                        <div ref={provided.innerRef}{...provided.droppableProps} className="droppable_column">
                                           
                                           <ListGroup.Item>
                                            {
                                                 
                                                data.items.map((element, index) => {
                                                         return (
                                                <Draggable key={element.id} index={index} draggableId={element.id.toString()} >
                                                {
                                                    (provided) => {
                                                        return(
                                                            <div  ref = {provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps} className="draggable_item"> 
                                                               
                                                                 <div className="mb-3 mt-3">
                                                                    <Noterimg info={element}/>
                                                                </div>
                                                                
                                                            </div>
                                                        )

                                                }}
                            </Draggable>
                          )
                        })}
                        </ListGroup.Item>
                        {provided.placeholder}
                      </div>
                    )
                  }
                  }

                </Droppable>
                </ListGroup>
                </Card>
            </Col>
            
          )
          
        })}
      </DragDropContext>
            </Row>
        </Container>
    

        
    )


}

export default Home1;