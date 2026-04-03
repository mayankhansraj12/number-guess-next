import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import type { HistoryEntry } from '@/types/game';

interface HistoryTableProps {
  history: HistoryEntry[];
  onDelete: (id: number) => void;
}

export default function HistoryTable({ history, onDelete }: HistoryTableProps) {
  return (
    <div className="rounded-2xl bg-game-surface border border-game-border overflow-hidden">
      <div className="px-5 pt-5 pb-2">
        <span
          className="text-[10px] font-semibold tracking-[0.22em] text-game-subtext uppercase"
          style={{ fontFamily: 'Funnel Sans, system-ui' }}
        >
          History
        </span>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-game-border hover:bg-transparent">
              <TableHead className="text-game-subtext text-center w-10 text-[11px] font-medium py-2">#</TableHead>
              <TableHead className="text-game-subtext text-center text-[11px] font-medium py-2">Guess</TableHead>
              <TableHead className="text-game-subtext text-center text-[11px] font-medium py-2">Digits</TableHead>
              <TableHead className="text-game-subtext text-center text-[11px] font-medium py-2">Positions</TableHead>
              <TableHead className="w-12 py-2" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.length === 0 ? (
              <TableRow className="border-game-border hover:bg-game-over">
                <TableCell
                  colSpan={5}
                  className="text-center text-game-subtext text-sm py-10"
                  style={{ fontFamily: 'Funnel Sans, system-ui' }}
                >
                  No guesses yet
                </TableCell>
              </TableRow>
            ) : (
              history.map((entry, i) => (
                <TableRow
                  key={entry.id}
                  className="border-game-border hover:bg-game-over group animate-row-enter"
                  style={{ animationDelay: `${i * 30}ms` }}
                >
                  <TableCell className="text-center text-game-subtext text-xs font-mono">{entry.round}</TableCell>
                  <TableCell
                    className="text-center text-game-text tracking-[0.3em] text-base"
                    style={{ fontFamily: 'Chewy, system-ui' }}
                  >
                    {entry.guess}
                  </TableCell>
                  <TableCell className="text-center text-game-text text-sm">{entry.rightDigits}</TableCell>
                  <TableCell className="text-center text-game-text text-sm">{entry.rightPositions}</TableCell>
                  <TableCell className="text-center pr-3">
                    {/* Always visible at low opacity on mobile; hover-only on desktop */}
                    <button
                      onClick={() => onDelete(entry.id)}
                      className="text-game-subtext/40 hover:text-game-red active:text-game-red
                                 sm:opacity-0 sm:group-hover:opacity-100
                                 w-7 h-7 flex items-center justify-center rounded-full
                                 hover:bg-game-over-md active:bg-game-over-md mx-auto
                                 transition-all duration-150 text-xs"
                      aria-label={`Delete row ${entry.round}`}
                    >
                      ✕
                    </button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
