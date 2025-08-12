import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN5 from '@assets/data/grammar/grammarN5'

const GrammarAdverbsNegativeScreen = () => {
  const grammarData = grammarN5.find((item) => item.id === 'adverbs_negative')
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
