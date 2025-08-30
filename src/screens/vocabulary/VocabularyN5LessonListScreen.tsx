import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TopicListScreen from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import { generateLessons } from 'src/utils/lessonUtils'
import Toast from 'react-native-toast-message'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'
import BackButtonSelect from '@components/vocabulary/BackButtonSelect'

const STORAGE_KEY = 'unlockedLessons_N5'

const VocabularyN5LessonListScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'VocabularyLessonDetailScreen'>>()

  const [unlockedLessons, setUnlockedLessons] = useState<number[]>([1])

  useEffect(() => {
    ;(async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY)
      if (saved) {
        setUnlockedLessons(JSON.parse(saved))
      }
    })()
  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const completeId = await AsyncStorage.getItem('lastCompletedLesson_N5')
      if (completeId) {
        const idNum = Number(completeId)
        const nextLesson = idNum + 1
        if (!unlockedLessons.includes(nextLesson) && nextLesson <= 25) {
          const updated = [...unlockedLessons, nextLesson]
          setUnlockedLessons(updated)
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
        }
        if (idNum === 25) {
          const unlockedN4 = await AsyncStorage.getItem('unlockedLessons_N4')
          const parsedN4 = unlockedN4 ? JSON.parse(unlockedN4) : []
          if (!parsedN4.includes(26)) {
            const updatedN4 = [...parsedN4, 26]
            await AsyncStorage.setItem('unlockedLessons_N4', JSON.stringify(updatedN4))
          }
        }

        await AsyncStorage.removeItem('lastCompletedLesson_N5')
      }
    })
    return unsubscribe
  }, [navigation, unlockedLessons])

  const topics = generateLessons(1, 25, navigation, 'N5', unlockedLessons)

  const handleLockedPress = () => {
    Toast.show({
      type: 'info',
      text1: 'Bài học bị khoá',
      text2: 'Vui lòng hoàn thành từng bài để mở khoá bài tiếp theo.',
      position: 'bottom',
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <BackButtonSelect />
      <TopicListScreen screenTitle="Từ vựng N5" topics={topics} onLockedPress={handleLockedPress} />
    </View>
  )
}

export default VocabularyN5LessonListScreen
