import React from 'react'
import {
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native'
import { vw } from 'react-native-expo-viewport-units'
import { HomeBottom } from '../components/HomeBottom'
import { HomeTop } from '../components/HomeTop'

const { width } = Dimensions.get('screen')

export function Home({ navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      vertical={true}
    >
      <View
        style={{
          width: vw(100),
          flex: 1,
          alignItems: 'center',
        }}
      >
        <HomeTop />
        <HomeBottom />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7393B3',
    alignItems: 'center',
    // justifyContent: 'center',
  },
})
