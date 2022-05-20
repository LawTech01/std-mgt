import React from 'react'
import Header from './Header'
import InputStudent from './InputStudent'
import StudentList from './StudentList'
import {v4 as uuidv4} from 'uuid'

class StudentContainer extends React.Component{
    state = {
        appName: 'Student mgt',
        students: [
            
        ]
    }
    
    handleChange = matric => { 
        this.setState(prevState => ({
            students: prevState.students.map(student => {
                if(student.matric === matric){
                    return {
                        ...student,
                        graduated: !student.graduated
                    }
                }
                return student
            })
        }))
    }
    
    delStudent = matric => {
        this.setState({
            students: [
                ...this.state.students.filter(student =>{
                    return student.matric !== matric
                })
            ]
        })
    }

    addStudent = (fullname) => {
        const newStudent = {
            matric: uuidv4(),
            fullname: fullname,
            graduated: false
        };
        this.setState({
            students: [...this.state.students, newStudent]
        })
    }

    render(){
        
        return (
            <div className='container'>
                <div className='inner'>
                <Header/>
                <InputStudent addStudentProps={this.addStudent}/>
                <StudentList students={this.state.students} handleChangeProps={this.handleChange} delStudentProps={this.delStudent}/>
                </div>
            </div>
        )
    }
}
export default StudentContainer