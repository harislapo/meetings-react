import { Routes, Route } from 'react-router-dom';
import AllMeetingsPage from './pages/AllMeetings';
import FavoriteMeetingsPage from './pages/FavoriteMeetings';
import NewMeetingPage from './pages/NewMeeting';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetingsPage />} />
        <Route path="/new-meeting" element={<NewMeetingPage />} />
        <Route path="/favorites" element={<FavoriteMeetingsPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
