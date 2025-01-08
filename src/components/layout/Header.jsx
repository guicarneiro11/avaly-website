import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Sobre', href: '/about' },
        { name: 'Contato', href: '/contact' }
    ];

    return (
        <header className="bg-primary shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link to="/" className="flex items-center">
                            <img src="/avaly.png" alt="Avaly" className="h-8 w-auto" />
                            <span className="ml-2 text-xl font-bold text-accent">Avaly</span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-secondary hover:text-accent transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-secondary hover:text-accent"
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="block px-3 py-2 text-secondary hover:text-accent"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}