#include <iostream>

using namespace std;
// Global Variables
const double ERROR_MARGIN = 1e-15;
const int maxIterations = 1000;

double findSquareRoot(double number, double guess) {
  double answer;
  for (int i = 0; i < maxIterations; i++) {
    answer = (guess + (number/guess))/2;
    if (abs(answer*answer - number) < ERROR_MARGIN {
      cout << "Number of iterations used:\t" << i << endl;
      cout << "Error " << answer*answer - number << endl;
      return (answer);
    }
    guess = answer;
  }
  cout << "Could not converge. Error" << answer*answer - number << endl;
  return(answer);
}


int main() {

  double number, guess, answer;

  cout << "Enter the number" << endl;
  cin >> number;
  cout << "Enter your guess for square root" << endl;
  cin >> guess;
  answer = findSquareRoot(number, guess);
  cout << "Answer: " << answer<< "\n";
  answer = findSquareRoot(number, guess);

}
