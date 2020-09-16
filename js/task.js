let fireballSize = 22;

function getFireballSpeed(isDirectionLeft) {
  return isDirectionLeft ? 2 : 5;
}

let wizardSpeed = 3;

let wizardWidth = 70;

function getWizardHeight(wizardWidth) {
  return 1.337 * wizardWidth;
}

function getWizardX(screenWidth) {
  return (screenWidth - wizardWidth) / 2;
}

function getWizardY(screenHeight) {
  return screenHeight / 3;
}
