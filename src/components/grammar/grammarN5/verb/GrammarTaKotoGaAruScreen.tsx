import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarTaKotoGaAruScreen = () => {
  const grammarSections = [
    {
      title: '1. ～たことがある (Diễn tả kinh nghiệm đã từng)',
      explanation:
        'Cấu trúc ～たことがある được dùng để **nói về kinh nghiệm bản thân** – những việc mà người nói đã từng trải qua trong quá khứ, dù chỉ một lần.\n\n' +
        '📌 Cấu trúc: [Động từ thể た] + ことがある\n\n' +
        '📝 Ví dụ:\n' +
        '・わたしは にほんへ いったことがある。→ Tôi đã từng đi Nhật rồi。\n' +
        '・すしを たべたことがあります。→ Tôi từng ăn sushi。\n' +
        '・かれに あったことがある。→ Tôi đã gặp người đó trước đây。',
      examples: [],
    },
    {
      title: '2. ～たことがない / ～たことがありません (Phủ định – chưa từng)',
      explanation:
        'Để nói rằng **chưa bao giờ làm điều gì đó**, bạn dùng mẫu phủ định ～たことがない hoặc cách lịch sự hơn là ～たことがありません。\n\n' +
        '📌 Cấu trúc: [Động từ thể た] + ことがない / ことがありません\n\n' +
        '📝 Ví dụ:\n' +
        '・わたしは にほんへ いったことがない。→ Tôi chưa từng đi Nhật。\n' +
        '・すしを たべたことがありません。→ Tôi chưa từng ăn sushi。\n' +
        '・かれに あったことがない。→ Tôi chưa gặp người đó bao giờ。',
      examples: [],
    },
    {
      title: '3. Ghi nhớ nhanh',
      explanation:
        '🔹 **～たことがある** → Đã từng làm gì (ít nhất một lần trong đời)\n' +
        '🔹 **～たことがない / ～たことがありません** → Chưa từng trải nghiệm điều đó\n\n' +
        '💡 Mẫu câu này thường được dùng khi kể chuyện, nói về trải nghiệm du lịch, món ăn, con người hoặc những điều bạn đã làm trong quá khứ。',
      examples: [],
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="～たことがある: Đã từng …"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarTaKotoGaAruScreen
