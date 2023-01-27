import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ViewStudent() {

    const params = useParams();
  console.log(params);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let student = await axios.get(
        `https://6394a62e86829c49e8233213.mockapi.io/student/${params.studentid}`
      );
      console.log(student.data);
      setStudent(student.data);
    } catch (error) {}
  };
  return (
    <div className="m-5"> 
      <h1>{`Student-Id : ${params.studentid}`}</h1>
      <h3>{student.name}</h3>
      <h3>{student.class}</h3>
      <h3>{student.date}</h3>
      <h3>{student.place}</h3>
      <h3>{student.age}</h3>
      <h3>{student.teachname}</h3>
    </div>
  );


}

export default ViewStudent