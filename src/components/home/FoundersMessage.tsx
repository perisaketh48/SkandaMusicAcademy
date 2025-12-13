import SectionHeading from "@/components/ui/SectionHeading";

const FoundersMessage = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto fade-in-up">
          <SectionHeading title="Founder's Message" />

          <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-elegant">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Namaste and welcome to Skanda Music Academy.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Growing up, music shaped my life in countless positive ways. It
                taught me discipline when I had to practice the same phrase
                repeatedly until it was perfect. It taught me patience when
                mastering a new raga took months of dedicated effort. It taught
                me humility when I realised how vast and deep this ocean of
                knowledge truly is. And it taught me joy—the incomparable joy of
                losing oneself in a beautiful melody.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I founded Skanda Music Academy with a simple yet profound
                mission: to share the gift of Carnatic music with anyone who has
                the desire to learn. I believe that somewhere within every
                person is a musician waiting to be awakened. Our role as
                teachers is not to create that musician, but to provide the
                nurturing environment, guidance, and encouragement needed for
                that inner artist to emerge.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                What sets our academy apart is our deep commitment to the
                traditional guru-shishya parampara while embracing the
                possibilities that modern technology offers. We maintain the
                personal connection, the individualised attention, and the
                authentic transmission of knowledge that has kept this art form
                alive for centuries, while making it accessible to students
                across the globe through online learning.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                At Skanda Music Academy, we do not measure success by how
                quickly a student can learn a song. We measure it by the depth
                of understanding they develop, the love for music that grows in
                their hearts, and the confidence with which they express
                themselves through this beautiful art form. Our students become
                not just singers, but true musicians who understand and
                appreciate the profound legacy they are carrying forward.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you are taking your first steps into the world of
                Carnatic music or seeking to deepen an existing practice, I
                warmly invite you to join our musical family. Together, let us
                explore the infinite beauty of this ancient art form and
                discover the music that lives within you.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I look forward to being a part of your musical journey.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                With warm regards and musical blessings,
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-serif text-xl font-semibold text-gradient-warm">
                Ramani Varahabhatla
              </p>
              <p className="text-muted-foreground">
                Founder & Principal Instructor, Skanda Music Academy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersMessage;
