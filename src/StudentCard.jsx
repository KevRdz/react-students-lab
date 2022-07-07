import Score from "./Score";

const StudentCard = (props) => {
  return ( 
    <div className="student-card">
      <h2>{props.student.name}</h2>
      <h3>{props.student.bio}</h3>
      <Score />
    </div>
  );
}

export default StudentCard;