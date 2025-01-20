
import { useEffect, useState } from 'react';
import MobileHome from './mobile';
import DesktopHome from './desktop';



export default function Home() {

    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkDeviceType = () => {
            // Check for touch support
            if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
                setIsTouchDevice(true);
            } else {
                setIsTouchDevice(false);
            }
        };

        checkDeviceType();

        window.addEventListener('resize', checkDeviceType);

        return () => {
            window.removeEventListener('resize', checkDeviceType);
        };
    }, []);


    

    return (
        <>
          {isTouchDevice ? <MobileHome /> : <DesktopHome />}
        </>
      );

};


