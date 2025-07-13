import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarNakerebaIkenaiScreen = () => {
  const grammarSections = [
    {
      title: '1. Mẫu câu dùng để làm gì?',
      explanation:
        '「～なければいけない」và 「～なくてはいけない」diễn tả một việc **bắt buộc phải làm**, không làm thì không ổn! 😤\n\n📍 Nghĩa: “Không thể không làm → Phải làm thôi!”.',
    },
    {
      title: '2. Cấu trúc & cách chia',
      explanation:
        '🔹 [Động từ thể ない (bỏ ない)] + なければいけない / なくてはいけない\n\n👉 Lịch sự hơn:\n・いけない → いけません\n\n📝 Ví dụ:\n・たべない → たべなければいけない\n・しない → しなければいけない\n・いかない → いかなくてはいけない',
    },
    {
      title: '3. Câu ví dụ dễ hiểu',
      explanation:
        '✅ **わたしは しゅくだいを しなければいけません。**\n→ Tôi phải làm bài tập.\n\n' +
        '✅ **たばこを やめなくてはいけない。**\n→ Phải bỏ thuốc lá thôi.\n\n' +
        '✅ **かのじょは アメリカに いかなくてはいけません。**\n→ Cô ấy phải đi Mỹ.',
    },
    {
      title: '4. So sánh với ～ならない 🆚 ～いけない',
      explanation:
        '🔸 **～ならない** → Trang trọng hơn, dùng trong văn viết, công việc.\n🔸 **～いけない** → Thân mật, dùng nhiều trong hội thoại đời thường.\n\n🧠 Nghĩa gần như giống nhau, nhưng:\n・「ならない」= mang tính **khách quan** (vì trách nhiệm)\n・「いけない」= mang tính **chủ quan** (do bản thân thấy cần)',
    },
    {
      title: '5. Hội thoại thực tế & rút gọn',
      explanation:
        '📌 Trong giao tiếp hàng ngày:\n\n✅ **Rút ngắn** như sau:\n・なければ → なきゃ\n・なくては → なくちゃ\n\n🗣 Ví dụ:\n・もう いかなきゃ！→ Phải đi thôi!\n・べんきょう しなくちゃ！→ Phải học chứ!',
    },
    {
      title: '6. Biến thể phổ biến khác',
      explanation:
        '📚 Ngoài ra, còn có:\n\n✅ **～ないと（いけない）** → Dùng rất phổ biến!\n・もう いかないと → Tôi phải đi rồi\n\n👉 Đây là cách nói tắt siêu quen thuộc của người Nhật! Bạn có thể dùng thoải mái khi trò chuyện thường ngày!',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="～なければいけない / ～なくてはいけない"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarNakerebaIkenaiScreen
