import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN5 from '@assets/data/grammar/grammarN5'

const GrammarNaideKudasaiScreen = () => {
  const grammarData = grammarN5.find((item) => item.id === 'naide_kudasai')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～ないでください</Text>
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarNaideKudasaiScreen
