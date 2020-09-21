'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 50;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};
const getMaxElement = (arr) => {
  const maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
window.renderStatistics = (ctx, names, times) => {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  ctx.fillText("Ура вы победили!", CLOUD_X + GAP * 2, GAP * 2 + GAP / 2);
  ctx.fillText("Список результатов:", CLOUD_X + GAP * 2, GAP * 4 + GAP / 2);

  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    ctx.fillStyle = '000000';
    ctx.fillText(names[i], CLOUD_X + FONT_GAP + (FONT_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - 30);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + FONT_GAP + (FONT_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - 40 - (BAR_HEIGHT * times[i] / maxTime) - 25);
    ctx.fillStyle = `hsl(244, ${getRandomInt(100)}% , 44%)`;
    if (names[i] === "Вы") {
      ctx.fillStyle = 'hsl(0, 100%, 50%)';
    }
    ctx.fillRect(CLOUD_X + FONT_GAP + (FONT_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - 40, BAR_WIDTH, -(BAR_HEIGHT * times[i] / maxTime));
  }
};
