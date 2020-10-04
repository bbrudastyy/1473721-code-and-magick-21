`use strict`;

const WIZARD_NAME = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAME = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD__EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

const userDialog = document.querySelector(`.setup`);
const similarListElement = userDialog.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const userNameInput = document.querySelector(`.setup-user-name`);
const fragment = document.createDocumentFragment();

const setupOpen = document.querySelector(`.setup-open`);
const setup = document.querySelector(`.setup`);
const setupClose = setup.querySelector(`.setup-close`);

const setupWizardCoatColor = document.querySelector(`.setup-wizard .wizard-coat`);
const setupWizardEyesColor = document.querySelector(`.setup-wizard .wizard-eyes`);
const setupWizardFireballColor = document.querySelector(`.setup-fireball-wrap`);

const inputCoatColor = document.getElementsByName(`coat-color`);
const inputEyesColor = document.getElementsByName(`eyes-color`);
const inputFireballColor = document.getElementsByName(`fireball-color`);

// inputCoatColor.value = WIZARD_COLOR[0];
// console.log(inputEyesColor.value);
// inputFireballColor.value = WIZARD_FIREBALL_COLOR[0];



let wizards = [];


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getWizardInfo() {
  return {
    name: `${WIZARD_NAME[getRandomInt(WIZARD_NAME.length)]} ${WIZARD_SURNAME[getRandomInt(WIZARD_SURNAME.length)]}`,
    coatColor: WIZARD_COLOR[getRandomInt(WIZARD_COLOR.length)],
    eyesColor: WIZARD__EYES_COLOR[getRandomInt(WIZARD__EYES_COLOR.length)]
  };
}

function renderWizard(wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
}

for (let i = 0; i < 4; i++) {
  wizards.push(getWizardInfo());
}


for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
userDialog.classList.remove(`hidden`);

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

userNameInput.addEventListener(`input`, function () {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Ещё ` + (MIN_NAME_LENGTH - valueLength) + ` симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` симв.`);
  } else {
    userNameInput.setCustomValidity(``);
  }

  userNameInput.reportValidity();
});

setupWizardCoatColor.addEventListener(`click`, function () {
  const randomCoatColor = WIZARD_COLOR[getRandomInt(WIZARD_COLOR.length)];
  setupWizardCoatColor.style.fill = randomCoatColor;
  inputCoatColor.value = randomCoatColor;
});

setupWizardEyesColor.addEventListener(`click`, function () {
  const randomEyesColor = WIZARD__EYES_COLOR[getRandomInt(WIZARD__EYES_COLOR.length)];
  setupWizardEyesColor.style.fill = randomEyesColor;
  inputEyesColor.value = randomEyesColor;
});

setupWizardFireballColor.addEventListener(`click`, function () {
  const randomFireballColor = WIZARD_FIREBALL_COLOR[getRandomInt(WIZARD_FIREBALL_COLOR.length)];
  setupWizardFireballColor.style.backgroundColor = randomFireballColor;
  inputFireballColor.value = randomFireballColor;
});
