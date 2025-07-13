import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Ý nghĩa & Cấu trúc',
    explanation:
      '🟡 Mẫu câu diễn tả **khả năng làm được việc gì đó**.\n\n' +
      '🔹 Cấu trúc:\n' +
      '[Động từ thể từ điển] + こと + が + できる\n\n' +
      '🔹 Thể phủ định:\n' +
      '[Động từ thể từ điển] + こと + が + できない',
  },
  {
    title: '2. Ví dụ khẳng định',
    explanation:
      '📝 Ví dụ:\n' +
      '・英語を話すことができます。\n' +
      '→ Tôi có thể nói tiếng Anh.\n\n' +
      '・すしを食べることができる。\n' +
      '→ Tôi có thể ăn sushi.\n\n' +
      '・漢字を書くことができます。\n' +
      '→ Tôi có thể viết chữ Hán.',
  },
  {
    title: '3. Ví dụ phủ định',
    explanation:
      '📝 Ví dụ:\n' +
      '・英語を話すことができません。\n' +
      '→ Tôi không thể nói tiếng Anh.\n\n' +
      '・すしを食べることができない。\n' +
      '→ Tôi không thể ăn sushi.\n\n' +
      '・漢字を書くことができません。\n' +
      '→ Tôi không thể viết chữ Hán.',
  },
  {
    title: '4. Mẹo ghi nhớ nhanh',
    explanation:
      '💡 Mẫu 「ことができる」 rất dễ sử dụng:\n' +
      '✔ Không cần chia động từ theo nhóm\n' +
      '✔ Giữ nguyên thể từ điển rồi gắn 「ことができる」 vào sau\n' +
      '✔ Dùng được trong cả văn nói và văn viết (lịch sự, trang trọng)\n\n' +
      '👉 Gợi ý học:\n' +
      '・Kết hợp học từ vựng với mẫu này để tăng phản xạ\n' +
      '・Ghi âm câu ví dụ của bản thân để luyện nói',
  },
  {
    title: '5. So sánh với thể khả năng (可能形)',
    explanation:
      '🆚 「ことができる」\n' +
      '・Trang trọng hơn, dùng phổ biến trong văn viết\n' +
      '・Phù hợp với người mới học vì dễ áp dụng\n\n' +
      '🆚 「可能形」 (ví dụ: 書ける, 食べられる)\n' +
      '・Ngắn gọn hơn, hay dùng trong văn nói\n' +
      '・Phải biết chia đúng nhóm động từ\n\n' +
      '📌 Ví dụ so sánh:\n' +
      '・ピアノをひくことができます。\n' +
      '→ ピアノがひけます。',
  },
]

const GrammarKotoGaDekiruScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ことができる" grammarSections={grammarSections} />
}

export default GrammarKotoGaDekiruScreen
