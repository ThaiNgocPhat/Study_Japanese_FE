import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import { grammarN4 } from 'assets/data/grammar/n4/grammarN4'
import { Text } from 'react-native'

const GrammarKeigoScreen = () => {
  const grammarData = grammarN4.find((item) => item.id === 'keigo')
  if (!grammarData) {
    return <Text style={{ padding: 20 }}>❌ Không tìm thấy dữ liệu cho phần Kính ngữ</Text>
  }
  return (
    <GrammarTemplateScreen screenTitle={grammarData.title} grammarSections={grammarData.sections} />
  )
}

export default GrammarKeigoScreen
