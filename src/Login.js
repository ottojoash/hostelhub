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

    return(
        <View  style={style.container}>
            <Text style ={{fontWeight: 'bold', fontSize:26}}>
                Login
            </Text>
            <View style = {{marginTop:40}}>
                <TextInput
                style={StyleSheet.textInput}
                placeholder='email'
                onChange={(email)=> setEmail(email)}
                autoCapitalize='none'
                autoCorrect={false}
                />
                <TextInput
                style={StyleSheet.textInput}
                placeholder='Password'
                onChange={(password)=> setEmail(password)}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                />
            </View>
            <TouchableOpacity>
                onPress={() => loginUser(email, password) }
                style ={styles.button}

                <Text style= {{fontWeight:'bold', fontSize:22}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                onPress={() => navigation.navigate('Register') }
                style ={{marginTop:20}}

                <Text style= {{fontWeight:'bold', fontSize:22}}>Login</Text>
            </TouchableOpacity>
        </View>
    )
    
}

export default Login