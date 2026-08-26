#include<stdio.h>

int main()
{
    int i = 0;
    int j = 0;

    int Col = 10;
    int Row = 10;

    int Count = 0;

    for(i = 1; i <= Row; i++)
    {
        Count = i;

        for(j = 1; j <= Col; j++)
        {
            printf("%d\t",Count);
            Count++;
        }
    
        printf("\n");
    
    }

    return 0;
}