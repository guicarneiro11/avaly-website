import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Ruler, Camera, FileSpreadsheet, Share2, Play, Pause } from 'lucide-react';
import PropTypes from 'prop-types';

const features = [
    {
        id: 'goniometria',
        title: 'Goniometria Digital',
        description: 'Meça ângulos articulares com precisão utilizando de nosso goniometro digital',
        icon: Ruler,
        color: 'bg-blue-500',
        timestamp: 36
    },
    {
        id: 'method',
        title: 'Método de avaliação',
        description: 'Interface simples para você realizar sua goniometria de uma foto importada ou capturada na hora.',
        icon: Camera,
        color: 'bg-green-500',
        timestamp: 36
    },
    {
        id: 'relatorios',
        title: 'Relatórios Detalhados',
        description: 'Organize os dados dos seus pacientes após a avaliação dentro do próprio app',
        icon: FileSpreadsheet,
        color: 'bg-purple-500',
        timestamp: 60
    },
    {
        id: 'compartilhar',
        title: 'Compartilhamento',
        description: 'Compartilhe relatórios facilmente com outros profissionais através da função de enviar PDFs.',
        icon: Share2,
        color: 'bg-teal-500',
        timestamp: 72
    }
];

const FeatureCard = ({ feature, isActive, onClick }) => {
    const Icon = feature.icon;

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onClick(feature)}
            className={`cursor-pointer p-6 rounded-xl transition-all ${
                isActive
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-secondary/5 text-secondary hover:bg-secondary/10'
            }`}
        >
            <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-white/10">
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className={isActive ? 'text-white/90' : 'text-secondary/70'}>
                        {feature.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

FeatureCard.propTypes = {
    feature: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
        color: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired
    }).isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

const VideoPlayer = ({ videoUrl, activeFeature }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(progress);
        }
    };

    const handleProgressClick = (e) => {
        const progressBar = e.currentTarget;
        const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
        if (videoRef.current) {
            videoRef.current.currentTime = clickPosition * videoRef.current.duration;
        }
    };

    // Atualiza o tempo do vídeo quando uma feature é selecionada
    const jumpToFeature = () => {
        if (videoRef.current && activeFeature?.timestamp) {
            videoRef.current.currentTime = activeFeature.timestamp;
            if (!isPlaying) {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    // Efeito para saltar para a timestamp da feature quando ela é selecionada
    React.useEffect(() => {
        jumpToFeature();
    }, [activeFeature]);

    return (
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-secondary/5 h-[800px]">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
            >
                <source src={videoUrl} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>

            {/* Controles personalizados */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <div
                    className="w-full h-1 bg-white/30 rounded-full cursor-pointer mb-4"
                    onClick={handleProgressClick}
                >
                    <div
                        className="h-full bg-accent rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <button
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-accent hover:bg-accent/90 transition-colors"
                >
                    {isPlaying ? (
                        <Pause className="w-6 h-6 text-white" />
                    ) : (
                        <Play className="w-6 h-6 text-white" />
                    )}
                </button>
            </div>
        </div>
    );
};

VideoPlayer.propTypes = {
    videoUrl: PropTypes.string.isRequired,
    activeFeature: PropTypes.shape({
        timestamp: PropTypes.number.isRequired
    })
};

const DemoSection = () => {
    const [activeFeature, setActiveFeature] = useState(features[0]);

    return (
        <section className="py-24 bg-primary overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-secondary sm:text-4xl">
                        Descubra o valor da Avaliação Digital
                    </h2>
                    <p className="mt-4 text-xl text-secondary/70">
                        Explore as funcionalidades que tornam o Avaly a escolha ideal para fisioterapeutas
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-4">
                        {features.map((feature) => (
                            <FeatureCard
                                key={feature.id}
                                feature={feature}
                                isActive={activeFeature.id === feature.id}
                                onClick={setActiveFeature}
                            />
                        ))}
                    </div>

                    <div className="relative lg:sticky lg:top-24 flex justify-center items-start">
                        <VideoPlayer
                            videoUrl="/public/AvalyVideo.mp4"
                            activeFeature={activeFeature}
                        />

                        {/* Background decorative elements */}
                        <div className="absolute -z-10 top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl transform translate-y-1/2 -translate-x-1/2" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;