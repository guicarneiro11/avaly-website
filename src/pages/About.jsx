import AboutHero from '../components/sections/AboutHero';
import AboutContent from '../components/sections/About';
import Team from '../components/sections/Team';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <AboutHero />
            <AboutContent />
            <Team />
        </motion.div>
    );
}