---
title: 리만 적분가능한 함수의 르베그 적분
title_en: The Lebesgue Integral of a Riemann Integrable Function
aliases: [리만 적분가능하면 르베그 적분가능, 표준 표현, 리만 적분과 르베그 적분의 일치, Riemann integrable implies Lebesgue integrable, standard representation]
kind: theorem
field: measure-theory
msc: ["26A42", "28A25"]
level: undergrad
summary: 닫힌구간 위의 리만 적분가능한 함수는 그 구간에서 르베그 적분가능하고 두 적분이 같다는 것을, 2의 거듭제곱 등분 균등 분할의 아래 계단함수의 차로 만든 열과 균등 분할 영 덮개열의 지우는 열을 번갈아 늘어놓은 표준 표현으로 증명한다. 표준 표현은 함수만으로 정해지므로 리만 적분가능한 함수열에는 번호마다 표현이 식으로 주어진다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, limit-is-unique, monotone-convergence-theorem, series-and-partial-sums, comparison-test, finite-sum-of-reals, telescoping-sum, interval, real-valued-function, bounded-function, riemann-integral, dirichlet-function, step-function, null-set-of-reals, riemann-lebesgue-criterion, lebesgue-integrable-function, properties-of-the-lebesgue-integral, null-functions-and-almost-everywhere]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "5.1.1 소절, Example 5.1.4 (p.183); 6.2.2 소절, Theorem 6.2.4 앞의 각주 (p.236)"
    checked: original
    note: "출처는 Theorem 6.2.4(고르게 수렴하면 적분과 극한을 바꿀 수 있다) 앞의 각주(p.236)에서 더 약한 조건의 정리를 증명하려면 르베그 적분이 필요하다고 적는다. 이 항목은 리만 적분가능한 함수가 이 강의의 르베그 적분의 뜻으로 적분가능하고 두 적분이 같다는 것을 증명한다. 예시 '디리클레 함수의 아래·위 계단함수'의 두 적분 0 과 1 은 출처 Example 5.1.4(p.183)가 모든 분할에서 L(P, f) = 0, U(P, f) = 1 이라고 계산한 것과 같은 값이다."
  - ref: sandoval-romero-measure-and-integration
    loc: "1장 The problem of integration, Proposition 1.6 과 그 증명 (p.13–14); 5.4절, Example 5.29 (p.145), Example 5.31 (p.147), Theorem 5.32 (p.148)"
    checked: original
    note: "출처 Theorem 5.32(p.148)의 (b)는 보렐 가측이고 리만 적분가능한 함수의 리만 적분이 르베그 측도 λ 에 대한 적분과 같다는 것이다. 이 강의는 ℝ 위의 르베그 측도를 만들지 않으므로 그 정리를 옮기지 않고, 계단함수의 급수로 정의한 르베그 적분에 대해 같은 결론을 표준 표현으로 증명한다. 예시 '항등함수의 아래 계단함수와 끝점'은 출처 Example 5.29(p.145, [0, 1] 위의 f(x) = x 의 λ-적분이 1/2)와 같은 함수이고, 출처는 측도로, 이 항목은 아래 계단함수로 계산한다. 예시 '디리클레 함수의 아래·위 계단함수'의 함수와 (4)의 디리클레 함수는 출처 Proposition 1.6 의 증명(p.13–14)의 D 와 Example 5.31(p.147)의 χ_Q̃ 와 같은 대상이고, 그 증명도 모든 작은 구간이 유리수와 무리수를 함께 품는다는 것으로 리만 적분가능하지 않음을 보인다."
  - ref: blackstone-mikusinski-daniell-integral
    loc: "1절 Introduction (p.1)"
    checked: original
    note: "출처 1절(p.1)은 계단함수(출처의 simple function)의 급수로 르베그 적분가능한 함수를 정의하는 조건 (A), (B)를 적고, 이 접근이 참고문헌 [4](J. Mikusiński, The Bochner integral)에서 도입되었다고 적는다. 이 항목의 표준 표현은 그 정의의 뜻의 표현이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(아르첼라의 출처 주장을 Lebl I 6.2.2 각주와 다섯 출처의 검색으로 대조, 수렴 정리의 예외 집합 가정 꼴). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$[a, b]$, 리만 적분가능과 $\int_a^b$는 [[riemann-integral]]의 것이다. $f$의 아래 계단함수 $s_n$, 위 계단함수 $t_n$, 균등 분할 영 덮개열 $\bigl((c_l), (d_l)\bigr)$은 [[riemann-lebesgue-criterion|리만 적분가능성의 르베그 판정]]의 것이다. 표현, 르베그 적분가능, $\int_{\mathbb{R}}$, $0$으로 늘인 함수 $\hat{f}$, "$[a, b]$에서 르베그 적분가능", $\int_{[a, b]}$, $\operatorname{alt}$는 [[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]]의 것이고, 지우는 열은 [[null-functions-and-almost-everywhere|거의 영인 함수와 거의 어디서나]]의 것이다. 영 덮개열과 $\limsup$은 [[null-set-of-reals|ℝ 의 영집합]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이다.

**표준 표현.** $f : [a, b] \to \mathbb{R}$가 리만 적분가능하다고 하자. 첫째 항이 $s_1$이고 $n \ge 2$인 $n$번째 항이 $s_n - s_{n-1}$인 계단함수의 열을 $\Sigma_f$라 하고, $f$의 균등 분할 영 덮개열로 만든 지우는 열을 $\Xi_f$라 하자. 계단함수의 열 $\operatorname{alt}(\Sigma_f, \Xi_f)$를 $f$의 **표준 표현**(standard representation)이라 한다.

다음이 성립한다. 아래에서 $f : [a, b] \to \mathbb{R}$는 리만 적분가능하다.

1. (아래 계단함수의 극한) 모든 실수 $x$에서 $n$번째 항이 $s_n(x)$인 수열은 단조증가이고 유계이므로 수렴한다. 그 극한을 $F(x)$로 정한 함수 $F : \mathbb{R} \to \mathbb{R}$에 대하여 다음이 성립한다.
   - (i) $\Sigma_f$는 $F$의 표현이고, 모든 실수 $x$에서 $\Sigma_f$의 급수가 절대수렴한다. 따라서 $F$는 르베그 적분가능하고 $\int_{\mathbb{R}} F = \int_a^b f$이다.
   - (ii) $x \notin \limsup_{l \to \infty} [c_l, d_l)$이면 $F(x) = \hat{f}(x)$이다.
2. (표준 표현) $f$의 표준 표현은 $\hat{f}$의 표현이다. 따라서 $f$는 $[a, b]$에서 르베그 적분가능하고
   $$
   \int_{[a, b]} f = \int_a^b f
   $$
   이다. 표준 표현은 $a$, $b$, $f$만으로 정해진다.
3. (리만 적분가능한 함수열) 자연수 $n$마다 리만 적분가능한 $f_n : [a, b] \to \mathbb{R}$가 정해져 있으면, 자연수 $n$마다 $f_n$의 표준 표현은 $\hat{f_n}$의 표현이고 $n$과 $f_n$만으로 정해진다. 곧 $n$마다 $\hat{f_n}$의 표현이 식으로 정해진다.
4. (디리클레 함수) $[a, b]$ 위의 디리클레 함수는 $[a, b]$에서 르베그 적분가능하지만 리만 적분가능하지 않다. 따라서 $[a, b]$에서 르베그 적분가능한 함수 가운데 리만 적분가능하지 않은 것이 있다.
:::

:::english
$[a, b]$, Riemann integrability, and $\int_a^b$ are as in the entry on the Riemann integral. The lower step functions $s_n$, the upper step functions $t_n$, and the uniform-partition null cover sequence $\bigl((c_l), (d_l)\bigr)$ of $f$ are as in the entry on Lebesgue's criterion for Riemann integrability. Representations, Lebesgue integrability, $\int_{\mathbb{R}}$, the extension $\hat{f}$ by $0$, "Lebesgue integrable on $[a, b]$", $\int_{[a, b]}$, and $\operatorname{alt}$ are as in the entry on Lebesgue integrable functions, and cancelling sequences are as in the entry on null functions. Null cover sequences and $\limsup$ are as in the entry on null sets of real numbers. Below, $a$ and $b$ are reals with $a < b$.

**Standard representation.** Let $f : [a, b] \to \mathbb{R}$ be Riemann integrable. Let $\Sigma_f$ be the sequence of step functions whose first term is $s_1$ and whose $n$th term for $n \ge 2$ is $s_n - s_{n-1}$, and let $\Xi_f$ be the cancelling sequence made from the uniform-partition null cover sequence of $f$. The sequence of step functions $\operatorname{alt}(\Sigma_f, \Xi_f)$ is called the **standard representation** of $f$.

The following hold. Below, $f : [a, b] \to \mathbb{R}$ is Riemann integrable.

1. (The limit of the lower step functions) For every real $x$, the sequence whose $n$th term is $s_n(x)$ is monotone increasing and bounded, hence converges. For the function $F : \mathbb{R} \to \mathbb{R}$ with $F(x)$ equal to this limit:
   - (i) $\Sigma_f$ is a representation of $F$, and its series converges absolutely at every real $x$. Hence $F$ is Lebesgue integrable and $\int_{\mathbb{R}} F = \int_a^b f$.
   - (ii) If $x \notin \limsup_{l \to \infty} [c_l, d_l)$, then $F(x) = \hat{f}(x)$.
2. (Standard representation) The standard representation of $f$ is a representation of $\hat{f}$. Hence $f$ is Lebesgue integrable on $[a, b]$ and
   $$
   \int_{[a, b]} f = \int_a^b f.
   $$
   The standard representation is determined by $a$, $b$, and $f$ alone.
3. (Sequences of Riemann integrable functions) If a Riemann integrable $f_n : [a, b] \to \mathbb{R}$ is given for each natural number $n$, then for each $n$ the standard representation of $f_n$ is a representation of $\hat{f_n}$ and is determined by $n$ and $f_n$ alone. That is, a representation of $\hat{f_n}$ is given by a formula for each $n$.
4. (The Dirichlet function) The Dirichlet function on $[a, b]$ is Lebesgue integrable on $[a, b]$ but not Riemann integrable. Hence some functions that are Lebesgue integrable on $[a, b]$ are not Riemann integrable.
:::

## 직관

리만 적분가능한 함수는 아래 계단함수 $s_n$으로 아래에서 다가갈 수 있고, 그 적분 $\int_{\mathbb{R}} s_n$은 리만 적분으로 갑니다. $s_1$에 차 $s_2 - s_1$, $s_3 - s_2$, …를 차례로 더하면 부분합이 $s_n$이 되므로, 이 차들의 열이 극한 $F$의 표현이 됩니다. 계단을 한 칸씩 쌓아 올려 함수의 아래쪽을 채우는 셈입니다. 비유의 "쌓은 높이"가 부분합 $s_n(x)$이고 "다 쌓은 모양"이 $F$입니다.

다만 $F$는 $f$를 $0$으로 늘인 함수 $\hat{f}$와 몇몇 점에서 다를 수 있습니다. 아래 계단함수는 칸의 하한을 쓰므로 $f$가 끊어지는 점에서는 $f(x)$에 닿지 않을 수 있고, 아래 계단함수는 $b$에서 늘 $0$입니다. 그런 점들은 7단원의 균등 분할 영 덮개열이 끝없이 여러 번 덮는 영집합 안에 듭니다. 그래서 그 영 덮개열로 만든 지우는 열을 끼워 넣으면 $\hat{f}$의 표현이 됩니다. 이 모든 것이 $f$만으로 정해지므로, 리만 적분가능한 함수가 끝없이 많이 주어져도 표현을 하나씩 고를 필요가 없습니다.

## 증명

:::idea
아래 계단함수의 차들을 더한 급수는 모든 점에서 절대수렴하여 $F$를 나타내고, 그 적분의 합은 하합의 극한인 리만 적분이다. $F$와 $\hat{f}$가 다른 점은 균등 분할 영 덮개열의 상극한 안에 있으므로 지우는 열을 끼워 넣는다.
:::

:::hint
$n \ge 2$이면 $s_n - s_{n-1} \ge 0$이므로 차들의 절댓값의 합은 망원 합이 된다.
:::

:::proof
아래에서 "판정 항목"은 [[riemann-lebesgue-criterion|리만 적분가능성의 르베그 판정]], "앞 항목"은 [[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]], "계단함수 항목"은 [[step-function|계단함수와 그 적분]]의 번호이다. $f$는 리만 적분가능하므로 [[riemann-integral|리만 적분]]의 정의에 의해 유계이고, $[a, b]$의 모든 $x$에서 $|f(x)| \le B$인 실수 $B$가 있다. 이 $B$는 증명 안에서만 쓰는 수이고, 아래에서 정하는 대상은 $B$에 기대지 않는다. 판정 항목의 (2)의 (i)에 의해 모든 $s_n$은 계단함수이고, 따라서 $n \ge 2$인 $s_n - s_{n-1}$도 계단함수이다(계단함수 항목의 (5)).

**(1)** 판정 항목의 (2)의 (v)에 의해 $k \le n$이면 모든 $x$에서 $s_k(x) \le s_n(x)$이고, 그 (2)의 (iii)에 의해 $|s_n(x)| \le B$이다. [[monotone-convergence-theorem|단조수렴정리]]의 (1)에 의해 $(s_n(x))$는 수렴하고, 그 극한은 [[limit-is-unique|극한의 유일성]]에 의해 하나이므로 $F$는 [[real-valued-function]]의 (1)로 정해진다. $\Sigma_f$의 $n$번째 항을 $\sigma_n$이라 하자($\sigma_1 = s_1$, $n \ge 2$이면 $\sigma_n = s_n - s_{n-1}$).

(i) *부분합.* [[telescoping-sum|망원 합]]의 (1)에 의해 모든 $x$와 $n$에서 $\sum_{k=1}^{n} \sigma_k(x) = s_n(x)$이다($c_0 = 0$, $c_k = s_k(x)$로 두고 $\sigma_1(x) = s_1(x) - 0$). $k \ge 2$이면 $\sigma_k(x) \ge 0$이므로 $|\sigma_k(x)| = \sigma_k(x)$이고([[absolute-value]]의 (1)),
$$
\begin{aligned} \sum_{k=1}^{n} |\sigma_k(x)| &= |s_1(x)| + s_n(x) - s_1(x) \\ &\le 3B \end{aligned}
$$
이다([[finite-sum-of-reals|유한 합]]과 망원 합의 (1)). 항이 $0$ 이상이므로 [[comparison-test|비교 판정법]]의 (1)에 의해 모든 $x$에서 $\Sigma_f$의 급수는 절대수렴하고, 부분합이 $s_n(x)$이므로 그 합은 $F(x)$이다. 그래서 조건 B가 성립한다.

*조건 A와 적분.* 계단함수 항목의 (6)의 (i), (ii)에 의해 $k \ge 2$이면 $\int_{\mathbb{R}} |\sigma_k| = \int_{\mathbb{R}} s_k - \int_{\mathbb{R}} s_{k-1}$이므로, 망원 합의 (1)에 의해
$$
\begin{aligned} \sum_{k=1}^{n} \int_{\mathbb{R}} |\sigma_k| &= \int_{\mathbb{R}} |s_1| + \int_{\mathbb{R}} s_n - \int_{\mathbb{R}} s_1, \\ \sum_{k=1}^{n} \int_{\mathbb{R}} \sigma_k &= \int_{\mathbb{R}} s_n \end{aligned}
$$
이다. 판정 항목의 (2)의 (iv)와 리만 적분의 (1)에 의해 $\int_{\mathbb{R}} s_n = L(P_{2^n}, f) \le \int_a^b f$이므로 첫째 합은 위로 유계이고, 비교 판정법의 (1)에 의해 조건 A가 성립한다. 따라서 $\Sigma_f$는 $F$의 표현이고, 판정 항목의 (2)의 (vi)에 의해 $\int_{\mathbb{R}} F = \lim_{n \to \infty} \int_{\mathbb{R}} s_n = \int_a^b f$이다.

(ii) $x \notin \limsup_{l \to \infty} [c_l, d_l)$이라 하자. $x \in [a, b]$이면 판정 항목의 (3)의 (iii)에 의해 $(s_n(x))$는 $f(x) = \hat{f}(x)$로 수렴하므로 $F(x) = \hat{f}(x)$이다. $x \notin [a, b]$이면 $x < a$이거나 $b < x$이므로 판정 항목의 (2)의 (i)에 의해 모든 $n$에서 $s_n(x) = 0$이고, $F(x) = 0 = \hat{f}(x)$이다.

**(2)** $Z = \limsup_{l \to \infty} [c_l, d_l)$로 두자. 판정 항목의 (3)의 (i)에 의해 모든 $l$에서 $c_l \le d_l$이고 총길이는 $2$ 이하이므로, $\bigl((c_l), (d_l)\bigr)$은 $Z$의 영 덮개열이다([[null-set-of-reals|ℝ 의 영집합]]의 정의). (1)의 (ii)에 의해 $Z$ 밖에서 $\hat{f} = F$이므로, [[null-functions-and-almost-everywhere|거의 영인 함수와 거의 어디서나]]의 (1)의 (ii)를 $F$, 그 표현 $\Sigma_f$, $g = \hat{f}$에 쓰면 $\operatorname{alt}(\Sigma_f, \Xi_f)$는 $\hat{f}$의 표현이고 $\int_{\mathbb{R}} \hat{f} = \int_{\mathbb{R}} F = \int_a^b f$이다. 앞 항목의 "구간 위의 함수"의 정의에 의해 이것이 결론이다. 판정 항목의 정의와 (3)의 (i)에 의해 $s_n$, $c_l$, $d_l$은 $a$, $b$, $f$만으로 정해지므로 표준 표현도 그렇다.

**(3)** 각 $n$에서 (2)를 $f_n$에 쓴다. 표준 표현은 $a$, $b$와 그 함수만으로 정해지므로 $n$마다 하나로 정해진다.

**(4)** 거의 영인 함수와 거의 어디서나의 (8)이다. $\blacksquare$
:::

## 예시와 반례

:::example[항등함수의 아래 계단함수와 끝점]
$[0, 1]$ 위의 $f(x) = x$를 봅시다. $2^n$등분의 $i$번째 닫힌 작은 구간에서 $f$의 하한은 왼쪽 끝 $(i - 1)/2^n$이므로 $s_n$은 $[(i - 1)/2^n, i/2^n)$에서 값 $(i - 1)/2^n$을 갖고, $\int_{\mathbb{R}} s_n = \sum_{i=1}^{2^n} (i - 1)/4^n = (2^n - 1)/2^{n+1}$이 $1/2$로 갑니다. $0 \le x < 1$이면 $x$를 품는 칸의 왼쪽 끝은 $x$와 $1/2^n$보다 가까우므로 $s_n(x) \to x$입니다. 그런데 $x = 1$에서는 모든 $s_n(1) = 0$이어서 $F(1) = 0 \ne 1 = \hat{f}(1)$입니다. 이 점은 (1)의 (ii)의 상극한에 드는 점(판정 항목의 $Z_f$의 원소 $b$)이고, 지우는 열을 끼워 넣은 표준 표현에서는 그 점의 급수가 절대수렴하지 않습니다. 결과는 $\int_{[0, 1]} f = 1/2 = \int_0^1 f$입니다.
:::

:::example[디리클레 함수의 아래·위 계단함수]
$[0, 1]$ 위의 디리클레 함수 $D$는 리만 적분가능하지 않으므로 표준 표현이 정의되지 않습니다. 그래도 아래 계단함수와 위 계단함수는 정해집니다. 모든 닫힌 작은 구간에 유리수와 무리수가 있으므로 $s_n$은 영함수이고 $t_n = \chi_{[0, 1)}$입니다. 두 적분 $0$과 $1$이 서로 다른 수로 가는 것이 리만 적분가능하지 않다는 것입니다. 한편 (4)에 의해 $D$는 $[0, 1]$에서 르베그 적분가능하고 $\int_{[0, 1]} D = 0$으로, 아래 계단함수의 적분의 극한과 같습니다.
:::

## 확인 질문

:::check[[a, b] 에서 리만 적분가능한 f 와 g 가 [a, b] 의 모든 점에서 f(x) ≤ g(x) 를 만족하면, 표준 표현을 써서 ∫_a^b f ≤ ∫_a^b g 를 얻을 수 있는가?]
얻을 수 있습니다. $0$으로 늘인 함수는 모든 실수에서 $\hat{f}(x) \le \hat{g}(x)$를 만족하고, (2)에 의해 둘 다 르베그 적분가능하므로 [[properties-of-the-lebesgue-integral|르베그 적분의 선형성·단조성·절댓값]]의 (2)에 의해 $\int_{\mathbb{R}} \hat{f} \le \int_{\mathbb{R}} \hat{g}$입니다. (2)의 등식으로 바꾸면 $\int_a^b f \le \int_a^b g$입니다. 리만 적분의 단조성을 다른 길로 다시 얻은 것입니다.
:::

:::check[상수함수 c 의 Σ_f 와 F 는?]
$[a, b]$ 위의 값이 $c$인 상수함수를 $f$라 하면 모든 닫힌 작은 구간에서 하한이 $c$이므로 모든 $n$에서 $s_n = c\,\chi_{[a, b)}$입니다. 그래서 $\Sigma_f$는 첫째 항이 $c\,\chi_{[a, b)}$이고 나머지가 모두 영함수인 열이고, $F = c\,\chi_{[a, b)}$입니다. $F$는 $b$에서 $0$이므로 $c \ne 0$이면 $\hat{f}(b) = c$와 다릅니다. 적분은 $\int_{\mathbb{R}} F = c(b - a) = \int_a^b c\,dx$입니다.
:::
