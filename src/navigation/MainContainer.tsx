import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import PlayersScreen from '../screens/Players';
import CourtsScreen from '../screens/Courts';
import BookingsScreen from '../screens/Bookings';
import SettingsScreen from '../screens/Settings';

//Screen names
const homeName = "Players";
const mapName = "Map";
const bookName = "Book a court"
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === bookName) {
              iconName = focused ? 'calendar' : 'calendar-outline';

            } else if (rn === mapName) {
              iconName = focused ? 'map' : 'map-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          "tabBarActiveTintColor": "green",
          "tabBarInactiveTintColor": "grey",
            "tabBarLabelStyle": {
              "paddingBottom": 10,
              "fontSize": 10
            },
            "tabBarStyle": [
              {
                "display": "flex",
                "padding": 10,
                "height": 100
              },
              null
            ]
        })}>

        <Tab.Screen name={homeName} component={PlayersScreen} />
        <Tab.Screen name={mapName} component={CourtsScreen} />
        <Tab.Screen name={bookName} component={BookingsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default MainContainer;