import TachometerAnalog from "./tachometer_analog";
import AirspeedAnalog from "./airspeed_analog";
import AttitudeIndicatorAnalog from "./attitude_indicator_analog";
import AltimeterAnalog from "./altimeter_analog";
import TurnCoordinatorAnalog from "./turn_coordinator_analog";
import HeadingIndicatorAnalog from "./heading_indicator_analog";
import VerticalSpeedAnalog from "./vertical_speed_analog";
import Airplane from "./airplane";

import "./styles.css";

const parentElement = document.body;
const airplane = new Airplane();

// Airspeed Indicator
const airspeedSlider = document.getElementById("airspeedSlider");
const airspeedInstrumentContainer = document.getElementById("airspeedInstrument");
const airspeedInstrument = new AirspeedAnalog({
  airplane,
  parentElement: airspeedInstrumentContainer,
});

airspeedSlider.addEventListener("input", () => {
  const newAirspeed = parseFloat(airspeedSlider.value);
  sliderValue.textContent = newAirspeed; // Update the output element
  airspeedInstrument.setNeedle(newAirspeed);
});

// Attitude Indicator
const rollSlider = document.getElementById("rollSlider");
const pitchSlider = document.getElementById("pitchSlider");
const attitudeIndicatorContainer = document.getElementById("attitudeInstrument");
const attitudeIndicator = new AttitudeIndicatorAnalog({
  airplane,
  parentElement: attitudeIndicatorContainer,
});

rollSlider.addEventListener("input", () => {
  const newRoll = parseFloat(rollSlider.value);
  attitudeIndicator.setRollAndPitch(newRoll, attitudeIndicator.pitch);
});

pitchSlider.addEventListener("input", () => {
  const newPitch = parseFloat(pitchSlider.value);
  attitudeIndicator.setRollAndPitch(attitudeIndicator.roll, newPitch);
});

// Altimeter
const altimeterInstrumentContainer = document.getElementById("altimeterInstrument");
const altimeterInstrument = new AltimeterAnalog({
  airplane,
  parentElement: altimeterInstrumentContainer,
});

const altitudeSlider = document.getElementById("altitudeSlider");
const altitudeValue = document.getElementById("altitudeValue");

altitudeSlider.addEventListener("input", () => {
  const newAltitude = parseFloat(altitudeSlider.value);
  altitudeValue.textContent = newAltitude; // Update the altitude display
  altimeterInstrument.setNeedles(newAltitude);
});

// Heading Indicator
const headingSlider = document.getElementById("headingSlider");
const headingInstrumentContainer = document.getElementById("headingInstrument");

const headingInstrument = new HeadingIndicatorAnalog({
  airplane, // Assuming you have an 'airplane' object
  parentElement: headingInstrumentContainer,
});

headingSlider.addEventListener("input", () => {
  const newHeading = parseFloat(headingSlider.value);
  headingValue.textContent = newHeading; // Update the output element
  headingInstrument.setHeading(newHeading);
});

// Optionally, set the initial heading value based on the slider's initial value
const initialHeading = parseFloat(headingSlider.value);
headingInstrument.setHeading(initialHeading);

// Vertical Speed Indicator
const verticalSpeedSlider = document.getElementById("verticalSpeedSlider");
const verticalSpeedInstrumentContainer = document.getElementById("verticalSpeedInstrument");

const verticalSpeedInstrument = new VerticalSpeedAnalog({
  airplane,
  parentElement: verticalSpeedInstrumentContainer,
});

verticalSpeedSlider.addEventListener("input", () => {
  const newVerticalSpeed = parseFloat(verticalSpeedSlider.value);
  verticalSpeedInstrument.setNeedle(newVerticalSpeed);
});

// Optionally, set the initial vertical speed value based on the slider's initial value
const initialVerticalSpeed = parseFloat(verticalSpeedSlider.value);
verticalSpeedInstrument.setNeedle(initialVerticalSpeed);


// Turn Coordinator
const rollRateSlider = document.getElementById("rollRateSlider");
const yawSlider = document.getElementById("yawSlider");
const rollRateValue = document.getElementById("rollRateValue");
const yawValue = document.getElementById("yawValue");
const turnCoordinatorInstrumentContainer = document.getElementById("turnCoordinatorInstrument");

const turnCoordinatorInstrument = new TurnCoordinatorAnalog({
  airplane,
  parentElement: turnCoordinatorInstrumentContainer,
});

rollRateSlider.addEventListener("input", () => {
  const newRollRate = parseFloat(rollRateSlider.value);
  rollRateValue.textContent = newRollRate; // Update the output element
  turnCoordinatorInstrument.setRollRate(newRollRate);
});

yawSlider.addEventListener("input", () => {
  const newYaw = parseFloat(yawSlider.value);
  yawValue.textContent = newYaw; // Update the output element
  turnCoordinatorInstrument.setYaw(newYaw);
});

// Optionally, set the initial roll rate and yaw values based on the sliders' initial values
const initialRollRate = parseFloat(rollRateSlider.value);
const initialYaw = parseFloat(yawSlider.value);
turnCoordinatorInstrument.setRollRate(initialRollRate);
turnCoordinatorInstrument.setYaw(initialYaw);
