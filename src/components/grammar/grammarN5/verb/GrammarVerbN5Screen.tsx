import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN5 from '@assets/data/grammar/grammarN5'
import { useRoute } from '@react-navigation/native'

const GrammarVerbN5Screen = () => {
  const grammarData = grammarN5.find((item) => item.id === 'verb_n5')
  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp Động từ trong tiếng Nhật</Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarVerbN5Screen
