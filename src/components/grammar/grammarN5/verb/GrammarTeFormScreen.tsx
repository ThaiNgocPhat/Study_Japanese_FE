import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarTeFormScreen = () => {
  const grammarSections = [
    {
      title: '1. Giới thiệu thể て (て形)',
      explanation:
        'Thể て là một dạng biến đổi đặc biệt của động từ, được dùng trong rất nhiều mẫu câu tiếng Nhật như yêu cầu, nối câu, xin phép, trạng thái tiếp diễn,... Đây là một phần cực kỳ quan trọng khi học tiếng Nhật giao tiếp.',
      examples: [],
    },
    {
      title: '2. Cách chia động từ sang thể て',
      explanation:
        'Cách chia thể て tuỳ thuộc vào từng nhóm động từ:\n\n' +
        '🔹 **Nhóm 1:**\n' +
        '1. Động từ kết thúc bằng **う / つ / る** → chuyển thành **って**\n' +
        'Ví dụ: あう → あって, たつ → たって, とる → とって\n\n' +
        '2. Kết thúc bằng **む / ぶ / ぬ** → chuyển thành **んで**\n' +
        'Ví dụ: よむ → よんで, あそぶ → あそんで, しぬ → しんで\n\n' +
        '3. Kết thúc bằng **く** → chuyển thành **いて**\n' +
        'Ví dụ: かく → かいて\n' +
        '⚠️ Ngoại lệ: いく → いって\n\n' +
        '4. Kết thúc bằng **ぐ** → chuyển thành **いで**\n' +
        'Ví dụ: およぐ → およいで\n\n' +
        '5. Kết thúc bằng **す** → chuyển thành **して**\n' +
        'Ví dụ: はなす → はなして\n\n' +
        '🔹 **Nhóm 2:**\n' +
        '→ Bỏ **る**, thêm **て**\n' +
        'Ví dụ: たべる → たべて, みる → みて\n\n' +
        '🔹 **Nhóm 3 (bất quy tắc):**\n' +
        '・する → して\n' +
        '・くる → きて',
      examples: [],
    },
    {
      title: '3. Các cấu trúc phổ biến sử dụng thể て',
      explanation:
        '✅ **～てください**: Dùng để yêu cầu lịch sự ai đó làm gì.\n' +
        'Ví dụ: ここに名前をかいてください。→ Hãy viết tên vào đây。\n\n' +
        '✅ **～てもいいです**: Dùng để xin phép.\n' +
        'Ví dụ: トイレにいってもいいですか？→ Em có thể đi vệ sinh được không？\n\n' +
        '✅ **～てはいけません**: Cấm đoán, không được phép.\n' +
        'Ví dụ: ここでたばこをすってはいけません。→ Không được hút thuốc ở đây。\n\n' +
        '✅ **～ている**: Diễn tả trạng thái tiếp diễn hoặc thói quen.\n' +
        'Ví dụ: いま、テレビをみています。→ Bây giờ tôi đang xem TV。\n\n' +
        '✅ **～てから**: Sau khi làm gì đó thì...\n' +
        'Ví dụ: ごはんをたべてから、べんきょうします。→ Sau khi ăn cơm, tôi học bài。',
      examples: [],
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="Các cấu trúc sử dụng thể て"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarTeFormScreen
