import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'

const Index = (navigation : any) => {

    return (
    <View>
      <Link href={'/(home)/home'}>home</Link>
        <Link href={'/(auth)/login'} >login</Link>
        <Link href={'/(auth)/signup'} >signup</Link>

    </View>
  )
}

export default Index

const styles = StyleSheet.create({})