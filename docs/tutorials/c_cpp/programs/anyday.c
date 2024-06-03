/*     Author : Midhun Harikumar - 21 03 2006
 * 	midhunhk@gmail.com
 *	www.geocities.com/mhkonline2/
 *
 *  Program that calculates the day of a given date 
 *      Version 1.1
 *	(C)2006 Centrum inc Software Solutions
 */
# include <stdio.h>
# include <conio.h>

int getdays(int is_leap,int month,int daynum);

int main(void)
{
	clrscr();
// Variables
	int is_leap=0,year,julian_day,fours,hundreds,four_hundreds;
	int u_yr,u_m,u_d,da_day;

	printf("\nEnter a date and I will tell u what day it is...");
// Get Data
	printf("\n\n\nEnter the date (dd - mm - yyyy) ...");
	scanf("%d %d %d",&u_d,&u_m,&u_yr);

// CHECK to set LEAP YR FLAG
	if((u_yr%4 == 0)&&(u_yr%100 != 0)||(u_yr%400 == 0))
		is_leap = 1;

// ASSIGN VALUES TO CALC VARS
	julian_day 	= getdays(is_leap,u_m,u_d);
	year  		= u_yr;
	fours		= (year - 1)/4;
	hundreds 	= (year - 1)/100;
	four_hundreds 	= (year - 1)/400;
	da_day = (year + julian_day +fours - hundreds + four_hundreds)%7;

	printf("\n\n%d/%d/%d is a  ",u_d,u_m,u_yr);
	switch(da_day)
	{
		case 0 : printf("Saturday"); break;
		case 1 : printf("Sunday  "); break;
		case 2 : printf("Monday  "); break;
		case 3 : printf("Tuesday "); break;
		case 4 : printf("Wednesday"); break;
		case 5 : printf("Thursday"); break;
		case 6 : printf("Friday"); break;
	}
	getch();
	return (0);
}
/*
  Function to calculate the number of days for julian days
  3 parameters
  leap : 0 or 1  indicates whether the yr is leap or not
  mnth : 0 to 12 the month
  day  : 0 to 31 the day
  Returns the julian day number in a given date
  NB:<Jan 1 of every yr is Julian Day 1, if leap, Dec 31 is Julian Day 366 else 365
*/
int getdays(int leap,int mnth,int day)
{
	int i,jul_days = 0;
	for(i = 1; i<mnth; i++)
	{
		if((i==1)||(i==3)||(i==5)||(i==7)||(i==8)||(i==10)||(i==12))
			jul_days += 31;
		else if((i==2)&&(leap==1))
			jul_days += 29;
		else if((i==2)&&(leap==0))
			jul_days += 28;
		else
			jul_days += 30;
	}
	jul_days += day;
	return jul_days;
}