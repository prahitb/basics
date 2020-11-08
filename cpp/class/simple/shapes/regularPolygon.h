
class RegularPolygon {
private:
  int numOfSides;
  double sideLength;
public:
  RegularPolygon(int numOfSides,float sideLength);
  double interiorAngle();
  double exteriorAngle();
  double perimeter();
  void print();
};
