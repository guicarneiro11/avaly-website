import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FooterSection = ({ title, children }) => (
    <div className="flex flex-col space-y-4">
        <h3 className="font-semibold text-secondary">{title}</h3>
        {children}
    </div>
);

FooterSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

const FooterLink = ({ href, children, external = false }) => {
    const className = "text-secondary/70 hover:text-accent transition-colors";

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
            >
                {children}
            </a>
        );
    }

    return (
        <Link to={href} className={className}>
            {children}
        </Link>
    );
};

FooterLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    external: PropTypes.bool
};

FooterLink.defaultProps = {
    external: false
};

export default function Footer() {
    return (
        <footer className="bg-primary border-t border-secondary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <FooterSection title="Sobre">
                        <p className="text-secondary/70">
                            Avaly é um aplicativo de goniometria digital desenvolvido para facilitar
                            o trabalho de fisioterapeutas na avaliação de pacientes.
                        </p>
                    </FooterSection>

                    <FooterSection title="Links Rápidos">
                        <FooterLink href="/">Home</FooterLink>
                        <FooterLink href="/about">Sobre</FooterLink>
                        <FooterLink href="/contact">Contato</FooterLink>
                    </FooterSection>

                    <FooterSection title="Legal">
                        <FooterLink href="/privacy">Privacidade</FooterLink>
                        <FooterLink href="/terms">Termos de Uso</FooterLink>
                    </FooterSection>

                    <FooterSection title="Contato">
                        <FooterLink
                            href="mailto:contato@avaly.com.br"
                            external
                        >
                            contato@avaly.com.br
                        </FooterLink>
                        <div className="flex space-x-4">
                            <FooterLink
                                href="https://www.linkedin.com/in/guicarneiro1/"
                                external
                            >
                                LinkedIn
                            </FooterLink>
                            <FooterLink
                                href="https://www.instagram.com/avaly.com.br"
                                external
                            >
                                Instagram
                            </FooterLink>
                        </div>
                    </FooterSection>
                </div>

                <div className="mt-8 pt-8 border-t border-secondary/10">
                    <p className="text-center text-secondary/70">
                        © {new Date().getFullYear()} Avaly. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}