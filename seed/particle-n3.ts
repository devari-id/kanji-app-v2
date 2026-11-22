export interface GrammarExample {
  japanese: string;
  romaji: string;
  indonesian: string;
}

export interface GrammarItem {
  id: number;
  romaji: string;
  grammar: string;
  meaning: string;
  level: string;
  examples: GrammarExample[];
}

export const grammarListN3: GrammarItem[] = [
  {
    id: 1,
    romaji: "ba ii",
    grammar: "ばいい",
    meaning: "sebaiknya; bisa; alangkah baiknya jika ~",
    level: "N3",
    examples: [
      {
        japanese: "分からないことがあれば、先生に聞けばいい。",
        romaji: "Wakaranai koto ga areba, sensei ni kikeba ii.",
        indonesian:
          "Kalau ada hal yang tidak dimengerti, sebaiknya tanya saja ke guru.",
      },
      {
        japanese: "明日は早いから、もう寝ればいいよ。",
        romaji: "Ashita wa hayai kara, mou nereba ii yo.",
        indonesian:
          "Karena besok pagi-pagi, sebaiknya kamu tidur saja sekarang.",
      },
      {
        japanese: "何時に行けばいいですか。",
        romaji: "Nanji ni ikeba ii desu ka.",
        indonesian: "Sebaiknya saya pergi jam berapa?",
      },
    ],
  },
  {
    id: 2,
    romaji: "ba~hodo",
    grammar: "ば～ほど",
    meaning: "semakin... semakin ~",
    level: "N3",
    examples: [
      {
        japanese: "日本語は勉強すればするほど面白くなる。",
        romaji: "Nihongo wa benkyou sureba suru hodo omoshiroku naru.",
        indonesian: "Bahasa Jepang semakin dipelajari semakin menjadi menarik.",
      },
      {
        japanese: "この曲は聞けば聞くほど好きになる。",
        romaji: "Kono kyoku wa kikeba kiku hodo suki ni naru.",
        indonesian: "Lagu ini semakin sering didengar semakin kusuka.",
      },
      {
        japanese: "安ければ安いほど嬉しいです。",
        romaji: "Yasukereba yasui hodo ureshii desu.",
        indonesian: "Semakin murah, saya semakin senang.",
      },
    ],
  },
  {
    id: 3,
    romaji: "ba~noni",
    grammar: "ば～のに",
    meaning: "seandainya; padahal seharusnya ~ (penyesalan)",
    level: "N3",
    examples: [
      {
        japanese: "もっと早く起きればよかったのに。",
        romaji: "Motto hayaku okireba yokatta noni.",
        indonesian: "Seandainya tadi bangun lebih pagi (padahal tidak).",
      },
      {
        japanese: "傘を持っていけば濡れなかったのに。",
        romaji: "Kasa o motte ikeba nurenakatta noni.",
        indonesian: "Seandainya membawa payung, pasti tidak akan basah kuyup.",
      },
      {
        japanese: "一言言ってくれれば手伝ったのに。",
        romaji: "Hitokoto itte kurereba tetsudatta noni.",
        indonesian:
          "Padahal kalau bilang sepatah kata saja, pasti sudah kubantu.",
      },
    ],
  },
  {
    id: 4,
    romaji: "hodo",
    grammar: "ほど",
    meaning: "tingkat; sejauh; sampai-sampai ~",
    level: "N3",
    examples: [
      {
        japanese: "昨日は歩けないほど疲れた。",
        romaji: "Kinou wa arukenai hodo tsukareta.",
        indonesian: "Kemarin saya lelah sampai-sampai tidak bisa berjalan.",
      },
      {
        japanese: "泣きたいほど嬉しかった。",
        romaji: "Nakitai hodo ureshikatta.",
        indonesian: "Saya senang sampai rasanya ingin menangis.",
      },
      {
        japanese: "死ぬほどお腹が空いている。",
        romaji: "Shinu hodo onaka ga suite iru.",
        indonesian: "Saya lapar setengah mati.",
      },
    ],
  },
  {
    id: 5,
    romaji: "hodo~nai",
    grammar: "ほど～ない",
    meaning: "tidak se-... ~",
    level: "N3",
    examples: [
      {
        japanese: "今年の夏は去年ほど暑くない。",
        romaji: "Kotoshi no natsu wa kyonen hodo atsukunai.",
        indonesian: "Musim panas tahun ini tidak sepanas tahun lalu.",
      },
      {
        japanese: "彼の日本語は私ほど上手ではない。",
        romaji: "Kare no nihongo wa watashi hodo jouzu dewa nai.",
        indonesian: "Bahasa Jepangnya tidak sepandai bahasa Jepang saya.",
      },
      {
        japanese: "この映画は思ったほど面白くなかった。",
        romaji: "Kono eiga wa omotta hodo omoshirokunakatta.",
        indonesian: "Film ini tidak semenarik yang kubayangkan.",
      },
    ],
  },
  {
    id: 6,
    romaji: "ikura~temo",
    grammar: "いくら～ても",
    meaning: "seberapa pun ~; bagaimanapun ~ tetap saja",
    level: "N3",
    examples: [
      {
        japanese: "いくら考えても答えが分からない。",
        romaji: "Ikura kangaete mo kotae ga wakaranai.",
        indonesian: "Seberapa pun dipikirkan, jawabannya tetap tidak tahu.",
      },
      {
        japanese: "いくら食べても太らない人が羨ましい。",
        romaji: "Ikura tabete mo futoranai hito ga urayamashii.",
        indonesian:
          "Iri rasanya dengan orang yang seberapa banyak pun makan tetap tidak gemuk.",
      },
      {
        japanese: "いくら安くても、使わないものは買わない。",
        romaji: "Ikura yasukute mo, tsukawanai mono wa kawanai.",
        indonesian:
          "Semurah apa pun, barang yang tidak dipakai tidak akan kubeli.",
      },
    ],
  },
  {
    id: 7,
    romaji: "kara~ni kakete",
    grammar: "から〜にかけて",
    meaning: "dari [A] hingga [B] (rentang waktu/tempat)",
    level: "N3",
    examples: [
      {
        japanese: "今夜から明日の朝にかけて雨が降るでしょう。",
        romaji: "Kon'ya kara ashita no asa ni kakete ame ga furu deshou.",
        indonesian:
          "Dari malam ini hingga besok pagi sepertinya akan turun hujan.",
      },
      {
        japanese: "春から夏にかけて、この公園は花でいっぱいになる。",
        romaji:
          "Haru kara natsu ni kakete, kono kouen wa hana de ippai ni naru.",
        indonesian:
          "Dari musim semi hingga musim panas, taman ini penuh dengan bunga.",
      },
      {
        japanese: "関東から東北にかけて大きな地震があった。",
        romaji: "Kantou kara Touhoku ni kakete ookina jishin ga atta.",
        indonesian:
          "Terjadi gempa besar mulai dari wilayah Kanto hingga Tohoku.",
      },
    ],
  },
  {
    id: 8,
    romaji: "kiri",
    grammar: "きり",
    meaning: "hanya; cuma; sejak ~ (belum pernah lagi)",
    level: "N3",
    examples: [
      {
        japanese: "二人きりで話したいことがあります。",
        romaji: "Futari kiri de hanashitai koto ga arimasu.",
        indonesian: "Ada hal yang ingin kubicarakan berdua saja.",
      },
      {
        japanese: "彼とは去年会ったきり、一度も連絡していない。",
        romaji: "Kare to wa kyonen atta kiri, ichido mo renraku shite inai.",
        indonesian:
          "Sejak bertemu dengannya tahun lalu, saya tidak pernah menghubunginya lagi.",
      },
      {
        japanese: "部屋に一人きりで寂しい。",
        romaji: "Heya ni hitori kiri de sabishii.",
        indonesian: "Sendirian saja di kamar terasa sepi.",
      },
    ],
  },
  {
    id: 9,
    romaji: "kke",
    grammar: "っけ",
    meaning: "ya? / kan? (akhiran kasual untuk mengingat kembali sesuatu)",
    level: "N3",
    examples: [
      {
        japanese: "明日の会議は何時からだっけ？",
        romaji: "Ashita no kaigi wa nanji kara dakke?",
        indonesian: "Rapat besok mulai jam berapa ya?",
      },
      {
        japanese: "あの人の名前、何だっけ？",
        romaji: "Ano hito no namae, nan dakke?",
        indonesian: "Nama orang itu siapa ya?",
      },
      {
        japanese: "先週の日曜日、雨降ったっけ？",
        romaji: "Senshuu no nichiyoubi, ame futtakke?",
        indonesian: "Hari Minggu minggu lalu turun hujan nggak ya?",
      },
    ],
  },
  {
    id: 10,
    romaji: "koso",
    grammar: "こそ",
    meaning: "justru; pasti; benar-benar ~ (penekanan)",
    level: "N3",
    examples: [
      {
        japanese: "こちらこそ、よろしくお願いします。",
        romaji: "Kochira koso, yoroshiku onegai shimasu.",
        indonesian: "Justru saya yang mohon bantuannya.",
      },
      {
        japanese: "今年こそ日本語能力試験に合格したい。",
        romaji: "Kotoshi koso Nihongo Nouryoku Shiken ni goukaku shitai.",
        indonesian: "Tahun ini pasti saya ingin lulus JLPT.",
      },
      {
        japanese: "愛情こそが人生で一番大切だ。",
        romaji: "Aijou koso ga jinsei de ichiban taisetsu da.",
        indonesian: "Kasih sayanglah yang paling penting dalam hidup.",
      },
    ],
  },
  {
    id: 11,
    romaji: "koto",
    grammar: "こと",
    meaning: "harus melakukan ~ (instruksi/aturan tertulis)",
    level: "N3",
    examples: [
      {
        japanese: "レポートは金曜日までに提出すること。",
        romaji: "Repooto wa kin'youbi made ni teishutsu suru koto.",
        indonesian: "Laporan harus dikumpulkan paling lambat hari Jumat.",
      },
      {
        japanese: "試験中は携帯電話の電源を切ること。",
        romaji: "Shikenchuu wa keitai denwa no dengen o kiru koto.",
        indonesian: "Selama ujian berlangsung, ponsel harus dimatikan.",
      },
      {
        japanese: "廊下を走らないこと。",
        romaji: "Rouka o hashiranai koto.",
        indonesian: "Dilarang berlari di koridor.",
      },
    ],
  },
  {
    id: 12,
    romaji: "kurai / gurai",
    grammar: "くらい / ぐらい",
    meaning: "kira-kira; sekitar; setidaknya; sampai-sampai ~",
    level: "N3",
    examples: [
      {
        japanese: "家から駅まで歩いて10分ぐらいかかります。",
        romaji: "Ie kara eki made aruite juppun gurai kakarimasu.",
        indonesian:
          "Dari rumah ke stasiun memakan waktu sekitar 10 menit jalan kaki.",
      },
      {
        japanese: "自分の名前くらい漢字で書けます。",
        romaji: "Jibun no namae kurai kanji de kakemasu.",
        indonesian:
          "Setidaknya nama sendiri saja saya bisa menulisnya dalam kanji.",
      },
      {
        japanese: "今日は声が出ないくらい喉が痛い。",
        romaji: "Kyou wa koe ga denai kurai nodo ga itai.",
        indonesian:
          "Hari ini tenggorokanku sakit sampai-sampai suara tidak keluar.",
      },
    ],
  },
  {
    id: 13,
    romaji: "kuse ni",
    grammar: "くせに",
    meaning: "padahal; meskipun ~ (nada mengkritik/meremehkan)",
    level: "N3",
    examples: [
      {
        japanese: "彼は自分では何もできないくせに、文句ばかり言う。",
        romaji: "Kare wa jibun dewa nanimo dekinai kuse ni, monku bakari iu.",
        indonesian:
          "Padahal dia sendiri tidak bisa melakukan apa-apa, tapi kerjanya mengeluh terus.",
      },
      {
        japanese: "知っているくせに、教えてくれない。",
        romaji: "Shitte iru kuse ni, oshiete kurenai.",
        indonesian: "Padahal dia tahu, tapi tidak mau memberi tahu.",
      },
      {
        japanese: "子供のくせに、そんな言葉を使わないで。",
        romaji: "Kodomo no kuse ni, sonna kotoba o tsukawanaide.",
        indonesian:
          "Padahal masih anak-anak, jangan pakai kata-kata seperti itu.",
      },
    ],
  },
  {
    id: 14,
    romaji: "mo~ba~mo",
    grammar: "も～ば～も",
    meaning: "baik... maupun... ~",
    level: "N3",
    examples: [
      {
        japanese: "この店は味もよければ、値段も安い。",
        romaji: "Kono mise wa aji mo yokereba, nedan mo yasui.",
        indonesian: "Toko ini baik rasanya enak maupun harganya murah.",
      },
      {
        japanese: "人生には楽しいこともあれば、悲しいこともある。",
        romaji: "Jinsei ni wa tanoshii koto mo areba, kanashii koto mo aru.",
        indonesian:
          "Dalam hidup, ada kalanya menyenangkan dan ada kalanya menyedihkan.",
      },
      {
        japanese: "彼はお金もなければ、時間もない。",
        romaji: "Kare wa okane mo nakereba, jikan mo nai.",
        indonesian: "Dia baik uang maupun waktu tidak punya.",
      },
    ],
  },
  {
    id: 15,
    romaji: "moshimo~tara",
    grammar: "もしも〜たら",
    meaning: "seandainya; jika saja ~",
    level: "N3",
    examples: [
      {
        japanese: "もしも宝くじが当たったら、世界一周旅行をしたい。",
        romaji: "Moshimo takarakuji ga atattara, sekai isshuu ryokou o shitai.",
        indonesian: "Seandainya menang lotre, saya ingin keliling dunia.",
      },
      {
        japanese: "もしも時間を戻せたら、あの日に戻りたい。",
        romaji: "Moshimo jikan o modosetara, ano hi ni modoritai.",
        indonesian:
          "Seandainya waktu bisa diputar kembali, saya ingin kembali ke hari itu.",
      },
      {
        japanese: "もしも雨が降ったら、試合は中止になります。",
        romaji: "Moshimo ame ga futtara, shiai wa chuushi ni narimasu.",
        indonesian: "Jika turun hujan, pertandingan akan dibatalkan.",
      },
    ],
  },
  {
    id: 16,
    romaji: "nagara mo",
    grammar: "ながらも",
    meaning: "meskipun; walaupun ~",
    level: "N3",
    examples: [
      {
        japanese: "彼は狭いながらも、きれいな部屋に住んでいる。",
        romaji: "Kare wa semai nagara mo, kirei na heya ni sunde iru.",
        indonesian: "Meskipun sempit, dia tinggal di kamar yang bersih.",
      },
      {
        japanese: "体に悪いと知りながらも、タバコがやめられない。",
        romaji: "Karada ni warui to shiri nagara mo, tabako ga yamerarenai.",
        indonesian:
          "Walaupun tahu buruk bagi tubuh, dia tidak bisa berhenti merokok.",
      },
      {
        japanese: "残念ながらも、今回の計画は中止になった。",
        romaji: "Zannen nagara mo, konkai no keikaku wa chuushi ni natta.",
        indonesian: "Meskipun disayangkan, rencana kali ini dibatalkan.",
      },
    ],
  },
  {
    id: 17,
    romaji: "nanka / nante / nado",
    grammar: "なんか / なんて / など",
    meaning: "seperti; hal-hal semacam ~ (contoh/merendah/meremehkan)",
    level: "N3",
    examples: [
      {
        japanese: "私なんかまだまだ未熟です。",
        romaji: "Watashi nanka madamada mijuku desu.",
        indonesian: "Orang seperti saya ini masih jauh dari kata matang.",
      },
      {
        japanese: "幽霊なんて信じていません。",
        romaji: "Yuurei nante shinjite imasen.",
        indonesian: "Hal semacam hantu itu saya tidak percaya.",
      },
      {
        japanese: "休みの日は本を読んだり、映画を見たりなどして過ごします。",
        romaji:
          "Yasumi no hi wa hon o yondari, eiga o mitari nado shite sugoshimasu.",
        indonesian:
          "Pada hari libur saya menghabiskan waktu dengan membaca buku, menonton film, dan lain-lain.",
      },
    ],
  },
  {
    id: 18,
    romaji: "ni shite mo",
    grammar: "にしても",
    meaning: "meskipun; kalaupun; terlepas dari ~",
    level: "N3",
    examples: [
      {
        japanese: "忙しいにしても、連絡ぐらいはできるはずだ。",
        romaji: "Isogashii ni shite mo, renraku gurai wa dekiru hazu da.",
        indonesian: "Meskipun sibuk, seharusnya memberi kabar saja masih bisa.",
      },
      {
        japanese: "行くにしても行かないにしても、早めに教えてください。",
        romaji:
          "Iku ni shite mo ikanai ni shite mo, hayame ni oshiete kudasai.",
        indonesian:
          "Kalaupun pergi ataupun tidak pergi, tolong beri tahu lebih awal.",
      },
      {
        japanese: "冗談にしても、それは言い過ぎだ。",
        romaji: "Joudan ni shite mo, sore wa iisugi da.",
        indonesian: "Meskipun cuma bercanda, itu sudah keterlaluan.",
      },
    ],
  },
  {
    id: 19,
    romaji: "ni shite wa",
    grammar: "にしては",
    meaning: "untuk ukuran ~ (di luar dugaan dari standar biasanya)",
    level: "N3",
    examples: [
      {
        japanese: "彼は日本に半年しか住んでいないにしては、日本語が上手だ。",
        romaji:
          "Kare wa Nihon ni hantoshi shika sunde inai ni shite wa, nihongo ga jouzu da.",
        indonesian:
          "Untuk ukuran baru tinggal setengah tahun di Jepang, bahasa Jepangnya pandai.",
      },
      {
        japanese: "このカバンは高いにしては、あまり丈夫ではない。",
        romaji: "Kono kaban wa takai ni shite wa, amari joubu dewa nai.",
        indonesian: "Untuk ukuran mahal, tas ini tidak terlalu kuat.",
      },
      {
        japanese: "冬にしては、今日はとても暖かい。",
        romaji: "Fuyu ni shite wa, kyou wa totemo atatakai.",
        indonesian: "Untuk ukuran musim dingin, hari ini sangat hangat.",
      },
    ],
  },
  {
    id: 20,
    romaji: "ni totte",
    grammar: "にとって",
    meaning: "bagi; menurut sudut pandang ~",
    level: "N3",
    examples: [
      {
        japanese: "私にとって、家族が一番大切です。",
        romaji: "Watashi ni totte, kazoku ga ichiban taisetsu desu.",
        indonesian: "Bagi saya, keluarga adalah yang paling penting.",
      },
      {
        japanese: "留学生にとって、漢字の勉強は大変だ。",
        romaji: "Ryuugakusei ni totte, kanji no benkyou wa taihen da.",
        indonesian: "Bagi mahasiswa asing, belajar kanji itu berat.",
      },
      {
        japanese: "この問題は私たちにとって非常に重要だ。",
        romaji: "Kono mondai wa watashitachi ni totte hijou ni juuyou da.",
        indonesian: "Masalah ini sangat penting bagi kami.",
      },
    ],
  },
  {
    id: 21,
    romaji: "ni tsuite",
    grammar: "について",
    meaning: "tentang; mengenai ~",
    level: "N3",
    examples: [
      {
        japanese: "日本の文化について研究しています。",
        romaji: "Nihon no bunka ni tsuite kenkyuu shite imasu.",
        indonesian: "Saya sedang meneliti tentang budaya Jepang.",
      },
      {
        japanese: "その件については、後で話し合いましょう。",
        romaji: "Sono ken ni tsuite wa, ato de hanashiaimashou.",
        indonesian: "Mengenai hal itu, mari kita bicarakan nanti.",
      },
      {
        japanese: "自分の将来についてよく考えたほうがいい。",
        romaji: "Jibun no shourai ni tsuite yoku kangaeta hou ga ii.",
        indonesian:
          "Sebaiknya pikirkan baik-baik tentang masa depanmu sendiri.",
      },
    ],
  },
  {
    id: 22,
    romaji: "ni wa",
    grammar: "には",
    meaning: "untuk tujuan; demi; agar bisa ~",
    level: "N3",
    examples: [
      {
        japanese: "日本へ留学するには、お金がたくさん必要だ。",
        romaji: "Nihon e ryuugaku suru ni wa, okane ga takusan hitsuyou da.",
        indonesian: "Untuk kuliah ke Jepang, dibutuhkan banyak uang.",
      },
      {
        japanese: "駅へ行くには、この道をまっすぐ行ってください。",
        romaji: "Eki e iku ni wa, kono michi o massugu itte kudasai.",
        indonesian: "Untuk pergi ke stasiun, silakan jalan lurus di jalan ini.",
      },
      {
        japanese: "夢を叶えるには、毎日の努力が欠かせない。",
        romaji: "Yume o kanaeru ni wa, mainichi no doryoku ga kakasenai.",
        indonesian:
          "Demi mewujudkan mimpi, usaha setiap hari tidak boleh terlewatkan.",
      },
    ],
  },
  {
    id: 23,
    romaji: "sae",
    grammar: "さえ",
    meaning: "bahkan; sampai-sampai ~ (tidak sanggup/bisa)",
    level: "N3",
    examples: [
      {
        japanese: "忙しくて、昼ごはんを食べる時間さえない。",
        romaji: "Isogashikute, hirugohan o taberu jikan sae nai.",
        indonesian:
          "Saking sibuknya, bahkan waktu untuk makan siang pun tidak ada.",
      },
      {
        japanese: "そんな簡単なことは子供さえ知っている。",
        romaji: "Sonna kantan na koto wa kodomo sae shitte iru.",
        indonesian: "Hal semudah itu bahkan anak kecil pun tahu.",
      },
      {
        japanese: "彼はひらがなさえ書けない。",
        romaji: "Kare wa hiragana sae kakenai.",
        indonesian: "Dia bahkan hiragana pun tidak bisa menulisnya.",
      },
    ],
  },
  {
    id: 24,
    romaji: "sae~ba",
    grammar: "さえ～ば",
    meaning: "asalkan; jika saja ~ (satu syarat terpenuhi, semua beres)",
    level: "N3",
    examples: [
      {
        japanese: "体さえ健康であれば、何でもできる。",
        romaji: "Karada sae kenkou de areba, nandemo dekiru.",
        indonesian: "Asalkan tubuh sehat, apa pun bisa dilakukan.",
      },
      {
        japanese: "お金さえあれば、幸せになれるわけではない。",
        romaji: "Okane sae areba, shiawase ni nareru wake dewa nai.",
        indonesian: "Bukan berarti asalkan punya uang pasti bisa bahagia.",
      },
      {
        japanese: "薬を飲みさえすれば、すぐに治りますよ。",
        romaji: "Kusuri o nomi sae sureba, sugu ni naorimasu yo.",
        indonesian: "Asalkan minum obat, pasti akan segera sembuh kok.",
      },
    ],
  },
  {
    id: 25,
    romaji: "shikanai",
    grammar: "しかない",
    meaning: "tidak ada pilihan lain selain; terpaksa harus ~",
    level: "N3",
    examples: [
      {
        japanese: "終電がなくなったので、歩いて帰るしかない。",
        romaji: "Shuuden ga nakunatta node, aruite kaeru shikanai.",
        indonesian:
          "Karena kereta terakhir sudah lewat, tidak ada pilihan lain selain pulang jalan kaki.",
      },
      {
        japanese: "誰も手伝ってくれないから、自分でやるしかない。",
        romaji: "Daremo tetsudatte kurenai kara, jibun de yaru shikanai.",
        indonesian:
          "Karena tidak ada yang membantu, terpaksa harus dikerjakan sendiri.",
      },
      {
        japanese: "合格するためには、一生懸命勉強するしかない。",
        romaji: "Goukaku suru tame ni wa, isshoukenmei benkyou suru shikanai.",
        indonesian:
          "Demi lulus, satu-satunya cara hanyalah belajar mati-matian.",
      },
    ],
  },
  {
    id: 26,
    romaji: "suuryou + wa",
    grammar: "数量 + は【すうりょう + は】",
    meaning: "setidaknya; paling sedikit ~ (diikuti angka/jumlah)",
    level: "N3",
    examples: [
      {
        japanese: "パーティーには30人は来ると思います。",
        romaji: "Paatii ni wa sanjuunin wa kuru to omoimasu.",
        indonesian: "Saya rasa ke pesta setidaknya akan datang 30 orang.",
      },
      {
        japanese: "この仕事が終わるまで、あと2時間はかかるだろう。",
        romaji: "Kono shigoto ga owaru made, ato nijikan wa kakaru darou.",
        indonesian:
          "Sampai pekerjaan ini selesai, setidaknya masih butuh 2 jam lagi.",
      },
      {
        japanese: "毎日最低でも1時間は勉強するようにしている。",
        romaji:
          "Mainichi saitei demo ichijikan wa benkyou suru you ni shite iru.",
        indonesian: "Setiap hari saya usahakan belajar setidaknya 1 jam.",
      },
    ],
  },
  {
    id: 27,
    romaji: "ta mono da",
    grammar: "たものだ",
    meaning: "dulu sering; dulu biasa ~ (mengenang masa lalu)",
    level: "N3",
    examples: [
      {
        japanese: "子供のころ、よくこの川で泳いだものだ。",
        romaji: "Kodomo no koro, yoku kono kawa de oyoida mono da.",
        indonesian: "Waktu kecil, saya dulu sering berenang di sungai ini.",
      },
      {
        japanese: "学生時代はよく友達と朝まで語り合ったものだ。",
        romaji:
          "Gakusei jidai wa yoku tomodachi to asa made katariatta mono da.",
        indonesian:
          "Semasa kuliah dulu saya sering mengobrol dengan teman sampai pagi.",
      },
      {
        japanese: "昔はよく祖母の家に遊びに行ったものだ。",
        romaji: "Mukashi wa yoku sobo no ie ni asobi ni itta mono da.",
        indonesian: "Dulu saya sering main ke rumah nenek.",
      },
    ],
  },
  {
    id: 28,
    romaji: "tatte",
    grammar: "たって",
    meaning: "walaupun; meskipun; seberapa pun ~ (bentuk kasual dari ても)",
    level: "N3",
    examples: [
      {
        japanese: "今さら謝ったって、もう遅いよ。",
        romaji: "Imasara ayamatatte, mou osoi yo.",
        indonesian: "Minta maaf sekarang pun sudah terlambat.",
      },
      {
        japanese: "いくら急いだって、約束の時間には間に合わない。",
        romaji: "Ikura isoidatte, yakusoku no jikan ni wa maniawanai.",
        indonesian:
          "Seberapa pun buru-burunya, tetap tidak akan sempat untuk waktu janjian.",
      },
      {
        japanese: "誰が何と言ったって、私は自分の夢を諦めない。",
        romaji:
          "Dare ga nan to ittatte, watashi wa jibun no yume o akiramenai.",
        indonesian:
          "Siapa pun berkata apa, saya tidak akan menyerah pada mimpi saya.",
      },
    ],
  },
  {
    id: 29,
    romaji: "to ii / tara ii",
    grammar: "といい / たらいい",
    meaning: "semoga; alangkah baiknya jika; sebaiknya ~",
    level: "N3",
    examples: [
      {
        japanese: "明日、晴れるといいですね。",
        romaji: "Ashita, hareru to ii desu ne.",
        indonesian: "Semoga besok cuacanya cerah ya.",
      },
      {
        japanese: "試験に合格できるといいなあ。",
        romaji: "Shiken ni goukaku dekiru to ii naa.",
        indonesian: "Semoga saja saya bisa lulus ujian.",
      },
      {
        japanese: "頭が痛いなら、早く薬を飲んだらいいよ。",
        romaji: "Atama ga itai nara, hayaku kusuri o nondara ii yo.",
        indonesian: "Kalau sakit kepala, sebaiknya cepat minum obat.",
      },
    ],
  },
  {
    id: 30,
    romaji: "toshite",
    grammar: "として",
    meaning: "sebagai; dalam kapasitas/peran sebagai ~",
    level: "N3",
    examples: [
      {
        japanese: "彼は留学生として日本に来ました。",
        romaji: "Kare wa ryuugakusei toshite Nihon ni kimashita.",
        indonesian: "Dia datang ke Jepang sebagai mahasiswa asing.",
      },
      {
        japanese: "この町は観光地として有名です。",
        romaji: "Kono machi wa kankouchi toshite yuumei desu.",
        indonesian: "Kota ini terkenal sebagai tempat wisata.",
      },
      {
        japanese: "趣味としてピアノを弾いています。",
        romaji: "Shumi toshite piano o hiite imasu.",
        indonesian: "Saya bermain piano sebagai hobi.",
      },
    ],
  },
  {
    id: 31,
    romaji: "towa kagiranai",
    grammar: "とは限らない【とはかぎらない】",
    meaning: "belum tentu; tidak selalu benar bahwa ~",
    level: "N3",
    examples: [
      {
        japanese: "高いものが必ずしも良いものとは限らない。",
        romaji: "Takai mono ga kanarazushimo yoi mono towa kagiranai.",
        indonesian:
          "Barang yang mahal belum tentu merupakan barang yang bagus.",
      },
      {
        japanese: "日本人だからといって、全員が漢字を全部書けるとは限らない。",
        romaji:
          "Nihonjin da kara to itte, zen'in ga kanji o zenbu kakeru towa kagiranai.",
        indonesian:
          "Meskipun orang Jepang, belum tentu semuanya bisa menulis semua kanji.",
      },
      {
        japanese: "天気予報がいつも当たるとは限らない。",
        romaji: "Tenki yohou ga itsumo ataru towa kagiranai.",
        indonesian: "Ramalan cuaca tidak selalu tepat.",
      },
    ],
  },
  {
    id: 32,
    romaji: "wa betsu toshite",
    grammar: "は別として【はべつとして】",
    meaning: "terlepas dari; mengesampingkan; kecuali ~",
    level: "N3",
    examples: [
      {
        japanese: "値段は別として、デザインはとても気に入っている。",
        romaji: "Nedan wa betsu toshite, dezain wa totemo ki ni itte iru.",
        indonesian: "Terlepas dari harganya, saya sangat menyukai desainnya.",
      },
      {
        japanese: "冗談は別として、本当にどうするつもりなの？",
        romaji: "Joudan wa betsu toshite, hontou ni dou suru tsumori na no?",
        indonesian:
          "Bercandanya dikesampingkan dulu, kamu benar-benar berencana bagaimana?",
      },
      {
        japanese: "勝つか負けるかは別として、全力を尽くそう。",
        romaji: "Katsu ka makeru ka wa betsu toshite, zenryoku o tsukusou.",
        indonesian:
          "Terlepas dari menang atau kalah, mari kita kerahkan seluruh kemampuan.",
      },
    ],
  },
  {
    id: 33,
    romaji: "yorimo",
    grammar: "よりも",
    meaning: "daripada; dibandingkan dengan ~",
    level: "N3",
    examples: [
      {
        japanese: "電車で行くよりも、バスで行くほうが安い。",
        romaji: "Densha de iku yorimo, basu de iku hou ga yasui.",
        indonesian: "Daripada pergi naik kereta, pergi naik bus lebih murah.",
      },
      {
        japanese: "思ったよりもテストは簡単だった。",
        romaji: "Omotta yorimo tesuto wa kantan datta.",
        indonesian: "Tesnya lebih mudah daripada yang kubayangkan.",
      },
      {
        japanese: "東京は大阪よりも人口が多い。",
        romaji: "Toukyou wa Oosaka yorimo jinkou ga ooi.",
        indonesian: "Tokyo populasinya lebih banyak dibandingkan Osaka.",
      },
    ],
  },
];
