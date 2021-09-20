import React from 'react';
import ReactDOM from 'react-dom';
import { Particle } from './Particle';
import type { ParticleFireOption } from './type';

function fire(options: ParticleFireOption) {
    const { onArrive } = options;

    const div = document.createElement('div');
    const body = document.body;

    const destroy = () => {
        onArrive?.();
        body.removeChild(div);
        console.info('?');
    };

    ReactDOM.render(<Particle {...options} onArrive={destroy} />, div, () => body.appendChild(div));
}

function getCoordinate(element: HTMLElement): [number, number] {
    const centerX = element.scrollWidth / 2;
    const centerY = element.scrollHeight / 2;

    const boundingClientRect = element.getBoundingClientRect();

    boundingClientRect;

    const top = boundingClientRect.top + centerY;
    const left = boundingClientRect.left + centerX;

    return [top, left];
}

export const ParticleUtil = Object.freeze({
    fire,
    getCoordinate,
});
