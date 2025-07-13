import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～たびに」',
    explanation:
      '📌 「～たびに」 dùng để diễn tả ý nghĩa: “Cứ mỗi lần… thì…”, “hễ mà… là…”.\n\n' +
      '🔹 Mẫu câu này được dùng khi một hành động A xảy ra thì luôn luôn kéo theo hành động B cũng xảy ra.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔸 Động từ thể từ điển + たびに\n' +
      '🔸 Danh từ + の + たびに\n\n' +
      '📝 Ví dụ:\n' +
      '・この歌を聞く**たびに**、ふるさとを思い出します。\n' +
      '→ Mỗi lần nghe bài hát này, tôi lại nhớ về quê hương.\n\n' +
      '・買い物の**たびに**、無駄なものを買ってしまう。\n' +
      '→ Mỗi lần đi mua sắm là tôi lại mua những thứ không cần thiết.',
  },
  {
    title: '3. Ý nghĩa và cách dùng',
    explanation:
      '✅ 「～たびに」 mang nghĩa lặp lại, và hành động ở vế sau xảy ra **một cách đều đặn hoặc có xu hướng lặp lại** mỗi khi hành động ở vế trước xảy ra.\n\n' +
      '🔹 Không dùng cho những hành động đặc biệt hiếm khi xảy ra hoặc chỉ xảy ra một lần.\n\n' +
      '🔹 Vế sau KHÔNG được mang ý nghĩa **ý chí hoặc mệnh lệnh**.\n\n' +
      '　❌ Ví dụ sai:\n' +
      '　・出かけるたびに、傘を持って行ってください。\n' +
      '　→ KHÔNG dùng mẫu này với mệnh lệnh.',
  },
  {
    title: '4. So sánh với các mẫu tương tự',
    explanation:
      '🔸 「～と」: chỉ mối quan hệ điều kiện – hễ A thì B (tự nhiên hoặc tất yếu).\n' +
      '🔸 「～たびに」: nhấn mạnh sự **lặp lại mỗi lần**, và hành động B **có thể thay đổi** theo từng lần A xảy ra.\n\n' +
      '✅ Ví dụ so sánh:\n' +
      '・春になる**と**、花が咲きます。\n' +
      '→ Hễ mùa xuân đến thì hoa nở. (hiện tượng tự nhiên)\n\n' +
      '・春になる**たびに**、新しい目標を立てます。\n' +
      '→ Mỗi lần xuân về, tôi lại đặt ra mục tiêu mới. (thói quen lặp lại)',
  },
]

const GrammarTabiNiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～たびに" grammarSections={grammarSections} />
}

export default GrammarTabiNiScreen
