import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN5 from '@assets/data/grammar/grammarN5'

const GrammarParticlesOverviewScreen = () => {
  const grammarData = grammarN5.find((item) => item.id === 'particles_overview')
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
