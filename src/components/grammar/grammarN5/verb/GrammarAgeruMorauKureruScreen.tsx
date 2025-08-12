import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN5 from '@assets/data/grammar/grammarN5'

const GrammarAgeruMorauKureruScreen = () => {
  const grammarData = grammarN5.find((item) => item.id === 'ageru_morau_kureru')
  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>
        Không tìm thấy dữ liệu ngữ pháp Phân biệt あげます・もらいます・くれます
      </Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarAgeruMorauKureruScreen
