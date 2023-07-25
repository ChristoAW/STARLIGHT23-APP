import { useEffect, useState } from 'react';

import styles from './scrollbar.module.css';

import Anchor from '@/asset/images/scrollbar/Anchor.png';
import Chain from '@/asset/images/scrollbar/Chain.png';
import Image from 'next/image';

const Scrollbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / totalScrollHeight) * 100;
      setScrollProgress(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const checkpoints = [0, 20, 40, 60, 80];
  const numChains = checkpoints.filter(checkpoints => scrollProgress >= checkpoints).length;

  return (
    <div>
        {Array.from({length: numChains}, (_,index) => (
            <Image key={index} src={Chain} className={styles.scrollbar} style={{
                transform: `translateY(calc(${scrollProgress}vh - ${index * 192.717 + 192.717}px))`,
              }} />
        ))}
      <Image src={Anchor} className={styles.scrollbar} style={{ transform: `translateY(${scrollProgress}vh)` }}/>
    </div>
  );
};

export default Scrollbar;
