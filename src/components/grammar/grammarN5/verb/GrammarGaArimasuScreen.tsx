import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { verb } from 'assets/data/grammar/n5/verb'
const GrammarGaArimasuScreen = () => {
  const grammarData = verb.find((item) => item.id === '8')

  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～があります／～がいます</Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarGaArimasuScreen
