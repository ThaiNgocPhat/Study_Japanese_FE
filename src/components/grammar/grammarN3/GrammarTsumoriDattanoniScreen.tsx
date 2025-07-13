import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu mẫu câu 「～つもりだったのに」',
    explanation:
      '📌 「～つもりだったのに」 được dùng để diễn tả **dự định đã có** trong quá khứ nhưng **kết quả lại không như mong muốn**.\n\n' +
      '👉 Nghĩa: "Đã định là… thế mà…", "Tôi đã nghĩ là… nhưng…"\n\n' +
      '🧠 Mẫu này thể hiện cảm giác **tiếc nuối**, **thất vọng** hoặc ngạc nhiên khi sự việc không xảy ra như dự tính.',
  },
  {
    title: '2. Cấu trúc ngữ pháp',
    explanation:
      '🔹 [Động từ thể từ điển] + つもりだったのに\n' +
      '🔹 [Động từ thểない] + つもりだったのに\n' +
      '🔹 [Tính từ/ Danh từ + な] + つもりだったのに（ít gặp, thường dùng với động từ）\n\n' +
      '📝 Ví dụ:\n' +
      '・朝早く起きる**つもりだったのに**、寝坊してしまった。\n' +
      '→ Đã định dậy sớm, thế mà lại ngủ quên mất.\n\n' +
      '・お金を使わない**つもりだったのに**、買い物してしまった。\n' +
      '→ Đã định không tiêu tiền, vậy mà lại đi mua sắm.\n\n' +
      '・行かない**つもりだったのに**、行くことになった。\n' +
      '→ Đã định không đi, vậy mà lại phải đi.',
  },
  {
    title: '3. So sánh với 「～はずだったのに」',
    explanation:
      '📍「～はずだったのに」 cũng mang ý nghĩa kỳ vọng không thành, nhưng khác nhau như sau:\n\n' +
      '🔹「～つもりだったのに」:\n' +
      '→ Dựa vào **ý định chủ quan** của người nói\n' +
      '→ Nhấn mạnh **dự định ban đầu** của bản thân\n\n' +
      '🔹「～はずだったのに」:\n' +
      '→ Dựa vào **dự đoán hoặc logic khách quan**\n' +
      '→ Nhấn mạnh **kết quả trái với lẽ ra phải xảy ra**\n\n' +
      '📝 Ví dụ:\n' +
      '・彼に会う**つもりだったのに**、会えなかった。\n' +
      '→ Tôi đã định gặp anh ấy, nhưng không gặp được.\n\n' +
      '・彼に会う**はずだったのに**、来なかった。\n' +
      '→ Đáng lẽ tôi phải được gặp anh ấy, nhưng anh ấy đã không đến.',
  },
  {
    title: '4. Lưu ý sử dụng',
    explanation:
      '🔸 Mẫu câu này thường đi kèm với cảm xúc **tiếc nuối**, **ngạc nhiên**, hoặc **thất vọng**.\n' +
      '🔸 Không dùng để diễn tả hành động đã xảy ra đúng như dự định.\n' +
      '🔸 Thường thấy trong hội thoại đời sống và văn nói.',
  },
]

const GrammarTsumoriDattanoniScreen = () => {
  return (
    <GrammarTemplateScreen screenTitle="～つもりだったのに" grammarSections={grammarSections} />
  )
}

export default GrammarTsumoriDattanoniScreen
