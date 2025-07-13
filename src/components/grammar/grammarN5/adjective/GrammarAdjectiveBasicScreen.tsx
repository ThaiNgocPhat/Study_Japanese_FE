import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'

const GrammarAdjectiveBasicScreen = () => {
  const grammarSections = [
    {
      title: '1. Tính từ trong tiếng Nhật có mấy loại?',
      explanation:
        '🟢 Có 2 loại tính từ chính:\n\n' +
        '✅ **Tính từ đuôi -い (い形容詞)**: thường kết thúc bằng い.\n' +
        'Ví dụ: たのしい (vui vẻ), やさしい (hiền), たかい (cao/đắt).\n\n' +
        '✅ **Tính từ đuôi -な (な形容詞)**: thường thêm な khi bổ nghĩa cho danh từ.\n' +
        'Ví dụ: しずかな (yên tĩnh), きれいな (đẹp/sạch), ゆうめいな (nổi tiếng).',
    },
    {
      title: '2. Cấu trúc và biến đổi với tính từ -い',
      explanation:
        '🌸 Hiện tại – Khẳng định:\nこのほんは おもしろいです。→ Cuốn sách này thú vị.\n\n' +
        '🌧️ Hiện tại – Phủ định:\nこのほんは おもしろくないです。→ Cuốn sách này không thú vị.\n\n' +
        '☀️ Quá khứ – Khẳng định:\nきのうは あつかったです。→ Hôm qua trời nóng.\n\n' +
        '🌬️ Quá khứ – Phủ định:\nきのうは あつくなかったです。→ Hôm qua trời không nóng.',
    },
    {
      title: '3. Cấu trúc và biến đổi với tính từ -な',
      explanation:
        '💎 Hiện tại – Khẳng định:\nこのへやは きれいです。→ Phòng này sạch.\n\n' +
        '💔 Hiện tại – Phủ định:\nこのへやは きれいじゃありません。→ Phòng này không sạch.\n\n' +
        '⏳ Quá khứ – Khẳng định:\nきのう、ひまでした。→ Hôm qua tôi rảnh.\n\n' +
        '🙅‍♂️ Quá khứ – Phủ định:\nきのう、ひまじゃありませんでした。→ Hôm qua tôi không rảnh.',
    },
    {
      title: '4. Một vài mẹo nhỏ khi dùng tính từ',
      explanation:
        '📌 Khi nói thân mật:\n・「です」→ có thể bỏ\n・「じゃありません」→ thành 「じゃない」\n・「でした」→ thành 「だった」\n・「じゃありませんでした」→ thành 「じゃなかった」\n\n' +
        '🗣️ Ví dụ:\n・このコンピューター、たかいよ。→ Máy tính này đắt đấy.\n・きのう、ひまじゃなかったよ。→ Hôm qua tớ không rảnh đâu.',
    },
    {
      title: '5. Ghi nhớ nhanh 🔖',
      explanation:
        '✨ Tính từ là “gia vị” không thể thiếu khi mô tả bất kỳ điều gì trong tiếng Nhật.\n\n' +
        'Hãy tập biến đổi chúng qua các thì và luyện nói nhiều để quen dần nhé!',
    },
  ]

  return (
    <GrammarTemplateScreen screenTitle="Tính từ tiếng Nhật" grammarSections={grammarSections} />
  )
}

export default GrammarAdjectiveBasicScreen
