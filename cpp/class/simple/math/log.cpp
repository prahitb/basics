#include "log.h"
#include <math.h>
#include <iostream>

using namespace std;

Log::Log(float __givenNumber, float __base) {
  base = __base;
  givenNumber = __givenNumber;
}

Log::Log(float __givenNumber) {
  base = 10;
  givenNumber = __givenNumber;

}

double Log::getValue() {
  return log10(givenNumber)/log10(base);
}

void Log::print() {
  cout << "Log of " << givenNumber << " to the base " << base << " ";
}
