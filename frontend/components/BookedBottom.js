import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, TextInput } from 'react-native'
import { vw } from 'react-native-expo-viewport-units'
import DateTimePicker from '@react-native-community/datetimepicker'

export function BookedBottom({ navigation }) {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [showTime, setShowTime] = useState(false)
  const [showDate, setShowDate] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate ? selectedDate : new Date()
    setShowDate(false)
    setDate(currentDate)
  }

  const onChangeTime = (event, selectedDate) => {
    const currentDate = selectedDate ? selectedDate : new Date()
    setShowTime(false)
    setTime(currentDate)
  }

  //   const showMode = (currentMode) => {
  //     setShow(true)
  //     setMode(currentMode)
  //   }

  const showDatepicker = () => {
    setShowDate(true)
  }

  const showTimepicker = () => {
    setShowTime(true)
  }

  return (
    <View style={styles.all}>
      <Text>Data</Text>

      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder='name'
        // keyboardType=''
      />

      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder='email'
        // keyboardType=''
      />

      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder='phone number'
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder='illness'
      />

      {/* <View>
        <Button onPress={showTimepicker} title='Show time picker!' />
      </View> */}
      <View>
        {showDate && (
          <DateTimePicker
            testID='dateTimePicker'
            timeZoneOffsetInMinutes={0}
            value={date}
            mode='date'
            is24Hour={true}
            display='default'
            onChange={onChange}
          />
        )}
        <Text style={styles.datepick}>
          selected: {date && date.toLocaleString()}
        </Text>
        <Button onPress={showDatepicker} title='Show date picker!' />
      </View>

      <View>
        {showTime && (
          <DateTimePicker
            testID='dateTimePicker'
            timeZoneOffsetInMinutes={0}
            value={time}
            mode='time'
            is24Hour={false}
            display='default'
            onChange={onChangeTime}
          />
        )}
        <Text style={styles.datepick}>
          selected: {time && time.toLocaleString()}
        </Text>
        <Button onPress={showTimepicker} title='Show date picker!' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  all: {
    backgroundColor: 'whitesmoke',
    marginTop: 25,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: vw(100),
    alignItems: 'center',
    display: 'flex',
  },

  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 6,
    width: vw(90),
  },

  datepick: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 6,
    width: vw(90),
    opacity: 0.4,
  },
})
