import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, TextInput } from 'react-native'
import { vw } from 'react-native-expo-viewport-units'
import DateTimePicker from '@react-native-community/datetimepicker'
import axios from 'axios'
import { Picker } from '@react-native-picker/picker'
import * as ImagePicker from 'expo-image-picker'
import Toast from 'react-native-root-toast'

export function BookedBottom({ hospitalId, doctorId, reload }) {
  const [date, setDate] = useState(new Date())
  const [showDate, setShowDate] = useState(false)
  const [selectedTime, setSelectedTime] = useState('')
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [illness, setIllness] = useState('')
  const [loading, setLoading] = useState(false)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate ? selectedDate : new Date()
    setShowDate(false)
    setDate(currentDate)
  }

  const showDatepicker = () => {
    setShowDate(true)
  }

  const submit = () => {
    setLoading(true)
    try {
      const body = {
        date: date.toString(),
        name,
        email,
        hospitalId,
        doctorId,
        illness,
        time: selectedTime,
        number: number.toString(),
        image,
      }
      if (
        !date ||
        !name ||
        !email ||
        !hospitalId ||
        !doctorId ||
        !illness ||
        !selectedTime ||
        !number ||
        !image
      ) {
        Toast.show('All forms must be filled', {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 2,
          backgroundColor: '#00BFFF',
          textColor: 'white',
          opacity: 1,
        })
        setLoading(false)
      } else {
        axios
          .post('https://hosapi.herokuapp.com/appointment/book', body)
          .then((res) => {
            setLoading(false)
            if (res.data.hasError === false) {
              Toast.show('Appointment Booked Successfully', {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 2,
                backgroundColor: '#00FF00',
                textColor: 'white',
                opacity: 1,
              })
              reload()
            } else {
              Toast.show(res.data.message, {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 2,
                backgroundColor: '#DC143C',
                textColor: 'white',
                opacity: 1,
              })
            }
          })
      }
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <View style={styles.all}>
      <Text style={styles.bio}>Bio Data</Text>

      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder='name'
        // keyboardType=''
      />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder='email'
        // keyboardType=''
      />

      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder='phone number'
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        onChangeText={setIllness}
        value={illness}
        placeholder='illness'
      />

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
        <Button
          onPress={showDatepicker}
          title='Select Appointment Date'
          color='#7393B3'
        />
      </View>

      <View style={styles.picker}>
        <Picker
          selectedValue={selectedTime}
          onValueChange={(itemValue, itemIndex) => setSelectedTime(itemValue)}
          style={styles.select}
        >
          <Picker.Item label='Select Appointment Time' />
          <Picker.Item label='9:00am - 10:00am' value='9:00am - 10:00am' />
          <Picker.Item label='10:00am - 11:00am' value='10:00am - 11:00am' />
          <Picker.Item label='11:00am - 12:00pm' value='11:00am - 12:00pm' />
          <Picker.Item label='12:00pm - 1:00pm' value='12:00pm - 1:00pm' />
          <Picker.Item label='1:00pm - 2:00pm' value='1:00pm - 2:00pm' />
          <Picker.Item label='2:00pm - 3:00pm' value='2:00pm - 3:00pm' />
          <Picker.Item label='3:00pm - 4:00pm' value='3:00pm - 4:00pm' />
        </Picker>
      </View>

      <View style={styles.image}>
        <Button title='Select Image' onPress={pickImage} color='#7393B3' />
      </View>

      <View style={styles.submit}>
        <Button
          onPress={submit}
          title={!loading ? 'Book an Appointment' : 'Booking Appointment...'}
          color='#7393B3'
        />
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
    height: 47,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#7393B3',
    backgroundColor: 'white',
    borderRadius: 6,
    width: vw(90),
  },
  picker: {
    // height: 40,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#7393B3',
    backgroundColor: 'white',
    borderRadius: 6,
    width: vw(90),
    paddingBottom: 8,
  },

  select: {
    height: 40,
    width: vw(90),
  },

  datepick: {
    height: 46,
    marginVertical: 12,
    borderWidth: 2,
    padding: 10,
    borderColor: '#7393B3',
    backgroundColor: 'white',
    borderRadius: 6,
    width: vw(90),
    opacity: 0.4,
  },

  submit: {
    height: 46,
    width: vw(90),
    marginVertical: 14,
  },

  image: {
    height: 46,
    width: vw(90),
    marginVertical: 12,
  },

  bio: {
    fontSize: 22,
    marginVertical: 5,
  },
})
