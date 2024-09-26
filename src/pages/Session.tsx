import { useParams } from 'react-router-dom';

import { SESSIONS } from '../dummy-sessions.ts';
import { Button} from 'antd';
import ModalComponent, { NewUpcomingSessionData } from '../components/ModalComponent.tsx';
import FormComponent from '../components/FormComponent.tsx';
import { useState } from 'react';
import { useCartDispatch } from '../store/hooks.ts';
import { storeActions } from '../store/upcomingsessions.ts';

export default function SessionPage() {

  const [openModal, setOpenModal] = useState<boolean>(false);

  const dispatch = useCartDispatch();

  function handleOpenModal(){
    setOpenModal(true);
  }

  function handleUpcomingSessionAdd(data: NewUpcomingSessionData){
    dispatch(storeActions.handleAdd(data));
  }

  const params = useParams<{ id: string }>();

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  const dataForModalComponent: NewUpcomingSessionData = {id: loadedSession?.id!, summary: loadedSession?.summary!, date: loadedSession?.date!, title: loadedSession?.title!};

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  return (
    <main id="session-page">
      <article>
        <header>
          <img
            src={loadedSession.image}
            alt={loadedSession.title}
          />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <p>
              <Button
               onClick={handleOpenModal}
               type= 'primary'
               style={{
                color: 'black',
                background: '#c7b0ee',
                paddingLeft : '20px',
                paddingRight: '20px'
               }}
               >
                Book session
              </Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>

      <ModalComponent openModal= {openModal} setOpenModal={setOpenModal} handleOk={handleUpcomingSessionAdd} upcomingSessionData={dataForModalComponent}>
        <FormComponent/>
      </ModalComponent>
    </main>
  );
}
