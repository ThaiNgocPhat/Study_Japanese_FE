import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN5 from '@assets/data/grammar/grammarN5'

const GrammarGaJouzuHetaDesuScreen = () => {
  const grammarData = grammarN5.find((item) => item.id === 'ga_jouzu_heta_desu')

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
