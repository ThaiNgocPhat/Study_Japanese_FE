import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarVerbMasuScreen = () => {
  const grammarSections = [
    {
      title: '1. Thể ます là gì?',
      explanation:
        'Thể ます (丁寧語 - ていねいご) là cách nói lịch sự trong tiếng Nhật, thường dùng trong giao tiếp hằng ngày, đặc biệt với người lớn tuổi, cấp trên hoặc trong môi trường trang trọng.\n\n' +
        'Đây là nền tảng để học các thể kính ngữ cao cấp hơn trong tương lai.',
      examples: [],
    },
    {
      title: '2. Cách chia động từ sang thể ます',
      explanation:
        '🔹 **Nhóm 1:** Chuyển âm kết thúc ở hàng う → hàng い rồi thêm ます\n' +
        '・あう → あいます\n' +
        '・きく → ききます\n' +
        '・はなす → はなします\n' +
        '・たつ → たちます\n' +
        '・わかる → わかります\n\n' +
        '🔹 **Nhóm 2:** Bỏ る và thêm ます\n' +
        '・たべる → たべます\n' +
        '・みる → みます\n' +
        '・おしえる → おしえます\n\n' +
        '🔹 **Nhóm 3 (bất quy tắc):**\n' +
        '・する → します\n' +
        '・くる → きます',
      examples: [],
    },
    {
      title: '3. Thì hiện tại (khẳng định & phủ định)',
      explanation:
        '🔸 **Khẳng định**: ～ます\n' +
        '・わたしはケーキをたべます。→ Tôi ăn bánh ngọt\n' +
        '・アンさんはせんせいとはなします。→ An nói chuyện với giáo viên\n\n' +
        '🔸 **Phủ định**: ～ません\n' +
        '・わたしはケーキをたべません。→ Tôi không ăn bánh ngọt\n' +
        '・アンさんはせんせいとはなしません。→ An không trò chuyện với giáo viên',
      examples: [],
    },
    {
      title: '4. Thì quá khứ (khẳng định & phủ định)',
      explanation:
        '🔸 **Khẳng định**: ～ました\n' +
        '・わたしはケーキをたべました。→ Tôi đã ăn bánh ngọt\n' +
        '・アンさんはせんせいとはなしました。→ An đã trò chuyện với cô giáo\n\n' +
        '🔸 **Phủ định**: ～ませんでした\n' +
        '・わたしはケーキをたべませんでした。→ Tôi đã không ăn bánh ngọt\n' +
        '・アンさんはせんせいとはなしませんでした。→ An đã không nói chuyện với giáo viên',
      examples: [],
    },
  ]

  return <GrammarTemplateScreen screenTitle="Động từ thể ます" grammarSections={grammarSections} />
}

export default GrammarVerbMasuScreen
