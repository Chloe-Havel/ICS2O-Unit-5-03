// Copyright (c) 2022 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-03/sw.js", {
    scope: "/ICS2O-Unit-5-03/",
  })
}

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
  //process
  let age = valueFromSlider

  if (age >= 17) {
    document.getElementById("answer").innerHTML =
      "You can see a R rated movie alone."
  } else if (age >= 13) {
    document.getElementById("answer").innerHTML =
      "you can  see a PG 13 movie alnoe."
  } else {
    document.getElementById("answer").innerHTML =
      "You can see a G rated movie Alone."
  }
}
