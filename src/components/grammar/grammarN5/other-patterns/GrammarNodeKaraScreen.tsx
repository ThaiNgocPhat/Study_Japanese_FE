import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { other } from 'assets/data/grammar/n5/other'

const GrammarNodeKaraScreen = () => {
  const grammarData = other.find((item) => item.id === '6')

  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～ので、～から</Text>
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarNodeKaraScreen
