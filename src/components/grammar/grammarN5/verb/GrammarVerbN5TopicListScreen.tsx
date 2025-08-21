import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

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

const STORAGE_KEY = 'grammarN5Progress'

const GrammarVerbN5TopicListScreen = () => {
  const [unlocked, setUnlocked] = useState(0)

  useEffect(() => {
    const initProgress = async () => {
      const value = await AsyncStorage.getItem(STORAGE_KEY)
      if (value === null) {
        await AsyncStorage.setItem(STORAGE_KEY, '0')
        setUnlocked(0)
      } else {
        const parsed = Number(value)
        if (isNaN(parsed) || parsed >= topics.length) {
          await AsyncStorage.setItem(STORAGE_KEY, '0')
          setUnlocked(0)
        } else {
          setUnlocked(parsed)
        }
      }
    }
    initProgress()
  }, [])

  const handleComplete = async (index: number) => {
    const nextIndex = index + 1
    if (nextIndex > unlocked && nextIndex < topics.length) {
      setUnlocked(nextIndex)
      await AsyncStorage.setItem(STORAGE_KEY, String(nextIndex))
    }
  }

  const topicsWithLock = topics.map((topic, index) => ({
    ...topic,
    locked: index > unlocked,
    onComplete: () => handleComplete(index),
  }))

  return <TopicListScreen screenTitle="Chủ đề động từ N5" topics={topicsWithLock} />
}

export default GrammarVerbN5TopicListScreen
