import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import Banner from '../../assets/images/Banner.png'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
const StudyScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>()

  const features = [
    {
      name: 'Từ vựng',
      icon: <Ionicons name="book-outline" size={32} color="#88c9bf" />,
      onPress: () => navigation.navigate('SelectVocabularyLevel'),
    },
    {
      name: 'Kanji',
      icon: <MaterialCommunityIcons name="alphabet-latin" size={32} color="#88c9bf" />,
      onPress: () => navigation.navigate('SelectKanjiLevel'),
    },
    {
      name: 'Chữ cái',
      icon: <FontAwesome5 name="font" size={28} color="#88c9bf" />,
      onPress: () => navigation.navigate('KanaScreen', { type: 'hiragana' }),
    },
    {
      name: 'Hội thoại',
      icon: <Ionicons name="chatbox-ellipses-outline" size={32} color="#88c9bf" />,
    },
    {
      name: 'Ngữ pháp',
      icon: <MaterialCommunityIcons name="file-document-edit-outline" size={32} color="#88c9bf" />,
      onPress: () => navigation.navigate('SelectGrammarLevel'),
    },
  ]

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <Image source={Banner} style={styles.banner} resizeMode="cover" />
      <Text style={styles.text}>Học tiếng Nhật</Text>
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

export default StudyScreen

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
})
