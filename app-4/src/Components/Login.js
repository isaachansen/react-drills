import React, {Component} from 'react'

class Login extends Component { 
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }   
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeUserHandle(name) {
        this.setState({username: name})
    } 

    changePassHandle(pass) {
        this.setState({password: pass}) 
    }

    changeHandler() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return(
            <div>
                <input onChange={e => this.changeUserHandle(e.target.value)}
          type="text" />
                <input onChange={e => this.changePassHandle(e.target.value)}
          type="text" />
                <button onClick={this.changeHandler}>Login</button>
            </div>
        )
    }
}

export default Login;

