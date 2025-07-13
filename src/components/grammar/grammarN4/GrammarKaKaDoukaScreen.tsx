import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu chung',
    explanation:
      '📌 Mẫu câu ～か và ～かどうか được dùng khi muốn đưa **một câu hỏi gián tiếp** vào trong câu lớn hơn.\n\n' +
      '🔹 ～か：dùng cho câu hỏi có từ để hỏi (từ nghi vấn: 何, どこ, いつ, なに, どう, だれ...)\n' +
      '🔹 ～かどうか：dùng cho câu hỏi **có/không** (Yes/No)',
  },
  {
    title: '2. Mẫu ～か: khi có từ nghi vấn',
    explanation:
      '✏️ Cấu trúc:\n' +
      '[Từ để hỏi] + [mệnh đề chia ở thể thường] + か + [mệnh đề chính]\n\n' +
      '📝 Ví dụ:\n' +
      '・彼がどこに住んでいるか知っていますか？\n' +
      '→ Bạn có biết anh ấy sống ở đâu không?\n\n' +
      '・これは何という意味か教えてください。\n' +
      '→ Hãy chỉ cho tôi biết cái này có nghĩa là gì.\n\n' +
      '・いつ日本へ行くかまだ決めていません。\n' +
      '→ Tôi vẫn chưa quyết định khi nào sẽ đi Nhật.',
  },
  {
    title: '3. Mẫu ～かどうか: khi không có từ nghi vấn (Yes/No)',
    explanation:
      '✏️ Cấu trúc:\n' +
      '[Mệnh đề chia ở thể thường] + かどうか + [mệnh đề chính]\n\n' +
      '📝 Ví dụ:\n' +
      '・明日雨が降るかどうかわかりません。\n' +
      '→ Tôi không biết ngày mai có mưa hay không.\n\n' +
      '・彼が学生かどうか知りません。\n' +
      '→ Tôi không biết anh ấy có phải là sinh viên không.\n\n' +
      '・漢字を全部覚えたかどうか試験でわかります。\n' +
      '→ Qua kỳ thi sẽ biết là bạn đã nhớ hết chữ Hán hay chưa.',
  },
  {
    title: '4. So sánh ～か và ～かどうか',
    explanation:
      '・～か: Dùng khi trong câu có từ nghi vấn (như どこ, なに, いつ...).\n' +
      '  Ví dụ: どこに行くか忘れた。→ Tôi quên mất là đi đâu.\n\n' +
      '・～かどうか: Dùng khi câu không có từ nghi vấn, mang ý nghĩa "có hay không".\n' +
      '  Ví dụ: 行くかどうかわからない。→ Tôi không biết là có đi hay không.\n\n' +
      '📌 Chú ý:\n' +
      '・Cả hai mẫu đều thường đi với các động từ như: わかりません, 知っています, 聞きます, 忘れました, 決めます…\n' +
      '・Không dùng 「です・ます」 trong mệnh đề trước 「か」 hoặc 「かどうか」。',
  },
]

const GrammarKaKaDoukaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～か、～かどうか" grammarSections={grammarSections} />
}

export default GrammarKaKaDoukaScreen
