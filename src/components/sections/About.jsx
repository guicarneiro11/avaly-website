import PropTypes from 'prop-types';
import { Shield, Heart, Target } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-6">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <Icon className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
        <p className="text-secondary/70">{description}</p>
    </div>
);

ValueCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default function About() {
    const values = [
        {
            icon: Shield,
            title: "Confiabilidade",
            description: "Comprometidos com a precisão e qualidade em cada medição."
        },
        {
            icon: Heart,
            title: "Cuidado",
            description: "Focados em proporcionar a melhor experiência para profissionais e pacientes."
        },
        {
            icon: Target,
            title: "Inovação",
            description: "Constantemente evoluindo para atender às necessidades dos fisioterapeutas."
        }
    ];

    return (
        <div className="bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-4">
                        Nossa História
                    </h2>
                    <p className="text-xl text-secondary/70 max-w-3xl mx-auto">
                        A Avaly nasceu da necessidade de tornar a goniometria mais precisa e acessível.
                        Desenvolvida por profissionais apaixonados por tecnologia e saúde, nossa missão
                        é facilitar o trabalho dos fisioterapeutas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                    {values.map((value, index) => (
                        <ValueCard
                            key={index}
                            icon={value.icon}
                            title={value.title}
                            description={value.description}
                        />
                    ))}
                </div>

                <div className="mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="/avaly.png"
                                alt="Avaly em uso"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-secondary mb-4">
                                Por que escolher a Avaly?
                            </h3>
                            <div className="space-y-4">
                                <p className="text-secondary/70">
                                    Nossa plataforma foi desenvolvida com foco na experiência do usuário,
                                    garantindo medições precisas e um fluxo de trabalho eficiente.
                                </p>
                                <p className="text-secondary/70">
                                    Com a Avaly, você tem acesso a ferramentas profissionais que auxiliam
                                    no diagnóstico e acompanhamento dos seus pacientes.
                                </p>
                                <p className="text-secondary/70">
                                    Estamos constantemente evoluindo e atualizando nossa plataforma com base
                                    no feedback dos nossos usuários.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}