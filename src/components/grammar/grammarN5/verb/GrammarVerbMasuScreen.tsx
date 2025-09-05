import React from 'react'
import { Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { verb } from 'assets/data/grammar/n5/verb'

const GrammarVerbMasuScreen = () => {
  const grammarData = verb.find((item) => item.id === '2')

  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp Động từ thể ます</Text>
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarVerbMasuScreen
