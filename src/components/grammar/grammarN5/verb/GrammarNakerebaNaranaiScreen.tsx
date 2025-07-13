import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarNakerebaNaranaiScreen = () => {
  const grammarSections = [
    {
      title: '1. Ý nghĩa của mẫu câu',
      explanation:
        '「～なければならない」và 「～なくてはならない」được dùng khi bạn **bắt buộc phải làm một việc gì đó**, không thể tránh được.\n\n🧠 Nghĩa gốc: “Nếu không làm thì không được” → **phải làm!**',
    },
    {
      title: '2. Cấu trúc ngữ pháp',
      explanation:
        '🔹 [Động từ thể ない (bỏ ない)] + なければならない / なくてはならない\n\n👉 Dạng lịch sự:\n・ならない → なりません',
    },
    {
      title: '3. Cách chia động từ (ví dụ)',
      explanation:
        '・いく (đi) → いかない → いかなければならない\n・はなす (nói) → はなさない → はなさなくてはならない\n・する (làm) → しない → しなければなりません\n・くる (đến) → こない → こなければなりません',
    },
    {
      title: '4. Ví dụ trong đời sống',
      explanation:
        '🔸 **わたしは しゅくだいを しなければなりません。**\n→ Tôi **phải làm bài tập**.\n\n' +
        '🔸 **かれは あした レポートを ださなくてはならない。**\n→ Ngày mai anh ấy **phải nộp báo cáo**.\n\n' +
        '🔸 **たばこを やめなければならない。からだに わるいんです。**\n→ Phải **bỏ thuốc lá thôi**. Hại sức khỏe lắm!\n\n' +
        '🔸 **かのじょは らいしゅう アメリカに いかなくてはなりません。**\n→ Tuần sau cô ấy **phải đi Mỹ**.',
    },
    {
      title: '5. Mẹo ghi nhớ 🎯',
      explanation:
        '📌 Hãy nghĩ như thế này:\n\n「なければ」= nếu không…\n「ならない」= không được\n👉 Kết hợp lại: Nếu không làm… thì không được → **PHẢI LÀM!**\n\nVí dụ:\n・べんきょう**しなければならない** → Phải học!\n・やすま**なくてはならない** → Phải nghỉ ngơi thôi!',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="～なければならない / ～なくてはならない"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarNakerebaNaranaiScreen
