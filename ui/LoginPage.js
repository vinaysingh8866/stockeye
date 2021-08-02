import React, { Component,useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import {LoadingScreen} from './LoadingScreen'







const NameText = () => {
  const [email, setEmail] = useState('');
  return (
    <View style={{ 
      //backgroundColor:'#F2F0F0', 
      marginLeft:'5%', 
      paddingTop:10,
      width:'90%', 
      height:70, 
      borderRadius:16,
      shadowColor:'black',
      marginVertical:10,
      shadowRadius:1,
      shadowOffset:{width:3, height:3},
      shadowOpacity:.1}
      }>
    <View style={{ 
      backgroundColor:'#F2F0F0', 
      //marginLeft:'5%', 
      width:'100%', 
      height:'100%', 
      borderRadius:16,
      shadowColor:'white',
      shadowRadius:1,
      shadowOffset:{width:-3, height:-3},
      shadowOpacity:3}
      }>
    <TextInput
              style={styles.TextInput}
              placeholder="Email."
              placeholderTextColor="black"
              onChangeText={(email) => setEmail(email)}
            />
    </View>
    </View>
  )
}
const PassText = () => {
  const [pass, setPass] = useState('');
  return (
    <View style={{ 
      //backgroundColor:'#F2F0F0', 
      marginLeft:'5%', 
      paddingTop:10,
      width:'90%', 
      height:70, 
      borderRadius:16,
      shadowColor:'black',
      marginVertical:10,
      shadowRadius:1,
      shadowOffset:{width:3, height:3},
      shadowOpacity:.1}
      }>

      <View style={{ 
        backgroundColor:'#F2F0F0', 
        //marginLeft:'5%', 
        width:'100%', 
        height:'100%', 
        borderRadius:16,
        shadowColor:'white',
        shadowRadius:1,
        shadowOffset:{width:-3, height:-3},
        shadowOpacity:3}
        }>

        <TextInput
                  style={styles.TextInput}
                  placeholder="Password."
                  placeholderTextColor="black"
                  secureTextEntry={true}
                  onChangeText={(pass) => setPass(pass)}
                />

      </View>
    </View>
  )
}




export class LoginPage extends Component {
      isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
            for (var i = 0; i < providerData.length; i++) {
                if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                    providerData[i].uid === googleUser.getBasicProfile().getId()) {
                    return true;
                }
            }
        }
        return false;
    }

    onSignIn = (googleUser) => {
        console.log('Google Auth Response', googleUser);
        var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
            unsubscribe();
            if (!this.isUserEqual(googleUser, firebaseUser)) {
                var credential = firebase.auth.GoogleAuthProvider.credential(
                    googleUser.idToken, googleUser.accessToken);
                firebase.auth().signInWithCredential(credential)
                    .then(res = (result) => {

                        firebase.database()
                            .ref('/users/' + result.user.uid)
                            .set({
                                gmail: result.user.email,
                                profilePicture: result.additionalUserInfo.ptofile.picture
                            })
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        var email = error.email;
                        var credential = error.credential;
                    });
            
                } else {

                console.log('User already signed-in Firebase.');
            
            }
        });
    }

    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                behavior: 'web',
                //androidClientId: 'YOUR_CLIENT_ID_HERE',
                iosClientId: '532640532418-8etm53k0oi3t8p5cv59jmlulgneb4is2.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {


                this.onSignIn(result)


                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            alert(e)
            return { error: true };
        }
    }
    render() {
      
        return (
        
        <View style={styles.container}>
          <StatusBar style="auto" />

          <View style={styles.inputView}>
            <NameText/>
          </View>
    
          <View style={styles.inputView}>
            <PassText/>
          </View>
          
          <TouchableOpacity 
          onPress={() => this.signInWithGoogleAsync()}>
          <View style={{ 
              //backgroundColor:'#F2F0F0', 
              marginLeft:'5%', 
              paddingTop:10,
              width:'120%', 
              height:70, 
              borderRadius:16,
              shadowColor:'black',
              marginVertical:60,
              
              shadowRadius:1,
              shadowOffset:{width:3, height:3},
              shadowOpacity:.1}
              }>

                <View style={{ 
                  backgroundColor:'#F2F0F0', 
                  //marginLeft:'5%',
                  flex:1,
                  alignItems:'center',
                  width:'100%', 
                  height:'100%', 
                  borderRadius:16,
                  shadowColor:'white',
                  shadowRadius:1,
                  shadowOffset:{width:-3, height:-3},
                  shadowOpacity:3}
                  }>

                <Text style={{width:150,paddingVertical:20, paddingHorizontal:50}}>Sign In</Text>

              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{ 
              //backgroundColor:'#F2F0F0', 
              marginLeft:'5%', 
              paddingTop:10,
              width:'120%', 
              height:70, 
              borderRadius:16,
              shadowColor:'black',
              
              
              shadowRadius:1,
              shadowOffset:{width:3, height:3},
              shadowOpacity:.1}
              }>

                <View style={{ 
                  backgroundColor:'#F2F0F0', 
                  //marginLeft:'5%', 
                  width:'100%', 
                  height:'100%', 
                  borderRadius:16,
                  shadowColor:'white',
                  shadowRadius:1,
                  shadowOffset:{width:-3, height:-3},
                  shadowOpacity:3}
                  }>
            <Text style={{padding:20,width:150}}>Forgot Password?</Text>
            </View>
            </View>
            
          </TouchableOpacity>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#F2F0F0',
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
    },
   
    inputView: {
      
      width: "80%",
      height: 45,
      marginBottom:10,marginTop:100,
      borderRadius:16,
      shadowColor:'blue',
      shadowRadius:1,
      shadowOffset:{width:3, height:3},
      shadowOpacity:.1,
   
      alignItems:"center",
    },
   
    TextInput: {
      height: 30,
    
      flex: 1,
      padding: 10,
      marginLeft: 20,
      alignItems: "stretch"
    },
   
    forgot_button: {
      height: 30,
      marginTop: 60,
      marginBottom: 20,
    
      
    },
   
    loginBtn: {
      width: "35%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#F2F0F0",
      shadowColor:'blue',
      shadowRadius:1,
      shadowOffset:{width:3, height:3},
      shadowOpacity:.1,
    },

    signupBtn: {
        width: "35%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom:50,
        backgroundColor: "#F2F0F0",
        shadowColor:'blue',
        shadowRadius:1,
        shadowOffset:{width:3, height:3},
        shadowOpacity:.1,
      },

     
        container: {
            flex: 1,
            backgroundColor:'#F2F0F0',
            alignItems: 'center',
            justifyContent: 'center',
        },
  });

