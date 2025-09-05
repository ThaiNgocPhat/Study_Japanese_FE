import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { adjective } from '@assets/data/grammar/n5/adjective'
const GrammarGaSukiDesuScreen = () => {
  const grammarData = adjective.find((item) => item.id === '6')

  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～がすきです</Text>
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarGaSukiDesuScreen
