import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Demo from '../components/sections/Demo';

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <Features />
            <Demo />
        </div>
    );
}