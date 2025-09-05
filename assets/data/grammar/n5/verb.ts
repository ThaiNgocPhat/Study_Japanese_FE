export const verb = [
  {
    id: '1',
    title: 'Động từ trong tiếng Nhật',
    sections: [
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
    ],
  },
  {
    id: '2',
    title: 'Động từ thể ます',
    sections: [
      {
        title: '1. Thể ます là gì?',
        explanation:
          'Thể ます (丁寧語 - ていねいご) là cách nói lịch sự trong tiếng Nhật, thường dùng trong giao tiếp hằng ngày, đặc biệt với người lớn tuổi, cấp trên hoặc trong môi trường trang trọng.\n\n' +
          'Đây là nền tảng để học các thể kính ngữ cao cấp hơn trong tương lai.',
        examples: [],
      },
      {
        title: '2. Cách chia động từ sang thể ます',
        explanation:
          '🔹 **Nhóm 1:** Chuyển âm kết thúc ở hàng う → hàng い rồi thêm ます\n' +
          '・あう → あいます\n' +
          '・きく → ききます\n' +
          '・はなす → はなします\n' +
          '・たつ → たちます\n' +
          '・わかる → わかります\n\n' +
          '🔹 **Nhóm 2:** Bỏ る và thêm ます\n' +
          '・たべる → たべます\n' +
          '・みる → みます\n' +
          '・おしえる → おしえます\n\n' +
          '🔹 **Nhóm 3 (bất quy tắc):**\n' +
          '・する → します\n' +
          '・くる → きます',
        examples: [],
      },
      {
        title: '3. Thì hiện tại (khẳng định & phủ định)',
        explanation:
          '🔸 **Khẳng định**: ～ます\n' +
          '・わたしはケーキをたべます。→ Tôi ăn bánh ngọt\n' +
          '・アンさんはせんせいとはなします。→ An nói chuyện với giáo viên\n\n' +
          '🔸 **Phủ định**: ～ません\n' +
          '・わたしはケーキをたべません。→ Tôi không ăn bánh ngọt\n' +
          '・アンさんはせんせいとはなしません。→ An không trò chuyện với giáo viên',
        examples: [],
      },
      {
        title: '4. Thì quá khứ (khẳng định & phủ định)',
        explanation:
          '🔸 **Khẳng định**: ～ました\n' +
          '・わたしはケーキをたべました。→ Tôi đã ăn bánh ngọt\n' +
          '・アンさんはせんせいとはなしました。→ An đã trò chuyện với cô giáo\n\n' +
          '🔸 **Phủ định**: ～ませんでした\n' +
          '・わたしはケーキをたべませんでした。→ Tôi đã không ăn bánh ngọt\n' +
          '・アンさんはせんせいとはなしませんでした。→ An đã không nói chuyện với giáo viên',
        examples: [],
      },
    ],
  },
  {
    id: '3',
    title: 'Động từ thì quá khứ – Thể た',
    sections: [
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
    ],
  },
  {
    id: '4',
    title: 'Các cấu trúc sử dụng thể て',
    sections: [
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
    ],
  },
  {
    id: '7',
    title: 'Phân biệt あげます・もらいます・くれます',
    sections: [
      {
        title: '1. Tổng quan về あげます・もらいます・くれます',
        explanation:
          'Ba động từ này đều diễn tả hành động **cho, nhận** trong tiếng Nhật, nhưng khác nhau ở góc nhìn và vị trí người cho – người nhận:\n\n' +
          '🔸 **あげます**: Tôi cho người khác / Người A cho người B\n' +
          '🔸 **もらいます**: Tôi nhận từ người khác / Người A nhận từ người B\n' +
          '🔸 **くれます**: Người khác cho tôi hoặc người trong nhóm của tôi',
        examples: [],
      },
      {
        title: '2. Cấu trúc với 「あげます」– Cho ai đó',
        explanation:
          '👉 [Người A] は [Người B] に [もの] を あげます。\n\n' +
          '📌 Dùng khi **người cho không phải là tôi** (hoặc tôi cho người khác).\n\n' +
          '🔹 Ví dụ:\n' +
          '・わたしは ともだちに プレゼントを あげました。→ Tôi đã tặng quà cho bạn.\n' +
          '・たなかさんは いもうとに おかしを あげました。→ Anh Tanaka tặng bánh kẹo cho em gái.',
        examples: [],
      },
      {
        title: '3. Cấu trúc với 「もらいます」– Nhận từ ai đó',
        explanation:
          '👉 [Người A] は [Người B] に / から [もの] を もらいます。\n\n' +
          '📌 Dùng khi **người nhận là tôi hoặc ai đó nhận từ người khác**.\n\n' +
          '🔹 Ví dụ:\n' +
          '・わたしは せんせいに 本を もらいました。→ Tôi đã nhận sách từ thầy giáo.\n' +
          '・ともだちは わたしに プレゼントを もらいました。→ Bạn tôi nhận quà từ tôi.',
        examples: [],
      },
      {
        title: '4. Cấu trúc với 「くれます」– Ai đó cho tôi',
        explanation:
          '👉 [Người khác] は わたし（のグループ）に [もの] を くれます。\n\n' +
          '📌 Dùng khi **người cho là người khác**, và **người nhận là tôi hoặc người trong nhóm tôi**.\n\n' +
          '🔹 Ví dụ:\n' +
          '・せんせいは わたしに しゅくだいを くれました。→ Cô giáo đã đưa bài tập cho tôi.\n' +
          '・おばあさんは わたしのこどもに おもちゃを くれました。→ Bà đã tặng đồ chơi cho con tôi.',
        examples: [],
      },
      {
        title: '5. Ghi nhớ nhanh',
        explanation:
          '🧠 Mẹo ghi nhớ:\n\n' +
          '・**あげる** – cho người khác (từ mình → người khác)\n' +
          '・**もらう** – nhận từ người khác (từ người khác → mình)\n' +
          '・**くれる** – người khác cho mình (người khác → mình)',
        examples: [],
      },
    ],
  },
  {
    id: '8',
    title: '～があります／～がいます',
    sections: [
      {
        title: '1. Giới thiệu ～があります／～がいます',
        explanation:
          'Cấu trúc này dùng để diễn tả **sự tồn tại** của người, vật hoặc sự vật ở một nơi nào đó:\n\n' +
          '🔸 **あります（ある）**: Dùng với **vật vô tri vô giác** (bàn ghế, cây cối, đồ vật...)\n' +
          '🔹 **います（いる）**: Dùng với **người và động vật** (sinh vật có sự sống)',
        examples: [],
      },
      {
        title: '2. Cấu trúc câu khẳng định',
        explanation:
          '👉 Danh từ (chỉ người / vật) + が + あります／います。\n\n' +
          '🔸 **Vật / đồ vật:**\n' +
          '・つくえのうえに ほんが あります。→ Trên bàn có quyển sách。\n' +
          '・にわに きが あります。→ Trong vườn có cây。\n\n' +
          '🔹 **Người / động vật:**\n' +
          '・こうえんに こどもが います。→ Ở công viên có trẻ em。\n' +
          '・いえに いぬが います。→ Trong nhà có con chó。',
        examples: [],
      },
      {
        title: '3. Cấu trúc phủ định và nghi vấn',
        explanation:
          '🔸 **Phủ định:** ～が **ありません／いません**\n' +
          '・かばんのなかに でんわが ありません。→ Trong cặp không có điện thoại。\n' +
          '・うちに ねこが いません。→ Nhà tôi không có mèo。\n\n' +
          '🔸 **Câu hỏi:** ～が **ありますか／いますか？**\n' +
          '・ここにトイレがありますか？→ Ở đây có nhà vệ sinh không?\n' +
          '・がっこうに せんせいが いますか？→ Trường học có thầy cô không?',
        examples: [],
      },
      {
        title: '4. Lưu ý khi dùng trợ từ「が」',
        explanation:
          'Trợ từ **が** dùng để chỉ đối tượng chính của câu (người/vật tồn tại). Nếu muốn nói **ở đâu có cái gì**, thì dùng:\n\n' +
          '👉「Địa điểm + に + Danh từ + が + あります／います」\n\n' +
          '🔹 Ví dụ:\n' +
          '・へやに テレビが あります。\n' +
          '・こうえんに こどもが います。',
        examples: [],
      },
      {
        title: '5. Ứng dụng thực tế',
        explanation:
          'Bạn có thể dùng mẫu câu này để hỏi đường, miêu tả cảnh vật, hoặc mô tả nơi ở:\n\n' +
          '🗣️ トイレは ありますか？→ Có nhà vệ sinh không?\n' +
          '🏠 わたしのいえに おおきい にわが あります。→ Nhà tôi có một khu vườn lớn。\n' +
          '🐶 いえに いぬが います。→ Trong nhà có chó。',
        examples: [],
      },
    ],
  },
  {
    id: '5',
    title: '～ませんか、～ましょう、～ましょうか',
    sections: [
      {
        title: '1. ～ませんか (Rủ rê, mời gọi)',
        explanation:
          'Mẫu câu ～ませんか được dùng khi bạn muốn **mời người khác cùng làm điều gì đó một cách lịch sự**. Nó thường mang sắc thái nhẹ nhàng, thể hiện sự quan tâm hoặc đề xuất một ý tưởng.\n\n' +
          '📌 Cấu trúc: Động từ thể ます (bỏ ます) + ませんか\n\n' +
          '📝 Ví dụ:\n' +
          '・ケーキをたべませんか。→ Bạn có muốn ăn bánh không?\n' +
          '・こんばん、えいがをみにいきませんか。→ Tối nay cùng đi xem phim nhé?\n' +
          '・おちゃをのみませんか。→ Mời bạn dùng một chút trà nhé?',
        examples: [],
      },
      {
        title: '2. ～ましょう (Cùng nhau làm gì)',
        explanation:
          'Mẫu ～ましょう được sử dụng để **đề nghị cùng làm một việc gì đó**, thể hiện sự chủ động và khuyến khích hành động tập thể. Thường được dùng để lên tinh thần hoặc khơi gợi sự hợp tác.\n\n' +
          '📌 Cấu trúc: Động từ thể ます (bỏ ます) + ましょう\n\n' +
          '📝 Ví dụ:\n' +
          '・にほんごをべんきょうしましょう。→ Cùng học tiếng Nhật nhé!\n' +
          '・ごはんをいっしょにたべましょう。→ Hãy ăn cơm cùng nhau nào!\n' +
          '・おたがいにがんばりましょう。→ Cùng nhau cố gắng nhé!',
        examples: [],
      },
      {
        title: '3. ～ましょうか (Đề nghị giúp đỡ ai đó)',
        explanation:
          'Mẫu ～ましょうか dùng để **đưa ra lời đề nghị giúp đỡ người khác** một cách chủ động và lịch sự. Người nói thể hiện ý định làm điều gì đó để hỗ trợ người nghe.\n\n' +
          '📌 Cấu trúc: Động từ thể ます (bỏ ます) + ましょうか\n\n' +
          '📝 Ví dụ:\n' +
          '・クラスのあとで、としょかんにいきましょうか。→ Tan học xong, mình cùng đến thư viện nhé?\n' +
          '・てつだいましょうか。→ Tôi giúp một tay nhé?\n' +
          '・かばんをもちましょうか。→ Để tôi xách cặp giúp bạn nhé.',
        examples: [],
      },
    ],
  },
  {
    id: '10',
    title: '～ないでください',
    sections: [
      {
        title: '1. Ý nghĩa và cách dùng',
        explanation:
          'Mẫu câu **～ないでください** được dùng để yêu cầu **không làm một hành động nào đó** – mang tính lịch sự, nhẹ nhàng.\n\n👉 Thường gặp trong biển báo, hướng dẫn, hoặc khi muốn nhắc nhở ai đó.',
      },
      {
        title: '2. Cấu trúc ngữ pháp',
        explanation:
          '🔹 **[Động từ thể ない] + でください**\n\nVí dụ chia thể ない:\n・たべる → たべ**ない**\n・あそぶ → あそ**ばない**\n・くる → こ**ない**\n・する → し**ない**',
      },
      {
        title: '3. Ví dụ thường gặp',
        explanation:
          '🔸 **にわで あそばないでください。**\n→ Đừng chơi ở trong vườn.\n\n' +
          '🔸 **ここに はいらないでください。あぶないんです。**\n→ Xin đừng vào đây. Nguy hiểm đấy.\n\n' +
          '🔸 **こたえを コピーしないでください。**\n→ Không được sao chép đáp án.\n\n' +
          '🔸 **かべに かかないでください。**\n→ Đừng vẽ lên tường.\n\n' +
          '🔸 **ここで しゃしんを とらないでください。**\n→ Vui lòng không chụp ảnh tại đây.',
      },
      {
        title: '4. Khi muốn nói nhẹ nhàng, thân mật',
        explanation:
          '✅ Có thể bỏ 「ください」 khi nói chuyện thân mật (với bạn bè, người thân, trẻ em,...)\n\n' +
          '🔹 **わたしに しんぱいしないでね。**\n→ Đừng lo cho tớ nhé.\n\n' +
          '🔹 **キャンディを もうたべないで。**\n→ Đừng ăn thêm kẹo nữa.\n\n' +
          '🔹 **なかないで。だいじょうぶだよ。**\n→ Đừng khóc, không sao đâu!',
      },
      {
        title: '5. Gợi ý học thêm',
        explanation:
          '🔎 Muốn dùng được mẫu này linh hoạt, bạn nên ôn lại **thể ない của động từ** (ない形).\n\n👉 Gợi ý: Tạo bảng động từ thường dùng, học cách chia sang ない để áp dụng tự nhiên hơn!',
      },
    ],
  },
  {
    id: '12',
    title: '～なければいけない / ～なくてはいけない',
    sections: [
      {
        title: '1. Mẫu câu dùng để làm gì?',
        explanation:
          '「～なければいけない」và 「～なくてはいけない」diễn tả một việc **bắt buộc phải làm**, không làm thì không ổn! 😤\n\n📍 Nghĩa: “Không thể không làm → Phải làm thôi!”.',
      },
      {
        title: '2. Cấu trúc & cách chia',
        explanation:
          '🔹 [Động từ thể ない (bỏ ない)] + なければいけない / なくてはいけない\n\n👉 Lịch sự hơn:\n・いけない → いけません\n\n📝 Ví dụ:\n・たべない → たべなければいけない\n・しない → しなければいけない\n・いかない → いかなくてはいけない',
      },
      {
        title: '3. Câu ví dụ dễ hiểu',
        explanation:
          '✅ **わたしは しゅくだいを しなければいけません。**\n→ Tôi phải làm bài tập.\n\n' +
          '✅ **たばこを やめなくてはいけない。**\n→ Phải bỏ thuốc lá thôi.\n\n' +
          '✅ **かのじょは アメリカに いかなくてはいけません。**\n→ Cô ấy phải đi Mỹ.',
      },
      {
        title: '4. So sánh với ～ならない 🆚 ～いけない',
        explanation:
          '🔸 **～ならない** → Trang trọng hơn, dùng trong văn viết, công việc.\n🔸 **～いけない** → Thân mật, dùng nhiều trong hội thoại đời thường.\n\n🧠 Nghĩa gần như giống nhau, nhưng:\n・「ならない」= mang tính **khách quan** (vì trách nhiệm)\n・「いけない」= mang tính **chủ quan** (do bản thân thấy cần)',
      },
      {
        title: '5. Hội thoại thực tế & rút gọn',
        explanation:
          '📌 Trong giao tiếp hàng ngày:\n\n✅ **Rút ngắn** như sau:\n・なければ → なきゃ\n・なくては → なくちゃ\n\n🗣 Ví dụ:\n・もう いかなきゃ！→ Phải đi thôi!\n・べんきょう しなくちゃ！→ Phải học chứ!',
      },
      {
        title: '6. Biến thể phổ biến khác',
        explanation:
          '📚 Ngoài ra, còn có:\n\n✅ **～ないと（いけない）** → Dùng rất phổ biến!\n・もう いかないと → Tôi phải đi rồi\n\n👉 Đây là cách nói tắt siêu quen thuộc của người Nhật! Bạn có thể dùng thoải mái khi trò chuyện thường ngày!',
      },
    ],
  },
  {
    id: '11',
    title: '～なければならない / ～なくてはならない',
    sections: [
      {
        title: '1. Ý nghĩa của mẫu câu',
        explanation:
          '「～なければならない」và 「～なくてはならない」được dùng khi bạn **bắt buộc phải làm một việc gì đó**, không thể tránh được.\n\n🧠 Nghĩa gốc: “Nếu không làm thì không được” → **phải làm!**',
      },
      {
        title: '2. Cấu trúc ngữ pháp',
        explanation:
          '🔹 [Động từ thể ない (bỏ ない)] + なければならない / なくてはならない\n\n👉 Dạng lịch sự:\n・ならない → なりません',
      },
      {
        title: '3. Cách chia động từ (ví dụ)',
        explanation:
          '・いく (đi) → いかない → いかなければならない\n・はなす (nói) → はなさない → はなさなくてはならない\n・する (làm) → しない → しなければなりません\n・くる (đến) → こない → こなければなりません',
      },
      {
        title: '4. Ví dụ trong đời sống',
        explanation:
          '🔸 **わたしは しゅくだいを しなければなりません。**\n→ Tôi **phải làm bài tập**.\n\n' +
          '🔸 **かれは あした レポートを ださなくてはならない。**\n→ Ngày mai anh ấy **phải nộp báo cáo**.\n\n' +
          '🔸 **たばこを やめなければならない。からだに わるいんです。**\n→ Phải **bỏ thuốc lá thôi**. Hại sức khỏe lắm!\n\n' +
          '🔸 **かのじょは らいしゅう アメリカに いかなくてはなりません。**\n→ Tuần sau cô ấy **phải đi Mỹ**.',
      },
      {
        title: '5. Mẹo ghi nhớ 🎯',
        explanation:
          '📌 Hãy nghĩ như thế này:\n\n「なければ」= nếu không…\n「ならない」= không được\n👉 Kết hợp lại: Nếu không làm… thì không được → **PHẢI LÀM!**\n\nVí dụ:\n・べんきょう**しなければならない** → Phải học!\n・やすま**なくてはならない** → Phải nghỉ ngơi thôi!',
      },
    ],
  },
  {
    id: '13',
    title: '～なくてもいい',
    sections: [
      {
        title: '1. Mẫu câu này dùng để làm gì?',
        explanation:
          'Mẫu câu 「～なくてもいい」dùng để **nói rằng không cần làm một việc gì đó cũng được**, không có vấn đề gì cả. Rất tiện cho lúc muốn "lười chính đáng" 😆',
      },
      {
        title: '2. Cấu trúc',
        explanation:
          '🔹 Động từ thể ない → bỏ ない, thêm **なくてもいい（です）**\n\nVí dụ:\n・たべない → たべなくてもいい\n・いかない → いかなくてもいい\n・しない → しなくてもいい',
      },
      {
        title: '3. Câu ví dụ thường gặp',
        explanation:
          '✅ **きょうは 学校に いかなくてもいいです。**\n→ Hôm nay không cần đến trường đâu.\n\n' +
          '✅ **この漢字は おぼえなくてもいいです。**\n→ Không cần nhớ chữ kanji này.\n\n' +
          '✅ **すきじゃないものは たべなくてもいいですよ。**\n→ Không thích thì không cần ăn đâu nè.',
      },
      {
        title: '4. Mẫu hội thoại đời thường',
        explanation:
          '👩‍🎓: このしゅくだい、ださなくてもいいですか？\n👨‍🏫: はい、ださなくてもいいですよ。\n→ Em không cần nộp bài tập này đâu.\n\n' +
          '☕: コーヒーにミルクいれる？\n😊: いれなくてもいいよ。ブラックがすきだから。\n→ Không cần cho sữa đâu, mình thích cà phê đen.',
      },
      {
        title: '5. Ghi nhớ nhanh!',
        explanation:
          '🧠 Mẫu câu này cực kỳ hữu ích khi bạn muốn nói **“Không cần thiết đâu”** theo cách nhẹ nhàng và lịch sự.\n\n📌 Hãy dùng khi muốn từ chối một cách tinh tế hoặc khi khuyên ai đó không cần quá lo lắng hay gắng sức.',
      },
    ],
  },
  {
    id: '6',
    title: '～たことがある',
    sections: [
      {
        title: '1. ～たことがある (Diễn tả kinh nghiệm đã từng)',
        explanation:
          'Cấu trúc ～たことがある được dùng để **nói về kinh nghiệm bản thân** – những việc mà người nói đã từng trải qua trong quá khứ, dù chỉ một lần.\n\n' +
          '📌 Cấu trúc: [Động từ thể た] + ことがある\n\n' +
          '📝 Ví dụ:\n' +
          '・わたしは にほんへ いったことがある。→ Tôi đã từng đi Nhật rồi。\n' +
          '・すしを たべたことがあります。→ Tôi từng ăn sushi。\n' +
          '・かれに あったことがある。→ Tôi đã gặp người đó trước đây。',
        examples: [],
      },
      {
        title: '2. ～たことがない / ～たことがありません (Phủ định – chưa từng)',
        explanation:
          'Để nói rằng **chưa bao giờ làm điều gì đó**, bạn dùng mẫu phủ định ～たことがない hoặc cách lịch sự hơn là ～たことがありません。\n\n' +
          '📌 Cấu trúc: [Động từ thể た] + ことがない / ことがありません\n\n' +
          '📝 Ví dụ:\n' +
          '・わたしは にほんへ いったことがない。→ Tôi chưa từng đi Nhật。\n' +
          '・すしを たべたことがありません。→ Tôi chưa từng ăn sushi。\n' +
          '・かれに あったことがない。→ Tôi chưa gặp người đó bao giờ。',
        examples: [],
      },
      {
        title: '3. Ghi nhớ nhanh',
        explanation:
          '🔹 **～たことがある** → Đã từng làm gì (ít nhất một lần trong đời)\n' +
          '🔹 **～たことがない / ～たことがありません** → Chưa từng trải nghiệm điều đó\n\n' +
          '💡 Mẫu câu này thường được dùng khi kể chuyện, nói về trải nghiệm du lịch, món ăn, con người hoặc những điều bạn đã làm trong quá khứ。',
        examples: [],
      },
    ],
  },
  {
    id: '9',
    title: '～たり、～たりする',
    sections: [
      {
        title: '1. Giới thiệu mẫu câu ～たり、～たりする',
        explanation:
          'Mẫu câu **～たり、～たりする** dùng để **liệt kê một vài hành động tiêu biểu** trong nhiều hành động xảy ra, thường mang ý nghĩa "nào là... rồi nào là...".\n\n' +
          '👉 **Cấu trúc:**\n[Chủ ngữ] は/が + [V-た] り、[V-た] り + します。',
      },
      {
        title: '2. Cách chia động từ',
        explanation:
          'Các động từ trong mẫu này **phải chia về thể た**, sau đó thêm 「り」:\n\n' +
          '・たべる → たべ**た** → たべたり\n' +
          '・ねる → ね**た** → ねたり\n' +
          '・あそぶ → あそ**んだ** → あそんだり',
      },
      {
        title: '3. Ví dụ liệt kê hành động tiêu biểu',
        explanation:
          '🔹 **わたしは なつやすみに テニスをしたり およいだりしました。**\n→ Nghỉ hè tôi nào là chơi tennis, nào là đi bơi v.v\n\n' +
          '🔹 **ともだちと えいがをみたり、プールにいったりします。**\n→ Tôi thường đi xem phim hoặc đi bể bơi với bạn bè.',
      },
      {
        title: '4. Dùng với hành động lặp đi lặp lại, trái nghĩa',
        explanation:
          'Mẫu này cũng được dùng để mô tả trạng thái **hành động đối lập xảy ra luân phiên**, lặp đi lặp lại:\n\n' +
          '🔹 **あめが ふったり、やんだりしています。**\n→ Trời cứ mưa rồi lại tạnh.\n\n' +
          '🔹 **東京と大阪を いったりきたりします。**\n→ Tôi cứ đi đi về về giữa Tokyo và Osaka.\n\n' +
          '🔹 **やすみのひに たべたり、ねたり しています。**\n→ Ngày nghỉ thì tôi cứ ăn rồi ngủ, ăn rồi ngủ.',
      },
      {
        title: '5. Lưu ý nhỏ',
        explanation:
          '✅ Mẫu này thường đi kèm các từ như:\n・ときどき（thỉnh thoảng）\n・よく（thường xuyên）\n・いろいろ（nhiều thứ）\n\n✅ Thường dùng ở **thì quá khứ** hoặc **thì tiếp diễn hiện tại** để mô tả hành động đang/đã diễn ra theo kiểu không đầy đủ.',
      },
    ],
  },
]
