import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarDateDayMonthScreen = () => {
  const grammarSections = [
    {
      title: '1. Cách nói thứ trong tuần（ようび）',
      explanation:
        '📅 Thứ trong tuần trong tiếng Nhật kết thúc bằng 「ようび」（曜日）\n\n' +
        '🔸 Các thứ từ thứ 2 đến CN:\n' +
        '・げつようび（月曜日）: Thứ hai\n' +
        '・かようび（火曜日）: Thứ ba\n' +
        '・すいようび（水曜日）: Thứ tư\n' +
        '・もくようび（木曜日）: Thứ năm\n' +
        '・きんようび（金曜日）: Thứ sáu\n' +
        '・どようび（土曜日）: Thứ bảy\n' +
        '・にちようび（日曜日）: Chủ nhật\n\n' +
        '🔹 Ví dụ:\n' +
        '・きょうは すいようびです。→ Hôm nay là thứ tư.\n' +
        '・あしたは どようびですか。→ Ngày mai là thứ bảy phải không?',
    },
    {
      title: '2. Cách nói tháng trong năm（～がつ）',
      explanation:
        '🗓️ Tháng trong tiếng Nhật = [số đếm] + がつ（月）\n\n' +
        '🔸 Cách đọc:\n' +
        '・1月（いちがつ）: Tháng 1\n' +
        '・4月（しがつ）: Tháng 4 (không đọc よんがつ!)\n' +
        '・7月（しちがつ）: Tháng 7 (không đọc なながつ!)\n' +
        '・9月（くがつ）: Tháng 9 (không đọc きゅうがつ!)\n' +
        '・Các tháng còn lại đọc theo số đếm + がつ\n\n' +
        '🔹 Ví dụ:\n' +
        '・わたしのたんじょうびは 9月です。→ Sinh nhật tôi là tháng 9.\n' +
        '・いまは 12月です。→ Bây giờ là tháng 12.',
    },
    {
      title: '3. Cách nói ngày trong tháng（～にち）',
      explanation:
        '📆 Ngày trong tháng thường dùng số + にち（日） nhưng có **nhiều ngày đặc biệt cần thuộc lòng**!\n\n' +
        '🔸 Những ngày đặc biệt:\n' +
        '・1日（ついたち）: Mồng 1\n' +
        '・2日（ふつか）: Mồng 2\n' +
        '・3日（みっか）: Mồng 3\n' +
        '・4日（よっか）: Mồng 4\n' +
        '・5日（いつか）: Mồng 5\n' +
        '・6日（むいか）: Mồng 6\n' +
        '・7日（なのか）: Mồng 7\n' +
        '・8日（ようか）: Mồng 8\n' +
        '・9日（ここのか）: Mồng 9\n' +
        '・10日（とおか）: Mồng 10\n' +
        '・14日（じゅうよっか）: Ngày 14\n' +
        '・20日（はつか）: Ngày 20\n' +
        '・24日（にじゅうよっか）: Ngày 24\n\n' +
        '🔹 Các ngày khác: số đếm bình thường + にち\n' +
        '・11日（じゅういちにち）, 15日（じゅうごにち）, 30日（さんじゅうにち）...\n\n' +
        '🔹 Ví dụ:\n' +
        '・きょうは 5日です。→ Hôm nay là ngày mồng 5.\n' +
        '・テストは 14日です。→ Bài kiểm tra là ngày 14.',
    },
    {
      title: '4. Cách hỏi – trả lời về ngày tháng',
      explanation:
        '❓ Câu hỏi phổ biến:\n\n' +
        '👉 なんようびですか。→ Hôm nay là thứ mấy?\n' +
        '👉 なんがつですか。→ Tháng mấy?\n' +
        '👉 なんにちですか。→ Ngày bao nhiêu?\n' +
        '👉 たんじょうびは いつですか。→ Sinh nhật bạn khi nào?\n\n' +
        '🔹 Trả lời:\n' +
        '・きょうは もくようびです。→ Hôm nay là thứ năm.\n' +
        '・いまは しがつです。→ Bây giờ là tháng 4.\n' +
        '・テストは 20日です。→ Bài kiểm tra vào ngày 20.',
    },
    {
      title: '5. Ghi nhớ nhanh 🎯',
      explanation:
        '📌 Gợi ý để học dễ hơn:\n\n' +
        '🌀 Tập viết lịch tuần & tháng bằng tiếng Nhật mỗi ngày.\n' +
        '📅 Dùng flashcard để luyện thuộc 14 ngày đặc biệt.\n' +
        '🎤 Luyện nói: "きょうは何日ですか？" và tự trả lời bằng ngày thực tế.\n\n' +
        '📘 Tips: Trong tiếng Nhật, người ta thường dùng combo thứ + ngày + tháng như sau:\n' +
        '👉「今日は　げつようび、10月2日　です。」→ Hôm nay là thứ hai, ngày 2 tháng 10.',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="Cách nói thứ, ngày, tháng"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarDateDayMonthScreen
