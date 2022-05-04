import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

export function Hospital({ navigation, route }) {
  const id = route.params.id

  console.log(id)

  return (
    <View style={styles.container}>
      <Text>This is the Details page</Text>
      <Button
        title='Back to the Home Screen'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
