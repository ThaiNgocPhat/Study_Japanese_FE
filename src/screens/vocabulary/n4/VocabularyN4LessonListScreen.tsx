import React from 'react'
import TopicListScreen from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import { generateLessons } from 'src/utils/lessonUtils'

const VocabularyN4LessonListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const topics = generateLessons(26, 50, navigation as any, 'N4')

  return <TopicListScreen screenTitle="Từ vựng N4" topics={topics} />
}

export default VocabularyN4LessonListScreen
