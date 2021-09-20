import { startApp, async } from 'coil-react';
import 'asset/css/index.less';

const MainComponent = async(() => import('module/main'), 'MainComponent');

startApp({
    MainComponent,
    entryElement: document.getElementById('app'),
});
