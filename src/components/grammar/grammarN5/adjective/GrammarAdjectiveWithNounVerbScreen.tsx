import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN5 from '@assets/data/grammar/grammarN5'

const GrammarAdjectiveWithNounVerbScreen = () => {
  const grammarData = grammarN5.find((item) => item.id === 'adjective_with_noun_verb')

  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp Kết hợp Tính từ trong câu</Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarAdjectiveWithNounVerbScreen
