import React from 'react'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarYoriNoHougaScreen = () => {
  const grammarSections = [
    {
      title: '1. Cấu trúc so sánh hơn: ～より～のほうが',
      explanation:
        '👉 Dùng để so sánh giữa **hai người, vật, hoặc sự việc**.\n\n' +
        '📌 Mẫu câu:\n' +
        '🔹 [A] は [B] より + tính từ + です。\n' +
        '→ A thì ... hơn B\n\n' +
        '🔹 Ví dụ:\n' +
        '・くるまは じてんしゃより はやいです。\n　→ Ô tô nhanh hơn xe đạp.\n\n' +
        '・たなかさんは わたしより せがたかいです。\n　→ Tanaka cao hơn tôi.\n\n' +
        '・このパソコンは そのパソコンより べんりです。\n　→ Máy tính này tiện hơn máy kia.\n\n' +
        '・とらは ねこより おおきいです。\n　→ Hổ to hơn mèo.',
    },
    {
      title: '2. Dạng đảo ngược: ～のほうが～より',
      explanation:
        '👉 Chúng ta có thể đảo ngược vị trí để nhấn mạnh đối tượng hơn:\n\n' +
        '📌 Mẫu câu:\n' +
        '🔹 [B] より [A] のほうが + tính từ + です。\n' +
        '→ So với B thì A ... hơn\n\n' +
        '🔹 Ví dụ:\n' +
        '・じてんしゃより くるまのほうが はやいです。\n　→ So với xe đạp thì ô tô nhanh hơn.\n\n' +
        '・わたしより たなかさんのほうが せがたかいです。\n　→ So với tôi thì Tanaka cao hơn.\n\n' +
        '・そのパソコンより このパソコンのほうが べんりです。\n　→ Máy này tiện hơn máy kia.\n\n' +
        '・ねこより とらのほうが おおきいです。\n　→ Hổ to hơn mèo.',
    },
    {
      title: '3. Ghi nhớ nhanh',
      explanation:
        '🧠 Gợi ý học nhanh:\n\n' +
        '🔹 「より」 giống như "so với"\n' +
        '🔹 「のほうが」 dùng để nhấn mạnh chủ thể được so sánh\n' +
        '🔹 Có thể dùng cách nào cũng được, miễn là rõ chủ thể nào "hơn"\n\n' +
        '💬 Cả hai cách đều đúng, chỉ khác nhau ở cách diễn đạt mà thôi!',
    },
  ]

  return <GrammarTemplateScreen screenTitle="～より～のほうが" grammarSections={grammarSections} />
}

export default GrammarYoriNoHougaScreen
