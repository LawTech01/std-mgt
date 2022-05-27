import React from 'react'
import styles from './student.module.css'

class Student extends React.Component{
  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }

  handleUpdatedDone = e => {
    if(e.key === 'Enter'){
      this.setState({
        editing: false,
      })
    }
  }

  render(){
    const completedstyle = {
      fontStyle: 'italic',
      color: '#59595e',
      opacity: 0.4,
      textDecoration: 'line-through'
    }
    const {graduated, matric, fullname} = this.props.student

    let viewMode = {}
    let editMode = {}

    if(this.state.editing){
      viewMode.display = 'none'
    }else{
      editMode.display = 'none'
    }

    return (
      <li className= 'check'>
        <div onDoubleClick={this.handleEditing} style = {viewMode}>
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
        </div>
        <input
              type= 'text' 
              className={styles.textInput} 
              style = {editMode}
              value = {fullname}
              onChange = { e =>
                this.props.setUpdate(e.target.value, matric)
              }
              onKeyDown = {this.handleUpdatedDone}
            />
      </li>
    )
  }
}

export default Student