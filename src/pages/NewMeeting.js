import { useNavigate } from 'react-router-dom';
import NewMeetingForm from '../components/meetings/NewMeetingForm';

const NewMeetingPage = () => {
  const navigate = useNavigate();

  const addMeetingHandler = (meeting) => {
    fetch('YOUR_FIREBASE_URL_HERE', {
      method: 'POST',
      body: JSON.stringify(meeting),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      navigate('/', { replace: true });
    });
  };

  return (
    <section>
      <h1>Add New Meeting</h1>
      <NewMeetingForm onAddMeeting={addMeetingHandler} />
    </section>
  );
};

export default NewMeetingPage;
