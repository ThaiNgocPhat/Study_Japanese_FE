import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
export const handleCompleteTopic = async (
  index: number,
  storageKey: string,
  categoryLength: number,
  nextStorageKey?: string,
) => {
  const nextIndex = index + 1

  // load danh sách unlocked của category hiện tại
  const saved = await AsyncStorage.getItem(storageKey)
  let unlocked: number[] = saved ? JSON.parse(saved) : [0]

  // unlock topic tiếp theo trong cùng category
  if (!unlocked.includes(nextIndex) && nextIndex < categoryLength) {
    unlocked.push(nextIndex)
    await AsyncStorage.setItem(storageKey, JSON.stringify(unlocked))
  }

  // nếu đã xong category -> unlock topic đầu tiên của category tiếp theo
  if (nextIndex >= categoryLength && nextStorageKey) {
    const savedNext = await AsyncStorage.getItem(nextStorageKey)
    const unlockedNext: number[] = savedNext ? JSON.parse(savedNext) : []
    if (!unlockedNext.includes(0)) {
      unlockedNext.push(0)
      await AsyncStorage.setItem(nextStorageKey, JSON.stringify(unlockedNext))
    }
  }

  Toast.show({
    type: 'success',
    text1: 'Hoàn thành bài học!',
    text2:
      nextIndex >= categoryLength && nextStorageKey
        ? 'Đã mở bài đầu tiên của phần tiếp theo'
        : undefined,
  })
}
