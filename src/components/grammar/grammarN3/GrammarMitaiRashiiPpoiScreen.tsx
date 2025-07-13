import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu chung',
    explanation:
      '📌 「～みたい」「～らしい」「～っぽい」 đều mang nghĩa **giống như, có vẻ như**, dùng để biểu đạt sự **so sánh, phán đoán, hoặc cảm nhận** dựa trên vẻ ngoài, tình huống, hoặc thông tin có được.\n\n' +
      '👉 Tuy cùng mang nét nghĩa gần nhau nhưng **mức độ chắc chắn và cách dùng khác nhau**.',
  },
  {
    title: '2. ～みたい (giống như, có vẻ như)',
    explanation:
      '🔹 Cấu trúc:\n' +
      '- [Danh từ] + みたい\n' +
      '- [Động từ thường / Tính từ] + みたい\n\n' +
      '🔸 Diễn tả phán đoán chủ quan dựa trên cảm giác, quan sát:\n' +
      '・あの人は先生みたいです。\n' +
      '→ Người kia giống như giáo viên vậy.\n\n' +
      '・雨が降ったみたいですね。\n' +
      '→ Hình như trời vừa mưa.\n\n' +
      '📌 「みたい」 dùng được sau động từ và tính từ, rất linh hoạt.\n' +
      '👉 Là cách nói thân mật, thường dùng trong văn nói.',
  },
  {
    title: '3. ～らしい (nghe nói, có vẻ đúng như...)',
    explanation:
      '🔹 Cấu trúc:\n' +
      '- [Danh từ / Động từ / Tính từ] + らしい\n\n' +
      '🔸 Diễn tả **thông tin được nghe lại** hoặc **phán đoán có căn cứ**, mang tính khách quan:\n' +
      '・彼は学生らしいです。\n' +
      '→ Nghe nói anh ấy là sinh viên.\n\n' +
      '・今日は寒いらしいよ。\n' +
      '→ Nghe nói hôm nay trời lạnh đấy.\n\n' +
      '🔸 Ngoài ra còn mang nghĩa "đúng chất", "đúng kiểu":\n' +
      '・男らしい人 → Người đàn ông đúng kiểu đàn ông (nam tính)\n' +
      '・子どもらしい → Đúng kiểu trẻ con',
  },
  {
    title: '4. ～っぽい (trông có vẻ, dễ ...)',
    explanation:
      '🔹 Cấu trúc:\n' +
      '- [Động từ / Danh từ / Tính từ] + っぽい\n\n' +
      '🔸 Diễn tả ấn tượng, cảm giác chủ quan hoặc tính cách, khuynh hướng:\n' +
      '・このスープ、水っぽい。\n' +
      '→ Món súp này như loãng quá (toàn nước).\n\n' +
      '・彼は忘れっぽい。\n' +
      '→ Anh ta hay quên lắm.\n\n' +
      '・子どもっぽい → Trẻ con, tính trẻ con\n\n' +
      '📌 Mang sắc thái hơi chê hoặc cảm xúc tiêu cực nhẹ, dùng trong văn nói là chủ yếu.',
  },
  {
    title: '5. So sánh nhanh 3 mẫu ngữ pháp',
    explanation:
      '🧩 So sánh:\n\n' +
      '・～みたい: Cảm giác chủ quan, trực tiếp quan sát hoặc cảm nhận\n' +
      '→ 彼、疲れてるみたい。 (Trông anh ấy có vẻ mệt)\n\n' +
      '・～らしい: Dựa trên thông tin nghe được hoặc dùng để nói "đúng kiểu"\n' +
      '→ 彼、明日来ないらしいよ。 (Nghe nói mai anh ấy không đến)\n\n' +
      '・～っぽい: Cảm giác đậm nét, mang nghĩa "có xu hướng", "dễ..."\n' +
      '→ 彼、怒りっぽいね。 (Anh ấy dễ nổi giận nhỉ)\n\n' +
      '📌 Lưu ý:\n' +
      '- Cả ba đều dùng nhiều trong hội thoại đời thường\n' +
      '- Tránh dùng ～っぽい trong văn trang trọng vì sắc thái suồng sã',
  },
]

const GrammarMitaiRashiiPpoiScreen = () => {
  return (
    <GrammarTemplateScreen
      screenTitle="～みたい、～らしい、～っぽい"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarMitaiRashiiPpoiScreen
