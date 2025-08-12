import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN2 from '@assets/data/grammar/grammarN2'

const GrammarToIttemoScreen = () => {
  const grammarData = grammarN2.find((item) => item.id === 'toittomo')

  if (!grammarData) {
    return <Text style={{ padding: 20 }}>❌ Không tìm thấy dữ liệu cho ～といっても</Text>
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarToIttemoScreen
