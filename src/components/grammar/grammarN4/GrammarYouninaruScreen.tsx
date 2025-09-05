import React from 'react'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { grammarN4 } from 'assets/data/grammar/n4/grammarN4'

const GrammarYouninaruScreen = () => {
  const grammarData = grammarN4.find((item) => item.id === 'youninaru')
  if (!grammarData) {
    return <div>❌ Không tìm thấy dữ liệu cho mẫu ～ようになる/～なくなる</div>
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarYouninaruScreen
