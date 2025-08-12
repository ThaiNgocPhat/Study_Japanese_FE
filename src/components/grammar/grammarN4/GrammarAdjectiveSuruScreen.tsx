import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN4 from 'assets/data/grammar/grammarN4'
import { Text } from 'react-native'

const GrammarAdjectiveSuruScreen = () => {
  const grammarData = grammarN4.find((item) => item.id === 'adjective-suru')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>❌ Không tìm thấy dữ liệu cho n-desu</Text>
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}
export default GrammarAdjectiveSuruScreen
