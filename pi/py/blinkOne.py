# This program blinks an LED connected to Raspberry PI 100 times.
#
# Connect pin 11 to LED+ and ground to LED-
#

import RPi.GPIO as GPIO
from time import sleep

GPIO.setwarnings( False )
GPIO.setmode( GPIO.BOARD )

GPIO.setup( 11, GPIO.OUT, \
            initial=GPIO.LOW)

for _ in range(100):
    GPIO.output( 11, GPIO.HIGH )
    sleep(0.2)
    GPIO.output( 11, GPIO.LOW )
    sleep(0.2)
