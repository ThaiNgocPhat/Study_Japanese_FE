import BackButton from '@components/BackButton'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'
import Toast from 'react-native-toast-message'
import { RootStackParamList } from 'src/types/navigation'
const STORAGE_KEY = 'unlockedGrammarVerbN5'
const topics: TopicItem[] = [
  {
    title: 'Động từ – Những kiến thức cơ bản (Thể từ điển & thể ない)',
    screen: 'GrammarVerbN5Screen',
  },
  { title: 'Động từ thể ます', screen: 'GrammarVerbMasuScreen' },
  { title: 'Động từ thì quá khứ – Thể た', screen: 'GrammarVerbTaFormScreen' },
  { title: 'Các cấu trúc sử dụng thể て', screen: 'GrammarTeFormScreen' },
  { title: '～ませんか、～ましょう、～ましょうか', screen: 'GrammarMasenkaMashouScreen' },
  { title: '～たことがある: Đã từng …', screen: 'GrammarTaKotoGaAruScreen' },
  {
    title: 'Phân biệt ～あげます、～もらいます、くれます',
    screen: 'GrammarAgeruMorauKureruScreen',
  },
  { title: '～があります/～がいます', screen: 'GrammarGaArimasuScreen' },
  { title: '～たり、～たりする', screen: 'GrammarTariTariSuruScreen' },
  { title: '～ないでください', screen: 'GrammarNaideKudasaiScreen' },
  { title: '～なければならない/～なくてはならない', screen: 'GrammarNakerebaNaranaiScreen' },
  { title: '～なければいけない/～なくてはいけない', screen: 'GrammarNakerebaIkenaiScreen' },
  { title: '～なくてもいい', screen: 'GrammarNakutemoIiScreen' },
]

const GrammarVerbN5TopicListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const route = useRoute<any>()
  const [unlockedGrammar, setUnlockedGrammar] = useState<number[]>([0])

  useEffect(() => {
    ;(async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY)
      if (saved) {
        setUnlockedGrammar(JSON.parse(saved))
      }
    })()
  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const completeId = await AsyncStorage.getItem('lastCompletedGrammarVerbN5')
      if (completeId) {
        const idx = Number(completeId)
        const next = idx + 1
        if (!unlockedGrammar.includes(next) && next < topics.length) {
          const updated = [...unlockedGrammar, next]
          setUnlockedGrammar(updated)
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
        }
        if (idx === topics.length - 1) {
          const unlockedCategories = await AsyncStorage.getItem('unlockedCategories')
          const parsed = unlockedCategories ? JSON.parse(unlockedCategories) : []
          if (!parsed.includes('adjective')) {
            const updatedCats = [...parsed, 'adjective']
            await AsyncStorage.setItem('unlockedCategories', JSON.stringify(updatedCats))
          }
        }

        await AsyncStorage.removeItem('lastCompletedGrammarVerbN5')
      }
    })
    return unsubscribe
  }, [navigation, unlockedGrammar])

  const topicsWithLock: TopicItem[] = topics.map((topic, index) => ({
    ...topic,
    locked: !unlockedGrammar.includes(index),
    onComplete: async () => {
      await AsyncStorage.setItem('lastCompletedGrammarVerbN5', String(index))
    },
  }))

  const handleLockedPress = () => {
    Toast.show({
      type: 'info',
      text1: 'Chưa mở khoá',
      text2: 'Bạn cần hoàn thành bài trước để mở bài này.',
    })
  }
  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.navigate('GrammarN5CategoryScreen')} />
      <TopicListScreen
        screenTitle="Chủ đề động từ N5"
        topics={topicsWithLock}
        onLockedPress={handleLockedPress}
      />
    </LinearGradient>
  )
}

export default GrammarVerbN5TopicListScreen
