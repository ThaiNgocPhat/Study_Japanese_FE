import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
import grammarN2 from '@assets/data/grammar/grammarN2'
import { Text } from 'react-native'

const GrammarToIuMonodaScreen = () => {
  const grammarData = grammarN2.find((item) => item.id === 'toiumonoda')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>❌ Không tìm thấy dữ liệu</Text>
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarToIuMonodaScreen
