import { motion } from 'framer-motion';

export default function AboutHero() {
    return (
        <section className="bg-primary pt-20 pb-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-4xl font-bold text-secondary sm:text-5xl md:text-6xl">
                        Nossa História
                    </h1>
                    <p className="mt-6 text-xl text-secondary/70 max-w-3xl mx-auto">
                        Conheça a jornada da Avaly e nossa missão de transformar
                        a forma como os fisioterapeutas realizam avaliações.
                    </p>
                </motion.div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl transform -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl transform -translate-y-1/2" />
            </div>
        </section>
    );
}