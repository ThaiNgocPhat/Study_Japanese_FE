import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu ～そうです',
    explanation:
      '📌「～そうです」có hai cách sử dụng chính:\n\n' +
      '① Truyền đạt lại thông tin đã nghe được từ người khác (truyền đạt gián tiếp)\n' +
      '② Diễn đạt cảm nhận/suy đoán dựa trên những gì **mắt thấy tai nghe ngay lúc đó** (dự đoán mang tính trực quan)\n\n' +
      '👉 Cùng là "nghe nói là..." hoặc "trông có vẻ...", nhưng ngữ cảnh dùng khác nhau!',
  },
  {
    title: '2. Cách 1: ～そうです (truyền đạt thông tin)',
    explanation:
      '📘 Cấu trúc:\n' +
      '[Thể thường (普通形)] + そうです\n\n' +
      '📝 Ví dụ:\n' +
      '・田中さんは来週結婚するそうです。\n' +
      '→ Nghe nói anh Tanaka sẽ kết hôn vào tuần sau.\n\n' +
      '・ニュースによると、明日は台風が来るそうです。\n' +
      '→ Theo tin tức thì nghe nói ngày mai sẽ có bão.\n\n' +
      '📌 Đây là mẫu câu mang nghĩa "**nghe nói rằng…**", dùng khi muốn **truyền đạt lại thông tin** mình nghe được từ người khác.',
  },
  {
    title: '3. Cách 2: ～そうです (dự đoán cảm quan)',
    explanation:
      '📗 Cấu trúc:\n' +
      '[Động từ bỏ ます] + そうです\n' +
      '[Tính từ -i bỏ い] + そうです\n' +
      '[Tính từ -na] + そうです\n\n' +
      '📝 Ví dụ:\n' +
      '・このケーキ、おいしそうですね。\n' +
      '→ Cái bánh này trông ngon nhỉ.\n\n' +
      '・雨が降りそうです。\n' +
      '→ Trông có vẻ sắp mưa rồi.\n\n' +
      '・彼は今にも泣きそうです。\n' +
      '→ Anh ấy trông như sắp khóc đến nơi.\n\n' +
      '📌 Đây là mẫu câu mang nghĩa "**trông có vẻ…**", dựa vào **trực giác, quan sát bên ngoài**.',
  },
  {
    title: '4. Lưu ý khi sử dụng ～そうです',
    explanation:
      '🔍 Lưu ý phân biệt 2 loại:\n\n' +
      '🗣「～そうです」（truyền đạt thông tin）:\n' +
      '・Đi với **thể thường** của động từ, tính từ, danh từ\n' +
      '・Thường đi kèm 「～によると」(theo như...)\n\n' +
      '👀「～そうです」（dự đoán cảm quan）:\n' +
      '・KHÔNG đi với danh từ\n' +
      '・Không dùng với một số tính từ như: いい → よさそう（KHÔNG phải いそう）\n\n' +
      '⚠️ Tránh nhầm lẫn:\n' +
      '・雨が降るそうです。(Nghe nói trời sẽ mưa – từ tin tức)\n' +
      '・雨が降りそうです。(Trông có vẻ trời sắp mưa – nhìn bầu trời)',
  },
  {
    title: '5. Mẹo học',
    explanation:
      '💡 Mẹo học:\n' +
      '・Nghe ai đó nói gì → dùng 「そうです」truyền đạt lại\n' +
      '・Tự cảm nhận từ hình ảnh → dùng 「そうです」dự đoán cảm quan\n\n',
  },
]

const GrammarSouDesuScreen = () => {
  return <GrammarTemplateScreen screenTitle="～そうです" grammarSections={grammarSections} />
}

export default GrammarSouDesuScreen
