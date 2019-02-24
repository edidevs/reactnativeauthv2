import React, { Component } from 'react';
import { View, TextInput } from 'react-native';


import firebase from '@firebase/app'
import '@firebase/auth'
import { Header, Button, Card, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = {
        loggedIn: null, // still not sure what the data is 

    }

    componentWillMount(){

        firebase.initializeApp({
            apiKey: 'AIzaSyD23DvH3zpoDTwUb4MPJQhpsIwhXeYCLU0',
            authDomain: 'authenticationrn-f315a.firebaseapp.com',
            databaseURL: 'https://authenticationrn-f315a.firebaseio.com',
            projectId: 'authenticationrn-f315a',
            storageBucket: 'authenticationrn-f315a.appspot.com',
            messagingSenderId: '1035196101878',
          });

          //whenenver user signs in or signs out 
          firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({
                    loggedIn: true
                })
            }else{
                this.setState({
                    loggedIn: false
                })
            }
          });
       

    }

    // helper method 
    renderContent(){

        switch(this.state.loggedIn){
            case true:
                return (
                    <Card>
                        <CardSection>
                        <Button onPress={() => { return firebase.auth().signOut()}}>
                        Log Out
                        </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return (
                    <View>
                        <LoginForm />
                        
                    </View>
                )
            default:
                    return (
                        <Card>
                            <CardSection>
                            <Spinner />
                            </CardSection>
                        </Card>
                    )

        }

        
    }

    render(){

        return (
            <View>
                <Header headerText="Auth React Native"/>
                {this.renderContent()}
                

            </View>
        );


    }



}

export default App;