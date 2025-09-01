import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { grammarN5 } from '@assets/data/grammar/n5/grammarN5'
import { useRoute } from '@react-navigation/native'

const GrammarAdjectiveBasicScreen = () => {
  const grammarData = grammarN5
    .find((item) => item.adjective?.some((v) => v.id === '1'))
    ?.adjective?.find((v) => v.id === '1')

  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp Tính từ tiếng Nhật</Text>
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarAdjectiveBasicScreen
