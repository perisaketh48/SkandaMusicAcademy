import { Music, Music2, Music3, Music4 } from "lucide-react";

interface FloatingMusicNotesProps {
  count?: number;
}

const FloatingMusicNotes = ({ count = 8 }: FloatingMusicNotesProps) => {
  const notes = [Music, Music2, Music3, Music4];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => {
        const NoteIcon = notes[i % notes.length];
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = 8 + Math.random() * 4;
        const size = 16 + Math.random() * 16;

        return (
          <div
            key={i}
            className="absolute music-note-float"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            <NoteIcon
              className="text-gold/30"
              style={{ width: size, height: size }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingMusicNotes;
