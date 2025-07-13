import React, { useState } from 'react'
import { View, Text, FlatList, Modal, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import KanjiCard from './KanjiCard'
import { KanjiData } from 'src/types/kanji'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string
  kanjiList: KanjiData[]
}

const KanjiListScreen = ({ title, kanjiList }: Props) => {
  const navigation = useNavigation()
  const [selectedKanji, setSelectedKanji] = useState<KanjiData | null>(null)
  const [visibleCount, setVisibleCount] = useState(10)

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#4a4e69" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={kanjiList.slice(0, visibleCount)}
        keyExtractor={(item, index) => item.kanji + index}
        contentContainerStyle={styles.list}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 12 }}
        renderItem={({ item }) => <KanjiCard data={item} onPress={() => setSelectedKanji(item)} />}
      />
      {visibleCount < kanjiList.length && (
        <TouchableOpacity style={styles.loadMoreButton} onPress={handleLoadMore}>
          <Text style={styles.loadMoreText}>Xem thêm</Text>
        </TouchableOpacity>
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
    backgroundColor: '#fffaf3',
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3d405b',
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 70,
  },
  list: {
    paddingBottom: 32,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fffefc',
    borderRadius: 20,
    padding: 24,
    maxHeight: '80%',
    elevation: 5,
  },
  modalKanji: {
    fontSize: 56,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6c584c',
    marginBottom: 16,
  },
  label: {
    marginTop: 16,
    fontWeight: '600',
    fontSize: 16,
    color: '#5c5f66',
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginTop: 4,
  },
  closeText: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0077cc',
    paddingVertical: 8,
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
  loadMoreButton: {
    backgroundColor: '#d9ed92',
    marginHorizontal: 40,
    marginTop: 10,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 50,
  },
  loadMoreText: {
    color: '#1b4332',
    fontSize: 16,
    fontWeight: '600',
  },
})
