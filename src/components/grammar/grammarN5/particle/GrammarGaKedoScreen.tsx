import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { grammarN5 } from '@assets/data/grammar/n5/grammarN5'
const GrammarGaKedoScreen = () => {
  const grammarData = grammarN5
    .find((item) => item.particle?.some((v) => v.id === '3'))
    ?.particle?.find((v) => v.id === '3')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～が/～けど</Text>
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarGaKedoScreen
