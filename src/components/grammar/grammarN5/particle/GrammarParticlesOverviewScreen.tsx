import GrammarTemplateScreen from '@components/GrammarTemplateScreen'

const GrammarParticlesOverviewScreen = () => {
  const grammarSections = [
    {
      title: '1. Trợ từ は – Chủ đề của câu',
      explanation:
        '👉 [Danh từ] + は + ...\n\n' +
        '📌 Trợ từ 「は」đánh dấu chủ đề trong câu, thường là người/vật đang được nói đến.\n\n' +
        '🔹 Ví dụ:\n' +
        '・わたしは がくせいです。→ Tôi là sinh viên.\n' +
        '・これは ほんです。→ Cái này là sách.',
    },
    {
      title: '2. Trợ từ が – Chủ ngữ mới, nhấn mạnh',
      explanation:
        '👉 [Danh từ] + が + ...\n\n' +
        '📌 「が」dùng để giới thiệu thông tin mới, hoặc nhấn mạnh chủ ngữ.\n\n' +
        '🔹 Ví dụ:\n' +
        '・だれが きますか。→ Ai sẽ đến?\n' +
        '・ねこが います。→ Có con mèo (→ nhấn mạnh là "con mèo").',
    },
    {
      title: '3. Trợ từ を – Tân ngữ, đối tượng bị tác động',
      explanation:
        '👉 [Danh từ] + を + [động từ]\n\n' +
        '📌 「を」dùng để chỉ đối tượng bị hành động tác động.\n\n' +
        '🔹 Ví dụ:\n' +
        '・ごはんを たべます。→ Tôi ăn cơm.\n' +
        '・てがみを かきます。→ Viết thư.',
    },
    {
      title: '4. Trợ từ に – Thời điểm, địa điểm, hướng, mục tiêu',
      explanation:
        '👉 [Danh từ] + に + ...\n\n' +
        '📌 「に」có nhiều nghĩa: chỉ nơi đến, thời điểm, nơi tồn tại, mục tiêu,...\n\n' +
        '🔹 Ví dụ:\n' +
        '・7じに おきます。→ Dậy lúc 7 giờ.\n' +
        '・がっこうに いきます。→ Đến trường.\n' +
        '・つくえのうえに ほんが あります。→ Có quyển sách trên bàn.',
    },
    {
      title: '5. Trợ từ で – Địa điểm xảy ra hành động',
      explanation:
        '👉 [Danh từ chỉ nơi chốn/phương tiện] + で + ...\n\n' +
        '📌 Dùng để nói hành động xảy ra ở đâu hoặc bằng phương tiện gì.\n\n' +
        '🔹 Ví dụ:\n' +
        '・うちで べんきょうします。→ Tôi học ở nhà.\n' +
        '・バスで がっこうへ いきます。→ Đi học bằng xe buýt.',
    },
    {
      title: '6. Trợ từ と – Cùng với, liệt kê',
      explanation:
        '👉 [Danh từ] + と + [Danh từ]\n\n' +
        '📌 Dùng để nối các danh từ (và), hoặc để nói "cùng với ai".\n\n' +
        '🔹 Ví dụ:\n' +
        '・ともだちと はなします。→ Nói chuyện với bạn.\n' +
        '・りんごと バナナを かいました。→ Mua táo và chuối.',
    },
    {
      title: '7. Trợ từ も – Cũng',
      explanation:
        '👉 [Danh từ] + も + ...\n\n' +
        '📌 「も」thay cho 「は」để nhấn mạnh nghĩa "cũng là..."\n\n' +
        '🔹 Ví dụ:\n' +
        '・わたしも がくせいです。→ Tôi cũng là sinh viên.\n' +
        '・パンも たべました。→ Tôi cũng đã ăn bánh mì.',
    },
    {
      title: '8. Trợ từ から và まで – Từ... đến...',
      explanation:
        '👉 [Thời gian/địa điểm] + から／まで\n\n' +
        '📌 「から」: từ đâu/bao giờ, 「まで」: đến đâu/bao giờ\n\n' +
        '🔹 Ví dụ:\n' +
        '・9じから 5じまで はたらきます。→ Làm việc từ 9h đến 5h.\n' +
        '・とうきょうから おおさかまで いきます。→ Đi từ Tokyo đến Osaka.',
    },
    {
      title: '9. Ghi nhớ nhanh 🎯',
      explanation:
        '🧠 Mẹo học trợ từ cơ bản:\n\n' +
        '・「は」 – Nêu chủ đề\n' +
        '・「が」 – Giới thiệu/chủ ngữ mới\n' +
        '・「を」 – Đối tượng bị tác động\n' +
        '・「に」 – Nơi đến, thời điểm, mục tiêu\n' +
        '・「で」 – Nơi xảy ra hành động\n' +
        '・「と」 – Với/ và\n' +
        '・「も」 – Cũng\n' +
        '・「から / まで」 – Từ / đến\n\n' +
        '👉 Chăm luyện tập qua ví dụ thực tế để nhớ lâu và hiểu sâu nhé!',
    },
  ]

  return (
    <GrammarTemplateScreen
      screenTitle="Tổng hợp về trợ từ cơ bản"
      grammarSections={grammarSections}
    />
  )
}

export default GrammarParticlesOverviewScreen
