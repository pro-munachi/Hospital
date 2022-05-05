import React, { useEffect, useState } from 'react'
import {
  Button,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native'
import { vw } from 'react-native-expo-viewport-units'
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler'

import { HomeBottom } from '../components/HomeBottom'
import { HomeTop } from '../components/HomeTop'

export function Home({ navigation }) {
  const [doctors, setDoctors] = useState([])
  const [data, setData] = useState([])
  const [text, SetText] = useState()

  useEffect(() => {
    try {
      fetch('https://hosapi.herokuapp.com/hospital/all')
        .then((response) => response.json())
        .then((json) => {
          if (json.hasError === false) {
            setDoctors(json.hospitals)
            setData(json.hospitals)
          }
        })
    } catch (err) {
      console.log('err')
    }
  }, [])

  const search = (text) => {
    const filteredData = doctors.filter((value) => {
      const searchStr = text.toLowerCase()
      const name = value.name.toLowerCase().includes(searchStr)
      const address = value.address.toString().includes(searchStr)
      const number = value.number.toString().includes(searchStr)

      return name || number || address
    })

    setData(filteredData)
  }

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
        <View style={styles.top}>
          <View style={styles.text}>
            <Text style={styles.text1}>Find A Hospital</Text>
            <Text style={styles.text2}>Close To You</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => search(text)}
            value={text}
            placeholder='Search Hospitals'
          />
        </View>
        <HomeBottom hospital={data} navigation={navigation} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7393B3',
    alignItems: 'center',
  },

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
