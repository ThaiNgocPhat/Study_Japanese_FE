import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về 「～さえ～ば」',
    explanation:
      '📌 Mẫu câu 「～さえ～ば」 mang nghĩa **"chỉ cần... thì..."**, dùng để diễn tả điều kiện tối thiểu để một sự việc xảy ra hoặc đạt được.\n' +
      '👉 Nhấn mạnh rằng **chỉ cần một điều kiện được thỏa mãn**, những thứ khác không thành vấn đề.\n\n' +
      '🧠 Đây là mẫu kết hợp giữa 「さえ」 (ngay cả/chỉ cần) và 「ば」 (mệnh đề điều kiện).',
  },
  {
    title: '2. Cấu trúc với danh từ + さえ + động từ thể ば',
    explanation:
      '🔹 [Danh từ] + さえ + động từ thể ば\n\n' +
      '📝 Ví dụ:\n' +
      '・水さえあれば、生きていける。\n' +
      '→ Chỉ cần có nước là có thể sống được.\n\n' +
      '・あなたさえいれば、何もいらない。\n' +
      '→ Chỉ cần có em là anh không cần gì nữa.',
  },
  {
    title: '3. Cấu trúc với động từ thể ます (bỏ ます) + さえ + すれば',
    explanation:
      '🔹 [Động từ bỏ ます] + さえすれば\n\n' +
      '📌 Cách nói này phổ biến, dùng để nhấn mạnh điều kiện **"chỉ cần làm gì đó"**.\n\n' +
      '📝 Ví dụ:\n' +
      '・勉強しさえすれば、合格できます。\n' +
      '→ Chỉ cần học là có thể đậu.\n\n' +
      '・説明しさえすれば、分かってもらえます。\n' +
      '→ Chỉ cần giải thích là họ sẽ hiểu.',
  },
  {
    title: '4. Cấu trúc với tính từ hoặc động từ thể て + さえ + いれば',
    explanation:
      '🔹 [Động từ thể て] + さえいれば\n' +
      '🔹 [Tính từ -na] + でさえあれば\n\n' +
      '📌 Diễn đạt điều kiện trạng thái cần thiết (miễn là đang ở trạng thái đó).\n\n' +
      '📝 Ví dụ:\n' +
      '・元気でさえあれば、何でもできる。\n' +
      '→ Chỉ cần khỏe mạnh là có thể làm gì cũng được.\n\n' +
      '・寝てさえいれば、大丈夫です。\n' +
      '→ Chỉ cần ngủ là sẽ ổn.',
  },
  {
    title: '5. So sánh với các mẫu điều kiện khác',
    explanation:
      '📌 「～さえ～ば」 nhấn mạnh điều kiện **duy nhất, tối thiểu** để kết quả xảy ra.\n' +
      '📍 Khác với:\n' +
      '・「～たら」「～と」: điều kiện thông thường\n' +
      '・「～ば」: điều kiện có thể xảy ra, không nhất thiết là tối thiểu\n\n' +
      '📝 So sánh:\n' +
      '・お金が**あれば**行けます。\n' +
      '→ Nếu có tiền thì có thể đi.\n\n' +
      '・お金**さえあれば**行けます。\n' +
      '→ **Chỉ cần** có tiền là có thể đi (ngụ ý: ngoài ra không cần gì khác).',
  },
]

const GrammarSaeBaScreen = () => {
  return <GrammarTemplateScreen screenTitle="～さえ～ば" grammarSections={grammarSections} />
}

export default GrammarSaeBaScreen
