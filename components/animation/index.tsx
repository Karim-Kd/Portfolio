import { useEffect, useRef, useState } from 'react';
import type { LottiePlayer } from 'lottie-web';
import { Wrapper } from './styles';

interface AnimationProps {
    path: string;
    autoplay?: boolean;
    loop?: boolean;
}

export default function Animation({ path, autoplay = true, loop = true }: AnimationProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [lottie, setLottie] = useState<LottiePlayer | null>(null);

    useEffect(() => {
        import('lottie-web').then((Lottie) => setLottie(Lottie.default));
    }, []);

    useEffect(() => {
        if (lottie && ref.current) {
            const animation = lottie.loadAnimation({
                container: ref.current,
                renderer: 'svg',
                loop,
                autoplay,
                path
            });

            return () => animation.destroy();
        }
    }, [lottie, autoplay, loop, path]);

    return (
        <Wrapper ref={ref} />
    );
};