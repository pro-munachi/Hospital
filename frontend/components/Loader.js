import React from 'react'
import { vw, vh } from 'react-native-expo-viewport-units'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

export const Loader = () => {
  return (
    <View style={styles.activity}>
      <ActivityIndicator size='large' color='#7393B3' />
    </View>
  )
}

const styles = StyleSheet.create({
  activity: {
    flex: 1,
    justifyContent: 'center',
    width: vw(100),
    height: vh(100),
  },
})
