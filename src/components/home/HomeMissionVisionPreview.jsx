import { useNavigate } from "react-router-dom";
import SectionHeading from "@/components/ui/SectionHeading";

const HomeMissionVisionPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-4 my-20">
      <div
        className="
          max-w-7xl mx-auto
          rounded-3xl
          border border-blue-200
          bg-[#f0f7ff]
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          p-8 lg:p-14
        "
      >
        {" "}
        <SectionHeading
          title="Introduction"
          subtitle="Rooted in tradition. Guided by devotion."
          className="mb-6"
        />
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-5 text-slate-600 leading-relaxed text-[1.05rem]">
              <p>
                <span className="font-semibold text-slate-900">
                  Skanda Music Academy
                </span>{" "}
                is founded with the vision of preserving, nurturing, and sharing
                the timeless tradition of Carnatic music with devotion and
                authenticity.
              </p>

              <p>
                Established by{" "}
                <span className="font-semibold text-slate-900">
                  Smt. Ramani Varahabhatla
                </span>
                , the academy is a heartfelt effort to bring structured,
                soulful, and meaningful Carnatic music education to the{" "}
                <span className="font-semibold text-slate-900">
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
                mt-8 inline-flex items-center
                px-7 py-3
                rounded-full
                bg-[#125699]
                text-white font-semibold
                shadow-md
                hover:bg-[#0e4680]
                transition-all duration-300
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
                max-h-[420px]
                object-cover
                rounded-2xl
                shadow-lg
                border border-blue-100
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMissionVisionPreview;
