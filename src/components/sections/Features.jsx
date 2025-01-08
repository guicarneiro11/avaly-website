import { Activity, Smartphone, Users, Clock, FileText, Globe } from 'lucide-react';
import PropTypes from 'prop-types';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-primary rounded-xl shadow-lg p-6 transition-all hover:shadow-xl hover:scale-[1.02]">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
        <p className="text-secondary/70">{description}</p>
    </div>
);

FeatureCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default function Features() {
    const features = [
        {
            icon: Smartphone,
            title: "Interface Intuitiva",
            description: "Design moderno e fácil de usar, permitindo medições com apenas alguns toques."
        },
        {
            icon: Activity,
            title: "Alta Precisão",
            description: "Medições precisas e confiáveis para avaliações profissionais."
        },
        {
            icon: Users,
            title: "Gestão de Pacientes",
            description: "Organize todos os seus pacientes e avaliações em um só lugar."
        },
        {
            icon: Clock,
            title: "Economia de Tempo",
            description: "Otimize seu fluxo de trabalho com medições rápidas e precisas."
        },
        {
            icon: FileText,
            title: "Relatórios Detalhados",
            description: "Gere relatórios profissionais com todas as medições realizadas."
        },
        {
            icon: Globe,
            title: "Multilíngue",
            description: "Disponível em português e inglês para atender mais profissionais."
        }
    ];

    return (
        <section className="py-24 bg-secondary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-secondary sm:text-4xl">
                        Recursos Principais
                    </h2>
                    <p className="mt-4 text-xl text-secondary/70">
                        Tudo que você precisa para realizar avaliações goniométricas profissionais
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}