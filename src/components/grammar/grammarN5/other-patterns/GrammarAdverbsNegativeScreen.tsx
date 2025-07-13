import React from 'react'
import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarAdverbsNegativeScreen = () => {
  const grammarSections = [
    {
      title: '1. ぜんぜん～ない – Hoàn toàn không…',
      explanation:
        '📌 Dùng để nhấn mạnh việc **hoàn toàn không có/không xảy ra điều gì đó**.\n\n' +
        '👉 Cấu trúc: ぜんぜん + Động/Tính từ + ない\n\n' +
        '🔹 Ví dụ:\n' +
        '・お金は ぜんぜん ありません。→ Tôi hoàn toàn không có tiền.\n' +
        '・彼と ぜんぜん 話したくない。→ Tôi hoàn toàn không muốn nói chuyện với anh ta.\n' +
        '・英語が ぜんぜん わかりません。→ Tôi hoàn toàn không hiểu tiếng Anh.',
    },
    {
      title: '2. あまり～ない – Không … lắm / Hầu như không…',
      explanation:
        '📌 Dùng để thể hiện mức độ **không nhiều**, **không đáng kể**.\n\n' +
        '👉 Cấu trúc: あまり + Động/Tính từ + ない\n\n' +
        '🔹 Ví dụ:\n' +
        '・私は すしが あまり すきじゃありません。→ Tôi không thích sushi lắm.\n' +
        '・きょうの天気は あまり 寒くない。→ Thời tiết hôm nay không lạnh lắm.\n' +
        '・かのじょは 肉を あまり たべませんでした。→ Cô ấy hầu như không ăn thịt.',
    },
    {
      title: '3. なかなか～ない – Mãi mà không…',
      explanation:
        '📌 Dùng khi một hành động **không xảy ra như mong đợi**, dù đã đợi lâu.\n\n' +
        '👉 Cấu trúc: なかなか + Động từ + ない\n\n' +
        '🔹 Ví dụ:\n' +
        '・バスが なかなか こない。→ Xe buýt mãi không tới.\n' +
        '・日本語が なかなか 上手に なりません。→ Mãi mà không giỏi tiếng Nhật.\n' +
        '・病気が なかなか 治らない。→ Bệnh mãi không khỏi.',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="Những phó từ đi với câu phủ định"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarAdverbsNegativeScreen
