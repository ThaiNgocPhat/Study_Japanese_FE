import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarVerbTaFormScreen = () => {
  const grammarSections = [
    {
      title: '1. Giới thiệu thể た (た形)',
      explanation:
        'Thể た được sử dụng để biểu thị hành động hoặc sự việc đã xảy ra trong quá khứ. Đây là một trong những dạng chia cơ bản và thường gặp trong hội thoại tiếng Nhật.\n\n' +
        'Ví dụ:\n' +
        '・きのう、ラーメンをたべた。→ Hôm qua tôi đã ăn mì ramen。\n' +
        '・リンちゃんはこうえんであそんだ。→ Bé Linh đã chơi ở công viên。\n' +
        '・しゅくだいをした。→ Tôi đã làm bài tập。',
      examples: [],
    },
    {
      title: '2. Cách chia thể た',
      explanation:
        'Việc chia động từ sang thể た tùy thuộc vào từng nhóm động từ:\n\n' +
        '🔹 **Nhóm 1 - Động từ đuôi う:**\n' +
        '1. Đuôi **す** → chuyển thành **した**\n' +
        'Ví dụ: はなす → はなした (đã nói chuyện)\n\n' +
        '2. Đuôi **く** → chuyển thành **いた**\n' +
        'Ví dụ: かく → かいた (đã viết)\n' +
        '⚠️ Ngoại lệ: いく → いった (đã đi)\n\n' +
        '3. Đuôi **ぐ** → chuyển thành **いだ**\n' +
        'Ví dụ: およぐ → およいだ (đã bơi)\n\n' +
        '4. Đuôi **む / ぶ / ぬ** → chuyển thành **んだ**\n' +
        'Ví dụ: よむ → よんだ (đã đọc), あそぶ → あそんだ (đã chơi), しぬ → しんだ (đã chết)\n\n' +
        '5. Đuôi **う / つ / る** → chuyển thành **った**\n' +
        'Ví dụ: いう → いった (đã nói), たつ → たった (đã đứng), わかる → わかった (đã hiểu)\n\n' +
        '🔹 **Nhóm 2 - Động từ đuôi る:**\n' +
        '→ Bỏ **る**, thêm **た**\n' +
        'Ví dụ: たべる → たべた (đã ăn), みる → みた (đã xem), おきる → おきた (đã dậy)\n\n' +
        '🔹 **Nhóm 3 - Động từ bất quy tắc:**\n' +
        '・する → した (đã làm)\n' +
        '・くる → きた (đã đến)',
      examples: [],
    },
    {
      title: '3. Thể phủ định quá khứ (なかった形)',
      explanation:
        'Để nói rằng một hành động **đã không** xảy ra, ta sử dụng thể **なかった**.\n\n' +
        '✨ Cách chia thể này giống với chia thể ない, chỉ cần thay **ない** thành **なかった**.\n' +
        'Ví dụ:\n' +
        '・たべない → たべなかった (đã không ăn)\n' +
        '・あそばない → あそばなかった (đã không chơi)\n' +
        '・しない → しなかった (đã không làm)\n\n' +
        '📌 Nếu chưa nắm rõ thể ない, hãy ôn lại phần “Thể phủ định (ない形)”.\n\n' +
        'Ví dụ:\n' +
        '・きのう、ラーメンをたべなかった。→ Hôm qua tôi đã không ăn mì。\n' +
        '・リンちゃんはこうえんであそばなかった。→ Bé Linh đã không chơi ở công viên。\n' +
        '・しゅくだいをしなかった。→ Tôi đã không làm bài tập。',
      examples: [],
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="Động từ thì quá khứ – Thể た"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarVerbTaFormScreen
