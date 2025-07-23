import React from 'react'
import TopicListScreen from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import { generateLessons } from 'src/utils/lessonUtils'

const VocabularyN3LessonListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const topics = generateLessons(1, 29, navigation, 'N3')

  return <TopicListScreen screenTitle="Từ vựng N3" topics={topics} />
}

export default VocabularyN3LessonListScreen
