import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～あいだ / ～あいだに」',
    explanation:
      '📌 Mẫu 「～あいだ」 và 「～あいだに」 đều có nghĩa là “trong khi…”, “trong suốt khoảng thời gian…”.\n\n' +
      '🔹 Dùng để nói về một hành động/sự việc xảy ra trong khoảng thời gian một hành động/sự việc khác đang diễn ra.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔸 Động từ thể ている + あいだ / あいだに\n' +
      '🔸 Tính từ -i + あいだ / あいだに\n' +
      '🔸 Tính từ -na (＋な) + あいだ / あいだに\n' +
      '🔸 Danh từ + の + あいだ / あいだに\n\n' +
      '📝 Ví dụ:\n' +
      '・父が昼寝している**あいだ**、子どもたちは静かに遊んでいました。\n' +
      '→ Trong lúc bố đang ngủ trưa, bọn trẻ chơi yên lặng.\n\n' +
      '・夏休みの**あいだに**、旅行したいです。\n' +
      '→ Trong kỳ nghỉ hè, tôi muốn đi du lịch.',
  },
  {
    title: '3. Phân biệt 「～あいだ」 và 「～あいだに」',
    explanation:
      '🔸 **「～あいだ」**: dùng khi hành động ở vế sau **diễn ra liên tục** trong suốt khoảng thời gian của vế trước.\n\n' +
      '　✅ 例:\n' +
      '　・授業の**あいだ**、ずっと寝ていました。\n' +
      '　→ Trong suốt giờ học, tôi ngủ suốt.\n\n' +
      '🔸 **「～あいだに」**: dùng khi hành động ở vế sau **xảy ra một lần**, tại một thời điểm nào đó trong khoảng thời gian đó.\n\n' +
      '　✅ 例:\n' +
      '　・授業の**あいだに**、先生が３回質問しました。\n' +
      '　→ Trong giờ học, thầy giáo đã hỏi ba lần.',
  },
  {
    title: '4. Lưu ý sử dụng',
    explanation:
      '📍 Chủ ngữ ở hai vế câu thường khác nhau để tránh nhầm lẫn.\n' +
      '📍 Không nên dùng 「～あいだ」 hoặc 「～あいだに」 cho hành động quá ngắn hoặc không có tính thời gian.\n\n' +
      '🔎 So sánh nhanh với「～うちに」:\n' +
      '・「～うちに」: nhấn mạnh **sự thay đổi trạng thái** hoặc **tranh thủ** trước khi điều gì đó xảy ra.\n' +
      '・「～あいだ」: nhấn mạnh hành động **xảy ra liên tục**.\n' +
      '・「～あいだに」: nhấn mạnh hành động **xảy ra một lần** trong khoảng thời gian đó.',
  },
]

const GrammarAidaAidaNiScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～あいだ、あいだに" grammarSections={grammarSections} />
  )
}

export default GrammarAidaAidaNiScreen
