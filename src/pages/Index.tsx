import { Hero } from "@/components/Hero";
import { AboutAcademy } from "@/components/AboutAcademy";
import { AboutMe } from "@/components/AboutMe";
import { AboutTeacher } from "@/components/AboutTeacher";
import { SubjectsTeach } from "@/components/SubjectsTeach";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Awards } from "@/components/Awards";
import { Languages } from "@/components/Languages";
import { Courses } from "@/components/Courses";
import { SessionsOffered } from "@/components/SessionsOffered";
import { DemoClass } from "@/components/DemoClass";
import { BookingForm } from "@/components/BookingForm";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyNavbar } from "@/components/StickyNavBar.jsx";

const Index = () => {
  return (
    <div className="min-h-screen ">
      <StickyNavbar />
      <Hero />
      <AboutAcademy />
      <AboutMe />
      <AboutTeacher />
      <SubjectsTeach />
      <Education />
      <Experience />
      <Certifications />
      <Awards />
      <Languages />
      <Courses />
      <SessionsOffered />
      <DemoClass />
      <BookingForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
