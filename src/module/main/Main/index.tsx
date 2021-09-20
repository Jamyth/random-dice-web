import React from 'react';
import { Board } from './Board';
import './index.less';

export const Main = React.memo(() => {
    return (
        <div id="board-container">
            <Board />
            <Board />
        </div>
    );
});
