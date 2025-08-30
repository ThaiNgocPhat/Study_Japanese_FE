import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { RootStackParamList } from 'src/types/navigation'
type Props = {
  onPress?: () => void
}
const BackButtonSelect: React.FC<Props> = ({ onPress }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const handlePress = () => {
    if (onPress) onPress()
    else navigation.navigate('SelectVocabularyLevel')
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

export default BackButtonSelect
