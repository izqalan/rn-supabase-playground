const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
},
logoText: {
  fontSize: 30,
  fontWeight: "800",
  marginTop: 150,
  marginBottom: 30,
  textAlign: 'center',
},
loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 10,

},
loginButton: {
  backgroundColor: '#3897f1',
  borderRadius: 5,
  height: 45,
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 10,
  marginBottom: 10,
  
},
fbLoginButton: {
  height: 45,
  borderRadius: 5,
  paddingLeft: 10,
  paddingTop:20,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 10,
  backgroundColor: 'transparent',
},
};