import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN4 from '@assets/data/grammar/grammarN4'
import { Text } from 'react-native'

const GrammarJidouTadoushiScreen = () => {
  const grammarData = grammarN4.find((item) => item.id === 'jidou-tadoushi')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>❌ Không tìm thấy dữ liệu cho jidou-tadoushi</Text>
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarJidouTadoushiScreen
