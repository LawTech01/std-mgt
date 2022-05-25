import React, {Component} from 'react'



class InputStudent extends Component{
    state={
        fullname: '',
    }
    onChange = e => {
       this.setState(
            {
                // fullname: e.target.value
                [e.target.name]: e.target.value
            }
       )
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.fullname.trim()){
            this.props.addStudentProps(this.state.fullname)
        this.setState({
            fullname: ''
        })
        }else{
            alert ('please enter a valid Info!')
        }    
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit} className = 'form-container'>
                <input 
                    className='input-text'
                    type='text' 
                    placeholder='Add student..' 
                    name='fullname'
                    value={this.state.fullname} 
                    onChange = {this.onChange}
                />
                
                <button className='input-submit'>Submit</button>
            </form>
        )
    }
}

export default InputStudent