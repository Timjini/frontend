import React , { Component } from 'react';
import axios from 'axios';


export default class Registration extends Component {
    constructor(props){
        super(props);

        this.state ={
            username: "",
            email: "",
            password: "",
            phone: "",
            password_confirmation: "",
            avatar: "",
            registrationErrors: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState ({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        const {
            username,
            email,
            phone,
            password,
            password_confirmation,
        } = this.state;
        
        axios.post("https://shrouded-hollows-01022.herokuapp.com/registrations",
        {
        user: {
            username: username,
            email: email,
            phone: phone,
            password: password,
            password_confirmation: password_confirmation
            }
        },
        { withCredentials: true }
    ).then( response => {
            console.log("registration res", response);
        })
        .catch(error => {
            console.log("registration error", error);
        });
        event.preventDeault();
    }
    render () {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <input 
                type="username" 
                name="username" 
                placeholder='Username' 
                value={this.state.username} 
                onChange={this.handleChange} 
                required />

                <input 
                type="email" 
                name="email" 
                placeholder='Email' 
                value={this.state.email} 
                onChange={this.handleChange} 
                required />

                
                <input 
                type="phone" 
                name="phone" 
                placeholder='Phone number ' 
                value={this.state.phone} 
                onChange={this.handleChange} 
                 />

                <input 
                type="password" 
                name="password" 
                placeholder='Password' 
                value={this.state.password} 
                onChange={this.handleChange} 
                required />
                <input 
                type="password" 
                name="password_confirmation" 
                placeholder='Password confirmation' 
                value={this.state.password_confirmation} 
                onChange={this.handleChange} 
                required />

                <button type='submit'> register </button>


            </form>
            </div>
        )
    }
}