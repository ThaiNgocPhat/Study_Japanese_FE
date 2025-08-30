import type { TopicItem } from '@components/TopicListScreen'
import type { RootStackParamList } from 'src/types/navigation'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export function generateLessons(
  from: number,
  to: number,
  navigation: NativeStackNavigationProp<RootStackParamList, 'VocabularyLessonDetailScreen'>,
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1',
  unlockedLessons: number[] = [],
): TopicItem[] {
  return Array.from({ length: to - from + 1 }, (_, i) => {
    const lessonNumber = from + i
    return {
      id: String(lessonNumber),
      title: `Bài ${lessonNumber}`,
      screen: 'VocabularyLessonDetailScreen',
      params: {
        lessonNumber,
        level,
      },
      locked: !(unlockedLessons ?? []).includes(lessonNumber),
    }
  })
}
