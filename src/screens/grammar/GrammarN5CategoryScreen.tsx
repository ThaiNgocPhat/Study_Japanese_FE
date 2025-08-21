import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import Banner from 'assets/images/Banner.png'
import BackButton from '@components/BackButton'
import Toast from 'react-native-toast-message'

const GrammarN5CategoryScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  // const categories = [
  //   {
  //     name: 'Động từ',
  //     icon: <Ionicons name="walk-outline" size={32} color="#88c9bf" />,
  //     onPress: () => navigation.navigate('GrammarVerbN5TopicListScreen'),
  //     locked: false,
  //   },
  //   {
  //     name: 'Tính từ',
  //     icon: <Ionicons name="sunny-outline" size={32} color="#88c9bf" />,
  //     onPress: () => navigation.navigate('GrammarAdjectiveN5TopicListScreen'),
  //     locked: true,
  //   },
  //   {
  //     name: 'Danh từ',
  //     icon: <Ionicons name="book-outline" size={32} color="#88c9bf" />,
  //     onPress: () => navigation.navigate('GrammarNounN5TopicListScreen'),
  //     locked: true,
  //   },
  //   {
  //     name: 'Trợ từ',
  //     icon: <Ionicons name="ellipsis-horizontal-circle-outline" size={32} color="#88c9bf" />,
  //     onPress: () => navigation.navigate('GrammarParticleN5TopicListScreen'),
  //     locked: true,
  //   },
  //   {
  //     name: 'Các mẫu câu khác',
  //     icon: <Ionicons name="chatbubbles-outline" size={32} color="#88c9bf" />,
  //     onPress: () => navigation.navigate('OtherSentencePatternsScreen'),
  //     locked: true,
  //   },
  // ]

  const categories = [
    {
      name: 'Động từ',
      icon: <Ionicons name="walk-outline" size={32} color="#88c9bf" />,
      onPress: () => navigation.navigate('GrammarVerbN5TopicListScreen'),
      locked: false,
    },
    {
      name: 'Tính từ',
      icon: <Ionicons name="sunny-outline" size={32} color="#88c9bf" />,
      onPress: () => {},
      locked: true,
    },
    {
      name: 'Danh từ',
      icon: <Ionicons name="book-outline" size={32} color="#88c9bf" />,
      onPress: () => {},
      locked: true,
    },
    {
      name: 'Trợ từ',
      icon: <Ionicons name="ellipsis-horizontal-circle-outline" size={32} color="#88c9bf" />,
      onPress: () => {},
      locked: true,
    },
    {
      name: 'Các mẫu câu khác',
      icon: <Ionicons name="chatbubbles-outline" size={32} color="#88c9bf" />,
      onPress: () => {},
      locked: true,
    },
  ]
  const handlePress = (item: (typeof categories)[0]) => {
    if (item.locked) {
      Toast.show({
        type: 'info',
        text1: 'Chưa mở khóa',
        text2: 'Bạn chưa hoàn thành bài trước, vui lòng học xong để mở tiếp theo.',
      })
    } else {
      item.onPress()
    }
  }

  return (
    <LinearGradient colors={['#fdf6e3', '#fcefe3']} style={styles.container}>
      <BackButton />
      <Image source={Banner} style={styles.banner} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>Ngữ pháp N5</Text>

        <View style={styles.grid}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.box, item.locked && { opacity: 0.5 }]}
              onPress={() => handlePress(item)}
            >
              {item.icon}
              <Text style={styles.label}>{item.name}</Text>
              {item.locked && <Ionicons name="lock-closed-outline" size={24} color="#4a4e69" />}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </LinearGradient>
  )
}

export default GrammarN5CategoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  banner: {
    width: '100%',
    height: 300,
    marginBottom: 30,
  },
  content: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4a4e69',
    marginBottom: 16,
  },
  grid: {
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
