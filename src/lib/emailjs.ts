import emailjs from "@emailjs/browser";

// ============================================================
// EmailJS Configuration
// ============================================================
// To set up EmailJS:
//
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service:
//    - Click "Email Services" → "Add New Service"
//    - Choose Gmail → Connect info.skandamusicacademy@gmail.com
//    - Copy the Service ID below
//
// 3. Create TWO Email Templates:
//
//    TEMPLATE 1: "contact_form" (for Contact page)
//    Subject: New Contact: {{subject}}
//    Body:
//      Name: {{from_name}}
//      Email: {{from_email}}
//      Subject: {{subject}}
//      Message: {{message}}
//
//    TEMPLATE 2: "demo_booking" (for Demo Class page)
//    Subject: New Demo Class Request from {{from_name}}
//    Body:
//      Name: {{from_name}}
//      Email: {{from_email}}
//      Phone: {{phone}}
//      Experience: {{experience}}
//      Preferred Time: {{preferred_time}}
//      Message: {{message}}
//
// 4. Copy your Public Key from "Account" → "General"
// 5. Replace the values below:
// ============================================================

const EMAILJS_CONFIG = {
  serviceId: "service_y4m6jtf",
  contactTemplateId: "template_abptn7n",
  demoTemplateId: "template_k0ptqzs",
  publicKey: "yjDnCuevWwbXngDan",
};

// Academy email for receiving notifications
const ACADEMY_EMAIL = "info.skandamusicacademy@gmail.com";

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface DemoFormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  preferredTime: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject,
    message: data.message,
    to_email: ACADEMY_EMAIL,
  };

  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.contactTemplateId,
    templateParams,
  );
}

export async function sendDemoBookingEmail(data: DemoFormData): Promise<void> {
  const experienceLabels: Record<string, string> = {
    beginner: "Complete Beginner",
    basic: "Some Basic Knowledge",
    intermediate: "Intermediate",
    advanced: "Advanced",
  };

  const timeLabels: Record<string, string> = {
    morning: "Morning (6 AM - 10 AM IST)",
    afternoon: "Afternoon (12 PM - 4 PM IST)",
    evening: "Evening (5 PM - 9 PM IST)",
    flexible: "Flexible / Contact me",
  };

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    phone: data.phone || "Not provided",
    experience: experienceLabels[data.experience] || "Not specified",
    preferred_time: timeLabels[data.preferredTime] || "Not specified",
    message: data.message || "No additional message",
    to_email: ACADEMY_EMAIL,
  };

  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.demoTemplateId,
    templateParams,
  );
}
