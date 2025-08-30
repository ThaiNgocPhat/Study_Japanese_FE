import React from 'react'
import { Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN5 from '@assets/data/grammar/grammarN5'

const GrammarVerbMasuScreen = () => {
  const grammarData = grammarN5.find((item) => item.id === 'verb_masu')
  const route = useRoute<any>()
  const onComplete = route.params?.onComplete

  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp Động từ thể ます</Text>
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarVerbMasuScreen
