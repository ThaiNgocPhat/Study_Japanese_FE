import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { adjective } from '@assets/data/grammar/n5/adjective'

const GrammarGaHoshiiDesuScreen = () => {
  const grammarData = adjective.find((item) => item.id === '5')

  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～がほしいです</Text>
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarGaHoshiiDesuScreen
