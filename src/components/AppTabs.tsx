import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import StudyScreen from '@screens/options/StudyScreen'
import PracticeScreen from '@screens/options/PracticeScreen'
// import SettingsScreen from '@screens/options/SettingsScreen'
const Tab = createBottomTabNavigator()

const AppTabs = ({ initialTab }: { initialTab: 'Study' | 'Practice' | 'Settings' }) => {
  return (
    <Tab.Navigator
      initialRouteName={initialTab}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Study') {
            return <Ionicons name="book-outline" size={size} color={color} />
          } else if (route.name === 'Practice') {
            return <MaterialCommunityIcons name="pencil-outline" size={size} color={color} />
          } else if (route.name === 'Settings') {
            return <Ionicons name="settings-outline" size={size} color={color} />
          }
          return null
        },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: '#4a7c59',
        tabBarInactiveTintColor: '#bbb',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Study" component={StudyScreen} options={{ tabBarLabel: 'Học tập' }} />
      <Tab.Screen
        name="Practice"
        component={PracticeScreen}
        options={{ tabBarLabel: 'Luyện tập' }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: 'Cài đặt' }} /> */}
    </Tab.Navigator>
  )
}

export default AppTabs
