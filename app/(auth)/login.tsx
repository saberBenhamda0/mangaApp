import {  Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import logo from '@/assets/logo.png'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.main_div}>
      
      <View style={styles.login_view_wrap}>
        <Image style={styles.logo} source={logo} resizeMode='contain' />
        <Text style={{fontSize:40, fontWeight:600, marginBottom:10}}>Login</Text>
        <Text style={{color:"gray", marginBottom:20 }}>Enter your email and password to log in. </Text>
        <TextInput style={styles.input} placeholder='Entre your Email' />
        <TextInput style={styles.input} secureTextEntry placeholder='Entre your password' />
        <View style={styles.middle_wrapper}>
          <Text style={{color:"#1D61E7", fontWeight:600}}> Forgot Password</Text>
          <Text>#</Text>
        </View>
        <TouchableOpacity style={styles.button} >
          <Text style={{color:'white', fontSize:20, margin:"auto"}}>Login</Text>
        </TouchableOpacity>
        <View style={styles.bottom_wrapper}>
        <Text style={{color:'gray', fontWeight:500}}>
        Don’t have an account?
        </Text>
        <Link style={{color:'#1D61E7', fontWeight:500}} href={'/(auth)/signup'} > Sign Up</Link>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  main_div:{
    position:'relative',
    flex:1, // this so it take the view take full screen
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
  },
  upper_div:{
    backgroundColor:"#EBC894",
    position:'absolute',
    top:0,
    right:10,
    width:20,
    height:20,
  },
  login_view_wrap:{
    width:'80%',
    height:'90%',
    backgroundColor:"rgba(255,255,255,0.4)",
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    gap:5,
    borderColor:"black",
    borderWidth:1,
    borderRadius:10,
    borderStyle:'solid',
    },
    input:{
      borderWidth:1,
      borderRadius:5,
      borderStyle:'solid',
      borderColor:'#EDF1F3',
      backgroundColor:"white",
      width:"90%",
      marginTop:4,
      
    },
    middle_wrapper:{
      marginTop:10,
      marginBottom:20,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'90%',
    },
    button:{
      width:"90%",
      height:50,
      borderRadius:10,
      backgroundColor:"#1D61E7",

    },
    bottom_wrapper:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
  logo:{
    width:40,
    height:40,
    marginTop:16,
  }
});



/*  
    
  },
  bottom_div:{
    backgroundColor:"#B49EF4",
    position:'absolute',
    bottom:0,
    left:10,
    width:20,
    height:20,
    zIndex:10,
  },

  */