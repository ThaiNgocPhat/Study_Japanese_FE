import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Cách dùng mẫu ～ながら',
    explanation:
      '🌸 Mẫu câu này diễn tả **hai hành động xảy ra đồng thời**.\n' +
      '🔸 Hành động ở vế ～ながら là **hành động phụ**, hành động ở vế sau là **hành động chính**.\n\n' +
      '🧩 Cấu trúc:\n' +
      '[Động từ thể ます (bỏ ます)] + ながら\n\n' +
      '🔧 Ví dụ chia động từ:\n' +
      '・書く → 書きます → 書きながら (trong khi viết)\n' +
      '・話す → 話します → 話しながら (trong khi nói)\n' +
      '・食べる → 食べます → 食べながら (vừa ăn vừa...)\n' +
      '・する → します → しながら (vừa làm vừa...)',
  },
  {
    title: '2. Ví dụ thường gặp',
    explanation:
      '🍚 テレビを みながら、ごはんを 食べます。\n' +
      '→ Tôi vừa ăn cơm vừa xem ti vi. (Ăn là hành động chính)\n\n' +
      '🎵 音楽を 聞きながら、お茶を 飲んでいます。\n' +
      '→ Tôi đang uống trà trong khi nghe nhạc.\n\n' +
      '🚫 ガムを かみながら、先生の話を 聞いてはいけません。\n' +
      '→ Không được vừa nhai kẹo cao su vừa nghe cô giáo nói.',
  },
  {
    title: '3. Ví dụ nâng cao',
    explanation:
      '🎮 子供たちは 笑いながら、ゲームを しています。\n' +
      '→ Bọn trẻ vừa cười vừa chơi game.\n\n' +
      '💭 彼女を 考えながら、一人で 長い冬を 過ごしました。\n' +
      '→ Tôi đã nghĩ về cô ấy khi một mình trải qua mùa đông dài.\n\n' +
      '📞 スマホを さわりながら、話を きくのは よくないです。\n' +
      '→ Vừa nghịch điện thoại vừa nghe chuyện là không tốt.',
  },
  {
    title: '4. Lưu ý khi dùng ～ながら',
    explanation:
      '📝 Cả hai hành động phải do **cùng một chủ thể thực hiện**.\n' +
      '❌ Không dùng ～ながら nếu hai hành động không thể xảy ra cùng lúc hoặc có hai chủ thể khác nhau.\n\n' +
      '🌟 Mẫu này rất hay gặp trong hội thoại đời sống, giúp câu văn tự nhiên và uyển chuyển hơn.',
  },
]

const GrammarNagaraScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ながら" grammarSections={grammarSections} />
}

export default GrammarNagaraScreen
