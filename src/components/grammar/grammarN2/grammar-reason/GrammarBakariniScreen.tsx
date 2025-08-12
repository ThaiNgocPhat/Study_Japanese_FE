import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import grammarN2 from '@assets/data/grammar/grammarN2'
import { Text } from 'react-native'

const GrammarBakariniScreen = () => {
  const grammarData = grammarN2.find((item) => item.id === 'bakarini')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>Không tìm thấy dữ liệu ngữ pháp ～ばかりに</Text>
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarBakariniScreen
