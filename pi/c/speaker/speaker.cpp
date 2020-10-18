#include <wiringPi.h>
#include <stdio.h>
int main(void)
{
  int pin = 7;
  wiringPiSetup ();
  pinMode (pin, OUTPUT);
  for ( int frequency=20; frequency<20000; frequency += frequency/10) {
    printf("%d\n", frequency);
    for (int i=0; i<frequency; i++)  {
      digitalWrite(pin,HIGH);
      delayMicroseconds(500000/frequency);
      digitalWrite(pin,LOW);
      delayMicroseconds(500000/frequency);
    }
  }
  return 0;
}
  
