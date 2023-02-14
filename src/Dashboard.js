import {View, Text,StyleSheet,SafeAreaView} from 'react-native'
import React, {useState,useEffect} from 'react'
import {firebase} from '../config'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Dashboard = () => {
    const [name, setName] = useState([]);

    // Change password
    const changePassword = () =>{
        firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
        .then(()=>{
            alert('password reset email sent')
        }).catch((error) => {
            alert(error)
        })
    }
    
    useEffect(()=>{
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot)=>{
            if(snapshot.exists){
                setName(snapshot.data())
            }
            else{
                console.log('user doesnot exist')
            }
            
        })
    },[])

    return(
        <SafeAreaView style={StyleSheet.container}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>
                Hello,{name.firstname}
            </Text>
            <TouchableOpacity
                onPress={()=> {firebase.auth().signOut()}}
            >
                <Text style={{fontSize:20,fontWeight:'bold'}}>
                    Sign Out
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Dashboard

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