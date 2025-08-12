import React from 'react'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN4 from '@assets/data/grammar/grammarN4'

const GrammarYouniSuruScreen = () => {
  const grammarData = grammarN4.find((item) => item.id === 'younisuru')
  if (!grammarData) {
    return <div>❌ Không tìm thấy dữ liệu cho mẫu ～ようにする</div>
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarYouniSuruScreen
