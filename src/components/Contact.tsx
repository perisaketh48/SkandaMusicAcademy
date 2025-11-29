import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@srivarahanadam.com",
      link: "mailto:info@srivarahanadam.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+61 XXX XXX XXX",
      link: "tel:+61XXXXXXXXX"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Melbourne, Australia • Online Worldwide",
      link: null
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", link: "#" },
    { icon: Instagram, label: "Instagram", link: "#" },
    { icon: Youtube, label: "YouTube", link: "#" }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-body">
            We'd love to hear from you! Reach out with any questions about our courses.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-border text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-primary mb-2">
                  {item.label}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-foreground/70 hover:text-accent font-body text-sm transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground/70 font-body text-sm">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <h3 className="text-xl font-heading font-semibold text-primary text-center mb-6">
              Follow Our Musical Journey
            </h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
