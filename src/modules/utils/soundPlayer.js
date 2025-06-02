import click1Sound from '../../assets/sounds/click1.mp3';
import click2Sound from '../../assets/sounds/click2.mp3';
import winGameSound from '../../assets/sounds/winGame2.wav';

const sounds = {
  click1: new Audio(click1Sound),
  click2: new Audio(click2Sound),
  winGame: new Audio(winGameSound),
};

let isSoundEnabled = true;

function playSound(soundName) {
  if (!isSoundEnabled) return;

  try {
    const sound = sounds[soundName];
    if (!sound) {
      console.error(`Sound ${soundName} not found`);
      return;
    }
    sound.currentTime = 0;
    sound.play().catch((error) => {
      console.log('Error playing sound:', error);
    });
  } catch (error) {
    console.log('Error with sound:', error);
  }
}

function toggleSound() {
  isSoundEnabled = !isSoundEnabled;
  return isSoundEnabled;
}

function getSoundState() {
  return isSoundEnabled;
}

export { playSound, toggleSound, getSoundState };