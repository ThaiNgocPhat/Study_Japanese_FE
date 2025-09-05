import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { grammarN4 } from 'assets/data/grammar/n4/grammarN4'
import { Text } from 'react-native'

const GrammarKaKaDoukaScreen = () => {
  const grammarData = grammarN4.find((item) => item.id === 'ka-ka-douka')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>❌ Không tìm thấy dữ liệu cho ka-ka-douka</Text>
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarKaKaDoukaScreen
