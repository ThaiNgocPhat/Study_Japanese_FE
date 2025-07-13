import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Ý nghĩa của ～ようになる／～なくなる',
    explanation:
      '📘 Mẫu câu này diễn tả **sự thay đổi về khả năng hoặc thói quen**.\n\n' +
      '・「～ようになる」: Trở nên có thể làm gì / Bắt đầu làm gì (trước đây không làm)\n' +
      '・「～なくなる」: Không còn làm gì nữa (trước đây vẫn làm)',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation: '✅ Động từ thể từ điển + ようになる\n' + '✅ Động từ thể ない + なくなる',
  },
  {
    title: '3. Ví dụ với ～ようになる',
    explanation:
      '📌 書けるようになります。\n' +
      '→ Trở nên có thể viết được.\n\n' +
      '📌 日本語が話せるようになりました。\n' +
      '→ Tôi đã bắt đầu nói được tiếng Nhật.\n\n' +
      '📌 毎日運動するようになりました。\n' +
      '→ Tôi đã bắt đầu tập thể dục mỗi ngày.',
  },
  {
    title: '4. Ví dụ với ～なくなる',
    explanation:
      '📌 肉を食べなくなりました。\n' +
      '→ Tôi đã ngừng ăn thịt.\n\n' +
      '📌 ぜんぜんテレビを見なくなりました。\n' +
      '→ Tôi không còn xem TV nữa.\n\n' +
      '📌 彼はあまり話さなくなった。\n' +
      '→ Anh ấy không còn nói chuyện nhiều nữa.',
  },
  {
    title: '5. Khi nào dùng mẫu này?',
    explanation:
      '🔄 Khi muốn nói về **sự thay đổi dần dần**:\n\n' +
      '・Khi bắt đầu hình thành thói quen mới\n' +
      '・Khi thay đổi trạng thái / khả năng\n' +
      '・Khi từ bỏ/thôi không làm một hành động nào đó nữa',
  },
]

const GrammarYouninaruScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～ようになる/ ～なくなる"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarYouninaruScreen
