import React from 'react'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarDakeShikaScreen = () => {
  const grammarSections = [
    {
      title: '1. Khái quát về「だけ」và「しか」',
      explanation:
        '👉 Cả hai đều mang nghĩa “chỉ”, nhưng:\n\n' +
        '🔹「だけ」dùng với **thể khẳng định**\n' +
        '🔹「しか」dùng với **thể phủ định**, thể hiện **ý giới hạn mạnh hơn**\n\n' +
        '🧩 Ví dụ:\n' +
        '・千円だけあります。\n　→ Chỉ có 1000 yên.\n\n' +
        '・千円しかありません。\n　→ Ngoài 1000 yên ra thì không có gì khác.',
    },
    {
      title: '2. Vị trí trong câu',
      explanation:
        '👉 「だけ」「しか」thường đứng sau **danh từ**, nhưng「だけ」linh hoạt hơn:\n\n' +
        '🔹「だけ」có thể đi sau:\n' +
        '・Danh từ: かのじょだけしっています。\n　→ Chỉ cô ấy biết.\n' +
        '・Động từ: すこしつかれただけです。\n　→ Chỉ hơi mệt chút thôi.\n' +
        '・Tính từ: 話をきくだけのしごと。\n　→ Công việc chỉ cần nghe chuyện.\n\n' +
        '🔹「しか」chỉ đi sau **danh từ**, và câu phải ở phủ định:\n' +
        '・かのじょしかしりません。\n　→ Ngoài cô ấy ra thì không ai biết.',
    },
    {
      title: '3. Không dùng「を」「が」sau「だけ」「しか」',
      explanation:
        '📌 Khi dùng「だけ」「しか」thì **không dùng**「を」「が」sau đó.\n\n' +
        '🔹 Ví dụ:\n' +
        '❌ ハンバーグしかをたべません。\n✅ ハンバーグしかたべません。\n\n' +
        '❌ たなかさんしかがきませんでした。\n✅ たなかさんしかきませんでした。',
    },
    {
      title: '4. Với các trợ từ như「に」「で」',
      explanation:
        '🔹「だけ」có thể đặt **trước hoặc sau** trợ từ「に」「で」:\n' +
        '・図書館でだけべんきょうします。\n・図書館だけでべんきょうします。\n　→ Tôi chỉ học ở thư viện.\n\n' +
        '🔹「しか」chỉ được đặt **sau** trợ từ:\n' +
        '・図書館でしかべんきょうしません。\n・ここにしかありません。',
    },
    {
      title: '5. Mẹo ghi nhớ nhanh',
      explanation:
        '🧠 Ghi nhớ đơn giản:\n\n' +
        '・「だけ」→ khẳng định\n' +
        '・「しか」→ phủ định + nhấn mạnh hơn\n\n' +
        '⚠️ Nếu không chắc dùng trợ từ gì, hãy tập trung vào **ý nghĩa phủ định mạnh hay không** để chọn đúng giữa「だけ」và「しか」.',
    },
  ]

  return <GrammarTemplateScreen screenTitle="～だけ、しか: Chỉ" grammarSections={grammarSections} />
}

export default GrammarDakeShikaScreen
