export interface KanjiSentenceExample {
  japanese: string;
  reading: string;
  english: string;
  meaning: string;
}

export interface KanjiVocabExample {
  word: string;
  reading: string;
  meaning: string;
  sentence: KanjiSentenceExample;
}

export interface KanjiItem {
  id: number;
  kanji: string;
  onyomi: string;
  kunyomi: string;
  meaning: string;
  examples: KanjiVocabExample[];
}

export const kanjiListN3Part1: KanjiItem[] = [
  {
    id: 1,
    kanji: "政",
    onyomi: "セイ",
    kunyomi: "まつりごと",
    meaning: "politik, pemerintahan",
    examples: [
      {
        word: "政治",
        reading: "seiji",
        meaning: "politik",
        sentence: {
          japanese: "若者の政治に対する関心が高まっている。",
          reading: "Wakamono no seiji ni taisuru kanshin ga takamatte iru.",
          english: "Young people's interest in politics is growing.",
          meaning: "Minat anak muda terhadap politik semakin meningkat.",
        },
      },
      {
        word: "政府",
        reading: "seifu",
        meaning: "pemerintah",
        sentence: {
          japanese: "政府は新しい対策を発表した。",
          reading: "Seifu wa atarashii taisaku o happyou shita.",
          english: "The government announced new countermeasures.",
          meaning: "Pemerintah mengumumkan langkah penanggulangan yang baru.",
        },
      },
      {
        word: "政策",
        reading: "seisaku",
        meaning: "kebijakan",
        sentence: {
          japanese: "その政策については賛否両論がある。",
          reading: "Sono seisaku ni tsuite wa sanpi ryouron ga aru.",
          english: "There are pros and cons regarding that policy.",
          meaning: "Mengenai kebijakan itu, ada pro dan kontra.",
        },
      },
    ],
  },
  {
    id: 2,
    kanji: "議",
    onyomi: "ギ",
    kunyomi: "",
    meaning: "pertimbangan, perundingan, perdebatan",
    examples: [
      {
        word: "会議",
        reading: "kaigi",
        meaning: "rapat, konferensi",
        sentence: {
          japanese: "午後二時から会議を開くことになった。",
          reading: "Gogo niji kara kaigi o hiraku koto ni natta.",
          english: "It has been decided that a meeting will be held from 2 PM.",
          meaning: "Diputuskan bahwa rapat akan diadakan mulai jam dua siang.",
        },
      },
      {
        word: "議論",
        reading: "giron",
        meaning: "diskusi, perdebatan",
        sentence: {
          japanese: "最後まで議論したにもかかわらず、結論が出なかった。",
          reading:
            "Saigo made giron shita ni mo kakawarazu, ketsuron ga denakatta.",
          english:
            "Despite discussing until the end, no conclusion was reached.",
          meaning:
            "Meskipun sudah berdiskusi sampai akhir, kesimpulan tidak keluar.",
        },
      },
      {
        word: "議員",
        reading: "giin",
        meaning: "anggota dewan/parlemen",
        sentence: {
          japanese: "市議会議員の選挙が来月行われる。",
          reading: "Shigikai giin no senkyo ga raigetsu okonawareru.",
          english:
            "The election for city council members will be held next month.",
          meaning: "Pemilihan anggota DPRD kota akan dilaksanakan bulan depan.",
        },
      },
    ],
  },
  {
    id: 3,
    kanji: "民",
    onyomi: "ミン",
    kunyomi: "たみ",
    meaning: "rakyat, bangsa, warga",
    examples: [
      {
        word: "市民",
        reading: "shimin",
        meaning: "warga kota",
        sentence: {
          japanese: "この図書館は市民に広く利用されている。",
          reading: "Kono toshokan wa shimin ni hiroku riyou sarete iru.",
          english: "This library is widely used by the citizens.",
          meaning: "Perpustakaan ini digunakan secara luas oleh warga kota.",
        },
      },
      {
        word: "国民",
        reading: "kokumin",
        meaning: "warga negara, rakyat",
        sentence: {
          japanese: "国民にとって大切な問題だ。",
          reading: "Kokumin ni totte taisetsu na mondai da.",
          english: "It is an important issue for the citizens.",
          meaning: "Ini masalah yang penting bagi warga negara.",
        },
      },
      {
        word: "住民",
        reading: "juumin",
        meaning: "penduduk",
        sentence: {
          japanese: "地域の住民が協力して掃除をした。",
          reading: "Chiiki no juumin ga kyouryoku shite souji o shita.",
          english: "Local residents cooperated to clean up.",
          meaning: "Penduduk setempat bekerja sama membersihkan lingkungan.",
        },
      },
    ],
  },
  {
    id: 4,
    kanji: "連",
    onyomi: "レン",
    kunyomi: "つら(なる), つ(れる)",
    meaning: "membawa serta, memimpin, bergabung, menghubungkan",
    examples: [
      {
        word: "連絡",
        reading: "renraku",
        meaning: "menghubungi, kontak",
        sentence: {
          japanese: "着いたらすぐ連絡を入れるようにしてください。",
          reading: "Tsuitara sugu renraku o ireru you ni shite kudasai.",
          english: "Please make sure to get in touch as soon as you arrive.",
          meaning: "Tolong usahakan langsung menghubungi begitu tiba.",
        },
      },
      {
        word: "連れて行く",
        reading: "tsurete iku",
        meaning: "mengajak/membawa pergi",
        sentence: {
          japanese: "週末は子供を公園へ連れて行くつもりだ。",
          reading: "Shuumatsu wa kodomo o kouen e tsurete iku tsumori da.",
          english: "I plan to take the kids to the park on the weekend.",
          meaning: "Akhir pekan ini saya berencana mengajak anak ke taman.",
        },
      },
      {
        word: "関連",
        reading: "kanren",
        meaning: "keterkaitan, hubungan",
        sentence: {
          japanese: "このニュースに関連した資料を集めている。",
          reading: "Kono nyuusu ni kanren shita shiryou o atsumete iru.",
          english: "I am gathering materials related to this news.",
          meaning:
            "Saya sedang mengumpulkan materi yang berkaitan dengan berita ini.",
        },
      },
    ],
  },
  {
    id: 5,
    kanji: "対",
    onyomi: "タイ, ツイ",
    kunyomi: "",
    meaning: "berlawanan, genap, setara, melawan, anti-, membandingkan",
    examples: [
      {
        word: "反対",
        reading: "hantai",
        meaning: "menentang, berlawanan",
        sentence: {
          japanese: "両親に反対されても、自分の道を進む。",
          reading: "Ryoushin ni hantai sarete mo, jibun no michi o susumu.",
          english: "Even if my parents oppose it, I will follow my own path.",
          meaning:
            "Meskipun ditentang orang tua, saya akan melangkah di jalan sendiri.",
        },
      },
      {
        word: "絶対",
        reading: "zettai",
        meaning: "mutlak, pasti",
        sentence: {
          japanese: "この秘密は誰にも言わないと約束したから、絶対言わない。",
          reading:
            "Kono himitsu wa dare ni mo iwanai to yakusoku shita kara, zettai iwanai.",
          english:
            "I promised not to tell anyone this secret, so I definitely won't.",
          meaning:
            "Karena sudah berjanji tidak akan memberi tahu siapa pun rahasia ini, pasti tidak akan kukatakan.",
        },
      },
      {
        word: "対策",
        reading: "taisaku",
        meaning: "tindakan/langkah penanggulangan",
        sentence: {
          japanese: "渋滞に対する対策を考える必要がある。",
          reading: "Juutai ni taisuru taisaku o kangaeru hitsuyou ga aru.",
          english:
            "We need to think of countermeasures against traffic congestion.",
          meaning:
            "Perlu memikirkan langkah penanggulangan terhadap kemacetan.",
        },
      },
    ],
  },
  {
    id: 6,
    kanji: "部",
    onyomi: "ブ",
    kunyomi: "",
    meaning: "bagian, biro, departemen, kelas, eksemplar, porsi",
    examples: [
      {
        word: "部屋",
        reading: "heya",
        meaning: "kamar, ruangan",
        sentence: {
          japanese: "暑くても寒くても、部屋の温度を一定に保つ。",
          reading: "Atsukute mo samukute mo, heya no ondo o ittei ni tamotsu.",
          english:
            "Whether it's hot or cold, the room temperature is kept constant.",
          meaning:
            "Baik panas maupun dingin, suhu ruangan dijaga tetap stabil.",
        },
      },
      {
        word: "部分",
        reading: "bubun",
        meaning: "bagian",
        sentence: {
          japanese: "この文章の中で、一番難しい部分はどこですか。",
          reading:
            "Kono bunshou no naka de, ichiban muzukashii bubun wa doko desu ka.",
          english: "Which part is the most difficult in this passage?",
          meaning: "Di dalam kalimat ini, bagian mana yang paling sulit?",
        },
      },
      {
        word: "学部",
        reading: "gakubu",
        meaning: "fakultas",
        sentence: {
          japanese: "彼は大学の情報学部で勉強している。",
          reading: "Kare wa daigaku no jouhou gakubu de benkyou shite iru.",
          english:
            "He is studying in the Faculty of Information at the university.",
          meaning: "Dia belajar di fakultas informasi universitas.",
        },
      },
    ],
  },
  {
    id: 7,
    kanji: "合",
    onyomi: "ゴウ, ガッ, カッ",
    kunyomi: "あ(う), あい",
    meaning: "cocok, sesuai, bergabung, 0.1",
    examples: [
      {
        word: "合う",
        reading: "au",
        meaning: "cocok, sesuai, bertemu",
        sentence: {
          japanese: "この靴はデザインはいいけれど、足に合わない。",
          reading: "Kono kutsu wa dezain wa ii keredo, ashi ni awanai.",
          english:
            "These shoes have a nice design, but they don't fit my feet.",
          meaning: "Sepatu ini desainnya bagus, tetapi tidak cocok di kaki.",
        },
      },
      {
        word: "場合",
        reading: "baai",
        meaning: "keadaan, situasi, kalau",
        sentence: {
          japanese: "雨が降った場合は、イベントを中止します。",
          reading: "Ame ga futta baai wa, ibento o chuushi shimasu.",
          english: "In the event that it rains, the event will be canceled.",
          meaning: "Jika turun hujan, acara akan dibatalkan.",
        },
      },
      {
        word: "都合",
        reading: "tsugou",
        meaning: "kondisi/jadwal, kenyamanan",
        sentence: {
          japanese: "明日の午後は都合が悪いので、別の日にしたい。",
          reading:
            "Ashita no gogo wa tsugou ga warui node, betsu no hi ni shitai.",
          english:
            "Tomorrow afternoon is inconvenient for me, so I'd like to make it another day.",
          meaning:
            "Besok siang jadwalnya kurang pas, jadi saya ingin ganti hari lain.",
        },
      },
    ],
  },
  {
    id: 8,
    kanji: "市",
    onyomi: "シ",
    kunyomi: "いち",
    meaning: "pasar, kota, kotamadya",
    examples: [
      {
        word: "市長",
        reading: "shichou",
        meaning: "wali kota",
        sentence: {
          japanese: "市長が新しい計画について説明した。",
          reading: "Shichou ga atarashii keikaku ni tsuite setsumei shita.",
          english: "The mayor explained about the new plan.",
          meaning: "Wali kota menjelaskan mengenai rencana baru.",
        },
      },
      {
        word: "市場",
        reading: "ichiba",
        meaning: "pasar (tradisional/komoditas)",
        sentence: {
          japanese: "朝早く市場へ行くと、新鮮な魚が手に入る。",
          reading:
            "Asa hayaku ichiba e iku to, shinsen na sakana ga te ni hairu.",
          english:
            "If you go to the market early in the morning, you can get fresh fish.",
          meaning:
            "Kalau pergi ke pasar pagi-pagi, ikan segar bisa didapatkan.",
        },
      },
      {
        word: "都市",
        reading: "toshi",
        meaning: "kota, perkotaan",
        sentence: {
          japanese: "大都市に住んでいる人は多い。",
          reading: "Daitoshi ni sunde iru hito wa ooi.",
          english: "Many people live in big cities.",
          meaning: "Orang yang tinggal di kota besar jumlahnya banyak.",
        },
      },
    ],
  },
  {
    id: 9,
    kanji: "内",
    onyomi: "ナイ",
    kunyomi: "うち",
    meaning: "dalam, di dalam, di antara, rumah",
    examples: [
      {
        word: "国内",
        reading: "kokunai",
        meaning: "dalam negeri",
        sentence: {
          japanese: "国内だけでなく、海外からも観光客が来る。",
          reading: "Kokunai dake de naku, kaigai kara mo kankoukyaku ga kuru.",
          english:
            "Tourists come not only from within the country, but also from overseas.",
          meaning:
            "Tidak hanya dari dalam negeri, wisatawan juga datang dari luar negeri.",
        },
      },
      {
        word: "以内",
        reading: "inai",
        meaning: "dalam batas/kurun waktu tertentu",
        sentence: {
          japanese: "レポートは来週の金曜日以内に提出してください。",
          reading:
            "Repooto wa raishuu no kinyoubi inai ni teishutsu shite kudasai.",
          english: "Please submit the report by next Friday.",
          meaning:
            "Tolong kumpulkan laporan dalam batas waktu hari Jumat minggu depan.",
        },
      },
      {
        word: "案内",
        reading: "annai",
        meaning: "panduan, informasi, mengantar",
        sentence: {
          japanese: "初めて来た人のために、会場を案内した。",
          reading: "Hajimete kita hito no tame ni, kaijou o annai shita.",
          english: "I guided first-time visitors around the venue.",
          meaning:
            "Demi orang yang baru pertama kali datang, saya memandu ke lokasi acara.",
        },
      },
    ],
  },
  {
    id: 10,
    kanji: "相",
    onyomi: "ソウ, ショウ",
    kunyomi: "あい",
    meaning: "antar-, saling, bersama, menteri",
    examples: [
      {
        word: "相手",
        reading: "aite",
        meaning: "lawan bicara, pasangan, pihak lain",
        sentence: {
          japanese: "相手の気持ちを考えて話すことが大切だ。",
          reading: "Aite no kimochi o kangaete hanasu koto ga taisetsu da.",
          english:
            "It is important to speak while considering the other person's feelings.",
          meaning:
            "Hal yang penting adalah berbicara dengan memikirkan perasaan lawan bicara.",
        },
      },
      {
        word: "相談",
        reading: "soudan",
        meaning: "konsultasi, berdiskusi",
        sentence: {
          japanese: "困ったことがあったら、いつでも相談してください。",
          reading: "Komatta koto ga attara, itsudemo soudan shite kudasai.",
          english: "If you have any trouble, please consult me anytime.",
          meaning:
            "Kalau ada hal yang menyulitkan, silakan konsultasikan kapan saja.",
        },
      },
      {
        word: "首相",
        reading: "shushou",
        meaning: "perdana menteri",
        sentence: {
          japanese: "首相が記者会見で質問に答えた。",
          reading: "Shushou ga kisha kaiken de shitsumon ni kotaeta.",
          english:
            "The prime minister answered questions at the press conference.",
          meaning: "Perdana menteri menjawab pertanyaan pada konferensi pers.",
        },
      },
    ],
  },
  {
    id: 11,
    kanji: "定",
    onyomi: "テイ, ジョウ",
    kunyomi: "さだ(める)",
    meaning: "menentukan, menetapkan, memutuskan",
    examples: [
      {
        word: "予定",
        reading: "yotei",
        meaning: "rencana, jadwal",
        sentence: {
          japanese: "明日は友達と会う予定になっている。",
          reading: "Ashita wa tomodachi to au yotei ni natte iru.",
          english: "I am scheduled to meet a friend tomorrow.",
          meaning: "Besok dijadwalkan akan bertemu dengan teman.",
        },
      },
      {
        word: "決定",
        reading: "kettei",
        meaning: "keputusan, penetapan",
        sentence: {
          japanese: "日程はまだ決定していない。",
          reading: "Nittei wa mada kettei shite inai.",
          english: "The schedule has not been decided yet.",
          meaning: "Jadwal tanggalnya belum ditetapkan.",
        },
      },
      {
        word: "一定",
        reading: "ittei",
        meaning: "tetap, pasti, tertentu",
        sentence: {
          japanese: "一定の時間がたったら、確認する。",
          reading: "Ittei no jikan ga tattara, kakunin suru.",
          english:
            "Once a certain amount of time has passed, we will check it.",
          meaning: "Setelah jangka waktu tertentu berlalu, akan dicek.",
        },
      },
    ],
  },
  {
    id: 12,
    kanji: "回",
    onyomi: "カイ",
    kunyomi: "まわ(す)",
    meaning: "-kali, ronde, berputar, kata bantu bilangan putaran/kali",
    examples: [
      {
        word: "回る",
        reading: "mawaru",
        meaning: "berputar, berkeliling",
        sentence: {
          japanese: "地球は太陽の周りを回っている。",
          reading: "Chikyuu wa taiyou no mawari o mawatte iru.",
          english: "The Earth revolves around the Sun.",
          meaning: "Bumi berputar mengelilingi matahari.",
        },
      },
      {
        word: "今回",
        reading: "konkai",
        meaning: "kali ini",
        sentence: {
          japanese: "今回は時間がなかったので、また今度行く。",
          reading: "Konkai wa jikan ga nakatta node, mata kondo iku.",
          english: "Since I didn't have time this time, I'll go another time.",
          meaning: "Kali ini tidak ada waktu, jadi lain kali saja pergi.",
        },
      },
      {
        word: "回復",
        reading: "kaifuku",
        meaning: "pemulihan, sembuh",
        sentence: {
          japanese: "薬を飲んだおかげで、体調が回復してきた。",
          reading: "Kusuri o nonda okage de, taichou ga kaifuku shite kita.",
          english:
            "Thanks to taking the medicine, my physical condition has started to recover.",
          meaning: "Berkat minum obat, kondisi fisik berangsur pulih.",
        },
      },
    ],
  },
  {
    id: 13,
    kanji: "選",
    onyomi: "セン",
    kunyomi: "えら(ぶ)",
    meaning: "memilih, menyeleksi, mengutamakan",
    examples: [
      {
        word: "選ぶ",
        reading: "erabu",
        meaning: "memilih",
        sentence: {
          japanese: "自分に合った方法を選べばいい。",
          reading: "Jibun ni atta houhou o erabeba ii.",
          english: "You should just choose the method that suits you.",
          meaning:
            "Sebaiknya pilih saja metode yang cocok dengan diri sendiri.",
        },
      },
      {
        word: "選挙",
        reading: "senkyo",
        meaning: "pemilihan umum",
        sentence: {
          japanese: "選挙に行く人がだんだん減っているそうだ。",
          reading: "Senkyo ni iku hito ga dandan hette iru sou da.",
          english:
            "I heard that the number of people going to vote in elections is gradually decreasing.",
          meaning:
            "Katanya orang yang pergi ke pemilu berangsur-angsur berkurang.",
        },
      },
      {
        word: "選手",
        reading: "senshu",
        meaning: "atlet, pemain",
        sentence: {
          japanese: "選手たちは試合に向けて練習を続けている。",
          reading: "Senshu-tachi wa shiai ni mukete renshuu o tsuzukete iru.",
          english: "The athletes continue practicing toward the match.",
          meaning: "Para atlet terus berlatih menuju pertandingan.",
        },
      },
    ],
  },
  {
    id: 14,
    kanji: "米",
    onyomi: "ベイ, マイ, メエトル",
    kunyomi: "こめ",
    meaning: "beras, Amerika Serikat, meter",
    examples: [
      {
        word: "お米",
        reading: "okome",
        meaning: "beras",
        sentence: {
          japanese: "日本ではお米を主食として食べている。",
          reading: "Nihon de wa okome o shushoku to shite tabete iru.",
          english: "In Japan, rice is eaten as a staple food.",
          meaning: "Di Jepang beras dikonsumsi sebagai makanan pokok.",
        },
      },
      {
        word: "米国",
        reading: "Beikoku",
        meaning: "Amerika Serikat",
        sentence: {
          japanese: "彼は米国に留学した経験がある。",
          reading: "Kare wa Beikoku ni ryuugaku shita keiken ga aru.",
          english: "He has experience studying abroad in the United States.",
          meaning: "Dia punya pengalaman kuliah ke Amerika Serikat.",
        },
      },
      {
        word: "中米",
        reading: "Chuubei",
        meaning: "Amerika Tengah",
        sentence: {
          japanese: "中米の文化に興味を持っている。",
          reading: "Chuubei no bunka ni kyoumi o motte iru.",
          english: "I am interested in Central American culture.",
          meaning: "Saya memiliki ketertarikan pada budaya Amerika Tengah.",
        },
      },
    ],
  },
  {
    id: 15,
    kanji: "実",
    onyomi: "ジツ",
    kunyomi: "み, みの(る)",
    meaning: "kenyataan, kebenaran, buah, berbuah",
    examples: [
      {
        word: "実際",
        reading: "jissai",
        meaning: "sebenarnya, kenyataan",
        sentence: {
          japanese: "実際にやってみると、思ったより簡単だった。",
          reading: "Jissai ni yatte miru to, omotta yori kantan datta.",
          english: "When I actually tried it, it was easier than I thought.",
          meaning:
            "Setelah dicoba secara nyata, ternyata lebih mudah daripada yang kubayangkan.",
        },
      },
      {
        word: "実現",
        reading: "jitsugen",
        meaning: "perwujudan, terwujud",
        sentence: {
          japanese: "努力すれば、夢が実現することもある。",
          reading: "Doryoku sureba, yume ga jitsugen suru koto mo aru.",
          english: "If you make an effort, your dreams may come true.",
          meaning: "Kalau berusaha, ada kalanya mimpi menjadi kenyataan.",
        },
      },
      {
        word: "実力",
        reading: "jitsuryoku",
        meaning: "kemampuan nyata",
        sentence: {
          japanese: "試験で本当の実力を出すのは難しい。",
          reading: "Shiken de hontou no jitsuryoku o dasu no wa muzukashii.",
          english: "It is difficult to show your true ability in an exam.",
          meaning: "Mengeluarkan kemampuan asli saat ujian itu sulit.",
        },
      },
    ],
  },
  {
    id: 16,
    kanji: "関",
    onyomi: "カン",
    kunyomi: "せき, かか(わる)",
    meaning: "hubungan, pos pemeriksaan, gerbang, terlibat, berkaitan",
    examples: [
      {
        word: "関係",
        reading: "kankei",
        meaning: "hubungan, relasi",
        sentence: {
          japanese: "この二つの出来事には深い関係がある。",
          reading: "Kono futatsu no dekigoto ni wa fukai kankei ga aru.",
          english: "There is a deep connection between these two events.",
          meaning: "Dua kejadian ini memiliki hubungan yang mendalam.",
        },
      },
      {
        word: "関心",
        reading: "kanshin",
        meaning: "minat, perhatian",
        sentence: {
          japanese: "環境問題に関心を持つ人が増えている。",
          reading: "Kankyou mondai ni kanshin o motsu hito ga fuete iru.",
          english:
            "The number of people interested in environmental issues is increasing.",
          meaning:
            "Orang yang menaruh perhatian pada masalah lingkungan semakin bertambah.",
        },
      },
      {
        word: "関する",
        reading: "kansuru",
        meaning: "berkaitan dengan",
        sentence: {
          japanese: "歴史に関する本を何冊か読んだ。",
          reading: "Rekishi ni kansuru hon o nansatsu ka yonda.",
          english: "I read several books related to history.",
          meaning: "Saya membaca beberapa buku yang berkaitan dengan sejarah.",
        },
      },
    ],
  },
  {
    id: 17,
    kanji: "決",
    onyomi: "ケツ",
    kunyomi: "き(める)",
    meaning: "memutuskan, menetapkan, menyepakati, menunjuk",
    examples: [
      {
        word: "決める",
        reading: "kimeru",
        meaning: "memutuskan, menentukan",
        sentence: {
          japanese: "自分で決めたことなら、最後までやり抜くしかない。",
          reading: "Jibun de kimeta koto nara, saigo made yarinuku shika nai.",
          english:
            "If it's something you decided yourself, you have no choice but to see it through to the end.",
          meaning:
            "Kalau itu hal yang diputuskan sendiri, tidak ada pilihan selain menuntaskannya sampai akhir.",
        },
      },
      {
        word: "決まる",
        reading: "kimaru",
        meaning: "ditetapkan, diputuskan",
        sentence: {
          japanese: "引っ越しの日がようやく決まった。",
          reading: "Hikkoshi no hi ga youyaku kimatta.",
          english: "The moving date has finally been decided.",
          meaning: "Hari pindahan akhirnya ditetapkan.",
        },
      },
      {
        word: "解決",
        reading: "kaiketsu",
        meaning: "penyelesaian (masalah)",
        sentence: {
          japanese: "その問題は話し合うことで解決できる。",
          reading: "Sono mondai wa hanashiau koto de kaiketsu dekiru.",
          english: "That problem can be solved by talking it through.",
          meaning: "Masalah itu bisa diselesaikan dengan cara berdiskusi.",
        },
      },
    ],
  },
  {
    id: 18,
    kanji: "全",
    onyomi: "ゼン",
    kunyomi: "まった(く), すべ(て)",
    meaning: "seluruh, sepenuhnya, semua, lengkap, memenuhi",
    examples: [
      {
        word: "全部",
        reading: "zenbu",
        meaning: "semuanya, seluruhnya",
        sentence: {
          japanese: "宿題を全部終わらせてから、ゲームをする。",
          reading: "Shukudai o zenbu owarasete kara, geemu o suru.",
          english: "After finishing all my homework, I'll play games.",
          meaning: "Setelah menyelesaikan semua PR, baru main game.",
        },
      },
      {
        word: "全員",
        reading: "zen'in",
        meaning: "semua anggota/orang",
        sentence: {
          japanese: "メンバー全員が集まるまで待つことにした。",
          reading: "Menbaa zen'in ga atsumaru made matsu koto ni shita.",
          english: "We decided to wait until all the members gathered.",
          meaning: "Kami memutuskan menunggu sampai semua anggota berkumpul.",
        },
      },
      {
        word: "安全",
        reading: "anzen",
        meaning: "aman, keselamatan",
        sentence: {
          japanese: "夜道を歩くときは、安全に気をつけたほうがいい。",
          reading: "Yomichi o aruku toki wa, anzen ni ki o tsuketa hou ga ii.",
          english:
            "When walking on dark streets at night, you should be careful about safety.",
          meaning:
            "Saat berjalan di jalan malam, sebaiknya berhati-hati demi keselamatan.",
        },
      },
    ],
  },
  {
    id: 19,
    kanji: "表",
    onyomi: "ヒョウ",
    kunyomi: "おもて, あらわ(す)",
    meaning: "permukaan, tabel, bagan, diagram, mengungkapkan",
    examples: [
      {
        word: "発表",
        reading: "happyou",
        meaning: "pengumuman, presentasi",
        sentence: {
          japanese: "明日の授業で調査結果を発表する。",
          reading: "Ashita no jugyou de chousa kekka o happyou suru.",
          english: "I will present the survey results in tomorrow's class.",
          meaning: "Di kelas besok saya akan mempresentasikan hasil survei.",
        },
      },
      {
        word: "代表",
        reading: "daihyou",
        meaning: "perwakilan, wakil",
        sentence: {
          japanese: "クラス代表としてスピーチをした。",
          reading: "Kurasu daihyou to shite supiichi o shita.",
          english: "I gave a speech as the class representative.",
          meaning: "Saya berpidato sebagai perwakilan kelas.",
        },
      },
      {
        word: "表情",
        reading: "hyoujou",
        meaning: "ekspresi wajah",
        sentence: {
          japanese: "彼の表情を見れば、嬉しかったかどうかすぐ分かる。",
          reading:
            "Kare no hyoujou o mireba, ureshikatta ka dou ka sugu wakaru.",
          english:
            "Just by looking at his facial expression, you can immediately tell whether he was happy or not.",
          meaning:
            "Kalau melihat ekspresi wajahnya, langsung tahu apakah dia senang atau tidak.",
        },
      },
    ],
  },
  {
    id: 20,
    kanji: "戦",
    onyomi: "セン",
    kunyomi: "いくさ, たたか(う)",
    meaning: "perang, pertempuran, pertandingan, bertarung",
    examples: [
      {
        word: "戦争",
        reading: "sensou",
        meaning: "perang",
        sentence: {
          japanese: "戦争が二度と起きないように願っている。",
          reading: "Sensou ga nido to okinai you ni negatte iru.",
          english: "I hope that war never happens again.",
          meaning:
            "Saya berharap perang tidak akan terjadi lagi untuk kedua kalinya.",
        },
      },
      {
        word: "戦う",
        reading: "tatakau",
        meaning: "bertarung, melawan",
        sentence: {
          japanese: "最後まで諦めずに戦うことが大切だ。",
          reading: "Saigo made akiramezu ni tatakau koto ga taisetsu da.",
          english: "It is important to fight without giving up until the end.",
          meaning:
            "Hal yang penting adalah bertarung tanpa menyerah sampai akhir.",
        },
      },
      {
        word: "挑戦",
        reading: "chousen",
        meaning: "tantangan, menantang",
        sentence: {
          japanese: "失敗を恐れずに、新しいことに挑戦したい。",
          reading: "Shippai o osorezu ni, atarashii koto ni chousen shitai.",
          english:
            "Without fearing failure, I want to challenge myself with new things.",
          meaning:
            "Tanpa takut gagal, saya ingin menantang diri mencoba hal baru.",
        },
      },
    ],
  },
  {
    id: 21,
    kanji: "経",
    onyomi: "ケイ",
    kunyomi: "へ(る), た(つ)",
    meaning: "bujur, melewati, berlalu, melengkung",
    examples: [
      {
        word: "経験",
        reading: "keiken",
        meaning: "pengalaman",
        sentence: {
          japanese: "外国で働いた経験は、私にとって大きな財産だ。",
          reading:
            "Gaikoku de hataraita keiken wa, watashi ni totte ookina zaisan da.",
          english: "The experience of working abroad is a great asset to me.",
          meaning:
            "Pengalaman bekerja di luar negeri adalah aset besar bagi saya.",
        },
      },
      {
        word: "経済",
        reading: "keizai",
        meaning: "ekonomi",
        sentence: {
          japanese: "景気が良くなると、経済も活発になる。",
          reading: "Keiki ga yoku naru to, keizai mo kappatsu ni naru.",
          english:
            "When business conditions improve, the economy also becomes active.",
          meaning:
            "Kalau kondisi ekonomi membaik, perekonomian pun ikut bergairah.",
        },
      },
      {
        word: "経過",
        reading: "keika",
        meaning: "perkembangan, berlalunya waktu",
        sentence: {
          japanese: "手術後の経過は順調だと言われた。",
          reading: "Shujutsu-go no keika wa junchou da to iwareta.",
          english:
            "I was told that my post-surgery recovery progress is going smoothly.",
          meaning:
            "Dikatakan bahwa perkembangan setelah operasi berjalan lancar.",
        },
      },
    ],
  },
  {
    id: 22,
    kanji: "最",
    onyomi: "サイ",
    kunyomi: "もっと(も)",
    meaning: "paling, paling utama, ekstrem",
    examples: [
      {
        word: "最近",
        reading: "saikin",
        meaning: "belakangan ini, terbaru",
        sentence: {
          japanese: "最近は忙しくて、ゆっくり休めていない。",
          reading: "Saikin wa isogashikute, yukkuri yasumete inai.",
          english:
            "Lately I've been busy and haven't been able to rest properly.",
          meaning:
            "Belakangan ini sibuk, jadi belum bisa beristirahat dengan tenang.",
        },
      },
      {
        word: "最初",
        reading: "saisho",
        meaning: "pertama, awal",
        sentence: {
          japanese: "最初は難しく感じたけれど、慣れると楽しくなる。",
          reading:
            "Saisho wa muzukashiku kanjita keredo, nareru to tanoshiku naru.",
          english:
            "At first it felt difficult, but once you get used to it, it becomes fun.",
          meaning:
            "Awalnya terasa sulit, tetapi kalau sudah terbiasa menjadi menyenangkan.",
        },
      },
      {
        word: "最高",
        reading: "saikou",
        meaning: "terbaik, tertinggi",
        sentence: {
          japanese: "今日の天気は気持ちよくて、最高だ。",
          reading: "Kyou no tenki wa kimochi yokute, saikou da.",
          english: "Today's weather feels so nice, it's the best.",
          meaning: "Cuaca hari ini enak dirasakan dan terbaik.",
        },
      },
    ],
  },
  {
    id: 23,
    kanji: "現",
    onyomi: "ゲン",
    kunyomi: "あらわ(れる), うつ(つ)",
    meaning: "sekarang, yang ada, nyata, muncul",
    examples: [
      {
        word: "現在",
        reading: "genzai",
        meaning: "saat ini, sekarang",
        sentence: {
          japanese: "現在、このアプリを開発しているところです。",
          reading: "Genzai, kono apuri o kaihatsu shite iru tokoro desu.",
          english: "Currently, I am in the middle of developing this app.",
          meaning:
            "Saat ini, saya sedang dalam tahap mengembangkan aplikasi ini.",
        },
      },
      {
        word: "現れる",
        reading: "arawareru",
        meaning: "muncul, terlihat",
        sentence: {
          japanese: "雲の間から太陽が現れた。",
          reading: "Kumo no aida kara taiyou ga arawareta.",
          english: "The sun appeared from between the clouds.",
          meaning: "Matahari muncul dari sela-sela awan.",
        },
      },
      {
        word: "現実",
        reading: "genjitsu",
        meaning: "kenyataan, realitas",
        sentence: {
          japanese: "理想と現実の差に悩むことはよくある。",
          reading: "Risou to genjitsu no sa ni nayamu koto wa yoku aru.",
          english:
            "It is common to struggle with the gap between ideals and reality.",
          meaning:
            "Sering kali orang bingung menghadapi perbedaan antara idealisme dan kenyataan.",
        },
      },
    ],
  },
  {
    id: 24,
    kanji: "調",
    onyomi: "チョウ",
    kunyomi: "しら(べる), ととの(う)",
    meaning: "nada, irama, menyiapkan, menyelidiki, memeriksa",
    examples: [
      {
        word: "調べる",
        reading: "shiraberu",
        meaning: "memeriksa, menyelidiki, mencari tahu",
        sentence: {
          japanese: "分からない言葉は辞書で調べるようにしている。",
          reading: "Wakaranai kotoba wa jisho de shiraberu you ni shite iru.",
          english:
            "I make it a habit to look up words I don't understand in the dictionary.",
          meaning: "Kata yang tidak dimengerti saya usahakan dicari di kamus.",
        },
      },
      {
        word: "調査",
        reading: "chousa",
        meaning: "survei, penyelidikan",
        sentence: {
          japanese: "調査によると、多くの人が電車を利用している。",
          reading:
            "Chousa ni yoru to, ooku no hito ga densha o riyou shite iru.",
          english: "According to the survey, many people use the train.",
          meaning: "Menurut survei, banyak orang menggunakan kereta.",
        },
      },
      {
        word: "調整",
        reading: "chousei",
        meaning: "penyesuaian, koordinasi",
        sentence: {
          japanese: "来週のミーティングの時間を調整している。",
          reading: "Raishuu no miitingu no jikan o chousei shite iru.",
          english: "I am coordinating the time for next week's meeting.",
          meaning: "Saya sedang menyesuaikan waktu rapat minggu depan.",
        },
      },
    ],
  },
  {
    id: 25,
    kanji: "化",
    onyomi: "カ, ケ",
    kunyomi: "ば(ける), ふ(ける)",
    meaning: "berubah, wujud, memengaruhi, mempesona, -isasi",
    examples: [
      {
        word: "文化",
        reading: "bunka",
        meaning: "budaya",
        sentence: {
          japanese: "その国の文化について学ぶのは面白い。",
          reading: "Sono kuni no bunka ni tsuite manabu no wa omoshiroi.",
          english: "Learning about that country's culture is interesting.",
          meaning: "Mempelajari tentang budaya negara itu menarik.",
        },
      },
      {
        word: "変化",
        reading: "henka",
        meaning: "perubahan",
        sentence: {
          japanese: "時代とともに生活スタイルも変化してきた。",
          reading: "Jidai to tomo ni seikatsu sutairu mo henka shite kita.",
          english: "Lifestyles have also changed along with the times.",
          meaning: "Seiring perkembangan zaman, gaya hidup pun ikut berubah.",
        },
      },
      {
        word: "化粧",
        reading: "keshou",
        meaning: "dandan, riasan",
        sentence: {
          japanese: "出かける前に軽く化粧をする。",
          reading: "Dekakeru mae ni karuku keshou o suru.",
          english: "I put on light makeup before going out.",
          meaning: "Sebelum pergi keluar, merias wajah tipis-tipis.",
        },
      },
    ],
  },
  {
    id: 26,
    kanji: "当",
    onyomi: "トウ",
    kunyomi: "あ(たる)",
    meaning: "mengenai, tepat, sesuai",
    examples: [
      {
        word: "当たり前",
        reading: "atarimae",
        meaning: "wajar, lumrah, sudah sewajarnya",
        sentence: {
          japanese: "挨拶をするのは社会人として当たり前だ。",
          reading: "Aisatsu o suru no wa shakaijin to shite atarimae da.",
          english: "Greeting others is a matter of course as a working adult.",
          meaning:
            "Memberi salam adalah hal yang lumrah sebagai anggota masyarakat/pekerja.",
        },
      },
      {
        word: "本当",
        reading: "hontou",
        meaning: "benar, sungguhan",
        sentence: {
          japanese: "彼が言ったことは本当だろうか。",
          reading: "Kare ga itta koto wa hontou darou ka.",
          english: "I wonder if what he said is true.",
          meaning: "Apakah yang dia katakan itu benar ya?",
        },
      },
      {
        word: "担当",
        reading: "tantou",
        meaning: "penanggung jawab, menangani",
        sentence: {
          japanese: "このプロジェクトは私が担当することになった。",
          reading: "Kono purojekuto wa watashi ga tantou suru koto ni natta.",
          english:
            "It has been decided that I will be in charge of this project.",
          meaning: "Diputuskan bahwa proyek ini akan saya tangani.",
        },
      },
    ],
  },
  {
    id: 27,
    kanji: "約",
    onyomi: "ヤク",
    kunyomi: "つづ(まる)",
    meaning: "janji, kira-kira, menyusut",
    examples: [
      {
        word: "約束",
        reading: "yakusoku",
        meaning: "janji",
        sentence: {
          japanese: "友達とした約束は必ず守りたい。",
          reading: "Tomodachi to shita yakusoku wa kanarazu mamoritai.",
          english: "I definitely want to keep promises made with friends.",
          meaning: "Janji yang dibuat bersama teman pasti ingin kutepati.",
        },
      },
      {
        word: "予約",
        reading: "yoyaku",
        meaning: "reservasi, pemesanan",
        sentence: {
          japanese: "人気の店だから、予約しておいたほうがいい。",
          reading: "Ninki no mise dakara, yoyaku shite oita hou ga ii.",
          english:
            "Since it's a popular shop, you should make a reservation in advance.",
          meaning:
            "Karena tempat populer, sebaiknya reservasi terlebih dahulu.",
        },
      },
      {
        word: "節約",
        reading: "setsuyaku",
        meaning: "penghematan, berhemat",
        sentence: {
          japanese: "旅行のために、毎日お金を節約している。",
          reading: "Ryokou no tame ni, mainichi okane o setsuyaku shite iru.",
          english: "I save money every day for my trip.",
          meaning: "Demi liburan, setiap hari saya menghemat uang.",
        },
      },
    ],
  },
  {
    id: 28,
    kanji: "首",
    onyomi: "シュ",
    kunyomi: "くび",
    meaning: "leher, kepala",
    examples: [
      {
        word: "首",
        reading: "kubi",
        meaning: "leher, dipecat",
        sentence: {
          japanese: "長時間パソコンを使っていると、首が痛くなる。",
          reading: "Choujikan pasokon o tsukatte iru to, kubi ga itaku naru.",
          english:
            "When using a computer for a long time, my neck starts to hurt.",
          meaning: "Kalau memakai komputer terlalu lama, leher jadi sakit.",
        },
      },
      {
        word: "首相",
        reading: "shushou",
        meaning: "perdana menteri",
        sentence: {
          japanese: "首相の演説がテレビで放送された。",
          reading: "Shushou no enzetsu ga terebi de housou sareta.",
          english: "The prime minister's speech was broadcast on TV.",
          meaning: "Pidato perdana menteri disiarkan di televisi.",
        },
      },
      {
        word: "手首",
        reading: "tekubi",
        meaning: "pergelangan tangan",
        sentence: {
          japanese: "運動する前に、手首を回してほぐす。",
          reading: "Undou suru mae ni, tekubi o mawashite hogusu.",
          english: "Before exercising, I rotate my wrists to loosen them up.",
          meaning:
            "Sebelum berolahraga, memutar-mutar pergelangan tangan agar lemas.",
        },
      },
    ],
  },
  {
    id: 29,
    kanji: "法",
    onyomi: "ホウ",
    kunyomi: "のり",
    meaning: "metode, hukum, aturan, prinsip, sistem",
    examples: [
      {
        word: "方法",
        reading: "houhou",
        meaning: "metode, cara",
        sentence: {
          japanese: "効率よく漢字を覚える方法を探している。",
          reading: "Kouritsu yoku kanji o oboeru houhou o sagashite iru.",
          english: "I am looking for an efficient way to memorize kanji.",
          meaning: "Saya sedang mencari cara menghafal kanji secara efisien.",
        },
      },
      {
        word: "法律",
        reading: "houritsu",
        meaning: "hukum, undang-undang",
        sentence: {
          japanese: "法律を守ることは社会人として必要だ。",
          reading: "Houritsu o mamoru koto wa shakaijin to shite hitsuyou da.",
          english: "Obeying the law is necessary as a member of society.",
          meaning: "Mematuhi hukum diperlukan sebagai anggota masyarakat.",
        },
      },
      {
        word: "文法",
        reading: "bunpou",
        meaning: "tata bahasa",
        sentence: {
          japanese: "文法が分かっても、会話で使うのはまた別だ。",
          reading: "Bunpou ga wakatte mo, kaiwa de tsukau no wa mata betsu da.",
          english:
            "Even if you understand grammar, using it in conversation is another thing.",
          meaning:
            "Meskipun paham tata bahasa, menggunakannya dalam percakapan adalah hal lain lagi.",
        },
      },
    ],
  },
  {
    id: 30,
    kanji: "性",
    onyomi: "セイ, ショウ",
    kunyomi: "",
    meaning: "jenis kelamin, gender, sifat, watak",
    examples: [
      {
        word: "性格",
        reading: "seikaku",
        meaning: "sifat, karakter, kepribadian",
        sentence: {
          japanese: "二人は性格が似ているから、すぐ仲良くなった。",
          reading: "Futari wa seikaku ga nite iru kara, sugu nakayoku natta.",
          english:
            "Because the two of them have similar personalities, they became close right away.",
          meaning:
            "Karena sifat keduanya mirip, mereka langsung menjadi akrab.",
        },
      },
      {
        word: "男性",
        reading: "dansei",
        meaning: "laki-laki, pria",
        sentence: {
          japanese: "そのイベントには男性の参加者も多い。",
          reading: "Sono ibento ni wa dansei no sankasha mo ooi.",
          english: "There are also many male participants at that event.",
          meaning: "Peserta pria pada acara itu juga banyak.",
        },
      },
      {
        word: "女性",
        reading: "josei",
        meaning: "wanita, perempuan",
        sentence: {
          japanese: "近年、この業界で活躍する女性が増えている。",
          reading: "Kinnen, kono gyoukai de katsuyaku suru josei ga fuete iru.",
          english:
            "In recent years, the number of women playing an active role in this industry has increased.",
          meaning:
            "Belakangan ini, wanita yang aktif berkiprah di industri ini semakin bertambah.",
        },
      },
    ],
  },
  {
    id: 31,
    kanji: "的",
    onyomi: "テキ",
    kunyomi: "",
    meaning: "sasaran, target, objek, akhiran adjektif (-tif)",
    examples: [
      {
        word: "目的",
        reading: "mokuteki",
        meaning: "tujuan, maksud",
        sentence: {
          japanese: "日本へ来た目的は何ですか。",
          reading: "Nihon e kita mokuteki wa nan desu ka.",
          english: "What is your purpose for coming to Japan?",
          meaning: "Apa tujuan datang ke Jepang?",
        },
      },
      {
        word: "具体的",
        reading: "gutaiteki",
        meaning: "konkret, spesifik",
        sentence: {
          japanese: "もう少し具体的な例を挙げてもらえませんか。",
          reading: "Mou sukoshi gutaiteki na rei o agete moraemasen ka.",
          english: "Could you give a slightly more concrete example?",
          meaning: "Bisakah disebutkan contoh yang sedikit lebih konkret?",
        },
      },
      {
        word: "一般的",
        reading: "ippanteki",
        meaning: "umum",
        sentence: {
          japanese: "それが一般的な考え方だとは言えない。",
          reading: "Sore ga ippanteki na kangaekata da to wa ienai.",
          english:
            "It cannot be said that this is the general way of thinking.",
          meaning:
            "Tidak bisa dikatakan bahwa itu adalah cara berpikir yang umum.",
        },
      },
    ],
  },
  {
    id: 32,
    kanji: "要",
    onyomi: "ヨウ",
    kunyomi: "い(る), かなめ",
    meaning: "membutuhkan, inti, esensi, titik tumpu",
    examples: [
      {
        word: "必要",
        reading: "hitsuyou",
        meaning: "perlu, dibutuhkan",
        sentence: {
          japanese: "手続きには身分証明書が必要になる。",
          reading: "Tetsuzuki ni wa mibun shoumeisho ga hitsuyou ni naru.",
          english: "An ID card will be required for the procedure.",
          meaning: "Untuk mengurus prosedur, kartu identitas akan diperlukan.",
        },
      },
      {
        word: "重要",
        reading: "juuyou",
        meaning: "penting",
        sentence: {
          japanese: "健康管理は誰にとっても重要なことだ。",
          reading: "Kenkou kanri wa dare ni totte mo juuyou na koto da.",
          english: "Health management is important for everyone.",
          meaning: "Menjaga kesehatan adalah hal yang penting bagi siapa pun.",
        },
      },
      {
        word: "要するに",
        reading: "yousuru ni",
        meaning: "singkatnya, intinya",
        sentence: {
          japanese: "要するに、早く準備すれば間に合うということだ。",
          reading: "Yousuru ni, hayaku junbi sureba maniau to iu koto da.",
          english:
            "In short, it means you'll make it in time if you prepare early.",
          meaning:
            "Singkatnya, artinya kalau disiapkan lebih awal pasti keburu.",
        },
      },
    ],
  },
  {
    id: 33,
    kanji: "制",
    onyomi: "セイ",
    kunyomi: "",
    meaning: "sistem, hukum, aturan, mengontrol",
    examples: [
      {
        word: "制度",
        reading: "seido",
        meaning: "sistem, aturan kelembagaan",
        sentence: {
          japanese: "新しい制度が始まってから、働きやすくなった。",
          reading: "Atarashii seido ga hajimatte kara, hatarakiyasuku natta.",
          english:
            "Since the new system started, it has become easier to work.",
          meaning:
            "Sejak sistem baru dimulai, menjadi lebih nyaman untuk bekerja.",
        },
      },
      {
        word: "制限",
        reading: "seigen",
        meaning: "batasan, pembatasan",
        sentence: {
          japanese: "テストには時間制限がある。",
          reading: "Tesuto ni wa jikan seigen ga aru.",
          english: "There is a time limit on the test.",
          meaning: "Pada tes ada pembatasan waktu.",
        },
      },
      {
        word: "強制",
        reading: "kyousei",
        meaning: "paksaan, memaksa",
        sentence: {
          japanese: "参加は自由であって、強制ではない。",
          reading: "Sanka wa jiyuu de atte, kyousei de wa nai.",
          english: "Participation is voluntary, not mandatory.",
          meaning: "Keikutsertaannya bebas, bukan paksaan.",
        },
      },
    ],
  },
  {
    id: 34,
    kanji: "治",
    onyomi: "ジ, チ",
    kunyomi: "おさ(める), なお(る)",
    meaning: "memerintah, menyembuhkan, sembuh",
    examples: [
      {
        word: "治る",
        reading: "naoru",
        meaning: "sembuh (penyakit/luka)",
        sentence: {
          japanese: "よく寝れば、風邪もすぐ治るだろう。",
          reading: "Yoku nereba, kaze mo sugu naoru darou.",
          english:
            "If you sleep well, your cold will probably get better soon.",
          meaning: "Kalau tidur cukup, masuk angin pun mungkin segera sembuh.",
        },
      },
      {
        word: "政治",
        reading: "seiji",
        meaning: "politik",
        sentence: {
          japanese: "政治ニュースを毎日チェックしている。",
          reading: "Seiji nyuusu o mainichi chekku shite iru.",
          english: "I check political news every day.",
          meaning: "Saya mengecek berita politik setiap hari.",
        },
      },
      {
        word: "治療",
        reading: "chiryou",
        meaning: "pengobatan, perawatan medis",
        sentence: {
          japanese: "早めに治療を受けたほうがいい。",
          reading: "Hayame ni chiryou o uketa hou ga ii.",
          english: "You should receive medical treatment early.",
          meaning: "Sebaiknya menjalani pengobatan lebih awal.",
        },
      },
    ],
  },
  {
    id: 35,
    kanji: "務",
    onyomi: "ム",
    kunyomi: "つと(める)",
    meaning: "tugas, kewajiban, bekerja",
    examples: [
      {
        word: "務める",
        reading: "tsutomeru",
        meaning: "bekerja di, bertugas",
        sentence: {
          japanese: "大学を卒業してから、地元の会社に務めている。",
          reading:
            "Daigaku o sotsugyou shite kara, jimoto no kaisha ni tsutomete iru.",
          english:
            "Since graduating from university, I have been working at a local company.",
          meaning: "Setelah lulus kuliah, saya bekerja di perusahaan lokal.",
        },
      },
      {
        word: "勤務",
        reading: "kinmu",
        meaning: "tugas/jam kerja",
        sentence: {
          japanese: "来月から勤務時間が少し変わるらしい。",
          reading: "Raigetsu kara kinmu jikan ga sukoshi kawaru rashii.",
          english:
            "It seems working hours will change slightly starting next month.",
          meaning: "Mulai bulan depan katanya jam kerja agak berubah.",
        },
      },
      {
        word: "義務",
        reading: "gimu",
        meaning: "kewajiban",
        sentence: {
          japanese: "税金を納めるのは国民の義務だ。",
          reading: "Zeikin o osameru no wa kokumin no gimu da.",
          english: "Paying taxes is a citizen's duty.",
          meaning: "Membayar pajak adalah kewajiban warga negara.",
        },
      },
    ],
  },
  {
    id: 36,
    kanji: "成",
    onyomi: "セイ, ジョウ",
    kunyomi: "な(る)",
    meaning: "berubah menjadi, menjadi, tumbuh, berlalu",
    examples: [
      {
        word: "成功",
        reading: "seikou",
        meaning: "sukses, keberhasilan",
        sentence: {
          japanese: "何度も失敗したけれど、ついに成功した。",
          reading: "Nando mo shippai shita keredo, tsui ni seikou shita.",
          english: "I failed many times, yet I finally succeeded.",
          meaning: "Meskipun berkali-kali gagal, akhirnya berhasil juga.",
        },
      },
      {
        word: "成長",
        reading: "seichou",
        meaning: "pertumbuhan, tumbuh besar",
        sentence: {
          japanese: "子供の成長は本当に早いものだ。",
          reading: "Kodomo no seichou wa hontou ni hayai mono da.",
          english: "Children's growth really is fast.",
          meaning: "Pertumbuhan anak itu sungguh cepat ya.",
        },
      },
      {
        word: "完成",
        reading: "kansei",
        meaning: "penyelesaian, rampung",
        sentence: {
          japanese: "新しい駅ビルが来月完成する予定だ。",
          reading: "Atarashii ekibiru ga raigetsu kansei suru yotei da.",
          english:
            "The new station building is scheduled to be completed next month.",
          meaning: "Gedung stasiun baru dijadwalkan rampung bulan depan.",
        },
      },
    ],
  },
  {
    id: 37,
    kanji: "期",
    onyomi: "キ, ゴ",
    kunyomi: "",
    meaning: "periode, waktu, tanggal, masa/jangka waktu",
    examples: [
      {
        word: "期間",
        reading: "kikan",
        meaning: "periode, jangka waktu",
        sentence: {
          japanese: "申込期間は今月末までとなっている。",
          reading: "Moushikomi kikan wa kongetsumatsu made to natte iru.",
          english: "The application period is set until the end of this month.",
          meaning: "Periode pendaftaran ditetapkan sampai akhir bulan ini.",
        },
      },
      {
        word: "期待",
        reading: "kitai",
        meaning: "harapan, ekspektasi",
        sentence: {
          japanese: "今年の映画は公開前から期待されている。",
          reading: "Kotoshi no eiga wa koukai mae kara kitai sarete iru.",
          english:
            "This year's movie has been anticipated even before its release.",
          meaning: "Film tahun ini sudah dinantikan bahkan sebelum tayang.",
        },
      },
      {
        word: "時期",
        reading: "jiki",
        meaning: "waktu, musim, masa",
        sentence: {
          japanese: "桜が咲く時期になると、多くの人が訪れる。",
          reading: "Sakura ga saku jiki ni naru to, ooku no hito ga otozureru.",
          english:
            "When the season comes for cherry blossoms to bloom, many people visit.",
          meaning:
            "Saat tiba masa bunga sakura mekar, banyak orang berkunjung.",
        },
      },
    ],
  },
  {
    id: 38,
    kanji: "取",
    onyomi: "シュ",
    kunyomi: "と(る)",
    meaning: "mengambil, meraih",
    examples: [
      {
        word: "取る",
        reading: "toru",
        meaning: "mengambil, mendapatkan",
        sentence: {
          japanese: "疲れたときは、しっかり休みを取ったほうがいい。",
          reading: "Tsukareta toki wa, shikkari yasumi o totta hou ga ii.",
          english: "When you're tired, you should get plenty of rest.",
          meaning:
            "Saat lelah, sebaiknya mengambil libur/istirahat dengan baik.",
        },
      },
      {
        word: "受け取る",
        reading: "uketoru",
        meaning: "menerima",
        sentence: {
          japanese: "荷物は明日自分で受け取ることにした。",
          reading: "Nimotsu wa ashita jibun de uketoru koto ni shita.",
          english: "I decided to receive the package myself tomorrow.",
          meaning: "Paketnya diputuskan untuk diambil/diterima sendiri besok.",
        },
      },
      {
        word: "取材",
        reading: "shuzai",
        meaning: "peliputan, wawancara berita",
        sentence: {
          japanese: "記者が地元の工場へ取材に行った。",
          reading: "Kisha ga jimoto no koujou e shuzai ni itta.",
          english: "The reporter went to cover a story at a local factory.",
          meaning: "Reporter pergi melakukan peliputan ke pabrik setempat.",
        },
      },
    ],
  },
  {
    id: 39,
    kanji: "都",
    onyomi: "ト, ツ",
    kunyomi: "みやこ",
    meaning: "kota metropolitan, ibu kota",
    examples: [
      {
        word: "都会",
        reading: "tokai",
        meaning: "kota besar, perkotaan",
        sentence: {
          japanese: "都会の生活は便利だけれど、少し騒がしい。",
          reading: "Tokai no seikatsu wa benri da keredo, sukoshi sawagashii.",
          english: "City life is convenient, though a bit noisy.",
          meaning: "Kehidupan di kota besar praktis, tetapi agak ramai/bising.",
        },
      },
      {
        word: "首都",
        reading: "shuto",
        meaning: "ibu kota negara",
        sentence: {
          japanese: "東京は日本の首都として知られている。",
          reading: "Toukyou wa Nihon no shuto to shite shirarete iru.",
          english: "Tokyo is known as the capital of Japan.",
          meaning: "Tokyo dikenal sebagai ibu kota Jepang.",
        },
      },
      {
        word: "京都",
        reading: "Kyouto",
        meaning: "Kyoto",
        sentence: {
          japanese: "秋になると、京都へ紅葉を見に行く人が多い。",
          reading: "Aki ni naru to, Kyouto e kouyou o mi ni iku hito ga ooi.",
          english:
            "When autumn comes, many people go to Kyoto to see the autumn leaves.",
          meaning:
            "Saat musim gugur tiba, banyak orang pergi ke Kyoto untuk melihat daun merah.",
        },
      },
    ],
  },
  {
    id: 40,
    kanji: "和",
    onyomi: "ワ, オ",
    kunyomi: "やわ(らぐ), なご(む)",
    meaning: "keharmonisan, gaya Jepang, damai",
    examples: [
      {
        word: "平和",
        reading: "heiwa",
        meaning: "damai, perdamaian",
        sentence: {
          japanese: "平和な世の中が続いてほしいと思う。",
          reading: "Heiwa na yononaka ga tsuzuite hoshii to omou.",
          english: "I hope that a peaceful world continues.",
          meaning: "Saya berharap dunia yang damai terus berlanjut.",
        },
      },
      {
        word: "和食",
        reading: "washoku",
        meaning: "masakan Jepang",
        sentence: {
          japanese: "外国人の友達に和食を作ってもらった。",
          reading: "Gaikokujin no tomodachi ni washoku o tsukutte moratta.",
          english: "I had my foreign friend make Japanese food for me.",
          meaning: "Saya dibuatkan masakan Jepang oleh teman orang asing.",
        },
      },
      {
        word: "和室",
        reading: "washitsu",
        meaning: "kamar bergaya Jepang",
        sentence: {
          japanese: "旅館の和室で畳の上に布団を敷いて寝た。",
          reading: "Ryokan no washitsu de tatami no ue ni futon o shiite neta.",
          english:
            "In the Japanese-style room at the inn, I laid out a futon on the tatami and slept.",
          meaning:
            "Di kamar bergaya Jepang di penginapan, saya menggelar futon di atas tatami lalu tidur.",
        },
      },
    ],
  },
  {
    id: 41,
    kanji: "機",
    onyomi: "キ",
    kunyomi: "はた",
    meaning: "mesin, pesawat, kesempatan",
    examples: [
      {
        word: "機会",
        reading: "kikai",
        meaning: "kesempatan, peluang",
        sentence: {
          japanese: "ネイティブと話せる機会を大切にしたい。",
          reading: "Neitibu to hanaseru kikai o taisetsu ni shitai.",
          english:
            "I want to cherish the opportunity to speak with native speakers.",
          meaning:
            "Saya ingin menghargai kesempatan bisa berbicara dengan penutur asli.",
        },
      },
      {
        word: "機械",
        reading: "kikai",
        meaning: "mesin",
        sentence: {
          japanese: "この機械は使い方が簡単だ。",
          reading: "Kono kikai wa tsukaikata ga kantan da.",
          english: "This machine is easy to use.",
          meaning: "Mesin ini cara pakainya mudah.",
        },
      },
      {
        word: "飛行機",
        reading: "hikouki",
        meaning: "pesawat terbang",
        sentence: {
          japanese: "飛行機で行くほうが、電車よりずっと早い。",
          reading: "Hikouki de iku hou ga, densha yori zutto hayai.",
          english: "Going by airplane is much faster than by train.",
          meaning: "Pergi naik pesawat jauh lebih cepat daripada kereta.",
        },
      },
    ],
  },
  {
    id: 42,
    kanji: "平",
    onyomi: "ヘイ, ビョウ",
    kunyomi: "たい(ら), ひら",
    meaning: "rata, datar, damai",
    examples: [
      {
        word: "平和",
        reading: "heiwa",
        meaning: "perdamaian",
        sentence: {
          japanese: "世界中の人が平和に暮らせるといいですね。",
          reading: "Sekaijuu no hito ga heiwa ni kuraseru to ii desu ne.",
          english:
            "It would be wonderful if people all over the world could live in peace.",
          meaning:
            "Semoga orang-orang di seluruh dunia bisa hidup dengan damai ya.",
        },
      },
      {
        word: "平均",
        reading: "heikin",
        meaning: "rata-rata",
        sentence: {
          japanese: "今回のテストは平均点がかなり高かった。",
          reading: "Konkai no tesuto wa heikinten ga kanari takakatta.",
          english: "The average score for this test was quite high.",
          meaning: "Tes kali ini nilai rata-ratanya lumayan tinggi.",
        },
      },
      {
        word: "平気",
        reading: "heiki",
        meaning: "tidak apa-apa, tenang saja",
        sentence: {
          japanese: "少しぐらい濡れても平気だから、気にしないで。",
          reading: "Sukoshi gurai nurete mo heiki dakara, ki ni shinaide.",
          english:
            "It's fine even if I get a little wet, so don't worry about it.",
          meaning: "Basah sedikit saja tidak apa-apa, jadi jangan dipikirkan.",
        },
      },
    ],
  },
  {
    id: 43,
    kanji: "加",
    onyomi: "カ",
    kunyomi: "くわ(える)",
    meaning: "menambah, penambahan, meningkat, bergabung",
    examples: [
      {
        word: "参加",
        reading: "sanka",
        meaning: "partisipasi, ikut serta",
        sentence: {
          japanese: "明日のイベントに参加するかどうかまだ迷っている。",
          reading: "Ashita no ibento ni sanka suru ka dou ka mada mayotte iru.",
          english:
            "I'm still hesitating whether to participate in tomorrow's event or not.",
          meaning:
            "Saya masih ragu apakah akan ikut serta di acara besok atau tidak.",
        },
      },
      {
        word: "追加",
        reading: "tsuika",
        meaning: "tambahan, menambahkan",
        sentence: {
          japanese: "必要なデータがあれば、あとで追加してください。",
          reading: "Hitsuyou na deeta ga areba, ato de tsuika shite kudasai.",
          english: "If there is any necessary data, please add it later.",
          meaning: "Kalau ada data yang diperlukan, tolong tambahkan nanti.",
        },
      },
      {
        word: "加える",
        reading: "kuwaeru",
        meaning: "menambahkan",
        sentence: {
          japanese: "料理に少し塩を加えて味を調える。",
          reading: "Ryouri ni sukoshi shio o kuwaete aji o totonoeru.",
          english: "Add a little salt to the dish to adjust the flavor.",
          meaning:
            "Menambahkan sedikit garam ke masakan untuk menyesuaikan rasa.",
        },
      },
    ],
  },
  {
    id: 44,
    kanji: "受",
    onyomi: "ジュ",
    kunyomi: "う(ける)",
    meaning: "menerima, mengalami, mengangkat (telepon)",
    examples: [
      {
        word: "受ける",
        reading: "ukeru",
        meaning: "menerima, mengikuti (ujian)",
        sentence: {
          japanese: "来月、日本語能力試験を受ける予定だ。",
          reading: "Raigetsu, Nihongo Nouryoku Shiken o ukeru yotei da.",
          english:
            "I plan to take the Japanese-Language Proficiency Test next month.",
          meaning: "Bulan depan berencana mengikuti ujian JLPT.",
        },
      },
      {
        word: "受付",
        reading: "uketsuke",
        meaning: "resepsionis, loket pendaftaran",
        sentence: {
          japanese: "着いたらまず一階の受付で名前を書いてください。",
          reading: "Tsuitara mazu ikkai no uketsuke de namae o kaite kudasai.",
          english:
            "When you arrive, please first write your name at the first-floor reception.",
          meaning:
            "Begitu tiba, pertama-tama tolong tulis nama di resepsionis lantai satu.",
        },
      },
      {
        word: "受験",
        reading: "juken",
        meaning: "mengikuti ujian masuk",
        sentence: {
          japanese: "受験生は毎日遅くまで勉強している。",
          reading: "Jukensei wa mainichi osoku made benkyou shite iru.",
          english: "Exam candidates study until late every day.",
          meaning:
            "Peserta ujian masuk belajar sampai larut malam setiap hari.",
        },
      },
    ],
  },
  {
    id: 45,
    kanji: "続",
    onyomi: "ゾク",
    kunyomi: "つづ(く)",
    meaning: "melanjutkan, seri, sekuel",
    examples: [
      {
        word: "続く",
        reading: "tsuzuku",
        meaning: "berlanjut, terus berlanjut",
        sentence: {
          japanese: "雨の日が続いているせいで、洗濯物が乾かない。",
          reading:
            "Ame no hi ga tsuzuite iru sei de, sentakumono ga kawakanai.",
          english:
            "Because rainy days have been continuing, the laundry won't dry.",
          meaning:
            "Gara-gara hari hujan terus berlanjut, jemuran tidak kering.",
        },
      },
      {
        word: "続ける",
        reading: "tsuzukeru",
        meaning: "melanjutkan",
        sentence: {
          japanese: "毎日少しでも日本語の勉強を続けることが大切だ。",
          reading:
            "Mainichi sukoshi demo Nihongo no benkyou o tsuzukeru koto ga taisetsu da.",
          english:
            "It is important to continue studying Japanese even a little every day.",
          meaning:
            "Hal yang penting adalah melanjutkan belajar bahasa Jepang meski sedikit setiap hari.",
        },
      },
      {
        word: "連続",
        reading: "renzoku",
        meaning: "berturut-turut, beruntun",
        sentence: {
          japanese: "三日間連続で残業してしまった。",
          reading: "Mikkakan renzoku de zangyou shite shimatta.",
          english: "I ended up working overtime for three days in a row.",
          meaning: "Sudah terlanjur lembur tiga hari berturut-turut.",
        },
      },
    ],
  },
  {
    id: 46,
    kanji: "進",
    onyomi: "シン",
    kunyomi: "すす(む)",
    meaning: "maju, melangkah ke depan",
    examples: [
      {
        word: "進む",
        reading: "susumu",
        meaning: "maju, berkembang",
        sentence: {
          japanese: "計画通りに作業が進んでいる。",
          reading: "Keikaku doori ni sagyou ga susunde iru.",
          english: "The work is progressing according to plan.",
          meaning: "Pekerjaan berjalan maju sesuai rencana.",
        },
      },
      {
        word: "進める",
        reading: "susumeru",
        meaning: "memajukan, melanjutkan",
        sentence: {
          japanese: "準備ができたところから、話を進めていこう。",
          reading: "Junbi ga dekita tokoro kara, hanashi o susumete ikou.",
          english:
            "Let's move the discussion forward starting from the parts that are ready.",
          meaning:
            "Dari bagian yang sudah siap, mari kita lanjutkan pembahasannya.",
        },
      },
      {
        word: "進学",
        reading: "shingaku",
        meaning: "melanjutkan ke jenjang sekolah lebih tinggi",
        sentence: {
          japanese: "高校を卒業したら、大学へ進学するつもりだ。",
          reading:
            "Koukou o sotsugyou shitara, daigaku e shingaku suru tsumori da.",
          english:
            "After graduating from high school, I intend to go on to university.",
          meaning:
            "Setelah lulus SMA, saya berniat melanjutkan ke universitas.",
        },
      },
    ],
  },
  {
    id: 47,
    kanji: "数",
    onyomi: "スウ",
    kunyomi: "かず, かぞ(える)",
    meaning: "angka, jumlah, kekuatan, takdir, menghitung",
    examples: [
      {
        word: "数字",
        reading: "suuji",
        meaning: "angka, numeral",
        sentence: {
          japanese: "グラフの数字をよく確認してから報告する。",
          reading: "Gurafu no suuji o yoku kakunin shite kara houkoku suru.",
          english: "Check the numbers on the graph carefully before reporting.",
          meaning:
            "Setelah mengecek angka pada grafik dengan teliti, baru dilaporkan.",
        },
      },
      {
        word: "数える",
        reading: "kazoeru",
        meaning: "menghitung",
        sentence: {
          japanese: "指を折って日数を数えてみた。",
          reading: "Yubi o otte nissuu o kazoete mita.",
          english: "I tried counting the number of days on my fingers.",
          meaning: "Saya mencoba menghitung jumlah hari dengan melipat jari.",
        },
      },
      {
        word: "多数",
        reading: "tasuu",
        meaning: "jumlah besar, mayoritas",
        sentence: {
          japanese: "その意見に賛成する人が多数を占めた。",
          reading: "Sono iken ni sansei suru hito ga tasuu o shimeta.",
          english: "People who agreed with that opinion made up the majority.",
          meaning: "Orang yang menyetujui pendapat itu mendominasi mayoritas.",
        },
      },
    ],
  },
  {
    id: 48,
    kanji: "記",
    onyomi: "キ",
    kunyomi: "しる(す)",
    meaning: "mencatat, catatan, kisah",
    examples: [
      {
        word: "記事",
        reading: "kiji",
        meaning: "artikel berita",
        sentence: {
          japanese: "ネットで見つけた記事を友達に送った。",
          reading: "Netto de mitsuketa kiji o tomodachi ni okutta.",
          english: "I sent an article I found online to my friend.",
          meaning: "Saya mengirim artikel yang kutemukan di internet ke teman.",
        },
      },
      {
        word: "記録",
        reading: "kiroku",
        meaning: "rekaman, catatan",
        sentence: {
          japanese: "昨日の試合で新しい記録が生まれた。",
          reading: "Kinou no shiai de atarashii kiroku ga umareta.",
          english: "A new record was set in yesterday's match.",
          meaning: "Pada pertandingan kemarin tercipta rekor baru.",
        },
      },
      {
        word: "日記",
        reading: "nikki",
        meaning: "buku harian",
        sentence: {
          japanese: "寝る前にその日の出来事を日記に書く。",
          reading: "Neru mae ni sono hi no dekigoto o nikki ni kaku.",
          english:
            "Before going to bed, I write down the day's events in my diary.",
          meaning: "Sebelum tidur, menulis kejadian hari itu di buku harian.",
        },
      },
    ],
  },
  {
    id: 49,
    kanji: "初",
    onyomi: "ショ",
    kunyomi: "はじ(め), はつ",
    meaning: "pertama kali, awal",
    examples: [
      {
        word: "初めて",
        reading: "hajimete",
        meaning: "pertama kali",
        sentence: {
          japanese: "寿司を初めて食べたときのことをよく覚えている。",
          reading: "Sushi o hajimete tabeta toki no koto o yoku oboete iru.",
          english: "I remember well the first time I ate sushi.",
          meaning: "Saya ingat betul saat pertama kali makan sushi.",
        },
      },
      {
        word: "最初",
        reading: "saisho",
        meaning: "awal, pertama",
        sentence: {
          japanese: "最初に説明したルールをよく守ってください。",
          reading: "Saisho ni setsumei shita ruuru o yoku mamotte kudasai.",
          english:
            "Please follow the rules explained at the beginning carefully.",
          meaning: "Tolong patuhi aturan yang dijelaskan di awal dengan baik.",
        },
      },
      {
        word: "初級",
        reading: "shokyuu",
        meaning: "tingkat pemula/dasar",
        sentence: {
          japanese: "初級コースを終えてから、中級に進む。",
          reading: "Shokyuu koosu o oete kara, chuukyuu ni susumu.",
          english:
            "After finishing the beginner course, I will move on to intermediate.",
          meaning:
            "Setelah menyelesaikan kursus tingkat dasar, lanjut ke tingkat menengah.",
        },
      },
    ],
  },
  {
    id: 50,
    kanji: "指",
    onyomi: "シ",
    kunyomi: "ゆび, さ(す)",
    meaning: "jari, menunjuk, menunjukkan",
    examples: [
      {
        word: "指",
        reading: "yubi",
        meaning: "jari",
        sentence: {
          japanese: "ドアに指を挟んでしまって、とても痛い。",
          reading: "Doa ni yubi o hasande shimatte, totemo itai.",
          english: "I got my finger caught in the door, and it hurts a lot.",
          meaning: "Jari terlanjur terjepit pintu, sakit sekali.",
        },
      },
      {
        word: "指す",
        reading: "sasu",
        meaning: "menunjuk",
        sentence: {
          japanese: "時計の針が十二時を指している。",
          reading: "Tokei no hari ga juuniji o sashite iru.",
          english: "The hands of the clock are pointing to twelve o'clock.",
          meaning: "Jarum jam menunjuk ke pukul dua belas.",
        },
      },
      {
        word: "指導",
        reading: "shidou",
        meaning: "bimbingan, arahan",
        sentence: {
          japanese: "先生の指導のおかげで、発音が良くなった。",
          reading: "Sensei no shidou no okage de, hatsuon ga yoku natta.",
          english:
            "Thanks to the teacher's guidance, my pronunciation improved.",
          meaning: "Berkat bimbingan guru, pelafalan menjadi lebih baik.",
        },
      },
    ],
  },
  {
    id: 51,
    kanji: "権",
    onyomi: "ケン",
    kunyomi: "",
    meaning: "wewenang, kekuasaan, hak",
    examples: [
      {
        word: "権利",
        reading: "kenri",
        meaning: "hak",
        sentence: {
          japanese: "誰にでも平等に与えられた権利がある。",
          reading: "Dare ni demo byoudou ni ataerareta kenri ga aru.",
          english: "Everyone has rights granted equally.",
          meaning: "Setiap orang memiliki hak yang diberikan secara setara.",
        },
      },
      {
        word: "人権",
        reading: "jinken",
        meaning: "hak asasi manusia",
        sentence: {
          japanese: "人権を尊重する社会を作りたい。",
          reading: "Jinken o sonchou suru shakai o tsukuritai.",
          english: "I want to build a society that respects human rights.",
          meaning:
            "Saya ingin menciptakan masyarakat yang menghormati hak asasi manusia.",
        },
      },
      {
        word: "政権",
        reading: "seiken",
        meaning: "kekuasaan politik/pemerintahan",
        sentence: {
          japanese: "選挙の結果によって、政権が変わることがある。",
          reading: "Senkyo no kekka ni yotte, seiken ga kawaru koto ga aru.",
          english:
            "Depending on the election results, the administration may change.",
          meaning:
            "Tergantung hasil pemilu, ada kalanya pemerintahan berganti.",
        },
      },
    ],
  },
  {
    id: 52,
    kanji: "支",
    onyomi: "シ",
    kunyomi: "ささ(える)",
    meaning: "cabang, mendukung, menopang",
    examples: [
      {
        word: "支店",
        reading: "shiten",
        meaning: "kantor cabang",
        sentence: {
          japanese: "彼は大阪の支店に転勤することになった。",
          reading: "Kare wa Oosaka no shiten ni tenkin suru koto ni natta.",
          english:
            "It was decided that he would be transferred to the Osaka branch.",
          meaning:
            "Diputuskan bahwa dia akan dimutasi ke kantor cabang di Osaka.",
        },
      },
      {
        word: "支える",
        reading: "sasaeru",
        meaning: "menopang, mendukung",
        sentence: {
          japanese: "家族に支えられたからこそ、ここまで頑張れた。",
          reading: "Kazoku ni sasaerareta kara koso, koko made ganbareta.",
          english:
            "Precisely because I was supported by my family, I could persevere this far.",
          meaning:
            "Justru karena didukung keluarga, saya bisa bertahan sejauh ini.",
        },
      },
      {
        word: "支持",
        reading: "shiji",
        meaning: "dukungan",
        sentence: {
          japanese: "その提案には多くの人から支持が集まった。",
          reading: "Sono teian ni wa ooku no hito kara shiji ga atsumatta.",
          english: "That proposal gathered support from many people.",
          meaning: "Usulan itu mengumpulkan dukungan dari banyak orang.",
        },
      },
    ],
  },
  {
    id: 53,
    kanji: "産",
    onyomi: "サン",
    kunyomi: "う(む), む(す)",
    meaning: "produksi, produk, melahirkan",
    examples: [
      {
        word: "産業",
        reading: "sangyou",
        meaning: "industri",
        sentence: {
          japanese: "この地域の主な産業は農業だ。",
          reading: "Kono chiiki no omo na sangyou wa nougyou da.",
          english: "The main industry of this region is agriculture.",
          meaning: "Industri utama di wilayah ini adalah pertanian.",
        },
      },
      {
        word: "生産",
        reading: "seisan",
        meaning: "produksi",
        sentence: {
          japanese: "この工場では自動車の部品を生産している。",
          reading: "Kono koujou de wa jidousha no buhin o seisan shite iru.",
          english: "Automobile parts are produced at this factory.",
          meaning: "Di pabrik ini memproduksi komponen mobil.",
        },
      },
      {
        word: "出産",
        reading: "shussan",
        meaning: "persalinan, melahirkan",
        sentence: {
          japanese: "妹は来月、出産を控えている。",
          reading: "Imouto wa raigetsu, shussan o hikaete iru.",
          english: "My younger sister is expecting to give birth next month.",
          meaning:
            "Adik perempuan saya bulan depan akan menghadapi persalinan.",
        },
      },
    ],
  },
  {
    id: 54,
    kanji: "点",
    onyomi: "テン",
    kunyomi: "つ(ける)",
    meaning: "titik, poin, nilai, menyalakan",
    examples: [
      {
        word: "点数",
        reading: "tensuu",
        meaning: "nilai, skor",
        sentence: {
          japanese: "思ったほど点数が取れなくて、残念だった。",
          reading: "Omotta hodo tensuu ga torenakute, zannen datta.",
          english:
            "I couldn't score as well as I thought, which was disappointing.",
          meaning: "Tidak bisa meraih nilai sesuai dugaan, mengecewakan.",
        },
      },
      {
        word: "弱点",
        reading: "jakuten",
        meaning: "kelemahan",
        sentence: {
          japanese: "自分の弱点を知ることは成長につながる。",
          reading: "Jibun no jakuten o shiru koto wa seichou ni tsunagaru.",
          english: "Knowing your own weaknesses leads to growth.",
          meaning: "Mengetahui kelemahan sendiri mengarah pada pertumbuhan.",
        },
      },
      {
        word: "要点",
        reading: "youten",
        meaning: "poin utama, inti",
        sentence: {
          japanese: "長い説明よりも、要点を短くまとめたほうがいい。",
          reading:
            "Nagai setsumei yori mo, youten o mijikaku matometa hou ga ii.",
          english:
            "Rather than a long explanation, it's better to summarize the main points briefly.",
          meaning:
            "Daripada penjelasan panjang, sebaiknya merangkum poin utama secara singkat.",
        },
      },
    ],
  },
  {
    id: 55,
    kanji: "報",
    onyomi: "ホウ",
    kunyomi: "むく(いる)",
    meaning: "laporan, berita, imbalan, membalas",
    examples: [
      {
        word: "報告",
        reading: "houkoku",
        meaning: "laporan, melaporkan",
        sentence: {
          japanese: "進捗状況をチームに報告する必要がある。",
          reading:
            "Shinchoku joukyou o chiimu ni houkoku suru hitsuyou ga aru.",
          english: "We need to report the progress status to the team.",
          meaning: "Perlu melaporkan status progres ke tim.",
        },
      },
      {
        word: "情報",
        reading: "jouhou",
        meaning: "informasi",
        sentence: {
          japanese: "インターネットで正しい情報を探すのは意外と大変だ。",
          reading:
            "Intaanetto de tadashii jouhou o sagasu no wa igai ni taihen da.",
          english:
            "Finding accurate information on the internet is surprisingly hard.",
          meaning:
            "Mencari informasi yang benar di internet ternyata lumayan sulit.",
        },
      },
      {
        word: "天気予報",
        reading: "tenki yohou",
        meaning: "ramalan cuaca",
        sentence: {
          japanese: "天気予報によると、明日は晴れらしい。",
          reading: "Tenki yohou ni yoru to, ashita wa hare rashii.",
          english:
            "According to the weather forecast, it seems it will be sunny tomorrow.",
          meaning: "Menurut ramalan cuaca, besok sepertinya cerah.",
        },
      },
    ],
  },
  {
    id: 56,
    kanji: "済",
    onyomi: "サイ, セイ",
    kunyomi: "す(む)",
    meaning: "menyelesaikan, meringankan, selesai",
    examples: [
      {
        word: "経済",
        reading: "keizai",
        meaning: "ekonomi",
        sentence: {
          japanese: "大学で経済について勉強している。",
          reading: "Daigaku de keizai ni tsuite benkyou shite iru.",
          english: "I am studying economics at university.",
          meaning: "Saya belajar tentang ekonomi di universitas.",
        },
      },
      {
        word: "済む",
        reading: "sumu",
        meaning: "selesai, beres",
        sentence: {
          japanese: "用事が済んだら、すぐ帰ります。",
          reading: "Youji ga sundara, sugu kaerimasu.",
          english: "Once my errands are done, I will go home right away.",
          meaning: "Begitu urusannya beres, saya akan langsung pulang.",
        },
      },
      {
        word: "返済",
        reading: "hensai",
        meaning: "pembayaran kembali, pelunasan",
        sentence: {
          japanese: "借りたお金は来月までに返済するつもりだ。",
          reading: "Karita okane wa raigetsu made ni hensai suru tsumori da.",
          english: "I intend to pay back the borrowed money by next month.",
          meaning:
            "Uang yang dipinjam berniat dilunasi paling lambat bulan depan.",
        },
      },
    ],
  },
  {
    id: 57,
    kanji: "活",
    onyomi: "カツ",
    kunyomi: "",
    meaning: "hidup, aktif",
    examples: [
      {
        word: "生活",
        reading: "seikatsu",
        meaning: "kehidupan sehari-hari",
        sentence: {
          japanese: "日本に来てから、生活リズムがずいぶん変わった。",
          reading: "Nihon ni kite kara, seikatsu rizumu ga zuibun kawatta.",
          english:
            "Since coming to Japan, my daily routine has changed considerably.",
          meaning:
            "Sejak datang ke Jepang, ritme kehidupan berubah cukup banyak.",
        },
      },
      {
        word: "活動",
        reading: "katsudou",
        meaning: "aktivitas, kegiatan",
        sentence: {
          japanese: "週末はボランティア活動に参加している。",
          reading: "Shuumatsu wa borantia katsudou ni sanka shite iru.",
          english: "On weekends, I participate in volunteer activities.",
          meaning: "Akhir pekan saya ikut serta dalam kegiatan relawan.",
        },
      },
      {
        word: "活用",
        reading: "katsuyou",
        meaning: "pemanfaatan, konjugasi",
        sentence: {
          japanese: "学んだ単語を会話の中で活用していきたい。",
          reading: "Mananda tango o kaiwa no naka de katsuyou shite ikitai.",
          english:
            "I want to keep putting the vocabulary I've learned to use in conversation.",
          meaning:
            "Saya ingin terus memanfaatkan kosakata yang dipelajari di dalam percakapan.",
        },
      },
    ],
  },
  {
    id: 58,
    kanji: "原",
    onyomi: "ゲン",
    kunyomi: "はら",
    meaning: "asli, asal, padang",
    examples: [
      {
        word: "原因",
        reading: "gen'in",
        meaning: "penyebab",
        sentence: {
          japanese: "エラーの原因を調べるのに時間がかかった。",
          reading: "Eraa no gen'in o shiraberu no ni jikan ga kakatta.",
          english: "It took time to investigate the cause of the error.",
          meaning: "Memakan waktu untuk menyelidiki penyebab error.",
        },
      },
      {
        word: "高原",
        reading: "kougen",
        meaning: "dataran tinggi",
        sentence: {
          japanese: "夏は涼しい高原へキャンプに行く人が多い。",
          reading: "Natsu wa suzushii kougen e kyanpu ni iku hito ga ooi.",
          english: "In summer, many people go camping in the cool highlands.",
          meaning:
            "Saat musim panas, banyak orang pergi berkemah ke dataran tinggi yang sejuk.",
        },
      },
      {
        word: "原稿",
        reading: "genkou",
        meaning: "naskah, draf tulisan",
        sentence: {
          japanese: "締め切り前に原稿を書き終えることができた。",
          reading: "Shimekiri mae ni genkou o kakioeru koto ga dekita.",
          english:
            "I was able to finish writing the manuscript before the deadline.",
          meaning:
            "Saya bisa menyelesaikan penulisan naskah sebelum tenggat waktu.",
        },
      },
    ],
  },
  {
    id: 59,
    kanji: "共",
    onyomi: "キョウ",
    kunyomi: "とも",
    meaning: "bersama, keduanya",
    examples: [
      {
        word: "共通",
        reading: "kyoutsuu",
        meaning: "umum, kesamaan",
        sentence: {
          japanese: "二人に共通する趣味は映画鑑賞だ。",
          reading: "Futari ni kyoutsuu suru shumi wa eiga kanshou da.",
          english:
            "The hobby the two of them have in common is watching movies.",
          meaning:
            "Hobi yang sama-sama dimiliki keduanya adalah menonton film.",
        },
      },
      {
        word: "共同",
        reading: "kyoudou",
        meaning: "kerja sama, bersama",
        sentence: {
          japanese: "別のチームと共同でプロジェクトを進めている。",
          reading: "Betsu no chiimu to kyoudou de purojekuto o susumete iru.",
          english: "We are advancing the project jointly with another team.",
          meaning:
            "Kami menjalankan proyek secara bersama-sama dengan tim lain.",
        },
      },
      {
        word: "共に",
        reading: "tomo ni",
        meaning: "bersama-sama",
        sentence: {
          japanese: "時間を共に過ごすことで、信頼が深まる。",
          reading: "Jikan o tomo ni sugosu koto de, shinrai ga fukamaru.",
          english: "By spending time together, trust deepens.",
          meaning:
            "Dengan menghabiskan waktu bersama-sama, kepercayaan semakin mendalam.",
        },
      },
    ],
  },
  {
    id: 60,
    kanji: "得",
    onyomi: "トク",
    kunyomi: "え(る)",
    meaning: "memperoleh, mendapatkan, menemukan, bisa, untung",
    examples: [
      {
        word: "得る",
        reading: "eru",
        meaning: "memperoleh, mendapatkan",
        sentence: {
          japanese: "この経験から多くの学びを得ることができた。",
          reading: "Kono keiken kara ooku no manabi o eru koto ga dekita.",
          english: "I was able to gain many lessons from this experience.",
          meaning: "Dari pengalaman ini saya bisa memperoleh banyak pelajaran.",
        },
      },
      {
        word: "得意",
        reading: "tokui",
        meaning: "ahli/jago di bidang tertentu",
        sentence: {
          japanese: "料理を作るのは得意ではないけれど、食べるのは好きだ。",
          reading:
            "Ryouri o tsukuru no wa tokui de wa nai keredo, taberu no wa suki da.",
          english: "I'm not good at cooking, though I love eating.",
          meaning:
            "Membuat masakan bukan keahlian saya, tetapi makan saya suka.",
        },
      },
      {
        word: "納得",
        reading: "nattoku",
        meaning: "paham dan setuju, meyakinkan",
        sentence: {
          japanese: "丁寧な説明を聞いて、ようやく納得できた。",
          reading: "Teinei na setsumei o kiite, youyaku nattoku dekita.",
          english:
            "After listening to the thorough explanation, I was finally convinced.",
          meaning:
            "Setelah mendengar penjelasan yang rinci, akhirnya bisa paham dan menerima.",
        },
      },
    ],
  },
  {
    id: 61,
    kanji: "解",
    onyomi: "カイ, ゲ",
    kunyomi: "と(く), ほど(く)",
    meaning: "mengurai, memecahkan, penjelasan",
    examples: [
      {
        word: "理解",
        reading: "rikai",
        meaning: "pemahaman, mengerti",
        sentence: {
          japanese: "相手の立場を理解しようとする姿勢が大切だ。",
          reading:
            "Aite no tachiba o rikai shiyou to suru shisei ga taisetsu da.",
          english:
            "An attitude of trying to understand the other person's position is important.",
          meaning: "Sikap berusaha memahami posisi pihak lain itu penting.",
        },
      },
      {
        word: "解決",
        reading: "kaiketsu",
        meaning: "penyelesaian masalah",
        sentence: {
          japanese: "まだ解決していない問題がいくつか残っている。",
          reading: "Mada kaiketsu shite inai mondai ga ikutsuka nokotte iru.",
          english: "Several unsolved problems still remain.",
          meaning: "Masih tersisa beberapa masalah yang belum terselesaikan.",
        },
      },
      {
        word: "解く",
        reading: "toku",
        meaning: "memecahkan (soal), melepaskan",
        sentence: {
          japanese: "この問題は難しすぎて、なかなか解けない。",
          reading: "Kono mondai wa muzukashisugite, nakanaka tokenai.",
          english: "This problem is too difficult, so I can't easily solve it.",
          meaning:
            "Soal ini terlalu sulit, jadi tidak kunjung bisa terpecahkan.",
        },
      },
    ],
  },
  {
    id: 62,
    kanji: "交",
    onyomi: "コウ",
    kunyomi: "まじ(わる), ま(ぜる), か(わす)",
    meaning: "berbaur, mencampur, pergaulan, bertukar",
    examples: [
      {
        word: "交通",
        reading: "koutsuu",
        meaning: "lalu lintas, transportasi",
        sentence: {
          japanese: "ラッシュ時は交通機関がかなり混雑する。",
          reading: "Rasshu-ji wa koutsuu kikan ga kanari konzatsu suru.",
          english: "Public transportation gets quite crowded during rush hour.",
          meaning: "Saat jam sibuk, transportasi umum cukup padat/macet.",
        },
      },
      {
        word: "交換",
        reading: "koukan",
        meaning: "pertukaran, menukar",
        sentence: {
          japanese: "友達と連絡先を交換してから別れた。",
          reading: "Tomodachi to renrakusaki o koukan shite kara wakareta.",
          english:
            "My friend and I exchanged contact information before parting ways.",
          meaning: "Setelah bertukar kontak dengan teman, kami berpisah.",
        },
      },
      {
        word: "交際",
        reading: "kousai",
        meaning: "pergaulan, berpacaran",
        sentence: {
          japanese: "彼とは大学時代から交際が続いている。",
          reading: "Kare to wa daigaku jidai kara kousai ga tsuzuite iru.",
          english: "I have been dating him since our university days.",
          meaning: "Hubungan dengannya berlanjut sejak masa kuliah.",
        },
      },
    ],
  },
  {
    id: 63,
    kanji: "資",
    onyomi: "シ",
    kunyomi: "",
    meaning: "aset, sumber daya, modal, dana, data",
    examples: [
      {
        word: "資料",
        reading: "shiryou",
        meaning: "data, materi, dokumen referensi",
        sentence: {
          japanese: "会議の前に資料に目を通しておいたほうがいい。",
          reading: "Kaigi no mae ni shiryou ni me o tooshite oita hou ga ii.",
          english: "You should look through the documents before the meeting.",
          meaning: "Sebaiknya membaca sekilas materi/dokumen sebelum rapat.",
        },
      },
      {
        word: "資格",
        reading: "shikaku",
        meaning: "kualifikasi, lisensi/sertifikat",
        sentence: {
          japanese: "就職に役立つ資格を取るために勉強中だ。",
          reading:
            "Shuushoku ni yakudatsu shikaku o toru tame ni benkyouchuu da.",
          english:
            "I am studying to get qualifications that are useful for job hunting.",
          meaning:
            "Sedang belajar demi mendapatkan sertifikat yang berguna untuk melamar kerja.",
        },
      },
      {
        word: "資源",
        reading: "shigen",
        meaning: "sumber daya",
        sentence: {
          japanese: "天然資源を大切に使う必要がある。",
          reading: "Tennen shigen o taisetsu ni tsukau hitsuyou ga aru.",
          english: "We need to use natural resources carefully.",
          meaning: "Perlu menggunakan sumber daya alam secara bijak.",
        },
      },
    ],
  },
  {
    id: 64,
    kanji: "予",
    onyomi: "ヨ, シャ",
    kunyomi: "あらかじ(め)",
    meaning: "sebelumnya, terlebih dahulu, saya",
    examples: [
      {
        word: "予定",
        reading: "yotei",
        meaning: "rencana, jadwal",
        sentence: {
          japanese: "予定が変わったら、早めに知らせてください。",
          reading: "Yotei ga kawattara, hayame ni shirasete kudasai.",
          english: "If your schedule changes, please let me know early.",
          meaning: "Kalau jadwal berubah, tolong beri tahu lebih awal.",
        },
      },
      {
        word: "予約",
        reading: "yoyaku",
        meaning: "reservasi, pemesanan",
        sentence: {
          japanese: "ホテルはもう予約してあるから安心だ。",
          reading: "Hoteru wa mou yoyaku shite aru kara anshin da.",
          english: "The hotel is already booked, so I'm relieved.",
          meaning: "Hotelnya sudah dipesan sebelumnya, jadi aman.",
        },
      },
      {
        word: "予想",
        reading: "yosou",
        meaning: "dugaan, perkiraan",
        sentence: {
          japanese: "予想以上にたくさんの人が集まった。",
          reading: "Yosou ijou ni takusan no hito ga atsumatta.",
          english: "More people gathered than expected.",
          meaning: "Orang yang berkumpul jauh lebih banyak dari perkiraan.",
        },
      },
    ],
  },
  {
    id: 65,
    kanji: "向",
    onyomi: "コウ",
    kunyomi: "む(く), むか(い)",
    meaning: "menghadap, menuju, seberang",
    examples: [
      {
        word: "向かう",
        reading: "mukau",
        meaning: "menuju, menghadap ke",
        sentence: {
          japanese: "これからみんなで会場へ向かうところだ。",
          reading: "Kore kara minna de kaijou e mukau tokoro da.",
          english: "We are all just about to head to the venue now.",
          meaning: "Sekarang kami semua sedang menuju ke lokasi acara.",
        },
      },
      {
        word: "方向",
        reading: "houkou",
        meaning: "arah",
        sentence: {
          japanese: "そっちの方向へ行くと、駅に出られるよ。",
          reading: "Socchi no houkou e iku to, eki ni derareru yo.",
          english:
            "If you go in that direction, you'll come out at the station.",
          meaning: "Kalau pergi ke arah sana, bisa sampai ke stasiun.",
        },
      },
      {
        word: "向上",
        reading: "koujou",
        meaning: "peningkatan, kemajuan",
        sentence: {
          japanese: "リスニング力を向上させるために毎日聞いている。",
          reading:
            "Risuningu-ryoku o koujou saseru tame ni mainichi kiite iru.",
          english: "I listen every day to improve my listening skills.",
          meaning:
            "Demi meningkatkan kemampuan menyimak, saya mendengarkannya setiap hari.",
        },
      },
    ],
  },
  {
    id: 66,
    kanji: "際",
    onyomi: "サイ",
    kunyomi: "きわ",
    meaning: "kesempatan, saat, tepi",
    examples: [
      {
        word: "実際",
        reading: "jissai",
        meaning: "sebenarnya, kenyataan",
        sentence: {
          japanese: "実際に見ると、写真よりずっときれいだ。",
          reading: "Jissai ni miru to, shashin yori zutto kirei da.",
          english:
            "When you see it in person, it is much prettier than in photos.",
          meaning:
            "Kalau dilihat secara langsung, jauh lebih indah daripada foto.",
        },
      },
      {
        word: "国際",
        reading: "kokusai",
        meaning: "internasional",
        sentence: {
          japanese: "国際的なイベントが来月この街で開かれる。",
          reading:
            "Kokusai-teki na ibento ga raigetsu kono machi de hirakareru.",
          english:
            "An international event will be held in this city next month.",
          meaning:
            "Acara berskala internasional akan diadakan di kota ini bulan depan.",
        },
      },
      {
        word: "〜際",
        reading: "~sai",
        meaning: "pada saat / ketika ~",
        sentence: {
          japanese: "外出する際は、戸締まりを確認してください。",
          reading: "Gaishutsu suru sai wa, tojimari o kakunin shite kudasai.",
          english:
            "When going out, please check that the doors and windows are locked.",
          meaning:
            "Pada saat keluar rumah, tolong periksa penguncian pintu/jendela.",
        },
      },
    ],
  },
  {
    id: 67,
    kanji: "勝",
    onyomi: "ショウ",
    kunyomi: "か(つ), まさ(る)",
    meaning: "kemenangan, menang, mengungguli",
    examples: [
      {
        word: "勝つ",
        reading: "katsu",
        meaning: "menang",
        sentence: {
          japanese: "練習を頑張ったから、試合に勝てたと思う。",
          reading: "Renshuu o ganbatta kara, shiai ni kateta to omou.",
          english:
            "Because we practiced hard, I think we were able to win the match.",
          meaning:
            "Karena giat berlatih, saya rasa bisa menang di pertandingan.",
        },
      },
      {
        word: "優勝",
        reading: "yuushou",
        meaning: "juara umum/kejuaraan",
        sentence: {
          japanese: "私たちのチームが大会で優勝した。",
          reading: "Watashitachi no chiimu ga taikai de yuushou shita.",
          english: "Our team won the championship at the tournament.",
          meaning: "Tim kami menjuarai turnamen tersebut.",
        },
      },
      {
        word: "勝負",
        reading: "shoubu",
        meaning: "pertandingan, pertarungan",
        sentence: {
          japanese: "勝負は最後の最後まで分からない。",
          reading: "Shoubu wa saigo no saigo made wakaranai.",
          english: "The outcome of a match is unknown until the very end.",
          meaning:
            "Hasil pertandingan belum bisa dipastikan sampai detik-detik terakhir.",
        },
      },
    ],
  },
  {
    id: 68,
    kanji: "面",
    onyomi: "メン",
    kunyomi: "おも, おもて, つら",
    meaning: "topeng, wajah, sisi, permukaan",
    examples: [
      {
        word: "場面",
        reading: "bamen",
        meaning: "adegan, situasi",
        sentence: {
          japanese: "映画の中で一番印象に残った場面がある。",
          reading: "Eiga no naka de ichiban inshou ni nokotta bamen ga aru.",
          english:
            "There is a scene in the movie that left the strongest impression on me.",
          meaning:
            "Di dalam film itu ada adegan yang paling membekas di ingatan.",
        },
      },
      {
        word: "画面",
        reading: "gamen",
        meaning: "layar",
        sentence: {
          japanese: "スマホの画面を見すぎて、目が疲れた。",
          reading: "Sumaho no gamen o misugite, me ga tsukareta.",
          english:
            "I stared at my smartphone screen too much, so my eyes got tired.",
          meaning: "Terlalu lama melihat layar ponsel, mata jadi lelah.",
        },
      },
      {
        word: "側面",
        reading: "sokumen",
        meaning: "sisi samping, aspek",
        sentence: {
          japanese: "別の側面からこの問題を見てみよう。",
          reading: "Betsu no sokumen kara kono mondai o mite miyou.",
          english: "Let's try looking at this problem from a different aspect.",
          meaning: "Mari kita coba lihat masalah ini dari aspek yang berbeda.",
        },
      },
    ],
  },
  {
    id: 69,
    kanji: "告",
    onyomi: "コク",
    kunyomi: "つ(げる)",
    meaning: "pemberitahuan, menginformasikan, menyatakan",
    examples: [
      {
        word: "報告",
        reading: "houkoku",
        meaning: "laporan",
        sentence: {
          japanese: "結果が出次第、すぐに報告します。",
          reading: "Kekka ga de shidai, sugu ni houkoku shimasu.",
          english:
            "As soon as the results come out, I will report them right away.",
          meaning: "Begitu hasilnya keluar, akan segera dilaporkan.",
        },
      },
      {
        word: "広告",
        reading: "koukoku",
        meaning: "iklan",
        sentence: {
          japanese: "電車の中でその商品の広告をよく見かける。",
          reading: "Densha no naka de sono shouhin no koukoku o yoku mikakeru.",
          english: "I often see advertisements for that product on the train.",
          meaning: "Di dalam kereta sering melihat iklan produk tersebut.",
        },
      },
      {
        word: "警告",
        reading: "keikoku",
        meaning: "peringatan",
        sentence: {
          japanese: "危険なエリアなので、警告が出ている。",
          reading: "Kiken na eria na node, keikoku ga dete iru.",
          english: "Since it's a dangerous area, a warning has been issued.",
          meaning: "Karena area berbahaya, peringatan sedang dikeluarkan.",
        },
      },
    ],
  },
  {
    id: 70,
    kanji: "反",
    onyomi: "ハン",
    kunyomi: "そ(る)",
    meaning: "anti-, melawan, melengkung",
    examples: [
      {
        word: "反対",
        reading: "hantai",
        meaning: "menentang, berlawanan",
        sentence: {
          japanese: "賛成の人もいれば、反対の人もいる。",
          reading: "Sansei no hito mo ireba, hantai no hito mo iru.",
          english: "Some people agree, while others oppose.",
          meaning: "Ada yang setuju, ada juga yang menentang.",
        },
      },
      {
        word: "反応",
        reading: "hannou",
        meaning: "reaksi, respons",
        sentence: {
          japanese: "新しい機能に対して、ユーザーの反応がいい。",
          reading: "Atarashii kinou ni taishite, yuuzaa no hannou ga ii.",
          english: "Users' response to the new feature is positive.",
          meaning: "Terhadap fitur baru, respons pengguna bagus.",
        },
      },
      {
        word: "違反",
        reading: "ihan",
        meaning: "pelanggaran",
        sentence: {
          japanese: "ルール違反にならないように気をつける。",
          reading: "Ruuru ihan ni naranai you ni ki o tsukeru.",
          english: "I am careful not to violate the rules.",
          meaning: "Berhati-hati agar tidak menjadi pelanggaran aturan.",
        },
      },
    ],
  },
  {
    id: 71,
    kanji: "判",
    onyomi: "ハン",
    kunyomi: "",
    meaning: "penilaian, keputusan, tanda tangan/cap",
    examples: [
      {
        word: "判断",
        reading: "handan",
        meaning: "penilaian, pertimbangan",
        sentence: {
          japanese: "状況をよく見てから判断したほうがいい。",
          reading: "Joukyou o yoku mite kara handan shita hou ga ii.",
          english:
            "You should make a judgment after looking closely at the situation.",
          meaning: "Sebaiknya menilai setelah melihat situasi dengan baik.",
        },
      },
      {
        word: "批判",
        reading: "hihan",
        meaning: "kritik",
        sentence: {
          japanese: "その決定には厳しい批判が寄せられた。",
          reading: "Sono kettei ni wa kibishii hihan ga yoserareta.",
          english: "Harsh criticism was directed at that decision.",
          meaning: "Kritik tajam diarahkan kepada keputusan tersebut.",
        },
      },
      {
        word: "裁判",
        reading: "saiban",
        meaning: "pengadilan, persidangan",
        sentence: {
          japanese: "裁判の結果がニュースで報じられた。",
          reading: "Saiban no kekka ga nyuusu de houjirareta.",
          english: "The verdict of the trial was reported on the news.",
          meaning: "Hasil persidangan diberitakan di berita.",
        },
      },
    ],
  },
  {
    id: 72,
    kanji: "認",
    onyomi: "ニン",
    kunyomi: "みと(める), したた(める)",
    meaning: "mengakui, menyaksikan, mengenali, menulis",
    examples: [
      {
        word: "認める",
        reading: "mitomeru",
        meaning: "mengakui, menyetujui",
        sentence: {
          japanese: "自分の間違いを素直に認めることも大切だ。",
          reading: "Jibun no machigai o sunao ni mitomeru koto mo taisetsu da.",
          english: "Honestly admitting your own mistakes is also important.",
          meaning: "Mengakui kesalahan sendiri dengan jujur juga penting.",
        },
      },
      {
        word: "確認",
        reading: "kakunin",
        meaning: "konfirmasi, pengecekan",
        sentence: {
          japanese: "送信する前に、内容をもう一度確認してください。",
          reading:
            "Soushin suru mae ni, naiyou o mou ichido kakunin shite kudasai.",
          english: "Before sending, please check the contents once more.",
          meaning:
            "Sebelum mengirim, tolong periksa kembali isinya sekali lagi.",
        },
      },
      {
        word: "承認",
        reading: "shounin",
        meaning: "persetujuan",
        sentence: {
          japanese: "申請はまだ承認されていない。",
          reading: "Shinsei wa mada shounin sarete inai.",
          english: "The application has not been approved yet.",
          meaning: "Pengajuan belum disetujui.",
        },
      },
    ],
  },
  {
    id: 73,
    kanji: "参",
    onyomi: "サン",
    kunyomi: "まい(る)",
    meaning: "pergi/datang (hormat), berpartisipasi, berkunjung",
    examples: [
      {
        word: "参加",
        reading: "sanka",
        meaning: "partisipasi, ikut serta",
        sentence: {
          japanese: "誰でも気軽に参加できるイベントだ。",
          reading: "Dare demo kigaru ni sanka dekiru ibento da.",
          english: "It's an event that anyone can easily join.",
          meaning: "Ini acara yang bisa diikuti dengan santai oleh siapa pun.",
        },
      },
      {
        word: "参る",
        reading: "mairu",
        meaning: "pergi/datang (bentuk merendah)",
        sentence: {
          japanese: "これからそちらへ伺って参ります。",
          reading: "Kore kara sochira e ukagatte mairimasu.",
          english: "I will head over to visit you now.",
          meaning: "Mulai sekarang saya akan datang berkunjung ke sana.",
        },
      },
      {
        word: "参考",
        reading: "sankou",
        meaning: "referensi, acuan",
        sentence: {
          japanese: "先輩のアドバイスを参考にして、資料を作った。",
          reading: "Senpai no adobaisu o sankou ni shite, shiryou o tsukutta.",
          english:
            "Using my senior's advice as a reference, I created the materials.",
          meaning:
            "Dengan menjadikan saran senior sebagai acuan, saya membuat materi.",
        },
      },
    ],
  },
  {
    id: 74,
    kanji: "利",
    onyomi: "リ",
    kunyomi: "き(く)",
    meaning: "keuntungan, manfaat, efektif",
    examples: [
      {
        word: "利用",
        reading: "riyou",
        meaning: "penggunaan, memanfaatkan",
        sentence: {
          japanese: "休日は図書館を利用することが多い。",
          reading: "Kyuujitsu wa toshokan o riyou suru koto ga ooi.",
          english: "I often use the library on holidays.",
          meaning: "Saat hari libur saya sering memanfaatkan perpustakaan.",
        },
      },
      {
        word: "便利",
        reading: "benri",
        meaning: "praktis, nyaman",
        sentence: {
          japanese: "駅の近くにスーパーがあるから、とても便利だ。",
          reading: "Eki no chikaku ni suupaa ga aru kara, totemo benri da.",
          english:
            "Because there is a supermarket near the station, it is very convenient.",
          meaning: "Karena ada supermarket di dekat stasiun, sangat praktis.",
        },
      },
      {
        word: "利益",
        reading: "rieki",
        meaning: "keuntungan, laba",
        sentence: {
          japanese: "双方に利益がある形にしたい。",
          reading: "Souhou ni rieki ga aru katachi ni shitai.",
          english: "I want to make it mutually beneficial for both sides.",
          meaning:
            "Saya ingin menjadikannya bentuk yang menguntungkan kedua belah pihak.",
        },
      },
    ],
  },
  {
    id: 75,
    kanji: "組",
    onyomi: "ソ",
    kunyomi: "く(む), くみ",
    meaning: "perkumpulan, kelompok, menyusun, bersatu",
    examples: [
      {
        word: "番組",
        reading: "bangumi",
        meaning: "acara TV/radio",
        sentence: {
          japanese: "毎週見ているテレビ番組がある。",
          reading: "Maishuu mite iru terebi bangumi ga aru.",
          english: "There is a TV show I watch every week.",
          meaning: "Ada acara TV yang kutonton setiap minggu.",
        },
      },
      {
        word: "組合",
        reading: "kumiai",
        meaning: "serikat, asosiasi",
        sentence: {
          japanese: "地域の組合が祭りを企画している。",
          reading: "Chiiki no kumiai ga matsuri o kikaku shite iru.",
          english: "The local association is planning a festival.",
          meaning: "Asosiasi setempat merencanakan festival.",
        },
      },
      {
        word: "組み立てる",
        reading: "kumitateru",
        meaning: "merakit, menyusun",
        sentence: {
          japanese: "説明書を見ながら、棚を組み立てた。",
          reading: "Setsumeisho o minagara, tana o kumitateta.",
          english:
            "While looking at the instruction manual, I assembled the shelf.",
          meaning: "Sambil melihat buku petunjuk, saya merakit rak.",
        },
      },
    ],
  },
  {
    id: 76,
    kanji: "信",
    onyomi: "シン",
    kunyomi: "",
    meaning: "keyakinan, kebenaran, kepercayaan",
    examples: [
      {
        word: "信じる",
        reading: "shinjiru",
        meaning: "percaya, meyakini",
        sentence: {
          japanese: "自分の力を信じて、最後までやり切ろう。",
          reading: "Jibun no chikara o shinjite, saigo made yarikirou.",
          english:
            "Believe in your own strength and see it through to the end.",
          meaning:
            "Percayalah pada kemampuan sendiri dan tuntaskan sampai akhir.",
        },
      },
      {
        word: "信用",
        reading: "shin'you",
        meaning: "kepercayaan, kredit",
        sentence: {
          japanese: "一度失った信用を取り戻すのは簡単ではない。",
          reading:
            "Ichido ushinatta shin'you o torimodosu no wa kantan de wa nai.",
          english: "Regaining trust once lost is not easy.",
          meaning:
            "Mendapatkan kembali kepercayaan yang sudah hilang sekali tidak mudah.",
        },
      },
      {
        word: "自信",
        reading: "jishin",
        meaning: "percaya diri",
        sentence: {
          japanese: "たくさん練習したおかげで、少し自信がついた。",
          reading: "Takusan renshuu shita okage de, sukoshi jishin ga tsuita.",
          english: "Thanks to practicing a lot, I gained a little confidence.",
          meaning: "Berkat banyak berlatih, rasa percaya diri agak bertambah.",
        },
      },
    ],
  },
  {
    id: 77,
    kanji: "在",
    onyomi: "ザイ",
    kunyomi: "あ(る)",
    meaning: "ada, berada, pinggiran kota",
    examples: [
      {
        word: "存在",
        reading: "sonzai",
        meaning: "keberadaan, eksistensi",
        sentence: {
          japanese: "彼の存在がチームに安心感を与えている。",
          reading: "Kare no sonzai ga chiimu ni anshinkan o ataete iru.",
          english: "His presence gives the team a sense of security.",
          meaning: "Keberadaannya memberikan rasa aman kepada tim.",
        },
      },
      {
        word: "現在",
        reading: "genzai",
        meaning: "sekarang, saat ini",
        sentence: {
          japanese: "現在の状況について説明してください。",
          reading: "Genzai no joukyou ni tsuite setsumei shite kudasai.",
          english: "Please explain about the current situation.",
          meaning: "Tolong jelaskan mengenai situasi saat ini.",
        },
      },
      {
        word: "在学",
        reading: "zaigaku",
        meaning: "sedang bersekolah/kuliah",
        sentence: {
          japanese: "大学在学中にプログラミングを始めた。",
          reading: "Daigaku zaigakuchuu ni puroguramingu o hajimeta.",
          english: "I started programming while enrolled in university.",
          meaning: "Saya mulai belajar pemrograman saat masih kuliah.",
        },
      },
    ],
  },
  {
    id: 78,
    kanji: "件",
    onyomi: "ケン",
    kunyomi: "くだん",
    meaning: "urusan, kasus, perkara, hal",
    examples: [
      {
        word: "事件",
        reading: "jiken",
        meaning: "insiden, kasus, kejadian",
        sentence: {
          japanese: "その事件のニュースを見て驚いた。",
          reading: "Sono jiken no nyuusu o mite odoroita.",
          english: "I was surprised to see the news of that incident.",
          meaning: "Saya terkejut melihat berita tentang insiden itu.",
        },
      },
      {
        word: "条件",
        reading: "jouken",
        meaning: "syarat, kondisi",
        sentence: {
          japanese: "条件が合えば、その仕事を受けたいと思っている。",
          reading: "Jouken ga aeba, sono shigoto o uketai to omotte iru.",
          english: "If the conditions match, I'd like to take that job.",
          meaning:
            "Kalau syaratnya cocok, saya berpikir ingin mengambil pekerjaan itu.",
        },
      },
      {
        word: "件名",
        reading: "kenmei",
        meaning: "subjek/perihal (email/surat)",
        sentence: {
          japanese: "メールを送るときは、件名を分かりやすく書く。",
          reading: "Meeru o okuru toki wa, kenmei o wakariyasuku kaku.",
          english: "When sending an email, write the subject line clearly.",
          meaning:
            "Saat mengirim email, menulis subjek/perihal agar mudah dipahami.",
        },
      },
    ],
  },
  {
    id: 79,
    kanji: "側",
    onyomi: "ソク",
    kunyomi: "がわ, そば",
    meaning: "sisi, pihak, condong, di samping",
    examples: [
      {
        word: "〜側",
        reading: "~gawa",
        meaning: "sisi / pihak ~",
        sentence: {
          japanese: "駅の北側に新しいカフェができた。",
          reading: "Eki no kitagawa ni atarashii kafe ga dekita.",
          english: "A new cafe opened on the north side of the station.",
          meaning: "Di sisi utara stasiun ada kafe baru yang buka.",
        },
      },
      {
        word: "左側",
        reading: "hidarigawa",
        meaning: "sisi kiri",
        sentence: {
          japanese: "エスカレーターでは左側に立ってください。",
          reading: "Esukareetaa de wa hidarigawa ni tatte kudasai.",
          english: "Please stand on the left side on the escalator.",
          meaning: "Di eskalator tolong berdiri di sisi kiri.",
        },
      },
      {
        word: "内側",
        reading: "uchigawa",
        meaning: "bagian dalam",
        sentence: {
          japanese: "カバンの内側に小さなポケットがある。",
          reading: "Kaban no uchigawa ni chiisana poketto ga aru.",
          english: "There is a small pocket on the inside of the bag.",
          meaning: "Di bagian dalam tas ada kantong kecil.",
        },
      },
    ],
  },
  {
    id: 80,
    kanji: "任",
    onyomi: "ニン",
    kunyomi: "まか(せる)",
    meaning: "tanggung jawab, tugas, memercayakan",
    examples: [
      {
        word: "任せる",
        reading: "makaseru",
        meaning: "menyerahkan/memercayakan kepada",
        sentence: {
          japanese: "詳しいことは彼に任せておけば大丈夫だ。",
          reading: "Kuwashii koto wa kare ni makasete okeba daijoubu da.",
          english: "If you leave the details to him, everything will be fine.",
          meaning: "Hal detailnya kalau diserahkan kepadanya, aman saja.",
        },
      },
      {
        word: "責任",
        reading: "sekinin",
        meaning: "tanggung jawab",
        sentence: {
          japanese: "自分の発言には責任を持つべきだ。",
          reading: "Jibun no hatsugen ni wa sekinin o motsu beki da.",
          english: "One should take responsibility for their own statements.",
          meaning: "Seharusnya bertanggung jawab atas perkataan sendiri.",
        },
      },
      {
        word: "就任",
        reading: "shuunin",
        meaning: "mulai menjabat, pelantikan",
        sentence: {
          japanese: "来月から新しい部長が就任する。",
          reading: "Raigetsu kara atarashii buchou ga shuunin suru.",
          english:
            "A new department manager will take office starting next month.",
          meaning:
            "Mulai bulan depan kepala bagian yang baru akan mulai menjabat.",
        },
      },
    ],
  },
  {
    id: 81,
    kanji: "引",
    onyomi: "イン",
    kunyomi: "ひ(く)",
    meaning: "menarik, menghela",
    examples: [
      {
        word: "引く",
        reading: "hiku",
        meaning: "menarik, mengurangi, mencabut",
        sentence: {
          japanese: "ドアを押すのではなく、引いて開けてください。",
          reading: "Doa o osu no de wa naku, hiite akete kudasai.",
          english: "Instead of pushing the door, please pull it open.",
          meaning: "Bukan didorong, tolong tarik pintunya untuk membuka.",
        },
      },
      {
        word: "引っ越す",
        reading: "hikkosu",
        meaning: "pindah rumah",
        sentence: {
          japanese: "来週末、新しい部屋へ引っ越す予定だ。",
          reading: "Raishuumatsu, atarashii heya e hikkosu yotei da.",
          english: "Next weekend, I plan to move into a new room.",
          meaning: "Akhir pekan depan berencana pindah ke kamar baru.",
        },
      },
      {
        word: "割引",
        reading: "waribiki",
        meaning: "diskon, potongan harga",
        sentence: {
          japanese: "学生証を見せると、割引になる店がある。",
          reading: "Gakuseishou o miseru to, waribiki ni naru mise ga aru.",
          english:
            "There are shops that give a discount if you show your student ID.",
          meaning:
            "Kalau menunjukkan kartu pelajar, ada toko yang memberikan diskon.",
        },
      },
    ],
  },
  {
    id: 82,
    kanji: "求",
    onyomi: "キュウ",
    kunyomi: "もと(める)",
    meaning: "permintaan, menginginkan, menuntut, mencari",
    examples: [
      {
        word: "求める",
        reading: "motomeru",
        meaning: "mencari, menginginkan, menuntut",
        sentence: {
          japanese: "今の職場では、主体的に動く力が求められている。",
          reading:
            "Ima no shokuba de wa, shutaiteki ni ugoku chikara ga motomerarete iru.",
          english:
            "At my current workplace, the ability to act proactively is required.",
          meaning:
            "Di tempat kerja sekarang, kemampuan bergerak secara proaktif dituntut.",
        },
      },
      {
        word: "要求",
        reading: "youkyuu",
        meaning: "tuntutan, permintaan",
        sentence: {
          japanese: "ユーザーからの要求に合わせて機能を改善した。",
          reading: "Yuuzaa kara no youkyuu ni awasete kinou o kaizen shita.",
          english: "We improved the features to meet requests from users.",
          meaning: "Menyesuaikan permintaan dari pengguna, fitur diperbaiki.",
        },
      },
      {
        word: "請求",
        reading: "seikyuu",
        meaning: "tagihan, klaim",
        sentence: {
          japanese: "請求書の内容に間違いがないか確認した。",
          reading: "Seikyuusho no naiyou ni machigai ga nai ka kakunin shita.",
          english:
            "I checked whether there were any mistakes in the invoice details.",
          meaning:
            "Saya mengecek apakah ada kesalahan pada isi tagihan atau tidak.",
        },
      },
    ],
  },
  {
    id: 83,
    kanji: "所",
    onyomi: "ショ",
    kunyomi: "ところ",
    meaning: "tempat, lokasi, bagian",
    examples: [
      {
        word: "場所",
        reading: "basho",
        meaning: "tempat, lokasi",
        sentence: {
          japanese: "待ち合わせ場所を駅前に変更しよう。",
          reading: "Machiawase basho o ekimae ni henkou shiyou.",
          english: "Let's change the meeting spot to in front of the station.",
          meaning: "Mari kita ubah lokasi pertemuan menjadi di depan stasiun.",
        },
      },
      {
        word: "近所",
        reading: "kinjo",
        meaning: "lingkungan sekitar, tetangga",
        sentence: {
          japanese: "近所に静かでいいカフェを見つけた。",
          reading: "Kinjo ni shizuka de ii kafe o mitsuketa.",
          english: "I found a quiet and nice cafe in the neighborhood.",
          meaning:
            "Di sekitar rumah saya menemukan kafe yang tenang dan bagus.",
        },
      },
      {
        word: "研究所",
        reading: "kenkyuujo",
        meaning: "lembaga penelitian",
        sentence: {
          japanese: "彼は大学の研究所で働いている。",
          reading: "Kare wa daigaku no kenkyuujo de hataraite iru.",
          english: "He works at the university's research institute.",
          meaning: "Dia bekerja di lembaga penelitian universitas.",
        },
      },
    ],
  },
  {
    id: 84,
    kanji: "次",
    onyomi: "ジ, シ",
    kunyomi: "つ(ぐ), つぎ",
    meaning: "berikutnya, urutan, menyusul",
    examples: [
      {
        word: "次",
        reading: "tsugi",
        meaning: "berikutnya, selanjutnya",
        sentence: {
          japanese: "次の駅で降りて、バスに乗り換える。",
          reading: "Tsugi no eki de orite, basu ni norikaeru.",
          english: "Get off at the next station and transfer to a bus.",
          meaning: "Turun di stasiun berikutnya, lalu pindah naik bus.",
        },
      },
      {
        word: "次回",
        reading: "jikai",
        meaning: "kesempatan/episode berikutnya",
        sentence: {
          japanese: "次回のミーティングは来週の水曜日だ。",
          reading: "Jikai no miitingu wa raishuu no suiyoubi da.",
          english: "The next meeting is next Wednesday.",
          meaning: "Rapat berikutnya adalah hari Rabu minggu depan.",
        },
      },
      {
        word: "目次",
        reading: "mokuji",
        meaning: "daftar isi",
        sentence: {
          japanese: "本を買う前に、まず目次を見るようにしている。",
          reading: "Hon o kau mae ni, mazu mokuji o miru you ni shite iru.",
          english:
            "Before buying a book, I make sure to look at the table of contents first.",
          meaning:
            "Sebelum membeli buku, saya usahakan melihat daftar isinya dulu.",
        },
      },
    ],
  },
  {
    id: 85,
    kanji: "昨",
    onyomi: "サク",
    kunyomi: "",
    meaning: "kemarin, sebelumnya",
    examples: [
      {
        word: "昨日",
        reading: "kinou",
        meaning: "kemarin",
        sentence: {
          japanese: "昨日買った本をもう半分読んだ。",
          reading: "Kinou katta hon o mou hanbun yonda.",
          english: "I've already read half of the book I bought yesterday.",
          meaning: "Buku yang kubeli kemarin sudah kubaca setengahnya.",
        },
      },
      {
        word: "昨年",
        reading: "sakunen",
        meaning: "tahun lalu",
        sentence: {
          japanese: "昨年に比べて、今年は暑くなるのが早い。",
          reading: "Sakunen ni kurabete, kotoshi wa atsuku naru no ga hayai.",
          english:
            "Compared to last year, it is getting hot earlier this year.",
          meaning:
            "Dibandingkan tahun lalu, tahun ini udaranya lebih cepat panas.",
        },
      },
      {
        word: "昨晩",
        reading: "sakuban",
        meaning: "tadi malam",
        sentence: {
          japanese: "昨晩は遅くまで起きていたから、少し眠い。",
          reading: "Sakuban wa osoku made okite ita kara, sukoshi nemui.",
          english: "Because I stayed up late last night, I'm a little sleepy.",
          meaning: "Karena tadi malam begadang sampai larut, agak mengantuk.",
        },
      },
    ],
  },
  {
    id: 86,
    kanji: "論",
    onyomi: "ロン",
    kunyomi: "あげつら(う)",
    meaning: "argumen, diskusi, teori",
    examples: [
      {
        word: "議論",
        reading: "giron",
        meaning: "diskusi, perdebatan",
        sentence: {
          japanese: "そのテーマについては活発な議論が行われた。",
          reading: "Sono teema ni tsuite wa kappatsu na giron ga okonawareta.",
          english: "Lively discussion took place regarding that theme.",
          meaning: "Mengenai topik itu, diskusi yang aktif telah berlangsung.",
        },
      },
      {
        word: "理論",
        reading: "riron",
        meaning: "teori",
        sentence: {
          japanese: "理論だけでなく、実践も大切だ。",
          reading: "Riron dake de naku, jissen mo taisetsu da.",
          english: "Not only theory, but practice is also important.",
          meaning: "Tidak hanya teori, praktik juga penting.",
        },
      },
      {
        word: "結論",
        reading: "ketsuron",
        meaning: "kesimpulan",
        sentence: {
          japanese: "結論を急がずに、よく考えてから決めよう。",
          reading: "Ketsuron o isogazu ni, yoku kangaete kara kimeyou.",
          english:
            "Without rushing to a conclusion, let's think carefully before deciding.",
          meaning:
            "Jangan buru-buru menyimpulkan, mari putuskan setelah berpikir matang.",
        },
      },
    ],
  },
  {
    id: 87,
    kanji: "官",
    onyomi: "カン",
    kunyomi: "",
    meaning: "pejabat/birokrat, pemerintahan, lembaga",
    examples: [
      {
        word: "警察官",
        reading: "keisatsukan",
        meaning: "polisi, petugas polisi",
        sentence: {
          japanese: "道に迷ったので、警察官に道を聞いた。",
          reading: "Michi ni mayotta node, keisatsukan ni michi o kiita.",
          english: "Since I got lost, I asked a police officer for directions.",
          meaning:
            "Karena tersesat di jalan, saya bertanya arah kepada polisi.",
        },
      },
      {
        word: "官庁",
        reading: "kanchou",
        meaning: "kantor pemerintahan",
        sentence: {
          japanese: "官庁の手続きは平日しかできないことが多い。",
          reading:
            "Kanchou no tetsuzuki wa heijitsu shika dekinai koto ga ooi.",
          english:
            "Procedures at government offices can often only be done on weekdays.",
          meaning:
            "Prosedur di kantor pemerintahan sering kali hanya bisa dilakukan di hari kerja.",
        },
      },
      {
        word: "教官",
        reading: "kyoukan",
        meaning: "instruktur, pengajar",
        sentence: {
          japanese: "教官の指示に従って訓練を受けた。",
          reading: "Kyoukan no shiji ni shitagatte kunren o uketa.",
          english:
            "I underwent training following the instructor's directions.",
          meaning: "Saya menjalani pelatihan mengikuti instruksi pengajar.",
        },
      },
    ],
  },
  {
    id: 88,
    kanji: "増",
    onyomi: "ゾウ",
    kunyomi: "ま(す), ふ(える)",
    meaning: "menambah, bertambah, meningkat",
    examples: [
      {
        word: "増える",
        reading: "fueru",
        meaning: "bertambah, meningkat",
        sentence: {
          japanese: "最近、在宅で働く人が増えている。",
          reading: "Saikin, zaitaku de hataraku hito ga fuete iru.",
          english:
            "Recently, the number of people working from home has been increasing.",
          meaning:
            "Belakangan ini, orang yang bekerja dari rumah semakin bertambah.",
        },
      },
      {
        word: "増やす",
        reading: "fuyasu",
        meaning: "menambah",
        sentence: {
          japanese: "読書の時間をもう少し増やしたい。",
          reading: "Dokusho no jikan o mou sukoshi fuyashitai.",
          english: "I want to increase my reading time a bit more.",
          meaning: "Saya ingin menambah waktu membaca sedikit lagi.",
        },
      },
      {
        word: "増加",
        reading: "zouka",
        meaning: "peningkatan, pertambahan",
        sentence: {
          japanese: "観光客の増加に伴って、店も増えてきた。",
          reading: "Kankoukyaku no zouka ni tomonatte, mise mo fuete kita.",
          english:
            "Along with the increase in tourists, shops have also increased.",
          meaning:
            "Seiring meningkatnya wisatawan, toko-toko pun ikut bertambah.",
        },
      },
    ],
  },
  {
    id: 89,
    kanji: "係",
    onyomi: "ケイ",
    kunyomi: "かか(る), かかり",
    meaning: "penanggung jawab, petugas, keterkaitan",
    examples: [
      {
        word: "関係",
        reading: "kankei",
        meaning: "hubungan, keterkaitan",
        sentence: {
          japanese: "健康と睡眠には密接な関係がある。",
          reading: "Kenkou to suimin ni wa missetsu na kankei ga aru.",
          english: "Health and sleep have a close relationship.",
          meaning: "Kesehatan dan tidur memiliki hubungan yang erat.",
        },
      },
      {
        word: "係員",
        reading: "kakariin",
        meaning: "petugas, staf",
        sentence: {
          japanese: "分からないことがあれば、近くの係員に聞いてください。",
          reading:
            "Wakaranai koto ga areba, chikaku no kakariin ni kiite kudasai.",
          english:
            "If there is anything you don't understand, please ask a nearby attendant.",
          meaning:
            "Kalau ada hal yang tidak dimengerti, silakan tanya ke petugas di dekat sini.",
        },
      },
      {
        word: "係る",
        reading: "kakaru",
        meaning: "terkait dengan, menyangkut",
        sentence: {
          japanese: "会社の評判に係ることだから、慎重に扱う。",
          reading:
            "Kaisha no hyouban ni kakaru koto dakara, shinchou ni atsukau.",
          english:
            "Because it concerns the company's reputation, we handle it carefully.",
          meaning:
            "Karena menyangkut reputasi perusahaan, ditangani dengan hati-hati.",
        },
      },
    ],
  },
  {
    id: 90,
    kanji: "感",
    onyomi: "カン",
    kunyomi: "",
    meaning: "emosi, perasaan, sensasi",
    examples: [
      {
        word: "感じる",
        reading: "kanjiru",
        meaning: "merasakan, merasa",
        sentence: {
          japanese: "季節が変わるたびに、時の早さを感じる。",
          reading: "Kisetsu ga kawaru tabi ni, toki no hayasa o kanjiru.",
          english: "Every time the season changes, I feel how fast time flies.",
          meaning: "Setiap kali musim berganti, saya merasakan cepatnya waktu.",
        },
      },
      {
        word: "感想",
        reading: "kansou",
        meaning: "kesan, pendapat",
        sentence: {
          japanese: "映画を見たあと、感想を話し合った。",
          reading: "Eiga o mita ato, kansou o hanashiatta.",
          english: "After watching the movie, we talked about our impressions.",
          meaning: "Setelah menonton film, kami saling bertukar kesan.",
        },
      },
      {
        word: "感動",
        reading: "kandou",
        meaning: "terharu, terkesan mendalam",
        sentence: {
          japanese: "その歌を聴いて、思わず感動してしまった。",
          reading: "Sono uta o kiite, omowazu kandou shite shimatta.",
          english:
            "Listening to that song, I was deeply moved without thinking.",
          meaning: "Mendengar lagu itu, tanpa sadar saya merasa terharu.",
        },
      },
    ],
  },
  {
    id: 91,
    kanji: "情",
    onyomi: "ジョウ, セイ",
    kunyomi: "なさ(け)",
    meaning: "perasaan, emosi, gairah, situasi",
    examples: [
      {
        word: "情報",
        reading: "jouhou",
        meaning: "informasi",
        sentence: {
          japanese: "旅行に行く前に、現地の情報を集めておく。",
          reading: "Ryokou ni iku mae ni, genchi no jouhou o atsumete oku.",
          english:
            "Before going on a trip, I gather local information in advance.",
          meaning:
            "Sebelum pergi berlibur, mengumpulkan informasi lokasi terlebih dahulu.",
        },
      },
      {
        word: "感情",
        reading: "kanjou",
        meaning: "emosi, perasaan",
        sentence: {
          japanese: "感情的にならずに、落ち着いて話そう。",
          reading: "Kanjouteki ni narazu ni, ochitsuite hanasou.",
          english: "Let's talk calmly without getting emotional.",
          meaning: "Jangan terbawa emosi, mari bicara dengan tenang.",
        },
      },
      {
        word: "事情",
        reading: "jijou",
        meaning: "keadaan, alasan/situasi",
        sentence: {
          japanese: "家庭の事情で、しばらく休むことになった。",
          reading: "Katei no jijou de, shibaraku yasumu koto ni natta.",
          english:
            "Due to family circumstances, it was decided that I will take a temporary break.",
          meaning:
            "Karena keadaan keluarga, diputuskan untuk cuti/istirahat sementara.",
        },
      },
    ],
  },
  {
    id: 92,
    kanji: "投",
    onyomi: "トウ",
    kunyomi: "な(げる)",
    meaning: "melempar, membuang",
    examples: [
      {
        word: "投げる",
        reading: "nageru",
        meaning: "melempar",
        sentence: {
          japanese: "ボールを遠くへ投げる練習をした。",
          reading: "Booru o tooku e nageru renshuu o shita.",
          english: "I practiced throwing the ball far.",
          meaning: "Saya berlatih melempar bola ke arah yang jauh.",
        },
      },
      {
        word: "投票",
        reading: "touhyou",
        meaning: "pemungutan suara, voting",
        sentence: {
          japanese: "期日前投票を利用する人も増えている。",
          reading: "Kijitsumae touhyou o riyou suru hito mo fuete iru.",
          english:
            "The number of people using early voting is also increasing.",
          meaning:
            "Orang yang memanfaatkan pemungutan suara lebih awal juga bertambah.",
        },
      },
      {
        word: "投稿",
        reading: "toukou",
        meaning: "mengirim/memposting tulisan",
        sentence: {
          japanese: "撮った写真をSNSに投稿した。",
          reading: "Totta shashin o SNS ni toukou shita.",
          english: "I posted the photo I took on social media.",
          meaning: "Saya memposting foto yang diambil ke media sosial.",
        },
      },
    ],
  },
  {
    id: 93,
    kanji: "示",
    onyomi: "ジ, シ",
    kunyomi: "しめ(す)",
    meaning: "menunjukkan, mengindikasikan, menampilkan",
    examples: [
      {
        word: "示す",
        reading: "shimesu",
        meaning: "menunjukkan, memperlihatkan",
        sentence: {
          japanese: "データが示す通り、結果は明らかだ。",
          reading: "Deeta ga shimesu toori, kekka wa akiraka da.",
          english: "As the data shows, the result is clear.",
          meaning: "Sebagaimana ditunjukkan data, hasilnya sudah jelas.",
        },
      },
      {
        word: "表示",
        reading: "hyouji",
        meaning: "tampilan, indikasi",
        sentence: {
          japanese: "画面にエラーメッセージが表示された。",
          reading: "Gamen ni eraa messeeji ga hyouji sareta.",
          english: "An error message was displayed on the screen.",
          meaning: "Pesan error ditampilkan di layar.",
        },
      },
      {
        word: "指示",
        reading: "shiji",
        meaning: "instruksi, petunjuk",
        sentence: {
          japanese: "リーダーの指示に従って作業を進める。",
          reading: "Riidaa no shiji ni shitagatte sagyou o susumeru.",
          english: "Proceed with the work following the leader's instructions.",
          meaning: "Menjalankan pekerjaan mengikuti instruksi pemimpin.",
        },
      },
    ],
  },
  {
    id: 94,
    kanji: "変",
    onyomi: "ヘン",
    kunyomi: "か(わる)",
    meaning: "aneh, perubahan, berubah",
    examples: [
      {
        word: "変わる",
        reading: "kawaru",
        meaning: "berubah",
        sentence: {
          japanese: "天気予報が変わったから、予定を見直した。",
          reading: "Tenki yohou ga kawatta kara, yotei o minaoshita.",
          english: "Because the weather forecast changed, I reviewed my plans.",
          meaning: "Karena ramalan cuaca berubah, rencana ditinjau ulang.",
        },
      },
      {
        word: "変える",
        reading: "kaeru",
        meaning: "mengubah",
        sentence: {
          japanese: "パスワードを定期的に変えたほうがいい。",
          reading: "Pasuwaado o teikiteki ni kaeta hou ga ii.",
          english: "You should change your password regularly.",
          meaning: "Sebaiknya mengganti password secara berkala.",
        },
      },
      {
        word: "変化",
        reading: "henka",
        meaning: "perubahan",
        sentence: {
          japanese: "小さな変化にも気づけるようになりたい。",
          reading: "Chiisana henka ni mo kizukeru you ni naritai.",
          english: "I want to become able to notice even small changes.",
          meaning: "Saya ingin bisa menyadari perubahan kecil sekalipun.",
        },
      },
    ],
  },
  {
    id: 95,
    kanji: "打",
    onyomi: "ダ",
    kunyomi: "う(つ), ぶ(つ)",
    meaning: "memukul, mengetik, menghantam",
    examples: [
      {
        word: "打つ",
        reading: "utsu",
        meaning: "memukul, mengetik, mengirim (telegram/pesan)",
        sentence: {
          japanese: "キーボードを速く打つ練習をしている。",
          reading: "Kiiboodo o hayaku utsu renshuu o shite iru.",
          english: "I am practicing typing on the keyboard quickly.",
          meaning: "Saya sedang berlatih mengetik keyboard dengan cepat.",
        },
      },
      {
        word: "打ち合わせ",
        reading: "uchiawase",
        meaning: "rapat koordinasi/briefing",
        sentence: {
          japanese: "本番の前に、スタッフと打ち合わせをした。",
          reading: "Honban no mae ni, sutaffu to uchiawase o shita.",
          english:
            "Before the actual event, I had a briefing meeting with the staff.",
          meaning:
            "Sebelum hari H/sesi utama, saya melakukan koordinasi dengan staf.",
        },
      },
      {
        word: "打撃",
        reading: "dageki",
        meaning: "pukulan, dampak keras",
        sentence: {
          japanese: "突然のトラブルで、計画に大きな打撃を受けた。",
          reading: "Totsuzen no toraburu de, keikaku ni ookina dageki o uketa.",
          english: "Due to sudden trouble, the plan suffered a major blow.",
          meaning:
            "Akibat masalah mendadak, rencana mendapat pukulan/dampak besar.",
        },
      },
    ],
  },
  {
    id: 96,
    kanji: "直",
    onyomi: "チョク, ジキ",
    kunyomi: "ただ(ちに), す(ぐ)",
    meaning: "langsung, kejujuran, lurus, memperbaiki",
    examples: [
      {
        word: "直す",
        reading: "naosu",
        meaning: "memperbaiki, mengoreksi",
        sentence: {
          japanese: "間違えたところを赤ペンで直しておく。",
          reading: "Machigaeta tokoro o akapen de naoshite oku.",
          english: "Correct the mistaken parts with a red pen in advance.",
          meaning:
            "Memperbaiki/mengoreksi bagian yang salah dengan pena merah terlebih dahulu.",
        },
      },
      {
        word: "直接",
        reading: "chokusetsu",
        meaning: "langsung, secara langsung",
        sentence: {
          japanese: "メールではなく、直接電話で聞いたほうがいい。",
          reading: "Meeru de wa naku, chokusetsu denwa de kiita hou ga ii.",
          english: "Instead of emailing, it's better to ask directly by phone.",
          meaning:
            "Daripada email, sebaiknya menanyakan langsung lewat telepon.",
        },
      },
      {
        word: "正直",
        reading: "shoujiki",
        meaning: "jujur",
        sentence: {
          japanese: "正直に言うと、その案には少し不安がある。",
          reading: "Shoujiki ni iu to, sono an ni wa sukoshi fuan ga aru.",
          english: "To be honest, I have a little anxiety about that proposal.",
          meaning:
            "Jujur saja, terhadap rancangan itu ada sedikit kekhawatiran.",
        },
      },
    ],
  },
  {
    id: 97,
    kanji: "両",
    onyomi: "リョウ",
    kunyomi: "",
    meaning: "keduanya, dua",
    examples: [
      {
        word: "両方",
        reading: "ryouhou",
        meaning: "kedua belah pihak/keduanya",
        sentence: {
          japanese: "両方の意見を聞いたうえで、決めたい。",
          reading: "Ryouhou no iken o kiita ue de, kimetai.",
          english: "After listening to both opinions, I want to decide.",
          meaning:
            "Setelah mendengarkan pendapat keduanya, saya ingin memutuskan.",
        },
      },
      {
        word: "両親",
        reading: "ryoushin",
        meaning: "kedua orang tua",
        sentence: {
          japanese: "年に数回、両親に会いに行くようにしている。",
          reading: "Nen ni suukai, ryoushin ni ai ni iku you ni shite iru.",
          english: "I make sure to go visit my parents several times a year.",
          meaning:
            "Beberapa kali setahun saya usahakan pergi menemui kedua orang tua.",
        },
      },
      {
        word: "両替",
        reading: "ryougae",
        meaning: "menukar uang",
        sentence: {
          japanese: "空港に着いたら、まず外貨を両替しよう。",
          reading: "Kuukou ni tsuitara, mazu gaika o ryougae shiyou.",
          english:
            "Once we arrive at the airport, let's exchange foreign currency first.",
          meaning:
            "Begitu tiba di bandara, pertama-tama mari tukar mata uang asing.",
        },
      },
    ],
  },
  {
    id: 98,
    kanji: "式",
    onyomi: "シキ",
    kunyomi: "",
    meaning: "gaya, upacara, rumus/cara",
    examples: [
      {
        word: "結婚式",
        reading: "kekkonshiki",
        meaning: "upacara pernikahan",
        sentence: {
          japanese: "来月、いとこの結婚式に出席する予定だ。",
          reading: "Raigetsu, itoko no kekkonshiki ni shusseki suru yotei da.",
          english: "Next month, I plan to attend my cousin's wedding ceremony.",
          meaning:
            "Bulan depan berencana menghadiri upacara pernikahan sepupu.",
        },
      },
      {
        word: "卒業式",
        reading: "sotsugyoushiki",
        meaning: "upacara kelulusan",
        sentence: {
          japanese: "卒業式の日、たくさんの写真を撮った。",
          reading: "Sotsugyoushiki no hi, takusan no shashin o totta.",
          english: "On graduation day, we took many photos.",
          meaning: "Pada hari upacara kelulusan, banyak foto yang diambil.",
        },
      },
      {
        word: "形式",
        reading: "keishiki",
        meaning: "format, bentuk formal",
        sentence: {
          japanese: "提出する書類の形式が指定されている。",
          reading: "Teishutsu suru shorui no keishiki ga shitei sarete iru.",
          english: "The format of the documents to be submitted is specified.",
          meaning: "Format dokumen yang dikumpulkan sudah ditentukan.",
        },
      },
    ],
  },
  {
    id: 99,
    kanji: "確",
    onyomi: "カク",
    kunyomi: "たし(か)",
    meaning: "kepastian, pasti, kokoh, mengonfirmasi",
    examples: [
      {
        word: "確か",
        reading: "tashika",
        meaning: "pasti, kalau tidak salah",
        sentence: {
          japanese: "確か、この電車は東京駅を通るはずだ。",
          reading: "Tashika, kono densha wa Toukyou-eki o tooru hazu da.",
          english:
            "If I'm not mistaken, this train should pass through Tokyo Station.",
          meaning:
            "Kalau tidak salah, kereta ini seharusnya melewati Stasiun Tokyo.",
        },
      },
      {
        word: "確かめる",
        reading: "tashikameru",
        meaning: "memastikan, mengecek",
        sentence: {
          japanese: "家を出る前に、鍵をかけたか確かめる。",
          reading: "Ie o deru mae ni, kagi o kaketa ka tashikameru.",
          english:
            "Before leaving the house, check whether you locked the door.",
          meaning:
            "Sebelum keluar rumah, memastikan apakah sudah mengunci pintu.",
        },
      },
      {
        word: "確認",
        reading: "kakunin",
        meaning: "konfirmasi, pemeriksaan",
        sentence: {
          japanese: "スケジュールを確認してから返信します。",
          reading: "Sukejuuru o kakunin shite kara henshin shimasu.",
          english: "I will reply after checking my schedule.",
          meaning: "Setelah mengecek jadwal, saya akan membalas.",
        },
      },
    ],
  },
  {
    id: 100,
    kanji: "果",
    onyomi: "カ",
    kunyomi: "は(たす)",
    meaning: "buah, hasil, melaksanakan, mencapai, menyelesaikan",
    examples: [
      {
        word: "結果",
        reading: "kekka",
        meaning: "hasil",
        sentence: {
          japanese: "頑張った結果がようやく形になってきた。",
          reading: "Ganbatta kekka ga youyaku katachi ni natte kita.",
          english:
            "The results of my hard work have finally started taking shape.",
          meaning: "Hasil dari kerja keras akhirnya mulai membuahkan bentuk.",
        },
      },
      {
        word: "効果",
        reading: "kouka",
        meaning: "efek, hasil",
        sentence: {
          japanese: "このストレッチは肩こりに効果があるらしい。",
          reading: "Kono sutorecchi wa katakori ni kouka ga aru rashii.",
          english: "This stretch seems to be effective for stiff shoulders.",
          meaning: "Peregangan ini katanya efektif untuk pegal bahu.",
        },
      },
      {
        word: "果たす",
        reading: "hatasu",
        meaning: "memenuhi (janji/tugas), melaksanakan",
        sentence: {
          japanese: "自分の役割をしっかり果たしたい。",
          reading: "Jibun no yakuwari o shikkari hatashitai.",
          english: "I want to fulfill my role properly.",
          meaning:
            "Saya ingin menjalankan peran sendiri dengan sungguh-sungguh.",
        },
      },
    ],
  },
];
