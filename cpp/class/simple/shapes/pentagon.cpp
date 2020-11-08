#include "pentagon.h"
#include<iostream>

using namespace std;

double Pentagon::area(){
  return ((2.5*sideLength)*0.809);
}

void Pentagon::print() {
  RegularPolygon::print();
  cout << "\t area = " << area() <<'\n';
}
