import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { adjective } from '@assets/data/grammar/n5/adjective'
const GrammarGaJouzuHetaDesuScreen = () => {
  const grammarData = adjective.find((item) => item.id === '7')

  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～がじょうず / ～がへた</Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarGaJouzuHetaDesuScreen
