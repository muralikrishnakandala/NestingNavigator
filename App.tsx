import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons"
import DetailsScreen from './screens/DetailsScreen'
import ContactScreen from './screens/ContactScreen'
import { MainScreen } from './screens/MainScreen'
const Drawer = createDrawerNavigator()

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={MainScreen} />
				<Drawer.Screen name="Details" component={DetailsScreen} />
				<Drawer.Screen name="Contact" component={ContactScreen} />
			</Drawer.Navigator>
    </NavigationContainer>
    
  )
}

export default App
