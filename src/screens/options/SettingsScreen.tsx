import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/navigation'
import { LinearGradient } from 'expo-linear-gradient'

const SettingsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('Login')}>
        <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.avatar} />
        <Text style={styles.loginText}>Đăng nhập</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <View style={styles.diamondRow}>
        <MaterialCommunityIcons name="diamond-stone" size={24} color="#0077b6" />
        <Text style={styles.diamondText}>Nâng mức kim cương</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={24} color="#e63946" />
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 30,
    marginRight: 12,
  },
  loginText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4a4e69',
  },
  divider: {
    height: 1,
    backgroundColor: '#d3e0dc',
    marginVertical: 16,
  },
  diamondRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  diamondText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#4a4e69',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    color: '#e63946',
    marginLeft: 8,
  },
})

export default SettingsScreen
