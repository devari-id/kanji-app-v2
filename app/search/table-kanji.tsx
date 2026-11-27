"use client";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { KanjiItem } from "@/db/schema";
import { ChangeEvent, use, useState } from "react";
import toast from "react-hot-toast";
import { removeKanjiAction, updateKanjiAction } from "./action";

type Props = {
  promiseKanjis: Promise<KanjiItem[]>;
};

export default function TableKanji({ promiseKanjis }: Props) {
  const kanjis = use(promiseKanjis);

  return (
    <Table>
      <TableHeader>
        <TableRow className="px-4">
          <TableHead>Kanji</TableHead>
          <TableHead>Kunyomi</TableHead>
          <TableHead>Onyomi</TableHead>
          <TableHead>Notes</TableHead>
          <TableHead>Meaning</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {kanjis.length === 0 ? (
          <TableRow>
            <td className="py-4">Kanji record not found</td>
          </TableRow>
        ) : (
          kanjis.map((kanji) => <TableContent kanji={kanji} key={kanji.id} />)
        )}
      </TableBody>
    </Table>
  );
}

function TableContent({ kanji }: { kanji: KanjiItem }) {
  const [state, setState] = useState({
    kanji: kanji.kanji,
    onyomi: kanji.onyomi ?? "",
    kunyomi: kanji.kunyomi ?? "",
    note: kanji.note ?? "",
    meaning: kanji.meaning,
    id: kanji.id,
  });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateKanji = async () => {
    const { data, serverError, validationErrors } =
      await updateKanjiAction(state);
    if (serverError) {
      toast.error(serverError);
    }
    if (validationErrors) {
      toast.error("invalid input");
    }
    if (data) {
      toast.success(data.message);
    }
  };

  const handleRemoveKanji = async () => {
    const { data, serverError, validationErrors } = await removeKanjiAction({
      kanjiId: kanji.id,
    });
    if (serverError) {
      toast.error(serverError);
    }
    if (validationErrors) {
      toast.error("invalid input");
    }
    if (data) {
      toast.success(data.message);
    }
  };

  return (
    <TableRow key={kanji.id}>
      <TableCell className="text-4xl font-mincho">{kanji.kanji}</TableCell>
      <TableCell>
        <Field>
          <Textarea
            name="kunyomi"
            className="w-full  field-sizing-fixed"
            value={state.kunyomi}
            onChange={handleChange}
            rows={2}
          />
        </Field>
      </TableCell>
      <TableCell>
        <Field>
          <Textarea
            className="w-full  field-sizing-fixed"
            name="onyomi"
            value={state.onyomi}
            onChange={handleChange}
            rows={2}
          />
        </Field>
      </TableCell>
      <TableCell>
        <Field>
          <Textarea
            className="w-full  field-sizing-fixed"
            name="note"
            value={state.note}
            onChange={handleChange}
          />
        </Field>
      </TableCell>
      <TableCell>
        <Field>
          <Textarea
            className="w-full  field-sizing-fixed"
            name="meaning"
            value={state.meaning}
            onChange={handleChange}
          />
        </Field>
      </TableCell>
      <TableCell align="right">
        <Button onClick={handleUpdateKanji}>Edit</Button>
        <Button
          onClick={handleRemoveKanji}
          className={"ml-2"}
          variant={"destructive"}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
