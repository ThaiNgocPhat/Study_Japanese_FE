import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

type Props = {
  onComplete?: () => void
}

const GrammarCompleteButton: React.FC<Props> = ({ onComplete }) => {
  if (!onComplete) return null

  return (
    <TouchableOpacity style={styles.button} onPress={onComplete}>
      <Text style={styles.text}>Hoàn thành bài học</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5d7b6f',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default GrammarCompleteButton
