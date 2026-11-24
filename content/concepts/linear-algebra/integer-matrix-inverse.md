---
title: 정수 성분 행렬의 역행렬
title_en: Inverses of Integer Matrices
aliases: [정수 행렬의 역행렬, 정수 행렬의 행렬식, integer matrix, matrix with integer inverse, unimodular matrix]
kind: proposition
field: linear-algebra
msc: ["15B36", "15A09"]
level: undergrad
summary: 성분이 모두 정수인 정사각행렬의 행렬식과 수반행렬의 성분은 정수이다. 성분이 모두 정수인 행렬 A 가 가역이고 역행렬의 성분도 모두 정수인 것은 정확히 det A 가 1 이거나 −1 일 때이다.
requires: [even-and-odd, divisibility, prime-number, well-ordering-principle, mathematical-induction, real-number-arithmetic, finite-sum-of-vectors, matrix, invertible-matrix, power-of-a-real-number, minor-matrix, determinant, determinant-and-invertibility, determinant-of-product, adjugate-matrix, adjugate-formula]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 5.2 Some applications of the cofactor formula for the inverse, Example (Matrix with integer inverse), p.94; 7절 Review exercises for Chapter 3, 연습문제 7.3, p.97"
    checked: original
    note: "(4)의 '거꾸로'(det A 가 1 이거나 −1 이면 A⁻¹ 의 성분이 정수)는 출처 5.2절의 Example (Matrix with integer inverse)(p.94)의 문장 'If det A = 1 and its entries are integer, the cofactor formula for inverses implies that A⁻¹ also have integer entries' 를 det A = −1 까지 넓힌 것이다. 출처는 여인수(따라서 행렬식)가 정수라는 것을 적지 않는다. 이 항목은 그것을 (1), (2)로 첫째 열 전개와 행렬의 크기에 대한 귀납으로 증명한다. (4)의 앞 방향(A 와 A⁻¹ 의 성분이 모두 정수이면 det A 가 1 이거나 −1)은 출처 연습문제 7.3(p.97) 'If the entries of both A and A⁻¹ are integers, is it possible that det A = 3? Hint: what is det(A) det(A⁻¹)?' 이 묻는 것이고, 출처는 답을 적지 않는다. 이 항목은 힌트대로 det A · det A⁻¹ = 1 을 쓰고, 정수의 곱이 1 이면 둘 다 1 이거나 둘 다 −1 이라는 (3)을 양의 약수의 크기(소수 항목 prime-number 의 진술)로 보인다. 같은 예 p.94 는 대각성분이 1 인 삼각행렬에서 시작해 셋째 종류의 행 연산이나 열 연산을 몇 번 하면 det A = 1 인 정수 행렬을 쉽게 만들 수 있다고 적는다. 예시 '행렬식이 1 인 3 × 3 정수 행렬의 역행렬'은 이 예와 같은 발상이다(det A = 1 인 정수 행렬의 역행렬이 정수 성분). 확인 질문 'AA = Iₙ 인 정수 행렬'은 출처 연습문제 7.3 의 힌트와 같은 발상이다(det A · det A⁻¹ 을 본다). 출처 p.94 의 다음 예(Inverse of a polynomial matrix)는 성분이 다항식인 행렬에 같은 논법을 쓰는데, 이 항목은 그것을 다루지 않는다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(증명 통독, 예의 수치 재계산). 가역 가정 없는 꼴과 n = 1, det A = 0 의 경우를 진술에 두었다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. 정수는 [[real-number-arithmetic|(K7)]]에 의해 실수이고 정수끼리의 계산은 실수로서의 계산과 같다. $A$의 **성분이 모두 정수**라는 것은 모든 $j$, $k \in \{1, \dots, n\}$에서 $a_{j,k}$가 정수라는 뜻이다. 이런 행렬을 새 대상으로 따로 두지 않고, 선형대수 강의의 행렬 가운데 이 조건을 만족하는 것으로 다룬다. 행렬식, 수반행렬, 가역과 역행렬은 [[determinant|행렬식]], [[adjugate-matrix|여인수행렬과 수반행렬]], [[invertible-matrix|가역행렬과 역행렬]]의 것이다.

1. (행렬식) $A$의 성분이 모두 정수이면 $\det A$는 정수이다.
2. (수반행렬) $n \ge 2$이고 $A$의 성분이 모두 정수이면 $\operatorname{adj} A$의 성분도 모두 정수이다.
3. (곱이 $1$인 두 정수) 정수 $a$, $b$에 대하여 $ab = 1$이면, $a = b = 1$이거나 $a = b = -1$이다.
4. (정수 성분의 역행렬) $A$의 성분이 모두 정수라 하자. $A$가 가역이고 $A^{-1}$의 성분도 모두 정수인 것은 정확히 $\det A = 1$이거나 $\det A = -1$일 때이다. 이때 $\det(A^{-1}) = \det A$이다.
:::

:::english
Let $n$ be a natural number and $A$ an $n \times n$ matrix. By (K7) integers are real numbers, and computing with integers gives the same results as computing with them as real numbers. That **all entries of $A$ are integers** means that $a_{j,k}$ is an integer for all $j$, $k \in \{1, \dots, n\}$. We do not introduce such matrices as new objects; they are the matrices of the linear algebra course satisfying this condition. Determinants, adjugate matrices, invertibility and inverses are those of the entries on the determinant, on cofactor and adjugate matrices, and on invertible matrices.

1. (Determinant) If all entries of $A$ are integers, then $\det A$ is an integer.
2. (Adjugate) If $n \ge 2$ and all entries of $A$ are integers, then all entries of $\operatorname{adj} A$ are integers.
3. (Two integers with product $1$) For integers $a$, $b$, if $ab = 1$, then either $a = b = 1$ or $a = b = -1$.
4. (Inverses with integer entries) Suppose all entries of $A$ are integers. Then $A$ is invertible and all entries of $A^{-1}$ are integers exactly when $\det A = 1$ or $\det A = -1$. In that case $\det(A^{-1}) = \det A$.
:::

## 직관

행렬식은 성분들을 곱하고 더하고 빼서 얻는 수이므로, 성분이 모두 정수이면 행렬식도 정수입니다. 여인수도 소행렬의 행렬식에 부호를 붙인 것이라 정수이고, 수반행렬의 성분이 모두 정수가 됩니다. 역행렬의 공식 $A^{-1} = (\det A)^{-1} \operatorname{adj} A$에서 분수가 생길 수 있는 곳은 $(\det A)^{-1}$ 하나뿐이므로, $\det A$가 $1$이나 $-1$이면 역행렬도 정수 성분입니다.

거꾸로 $A$와 $A^{-1}$이 모두 정수 성분이면 두 행렬식은 곱이 $\det I_n = 1$인 두 정수입니다. 곱해서 $1$이 되는 정수는 $1$과 $1$, $-1$과 $-1$뿐이라는 것이 (3)입니다.

돈으로 비유할 수 있습니다. 성분이 정수인 행렬로 하는 계산은 동전만으로 하는 셈이고, $\det A$가 $2$ 이상인 자연수일 때 $(\det A)^{-1}$을 곱하는 것은 그 돈을 $\det A$명이 똑같이 나누는 일입니다. 두 명 이상이 나누면 동전을 쪼개야 할 수 있습니다. 비유는 "쪼개야 할 수 있다"까지만 맞습니다. 실제로 쪼개야 하는지는 (4)가 정합니다. (4)에 의해, 성분이 모두 정수인 가역행렬 $A$의 행렬식이 $1$도 $-1$도 아니면 $A^{-1}$의 성분 가운데 정수가 아닌 것이 꼭 있습니다.

(4)의 앞 방향에서 "$A$의 성분이 모두 정수"라는 가정을 빼면 결론이 성립하지 않을 수 있습니다. 반례 '성분이 정수가 아닌 행렬의 역행렬이 정수 성분인 예'가 그 경우입니다.

## 증명

:::idea
(1)은 첫째 열 전개와 행렬의 크기에 대한 귀납법으로, (2)는 (1)을 소행렬에 써서 얻는다. (4)의 앞 방향은 $\det A \cdot \det A^{-1} = 1$과 (3)으로, 거꾸로는 수반행렬과 역행렬의 공식으로 얻는다.
:::

:::hint
(3)에서 $a > 0$이면 $a$는 자연수 $1$의 양의 약수입니다. 자연수의 양의 약수가 어떤 범위에 있는지 [[prime-number|소수]]의 진술에서 찾아보세요.
:::

:::proof
실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로 인용한다. 정수의 합·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)을 (가)로 부르고, (K7)에 의해 그 합·곱은 실수로서의 합·곱과 같다. 정수 $m$의 $-m$도 (가)에 의해(뺄셈 $0 - m$) 정수이다.

**보조 사실 (나).** 정수 $m \ge 0$과 모든 항이 정수인 길이 $m$인 실수의 열에 대하여 그 합([[finite-sum-of-vectors|벡터의 유한 합]]을 $\mathbb{R}$에 쓴 것)은 정수이다. $m$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. $m = 0$이면 합은 정의에 의해 $\mathbb{R}$의 영벡터 $0$이고, 이것은 정수이다. 길이 $m$인 열에서 성립한다고 하고 길이 $m + 1$인 열을 잡으면, 합의 정의에 의해 그 합은 처음 $m$개의 합과 $(m + 1)$번째 항의 합이다. 처음 $m$개의 항도 모두 정수이므로 귀납 가정에 의해 앞의 합은 정수이고, (가)에 의해 전체도 정수이다.

**(1)의 증명.** 자연수 $n$에 대하여 명제 "성분이 모두 정수인 모든 $n \times n$ 행렬의 행렬식은 정수이다"를 $P(n)$이라 하고 수학적 귀납법을 쓴다.

- 기초 단계: [[determinant|행렬식]]의 (2)에 의해 $1 \times 1$ 행렬의 행렬식은 그 성분이므로 $P(1)$이 참이다.
- 귀납 단계: $P(n)$이 참이라 하고 $A$를 성분이 모두 정수인 $(n + 1) \times (n + 1)$ 행렬이라 하자. $n + 1 \ge 2$이므로 행렬식의 (3)에 의해 $\det A$는 $j$번째 항이 $(-1)^{j+1} a_{j,1} \det A^{(j,1)}$인 길이 $n + 1$인 실수의 열의 합이다. [[minor-matrix|소행렬]]의 정의에 의해 $A^{(j,1)}$은 $n \times n$ 행렬이고 그 성분은 모두 $A$의 성분이므로 정수이며, $P(n)$에 의해 $\det A^{(j,1)}$은 정수이다. $j + 1$은 정수이고 $-1$은 정수이므로 [[power-of-a-real-number|실수의 거듭제곱]]의 (7)에 의해 $(-1)^{j+1}$은 정수이다. (가)에 의해 각 항은 정수이고, (나)에 의해 $\det A$는 정수이다. 따라서 $P(n + 1)$이 참이다.

**(2)의 증명.** $n \ge 2$이고 $j$, $k \in \{1, \dots, n\}$이라 하자. $A^{(j,k)}$의 성분은 모두 $A$의 성분이므로 정수이고, (1)에 의해 $\det A^{(j,k)}$는 정수이다. 위와 같이 $(-1)^{j+k}$는 정수이므로 (가)에 의해 $A$의 $(j, k)$ 여인수는 정수이다. 여인수행렬과 수반행렬의 정의에 의해 $\operatorname{adj} A$의 $(k, j)$ 성분은 이 여인수이므로, $\operatorname{adj} A$의 성분은 모두 정수이다.

**(3)의 증명.** $ab = 1$이라 하자. $a = 0$이면 (K9)에 의해 $ab = 0$이고 (K4)에 의해 $0 \ne 1$이므로 $a \ne 0$이다. [[well-ordering-principle|정렬 원리]] 항목의 (Z5)에 의해 $a > 0$이거나 $a < 0$이다.

$a > 0$인 경우. $1 = ab$이고 $b$는 정수이므로 [[divisibility|나누어떨어짐]]의 정의에 의해 $a \mid 1$이고, $a$는 양의 정수이므로 자연수 $1$의 양의 약수이다. [[prime-number|소수]]의 진술에 의해 자연수 $n$의 양의 약수 $d$는 $1 \le d \le n$을 만족하므로 $1 \le a \le 1$이고, 정렬 원리 항목의 (L2)에 의해 $a = 1$이다. 그러면 (K4)와 (K1)에 의해 $b = 1 \cdot b = ab = 1$이다.

$a < 0$인 경우. $-a$와 $-b$는 정수이고, (Z7)에 의해 $a < 0$의 양변에 $-a$를 더하면 $0 < -a$이다. (K12)의 (iii)에 의해 $(-a)(-b) = ab = 1$이므로, 앞의 경우를 정수 $-a$, $-b$에 쓰면 $-a = 1$이고 $-b = 1$이다. (K9)의 $-(-a) = a$에 의해 $a = -1$이고 $b = -1$이다.

**(4)의 증명.** $A$의 성분이 모두 정수라 하자.

$A$가 가역이고 $A^{-1}$의 성분이 모두 정수라 하자. (1)에 의해 $\det A$와 $\det(A^{-1})$은 정수이다. 가역행렬과 역행렬의 (1)에 의해 $AA^{-1} = I_n$이므로 [[determinant-of-product|곱의 행렬식]]의 (1)과 행렬식의 (1)의 (iii)에 의해 $\det A \cdot \det(A^{-1}) = \det I_n = 1$이다. (3)에 의해 $\det A = \det(A^{-1}) = 1$이거나 $\det A = \det(A^{-1}) = -1$이다.

거꾸로 $\det A = 1$이거나 $\det A = -1$이라 하고 $d = \det A$로 두자. (K7)에 의해 $1 \cdot 1 = 1$이고 $(-1)(-1) = 1$이므로 $dd = 1$이며, (K8)의 (iii)에 의해 $d^{-1} = d$이다. 특히 $d \ne 0$이다((K9)에 의해 $0 \cdot 0 = 0 \ne 1$).

- $n \ge 2$이면 [[adjugate-formula|수반행렬과 역행렬의 공식]]의 (2)에 의해 $A$는 가역이고 $A^{-1} = d^{-1} \operatorname{adj} A = d \operatorname{adj} A$이다. 행렬의 (1)에 의해 $A^{-1}$의 각 성분은 정수 $d$와 $\operatorname{adj} A$의 성분의 곱이고, (2)와 (가)에 의해 정수이다.
- $n = 1$이면 $A = \begin{pmatrix} a_{1,1} \end{pmatrix}$이고 행렬식의 (2)에 의해 $a_{1,1} = d \ne 0$이다. 수반행렬과 역행렬의 공식의 (6)에 의해 $A$는 가역이고 $A^{-1}$의 $(1, 1)$ 성분은 $d^{-1} = d$로 정수이다.

마지막으로 [[determinant-and-invertibility|행렬식과 가역성]]의 (2)에 의해 $\det(A^{-1}) = d^{-1} = d = \det A$이다. $\blacksquare$
:::

## 예시와 반례

:::example[행렬식이 1 인 3 × 3 정수 행렬의 역행렬]
$$
K = \begin{pmatrix} 1 & 2 & 1 \\ 0 & 1 & 1 \\ 1 & 2 & 2 \end{pmatrix}
$$
이면 [[determinant|행렬식]]의 (4)의 $3 \times 3$ 식으로 $\det K = 1(2 - 2) - 0 + 1(2 - 1) = 1$입니다. 여인수를 모두 구해 전치하면
$$
\operatorname{adj} K = \begin{pmatrix} 0 & -2 & 1 \\ 1 & 1 & -1 \\ -1 & 0 & 1 \end{pmatrix}
$$
이고, (4)의 증명대로 $K^{-1} = \operatorname{adj} K$로 성분이 모두 정수입니다. 실제로 $K \operatorname{adj} K$의 첫째 행은 $(0 + 2 - 1,\ -2 + 2 + 0,\ 1 - 2 + 1) = (1, 0, 0)$, 둘째 행은 $(0 + 1 - 1,\ 0 + 1 + 0,\ 0 - 1 + 1) = (0, 1, 0)$, 셋째 행은 $(0 + 2 - 2,\ -2 + 2 + 0,\ 1 - 2 + 2) = (0, 0, 1)$입니다.
:::

:::example[행렬식이 −1 인 2 × 2 정수 행렬의 역행렬]
$L = \begin{pmatrix} 2 & 3 \\ 3 & 4 \end{pmatrix}$이면 $\det L = 8 - 9 = -1$이고, [[adjugate-formula|수반행렬과 역행렬의 공식]]의 (3)에 의해
$$
\begin{aligned}
L^{-1} &= (-1)^{-1} \begin{pmatrix} 4 & -3 \\ -3 & 2 \end{pmatrix} \\
&= \begin{pmatrix} -4 & 3 \\ 3 & -2 \end{pmatrix}
\end{aligned}
$$
입니다. (4)대로 성분이 모두 정수이고 $\det(L^{-1}) = 8 - 9 = -1 = \det L$입니다.
:::

:::counterexample[행렬식이 2 인 정수 행렬의 역행렬]
$P = \begin{pmatrix} 3 & 1 \\ 1 & 1 \end{pmatrix}$이면 $\det P = 3 - 1 = 2$이고 [[adjugate-formula|수반행렬과 역행렬의 공식]]의 (3)에 의해
$$
P^{-1} = 2^{-1} \begin{pmatrix} 1 & -1 \\ -1 & 3 \end{pmatrix}
$$
입니다. $(1, 1)$ 성분 $2^{-1}$은 정수가 아닙니다. 정수 $m$이 $2^{-1}$과 같다면 $2m = 1$이고 (3)에 의해 $2 = 1$이거나 $2 = -1$인데, 둘 다 정수의 계산으로 거짓입니다. (4)는 $\det P$가 $1$도 $-1$도 아니므로 이렇게 될 수밖에 없다고 말합니다.
:::

:::counterexample[성분이 정수가 아닌 행렬의 역행렬이 정수 성분인 예]
위의 $Q = P^{-1}$은 성분이 정수가 아니지만, [[invertible-matrix|가역행렬과 역행렬]]의 정의에 의해 $Q$는 가역이고 $Q^{-1} = P$는 성분이 모두 정수입니다. 그런데 [[determinant-and-invertibility|행렬식과 가역성]]의 (2)에 의해 $\det Q = (\det P)^{-1} = 2^{-1}$이고, 위에서 본 것처럼 이것은 정수가 아니므로 $1$도 $-1$도 아닙니다. 그래서 (4)의 앞 방향에서 "$A$의 성분이 모두 정수"라는 가정을 빼면 결론이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[성분이 모두 정수인 $1 \times 1$ 행렬 가운데 가역이고 역행렬의 성분도 정수인 것은 무엇인가?]
$\begin{pmatrix} 1 \end{pmatrix}$과 $\begin{pmatrix} -1 \end{pmatrix}$입니다. [[determinant|행렬식]]의 (2)에 의해 $1 \times 1$ 행렬 $\begin{pmatrix} a \end{pmatrix}$의 행렬식은 $a$이므로, (4)에 의해 정확히 $a = 1$이거나 $a = -1$일 때입니다.
:::

:::check[성분이 모두 정수인 $n \times n$ 행렬 $A$가 $AA = I_n$을 만족하면 $\det A$는 무엇일 수 있는가?]
$1$이나 $-1$입니다. $AA = I_n$이므로 $A$는 자기 자신을 왼쪽 역이자 오른쪽 역으로 갖고, [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $A^{-1} = A$입니다. 그러면 $A^{-1}$의 성분도 모두 정수이므로 (4)에 의해 $\det A$는 $1$이거나 $-1$입니다. $I_n$과 $-I_n$은 각각 $\det$가 $1$과 $(-1)^n$인 예입니다.
:::
