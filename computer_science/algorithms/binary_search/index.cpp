#include <iostream>
#include <cmath>
using namespace std;

int binary_search(int elements[], int search_data)
{
  int down = 0;
  int up = sizeof(elements) - 1;

  while (down <= up)
  {
    int quite = round((down + up) / 2);
    int kick = elements[quite];
    while (down <= up)
    {
      if (kick == search_data)
      {
        return quite;
      }
      else if (kick < search_data)
      {
        up = quite - 1;
      }
      else
      {
        down = down + 1;
      }
    }
  }

  return 0;
}

int main()
{
  int exe[] = {1,
               2,
               3,
               4,
               5,
               6,
               7,
               8,
               9,
               10,
               11,
               12,
               1,
               3,
               14,
               1,
               15,
               16};

  int result = binary_search(exe, 3);
  cout << result;
  return 0;
}
