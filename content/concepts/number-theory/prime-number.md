---
title: 소수
title_en: Prime Number
aliases: [prime, composite, 합성수, prime number]
kind: definition
field: number-theory
msc: ["11A41"]
level: intro
summary: 자연수 n의 양의 약수가 정확히 두 개, 곧 1과 n뿐일 때 n을 소수라 하고, 셋 이상이면 합성수라 한다.
requires: [divisibility, quantifiers, even-and-odd]
sources:
  - ref: hammack-book-of-proof
    loc: 4.2절 Definitions, Definition 4.5와 그 아래 설명(1은 소수도 합성수도 아님), p.116
    checked: original
    note: 출처의 정의는 "n ∈ N이 정확히 두 개의 양의 약수 1과 n을 가지면 소수이고, 양의 약수가 둘보다 많으면 합성수"이다. 출처는 정의 안의 괄호로 "n이 합성수인 것은 n = ab, 1 < a, b < n일 때 그리고 그때에만이다"라고 적지만 증명하지는 않는다. 이 항목은 그 사실을 정의로 삼지 않고, n ≥ 2가 소수가 아닐 때 1과 n 이외의 양의 약수가 있다는 것만 진술에 적었다. 그 사실에서 n = ab, 1 < a, b < n을 얻는 것은 prime-factorization-exists의 증명에서 직접 한다. "자연수 n의 양의 약수 d는 1 ≤ d ≤ n이다"와 그 증명, 증명에 쓰는 정수의 성질 목록은 출처에 없고 이 사이트에서 덧붙였다. 출처는 1이 소수도 합성수도 아님을 정의에서 곧바로 "하나의 양의 약수뿐"이라 말하는데, 아래 직관 절은 그 까닭을 직접 계산한 것이다. 예시는 새로 골랐다(출처 예는 2, 5, 17).
status: source-checked
added: 2026-11-16
---

:::statement
$n$이 자연수일 때, $n$의 **양의 약수**란 $d \mid n$인 양의 정수 $d$이다([[divisibility]]). 곧 $n = dc$인 정수 $c$가 존재하는 양의 정수 $d$이다.

- $n$이 **소수**(prime number)인 것은 정확히 $n$의 양의 약수가 **정확히 두 개**, 곧 $1$과 $n$뿐일 때이다.
- $n$이 **합성수**(composite number)인 것은 정확히 $n$의 양의 약수가 **셋 이상**일 때이다.

모든 자연수 $n$에 대하여 $1$과 $n$은 $n$의 양의 약수이다($n = 1 \cdot n = n \cdot 1$). 또 $n$의 양의 약수 $d$는 $1 \le d \le n$을 만족한다(증명은 아래 "약수의 크기" 참조). 따라서 $n \ge 2$이면 $1 \ne n$이므로 $1$과 $n$이 서로 다른 두 양의 약수이고, 이때 $n$이 소수가 아닌 것은 정확히 $1$과 $n$ 이외의 양의 약수 $d$가 존재할 때이다. $n = 1$은 소수도 합성수도 아니다.
:::

:::english
Let $n$ be a natural number. A **positive divisor** of $n$ is a positive integer $d$ with $d \mid n$ (divisibility); that is, a positive integer $d$ for which there is an integer $c$ with $n = dc$.

- $n$ is a **prime number** exactly when $n$ has **exactly two** positive divisors, namely $1$ and $n$.
- $n$ is a **composite number** exactly when $n$ has **three or more** positive divisors.

For every natural number $n$, both $1$ and $n$ are positive divisors of $n$, since $n = 1 \cdot n = n \cdot 1$. Moreover every positive divisor $d$ of $n$ satisfies $1 \le d \le n$ (proved below under "the size of a divisor"). Hence if $n \ge 2$, then $1 \ne n$, so $1$ and $n$ are two distinct positive divisors, and in this case $n$ is not prime exactly when there exists a positive divisor $d$ of $n$ other than $1$ and $n$. The number $n = 1$ is neither prime nor composite.
:::

## 직관

소수는 "$2$ 이상의 자연수 가운데, 자기보다 작은 두 자연수의 곱으로 쓸 수 없는 수"입니다. 양의 정수 $a$, $b$로 $7 = a \cdot b$라 쓰면 $1 \cdot 7$이나 $7 \cdot 1$뿐이지만 $12$는 $3 \cdot 4$로도 쓰입니다. 레고 블록에 비유하면, 소수는 더 작은 블록으로 나눌 수 없는 가장 작은 블록이고 합성수는 그 블록들을 이어 만든 것입니다. 이 비유는 다음 정리 [[prime-factorization-exists]]에서 정확한 문장이 됩니다.

$1$이 소수가 아닌 까닭은 정의에서 바로 나옵니다. $1$의 양의 약수 $d$는 아래 "약수의 크기"에 의해 $1 \le d \le 1$이므로 $d = 1$ 하나뿐입니다. 정확히 두 개가 아니므로 소수가 아니고, 셋 이상도 아니므로 합성수도 아닙니다.

## 약수의 크기

:::remark[자연수 $n$의 양의 약수 $d$는 $1 \le d \le n$이다]
$d$가 $n$의 양의 약수이면 $n = dc$인 정수 $c$가 있다. $d$는 양의 정수이므로 (Z1)에 의해 $d \ge 1$이다. 만약 $c \le 0$이면 $d > 0$이므로 (Z2)에 의해 $dc \le 0$이지만 $dc = n \ge 1 > 0$이어서 모순이다. 그러므로 $c > 0$이고, 정수이므로 (Z1)에 의해 $c \ge 1$이다. $c \ge 1$이고 $d > 0$이므로 (Z3)에 의해 $dc \ge d \cdot 1$, 곧 $n \ge d$이다. 따라서 $1 \le d \le n$이다.
:::

:::remark[이 항목과 뒤 항목에서 증명 없이 쓰는 정수의 성질]
다음은 고등학교에서 배운 정수와 부등식의 성질이며 이 사이트에서 증명 없이 쓴다. 여기서 $a$, $b$, $c$는 정수 또는 실수이다.

- (Z1) 정수 $a$, $b$에 대하여 $a < b$이면 $a + 1 \le b$이다. 곧 이웃한 두 정수 사이에는 정수가 없다. $a = 0$이면 양의 정수는 $1$ 이상이다.
- (Z2) 양수와 $0$ 이하인 수의 곱은 $0$ 이하이다.
- (Z3) $a \le b$이고 $c > 0$이면 $ac \le bc$이다. $a \ge b$이고 $c > 0$이면 $ac \ge bc$이다.
- (Z4) $n \ne 0$이고 $n = dn$이면 $d = 1$이다. (양변을 $n$으로 나눌 수 있다.)
:::

## 예시와 반례

:::example[약수를 모두 적어 보기]
$2$의 양의 약수 $d$는 $1 \le d \le 2$이므로 (Z1)에 의해 $d = 1$ 또는 $d = 2$이다. 둘 다 $2$를 나누므로 $2$의 양의 약수는 $1$, $2$이고 $2$는 소수이다.

$7$이 소수임을 보인다. 양의 약수 $d$는 $1 \le d \le 7$이므로 $d = 2, \dots, 6$이 $7$을 나누지 않음을 보이면 된다. $7 = dc$인 정수 $c$가 있다고 하면 다음과 같이 모순이다. $d = 2$이면 $c \le 3$일 때 (Z3)에 의해 $dc \le 6$이고, 정수 $c$가 $c \le 3$이 아니면 (Z1)에 의해 $c \ge 4$이므로 $dc \ge 8$이어서 $7$이 아니다. $d = 3$이면 $c \le 2$에서 $dc \le 6$, $c \ge 3$에서 $dc \ge 9$이다. $d = 4$이면 $c \le 1$에서 $dc \le 4$, $c \ge 2$에서 $dc \ge 8$이다. $d = 5$이면 $c \le 1$에서 $dc \le 5$, $c \ge 2$에서 $dc \ge 10$이다. $d = 6$이면 $c \le 1$에서 $dc \le 6$, $c \ge 2$에서 $dc \ge 12$이다. 어느 경우도 $7$이 아니므로 $7$의 양의 약수는 $1$, $7$뿐이고 소수이다.

$9$의 양의 약수는 $1$, $3$, $9$ 세 개($9 = 3 \cdot 3$)이므로 합성수이다. $12$의 양의 약수는 $1, 2, 3, 4, 6, 12$이므로 합성수이다.
:::

:::counterexample[흔한 실수: 홀수만 소수라거나 1이 소수라고 하기]
"소수는 홀수이다"는 틀립니다. $2$의 양의 약수는 $1$과 $2$ 두 개이므로 $2$는 소수이고 짝수입니다([[even-and-odd]]). 반대로 "홀수는 소수이다"도 틀립니다. $9$는 홀수이지만 $9 = 3 \cdot 3$이어서 약수가 $1, 3, 9$ 셋입니다.

또 "$1$은 $1$과 자기 자신으로만 나뉘므로 소수이다"도 틀립니다. 정의는 양의 약수가 **정확히 두 개**일 것을 요구하는데, $1$과 $n$이 $n = 1$에서는 같은 수여서 약수가 하나뿐입니다.
:::

## 확인 질문

:::check[$15$는 소수인가 합성수인가? 근거가 되는 약수를 들어라.]
$15 = 3 \cdot 5$이므로 $3$이 $15$의 양의 약수입니다. $1$, $3$, $5$, $15$가 양의 약수이므로 셋 이상이고 합성수입니다.
:::

:::check[$91$은 소수인가?]
$91 = 7 \cdot 13$이므로 $7$이 $1$과 $91$ 이외의 양의 약수입니다. 따라서 양의 약수가 $1$, $7$, $13$, $91$로 셋 이상이어서 소수가 아니고 합성수입니다.
:::
