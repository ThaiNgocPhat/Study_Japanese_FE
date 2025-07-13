import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'

const GrammarCountingPeopleThingScreen = () => {
  const grammarSections = [
    {
      title: '1. Cách đếm người – ～にん',
      explanation:
        '👥 Mẫu: [Số đếm] + にん（人）\n\n' +
        '📌 Dùng khi nói về số lượng người.\n\n' +
        '🔸 Cách đọc đặc biệt:\n' +
        '・1 người → ひとり（一人）\n' +
        '・2 người → ふたり（二人）\n' +
        '・Từ 3 trở lên: さんにん、よにん、…\n\n' +
        '🔹 Ví dụ:\n' +
        '・クラスに がくせいが 30にん います。\n' +
        '・うちには かぞくが 5にん います。',
    },
    {
      title: '2. Đếm vật nhỏ – ～こ（個）',
      explanation:
        '🍎 Mẫu: [Số] + こ（個）\n\n' +
        '📌 Dùng cho đồ vật nhỏ như táo, kẹo, bánh…\n\n' +
        '🔸 Cách đọc đặc biệt:\n' +
        '・1 → いっこ ／ 6 → ろっこ ／ 8 → はっこ ／ 10 → じゅっこ\n\n' +
        '🔹 Ví dụ:\n' +
        '・りんごを にこ たべました。\n' +
        '・ケーキが よっつ あります。',
    },
    {
      title: '3. Đếm vật dài – ～ほん（本）',
      explanation:
        '🖊️ Mẫu: [Số] + ほん（本）\n\n' +
        '📌 Dùng cho vật dài: bút, cây, chai, lon…\n\n' +
        '🔸 Biến âm: 1 → いっぽん ／ 3 → さんぼん ／ 6 → ろっぽん\n\n' +
        '🔹 Ví dụ:\n' +
        '・ペンを さんぼん かいました。\n' +
        '・ビールを ごほん のみました。',
    },
    {
      title: '4. Cách dùng trợ số từ trong câu',
      explanation:
        '🧠 Cấu trúc cơ bản:\n' +
        '👉 [Danh từ] + が / を + [Số] + [助数詞]\n\n' +
        '🔹 Ví dụ:\n' +
        '・せんせいが 3人 います。\n' +
        '・ケーキが 4つ あります。\n' +
        '・ボールペンを 2本 かいました。\n\n' +
        '📌 Trong hội thoại hàng ngày có thể lược bỏ 「が」、「を」:\n' +
        '・肉まん 2個 たべた。→ Ăn 2 cái bánh bao rồi.\n\n' +
        '📌 Với 「つ」 → nếu hơn 10 cái, bỏ luôn trợ từ:\n' +
        '・ボールが 15 あります。\n\n' +
        '❓ Khi không biết rõ loại trợ từ → dùng:\n' +
        '・「どのくらい」: bao nhiêu\n' +
        '・「くらい」 sau số đếm: khoảng\n' +
        '→ A: ハンカチが どのくらい ありますか。\n' +
        '→ B: さんじゅうまい くらい あります。\n\n' +
        '📍 Lưu ý: Danh từ đứng TRƯỚC số đếm và trợ từ!\n' +
        '→ シャツ 3まい（3 cái áo） chứ không phải "3 cái シャツ".',
    },
  ]

  return (
    <GrammarTemplateScreen screenTitle="Cách đếm số người, vật" grammarSections={grammarSections} />
  )
}

export default GrammarCountingPeopleThingScreen
