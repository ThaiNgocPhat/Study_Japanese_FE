import GrammarTemplateScreen from '@components/GrammarTemplateScreen'
const grammarSections = [
  {
    title: '1. Giới thiệu về ～てある',
    explanation:
      '📌 Mẫu câu ～てある dùng để diễn tả trạng thái của một sự vật **đã được chuẩn bị, thiết lập sẵn**, và trạng thái đó **vẫn đang duy trì**.\n\n' +
      '👉 Khác với ～ている (mô tả hành động đang diễn ra), ～てある nhấn mạnh vào **kết quả của hành động có chủ đích**.\n\n' +
      '💡 Thường dùng với **tha động từ** (他動詞).',
  },
  {
    title: '2. Cấu trúc của ～てある',
    explanation:
      '✏️ Cấu trúc:\n' +
      '【Vて】 + あります\n\n' +
      '📌 Chủ ngữ thường là vật (đồ vật, địa điểm...), không phải người.\n\n' +
      '📝 Ví dụ:\n' +
      '・壁（かべ）に地図（ちず）がはってあります。\n' +
      '→ Trên tường có dán bản đồ sẵn rồi.\n\n' +
      '・机の上に資料（しりょう）が置いてあります。\n' +
      '→ Tài liệu được đặt sẵn trên bàn.',
  },
  {
    title: '3. So sánh với ～ています và ～ておきます',
    explanation:
      '🔁 **～ています**: Diễn tả trạng thái kết quả của hành động, nhưng không chắc do ai thực hiện.\n' +
      '🔁 **～てあります**: Diễn tả kết quả **do ai đó làm có chủ đích**, và kết quả đó vẫn còn.\n' +
      '🔁 **～ておきます**: Diễn tả hành động được làm để chuẩn bị cho tương lai, hoặc để nguyên như vậy.\n\n' +
      '📖 Ví dụ so sánh:\n' +
      '・窓が開いています。\n' +
      '→ Cửa sổ đang mở (chưa rõ ai mở, chỉ là trạng thái).\n\n' +
      '・窓が開けてあります。\n' +
      '→ Cửa sổ đã được ai đó mở ra (có chủ đích, để thoáng chẳng hạn).\n\n' +
      '・窓を開けておきます。\n' +
      '→ Tôi sẽ mở cửa sổ sẵn ra (chuẩn bị cho việc gì đó).',
  },
  {
    title: '4. Một số ví dụ thường gặp',
    explanation:
      '📝 Ví dụ:\n' +
      '・晩ごはんはもう作ってあります。\n' +
      '→ Cơm tối đã được nấu sẵn rồi.\n\n' +
      '・会議の部屋（へや）は準備（じゅんび）してあります。\n' +
      '→ Phòng họp đã được chuẩn bị rồi.\n\n' +
      '・椅子（いす）はきちんと並べてあります。\n' +
      '→ Ghế đã được xếp sẵn ngay ngắn rồi.',
  },
  {
    title: '5. Lưu ý khi sử dụng ～てある',
    explanation:
      '✅ Chỉ dùng với **tha động từ** (động từ cần tân ngữ).\n' +
      '❌ Không dùng với tự động từ như: 泣く（なく）, 座る（すわる）…\n\n' +
      '✅ Nhấn mạnh sự sắp xếp/cài đặt **có mục đích**:\n' +
      '→ Được làm sẵn, chuẩn bị trước (khác với chỉ trạng thái tình cờ).\n\n' +
      '✅ Không dùng với chủ ngữ là người (trừ khi trong câu ghép).',
  },
]

const GrammarTeAruScreen = () => {
  return <GrammarTemplateScreen screenTitle="～てある" grammarSections={grammarSections} />
}

export default GrammarTeAruScreen
