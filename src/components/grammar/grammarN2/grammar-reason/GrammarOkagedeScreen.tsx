import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN2 from '@assets/data/grammar/grammarN2'
import { Text } from 'react-native'

const GrammarOkagedeScreen = () => {
  const grammarData = grammarN2.find((item) => item.id === 'okage_de')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～おかげで</Text>
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarOkagedeScreen
