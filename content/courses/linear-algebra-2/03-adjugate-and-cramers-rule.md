---
title: 수반행렬과 크라메르 공식
summary: 여인수들을 모은 여인수행렬과 그 전치행렬인 수반행렬을 정의하고, A·adj A = (det A)Iₙ 에서 역행렬의 공식을 얻는다. 열에 대한 선형성으로 연립일차방정식의 해의 성분을 행렬식으로 쓰는 크라메르 공식을 증명하고, 성분이 정수인 행렬의 역행렬이 정수 성분인 조건과, 처음 몇 열이 단위벡터의 배수인 행렬의 행렬식을 다룬다.
concepts:
  - adjugate-matrix
  - adjugate-formula
  - cramers-rule
  - integer-matrix-inverse
  - determinant-with-leading-columns
---

이 단원은 1단원 "행렬식의 정의"와 2단원 "행렬식의 성질"을 먼저 읽었다고 가정합니다. 2단원의 [[cofactor-expansion|여인수 전개]]는 행렬식을 어느 행이나 열을 따라서도 성분과 여인수로 전개하고, 한 행의 성분을 다른 행의 여인수와 짝지어 더하면 $0$이 된다는 것을 보였습니다. 이 단원은 이 두 사실을 행렬의 곱 하나로 묶어, 행렬식이 $0$이 아닌 행렬의 역행렬과 연립일차방정식의 해를 행렬식으로 적습니다.

[[adjugate-matrix|여인수행렬과 수반행렬]]은 $2$ 이상인 $n$에 대하여 $(j, k)$ 성분이 $(j, k)$ 여인수인 여인수행렬 $\operatorname{cof} A$와 그 전치행렬인 수반행렬 $\operatorname{adj} A$를 정의합니다. 소행렬이 $n \ge 2$에서만 정의되므로 $1 \times 1$ 행렬에는 수반행렬이 없습니다. [[adjugate-formula|수반행렬과 역행렬의 공식]]은 $A$가 가역이든 아니든 $A \operatorname{adj} A = (\operatorname{adj} A) A = (\det A) I_n$임을 증명하고, 여기서 $\det A \ne 0$일 때 $A^{-1} = (\det A)^{-1} \operatorname{adj} A$와 $2 \times 2$ 역행렬의 식을 얻습니다. $1 \times 1$ 행렬의 역행렬은 같은 항목에서 따로 적습니다.

[[cramers-rule|크라메르 공식]]은 $A$의 $k$번째 열을 $b$로 바꾼 행렬 $A_k(b)$를 정의하고, $Ax = b$이면 $x_k \det A = \det A_k(b)$임을 2단원의 열에 대한 선형성과 "같은 두 열이면 $0$"으로 증명합니다. 출처는 이 공식을 역행렬의 공식에서 얻지만, 이 강의는 수반행렬을 거치지 않는 증명을 실어 $1 \times 1$ 행렬과 $\det A = 0$인 경우도 함께 다룹니다. [[integer-matrix-inverse|정수 성분 행렬의 역행렬]]은 역행렬의 공식을 써서, 성분이 모두 정수인 행렬이 가역이고 역행렬도 정수 성분인 것이 정확히 행렬식이 $1$이나 $-1$일 때임을 보입니다.

마지막 [[determinant-with-leading-columns|처음 몇 열이 단위벡터의 배수인 행렬의 행렬식]]은 앞의 네 항목을 쓰지 않습니다. 2단원 [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (1), 곧 첫째 열이 $c\,e_1$인 행렬의 행렬식을 되풀이해, 처음 $g$개의 열이 $c\,e_1, \dots, c\,e_g$인 $n \times n$ 행렬의 행렬식이, $g < n$이면 $c^g$와 남은 오른쪽 아래 부분의 행렬식의 곱이고 $g = n$이면 $c^n$임을 증명합니다. 블록 행렬은 정의하지 않고 이 꼴을 성분으로 적으며, 행렬 $B - xI_n$에 쓴 꼴도 진술에 둡니다.
