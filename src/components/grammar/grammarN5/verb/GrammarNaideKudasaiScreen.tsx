import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarNaideKudasaiScreen = () => {
  const grammarSections = [
    {
      title: '1. Ý nghĩa và cách dùng',
      explanation:
        'Mẫu câu **～ないでください** được dùng để yêu cầu **không làm một hành động nào đó** – mang tính lịch sự, nhẹ nhàng.\n\n👉 Thường gặp trong biển báo, hướng dẫn, hoặc khi muốn nhắc nhở ai đó.',
    },
    {
      title: '2. Cấu trúc ngữ pháp',
      explanation:
        '🔹 **[Động từ thể ない] + でください**\n\nVí dụ chia thể ない:\n・たべる → たべ**ない**\n・あそぶ → あそ**ばない**\n・くる → こ**ない**\n・する → し**ない**',
    },
    {
      title: '3. Ví dụ thường gặp',
      explanation:
        '🔸 **にわで あそばないでください。**\n→ Đừng chơi ở trong vườn.\n\n' +
        '🔸 **ここに はいらないでください。あぶないんです。**\n→ Xin đừng vào đây. Nguy hiểm đấy.\n\n' +
        '🔸 **こたえを コピーしないでください。**\n→ Không được sao chép đáp án.\n\n' +
        '🔸 **かべに かかないでください。**\n→ Đừng vẽ lên tường.\n\n' +
        '🔸 **ここで しゃしんを とらないでください。**\n→ Vui lòng không chụp ảnh tại đây.',
    },
    {
      title: '4. Khi muốn nói nhẹ nhàng, thân mật',
      explanation:
        '✅ Có thể bỏ 「ください」 khi nói chuyện thân mật (với bạn bè, người thân, trẻ em,...)\n\n' +
        '🔹 **わたしに しんぱいしないでね。**\n→ Đừng lo cho tớ nhé.\n\n' +
        '🔹 **キャンディを もうたべないで。**\n→ Đừng ăn thêm kẹo nữa.\n\n' +
        '🔹 **なかないで。だいじょうぶだよ。**\n→ Đừng khóc, không sao đâu!',
    },
    {
      title: '5. Gợi ý học thêm',
      explanation:
        '🔎 Muốn dùng được mẫu này linh hoạt, bạn nên ôn lại **thể ない của động từ** (ない形).\n\n👉 Gợi ý: Tạo bảng động từ thường dùng, học cách chia sang ない để áp dụng tự nhiên hơn!',
    },
  ]

  return <GrammarTemplateScreen screenTitle="～ないでください" grammarSections={grammarSections} />
}

export default GrammarNaideKudasaiScreen
