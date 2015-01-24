#Room Door Sensor

This sensor has 3 parts:

1) Hardware: It uses two peices of tin foil that contact eachother when the door is shut. This sends a signal to the Arduino Board.

2) Arduino Code: The arduino board has a pin set to INPUT_PULLUP which keeps the pin at 5V relative to its ground. When the sensor makes contact, the pin is grounded and drops to 0V. Thus if the pin is LOW then the door is shut.When the state changes, then I send a signal via serial to my controller code.

3) C++ controller code. I arbitrarly chose C++ as my language, but litterally any language with serial capabilities could have been used. This code listens for serial input. When it recieves a value of '0' the door has been shut. When it recieves a value of '1' the door has been opened.

That's it. The code is pretty simple, but it will provide me with a couple of bits of data. I am going to place the sensor on my bathroom door which will tell me how often I use the restroom and what times of the day I use it.
