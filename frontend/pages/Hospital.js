import axios from 'axios'
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
import { HospitalBottom } from '../components/HospitalBottom'
import { HospitalMiddle } from '../components/HospitalMiddle'
import { Loader } from '../components/Loader'

export function Hospital({ navigation, route }) {
  const [doctors, setDoctors] = useState([])
  const [data, setData] = useState([])
  const [hospital, setHospital] = useState([])
  const [text, SetText] = useState()
  const [loading, setLoading] = useState(false)

  const id = route.params.id

  useEffect(() => {
    setLoading(true)
    try {
      fetch(`https://hosapi.herokuapp.com/doctor/findbyhospital/${id}`)
        .then((response) => response.json())
        .then((json) => {
          if (json.hasError === false) {
            setDoctors(json.doctors)
            setData(json.doctors)
            setLoading(false)
          }
        })

      axios.get(`https://hosapi.herokuapp.com/hospital/${id}`).then((res) => {
        setHospital(res.data.hospital)
        setLoading(false)
      })
    } catch (err) {
      console.log('err')
      setLoading(false)
    }
  }, [])

  const search = (text) => {
    SetText(text)
    const filteredData = doctors.filter((value) => {
      const searchStr = text.toLowerCase()
      const name = value.name.toLowerCase().includes(searchStr)
      const specialty = value.specialty.toString().includes(searchStr)
      const number = value.number.toString().includes(searchStr)

      return name || number || specialty
    })

    setData(filteredData)
  }

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
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
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  paddingBottom: 12,
                  fontSize: 20,
                }}
              >
                {hospital.name}
              </Text>
              <View style={styles.text}>
                <Text style={styles.text1}>Find Your Desired</Text>
                <Text style={styles.text2}>Doctor Right Now</Text>
              </View>
              <TextInput
                style={styles.input}
                onChangeText={(text) => search(text)}
                value={text}
                placeholder='Search Doctors'
              />
            </View>

            <HospitalMiddle />
            <HospitalBottom doctors={data} navigation={navigation} id={id} />
          </View>
        </ScrollView>
      )}
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7393B3',
    alignItems: 'center',
  },

  top: {
    marginTop: 2,
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
