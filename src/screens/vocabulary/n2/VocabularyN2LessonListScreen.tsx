import React from 'react'
import TopicListScreen from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import { generateLessons } from 'src/utils/lessonUtils'

const VocabularyN2LessonListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const topics = generateLessons(1, 50, navigation as any, 'N2')

  return <TopicListScreen screenTitle="Từ vựng N2" topics={topics} />
}

export default VocabularyN2LessonListScreen
