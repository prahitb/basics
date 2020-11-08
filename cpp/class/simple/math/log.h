#include <iostream>

class Log {
private:
  int base;
  int givenNumber;
public:
  // constructors
  // same name as the class name.
  Log(float input, float base);
  Log(float input); // base will be 10

  double getValue();
  void print();
};
