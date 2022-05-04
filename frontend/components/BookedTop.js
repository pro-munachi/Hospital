import React from 'react'
import { Button, Text, View, StyleSheet, TextInput } from 'react-native'
import { vw } from 'react-native-expo-viewport-units'

export function BookedTop({ navigation }) {
  return (
    <View style={styles.all}>
      <View style={styles.time}>
        <View style={styles.item}>
          <Text>23/05/2022 9:15am</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  all: {
    width: vw(90),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
