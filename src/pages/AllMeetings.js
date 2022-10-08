import MeetingList from '../components/meetings/MeetingList';
import { useState, useEffect } from 'react';

const AllMeetingsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'YOUR_FIREBASE_BACKEND_URL/meetings.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetings = [];
        for (const key in data) {
          const meeting = {
            id: key,
            ...data[key],
          };
          meetings.push(meeting);
        }
        setIsLoading(false);
        setMeetings(meetings);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetings</h1>
      {!isLoading && !meetings && <h2>No meetings yet. Add new?</h2>}
      {meetings && <MeetingList meetings={meetings} />}
    </div>
  );
};

export default AllMeetingsPage;
