import React from 'react'
import { Link } from 'react-router-dom';

function Student() {
    const students = [
      {
        id: 1,
            name: "fash",
            class: 2,
            section: "a",
            date_of_Joining: "12-3-2001",
            age:"3",
      },
      {
        id: 2,
            name: "sash",
            class: 3,
            section: "a",
            date_of_Joining: "12-3-2001",
            age:"3",
      },
      {
        id: 3,
            name: "kart",
            class: 4,
            section: "a",
            date_of_Joining: "12-3-2001",
            age:"3",
        },
    ]

    
  return (
    <div>
      
      <div class="d-sm-flex align-items-center justify-content-between mb-4 m-4">
        <h1 class="h3 mb-0 text-gray-800">Students Dashboard</h1>
        <Link
          to="/add-stud-info"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Add Student
          Detail
        </Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Students DataTables</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Section</th>
                  <th>Date-Of-Joining</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Section</th>
                  <th>Date-Of-Joining</th>
                  <th>Age</th>
                </tr>
              </tfoot>
              <tbody>
                {
                  students.map((student) => {
                    return <tr>
                      <td>{student.name}</td>
                      <td>{student.class}</td>
                      <td>{student.section}</td>
                    
                      <td>{student.age}</td>
                      <td>{student.date_of_Joining}</td>
                    </tr>
                  })
                }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student