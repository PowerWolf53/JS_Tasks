import React,{Component} from 'react'
import style from './authorizationform.module.css'

class AuthorizationForm extends Component {


    constructor(props){
        super(props)
        this.state={
            password:'',
            confirmPassword:'',
            matchError:false
        }
    }

    validatePasswords=()=>{
        if(!this.props.flag){
           if(this.state.password!=this.state.confirmPassword){
               this.setState({matchError:true,password:'',confirmPassword:''})
           }
        }
    }


    changePasswordHandler=(event)=>{
        this.setState({password:event.target.value,matchError:false})
    }

    changeConfirmPasswordHandler=(event)=>{
        this.setState({confirmPassword:event.target.value,matchError:false})
    }

    swtForm=()=>{
        this.setState({matchError:false})
        this.props.switchForm();

    }

    render() {
        return (
            <div className={style.box}>
                {this.props.flag
                    ? <h2>Login</h2>
                    : <h2>Registration</h2>
                }
                <form>
                    <div className={style.inputBox}>
                        <input type="text" name="login" required=""/>
                        <label>Username</label>
                    </div>
                    <div className={style.inputBox}>
                        <input value={this.state.password} onChange={this.changePasswordHandler} type="password" name="password" />
                        {this.state.matchError
                            ? <label className={style.error}>Passwords does not match</label>
                            : <label>Password</label>
                        }
                    </div>
                    {this.props.flag
                        ? null
                        : <div className={style.inputBox}>
                            <input value={this.state.confirmPassword} onChange={this.changeConfirmPasswordHandler} type="password" name="password" />
                            {this.state.matchError
                                ? <label className={style.error}>Passwords does not match</label>
                                : <label>Confirm Password</label>
                            }
                        </div>
                    }

                </form>
                <input onClick={this.validatePasswords} type="submit" name="" value="Submit"/>
                <div className={style.switcher} onClick={this.swtForm}>{this.props.flag ? <a>To Registration</a> :
                    <a>To Authorization</a>}</div>
            </div>
        )
    }
}

export default AuthorizationForm;