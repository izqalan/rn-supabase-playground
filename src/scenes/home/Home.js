import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StatusBar} from 'react-native';import Button from 'components/Button'
import { GoTrueClient } from '@supabase/gotrue-js'
import AsyncStorage from '@react-native-community/async-storage';
import styles from "./style";

const supabaseURL = 'https://xxx.supabase.co'
const supabaseAnon = 'xxx'

const auth = new GoTrueClient({
  url: `${supabaseURL}/auth/v1`,
  headers: {
    accept: 'application/json',
    apikey: supabaseAnon,
  },
  localStorage: AsyncStorage,
  detectSessionInUrl: true
})


const Home = () => {
  const [nemail, setemail] = useState('Not signed in');
  let [session, setSession] = useState(null)
  let [email, setEmail] = useState(AsyncStorage.getItem('email') ?? '')
  let [pass, setPassword] = useState('')
  let [rememberMe, setRememberMe] = useState(false)

  useEffect(() => {
    setSession(auth.currentSession)
    auth.onAuthStateChange((event, session) => setSession(session))
  }, [])
  async function handleEmailSignIn() {
    console.log(pass)
    let {data, error} = await auth.signIn({email: email, password: pass})
    console.log(data);
    console.log(error)
    if (error) console.log('error', error.message)
  }
  async function handleEmailSignUp() {
    let { error } = await auth.signUp({ email: email, password: password })
    if (error) console.log('error', error.message)
  }
  async function handleSignOut() {
    let { error } = await auth.signOut()
    if (error) console.log('error', error.message)
      else console.log('logged out OK')
  }

  return (
      
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <StatusBar barStyle="light-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Not Logged In</Text>
            <TextInput onChangeText={(e) => setEmail(e)} placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput onChangeText={(p) => setPassword(p)} placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              style={styles.loginButton}
              onPress={() => handleEmailSignIn()}
              title="Login"
            />
            <Button
              style={styles.loginButton}
              onPress={() => handleEmailSignUp()}
              title="Sign Up"
            />
            <Button
              style={{
                ...styles.loginButton,
                backgroundColor: '#F48024'
              }}
              onPress={() => handleSignOut()}
              title="SignOut"
            />
            <Button
              style={styles.fbLoginButton}
              onPress={() => this.onFbLoginPress()}
              title="Login with Facebook"
              color="#3897f1"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  )
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
