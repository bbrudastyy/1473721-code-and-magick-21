'use strict';

var fireballSize = 22;

var getFireballSpeed = (isDirectionLeft) => {
  return isDirectionLeft ? 2 : 5;
}

var wizardSpeed = 3;

var wizardWidth = 70;

var getWizardHeight = (wizardWidth) => {
  return 1.337 * wizardWidth;
}

var getWizardX = (screenWidth) => {
  return (screenWidth - wizardWidth) / 2;
}

var getWizardY = (screenHeight) => {
  return screenHeight / 3;
}
