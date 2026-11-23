import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { KanjiItem } from "@/db/schema";
import { use } from "react";

type Props = {
  promiseKanjis: Promise<KanjiItem[]>;
};

export default function TableKanji({ promiseKanjis }: Props) {
  const kanjis = use(promiseKanjis);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-max">Kanji</TableHead>
          <TableHead>Kunyomi</TableHead>
          <TableHead>Onyomi</TableHead>
          <TableHead className="text-right">Meaning</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {kanjis.map((kanji) => (
          <TableRow key={kanji.id}>
            <TableCell className="font-medium text-3xl font-mincho">
              {kanji.kanji}
            </TableCell>
            <TableCell className="text-xl font-mincho">
              {kanji.kunyomi}
            </TableCell>
            <TableCell className="text-xl font-mincho">
              {kanji.onyomi}
            </TableCell>
            <TableCell className="text-right">{kanji.meaning}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
