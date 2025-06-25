import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { removeToken } from 'src/utils/tokenStorage'

const DEFAULT_AVATAR = 'https://i.pravatar.cc/150?u=default'

interface HeaderProps {
  name: string
  avatarUrl?: string | null
}

const Header: React.FC<HeaderProps> = ({ name, avatarUrl }) => {
  const navigation = useNavigation() as any
  const [modalVisible, setModalVisible] = useState(false)

  const handleLogout = async () => {
    try {
      setModalVisible(false)
      await removeToken()
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    } catch (error) {
      console.error('Lỗi khi đăng xuất:', error)
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.greeting}>👋 Xin chào, {name}</Text>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={{ uri: avatarUrl || DEFAULT_AVATAR }} style={styles.avatar} />
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.dropdown}>
            <Text style={styles.option}>👤 Thông tin</Text>
            <Text style={styles.option}>⚙️ Cài đặt</Text>
            <Text style={styles.option} onPress={handleLogout}>
              🚪 Đăng xuất
            </Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#eae7d6',
    borderRadius: 10,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5d7b6f',
    textShadowColor: 'rgba(0, 0, 0, 0.05)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginLeft: 12,
    borderWidth: 2,
    borderColor: '#d7f9fa',
    backgroundColor: '#b0d4b8',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 100,
    paddingRight: 20,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  dropdown: {
    width: 180,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#5d7b6f',
  },
})
