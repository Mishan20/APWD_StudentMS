import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const StudentDetail = () => {
    const [student, setStudent] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3000/student/detail/'+id)
        .then(result => {
            setStudent(result.data[0])
        })
        .catch(err => console.log(err))
    }, [])
    const handleLogout = () => {
        axios.get('http://localhost:3000/student/logout')
        .then(result => {
          if(result.data.Status) {
            localStorage.removeItem("valid")
            navigate('/')
          }
        }).catch(err => console.log(err))
      }
  return (
    <div>
        <div className="p-2 d-flex justify-content-center shadow">
            <h4>Student Management System</h4>
        </div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
            <img src={`http://localhost:3000/Images/`+student.image} className='stu_det_image'/>
            <div className='d-flex align-items-center flex-column mt-5'>
                <h3>Name: {student.name}</h3>
                <h3>Email: {student.email}</h3>
            </div>
            <div>
                <button className='btn btn-primary me-2'>Edit</button>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default StudentDetail