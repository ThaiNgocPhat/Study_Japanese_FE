import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Banner from 'assets/images/Banner.png'
import Toast from 'react-native-toast-message'

const STORAGE_KEY = 'grammarN5Progress'

type GrammarProgress = {
  verb: { unlocked: number; completed: number[] }
  adjective: { unlocked: number; completed: number[] }
  unlockedCategories: string[]
}

const GrammarN5CategoryScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const [unlockedCategories, setUnlockedCategories] = useState<string[]>(['verb']) // mặc định chỉ có Verb

  useEffect(() => {
    const loadProgress = async () => {
      const value = await AsyncStorage.getItem(STORAGE_KEY)
      if (value) {
        const parsed: GrammarProgress = JSON.parse(value)
        setUnlockedCategories(parsed.unlockedCategories || ['verb'])
      }
    }
    const unsubscribe = navigation.addListener('focus', loadProgress)
    loadProgress()
    return unsubscribe
  }, [navigation])

  const categories = [
    {
      name: 'Động từ',
      key: 'verb',
      icon: <Ionicons name="walk-outline" size={32} color="#88c9bf" />,
      onPress: () => navigation.navigate('GrammarVerbN5TopicListScreen'),
    },
    {
      name: 'Tính từ',
      key: 'adjective',
      icon: <Ionicons name="sunny-outline" size={32} color="#88c9bf" />,
      onPress: () => navigation.navigate('GrammarAdjectiveN5TopicListScreen'),
    },
    {
      name: 'Danh từ',
      key: 'noun',
      icon: <Ionicons name="book-outline" size={32} color="#88c9bf" />,
      onPress: () => {},
    },
    {
      name: 'Trợ từ',
      key: 'particle',
      icon: <Ionicons name="ellipsis-horizontal-circle-outline" size={32} color="#88c9bf" />,
      onPress: () => {},
    },
    {
      name: 'Các mẫu câu khác',
      key: 'others',
      icon: <Ionicons name="chatbubbles-outline" size={32} color="#88c9bf" />,
      onPress: () => {},
    },
  ]

  const handlePress = (item: (typeof categories)[0]) => {
    if (!unlockedCategories.includes(item.key)) {
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
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('SelectGrammarLevel')}
      >
        <Ionicons name="arrow-back" size={28} color="#4a4e69" />
      </TouchableOpacity>
      <Image source={Banner} style={styles.banner} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>Ngữ pháp N5</Text>

        <View style={styles.grid}>
          {categories.map((item, index) => {
            const locked = !unlockedCategories.includes(item.key)
            return (
              <TouchableOpacity
                key={index}
                style={[styles.box, locked && { opacity: 0.5 }]}
                onPress={() => handlePress(item)}
              >
                {item.icon}
                <Text style={styles.label}>{item.name}</Text>
                {locked && <Ionicons name="lock-closed-outline" size={24} color="#4a4e69" />}
              </TouchableOpacity>
            )
          })}
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
