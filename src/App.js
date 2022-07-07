import './App.css';
import { useState } from 'react';
import {students} from './data'
import Student from './Student';


function App() {
  const [stu, setStudents] = useState(students)
  return (
    <div className="app-container">
      <Student stu={stu}/>
    </div>
  );
}

export default App;
