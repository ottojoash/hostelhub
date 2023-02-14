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
            <Text>
                Register Here..!!
            </Text>
        </View>
    )
}

export default Register