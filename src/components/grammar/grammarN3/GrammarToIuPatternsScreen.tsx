import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN3 from '@assets/data/grammar/grammarN3'

const GrammarToIuPatternsScreen = () => {
  const grammarData = grammarN3.find((item) => item.id === 'to_iu_patterns')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>❌ Không tìm thấy dữ liệu cho mẫu ngữ pháp này.</Text>
  }

  return (
    <GrammarTemplateScreen
      screenTitle={grammarData.title}
      grammarSections={grammarData.sections ?? []}
    />
  )
}

export default GrammarToIuPatternsScreen
