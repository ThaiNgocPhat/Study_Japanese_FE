import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { noun } from '@assets/data/grammar/n5/noun'

const GrammarCountingPeopleThingScreen = () => {
  const grammarData = noun.find((item) => item.id === '2')

  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp Cách đếm số người, vật</Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarCountingPeopleThingScreen
