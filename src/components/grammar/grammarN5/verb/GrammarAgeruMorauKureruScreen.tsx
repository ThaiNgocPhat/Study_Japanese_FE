import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { verb } from 'assets/data/grammar/n5/verb'
const GrammarAgeruMorauKureruScreen = () => {
  const grammarData = verb.find((item) => item.id === '7')

  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>
        Không tìm thấy dữ liệu ngữ pháp Phân biệt あげます・もらいます・くれます
      </Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarAgeruMorauKureruScreen
