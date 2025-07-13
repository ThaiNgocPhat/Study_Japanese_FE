import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarAgeruMorauKureruScreen = () => {
  const grammarSections = [
    {
      title: '1. Tổng quan về あげます・もらいます・くれます',
      explanation:
        'Ba động từ này đều diễn tả hành động **cho, nhận** trong tiếng Nhật, nhưng khác nhau ở góc nhìn và vị trí người cho – người nhận:\n\n' +
        '🔸 **あげます**: Tôi cho người khác / Người A cho người B\n' +
        '🔸 **もらいます**: Tôi nhận từ người khác / Người A nhận từ người B\n' +
        '🔸 **くれます**: Người khác cho tôi hoặc người trong nhóm của tôi',
      examples: [],
    },
    {
      title: '2. Cấu trúc với 「あげます」– Cho ai đó',
      explanation:
        '👉 [Người A] は [Người B] に [もの] を あげます。\n\n' +
        '📌 Dùng khi **người cho không phải là tôi** (hoặc tôi cho người khác).\n\n' +
        '🔹 Ví dụ:\n' +
        '・わたしは ともだちに プレゼントを あげました。→ Tôi đã tặng quà cho bạn.\n' +
        '・たなかさんは いもうとに おかしを あげました。→ Anh Tanaka tặng bánh kẹo cho em gái.',
      examples: [],
    },
    {
      title: '3. Cấu trúc với 「もらいます」– Nhận từ ai đó',
      explanation:
        '👉 [Người A] は [Người B] に / から [もの] を もらいます。\n\n' +
        '📌 Dùng khi **người nhận là tôi hoặc ai đó nhận từ người khác**.\n\n' +
        '🔹 Ví dụ:\n' +
        '・わたしは せんせいに 本を もらいました。→ Tôi đã nhận sách từ thầy giáo.\n' +
        '・ともだちは わたしに プレゼントを もらいました。→ Bạn tôi nhận quà từ tôi.',
      examples: [],
    },
    {
      title: '4. Cấu trúc với 「くれます」– Ai đó cho tôi',
      explanation:
        '👉 [Người khác] は わたし（のグループ）に [もの] を くれます。\n\n' +
        '📌 Dùng khi **người cho là người khác**, và **người nhận là tôi hoặc người trong nhóm tôi**.\n\n' +
        '🔹 Ví dụ:\n' +
        '・せんせいは わたしに しゅくだいを くれました。→ Cô giáo đã đưa bài tập cho tôi.\n' +
        '・おばあさんは わたしのこどもに おもちゃを くれました。→ Bà đã tặng đồ chơi cho con tôi.',
      examples: [],
    },
    {
      title: '5. Ghi nhớ nhanh',
      explanation:
        '🧠 Mẹo ghi nhớ:\n\n' +
        '・**あげる** – cho người khác (từ mình → người khác)\n' +
        '・**もらう** – nhận từ người khác (từ người khác → mình)\n' +
        '・**くれる** – người khác cho mình (người khác → mình)',
      examples: [],
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="Phân biệt あげます・もらいます・くれます"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarAgeruMorauKureruScreen
