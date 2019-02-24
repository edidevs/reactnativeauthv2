import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native'; 
import { Spinner } from './common';

//import firebase module 

import firebase from '@firebase/app'
import '@firebase/auth'


import { Button, Card, CardSection, Input } from './common'; 

class LoginForm extends Component { 

    state = { email: '', 
              password: '',
            error: '', 
        loading: false };

    // add helper methods 
    onButtonPress(){

        this.setState({
            error: '', 
            loading: true
    });

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then( this.onLoginSuccess.bind(this))
        .catch(() => {
            // fail to sign in, create an account 
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this));
        });


    }

    //on login failed 
    onLoginFailed(){

        this.setState({
            error:'Authentication failed',
            loading: false,

        })
    }

    //on login success 
    onLoginSuccess(){
        this.setState({
            email: '', //reset email and password 
            password: '',
            loading:false,
            error: ''
        })
    }





    //conditional rendering
    renderButton(){

        if(this.state.loading){
            return <Spinner size='small' />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
            </Button>
        );


    }



    render(){

        return (


            <Card>
                <CardSection>
                    <Input 
                    placeholder='Enter your email'
                    value={this.state.email} labelText='Email' 
                    onChangeText={ (email) => this.setState({email:email})}/>
                   
                </CardSection>

                <CardSection>

                    <Input 
                        secureTextEntry
                        placeholder='Enter your password'
                        value={this.state.password} labelText='Password' 
                        onChangeText={ (password) => this.setState({password:password})}/>
                   

                </CardSection>
                
                <CardSection>
                    {this.renderButton()}
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
            </Card>

        ); 


    }


}

const styles = {
    errorTextStyle : {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm; 