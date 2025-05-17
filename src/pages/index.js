import Features from '@/components/features';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Intropage from '@/components/intropage';
import Programs from '@/components/programs';
import Space from '@/components/space';
import Story from '@/components/story';
import Subjects from '@/components/subjects';
import Wayofteaching from '@/components/wayofteaching';
import World from '@/components/world';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
        <Header/>
        <Intropage/>
        <Features/>
        <Story/>
        <Wayofteaching/>
        <Programs/>
        <Subjects/>
        <World/>
        <Space/>
        <Footer/>
    </div>
  );
}
