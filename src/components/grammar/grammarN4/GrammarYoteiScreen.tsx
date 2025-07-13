import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng ～予定です',
    explanation:
      '🔸 「予定（よてい）」 nghĩa là **dự định, kế hoạch**.\n' +
      '🔸 Mẫu câu này diễn tả **kế hoạch đã được xác định rõ ràng hoặc chính thức** sẽ thực hiện trong tương lai.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '✅ Động từ thể từ điển + 予定です。\n' +
      '✅ Danh từ + の + 予定です。\n\n' +
      '→ Có kế hoạch làm gì / Theo lịch thì sẽ làm gì…',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📌 ７月の終わりにドイツへ出張する予定です。\n' +
      '→ Tôi có kế hoạch đi công tác Đức vào cuối tháng 7.\n\n' +
      '📌 来年日本に留学する予定です。\n' +
      '→ Theo kế hoạch thì năm sau tôi sẽ du học Nhật.\n\n' +
      '📌 会議は１１時までの予定です。\n' +
      '→ Cuộc họp dự kiến kéo dài đến 11 giờ.\n\n' +
      '📌 卒業式は１０時から始まる予定です。\n' +
      '→ Lễ tốt nghiệp dự kiến bắt đầu lúc 10 giờ.',
  },
  {
    title: '4. So sánh với ～つもりです và ～ようと思います',
    explanation:
      '📎 「予定です」 nhấn mạnh **kế hoạch chính thức**, đã định rõ.\n' +
      '📌 「つもりです」 là **dự định cá nhân**, đã suy nghĩ từ trước.\n' +
      '📌 「ようと思います」 là **ý định**, có thể là vừa nảy ra trong đầu.\n\n' +
      'Ví dụ:\n' +
      '・大阪に行く予定です。→ Kế hoạch chính thức\n' +
      '・大阪に行くつもりです。→ Dự định cá nhân, đã cân nhắc\n' +
      '・大阪に行こうと思います。→ Ý định vừa nghĩ ra khi nói chuyện',
  },
  {
    title: '5. Lưu ý sử dụng',
    explanation:
      '❌ Không dùng 「予定です」 hay 「つもりです」 với các hành động thường ngày.\n\n' +
      '（✕）早く寝る予定です。\n' +
      '（〇）早く寝ようと思います。\n\n' +
      '→ Với thói quen hay hành động nhỏ trong ngày, nên dùng 「～ようと思います」.',
  },
]

const GrammarYoteiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～予定です" grammarSections={grammarSections} />
}

export default GrammarYoteiScreen
