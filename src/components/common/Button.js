import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress } style={styles.buttonStyle} >
            <Text style={styles.textStyle}>{props.children}</Text>
        </TouchableOpacity>
        

    );
};

const styles = {
    textStyle:{
        alignSelf:'center',
        color: '#fff',
        fontSize:16

    },

    buttonStyle: {

        flex:1,
        alignSelf: 'stretch',
        backgroundColor: '#007AFF',
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#007AFF',
        marginLeft:5,
        marginRight:5,
        padding:5

    }

};



export { Button }; 