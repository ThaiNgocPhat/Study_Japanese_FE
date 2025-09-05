import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { particle } from '@assets/data/grammar/n5/particle'

const GrammarGaKedoScreen = () => {
  const grammarData = particle.find((item) => item.id === '3')

  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～が/～けど</Text>
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarGaKedoScreen
