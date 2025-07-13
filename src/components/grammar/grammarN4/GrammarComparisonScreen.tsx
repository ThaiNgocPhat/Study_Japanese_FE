import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Mục đích so sánh',
    explanation:
      '📌 Các mẫu「～よう」「～みたい」「～そうです」「～らしいです」đều dùng để **diễn tả sự suy đoán, ví von hoặc truyền đạt thông tin**, nhưng có sắc thái khác nhau.\n\n' +
      '👉 Việc phân biệt giúp bạn sử dụng đúng theo **văn cảnh, mức độ chắc chắn và cảm xúc** của người nói.',
  },
  {
    title: '2. So sánh nhanh qua bảng',
    explanation:
      '・～ようだ: Có vẻ như... (khách quan/suy luận). Thường dùng trong văn viết, trang trọng.\n' +
      '  Ví dụ: 雨が降るようです。\n\n' +
      '・～みたい: Giống như... / Có vẻ... (thân mật). Thường dùng trong văn nói, ví von hình ảnh.\n' +
      '  Ví dụ: 赤ちゃんみたいに寝ている。\n\n' +
      '・～そうです①: Nghe nói... (truyền đạt thông tin). Dẫn lại lời người khác.\n' +
      '  Ví dụ: 来週試験があるそうです。\n\n' +
      '・～そうです②: Trông có vẻ... (trực quan). Quan sát bằng mắt, cảm nhận ngay.\n' +
      '  Ví dụ: 雨が降りそうです。\n\n' +
      '・～らしい: Nghe nói... / Ra dáng là... Diễn tả tin đồn hoặc đặc trưng điển hình.\n' +
      '  Ví dụ: 彼は男らしい。事故があったらしい。',
  },
  {
    title: '3. Khi nào dùng ～よう／～みたい？',
    explanation:
      '🔹 Dùng khi **so sánh hoặc ví von**, có thể là hình ảnh, cảm giác, sự suy đoán dựa trên hoàn cảnh:\n\n' +
      '・あの人は猫のように静かです。\n' +
      '→ Người đó yên lặng như mèo vậy.\n\n' +
      '・あの子、アイドルみたい！\n' +
      '→ Cô bé kia trông giống idol ghê!\n\n' +
      '📌「よう」→ trang trọng / 「みたい」→ tự nhiên, thân mật',
  },
  {
    title: '4. Khi nào dùng ～そうです？',
    explanation:
      '🔹 Có 2 trường hợp:\n' +
      '① Truyền đạt thông tin người khác nói:\n' +
      '・田中さんは留学するそうです。\n' +
      '→ Nghe nói Tanaka sẽ đi du học.\n\n' +
      '② Suy đoán cảm quan (nhìn, nghe thấy):\n' +
      '・このケーキ、おいしそうですね。\n' +
      '→ Cái bánh này trông ngon nhỉ.\n\n' +
      '📌 Lưu ý tránh nhầm:「雨が降りそう」≠「雨が降るそう」',
  },
  {
    title: '5. Khi nào dùng ～らしい？',
    explanation:
      '🔹 Có 2 nghĩa chính:\n' +
      '① Nghe phong phanh từ người khác:\n' +
      '・あの映画はつまらないらしいよ。\n' +
      '→ Nghe đâu phim đó chán lắm.\n\n' +
      '② Diễn tả đúng bản chất, đặc trưng:\n' +
      '・今日は春らしい天気だね。\n' +
      '→ Hôm nay đúng là thời tiết mùa xuân thật.\n\n' +
      '📌「らしい」mang sắc thái **không chắc chắn**, thường dựa trên **cảm nhận chung, tin đồn**.',
  },
  {
    title: '6. Tổng kết và mẹo học nhanh',
    explanation:
      '✅ Mẹo ghi nhớ nhanh:\n\n' +
      '・👀 Thấy tận mắt → ～そう（dự đoán cảm quan）\n' +
      '・👂 Nghe người khác nói → ～そう／～らしい（tùy độ tin cậy）\n' +
      '・🧠 Suy luận, ví von → ～よう／～みたい\n\n' +
      '🔁 Câu ví dụ tổng hợp:\n' +
      '・彼は病気みたいです。→ Trông có vẻ bệnh.\n' +
      '・彼は病気のようです。→ Hình như anh ấy bị bệnh (trang trọng).\n' +
      '・彼は病気らしいです。→ Nghe đâu anh ấy bị bệnh.\n' +
      '・彼は病気そうです。→ Trông như sắp bệnh đến nơi (cảm quan).',
  },
]

const GrammarComparisonScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="Phân biệt ～よう/ みたい、～そうです và らしいです"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarComparisonScreen
