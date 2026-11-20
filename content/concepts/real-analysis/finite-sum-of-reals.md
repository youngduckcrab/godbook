---
title: 실수의 유한 합
title_en: Finite Sums of Real Numbers
aliases: [유한 합, 빈 합, 합의 기호, 시그마 기호, 범위에서만 정해진 항의 합, finite sum, empty sum, summation notation, sigma notation]
kind: definition
field: real-analysis
msc: ["26"]
level: undergrad
summary: 수열의 i = m 부터 n 까지의 유한 합을 부분합의 차로 정의한다(n = m − 1 이면 빈 합 0). 1 부터의 합은 부분합 그 자체이고, 끝항 떼기와 범위 안의 항에만 의존한다는 성질, 범위에서만 정해진 항의 합을 함께 진술한다.
requires: [even-and-odd, prime-number, well-ordering-principle, mathematical-induction, natural-numbers-are-infinite, inverse-function, real-number-arithmetic, real-order-axioms, order-properties-of-reals, sequence, real-valued-function, series-and-partial-sums]
sources:
  - ref: lebl-basic-analysis
    loc: 2.5절(2.5.1 소절) Definition 2.5.1 (p.87), Proposition 2.5.6 의 증명 (p.89), 2.5.2 소절 Definition 2.5.7 과 Proposition 2.5.8 사이의 문단 (p.89); 5.1절(5.1.1 소절) Definition 5.1.1 (p.181)
    checked: original
    note: "출처는 실수의 유한 합을 정의하지 않는다. Definition 2.5.1(p.87)이 부분합을 s_k = Σ_{n=1}^k x_n = x_1 + x_2 + ⋯ + x_k 로 쓰는 것이 Σ 의 첫 쓰임이고, 5장의 Definition 5.1.1(p.181)은 다르부 합 L(P, f), U(P, f) 를 Σ_{i=1}^n m_iΔx_i, Σ_{i=1}^n M_iΔx_i 로 정의 없이 쓴다. 이 항목은 기호 Σ 의 근거로 이 두 곳을 쓰고, 정의와 증명은 이 사이트가 썼다. 유한 합을 해석학 입문의 부분합(series-and-partial-sums)의 차로 정의한 것은 이 사이트의 선택이다. 그래서 Σ_{i=1}^n x_i 가 부분합 s_n 과 정의 그대로 같고, 출처의 Definition 2.5.1 의 등식 s_k = Σ_{n=1}^k x_n 이 이 사이트에서도 성립한다. (1)의 둘째 식 Σ_{i=k+1}^n x_i = s_n − s_k 는 출처가 2.5.2 소절의 Definition 2.5.7 과 Proposition 2.5.8 사이의 문단(p.89)에서 두 부분합의 차를 Σ_{i=n+1}^k x_i 로 고쳐 쓰는 것, Proposition 2.5.6 의 증명(p.89)이 Σ_{n=1}^k x_n 을 Σ_{n=1}^{M−1} x_n 과 Σ_{n=M}^k x_n 으로 나누어 쓰는 것과 같은 계산이다. 출처는 0 부터 시작하는 첨자도 쓰지만(Remark 2.5.2, p.87) 이 항목은 1 이상의 번호에서 시작하는 합만 정의한다. 확인 질문 2 의 i 번째 항이 i 인 수열의 합은 출처 연습문제 5.3.13(p.206)의 Σ_{k=1}^n k^ℓ 에서 ℓ = 1 로 둔 것과 같은 대상이다. 반례 '합이 같지만 항이 다른 두 수열'의 모든 항이 1 인 수열은 출처 Example 2.1.3(p.53)의 상수 수열 1, 1, 1, … 과 같은 수열이다(출처는 수렴의 예로 쓴다)."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우에서 거짓이던 설명 문장 6건과 증명 없던 주장을 고쳤다."
added: 2026-11-20
---

:::statement
수열과 그 항, 값으로 정한 수열은 [[sequence]]의 것이고, 부분합과 부분합 수열은 [[series-and-partial-sums]]의 것이며, 덧셈, 뺄셈과 (K…)는 [[real-number-arithmetic]]의 것이다. 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)으로 다루고, [[order-properties-of-reals]]의 (10)에 의해 정수 사이의 부등식은 실수의 부등식으로 읽어도 뜻이 같다.

**유한 합.** $(x_i)$를 수열, $(s_n)$을 그 부분합 수열이라 하고, $m$, $n$을 $1 \le m$이고 $m - 1 \le n$인 정수라 하자. 이런 $m$, $n$은 다음 세 경우 가운데 정확히 하나에 든다.

- 첫째 경우: $n = m - 1$이다.
- 둘째 경우: $m \le n$이고 $m = 1$이다.
- 셋째 경우: $m \le n$이고 $2 \le m$이다.

둘째 경우에서 $n$은 자연수이고, 셋째 경우에서 $n$과 $m - 1$은 자연수이다. 실수
$$
\sum_{i=m}^{n} x_i = \begin{cases} 0 & \text{첫째 경우} \\ s_n & \text{둘째 경우} \\ s_n - s_{m-1} & \text{셋째 경우} \end{cases}
$$
를 수열 $(x_i)$의 $i = m$부터 $n$까지의 **유한 합**(finite sum)이라 하고, $m$을 합의 **시작 번호**, $n$을 **끝 번호**라 한다. 첫째 경우의 합을 **빈 합**(empty sum)이라 한다. 이 기호는 $1 \le m$이고 $m - 1 \le n$일 때만 쓴다. $0$ 이하의 번호에서 시작하는 합과 $n < m - 1$인 합은 정의하지 않는다.

**합의 첨자.** 위의 수는 수열 $(x_i)$와 정수 $m$, $n$만으로 정해진다. 그래서 $\sum_{i=m}^{n} x_i$의 글자 $i$는 이 기호 안에서만 쓰는 이름이고(**합의 첨자**), 다른 글자로 바꾼 $\sum_{j=m}^{n} x_j$는 같은 수이다. 모든 자연수 $i$에서 정해지는 식을 써서 "$\sum_{i=m}^{n}(i\text{에 대한 식})$"이라 쓰면, $i$번째 항이 그 식인 수열([[sequence]]의 (1))의 합을 뜻한다. 합의 첨자로 $i$를 쓰는 식에서는 항등함수 $i_A$([[inverse-function]])를 함께 쓰지 않는다.

**범위에서만 정해진 항의 합.** $m$, $n$을 위와 같은 정수라 하고, $m \le i \le n$인 정수 $i$마다 실수 $t_i$가 $i$에 대한 식이나 이미 정해진 대상으로 하나씩 정해져 있다고 하자($n = m - 1$이면 그런 $i$가 없다). 자연수 $i$마다 "$m \le i \le n$이면 $t_i$, 그렇지 않으면 $0$"으로 정한 수열([[real-valued-function]]의 (1)을 $\mathbb{N}$ 위에 쓴 것)을 $(z_i)$라 하고
$$
\sum_{i=m}^{n} t_i = \sum_{i=m}^{n} z_i
$$
로 정한다. 아래 (4)에 의해, $m \le i \le n$인 모든 정수 $i$에서 $y_i = t_i$인 수열 $(y_i)$라면 어느 것이든 $\sum_{i=m}^{n} y_i$는 이 수와 같다. 특히 $t_i$가 처음부터 어떤 수열의 $i$번째 항이면, 그 수열의 합으로 읽든 이 약속으로 읽든 같은 수이다.

다음이 성립한다. 아래에서 $(x_i)$, $(y_i)$는 수열, $(s_n)$은 $(x_i)$의 부분합 수열이고, $m$, $n$은 $1 \le m$이고 $m - 1 \le n$인 정수이다.

1. (부분합) 모든 자연수 $n$에서 $\sum_{i=1}^{n} x_i = s_n$이다. 또 $k \le n$인 모든 자연수 $k$, $n$에서 $\sum_{i=k+1}^{n} x_i = s_n - s_k$이다.
2. (빈 합과 한 항) $\sum_{i=m}^{m-1} x_i = 0$이고 $\sum_{i=m}^{m} x_i = x_m$이다.
3. (끝항 떼기) $\sum_{i=m}^{n+1} x_i = \sum_{i=m}^{n} x_i + x_{n+1}$이다.
4. (범위 안의 항에만 의존) $m \le i \le n$인 모든 정수 $i$에서 $x_i = y_i$이면 $\sum_{i=m}^{n} x_i = \sum_{i=m}^{n} y_i$이다.
:::

:::english
Sequences, their terms and sequences defined by values are those of the entry on sequences; partial sums and the sequence of partial sums are those of the entry on series and partial sums; addition, subtraction and (K…) are those of the entry on real number arithmetic. Natural numbers are the positive integers (the theorem on the set of natural numbers). The order of the integers is handled with (Z1) of the entry on prime numbers and (Z5)–(Z8), (L1)–(L3) of the entry on the well-ordering principle, and by item (10) of the entry on order properties of the reals an inequality between integers means the same when read as an inequality of real numbers.

**Finite sums.** Let $(x_i)$ be a sequence, $(s_n)$ its sequence of partial sums, and $m$, $n$ integers with $1 \le m$ and $m - 1 \le n$. Such $m$, $n$ fall into exactly one of the following three cases.

- First case: $n = m - 1$.
- Second case: $m \le n$ and $m = 1$.
- Third case: $m \le n$ and $2 \le m$.

In the second case $n$ is a natural number, and in the third case $n$ and $m - 1$ are natural numbers. The real number
$$
\sum_{i=m}^{n} x_i = \begin{cases} 0 & \text{in the first case} \\ s_n & \text{in the second case} \\ s_n - s_{m-1} & \text{in the third case} \end{cases}
$$
is called the **finite sum** of $(x_i)$ from $i = m$ to $n$; $m$ is called the **starting index** and $n$ the **ending index** of the sum. The sum in the first case is called the **empty sum**. This symbol is used only when $1 \le m$ and $m - 1 \le n$. Sums starting at an index $0$ or below, and sums with $n < m - 1$, are not defined.

**The summation index.** The number above is determined by the sequence $(x_i)$ and the integers $m$, $n$ alone. So the letter $i$ in $\sum_{i=m}^{n} x_i$ is a name used only inside this symbol (the **summation index**), and $\sum_{j=m}^{n} x_j$, with another letter, is the same number. Writing "$\sum_{i=m}^{n}(\text{an expression in } i)$" with an expression defined for every natural number $i$ means the sum of the sequence whose $i$th term is that expression (item (1) of the entry on sequences). In a formula that uses $i$ as a summation index, the identity function $i_A$ (the entry on inverse functions) is not used at the same time.

**Sums of terms given only on a range.** Let $m$, $n$ be integers as above, and suppose that for each integer $i$ with $m \le i \le n$ a real number $t_i$ is given by an expression in $i$ or by an already determined object (if $n = m - 1$ there is no such $i$). Let $(z_i)$ be the sequence defined, for each natural number $i$, by "$t_i$ if $m \le i \le n$, and $0$ otherwise" (item (1) of the entry on real-valued functions, used on $\mathbb{N}$), and define
$$
\sum_{i=m}^{n} t_i = \sum_{i=m}^{n} z_i .
$$
By item (4) below, for any sequence $(y_i)$ with $y_i = t_i$ for every integer $i$ with $m \le i \le n$, the sum $\sum_{i=m}^{n} y_i$ equals this number. In particular, if $t_i$ is from the start the $i$th term of some sequence, reading the sum as the sum of that sequence or by this convention gives the same number.

The following hold. Below, $(x_i)$ and $(y_i)$ are sequences, $(s_n)$ is the sequence of partial sums of $(x_i)$, and $m$, $n$ are integers with $1 \le m$ and $m - 1 \le n$.

1. (Partial sums) $\sum_{i=1}^{n} x_i = s_n$ for every natural number $n$. Moreover, $\sum_{i=k+1}^{n} x_i = s_n - s_k$ for all natural numbers $k$, $n$ with $k \le n$.
2. (Empty sum and a single term) $\sum_{i=m}^{m-1} x_i = 0$ and $\sum_{i=m}^{m} x_i = x_m$.
3. (Splitting off the last term) $\sum_{i=m}^{n+1} x_i = \sum_{i=m}^{n} x_i + x_{n+1}$.
4. (Dependence only on the terms in the range) If $x_i = y_i$ for every integer $i$ with $m \le i \le n$, then $\sum_{i=m}^{n} x_i = \sum_{i=m}^{n} y_i$.
:::

## 직관

보통은 이 수를 $x_m + x_{m+1} + \dots + x_n$처럼 줄임표로 적습니다. 줄임표는 "가운데를 알아서 채우라"는 말이어서 증명에서 근거로 삼을 수 없으므로, 이 항목은 해석학 입문에서 이미 재귀로 정해 둔 부분합으로 합을 정의합니다.

통장에 매일 한 번씩 돈이 들어오고 나간다고 생각해 봅시다. $x_i$는 $i$번째 날의 입출금이고 $s_n$은 $n$번째 날까지의 누적액입니다. $m$번째 날부터 $n$번째 날까지 오간 돈은 "$n$번째 날까지의 누적액"에서 "$m$번째 날 전날까지의 누적액"을 뺀 것이고, 이것이 셋째 경우의 식 $s_n - s_{m-1}$입니다. 첫날부터 세면 빼낼 전날이 없으므로 둘째 경우처럼 $s_n$ 그대로이고, 세는 날이 하루도 없으면 오간 돈은 $0$입니다(빈 합). 비유가 정의와 다른 점은, 통장에는 첫날 전에도 잔액이 있을 수 있지만 이 사이트의 부분합에는 $s_0$이 없다는 것입니다. 그래서 $m = 1$인 경우를 따로 둡니다.

정의에서 경우가 셋으로 갈리지만, 쓸 때는 (1)–(4)만 있으면 대부분 충분합니다. 특히 (2)와 (3)은 "빈 합에서 시작해 끝항을 하나씩 더해 간다"는 재귀의 모양이어서, 합에 관한 성질 가운데 많은 것을 끝 번호 $n$에 대한 귀납법으로 증명할 수 있습니다. (4)의 증명이 그 첫 예입니다.

"범위에서만 정해진 항의 합"은 항이 몇 개의 번호에서만 뜻을 가질 때를 위한 약속입니다. 예컨대 $\{1, 2, 3\}$에서만 정해진 함수의 값들을 더할 때 그 밖의 번호를 $0$으로 채워 수열을 만들고 그 수열의 합을 씁니다. 범위 안의 합에는 채운 값이 들어가지 않으므로((4)) 무엇으로 채우든 상관없습니다.

## 증명

:::idea
경우 나누기가 빈틈없고 겹치지 않음을 정수의 순서로 확인한다. (1)–(3)은 각 경우의 식을 부분합의 정의와 [[series-and-partial-sums|급수와 부분합]]의 (2)로 계산하고, (4)는 (2)와 (3)을 써서 끝 번호에 대한 귀납법으로 증명한다.
:::

:::hint
(3)은 $(m, n)$이 세 경우 가운데 어디에 드는지로 나눈다. 첫째 경우이면 $n + 1 = m$이므로 왼쪽은 한 항의 합이다.
:::

:::hint
(4)는 $m$을 고정하고 $n \ge m - 1$에 대한 귀납법으로 한다. 기초 단계는 두 빈 합이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고 "부분합 (2)"는 [[series-and-partial-sums]]의 (2)이다. 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실이고, 정수의 계산 법칙(예: $(m - 1) + 1 = m$)은 [[well-ordering-principle]]의 진술에서 받아들인 것이다. 자연수는 양의 정수이므로 정수 $a$가 자연수인 것은 정확히 $1 \le a$일 때이다((Z1)과 (Z5)).

**세 경우.** $m - 1 \le n$은 $m - 1 < n$이거나 $m - 1 = n$이라는 뜻이다. $m - 1 < n$이면 (Z1)에 의해 $m = (m - 1) + 1 \le n$이다. 거꾸로 $m \le n$이면 (L3)과 (Z6)에 의해 $m - 1 < n$이므로 $n \ne m - 1$이다((L1)). 따라서 $n = m - 1$과 $m \le n$ 가운데 정확히 하나가 성립한다. 또 $1 \le m$은 $1 = m$이거나 $1 < m$이라는 뜻이고, $1 < m$이면 (Z1)에 의해 $2 \le m$이며, (L3)에 의해 $1 < 2$이므로 $m = 1$과 $2 \le m$은 함께 성립하지 않는다((Z6), (L1)). 따라서 $(m, n)$은 세 경우 가운데 정확히 하나에 든다. 둘째 경우에서는 $1 = m \le n$이므로 $n$이 자연수이다. 셋째 경우에서는 $1 \le m \le n$이므로 $n$이 자연수이고, $2 \le m$에서 (Z7)에 의해 $1 \le m - 1$이므로 $m - 1$도 자연수이다. 그래서 정의의 $s_n$, $s_{m-1}$은 부분합 수열의 항으로 정해진다.

**1의 증명.** 자연수 $n$에 대하여 $m = 1$, $n$은 $1 \le n$이므로 둘째 경우에 들고, $\sum_{i=1}^{n} x_i = s_n$이다. 다음으로 $k \le n$인 자연수 $k$, $n$을 잡자. 시작 번호 $k + 1$은 (Z7)에 의해 $2 \le k + 1$이고, $(k + 1) - 1 = k \le n$이므로 합 $\sum_{i=k+1}^{n} x_i$가 정의된다. $k = n$이면 첫째 경우에 들어 합은 $0$이고, (K5)와 (K8)의 (ii)에 의해 $s_n - s_k = s_n + (-s_n) = 0$이다. $k < n$이면 (Z1)에 의해 $k + 1 \le n$이므로 셋째 경우에 들어 합은 $s_n - s_{(k+1)-1} = s_n - s_k$이다.

**2의 증명.** $n = m - 1$은 첫째 경우이므로 빈 합은 정의에 의해 $0$이다. $n = m$은 $m \le m$이므로 둘째나 셋째 경우에 든다. 둘째 경우이면 $m = 1$이고 부분합 수열의 정의에 의해 합은 $s_1 = x_1$이다. 셋째 경우이면 $m - 1$이 자연수이므로 부분합 (2)를 $m - 1$에 쓰면 합은 $s_m - s_{m-1} = s_{(m-1)+1} - s_{m-1} = x_{(m-1)+1} = x_m$이다.

**3의 증명.** $m - 1 \le n$이므로 (Z7)에 의해 $m \le n + 1$이고, $(m, n + 1)$은 둘째나 셋째 경우에 든다. $(m, n)$이 어느 경우에 드는지로 나눈다.

- $(m, n)$이 첫째 경우이면 $n + 1 = m$이므로 (2)와 (K4), (K1)에 의해 $\sum_{i=m}^{n+1} x_i = x_m = 0 + x_{n+1} = \sum_{i=m}^{n} x_i + x_{n+1}$이다.
- $(m, n)$이 둘째 경우이면 $m = 1$이고 부분합 수열의 정의에 의해 $\sum_{i=1}^{n+1} x_i = s_{n+1} = s_n + x_{n+1} = \sum_{i=1}^{n} x_i + x_{n+1}$이다.
- $(m, n)$이 셋째 경우이면 $(m, n + 1)$도 셋째 경우이고, 부분합 수열의 정의와 (K1), (K2)에 의해
  $$
  \begin{aligned}
  \sum_{i=m}^{n+1} x_i &= s_{n+1} - s_{m-1} = (s_n + x_{n+1}) + (-s_{m-1}) \\
  &= (s_n - s_{m-1}) + x_{n+1} = \sum_{i=m}^{n} x_i + x_{n+1}
  \end{aligned}
  $$
  이다.

**4의 증명.** $m$과 두 수열을 고정하고, $n \ge m - 1$인 정수 $n$에 대한 명제 $S_n$을 "$m \le i \le n$인 모든 정수 $i$에서 $x_i = y_i$이면 $\sum_{i=m}^{n} x_i = \sum_{i=m}^{n} y_i$이다"로 두자. [[mathematical-induction]]의 시작점이 정수 $m - 1$인 꼴을 쓴다.

기초 단계: $n = m - 1$이면 (2)에 의해 두 합은 모두 $0$이므로 $S_{m-1}$이 참이다.

귀납 단계: $k \ge m - 1$인 정수 $k$에서 $S_k$가 참이라 하고, $m \le i \le k + 1$인 모든 정수 $i$에서 $x_i = y_i$라 하자. $m \le i \le k$인 정수 $i$는 (L3)과 (Z6)에 의해 $i \le k + 1$이므로 $x_i = y_i$이고, $S_k$에 의해 $\sum_{i=m}^{k} x_i = \sum_{i=m}^{k} y_i$이다. 또 $m - 1 \le k$에서 (Z7)에 의해 $m \le k + 1$이므로 $i = k + 1$에서도 $x_{k+1} = y_{k+1}$이다. (3)에 의해
$$
\sum_{i=m}^{k+1} x_i = \sum_{i=m}^{k} x_i + x_{k+1} = \sum_{i=m}^{k} y_i + y_{k+1} = \sum_{i=m}^{k+1} y_i
$$
이므로 $S_{k+1}$이 참이다. 따라서 $n \ge m - 1$인 모든 정수 $n$에서 $S_n$이 참이다.

**범위에서만 정해진 항의 합에 관한 문장.** 수열 $(z_i)$는 [[real-valued-function]]의 (1)을 $S = \mathbb{N}$에 쓴 것이다. 정수는 실수이므로((K7)) $\mathbb{N} \subseteq \mathbb{R}$이고, 각 자연수 $i$는 "$m \le i \le n$이다"와 "그렇지 않다" 가운데 정확히 한 경우에 들며, $\mathbb{N}$ 위의 실함수는 [[sequence]]의 정의에 의해 수열이다. $m \le i \le n$인 모든 정수 $i$에서 $y_i = t_i$인 수열 $(y_i)$가 있으면, 그런 $i$에서 $z_i = t_i = y_i$이므로 (4)에 의해 $\sum_{i=m}^{n} z_i = \sum_{i=m}^{n} y_i$이다. $t_i$가 처음부터 수열 $(x_i)$의 $i$번째 항이면 $(y_i) = (x_i)$로 두어 같은 결론을 얻는다. $\blacksquare$
:::

## 예시와 반례

:::example[짝수의 합]
$i$번째 항이 $2i$인 수열 $(x_i)$([[sequence]]의 (1))를 봅니다. 부분합 수열의 정의에 의해 $s_1 = x_1 = 2$, $s_2 = s_1 + x_2 = 2 + 4 = 6$, $s_3 = 6 + 6 = 12$, $s_4 = 12 + 8 = 20$입니다(정수의 계산이 실수로서도 같다는 것은 [[real-number-arithmetic]]의 (K7)). 시작 번호 $2$, 끝 번호 $4$는 셋째 경우이므로
$$
\sum_{i=2}^{4} 2i = s_4 - s_1 = 20 - 2 = 18
$$
입니다. (2)와 (3)으로 끝항을 하나씩 더해 가도 $\sum_{i=2}^{2} 2i = 4$, $\sum_{i=2}^{3} 2i = 4 + 6 = 10$, $\sum_{i=2}^{4} 2i = 10 + 8 = 18$로 같은 값이 나옵니다.
:::

:::example[번호 1, 2, 3 에서만 주어진 수]
$t_1 = 5$, $t_2 = -1$, $t_3 = 2$처럼 세 번호에서만 수가 주어졌다고 합시다. 범위에서만 정해진 항의 합의 약속대로 $i \ge 4$에서 $0$으로 채운 수열 $(z_i)$의 부분합은 $s_1 = 5$, $s_2 = 5 + (-1) = 4$, $s_3 = 4 + 2 = 6$이므로 $\sum_{i=1}^{3} t_i = s_3 = 6$입니다. 같은 수열에서 (1)을 $k = 1$, $n = 3$에 쓰면 $\sum_{i=2}^{3} t_i = s_3 - s_1 = 6 - 5 = 1$이고, 실제로 $-1 + 2 = 1$입니다.

$i \ge 4$를 $0$ 대신 다른 수, 예컨대 모두 $100$으로 채운 수열 $(y_i)$를 써도 $1 \le i \le 3$에서는 $y_i = t_i$이므로 (4)에 의해 $\sum_{i=1}^{3} y_i = 6$입니다. 다만 $\sum_{i=1}^{4} y_i$는 (3)에 의해 $6 + 100 = 106$이고 $\sum_{i=1}^{4} z_i = 6 + 0 = 6$이어서, 범위를 벗어난 합에서는 채운 값이 드러납니다. 그래서 $t_i$의 합은 $t_i$가 주어진 범위 안에서만 씁니다.
:::

:::counterexample[합이 같지만 항이 다른 두 수열]
(4)의 거꾸로는 성립하지 않을 수 있습니다. 모든 항이 $1$인 수열 $(x_i)$와, $y_1 = 2$, $y_2 = 0$이고 $i \ge 3$에서 $y_i = 1$인 수열 $(y_i)$를 봅니다. 부분합으로 계산하면 $\sum_{i=1}^{2} x_i = 1 + 1 = 2$이고 $\sum_{i=1}^{2} y_i = 2 + 0 = 2$이어서 두 합은 같지만, $x_1 = 1 \ne 2 = y_1$입니다. 합은 범위 안의 항들로 정해지지만, 합만 보고 항을 되찾을 수는 없습니다.
:::

:::remark[정의하지 않는 범위]
시작 번호가 끝 번호보다 $2$ 이상 큰 기호, 예컨대 $\sum_{i=5}^{3} x_i$는 정의하지 않습니다. $\sum_{i=4}^{3} x_i$는 빈 합이므로 $0$입니다. (3)을 $m = 5$, $n = 3$에 억지로 쓰면 $0 = \sum_{i=5}^{4} x_i = \sum_{i=5}^{3} x_i + x_4$가 되어 $\sum_{i=5}^{3} x_i = -x_4$로 정하고 싶어지지만, 이 사이트는 그렇게 넓히지 않습니다. $0$부터 시작하는 첨자 $\sum_{i=0}^{n}$도 정의하지 않습니다. 이 사이트의 수열에는 $0$번째 항이 없기 때문입니다.

선형대수 강의에서는 벡터의 유한 합을 재귀로 정의했고, 실수를 벡터로 보면 실수의 유한 합도 그 정의로 얻습니다. 이 항목의 유한 합은 그것과 따로 부분합으로 정의한 것이며, 두 값이 같다는 사실은 쓰지 않습니다.
:::

## 확인 질문

:::check[$m = 1$, $n = 0$일 때 $\sum_{i=m}^{n} x_i$는 정의되는가? 정의되면 그 값은?]
정의되고 값은 $0$입니다. $1 \le 1$이고 $1 - 1 = 0 \le 0$이므로 기호를 쓸 수 있고, $n = m - 1$이므로 첫째 경우, 곧 빈 합입니다. 둘째 경우의 식 $s_n$에 넣으면 $s_0$이 필요한데 부분합 수열에는 $0$번째 항이 없으므로, 이 경우를 첫째 경우로 따로 둔 것입니다.
:::

:::check[수열 $(x_i)$의 부분합이 $s_n$일 때 $s_5 - s_2$를 유한 합으로 나타내면?]
$\sum_{i=3}^{5} x_i$입니다. (1)의 둘째 식을 자연수 $k = 2$, $n = 5$에 쓰면 $\sum_{i=2+1}^{5} x_i = s_5 - s_2$입니다. 예컨대 $i$번째 항이 $i$인 수열에서는 $s_2 = 3$, $s_5 = 15$이므로 $s_5 - s_2 = 12 = 3 + 4 + 5$입니다.
:::
