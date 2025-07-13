import React from 'react'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarKoSoADoScreen = () => {
  const grammarSections = [
    {
      title: '1. これ / それ / あれ / どれ – Đại từ chỉ vật',
      explanation:
        '👉 Dùng để **chỉ đồ vật** (không đi với danh từ).\n\n' +
        '🔸 これ: cái này (gần người nói)\n' +
        '🔸 それ: cái đó (gần người nghe)\n' +
        '🔸 あれ: cái kia (xa cả 2 người)\n' +
        '🔸 どれ: cái nào?\n\n' +
        '📌 Ví dụ:\n' +
        '・これは わたしの ほんです。→ Đây là sách của tôi.\n' +
        '・それは たなかさんの かばんですか。→ Đó là cặp của anh Tanaka à?\n' +
        '・あれは なんですか。→ Kia là cái gì?\n' +
        '・どれが あなたの ほんですか。→ Cái nào là sách của bạn?',
    },
    {
      title: '2. この / その / あの / どの – Tính từ chỉ định',
      explanation:
        '👉 Dùng để **bổ nghĩa cho danh từ** (phía sau là danh từ).\n\n' +
        '🔸 この: ~ này\n' +
        '🔸 その: ~ đó\n' +
        '🔸 あの: ~ kia\n' +
        '🔸 どの: ~ nào?\n\n' +
        '📌 Ví dụ:\n' +
        '・このほんは おもしろいです。→ Quyển sách này thú vị.\n' +
        '・そのひとは だれですか。→ Người đó là ai vậy?\n' +
        '・あのたてものは なんですか。→ Toà nhà kia là gì vậy?\n' +
        '・どのペンが いいですか。→ Cây bút nào thì tốt?',
    },
    {
      title: '3. ここ / そこ / あそこ / どこ – Chỉ nơi chốn',
      explanation:
        '👉 Dùng để **chỉ vị trí địa điểm**.\n\n' +
        '🔸 ここ: chỗ này (gần người nói)\n' +
        '🔸 そこ: chỗ đó (gần người nghe)\n' +
        '🔸 あそこ: chỗ kia (xa cả 2 người)\n' +
        '🔸 どこ: ở đâu?\n\n' +
        '📌 Ví dụ:\n' +
        '・ここは トイレです。→ Đây là nhà vệ sinh.\n' +
        '・そこに ほんがありますか。→ Có sách ở chỗ đó không?\n' +
        '・あそこは ゆうびんきょくです。→ Kia là bưu điện.\n' +
        '・トイレは どこですか。→ Nhà vệ sinh ở đâu?',
    },
    {
      title: '4. こっち / そっち / あっち / どっち – Cách nói thân mật',
      explanation:
        '👉 Cách nói thân mật của ここ・そこ・あそこ・どこ và dùng để **chỉ phương hướng hoặc người**.\n\n' +
        '🔸 こっち: phía này / bên này\n' +
        '🔸 そっち: phía đó / bên đó\n' +
        '🔸 あっち: phía kia / bên kia\n' +
        '🔸 どっち: phía nào / bên nào?\n\n' +
        '📌 Ví dụ:\n' +
        '・トイレは こっちです。→ Nhà vệ sinh ở hướng này.\n' +
        '・そっちに たなかさんが います。→ Anh Tanaka ở bên đó.\n' +
        '・あっちが わたしの うちです。→ Bên kia là nhà tôi.\n' +
        '・どっちに いきますか。→ Bạn sẽ đi hướng nào?',
    },
    {
      title: '5. こちら / そちら / あちら / どちら – Lịch sự hơn',
      explanation:
        '👉 Cách nói lịch sự của こっち / そっち / あっち / どっち.\n' +
        'Ngoài ra còn được dùng để chỉ người (khiêm nhường / kính ngữ).\n\n' +
        '🔸 こちら: phía này / vị này\n' +
        '🔸 そちら: phía đó / vị đó\n' +
        '🔸 あちら: phía kia / vị kia\n' +
        '🔸 どちら: phía nào / vị nào?\n\n' +
        '📌 Ví dụ:\n' +
        '・トイレは こちらです。→ Nhà vệ sinh ở phía này.\n' +
        '・そちらは どなたですか。→ Vị đó là ai?\n' +
        '・あちらは たなかさんです。→ Kia là anh Tanaka.\n' +
        '・どちらが せんせいですか。→ Ai là thầy/cô giáo?',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="Phân biệt こ、そ、あ、ど"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarKoSoADoScreen
