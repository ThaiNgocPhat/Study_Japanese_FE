import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～ため（に）」',
    explanation:
      '📌 Mẫu 「～ため（に）」 dùng để diễn tả **nguyên nhân, lý do** hoặc **mục đích** tùy theo ngữ cảnh.\n\n' +
      '👉 Có 2 nghĩa chính:\n' +
      '① Vì… nên… (chỉ nguyên nhân, lý do)\n' +
      '② Để… (chỉ mục đích)',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔹 Động từ thể từ điển + ため（に）\n' +
      '🔹 Danh từ + の + ため（に）\n' +
      '🔹 Tính từ + ため（に）\n\n' +
      '📝 Ví dụ - Nghĩa "vì… nên…":\n' +
      '・雨が降った**ため（に）**、試合が中止になった。\n' +
      '→ Vì trời mưa nên trận đấu bị hoãn.\n\n' +
      '・病気**のため**、学校を休みました。\n' +
      '→ Vì bệnh nên tôi đã nghỉ học.\n\n' +
      '📝 Ví dụ - Nghĩa "để…":\n' +
      '・留学する**ために**、日本語を勉強しています。\n' +
      '→ Tôi học tiếng Nhật để đi du học.\n\n' +
      '・健康**のために**、毎日運動しています。\n' +
      '→ Vì sức khỏe (để tốt cho sức khỏe), tôi tập thể dục mỗi ngày.',
  },
  {
    title: '3. Phân biệt với 「～ので」「～から」 và 「～ように」',
    explanation:
      '📍 So với các mẫu ngữ pháp khác:\n\n' +
      '🔸 「～ため」 (vì): văn viết, trang trọng, mang tính chính thức hơn 「～から／～ので」.\n' +
      '🔸 「～ために」 (để): dùng với **động từ có chủ ý** (chỉ mục đích)\n' +
      '🔸 「～ように」 (để): dùng với **động từ không chủ ý**, trạng thái hoặc khả năng.\n\n' +
      '📝 So sánh:\n' +
      '・合格する**ために**、勉強している。\n' +
      '→ Học để đỗ (có chủ ý)\n' +
      '・合格できる**ように**、勉強している。\n' +
      '→ Học để có thể đỗ (tập trung vào khả năng)',
  },
  {
    title: '4. Lưu ý sử dụng',
    explanation:
      '🔹 Khi dùng 「ため」 để nói về nguyên nhân, không dùng trong những câu biểu hiện cảm xúc cá nhân như 「うれしい」「悲しい」.\n\n' +
      '🛑 Sai:\n' +
      '・雨が降ったため、うれしい ❌\n\n' +
      '✅ Đúng:\n' +
      '・雨が降った**ので**、うれしい。\n\n' +
      '🔹 Khi dùng 「ために」 chỉ mục đích, thì vế sau phải là **hành động có chủ ý** của người nói.',
  },
]

const GrammarTameNiScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ため (に)" grammarSections={grammarSections} />
}

export default GrammarTameNiScreen
