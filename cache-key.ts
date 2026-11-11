const goi = "goi";
const goiExercise = "goi-exercise";
const kanjis = "kanjis";

export const cacheKeys = {
  goi: {
    all: goi,
    detail: (id: string) => `${goi}-${id}`,
    exercise: goiExercise,
    example: (id: string) => `word-example-of-${id}`,
  },
  kanji: {
    all: kanjis,
    detail: (id: string) => `${kanjis}-${id}`,
  },
};
