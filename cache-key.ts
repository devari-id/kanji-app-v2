const goi = "goi";
const goiExercise = "goi-exercise";
const kanjis = "kanjis";

export const cacheKeys = {
  goi: {
    all: goi,
    detail: (id: string) => `${goi}-${id}`,
    exercise: goiExercise,
  },
  kanji: {
    all: kanjis,
    detail: (id: string) => `${kanjis}-${id}`,
  },
};
