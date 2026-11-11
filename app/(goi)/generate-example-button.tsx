"use client";

import { Vocabulary } from "@/db/schema";
import {
  generateJapaneseExamples,
  JapaneseExample,
} from "@/lib/gemini-service";
import { useState } from "react";
import toast from "react-hot-toast";
import { generateExampleAction } from "./actions";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/utils";
import ExampleAccordion from "./example-accordion";

const dummyExamples = [
  {
    japanese: "駅の向かいにあるカフェで、友達と待ち合わせをすることにした。",
    furigana:
      "<ruby>駅<rt>えき</rt></ruby>の<ruby>向<rt>む</rt></ruby>かいにあるカフェで、<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>と<ruby>待<rt>ま</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせをすることにした。",
    romaji:
      "Eki no mukai ni aru kafe de, tomodachi to machiawase wo suru koto ni shita.",
    indonesian:
      "Saya memutuskan untuk janjian bertemu dengan teman di kafe yang ada di seberang stasiun.",
    english:
      "I decided to meet up with my friend at a cafe across from the station.",
  },
  {
    japanese: "新しくできたスーパーは、私の家の真向かいに位置しています。",
    furigana:
      "<ruby>新<rt>あたら</rt></ruby>しくできたスーパーは、<ruby>私<rt>わたし</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>の<ruby>真向<rt>まむ</rt></ruby>かいに<ruby>位<rt>い</rt></ruby><ruby>置<rt>ち</rt></ruby>しています。",
    romaji:
      "Atarashiku dekita suupaa wa, watashi no ie no mamukai ni ichi shiteimasu.",
    indonesian:
      "Supermarket yang baru jadi itu terletak tepat di seberang rumah saya.",
    english:
      "The newly built supermarket is located directly opposite my house.",
  },
  {
    japanese: "道路の向かい側に渡るときは、車に気をつけなければならない。",
    furigana:
      "<ruby>道<rt>どう</rt></ruby><ruby>路<rt>ろ</rt></ruby>の<ruby>向<rt>む</rt></ruby>かい<ruby>側<rt>がわ</rt></ruby>に<ruby>渡<rt>わた</rt></ruby>るときは、<ruby>車<rt>くるま</rt></ruby>に<ruby>気<rt>き</rt></ruby>をつけなければならない。",
    romaji:
      "Douro no mukaigawa ni wataru toki wa, kuruma ni ki wo tsukenake reba naranai.",
    indonesian:
      "Saat menyeberang ke sisi seberang jalan, kita harus berhati-hati terhadap mobil.",
    english:
      "When crossing to the opposite side of the road, you must be careful of cars.",
  },
];

export default function GenerateExampleWithGeminiButton({
  word,
}: {
  word: Vocabulary;
}) {
  const [examples, setExamples] = useState<JapaneseExample[]>([]);
  const [loading, setLoading] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  const generateExamples = async () => {
    try {
      setLoading(true);
      const { data, serverError } = await generateExampleAction({
        word: word.kanji,
      });
      if (serverError) {
        toast.error(serverError);
      }
      if (data) {
        console.log({ data });
        setExamples(data);
      }
    } catch (err) {
      console.log(err);
      toast.error("fail to generate example");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center flex-col gap-y-4 border bg-accent w-max mx-auto p-4 rounded-xl">
      <button
        disabled={loading}
        onClick={generateExamples}
        className={cn(
          "bg-blue-700 hover:bg-blue-800 font-medium flex items-center disabled:bg-blue-800 rounded-xl px-4 py-2",
          loading ? "cursor-pointer" : "",
        )}
      >
        <div className="flex flex-col">
          <span className="font-semibold">ゲミニAIで例文を作る</span>
          <span>Generate Example With Gemini</span>
        </div>
        {loading && <Spinner className="ml-2" />}
      </button>

      <ExampleAccordion examples={dummyExamples} />
    </div>
  );
}
