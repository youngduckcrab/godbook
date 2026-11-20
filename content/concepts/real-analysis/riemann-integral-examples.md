---
title: 리만 적분의 예
title_en: Examples of Riemann Integrals
aliases: [일차함수의 적분, x 의 적분, x² 의 적분, 한 점에서만 값이 다른 함수의 적분, integral of x, integral of x squared, integral of a linear function]
kind: proposition
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "일차함수 px + q 의 [a, b] 위의 적분은 p(b² − a²)/2 + q(b − a) 이고, 0 ≤ a 이면 x² 의 [a, b] 위의 적분은 (b³ − a³)/3 이다. 한 점에서만 0 이 아닌 값을 갖는 함수의 적분은 0 이다. 모두 정의와 판정으로 직접 계산한다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, real-valued-function, interval, derivative-and-monotonicity, finite-sum-of-reals, linearity-and-order-of-finite-sums, telescoping-sum, sum-of-integers-and-squares, partition-of-an-interval, uniform-partition, darboux-sums, riemann-integral, integrability-criterion, monotone-implies-integrable]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.1절(5.1.2 소절) Example 5.1.11 (p.186), Example 5.1.12 (p.186–187), Example 5.1.14 (p.187–188); 5.1.4 소절 연습문제 5.1.2, 5.1.6 (p.188–189); 5.3절(5.3.1 소절) Theorem 5.3.1 의 증명, Example 5.3.2 (p.200–201); 5.3.4 소절 연습문제 5.3.13 (p.206)
    checked: original
    note: "(1)의 특수한 경우 ∫_0^1 x dx 는 출처 연습문제 5.1.2(p.188, [0, 1] 위의 f(x) = x 가 적분가능함을 보이고 적분을 정의로 구하라)와 같은 물음이고, 이 항목은 일반 일차함수와 일반 구간으로 넓혔다. (2)의 a = 0, b = 1 인 값 1/3 은 출처 Example 5.3.2(p.201)가 기본정리로 얻는 ∫_0^1 x² dx = 1/3 과 같다. (1)과 (2)의 증명은 작은 구간마다 m_iΔx_i ≤ c_i − c_{i−1} ≤ M_iΔx_i 를 보이고 망원 합으로 더해 모든 분할에서 L(P, f) ≤ (값) ≤ U(P, f) 를 얻는 것으로, 출처 Theorem 5.3.1(미적분의 기본정리 첫째 꼴)의 증명(p.200–201)과 같은 꼴이다. 출처는 그곳에서 평균값 정리로 점 c_i 를 잡고, 이 항목은 c_i 를 식으로 주어 점을 잡지 않는다(일차함수는 작은 구간의 가운데 점의 값을 쓰고, x² 은 부등식 u² ≤ (u² + uv + v²)/3 ≤ v² 를 쓴다). (3)은 출처 연습문제 5.1.6(p.189, c ∈ (a, b) 에서만 값이 d 이고 나머지는 0 인 함수의 적분을 정의로 구하라)과 같은 물음이고, 분할 {a, c − t, c + t, b} 로 뛰는 점을 짧은 작은 구간에 가두는 것은 출처 Example 5.1.12(p.186–187)의 분할 {0, 1 − ε, 1 + ε, 2} 와 같은 발상이다. 예시 '균등 분할로 계산한 x² 의 다르부 합' 은 출처 Example 5.1.14(p.187–188)의 균등 분할 x_i = ib/n 과 같은 분할을 쓰고, 연습문제 5.3.13(p.206, Σ k^ℓ / n^{ℓ+1} 의 극한)과 같은 합을 계산한다. 상수함수의 적분(출처 Example 5.1.11)은 riemann-integral 의 (5)에 있고, 이 항목의 (1)의 p = 0 인 경우와 같다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 부정 주장 1건과 넘겨짚은 일반 문장 5건을 고쳤다."
added: 2026-11-20
---

:::statement
리만 적분가능, $\int_a^b f$, 적분 변수의 표기 $\int_a^b (x\text{에 대한 식})\,dx$는 [[riemann-integral]]의 것이고, 실수의 거듭제곱 $x^2 = xx$, $x^3 = x^2 x$는 [[power-of-a-real-number]]의 것이다. $x/2$, $x/3$은 $x \cdot 2^{-1}$, $x \cdot 3^{-1}$이다. 아래에서 $a$, $b$는 $a < b$인 실수이다.

1. (일차함수) 실수 $p$, $q$에 대하여 $f(x) = px + q$로 정한 함수 $f : [a, b] \to \mathbb{R}$는 적분가능하고
   $$
   \begin{aligned}
   &\int_a^b (px + q)\,dx \\
   &\quad = \frac{p\,(b^2 - a^2)}{2} + q\,(b - a)
   \end{aligned}
   $$
   이다. 특히 $\int_a^b x\,dx = \dfrac{b^2 - a^2}{2}$이고, $0 < b$이면 $\int_0^b x\,dx = \dfrac{b^2}{2}$이다.
2. (제곱) $0 \le a$이면 $f(x) = x^2$으로 정한 함수 $f : [a, b] \to \mathbb{R}$는 적분가능하고
   $$
   \int_a^b x^2\,dx = \frac{b^3 - a^3}{3}
   $$
   이다. 특히 $0 < b$이면 $\int_0^b x^2\,dx = \dfrac{b^3}{3}$이다.
3. (분할마다의 부등식) (1)과 (2)의 함수 $f$와 그 적분값 $I$는 $[a, b]$의 모든 분할 $P$에서 $L(P, f) \le I \le U(P, f)$를 만족한다.
4. (한 점에서만 값이 다른 함수) $a < c < b$인 실수 $c$와 실수 $d$에 대하여 $f(c) = d$이고 $x \ne c$이면 $f(x) = 0$으로 정한 함수 $f : [a, b] \to \mathbb{R}$는 적분가능하고 $\int_a^b f = 0$이다.
:::

:::english
Riemann integrability, $\int_a^b f$, and the notation $\int_a^b (\text{an expression in } x)\,dx$ are as in the entry on the Riemann integral, and the powers $x^2 = xx$, $x^3 = x^2 x$ of real numbers are as in the entry on powers of a real number. Here $x/2$ and $x/3$ mean $x \cdot 2^{-1}$ and $x \cdot 3^{-1}$. Below, $a$ and $b$ are real numbers with $a < b$.

1. (Linear functions) For real numbers $p$ and $q$, the function $f : [a, b] \to \mathbb{R}$ defined by $f(x) = px + q$ is integrable and
   $$
   \begin{aligned}
   &\int_a^b (px + q)\,dx \\
   &\quad = \frac{p\,(b^2 - a^2)}{2} + q\,(b - a).
   \end{aligned}
   $$
   In particular, $\int_a^b x\,dx = \dfrac{b^2 - a^2}{2}$, and if $0 < b$, then $\int_0^b x\,dx = \dfrac{b^2}{2}$.
2. (Squares) If $0 \le a$, then the function $f : [a, b] \to \mathbb{R}$ defined by $f(x) = x^2$ is integrable and
   $$
   \int_a^b x^2\,dx = \frac{b^3 - a^3}{3}.
   $$
   In particular, if $0 < b$, then $\int_0^b x^2\,dx = \dfrac{b^3}{3}$.
3. (Inequalities for every partition) For the functions $f$ of (1) and (2) and their integrals $I$, we have $L(P, f) \le I \le U(P, f)$ for every partition $P$ of $[a, b]$.
4. (A function differing at one point) For a real number $c$ with $a < c < b$ and a real number $d$, the function $f : [a, b] \to \mathbb{R}$ defined by $f(c) = d$ and $f(x) = 0$ for $x \ne c$ is integrable and $\int_a^b f = 0$.
:::

## 직관

(1)의 값은 사다리꼴의 넓이 공식과 같습니다. $f(x) = px + q$이면 $\frac{p(b^2 - a^2)}{2} + q(b - a) = (b - a) \cdot \frac{f(a) + f(b)}{2}$이고, 이것은 밑변이 $f(a)$, $f(b)$이고 높이가 $b - a$인 사다리꼴의 넓이입니다(값이 음수인 부분은 음수로 셉니다). (2)의 $\frac{b^3}{3}$은 $x^2$의 그래프 아래가 밑변 $b$, 높이 $b^2$인 직사각형의 $\frac{1}{3}$이라는 것입니다.

증명은 넓이 공식을 쓰지 않습니다. 작은 구간 $[u, v]$마다 "그 구간의 적분이어야 할 수", 일차함수에서는 $\frac{p(v^2 - u^2)}{2} + q(v - u)$, 제곱에서는 $\frac{v^3 - u^3}{3}$을 놓고, 이 수가 그 작은 구간의 하합 조각 $m_i\Delta x_i$와 상합 조각 $M_i\Delta x_i$ 사이에 있음을 확인합니다. 작은 구간들을 이어 더하면 가운데 수들이 망원 합으로 줄어들어 전체 값이 모든 하합과 상합 사이에 놓이고, [[riemann-integral]]의 (3)이 적분값을 그것으로 정합니다.

(4)는 값이 모두 $0$인 함수의 한 점의 값을 바꾸어도 적분이 $0$ 그대로라는 것입니다. 그 점을 길이가 짧은 작은 구간 하나에 가두면 상합과 하합의 차가 그 길이에 $|d|$를 곱한 것만큼만 남습니다.

## 증명

:::idea
(1)과 (2)는 작은 구간마다 $m_i\Delta x_i \le c_i - c_{i-1} \le M_i\Delta x_i$인 수 $c_i$(일차함수는 $\frac{p x_i^2}{2} + q x_i$, 제곱은 $\frac{x_i^3}{3}$)를 찾아 망원 합으로 더한다. 적분가능성은 단조함수에서 얻고, 값은 [[riemann-integral]]의 (3)으로 정한다. (4)는 판정의 값을 맞히는 꼴로 한다.
:::

:::hint
$\frac{p(v^2 - u^2)}{2} + q(v - u) = (v - u)\bigl(p \cdot \frac{u + v}{2} + q\bigr)$입니다. 괄호 안은 $f$의 어느 점에서의 값일까요?
:::

:::hint
$0 \le u \le v$이면 $u^2 \le uv \le v^2$이고, $(v - u)(v^2 + uv + u^2) = v^3 - u^3$입니다.
:::

:::proof
번호만 쓴 "(1)의 (ii)" 같은 것은 [[order-properties-of-reals]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 번호이며, "이 항목의 (n)"은 위 진술의 번호이다. 식의 전개는 (K1)–(K4), (K9), (K12)와 [[power-of-a-real-number]]의 (1)($v^2 = vv$, $v^3 = v^2 v$)로 한다. $P$는 점이 $x_0, \dots, x_n$인 $[a, b]$의 분할이고, [[partition-of-an-interval]]의 (1), (2)에 의해 $x_0 = a$, $x_n = b$, $x_{i-1} < x_i$이다. [[darboux-sums]]의 $m_i$, $M_i$를 쓴다.

**망원 합으로 모으기.** $0 \le i \le n$에서 실수 $c_i$가 식으로 정해져 있고 $1 \le i \le n$인 모든 $i$에서 $m_i\Delta x_i \le c_i - c_{i-1} \le M_i\Delta x_i$이면, [[linearity-and-order-of-finite-sums]]의 (3), (8)과 [[telescoping-sum]]의 (1)에 의해
$$
L(P, f) = \sum_{i=1}^{n} m_i\Delta x_i \le \sum_{i=1}^{n} (c_i - c_{i-1}) = c_n - c_0 \le \sum_{i=1}^{n} M_i\Delta x_i = U(P, f)
$$
이다. 이것을 (가)라 부른다.

**이 항목의 (1)과 (3)의 일차함수.** $f$는 $0 \le p$이면 단조증가이고 $p \le 0$이면 단조감소이다. $x < y$이면 (4)의 (iii)에 의해 $0 \le p$일 때 $px \le py$, $p \le 0$일 때 $py \le px$이고, 양변에 $q$를 더하면 된다((2)의 (i)). 따라서 [[monotone-implies-integrable|단조함수의 적분가능성]]의 (4)에 의해 $f$는 적분가능하다.

$c_i = \frac{p\,x_i^2}{2} + q\,x_i$로 둔다. $u = x_{i-1}$, $v = x_i$, $w = \frac{u + v}{2}$로 쓰면 $v^2 - u^2 = (v - u)(v + u)$이므로
$$
c_i - c_{i-1} = \frac{p\,(v^2 - u^2)}{2} + q\,(v - u) = (v - u)\Bigl(p \cdot \frac{u + v}{2} + q\Bigr) = \Delta x_i\, f(w)
$$
이다. $u < v$이므로 (8)에 의해 $u < w < v$이고, $w$는 $i$번째 작은 구간의 점이다. [[darboux-sums]]의 (1)에 의해 $m_i \le f(w) \le M_i$이고, $0 < \Delta x_i$와 (4)의 (iii)에 의해 $m_i\Delta x_i \le c_i - c_{i-1} \le M_i\Delta x_i$이다. (가)에 의해 모든 분할 $P$에서 $L(P, f) \le c_n - c_0 \le U(P, f)$이고, $c_n - c_0 = \frac{p(b^2 - a^2)}{2} + q(b - a)$이다. 이것이 (3)의 일차함수 부분이고, [[riemann-integral]]의 (3)에 의해 이 수가 $\int_a^b (px + q)\,dx$이다. $p = 1$, $q = 0$이면 $\int_a^b x\,dx = \frac{b^2 - a^2}{2}$이고, $a = 0$이면 (K9)에 의해 $0^2 = 0$이므로 $\frac{b^2}{2}$이다.

**이 항목의 (2)와 (3)의 제곱.** $0 \le a$이면 $[a, b]$의 모든 $x$에서 $0 \le x$이고, $x < y$이면 [[power-of-a-real-number]]의 (6)의 (ii)에 의해 $x^2 \le y^2$이므로 $f$는 단조증가이다. [[monotone-implies-integrable|단조함수의 적분가능성]]의 (4)에 의해 $f$는 적분가능하고, 그 항목의 (2)에 의해 $m_i = x_{i-1}^2$, $M_i = x_i^2$이다.

$c_i = \frac{x_i^3}{3}$으로 두고 $u = x_{i-1}$, $v = x_i$라 하자. $0 \le u < v$이다. (4)의 (iii)을 $0 \le u$와 $u \le v$에 쓰면 $uu \le uv$이고, $0 \le v$와 $u \le v$에 쓰면 $uv \le vv$이다. 따라서 (2)의 (iii)에 의해 $u^2 + u^2 + u^2 \le u^2 + uv + v^2 \le v^2 + v^2 + v^2$이다. $0 < v - u$이고 (6)의 (i)에 의해 $0 < 3^{-1}$이므로 세 변에 $(v - u) \cdot 3^{-1}$을 곱하면((4)의 (iii)), $(v - u)(v^2 + uv + u^2) = v^3 - u^3$을 써서
$$
u^2\,(v - u) \le \frac{v^3 - u^3}{3} \le v^2\,(v - u)
$$
이다. 곧 $m_i\Delta x_i \le c_i - c_{i-1} \le M_i\Delta x_i$이다. (가)에 의해 모든 분할 $P$에서 $L(P, f) \le \frac{b^3 - a^3}{3} \le U(P, f)$이고, [[riemann-integral]]의 (3)에 의해 $\int_a^b x^2\,dx = \frac{b^3 - a^3}{3}$이다. $a = 0$이면 [[power-of-a-real-number]]의 (2)의 (iv)에 의해 $0^3 = 0$이다.

**이 항목의 (4).** $|f(x)| \le |d|$이므로 $f$는 유계이다. [[integrability-criterion|리만 적분가능성의 판정]]의 (4)를 $I = 0$에 쓴다. 양수 $\varepsilon$이 주어지면
$$
r = \min\{c - a,\ b - c\} \cdot 2^{-1}, \qquad t = \min\Bigl\{r,\ \frac{\varepsilon}{2(|d| + 1)}\Bigr\}
$$
로 둔다. (8)과 [[absolute-value]]의 (10)에 의해 $0 < t \le r < c - a$이고 $t < b - c$이므로 $a < c - t < c < c + t < b$이다. [[partition-of-an-interval]]의 (5)에 의해 $P = \{a, c - t, c + t, b\}$는 점이 $a$, $c - t$, $c + t$, $b$인 분할이다.

첫째 작은 구간 $[a, c - t]$와 셋째 작은 구간 $[c + t, b]$의 점은 $c$가 아니므로 값이 모두 $0$이고, 값의 집합은 $\{0\}$이어서 $m_1 = M_1 = m_3 = M_3 = 0$이다([[upper-bound-and-supremum]]의 (2)). 둘째 작은 구간 $[c - t, c + t]$에는 $c$(값 $d$)와 $c - t$(값 $0$)가 있고 다른 점의 값은 $0$이므로 값의 집합은 $\{0, d\}$이다. [[absolute-value]]의 (11)에 의해 $m_2 = \min\{0, d\}$, $M_2 = \max\{0, d\}$이다. $\Delta x_2 = 2t$이므로
$$
L(P, f) = \min\{0, d\} \cdot 2t, \qquad U(P, f) = \max\{0, d\} \cdot 2t
$$
이다([[finite-sum-of-reals]]의 (2), (3)). [[absolute-value]]의 (10)에 의해 $\min\{0, d\} \le 0 \le \max\{0, d\}$이므로 $L(P, f) \le 0 \le U(P, f)$이다. 또 $0 \le d$이면 $\max\{0, d\} - \min\{0, d\} = d - 0$이고 $d < 0$이면 $0 - d$이므로, [[absolute-value]]의 (1)에 의해 이 차는 $|d|$이다. 따라서 $U(P, f) - L(P, f) = |d| \cdot 2t$이다. $2t \le \frac{\varepsilon}{|d| + 1}$이고 $|d| < |d| + 1$이므로
$$
|d| \cdot 2t \le \frac{|d|\,\varepsilon}{|d| + 1} < \varepsilon
$$
이다((4)의 (i), (iii), (6)의 (iv)). 판정의 (4)에 의해 $f$는 적분가능하고 $\int_a^b f = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[균등 분할로 계산한 x² 의 다르부 합]
$[0, 2]$ 위의 $f(x) = x^2$과 균등 분할 $P_n$을 봅시다. 점은 $x_i = 2i/n$이고 $h_n = 2/n$입니다. [[monotone-implies-integrable|단조함수의 적분가능성]]의 (2)에 의해 $m_i = (2(i - 1)/n)^2$, $M_i = (2i/n)^2$이므로, [[sum-of-integers-and-squares|1부터 n까지의 합과 제곱의 합]]의 (4)와 (2)에 의해
$$
\begin{aligned}
L(P_n, f) &= \frac{8}{n^3}\sum_{i=1}^{n} (i - 1)^2 = \frac{4(n - 1)(2n - 1)}{3n^2}, \\
U(P_n, f) &= \frac{8}{n^3}\sum_{i=1}^{n} i^2 = \frac{4(n + 1)(2n + 1)}{3n^2}
\end{aligned}
$$
입니다. $n = 2$이면 $L = 1$, $U = 5$이고, $n = 4$이면 $L = 7/4$, $U = 15/4$입니다. 두 경우 모두 (2)의 값 $\int_0^2 x^2\,dx = 8/3$이 그 사이에 있습니다((3)). 차는 $U - L = \frac{4 \cdot 6n}{3n^2} = \frac{8}{n}$이고, 이것은 [[monotone-implies-integrable|단조함수의 적분가능성]]의 (3)의 $(f(2) - f(0)) \cdot 2/n = 8/n$과 같습니다.
:::

:::example[일차함수 2x − 1]
(1)을 $p = 2$, $q = -1$, $[1, 3]$에 쓰면
$$
\int_1^3 (2x - 1)\,dx = \frac{2(9 - 1)}{2} + (-1)(3 - 1) = 8 - 2 = 6
$$
입니다. $f(1) = 1$, $f(3) = 5$이므로 사다리꼴의 넓이 $(3 - 1) \cdot \frac{1 + 5}{2} = 6$과 같습니다.
:::

## 확인 질문

:::check[$\int_{-2}^{3} x\,dx$는?]
(1)에 의해 $\frac{3^2 - (-2)^2}{2} = \frac{9 - 4}{2} = \frac{5}{2}$입니다. (1)은 $a$의 부호를 가리지 않습니다.
:::

:::check[$\int_1^2 x^2\,dx$는?]
$0 \le 1$이므로 (2)에 의해 $\frac{2^3 - 1^3}{3} = \frac{8 - 1}{3} = \frac{7}{3}$입니다.
:::
