---
title: 적분의 구간 덧셈
title_en: Additivity of the Integral
aliases: [적분의 덧셈성, 구간에 대한 적분의 덧셈, 적분가능성의 제한, additivity of the Riemann integral, additive property of the integral, restriction of an integrable function]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "a < b < c 이면 f 가 [a, c] 에서 적분가능한 것은 정확히 [a, b] 와 [b, c] 에서 적분가능할 때이고, 그때 [a, c] 위의 적분은 두 적분의 합이다. 적분가능한 함수는 안쪽의 모든 닫힌구간에서 적분가능하다는 것, 분할의 모든 작은 구간에서 적분가능한 것과 적분이 작은 구간 위의 적분의 합이라는 것, 두 구간에서 따로 준 함수의 적분, 정의역이 더 큰 함수에 쓰는 꼴을 함께 진술한다."
requires: [set, subset, mathematical-induction, rational-and-irrational-numbers, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, upper-bound-and-supremum, real-valued-function, bounded-function, interval, finite-sum-of-reals, linearity-and-order-of-finite-sums, partition-of-an-interval, refinement-of-a-partition, darboux-sums, lower-and-upper-integrals, dirichlet-function, riemann-integral, integrability-criterion, additivity-of-lower-and-upper-integrals]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.2절(5.2.1 소절) Proposition 5.2.2 와 그 증명, Corollary 5.2.3 (p.192); 5.2절(5.2.5 소절) 연습문제 5.2.9 (p.198); 5.2절(5.2.3 소절) Theorem 5.2.9 의 증명 (p.196); 5.2절(5.2.4 소절) Proposition 5.2.10 의 증명 개요 (p.197); 5.1절(5.1.2 소절) Example 5.1.12 (p.186); 5.1절(5.1.4 소절) 연습문제 5.1.5 (p.189); 5.1절(5.1.1 소절) Example 5.1.4 (p.183); 0.3절 Definition 0.3.2 (p.9); 5.2절(5.2.5 소절) 연습문제 5.2.12 앞의 정의 문단, 연습문제 5.2.12, 5.2.13 (p.198–199)
    checked: original
    note: "(1)은 출처의 Proposition 5.2.2(5.2.1 소절, p.192)이고, 증명도 출처와 같이 하적분과 상적분의 덧셈(출처의 Lemma 5.2.1, 이 사이트의 additivity-of-lower-and-upper-integrals)으로 한다. 출처는 ⇒ 방향에서 하적분과 상적분의 등식을 사슬로 이어 그 가운데 부등식이 등식임을 얻고, 각 조각에서 하적분이 상적분 이하라는 것으로 두 조각의 하적분과 상적분이 같다고 결론짓는다. 이 항목은 같은 내용을 그 항목의 (4)(차의 덧셈)와 세 차가 0 이상이라는 것으로 쓴다. ⇐ 방향에서 출처는 'Again it is bounded' 라고 적는다. 이 항목은 두 제한의 유계를 주는 수 가운데 큰 것으로 [a, c] 위의 유계를 보인다. (2)는 출처의 Corollary 5.2.3(5.2.1 소절, p.192)이다. 출처는 [c, d] ⊂ [a, b] 라고 쓰는데 출처의 ⊂ 는 같은 경우를 포함하고(0.3절 Definition 0.3.2, p.9), 증명은 'We leave the details to the reader as an exercise' 라고 적어 연습문제 5.2.9(5.2.5 소절, p.198)로 둔다. 이 항목은 c < d 인 경우를 [c, d] = [a, b] 인 경우와 한쪽 끝만 같은 경우까지 나누어 증명한다. (3)은 출처가 Theorem 5.2.9 의 증명(5.2.3 소절, p.196)에서 'By additivity of the integral (and induction)' 이라고 적고, Proposition 5.2.10 의 증명 개요(5.2.4 소절, p.197)에서 'Using additivity of the integral, split the interval [a, b] into smaller intervals' 라고 적는 일을, 분할의 원소의 개수에 대한 귀납법으로 진술과 증명에 둔 것이다. (4)와 (5)는 (1)과 riemann-integral 의 (4)에서 바로 얻어 뒤 항목이 인용하도록 진술에 두었다. 예시 '1 에서 값이 바뀌는 함수'는 출처 Example 5.1.12(5.1.2 소절, p.186)의 [0, 2] 위에서 1 을 지나며 값이 바뀌는 함수, 연습문제 5.1.5(5.1.4 소절, p.189)의 [−1, 1] 위에서 0 을 지나며 값이 바뀌는 함수와 같은 발상이다(값이 바뀌는 점을 짧은 작은 구간에 가두는 분할). 이 f 는 출처가 연습문제 5.2.12 앞뒤(p.198)에서 정의하는 계단함수(step function) φ_{[0, 1]} + 2φ_{(1, 3]} 이기도 하고, 출처 연습문제 5.2.12, 5.2.13(5.2.5 소절, p.198–199)은 계단함수가 적분가능함을 보이고 그 적분을 구하라는 것으로 같은 결론을 묻는다. 반례 '한쪽 구간에서만 적분가능한 예'의 [0, 1] 쪽 함수는 출처 Example 5.1.4(5.1.1 소절, p.183)의 디리클레 함수이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 경계값에서 거짓이던 설명 문장 4건과 출처 메모의 틀린 서술 1건을 고쳤다."
added: 2026-11-20
---

:::statement
리만 적분가능, $\int_a^b f$, 정의역이 $[a, b]$보다 큰 함수가 "$[a, b]$에서 적분가능하다"는 것과 그 적분은 [[riemann-integral]]의 것이다(그 항목의 (4)). $[a, b]$의 분할과 그 점 $x_0, \dots, x_n$, $i$번째 작은 구간은 [[partition-of-an-interval]]의 것이고, 유한 합과 범위에서만 정해진 항의 합은 [[finite-sum-of-reals]]의 것이다. 제한은 [[real-valued-function]]의 것이다.

1. (세 점) $a < b < c$인 실수 $a$, $b$, $c$와 $f : [a, c] \to \mathbb{R}$에 대하여, $f$가 $[a, c]$에서 적분가능한 것은 정확히 $f$가 $[a, b]$에서 적분가능하고 $[b, c]$에서 적분가능할 때이다. 그때
   $$
   \int_a^c f = \int_a^b f + \int_b^c f
   $$
   이다.
2. (안쪽 닫힌구간) $a < b$이고 $f : [a, b] \to \mathbb{R}$가 적분가능하다고 하자. 실수 $c$, $d$가 $a \le c < d \le b$를 만족하면 $f$는 $[c, d]$에서 적분가능하다. $c = a$이거나 $d = b$인 경우도 포함한다.
3. (분할판) $a < b$이고 $f : [a, b] \to \mathbb{R}$이며 $P$가 점이 $x_0, \dots, x_n$인 $[a, b]$의 분할이라 하자. $f$가 $[a, b]$에서 적분가능한 것은 정확히 $1 \le i \le n$인 모든 정수 $i$에서 $f$가 $i$번째 작은 구간 $[x_{i-1}, x_i]$에서 적분가능할 때이다. 그때 $1 \le i \le n$에서만 정해진 항 $\int_{x_{i-1}}^{x_i} f$의 합에 대하여
   $$
   \int_a^b f = \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} f
   $$
   이다.
4. (두 구간에서 따로 준 함수) $a < b < c$이고 $g_1 : [a, b] \to \mathbb{R}$와 $g_2 : [b, c] \to \mathbb{R}$가 적분가능하다고 하자. $f : [a, c] \to \mathbb{R}$가 $[a, b]$의 모든 $x$에서 $f(x) = g_1(x)$이고 $[b, c]$의 모든 $x$에서 $f(x) = g_2(x)$이면, $f$는 적분가능하고
   $$
   \int_a^c f = \int_a^b g_1 + \int_b^c g_2
   $$
   이다. 이런 $f$가 있는 것은 정확히 $g_1(b) = g_2(b)$일 때이고, 그때 $f$는 $x \le b$이면 $f(x) = g_1(x)$, $b < x$이면 $f(x) = g_2(x)$로 정한 함수이다.
5. (더 큰 정의역) $S \subseteq \mathbb{R}$이고 $h : S \to \mathbb{R}$라 하자. (1)은 $[a, c] \subseteq S$일 때, (2)는 $[a, b] \subseteq S$이고 $h$가 $[a, b]$에서 적분가능할 때, (3)은 $[a, b] \subseteq S$일 때, $f$를 $h$로 바꾸어도 그대로 성립한다. 여기서 적분가능과 적분은 모두 [[riemann-integral]]의 (4)의 뜻이다.
:::

:::english
Riemann integrability, $\int_a^b f$, what it means for a function with a domain larger than $[a, b]$ to be "integrable on $[a, b]$", and its integral are those of the entry on the Riemann integral (its item (4)). Partitions of $[a, b]$, their points $x_0, \dots, x_n$, and the $i$-th subinterval are those of the entry on partitions of an interval, and finite sums and sums of terms defined only on a range are those of the entry on finite sums of reals. Restrictions are those of the entry on real-valued functions.

1. (Three points) For real numbers $a$, $b$, $c$ with $a < b < c$ and $f : [a, c] \to \mathbb{R}$, $f$ is integrable on $[a, c]$ exactly when $f$ is integrable on $[a, b]$ and integrable on $[b, c]$. In that case
   $$
   \int_a^c f = \int_a^b f + \int_b^c f .
   $$
2. (Inner closed intervals) Let $a < b$ and let $f : [a, b] \to \mathbb{R}$ be integrable. If real numbers $c$, $d$ satisfy $a \le c < d \le b$, then $f$ is integrable on $[c, d]$. This includes the cases $c = a$ or $d = b$.
3. (Partition version) Let $a < b$, let $f : [a, b] \to \mathbb{R}$, and let $P$ be a partition of $[a, b]$ with points $x_0, \dots, x_n$. Then $f$ is integrable on $[a, b]$ exactly when $f$ is integrable on the $i$-th subinterval $[x_{i-1}, x_i]$ for every integer $i$ with $1 \le i \le n$. In that case, for the sum of the terms $\int_{x_{i-1}}^{x_i} f$ defined only for $1 \le i \le n$,
   $$
   \int_a^b f = \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} f .
   $$
4. (A function given separately on two intervals) Let $a < b < c$, and let $g_1 : [a, b] \to \mathbb{R}$ and $g_2 : [b, c] \to \mathbb{R}$ be integrable. If $f : [a, c] \to \mathbb{R}$ satisfies $f(x) = g_1(x)$ for all $x$ in $[a, b]$ and $f(x) = g_2(x)$ for all $x$ in $[b, c]$, then $f$ is integrable and
   $$
   \int_a^c f = \int_a^b g_1 + \int_b^c g_2 .
   $$
   Such an $f$ exists exactly when $g_1(b) = g_2(b)$, and then $f$ is the function defined by $f(x) = g_1(x)$ if $x \le b$ and $f(x) = g_2(x)$ if $b < x$.
5. (Larger domain) Let $S \subseteq \mathbb{R}$ and $h : S \to \mathbb{R}$. Then (1) when $[a, c] \subseteq S$, (2) when $[a, b] \subseteq S$ and $h$ is integrable on $[a, b]$, and (3) when $[a, b] \subseteq S$ remain true with $f$ replaced by $h$. Here integrability and integrals are all understood in the sense of item (4) of the entry on the Riemann integral.
:::

## 직관

긴 담장을 칠하는 데 드는 페인트를 기둥 $b$에서 두 구간으로 나누어 재고 더하면, 한 번에 잰 양과 같습니다. 적분도 그렇다는 것이 (1)의 등식입니다. 비유에서 기둥은 두 구간이 함께 갖는 끝점 $b$이고, 칠한 양을 재는 일이 각 구간 위의 적분입니다.

(1)의 핵심은 적분가능성이 나뉘고 합쳐진다는 데 있습니다. [[additivity-of-lower-and-upper-integrals|하적분과 상적분의 구간 덧셈]]의 (4)에 의해 $[a, c]$ 위의 "상적분과 하적분의 차"는 $[a, b]$ 위의 차와 $[b, c]$ 위의 차의 합입니다. 세 차는 모두 $0$ 이상이므로, 큰 구간의 차가 $0$인 것은 정확히 두 작은 구간의 차가 모두 $0$일 때입니다. 차가 $0$이라는 것이 유계인 함수의 적분가능성이었습니다.

(2)는 (1)을 많아야 두 번 써서 적분가능한 함수를 안쪽 닫힌구간으로 줄이는 것이고, (3)은 (1)을 분할의 점마다 되풀이한 것입니다. (3)은 귀납법으로 보이며, 원소를 $n + 2$개 갖는 분할은 마지막 점 바로 앞의 점에서 원소를 $n + 1$개 갖는 분할과 작은 구간 하나로 나뉩니다.

## 증명

:::idea
(1)은 하적분과 상적분의 덧셈과 "$0$ 이상인 두 수의 합이 $0$이면 둘 다 $0$"으로 한다. (2)는 끝점이 같은지에 따라 (1)을 많아야 두 번 쓰고, (3)은 분할의 원소의 개수에 대한 귀납법에서 마지막 점 바로 앞의 점으로 (1)을 쓴다.
:::

:::hint
(1)의 거꾸로 방향에서는 $f$가 $[a, c]$ 위에서 유계라는 것부터 보여야 합니다. $[a, c]$의 점은 $b$ 이하이거나 $b$보다 큽니다.
:::

:::hint
(3)에서 귀납법의 명제를 "모든 $a < b$, 모든 $f : [a, b] \to \mathbb{R}$, 원소를 $n + 1$개 갖는 모든 $[a, b]$의 분할에서 성립한다"로 잡으면, 귀납 단계에서 구간 $[a, x_n]$에 귀납 가정을 쓸 수 있습니다.
:::

:::proof
실수의 계산은 [[real-number-arithmetic]]의 계산 법칙으로 하고, 번호만 쓴 "(1)의 (ii)" 같은 것은 [[order-properties-of-reals]]의 번호이다. "이 항목의 ($n$)"은 위 진술의 번호이고, "덧셈 보조정리 ($n$)"은 [[additivity-of-lower-and-upper-integrals]]의 번호이다.

**제한의 제한.** 아래에서 여러 번 쓰는 사실을 먼저 적는다. $A \subseteq B \subseteq S \subseteq \mathbb{R}$이고 $h : S \to \mathbb{R}$이면 $(h|_B)|_A = h|_A$이다. 실제로 두 함수의 정의역은 모두 $A$이고, $A$의 모든 $x$에서 [[real-valued-function]]의 (6)에 의해 $(h|_B)|_A(x) = h|_B(x) = h(x) = h|_A(x)$이므로 그 항목의 (2)에 의해 같은 함수이다. 따라서 [[riemann-integral]]의 (4)에 의해, $A = [p, q]$($p < q$)일 때 $h|_B$가 $[p, q]$에서 적분가능한 것은 정확히 $h$가 $[p, q]$에서 적분가능할 때이고, 그때 $\int_p^q h|_B = \int_p^q h$이다.

**"0 이상인 두 수".** 실수 $x$, $y$가 $0 \le x$, $0 \le y$, $x + y = 0$을 만족하면 $x = -y$이고, $0 \le y$에서 (3)의 (iii)에 의해 $-y \le 0$이므로 $x \le 0$이다. (1)의 (ii)에 의해 $x = 0$이고, 같은 방법으로 $y = 0$이다.

**이 항목의 (1).** $f_1 = f|_{[a, b]}$, $f_2 = f|_{[b, c]}$로 쓴다. [[riemann-integral]]의 (4)에 의해 "$f$가 $[a, b]$에서 적분가능"은 "$f_1$이 적분가능"이고, 그때 $\int_a^b f = \int_a^b f_1$이다. $[b, c]$에서도 같다.

$f$가 $[a, c]$에서 적분가능하다고 하자. 정의에 의해 $f$는 유계이고 $\underline{\int_a^c} f = \overline{\int_a^c} f$이다. 덧셈 보조정리 (4)에 의해
$$
\begin{aligned}
0 &= \left(\overline{\int_a^b} f - \underline{\int_a^b} f\right) \\
&\quad + \left(\overline{\int_b^c} f - \underline{\int_b^c} f\right)
\end{aligned}
$$
이고 두 괄호는 $0$ 이상이므로, 위의 "0 이상인 두 수"에 의해 둘 다 $0$이다. 덧셈 보조정리의 진술에 의해 $f_1$과 $f_2$는 유계이고, 그 진술의 약속에 의해 위의 하적분과 상적분은 $f_1$, $f_2$의 것이므로 $f_1$과 $f_2$는 적분가능하다. 그러면 덧셈 보조정리 (2)에 의해
$$
\begin{aligned}
\int_a^c f &= \underline{\int_a^c} f = \underline{\int_a^b} f + \underline{\int_b^c} f \\
&= \int_a^b f + \int_b^c f
\end{aligned}
$$
이다.

거꾸로 $f_1$과 $f_2$가 적분가능하다고 하자. [[riemann-integral]]의 (6)에 의해 둘 다 유계이므로, [[bounded-function]]의 정의에 의해 $[a, b]$의 모든 $x$에서 $|f_1(x)| \le B_1$이고 $[b, c]$의 모든 $x$에서 $|f_2(x)| \le B_2$인 실수 $B_1$, $B_2$가 있다. $B = \max\{B_1, B_2\}$로 두자. $[a, c]$의 원소 $x$는 (1)의 (iii)에 의해 $x \le b$이거나 $b < x$이다. $x \le b$이면 $x \in [a, b]$이므로 $|f(x)| = |f_1(x)| \le B_1 \le B$이고([[absolute-value]]의 (10)), $b < x$이면 $x \in [b, c]$이므로 $|f(x)| = |f_2(x)| \le B_2 \le B$이다. 따라서 $f$는 유계이다. 덧셈 보조정리 (2), (3)과 $f_1$, $f_2$의 적분가능성에 의해
$$
\begin{aligned}
\underline{\int_a^c} f &= \underline{\int_a^b} f + \underline{\int_b^c} f \\
&= \overline{\int_a^b} f + \overline{\int_b^c} f = \overline{\int_a^c} f
\end{aligned}
$$
이므로 $f$는 적분가능하고, $\int_a^c f$는 이 값, 곧 $\int_a^b f + \int_b^c f$이다.

**이 항목의 (2).** $a \le c$이므로 $a = c$이거나 $a < c$이고, $d \le b$이므로 $d = b$이거나 $d < b$이다. 네 경우를 나눈다.

- $c = a$, $d = b$: $[c, d] = [a, b]$이고 $f|_{[a, b]} = f$([[riemann-integral]]의 (4))이므로 $f$는 $[c, d]$에서 적분가능하다.
- $c = a$, $d < b$: $a < d < b$이므로 (1)을 $a < d < b$에 쓰면 $f$는 $[a, d] = [c, d]$에서 적분가능하다.
- $a < c$, $d = b$: $a < c < b$이므로 (1)을 $a < c < b$에 쓰면 $f$는 $[c, b] = [c, d]$에서 적분가능하다.
- $a < c$, $d < b$: $a < c < d < b$이다. (1)을 $a < c < b$에 쓰면 $f$는 $[c, b]$에서 적분가능하고, 곧 $g = f|_{[c, b]}$가 적분가능하다. (1)을 $g : [c, b] \to \mathbb{R}$와 $c < d < b$에 쓰면 $g$는 $[c, d]$에서 적분가능하고, 제한의 제한에 의해 $f$는 $[c, d]$에서 적분가능하다.

**이 항목의 (3).** [[partition-of-an-interval|구간의 분할]]의 (1)에 의해 $[a, b]$의 모든 분할은 어떤 정수 $n \ge 1$에 대해 원소를 $n + 1$개 갖는다. 정수 $n \ge 1$에 대한 명제 $S_n$을 "$a < b$인 모든 실수 $a$, $b$, 모든 $f : [a, b] \to \mathbb{R}$, 원소를 $n + 1$개 갖는 $[a, b]$의 모든 분할 $P$(점 $x_0, \dots, x_n$)에 대하여 (3)의 두 문장이 성립한다"로 두고, 시작점이 $1$인 [[mathematical-induction]]을 쓴다. 합의 항이 범위에서만 정해진 항이므로 [[linearity-and-order-of-finite-sums]]의 (8)에 의해 [[finite-sum-of-reals]]의 번호를 그대로 쓴다.

기초 단계 $S_1$: 원소를 $2$개 갖는 분할은 [[partition-of-an-interval|구간의 분할]]의 (4)에 의해 $\{a, b\}$이고, 그 점은 $x_0 = a$, $x_1 = b$이며 유일한 작은 구간은 $[a, b]$이다. 따라서 "모든 작은 구간에서 적분가능"은 "$[a, b]$에서 적분가능"과 같은 말이다. 그때 [[finite-sum-of-reals]]의 (2)에 의해 $\sum_{i=1}^{1} \int_{x_{i-1}}^{x_i} f = \int_{x_0}^{x_1} f = \int_a^b f$이다.

귀납 단계: $n \ge 1$이고 $S_n$이 참이라 하자. $a < b$, $f : [a, b] \to \mathbb{R}$, 원소를 $n + 2$개 갖는 $[a, b]$의 분할 $P$(점 $x_0, \dots, x_{n+1}$)를 생각한다. $e = x_n$으로 두면, [[partition-of-an-interval|구간의 분할]]의 (1)에 의해 $x_0 = a$, $x_{n+1} = b$이고 $0 < n < n + 1$이므로 $a < e < b$이다. $e \in P$이고 그 (1)에 의해 $x_k = e$인 번호는 $k = n$뿐이므로, [[refinement-of-a-partition|분할의 세분]]의 (5)의 (ii)를 $a < e < b$에 쓰면 $P_1 = P \cap [a, e]$는 점이 $x_0, \dots, x_n$인 $[a, e]$의 분할(원소 $n + 1$개)이고, $1 \le i \le n$이면 $P$의 $i$번째 작은 구간 $[x_{i-1}, x_i]$는 $P_1$의 $i$번째 작은 구간이다. 또 같은 (ii)에 의해 $P$의 $(n + 1)$번째 작은 구간은 $P \cap [e, b]$의 첫째 작은 구간, 곧 $[x_n, x_{n+1}] = [e, b]$이다.

(1)을 $a < e < b$에 쓰면, $f$가 $[a, b]$에서 적분가능한 것은 정확히 $f$가 $[a, e]$와 $[e, b]$에서 적분가능할 때이다. $g = f|_{[a, e]}$로 두면 "$f$가 $[a, e]$에서 적분가능"은 "$g$가 적분가능"이고, $S_n$을 $a < e$, $g$, $P_1$에 쓰면 이것은 정확히 $1 \le i \le n$인 모든 $i$에서 $g$가 $[x_{i-1}, x_i]$에서 적분가능할 때이다. $[x_{i-1}, x_i] \subseteq [a, e]$이므로([[partition-of-an-interval|구간의 분할]]의 (2)를 $P_1$에), 제한의 제한에 의해 이것은 $f$가 $[x_{i-1}, x_i]$에서 적분가능하다는 것과 같다. 따라서 $f$가 $[a, b]$에서 적분가능한 것은 정확히 $1 \le i \le n + 1$인 모든 $i$에서 $f$가 $[x_{i-1}, x_i]$에서 적분가능할 때이다.

그때 $t_i = \int_{x_{i-1}}^{x_i} f$($1 \le i \le n + 1$)로 두자. 제한의 제한에 의해 $1 \le i \le n$에서 $\int_{x_{i-1}}^{x_i} g = t_i$이고 $\int_a^e g = \int_a^e f$이므로, $S_n$의 등식과 [[finite-sum-of-reals]]의 (4)에 의해 $\int_a^e f = \sum_{i=1}^{n} t_i$이다. (1)과 [[finite-sum-of-reals]]의 (3)에 의해
$$
\begin{aligned}
\int_a^b f &= \int_a^e f + \int_e^b f \\
&= \sum_{i=1}^{n} t_i + t_{n+1} = \sum_{i=1}^{n+1} t_i
\end{aligned}
$$
이다. 곧 $S_{n+1}$이 참이다. 귀납법에 의해 모든 $n \ge 1$에서 $S_n$이 참이고, 첫 문장에 의해 (3)이 성립한다.

**이 항목의 (4).** $[a, b]$의 모든 $x$에서 $f(x) = g_1(x)$이고 $g_1$은 $[a, b]$에서 적분가능하므로, [[riemann-integral]]의 (4)의 마지막 문장을 $h_1 = f$, $h_2 = g_1$에 쓰면 $f$는 $[a, b]$에서 적분가능하고 $\int_a^b f = \int_a^b g_1$이다. 같은 방법으로 $f$는 $[b, c]$에서 적분가능하고 $\int_b^c f = \int_b^c g_2$이다. (1)에 의해 $f$는 적분가능하고 진술의 등식이 성립한다.

이런 $f$가 있으면 $b \in [a, b]$이고 $b \in [b, c]$이므로 $g_1(b) = f(b) = g_2(b)$이다. 거꾸로 $g_1(b) = g_2(b)$이면, $[a, c]$의 각 원소 $x$는 (1)의 (iii)에 의해 $x \le b$와 $b < x$ 가운데 정확히 하나를 만족하므로 [[real-valued-function]]의 (1)로 진술의 $f$를 정할 수 있다. $x \in [a, b]$이면 $x \le b$이므로 $f(x) = g_1(x)$이다. $x \in [b, c]$이면 $b < x$이거나 $x \le b$이고, 뒤의 경우 $b \le x$와 (1)의 (ii)에 의해 $x = b$이므로, 어느 경우나 $f(x) = g_2(x)$이다(뒤의 경우 $f(b) = g_1(b) = g_2(b)$). 위의 두 조건을 만족하는 함수는 $[a, c]$의 모든 점에서 값이 정해져 있으므로 [[real-valued-function]]의 (2)에 의해 이것 하나이다.

**이 항목의 (5).** (1): $\varphi = h|_{[a, c]}$로 두면 [[riemann-integral]]의 (4)에 의해 "$h$가 $[a, c]$에서 적분가능"은 "$\varphi$가 적분가능"이고, 제한의 제한에 의해 "$h$가 $[a, b]$에서 적분가능"은 "$\varphi$가 $[a, b]$에서 적분가능"이며 적분도 같고, $[b, c]$에서도 같다. 그러므로 (1)을 $\varphi$에 쓴 것이 $h$에 대한 (1)이다.

(2): $h$가 $[a, b]$에서 적분가능하면 $\psi = h|_{[a, b]}$가 적분가능하고, (2)를 $\psi$에 쓰면 $\psi$는 $[c, d]$에서 적분가능하다. $[c, d] \subseteq [a, b]$이므로 제한의 제한에 의해 $h$는 $[c, d]$에서 적분가능하다.

(3): $\psi = h|_{[a, b]}$로 두면 "$h$가 $[a, b]$에서 적분가능"은 "$\psi$가 적분가능"이고, 각 작은 구간 $[x_{i-1}, x_i] \subseteq [a, b]$에서 제한의 제한에 의해 "$h$가 $[x_{i-1}, x_i]$에서 적분가능"은 "$\psi$가 $[x_{i-1}, x_i]$에서 적분가능"이며 그때 $\int_{x_{i-1}}^{x_i} h = \int_{x_{i-1}}^{x_i} \psi$이다. (3)을 $\psi$에 쓰고 [[finite-sum-of-reals]]의 (4)로 항을 바꾸면 $h$에 대한 (3)이 된다. $\blacksquare$
:::

## 예시와 반례

:::example[1 에서 값이 바뀌는 함수]
$f : [0, 3] \to \mathbb{R}$를 $x \le 1$이면 $f(x) = 1$, $1 < x$이면 $f(x) = 2$로 정합니다([[real-valued-function]]의 (1)). $[0, 1]$의 모든 점에서 $f$의 값은 $1$이므로, [[riemann-integral]]의 (4)의 마지막 문장과 (5)에 의해 $f$는 $[0, 1]$에서 적분가능하고 $\int_0^1 f = 1 \cdot 1 = 1$입니다.

$[1, 3]$에서는 $f(1) = 1$이고 나머지 점에서 $f$의 값은 $2$이므로, 값이 $1$과 $2$뿐이어서 $f|_{[1, 3]}$은 유계입니다. 양수 $\varepsilon$이 주어지면 $t = \min\{1, \varepsilon/2\}$로 둡니다. [[absolute-value]]의 (10)과 [[order-properties-of-reals]]의 (8)에 의해 $0 < t \le 1$이고 $t < \varepsilon$이며, $1 < 1 + t < 3$이므로 [[partition-of-an-interval|구간의 분할]]의 (5)에 의해 $Q = \{1, 1 + t, 3\}$은 $[1, 3]$의 분할입니다. $[1, 1 + t]$에서 값의 집합은 $\{1, 2\}$이므로 $m_1 = 1$, $M_1 = 2$이고, $[1 + t, 3]$의 점은 모두 $1$보다 크므로 값의 집합은 $\{2\}$이고 $m_2 = M_2 = 2$입니다([[upper-bound-and-supremum]]의 (2)). [[finite-sum-of-reals]]의 (2), (3)으로
$$
\begin{aligned}
L(Q, f) &= 1 \cdot t + 2 \cdot (2 - t) = 4 - t, \\
U(Q, f) &= 2 \cdot t + 2 \cdot (2 - t) = 4
\end{aligned}
$$
이므로 $L(Q, f) \le 4 \le U(Q, f)$이고 $U(Q, f) - L(Q, f) = t < \varepsilon$입니다. [[integrability-criterion|리만 적분가능성의 판정]]의 (4)를 $f|_{[1, 3]}$과 $I = 4$에 쓰면 $f$는 $[1, 3]$에서 적분가능하고 $\int_1^3 f = 4$입니다.

(1)에 의해 $f$는 $[0, 3]$에서 적분가능하고 $\int_0^3 f = 1 + 4 = 5$입니다. (4)의 눈으로 보면 $g_1$은 $[0, 1]$ 위의 값이 $1$인 상수함수이고 $g_2 = f|_{[1, 3]}$이며, 두 함수는 $1$에서 같은 값 $1$을 갖습니다.
:::

:::counterexample[한쪽 구간에서만 적분가능한 예]
$f : [0, 2] \to \mathbb{R}$를 $x \le 1$이고 $x$가 유리수이면 $f(x) = 1$, $x \le 1$이고 $x$가 무리수이면 $f(x) = 0$, $1 < x$이면 $f(x) = 1$로 정합니다([[real-valued-function]]의 (1). 각 실수는 유리수이거나 무리수이고 둘 다는 아니며, $x \le 1$과 $1 < x$ 가운데 정확히 하나가 성립합니다). 값이 $0$과 $1$뿐이므로 $f$는 유계입니다. $1 = 1/1$은 유리수이므로([[rational-and-irrational-numbers|유리수와 무리수]]) $f(1) = 1$이고, $[1, 2]$의 모든 점에서 $f$의 값은 $1$입니다. 그래서 $f$는 $[1, 2]$에서 적분가능합니다([[riemann-integral]]의 (4), (5)).

한편 $f|_{[0, 1]}$은 $[0, 1]$ 위의 디리클레 함수와 모든 점에서 값이 같으므로 그 함수이고, [[riemann-integral]]의 (5)에 의해 적분가능하지 않습니다. (1)에 의해 $f$는 $[0, 2]$에서 적분가능하지 않습니다. 실제로 [[additivity-of-lower-and-upper-integrals|하적분과 상적분의 구간 덧셈]]의 (2), (3)과 [[dirichlet-function]]의 (4), [[lower-and-upper-integrals|하적분과 상적분]]의 (6)으로 계산하면
$$
\begin{gathered}
\underline{\int_0^2} f = 0 + 1 = 1, \\
\overline{\int_0^2} f = 1 + 1 = 2
\end{gathered}
$$
입니다. 적분가능한 조각을 붙여도 다른 조각이 적분가능하지 않으면 합친 함수는 적분가능하지 않습니다.
:::

## 확인 질문

:::check[$P = \{a, b\}$이면 (3)은 무엇을 말하는가?]
$n = 1$이고 유일한 작은 구간이 $[a, b]$이므로, "$f$가 $[a, b]$에서 적분가능한 것은 정확히 $f$가 $[a, b]$에서 적분가능할 때"와 $\int_a^b f = \sum_{i=1}^{1} \int_{x_{i-1}}^{x_i} f = \int_a^b f$를 말합니다. 새로운 내용은 없고, 증명의 기초 단계가 이것입니다.
:::

:::check[$f : [0, 3] \to \mathbb{R}$가 $[0, 1]$, $[1, 2]$, $[2, 3]$에서 적분가능하고 그 적분이 차례로 $2$, $-1$, $4$이면 $f$는 $[0, 3]$에서 적분가능한가?]
그렇고 $\int_0^3 f = 5$입니다. [[partition-of-an-interval|구간의 분할]]의 (5)에 의해 $P = \{0, 1, 2, 3\}$은 점이 $0, 1, 2, 3$인 $[0, 3]$의 분할이고 세 작은 구간이 $[0, 1]$, $[1, 2]$, $[2, 3]$입니다. (3)에 의해 $f$는 적분가능하고, [[finite-sum-of-reals]]의 (2), (3)으로 $\int_0^3 f = 2 + (-1) + 4 = 5$입니다.
:::
