import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { verb } from 'assets/data/grammar/n5/verb'
const GrammarNakutemoIiScreen = () => {
  const grammarData = verb.find((item) => item.id === '13')

  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～なくてもいい</Text>
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarNakutemoIiScreen
