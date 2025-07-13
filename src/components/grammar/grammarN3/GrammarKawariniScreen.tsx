import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu 「～かわりに」',
    explanation:
      '📌 Mẫu ngữ pháp 「～かわりに」 có nghĩa là **“thay vì…”, “đổi lại…”, “bù lại…”** và được dùng để thể hiện:\n\n' +
      '① Thay thế một hành động hoặc sự việc bằng một hành động/sự việc khác\n' +
      '② Bù lại (một điểm tốt sẽ đi kèm điểm không tốt, hoặc ngược lại)',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔸 [Động từ thể từ điển] + かわりに\n' +
      '🔸 [Danh từ + の] + かわりに\n' +
      '🔸 [Tính từ + な/である] + かわりに\n\n' +
      '⛔ Không dùng với thể quá khứ, phủ định hoặc quá suồng sã trong văn trang trọng.',
  },
  {
    title: '3. Diễn tả sự thay thế',
    explanation:
      '👉 Dùng để nói **“thay vì làm A thì làm B”** hoặc **“ai đó làm thay cho ai”**:\n\n' +
      '📝 Ví dụ:\n' +
      '・母の**かわりに**、私が晩ご飯を作りました。\n' +
      '→ Tôi đã nấu cơm tối thay cho mẹ.\n\n' +
      '・運動する**かわりに**、食事に気をつけています。\n' +
      '→ Thay vì vận động, tôi chú ý đến ăn uống.\n\n' +
      '・お金の**かわりに**、このチケットを使えます。\n' +
      '→ Có thể dùng vé này thay cho tiền mặt.',
  },
  {
    title: '4. Diễn tả sự đánh đổi, bù lại',
    explanation:
      '👉 Dùng để chỉ **sự đánh đổi, bù lại một điều gì đó** – nghĩa là có lợi điểm này thì sẽ có bất lợi ở điểm khác:\n\n' +
      '📝 Ví dụ:\n' +
      '・この部屋は静かな**かわりに**、ちょっと狭いです。\n' +
      '→ Phòng này yên tĩnh nhưng bù lại hơi chật.\n\n' +
      '・彼はよく勉強する**かわりに**、遊びの時間が少ない。\n' +
      '→ Cậu ấy học rất chăm, đổi lại thời gian chơi rất ít.\n\n' +
      '・新しい仕事は給料が高い**かわりに**、とても忙しいです。\n' +
      '→ Công việc mới lương cao nhưng đổi lại rất bận rộn.',
  },
  {
    title: '5. Lưu ý khi sử dụng',
    explanation:
      '🔸 「～かわりに」 thường đi với các cặp tương phản để làm nổi bật sự đánh đổi.\n' +
      '🔸 Có thể dùng cả trong văn nói và viết, nhưng chú ý ngữ cảnh để sử dụng phù hợp.\n\n' +
      '📌 So với 「～の代わりに」 thì mẫu 「～かわりに」 mang tính **trừu tượng và logic hơn** (không chỉ là thay thế vật lý).',
  },
]

const GrammarKawariniScreen = () => {
  return <GrammarTemplateScreen screenTitle="～かわりに" grammarSections={grammarSections} />
}

export default GrammarKawariniScreen
