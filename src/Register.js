import {View, Text, TouchableOpacity, TextInput,StyleSheet} from 'react-native'
import React, {useState} from 'react'
import { firebase} from '../config'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')

    registerUser = async (email, password, firstname, lastname)=> {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=>{
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp:true,
                url:'https://hostelhub-fdaca.firebaseapp.com',
            })
            .then(() =>{
                alert('Verification email sent')
            }).catch((error)=>{
                alert(error.message)
            })
            .then(()=>{
                firebase.firestore().collection('users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                    firstname,
                    lastname,
                    email,
                })
            })
            .catch((error =>{
                alert(error.message)
            }))
        })
    }
    return (
        <View style={StyleSheet.container}>
            <Text style={{fontWeight:'bold', fontSize:23}}>
                Register Here..!!
            </Text>
            <View style={{marginTop:40}}>
                <TextInput
                    style={styles.textInput}
                    placeholder = 'First Name'
                    onChange={(firstname)=> setFirstName(firstname)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder = 'Last Name'
                    onChange={(lastname)=> setFirstName(lastname)}
                    autoCorrect={false}
                /> 
                <TextInput
                    style={styles.textInput}
                    placeholder = 'Email'
                    onChange={(email)=> setFirstName(email)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                /> 
                <TextInput
                    style={styles.textInput}
                    placeholder = 'Password'
                    onChange={(password)=> setFirstName(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                /> 
            </View>
            <TouchableOpacity
                onPress={() => registerUser(email,password,firstname,lastname)}
                style = {styles.button}
            >
            </TouchableOpacity>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex :1,
        alignItems: 'center',
        marginTop:100,
    },
    textInput:{
        paddingTop:20,
        paddingBottom:10,
        width:400,
        fontSize:20,
        borderBottomColor: '#000',
        marginBottom:10,
        textAlign:'center'
    },
    button:{
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#026efd',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    }
})