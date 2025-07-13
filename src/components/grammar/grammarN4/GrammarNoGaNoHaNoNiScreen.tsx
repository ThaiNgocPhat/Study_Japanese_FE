import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu: Danh từ hoá bằng 「の」',
    explanation:
      '📚 Trong tiếng Nhật, ngoài cách dùng 「こと」 để danh từ hoá động từ, chúng ta còn có thể dùng 「の」.\n' +
      '👉 「の」 thường được dùng trong văn nói, và mang sắc thái nhẹ nhàng hơn 「こと」.\n\n' +
      '🔹 Ví dụ đơn giản:\n' +
      '・ねるのが すきです。→ Tôi thích ngủ.\n' +
      '・でんきを けすのを わすれました。→ Tôi đã quên tắt điện.',
  },
  {
    title: '2. Mẫu câu 1: のは / のが / のを',
    explanation:
      '📌 Cấu trúc:\n' +
      '[Động từ thể từ điển] + のは / のが + [tính từ]\n' +
      '[Thể thường] + のを + [わすれました / しっています]\n\n' +
      '📝 Ví dụ:\n' +
      '・単語を おぼえるのは たいへんです。\n' +
      '→ Việc nhớ từ rất vất vả.\n\n' +
      '・死ぬのが こわいです。\n' +
      '→ Tôi sợ chết.\n\n' +
      '・彼女が 仕事を やめたのを しっています。\n' +
      '→ Tôi biết việc cô ấy đã nghỉ làm.',
  },
  {
    title: '3. Mẫu câu 2: のは/なのは + danh từ',
    explanation:
      '🔸 Khi 「のは」 hoặc 「なのは」 đứng trước danh từ chỉ người, vật, địa điểm, thời gian hoặc nguyên nhân.\n' +
      '🔸 Nếu là đồ vật thì có thể dùng 「もの」 thay cho 「の」.\n\n' +
      '📝 Ví dụ:\n' +
      '・私が 生まれたのは 京都です。\n' +
      '→ Nơi tôi sinh ra là Kyoto.\n\n' +
      '・独身なのは 田中さんだけです。\n' +
      '→ Chỉ có anh Tanaka là còn độc thân.\n\n' +
      '・会議が 始まるのは 10時です。\n' +
      '→ Cuộc họp bắt đầu lúc 10 giờ.',
  },
  {
    title: '4. Mẫu câu 3: ～のに（để làm gì đó）',
    explanation:
      '🔧 Cấu trúc:\n' +
      '[Động từ thể từ điển] + のに + 使います／便利です／役に立ちます\n\n' +
      '🔹 Dùng để nói về mục đích sử dụng.\n\n' +
      '📝 Ví dụ:\n' +
      '・爪切りは 爪を 切るのに 使います。\n' +
      '→ Dụng cụ cắt móng dùng để cắt móng tay.\n\n' +
      '・電子辞書は 漢字の意味を しらべるのに 便利です。\n' +
      '→ Từ điển điện tử tiện lợi để tra nghĩa của kanji.\n\n' +
      '・やかんは お湯を わかすのに 使います。\n' +
      '→ Ấm dùng để đun nước sôi.',
  },
  {
    title: '5. Tổng kết nhanh',
    explanation:
      '✅ のは – Nhấn mạnh **chủ đề**, dùng như danh từ chủ ngữ.\n' +
      '✅ のが – Nhấn mạnh **sở thích, cảm xúc, khả năng**.\n' +
      '✅ のを – Dùng để nhấn mạnh **hành động đã xảy ra hoặc nhận thức được**.\n' +
      '✅ のに – Dùng để nói về **mục đích sử dụng**.\n\n' +
      '✨ Hãy luyện tập thật nhiều để phân biệt chính xác từng mẫu nhé!',
  },
]

const GrammarNoGaNoHaNoNiScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～のが、～のは、～のに" grammarSections={grammarSections} />
  )
}

export default GrammarNoGaNoHaNoNiScreen
