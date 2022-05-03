import React from 'react'
import { Button, Text, View, StyleSheet, TextInput, Image } from 'react-native'
import { vw } from 'react-native-expo-viewport-units'

export function HomeBottom({ navigation }) {
  return (
    <View style={styles.top}>
      <View style={styles.all}>
        <Text style={styles.text1}>Find A Close Hospital</Text>

        <View style={styles.data}>
          <View style={styles.left}>
            <View>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </View>

            <View style={styles.text}>
              <Text style={styles.name}>Umezurike Hospital</Text>
              <Text style={styles.address}>no 2 anyogu street</Text>
            </View>
          </View>

          <View style={styles.right}>
            <Button
              title='view'
              color='#7393B3'
              accessibilityLabel='View more about the hospital'
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: 'whitesmoke',
    marginVertical: 25,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: vw(100),
    alignItems: 'center',
    flex: 1,
  },

  all: {
    fontSize: 20,
    width: vw(90),
    height: 60,
    marginTop: 10,
  },

  text1: {
    fontSize: 17,
    marginVertical: 10,
  },

  data: {
    marginVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 66,
    height: 58,
  },

  text: {
    marginLeft: 5,
  },

  name: {
    fontSize: 16,
  },

  address: {
    fontSize: 13,
  },

  button: {
    width: 77,
  },
})
