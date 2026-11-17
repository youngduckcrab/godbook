---
title: 유리수의 조밀성
title_en: Density of the Rational Numbers
aliases: [유리수는 조밀하다, ℚ 는 ℝ 에서 조밀하다, density of rationals, rationals are dense, ℚ is dense in ℝ]
kind: theorem
field: real-analysis
msc: ["26A03"]
level: undergrad
summary: 유리수끼리의 합·차·곱과 0 이 아닌 유리수의 역수는 유리수이다. 서로 다른 두 실수 사이에는 언제나 유리수가 있다.
requires: [rational-and-irrational-numbers, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 1.2절 Theorem 1.2.4 (ii) (p.31)와 그 증명 (p.31–32), 그림 1.2 (p.31), 연습문제 1.2.16 (p.35)
    checked: original
    note: "출처의 Theorem 1.2.4 (ii)는 'x, y ∈ ℝ, x < y 이면 x < r < y 인 r ∈ ℚ 가 있다'로 이 항목의 (2)와 같다. 출처는 먼저 x ≥ 0 인 경우를 n(y − x) > 1 인 n 과 {k ∈ ℕ : k > nx} 의 최소 원소 m(ℕ 의 정렬 성질)으로 증명하고, x < 0 인 경우는 r = 0 이나 r = −q 로 돌린다. 출처 연습문제 1.2.16 은 아래로 유계인 정수 집합의 최소 원소를 쓰면 x ≥ 0 이라는 가정이 필요 없어지는 까닭을 묻는다. 이 항목은 경우를 나누지 않고, archimedean-property 의 (4)(모든 실수 t 에 n − 1 ≤ t < n 인 정수 n)를 t = nx 에 써서 m 을 잡는다. 분수 m/n 을 만드는 발상(그림 1.2)은 출처와 같다. (1)(유리수끼리의 계산이 유리수라는 것)은 출처에 명제로 없다(검색한 범위). 출처는 ℚ 가 체라는 것을 Example 1.1.6 에서 말하고 증명하지 않는다. 예시(1/3 과 1/2 사이)와 반례(정수는 조밀하지 않다), 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-17 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회). 정수와 실수의 순서를 잇는 진술의 범위, 인용 근거, 번호 표기, 출처 메모를 보완했다. 마지막 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-17
---

:::statement
유리수와 $\mathbb{Q}$는 [[rational-and-irrational-numbers|유리수와 무리수]]의 것이다. 곧 실수 $x$가 유리수인 것은 정확히 $x = a/b$($= ab^{-1}$)인 정수 $a$, $b$($b \ne 0$)가 있을 때이다.

1. (유리수의 계산) 정수는 유리수이다. $p$, $q$가 유리수이면 $p + q$, $p - q$, $pq$, $-p$는 유리수이다. $p$가 $0$이 아닌 유리수이면 $p^{-1}$도 유리수이다. 따라서 $q \ne 0$이면 $p/q$도 유리수이다.
2. (조밀성) 실수 $x$, $y$가 $x < y$이면 $x < r < y$인 유리수 $r$이 있다.
:::

:::english
Rational numbers and $\mathbb{Q}$ are as in the entry on rational and irrational numbers; that is, a real number $x$ is rational exactly when $x = a/b$ ($= ab^{-1}$) for some integers $a$, $b$ with $b \ne 0$.

1. (Arithmetic of rationals) Integers are rational. If $p$ and $q$ are rational, then $p + q$, $p - q$, $pq$, and $-p$ are rational. If $p$ is a nonzero rational number, then $p^{-1}$ is rational. Hence $p/q$ is rational when $q \ne 0$.
2. (Density) If $x$ and $y$ are real numbers with $x < y$, then there is a rational number $r$ with $x < r < y$.
:::

## 직관

수직선 위의 두 점 $x < y$가 아무리 가까워도 그 사이에 분수가 있다는 것이 (2)입니다. 자로 재는 상황에 빗대면, 눈금 간격 $\frac{1}{n}$을 두 점 사이의 거리 $y - x$보다 좁게 잡은 자를 대면 두 점 사이에 눈금이 적어도 하나 떨어진다는 것입니다. 증명이 정확히 이렇게 합니다. [[archimedean-property|아르키메데스 성질]]의 (3)으로 $\frac{1}{n} < y - x$인 $n$을 고르고, (4)로 $x$ 바로 오른쪽의 눈금 $\frac{m}{n}$을 찾습니다. 비유가 맞지 않는 곳은 실제 자의 눈금은 정해져 있지만, 여기서는 두 점이 가까울수록 더 촘촘한 자를 새로 만들어 쓴다는 점입니다.

(1)은 유리수를 더하고 곱하고 나누어도 유리수라는 익숙한 사실입니다. [[rational-and-irrational-numbers|유리수와 무리수]]의 정의만으로는 이것이 저절로 나오지 않으므로 분수의 계산 규칙 $\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$ 같은 것을 계산 법칙으로 확인합니다.

## 증명

:::idea
(1)은 분수의 덧셈·곱셈 공식을 (K1)–(K12)로 확인한다. (2)는 $\frac{1}{n} < y - x$인 자연수 $n$을 잡고, $m - 1 \le nx < m$인 정수 $m$을 잡으면 $\frac{m}{n}$이 $x$와 $y$ 사이에 있다.
:::

:::hint
$m - 1 \le nx$이면 $m \le nx + 1$이고, $\frac{1}{n} < y - x$에 $n$을 곱하면 $nx + 1 < ny$입니다.
:::

:::proof
"(6)의 (iv)" 같은 번호는 [[order-properties-of-reals]]의 번호이다. 정수끼리의 합·차·곱이 정수라는 것은 [[even-and-odd]]에서 받아들인 사실이고, (K7)에 의해 정수끼리의 합·곱·음수는 정수로 계산하든 실수로 계산하든 같다.

**이 항목의 (1).** 정수 $a$는 $a = a \cdot 1 = a \cdot 1^{-1}$이므로 유리수이다. 여기서 $1 \cdot 1 = 1$이고 (K8)의 (iii)에 의해 $1^{-1} = 1$이다.

$p = ab^{-1}$, $q = cd^{-1}$($a$, $b$, $c$, $d$는 정수, $b \ne 0$, $d \ne 0$)이라 하자. (K12)의 (vi)에 의해 $bd \ne 0$이고 $(bd)^{-1} = b^{-1}d^{-1}$이다. $bd$, $ad + bc$, $ac$는 정수이다.

*합.* (K12)의 (i), (K1), (K2), (K8)의 (iii), (K4)에 의해
$$(ad + bc)(b^{-1}d^{-1}) = (ad)(b^{-1}d^{-1}) + (bc)(b^{-1}d^{-1}) = (ab^{-1})(dd^{-1}) + (cd^{-1})(bb^{-1}) = ab^{-1} + cd^{-1}$$
이다. 따라서 $p + q = (ad + bc)(bd)^{-1}$이고 유리수이다.

*곱.* (K1), (K2)에 의해 $pq = (ab^{-1})(cd^{-1}) = (ac)(b^{-1}d^{-1}) = (ac)(bd)^{-1}$이므로 유리수이다.

*음수와 차.* (K9)의 $(-a)b = -(ab)$에 의해 $-p = -(ab^{-1}) = (-a)b^{-1}$이고 $-a$는 정수이므로 $-p$는 유리수이다. $p - q = p + (-q)$이고 $-q$가 유리수이므로 앞의 합에 의해 유리수이다.

*역수.* $p \ne 0$이라 하자. $a = 0$이면 (K9)에 의해 $p = 0 \cdot b^{-1} = 0$이므로 $a \ne 0$이다. (K1), (K2), (K8)의 (iii), (K4)에 의해 $p(ba^{-1}) = (ab^{-1})(ba^{-1}) = (aa^{-1})(bb^{-1}) = 1 \cdot 1 = 1$이므로, (K8)의 (iii)에 의해 $p^{-1} = ba^{-1}$이고 이것은 유리수이다. 끝으로 $q \ne 0$이면 $p/q = pq^{-1}$은 유리수 $p$와 유리수 $q^{-1}$의 곱이므로 유리수이다.

**이 항목의 (2).** $x < y$라 하자. (3)의 (i)에 의해 $0 < y - x$이다. [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $\frac{1}{n} < y - x$인 자연수 $n$이 있다. (10)에 의해 $0 < n$이고 $0 < n^{-1}$이다. (4)의 (i)로 양변에 $n$을 곱하면 $n^{-1}n < (y - x)n$이고, (K1), (K8)의 (iii), (K12)의 (i), (K9)에 의해 $1 < yn - xn = ny - nx$이다. (2)의 (ii)로 양변에 $nx$를 더하면 $nx + 1 < ny$이다.

[[archimedean-property|아르키메데스 성질]]의 (4)를 실수 $nx$에 쓰면 $m - 1 \le nx < m$인 정수 $m$이 있다. $r = mn^{-1}$로 두면 $m$, $n$이 정수이고 $n \ne 0$이므로 $r$은 유리수이다.

*$x < r$.* $nx < m$이고 $0 < n^{-1}$이므로 (4)의 (i)에 의해 $(nx)n^{-1} < mn^{-1}$이다. (K1), (K2), (K8)의 (iii), (K4)에 의해 $(nx)n^{-1} = x(nn^{-1}) = x$이므로 $x < r$이다.

*$r < y$.* $m - 1 \le nx$에 (2)의 (i)로 $1$을 더하면 $m \le nx + 1$이다($(m - 1) + 1 = m$). $nx + 1 < ny$이므로 (1)의 (v)에 의해 $m < ny$이다. (4)의 (i)로 양변에 $n^{-1}$을 곱하면 $mn^{-1} < (ny)n^{-1} = y$이므로 $r < y$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$\frac{1}{3}$과 $\frac{1}{2}$ 사이의 유리수를 증명대로 찾기]
$x = \frac{1}{3}$, $y = \frac{1}{2}$이면 $y - x = \frac{1}{6}$입니다. $n = 7$이면 $0 < 6 < 7$이므로 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $\frac{1}{7} < \frac{1}{6}$입니다. $nx = \frac{7}{3}$이고, $6 \le 7 < 9$를 $3^{-1}$배하면($0 < 3^{-1}$) $2 \le \frac{7}{3} < 3$이므로 $m = 3$입니다. 그러면 $r = \frac{3}{7}$이고, 실제로 $\frac{1}{3} < \frac{3}{7}$($21$을 곱하면 $7 < 9$)이고 $\frac{3}{7} < \frac{1}{2}$($14$를 곱하면 $6 < 7$)입니다. 두 비교는 (6)의 (iv)로 양수를 곱해 정수의 부등식으로 바꾼 것입니다.
:::

:::counterexample[정수는 조밀하지 않다]
같은 성질을 정수로 바꾸면 틀립니다. $1 < 2$이지만 $1 < k < 2$인 정수 $k$는 없습니다. $1 < k$이면 (Z1)에 의해 $2 \le k$이고, 이것은 $k < 2$와 (L1)에 의해 함께 성립하지 않기 때문입니다([[order-properties-of-reals]]의 (10)에 의해 이 부등식들은 실수로 읽어도 같습니다). 유리수에서 사이의 수를 만들 수 있는 것은 분모 $n$을 얼마든지 크게 잡을 수 있기 때문입니다.
:::

## 확인 질문

:::check[$x < y$이면 $x$와 $y$ 사이에 유리수가 둘 이상 있는가?]
그렇습니다. (2)에 의해 $x < r_1 < y$인 유리수 $r_1$이 있고, 다시 (2)를 $r_1 < y$에 쓰면 $r_1 < r_2 < y$인 유리수 $r_2$가 있습니다. $x < r_1 < r_2 < y$이고 $r_1 < r_2$이므로 $r_1 \ne r_2$입니다.
:::

:::check[$p$, $q$가 유리수이고 $q \ne 0$이면 $\dfrac{p + q}{q}$는 유리수인가?]
그렇습니다. (1)에 의해 $p + q$가 유리수이고, $q \ne 0$인 유리수로 나눈 것도 (1)에 의해 유리수입니다.
:::
