import React from 'react'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN2 from '@assets/data/grammar/grammarN2'
import { Text } from 'react-native'

const GrammarToshitaraScreen = () => {
  const grammarData = grammarN2.find((item) => item.id === 'toshitara')

  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>❌ Không tìm thấy dữ liệu cho ～としたら / ～とすれば</Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarToshitaraScreen
