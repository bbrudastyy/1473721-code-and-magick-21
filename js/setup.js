'use strict';

const WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const WIZARD_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const WIZARD__EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
const userDialog = document.querySelector('.setup');
const similarListElement = userDialog.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
let wizards = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getWizardInfo() {
  return {
    name: WIZARD_NAME[getRandomInt(WIZARD_NAME.length)] + ' ' + WIZARD_SURNAME[getRandomInt(WIZARD_SURNAME.length)],
    coatColor: WIZARD_COLOR[getRandomInt(WIZARD_COLOR.length)],
    eyesColor: WIZARD__EYES_COLOR[getRandomInt(WIZARD__EYES_COLOR.length)]
  };
}

function renderWizard(wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

for (let i = 0; i < 4; i++) {
  wizards.push(getWizardInfo());
}

const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
userDialog.classList.remove('hidden');
