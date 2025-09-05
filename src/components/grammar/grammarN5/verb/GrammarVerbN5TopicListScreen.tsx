import BackButton from '@components/BackButton'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/navigation'
import { verb } from 'assets/data/grammar/n5/verb'
import { verbIdToScreen } from '../../../../../assets/data/grammar/n5/screens'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
import { View } from 'react-native'
const STORAGE_KEY = 'unlockedGrammar_N5?__verb'
const GrammarVerbN5TopicListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const [unlocked, setUnlocked] = useState<number[]>([1])
  const topics: TopicItem[] = verb.map((item) => ({
    id: Number(item.id),
    title: item.title,
    screen: verbIdToScreen[item.id] as keyof RootStackParamList,
    locked: !unlocked.includes(Number(item.id)),
  }))

  useEffect(() => {
    ;(async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY)
      if (saved) {
        setUnlocked(JSON.parse(saved).map((n: string | number) => Number(n)))
      }
    })()
  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const completeId = await AsyncStorage.getItem('lastCompleteGrammar_N5?__verb')
      if (completeId) {
        const idNum = Number(completeId)
        const nextLesson = idNum + 1
        setUnlocked((prev) => {
          if (!prev.includes(nextLesson) && nextLesson <= verb.length) {
            const updated = [...prev, nextLesson]
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
            return updated
          }
          return prev
        })
        if (idNum === verb.length) {
          const unlockedAdjective = await AsyncStorage.getItem('unlockedGrammar_N5?__adjective')
          const parsedGrammarAdj = unlockedAdjective ? JSON.parse(unlockedAdjective) : []
          if (!parsedGrammarAdj.includes(1)) {
            // mở từ bài 1 adj
            const updatedAdj = [...parsedGrammarAdj, 1]
            await AsyncStorage.setItem('unlockedGrammar_N5?__adjective', JSON.stringify(updatedAdj))
          }
        }

        await AsyncStorage.removeItem('lastCompleteGrammar_N5?__verb')
      }
    })
    return unsubscribe
  }, [navigation])

  const handleLockedPress = () => {
    Toast.show({
      type: 'info',
      text1: 'Bài học bị khoá',
      text2: 'Vui lòng hoàn thành từng bài để mở khoá bài tiếp theo.',
      position: 'top',
    })
  }
  return (
    <View style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.navigate('GrammarN5CategoryScreen')} />
      <TopicListScreen
        screenTitle="Chủ đề động từ N5"
        topics={topics}
        onLockedPress={handleLockedPress}
      />
    </View>
  )
}

export default GrammarVerbN5TopicListScreen
