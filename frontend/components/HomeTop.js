import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { vw } from 'react-native-expo-viewport-units'

export function HomeTop() {
  return (
    <View style={styles.top}>
      <View style={styles.text}>
        <Text style={styles.text1}>Find A Close</Text>
        <Text style={styles.text2}>Hospital To You</Text>
      </View>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder='useless placeholder'
        // keyboardType=''
      />
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
    marginTop: 16,
    paddingVertical: 13,
    width: vw(90),
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
  },
  text1: {
    fontSize: 16,
    color: 'white',
  },
  text2: {
    fontSize: 20,
    color: 'white',
  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 6,
  },
})
