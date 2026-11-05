import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="intro-section">
      {/* Background Image */}
      <div className="intro-background" />

      {/* Dark Overlays */}
      <div className="intro-overlay" />
      <div className="intro-overlay-bottom" />

      {/* Content */}
      <motion.div
        className="intro-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
      >
        <span className="small-heading">nexora TECHNOLOGIES</span>

        <h2>
          Technology that
          <span> moves you forward.</span>
        </h2>

        <p>
          From everyday productivity to extraordinary performance, discover
          technology designed around the way you live, work and create.
        </p>
      </motion.div>
    </section>
  );
};

export default IntroSection;
