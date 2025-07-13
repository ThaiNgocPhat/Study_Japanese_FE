import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về Kính ngữ (敬語)',
    explanation:
      '🙏 Kính ngữ là cách nói lịch sự trong tiếng Nhật, dùng để thể hiện sự **tôn trọng người nghe hoặc người được nhắc đến**.\n\n' +
      '🧭 Có 3 loại kính ngữ chính:\n' +
      '① 尊敬語（そんけいご）– Kính ngữ tôn kính\n' +
      '② 謙譲語（けんじょうご）– Kính ngữ khiêm nhường\n' +
      '③ 丁寧語（ていねいご）– Kính ngữ lịch sự (dùng です・ます)',
  },
  {
    title: '2. 尊敬語 – Kính ngữ tôn kính',
    explanation:
      '📌 Dùng khi nói về hành động của người **trên mình**, để thể hiện sự kính trọng.\n\n' +
      '🔹 Cách 1: Động từ đặc biệt\n' +
      '・行く、来る、いる → いらっしゃいます\n' +
      '・言う → おっしゃいます\n' +
      '・する → なさいます\n' +
      '・食べる、飲む → 召し上がります（めしあがります）\n' +
      '・見る → ご覧になります（ごらんになります）\n\n' +
      '🔹 Cách 2: お + Vます(bỏ ます) + に なります\n' +
      '・読む → お読みになります\n' +
      '・使う → お使いになります',
  },
  {
    title: '3. 謙譲語 – Kính ngữ khiêm nhường',
    explanation:
      '📌 Dùng khi nói về hành động của **mình hoặc người trong nhóm mình**, để hạ thấp mình và nâng người nghe lên.\n\n' +
      '🔹 Cách 1: Động từ đặc biệt\n' +
      '・行く、来る → 参ります（まいります）\n' +
      '・言う → 申します（もうします）\n' +
      '・する → いたします\n' +
      '・食べる、飲む、もらう → いただきます\n' +
      '・会う → お目にかかります\n' +
      '・見る → 拝見します（はいけんします）\n\n' +
      '🔹 Cách 2: お/ご + Vます(bỏ ます) + します\n' +
      '・案内する → ご案内します\n' +
      '・紹介する → ご紹介します\n' +
      '・手伝う → お手伝いします',
  },
  {
    title: '4. 丁寧語 – Kính ngữ lịch sự',
    explanation:
      '📌 Dùng trong hội thoại thông thường để thể hiện sự **lịch sự**.\n\n' +
      '・です、ます、ございます\n' +
      '・お名前、お仕事、お国（các danh từ có “お/ご” đi kèm để thể hiện sự lịch sự）',
  },
  {
    title: '5. Một số ví dụ hội thoại',
    explanation:
      '🗣 Ví dụ 1:\n' +
      'A: 田中部長はいらっしゃいますか。\n' +
      '→ Giám đốc Tanaka có ở đây không ạ?\n' +
      'B: はい、会議室にいらっしゃいます。\n' +
      '→ Vâng, anh ấy đang ở trong phòng họp.\n\n' +
      '🗣 Ví dụ 2:\n' +
      'A: 自己紹介させていただきます。\n' +
      '→ Cho phép tôi được giới thiệu bản thân ạ.\n\n' +
      '🗣 Ví dụ 3:\n' +
      'A: 部長にご連絡いたしましたか？\n' +
      '→ Anh đã liên lạc với giám đốc chưa?',
  },
]

const GrammarKeigoScreen = () => {
  return <GrammarTemplateScreen screenTitle="Kính ngữ" grammarSections={grammarSections} />
}

export default GrammarKeigoScreen
