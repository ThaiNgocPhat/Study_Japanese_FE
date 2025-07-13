import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Ý nghĩa và cách dùng ～ようにする',
    explanation:
      '🔸 Mẫu câu này diễn tả **ý định và sự cố gắng** làm hoặc không làm một việc gì đó, hướng đến thói quen tốt hơn.\n' +
      '🔸 Dạng 「ようにしています」 thể hiện hành động đó đang được **duy trì đều đặn**.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '✅ Động từ thể từ điển + ようにする\n' +
      '✅ Động từ thể ない + ようにする\n\n' +
      '→ Tôi sẽ cố gắng làm…/ Cố gắng không làm…\n\n' +
      '✅ Động từ thể từ điển / ない + ようにしています\n' +
      '→ Tôi đang cố gắng làm đều đặn…',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '📌 野菜を毎日たくさん食べるようにしています。\n' +
      '→ Tôi đang cố gắng ăn nhiều rau mỗi ngày.\n\n' +
      '📌 甘いものを食べないようにします。\n' +
      '→ Tôi sẽ cố gắng không ăn đồ ngọt.\n\n' +
      '📌 徹夜しないようにします。\n' +
      '→ Tôi sẽ cố không thức khuya.',
  },
  {
    title: '4. Cấu trúc ～ようにしてください',
    explanation:
      '📎 Diễn tả yêu cầu/nhắc nhở nhẹ nhàng:\n\n' +
      '✅ [Động từ thể từ điển/ない] + ようにしてください\n\n' +
      '📌 毎日運動するようにしてください。\n' +
      '→ Hãy cố gắng vận động hàng ngày.\n\n' +
      '📌 甘いものをたくさん食べないようにしてください。\n' +
      '→ Đừng ăn nhiều đồ ngọt nhé.',
  },
  {
    title: '5. Khi không dùng mẫu này',
    explanation:
      '❌ Không dùng để nhờ vả/sai khiến thực hiện ngay tại chỗ.\n\n' +
      '（✕）塩を取るようにしてください。\n' +
      '（〇）塩を取ってください。\n\n' +
      '→ Khi nhờ việc ngay lập tức, dùng 「～てください」 thay vì 「ようにしてください」.',
  },
  {
    title: '6. So sánh: 「ようにする」 vs 「ようになる」',
    explanation:
      '📌 「ようにする」: Cố gắng, mang tính **ý chí**, chưa chắc đã đạt được.\n' +
      '📌 「ようになる」: Diễn tả **sự thay đổi thực tế** đã xảy ra (thường dùng với thể khả năng).\n\n' +
      'Ví dụ:\n' +
      '・毎日運動するようにしています。(Tôi đang cố gắng tập thể dục mỗi ngày)\n' +
      '・毎日運動するようになりました。(Tôi đã bắt đầu có thói quen tập thể dục mỗi ngày)',
  },
]

const GrammarYouniSuruScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ようにする" grammarSections={grammarSections} />
}

export default GrammarYouniSuruScreen
