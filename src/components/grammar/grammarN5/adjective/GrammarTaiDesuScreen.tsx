import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarTaiDesuScreen = () => {
  const grammarSections = [
    {
      title: '1. Khi bạn muốn làm gì đó… 🧠',
      explanation:
        'Muốn ăn, muốn đi chơi, muốn gặp ai đó? Hãy dùng mẫu 「～たいです」 để diễn tả mong muốn của mình nhé!',
    },
    {
      title: '2. Cấu trúc ngữ pháp 🧩',
      explanation:
        '👉 Động từ thể ます (bỏ ます) + 「たいです」\n\n' +
        '📌 Ví dụ:\n' +
        '・たべます → たべたいです → Muốn ăn\n' +
        '・はなします → はなしたいです → Muốn nói chuyện\n' +
        '・あいます → あいたいです → Muốn gặp',
    },
    {
      title: '3. Câu mẫu dễ hiểu 💬',
      explanation:
        '・にほんに いきたいです。→ Tôi muốn đi Nhật.\n' +
        '・ケーキが たべたいです。→ Tôi muốn ăn bánh ngọt.\n' +
        '・かのじょと はなしたいです。→ Tôi muốn nói chuyện với cô ấy.\n' +
        '・せんせいに なりたいです。→ Tôi muốn trở thành giáo viên.',
    },
    {
      title: '4. Trợ từ を hay が? 🤔',
      explanation:
        'Trong mẫu câu 「～たいです」, bạn có thể dùng **が** thay cho **を** để nhấn mạnh ý muốn:\n' +
        '・ケーキ**を**たべたいです。\n' +
        '・ケーキ**が**たべたいです。\n' +
        '👉 Cả hai đều đúng, nhưng dùng **が** thường gặp hơn với ～たい。',
    },
    {
      title: '5. Phủ định: Tôi không muốn… 🙅‍♂️',
      explanation:
        '📌 Cấu trúc: Động từ (bỏ ます) + **たくないです**\n\n' +
        '・いきたくないです。→ Không muốn đi\n' +
        '・たべたくないです。→ Không muốn ăn\n' +
        '・はなしたくないです。→ Không muốn nói chuyện\n\n' +
        '📘 Ví dụ:\n' +
        '・にほんに いきたくないです。→ Tôi không muốn đi Nhật.\n' +
        '・ケーキが たべたくないです。→ Tôi không muốn ăn bánh ngọt.',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="～たいです：Muốn làm gì đó"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarTaiDesuScreen
