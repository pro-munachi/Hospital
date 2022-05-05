import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { vw } from 'react-native-expo-viewport-units'

import { BookedBottom } from '../components/BookedBottom'
import { BookedTop } from '../components/BookedTop'
import { Loader } from '../components/Loader'

export function Book({ route }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const { doctor, hospital } = route.params

  const reload = () => {
    try {
      fetch(`https://hosapi.herokuapp.com/appointment/doctor/${doctor}`)
        .then((response) => response.json())
        .then((json) => {
          if (json.hasError === false) {
            setData(json.doctor)
          }
        })
    } catch (err) {
      console.log('err')
    }
  }

  useEffect(() => {
    setLoading(true)
    try {
      fetch(`https://hosapi.herokuapp.com/appointment/doctor/${doctor}`)
        .then((response) => response.json())
        .then((json) => {
          if (json.hasError === false) {
            setData(json.doctor)
            setLoading(false)
          }
        })
    } catch (err) {
      console.log('err')
      setLoading(false)
    }
  }, [])

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
            <BookedTop id={doctor} data={data} />
            <BookedBottom
              hospitalId={hospital}
              doctorId={doctor}
              reload={reload}
            />
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
})
