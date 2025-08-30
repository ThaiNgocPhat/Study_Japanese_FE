import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TopicListScreen from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import { generateLessons } from 'src/utils/lessonUtils'
import Toast from 'react-native-toast-message'
import BackButtonSelect from '@components/vocabulary/BackButtonSelect'
import { View } from 'react-native'

const STORAGE_KEY = 'unlockedLessons_N3'

const VocabularyN3LessonListScreen = () => {
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
      const completeId = await AsyncStorage.getItem('lastCompletedLesson_N3')
      if (completeId) {
        const idNum = Number(completeId)
        const nextLesson = idNum + 1
        if (!unlockedLessons.includes(nextLesson) && nextLesson <= 29) {
          const updated = [...unlockedLessons, nextLesson]
          setUnlockedLessons(updated)
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
        }
        if (idNum === 29) {
          const unlockedN2 = await AsyncStorage.getItem('unlockedLessons_N2')
          const parsedN2 = unlockedN2 ? JSON.parse(unlockedN2) : []
          if (!parsedN2.includes(1)) {
            const updatedN2 = [...parsedN2, 1]
            await AsyncStorage.setItem('unlockedLessons_N2', JSON.stringify(updatedN2))
          }
        }

        await AsyncStorage.removeItem('lastCompletedLesson_N3')
      }
    })
    return unsubscribe
  }, [navigation, unlockedLessons])

  const topics = generateLessons(1, 29, navigation as any, 'N3', unlockedLessons)

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
      <TopicListScreen screenTitle="Từ vựng N3" topics={topics} onLockedPress={handleLockedPress} />
    </View>
  )
}

export default VocabularyN3LessonListScreen
