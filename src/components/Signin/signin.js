import React from "react";

class signin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            dismes: '',
        }
    }
    onEmailChange = (event)=>{
        this.setState({signInEmail: event.target.value})
    }
    onPasswordChange = (event)=>{
        this.setState({signInPassword: event.target.value});
    }
    ondismesChange = (data)=>{
        this.setState({dismes:data});
    }
    onSubmitSignIn = ()=>{
        fetch('http://localhost:3000/signin',{
            method:'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email:this.state.signInEmail,
                password:this.state.signInPassword
            })
        }).then(response => response.json())
        .then(data=>{
            if(data.state !== 'fail'){
                  console.log("success");
                  this.props.changeUser(data.message);
                  this.props.onrouteChange('home');
            }
            else{
                console.log(data);
                this.ondismesChange(data.message);  
                this.props.onrouteChange('signin');
            }
        })
        
    }
    render(){
        const {onrouteChange } = this.props;
    return(
        <article className="br3 ba b--black-10 mv4 w-100 tc w-75-m w-50-l mw6 shadow-5 center">
            <main className="pa4 black-80 center" >
    <form className="measure">
        <fieldset id="sign_up" className="ba center b--transparent ph0 mh0">
        <legend className="f3 fw6 ph0 center mh0">Sign In</legend>
        <div className="mt3 center">
            <label className="db fw6 lh-copy center f6" htmlFor="email-address">Email</label>
            <input className="pa2 input-reset center ba bg-transparent hover-bg-black hover-white w-50" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
        </div>
        <div className="mv3 center"> 
            <label className="db fw6 lh-copy center f6" htmlFor="password">Password</label>
            <input onChange={this.onPasswordChange} className="b pa2 input-reset center ba bg-transparent hover-bg-black hover-white w-50" type="password" name="password"  id="password" />
        </div>
        </fieldset>
        <div className="center hot-pink code">
        <label>{this.state.dismes}</label>
        </div>
        <div className="center">
        <input className="b ph3 center pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" onClick={this.onSubmitSignIn} value="Sign in" />
        </div>
        <div className="lh-copy center mt3">
        <p href="#0" className="f6 link shadow-hover center dim black db"  onClick={()=>onrouteChange('register')} >Register</p>
        </div>
    </ form>
    </ main>
    </article>
    );
}
}
export default signin;