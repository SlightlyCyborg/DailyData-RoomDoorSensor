/*
  State change detection (edge detection)
  made for SlightlyCyborg-DailyData-RoomDoorSensor
  modifaction of Arduino Example Code
 */

// this constant won't change:
const int  sensorPin = 2;    // the pin that the pushbutton is attached to
const int ledPin = 13;       // the pin that the LED is attached to

// Variables will change:
int sensorState = 0;         // current state of the button
int lastSensorState = 0;     // previous state of the button

void setup() {
  // initialize the button pin as a input:
  pinMode(sensorPin, INPUT_PULLUP);
  // initialize serial communication:
  Serial.begin(9600);
}


void loop() {
 sensorState = digitalRead(sensorPin);

  // compare the buttonState to its previous state
  if (sensorState != lastSensorState) {
    // if the state has changed, increment the counter
    if (sensorState == HIGH) {
      lastSensorState = HIGH;
      // if current state is HIGH then door went from 
      //closed to open
      Serial.println("opened");
    } 
    else {
      lastSensorState = LOW;
      // if the current state is LOW then the door
      // went from open to closed:
      Serial.println("closed"); 
    }
  }
}









