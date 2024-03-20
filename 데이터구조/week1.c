#include <stdio.h>
#include<math.h> //1번문제 좌표 거리를 위한 라이브러리

struct Point2D {
	int x;
	int y;
}; //좌표 xy 구조체



int main(void)
{
	int menu = 0;
	printf("1~5번 중 원하는 메뉴를 선택해 주세요. : ");
	scanf_s("%d", &menu);
	if (menu == 1)
	{
		struct Point2D arr[10]; //좌표 10개를 받기위한 배열
		int i = 0;
		double max = -1, min = 1000000; //최대값, 최소값을 위한 변수
		float distance = 0;
		for (i = 0; i < 10; i++)
		{
			//pow(n, 2)
			printf("%d번째 x,y 좌표를 입력하세요. : ", i + 1);
			scanf_s("%d %d", &arr[i].x, &arr[i].y);
			if (max < (pow(arr[i].x, 2) + pow(arr[i].y, 2))) //제일 먼 좌표 구하기
			{
				max = (pow(arr[i].x, 2) + pow(arr[i].y, 2));
			}
			else if (min > (pow(arr[i].x, 2) + pow(arr[i].y, 2))) // 제일 가까운 좌표 구하기
			{
				min = (pow(arr[i].x, 2) + pow(arr[i].y, 2));
			}

		}

		distance = sqrt(max - min); //두 좌표사이의 거리
		printf("%f", distance); //

		return 0;
	}
	else if (menu == 2)
	{

	}
	else if (menu == 5)
	{
		int m, n = 0;
		int i = 0;
		int count = 0;
		printf("m,n 값을 입력하세요. : ");
		scanf_s("%d %d", &m, &n);
		for (m; m < n; m++) //m이 n이랑 같아질때까지 반복문
		{
			for (i = 1; i <= n; i++) // 1부터 n까지 수로 나누기
			{
				if (m % i == 0)
					count++;
			}
			if (count == 2)//1하고 자기자신으로만 나누어져야하니까 소수면 count가 2
				printf("%d\n", m);
			count = 0;
		}
		return 0;
	}
}
