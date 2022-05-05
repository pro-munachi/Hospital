import React, { useEffect, useState } from 'react'
import { Button, Text, View, StyleSheet, TextInput } from 'react-native'
import { vw } from 'react-native-expo-viewport-units'

export function BookedTop({ navigation, id }) {
  const [data, setData] = useState([])

  useEffect(() => {
    try {
      fetch(`https://hosapi.herokuapp.com/appointment/doctor/${id}`)
        .then((response) => response.json())
        .then((json) => {
          if (json.hasError === false) {
            setData(json.doctor)
          }
        })
    } catch (err) {
      console.log('err')
    }
  }, [])

  return (
    <View style={styles.all}>
      <Text style={styles.appoint}>Booked Appointments</Text>
      <View style={styles.time}>
        {data.map((single) => (
          <View style={styles.item} key={single._id}>
            <Text>
              {single.date && single.date} {single.time && single.time}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  all: {
    width: vw(90),
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  appoint: {
    fontSize: 20,
    color: 'white',
    marginVertical: 8,
  },
  time: {
    display: 'flex',
    flexDirection: 'row',
    width: vw(90),
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  item: {
    backgroundColor: 'white',
    marginVertical: 4,
    marginHorizontal: 4,
    padding: 5,
    borderRadius: 8,
  },
})
