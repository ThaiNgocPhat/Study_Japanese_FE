import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarVerbN5Screen = () => {
  const grammarSections = [
    {
      title: '1. Thể từ điển (辞書形 - じしょけい)',
      explanation: 'Là dạng nguyên thể của động từ, thường dùng trong từ điển.',
      examples: [],
    },
    {
      title: '2. Phân nhóm động từ',
      explanation:
        'Động từ trong tiếng Nhật được chia thành 3 nhóm chính:\n\n' +
        '🔹 **Nhóm 1 - Động từ đuôi う (u):**\n' +
        'Bao gồm các động từ kết thúc bằng âm う. Đây là nhóm lớn nhất, chiếm khoảng 70% số lượng động từ.\n' +
        'Ví dụ: あう (gặp), はなす (nói chuyện), きく (nghe/hỏi), のむ (uống)\n\n' +
        '🔹 **Nhóm 2 - Động từ đuôi る (ru):**\n' +
        'Bao gồm các động từ kết thúc bằng る. Nhóm này chiếm khoảng 30% số lượng động từ.\n' +
        'Ví dụ: たべる (ăn), みる (xem/nhìn), きる (mặc)\n\n' +
        '🔹 **Nhóm 3 - Động từ bất quy tắc:**\n' +
        'Chỉ có 2 động từ: する (làm) và くる (đến)',
      examples: [],
    },
    {
      title: '3. Một số lưu ý khi phân nhóm',
      explanation:
        'Không phải tất cả động từ kết thúc bằng る đều thuộc nhóm 2. Việc phân loại cần chú ý âm đứng trước:\n\n' +
        '🔸 **Nếu âm trước る là /a/, /u/, /i/ hoặc /o** → thường là **nhóm 1**:\n' +
        'Ví dụ: わかる (hiểu), つくる (chế tạo), しる (biết), のぼる (leo)\n\n' +
        '🔸 **Nếu âm trước る là /e/** → đa số là **nhóm 2**:\n' +
        'Ví dụ: たべる (ăn), あける (mở)\n\n' +
        '🔸 **Một số động từ kết thúc bằng “iru”** nhưng lại thuộc **nhóm 2**:\n' +
        'Ví dụ: おきる (thức dậy), あびる (tắm)\n\n' +
        '⚠️ **Ngoại lệ cần ghi nhớ:**\n' +
        'かえる (trở về) tuy kết thúc bằng "eru" nhưng lại thuộc nhóm 1',
      examples: [],
    },
    {
      title: '4. Thể phủ định (ない形)',
      explanation:
        'Trong tiếng Nhật, thể ない (thể phủ định) được dùng để nói rằng một hành động **không xảy ra**. Cách chia thể này sẽ khác nhau tuỳ theo từng nhóm động từ:\n\n' +
        '🔹 **Nhóm 1 (đuôi う):**\n' +
        '- Với những động từ có đuôi là う, đổi う thành わ rồi thêm ない.\n' +
        '  Ví dụ: あう → あわない (không gặp), いう → いわない (không nói)\n' +
        '- Với các động từ khác, hãy biến âm cuối sang hàng あ tương ứng rồi thêm ない.\n' +
        '  Ví dụ: はなす → はなさない (không trò chuyện), きく → きかない (không nghe)\n\n' +
        '🔹 **Nhóm 2 (đuôi る):**\n' +
        '- Loại bỏ る và thêm ない.\n' +
        '  Ví dụ: たべる → たべない (không ăn), おきる → おきない (không thức dậy)\n\n' +
        '🔹 **Nhóm 3 (bất quy tắc):**\n' +
        '- する → しない (không làm)\n' +
        '- くる → こない (không đến)\n\n' +
        '🔸 **Trường hợp đặc biệt:**\n' +
        '- Động từ ある (có) sẽ chuyển thành ない (không có)',
      examples: [],
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="Động từ trong tiếng Nhật"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarVerbN5Screen
