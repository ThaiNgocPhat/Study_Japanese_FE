import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { grammarN5 } from '@assets/data/grammar/n5/grammarN5'

const GrammarDakeShikaScreen = () => {
  const grammarData = grammarN5
    .find((item) => item.otherPatterns?.some((v) => v.id === '5'))
    ?.otherPatterns?.find((v) => v.id === '5')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～だけ、しか</Text>
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarDakeShikaScreen
