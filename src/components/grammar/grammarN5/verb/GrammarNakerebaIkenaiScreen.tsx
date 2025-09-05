import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { verb } from 'assets/data/grammar/n5/verb'

const GrammarNakerebaIkenaiScreen = () => {
  const grammarData = verb.find((item) => item.id === '12')

  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>
        Không tìm thấy dữ liệu ngữ pháp ～なければいけない / ～なくてはいけない
      </Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarNakerebaIkenaiScreen
