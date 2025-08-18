import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { KanjiItem } from 'src/types/kanji'

type Props = {
  data: KanjiItem
  onPress: () => void
}

const KanjiCard = ({ data, onPress }: Props) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.kanji}>{data.kanji}</Text>
  </TouchableOpacity>
)

export default KanjiCard

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fefae0',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  kanji: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#6c584c',
  },

  meaning: {
    fontSize: 16,
    color: '#2d3142',
    marginTop: 6,
  },
})
