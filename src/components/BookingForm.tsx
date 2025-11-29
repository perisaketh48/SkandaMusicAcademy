import { motion } from "framer-motion";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { Calendar, Clock, Mail, Phone, User, Music, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
  date: Date | undefined;
  timeSlot: string;
};

type TimeSlot = {
  id: string;
  label: string;
  time: string;
  icon: string;
};

export const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  
  const { register, handleSubmit, formState: { errors }, reset, setValue, control } = useForm<FormData>();

  const timeSlots: TimeSlot[] = [
    { id: "morning", label: "Morning", time: "9:00 AM - 12:00 PM", icon: "🌅" },
    { id: "afternoon", label: "Afternoon", time: "2:00 PM - 5:00 PM", icon: "☀️" },
    { id: "evening", label: "Evening", time: "6:00 PM - 9:00 PM", icon: "🌙" }
  ];

  const onSubmit = async (data: FormData) => {
    // Validate date and time slot
    if (!data.date) {
      toast.error("Please select a date for your demo class");
      return;
    }
    if (!data.timeSlot) {
      toast.error("Please select a time slot");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", {
      ...data,
      date: data.date ? format(data.date, "PPP") : "",
    });
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast.success("Demo class booked successfully! We'll contact you soon.", {
      duration: 5000,
    });
    
    reset();
    setSelectedSlot("");
    
    // Reset success state after animation
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="book-demo" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Book Your Demo Class
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-body">
            Take the first step in your musical journey. Fill out the form and we'll get in touch!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-body flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="border-border focus:border-primary"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-body flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="border-border focus:border-primary"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-body flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone", { required: "Phone number is required" })}
                  className="border-border focus:border-primary"
                  placeholder="+61 xxx xxx xxx"
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              {/* Course Selection */}
              <div className="space-y-2">
                <Label htmlFor="course" className="text-foreground font-body flex items-center gap-2">
                  <Music className="w-4 h-4 text-primary" />
                  Course Interest *
                </Label>
                <Select onValueChange={(value) => setValue("course", value)}>
                  <SelectTrigger className="border-border focus:border-primary">
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="carnatic-beginner">Carnatic Vocal - Beginner</SelectItem>
                    <SelectItem value="carnatic-intermediate">Carnatic Vocal - Intermediate</SelectItem>
                    <SelectItem value="carnatic-advanced">Carnatic Vocal - Advanced</SelectItem>
                    <SelectItem value="devotional">Devotional Music</SelectItem>
                    <SelectItem value="voice-culture">Voice Culture & Manodharma</SelectItem>
                    <SelectItem value="kids">Kids Music Program</SelectItem>
                  </SelectContent>
                </Select>
                {errors.course && (
                  <p className="text-sm text-destructive">{errors.course.message}</p>
                )}
              </div>

              {/* Date Selection */}
              <div className="space-y-2">
                <Label className="text-foreground font-body flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Select Date *
                </Label>
                <Controller
                  control={control}
                  name="date"
                  rules={{ required: "Please select a date" }}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal border-border hover:border-primary",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {errors.date && (
                  <p className="text-sm text-destructive">{errors.date.message}</p>
                )}
              </div>

              {/* Time Slot Selection */}
              <div className="space-y-3">
                <Label className="text-foreground font-body flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Select Time Slot *
                </Label>
                <Controller
                  control={control}
                  name="timeSlot"
                  rules={{ required: "Please select a time slot" }}
                  render={({ field }) => (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {timeSlots.map((slot) => (
                        <motion.div
                          key={slot.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <button
                            type="button"
                            onClick={() => {
                              field.onChange(slot.id);
                              setSelectedSlot(slot.id);
                            }}
                            className={cn(
                              "w-full p-4 rounded-xl border-2 transition-all text-left relative overflow-hidden",
                              field.value === slot.id
                                ? "border-primary bg-primary/5 shadow-md"
                                : "border-border hover:border-primary/50 hover:bg-muted/50"
                            )}
                          >
                            {/* Selected indicator */}
                            {field.value === slot.id && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-2 right-2"
                              >
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                              </motion.div>
                            )}
                            
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-2xl">{slot.icon}</span>
                              <span className="font-heading font-semibold text-foreground">
                                {slot.label}
                              </span>
                            </div>
                            <p className="text-sm text-foreground/70 font-body">
                              {slot.time}
                            </p>
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                />
                {errors.timeSlot && (
                  <p className="text-sm text-destructive">{errors.timeSlot.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                      Submitting...
                    </span>
                  ) : isSuccess ? (
                    <span className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Booked Successfully!
                    </span>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </motion.div>
            </form>

            {/* Success message animation */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-accent/10 border border-accent rounded-xl text-center"
              >
                <p className="text-accent font-body font-semibold">
                  Thank you! We'll be in touch shortly to confirm your demo class.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
