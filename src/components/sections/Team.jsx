import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: "Guilherme Carneiro",
        role: "Fundador & Desenvolvedor",
        image: "/public/perfil.jpeg",
        bio: "Desenvolvedor Android apaixonado por criar soluções que impactam positivamente a vida das pessoas.",
        social: {
            github: "https://github.com/seugithub",
            linkedin: "https://linkedin.com/in/seulinkedin",
            email: "mailto:seu@email.com"
        }
    }
];

export default function Team() {
    return (
        <section className="py-24 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-secondary sm:text-4xl">
                        Conheça Nossa Equipe
                    </h2>
                    <p className="mt-4 text-xl text-secondary/70">
                        Pessoas apaixonadas por tecnologia e saúde
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            <div className="p-6">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                                />
                                <h3 className="text-xl font-semibold text-secondary text-center">
                                    {member.name}
                                </h3>
                                <p className="text-accent text-center mb-4">
                                    {member.role}
                                </p>
                                <p className="text-secondary/70 text-center mb-6">
                                    {member.bio}
                                </p>
                                <div className="flex justify-center space-x-4">
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}