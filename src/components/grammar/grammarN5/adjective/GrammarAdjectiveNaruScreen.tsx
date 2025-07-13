import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const GrammarAdjectiveNaruScreen = () => {
  const grammarSections = [
    {
      title: '1. Công thức chung 🔧',
      explanation:
        'Cấu trúc 「Tính từ + なる」 dùng để diễn tả sự **thay đổi trạng thái**, như “trở nên cao hơn”, “giỏi hơn”, “xinh hơn”…\n\nThường được chia ở **quá khứ** để miêu tả một sự chuyển biến đã xảy ra.',
    },
    {
      title: '2. Với tính từ -い 🧠',
      explanation:
        '📌 Công thức: Tính từ -い (bỏ い) + **くなる**\n\n' +
        '・あの子は 大きくなりました。→ Đứa bé đó đã lớn hơn rồi.\n' +
        '・このくるまは 古くなりました。→ Xe này đã trở nên cũ.\n' +
        '・かのじょは 美しくなりました。→ Cô ấy đã trở nên xinh đẹp hơn.\n' +
        '・ちょうしが よくなった。→ Tình trạng đã khá hơn rồi.',
    },
    {
      title: '3. Với tính từ -な ✨',
      explanation:
        '📌 Công thức: Tính từ -な (bỏ な) + **になる**\n\n' +
        '・あの人は 有名になりました。→ Người đó đã trở nên nổi tiếng.\n' +
        '・彼は 日本語が上手になりました。→ Anh ấy đã giỏi tiếng Nhật hơn.\n' +
        '・マイさんは きれいになりました。→ Mai đã trở nên xinh đẹp hơn.',
    },
    {
      title: '4. Ghi nhớ nhanh 💡',
      explanation:
        '✅ -い tính từ: bỏ い ➜ **くなる**\n' +
        '✅ -な tính từ: bỏ な ➜ **になる**\n\n' +
        '💬 Dạng phổ biến nhất: chia 「なる」 ở thì quá khứ:\n→ なりました (đã trở nên), なった (đã ... rồi)',
    },
  ]

  return <GrammarTemplateScreen screenTitle="Tính từ + なる" grammarSections={grammarSections} />
}

export default GrammarAdjectiveNaruScreen
