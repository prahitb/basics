#include "log.h"
#include "exponents.h"

using namespace std;

int main() {
  Log n1(100);
  Exponents n2(10,2);

  n1.print();
  cout << "is " << n1.getValue() << "\n";
  n2.print();
  cout << n2.getValue() << '\n';

}
