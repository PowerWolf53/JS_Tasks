import React, {Component} from 'react'

import style from './main.module.css'
import {
    AuthorizationForm,
} from '../../components'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: true,
        }

    }

    handleSwitchForm() {
        this.setState({
            flag: !this.state.flag
        })
    }

    render() {

        return (
            <div className={style.main}>
                <AuthorizationForm
                    switchForm={() => this.handleSwitchForm()}
                    flag={this.state.flag}
                />
            </div>
        )
    }
}

export default Main;