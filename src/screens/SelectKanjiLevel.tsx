import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Banner from '../../assets/images/Banner.png'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/navigation'

const SelectKanjiLevel = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const features = [
    {
      name: 'Kanji N5',
      icon: <Ionicons name="sparkles-outline" size={32} color="#88c9bf" />,
      onPress: () => navigation.navigate('KanjiN5Screen'),
    },
    {
      name: 'Kanji N4',
      icon: <MaterialCommunityIcons name="seed-outline" size={32} color="#88c9bf" />,
      onPress: () => navigation.navigate('KanjiN4Screen'),
    },
    {
      name: 'Kanji N3',
      icon: <MaterialCommunityIcons name="sprout-outline" size={32} color="#88c9bf" />,
      onPress: () => navigation.navigate('KanjiN3Screen'),
    },
    {
      name: 'Kanji N2',
      icon: <MaterialCommunityIcons name="tree-outline" size={32} color="#88c9bf" />,
      onPress: () => navigation.navigate('KanjiN2Screen'),
    },
    {
      name: 'Kanji N1',
      icon: <Ionicons name="diamond-outline" size={32} color="#88c9bf" />,
      onPress: () =>
        Toast.show({
          type: 'info',
          text1: 'Kanji N1',
          text2: 'Tính năng này đang được phát triển và sẽ sớm ra mắt!',
          position: 'bottom',
        }),
    },
  ]
  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#4a4e69" />
      </TouchableOpacity>
      <Image source={Banner} style={styles.banner} resizeMode="cover" />
      <Text style={styles.text}>Cấp độ</Text>
      <View style={styles.grid}>
        {features.map((item, index) => (
          <TouchableOpacity key={index} style={styles.box} onPress={item.onPress}>
            {item.icon}
            <Text style={styles.label}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  )
}

export default SelectKanjiLevel
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf6e3',
  },
  banner: {
    width: '100%',
    height: 300,
    marginBottom: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4a4e69',
    marginLeft: 16,
    marginBottom: 16,
  },
  grid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box: {
    width: '47%',
    aspectRatio: 1,
    backgroundColor: '#d3e0dc',
    borderRadius: 12,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#4a4e69',
  },
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
