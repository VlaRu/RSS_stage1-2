import './sass/style.scss';
import switchTheme from './modules/ui/switchTheme';
import { createLogicGame } from './modules/core/logicGame';
import initializeEventHandlers from './modules/dom/eventHandlers';

document.addEventListener('DOMContentLoaded', () => {
  createLogicGame();
  switchTheme();
  initializeEventHandlers();
});