#include <stdio.h>
#include<math.h> //1������ ��ǥ �Ÿ��� ���� ���̺귯��

struct Point2D {
	int x;
	int y;
}; //��ǥ xy ����ü



int main(void)
{
	int menu = 0;
	printf("1~5�� �� ���ϴ� �޴��� ������ �ּ���. : ");
	scanf_s("%d", &menu);
	if (menu == 1)
	{
		struct Point2D arr[10]; //��ǥ 10���� �ޱ����� �迭
		int i = 0;
		double max = -1, min = 1000000; //�ִ밪, �ּҰ��� ���� ����
		float distance = 0;
		for (i = 0; i < 10; i++)
		{
			//pow(n, 2)
			printf("%d��° x,y ��ǥ�� �Է��ϼ���. : ", i + 1);
			scanf_s("%d %d", &arr[i].x, &arr[i].y);
			if (max < (pow(arr[i].x, 2) + pow(arr[i].y, 2))) //���� �� ��ǥ ���ϱ�
			{
				max = (pow(arr[i].x, 2) + pow(arr[i].y, 2));
			}
			else if (min > (pow(arr[i].x, 2) + pow(arr[i].y, 2))) // ���� ����� ��ǥ ���ϱ�
			{
				min = (pow(arr[i].x, 2) + pow(arr[i].y, 2));
			}

		}

		distance = sqrt(max - min); //�� ��ǥ������ �Ÿ�
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
		printf("m,n ���� �Է��ϼ���. : ");
		scanf_s("%d %d", &m, &n);
		for (m; m < n; m++) //m�� n�̶� ������������ �ݺ���
		{
			for (i = 1; i <= n; i++) // 1���� n���� ���� ������
			{
				if (m % i == 0)
					count++;
			}
			if (count == 2)//1�ϰ� �ڱ��ڽ����θ� �����������ϴϱ� �Ҽ��� count�� 2
				printf("%d\n", m);
			count = 0;
		}
		return 0;
	}
}
