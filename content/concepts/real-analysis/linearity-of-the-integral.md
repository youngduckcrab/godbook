---
title: 적분의 선형성
title_en: Linearity of the Integral
aliases: [적분의 상수배, 상수배의 적분, 합의 적분, 적분의 합, 하적분과 상적분의 상수배, linearity of the Riemann integral, integral of a sum, integral of a constant multiple]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "적분가능한 f, g 와 실수 k 에 대해 kf, f + g, f − g 도 적분가능하고 그 적분은 k∫f, ∫f + ∫g, ∫f − ∫g 이다. 상수배의 다르부 합과 하적분·상적분(k 가 음수이면 하와 상이 바뀐다), 유계인 두 함수의 합의 하적분은 하적분의 합 이상이고 상적분은 상적분의 합 이하라는 것, 그 부등식이 등식이 아닌 디리클레 함수의 예, 방향 있는 적분의 꼴을 함께 진술한다."
requires: [set, image-and-preimage, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, supremum-and-arithmetic, real-valued-function, bounded-function, interval, derivative-and-monotonicity, finite-sum-of-reals, linearity-and-order-of-finite-sums, partition-of-an-interval, refinement-of-a-partition, darboux-sums, refinement-and-darboux-sums, lower-and-upper-integrals, dirichlet-function, supremum-of-function-values, riemann-integral, monotone-implies-integrable, riemann-integral-examples, product-is-integrable, oriented-integral]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.2절(5.2.2 소절) Proposition 5.2.4 와 그 증명 (p.193), Proposition 5.2.5 와 그 앞 문단 (p.194); 5.2절(5.2.5 소절) 연습문제 5.2.1, 5.2.2 (p.197), 5.2.16 (p.199); 1.3절(1.3.1 소절) 연습문제 1.3.7 (p.40); 5.1절(5.1.1 소절) Example 5.1.4 (p.183); 5.3절(5.3.1 소절) Example 5.3.2 (p.201)
    checked: original
    note: "(4)는 출처의 Proposition 5.2.4(5.2.2 소절, p.193)이다. 출처는 (i)의 αf 를 α ≥ 0 인 경우만 증명하고('Let us prove the first item for α ≥ 0'), α < 0 인 경우에 필요한 −f 의 적분가능성과 ∫(−f) = −∫f 는 연습문제 5.2.1(5.2.5 소절, p.197)로, (ii)의 합은 연습문제 5.2.2(p.197)로 둔다. 연습문제 5.2.2 는 Proposition 5.2.5 를 쓰지 말고 하라 하고, 힌트로 두 함수에 한 분할을 쓰라고 한다. 이 항목은 (1)과 (2)에서 k 를 양수, 음수, 0 으로 나누어 상수배를 직접 증명하고(k = 0 은 출처의 α ≥ 0 에 들어 있으나 이 항목은 상수함수로 따로 처리한다), 합은 (3)의 부등식, 곧 출처의 Proposition 5.2.5 로 증명한다. (3)은 출처의 Proposition 5.2.5(p.194)이고, 출처는 그 증명을 연습문제 5.2.16 a)(p.199)로 두며, 앞 문단에서 고정된 분할의 상합과 하합에 대해서는 연습문제 1.3.7(1.3.1 소절, p.40), 곧 합의 상한은 상한의 합 이하라는 것에서 나온다고 적는다. 이 항목은 분할마다의 부등식을 supremum-of-function-values 의 (2)로 보이고, 하적분과 상적분의 부등식은 공통 세분 위에서 상한을 두 번 넘겨 보인다. (5)는 출처 연습문제 5.2.16 b)(p.199)가 묻는 '부등식이 등식이 아닌 예'에 답하는 것이고, 출처의 힌트('f and g should not be Riemann integrable')와 같은 방향의 예이다. 디리클레 함수는 출처 Example 5.1.4(5.1.1 소절, p.183)의 함수이다. (6)은 (4)를 방향 있는 적분으로 옮긴 것으로, 뒤 항목이 인용하도록 진술에 두었다. 반례 'k = 0 이면 kf 만으로는 f 의 적분가능성을 알 수 없는 예'의 함수도 Example 5.1.4 의 디리클레 함수이다. 예시 'x² 과 일차함수를 섞은 함수'에서 쓰는 ∫_0^1 x² dx = 1/3 은 출처 Example 5.3.2(5.3.1 소절, p.201)가 기본정리로 계산하는 적분과 같다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 경계값에서 틀리거나 근거가 없던 설명 문장 9건과 잘못 적은 인용 1건을 고쳤다."
added: 2026-11-20
---

:::statement
실함수의 합 $f + g$, 차 $f - g$, 상수배 $kf$, 상수함수, 제한은 [[real-valued-function]]의 것이고, $[a, b]$의 분할은 [[partition-of-an-interval]]의 것이며, 다르부 합 $L(P, f)$, $U(P, f)$는 [[darboux-sums]]의 것이고, 하적분 $\underline{\int_a^b} f$와 상적분 $\overline{\int_a^b} f$는 [[lower-and-upper-integrals]]의 것이다. 리만 적분가능과 $\int_a^b f$는 [[riemann-integral]]의 것이고, "$\alpha$와 $\beta$ 사이에서 적분가능"과 방향 있는 적분 $\int_\alpha^\beta f$는 [[oriented-integral]]의 것이다. (1)–(5)에서 $a$, $b$는 $a < b$인 실수이고, (1)–(6)에서 $k$는 실수이다.

1. (상수배의 다르부 합) $f : [a, b] \to \mathbb{R}$가 유계이면 $kf$도 유계이고, $[a, b]$의 모든 분할 $P$에서 다음이 성립한다.
   - $0 < k$이면 $L(P, kf) = k\,L(P, f)$이고 $U(P, kf) = k\,U(P, f)$이다.
   - $k < 0$이면 $L(P, kf) = k\,U(P, f)$이고 $U(P, kf) = k\,L(P, f)$이다.
   - $k = 0$이면 $L(P, kf) = U(P, kf) = 0$이다.
2. (상수배의 하적분과 상적분) $f : [a, b] \to \mathbb{R}$가 유계이면 다음이 성립한다.
   - $0 < k$이면 $\underline{\int_a^b} kf = k\,\underline{\int_a^b} f$이고 $\overline{\int_a^b} kf = k\,\overline{\int_a^b} f$이다.
   - $k < 0$이면 $\underline{\int_a^b} kf = k\,\overline{\int_a^b} f$이고 $\overline{\int_a^b} kf = k\,\underline{\int_a^b} f$이다.
   - $k = 0$이면 $\underline{\int_a^b} kf = \overline{\int_a^b} kf = 0$이다.
3. (합의 다르부 합과 하적분·상적분) $f, g : [a, b] \to \mathbb{R}$가 유계이면 $f + g$도 유계이고, $[a, b]$의 모든 분할 $P$에서
   $$
   \begin{aligned}
   &L(P, f) + L(P, g) \\
   &\quad \le L(P, f + g) \le U(P, f + g) \\
   &\quad \le U(P, f) + U(P, g)
   \end{aligned}
   $$
   이며
   $$
   \begin{aligned}
   &\underline{\int_a^b} f + \underline{\int_a^b} g \le \underline{\int_a^b} (f + g) \\
   &\quad \le \overline{\int_a^b} (f + g) \le \overline{\int_a^b} f + \overline{\int_a^b} g
   \end{aligned}
   $$
   이다.
4. (적분) $f, g : [a, b] \to \mathbb{R}$가 리만 적분가능하면 $kf$, $f + g$, $f - g$도 리만 적분가능하고
   $$
   \begin{gathered}
   \int_a^b kf = k \int_a^b f, \\
   \int_a^b (f + g) = \int_a^b f + \int_a^b g, \\
   \int_a^b (f - g) = \int_a^b f - \int_a^b g
   \end{gathered}
   $$
   이다. 이 가운데 $kf$가 적분가능하다는 것은 [[product-is-integrable|곱의 적분가능성]]의 (3)과 같은 결론이다.
5. (등식이 아닌 예) $D$를 $[a, b]$ 위의 디리클레 함수([[dirichlet-function]])라 하고 $g = (-1)D$로 두자. 그러면 $D + g$는 값이 $0$인 상수함수이고
   $$
   \begin{aligned}
   &\underline{\int_a^b} D + \underline{\int_a^b} g = -(b - a) \\
   &\quad < 0 = \underline{\int_a^b} (D + g), \\
   &\overline{\int_a^b} (D + g) = 0 \\
   &\quad < b - a = \overline{\int_a^b} D + \overline{\int_a^b} g
   \end{aligned}
   $$
   이다. 따라서 (3)의 하적분과 상적분의 첫째 부등식과 셋째 부등식은 등식이 아닐 수 있다. 이때 $D$와 $g$는 적분가능하지 않고 $D + g$는 적분가능하다.
6. (방향 있는 적분) $I$를 구간, $f, g : I \to \mathbb{R}$, $\alpha$, $\beta$를 $I$의 원소라 하자. $f$와 $g$가 $\alpha$와 $\beta$ 사이에서 적분가능하면 $kf$, $f + g$, $f - g$도 $\alpha$와 $\beta$ 사이에서 적분가능하고
   $$
   \begin{gathered}
   \int_\alpha^\beta kf = k \int_\alpha^\beta f, \\
   \int_\alpha^\beta (f + g) = \int_\alpha^\beta f + \int_\alpha^\beta g, \\
   \int_\alpha^\beta (f - g) = \int_\alpha^\beta f - \int_\alpha^\beta g
   \end{gathered}
   $$
   이다.
:::

:::english
The sum $f + g$, difference $f - g$, scalar multiple $kf$ of real-valued functions, constant functions, and restrictions are as in the entry on real-valued functions; partitions of $[a, b]$ are as in the entry on partitions of an interval; the Darboux sums $L(P, f)$, $U(P, f)$ are as in the entry on Darboux sums; and the lower integral $\underline{\int_a^b} f$ and upper integral $\overline{\int_a^b} f$ are as in the entry on lower and upper integrals. Riemann integrability and $\int_a^b f$ are as in the entry on the Riemann integral, and "integrable between $\alpha$ and $\beta$" and the oriented integral $\int_\alpha^\beta f$ are as in the entry on the oriented integral. In (1)–(5), $a$ and $b$ are real numbers with $a < b$, and in (1)–(6), $k$ is a real number.

1. (Darboux sums of a scalar multiple) If $f : [a, b] \to \mathbb{R}$ is bounded, then $kf$ is bounded, and for every partition $P$ of $[a, b]$ the following hold.
   - If $0 < k$, then $L(P, kf) = k\,L(P, f)$ and $U(P, kf) = k\,U(P, f)$.
   - If $k < 0$, then $L(P, kf) = k\,U(P, f)$ and $U(P, kf) = k\,L(P, f)$.
   - If $k = 0$, then $L(P, kf) = U(P, kf) = 0$.
2. (Lower and upper integrals of a scalar multiple) If $f : [a, b] \to \mathbb{R}$ is bounded, the following hold.
   - If $0 < k$, then $\underline{\int_a^b} kf = k\,\underline{\int_a^b} f$ and $\overline{\int_a^b} kf = k\,\overline{\int_a^b} f$.
   - If $k < 0$, then $\underline{\int_a^b} kf = k\,\overline{\int_a^b} f$ and $\overline{\int_a^b} kf = k\,\underline{\int_a^b} f$.
   - If $k = 0$, then $\underline{\int_a^b} kf = \overline{\int_a^b} kf = 0$.
3. (Darboux sums and lower and upper integrals of a sum) If $f, g : [a, b] \to \mathbb{R}$ are bounded, then $f + g$ is bounded, and for every partition $P$ of $[a, b]$,
   $$
   \begin{aligned}
   &L(P, f) + L(P, g) \\
   &\quad \le L(P, f + g) \le U(P, f + g) \\
   &\quad \le U(P, f) + U(P, g),
   \end{aligned}
   $$
   and
   $$
   \begin{aligned}
   &\underline{\int_a^b} f + \underline{\int_a^b} g \le \underline{\int_a^b} (f + g) \\
   &\quad \le \overline{\int_a^b} (f + g) \le \overline{\int_a^b} f + \overline{\int_a^b} g .
   \end{aligned}
   $$
4. (Integrals) If $f, g : [a, b] \to \mathbb{R}$ are Riemann integrable, then $kf$, $f + g$ and $f - g$ are Riemann integrable, and
   $$
   \begin{gathered}
   \int_a^b kf = k \int_a^b f, \\
   \int_a^b (f + g) = \int_a^b f + \int_a^b g, \\
   \int_a^b (f - g) = \int_a^b f - \int_a^b g .
   \end{gathered}
   $$
   The integrability of $kf$ is the same conclusion as item (3) of the entry on integrability of products.
5. (An example without equality) Let $D$ be the Dirichlet function on $[a, b]$ and put $g = (-1)D$. Then $D + g$ is the constant function with value $0$, and
   $$
   \begin{aligned}
   &\underline{\int_a^b} D + \underline{\int_a^b} g = -(b - a) \\
   &\quad < 0 = \underline{\int_a^b} (D + g), \\
   &\overline{\int_a^b} (D + g) = 0 \\
   &\quad < b - a = \overline{\int_a^b} D + \overline{\int_a^b} g .
   \end{aligned}
   $$
   Hence the first and the third inequality for lower and upper integrals in (3) need not be equalities. Here $D$ and $g$ are not integrable, while $D + g$ is integrable.
6. (Oriented integrals) Let $I$ be an interval, $f, g : I \to \mathbb{R}$, and let $\alpha$, $\beta$ be elements of $I$. If $f$ and $g$ are integrable between $\alpha$ and $\beta$, then $kf$, $f + g$ and $f - g$ are integrable between $\alpha$ and $\beta$, and
   $$
   \begin{gathered}
   \int_\alpha^\beta kf = k \int_\alpha^\beta f, \\
   \int_\alpha^\beta (f + g) = \int_\alpha^\beta f + \int_\alpha^\beta g, \\
   \int_\alpha^\beta (f - g) = \int_\alpha^\beta f - \int_\alpha^\beta g .
   \end{gathered}
   $$
:::

## 직관

$f \ge 0$일 때 적분을 그래프 아래의 넓이로 보면, 모든 높이를 두 배로 늘리면 넓이도 두 배가 되고, 두 그래프의 높이를 점마다 쌓으면 넓이가 더해질 것입니다. (4)가 이것을 말합니다. 비유의 "높이를 $k$배"가 상수배 $kf$이고 "점마다 쌓기"가 합 $f + g$입니다.

$k$가 음수이면 그림이 위아래로 뒤집힙니다. 작은 구간 위에서 $f$의 하한에 $k$를 곱한 것이 $kf$의 상한이 되므로, (1)과 (2)에서 하합과 상합, 하적분과 상적분이 자리를 바꿉니다.

합에서는 다르부 합에 대해 부등식만 보장됩니다. 한 작은 구간에서 $f$가 낮은 곳과 $g$가 낮은 곳이 다를 수 있어서, $f + g$의 하한이 두 하한의 합보다 클 수 있기 때문입니다. (5)의 디리클레 함수 $D$는 무리수에서 낮고 $(-1)D$는 유리수에서 낮아서, 둘의 합은 어디서나 $0$인데 두 하적분의 합은 음수입니다. 두 함수가 적분가능하면 이런 틈이 하적분과 상적분 사이에 갇혀 사라지고 (4)의 등식이 됩니다.

## 증명

:::idea
상수배는 작은 구간마다 하한과 상한이 $k$배가 되는 것([[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 (3))을 다르부 합과 하적분까지 옮긴다. 합은 작은 구간마다의 부등식을 다르부 합으로 모으고, 공통 세분 위에서 상한을 두 번 넘겨 하적분의 부등식을 얻는다. 적분가능하면 (3)의 부등식이 모두 같은 수 사이에 끼어 등식이 된다.
:::

:::hint
$0 < k$이면 하합의 집합 $\{L(P, kf)\}$는 집합 $\{L(P, f)\}$의 원소에 모두 $k$를 곱한 집합입니다. $k < 0$이면 어느 집합에 $k$를 곱한 것일까요?
:::

:::hint
$[a, b]$의 두 분할 $P$, $Q$에서 $L(P, f) + L(Q, g)$를 $P \cup Q$의 하합으로 누르면 $\underline{\int_a^b}(f + g)$ 이하입니다. 이제 $Q$를 고정하고 $P$에 대한 상한을 넘기고, 그다음 $Q$에 대한 상한을 넘깁니다.
:::

:::proof
**이 항목의 (1).** [[bounded-function]]의 (5)에 의해 $kf$는 유계이다. $P$의 점을 $x_0, \dots, x_n$이라 하고, $1 \le i \le n$인 정수 $i$마다 $A_i = [x_{i-1}, x_i]$로 두자. [[partition-of-an-interval|구간의 분할]]의 (2)에 의해 $A_i$는 $x_{i-1}$을 원소로 갖는 $[a, b]$의 부분집합이므로 공집합이 아니다. [[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 "집합 위에서 유계" 단락의 둘째 항목에 의해 유계인 $f$는 $A_i$ 위에서 유계이다. [[darboux-sums]]의 정의에 의해 $m_i(f) = \inf f(A_i)$, $M_i(f) = \sup f(A_i)$, $m_i(kf) = \inf (kf)(A_i)$, $M_i(kf) = \sup (kf)(A_i)$이다.

$0 < k$인 경우. [[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 (3)의 첫째 항목에 의해 $m_i(kf) = k\,m_i(f)$이고 $M_i(kf) = k\,M_i(f)$이다. 실수의 결합법칙([[real-number-arithmetic]])으로 $m_i(kf)\,\Delta x_i = k\,(m_i(f)\,\Delta x_i)$이므로, [[finite-sum-of-reals|실수의 유한 합]]의 (4)와 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 순서]]의 (1)과 (8)에 의해
$$
\begin{aligned}
L(P, kf) &= \sum_{i=1}^{n} k\,\bigl(m_i(f)\,\Delta x_i\bigr) \\
&= k \sum_{i=1}^{n} m_i(f)\,\Delta x_i \\
&= k\,L(P, f)
\end{aligned}
$$
이다. $M_i$로 같은 계산을 하면 $U(P, kf) = k\,U(P, f)$이다.

$k < 0$인 경우. [[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 (3)의 둘째 항목에 의해 $m_i(kf) = \inf (kf)(A_i) = k \sup f(A_i) = k\,M_i(f)$이고 $M_i(kf) = k\,m_i(f)$이다. 앞의 경우와 같은 계산에서 $m_i(f)$ 대신 $M_i(f)$를 넣으면 $L(P, kf) = k \sum_{i=1}^{n} M_i(f)\,\Delta x_i = k\,U(P, f)$이고, $m_i(f)$를 넣으면 $U(P, kf) = k\,L(P, f)$이다.

$k = 0$인 경우. [[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 (3)의 셋째 항목에 의해 $m_i(kf) = M_i(kf) = 0$이다. [[real-number-arithmetic]]의 (K9)에 의해 $0 \cdot \Delta x_i = 0$이므로 [[finite-sum-of-reals|실수의 유한 합]]의 (4)와 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 순서]]의 (2), (8)에 의해 $L(P, kf) = \sum_{i=1}^{n} 0 = n \cdot 0 = 0$이고, 같은 방법으로 $U(P, kf) = 0$이다.

**이 항목의 (2).** 유계인 함수 $h : [a, b] \to \mathbb{R}$에 대하여, [[lower-and-upper-integrals|하적분과 상적분]]의 하합의 집합 $\{L(P, h) : P\text{는 } [a, b]\text{의 분할}\}$을 $\mathcal{L}(h)$로, 상합의 집합 $\{U(P, h) : P\text{는 } [a, b]\text{의 분할}\}$을 $\mathcal{U}(h)$로 쓰자. [[lower-and-upper-integrals|하적분과 상적분]]의 (1)에 의해 이 두 집합은 공집합이 아니고 유계이며, 그 정의에 의해 $\underline{\int_a^b} h = \sup \mathcal{L}(h)$, $\overline{\int_a^b} h = \inf \mathcal{U}(h)$이다. 실수 $c$와 $\mathbb{R}$의 공집합이 아닌 부분집합 $A$에 대한 집합 $cA = \{ca : a \in A\}$는 [[supremum-and-arithmetic|상한과 덧셈·곱셈]]의 것이다.

$0 < k$인 경우. 실수 $t$가 $\mathcal{L}(kf)$의 원소인 것은 정확히 $t = L(P, kf)$인 분할 $P$가 있을 때이고, (1)에 의해 이것은 정확히 $t = k\,L(P, f)$인 분할 $P$가 있을 때, 곧 $t$가 $k\,\mathcal{L}(f)$의 원소일 때이다. 두 집합은 원소가 같으므로([[set]]) $\mathcal{L}(kf) = k\,\mathcal{L}(f)$이다. 같은 방법으로 $\mathcal{U}(kf) = k\,\mathcal{U}(f)$이다. [[supremum-and-arithmetic|상한과 덧셈·곱셈]]의 (2)에 의해
$$
\begin{aligned}
\underline{\int_a^b} kf &= \sup\bigl(k\,\mathcal{L}(f)\bigr) \\
&= k \sup \mathcal{L}(f) = k\,\underline{\int_a^b} f, \\
\overline{\int_a^b} kf &= \inf\bigl(k\,\mathcal{U}(f)\bigr) \\
&= k \inf \mathcal{U}(f) = k\,\overline{\int_a^b} f
\end{aligned}
$$
이다.

$k < 0$인 경우. (1)에 의해 $L(P, kf) = k\,U(P, f)$이므로 앞의 경우와 같은 논법으로 $\mathcal{L}(kf) = k\,\mathcal{U}(f)$이고, 같은 까닭으로 $\mathcal{U}(kf) = k\,\mathcal{L}(f)$이다. $\mathcal{U}(f)$는 아래로 유계이고 $\mathcal{L}(f)$는 위로 유계이므로 [[supremum-and-arithmetic|상한과 덧셈·곱셈]]의 (3)에 의해
$$
\begin{aligned}
\underline{\int_a^b} kf &= \sup\bigl(k\,\mathcal{U}(f)\bigr) \\
&= k \inf \mathcal{U}(f) = k\,\overline{\int_a^b} f, \\
\overline{\int_a^b} kf &= \inf\bigl(k\,\mathcal{L}(f)\bigr) \\
&= k \sup \mathcal{L}(f) = k\,\underline{\int_a^b} f
\end{aligned}
$$
이다.

$k = 0$인 경우. 모든 $x \in [a, b]$에서 $(kf)(x) = 0 \cdot f(x) = 0$이므로([[real-number-arithmetic]]의 (K9)) [[real-valued-function]]의 (2)에 의해 $kf$는 값이 $0$인 상수함수이다. [[lower-and-upper-integrals|하적분과 상적분]]의 (6)에 의해 $\underline{\int_a^b} kf = \overline{\int_a^b} kf = 0 \cdot (b - a) = 0$이다.

**이 항목의 (3), 분할마다의 부등식.** [[bounded-function]]의 (5)에 의해 $f + g$는 유계이다. (1)의 증명과 같이 $P$의 점을 $x_0, \dots, x_n$, $A_i = [x_{i-1}, x_i]$로 두면 $f$와 $g$는 공집합이 아닌 $A_i$ 위에서 유계이고, [[supremum-of-function-values|함숫값의 상한과 하한의 비교]]의 (2)에 의해
$$
\begin{gathered}
m_i(f) + m_i(g) \le m_i(f + g), \\
M_i(f + g) \le M_i(f) + M_i(g)
\end{gathered}
$$
이다. [[partition-of-an-interval|구간의 분할]]의 (2)에 의해 $0 < \Delta x_i$이므로 [[order-properties-of-reals]]의 (4)의 (iii)에 의해 $\bigl(m_i(f) + m_i(g)\bigr)\Delta x_i \le m_i(f + g)\,\Delta x_i$이다. 또 분배법칙에 의해 $\bigl(m_i(f) + m_i(g)\bigr)\Delta x_i = m_i(f)\,\Delta x_i + m_i(g)\,\Delta x_i$이다. [[linearity-and-order-of-finite-sums|유한 합의 선형성과 순서]]의 (1)과 (3)을 (8)에 따라 범위에서만 정해진 항에 쓰고 [[finite-sum-of-reals|실수의 유한 합]]의 (4)로 항을 바꿔 쓰면
$$
\begin{aligned}
&L(P, f) + L(P, g) \\
&\quad = \sum_{i=1}^{n} \bigl(m_i(f) + m_i(g)\bigr)\,\Delta x_i \\
&\quad \le \sum_{i=1}^{n} m_i(f + g)\,\Delta x_i \\
&\quad = L(P, f + g)
\end{aligned}
$$
이다. 같은 방법으로 $M_i(f + g)\,\Delta x_i \le M_i(f)\,\Delta x_i + M_i(g)\,\Delta x_i$를 더하면 $U(P, f + g) \le U(P, f) + U(P, g)$이다. 가운데 부등식 $L(P, f + g) \le U(P, f + g)$는 [[darboux-sums]]의 (3)과 [[order-properties-of-reals]]의 (3)의 (i)에서 나온다.

**이 항목의 (3), 하적분의 부등식.** $J = \underline{\int_a^b} (f + g)$로 두자. $P$, $Q$를 $[a, b]$의 분할이라 하자. [[refinement-of-a-partition|분할의 세분]]의 (2)에 의해 $P \cup Q$는 $P$와 $Q$의 공통 세분이고, [[refinement-and-darboux-sums|세분과 다르부 합]]의 (2)에 의해 $L(P, f) \le L(P \cup Q, f)$이고 $L(Q, g) \le L(P \cup Q, g)$이다. 앞 문단의 부등식과 [[lower-and-upper-integrals|하적분과 상적분]]의 (2)를 이으면, [[order-properties-of-reals]]의 (2)의 (iii)과 (1)의 (v)에 의해
$$
\begin{aligned}
&L(P, f) + L(Q, g) \\
&\quad \le L(P \cup Q, f) + L(P \cup Q, g) \\
&\quad \le L(P \cup Q, f + g) \le J
\end{aligned}
$$
이다. 양변에 $-L(Q, g)$를 더하면 $L(P, f) \le J - L(Q, g)$이다. 이제 $Q$를 고정하자. $\mathcal{L}(f)$의 원소는 모두 어떤 분할 $P$에 대한 $L(P, f)$이므로 $J - L(Q, g)$는 $\mathcal{L}(f)$의 상계이고, 상한의 정의([[upper-bound-and-supremum]])에 의해 $\underline{\int_a^b} f \le J - L(Q, g)$이다. 양변에 $L(Q, g) - \underline{\int_a^b} f$를 더하면 $L(Q, g) \le J - \underline{\int_a^b} f$이다. $Q$는 아무 분할이었으므로 $J - \underline{\int_a^b} f$는 $\mathcal{L}(g)$의 상계이고, 상한의 정의에 의해 $\underline{\int_a^b} g \le J - \underline{\int_a^b} f$이다. 양변에 $\underline{\int_a^b} f$를 더하면 $\underline{\int_a^b} f + \underline{\int_a^b} g \le J$이다.

**이 항목의 (3), 상적분의 부등식.** $K = \overline{\int_a^b} (f + g)$로 두자. $P$, $Q$를 $[a, b]$의 분할이라 하면, 같은 인용으로
$$
\begin{aligned}
K &\le U(P \cup Q, f + g) \\
&\le U(P \cup Q, f) + U(P \cup Q, g) \\
&\le U(P, f) + U(Q, g)
\end{aligned}
$$
이다. 양변에 $-U(Q, g)$를 더하면 $K - U(Q, g) \le U(P, f)$이다. $Q$를 고정하면 $K - U(Q, g)$는 $\mathcal{U}(f)$의 하계이고, 하한의 정의에 의해 $K - U(Q, g) \le \overline{\int_a^b} f$이다. 양변에 $U(Q, g) - \overline{\int_a^b} f$를 더하면 $K - \overline{\int_a^b} f \le U(Q, g)$이다. $Q$는 아무 분할이었으므로 $K - \overline{\int_a^b} f$는 $\mathcal{U}(g)$의 하계이고, 하한의 정의에 의해 $K - \overline{\int_a^b} f \le \overline{\int_a^b} g$이다. 양변에 $\overline{\int_a^b} f$를 더하면 $K \le \overline{\int_a^b} f + \overline{\int_a^b} g$이다.

가운데 부등식 $J \le K$는 [[partition-of-an-interval|구간의 분할]]의 (4)의 분할 $\{a, b\}$에 [[lower-and-upper-integrals|하적분과 상적분]]의 (2)를 쓴 것이다.

**이 항목의 (4).** [[riemann-integral]]의 정의에 의해 $f$와 $g$는 유계이고 $\underline{\int_a^b} f = \overline{\int_a^b} f = \int_a^b f$, $\underline{\int_a^b} g = \overline{\int_a^b} g = \int_a^b g$이다.

$kf$. [[bounded-function]]의 (5)에 의해 $kf$는 유계이다. (2)에 의해, $0 < k$이면 $\underline{\int_a^b} kf = k \int_a^b f = \overline{\int_a^b} kf$이고, $k < 0$이면 $\underline{\int_a^b} kf = k\,\overline{\int_a^b} f = k \int_a^b f$이고 $\overline{\int_a^b} kf = k\,\underline{\int_a^b} f = k \int_a^b f$이며, $k = 0$이면 두 값이 모두 $0 = k \int_a^b f$이다([[real-number-arithmetic]]의 (K9)). 어느 경우에도 하적분과 상적분이 $k \int_a^b f$로 같으므로 [[riemann-integral]]의 정의에 의해 $kf$는 적분가능하고 $\int_a^b kf = k \int_a^b f$이다.

$f + g$. (3)에 의해 $f + g$는 유계이고, $I = \int_a^b f + \int_a^b g$로 두면
$$
I \le \underline{\int_a^b} (f + g) \le \overline{\int_a^b} (f + g) \le I
$$
이다. [[order-properties-of-reals]]의 (1)의 (v)와 (ii)에 의해 세 수는 모두 $I$와 같다. 따라서 $f + g$는 적분가능하고 $\int_a^b (f + g) = I$이다.

$f - g$. 모든 $x \in [a, b]$에서 $(f - g)(x) = f(x) - g(x) = f(x) + (-g(x))$이고, [[real-number-arithmetic]]의 (K9)에 의해 $((-1)g)(x) = (-1)\,g(x) = -g(x)$이므로 [[real-valued-function]]의 (2)에 의해 $f - g = f + (-1)g$이다. 앞의 두 결과에 의해 $(-1)g$는 적분가능하고 $\int_a^b (-1)g = -\int_a^b g$이며, $f + (-1)g$는 적분가능하고 $\int_a^b (f - g) = \int_a^b f + \bigl(-\int_a^b g\bigr) = \int_a^b f - \int_a^b g$이다.

**이 항목의 (5).** [[dirichlet-function|디리클레 함수]]의 (2)에 의해 $D$는 유계이고, 그 (4)에 의해 $\underline{\int_a^b} D = 0$, $\overline{\int_a^b} D = b - a$이다. (2)를 $k = -1$에 쓰면 $\underline{\int_a^b} g = (-1)(b - a) = -(b - a)$이고 $\overline{\int_a^b} g = (-1) \cdot 0 = 0$이다(곱은 [[real-number-arithmetic]]의 (K9)). 모든 $x \in [a, b]$에서 $(D + g)(x) = D(x) + (-1)D(x) = D(x) + (-D(x)) = 0$이므로 $D + g$는 값이 $0$인 상수함수이고, [[lower-and-upper-integrals|하적분과 상적분]]의 (6)에 의해 $\underline{\int_a^b} (D + g) = \overline{\int_a^b} (D + g) = 0$이다. 따라서 $\underline{\int_a^b} D + \underline{\int_a^b} g = 0 + (-(b - a)) = -(b - a)$이고 $\overline{\int_a^b} D + \overline{\int_a^b} g = b - a$이다. $a < b$이므로 [[order-properties-of-reals]]의 (3)의 (i)에 의해 $0 < b - a$이고, 그 (3)의 (ii)에 의해 $-(b - a) < 0$이다. 이것으로 두 진짜 부등식이 성립한다. $D$는 [[riemann-integral]]의 (5)에 의해 적분가능하지 않고, $g$는 하적분 $-(b - a)$와 상적분 $0$이 다르므로 적분가능하지 않으며, $D + g$는 상수함수이므로 [[riemann-integral]]의 (5)에 의해 적분가능하다.

**이 항목의 (6).** [[real-order-axioms]]의 (W1)에 의해 $\alpha < \beta$, $\beta < \alpha$, $\alpha = \beta$ 가운데 하나가 성립한다.

$\alpha < \beta$인 경우. [[oriented-integral|방향 있는 적분]]의 정의에 의해 $f$와 $g$는 $[\alpha, \beta]$에서 적분가능하다. 곧 [[riemann-integral]]의 (4)에 의해 제한 $f_1 = f|_{[\alpha, \beta]}$와 $g_1 = g|_{[\alpha, \beta]}$는 적분가능하고, $\int_\alpha^\beta f = \int_\alpha^\beta f_1$, $\int_\alpha^\beta g = \int_\alpha^\beta g_1$이다. [[real-valued-function]]의 (6)에 의해 $(kf)|_{[\alpha, \beta]} = k f_1$, $(f + g)|_{[\alpha, \beta]} = f_1 + g_1$, $(f - g)|_{[\alpha, \beta]} = f_1 - g_1$이다. 이 항목의 (4)를 $[\alpha, \beta]$ 위의 $f_1$, $g_1$에 쓰면 세 제한은 적분가능하고 그 적분은 $k \int_\alpha^\beta f_1$, $\int_\alpha^\beta f_1 + \int_\alpha^\beta g_1$, $\int_\alpha^\beta f_1 - \int_\alpha^\beta g_1$이다. 다시 [[riemann-integral]]의 (4)에 의해 $kf$, $f + g$, $f - g$는 $[\alpha, \beta]$에서 적분가능하고, 방향 있는 적분의 정의에 의해 세 등식이 성립한다.

$\beta < \alpha$인 경우. 앞의 경우와 같은 논법을 $[\beta, \alpha]$ 위의 제한에 쓰면 $kf$, $f + g$, $f - g$는 $[\beta, \alpha]$에서 적분가능하고 $\int_\beta^\alpha kf = k \int_\beta^\alpha f$, $\int_\beta^\alpha (f + g) = \int_\beta^\alpha f + \int_\beta^\alpha g$, $\int_\beta^\alpha (f - g) = \int_\beta^\alpha f - \int_\beta^\alpha g$이다. 방향 있는 적분의 정의에 의해 세 함수는 $\alpha$와 $\beta$ 사이에서 적분가능하고, [[real-number-arithmetic]]의 (K9)와 (K12)의 (ii), (iv)에 의해
$$
\begin{aligned}
\int_\alpha^\beta kf &= -\Bigl(k \int_\beta^\alpha f\Bigr) \\
&= k\Bigl(-\int_\beta^\alpha f\Bigr) = k \int_\alpha^\beta f, \\
\int_\alpha^\beta (f + g) &= -\int_\beta^\alpha f + \Bigl(-\int_\beta^\alpha g\Bigr) \\
&= \int_\alpha^\beta f + \int_\alpha^\beta g
\end{aligned}
$$
이다. 같은 (K12)의 (iv)와 (K9)의 $-(-x) = x$에 의해 $\int_\alpha^\beta (f - g) = -\bigl(\int_\beta^\alpha f + (-\int_\beta^\alpha g)\bigr) = -\int_\beta^\alpha f + \int_\beta^\alpha g$이다. 방향 있는 적분의 정의와 (K9)에 의해 $\int_\beta^\alpha g = -\int_\alpha^\beta g$이므로 이것은 $\int_\alpha^\beta f + \bigl(-\int_\alpha^\beta g\bigr) = \int_\alpha^\beta f - \int_\alpha^\beta g$이다.

$\alpha = \beta$인 경우. 방향 있는 적분의 정의에 의해 세 함수는 $\alpha$와 $\beta$ 사이에서 적분가능하고 모든 방향 있는 적분이 $0$이다. $0 = k \cdot 0$([[real-number-arithmetic]]의 (K9)), $0 = 0 + 0$, $0 = 0 - 0$이므로 세 등식이 성립한다.
:::

## 예시와 반례

:::example[x² 과 일차함수를 섞은 함수]
$h(x) = 3x^2 - 2x + 1$로 정한 $h : [0, 1] \to \mathbb{R}$의 적분을 구합니다. $p(x) = x^2$, $q(x) = -2x + 1$로 정한 $[0, 1]$ 위의 함수를 두면 모든 $x$에서 $h(x) = 3\,p(x) + q(x)$이므로 [[real-valued-function]]의 (2)에 의해 $h = 3p + q$입니다. [[riemann-integral-examples|리만 적분의 예]]의 (2)에 의해 $p$는 적분가능하고 $\int_0^1 p = \frac{1 - 0}{3} = \frac{1}{3}$이며, 그 (1)을 기울기 $-2$, 상수 $1$에 쓰면 $q$는 적분가능하고 $\int_0^1 q = \frac{(-2)(1 - 0)}{2} + 1 \cdot (1 - 0) = 0$입니다. (4)에 의해 $3p$와 $3p + q$는 적분가능하고
$$
\int_0^1 h = 3 \cdot \frac{1}{3} + 0 = 1
$$
입니다.
:::

:::example[적분가능한 두 함수에서도 다르부 합의 부등식이 등식이 아닌 분할]
$[0, 1]$ 위의 $f(x) = x$와 $g(x) = -x$를 생각합니다. $f + g$는 값이 $0$인 상수함수이므로 [[darboux-sums]]의 (5)에 의해 $L(\{0, 1\}, f + g) = 0$입니다. $x < y$이면 $f(x) < f(y)$이고 [[order-properties-of-reals]]의 (3)의 (iii)에 의해 $g(y) < g(x)$이므로 $f$는 단조증가이고 $g$는 단조감소입니다([[derivative-and-monotonicity|도함수와 증가·감소]]의 정의). [[monotone-implies-integrable|단조함수의 적분가능성]]의 (2)에 의해 분할 $\{0, 1\}$에서 $L(\{0, 1\}, f) = f(0) \cdot 1 = 0$, $L(\{0, 1\}, g) = g(1) \cdot 1 = -1$입니다. 따라서
$$
\begin{aligned}
&L(\{0, 1\}, f) + L(\{0, 1\}, g) = -1 \\
&\quad < 0 = L(\{0, 1\}, f + g)
\end{aligned}
$$
입니다. [[riemann-integral-examples|리만 적분의 예]]의 (1)에 의해 두 함수는 적분가능하므로 (4)의 등식 $\int_0^1 (f + g) = \int_0^1 f + \int_0^1 g$는 성립합니다. (3)의 부등식이 분할 하나에서 등식이 아니어도 적분에서는 등식일 수 있습니다.
:::

:::counterexample[k = 0 이면 kf 만으로는 f 의 적분가능성을 알 수 없는 예]
$[0, 1]$ 위의 디리클레 함수 $D$는 [[riemann-integral]]의 (5)에 의해 적분가능하지 않습니다. 그러나 $0D$는 모든 점에서 값이 $0 \cdot D(x) = 0$([[real-number-arithmetic]]의 (K9))인 상수함수이므로 같은 (5)에 의해 적분가능합니다. 곧 "$kf$가 적분가능하면 $f$가 적분가능하다"는 $k = 0$에서 성립하지 않을 수 있습니다. $k \ne 0$이면 계산 법칙($k^{-1}k = 1$과 결합법칙, [[real-number-arithmetic]])으로 모든 $x$에서 $f(x) = k^{-1}\bigl(k f(x)\bigr)$이므로 $f = k^{-1}(kf)$이고, $kf$가 적분가능하면 (4)에 의해 $f$도 적분가능합니다.
:::

## 확인 질문

:::check[$f : [0, 2] \to \mathbb{R}$가 적분가능하고 $\int_0^2 f = 3$이면 $\int_0^2 \bigl(2f(x) - 1\bigr)\,dx$는?]
$x$에서의 값이 $2f(x) - 1$인 함수는 $2f$에서 값이 $1$인 상수함수를 뺀 것입니다. 상수함수의 적분은 [[riemann-integral]]의 (5)에 의해 $1 \cdot (2 - 0) = 2$이므로 (4)에 의해 $\int_0^2 \bigl(2f(x) - 1\bigr)\,dx = 2 \cdot 3 - 2 = 4$입니다.
:::

:::check[$f$와 $f + g$가 $[a, b]$에서 적분가능하면 $g$도 적분가능한가?]
그렇습니다. 모든 $x$에서 $\bigl((f + g) - f\bigr)(x) = f(x) + g(x) - f(x) = g(x)$이므로 $g = (f + g) - f$이고, (4)에 의해 $g$는 적분가능하며 $\int_a^b g = \int_a^b (f + g) - \int_a^b f$입니다. (5)는 $f + g$만 적분가능하고 $f$는 적분가능하지 않은 경우입니다.
:::
