---
title: 열린 공
title_en: Open Ball
aliases: [공, ball, open ball, 닫힌 공, closed ball, 중심, 반지름]
kind: definition
field: topology
msc: ["54E35"]
level: undergrad
summary: 거리공간에서 한 점까지의 거리가 r 보다 작은 점 전체를 열린 공, r 이하인 점 전체를 닫힌 공이라 한다. 공 안의 점을 중심으로 하는 작은 공, 실수의 공과 열린구간, 이산 거리·부분공간 거리·최대 거리에서의 공, 서로 다른 두 점을 가르는 공을 증명한다.
requires: [metric-space, metric-space-examples, family-of-sets, set-operations, cartesian-product, interval, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, prime-number]
sources:
  - ref: lebl-basic-analysis
    loc: "7.2.1절 Topology, Definition 7.2.1, Example 7.2.2, Example 7.2.3 (p.264), Proposition 7.2.9 의 증명 (p.266); 7.2.2절 Connected sets, Example 7.2.17 (p.269); 7.2.4절 연습문제 7.2.2, 7.2.13 (p.272), 7.2.17, 7.2.18 (p.273)"
    checked: original
    note: "정의와 기호 B(x, δ), C(x, δ), B_X(x, δ) 는 출처 Definition 7.2.1 의 것이고, 출처는 반지름을 δ 로 쓴다. (5)의 앞 문장은 출처 Example 7.2.2(ℝ 에서 B(x, δ) = (x − δ, x + δ), C(x, δ) = [x − δ, x + δ])를 명제로 올린 것이다. (7)은 출처 Example 7.2.3([0, 1] 안에서 B(0, 1/2) = [0, 1/2))을 일반의 부분집합으로 넓힌 꼴이다. (3)은 출처가 Proposition 7.2.9 의 증명에서 쓰는 계산(α = δ − d(x, y), B(y, α) ⊂ B(x, δ))을 따로 적은 것이다. (8)의 ℝ × ℝ 의 경우는 출처 연습문제 7.2.18 의 '직사각형' R(x, δ)(n = 2)와 같은 집합이고, 예시 '공의 모양은 거리에 따라 달라질 수 있다'의 최대 거리의 공(정사각형의 안쪽)도 이 R(x, δ) 이다. 확인 질문 'ℝ 에서 C(0, 1) 의 원소 가운데 B(0, 1) 에 속하지 않는 것'은 출처 Example 7.2.2 의 두 공을 x = 0, δ = 1 에서 견준 것이다. (4)는 출처가 연습문제 7.2.2 로 둔 '닫힌 공은 닫혀 있다'의 증명에 쓰이는 사실이다. 예시 '정수의 부분공간에서의 공'은 출처 연습문제 7.2.17 b)(모든 공이 유한집합인 무한 거리공간을 찾으라)의 답이 될 수 있는 대상이다. 확인 질문 '닫힌 공은 반지름이 두 배인 열린 공에 들어가는가'는 출처 연습문제 7.2.13 a)(B(x, δ) ⊂ C(x, δ))와 같은 종류의 포함을 묻는다. 반례 '공 하나가 중심과 반지름을 정하지 않을 수 있다'는 출처 Example 7.2.17(p.269, 원소 둘인 집합에 이산 거리를 주면 B(a, 2) = {a, b}, B(a, 1) = {a})과 같은 대상이다."
  - ref: fuglede-basic-topology
    loc: "Metric spaces 절, 열린 공의 정의 content/topological-spaces.tex:203–206, Remark 235–244, discrete metric 예 248–261, 연습문제 1.10 (content/exercises.tex:32)"
    checked: original
    note: "출처는 열린 공을 B_d(x, r) = {y ∈ X | d(x, y) < r} (r > 0)로 정의하고, 거리공간의 닫힌 공은 정의하지 않는다(검색어 'closed ball' 은 content/*.tex 에서 0건). 닫힌 공에 해당하는 집합으로는 ℝⁿ 의 원판 D^n = {x ∈ ℝⁿ | |x| ≤ 1}(content/homeomorphisms.tex:180)이 나온다. (6)의 열린 공 부분은 출처의 이산 거리 예(254)가 적는 것과 같다: r ≤ 1 이면 B_d(x, r) = {x}, r > 1 이면 X. 출처 연습문제 1.10 은 거리공간이 하우스도르프임을 보이라고 하며, (9)는 그 증명에 쓰이는 사실이다. (3)은 출처가 Remark(239–241)에서 r = ε − d(x, y) 로 두어 B_d(x, r) ⊂ B_d(y, ε) 를 얻는 것과 같은 계산이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 주장 4건과 경계 경우의 문장을 고쳤다."
added: 2026-11-19
---

:::statement
거리공간과 그 예는 [[metric-space]], [[metric-space-examples]]의 것이고, 조건으로 정한 부분집합은 [[family-of-sets]]의 것이다. 아래에서 $(X, d)$는 거리공간, $x$는 $X$의 점, $r$은 $0 < r$인 실수이다.

**열린 공과 닫힌 공.** 
$$
B(x, r) = \{y \in X : d(x, y) < r\}, \qquad C(x, r) = \{y \in X : d(x, y) \le r\}
$$
로 정하고, $B(x, r)$를 중심이 $x$이고 반지름이 $r$인 **열린 공**(open ball), $C(x, r)$를 **닫힌 공**(closed ball)이라 한다. 둘 다 $X$의 부분집합이다. 어느 거리공간의 공인지 밝혀야 할 때는 $B_X(x, r)$, $C_X(x, r)$로, 어느 거리인지 밝혀야 할 때는 $B_d(x, r)$, $C_d(x, r)$로 쓴다. 반지름은 언제나 양수이다.

다음이 성립한다.

1. $x \in B(x, r)$이고 $B(x, r) \subseteq C(x, r)$이다.
2. $0 < r \le s$이면 $B(x, r) \subseteq B(x, s)$이고 $C(x, r) \subseteq C(x, s)$이다. $0 < r < s$이면 $C(x, r) \subseteq B(x, s)$이다.
3. (공 안의 점을 중심으로 하는 공) $y \in B(x, r)$이고 $s = r - d(x, y)$이면 $0 < s$이고 $B(y, s) \subseteq B(x, r)$이다.
4. (닫힌 공 밖의 점을 중심으로 하는 공) $y \in X$이고 $r < d(x, y)$이며 $s = d(x, y) - r$이면 $0 < s$이고 $B(y, s) \cap C(x, r) = \emptyset$이다.
5. (실수의 공) $\mathbb{R}$에 보통 거리를 주면, 실수 $x$와 $0 < r$에 대하여 $x - r < x + r$이고 $B(x, r)$는 열린구간 $(x - r, x + r)$, $C(x, r)$는 닫힌구간 $[x - r, x + r]$이다([[interval]]의 기호). 거꾸로 $a < b$이면 $c = \dfrac{a + b}{2}$, $\rho = \dfrac{b - a}{2}$에 대하여 $0 < \rho$이고 열린구간 $(a, b)$는 $B(c, \rho)$, 닫힌구간 $[a, b]$는 $C(c, \rho)$이다.
6. (이산 거리의 공) $d$가 이산 거리이면, $r \le 1$일 때 $B(x, r) = \{x\}$이고 $1 < r$일 때 $B(x, r) = X$이다. 또 $r < 1$일 때 $C(x, r) = \{x\}$이고 $1 \le r$일 때 $C(x, r) = X$이다.
7. (부분공간 거리의 공) $Y \subseteq X$에 부분공간 거리 $d_Y$를 주고 $y \in Y$이면 $B_Y(y, r) = B_X(y, r) \cap Y$이고 $C_Y(y, r) = C_X(y, r) \cap Y$이다.
8. (최대 거리의 공) $(X_1, d_1)$, $(X_2, d_2)$가 거리공간이고 곱집합 $X_1 \times X_2$에 최대 거리 $d_{\max}$를 주며 $p = (p_1, p_2) \in X_1 \times X_2$라 하자. 그러면 $B_{d_{\max}}(p, r) = B_{d_1}(p_1, r) \times B_{d_2}(p_2, r)$이고 $C_{d_{\max}}(p, r) = C_{d_1}(p_1, r) \times C_{d_2}(p_2, r)$이다. 특히 $\mathbb{R} \times \mathbb{R}$에 최대 거리를 주면, 열린구간 $I = (p_1 - r, p_1 + r)$, $J = (p_2 - r, p_2 + r)$과 닫힌구간 $I' = [p_1 - r, p_1 + r]$, $J' = [p_2 - r, p_2 + r]$에 대하여 $B(p, r) = I \times J$이고 $C(p, r) = I' \times J'$이다.
9. (서로 다른 두 점을 가르는 공) $x$, $y$가 $X$의 서로 다른 점이고 $t = \dfrac{d(x, y)}{2}$이면 $0 < t$이고 $B(x, t) \cap B(y, t) = \emptyset$이다.
:::

:::english
Metric spaces and their examples are as in the earlier entries, and subsets defined by a condition are as in the entry on families of sets. Throughout, $(X, d)$ is a metric space, $x$ is a point of $X$, and $r$ is a real number with $0 < r$.

**Open and closed balls.** Put
$$
B(x, r) = \{y \in X : d(x, y) < r\}, \qquad C(x, r) = \{y \in X : d(x, y) \le r\}.
$$
$B(x, r)$ is called the **open ball** with center $x$ and radius $r$, and $C(x, r)$ the **closed ball**. Both are subsets of $X$. When we need to indicate the metric space, we write $B_X(x, r)$, $C_X(x, r)$; when we need to indicate the metric, we write $B_d(x, r)$, $C_d(x, r)$. A radius is always positive.

The following hold.

1. $x \in B(x, r)$ and $B(x, r) \subseteq C(x, r)$.
2. If $0 < r \le s$, then $B(x, r) \subseteq B(x, s)$ and $C(x, r) \subseteq C(x, s)$. If $0 < r < s$, then $C(x, r) \subseteq B(x, s)$.
3. (A ball centered at a point of a ball) If $y \in B(x, r)$ and $s = r - d(x, y)$, then $0 < s$ and $B(y, s) \subseteq B(x, r)$.
4. (A ball centered at a point outside a closed ball) If $y \in X$, $r < d(x, y)$ and $s = d(x, y) - r$, then $0 < s$ and $B(y, s) \cap C(x, r) = \emptyset$.
5. (Balls in the reals) With the standard metric on $\mathbb{R}$, for a real number $x$ and $0 < r$ we have $x - r < x + r$, $B(x, r)$ is the open interval $(x - r, x + r)$ and $C(x, r)$ is the closed interval $[x - r, x + r]$. Conversely, if $a < b$, then with $c = \dfrac{a + b}{2}$ and $\rho = \dfrac{b - a}{2}$ we have $0 < \rho$, the open interval $(a, b)$ is $B(c, \rho)$ and the closed interval $[a, b]$ is $C(c, \rho)$.
6. (Balls for the discrete metric) If $d$ is the discrete metric, then $B(x, r) = \{x\}$ when $r \le 1$ and $B(x, r) = X$ when $1 < r$. Also $C(x, r) = \{x\}$ when $r < 1$ and $C(x, r) = X$ when $1 \le r$.
7. (Balls for a subspace metric) If $Y \subseteq X$ carries the subspace metric $d_Y$ and $y \in Y$, then $B_Y(y, r) = B_X(y, r) \cap Y$ and $C_Y(y, r) = C_X(y, r) \cap Y$.
8. (Balls for the max metric) Let $(X_1, d_1)$ and $(X_2, d_2)$ be metric spaces, give the Cartesian product $X_1 \times X_2$ the max metric $d_{\max}$, and let $p = (p_1, p_2) \in X_1 \times X_2$. Then $B_{d_{\max}}(p, r) = B_{d_1}(p_1, r) \times B_{d_2}(p_2, r)$ and $C_{d_{\max}}(p, r) = C_{d_1}(p_1, r) \times C_{d_2}(p_2, r)$. In particular, if $\mathbb{R} \times \mathbb{R}$ carries the max metric, then for the open intervals $I = (p_1 - r, p_1 + r)$, $J = (p_2 - r, p_2 + r)$ and the closed intervals $I' = [p_1 - r, p_1 + r]$, $J' = [p_2 - r, p_2 + r]$ we have $B(p, r) = I \times J$ and $C(p, r) = I' \times J'$.
9. (Balls separating two distinct points) If $x$ and $y$ are distinct points of $X$ and $t = \dfrac{d(x, y)}{2}$, then $0 < t$ and $B(x, t) \cap B(y, t) = \emptyset$.
:::

## 직관

열린 공 $B(x, r)$는 "$x$에서 $r$보다 가까운 점들"입니다. 평면에 유클리드 거리를 주면 이것은 경계의 원을 뺀 둥근 원판이고, 닫힌 공은 경계의 원까지 포함한 원판입니다. 그러나 공의 모양은 거리에 따라 다릅니다. (8)에 의해 최대 거리의 공은 변이 좌표축에 나란한 정사각형의 안쪽이고, 이산 거리의 공은 (6)에 의해 점 하나이거나 공간 전체입니다. "공"이라는 이름은 유클리드 거리의 그림에서 왔을 뿐입니다.

(3)은 열린 공의 기본 성질입니다. 공 $B(x, r)$ 안의 점 $y$에서 $r - d(x, y)$보다 가까운 점은 $x$에서 $r$보다 가깝습니다. 그래서 $y$를 중심으로 반지름 $r - d(x, y)$인 공을 그리면 원래 공 안에 들어갑니다. 증명에서 이것을 보장하는 것은 거리의 삼각부등식입니다. (9)는 두 점 사이 거리의 절반을 반지름으로 잡으면 두 공이 닿지 않는다는 것으로, 역시 삼각부등식에서 나옵니다.

## 성질의 증명

:::proof
[[order-properties-of-reals]]의 (n)을 "순서 성질 (n)"이라 줄여 쓰고, 계산 법칙은 [[real-number-arithmetic]]의 (K1)–(K12)로 인용한다. 거리의 조건 (i)–(iv)와 성질 (1)은 [[metric-space]]의 것이다. $B(x, r)$와 $C(x, r)$는 조건으로 정한 $X$의 부분집합이므로([[family-of-sets]]) $X$의 부분집합이다.

**(1).** 거리공간의 (1)에 의해 $d(x, x) = 0 < r$이므로 $x \in B(x, r)$이다. $d(x, y) < r$이면 $d(x, y) \le r$이므로 $B(x, r) \subseteq C(x, r)$이다.

**(2).** $y \in B(x, r)$이면 $d(x, y) < r \le s$이므로 순서 성질 (1)의 (v)에 의해 $d(x, y) < s$, 곧 $y \in B(x, s)$이다. $y \in C(x, r)$이면 $d(x, y) \le r \le s$이므로 $y \in C(x, s)$이다. $r < s$이고 $y \in C(x, r)$이면 $d(x, y) \le r < s$이므로 $y \in B(x, s)$이다.

**(3).** $d(x, y) < r$이므로 순서 성질 (3)의 (i)에 의해 $0 < r - d(x, y) = s$이다. $z \in B(y, s)$라 하자. 거리의 삼각부등식 (iv)와 $d(y, z) < s$, 순서 성질 (2)의 (iv)에 의해
$$
d(x, z) \le d(x, y) + d(y, z) < d(x, y) + s = d(x, y) + \bigl(r - d(x, y)\bigr) = r
$$
이다(마지막 등식은 (K1), (K2), (K5)). 섞인 추이성(순서 성질 (1)의 (v))에 의해 $d(x, z) < r$이므로 $z \in B(x, r)$이다.

**(4).** $r < d(x, y)$이므로 순서 성질 (3)의 (i)에 의해 $0 < s$이다. $z \in B(y, s) \cap C(x, r)$인 점 $z$가 있다고 하자. 그러면 $d(x, z) \le r$이고, (iii)에 의해 $d(z, y) = d(y, z) < s$이다. (iv)와 순서 성질 (2)의 (iv)에 의해
$$
d(x, y) \le d(x, z) + d(z, y) < r + s = d(x, y)
$$
이므로 순서 성질 (1)의 (v)에 의해 $d(x, y) < d(x, y)$가 되어 (W1)([[real-order-axioms]])에 어긋난다. 따라서 그런 $z$는 없고 $B(y, s) \cap C(x, r) = \emptyset$이다.

**(5).** $0 < r$이므로 순서 성질 (3)의 (ii)에 의해 $-r < 0 < r$이고, 양변에 $x$를 더하면 순서 성질 (2)의 (ii)에 의해 $x - r < x < x + r$, 따라서 $x - r < x + r$이다. 그러므로 [[interval]]의 기호 $(x - r, x + r)$, $[x - r, x + r]$를 쓸 수 있다. 실수 $y$에 대하여 [[absolute-value]]의 (3)에 의해 $d(x, y) = |x - y| = |y - x|$이고, 같은 항목의 (8)에 의해 $|y - x| < r$인 것은 정확히 $x - r < y < x + r$일 때이며 $|y - x| \le r$인 것은 정확히 $x - r \le y \le x + r$일 때이다. 따라서 $B(x, r) = (x - r, x + r)$이고 $C(x, r) = [x - r, x + r]$이다.
거꾸로 $a < b$라 하자. 순서 성질 (3)의 (i)에 의해 $0 < b - a$이고, 순서 성질 (8)에 의해 $0 < \rho = \dfrac{b - a}{2}$이다. (K1)–(K12)로 계산하면 $c - \rho = \dfrac{(a + b) - (b - a)}{2} = \dfrac{a + a}{2} = a$이고 $c + \rho = \dfrac{(a + b) + (b - a)}{2} = \dfrac{b + b}{2} = b$이다. 앞 문단에 의해 $B(c, \rho) = (c - \rho, c + \rho) = (a, b)$이고 $C(c, \rho) = [a, b]$이다.

**(6).** 이산 거리의 값은 $0$이나 $1$이고, $d(x, y) = 0$인 것은 정확히 $y = x$일 때이다. $r \le 1$이고 $y \in B(x, r)$이면 $d(x, y) < r \le 1$이므로 $d(x, y) \ne 1$이고, 따라서 $d(x, y) = 0$, 곧 $y = x$이다. (1)과 함께 $B(x, r) = \{x\}$이다. $1 < r$이면 $X$의 모든 점 $y$에서 $d(x, y) \le 1 < r$이므로 $B(x, r) = X$이다. 닫힌 공도 같은 방식이다. $r < 1$이고 $d(x, y) \le r$이면 $d(x, y) < 1$이므로 $y = x$이고, $1 \le r$이면 모든 $y$에서 $d(x, y) \le 1 \le r$이다.

**(7).** [[metric-space-examples]]의 (3)에 의해 $Y$의 점 $z$에서 $d_Y(y, z) = d(y, z)$이다. 따라서 $z \in B_Y(y, r)$인 것은 정확히 $z \in Y$이고 $d(y, z) < r$일 때이다. 한편 $z \in B_X(y, r) \cap Y$인 것은 정확히 $z \in X$이고 $d(y, z) < r$이고 $z \in Y$일 때이며, $Y \subseteq X$이므로 이것은 앞의 조건과 같다. 두 집합은 원소가 같다. 닫힌 공은 $<$를 $\le$로 바꾸면 같다.

**(8).** $B_{d_{\max}}(p, r)$와 $B_{d_1}(p_1, r) \times B_{d_2}(p_2, r)$의 원소는 모두 $X_1 \times X_2$의 원소, 곧 순서쌍이다. 순서쌍 $q = (q_1, q_2) \in X_1 \times X_2$에 대하여 $\alpha = d_1(p_1, q_1)$, $\beta = d_2(p_2, q_2)$라 하면 [[metric-space-examples]]의 (4)에 의해 $d_{\max}(p, q) = \max\{\alpha, \beta\}$이다. $\max\{\alpha, \beta\} < r$이면 [[absolute-value]]의 (10)에 의해 $\alpha \le \max\{\alpha, \beta\} < r$이고 $\beta < r$이다. 거꾸로 $\alpha < r$이고 $\beta < r$이면 $\max\{\alpha, \beta\}$는 $\alpha$나 $\beta$이므로 $r$보다 작다. 따라서 $q \in B_{d_{\max}}(p, r)$인 것은 정확히 $q_1 \in B_{d_1}(p_1, r)$이고 $q_2 \in B_{d_2}(p_2, r)$일 때, 곧 [[cartesian-product|곱집합]]의 정의에 의해 $q \in B_{d_1}(p_1, r) \times B_{d_2}(p_2, r)$일 때이다. 닫힌 공은 $<$를 $\le$로 바꾸고 [[absolute-value]]의 (10)의 "두 수가 모두 $c$ 이하이면 최대도 $c$ 이하"를 쓰면 같다. $\mathbb{R} \times \mathbb{R}$의 최대 거리는 [[metric-space-examples]]의 (5)에 의해 두 보통 거리로 만든 (4)의 최대 거리이므로, 방금 보인 것과 이 항목의 (5)에 의해 $B(p, r) = (p_1 - r, p_1 + r) \times (p_2 - r, p_2 + r) = I \times J$이고 $C(p, r) = I' \times J'$이다.

**(9).** 거리공간의 (1)에 의해 $0 < d(x, y)$이고, 순서 성질 (8)에 의해 $0 < t$이다. $z \in B(x, t) \cap B(y, t)$인 점 $z$가 있다고 하자. (iii)에 의해 $d(z, y) = d(y, z) < t$이고, (iv)와 순서 성질 (2)의 (iv)에 의해
$$
d(x, y) \le d(x, z) + d(z, y) < t + t = d(x, y)
$$
이다(마지막 등식은 (K1)–(K12)의 계산). 순서 성질 (1)의 (v)에 의해 $d(x, y) < d(x, y)$가 되어 (W1)에 어긋나므로 그런 $z$는 없다.
:::

## 예시와 반례

:::example[정수의 부분공간에서의 공]
$\mathbb{Z} \subseteq \mathbb{R}$에 부분공간 거리를 줍니다. (7)과 (5)에 의해 $B_{\mathbb{Z}}(0, 3/2) = (-3/2, 3/2) \cap \mathbb{Z}$입니다. 정수 $n$이 $n < 3/2$이면 $n < 2$이므로 (Z1)([[prime-number]]의 진술, [[order-properties-of-reals]]의 (10))에 의해 $n + 1 \le 2$, 곧 $n \le 1$입니다. 같은 방식으로 $-3/2 < n$이면 $-1 \le n$입니다. 따라서 $B_{\mathbb{Z}}(0, 3/2) = \{-1, 0, 1\}$입니다. 같은 방식으로 $B_{\mathbb{Z}}(0, 1/2) = \{0\}$이고, 이것은 $\mathbb{R}$의 열린구간 $B_{\mathbb{R}}(0, 1/2) = (-1/2, 1/2)$과 다릅니다.
:::

:::example[공의 모양은 거리에 따라 달라질 수 있다]
$\mathbb{R} \times \mathbb{R}$의 점 $o = (0, 0)$과 $q = (3/4, 3/4)$을 봅시다. $d_{\max}(o, q) = 3/4 < 1$이므로 $q \in B_{d_{\max}}(o, 1)$입니다. 한편 $d_E(o, q)\,d_E(o, q) = 9/16 + 9/16 = 9/8$이고 $1 < 9/8$입니다. $d_E(o, q) \le 1$이라면 $0 \le d_E(o, q)$이므로 [[order-properties-of-reals]]의 (7)의 (ii)에 의해 $9/8 \le 1$이 되어 어긋나므로, $1 < d_E(o, q)$이고 $q \notin B_{d_E}(o, 1)$입니다. 또 $d_{\mathrm{sum}}(o, q) = 3/2$이므로 $q \notin B_{d_{\mathrm{sum}}}(o, 1)$입니다. 이 점 $q$는 최대 거리의 공(정사각형의 안쪽)에는 들지만 유클리드 거리의 공(원판)과 합 거리의 공(마름모의 안쪽)에는 들지 않습니다.
:::

:::counterexample[공 하나가 중심과 반지름을 정하지 않을 수 있다]
서로 다른 두 대상 $p$, $q$의 집합 $X = \{p, q\}$에 이산 거리를 주면 (6)에 의해 $B(p, 2) = B(p, 5) = B(q, 2) = X$입니다. 같은 집합이 중심이 다른 공이기도 하고 반지름이 다른 공이기도 합니다. 그래서 "공 $B$의 중심", "공 $B$의 반지름"이라고 말하려면 중심과 반지름을 함께 정해 두어야 합니다.
:::

## 확인 질문

:::check[$\mathbb{R}$에서 $C(0, 1)$의 원소 가운데 $B(0, 1)$에 속하지 않는 것은 무엇인가?]
(5)에 의해 $C(0, 1) = [-1, 1]$이고 $B(0, 1) = (-1, 1)$이므로 $-1$과 $1$입니다. $|0 - y| \le 1$이면서 $|0 - y| < 1$이 아닌 실수 $y$는 $|y| = 1$인 수입니다.
:::

:::check[거리공간에서 $C(x, r) \subseteq B(x, 2r)$는 언제나 성립하는가?]
성립합니다. $0 < r$이므로 $r = r + 0 < r + r = 2r$이고, (2)의 뒤 문장에 의해 $C(x, r) \subseteq B(x, 2r)$입니다.
:::
