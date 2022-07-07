import StudentCard from "./StudentCard";

const  Student = (props) => {
  return ( 
    <>
    {/* <h1>Student List</h1> */}
    {props.stu.map(student =>
      <StudentCard key={student.id} student={student} />
    )}
    </>
  );
}

export default Student;