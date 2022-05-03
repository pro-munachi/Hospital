import React from 'react'
import { Button, Text, View, StyleSheet, TextInput } from 'react-native'

export function HomeTop({ navigation }) {
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
        keyboardType='numeric'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
    marginTop: 16,
    paddingVertical: 13,
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
  },
})
