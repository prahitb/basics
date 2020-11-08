#include <iostream>
#include "regularPolygon.h"

using namespace std;

RegularPolygon::RegularPolygon(int __numOfSides,float __sideLength) {
  numOfSides=__numOfSides;
  sideLength=__sideLength;
}
double RegularPolygon::interiorAngle(){
  return (numOfSides-2)*180/numOfSides;
};
double RegularPolygon::exteriorAngle () {
  return (180 - interiorAngle());
};
double RegularPolygon::perimeter(){
  return (numOfSides*sideLength);
};
void RegularPolygon::print(){
  cout << "Regular Polygon of " << numOfSides << " sides of length "
       << sideLength << "\n";
  cout <<"\tinteriorAngle = " << interiorAngle() << '\n';
  cout << "\texteriorAngle = " << exteriorAngle()<< '\n';
  cout << "\tperimeter = " << perimeter() <<'\n';
  cout << "--------------\t\t\t---------------\n";
};
