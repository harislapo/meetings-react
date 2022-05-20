import MeetingItem from './MeetingItem';
import classes from './MeetingList.module.css';

const MeetingList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetings.map((meeting) => (
        <MeetingItem
          key={meeting.id}
          id={meeting.id}
          image={meeting.image}
          title={meeting.title}
          address={meeting.address}
          description={meeting.description}
        />
      ))}
    </ul>
  );
};

export default MeetingList;
