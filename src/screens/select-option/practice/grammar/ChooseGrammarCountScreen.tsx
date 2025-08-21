import React, { useState, useEffect, useRef } from 'react'
import grammarN5 from '@assets/data/grammar/grammarN5'
import grammarN4 from '@assets/data/grammar/grammarN4'
import grammarN3 from '@assets/data/grammar/grammarN3'
import grammarN2 from '@assets/data/grammar/grammarN2'
import BackButton from '@components/BackButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'src/types/navigation'
import { Animated, Easing, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY_MAP: Record<string, string> = {
  N5: 'unlockGrammar_N5',
  N4: 'unlockGrammar_N4',
  N3: 'unlockGrammar_N3',
  N2: 'unlockGrammar_N2',
}

type RouteParams = {
  level?: keyof typeof STORAGE_KEY_MAP
}

const ChooseGrammarCountScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const route = useRoute()
  const { level = 'N5' } = route.params as RouteParams
  const [currentLevel, setCurrentLevel] = useState<string>(level)
  const [unlockedLessons, setUnlockedLessons] = useState<number[]>([])
  const scaleAnim = useRef(new Animated.Value(0.9)).current

  useEffect(() => {
    ;(async () => {
      const key = STORAGE_KEY_MAP[level]
      if (key) {
        const saved = await AsyncStorage.getItem(key)
        if (saved) {
          setUnlockedLessons(JSON.parse(saved))
        }
      }
    })()
  }, [level])

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      tension: 80,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <View>
      <Text>Xin chào {currentLevel}</Text>
    </View>
  )
}

export default ChooseGrammarCountScreen
