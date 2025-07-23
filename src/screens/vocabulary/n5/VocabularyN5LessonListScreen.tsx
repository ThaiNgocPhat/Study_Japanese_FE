import React from 'react'
import TopicListScreen from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import { generateLessons } from 'src/utils/lessonUtils'

const VocabularyN5LessonListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const topics = generateLessons(1, 25, navigation, 'N5')

  return <TopicListScreen screenTitle="Từ vựng N5" topics={topics} />
}

export default VocabularyN5LessonListScreen
