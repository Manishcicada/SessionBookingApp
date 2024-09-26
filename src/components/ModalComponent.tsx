import { Modal } from "antd";
import { type ReactNode} from "react";

export type NewUpcomingSessionData = {
  id: string,title: string, summary: string, date: string
}

type ModalComponentProps = {
  openModal: boolean;
  setOpenModal: (arg: boolean)=>void;
  handleOk: (data: NewUpcomingSessionData) => void;
  children: ReactNode;
  upcomingSessionData?: NewUpcomingSessionData;
}

export default function ModalComponent({openModal,setOpenModal,children, handleOk, upcomingSessionData}: ModalComponentProps){

  
  function handleCancel(){
    setOpenModal(false);
  }

  function handleOkClick(){
    if(upcomingSessionData){
      handleOk(upcomingSessionData);
    }
    setOpenModal(false);
  }

  return(
    <Modal open = {openModal} onCancel={handleCancel} onOk={handleOkClick}>
      {children}
    </Modal>
  );
}