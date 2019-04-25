import React from "react";

class register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            regmail: '',
            regpas: '',
            regname: '',
            dismes: '',
        }
    }
    onEmailChange = (event)=>{
        this.setState({regmail: event.target.value});
    }
    onPasswordChange = (event)=>{
        this.setState({regpas: event.target.value});
        }
    onNameChange = (event)=>{
        this.setState({regname:event.target.value});
    }
    ondismesChange = (data)=>{
        this.setState({dismes:data});
    }
    onSubmitReg = ()=>{
        fetch('http://localhost:3000/register',{
            method:'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name:this.state.regname,
                email:this.state.regmail,
                password:this.state.regpas
            })
        }).then(response => response.json())
        .then((data)=>{if(data.state !== "fail"){console.log(data);this.props.changeUser(data.message); this.props.onrouteChange('home');}
            else{
                this.ondismesChange(data.message);
            }
        });
        
    }
    render(){
    return(
        <article className="br3 ba b--black-10 mv4 w-100 tc w-75-m w-50-l mw6 shadow-5 center">
            <main className="pa4 black-80 center" >
    <form className="measure">
        <fieldset id="sign_up" className="ba center b--transparent ph0 mh0">
        <legend className="f3 fw6 ph0 center mh0">Register</legend>
        <div className="mt3 center">
            <label className="db fw6 lh-copy center f6" htmlFor="name">Name</label>
            <input onChange={this.onNameChange} className="pa2 input-reset center ba bg-transparent hover-bg-black hover-white w-50" type="text" name="name"  id="name" />
        </div>
        <div className="mt3 center">
            <label className="db fw6 lh-copy center f6" htmlFor="email-address">Email</label>
            <input onChange={this.onEmailChange} className="pa2 input-reset center ba bg-transparent hover-bg-black hover-white w-50" type="email" name="email-address"  id="email-address" />
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
        <input className="b ph3 center pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" onClick={this.onSubmitReg} value="Sign-Up" />
        </div>
        <div className="lh-copy center mt3">
        <p href="#0" className="f6 link center shadow-hover dim black db"  onClick={()=>this.props.onrouteChange('signin')} >Sign-In</p>
        </div>
    </ form>
    </ main>
    </article>
    );
}
}
export default register;