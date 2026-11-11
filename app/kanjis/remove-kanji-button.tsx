import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { removeKanjiAction } from "./actions";
import { KanjiItem } from "@/db/schema";

type Props = {
  kanji: KanjiItem;
};

export default function RemoveKanjiButton({ kanji }: Props) {
  const router = useRouter();
  const { execute: executeRemove, isPending: isPendingRemove } = useAction(
    removeKanjiAction,
    {
      onSuccess: ({ data: { message } }) => {
        toast.success(message);
        router.back();
      },
      onError: ({ error: { thrownError, validationErrors } }) => {
        if (thrownError) {
          toast.error(thrownError.message);
        }
        if (validationErrors) {
          toast.error("kanji id is missing");
        }
      },
    },
  );

  return (
    <button
      type="button"
      disabled={isPendingRemove}
      onClick={() => executeRemove({ kanjiId: kanji.id })}
      className="bg-amber-500 font-medium hover:bg-amber-700 transition-all ease-linear duration-200 text-background hover:text-white h-full w-full"
    >
      削除
    </button>
  );
}
