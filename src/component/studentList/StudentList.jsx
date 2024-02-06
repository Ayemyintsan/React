import React from 'react';
const studentList = [
    //api bind
    {
        id : 1,
        name : "Mg",
        grade : "A"
    },
    {
        id : 2,
        name : "Aung",
        grade : "B"
    },
    {
        id : 3,
        name : "Bo",
        grade : "C"
    }
]
const StudentList = () => {
  return (
    <>
    <h2>Student List</h2>
    <div className="students">
        {studentList.map ((student)=>
            <div className="student" key={student.id}>
            <h3>Student Name: {student.name}</h3>
            <p>Student Grade: {student.grade}</p>
        </div>
        )}
        {/* <div className='student'>
            <h3>Student Name:</h3>
            <p></p>
        </div>
        <div className='student'>
            <h3>Student Name:</h3>
            <p></p>
        </div>
        <div className='student'>
            <h3>Name:</h3>
            <p></p>
        </div> */}
    </div>
    </>
  );
}

export default StudentList;
