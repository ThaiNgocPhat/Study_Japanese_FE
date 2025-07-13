import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const grammarSections = [
  {
    title: '1. Thể ý chí là gì?',
    explanation:
      '🧠 Động từ thể ý chí (意思形: いしけい) dùng để:\n' +
      '・Diễn tả **ý định, quyết tâm** của người nói\n' +
      '・**Rủ rê, mời mọc**, đề xuất cùng làm gì đó\n\n' +
      '📌 Gần giống với mẫu lịch sự ～ましょう mà bạn đã học trước đó!',
  },
  {
    title: '2. Cách chia động từ thể ý chí',
    explanation:
      '🔧 Chia theo nhóm:\n\n' +
      '🔹 Nhóm 1 (う → おう):\n' +
      '・書く → 書こう（viết thôi）\n' +
      '・待つ → 待とう（chờ thôi）\n' +
      '・話す → 話そう（nói thôi）\n' +
      '・行く → 行こう（đi thôi）\n\n' +
      '🔹 Nhóm 2 (る → よう):\n' +
      '・食べる → 食べよう（ăn thôi）\n' +
      '・見る → 見よう（xem thôi）\n\n' +
      '🔹 Nhóm 3 (bất quy tắc):\n' +
      '・する → しよう（làm thôi）\n' +
      '・来る → 来よう（đến thôi）',
  },
  {
    title: '3. Ví dụ sử dụng',
    explanation:
      '📝 Ví dụ:\n' +
      '① 今日から日記を 書こう。\n' +
      '→ Từ hôm nay hãy viết nhật ký nào.\n\n' +
      '② 明日 もう一度 来よう。\n' +
      '→ Mai lại đến lần nữa nhé.\n\n' +
      '③ 家に帰ったら、掃除しよう。\n' +
      '→ Về đến nhà thì dọn dẹp thôi nào.\n\n' +
      '④ 公園（こうえん）で遊ぼう！\n' +
      '→ Chơi ở công viên đi!',
  },
  {
    title: '4. So sánh ～ましょう và thể ý chí',
    explanation:
      '👩‍🏫 Cả hai đều dùng để **đề xuất/mời mọc**, nhưng:\n\n' +
      '・～ましょう: lịch sự, thường dùng khi nói với người khác.\n' +
      '　→ いっしょに食べましょう。\n\n' +
      '・Thể ý chí: thân mật, dùng trong nội tâm hoặc với bạn bè.\n' +
      '　→ 食べよう！',
  },
]

const GrammarIshikeiScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="Động từ thể ý chí (意思形)"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarIshikeiScreen
