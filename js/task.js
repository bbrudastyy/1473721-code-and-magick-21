'use strict';

const fireballSize = 22;

function getFireballSpeed (isDirectionLeft) {
  return isDirectionLeft ? 2 : 5;
}

const wizardSpeed = 3;

const wizardWidth = 70;

function getWizardHeight (wizardWidth) {
  return 1.337 * wizardWidth;
}

function getWizardX (screenWidth) {
  return (screenWidth - wizardWidth) / 2;
}

function getWizardY (screenHeight) {
  return screenHeight / 3;
}
