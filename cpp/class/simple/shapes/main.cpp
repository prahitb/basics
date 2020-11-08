#include "regularPolygon.h"
#include<iostream>
using namespace std;

int main() {
  RegularPolygon n1(4,5), n2(5,5);
  n1.print();
  n2.print();

  for (int i = 3; i<9; i++ ) {
    RegularPolygon n(i,5);
    n.print();
  }
}
