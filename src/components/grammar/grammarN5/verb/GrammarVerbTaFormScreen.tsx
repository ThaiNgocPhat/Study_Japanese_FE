import React from 'react'
import { Text } from 'react-native'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN5 from '@assets/data/grammar/grammarN5'
import { useRoute } from '@react-navigation/native'

const GrammarVerbTaFormScreen = () => {
  const grammarData = grammarN5.find((item) => item.id === 'verb_ta_form')
  const route = useRoute<any>()
  const onComplete = route.params?.onComplete
  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>
        Không tìm thấy dữ liệu ngữ pháp Động từ thì quá khứ – Thể た
      </Text>
    )
  }

  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarVerbTaFormScreen
