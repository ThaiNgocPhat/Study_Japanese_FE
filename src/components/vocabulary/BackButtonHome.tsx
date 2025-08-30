import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/navigation'
import { Ionicons } from '@expo/vector-icons'
type Props = {
  onPress?: () => void
}
const BackButtonHome: React.FC<Props> = ({ onPress }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const handlePress = () => {
    if (onPress) onPress()
    else navigation.navigate('Home')
  }
  return (
    <TouchableOpacity style={styles.backButton} onPress={handlePress}>
      <Ionicons name="arrow-back" size={28} color="#4a4e69" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
    backgroundColor: '#ffffffcc',
    padding: 8,
    borderRadius: 20,
  },
})

export default BackButtonHome
