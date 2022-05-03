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
import { HomeTop } from '../components/HomeTop'

const { width } = Dimensions.get('screen')

export function Home({ navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      vertical={true}
    >
      <View style={{ width: vw(93) }}>
        <HomeTop />
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
