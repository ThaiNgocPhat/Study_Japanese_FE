import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { grammarN5 } from '@assets/data/grammar/n5/grammarN5'
const GrammarKoSoADoScreen = () => {
  const grammarData = grammarN5
    .find((item) => item.otherPatterns?.some((v) => v.id === '1'))
    ?.otherPatterns?.find((v) => v.id === '1')
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
