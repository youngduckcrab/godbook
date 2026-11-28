---
title: 길이의 가산 가법성
title_en: Countable Additivity of Length
aliases: [길이의 가산 준가법성, 반열린 구간의 가산 분할, 열린구간 덮개의 길이, countable additivity of length, countable subadditivity of length]
kind: theorem
field: measure-theory
msc: ["28A12", "26A42"]
level: undergrad
summary: 닫힌구간을 덮는 열린구간열의 길이의 합은 그 닫힌구간의 길이 이상이고, [c, d) 를 덮는 [a, b) 꼴 집합열의 길이의 합은 d − c 이상이며, [a, b) 를 서로소인 [a, b) 꼴 집합열로 나누면 길이의 합이 b − a 라는 것을 하이네–보렐 정리로 증명한다.
requires: [set, subset, family-of-sets, function, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, power-of-a-real-number, geometric-sequence-limit, geometric-series, sequence, finite-sum-of-reals, standard-topology-on-reals, open-and-closed-sets-of-reals, compact-space, closed-interval-is-compact, sequence-of-sets, extended-nonnegative-reals, series-in-extended-nonnegative-reals, step-function]
proof: full
sources:
  - ref: blackstone-mikusinski-daniell-integral
    loc: 2절 Daniell Spaces, Lemma 2.5 (p.2–3)
    checked: original
    note: "출처 Lemma 2.5(p.2–3)는 ℝ^N 의 반열린 상자 I 가 서로소인 반열린 상자들의 열의 합집합이면 부피의 합이 I 의 부피라는 것이고, 이 항목의 (3)은 N = 1 판이다. 출처는 '합 ≤ µ(I)' 를 'Clearly' 라고만 적는다. 이 항목은 그것을 step-function 의 (9)의 (ii)로 보인다. 출처의 반대 방향은 귀류법으로, 상자마다 'There exist numbers ε_n > 0' 로 넓힐 양을 잡고 콤팩트 상자 J 를 잡은 뒤 콤팩트성으로 'for some m ∈ N' 개가 J 를 덮는다고 한다. 이 항목은 넓힐 양을 식 ε(1/2)^{n+1} 로, 닫힌구간을 식 [c, d − ε/2] 로 정하고, 유한 부분족을 'n ≤ m 인 것들' 로 바꾸는 단계를 compact-space 의 (1)의 유한 합집합의 보조정리로 쓴다((1)의 증명). 출처는 상자 I_n 을 반지름 ε_n 인 열린 공 B_{ε_n} 만큼 넓힌 열린집합 I_n + B_{ε_n} 을 쓰고, 이 항목은 열린구간을 쓴다. 이 항목의 (1)과 (2)는 출처 Lemma 2.5 의 증명 안의 두 단계(콤팩트성으로 유한 개를 남기는 것과 넓혀서 덮는 것)에 해당한다."
  - ref: lebl-basic-analysis-2
    loc: 10.3.2 소절, Example 10.3.6 (p.111–112); 10.3.4 소절, Exercise 10.3.4, 10.3.16 (p.115–116)
    checked: original
    note: "출처 Example 10.3.6(p.111–112)은 a < b 이면 [a, b] 의 외측도가 b − a 라는 것이고, 그 어려운 쪽의 증명은 열린구간들이 [a, b] 를 덮을 때 콤팩트성으로 유한 개를 남기고, 다른 구간에 포함된 구간을 버린 뒤 왼쪽 끝점의 크기순으로 늘어놓아 길이의 합이 b − a 보다 크다는 것을 보인다. 이 항목의 (1)은 그 부등식이다. 유한 개를 남긴 뒤의 단계는 버리고 늘어놓는 대신 step-function 의 (9)의 (i)(지시함수의 점마다의 부등식과 적분)로 한다. Exercise 10.3.4(p.115)는 닫힌 직사각형의 외측도가 부피라는 것을, Exercise 10.3.16(p.116)은 서로소인 열린 직사각형 유한 개의 합집합의 외측도가 부피의 합이라는 것을 묻는다."
  - ref: lebl-basic-analysis
    loc: 2.5.1 소절, Example 2.5.4 (p.88); 2.5.7 소절, Exercise 2.5.1, 2.5.3 (p.97); 5.5.2 소절, Exercise 5.5.3 (p.224)
    checked: original
    note: "예시 '반씩 줄어드는 조각으로 나눈 경우'의 끝점 1 − (1/2)^n 은 출처 Example 2.5.4(p.88)가 Σ 1/2^n = 1 을 보이는 데 쓰는 부분합 Σ_{n≤k} 1/2^n = 1 − 1/2^k 과 같은 수이다. 확인 질문 '0 이상 1 미만인 수 전체를 n번째 조각이 1 − 1/n 이상 1 − 1/(n + 1) 미만인 수 전체인 조각들로 나누면 길이의 합은?'의 길이의 합은 출처 Exercise 2.5.3 d)(p.97)와 Exercise 5.5.3(p.224, b 는 'The sum telescopes' 라고 힌트를 준다)의 급수 Σ 1/(n(n + 1)) 이고, 그 부분합 N/(N + 1) 은 출처 Exercise 2.5.1(p.97)의 부분합 s_k = k/(k + 1) 과 같다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(영집합 (6)(i) 의 덮개열 구성 통독, 균등 분할 어림과 (6)(iii) 의 경계값). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$[a, b)$($a \le b$)와 그 길이 $\ell$, 계단함수는 [[step-function|계단함수와 그 적분]]의 것이다. 열린구간과 닫힌구간의 기호는 [[interval]]의 것이고 $a < b$일 때만 쓴다. $\mathbb{R}$에는 보통 위상을 준다([[standard-topology-on-reals]]의 (5)). 실수열은 [[sequence]]의 것이고, 집합열과 그 합집합 $\bigcup_{n=1}^{\infty}$, 서로소인 집합열은 [[sequence-of-sets|집합열]]의 것이며, $[0, \infty]$와 그 원소열의 합 $\sum_{n=1}^{\infty}$은 [[extended-nonnegative-reals]]와 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 것이다. 아래의 합은 모두 $0$ 이상인 실수를 항으로 하는 $[0, \infty]$의 합이다.

1. (닫힌구간을 덮는 열린구간열) $c < d$인 실수 $c$, $d$와, 모든 자연수 $n$에서 $\alpha_n < \beta_n$인 실수열 $(\alpha_n)$, $(\beta_n)$에 대하여 $[c, d] \subseteq \bigcup_{n=1}^{\infty} (\alpha_n, \beta_n)$이면
   $$
   d - c \le \sum_{n=1}^{\infty} (\beta_n - \alpha_n)
   $$
   이다. 또 어떤 자연수 $M$이 있어 $[c, d] \subseteq \bigcup_{n=1}^{M} (\alpha_n, \beta_n)$이고 $d - c \le \sum_{n=1}^{M} (\beta_n - \alpha_n)$이다.
2. (준가법성) $c \le d$인 실수 $c$, $d$와, 모든 자연수 $n$에서 $c_n \le d_n$인 실수열 $(c_n)$, $(d_n)$에 대하여 $[c, d) \subseteq \bigcup_{n=1}^{\infty} [c_n, d_n)$이면
   $$
   \begin{aligned} d - c &\le \sum_{n=1}^{\infty} \ell([c_n, d_n)) \\ &= \sum_{n=1}^{\infty} (d_n - c_n) \end{aligned}
   $$
   이다.
3. (가산 가법성) $a \le b$인 실수 $a$, $b$와, 모든 자연수 $n$에서 $c_n \le d_n$인 실수열 $(c_n)$, $(d_n)$에 대하여, $n$번째 항이 $[c_n, d_n)$인 집합열이 서로소이고 $\bigcup_{n=1}^{\infty} [c_n, d_n) = [a, b)$이면
   $$
   \sum_{n=1}^{\infty} (d_n - c_n) = b - a
   $$
   이다. 따라서 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 (3)에 의해 $n$번째 항이 $d_n - c_n$인 수열의 급수는 수렴하고 그 합이 $b - a$이다.
:::

:::english
The set $[a, b)$ ($a \le b$), its length $\ell$, and step functions are as in the entry on step functions. The symbols for open and closed intervals are as in the entry on intervals and are used only when $a < b$. We give $\mathbb{R}$ the standard topology. Real sequences, sequences of sets with their unions $\bigcup_{n=1}^{\infty}$, pairwise disjoint sequences of sets, and $[0, \infty]$ with sums $\sum_{n=1}^{\infty}$ of its sequences are as in the corresponding entries. All sums below are sums in $[0, \infty]$ of nonnegative real terms.

1. (Sequences of open intervals covering a closed interval) Let $c < d$ be reals and let $(\alpha_n)$, $(\beta_n)$ be real sequences with $\alpha_n < \beta_n$ for every natural number $n$. If $[c, d] \subseteq \bigcup_{n=1}^{\infty} (\alpha_n, \beta_n)$, then
   $$
   d - c \le \sum_{n=1}^{\infty} (\beta_n - \alpha_n).
   $$
   Moreover, there is a natural number $M$ with $[c, d] \subseteq \bigcup_{n=1}^{M} (\alpha_n, \beta_n)$ and $d - c \le \sum_{n=1}^{M} (\beta_n - \alpha_n)$.
2. (Subadditivity) Let $c \le d$ be reals and let $(c_n)$, $(d_n)$ be real sequences with $c_n \le d_n$ for every natural number $n$. If $[c, d) \subseteq \bigcup_{n=1}^{\infty} [c_n, d_n)$, then
   $$
   \begin{aligned} d - c &\le \sum_{n=1}^{\infty} \ell([c_n, d_n)) \\ &= \sum_{n=1}^{\infty} (d_n - c_n). \end{aligned}
   $$
3. (Countable additivity) Let $a \le b$ be reals and let $(c_n)$, $(d_n)$ be real sequences with $c_n \le d_n$ for every natural number $n$. If the sequence of sets whose $n$-th term is $[c_n, d_n)$ is pairwise disjoint and $\bigcup_{n=1}^{\infty} [c_n, d_n) = [a, b)$, then
   $$
   \sum_{n=1}^{\infty} (d_n - c_n) = b - a.
   $$
   Hence, by item (3) of the entry on sums in the extended reals, the series of the sequence whose $n$-th term is $d_n - c_n$ converges and its sum is $b - a$.
:::

## 직관

길이 $1$인 막대를 끝없이 많은 토막으로 잘라도, 토막의 길이를 모두 더하면 다시 $1$이어야 합니다. 토막이 유한 개이면 [[step-function|계단함수]]의 적분으로 바로 셀 수 있지만, 끝없이 많으면 "모든 토막을 늘어놓고 재 본다"는 일을 할 수 없습니다. 토막의 길이의 합이 원래 길이 이하라는 것은 유한 개씩 끊어 보면 바로 나옵니다. 어려운 쪽은 합이 원래 길이보다 작아질 수 없다는 것입니다.

이 항목은 그 어려운 쪽을 닫힌구간의 콤팩트성, 곧 위상수학 입문의 [[closed-interval-is-compact|하이네–보렐 정리]]로 유한 개의 경우로 줄입니다. 토막 $[c_n, d_n)$을 왼쪽으로 조금씩 넓혀 열린구간으로 만들고, 막대를 오른쪽 끝에서 조금 잘라 닫힌구간으로 만들면, 콤팩트성에 의해 열린구간 유한 개가 그 닫힌구간을 덮습니다. 넓힌 양의 합과 자른 양을 원하는 만큼 작게 잡을 수 있으므로 부등식이 나옵니다.

조금 넓히는 까닭은 $c_n < d_n$이면 $[c_n, d_n)$이 열린집합이 아니어서([[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합]]의 (3)) 콤팩트성의 정의에 바로 넣을 수 없기 때문입니다. 오른쪽 끝을 조금 자르는 까닭은 하이네–보렐 정리가 닫힌구간에 대한 것이기 때문입니다. 넓힐 양은 $n$번째 토막에 $\varepsilon (1/2)^{n+1}$처럼 식으로 주므로 토막마다 무엇을 고르는 일이 없습니다.

## 증명

:::idea
(1)은 콤팩트성으로 유한 개의 열린구간을 남긴 뒤 계단함수의 유한 덮개 부등식을 쓴다. (2)는 각 $[c_n, d_n)$을 왼쪽으로 $\varepsilon (1/2)^{n+1}$만큼 넓힌 열린구간과 $[c, d - \varepsilon/2]$에 (1)을 쓴다. (3)은 유한 개씩의 서로소 부등식과 (2)를 합친다.
:::

:::hint
유한 부분족을 "$n \le M$인 열린구간들"로 바꾸려면, 어떤 $M$에서 $\bigcup_{n=1}^{M}$에 포함되는 집합들의 족이 두 원소의 합집합에 닫혀 있음을 본다.
:::

:::hint
(2)에서 합이 실수 $S$이고 $S < d - c$라고 하면, $\varepsilon = (d - c - S)/2$로 두고 (1)을 쓴다.
:::

:::proof
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이고, "합 항목"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]], "확장된 실수 항목"은 [[extended-nonnegative-reals]]이다.

**(1)** 자연수 $n$마다 $O_n = (\alpha_n, \beta_n)$으로 두고 집합족 $\mathcal{V} = \{O_n : n \in \mathbb{N}\}$을 생각한다([[family-of-sets]]의 식으로 정한 집합족). [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합]]의 (1)과 [[standard-topology-on-reals|실수의 보통 위상]]의 (5)에 의해 각 $O_n$은 보통 위상의 열린집합이다. [[sequence-of-sets|집합열]]의 번호의 집합 위의 합집합의 정의에 의해 $\bigcup \mathcal{V} = \bigcup_{n=1}^{\infty} O_n \supseteq [c, d]$이고, [[closed-interval-is-compact|닫힌구간의 콤팩트성]]의 (1)에 의해 $[c, d]$는 콤팩트 부분집합이므로, [[compact-space]]의 (3)에 의해 $[c, d] \subseteq \bigcup \mathcal{F}$인 $\mathcal{V}$의 유한 부분족 $\mathcal{F}$가 있다.

$\mathbb{R}$의 부분집합 $S$ 가운데 "어떤 자연수 $M$이 있어 $S \subseteq \bigcup_{n=1}^{M} O_n$"인 것 전체의 집합족을 $\mathcal{K}$라 하자. $\emptyset \in \mathcal{K}$이다($M = 1$). $K, L \in \mathcal{K}$이고 $K \subseteq \bigcup_{n=1}^{M_1} O_n$, $L \subseteq \bigcup_{n=1}^{M_2} O_n$이면 $M = \max\{M_1, M_2\}$에 대하여 집합열의 (2)에 의해 두 합집합이 모두 $\bigcup_{n=1}^{M} O_n$의 부분집합이므로 $K \cup L \in \mathcal{K}$이다. 또 각 $O_n$은 $\bigcup_{n'=1}^{n} O_{n'}$의 부분집합이므로 $\mathcal{F} \subseteq \mathcal{V} \subseteq \mathcal{K}$이다. compact-space 의 (1)의 (i)에 의해 $\bigcup \mathcal{F} \in \mathcal{K}$이므로, 어떤 $M$이 있어 $[c, d] \subseteq \bigcup \mathcal{F} \subseteq \bigcup_{n=1}^{M} O_n$이다.

이제 $[c, d)$의 원소 $x$는 어떤 $n \le M$의 $O_n$에 속하고, $O_n \subseteq [\alpha_n, \beta_n)$이므로 $x \in [\alpha_n, \beta_n)$이다. [[step-function|계단함수]]의 (9)의 (i)에 의해 $d - c \le \sum_{n=1}^{M} (\beta_n - \alpha_n)$이다. 합 항목의 (2)에 의해 이 부분합은 $\sum_{n=1}^{\infty} (\beta_n - \alpha_n)$ 이하이고, 확장된 실수 항목의 (2)의 (i)에 의해 실수의 부등식과 $[0, \infty]$의 부등식은 같은 것이므로 결론이 나온다.

**(2)** $S = \sum_{n=1}^{\infty} (d_n - c_n)$으로 두자. $c = d$이면 확장된 실수 항목의 (2)의 (iv)에 의해 $0 \le S$이다. $S = \infty$이면 같은 (iv)에 의해 결론이 성립한다. 이제 $c < d$이고 $S$가 실수라 하고, $S < d - c$라 가정해 모순을 끌어낸다. $\varepsilon = (d - c - S)/2$로 두면 $0 \le S$이므로 순서 성질 (8)에 의해 $0 < \varepsilon \le (d - c)/2 < d - c$이다. 자연수 $n$마다
$$
\begin{gathered} \eta_n = \varepsilon \left(\tfrac{1}{2}\right)^{n+1}, \\ \alpha_n = c_n - \eta_n, \qquad \beta_n = d_n \end{gathered}
$$
으로 두면([[sequence]]의 (1)로 정한 수열) [[power-of-a-real-number|실수의 거듭제곱]]에 의해 $\eta_n > 0$이므로 $\alpha_n < c_n \le d_n = \beta_n$이고 $[c_n, d_n) \subseteq (\alpha_n, \beta_n)$이다. $d' = d - \varepsilon/2$로 두면 $c < d'$이고, $[c, d'] \subseteq [c, d) \subseteq \bigcup_{n=1}^{\infty} [c_n, d_n) \subseteq \bigcup_{n=1}^{\infty} (\alpha_n, \beta_n)$이다(집합열의 (2)). (1)에 의해
$$
\begin{aligned} d - c - \tfrac{\varepsilon}{2} &\le \sum_{n=1}^{\infty} \bigl( (d_n - c_n) + \eta_n \bigr) \\ &= S + \sum_{n=1}^{\infty} \eta_n \end{aligned}
$$
이다. 등식은 합 항목의 (5)이다. $\eta_n = (\varepsilon/4)(1/2)^{n-1}$이므로 마지막 합은 [[geometric-series|등비급수]]의 (2)와 합 항목의 (3)의 (i)에 의해 $(\varepsilon/4)/(1 - 1/2) = \varepsilon/2$이다. 따라서 $d - c - \varepsilon/2 \le S + \varepsilon/2$, 곧 $d - c - S \le \varepsilon = (d - c - S)/2$이다. $d - c - S > 0$이므로 이것은 순서 성질 (8)과 모순이다. 따라서 $d - c \le S$이다. 마지막으로 $\ell([c_n, d_n)) = d_n - c_n$은 [[step-function|계단함수]]의 길이의 정의이다.

**(3)** 먼저 $\sum_{n=1}^{\infty} (d_n - c_n) \le b - a$이다. 자연수 $N$에 대하여 $n \le N$인 $[c_n, d_n)$은 서로소이고 집합열의 (2)에 의해 모두 $[a, b)$의 부분집합이므로, 계단함수의 (9)의 (ii)에 의해 $\sum_{n=1}^{N} (d_n - c_n) \le b - a$이다. 곧 $b - a$는 부분합 전체의 집합의 상계이므로, 합의 정의(부분합의 상한)와 확장된 실수 항목의 상한의 정의에 의해 $\sum_{n=1}^{\infty} (d_n - c_n) \le b - a$이다. 거꾸로 $[a, b) \subseteq \bigcup_{n=1}^{\infty} [c_n, d_n)$이므로 (2)에 의해 $b - a \le \sum_{n=1}^{\infty} (d_n - c_n)$이다. 확장된 실수 항목의 (2)의 (ii)에 의해 두 값이 같다. 마지막 문장은 합 항목의 (3)의 (i)이다. $\blacksquare$
:::

## 예시와 반례

:::example[반씩 줄어드는 조각으로 나눈 경우]
$[0, 1)$을 $c_n = 1 - (1/2)^{n-1}$, $d_n = 1 - (1/2)^n$으로 정한 조각 $[c_n, d_n)$으로 나눕니다. $n = 1$이면 $[0, 1/2)$, $n = 2$이면 $[1/2, 3/4)$, $n = 3$이면 $[3/4, 7/8)$입니다. $d_n = c_{n+1}$이고 $c_n$은 $n$에 따라 증가하므로 조각들은 서로소입니다. $x$가 $n$번째 조각에 드는 것은 정확히 $(1/2)^n < 1 - x \le (1/2)^{n-1}$일 때입니다. $0 \le x < 1$이면 $0 < 1 - x \le 1$이고, $(1/2)^n$은 $0$으로 수렴하므로([[geometric-sequence-limit|등비수열의 극한]]) $(1/2)^n < 1 - x$인 자연수 $n$이 있습니다. 그런 $n$ 가운데 가장 작은 것([[well-ordering-principle|정렬 원리]])을 잡으면, $n = 1$일 때는 $1 - x \le 1 = (1/2)^0$이고 $n \ge 2$일 때는 $n - 1$이 조건을 만족하지 않으므로 $1 - x \le (1/2)^{n-1}$이어서 $x$는 $n$번째 조각에 듭니다. 길이는 $d_n - c_n = (1/2)^{n-1} - (1/2)^n = (1/2)^n$이고, 등비급수의 합은 $(1/2)/(1 - 1/2) = 1$입니다. (3)이 말하는 대로 $1 - 0$과 같습니다.
:::

:::counterexample[서로소가 아닌 열에서 합이 길이보다 큰 경우]
$[0, 1)$을 $[c_1, d_1) = [0, 1)$, $[c_2, d_2) = [0, 1)$, $n \ge 3$에서 $[c_n, d_n) = [0, 0) = \emptyset$인 열로 덮으면 합집합은 $[0, 1)$이지만 길이의 합은 $2$입니다. (2)의 부등식 $1 \le 2$는 성립하고, (3)의 등식은 서로소라는 가정이 깨져 성립하지 않습니다.
:::

:::counterexample[유한 개로 줄일 수 없는 덮개의 예]
닫힌구간 $[0, 1]$을 $[c_n, d_n)$ 꼴 집합들의 열로 덮었을 때, 그 가운데 유한 개로는 덮이지 않을 수 있습니다. 예를 들어 $c_1 = 1$, $d_1 = 2$이고 $n \ge 2$에서 $c_n = 1 - (1/2)^{n-2}$, $d_n = 1 - (1/2)^{n-1}$이면 이 열은 $[0, 1]$을 덮지만, $n \le M$인 것들의 합집합은 $1 - (1/2)^{M-1}$ 이상이고 $1$ 미만인 점을 놓칩니다. 그래서 (2)의 증명은 각 조각을 열린구간으로 넓힌 뒤에 콤팩트성을 씁니다.
:::

## 확인 질문

:::check[0 이상 1 미만인 수 전체를 n번째 조각이 1 − 1/n 이상 1 − 1/(n + 1) 미만인 수 전체인 조각들로 나누면 길이의 합은?]
$n$번째 조각은 $[1 - 1/n, 1 - 1/(n + 1))$입니다. $n$번째 조각의 길이는 $(1 - 1/(n + 1)) - (1 - 1/n) = 1/n - 1/(n + 1)$입니다. $N$번째 부분합은 망원 합으로 $1 - 1/(N + 1)$이고, 이 부분합의 상한은 $1$입니다. (3)이 말하는 대로 $[0, 1)$의 길이와 같습니다. 첫째 조각은 $[0, 1/2)$입니다.
:::

:::check[(1)에서 $[0, 1]$을 첫째 항 $(-1/4, 1/2)$, 둘째 항 $(1/4, 5/4)$와 셋째 항부터 $(0, (1/2)^n)$인 열린구간열로 덮으면 $M$과 부등식은?]
첫째와 둘째 항의 합집합은 $-1/4 < x < 5/4$인 $x$ 전체이므로 $[0, 1]$을 덮고, $M = 2$로 둘 수 있습니다. 그때 $\sum_{n=1}^{2} (\beta_n - \alpha_n) = 3/4 + 1 = 7/4 \ge 1 = 1 - 0$입니다. 전체의 합은 $7/4 + \sum_{n=3}^{\infty} (1/2)^n = 7/4 + 1/4 = 2$이고 역시 $1$ 이상입니다. $M = 1$은 $1/2$을 놓치므로 될 수 없습니다.
:::
