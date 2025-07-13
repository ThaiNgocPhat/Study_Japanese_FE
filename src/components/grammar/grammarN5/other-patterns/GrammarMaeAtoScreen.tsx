import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
import React from 'react'
const GrammarMaeAtoScreen = () => {
  const grammarSections = [
    {
      title: '1. Cấu trúc với 「まえ」– Trước khi ...',
      explanation:
        '👉 Dùng để nói **"trước khi làm gì đó"** hoặc **"trước một mốc thời gian cụ thể"**.\n\n' +
        '📌 Mẫu câu:\n' +
        '・[Danh từ]（の）+ まえに\n' +
        '・[Động từ thể từ điển] + まえに\n\n' +
        '🔹 Ví dụ:\n' +
        '・１ヶ月まえに、日本にきました。\n　→ Tôi đến Nhật 1 tháng trước.\n\n' +
        '・たべるまえに、てをあらってください。\n　→ Hãy rửa tay trước khi ăn.\n\n' +
        '・かのじょは ねるまえに ほんを よみます。\n　→ Cô ấy đọc sách trước khi ngủ.',
    },
    {
      title: '2. Cấu trúc với 「あと」– Sau khi ...',
      explanation:
        '👉 Dùng để diễn tả hành động **xảy ra sau một hành động khác** hoặc **sau một mốc sự kiện cụ thể**.\n\n' +
        '📌 Mẫu câu:\n' +
        '・[Danh từ] + の + あとで\n' +
        '・[Động từ thể た] + あとで\n\n' +
        '🔹 Ví dụ:\n' +
        '・たべたあとで、はをみがきます。\n　→ Tôi đánh răng sau khi ăn.\n\n' +
        '・しごとのあとで、のみにいきます。\n　→ Tôi đi nhậu sau giờ làm.\n\n' +
        '・かいぎのあとで、メールをおくります。\n　→ Tôi sẽ gửi mail sau khi họp xong.',
    },
    {
      title: '3. Ghi nhớ nhanh',
      explanation:
        '🧠 Mẹo ghi nhớ:\n\n' +
        '・「まえ」 luôn đi với thể từ điển hoặc danh từ + の\n' +
        '・「あと」 luôn đi với thể た hoặc danh từ + の\n\n' +
        '💡 Khi chia đúng cấu trúc, câu sẽ tự nhiên và dễ hiểu hơn trong giao tiếp hàng ngày!',
    },
  ]

  return <GrammarTemplateScreen screenTitle="～まえ/ あと" grammarSections={grammarSections} />
}

export default GrammarMaeAtoScreen
