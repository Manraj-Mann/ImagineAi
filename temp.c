#include <stdio.h>

int main()
{
  int i, num, sum = 0;
  printf("Odd numbers between 1 to 100\n");

  i = 1;
  while (i <= 100)
  {
    printf("%d ", i);
    /* Add 2 to current odd number
      to get next odd number */
    sum = sum + i;
    i = i + 2;
  }

  printf("\n The Sum of Odd Numbers From 1 To 100 is %d.", sum);
  return 0;
}