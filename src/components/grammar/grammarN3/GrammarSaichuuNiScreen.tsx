import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～最中に」',
    explanation:
      '📌 Mẫu 「～最中に」 dùng để diễn tả ý: “đúng vào lúc đang… thì…”.\n' +
      '🔹 Nhấn mạnh rằng một sự việc bất ngờ xảy ra **ngay trong lúc** hành động khác đang diễn ra.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔸 Động từ thể ている + 最中に（さいちゅうに）\n' +
      '🔸 Danh từ + の + 最中に\n\n' +
      '📝 Ví dụ:\n' +
      '・会議をしている**最中に**、地震が起きました。\n' +
      '→ Ngay trong lúc đang họp thì có động đất xảy ra.\n\n' +
      '・食事の**最中に**、電話がかかってきた。\n' +
      '→ Đúng lúc đang ăn thì có điện thoại gọi đến.',
  },
  {
    title: '3. Ý nghĩa và cách dùng',
    explanation:
      '🔹 Diễn tả **sự việc bất ngờ**, ngoài dự đoán xảy ra **đúng lúc** đang thực hiện một hành động nào đó.\n' +
      '🔹 Vế sau thường là sự việc không mong muốn hoặc gây cản trở.\n\n' +
      '📍 KHÁC với 「～間に」/「～うちに」:\n' +
      '・「～間に」: xảy ra trong khoảng thời gian nào đó\n' +
      '・「～うちに」: tranh thủ hoặc trong lúc còn chưa…\n' +
      '・「～最中に」: nhấn mạnh thời điểm **chính giữa**, đang làm thì…',
  },
  {
    title: '4. Lưu ý sử dụng',
    explanation:
      '✅ Vế trước phải là hành động **kéo dài trong thời gian nhất định** (không dùng với hành động ngắn hoặc đột ngột).\n' +
      '✅ Không dùng với các động từ chỉ hành động kết thúc ngay lập tức (như: 着く、行く…).\n\n' +
      '🔎 Ví dụ đúng:\n' +
      '・試験の最中に、となりの人が倒れた。\n\n' +
      '❌ Ví dụ sai:\n' +
      '・駅に着いた最中に… → ❌ (着く là hành động ngắn, không phù hợp).',
  },
]

const GrammarSaichuuNiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～最中に" grammarSections={grammarSections} />
}

export default GrammarSaichuuNiScreen
