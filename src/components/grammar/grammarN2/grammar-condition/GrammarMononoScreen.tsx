import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu ngữ pháp ～ものの',
    explanation:
      '📌 Mẫu câu **「～ものの」** dùng để diễn đạt ý nghĩa: **"Tuy... nhưng..."**, thể hiện sự **trái ngược giữa hai vế**.\n\n' +
      '👉 Dù điều gì đó là đúng ở vế đầu, **kết quả/vế sau lại không như mong đợi, không tương xứng**.\n' +
      '🧠 Cùng nghĩa với: "けれども", "のに", nhưng **văn viết và trang trọng hơn**.',
  },
  {
    title: '2. Cấu trúc',
    explanation:
      '🔸 Động từ thể thường + ものの\n' +
      '🔸 Tính từ -i + ものの\n' +
      '🔸 Tính từ -na + な + ものの\n' +
      '🔸 Danh từ + である + ものの\n\n' +
      '📌 Chủ yếu dùng trong **văn viết, bài luận, email lịch sự, báo chí**.',
  },
  {
    title: '3. Ý nghĩa và cách dùng',
    explanation:
      '✅ Dùng để thể hiện rằng **vế 1 là sự thật**, tuy nhiên **kết quả ở vế 2 lại không như kỳ vọng hoặc ngược lại**.\n\n' +
      '🔍 Gần nghĩa với 「～けれども」「～が」「～のに」 nhưng mang sắc thái **lý trí, khách quan** hơn.',
  },
  {
    title: '4. Ví dụ minh họa',
    explanation:
      '📝 例文:\n' +
      '1. 日本語は勉強したものの、全然話せません。\n' +
      '→ Tuy đã học tiếng Nhật nhưng hoàn toàn không nói được.\n\n' +
      '2. 給料は高いものの、仕事はとてもきついです。\n' +
      '→ Tuy lương cao nhưng công việc rất vất vả.\n\n' +
      '3. 手術は成功したものの、まだ安心できない。\n' +
      '→ Tuy ca phẫu thuật thành công nhưng vẫn chưa thể yên tâm.\n\n' +
      '4. 彼の話は理解できたものの、納得はできなかった。\n' +
      '→ Dù hiểu câu chuyện của anh ta, nhưng tôi không thể chấp nhận được.',
  },
  {
    title: '5. Mẹo ghi nhớ',
    explanation:
      '💡 "～ものの" giống như "のに", nhưng:\n' +
      '・Trang trọng hơn, thiên về văn viết.\n' +
      '・Thường không dùng với mệnh lệnh hay rủ rê ở vế sau.\n\n' +
      '🎯 Thường thấy trong sách báo, các đoạn viết phân tích, báo cáo.',
  },
]

const GrammarMononoScreen = () => {
  return <GrammarTemplateScreen screenTitle="～ものの" grammarSections={grammarSections} />
}

export default GrammarMononoScreen
