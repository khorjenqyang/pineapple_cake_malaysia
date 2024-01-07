import { useRef, useEffect, useState, ReactNode } from 'react';

interface Props{
  children:ReactNode
}

const ViewPortObserver = ({children}:Props) => {

  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 } // adjust the threshold as needed
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef}>
      {isVisible && children}
    </div>
  );
  
};

export default ViewPortObserver;
