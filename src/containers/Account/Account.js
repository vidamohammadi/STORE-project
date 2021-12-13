import React, { Component } from 'react'
import './Account.css'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/Button/Button'

class Account extends Component {

    state = {

        form: {

            name: {
                inputtype: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name...'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                used: false
            },

            email: {
                inputtype: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email...'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                used: false
            },

            password: {
                inputtype: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password...'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                used: false
            },

        }

    }

    submitHandler = (event) => {

        event.preventDefault()

        const formData = {}
        for(let item in this.state.form){
            formData[item] = this.state.form[item].value
        }

        console.log(formData)

    }

    checkValidation = (value, rules) => {
        let isValid = false
        if(rules.required){
            isValid = value.trim() !== ''
        }
        return isValid
    }

    inputChangeHandler = (event, inputElement) => {

        const updatedForm = {
            ...this.state.form
        }

        const updatedElement = {
            ...updatedForm[inputElement]
        }

        updatedElement.value = event.target.value

        updatedElement.valid = this.checkValidation(
            updatedElement.value,
            updatedElement.validation 
            )

        updatedElement.used = true

        updatedForm[inputElement] = updatedElement

        this.setState({form: updatedForm})

    }

    render() {
        let elementArray = []

        for (let item in this.state.form) {
            elementArray.push({
                id: item,
                config: this.state.form[item]
            })
        }

        return (

            <div className="account" >
                <h2> Account </h2>
                <form onSubmit={this.submitHandler}>

                    {
                        elementArray.map((item) => {
                            return (<Input
                                key={item.id}
                                inputtype={item.config.inputtype}
                                elementConfig={item.config.elementConfig}
                                value={item.config.value}
                                invalid={!item.config.valid}
                                used={item.config.used}
                                change={(event) => this.inputChangeHandler(event, item.id)}   
                            />
                            )
                        })
                    }

                    <Button btnType="order-btn"> Submit </Button>

                </form>
            </div >
        )
    }
}

export default Account