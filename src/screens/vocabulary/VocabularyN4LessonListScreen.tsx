import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TopicListScreen from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import { generateLessons } from 'src/utils/lessonUtils'
import Toast from 'react-native-toast-message'

const STORAGE_KEY = 'unlockedLessons_N4'

const VocabularyN4LessonListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const [unlockedLessons, setUnlockedLessons] = useState<number[]>([])

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
      const completeId = await AsyncStorage.getItem('lastCompletedLesson_N4')
      if (completeId) {
        const idNum = Number(completeId)
        const nextLesson = idNum + 1
        if (!unlockedLessons.includes(nextLesson) && nextLesson <= 50) {
          const updated = [...unlockedLessons, nextLesson]
          setUnlockedLessons(updated)
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
        }
        if (idNum === 50) {
          const unlockedN3 = await AsyncStorage.getItem('unlockedLessons_N3')
          const parsedN3 = unlockedN3 ? JSON.parse(unlockedN3) : []
          if (!parsedN3.includes(1)) {
            const updatedN3 = [...parsedN3, 1]
            await AsyncStorage.setItem('unlockedLessons_N3', JSON.stringify(updatedN3))
          }
        }

        await AsyncStorage.removeItem('lastCompletedLesson_N4')
      }
    })
    return unsubscribe
  }, [navigation, unlockedLessons])

  const topics = generateLessons(26, 50, navigation as any, 'N4', unlockedLessons)

  const handleLockedPress = () => {
    Toast.show({
      type: 'info',
      text1: 'Bài học bị khoá',
      text2: 'Vui lòng hoàn thành từng bài để mở khoá bài tiếp theo.',
      position: 'bottom',
    })
  }

  return (
    <TopicListScreen screenTitle="Từ vựng N4" topics={topics} onLockedPress={handleLockedPress} />
  )
}

export default VocabularyN4LessonListScreen
