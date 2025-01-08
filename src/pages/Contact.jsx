import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import ContactForm from '../components/sections/ContactForm';
import { Mail } from 'lucide-react';
import PropTypes from 'prop-types';

const contactInfo = [
    {
        icon: Mail,
        title: 'Email',
        description: 'contato@avaly.com.br',
    },
];

const ContactInfo = ({ icon: Icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="p-3 bg-accent/10 rounded-lg">
            <Icon className="w-6 h-6 text-accent" />
        </div>
        <div>
            <h3 className="font-semibold text-secondary">{title}</h3>
            <p className="text-secondary/70">{description}</p>
        </div>
    </div>
);

ContactInfo.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default function Contact() {
    return (
        <>
            <section className="bg-primary pt-32 pb-16">
                <Container>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl font-bold text-secondary sm:text-5xl">
                            Entre em Contato
                        </h1>
                        <p className="mt-4 text-xl text-secondary/70 max-w-2xl mx-auto">
                            Tem alguma dúvida ou sugestão? Estamos aqui para ajudar!
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            {contactInfo.map((info, index) => (
                                <ContactInfo
                                    key={index}
                                    icon={info.icon}
                                    title={info.title}
                                    description={info.description}
                                />
                            ))}

                            <div className="mt-8 p-6 bg-secondary/5 rounded-lg">
                                <h3 className="font-semibold text-secondary mb-2">
                                    Horário de Atendimento
                                </h3>
                                <p className="text-secondary/70">
                                    Segunda a Sexta: 9h às 18h<br />
                                    Sábado: 9h às 13h
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
                </Container>
            </section>
        </>
    );
}