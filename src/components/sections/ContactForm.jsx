import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            console.log('Form data:', formData);

            await new Promise(resolve => setTimeout(resolve, 1000));

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            alert('Mensagem enviada com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            alert('Erro ao enviar mensagem. Por favor, tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-secondary/5 p-6 rounded-lg">
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-secondary/5 border border-secondary/10
                                 focus:outline-none focus:ring-2 focus:ring-accent/50 text-secondary"
                        placeholder="Seu nome"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-secondary/5 border border-secondary/10
                                 focus:outline-none focus:ring-2 focus:ring-accent/50 text-secondary"
                        placeholder="seu@email.com"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-1">
                        Assunto
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-secondary/5 border border-secondary/10
                                 focus:outline-none focus:ring-2 focus:ring-accent/50 text-secondary"
                        placeholder="Assunto da mensagem"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
                        Mensagem
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-2 rounded-lg bg-secondary/5 border border-secondary/10
                                 focus:outline-none focus:ring-2 focus:ring-accent/50 text-secondary"
                        placeholder="Sua mensagem..."
                    />
                </div>

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent text-white font-medium py-2 px-4 rounded-lg
                             hover:bg-accent/90 transition-colors duration-200
                             disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </motion.button>
            </div>
        </form>
    );
}