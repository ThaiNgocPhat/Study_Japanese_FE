import React, { useState } from 'react'
import { View, Text, FlatList, Modal, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import KanjiCard from './KanjiCard'
import { KanjiData } from 'src/types/kanji'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

type Props = {
  title: string
  kanjiList: KanjiData[]
}

const KanjiListScreen = ({ title, kanjiList }: Props) => {
  const navigation = useNavigation()
  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number | null>(null)
  const [selectedKanji, setSelectedKanji] = useState<KanjiData | null>(null)

  const splitIntoLessons = (kanjiList: KanjiData[], itemsPerLesson: number = 10): KanjiData[][] => {
    const lessons: KanjiData[][] = []
    for (let i = 0; i < kanjiList.length; i += itemsPerLesson) {
      lessons.push(kanjiList.slice(i, i + itemsPerLesson))
    }
    return lessons
  }
  const lessons = splitIntoLessons(kanjiList, 10)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          if (selectedLessonIndex !== null) {
            setSelectedLessonIndex(null)
          } else {
            navigation.goBack()
          }
        }}
      >
        <Ionicons name="arrow-back" size={28} color="#4a4e69" />
      </TouchableOpacity>

      <Text style={styles.title}>
        {selectedLessonIndex === null ? title : `Bài ${selectedLessonIndex + 1}`}
      </Text>

      {selectedLessonIndex === null ? (
        <Animatable.View animation="fadeInRight" duration={400}>
          <FlatList
            key="lesson-list"
            data={lessons}
            keyExtractor={(_, index) => `lesson-${index}`}
            contentContainerStyle={{ paddingBottom: 100, flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            ListFooterComponent={<View style={{ height: 60 }} />}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.lessonButton}
                onPress={() => setSelectedLessonIndex(index)}
              >
                <Text style={styles.lessonText}>Bài {index + 1}</Text>
              </TouchableOpacity>
            )}
          />
        </Animatable.View>
      ) : (
        <Animatable.View animation="fadeInLeft" duration={400}>
          <FlatList
            key="kanji-list"
            data={lessons[selectedLessonIndex]}
            keyExtractor={(item, index) => item.kanji + index}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 25 }}
            renderItem={({ item }) => (
              <KanjiCard data={item} onPress={() => setSelectedKanji(item)} />
            )}
          />
        </Animatable.View>
      )}

      <Modal visible={!!selectedKanji} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.modalKanji}>{selectedKanji?.kanji}</Text>

              <Text style={styles.label}>Âm On:</Text>
              <Text style={styles.text}>{selectedKanji?.onYomi.join('、')}</Text>

              <Text style={styles.label}>Âm Kun:</Text>
              <Text style={styles.text}>{selectedKanji?.kunYomi.join('、')}</Text>

              <Text style={styles.label}>Ý nghĩa:</Text>
              <Text style={styles.text}>{selectedKanji?.meaning}</Text>

              <Text style={styles.label}>Ví dụ:</Text>
              {selectedKanji?.examples.map((ex, i) => (
                <Text key={i} style={styles.text}>
                  • {ex}
                </Text>
              ))}

              <TouchableOpacity onPress={() => setSelectedKanji(null)}>
                <Text style={styles.closeText}>Đóng</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default KanjiListScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a4e69',
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 70,
  },
  list: {
    marginBottom: 32,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
    backgroundColor: '#ffffffcc',
    padding: 8,
    borderRadius: 20,
  },
  lessonButton: {
    padding: 16,
    backgroundColor: '#88c9bf',
    marginVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
  },
  lessonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  backLessonButton: {
    padding: 10,
    backgroundColor: '#88c9bf',
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 50,
  },
  backLessonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fcefe3',
    borderRadius: 20,
    padding: 24,
    maxHeight: '80%',
    elevation: 5,
  },
  modalKanji: {
    fontSize: 56,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4a4e69',
    marginBottom: 16,
  },
  label: {
    marginTop: 16,
    fontWeight: '600',
    fontSize: 16,
    color: '#4a4e69',
  },
  text: {
    fontSize: 16,
    color: '#4a4e69',
    lineHeight: 22,
    marginTop: 4,
  },
  closeText: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#88c9bf',
    paddingVertical: 8,
  },
  loadMoreButton: {
    backgroundColor: '#88c9bf',
    marginHorizontal: 40,
    marginTop: 10,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 50,
  },
  loadMoreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
