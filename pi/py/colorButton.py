# ColorChanging LED demonstration
# Click the button and observe the LED change color
# from red to green to blue and then back to red.
#
# Wiring Description:
#
#   LED: Red   --- 7
#        Green --- 10
#        Blue  --- 11
#        Ground -- 39
# 
#   Switch:
#       A -- 3
#       B -- GND
#

import RPi.GPIO as GPIO
from time import sleep

def setup( outPins,inPins ):
    GPIO.setwarnings(False)
    GPIO.setmode(GPIO.BOARD)
    for pin in outPins:
        GPIO.setup(pin, GPIO.OUT, initial=GPIO.LOW)
    for pin in inPins:
        GPIO.setup(pin, GPIO.IN)
 
def changeColor( pwmC1, pwmC2, min=0, max=100 ):
   for dutyCycle in range( min, max ):
        pwmC1.start( max - dutyCycle )
        pwmC2.start( dutyCycle )
        sleep(0.1)

        
def startColorChange(pwmRed, pwmGreen, pwmBlue, frequency=1000):    
    pwmRed = GPIO.PWM(pwmRed, frequency )
    pwmBlue = GPIO.PWM(pwmBlue, frequency )
    pwmGreen = GPIO.PWM(pwmGreen, frequency )
    
    # Change from Red to Blue to Green to Red
    changeColor( pwmRed, pwmBlue )
    changeColor( pwmBlue, pwmGreen )
    changeColor( pwmGreen, pwmRed )

def stopColors():
    GPIO.output( 11, GPIO.LOW )
    GPIO.output( 10, GPIO.LOW )
    GPIO.output( 7, GPIO.LOW )       

def main():
    setup([10,11,7],[3])
    while True:
        if GPIO.input(3) == 0:
            startColorChange(7,10,11)
        if GPIO.input(3) == 1:
            stopColors()

main()
