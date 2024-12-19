import { useState, useEffect } from 'react';
import { ChevronRight, Smartphone, Activity, Users, Download } from 'lucide-react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.guicarneirodev.goniometro';

export default function App() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features = [
        {
            icon: <Smartphone className="w-6 h-6 text-blue-500" />,
            title: "Interface Intuitiva",
            description: "Realize medições goniométricas com apenas alguns toques"
        },
        {
            icon: <Activity className="w-6 h-6 text-blue-500" />,
            title: "Alta Precisão",
            description: "Resultados precisos e confiáveis para sua avaliação"
        },
        {
            icon: <Users className="w-6 h-6 text-blue-500" />,
            title: "Gestão de Pacientes",
            description: "Organize todos os seus pacientes em um só lugar"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
            <nav className="bg-white shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-blue-500">Avaly</h1>
                        <a
                            href={PLAY_STORE_URL}
                            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Download className="w-5 h-5" />
                            Download
                        </a>
                    </div>
                </div>
            </nav>

            <main className={`max-w-6xl mx-auto px-4 py-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Goniometria Digital Profissional
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Transforme seu smartphone em uma ferramenta precisa de avaliação
                    </p>
                    <a
                        href={PLAY_STORE_URL}
                        className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Baixar Agora
                        <ChevronRight className="w-5 h-5" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-white mt-16 py-8 border-t">
                <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
                    <p>© {new Date().getFullYear()} Avaly. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}