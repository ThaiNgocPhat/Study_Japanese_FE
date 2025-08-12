import React from 'react'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN3 from '@assets/data/grammar/grammarN3'
import { Text } from 'react-native'

const GrammarKaraNiKaketeScreen = () => {
  const grammarData = grammarN3.find((item) => item.id === 'karaNiKakete')

  if (!grammarData) {
    return <Text style={{ padding: 20 }}>❌ Không tìm thấy dữ liệu cho</Text>
  }

  return (
    <GrammarTemplateScreen
      screenTitle={grammarData.title}
      grammarSections={grammarData.sections ?? []}
    />
  )
}

export default GrammarKaraNiKaketeScreen
