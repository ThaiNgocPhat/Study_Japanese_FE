import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN4 from '@assets/data/grammar/grammarN4'

const GrammarTameniYouniScreen = () => {
  const grammarData = grammarN4.find((item) => item.id === 'tameni_youni')
  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>
        ❌ Không tìm thấy dữ liệu cho mẫu ngữ pháp ～ために、～ように
      </Text>
    )
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarTameniYouniScreen
