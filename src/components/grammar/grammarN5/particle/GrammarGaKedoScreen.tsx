import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarGaKedoScreen = () => {
  const grammarSections = [
    {
      title: '1. ～が・～けど dùng để nối câu trái ngược nhau',
      explanation:
        '👉 Cả hai đều mang nghĩa “nhưng…”, dùng để **nối hai vế câu có nội dung đối lập** nhau.\n\n' +
        '🔸「が」 là dạng **lịch sự, trang trọng hơn**.\n' +
        '🔹「けど」 là dạng **thân mật, thường dùng trong hội thoại hàng ngày**.\n\n' +
        '▶️ わたしは にほんごが すきです **が**、かんじは むずかしいです。\n→ Tôi thích tiếng Nhật nhưng chữ Hán thì khó.\n\n' +
        '▶️ このレストランは やすい **けど**、あまり おいしくないです。\n→ Quán này rẻ nhưng không ngon lắm.',
    },
    {
      title: '2. Dùng 「けど」 để mở đầu cho lời mời, đề xuất',
      explanation:
        '👉 「けど」 cũng thường được dùng để **mở lời một cách nhẹ nhàng, lịch sự** trước khi đưa ra ý kiến hoặc đề nghị.\n\n' +
        '▶️ すみません、ちょっと ききたいんです **けど**…\n→ Xin lỗi, tôi muốn hỏi một chút…\n\n' +
        '▶️ いま いそがしいんです **けど**、あとで いいですか。\n→ Bây giờ tôi đang bận, để sau được không?',
    },
    {
      title: '3. Khác biệt giữa 「が」 và 「けど」',
      explanation:
        '🔸「が」: Trang trọng hơn, thường dùng trong văn viết hoặc khi nói lịch sự.\n' +
        '🔹「けど」: Tự nhiên, mềm mại hơn, dùng nhiều trong hội thoại thân mật.\n\n' +
        '📌 Trong một số tình huống, cả hai đều dùng được – nhưng chọn từ nào tùy vào **mức độ lịch sự** bạn muốn thể hiện.\n\n' +
        'Ví dụ:\n' +
        '・日本は すてきな くに **ですが**、ぶっかは たかいです。\n→ Nhật là đất nước tuyệt vời nhưng vật giá cao. (trang trọng)\n' +
        '・にほんは いい ところ **けど**、たかいよね。\n→ Nhật tốt thật đấy nhưng đắt quá ha! (hội thoại)',
    },
    {
      title: '4. Ghi nhớ nhanh 💡',
      explanation:
        '🧠 Mẹo học nhanh:\n\n' +
        '・**が** → "nhưng" trong văn nói lịch sự / văn viết\n' +
        '・**けど** → "nhưng" trong văn nói hàng ngày, thân mật\n\n' +
        '👉 Thử luyện tập nối 2 câu bất kỳ bằng が/けど để phản xạ nhanh hơn nhé!\n' +
        'Ví dụ:\n' +
        '・このTシャツは かわいい **けど**、ちょっと たかい。→ Áo này dễ thương nhưng hơi đắt.\n' +
        '・たべたい **けど**、ダイエットちゅうです。→ Muốn ăn đấy nhưng đang ăn kiêng.',
    },
  ]

  return <GrammarTemplateScreen screenTitle="～が/ ～けど" grammarSections={grammarSections} />
}

export default GrammarGaKedoScreen
