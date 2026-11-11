import { GoogleGenAI, Type, Schema } from "@google/genai";

// Inisialisasi klien Gemini menggunakan GEMINI_API_KEY dari environment variable
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Definisikan struktur skema output JSON yang diinginkan menggunakan Structured Outputs
const japaneseSentenceSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    japanese: {
      type: Type.STRING,
      description:
        "Kalimat lengkap dalam bahasa Jepang (menggunakan Kanji dan Kana yang natural sesuai level JLPT N3).",
    },
    furigana: {
      type: Type.STRING,
      description:
        "Furigana untuk seluruh kalimat dalam format HTML ruby tag atau tanda kurung, contoh: 勉強(べんきょう) atau <ruby>勉強<rt>べんきょう</rt></ruby>.",
    },
    romaji: {
      type: Type.STRING,
      description: "Transliterasi Romaji dari kalimat bahasa Jepang tersebut.",
    },
    indonesian: {
      type: Type.STRING,
      description: "Terjemahan kalimat ke dalam bahasa Indonesia yang natural.",
    },
    english: {
      type: Type.STRING,
      description: "Terjemahan kalimat ke dalam bahasa Inggris yang natural.",
    },
  },
  required: ["japanese", "furigana", "romaji", "indonesian", "english"],
};

const responseSchema: Schema = {
  type: Type.ARRAY,
  description: "Daftar contoh kalimat bahasa Jepang.",
  items: japaneseSentenceSchema,
};

export interface JapaneseExample {
  japanese: string;
  furigana: string;
  romaji: string;
  indonesian: string;
  english: string;
}

/**
 * Men-generate contoh kalimat bahasa Jepang berdasarkan kata, level, dan konteks tertentu.
 * @param keyword Kata atau pola tata bahasa (kosakata/kanji/bunpou)
 * @param level Level JLPT (default: N3)
 * @param count Jumlah kalimat yang ingin di-generate (default: 3)
 */
export async function generateJapaneseExamples(
  keyword: string,
  level: string = "N3",
  count: number = 3,
): Promise<JapaneseExample[]> {
  try {
    const prompt = `Buatlah ${count} contoh kalimat bahasa Jepang yang menggunakan kata atau pola "${keyword}". 
    Target pembelajar adalah level ${level}. 
    Pastikan tata bahasa, kosakata, dan tingkat kesulitannya sesuai dengan standar JLPT ${level}.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash", // Menggunakan model cepat dan efisien
      contents: prompt,
      config: {
        // Menggunakan responseMimeType dan responseSchema untuk menjamin output berupa JSON murni yang tervalidasi
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7, // Sedikit variasi kreatif namun tetap natural
      },
    });

    if (!response.text) {
      throw new Error("Gagal mendapatkan respons dari Gemini API.");
    }

    // Parsing hasil string JSON dari Gemini
    const result: JapaneseExample[] = JSON.parse(response.text);
    return result;
  } catch (error) {
    console.error("Error generating Japanese examples:", error);
    throw error;
  }
}
