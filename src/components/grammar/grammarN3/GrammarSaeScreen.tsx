import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về 「～さえ」',
    explanation:
      '📌 「～さえ」 là trợ từ nhấn mạnh, mang nghĩa **"ngay cả", "đến cả", "thậm chí"**.\n' +
      '📍 Dùng để thể hiện điều bất ngờ, vượt ngoài suy nghĩ thông thường. Thường nhấn mạnh rằng **những thứ đơn giản nhất cũng không... hoặc cũng...**, nên điều còn lại là đương nhiên.\n\n' +
      '🧠 Có thể dùng với danh từ, trợ từ, hoặc động từ (dạng てさえ).',
  },
  {
    title: '2. Cấu trúc với danh từ + さえ',
    explanation:
      '🔹 [Danh từ] + さえ\n\n' +
      '📌 Dùng khi muốn nhấn mạnh rằng ngay cả một điều gì đó hiển nhiên hoặc cơ bản cũng đúng trong trường hợp nói đến.\n\n' +
      '📝 Ví dụ:\n' +
      '・子供さえ分かる問題です。\n' +
      '→ Đây là bài mà ngay cả trẻ con cũng hiểu được.\n\n' +
      '・水さえあれば生きていける。\n' +
      '→ Chỉ cần có nước là có thể sống được.',
  },
  {
    title: '3. Cấu trúc với trợ từ + さえ',
    explanation:
      '🔹 [Danh từ] + [trợ từ] + さえ\n\n' +
      '📌 Trường hợp này giữ nguyên trợ từ như に、で、から… rồi thêm さえ phía sau để nhấn mạnh.\n\n' +
      '📝 Ví dụ:\n' +
      '・先生にさえ怒られた。\n' +
      '→ Đến cả thầy giáo cũng nổi giận với tôi.\n\n' +
      '・雨でさえ出かけます。\n' +
      '→ Thậm chí trời mưa tôi vẫn đi ra ngoài.',
  },
  {
    title: '4. Cấu trúc với động từ + て + さえ',
    explanation:
      '🔹 [Động từ thể て] + さえ\n\n' +
      '📌 Dùng để nhấn mạnh hành động nào đó **cũng xảy ra**, dù bình thường ít khi xảy ra như vậy.\n\n' +
      '📝 Ví dụ:\n' +
      '・寝てさえいれば、疲れが取れます。\n' +
      '→ Chỉ cần ngủ thôi là có thể hồi phục mệt mỏi.\n\n' +
      '・食べてさえいれば、文句は言わない。\n' +
      '→ Miễn là có gì để ăn thì tôi không than phiền gì cả.',
  },
  {
    title: '5. So sánh với 「～も」「～だけ」「～しか～ない」',
    explanation:
      '📌 「さえ」 nhấn mạnh tính bất ngờ, vượt mức kỳ vọng.\n' +
      '🔸「～も」: cũng (nhấn mạnh bổ sung)\n' +
      '🔸「～しか～ない」: chỉ có (mang tính giới hạn, phủ định)\n\n' +
      '📝 So sánh:\n' +
      '・彼はひらがな**さえ**書けない。\n' +
      '→ Anh ta **đến cả** hiragana cũng không viết được.\n' +
      '・彼はひらがな**も**書ける。\n' +
      '→ Anh ta **cả** hiragana cũng viết được.\n' +
      '・彼はひらがな**しか**書けない。\n' +
      '→ Anh ta **chỉ** viết được hiragana thôi.',
  },
]

const GrammarSaeScreen = () => {
  return <GrammarTemplateScreen screenTitle="～さえ" grammarSections={grammarSections} />
}

export default GrammarSaeScreen
