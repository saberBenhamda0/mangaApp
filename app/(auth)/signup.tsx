import { StyleSheet, Image, Platform, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Link } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.main_div}>
      
      <View style={styles.login_view_wrap}>
        <Text style={{fontSize:40, fontWeight:600, marginTop:20 ,marginBottom:10}}>Signup</Text>
        <Text style={{color:"gray", marginBottom:20 }}>Enter your email and password to log in. </Text>
        <TextInput style={styles.input} placeholder='Entre username' />
        <TextInput style={styles.input} placeholder='Entre your Email' />
        <TextInput style={styles.input} secureTextEntry placeholder='Entre your password' />
        <TextInput style={styles.input} secureTextEntry placeholder='Confirme your password' />
        <View style={styles.middle_wrapper}>
        </View>
        <TouchableOpacity style={styles.button} >
          <Text style={{color:'white', fontSize:20, margin:"auto"}}>Signup</Text>
        </TouchableOpacity>
        <View style={styles.bottom_wrapper}>
        <Text style={{color:'gray', marginTop:10, fontWeight:500}}>
        Already have an account?
        </Text>
        <Link style={{color:'#1D61E7', marginTop:10,fontWeight:500}} href={'/(auth)/signup'} > Login</Link>
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
      marginBottom:20,
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