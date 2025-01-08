import { motion } from 'framer-motion';
import Container from '../components/common/Container';

export default function Terms() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-16 bg-primary"
        >
            <Container>
                <div className="max-w-3xl mx-auto prose prose-lg">
                    <h1 className="text-3xl font-bold text-secondary mb-8">Termos de Uso</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">1. Aceitação dos Termos</h2>
                        <p className="text-secondary/70">
                            Ao utilizar o aplicativo Avaly, você concorda com estes termos de uso.
                            Se você não concordar com algum aspecto destes termos, não utilize o aplicativo.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">2. Uso do Serviço</h2>
                        <p className="text-secondary/70">O usuário concorda em:</p>
                        <ul className="list-disc pl-6 text-secondary/70">
                            <li>Fornecer informações verdadeiras e precisas</li>
                            <li>Manter a confidencialidade de sua conta</li>
                            <li>Usar o serviço de acordo com as leis aplicáveis</li>
                            <li>Não compartilhar dados sensíveis de pacientes</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">3. Responsabilidades</h2>
                        <ul className="list-disc pl-6 text-secondary/70">
                            <li>O usuário é responsável por todas as atividades em sua conta</li>
                            <li>O aplicativo serve como ferramenta de auxílio e não substitui o julgamento profissional</li>
                            <li>A precisão das medições depende do uso correto do aplicativo</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">4. Propriedade Intelectual</h2>
                        <p className="text-secondary/70">
                            Todos os direitos de propriedade intelectual do aplicativo Avaly são reservados.
                            O usuário não pode copiar, modificar, distribuir ou fazer engenharia reversa do aplicativo.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">5. Limitação de Responsabilidade</h2>
                        <p className="text-secondary/70">
                            O Avaly não se responsabiliza por:
                        </p>
                        <ul className="list-disc pl-6 text-secondary/70">
                            <li>Uso indevido do aplicativo</li>
                            <li>Decisões tomadas com base nas medições</li>
                            <li>Perda de dados devido a problemas técnicos</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">6. Alterações nos Termos</h2>
                        <p className="text-secondary/70">
                            O Avaly se reserva o direito de modificar estes termos a qualquer momento.
                            Alterações significativas serão notificadas aos usuários.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">7. Contato</h2>
                        <p className="text-secondary/70">
                            Para dúvidas sobre os termos de uso, entre em contato através do email: contato@avaly.com.br
                        </p>
                    </section>
                </div>
            </Container>
        </motion.div>
    );
}