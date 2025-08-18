import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import Toast from 'react-native-toast-message'
import { RootStackParamList } from 'src/types/navigation'
import Banner from '../../../../../assets/images/Banner.png'
import BackButton from '@components/BackButton'

const SelectGrammarTest = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const features = [
    {
      name: 'Ngữ pháp N5',
      icon: <MaterialCommunityIcons name="alpha-a-box-outline" size={32} color="#88c9bf" />,
      onPress: () => {
        navigation.navigate('ChooseWordCountScreen', { level: 'N5' })
      },
    },
    {
      name: 'Ngữ pháp N4',
      icon: <MaterialCommunityIcons name="alpha-b-box-outline" size={32} color="#88c9bf" />,
      onPress: () => {
        navigation.navigate('ChooseWordCountScreen', { level: 'N4' })
      },
    },
    {
      name: 'Ngữ pháp N3',
      icon: <MaterialCommunityIcons name="alpha-c-box-outline" size={32} color="#88c9bf" />,
      onPress: () => {
        navigation.navigate('ChooseWordCountScreen', { level: 'N3' })
      },
    },
    {
      name: 'Ngữ pháp N2',
      icon: <MaterialCommunityIcons name="alpha-d-box-outline" size={32} color="#88c9bf" />,
      onPress: () => {
        navigation.navigate('ChooseWordCountScreen', { level: 'N2' })
      },
    },
    {
      name: 'Ngữ pháp N1',
      icon: <MaterialIcons name="lock-clock" size={32} color="#88c9bf" />,
      onPress: () =>
        Toast.show({
          type: 'info',
          text1: 'Ngữ pháp N1',
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

export default SelectGrammarTest
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
