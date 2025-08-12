import React from 'react'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN2 from '@assets/data/grammar/grammarN2'
import { Text } from 'react-native'

const GrammarNagaraMoScreen = () => {
  const grammarData = grammarN2.find((item) => item.id === 'nagaramo')

  if (!grammarData) {
    return <Text style={{ padding: 20 }}>❌ Không tìm thấy dữ liệu cho ～ながら（も）</Text>
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarNagaraMoScreen
