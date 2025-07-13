import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～としたら / ～とすれば',
    explanation:
      '📌 「～としたら / ～とすれば」 là mẫu câu diễn tả **giả định**, mang ý nghĩa: "**nếu mà..., giả sử mà...**".\n\n' +
      '👉 Thường dùng để đưa ra suy đoán, đánh giá hoặc kết luận trong một hoàn cảnh giả định.\n\n' +
      '🧠 Dịch là: *Nếu mà..., giả sử mà... thì...*',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔹 [Thể thường (普通形)] + としたら / とすれば\n\n' +
      'Ví dụ:\n' +
      '・雨が降るとしたら、試合は中止になるだろう。\n' +
      '→ Nếu mà trời mưa thì trận đấu chắc sẽ bị hủy.\n\n' +
      '・彼が来ないとすれば、私たちだけで始めましょう。\n' +
      '→ Nếu anh ấy không đến thì chúng ta bắt đầu trước nhé.',
  },
  {
    title: '3. Ý nghĩa và cách dùng',
    explanation:
      '✅ Dùng khi người nói muốn đưa ra **giả định không chắc chắn** hoặc **điều kiện giả sử**, để từ đó suy ra kết luận, hành động, đánh giá.\n\n' +
      '🔁 So với 「～たら」 hay 「～ば」 thì 「～としたら / ～とすれば」 **mang tính giả định cao hơn** và thường không xảy ra trong thực tế.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. 留学するとしたら、日本に行きたいです。\n' +
      '→ Nếu mà đi du học thì tôi muốn đến Nhật.\n\n' +
      '2. 明日地震が起こるとすれば、どうすればいいですか？\n' +
      '→ Nếu giả sử ngày mai có động đất thì nên làm gì?\n\n' +
      '3. この話が本当だとしたら、彼はすごい人だ。\n' +
      '→ Nếu câu chuyện này là thật thì anh ấy là người giỏi thật đấy.\n\n' +
      '4. 宝くじに当たったとすれば、何を買いますか？\n' +
      '→ Nếu mà trúng xổ số thì bạn sẽ mua gì?',
  },
  {
    title: '5. So sánh ～としたら／～とすれば và ～たら／～なら',
    explanation:
      '🔹 ～としたら / ～とすれば: mang tính **giả định cao**, thiên về **suy đoán** hoặc **điều kiện không chắc có thật**.\n' +
      '🔹 ～たら / ～なら: có thể dùng cho **điều kiện thực tế hoặc sẽ xảy ra** trong tương lai.\n\n' +
      '💡 Ví dụ:\n' +
      '・明日雨が降ったら、試合は中止です。\n' +
      '→ Nếu ngày mai mưa (và có thể mưa), thì trận đấu sẽ bị hủy. (thực tế)\n\n' +
      '・明日雨が降るとしたら、どうしますか？\n' +
      '→ Giả sử ngày mai mưa (chỉ là giả định), thì bạn sẽ làm gì?',
  },
]

const GrammarToshitaraScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～としたら / ～とすれば"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarToshitaraScreen
