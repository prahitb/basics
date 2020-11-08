#include "square.h"
#include <iostream>

using namespace std;

double Square::area() {
  return sideLength*sideLength;
}

void Square::print() {
  RegularPolygon::print();
  cout << "\tarea = " << area() <<'\n';
}
