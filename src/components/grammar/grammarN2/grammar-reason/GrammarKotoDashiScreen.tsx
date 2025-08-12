import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN2 from '@assets/data/grammar/grammarN2'
import { Text } from 'react-native'

const GrammarKotoDashiScreen = () => {
  const grammarData = grammarN2.find((item) => item.id === 'koto_dashi')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～ことだし</Text>
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarKotoDashiScreen
