import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { grammarN5 } from '@assets/data/grammar/n5/grammarN5'
const GrammarVerbModifyNounScreen = () => {
  const grammarData = grammarN5
    .find((item) => item.noun?.some((v) => v.id === '4'))
    ?.noun?.find((v) => v.id === '4')
  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>
        Không tìm thấy dữ liệu ngữ pháp Động từ bổ nghĩa cho danh từ
      </Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarVerbModifyNounScreen
