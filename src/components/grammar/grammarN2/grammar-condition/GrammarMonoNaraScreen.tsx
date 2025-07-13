import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ものなら',
    explanation:
      '📌 「～ものなら」 được dùng để diễn tả **giả định khó xảy ra** hoặc gần như không thể xảy ra, với ý nghĩa: "**nếu có thể... thì (muốn/làm/đã làm)...**"\n\n' +
      '👉 Chủ yếu thể hiện nguyện vọng mạnh, ước muốn trong hoàn cảnh khó khăn hoặc không thực tế.\n' +
      '🧠 Dịch là: *Nếu có thể... thì...*',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 Động từ thể khả năng + ものなら\n' +
      '　例: 行けるものなら → Nếu có thể đi được thì...\n\n' +
      '🔹 Hoặc: Vる + ものなら (trong ngữ cảnh ít khả năng xảy ra)\n' +
      '　例: 戻れるものなら → Nếu có thể quay lại được thì...',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. 戻れるものなら、10年前の自分に戻りたい。\n' +
      '→ Nếu có thể quay lại thì tôi muốn trở lại bản thân 10 năm trước.\n\n' +
      '2. 行けるものなら、今すぐ日本へ行きたい。\n' +
      '→ Nếu có thể đi thì tôi muốn đến Nhật ngay bây giờ.\n\n' +
      '3. 手伝えるものなら手伝ってあげたいけど、今は時間がない。\n' +
      '→ Nếu có thể giúp thì tôi muốn giúp bạn, nhưng bây giờ không có thời gian.\n\n' +
      '4. 飛べるものなら、空を飛んであなたに会いに行きたい。\n' +
      '→ Nếu có thể bay được thì tôi muốn bay đến gặp bạn.',
  },
  {
    title: '4. Lưu ý sử dụng',
    explanation:
      '⚠️ Thường dùng với những động từ mang tính **khó thực hiện**, **không thực tế**, hoặc **giả định phi thực tế**.\n\n' +
      '💡 Hay dùng trong văn viết, lời nói cảm xúc hoặc trong văn phong giàu biểu cảm.\n\n' +
      '🔁 Có thể đi kèm với các từ như:\n' +
      '・できるものなら (nếu có thể làm được)\n' +
      '・やれるものなら (nếu có thể làm thử)',
  },
]

const GrammarMonoNaraScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ものなら" grammarSections={grammarSections} />
}

export default GrammarMonoNaraScreen
