import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { grammarN4 } from 'assets/data/grammar/n4/grammarN4'

const GrammarTsumoriScreen = () => {
  const grammarData = grammarN4.find((item) => item.id === 'tsumori')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>❌ Không tìm thấy dữ liệu cho mẫu ～つもりです</Text>
  }
  return <GrammarTemplateScreen screenTitle="～つもりです" grammarSections={grammarData.sections} />
}

export default GrammarTsumoriScreen
