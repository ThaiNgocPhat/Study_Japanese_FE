import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { other } from 'assets/data/grammar/n5/other'

const GrammarAdverbsNegativeScreen = () => {
  const grammarData = other.find((item) => item.id === '8')

  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>
        Không tìm thấy dữ liệu ngữ pháp Những phó từ đi với câu phủ định
      </Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarAdverbsNegativeScreen
