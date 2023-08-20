import { useEffect, useState, useRef } from 'react';

import styles from './scrollbar.module.css';

import Anchor from '@/asset/images/scrollbar/Anchor.png';
import Chain from '@/asset/images/scrollbar/Chain.png';
import Image from 'next/image';

const Scrollbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const anchorRef = useRef(null);

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

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (dragging) {
        const maxScrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const offsetY = event.clientY - startY;
        const scrollPercentage = (offsetY / window.innerHeight) * 100;
        const newScrollProgress = Math.max(
          0,
          Math.min(scrollPercentage, maxScrollHeight)
        );

        const minScrollProgress = (72.3667 / window.innerHeight) * 100;
        const maxScrollProgress = 100;
        const clampedScrollProgress = Math.max(
          minScrollProgress,
          Math.min(newScrollProgress, maxScrollProgress)
        );

        setScrollProgress(clampedScrollProgress);

        const newScrollY =
          (clampedScrollProgress / 100) *
          (document.documentElement.scrollHeight - window.innerHeight);
        window.scrollTo(0, newScrollY);
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, startY]);

  const handleMouseDown = (event) => {
    event.preventDefault();
    setDragging(true);
    const boundingClientRect = anchorRef.current.getBoundingClientRect();
    const initialDisplacement =
      scrollProgress - (72.3667 / window.innerHeight) * 100;
    setStartY(event.clientY - boundingClientRect.top - initialDisplacement);
  };

  const checkpoints = [0, 20, 40, 60, 80];
  const numChains = checkpoints.filter(
    (checkpoints) => scrollProgress >= checkpoints
  ).length;

  const maxTranslateY = scrollProgress - (72.3667 / window.innerHeight) * 100;

  return (
    <div>
      {Array.from({ length: numChains }, (_, index) => (
        <Image
          key={index}
          src={Chain}
          className={styles.scrollbar}
          style={{
            transform: `translateY(calc(${scrollProgress}vh - ${
              index * 192.717 + 192.717 + 72.3667
            }px))`,
          }}
          onMouseDown={handleMouseDown}
        />
      ))}
      <Image
        ref={anchorRef}
        src={Anchor}
        className={styles.scrollbar}
        style={{
          transform: `translateY(calc(${maxTranslateY}vh))`,
          cursor: 'grab',
        }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default Scrollbar;
