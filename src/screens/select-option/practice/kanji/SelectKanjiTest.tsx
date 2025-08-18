import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Banner from '../../../../../assets/images/Banner.png'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/navigation'
import Toast from 'react-native-toast-message'
import BackButton from '@components/BackButton'

const SelectKanjiTest = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const features = [
    {
      name: 'Kanji N5',
      icon: <MaterialCommunityIcons name="leaf" size={32} color="#88c9bf" />,
      onPress: () => {
        navigation.navigate('ChooseWordCountKanjiScreen', { level: 'N5' })
      },
    },
    {
      name: 'Kanji N4',
      icon: <MaterialCommunityIcons name="sprout" size={32} color="#88c9bf" />,
      onPress: () => {
        navigation.navigate('ChooseWordCountKanjiScreen', { level: 'N4' })
      },
    },
    {
      name: 'Kanji N3',
      icon: <MaterialIcons name="terrain" size={32} color="#88c9bf" />,
      onPress: () => {
        navigation.navigate('ChooseWordCountKanjiScreen', { level: 'N3' })
      },
    },
    {
      name: 'Kanji N2',
      icon: <MaterialCommunityIcons name="school" size={32} color="#88c9bf" />,
      onPress: () => {
        navigation.navigate('ChooseWordCountKanjiScreen', { level: 'N2' })
      },
    },
    {
      name: 'Kanji N1',
      icon: <MaterialCommunityIcons name="trophy-award" size={32} color="#88c9bf" />,
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
      <BackButton
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home', params: { screen: 'Practice' } }],
          })
        }}
      />
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

export default SelectKanjiTest
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
