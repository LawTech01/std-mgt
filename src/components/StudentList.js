import React from 'react'
import Student from './Student'

class StudentList extends React.Component{
    
    render(){
        return (
            <ul>
                {this.props.students.map(student => (
                   <Student 
                        key={student.matric} student={student} 
                        handleChangeProps={this.props.handleChangeProps}
                        delStudentProps={this.props.delStudentProps}
                        setUpdate={this.props.setUpdate}
                    />
                ) )}
            </ul>
        )
    }
}

export default StudentList