# Connect one end of button to Ground and other end to pin-3 (GPIO-2)

import RPi.GPIO as GPIO
from time import sleep

def setup( pins ):
    GPIO.setwarnings(False)
    GPIO.setmode(GPIO.BOARD)
    for pin in pins:
        GPIO.setup(pin, GPIO.IN)

def readInput( pin ):
    print GPIO.input(pin)

def main():
    setup( [ 3 ] )
    count = 0
    print count
    while (count < 10 ):
        while ( GPIO.input(3) ):
            pass
        count = count + 1
        print count
        while ( not GPIO.input(3) ):
            pass

main()

