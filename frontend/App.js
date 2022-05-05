import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootSiblingParent } from 'react-native-root-siblings'

import { Home } from './pages/Home'
import { Hospital } from './pages/Hospital'
import { Book } from './pages/Book'

export default function App() {
  const Stack = createStackNavigator()

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Details' component={Hospital} />
          <Stack.Screen name='Book' component={Book} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
