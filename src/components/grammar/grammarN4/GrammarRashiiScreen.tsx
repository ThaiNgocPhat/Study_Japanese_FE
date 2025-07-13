import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu ～らしいです',
    explanation:
      '📌「～らしい」có hai cách dùng phổ biến:\n\n' +
      '① Truyền đạt thông tin đã nghe từ người khác (nghe nói…)\n' +
      '② Diễn tả đặc điểm đúng kiểu, đặc trưng (đậm chất...)\n\n' +
      '👉 Mang ý nghĩa **"nghe nói là..."**, hoặc **"ra dáng, đúng kiểu..."** tùy ngữ cảnh.',
  },
  {
    title: '2. Cách dùng ①: Truyền đạt thông tin (nghe nói)',
    explanation:
      '🧩 Cấu trúc:\n' +
      '[Thể thường (普通形)] + らしいです\n\n' +
      '📝 Ví dụ:\n' +
      '・山田さんは来月結婚するらしいです。\n' +
      '→ Nghe nói anh Yamada sẽ kết hôn vào tháng sau.\n\n' +
      '・あの店はとても人気があるらしいです。\n' +
      '→ Nghe nói cửa hàng đó rất nổi tiếng.\n\n' +
      '📌 Khác với「そうです」(truyền đạt),「らしいです」hàm ý người nói **không chắc chắn**, chỉ **nghe phong phanh**.',
  },
  {
    title: '3. Cách dùng ②: Đặc trưng tiêu biểu (ra dáng, đậm chất)',
    explanation:
      '🧩 Cấu trúc:\n' +
      '[Danh từ] + らしい\n\n' +
      '📝 Ví dụ:\n' +
      '・彼は本当に男らしいですね。\n' +
      '→ Anh ấy thật là nam tính.\n\n' +
      '・今日は春らしい天気ですね。\n' +
      '→ Hôm nay thời tiết thật đúng chất mùa xuân nhỉ.\n\n' +
      '📌 Dùng để **nhấn mạnh tính chất đặc trưng** đúng như hình dung/định nghĩa.',
  },
  {
    title: '4. Phân biệt ～そうです・～ようです・～らしいです',
    explanation:
      '🔍 So sánh nhanh:\n\n' +
      '・～そうです：Nghe thấy / nhìn thấy → suy đoán trực tiếp (trông có vẻ)\n' +
      '・～ようです：Suy luận mang tính logic, tương đối khách quan\n' +
      '・～らしいです：Nghe người khác nói (phong phanh), hoặc mang tính hình ảnh rõ nét, "ra dáng"\n\n' +
      '📝 Ví dụ:\n' +
      '・雨が降りそうです。→ Trông có vẻ sắp mưa (nhìn trời)\n' +
      '・雨が降るようです。→ Hình như sắp mưa (cảm giác/suy đoán)\n' +
      '・雨が降るらしいです。→ Nghe nói là sắp mưa (từ người khác)',
  },
  {
    title: '5. Mẹo học',
    explanation:
      '💡 Ghi nhớ nhanh:\n' +
      '・Nghe phong phanh từ người khác → らしいです\n' +
      '・Muốn khen ai “ra dáng” → [N] + らしい\n\n',
  },
]

const GrammarRashiiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～らしいです" grammarSections={grammarSections} />
}

export default GrammarRashiiScreen
