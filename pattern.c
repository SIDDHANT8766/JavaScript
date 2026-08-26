#include<stdio.h>

int main()
{
    int i = 0;
    int j = 0;

    int row = 4;
    int col = 4;

    for(i = 1; i <= row; i++)
    {
        for(j = col; j >= 1; j--)
        {
            if(j > i || i == j)
            {
                printf("*\t");
            }
            else
            {
                printf("#\t");
            }
        }
        printf("\n");
        
    }
    return 0;
}
