import { useState } from 'react';
import { Mail } from 'lucide-react';
import PropTypes from 'prop-types';

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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulação
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-secondary mb-8">
                            Entre em Contato
                        </h2>

                        <div className="space-y-6 mb-8">
                            <ContactInfo
                                icon={Mail}
                                title="Email"
                                content="contato@avaly.com.br"
                            />
                        </div>

                        <p className="text-secondary/70">
                            Estamos aqui para ajudar! Entre em contato conosco para
                            tirar suas dúvidas ou fazer sugestões.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-secondary mb-2"
                            >
                                Nome
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-secondary/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-secondary mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-secondary/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-secondary mb-2"
                            >
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border border-secondary/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full bg-accent text-primary py-3 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
                        >
                            {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-600">Mensagem enviada com sucesso!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-600">Erro ao enviar mensagem. Tente novamente.</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}