import React, { useEffect, useState } from 'react'
import {
  Button,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native'
import { vw } from 'react-native-expo-viewport-units'
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler'
import { BookedBottom } from '../components/BookedBottom'
import { BookedTop } from '../components/BookedTop'

export function Book({ navigation }) {
  const [data, setData] = useState([])

  useEffect(() => {
    try {
      fetch('https://hosapi.herokuapp.com/hospital/all')
        .then((response) => response.json())
        .then((json) => {
          if (json.hasError === false) {
            setData(json.hospitals)
          }
        })
    } catch (err) {
      console.log('err')
    }
  }, [])

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
        <BookedTop />
        <BookedBottom />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7393B3',
    alignItems: 'center',
  },
})
