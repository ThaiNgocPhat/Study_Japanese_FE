import React from 'react'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN4 from '@assets/data/grammar/grammarN4'

const GrammarYasuiNIkuiScreen = () => {
  const grammarData = grammarN4.find((item) => item.id === 'yasui-nikui')
  if (!grammarData) {
    return <div>❌ Không tìm thấy dữ liệu cho mẫu ～やすい／～にくい</div>
  }
  return (
    <GrammarTemplateScreen
      screenTitle="～やすい、～にくい"
      grammarSections={grammarData.sections}
    />
  )
}

export default GrammarYasuiNIkuiScreen
