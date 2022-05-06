import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { vw } from 'react-native-expo-viewport-units'
import { TouchableOpacity } from 'react-native-gesture-handler'

export function HomeBottom({ navigation, hospital }) {
  return (
    <>
      <View style={styles.top}>
        <View style={styles.all}>
          <Text style={styles.text1}>Hospitals Around You </Text>
          {hospital.map((item) => {
            return (
              <React.Fragment key={item._id}>
                <TouchableOpacity
                  style={{ backgroundColor: 'white', paddingHorizontal: 13 }}
                  keyboardShouldPersistTaps='always'
                  onPress={() =>
                    navigation.navigate('Details', { id: item._id })
                  }
                >
                  <View style={styles.con}>
                    <View style={styles.data}>
                      <View style={styles.left}>
                        <View style={styles.text}>
                          <Text style={styles.name}>
                            Name: {item && item.name}
                          </Text>
                          <Text style={styles.address}>
                            Address: {item.address}
                          </Text>
                          <Text style={styles.address}>
                            Phone: {item.number}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <Button title='View More' color='#7393B3' />
                  </View>
                  <View style={styles.divider}></View>
                </TouchableOpacity>
                <View style={{ height: 15 }}></View>
              </React.Fragment>
            )
          })}
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: 'whitesmoke',
    marginTop: 25,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: vw(100),
    alignItems: 'center',
    display: 'flex',
  },

  all: {
    fontSize: 20,
    width: vw(90),
    height: 60,
    marginTop: 10,
    height: 'auto',
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

  con: {
    // backgroundColor: '',
  },

  divider: {
    height: 20,
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
