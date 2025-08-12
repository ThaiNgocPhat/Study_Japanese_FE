import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN2 from '@assets/data/grammar/grammarN2'
import { Text } from 'react-native'

const GrammarKaraNiwaIjouScreen = () => {
  const grammarData = grammarN2.find((item) => item.id === 'kara_ni_wa_ijou')
  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～からには / ～以上は</Text>
    )
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarKaraNiwaIjouScreen
