import React from 'react'
import TopicListScreen from '@components/TopicListScreen'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/types/navigation'
import { generateLessons } from 'src/utils/lessonUtils'

const VocabularyN5LessonListScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'VocabularyLessonDetailScreen'>>()

  const topics = generateLessons(1, 25, navigation, 'N5')

  return <TopicListScreen screenTitle="Từ vựng N5" topics={topics} />
}

export default VocabularyN5LessonListScreen

// import React, { useEffect, useState } from 'react'
// import Toast from 'react-native-toast-message'
// import TopicListScreen from '@components/TopicListScreen'
// import { useNavigation } from '@react-navigation/native'
// import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
// import type { RootStackParamList } from 'src/types/navigation'
// import { generateLessons } from 'src/utils/lessonUtils'
// import { getToken } from 'src/utils/tokenStorage'
// import type { TopicItem } from '@components/TopicListScreen'

// const VocabularyN5LessonListScreen = () => {
//   const navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParamList, 'VocabularyLessonDetailScreen'>>()
//   const [topics, setTopics] = useState<TopicItem[]>([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const token = await getToken()
//       const isLoggedIn = !!token

//       const generated = generateLessons(1, 25, navigation, 'N5')

//       const updatedTopics = generated.map((topic, index) => {
//         const lessonNumber = index + 1
//         const isLocked = !isLoggedIn && lessonNumber > 20

//         return {
//           ...topic,
//           locked: isLocked,
//           onPress: () => {
//             if (isLocked) {
//               Toast.show({
//                 type: 'info',
//                 text1: 'Bạn cần đăng nhập để xem bài học này.',
//                 position: 'top',
//               })
//             } else {
//               topic.onPress?.()
//             }
//           },
//         }
//       })

//       setTopics(updatedTopics)
//     }

//     fetchData()
//   }, [])

//   return (
//     <>
//       <TopicListScreen screenTitle="Từ vựng N5" topics={topics} />
//     </>
//   )
// }

// export default VocabularyN5LessonListScreen
