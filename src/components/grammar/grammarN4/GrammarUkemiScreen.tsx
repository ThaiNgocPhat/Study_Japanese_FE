import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN4 from '@assets/data/grammar/grammarN4'

const GrammarUkemiScreen = () => {
  const grammarData = grammarN4.find((item) => item.id === 'ukemi')
  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>❌ Không tìm thấy dữ liệu cho mẫu Thể bị động (受身形)</Text>
    )
  }
  return (
    <GrammarTemplateScreen
      screenTitle="Thể bị động (受身形)"
      grammarSections={grammarData.sections}
    />
  )
}

export default GrammarUkemiScreen
