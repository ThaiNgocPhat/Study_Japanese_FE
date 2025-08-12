import React from 'react'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN4 from '@assets/data/grammar/grammarN4'

const GrammarYouToOmoimasuScreen = () => {
  const grammarData = grammarN4.find((item) => item.id === 'you_to_omoimasu')
  if (!grammarData) {
    return <div>❌ Không tìm thấy dữ liệu cho mẫu ～ようと思います</div>
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarYouToOmoimasuScreen
