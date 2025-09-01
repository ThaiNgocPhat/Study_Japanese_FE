import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { grammarN5 } from '@assets/data/grammar/n5/grammarN5'

const GrammarTeFormScreen = () => {
  const grammarData = grammarN5
    .find((item) => item.verb?.some((v) => v.id === '4'))
    ?.verb?.find((v) => v.id === '4')
  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>
        Không tìm thấy dữ liệu ngữ pháp Các cấu trúc sử dụng thể て
      </Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarTeFormScreen
