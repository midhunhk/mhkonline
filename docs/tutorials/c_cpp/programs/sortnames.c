/* 	Program to sort names in alphabetical order(using pointers)
 *	July.16.2006
 *      Midhun Harikumar
 *      http://www.geocities.com/mhkonline2/
 *
 *	$Id Version 1.1
 */
# include <conio.h>
# include <stdio.h>
# include <string.h>

void swapStr(char *,char *);

const int max = 5;

void main()
{
	clrscr();
	char *names[max];
	int i,j;

	printf("\n\tProgram to sort names in alphabetical order\n\n");
	printf("Enter %d names ...\n",max);
	for(i = 0; i < max; i++)
		gets(names[i]);

	printf("\nThe names are ...\n\n");
	for(i = 0; i < max; i++)
		puts(names[i]);

	for(i = 0; i <= max;i++)
	{
		for(j = 0;j <= (max-1); j++)
		{
			if( strcmp(names[j],names[j+1]) > 0 )
				swapStr(names[j],names[j+1]);
		}
	}
	printf("\nThe sorted names are ...\n\n");
	for(i=0; i<max; i++)
		puts(names[i]);
	getch();
}
/* Fn that swaps two strings */
void swapStr(char *one,char *two)
{
	char *tmp;
	strcpy(tmp,one);
	strcpy(one,two);
	strcpy(two,tmp);
}