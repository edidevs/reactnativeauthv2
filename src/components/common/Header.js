import React, { Component } from 'react';
import { Text, View } from 'react-native';

//Make a component 
const Header = (props) => {

    return (
        <View style={styles.viewStyle}>
             <Text style={styles.textStyle}>{props.headerText}</Text>

        </View>
       
    )
};

const styles = {

    textStyle: {
        fontSize:20
    },
    viewStyle: {
        shadowOffset: { width: 0, height: 100 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
        // background color must be set
        backgroundColor : "orange", // invisible color
        justifyContent:'center',
        alignItems:'center'
        

    }



}; 

//Make the component available to other parts of the app 
export { Header };
