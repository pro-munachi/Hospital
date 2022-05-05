import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, TextInput, Image } from 'react-native'
import { vw } from 'react-native-expo-viewport-units'
import * as ImagePicker from 'expo-image-picker'

export function UploadImage({ navigation }) {
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

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: vw(90),
        marginTop: 16,
      }}
    >
      <Button title='Select Image' onPress={pickImage} color='#7393B3' />
      {/* {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )} */}
    </View>
  )
}

const styles = StyleSheet.create({
  all: {
    width: vw(90),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
