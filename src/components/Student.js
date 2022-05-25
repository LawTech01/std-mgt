import React from 'react'


class Student extends React.Component{
  render(){
    const completedstyle = {
      fontStyle: 'italic',
      color: '#59595e',
      opacity: 0.4,
      textDecoration: 'line-through'
    }
    const {graduated, matric, fullname} = this.props.student
    return (
      <li className= 'check'>
          <input 
              className='ckbox'
              type='checkbox' 
              checked={graduated} 
              onChange={() => this.props.handleChangeProps(matric)}
          />
          <span style={graduated ? completedstyle : null}>
          {fullname}
          </span>
          <button className='bt' onClick={() => this.props.delStudentProps(matric)}>Delete</button>
      </li>
    )
  }
}

export default Student