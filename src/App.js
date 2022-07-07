import './App.css';
import { useState } from 'react';
import {students} from './data'
import StudentList from './StudentList';


function App() {
  const [stu, setStudents] = useState(students)
  return (
    <div className="app-container">
      <StudentList stu={stu}/>
    </div>
  );
}

export default App;
