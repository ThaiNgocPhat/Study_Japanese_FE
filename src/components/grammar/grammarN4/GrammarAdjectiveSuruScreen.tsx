import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu Tính từ + する',
    explanation:
      '📌「Tính từ + する」dùng để **biến đổi tính từ thành động từ mang nghĩa "làm cho..."**.\n\n' +
      '👉 Mẫu này diễn tả hành động **làm thay đổi trạng thái**, khiến ai đó/cái gì đó trở nên như thế nào.',
  },
  {
    title: '2. Cấu trúc chung',
    explanation:
      '🧩 Cấu trúc:\n' +
      '・Tính từ -i: Bỏ い + くする\n' +
      '・Tính từ -na: Bỏ な + にする\n\n' +
      '📝 Ví dụ:\n' +
      '・冷たい（つめたい）→ 冷たくする：Làm cho lạnh\n' +
      '・静かな（しずかな）→ 静かにする：Làm cho yên tĩnh\n' +
      '・部屋をきれいにする：Làm cho phòng sạch\n' +
      '・音を大きくする：Tăng âm lượng',
  },
  {
    title: '3. Ứng dụng trong thực tế',
    explanation:
      '🔸 Dùng khi nói về **điều chỉnh, thay đổi, ra quyết định về trạng thái của vật/người**.\n\n' +
      '📝 Ví dụ:\n' +
      '・テレビの音を小さくしてください。\n' +
      '→ Hãy giảm âm lượng TV xuống.\n\n' +
      '・辛くしないでください。\n' +
      '→ Đừng làm cay quá nhé.\n\n' +
      '・部屋を明るくしたいです。\n' +
      '→ Tôi muốn làm cho phòng sáng hơn.',
  },
  {
    title: '4. Phân biệt với ～になる',
    explanation:
      '🆚「～くする／～にする」→ Chủ động **làm thay đổi trạng thái**\n' +
      '🆚「～くなる／～になる」→ Trạng thái **tự thay đổi (không chủ động)**\n\n' +
      '📝 Ví dụ:\n' +
      '・この薬を飲むと、元気になります。\n' +
      '→ Uống thuốc này thì sẽ khỏe ra. (tự nhiên)\n\n' +
      '・野菜を食べて、体を元気にしましょう。\n' +
      '→ Ăn rau để làm cơ thể khỏe mạnh lên. (chủ động)',
  },
  {
    title: '5. Mẹo học',
    explanation:
      '💡 Mẹo ghi nhớ:\n' +
      '・Tính từ -i → くする（高い → 高くする）\n' +
      '・Tính từ -na → にする（静か → 静かにする）\n\n',
  },
]

const GrammarAdjectiveSuruScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="Tính từ + する: Làm cho …"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarAdjectiveSuruScreen
