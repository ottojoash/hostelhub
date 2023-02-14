import {View, Text,StyleSheet,SafeAreaView} from 'react-native'
import React, {useState,useEffect} from 'react'
import {firebase} from '../config'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Dashboard = () => {
    const [name, setName] = useState('')
    
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
                onPress={()=> firebase.auth().signOut()}
            >
                <Text style={{fontSize:20,fontWeight:'bold'}}>
                    Sign Out
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Dashboard