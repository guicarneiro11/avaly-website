import { motion } from 'framer-motion';
import Container from '../components/common/Container';

export default function Privacy() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-16 bg-primary"
        >
            <Container>
                <div className="max-w-3xl mx-auto prose prose-lg">
                    <h1 className="text-3xl font-bold text-secondary mb-8">Política de Privacidade</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">1. Informações Coletadas</h2>
                        <p className="text-secondary/70">
                            O aplicativo Avaly coleta apenas as informações necessárias para seu funcionamento:
                        </p>
                        <ul className="list-disc pl-6 text-secondary/70">
                            <li>Email para autenticação e comunicação</li>
                            <li>Nome do usuário para identificação</li>
                            <li>Dados dos pacientes inseridos pelo usuário</li>
                            <li>Imagens capturadas durante as avaliações</li>
                            <li>Medições e avaliações realizadas</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">2. Uso das Informações</h2>
                        <p className="text-secondary/70">
                            As informações coletadas são utilizadas exclusivamente para:
                        </p>
                        <ul className="list-disc pl-6 text-secondary/70">
                            <li>Fornecer e manter os serviços do aplicativo</li>
                            <li>Gerar relatórios de avaliação</li>
                            <li>Melhorar a experiência do usuário</li>
                            <li>Enviar notificações importantes sobre o serviço</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">3. Proteção de Dados</h2>
                        <p className="text-secondary/70">
                            Implementamos medidas de segurança rigorosas para proteger seus dados:
                        </p>
                        <ul className="list-disc pl-6 text-secondary/70">
                            <li>Criptografia de dados em trânsito e em repouso</li>
                            <li>Acesso restrito a informações sensíveis</li>
                            <li>Backups regulares e seguros</li>
                            <li>Monitoramento contínuo de segurança</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">4. Compartilhamento de Dados</h2>
                        <p className="text-secondary/70">
                            Não compartilhamos suas informações com terceiros, exceto:
                        </p>
                        <ul className="list-disc pl-6 text-secondary/70">
                            <li>Quando exigido por lei</li>
                            <li>Com seu consentimento explícito</li>
                            <li>Para proteger nossos direitos legais</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">5. Seus Direitos</h2>
                        <p className="text-secondary/70">
                            Você tem direito a:
                        </p>
                        <ul className="list-disc pl-6 text-secondary/70">
                            <li>Acessar seus dados pessoais</li>
                            <li>Solicitar correções de dados incorretos</li>
                            <li>Solicitar a exclusão de seus dados</li>
                            <li>Revogar consentimento para uso dos dados</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">6. Contato</h2>
                        <p className="text-secondary/70">
                            Para questões sobre privacidade, entre em contato através do email: contato@avaly.com.br
                        </p>
                    </section>
                </div>
            </Container>
        </motion.div>
    );
}