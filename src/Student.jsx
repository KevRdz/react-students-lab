import StudentCard from "./StudentCard";
// import Score from "./Score";

const  Student = (props) => {
  return ( 
    <>
    {/* <h1>Student List</h1> */}
    {props.stu.map(student =>
      <StudentCard student={student} />
    )}
    </>
  );
}

export default Student;