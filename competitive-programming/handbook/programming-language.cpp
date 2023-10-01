#include <bits/stdc++.h>

using namespace std;

int logical_operators()
{

  int a = 4, b = 10;

  if (a > 0 && b > 0)
  {
    cout << "both values are positives" << endl;
  }

  if (!(b < 0))
  {
    cout << "The value is not negative" << endl;
  }

  return 0;
}

int loops()
{

  int last = 5;
  cout << "----- for ----" << endl;
  // for
  for (int idx = 0; idx < last; idx++)
  {
    cout << "Iteration: " << idx << endl;
  }

  int current_while_idx = 0;
  cout << "----- while ----" << endl;
  //  while
  while (current_while_idx < last)
  {
    cout << "While idx: " << current_while_idx << endl;

    current_while_idx++;
  }
  cout << "----- do while ----" << endl;
  // do while
  int current_do_idx = 0;
  do
  {
    cout << "do dx" << current_do_idx << endl;
    current_do_idx++;
  } while (current_do_idx < last);

  return 0;
}
// -- functions ---

int multiplyNumbers(int x, int y)
{
  int product = x * y;
  return product;
}

// --- lambdas ---

auto add = [](int x, int b) -> int
{
  return x + b;
};
// -- main
int main()
{
  int a, b = 10;
  string x = "monkey";
  // std::cout << a << std::endl
  //           << b << std::endl
  //           << x << std::endl;

  logical_operators();
  // loops
  loops();

  int product = multiplyNumbers(a, b);
  cout << "multiplyNumbers: " << product << endl;

  int p = add(a, b);
  cout << "add: " << product << endl;
  return 0;
}
