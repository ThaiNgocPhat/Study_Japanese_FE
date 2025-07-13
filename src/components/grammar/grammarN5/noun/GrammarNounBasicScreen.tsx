import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarNounBasicScreen = () => {
  const grammarSections = [
    {
      title: '1. Câu khẳng định ở hiện tại',
      explanation:
        '🧩 Mẫu: Danh từ 1 + は + Danh từ 2 + です / だ\n\n' +
        '📖 Dùng để khẳng định một điều đang là sự thật hoặc bản chất hiện tại.\n\n' +
        '🔸 Ví dụ:\n' +
        '・たなかさんは がくせいだ。→ Anh Tanaka là sinh viên.\n' +
        '・わたしは ベトナムじんです。→ Tôi là người Việt Nam.\n' +
        '・これは 日本語の本です。→ Đây là sách tiếng Nhật.',
    },
    {
      title: '2. Câu phủ định ở hiện tại',
      explanation:
        '🧩 Mẫu: Danh từ 1 + は + Danh từ 2 + では / じゃありません\n\n' +
        '📖 Dùng khi muốn nói một điều gì đó không đúng sự thật hiện tại.\n\n' +
        '🔸 Ví dụ:\n' +
        '・たなかさんは がくせいじゃありません。→ Anh Tanaka không phải là sinh viên.\n' +
        '・わたしは 日本じんではありません。→ Tôi không phải là người Nhật.\n' +
        '・これは 日本語の本じゃない。→ Đây không phải là sách tiếng Nhật.',
    },
    {
      title: '3. Câu khẳng định ở quá khứ',
      explanation:
        '🧩 Mẫu: Danh từ 1 + は + Danh từ 2 + でした / だった\n\n' +
        '📖 Dùng để diễn tả một sự thật trong quá khứ.\n\n' +
        '🔸 Ví dụ:\n' +
        '・たなかさんは がくせいでした。→ Anh Tanaka từng là sinh viên.\n' +
        '・きのうは かようびだった。→ Hôm qua là thứ ba.',
    },
    {
      title: '4. Câu phủ định ở quá khứ',
      explanation:
        '🧩 Mẫu: Danh từ 1 + は + Danh từ 2 + では / じゃありませんでした\n\n' +
        '📖 Dùng để phủ nhận một điều gì đó đã không xảy ra hoặc không đúng trong quá khứ.\n\n' +
        '🔸 Ví dụ:\n' +
        '・たなかさんは がくせいではありませんでした。→ Anh Tanaka không từng là sinh viên.\n' +
        '・きのうは かようびじゃなかった。→ Hôm qua không phải thứ ba.',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="Cách sử dụng danh từ trong câu cơ bản"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarNounBasicScreen
