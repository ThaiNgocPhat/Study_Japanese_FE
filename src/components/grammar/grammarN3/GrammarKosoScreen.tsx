import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về 「～こそ」',
    explanation:
      '📌 「～こそ」 là trợ từ dùng để **nhấn mạnh chính chủ thể hoặc yếu tố nào đó** trong câu.\n' +
      '👉 Có thể hiểu là "**chính là...**", "**đúng là...**", "**chính vì...**".\n' +
      '🧠 Dùng thay thế cho các trợ từ như が、は、を trong một số trường hợp để nhấn mạnh.',
  },
  {
    title: '2. Cách dùng và vị trí',
    explanation:
      '🔹 [Danh từ/Trợ từ] + こそ\n\n' +
      '📍 Khi dùng để nhấn mạnh:\n' +
      '・Chủ ngữ: 私こそ、君こそ\n' +
      '・Nguyên nhân, lý do: これこそ、だからこそ\n' +
      '・Thời điểm: 今日こそ、今度こそ\n\n' +
      '📝 Ví dụ:\n' +
      '・あなた**こそ**私の探していた人です。\n' +
      '→ **Chính bạn** là người tôi đang tìm kiếm.\n\n' +
      '・これ**こそ**私の欲しかったものだ。\n' +
      '→ **Đây chính là** thứ tôi mong muốn.\n\n' +
      '・今度**こそ**合格したいです。\n' +
      '→ **Lần này nhất định** tôi muốn đậu.',
  },
  {
    title: '3. 「～からこそ」: chính vì… nên…',
    explanation:
      '🔹 [Thể thường] + からこそ\n\n' +
      '📌 Nhấn mạnh lý do chính đáng, đặc biệt cho kết quả nào đó.\n\n' +
      '📝 Ví dụ:\n' +
      '・努力した**からこそ**成功した。\n' +
      '→ **Chính vì đã nỗ lực** nên mới thành công.\n\n' +
      '・あなたが助けてくれた**からこそ**、今の私がいます。\n' +
      '→ **Chính nhờ bạn giúp đỡ**, tôi mới có được như hôm nay.',
  },
  {
    title: '4. So sánh với các trợ từ nhấn mạnh khác',
    explanation:
      '📌 「～こそ」 ≠ 「～も」「～さえ」\n\n' +
      '🔸「～も」: cũng (nhấn bổ sung, không nhấn mạnh độc nhất)\n' +
      '🔸「～さえ」: thậm chí, ngay cả (mang ý nghĩa bất ngờ)\n' +
      '🔸「～こそ」: chính là (nhấn mạnh tuyệt đối, chỉ riêng chủ thể đó)\n\n' +
      '📝 So sánh:\n' +
      '・彼**こそ**リーダーにふさわしい。\n' +
      '→ **Chính anh ấy** mới xứng đáng làm lãnh đạo.\n\n' +
      '・彼**も**リーダーにふさわしい。\n' +
      '→ **Anh ấy cũng** xứng đáng làm lãnh đạo (ngụ ý: có người khác cũng vậy).',
  },
]

const GrammarKosoScreen = () => {
  return <GrammarTemplateScreen screenTitle="～こそ" grammarSections={grammarSections} />
}

export default GrammarKosoScreen
