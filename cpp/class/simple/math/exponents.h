#include<iostream>
using namespace std;

class Exponents{
private:
  int base;
  int power;
public:
  Exponents(int base,int power);
  int getValue();
  void print();
};
