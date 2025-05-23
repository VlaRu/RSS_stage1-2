import './sass/style.scss';
import showDropList from './modules/ui/showDropList';
import switchTheme from './modules/ui/switchTheme';
import { createLogicGame } from './modules/core/logicGame';
import initializeEventHandlers from './modules/dom/eventHandlers';
document.addEventListener('DOMContentLoaded', () => {
  createLogicGame();
  showDropList();
  switchTheme();
  initializeEventHandlers();
});