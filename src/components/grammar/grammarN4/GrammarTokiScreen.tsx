import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu ～とき',
    explanation:
      '📌「～とき」nghĩa là **"khi..."**, dùng để nói về thời điểm xảy ra một hành động hoặc sự việc nào đó.\n\n' +
      '👉 Mẫu câu này rất linh hoạt, được dùng trong cả văn nói và văn viết để diễn đạt **thời gian** xảy ra hành động.\n\n' +
      '📝 Ví dụ:\n' +
      '・学生のとき、よく旅行しました。\n' +
      '→ Khi còn là sinh viên, tôi thường đi du lịch.',
  },
  {
    title: '2. Cấu trúc sử dụng',
    explanation:
      '🧩 Cấu trúc chung:\n' +
      '[Mệnh đề bổ nghĩa] + とき\n\n' +
      '✏️ Động từ:\n' +
      '・辞書形（行く）→ 行くとき（khi đi）\n' +
      '・た形（行った）→ 行ったとき（khi đã đi）\n' +
      '・ない形（行かない）→ 行かないとき（khi không đi）\n\n' +
      '✏️ Tính từ -i:\n' +
      '・寒い → 寒いとき（khi lạnh）\n\n' +
      '✏️ Tính từ -na:\n' +
      '・元気 → 元気なとき（khi khỏe mạnh）\n\n' +
      '✏️ Danh từ:\n' +
      '・子ども → 子どものとき（khi còn nhỏ）',
  },
  {
    title: '3. Cách hiểu và chia theo thì',
    explanation:
      '🔁 Sự khác biệt giữa [Vる]とき và [Vた]とき:\n\n' +
      '✅ [Vる]とき: Hành động trong mệnh đề chính xảy ra **trước hoặc trong khi** mệnh đề とき xảy ra\n' +
      '→ 出かけるとき、ドアを閉めてください。\n' +
      '→ Khi ra ngoài thì hãy đóng cửa nhé.\n\n' +
      '✅ [Vた]とき: Hành động trong mệnh đề chính xảy ra **sau khi** mệnh đề とき xảy ra\n' +
      '→ 日本へ行ったとき、着物を買いました。\n' +
      '→ Khi đã đến Nhật, tôi đã mua kimono.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📘 Một số câu thường gặp:\n\n' +
      '・暇なとき、本を読みます。\n' +
      '→ Khi rảnh thì tôi đọc sách.\n\n' +
      '・疲れているときは、早く寝たほうがいいです。\n' +
      '→ Khi mệt thì nên ngủ sớm.\n\n' +
      '・雨のとき、傘を持って行きます。\n' +
      '→ Khi trời mưa thì tôi mang dù.\n\n' +
      '・子どものとき、よく外で遊びました。\n' +
      '→ Khi còn nhỏ, tôi thường chơi ngoài trời.',
  },
  {
    title: '5. Lưu ý khi sử dụng',
    explanation:
      '📌「～とき」mang tính **xác định thời điểm** rõ ràng, không phải là điều kiện như「～ば」「～たら」.\n\n' +
      '✅ Có thể kết hợp với mọi thì (quá khứ, hiện tại, phủ định).\n\n' +
      '⚠️ Không nhầm lẫn với「と」dùng cho điều kiện (cứ A thì B):\n' +
      '・❌ 雨が降ると、傘を持って行きます。 (điều kiện)\n' +
      '・✅ 雨が降るとき、傘を持って行きます。 (thời điểm)\n\n' +
      '🧠 Chú ý thì của động từ đứng trước「とき」để hiểu đúng ngữ nghĩa!',
  },
]
const GrammarTokiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～とき" grammarSections={grammarSections} />
}

export default GrammarTokiScreen
