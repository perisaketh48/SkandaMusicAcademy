import { useNavigate } from "react-router-dom";
import SectionHeading from "@/components/ui/SectionHeading";

const HomeMissionVisionPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-4 sm:mx-6 my-16 sm:my-20">
      <div
        className="
          max-w-7xl mx-auto
          rounded-2xl sm:rounded-3xl
          border border-[#d6e4f0]
          bg-white
          shadow-[0_8px_30px_rgba(18,86,153,0.06)]
          p-6 sm:p-8 lg:p-14
        "
      >
        <SectionHeading
          title="Introduction"
          subtitle="Rooted in tradition. Guided by devotion."
          className="mb-6"
        />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4 sm:space-y-5 text-foreground/70 leading-relaxed text-[0.95rem] sm:text-[1.05rem]">
              <p>
                <span className="font-semibold text-foreground">
                  Skanda Music Academy
                </span>{" "}
                is founded with the vision of preserving, nurturing, and sharing
                the timeless tradition of Carnatic music with devotion and
                authenticity.
              </p>

              <p>
                Established by{" "}
                <span className="font-semibold text-foreground">
                  Smt. Ramani Varahabhatla
                </span>
                , the academy is a heartfelt effort to bring structured,
                soulful, and meaningful Carnatic music education to the{" "}
                <span className="font-semibold text-foreground">
                  Indian-Australian community in Melbourne, Victoria
                </span>
                .
              </p>

              <p>
                We inspire learners of all ages to experience music not merely
                as a performance art, but as a lifelong companion of discipline,
                devotion, and inner growth.
              </p>
            </div>

            {/* ---------- CTA ---------- */}
            <button
              onClick={() => navigate("/about")}
              className="
                mt-6 sm:mt-8 inline-flex items-center
                px-6 sm:px-7 py-2.5 sm:py-3
                rounded-lg
                bg-primary text-white font-semibold text-sm sm:text-base
                shadow-sm
                hover:bg-primary/90 hover:shadow-md
                transition-all duration-200
              "
            >
              Learn More
            </button>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="w-full lg:w-1/2">
            <img
              src="/Assets/images/trinity.jpg"
              alt="Carnatic music teaching"
              className="
                w-full
                max-h-[300px] sm:max-h-[420px]
                object-cover
                rounded-xl sm:rounded-2xl
                shadow-md
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMissionVisionPreview;
