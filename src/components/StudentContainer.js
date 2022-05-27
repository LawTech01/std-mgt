import React from 'react'
import Header from './Header'
import InputStudent from './InputStudent'
import StudentList from './StudentList'
import {v4 as uuidv4} from 'uuid'
import FlashMessage from 'react-flash-message'


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

    setUpdate = (updatedName, matric) => {
        this.setState({
            students: this.state.students.map(student => {
                if(student.matric===matric){
                    student.fullname = updatedName
                }
                return student
            })
        })
    }

    render(){
        
        return (
          <>
            <div className='container'>
                <div className='inner'>
                <Header/>
                <InputStudent addStudentProps={this.addStudent}/>
                <StudentList students={this.state.students} 
                             handleChangeProps={this.handleChange}   
                             delStudentProps={this.delStudent}
                             setUpdate={this.setUpdate}             
                />
                </div>
                <FlashMessage duration  = {5000}>
                    <strong> Hello, I will hide in 5 seconds!</strong>
                </FlashMessage>
                
            </div>
            
          </>
        )
    }
}
export default StudentContainer