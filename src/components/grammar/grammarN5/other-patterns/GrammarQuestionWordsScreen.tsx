import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { other } from 'assets/data/grammar/n5/other'

const GrammarQuestionWordsScreen = () => {
  const grammarData = other.find((item) => item.id === '9')

  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>
        Không tìm thấy dữ liệu ngữ pháp Tổng hợp từ nghi vấn – 疑問詞
      </Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarQuestionWordsScreen
