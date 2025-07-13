import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ～として',
    explanation:
      '📌 Mẫu ngữ pháp 「～として」 dùng để **diễn tả tư cách, vai trò, lập trường** hoặc **danh nghĩa** nào đó mà một người/vật đảm nhận.\n\n' +
      '👉 Nghĩa là: **“với tư cách là…”, “như là…”, “trong vai trò là…”**\n' +
      '📝 Các biến thể:\n' +
      '・～としては: Nhấn mạnh vai trò, tư cách ở vế đầu\n' +
      '・～としても: Dù là với tư cách/vai trò đó thì… (giả định)\n' +
      '・～としての + Danh từ: Bổ nghĩa danh từ phía sau',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '✏️ [Danh từ] + として\n' +
      '✏️ [Danh từ] + としては\n' +
      '✏️ [Danh từ] + としても\n' +
      '✏️ [Danh từ] + としての + Danh từ',
  },
  {
    title: '3. Ví dụ minh họa',
    explanation:
      '① 彼は医者として働いています。\n' +
      '→ Anh ấy làm việc **với tư cách là** bác sĩ.\n\n' +
      '② 日本はアジアの国としては豊かです。\n' +
      '→ Nhật Bản là nước **giàu có nếu xét trên khía cạnh là** một quốc gia châu Á.\n\n' +
      '③ 留学生としても、この制度はありがたい。\n' +
      '→ **Ngay cả với tư cách là** du học sinh thì chế độ này cũng rất đáng quý.\n\n' +
      '④ 彼は教師としての意見を述べた。\n' +
      '→ Anh ấy đã nêu ra ý kiến **với tư cách là** một giáo viên.\n\n' +
      '⑤ この絵は芸術作品としても価値が高い。\n' +
      '→ Bức tranh này **ngay cả với vai trò là** tác phẩm nghệ thuật thì cũng có giá trị rất cao.',
  },
  {
    title: '4. Ghi nhớ nhanh',
    explanation:
      '🔹 「として」 nhấn mạnh vai trò, tư cách hoặc lập trường của chủ thể.\n' +
      '🔹 「としても」 dùng khi giả định **dù là với tư cách đó thì cũng…** (giống với mẫu câu điều kiện).\n' +
      '🔹 「としての」 luôn đứng **trước danh từ** để bổ nghĩa.\n\n' +
      '💡 Đây là mẫu rất thường gặp trong văn nói trang trọng và văn viết chính thức (tin tức, báo chí, tiểu luận…).',
  },
]

const GrammarToshiteScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～として（は）/ としても/ としての"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarToshiteScreen
