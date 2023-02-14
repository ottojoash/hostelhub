import {View, Text, TouchableOpacity, TextInput,StyleSheet} from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config'


const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    loginUser =  async(email , password) =>  {
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password)
        }catch(error){
            alert(error.message)
        }
    }
    
}

export default Login