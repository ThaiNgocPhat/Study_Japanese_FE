import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN4 from '@assets/data/grammar/grammarN4'

const GrammarToUsageScreen = () => {
  const grammarData = grammarN4.find((item) => item.id === 'to_usage')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>❌ Không tìm thấy dữ liệu cho mẫu trợ từ と</Text>
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarToUsageScreen
