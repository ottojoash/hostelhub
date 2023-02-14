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
            }).catch((error))
        })
    }
}

export default Register