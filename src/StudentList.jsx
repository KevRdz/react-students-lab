const  StudentList = (props) => {
  return ( 
    <>
    <h1>Student List</h1>
    {props.stu.map(student =>
      <h2>{student.name}</h2>
    )}
    </>
  );
}

export default StudentList;