import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { grammarN4 } from 'assets/data/grammar/n4/grammarN4'
import { Text } from 'react-native'

const GrammarNoGaNoHaNoNiScreen = () => {
  const grammarData = grammarN4.find((item) => item.id === 'no-ga-no-ha-no-ni')
  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>❌ Không tìm thấy dữ liệu cho mẫu ～のが、～のは、～のに</Text>
    )
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarNoGaNoHaNoNiScreen
