import Button from '../common/Button';

export default function Hero() {
    return (
        <div className="relative bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-secondary sm:text-5xl md:text-6xl">
                        <span className="block">Goniometria Digital</span>
                        <span className="block text-accent">Profissional</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-secondary/70 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Transforme seu smartphone em uma ferramenta precisa de avaliação.
                        Meça ângulos articulares com precisão e facilidade.
                    </p>
                    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                        <div className="rounded-md shadow">
                            <Button
                                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.guicarneirodev.goniometro', '_blank')}
                            >
                                Download na Play Store
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}