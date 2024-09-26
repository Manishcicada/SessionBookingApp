import { SESSIONS } from '../dummy-sessions.ts'; // normally, we would probably load that from a server
import { Row, Col} from 'antd';
import SessionComponent from '../components/SessionComponent.tsx';

export default function SessionsPage() {
  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for
          you!
        </p>
      </header>
      <Row gutter={[64,64]} style={{marginTop: '50px'}}>
        {SESSIONS.map((session)=>
        <Col span={8} key={session.id}>
          <SessionComponent
          title={session.title}
          summary={session.summary}
          image = {session.image}
          id={session.id}
            />
        </Col>)}
      </Row>
    </main>
  );
}
