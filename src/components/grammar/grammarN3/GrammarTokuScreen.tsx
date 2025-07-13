import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về ～とく',
    explanation:
      '📌 「～とく」 là cách nói rút gọn trong văn nói thân mật của mẫu ngữ pháp 「～ておく」.\n\n' +
      '👉 Diễn tả việc **làm sẵn**, **chuẩn bị trước**, hoặc để nguyên trạng thái để thuận tiện cho sau này.\n' +
      '👉 Rất hay dùng trong hội thoại đời thường, giữa bạn bè, người thân.',
  },
  {
    title: '2. Cấu trúc rút gọn',
    explanation:
      '✏️ Cách rút gọn:\n' +
      '- Động từ thể て + おく → ～とく\n' +
      '- Động từ thể で + おく → ～どく\n' +
      '- Động từ thể ておかない → ～とかない\n\n' +
      '📝 Ví dụ:\n' +
      '・買っておく → 買っとく (mua sẵn trước)\n' +
      '・読んでおく → 読んどく (đọc trước)\n' +
      '・言っておかないと → 言っとかないと (phải nói trước đấy)\n' +
      '・準備しておく → 準備しとく (chuẩn bị trước)',
  },
  {
    title: '3. Ý nghĩa và cách dùng',
    explanation:
      '🔹 Diễn tả hành động làm trước để chuẩn bị hoặc tránh rắc rối sau này.\n\n' +
      '📝 Ví dụ:\n' +
      '・旅行の前にチケットを買っとく。\n' +
      '→ Mua vé trước khi đi du lịch.\n\n' +
      '・あとで困らないように、今のうちにやっとこう。\n' +
      '→ Để sau này khỏi rắc rối, giờ làm sẵn đi.\n\n' +
      '・この資料、読んどいてね。\n' +
      '→ Nhớ đọc trước tài liệu này nhé.\n\n' +
      '・わからないところはメモしとこう。\n' +
      '→ Ghi chú lại những chỗ không hiểu trước đi.',
  },
  {
    title: '4. Lưu ý sử dụng',
    explanation:
      '⚠️ 「～とく」 là cách nói ngắn gọn, **chỉ dùng trong văn nói thân mật**.\n' +
      'Trong văn viết hoặc hoàn cảnh trang trọng, hãy dùng đầy đủ: 「～ておく」.\n\n' +
      '📌 Dạng phủ định cũng rút gọn:\n' +
      '・しないといけない → しとかなきゃ\n' +
      '・食べておかないと → 食べとかないと\n\n' +
      '🆚 So với ～ちゃう:\n' +
      '・～ちゃう: làm mất rồi, lỡ làm rồi (vô ý hoặc đã xong)\n' +
      '・～とく: làm trước, có chủ đích, có chuẩn bị',
  },
]

const GrammarTokuScreen = () => {
  return <GrammarTemplateScreen screenTitle="～とく" grammarSections={grammarSections} />
}

export default GrammarTokuScreen
