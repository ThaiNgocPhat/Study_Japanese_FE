import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { grammarN4 } from 'assets/data/grammar/n4/grammarN4'
import { Text } from 'react-native'

const GrammarMeireikeiScreen = () => {
  const grammarData = grammarN4.find((item) => item.id === 'meireikei')
  if (!grammarData) {
    return (
      <Text style={{ padding: 20 }}>❌ Không tìm thấy dữ liệu cho mẫu Thể mệnh lệnh (命令形)</Text>
    )
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarMeireikeiScreen
