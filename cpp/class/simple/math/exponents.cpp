#include<iostream>
#include<math.h>
#include "exponents.h"
using namespace std;
Exponents::Exponents(int __power,int __base){
  base = __base;
  power=__power;
}
int Exponents::getValue(){
  return ( pow(base,power));
}
void Exponents::print(){
  cout << base <<" to the power of " << power<<" is ";
}
