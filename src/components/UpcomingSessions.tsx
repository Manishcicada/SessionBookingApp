import { useCartDispatch, useCartSelector } from "../store/hooks";
import { Row,Col, Typography, Button } from "antd";
import { storeActions } from "../store/upcomingsessions";
import { CSSProperties } from "react";

export default function UpcomingSessions(){

  const {Paragraph} = Typography;

  const dispatch = useCartDispatch();

  function handleDeleteSession(id: string){
    dispatch(storeActions.handleDelete({id}));
  }

  const upcomingSessionsData = useCartSelector(state=>state.upcomingSessions);
  console.log(upcomingSessionsData);

  let content;

  const rowStyles: CSSProperties = {
    padding: '30px',
    background: '#49464f',
    display: 'flex',
    flexDirection: 'row',
    height: '400px',       
    overflowY: 'auto',     
    overflowX: 'hidden',
  };

  const columnStyles:CSSProperties = {
    background: '#373240',
    display: 'flex',
    marginBottom: '20px',
    width: '400px',
    height: '200px'
  };

  if(upcomingSessionsData.length>0){
    content = (
      <Row gutter={[16, 16]} style={rowStyles}>
        {upcomingSessionsData.map(session => (
          <Col key={session.id} style={columnStyles}>
            <ul>
              <li>
                <Paragraph style={{color: '#C7B0EE'}}>{session.title}</Paragraph>
                <Paragraph style={{color: 'white'}}>{session.summary}</Paragraph>
                <Paragraph style={{color: 'white'}}> {session.date}</Paragraph>
                <Button type="primary" onClick={() => handleDeleteSession(session.id)} 
                style={{
                  background: 'none',
                  color: '#C7B0EE',
                }}
                >Cancel</Button>
              </li>
            </ul>
          </Col>
        ))}
      </Row>
    );
  }else{
    content = (
      <p>No upcoming sessions available</p>
    );
  }
  return(
    <>
      {content}
    </>
  );
}