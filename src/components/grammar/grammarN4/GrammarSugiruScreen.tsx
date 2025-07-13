import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ～すぎる',
    explanation:
      '📌 Mẫu ngữ pháp 「～すぎる」dùng để diễn tả sự **quá mức, vượt quá giới hạn cho phép hoặc mong muốn** của hành động, trạng thái nào đó.\n\n' +
      '🔑 Nghĩa: “quá…”, “...quá mức”\n\n' +
      '💡 Đây là một động từ nhóm 2, thường được **gắn sau động từ hoặc tính từ** để tạo nghĩa “quá”.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🧩 Cấu trúc:\n\n' +
      '- Động từ (bỏ ます) + すぎる\n' +
      '・食べます → 食べ**すぎる**（ăn quá nhiều）\n' +
      '・飲みます → 飲み**すぎる**（uống quá nhiều）\n\n' +
      '- Tính từ -i (bỏ い) + すぎる\n' +
      '・高い → 高**すぎる**（quá đắt）\n' +
      '・速い → 速**すぎる**（quá nhanh）\n\n' +
      '- Tính từ -na (bỏ な) + すぎる\n' +
      '・静か（な）→ 静か**すぎる**（quá yên tĩnh）\n' +
      '・簡単（な）→ 簡単**すぎる**（quá đơn giản）',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📝 Ví dụ:\n\n' +
      '・このカレーは辛すぎる。\n' +
      '→ Món cà ri này cay quá.\n\n' +
      '・昨日は飲みすぎました。\n' +
      '→ Hôm qua tôi đã uống quá nhiều.\n\n' +
      '・その問題は簡単すぎると思います。\n' +
      '→ Tôi nghĩ bài đó quá dễ.\n\n' +
      '・彼は働きすぎて、病気になった。\n' +
      '→ Anh ấy làm việc quá sức nên bị bệnh.\n\n' +
      '・静かすぎると、ちょっとこわいです。\n' +
      '→ Nếu yên tĩnh quá thì hơi đáng sợ đấy.',
  },
  {
    title: '4. Một số lưu ý khi dùng',
    explanation:
      '📌 Lưu ý:\n' +
      '・「～すぎる」là một động từ nhóm 2 → có thể chia theo thì:\n' +
      '　　現在: 食べすぎる\n' +
      '　　過去: 食べすぎた\n' +
      '　　否定: 食べすぎない\n\n' +
      '・Có thể dùng cho cả cảm xúc, trạng thái, hành vi:\n' +
      '　　→ 嬉しすぎる（quá vui）、寝すぎる（ngủ quá nhiều）',
  },
]

const GrammarSugiruScreen = () => {
  return <GrammarTemplateScreen screenTitle="～すぎる" grammarSections={grammarSections} />
}

export default GrammarSugiruScreen
