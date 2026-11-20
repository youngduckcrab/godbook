---
title: 디리클레 함수의 하적분과 상적분
title_en: Lower and Upper Integrals of the Dirichlet Function
aliases: [디리클레 함수, 무리수의 조밀성, 무리수는 조밀하다, Dirichlet function, density of the irrationals, irrationals are dense]
kind: proposition
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: 두 실수 사이에는 언제나 무리수가 있다. 이것을 써서, 유리수에서 1, 무리수에서 0 인 [a, b] 위의 디리클레 함수는 모든 작은 구간에서 하한 0, 상한 1 을 가지므로 모든 분할에서 하합이 0, 상합이 b − a 이고, 하적분 0 과 상적분 b − a 가 다르다는 것을 보인다.
requires: [set, subset, proof-by-contradiction, rational-and-irrational-numbers, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, rationals-are-dense, square-root-exists, real-valued-function, bounded-function, interval, finite-sum-of-reals, linearity-and-order-of-finite-sums, partition-of-an-interval, darboux-sums, lower-and-upper-integrals]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.1절(5.1.1 소절) Example 5.1.4 (p.183); 1.2절(1.2.5 소절) 연습문제 1.2.8 (p.34); 3.2절(3.2.3 소절) Example 3.2.11 (p.126); 6.2절(6.2.2 소절) Example 6.2.6 (p.238)
    checked: original
    note: "출처의 Example 5.1.4(p.183)는 [0, 1] 위에서 x ∈ ℚ 이면 1, x ∉ ℚ 이면 0 인 디리클레 함수의 하적분이 0, 상적분이 1 이라고 하고, 그 까닭으로 모든 분할과 모든 i 에서 m_i = 0, M_i = 1 이라고 적은 뒤 L(P, f) = 0, U(P, f) = Σ Δx_i = 1 을 계산한다. 출처는 그 자리에서 왜 m_i = 0, M_i = 1 인지(모든 작은 구간에 유리수와 무리수가 있다는 것)를 적지 않는다. 이 항목은 출처의 [0, 1] 대신 a < b 인 아무 [a, b] 에서 진술하고, 그 까닭을 (1)과 (2)로 증명한다. (1)의 무리수의 조밀성은 출처 연습문제 1.2.8(1.2.5 소절, p.34)이고, 출처의 힌트는 x/√2 와 y/√2 사이의 유리수를 쓰라는 것(0 을 피해서)이다. 이 항목은 x − √2 와 y − √2 사이의 유리수 r 로 r + √2 를 잡는다. 같은 함수는 출처 Example 3.2.11(3.2.3 소절, p.126)에서 모든 점에서 불연속인 함수로, Example 6.2.6(6.2.2 소절, p.238)에서 리만 적분가능하지 않은 함수로 나온다. 예시 '구간 [2, 5] 에서'는 출처의 Example 5.1.4 를 다른 구간에서 계산한 것으로 같은 발상이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 틀린 예시 논증 1건과 출처 메모 4곳, 등호를 가리는 말을 고쳤다."
added: 2026-11-20
---

:::statement
유리수, 무리수, $\mathbb{Q}$는 [[rational-and-irrational-numbers|유리수와 무리수]]의 것이고, $\sqrt{2}$는 [[square-root-exists]]의 것이다. 다르부 합과 $m_i$, $M_i$는 [[darboux-sums]]의 것이고, 하적분과 상적분은 [[lower-and-upper-integrals]]의 것이다. 아래에서 $a$, $b$는 $a < b$인 실수이다.

**디리클레 함수.** 각 실수 $x$는 유리수이거나 무리수이고 둘 다는 아니다. $[a, b]$의 각 원소 $x$에 대하여 $x$가 유리수이면 $D(x) = 1$, 무리수이면 $D(x) = 0$으로 정한 함수 $D : [a, b] \to \mathbb{R}$([[real-valued-function]]의 (1))를 $[a, b]$ 위의 **디리클레 함수**(Dirichlet function)라 한다.

다음이 성립한다.

1. (무리수의 조밀성) 실수 $x$, $y$가 $x < y$이면 $x < z < y$인 무리수 $z$가 있다.
2. (작은 구간마다) $c < d$이고 $[c, d] \subseteq [a, b]$이면 $[c, d]$에는 유리수와 무리수가 모두 있고, $D([c, d]) = \{0, 1\}$이며 $\inf D([c, d]) = 0$, $\sup D([c, d]) = 1$이다. $D$는 유계이다.
3. (다르부 합) $[a, b]$의 모든 분할 $P$에서 모든 $i$에 대해 $m_i = 0$, $M_i = 1$이고, $L(P, D) = 0$, $U(P, D) = b - a$이다.
4. (하적분과 상적분) $\underline{\int_a^b} D = 0$이고 $\overline{\int_a^b} D = b - a$이다. 특히 $\underline{\int_a^b} D < \overline{\int_a^b} D$이다.
:::

:::english
Rational numbers, irrational numbers, and $\mathbb{Q}$ are those of the entry on rational and irrational numbers, and $\sqrt{2}$ is that of the entry on the existence of square roots. Darboux sums and $m_i$, $M_i$ are those of the entry on Darboux sums, and lower and upper integrals are those of the entry on lower and upper integrals. Below, $a$ and $b$ are real numbers with $a < b$.

**Dirichlet function.** Each real number $x$ is rational or irrational, and not both. The function $D : [a, b] \to \mathbb{R}$ defined, for each element $x$ of $[a, b]$, by $D(x) = 1$ if $x$ is rational and $D(x) = 0$ if $x$ is irrational (item (1) of the entry on real-valued functions) is called the **Dirichlet function** on $[a, b]$.

The following hold.

1. (Density of the irrationals) If real numbers $x$, $y$ satisfy $x < y$, then there is an irrational number $z$ with $x < z < y$.
2. (On each subinterval) If $c < d$ and $[c, d] \subseteq [a, b]$, then $[c, d]$ contains both a rational number and an irrational number, $D([c, d]) = \{0, 1\}$, $\inf D([c, d]) = 0$, and $\sup D([c, d]) = 1$. The function $D$ is bounded.
3. (Darboux sums) For every partition $P$ of $[a, b]$ and every $i$, $m_i = 0$ and $M_i = 1$, and $L(P, D) = 0$, $U(P, D) = b - a$.
4. (Lower and upper integrals) $\underline{\int_a^b} D = 0$ and $\overline{\int_a^b} D = b - a$. In particular, $\underline{\int_a^b} D < \overline{\int_a^b} D$.
:::

## 직관

유리수와 무리수는 수직선 위에 빽빽하게 섞여 있어서, 아무리 짧은 구간에도 둘 다 들어 있습니다((1), (2)). 그래서 디리클레 함수는 어느 작은 구간에서나 $0$과 $1$을 둘 다 값으로 갖고, 바닥은 언제나 $0$, 천장은 언제나 $1$입니다. 분할을 아무리 잘게 해도 그래프 아래로 들어가는 직사각형은 높이가 $0$이고 그래프를 덮는 직사각형은 높이가 $1$이어서, 아래에서의 어림 $0$과 위에서의 어림 $b - a$가 끝내 만나지 않습니다.

무리수가 두 수 사이에 있다는 것은 유리수의 조밀성을 $\sqrt{2}$만큼 옮겨서 얻습니다. $x - \sqrt{2}$와 $y - \sqrt{2}$ 사이의 유리수 $r$을 잡으면 $r + \sqrt{2}$가 $x$와 $y$ 사이에 있고, 유리수에 무리수를 더한 수는 무리수입니다.

## 증명

:::idea
(1)은 유리수의 조밀성과 "$\sqrt{2}$가 무리수"에서, (2)는 (1)과 유리수의 조밀성에서 나온다. (3)은 하합의 모든 항이 $0$이고 상합의 항이 길이 자체라는 것, (4)는 하합과 상합의 집합이 원소 하나뿐이라는 것이다.
:::

:::hint
(1): $z = r + \sqrt{2}$가 유리수라면 $\sqrt{2} = z - r$이 유리수가 된다.
:::

:::proof
실수의 순서는 [[order-properties-of-reals]]로 다룬다. "다르부 ($n$)"은 [[darboux-sums]]의 번호이다.

**디리클레 함수가 정해진다는 것.** [[rational-and-irrational-numbers|유리수와 무리수]]의 정의에 의해 무리수는 유리수가 아닌 실수이므로, 각 실수는 유리수이거나 무리수이고 둘 다는 아니다. 따라서 $[a, b]$의 각 원소가 정확히 한 경우에 들어 [[real-valued-function]]의 (1)로 $D$가 정해진다.

**1의 증명.** [[order-properties-of-reals]]의 (2)의 (ii)에 의해 $x - \sqrt{2} < y - \sqrt{2}$이고, [[rationals-are-dense]]의 (2)에 의해 $x - \sqrt{2} < r < y - \sqrt{2}$인 유리수 $r$이 있다. $z = r + \sqrt{2}$로 두면 같은 (2)의 (ii)에 의해 $x < z < y$이다. $z$가 유리수라고 하자. 그러면 [[rationals-are-dense]]의 (1)에 의해 $z - r = \sqrt{2}$는 유리수인데, 이는 [[square-root-exists]]의 (3)과 맞지 않는다. 따라서 $z$는 무리수이다.

**2의 증명.** $c < d$이므로 [[rationals-are-dense]]의 (2)에 의해 $c < r < d$인 유리수 $r$이 있고, (1)에 의해 $c < z < d$인 무리수 $z$가 있다. $r$, $z$는 $[c, d]$의 원소이므로 $D(r) = 1$, $D(z) = 0$은 $D([c, d])$의 원소이다. $D$의 값은 $0$이나 $1$이므로 $D([c, d]) = \{0, 1\}$이다. $0$은 이 집합의 원소이면서 하계이므로 최솟값이고, $1$은 원소이면서 상계이므로 최댓값이며, [[upper-bound-and-supremum]]의 (2)에 의해 $\inf D([c, d]) = 0$, $\sup D([c, d]) = 1$이다. $[a, b]$의 모든 $x$에서 $0 \le D(x) \le 1$이므로 $D$는 위로 유계이고 아래로 유계이며, [[bounded-function]]의 (2)에 의해 유계이다.

**3의 증명.** $P$의 점을 $x_0, \dots, x_n$이라 하면 [[partition-of-an-interval]]의 (2)에 의해 $x_{i-1} < x_i$이고 $[x_{i-1}, x_i] \subseteq [a, b]$이므로, (2)에 의해 $m_i = 0$, $M_i = 1$이다. 따라서 하합의 항은 모두 $0 \cdot \Delta x_i = 0$이고, [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (2)(그 (8)로 범위에서만 정해진 항에 쓴다)에 의해 $L(P, D) = n \cdot 0 = 0$이다. 상합의 항은 $1 \cdot \Delta x_i = \Delta x_i$이므로 [[partition-of-an-interval]]의 (7)에 의해 $U(P, D) = \sum_{i=1}^{n} \Delta x_i = b - a$이다.

**4의 증명.** (3)에 의해 하합의 집합은 $\{0\}$이고 상합의 집합은 $\{b - a\}$이다(분할 $\{a, b\}$가 있으므로 공집합이 아니다). 원소가 하나인 집합에서 그 원소는 최댓값이자 최솟값이므로 [[upper-bound-and-supremum]]의 (2)에 의해 $\underline{\int_a^b} D = 0$, $\overline{\int_a^b} D = b - a$이다. $a < b$이므로 [[order-properties-of-reals]]의 (3)의 (i)에 의해 $0 < b - a$이다. $\blacksquare$
:::

## 예시와 반례

:::example[구간 [2, 5] 에서]
$[2, 5]$ 위의 디리클레 함수와 분할 $P = \{2, 3, 5\}$에서 작은 구간 $[2, 3]$에는 유리수 $5/2$와 무리수 $3/2 + \sqrt{2}$(약 $2.91$)가 있고, $[3, 5]$에는 유리수 $4$와 무리수 $3 + \sqrt{2}$(약 $4.41$)가 있습니다. 두 무리수는 유리수에 $\sqrt{2}$를 더한 수이므로 (1)의 증명과 같은 까닭으로 무리수입니다. 그래서 $m_1 = m_2 = 0$, $M_1 = M_2 = 1$이고 $L(P, D) = 0$, $U(P, D) = 1 + 2 = 3 = 5 - 2$입니다. 하적분 $0$과 상적분 $3$이 다릅니다.

두 수가 각 작은 구간에 있다는 것은 $1/2 < \sqrt{2} < 3/2$에서 나옵니다($3/2 < 2$이므로 $3 + \sqrt{2} < 5$입니다). $(1/2)(1/2) = 1/4 < 2 < 9/4 = (3/2)(3/2)$이므로 [[square-root-exists]]의 (2)에 의해 $\sqrt{1/4} < \sqrt{2} < \sqrt{9/4}$이고, 같은 항목의 (2)의 $\sqrt{aa} = a$에 의해 $1/2 < \sqrt{2} < 3/2$입니다.
:::

:::counterexample[유리수에서만 다른 두 함수]
$[a, b]$ 위의 값이 $0$인 상수함수 $g$는 디리클레 함수와 무리수인 점에서 모두 같습니다. 그래도 $g$의 상적분은 $0$이고([[lower-and-upper-integrals|하적분과 상적분]]의 (6)) 디리클레 함수의 상적분은 $b - a$입니다. 두 함수가 다른 점은 유리수 전체인데, 그 점들이 모든 작은 구간에 들어 있어 모든 상합을 바꾸기 때문입니다. 하적분은 둘 다 $0$입니다.
:::

## 확인 질문

:::check[$[a, b]$ 위에서 $x$가 유리수이면 $0$, 무리수이면 $1$인 함수의 하적분과 상적분은?]
하적분은 $0$, 상적분은 $b - a$입니다. (2)의 논법을 그대로 쓰면 모든 작은 구간에 유리수와 무리수가 있어 값 $0$과 $1$이 모두 나오므로, 작은 구간마다 하한은 $0$, 상한은 $1$입니다. 그래서 하합은 $0$, 상합은 $b - a$로 디리클레 함수와 같습니다.
:::

:::check[디리클레 함수에서 $U(P, D) - L(P, D)$는 분할 $P$에 따라 달라지는가?]
달라지지 않습니다. (3)에 의해 모든 분할에서 $U(P, D) - L(P, D) = (b - a) - 0 = b - a$입니다. 분할을 아무리 잘게 해도 이 차는 줄지 않으므로, 하합과 상합이 서로 다가가지 않습니다.
:::
