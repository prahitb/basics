#include<iostream>
#include "hexagon.h"
using namespace std;
double Hexagon::area(){
  return 3*sideLength*sideLength*1.732/2;
};
void Hexagon::print(){
  RegularPolygon::print();
  cout << "\t area =" << area()<<'\n';
};
