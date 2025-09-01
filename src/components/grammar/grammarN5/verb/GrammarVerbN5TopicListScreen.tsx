import BackButton from '@components/BackButton'
import TopicListScreen, { TopicItem } from '@components/TopicListScreen'
import { RouteProp, useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import { RootStackParamList } from 'src/types/navigation'
import { grammarN5 } from '../../../../../assets/data/grammar/n5/grammarN5'
import { verbIdToScreen } from '../../../../../assets/data/grammar/n5/screens'
import { useCallback, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
import { Button } from 'react-native'

const STORAGE_KEY_VERB = 'unlockedGrammarVerbN5'
const STORAGE_KEY_ADJ = 'unlockedGrammarAdjectiveN5'

const GrammarVerbN5TopicListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const [unlocked, setUnlocked] = useState<number[]>([0])
  const verbCategory = grammarN5.find((cat) => 'verb' in cat)?.verb || []

  const loadUnlocked = useCallback(async () => {
    const saved = await AsyncStorage.getItem(STORAGE_KEY_VERB)
    if (saved) setUnlocked(JSON.parse(saved))
    else setUnlocked([0])
  }, [])

  useFocusEffect(
    useCallback(() => {
      loadUnlocked()
    }, [loadUnlocked]),
  )

  const handleComplete = async (index: number) => {
    const nextIndex = index + 1
    let updatedUnlocked = [...unlocked]

    if (!unlocked.includes(nextIndex) && nextIndex < verbCategory.length) {
      updatedUnlocked.push(nextIndex)
      await AsyncStorage.setItem(STORAGE_KEY_VERB, JSON.stringify(updatedUnlocked))
      setUnlocked(updatedUnlocked)
    }
    if (nextIndex >= verbCategory.length) {
      const savedAdj = await AsyncStorage.getItem(STORAGE_KEY_ADJ)
      const unlockedAdj: number[] = savedAdj ? JSON.parse(savedAdj) : []

      if (!unlockedAdj.includes(0)) {
        unlockedAdj.push(0)
        await AsyncStorage.setItem(STORAGE_KEY_ADJ, JSON.stringify(unlockedAdj))
      }
    }
    Toast.show({
      type: 'success',
      text1: 'Hoàn thành bài học!',
      text2: nextIndex >= verbCategory.length ? 'Đã mở bài tính từ đầu tiên' : undefined,
    })
  }

  const topics: TopicItem[] = verbCategory.map((item, index) => ({
    id: item.id,
    title: item.title,
    screen: verbIdToScreen[item.id] as keyof RootStackParamList,
    locked: !unlocked.includes(index),
    onComplete: () => handleComplete(index),
  }))

  return (
    <LinearGradient colors={['#fff8f0', '#fcefe3']} style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.navigate('GrammarN5CategoryScreen')} />
      <TopicListScreen
        screenTitle="Chủ đề động từ N5"
        topics={topics}
        onComplete={(index) => handleComplete(index)}
        onLockedPress={() => {
          Toast.show({
            type: 'info',
            text1: 'Chưa mở khoá',
            text2: 'Bạn cần hoàn thành bài trước để mở bài này.',
          })
        }}
      />
      <Button
        title="Reset Progress (debug)"
        onPress={async () => {
          // Xoá dữ liệu lưu progress động từ và tính từ
          await AsyncStorage.removeItem(STORAGE_KEY_VERB)
          await AsyncStorage.removeItem(STORAGE_KEY_ADJ)
          // Xoá luôn last completed
          await AsyncStorage.removeItem('lastCompletedGrammarVerbN5')
          // Reset state local
          setUnlocked([0])
          Toast.show({
            type: 'success',
            text1: 'Đã reset progress',
            text2: 'Mở lại chỉ bài đầu tiên động từ và khoá tất cả bài khác',
          })
        }}
      />
    </LinearGradient>
  )
}

export default GrammarVerbN5TopicListScreen
