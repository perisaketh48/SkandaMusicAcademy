import { motion } from "framer-motion";
import { Music } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary/95 text-primary-foreground py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent mb-8"
        />

        <div className="flex flex-col items-center gap-6">
          {/* Logo and title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <Music className="w-8 h-8 text-secondary" />
            <h3 className="text-2xl font-heading font-bold">
              Skanda Music Academy
            </h3>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/80 font-body text-center max-w-md"
          >
            Preserving the divine tradition of Carnatic music, one note at a
            time
          </motion.p>

          {/* Swaras decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden sm:flex gap-3 md:gap-4 text-secondary/60 font-heading text-xs md:text-sm"
          >
            {["Sa", "Ri", "Ga", "Ma", "Pa", "Dha", "Ni", "Sa"].map(
              (note, i) => (
                <motion.span
                  key={note + i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                >
                  {note}
                </motion.span>
              )
            )}
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-32 h-0.5 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"
          />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-primary-foreground/60 font-body text-sm"
          >
            © 2025 Skanda Music Academy Academy. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
