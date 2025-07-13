import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về ～てしまう',
    explanation:
      '📌 Mẫu câu ～てしまう dùng để diễn đạt:\n' +
      '① Hành động đã **hoàn tất hoàn toàn**\n' +
      '② Hành động xảy ra **ngoài ý muốn, tiếc nuối**\n\n' +
      '👉 Trong văn nói, thường rút gọn thành:\n' +
      '・～てしまう → ～ちゃう\n' +
      '・～でしまう → ～じゃう\n' +
      'Ví dụ: 飲んでしまう → 飲んじゃう／食べてしまう → 食べちゃう',
  },
  {
    title: '2. Cách dùng ～てしまう (hoàn thành hành động)',
    explanation:
      '✏️ Dùng để diễn tả một việc gì đó đã **làm xong trọn vẹn, hoàn tất**.\n\n' +
      '📝 Ví dụ:\n' +
      '・宿題をやってしまいました。\n' +
      '→ Tôi đã làm xong bài tập rồi.\n\n' +
      '・全部（ぜんぶ）読んでしまった。\n' +
      '→ Tôi đã đọc hết tất cả rồi.\n\n' +
      '・この本を一日で読んじゃった。\n' +
      '→ Tôi đọc xong cuốn sách này chỉ trong một ngày (dạng rút gọn).',
  },
  {
    title: '3. Cách dùng ～てしまう (lỡ, tiếc nuối)',
    explanation:
      '✏️ Dùng khi **hành động xảy ra ngoài ý muốn, hoặc gây ra hậu quả xấu**.\n\n' +
      '📝 Ví dụ:\n' +
      '・財布（さいふ）を忘れてしまいました。\n' +
      '→ Tôi đã lỡ quên ví mất rồi.\n\n' +
      '・大事な書類（しょるい）をなくしてしまいました。\n' +
      '→ Tôi lỡ làm mất tài liệu quan trọng.\n\n' +
      '・友だちにひどいことを言っちゃった。\n' +
      '→ Tôi lỡ nói điều tồi tệ với bạn (dạng rút gọn).',
  },
  {
    title: '4. Phân biệt ý nghĩa dựa vào ngữ cảnh',
    explanation:
      '📌 ～てしまう có thể hiểu theo nghĩa "hoàn tất" hoặc "tiếc nuối" tùy vào **ngữ cảnh và giọng điệu**.\n\n' +
      '📝 Ví dụ:\n' +
      '・全部食べてしまった。\n' +
      '→ (1) Ăn hết rồi (vui vẻ, hoàn tất)\n' +
      '→ (2) Ăn hết mất rồi (tiếc vì ăn hết đồ ăn)',
  },
  {
    title: '5. Lưu ý khi sử dụng ～てしまう',
    explanation:
      '✅ Trong văn nói, dạng rút gọn ～ちゃう／～じゃう rất phổ biến, nhưng nên tránh dùng trong văn viết trang trọng.\n\n' +
      '✅ Có thể dùng ở hiện tại, quá khứ và tương lai:\n' +
      '・明日までに終わってしまいます。\n' +
      '→ Đến mai thì sẽ xong hết.\n\n' +
      '・そのことはもう忘れてしまった。\n' +
      '→ Tôi đã quên chuyện đó mất rồi.',
  },
]

const GrammarTeShimauScreen = () => {
  return <GrammarTemplateScreen screenTitle="～てしまう" grammarSections={grammarSections} />
}

export default GrammarTeShimauScreen
