import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { vw } from 'react-native-expo-viewport-units'
import { FontAwesome5 } from '@expo/vector-icons'

export function HospitalMiddle() {
  return (
    <View style={styles.top}>
      <View style={styles.heart}>
        <FontAwesome5 name='heart' size={24} color='#DDA0DD' />
        <Text style={styles.iconName}>Cardeologist</Text>
      </View>
      <View style={styles.heart}>
        <FontAwesome5 name='teeth-open' size={24} color='#3CB371' />
        <Text style={styles.iconName}>Dentist</Text>
      </View>
      <View style={styles.heart}>
        <FontAwesome5 name='bone' size={24} color='#FA8072' />
        <Text style={styles.iconName}>Orthopaedic</Text>
      </View>
      {/* <FontAwesome5 name='hospital' size={24} color='red' /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
    marginTop: 16,
    paddingVertical: 13,
    width: vw(90),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  heart: {
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
    width: 94,
    height: 70,
  },
})
