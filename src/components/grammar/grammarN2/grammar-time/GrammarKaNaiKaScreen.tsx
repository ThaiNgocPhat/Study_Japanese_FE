import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN2 from '@assets/data/grammar/grammarN2'

const GrammarKaNaiKaNoUchiNiScreen = () => {
  const grammarData = grammarN2.find((item) => item.id === 'ka_nai_ka_no_uchi_ni')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～か～ないかのうちに</Text>
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarKaNaiKaNoUchiNiScreen
