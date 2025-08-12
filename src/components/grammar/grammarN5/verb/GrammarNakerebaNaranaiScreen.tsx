import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN5 from '@assets/data/grammar/grammarN5'

const GrammarNakerebaNaranaiScreen = () => {
  const grammarData = grammarN5.find((item) => item.id === 'nakereba_naranai')
  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>
        Không tìm thấy dữ liệu ngữ pháp ～なければならない / ～なくてはならない
      </Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarNakerebaNaranaiScreen
