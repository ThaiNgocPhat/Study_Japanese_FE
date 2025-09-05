import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { other } from 'assets/data/grammar/n5/other'
const GrammarKoSoADoScreen = () => {
  const grammarData = other.find((item) => item.id === '1')

  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp Phân biệt こ、そ、あ、ど</Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarKoSoADoScreen
