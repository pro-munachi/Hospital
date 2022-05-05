import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, TextInput } from 'react-native'
import { vw } from 'react-native-expo-viewport-units'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker'
import { UploadImage } from './UploadImage'
import * as ImagePicker from 'expo-image-picker'

export function BookedBottom({ navigation }) {
  const [date, setDate] = useState(new Date())
  const [showDate, setShowDate] = useState(false)
  const [selectedTime, setSelectedTime] = useState('')
  const [image, setImage] = useState(null)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

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
        {/* {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )} */}
      </View>

      <View style={styles.submit}>
        <Button
          //   onPress={showDatepicker}
          title='Book An Appointment'
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
})
