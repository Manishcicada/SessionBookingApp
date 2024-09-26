import { Outlet } from 'react-router-dom';
import {Layout, Typography} from 'antd';
import Button from '../components/Button';
import ModalComponent from '../components/ModalComponent';
import { useState } from 'react';
import UpcomingSessions from '../components/UpcomingSessions';

const {Header} = Layout;
const {Title} = Typography;


export default function Root() {

  const [openModal, setOpenModal] = useState<boolean>(false);

  function handleOpenModal(){
    setOpenModal(true);
  }

  return (
    <>
      <Header style={{
        display: "flex",
        background: 'none',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Title level={2} style={{
          color: '#c7b0ee', 
          margin: '0px'
        }}>ReactMentoring</Title>
        <div>
          <Button type='Link' href='/' styling='link'>Our Mission</Button>
          <Button type='Link' href='sessions' styling='link'>Browse Sessions</Button>
          <Button type='Button' onClick={handleOpenModal} styling='button'>Upcoming Sessions</Button>
          <ModalComponent openModal= {openModal} setOpenModal={setOpenModal} handleOk={()=>setOpenModal(false)}>
            <UpcomingSessions/>
          </ModalComponent>
        </div>
      </Header>
      <Outlet />
    </>
  );
}
