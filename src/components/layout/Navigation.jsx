import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/about' },
    { name: 'Contato', path: '/contact' }
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-primary shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-2"
                    >
                        <img
                            src="/avaly.png"
                            alt="Avaly Logo"
                            className="h-8 w-auto"
                        />
                        <span className={`font-bold text-xl ${
                            isScrolled ? 'text-secondary' : 'text-primary'
                        }`}>
              Avaly
            </span>
                    </Link>

                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`transition-colors ${
                                    isScrolled ? 'text-secondary hover:text-accent' : 'text-primary hover:text-primary/80'
                                } ${
                                    location.pathname === item.path ? 'font-semibold' : 'font-medium'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md ${
                                isScrolled ? 'text-secondary' : 'text-primary'
                            }`}
                            aria-expanded="false"
                        >
                            <span className="sr-only">Abrir menu</span>
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-primary">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    location.pathname === item.path
                                        ? 'text-accent bg-accent/10'
                                        : 'text-secondary hover:text-accent hover:bg-accent/5'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}