import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarNakutemoIiScreen = () => {
  const grammarSections = [
    {
      title: '1. Mẫu câu này dùng để làm gì?',
      explanation:
        'Mẫu câu 「～なくてもいい」dùng để **nói rằng không cần làm một việc gì đó cũng được**, không có vấn đề gì cả. Rất tiện cho lúc muốn "lười chính đáng" 😆',
    },
    {
      title: '2. Cấu trúc',
      explanation:
        '🔹 Động từ thể ない → bỏ ない, thêm **なくてもいい（です）**\n\nVí dụ:\n・たべない → たべなくてもいい\n・いかない → いかなくてもいい\n・しない → しなくてもいい',
    },
    {
      title: '3. Câu ví dụ thường gặp',
      explanation:
        '✅ **きょうは 学校に いかなくてもいいです。**\n→ Hôm nay không cần đến trường đâu.\n\n' +
        '✅ **この漢字は おぼえなくてもいいです。**\n→ Không cần nhớ chữ kanji này.\n\n' +
        '✅ **すきじゃないものは たべなくてもいいですよ。**\n→ Không thích thì không cần ăn đâu nè.',
    },
    {
      title: '4. Mẫu hội thoại đời thường',
      explanation:
        '👩‍🎓: このしゅくだい、ださなくてもいいですか？\n👨‍🏫: はい、ださなくてもいいですよ。\n→ Em không cần nộp bài tập này đâu.\n\n' +
        '☕: コーヒーにミルクいれる？\n😊: いれなくてもいいよ。ブラックがすきだから。\n→ Không cần cho sữa đâu, mình thích cà phê đen.',
    },
    {
      title: '5. Ghi nhớ nhanh!',
      explanation:
        '🧠 Mẫu câu này cực kỳ hữu ích khi bạn muốn nói **“Không cần thiết đâu”** theo cách nhẹ nhàng và lịch sự.\n\n📌 Hãy dùng khi muốn từ chối một cách tinh tế hoặc khi khuyên ai đó không cần quá lo lắng hay gắng sức.',
    },
  ]

  return <GrammarTemplateScreen screenTitle="～なくてもいい" grammarSections={grammarSections} />
}

export default GrammarNakutemoIiScreen
