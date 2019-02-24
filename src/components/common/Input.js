import React, { Component } from 'react';
import { Text, View, TextInput} from 'react-native';

const Input = (props) => {

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{props.labelText}</Text>

            <TextInput style={styles.inputStyle}
                placeholder={props.placeholder}
                value={props.value} 
                onChangeText={props.onChangeText} 
                autoCorrect={false}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    );
};

// add styes to view container and text 
const styles = {
    inputStyle : { 
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize:18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle : { 
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle : {
        
        height: 40,
        flex:1,
        flexDirection: 'row',
        alignItems:'center'
    }



};

export { Input }; 
