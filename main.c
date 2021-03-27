#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <assert.h>
#include <time.h>
#include <math.h>
 
int main(void){
    clock_t begin;
    double time_spent;
    char word[] = "- Hello my name is Nick";
  char * pch;
  int correct = 0;
  int wrong = 0;
  double percent;
  int percent2;
  double wpm;
  printf("Word to type is:\n%s\n", word +2);
  pch = strtok (word," ,.-");
  begin = clock();
  while (pch != NULL)
  {
      char currentWord[100];
      int result;
      scanf("%s", currentWord);
      result = strcmp(currentWord, pch);
      if(result==0){
          correct++;
      }
      else{
          wrong++;
      }
      time_spent = (double)(clock() - begin) / CLOCKS_PER_SEC;
      pch = strtok(NULL, " ,.-");
  }
  time_spent = roundf(time_spent * 100) / 100;
  percent = (double)correct / (correct + wrong);
  percent = percent * 100;
  percent2 = percent;
  wpm = (double)(correct + wrong) / (time_spent / 60);
  printf("Words Wrong: %d\nWords Right: %d\nAccuracy: %d%%\nWords Per Minute: %.2lf", wrong, correct,percent2,wpm);
    
}