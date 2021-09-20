import React from 'react';
import { ParticleUtil } from 'util/ParticleUtil';
import './index.less';

export const Board = React.memo(() => {
    const [a, setA] = React.useState<HTMLElement | null>(null);
    const [b, setB] = React.useState<HTMLElement | null>(null);

    const onClick = () => {
        if (a && b) {
            ParticleUtil.fire({
                from: b,
                to: a,
            });
        }
    };

    return (
        <div className="board" onClick={onClick}>
            <div className="a" ref={setA}>
                a
            </div>
            <div className="b" ref={setB}>
                b
            </div>
        </div>
    );
});
