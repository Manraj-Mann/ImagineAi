#include <stdio.h>
#include <conio.h>
#include <stdlib.h>

int main() {
    float c, f;
    printf("Enter Fahrenheit = ");
    scanf("%f", &f);
    c = 5.0 / 9.0 * (f - 32.0);
    printf("Temperature in Celsius = %f\n", c);
    getchar();
    return 0;
}
