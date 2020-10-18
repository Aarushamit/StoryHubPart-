import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";

export default class WriteStoryScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            author: '',
            title: '',
            story: '',
        }
    }

    submittedScreen = () => {
        <Text style = {styles.submitted}> thank you for submitting the story </Text>
    }
    render(){
        return(
            <View>
                <TextInput style = {styles.inputBox}
                placeholder = "author name"
                onChangeText = {(text)=>{
                    this.setState({
                        author: text
                    })
                }}
                />

<TextInput style = {styles.inputBox}
                placeholder = "story name"
                onChangeText = {(text)=>{
                    this.setState({
                        title: text
                    })
                }}
                />

<TextInput style = {styles.inputBox}
                placeholder = "write the story here"
                multiline = {true}
                onChangeText = {(text)=>{
                    this.setState({
                        story: text
                    })
                }}
                />

<TouchableOpacity style = {styles.submitButton} onPress = {this.submittedScreen}>
         <Text style = {styles.submitButtonText}> submit the story </Text>       
                </TouchableOpacity>
            </View>

           
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 15,
        textAlign: 'center',
        alignSelf: 'center',

      },

      submitButton:{
        backgroundColor: '#FBC02D',
        height: 50, 
        width: 100,
      },

      submitButtonText:{
        padding: 10, 
        textAlign: 'center',
        fontSize: 20, 
        fontWeight: 'bold',
        color: 'white',
      },

      submitted:{
          fontSize: 50,
          textAlign: 'center',
          fontWeight: 'bold',
      },
})