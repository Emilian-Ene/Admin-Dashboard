const navBar = document.querySelector('.navbar');
const openMenu = document.querySelector('.menu-icon');
const closeMenu = document.querySelector('.close-menu');

openMenu.addEventListener('click', () => {
  navBar.setAttribute('class', 'side-bar');
});
closeMenu.addEventListener('click', () => {
  navBar.setAttribute('class', 'navbar');
});
// ---------------------------------------------------------------------------
import { request } from './Modules/fetch.js';
request();
// ---------------------------------------------------------------------------
import { barChartOptions, areaChartOptions } from './Modules/charts.js';

let barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

let areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();
