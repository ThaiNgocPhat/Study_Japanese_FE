import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN5 from '@assets/data/grammar/grammarN5'
import { useRoute } from '@react-navigation/native'

const GrammarAdjectiveBasicScreen = () => {
  const grammarData = grammarN5.find((item) => item.id === 'adjective_basic')
  const route = useRoute<any>()
  const { topicIndex, totalTopics, storageKey } = route.params || {}

  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp Tính từ tiếng Nhật</Text>
  }

  return (
    <GrammarTemplateScreen
      storageKey={storageKey ?? 'grammarN5Progress'}
      screenTitle={grammarData.title}
      grammarSections={grammarData.sections}
      topicIndex={topicIndex}
      totalTopics={totalTopics}
    />
  )
}

export default GrammarAdjectiveBasicScreen
