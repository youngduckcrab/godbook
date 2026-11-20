---
title: 미적분의 기본정리 (첫째 꼴)
title_en: Fundamental Theorem of Calculus (First Form)
aliases: [미적분의 기본정리, 미적분학의 기본정리, 미적분의 기본정리 첫째 꼴, fundamental theorem of calculus, fundamental theorem of calculus first form]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "닫힌구간에서 연속이고 안쪽의 모든 점에서 미분가능한 함수 F 의 도함수가 안쪽에서 적분가능한 함수 f 와 같으면 ∫ f 는 F(b) − F(a) 이다. 끝점의 순서와 상관없이 쓰는 방향 있는 꼴과, 유한 개의 점에서 미분가능하지 않아도 되는 꼴을 함께 증명한다."
requires: [finite-set, subset-of-finite-set, adding-or-removing-an-element, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, absolute-value, interval, real-valued-function, limit-of-a-function, continuous-function, continuity-of-sum-and-product, derivative, differentiable-implies-continuous, derivative-rules, derivative-of-power, mean-value-theorem, derivative-and-monotonicity, finite-sum-of-reals, linearity-and-order-of-finite-sums, telescoping-sum, partition-of-an-interval, darboux-sums, riemann-integral, riemann-integral-examples, monotone-implies-integrable, additivity-of-the-integral, oriented-integral, continuously-differentiable]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.3절(5.3.1 소절 First form of the theorem) Theorem 5.3.1 과 그 뒤 문단, 증명 (p.200–201), Example 5.3.2 (p.201); 5.3절(5.3.4 소절) 연습문제 5.3.3, 5.3.6 (p.205); 5.1절(5.1.3 소절) 방향 있는 적분의 정의 (p.188); 5.3절(5.3.2 소절) 둘째 꼴 뒤의 예 (p.203); 5.1절(5.1.4 소절) 연습문제 5.1.9 (p.189); 5.5절 Example 5.5.11 (p.219)
    checked: original
    note: "출처의 Theorem 5.3.1(p.200)은 F : [a, b] → ℝ 가 연속이고 (a, b) 에서 미분가능하며 f ∈ R[a, b] 가 x ∈ (a, b) 에서 f(x) = F′(x) 이면 ∫_a^b f = F(b) − F(a) 라는 것으로, 이 항목의 (1)과 같다. 출처의 증명(p.200–201)은 작은 구간마다 평균값 정리로 c_i ∈ (x_{i−1}, x_i) 를 찾아 f(c_i)Δx_i = F(x_i) − F(x_{i−1}) 로 두고, m_i ≤ f(c_i) ≤ M_i 에 Δx_i 를 곱해 i 에 대해 더한 뒤 가운데 합이 망원 합으로 F(b) − F(a) 가 된다고 하고, 하합의 상한과 상합의 하한을 잡아 등식을 얻는다. 이 항목은 c_i 들을 늘어놓지 않는다. i 마다 평균값 정리가 주는 점의 존재는 그 i 에 대한 부등식 m_iΔx_i ≤ F(x_i) − F(x_{i−1}) ≤ M_iΔx_i 를 보이는 데에만 쓰고, 그 부등식들을 유한 합의 항별 비교와 망원 합으로 모은 뒤 riemann-integral 의 (3)으로 끝낸다. 작은 구간으로 제한한 F 가 연속이고 안쪽에서 미분가능하다는 단계는 출처가 적지 않으며, 이 항목은 continuous-function 의 (5)와 derivative 의 (2)로 보였다. (1)의 '더 자세히'는 출처 증명 안의 식 L(P, f) ≤ F(b) − F(a) ≤ U(P, f)(p.201)를 진술로 올린 것이다. (2)는 (1)을 출처 5.1.3 소절(p.188)의 방향 있는 적분의 정의(b < a 이면 ∫_a^b f = −∫_b^a f)와 합친 꼴이다. (3)의 (ii)는 출처가 Theorem 5.3.1 뒤 문단(p.200)에서 유한 개의 점에서 미분가능하지 않아도 된다는 일반화를 연습문제로 남긴다고 적은 연습문제 5.3.3(p.205)과 같은 결론이다. 출처의 연습문제는 [a, b] − S 의 점에서 미분가능을 가정하고, 이 항목은 a < x < b 이고 x ∉ S 인 점에서만 묻는다(끝점에서의 미분가능은 (1)도 쓰지 않는다). (3)의 (i)과, (ii)를 (i)로 옮기는 분할은 이 항목이 증명에 쓰려고 둔 것이다. 예시 '∫_{−1}^{2} x² dx'는 출처 Example 5.3.2(p.201; x³/3 의 도함수가 x² 임을 써서 ∫_0^1 x² dx = 1/3)와 같은 발상이다. 예시 '끝점의 값이 F′과 다른 f'는 출처 Theorem 5.3.1 이 f(x) = F′(x) 를 x ∈ (a, b) 에서만 가정하는 것을 쓰는 예이고, 그 f 는 [0, 1] 위에서 0 에서만 값이 다른 두 함수의 적분이 같다는 출처 연습문제 5.1.9(5.1.4 소절, p.189)와 같은 상황이다. 확인 질문 1 은 출처 연습문제 5.3.6(p.205; 도함수가 같은 두 연속미분가능한 함수는 상수만큼 다르다는 것을 미적분의 기본정리로 보이라)과 같은 발상이고, 결론은 출처 Proposition 4.2.6(4.2.4 소절, p.165; 도함수가 0 이면 상수)의 a, b 에서의 경우와 같다. 확인 질문 2 의 함수(x < 0 이면 −1, x ≥ 0 이면 1)와 |x| 는 출처 5.3.2 소절의 예(p.203)와 같은 짝이다. 출처는 그 예를 둘째 꼴에 쓴다. 이 확인 질문은 (3)의 (ii), 곧 출처 연습문제 5.3.3 의 결론을 S = {0} 에 쓰는 계산이고, 답 ∫_{−1}^{1} f = 0 은 출처 Example 5.5.11(5.5절, p.219; x ≠ 0 이면 |x|/x, 0 에서 0 인 함수의 ∫_{−a}^{a} f = 0)에서 a = 1 인 값과 같다(두 함수는 0 에서의 값만 다르다)."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 반례의 빠진 근거 2건과 조건이 빠진 설명 문장 2건을 고쳤다."
added: 2026-11-20
---

:::statement
리만 적분가능, $\int_a^b f$, "$[a, b]$에서 적분가능"은 [[riemann-integral]]의 것이고, 방향 있는 적분 $\int_\alpha^\beta f$와 "$\alpha$와 $\beta$ 사이에서 적분가능"은 [[oriented-integral]]의 것이다. 미분가능, 미분계수, "열린구간에서 미분가능", 미분가능한 함수와 도함수는 [[derivative]]의 것이고, 연속과 연속함수는 [[continuous-function]]의 것이며, 연속미분가능은 [[continuously-differentiable]]의 것이다. $[a, b]$의 분할과 다르부 합 $L(P, f)$, $U(P, f)$는 [[partition-of-an-interval]]과 [[darboux-sums]]의 것이고, 유한집합은 [[finite-set]]의 것이다.

1. (닫힌구간) $a < b$인 실수 $a$, $b$와 $F : [a, b] \to \mathbb{R}$, $f : [a, b] \to \mathbb{R}$에 대하여, $F$가 연속함수이고 열린구간 $(a, b)$에서 미분가능하며, $f$가 리만 적분가능하고 $a < x < b$인 모든 $x$에서 $f(x) = F'(x)$이면
   $$
   \int_a^b f = F(b) - F(a)
   $$
   이다. 더 자세히, $[a, b]$의 모든 분할 $P$에서 $L(P, f) \le F(b) - F(a) \le U(P, f)$이다. 가정에는 $f(a)$, $f(b)$의 값이 들어가지 않고, $F$가 $a$나 $b$에서 미분가능할 필요도 없다.
2. (방향 있는 꼴) $I$를 구간, $F : I \to \mathbb{R}$를 미분가능한 함수라 하고 $\alpha$, $\beta$를 $I$의 원소라 하자(순서와 같음은 아무래도 좋다). 도함수 $F'$이 $\alpha$와 $\beta$ 사이에서 적분가능하면
   $$
   \int_\alpha^\beta F' = F(\beta) - F(\alpha)
   $$
   이다. 특히 $F$가 연속미분가능하면 $F'$은 $I$의 어느 두 점 사이에서도 적분가능하므로, 이 식이 $I$의 모든 원소 $\alpha$, $\beta$에서 성립한다.
3. (미분가능하지 않은 점이 유한 개) $a < b$이고 $F : [a, b] \to \mathbb{R}$가 연속함수이며 $f : [a, b] \to \mathbb{R}$가 리만 적분가능하다고 하자.
   - (i) $P$가 $[a, b]$의 분할이고, $a < x < b$이며 $x \notin P$인 모든 $x$에서 $F$가 $x$에서 미분가능하고 $f(x) = F'(x)$이면 $\int_a^b f = F(b) - F(a)$이다.
   - (ii) $S$가 $\mathbb{R}$의 유한 부분집합이고, $a < x < b$이며 $x \notin S$인 모든 $x$에서 $F$가 $x$에서 미분가능하고 $f(x) = F'(x)$이면 $\int_a^b f = F(b) - F(a)$이다. $S = \emptyset$이면 (1)과 같다.
:::

:::english
Riemann integrability, $\int_a^b f$ and "integrable on $[a, b]$" are those of the entry on the Riemann integral, and the oriented integral $\int_\alpha^\beta f$ and "integrable between $\alpha$ and $\beta$" are those of the entry on the oriented integral. Differentiability, derivatives at a point, "differentiable on an open interval", differentiable functions and the derivative are those of the entry on derivatives; continuity and continuous functions are those of the entry on continuous functions; continuous differentiability is that of the entry on continuously differentiable functions. Partitions of $[a, b]$ and the Darboux sums $L(P, f)$, $U(P, f)$ are those of the entries on partitions and Darboux sums, and finite sets are those of the entry on finite sets.

1. (Closed interval) Let $a < b$ be real numbers and $F : [a, b] \to \mathbb{R}$, $f : [a, b] \to \mathbb{R}$. If $F$ is a continuous function that is differentiable on the open interval $(a, b)$, and $f$ is Riemann integrable with $f(x) = F'(x)$ for every $x$ with $a < x < b$, then
   $$
   \int_a^b f = F(b) - F(a).
   $$
   More precisely, $L(P, f) \le F(b) - F(a) \le U(P, f)$ for every partition $P$ of $[a, b]$. The hypotheses do not involve the values $f(a)$, $f(b)$, and $F$ need not be differentiable at $a$ or $b$.
2. (Oriented form) Let $I$ be an interval, $F : I \to \mathbb{R}$ a differentiable function, and $\alpha$, $\beta$ elements of $I$ (in any order, possibly equal). If the derivative $F'$ is integrable between $\alpha$ and $\beta$, then
   $$
   \int_\alpha^\beta F' = F(\beta) - F(\alpha).
   $$
   In particular, if $F$ is continuously differentiable, then $F'$ is integrable between any two points of $I$, so this formula holds for all elements $\alpha$, $\beta$ of $I$.
3. (Finitely many points of non-differentiability) Let $a < b$, let $F : [a, b] \to \mathbb{R}$ be a continuous function, and let $f : [a, b] \to \mathbb{R}$ be Riemann integrable.
   - (i) If $P$ is a partition of $[a, b]$ and, for every $x$ with $a < x < b$ and $x \notin P$, $F$ is differentiable at $x$ and $f(x) = F'(x)$, then $\int_a^b f = F(b) - F(a)$.
   - (ii) If $S$ is a finite subset of $\mathbb{R}$ and, for every $x$ with $a < x < b$ and $x \notin S$, $F$ is differentiable at $x$ and $f(x) = F'(x)$, then $\int_a^b f = F(b) - F(a)$. If $S = \emptyset$, this is the same as (1).
:::

## 직관

$F(b) - F(a)$는 $F$가 $a$에서 $b$까지 변한 양입니다. 구간을 작은 구간들로 나누면 이 양은 작은 구간마다 변한 양 $F(x_i) - F(x_{i-1})$의 합이고, 평균값 정리에 의해 각 작은 구간의 변한 양은 그 구간 어딘가의 기울기 $F'$에 길이 $\Delta x_i$를 곱한 것입니다. 그 기울기는 $f$의 값이므로 그 구간의 하한 $m_i$와 상한 $M_i$ 사이에 있습니다. 그래서 변한 양 전체는 모든 분할에서 하합과 상합 사이에 끼고, 그런 수는 적분 하나뿐입니다.

자동차에 비유하면 $F(t)$는 시각 $t$의 위치, $f(t) = F'(t)$는 속도입니다. 출발에서 도착까지 위치가 변한 양은 속도를 시간에 대해 적분한 것과 같습니다. 시간을 잘게 나누어 각 구간에서 "가장 느린 속도 × 시간"을 더하면 이동한 양보다 크지 않고, "가장 빠른 속도 × 시간"을 더하면 작지 않다는 것이 증명의 줄기입니다. 비유가 맞지 않는 곳은, 이동한 양이 음수일 수 있고(되돌아간 경우) 속도도 음수일 수 있다는 점입니다.

끝점에서는 미분가능을 묻지 않지만 $F$의 연속은 필요합니다. 아래 반례는 $F$가 끝점 하나에서만 값을 바꾸어 연속이 깨지면 등식이 성립하지 않을 수 있음을 보입니다. 거꾸로 $f$의 끝점의 값은 결론에 영향을 주지 않습니다.

## 증명

:::idea
분할의 작은 구간마다 평균값 정리를 써서 $m_i\Delta x_i \le F(x_i) - F(x_{i-1}) \le M_i\Delta x_i$를 보이고, 이것을 더하면 가운데는 망원 합으로 $F(b) - F(a)$가 된다. 모든 분할의 하합과 상합 사이에 있는 수는 적분이다.
:::

:::hint
작은 구간 $[x_{i-1}, x_i]$로 $F$를 제한한 함수에 평균값 정리를 쓸 수 있는지 확인하세요. 안쪽의 점은 $a$와 $b$ 사이에 있습니다.
:::

:::hint
평균값 정리가 주는 점은 그 $i$의 부등식을 얻는 데에만 쓰고, 점들을 늘어놓지 않아도 됩니다. 부등식을 $i$에 대해 더하는 것은 유한 합의 항별 비교입니다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. "분할 (2)"처럼 쓴 것은 [[partition-of-an-interval]]의 번호, "다르부 (1)"은 [[darboux-sums]]의 번호, "순서 성질 (4)"는 [[order-properties-of-reals]]의 번호, "방향 (1)"은 [[oriented-integral]]의 번호이다.

**1의 증명.** $f$는 적분가능하므로 [[riemann-integral]]의 정의에 의해 유계이고, 다르부 합이 정의된다. $P$를 $[a, b]$의 분할, 그 점을 $x_0, \dots, x_n$이라 하자.

$1 \le i \le n$인 정수 $i$를 하나 잡는다. 분할 (2)에 의해 $x_{i-1} < x_i$이고 $J = [x_{i-1}, x_i]$는 $[a, b]$의 부분집합이며, [[interval]]의 (1)에 의해 구간이다. $G = F|_J$로 두면 [[continuous-function]]의 (5)에 의해 $G$는 연속함수이다. $x_{i-1} < t < x_i$이면 분할 (1)의 $a \le x_{i-1}$, $x_i \le b$와 순서 성질 (1)의 (v)에 의해 $a < t < b$이므로, 가정에 의해 $F$는 $t$에서 미분가능하고 $F'(t) = f(t)$이다. [[derivative]]의 (2)에 의해 $G$는 $t$에서 미분가능하고 $G'(t) = F'(t) = f(t)$이다. 곧 $G$는 열린구간 $(x_{i-1}, x_i)$에서 미분가능하다. [[mean-value-theorem|평균값 정리]]를 $G$에 쓰면 $x_{i-1} < c < x_i$이고
$$
\begin{aligned}
F(x_i) - F(x_{i-1}) &= G(x_i) - G(x_{i-1}) \\
&= G'(c)\,\Delta x_i \\
&= f(c)\,\Delta x_i
\end{aligned}
$$
인 실수 $c$가 있다. $c$는 $i$번째 작은 구간의 점이므로 다르부 (1)에 의해 $m_i \le f(c) \le M_i$이고, 분할 (2)의 $0 < \Delta x_i$와 순서 성질 (4)의 (iii)에 의해 $m_i\Delta x_i \le f(c)\,\Delta x_i \le M_i\Delta x_i$이다. 따라서
$$
\begin{aligned}
m_i\,\Delta x_i &\le F(x_i) - F(x_{i-1}) \\
&\le M_i\,\Delta x_i
\end{aligned}
$$
이다. 이 부등식을 (가)라 하자. (가)에는 $c$가 나오지 않는다. $c$는 이 $i$에 대한 (가)를 얻는 데에만 썼고, $i$마다 점을 늘어놓지 않는다. $i$는 $1 \le i \le n$인 임의의 정수였으므로 (가)는 그런 모든 $i$에서 성립한다.

$0 \le i \le n$인 정수 $i$마다 $c_i = F(x_i)$는 식으로 정해진 실수이고, $F(x_i) - F(x_{i-1})$, $m_i\Delta x_i$, $M_i\Delta x_i$는 $1 \le i \le n$에서 정해진 항이다. [[linearity-and-order-of-finite-sums|유한 합의 항별 비교]]의 (3)을 같은 항목의 (8)에 의해 이 항들에 쓰면 (가)에서
$$
\begin{aligned}
\sum_{i=1}^{n} m_i\,\Delta x_i &\le \sum_{i=1}^{n} \bigl(F(x_i) - F(x_{i-1})\bigr) \\
&\le \sum_{i=1}^{n} M_i\,\Delta x_i
\end{aligned}
$$
이다. 왼쪽은 $L(P, f)$, 오른쪽은 $U(P, f)$이고([[darboux-sums]]의 정의), 가운데는 [[telescoping-sum|망원 합]]의 (1)과 분할 (1)의 $x_0 = a$, $x_n = b$에 의해 $F(x_n) - F(x_0) = F(b) - F(a)$이다. 따라서 $L(P, f) \le F(b) - F(a) \le U(P, f)$이다. $P$는 임의의 분할이었으므로 [[riemann-integral]]의 (3)(사이에 끼인 수)에 의해 $F(b) - F(a) = \int_a^b f$이다. 이 증명은 $f(a)$, $f(b)$와 $F$의 $a$, $b$에서의 미분가능을 쓰지 않았다.

**2의 증명.** [[differentiable-implies-continuous|미분가능하면 연속이라는 정리]]의 (2)에 의해 $F$는 연속함수이다.

*$\alpha < \beta$인 경우.* [[interval]]의 (4)에 의해 $[\alpha, \beta] \subseteq I$이고, $G = F|_{[\alpha, \beta]}$, $g = F'|_{[\alpha, \beta]}$로 두자. [[continuous-function]]의 (5)에 의해 $G$는 연속함수이다. $\alpha < t < \beta$이면 $F$는 $t$에서 미분가능하므로 [[derivative]]의 (2)를 구간 $[\alpha, \beta]$([[interval]]의 (1))에 쓰면 $G$는 $t$에서 미분가능하고 $G'(t) = F'(t) = g(t)$이다. 가정에 의해 $F'$은 $[\alpha, \beta]$에서 적분가능하고, 이것은 [[riemann-integral]]의 (4)에 의해 $g$가 적분가능하다는 뜻이며 $\int_\alpha^\beta F' = \int_\alpha^\beta g$이다. 1을 $G$와 $g$에 쓰면 $\int_\alpha^\beta g = G(\beta) - G(\alpha) = F(\beta) - F(\alpha)$이다. 방향 있는 적분의 정의에 의해 $\alpha < \beta$일 때 $\int_\alpha^\beta F'$은 이 적분이다.

*$\beta < \alpha$인 경우.* 앞 경우를 $\beta$, $\alpha$에 쓰면 $\int_\beta^\alpha F' = F(\alpha) - F(\beta)$이고, 방향 있는 적분의 정의와 (K9), (K12)에 의해 $\int_\alpha^\beta F' = -\bigl(F(\alpha) - F(\beta)\bigr) = F(\beta) - F(\alpha)$이다.

*$\alpha = \beta$인 경우.* 정의에 의해 $\int_\alpha^\beta F' = 0$이고, (K12)의 (v)에 의해 $F(\beta) - F(\alpha) = 0$이다.

마지막 문장: $F$가 연속미분가능하고 $\alpha < \beta$이면 [[continuously-differentiable]]의 (1)에 의해 $F'$은 $[\alpha, \beta]$에서 적분가능하고, $\beta < \alpha$이면 같은 까닭으로 $[\beta, \alpha]$에서 적분가능하며, $\alpha = \beta$이면 정의에 의해 사이에서 적분가능하다. 따라서 $F'$은 $\alpha$와 $\beta$ 사이에서 적분가능하고 앞의 식이 성립한다.

**3의 증명.** (i) $P$의 점을 $x_0, \dots, x_n$이라 하자. $1 \le i \le n$인 정수 $i$를 잡고 $J = [x_{i-1}, x_i]$로 둔다. $x_{i-1} < t < x_i$이면 1의 증명에서처럼 $a < t < b$이다. 또 $t \notin P$이다. $t \in P$라면 분할 (1)에 의해 $t = x_k$인 정수 $k$가 있고, 분할 (1)의 순서의 대응에 의해 $i - 1 < k < i$인데, [[prime-number]]의 (Z1)에 의해 $i \le k$가 되어 $k < i$와 함께 [[well-ordering-principle]]의 (L1)에 어긋나기 때문이다. 따라서 가정에 의해 $F$는 $t$에서 미분가능하고 $F'(t) = f(t)$이다. 1의 증명에서처럼 $F|_J$는 연속함수이고 $(x_{i-1}, x_i)$의 모든 점에서 미분가능하며 그 미분계수는 $f|_J$의 값과 같다. [[additivity-of-the-integral|적분의 구간 덧셈]]의 (3)에 의해 $f$는 $J$에서 적분가능하고, 1을 $F|_J$와 $f|_J$에 쓰면 $\int_{x_{i-1}}^{x_i} f = F(x_i) - F(x_{i-1})$이다([[riemann-integral]]의 (4)).

이것이 $1 \le i \le n$인 모든 $i$에서 성립하므로, [[additivity-of-the-integral|적분의 구간 덧셈]]의 (3), [[finite-sum-of-reals|유한 합]]의 (4)(범위 안의 항에만 의존, [[linearity-and-order-of-finite-sums]]의 (8)에 의해 범위에서만 정해진 항에 쓴다), [[telescoping-sum|망원 합]]의 (1)에 의해
$$
\begin{aligned}
\int_a^b f &= \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} f \\
&= \sum_{i=1}^{n} \bigl(F(x_i) - F(x_{i-1})\bigr) \\
&= F(b) - F(a)
\end{aligned}
$$
이다.

(ii) $T = (S \cap [a, b]) \cup \{a, b\}$로 두고 $T$가 $[a, b]$의 분할임을 보인다. $S \cap [a, b] \subseteq S$이므로 [[subset-of-finite-set]]의 (1)에 의해 $S \cap [a, b]$는 유한집합이다. 유한집합 $A$와 실수 $u$에 대하여 $A \cup \{u\}$는 유한집합이다. $u \in A$이면 $A \cup \{u\} = A$이고, $u \notin A$이면 [[adding-or-removing-an-element]]의 (a)에 의해 원소가 하나 많은 유한집합이기 때문이다. 이것을 두 번 쓰면 $T = \bigl((S \cap [a, b]) \cup \{a\}\bigr) \cup \{b\}$는 유한집합이다. [[interval]]의 (3)에 의해 $a$, $b \in [a, b]$이므로 $T \subseteq [a, b]$이고, $a$, $b \in T$이다. 따라서 $T$는 $[a, b]$의 분할이다.

$a < x < b$이고 $x \notin T$라 하자. $x \in [a, b]$이므로, $x \in S$라면 $x \in S \cap [a, b] \subseteq T$가 되어 모순이다. 따라서 $x \notin S$이고, 가정에 의해 $F$는 $x$에서 미분가능하고 $f(x) = F'(x)$이다. (i)을 $P = T$로 쓰면 결론을 얻는다. $S = \emptyset$이면 $T = \{a, b\}$이고 가정은 (1)의 가정과 같다. $\blacksquare$
:::

## 예시와 반례

:::example[$\int_{-1}^{2} x^2\,dx$]
$F = 3^{-1}p_3 : \mathbb{R} \to \mathbb{R}$, 곧 $F(x) = x^3/3$으로 둡니다. [[derivative-of-power|거듭제곱 함수의 미분]]의 (1)과 [[derivative-rules|미분의 규칙]]의 (6)에 의해 $F$는 미분가능한 함수이고, 모든 실수 $x$에서 $F'(x) = 3^{-1} \cdot 3x^2 = x^2$입니다([[real-number-arithmetic]]의 (K2), (K8)의 (iii), (K4)). [[continuously-differentiable]]의 (3), (4)에 의해 $F$는 연속미분가능하므로 (2)를 $I = \mathbb{R}$([[interval]]의 (2)), $\alpha = -1$, $\beta = 2$에 쓸 수 있습니다. $-1 < 2$이므로 왼쪽은 $[-1, 2]$ 위의 $x^2$의 적분이고([[riemann-integral]]의 (4)), [[power-of-a-real-number]]의 (1)에 의해 $2^3 = 8$, $(-1)^3 = -1$이므로
$$
\begin{aligned}
\int_{-1}^{2} x^2\,dx &= F(2) - F(-1) \\
&= \frac{8}{3} - \frac{-1}{3} = \frac{9}{3} = 3
\end{aligned}
$$
입니다([[real-number-arithmetic]]의 (K3), (K7), (K9), (K12)). [[riemann-integral-examples|리만 적분의 예]]의 (2)는 $0 \le a$인 구간만 다루었지만, 이 정리는 $0$을 안에 품은 구간에도 바로 씁니다.
:::

:::counterexample[왼쪽 끝점에서 연속이 아닌 $F$의 예]
$F : [0, 1] \to \mathbb{R}$를 $F(0) = 1$, $0 < x \le 1$이면 $F(x) = 0$으로 정하고, $f$를 $[0, 1]$ 위의 값이 $0$인 상수함수라 합니다. $0 < c < 1$이면 $x \in [0, 1] - \{c\}$이고 $|x - c| < c$인 $x$는 [[absolute-value|절댓값]]의 (8)에 의해 $0 < x$이므로, 차분몫은 $q_c(x) = (0 - 0)(x - c)^{-1} = 0$입니다((K9)). 곧 "$q_c(x) = 0$"이 $c$ 가까이에서 성립하므로, [[limit-of-a-function]]의 (4)와 (5)에 의해 $q_c$는 $c$에서 $0$으로 수렴합니다. 따라서 $F$는 $(0, 1)$에서 미분가능하고 $F'(x) = 0 = f(x)$입니다. $f$는 적분가능하고 $\int_0^1 f = 0$이지만([[riemann-integral]]의 (5)), $F(1) - F(0) = 0 - 1 = -1$입니다. (1)의 다른 가정은 모두 성립하므로 $F$는 연속함수일 수 없습니다(연속함수라면 (1)에 의해 $-1 = 0$이 됩니다). 실제로 $F$는 $0$에서 연속이 아닙니다. 양의 실수 $\delta$마다 $x = 2^{-1}\min\{\delta, 1\}$로 두면 $0 < x < \delta$이고 $x \le 1$이며([[absolute-value|절댓값]]의 (10), [[order-properties-of-reals]]의 (8)), $|F(x) - F(0)| = |0 - 1| = 1$이므로 [[continuous-function]]의 (1)을 $\varepsilon = 1$로 쓸 수 있습니다.
:::

:::example[끝점의 값이 $F'$과 다른 $f$]
$f : [0, 1] \to \mathbb{R}$를 $f(0) = 5$, $0 < x \le 1$이면 $f(x) = 1$로 정하고 $F = i_{[0, 1]}$, 곧 $F(x) = x$라 합니다. $x < y$이면 $x = 0$일 때 $f(y) = 1 \le 5 = f(x)$이고, $0 < x$일 때 $f(x) = f(y) = 1$이므로 $f$는 단조감소이고([[derivative-and-monotonicity|도함수와 증가·감소]]의 정의), [[monotone-implies-integrable|단조함수의 적분가능성]]의 (4)에 의해 적분가능합니다. $F$는 [[continuous-function]]의 (4)에 의해 연속함수이고 [[derivative]]의 (1)에 의해 모든 점에서 $F'(x) = 1$입니다. $0 < x < 1$이면 $f(x) = 1 = F'(x)$이므로 (1)에 의해 $\int_0^1 f = F(1) - F(0) = 1$입니다. $f(0) = 5 \ne 1 = F'(0)$이어도 결론은 그대로입니다.
:::

## 확인 질문

:::check[$a < b$이고 $F : [a, b] \to \mathbb{R}$가 연속함수이며 $a < x < b$인 모든 $x$에서 $F'(x) = 0$이면 $F(a)$와 $F(b)$는 어떤 관계인가?]
$F(a) = F(b)$입니다. $f$를 $[a, b]$ 위의 값이 $0$인 상수함수라 하면 [[riemann-integral]]의 (5)에 의해 $f$는 적분가능하고 $\int_a^b f = 0$이며, $a < x < b$에서 $f(x) = 0 = F'(x)$입니다. (1)에 의해 $F(b) - F(a) = 0$이고, [[real-number-arithmetic]]의 (K12)의 (v)에 의해 $F(a) = F(b)$입니다.
:::

:::check[$[-1, 1]$ 위에서 $x < 0$이면 $-1$, $0 \le x$이면 $1$인 함수 $f$의 적분은?]
$\int_{-1}^{1} f = 0$입니다. $x < y$이면 $f(x) \le f(y)$이므로 $f$는 단조증가이고([[derivative-and-monotonicity|도함수와 증가·감소]]의 정의) [[monotone-implies-integrable|단조함수의 적분가능성]]의 (4)에 의해 적분가능합니다. $F(x) = |x|$로 정한 $F : [-1, 1] \to \mathbb{R}$는 [[continuous-function]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 연산]]의 (3)에 의해 연속함수이고, [[derivative]]의 (3)을 $r = 1$로 쓰면 $0 < x$에서 $F'(x) = 1$, $x < 0$에서 $F'(x) = -1$입니다. 곧 $x \ne 0$이고 $-1 < x < 1$이면 $F$는 $x$에서 미분가능하고 $f(x) = F'(x)$입니다. (3)의 (ii)를 $S = \{0\}$으로 쓰면 $\int_{-1}^{1} f = F(1) - F(-1) = 1 - 1 = 0$입니다([[absolute-value|절댓값]]의 (1)). $F$가 $0$에서 미분가능하지 않으므로 (1)만으로는 이 계산을 할 수 없습니다.
:::
