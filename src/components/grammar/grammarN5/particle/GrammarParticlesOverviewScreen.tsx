import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { particle } from '@assets/data/grammar/n5/particle'
const GrammarParticlesOverviewScreen = () => {
  const grammarData = particle.find((item) => item.id === '1')
  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp Tổng hợp về trợ từ cơ bản</Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarParticlesOverviewScreen
