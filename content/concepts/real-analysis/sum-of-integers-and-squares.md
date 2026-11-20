---
title: 1부터 n까지의 합과 제곱의 합
title_en: Sums of the First n Integers and Squares
aliases: [자연수의 합, 제곱의 합, 1 부터 n 까지의 합, sum of the first n natural numbers, sum of squares, Gauss sum]
kind: proposition
field: real-analysis
msc: ["26"]
level: undergrad
summary: 0 이상인 정수 n 에 대해 i = 1 부터 n 까지 i 를 더한 합은 n(n + 1)/2, i 의 제곱을 더한 합은 n(n + 1)(2n + 1)/6 이다. i − 1 과 그 제곱을 더한 꼴도 함께 진술한다.
requires: [even-and-odd, prime-number, well-ordering-principle, mathematical-induction, natural-numbers-are-infinite, real-number-arithmetic, order-properties-of-reals, sequence, power-of-a-real-number, finite-sum-of-reals, linearity-and-order-of-finite-sums]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 0.3절 연습문제 0.3.14 (0.3.6 Exercises, p.21); 5.1절 연습문제 5.1.2 (5.1.4 Exercises, p.188); 5.3절 연습문제 5.3.13 (5.3.4 Exercises, p.206)
    checked: original
    note: "출처는 이 두 공식을 명제로 진술하지 않는다. 책 전체에서 'n(n+1)'을 띄어쓰기를 바꾼 세 꼴로, '(n + 1)(2n', 'sum of squares', 'squares of', 'triangular', 'arithmetic series', '1 + 2 +', 'sum of the first' 로 찾았고, 0.3.6 과 5.1.4, 5.2.5 의 연습문제는 처음부터 끝까지 읽었으며 5.3.4, 5.4.3, 5.5.2 의 연습문제는 번호가 붙은 줄과 합이 든 줄을 읽었다. 가까운 것은 다음 셋이다. 연습문제 0.3.14(p.21)는 세제곱의 합 1³ + 2³ + ⋯ + n³ = (n(n+1)/2)² 를 귀납법으로 보이라는 것으로, 오른쪽에 이 항목의 (1)의 값이 들어 있고 같은 귀납 발상이다. 연습문제 5.1.2(p.188)는 [0, 1] 위의 f(x) = x 의 적분을 정의로 계산하라는 것으로, 균등 분할로 풀면 이 항목의 (1)이나 (3)이 필요하다. 연습문제 5.3.13(p.206)은 Σ_{k=1}^n k^ℓ/n^{ℓ+1} 의 극한을 묻고, ℓ = 1, 2 인 경우의 합이 이 항목의 (1), (2)이다. 이 항목의 증명(끝 번호에 대한 귀납법과 선형성)은 이 사이트가 썼다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 엉킨 증명 근거 1건과 모호하거나 근거 없는 설명 문장 5건을 고쳤다."
added: 2026-11-20
---

:::statement
유한 합은 [[finite-sum-of-reals]]의 것이고, 선형성과 상수의 합은 [[linearity-and-order-of-finite-sums]]의 것이며, 거듭제곱 $a^2 = aa$는 [[power-of-a-real-number]]의 것이다. 정수는 실수로 본다([[real-number-arithmetic]]의 (K7)과 [[order-properties-of-reals]]의 (10)). 아래 식의 $x/2$와 $x/6$은 실수의 나눗셈, 곧 $x \cdot 2^{-1}$과 $x \cdot 6^{-1}$이다((K7)에 의해 $2 \ne 0$이고 $6 \ne 0$이다). 합의 항 $i$, $i^2$, $i - 1$, $(i - 1)^2$은 $i$번째 항이 그 식인 수열이다.

$n \ge 0$인 모든 정수 $n$에 대하여 다음이 성립한다.

1. (1부터 $n$까지의 합) $\displaystyle \sum_{i=1}^{n} i = \frac{n(n + 1)}{2}$이다.
2. (제곱의 합) $\displaystyle \sum_{i=1}^{n} i^2 = \frac{n(n + 1)(2n + 1)}{6}$이다.
3. (하나 작은 수의 합) $\displaystyle \sum_{i=1}^{n} (i - 1) = \frac{(n - 1)n}{2}$이다.
4. (하나 작은 수의 제곱의 합) $\displaystyle \sum_{i=1}^{n} (i - 1)^2 = \frac{(n - 1)n(2n - 1)}{6}$이다.

$n = 0$이면 네 왼쪽은 빈 합이고 네 오른쪽은 모두 $0$이다.
:::

:::english
Finite sums are those of the entry on finite sums of real numbers; linearity and sums of constants are those of the entry on linearity and order of finite sums; the power $a^2 = aa$ is that of the entry on powers of a real number. Integers are regarded as real numbers (item (K7) of the entry on real number arithmetic and item (10) of the entry on order properties of the reals). In the formulas below, $x/2$ and $x/6$ are division of real numbers, that is, $x \cdot 2^{-1}$ and $x \cdot 6^{-1}$ (by (K7), $2 \ne 0$ and $6 \ne 0$). The terms $i$, $i^2$, $i - 1$, $(i - 1)^2$ of the sums are the sequences whose $i$th term is that expression.

For every integer $n \ge 0$ the following hold.

1. (Sum from $1$ to $n$) $\displaystyle \sum_{i=1}^{n} i = \frac{n(n + 1)}{2}$.
2. (Sum of squares) $\displaystyle \sum_{i=1}^{n} i^2 = \frac{n(n + 1)(2n + 1)}{6}$.
3. (Sum of the numbers one less) $\displaystyle \sum_{i=1}^{n} (i - 1) = \frac{(n - 1)n}{2}$.
4. (Sum of the squares of the numbers one less) $\displaystyle \sum_{i=1}^{n} (i - 1)^2 = \frac{(n - 1)n(2n - 1)}{6}$.

For $n = 0$ the four left-hand sides are empty sums and the four right-hand sides are all $0$.
:::

## 직관

$1 + 2 + \dots + n$을 거꾸로 쓴 $n + (n - 1) + \dots + 1$과 위아래로 짝지으면 짝마다 합이 $n + 1$이고 짝이 $n$개이므로, 두 배가 $n(n + 1)$이라고 계산하는 방법이 있습니다. 이 항목은 줄임표를 쓰지 않기 위해 같은 등식을 끝 번호에 대한 귀납법으로 증명합니다. 끝항 $n + 1$을 더했을 때 오른쪽 식도 정확히 $n + 1$만큼 커지는지만 확인하면 됩니다.

(3)과 (4)는 (1)과 (2)에서 바로 나오지만 따로 적어 둡니다. 구간 $[0, b]$를 $n$등분한 점은 $0$부터 번호가 붙어 $i$번째 작은 구간의 왼쪽 끝이 $(i - 1)b/n$이 되므로, 왼쪽 끝의 값을 더할 때 $i - 1$과 $(i - 1)^2$의 합이 그대로 나옵니다. 오른쪽 식은 (1), (2)의 $n$ 자리에 $n - 1$을 넣은 꼴인데, $n = 0$에서도 성립하도록 이 항목은 선형성으로 증명합니다.

## 증명

:::idea
(1)과 (2)는 $n \ge 0$에 대한 귀납법으로, 끝항을 더한 뒤 오른쪽 식을 정수의 계산으로 정리한다. (3)과 (4)는 $i - 1$과 $(i - 1)^2 = i^2 - 2i + 1$을 선형성으로 나누어 (1), (2)와 상수의 합으로 계산한다.
:::

:::hint
(2)의 귀납 단계: $n(n + 1)(2n + 1) + 6(n + 1)^2 = (n + 1)\bigl(n(2n + 1) + 6(n + 1)\bigr)$이고, 괄호 안은 $(n + 2)(2n + 3)$이다.
:::

:::proof
"합 (2)"처럼 쓴 것은 [[finite-sum-of-reals]]의 번호, "선형 (1)"은 [[linearity-and-order-of-finite-sums]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 진술이다. 정수끼리의 합·차·곱이 정수라는 것은 [[even-and-odd]], 정수의 계산 법칙은 [[well-ordering-principle]]의 진술에서 받아들인 것이고, (K7)에 의해 정수 사이의 등식은 실수의 등식으로도 성립한다. [[power-of-a-real-number]]의 (1)에 의해 $a^2 = aa$이다. 귀납법은 [[mathematical-induction]]의 시작점이 $0$인 꼴이다.

나눗셈에 관해 다음을 쓴다. $d$가 $0$이 아닌 실수이고 $u$, $v$가 실수이면 (K2), (K3), (K12)의 (i)에 의해 $u/d + v/d = (u + v)/d$이고, (K2), (K4), (K8)의 (iii)에 의해 $v = (vd)/d$이다.

**1의 증명.** $n = 0$이면 왼쪽은 합 (2)에 의해 $0$이고 오른쪽은 (K9)에 의해 $0 \cdot 1 \cdot 2^{-1} = 0$이다. $n \ge 0$에서 (1)이 참이면 합 (3)과 위의 나눗셈 규칙에 의해
$$
\sum_{i=1}^{n+1} i = \frac{n(n + 1)}{2} + (n + 1) = \frac{n(n + 1) + 2(n + 1)}{2} = \frac{(n + 1)(n + 2)}{2}
$$
이다. 마지막 등식은 정수의 계산 $n(n + 1) + 2(n + 1) = (n + 1)(n + 2)$이다.

**2의 증명.** $n = 0$이면 양변이 $0$이다. $n \ge 0$에서 (2)가 참이면 합 (3)과 나눗셈 규칙에 의해
$$
\sum_{i=1}^{n+1} i^2 = \frac{n(n + 1)(2n + 1)}{6} + (n + 1)^2 = \frac{n(n + 1)(2n + 1) + 6(n + 1)^2}{6}
$$
이다. 정수의 계산으로 $n(n + 1)(2n + 1) + 6(n + 1)^2 = (n + 1)(2n^2 + 7n + 6) = (n + 1)(n + 2)\bigl(2(n + 1) + 1\bigr)$이므로 오른쪽은 $\dfrac{(n + 1)\bigl((n + 1) + 1\bigr)\bigl(2(n + 1) + 1\bigr)}{6}$이다.

**3의 증명.** 선형 (1)의 차의 식과 선형 (2)를 $c = 1$, $m = 1$에 쓰면, (1)과 나눗셈 규칙에 의해
$$
\sum_{i=1}^{n} (i - 1) = \sum_{i=1}^{n} i - \sum_{i=1}^{n} 1 = \frac{n(n + 1)}{2} - n = \frac{n(n + 1) - 2n}{2} = \frac{(n - 1)n}{2}
$$
이다. 여기서 $-n = (-2n)/2$를 위의 나눗셈 규칙으로 더했고, $n(n + 1) - 2n = (n - 1)n$은 정수의 계산이다.

**4의 증명.** (K3), (K9), (K12)와 정수의 계산에 의해 모든 자연수 $i$에서 $(i - 1)^2 = i^2 + (-2)i + 1$이다. 선형 (1)을 두 번 쓰고 선형 (2)를 쓰면
$$
\sum_{i=1}^{n} (i - 1)^2 = \sum_{i=1}^{n} i^2 + (-2)\sum_{i=1}^{n} i + n = \frac{n(n + 1)(2n + 1)}{6} - n(n + 1) + n
$$
이다. 나눗셈 규칙으로 분모를 $6$으로 맞추면 분자는 $n(n + 1)(2n + 1) - 6n(n + 1) + 6n = n(2n^2 - 3n + 1) = (n - 1)n(2n - 1)$이다(정수의 계산). $\blacksquare$
:::

## 예시와 반례

:::example[n = 4 와 n = 1]
$n = 4$이면 (1)에 의해 $\sum_{i=1}^{4} i = 4 \cdot 5/2 = 10$이고, 끝항을 차례로 더해도 $1 + 2 + 3 + 4 = 10$입니다. (2)에 의해 $\sum_{i=1}^{4} i^2 = 4 \cdot 5 \cdot 9/6 = 30$이고 $1 + 4 + 9 + 16 = 30$입니다. (3)에 의해 $\sum_{i=1}^{4}(i - 1) = 3 \cdot 4/2 = 6 = 0 + 1 + 2 + 3$이고, (4)에 의해 $\sum_{i=1}^{4} (i - 1)^2 = 3 \cdot 4 \cdot 7/6 = 14 = 0 + 1 + 4 + 9$입니다.

$n = 1$이면 네 식은 $1 = 1 \cdot 2/2$, $1 = 1 \cdot 2 \cdot 3/6$, $0 = 0 \cdot 1/2$, $0 = 0 \cdot 1 \cdot 1/6$입니다.
:::

:::counterexample[제곱의 합과 합의 제곱]
제곱의 합은 합의 제곱과 다를 수 있습니다. $n = 2$이면 $\sum_{i=1}^{2} i^2 = 1 + 4 = 5$이지만 $\left(\sum_{i=1}^{2} i\right)^2 = 3^2 = 9$입니다. 선형성은 상수배와 합에 대한 것이고, 항을 제곱하는 것은 합 밖으로 꺼낼 수 없습니다.
:::

## 확인 질문

:::check[$\sum_{i=11}^{20} i$는 얼마인가?]
$155$입니다. [[finite-sum-of-reals|유한 합]]의 (1)에 의해 $\sum_{i=11}^{20} i = s_{20} - s_{10}$이고, 이 항목의 (1)에 의해 $s_{20} = 20 \cdot 21/2 = 210$, $s_{10} = 10 \cdot 11/2 = 55$이므로 $210 - 55 = 155$입니다.
:::

:::check[$\sum_{i=1}^{n} (n - i)$를 $n$의 식으로 나타내면?]
$(n - 1)n/2$입니다. 여기서 $n$은 고정된 $0$ 이상의 정수이고 항은 $i$번째 항이 $n - i$인 수열입니다. 선형 (1)의 차의 식과 선형 (2)에 의해 $\sum_{i=1}^{n} (n - i) = n \cdot n - n(n + 1)/2 = (2n^2 - n^2 - n)/2 = (n - 1)n/2$입니다. 이것은 (3)과 같은 값이고, 두 합은 같은 수 $0, 1, \dots, n - 1$을 반대 순서로 더한 것입니다.
:::
