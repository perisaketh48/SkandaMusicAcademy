import { useState } from "react";
import { X } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogOverlay } from "@radix-ui/react-dialog";

/* ------------------------------------------------------------------ */
/* DATA */
/* ------------------------------------------------------------------ */

const youtubeVideos = [
  { id: "jOexzzYA_SM" },
  { id: "SAHOZ523Xak" },
  { id: "ws9e9bnjofQ" },
  { id: "wLRkz2gLAbc" },
  { id: "hJ08hDsX2-w" },
  { id: "kPSLRqEJNNs" },
  { id: "8z6BCJ17zxs" },
  { id: "EZvaokyk4e8" },
  { id: "sKPmKs65JNQ" },
  { id: "EVdzlqvvMPI" },
  { id: "9aaGT16mWjI" },
  { id: "mUioKvoaa0E" },
];

const images = [
  "/Assets/images/1.jpg",
  "/Assets/images/2.jpg",
  "/Assets/images/3.jpg",
  "/Assets/images/4.jpg",
  "/Assets/images/5.jpg",
  "/Assets/images/6.jpg",
  "/Assets/images/7.jpg",
  "/Assets/images/8.jpg",
  "/Assets/images/9.jpg",
  "/Assets/images/10.jpg",
  "/Assets/images/11.jpg",
  "/Assets/images/12.jpg",
  "/Assets/images/13.jpg",
  "/Assets/images/14.jpg",
  "/Assets/images/15.jpg",
];

/* ------------------------------------------------------------------ */
/* HELPERS */
/* ------------------------------------------------------------------ */

const midpoint = Math.ceil(youtubeVideos.length / 2);
const firstRow = youtubeVideos.slice(0, midpoint);
const secondRow = youtubeVideos.slice(midpoint);

const FilmCard = ({
  videoId,
  onClick,
}: {
  videoId: string;
  onClick: (id: string) => void;
}) => (
  <button onClick={() => onClick(videoId)} className="film-frame group">
    <img
      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
      alt="YouTube video"
      className="absolute inset-0 w-full h-full object-cover
                 group-hover:scale-110 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="play-button">▶</div>
    </div>
  </button>
);

/* ------------------------------------------------------------------ */
/* COMPONENT */
/* ------------------------------------------------------------------ */

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <PageLayout>
      <section className="relative min-h-screen overflow-hidden">
        {/* BACKGROUND VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        >
          <source src="/Assets/Carnatic.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/30 z-10" />

        {/* CONTENT */}
        <div className="relative z-10 py-12">
          <div className="container mx-auto px-4 lg:px-8">
            {/* HEADER */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Our Musical Journey
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                A glimpse into our concerts, classrooms, and Carnatic moments.
              </p>
            </div>

            {/* ================= FILM STRIP SECTION ================= */}
            <div className="mb-32">
              {/* TOP ROW */}
              <div className="film-strip mb-10">
                <div className="film-track animate-film-left">
                  {[...firstRow, ...firstRow].map((video, index) => (
                    <FilmCard
                      key={`top-${index}`}
                      videoId={video.id}
                      onClick={setActiveVideo}
                    />
                  ))}
                </div>
              </div>

              {/* BOTTOM ROW */}
              <div className="film-strip">
                <div className="film-track animate-film-right">
                  {[...secondRow, ...secondRow].map((video, index) => (
                    <FilmCard
                      key={`bottom-${index}`}
                      videoId={video.id}
                      onClick={setActiveVideo}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* IMAGE MASONRY */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="mb-6 break-inside-avoid cursor-pointer"
                  onClick={() => setActiveImage(src)}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-shadow">
                    <img
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IMAGE MODAL */}
        <Dialog open={!!activeImage} onOpenChange={() => setActiveImage(null)}>
          <DialogOverlay className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm" />
          <DialogContent className="fixed left-1/2 top-1/2 z-[101] w-auto h-auto max-w-[95vw] max-h-[95vh] -translate-x-1/2 -translate-y-1/2 bg-transparent border-none shadow-none p-0">
            {activeImage && (
              <div className="relative">
                <img
                  src={activeImage}
                  alt="Gallery preview"
                  className="max-w-[90vw] max-h-[90vh] object-contain"
                />
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute -top-12 right-0 p-3 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors backdrop-blur-sm"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* VIDEO MODAL */}
        <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
          <DialogOverlay className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm" />
          <DialogContent className="fixed left-1/2 top-1/2 z-[101] w-auto h-auto max-w-[95vw] max-h-[95vh] -translate-x-1/2 -translate-y-1/2 bg-transparent border-none shadow-none p-0">
            {activeVideo && (
              <div className="relative">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&mute=1&rel=0`}
                  title="YouTube video player"
                  className="w-[90vw] h-[50.625vw] max-w-[1200px] max-h-[675px] rounded-2xl"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute -top-12 right-0 p-3 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors backdrop-blur-sm"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>
    </PageLayout>
  );
};

export default Gallery;
