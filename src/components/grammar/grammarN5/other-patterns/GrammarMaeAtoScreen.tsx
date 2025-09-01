import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { grammarN5 } from '@assets/data/grammar/n5/grammarN5'

const GrammarMaeAtoScreen = () => {
  const grammarData = grammarN5
    .find((item) => item.otherPatterns?.some((v) => v.id === '4'))
    ?.otherPatterns?.find((v) => v.id === '4')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～まえ/ あと</Text>
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarMaeAtoScreen
