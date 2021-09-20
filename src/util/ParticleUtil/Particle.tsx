import React from 'react';
import { ParticleUtil } from '../ParticleUtil';
import './index.less';

interface Props {
    from: HTMLElement;
    to: HTMLElement;
    onArrive: () => void;
}

export const Particle = React.memo(({ from, to, onArrive }: Props) => {
    const [animationName, setAnimationName] = React.useState<string>('');
    const fromCoord = React.useMemo(() => ParticleUtil.getCoordinate(from), [from]);
    const toCoord = React.useMemo(() => ParticleUtil.getCoordinate(to), [to]);

    const style: React.CSSProperties = {
        animationName,
        top: fromCoord[0],
        left: fromCoord[1],
    };

    React.useEffect(() => {
        // Inject Animation
        const styleSheet = document.styleSheets[0];
        const length = styleSheet.cssRules.length;
        const animationName = `animation-${Date.now()}`;
        const keyframes = `@-webkit-keyframes ${animationName} {
            from {
                top: ${fromCoord[0]}px;
                left: ${fromCoord[1]}px;
            }
            to {
                top: ${toCoord[0]}px;
                left: ${toCoord[1]}px;
            }
        }`;
        styleSheet.insertRule(keyframes, length);
        setAnimationName(animationName);
    }, [fromCoord, toCoord]);

    return <div style={style} onAnimationEnd={onArrive} className="g-particle" />;
});
