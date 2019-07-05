#include <wiringPi.h>
int main(void)
{
  int pin = 7;
  wiringPiSetup ();
  pinMode (pin, OUTPUT);
  for (;;)  {
    digitalWrite(pin,HIGH);
    delay(500);
    digitalWrite(pin,LOW);
    delay(500);
  }
  return 0;
}
  
