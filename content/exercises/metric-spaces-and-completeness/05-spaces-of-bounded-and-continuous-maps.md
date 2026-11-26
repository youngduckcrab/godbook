---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "6.2.5절, Exercise 6.2.18 b) (p.245) — 문제 4 와 같은 사실(공통 상수 K 로 립시츠인 함수들의 극한은 K-립시츠). 문제 4 는 이것을 유계 연속 사상의 공간에서 닫힌집합의 말로, 수열 없이 묻는다"
added: 2026-11-26
---

:::exercise[x 와 x² 의 고른 거리]
$f(x) = x$, $g(x) = x^2$으로 정한 두 함수를 생각한다.

1. $f$와 $g$를 $[0, 1]$ 위의 함수로 보면 $C_b([0, 1], \mathbb{R})$의 원소이고 $d_\infty(f, g) = 4^{-1}$임을 보여라.
2. $f$와 $g$를 $[0, 2]$ 위의 함수로 보면 $C_b([0, 2], \mathbb{R})$의 원소이고 $d_\infty(f, g) = 2$임을 보여라.
:::

:::solution
$C_b$와 그 위의 $d_\infty$는 [[space-of-continuous-maps|유계인 연속 사상의 공간]]의 것이고, "고른 거리 (n)"은 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 번호이다. "순서 (n)"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호, "절댓값 (n)"은 [[absolute-value|절댓값]]의 번호이고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. $x^2 = xx$이다([[power-of-a-real-number|실수의 거듭제곱]]의 (1)).

**원소.** [[continuous-function|연속함수]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 합과 곱]]의 (3)에 의해 $f$와 $g$는 $[0, 1]$ 위에서도 $[0, 2]$ 위에서도 연속함수이므로, 유계인 연속 사상의 공간의 (3)에 의해 $C_b([0, 1], \mathbb{R})$과 $C_b([0, 2], \mathbb{R})$의 원소이고, 그 (3)의 식에 의해 $d_\infty(f, g) = \sup\{|x - x^2| : x \in [0, b]\}$이다($b = 1$ 또는 $b = 2$).

**1.** $x \in [0, 1]$이라 하자. 순서 (3)의 (i)에 의해 $0 \le 1 - x$이므로 순서 (4)의 (iv)에 의해 $0 \le x(1 - x) = x - x^2$이고, 절댓값 (1)에 의해 $|x - x^2| = x - x^2$이다. 계산으로
$$
x - x^2 = 4^{-1} - (x - 2^{-1})^2
$$
이고 순서 (5)의 (iii)에 의해 $0 \le (x - 2^{-1})^2$이므로 $|x - x^2| \le 4^{-1}$이다. 고른 거리 (2)의 (ii)를 $c = 4^{-1}$에 쓰면 $d_\infty(f, g) \le 4^{-1}$이다. 한편 $x = 2^{-1}$에서 $|2^{-1} - 4^{-1}| = 4^{-1}$이므로 고른 거리 (2)의 (i)에 의해 $4^{-1} \le d_\infty(f, g)$이다. 순서 (1)의 (ii)에 의해 $d_\infty(f, g) = 4^{-1}$이다.

**2.** $x \in [0, 2]$라 하자. 순서 (1)의 (iv)에 의해 $x \le 1$이거나 $1 \le x$이다.

- $x \le 1$이면 $x \in [0, 1]$이므로 1에 의해 $|x - x^2| \le 4^{-1} \le 2$이다.
- $1 \le x$이면 $0 \le x - 1 \le 1$이고 $0 \le x \le 2$이므로 순서 (4)의 (iv)와 (11)의 (i)에 의해 $0 \le x(x - 1) \le 2 \cdot 1 = 2$이다. $x(x - 1) = x^2 - x$이므로 절댓값 (3), (1)에 의해 $|x - x^2| = x^2 - x \le 2$이다.

고른 거리 (2)의 (ii)에 의해 $d_\infty(f, g) \le 2$이다. $x = 2$에서 $|2 - 4| = 2$이므로 고른 거리 (2)의 (i)에 의해 $2 \le d_\infty(f, g)$이고, 따라서 $d_\infty(f, g) = 2$이다. 이 예에서는 정의역을 $[0, 1]$에서 $[0, 2]$로 넓히자 고른 거리가 $4^{-1}$에서 $2$로 바뀌었다.
:::

:::exercise[유계인 실숫값 사상의 상한과 고른 거리]
$X$가 공집합이 아닌 집합이다. $f \in \operatorname{Bd}(X, \mathbb{R})$에 대하여 $S(f) = \sup f(X)$로 둔다.

1. $S(f)$가 실수 하나로 정해지고, $\operatorname{Bd}(X, \mathbb{R})$의 모든 원소 $f$, $g$에서 $|S(f) - S(g)| \le d_\infty(f, g)$임을 보여라. 따라서 $S : \operatorname{Bd}(X, \mathbb{R}) \to \mathbb{R}$는 $1$-립시츠이고 연속이다.
2. $X$에서 $\mathbb{R}$로의 사상의 열 $(f_n)$의 모든 항이 유계이고 $(f_n)$이 사상 $k$로 고르게 수렴하면, $k$는 유계이고 $n$번째 항이 $\sup f_n(X)$인 실수열이 $\sup k(X)$로 수렴함을 보여라.
3. $X = \mathbb{N}$이고, 자연수 $n$, $j$에 대하여 $j \ge n$이면 $f_n(j) = 1$, $j < n$이면 $f_n(j) = 0$이라 하자. $(f_n)$은 값이 $0$인 상수 사상으로 점별 수렴하지만 모든 $n$에서 $\sup f_n(\mathbb{N}) = 1$임을 보여라. 2에서 "고르게"를 "점별로"로 바꿀 수 없다.
:::

:::solution
$\operatorname{Bd}$, $d_\infty$, 상수 사상 $\kappa_y$는 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 것이고 그 번호를 "고른 거리 (n)"으로 쓴다. 상계와 상한은 [[upper-bound-and-supremum|상계와 상한]]의 것이고, "순서 (n)"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호, "절댓값 (n)"은 [[absolute-value|절댓값]]의 번호이다.

**1.** *$S(f)$가 정해진다.* $X$의 점 $x_0$에서 $f(x_0) \in f(X)$이므로 $f(X)$는 공집합이 아니다. 고른 거리 (4)의 (i)에 의해 모든 $x$에서 $|f(x)| \le B$인 실수 $B$가 있고, 절댓값 (6)과 순서 (1)의 (v)에 의해 $f(x) \le B$이다. [[image-and-preimage|상과 역상]]의 (1)에 의해 $f(X)$의 원소는 모두 어떤 $x$에서의 $f(x)$이므로 $B$는 $f(X)$의 상계이다. [[least-upper-bound-property|최소상계 성질]] (U)에 의해 $f(X)$는 상한을 갖고, 상계와 상한의 (1)에 의해 그것은 하나뿐이다.

*어림.* $x \in X$이면 고른 거리 (4)의 (iii)과 (2)의 (i)에 의해 $|f(x) - g(x)| \le d_\infty(f, g)$이고, 상한은 상계이므로 $g(x) \le S(g)$이다. 절댓값 (6)과 순서 (2)의 (iii)에 의해
$$
\begin{aligned}
f(x) &= g(x) + (f(x) - g(x)) \\
&\le S(g) + d_\infty(f, g)
\end{aligned}
$$
이다. 그래서 $S(g) + d_\infty(f, g)$는 $f(X)$의 상계이고, 상한은 가장 작은 상계이므로 $S(f) \le S(g) + d_\infty(f, g)$이다. $f$와 $g$를 바꾸면 고른 거리 (3)(거리의 대칭)에 의해 $S(g) \le S(f) + d_\infty(f, g)$이다. 순서 (2)의 (ii)에 의해 $-d_\infty(f, g) \le S(f) - S(g) \le d_\infty(f, g)$이고, 절댓값 (7)에 의해 $|S(f) - S(g)| \le d_\infty(f, g)$이다.

*립시츠.* $S(f)$는 $f$마다 하나로 정해지므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 함수 $S$가 있다. $\mathbb{R}$의 보통 거리는 $|u - v|$이므로([[metric-space-examples|거리공간의 예]]의 (1)) 위의 어림과 $0 \le 1$에 의해 $S$는 [[lipschitz-map|거리공간 사이의 립시츠 사상]]의 뜻으로 $1$-립시츠이고, 그 (3)에 의해 연속이다.

**2.** 고른 거리 (7)의 (i)에 의해 $k$는 유계이다. $(f_n)$의 모든 항과 $k$는 $\operatorname{Bd}(X, \mathbb{R})$의 원소이므로 [[function|함수]]의 "공역은 선언하기 나름이다"에 의해 $(f_n)$은 $\operatorname{Bd}(X, \mathbb{R})$의 수열이기도 하고, 고른 거리 (5)에 의해 $(\operatorname{Bd}(X, \mathbb{R}), d_\infty)$에서 $k$로 수렴한다. 각 $n$에서 $S(f_n)$은 실수 하나이므로 [[sequence|수열]]의 (1)에 의해 $n$번째 항이 $S(f_n)$인 실수열이 있다. 양의 실수 $\varepsilon$을 잡으면 [[convergence-in-metric-spaces|거리공간의 수렴]]의 (1)에 의해 자연수 $M$이 있어 $n \ge M$이면 $d_\infty(f_n, k) < \varepsilon$이고, 1에 의해 $|S(f_n) - S(k)| \le d_\infty(f_n, k) < \varepsilon$이다(순서 (1)의 (v)). [[limit-of-sequence|수열의 수렴]]의 정의에 의해 $(S(f_n))$은 $S(k)$로 수렴한다.

**3.** [[well-ordering-principle|정렬 원리]]의 (Z5)(삼분법)에 의해 각 $j$는 $j \ge n$과 $j < n$ 가운데 정확히 하나를 만족하므로, [[pointwise-convergence|사상의 열과 점별 수렴]]의 (1)에 의해 열 $(f_n)$이 정해진다. 모든 값이 $0$이나 $1$이므로 고른 거리 (4)의 (i)에 의해 $f_n$은 유계이다.

*점별 수렴.* 자연수 $j$를 정하면 $n \ge j + 1$인 모든 자연수 $n$에서 $j < n$이므로(정렬 원리의 (Z6), (Z7)) $f_n(j) = 0$이다. 곧 실수열 $(f_n(j))$는 $(j + 1)$번째 항부터 모두 $0$이고, [[limit-of-sequence|수열의 수렴]]의 정의에서 모든 $\varepsilon$에 $M = j + 1$을 쓰면 $0$으로 수렴한다. 사상의 열과 점별 수렴의 (8)에 의해 $(f_n)$은 $\kappa_0$으로 점별 수렴한다.

*상한.* $f_n(n) = 1$이므로 $1 \in f_n(\mathbb{N})$이고, $f_n(\mathbb{N})$의 원소는 $0$이나 $1$이어서 $1$ 이하이므로(순서 (5)의 (ii)) $1$은 $f_n(\mathbb{N})$의 최댓값이다. 상계와 상한의 (2)에 의해 $\sup f_n(\mathbb{N}) = 1$이다. 한편 $\kappa_0(\mathbb{N}) = \{0\}$이므로 같은 까닭으로 $\sup \kappa_0(\mathbb{N}) = 0$이다. 모든 항이 $1$인 실수열은 [[basic-limits|기본적인 극한]]의 (1)에 의해 $1$로 수렴하고, [[limit-is-unique|극한의 유일성]]에 의해 $0$으로 수렴하지 않는다. 2에 의해 이 열은 어떤 사상으로도 고르게 수렴하지 않는다(고른 극한이 있다면 [[uniform-convergence|고른 수렴]]의 (2)에 의해 $\kappa_0$이어야 한다).
:::

:::exercise[닫힌구간 [0, 1] 위의 연속함수 공간의 두 닫힌 부분집합]
$Z = C_b([0, 1], \mathbb{R})$에 고른 거리 $d_\infty$를 주고
$$
\begin{aligned}
A &= \{f \in Z : f(0) = 0\}, \\
E &= \Bigl\{f \in Z : \int_0^1 f = 0\Bigr\}
\end{aligned}
$$
로 둔다.

1. $A$가 $(Z, d_\infty)$에서 닫힌집합임을 보여라.
2. $\Phi(f) = \int_0^1 f$로 정한 $\Phi : Z \to \mathbb{R}$가 $1$-립시츠임을 보이고, $E$가 닫힌집합임을 보여라.
3. $A \cap E$가 $d_\infty$로 완비이고, $f(x) = 2x - 3x^2$으로 정한 함수가 $A \cap E$의 원소임을 보여라.
:::

:::solution
$C_b$와 $d_\infty$는 [[space-of-continuous-maps|유계인 연속 사상의 공간]]의 것이고, 값 매기기 $\operatorname{ev}_x$와 그 번호는 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 것이다("고른 거리 (n)"). $K$-립시츠는 [[lipschitz-map|거리공간 사이의 립시츠 사상]]의 것이다. 유계인 연속 사상의 공간의 (3)에 의해 $Z$의 원소는 정확히 $[0, 1]$ 위의 연속함수이다. 거리공간의 부분집합이 닫힌집합인 것은 [[closed-set|닫힌집합]]의 (6)에 의해 거리위상에서 닫힌집합인 것과 같다.

**1.** 고른 거리 (8)에 의해 $\operatorname{ev}_0 : \operatorname{Bd}([0, 1], \mathbb{R}) \to \mathbb{R}$는 $1$-립시츠이고, $Z$에는 $d_\infty$의 부분공간 거리를 주므로 립시츠 사상의 (5)에 의해 그 제한 $e = \operatorname{ev}_0|_Z : Z \to \mathbb{R}$도 $1$-립시츠이며, 그 (3)에 의해 연속이다. [[open-set-in-metric-space|거리공간의 열린집합]]의 (5)에 의해 $\{0\}$은 $\mathbb{R}$의 닫힌집합이다. [[continuity-criteria|연속의 판정]]의 (1)에 의해 $e^{-1}(\{0\}) = \{f \in Z : f(0) = 0\} = A$는 $Z$에서 닫힌집합이다.

**2.** *$\Phi$가 정해진다.* $f \in Z$이면 $f$는 연속함수이므로 [[fundamental-theorem-of-calculus-second-form|미적분의 기본정리 둘째 꼴]]의 (4)와 [[oriented-integral|방향 있는 적분]]의 정의($0 < 1$)에 의해 $[0, 1]$에서 리만 적분가능하고, $\int_0^1 f$는 실수 하나이다. [[recursion-theorem|재귀 정리]]의 (1)에 의해 $\Phi$가 있다.

*$1$-립시츠.* $f$, $g \in Z$라 하자. [[linearity-of-the-integral|적분의 선형성]]의 (4)에 의해 $f - g$는 적분가능하고 $\int_0^1 (f - g) = \Phi(f) - \Phi(g)$이다. 고른 거리 (4)의 (iii)과 (2)의 (i)에 의해 모든 $x$에서 $|(f - g)(x)| = |f(x) - g(x)| \le d_\infty(f, g)$이므로, [[riemann-integral|리만 적분]]의 (2)의 (iii)을 $B = d_\infty(f, g)$에 쓰면
$$
|\Phi(f) - \Phi(g)| \le d_\infty(f, g)\,(1 - 0)
$$
이다. 따라서 $\Phi$는 $1$-립시츠이고 립시츠 사상의 (3)에 의해 연속이며, 1과 같은 방법으로 $E = \Phi^{-1}(\{0\})$은 닫힌집합이다.

**3.** *완비.* 닫힌집합의 (2)를 집합족 $\{A, E\}$에 쓰면 $A \cap E$는 $Z$에서 닫힌집합이다. 유계인 연속 사상의 공간의 (3)에 의해 $(Z, d_\infty)$는 완비이므로, [[closed-subset-of-complete-space|완비 거리공간의 닫힌 부분집합]]의 (1)에 의해 $A \cap E$는 부분공간 거리로 완비이다.

*원소.* $f(x) = 2x - 3x^2$은 [[continuous-function|연속함수]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 합과 곱]]의 (3)에 의해 연속함수이므로 $f \in Z$이다. $f(0) = 0$이다. [[antiderivative-and-integral-of-power|원시함수와 거듭제곱의 적분]]의 (3)에 의해 $\int_0^1 x\,dx = 2^{-1}$, $\int_0^1 x^2\,dx = 3^{-1}$이므로 적분의 선형성의 (4)에 의해 $\int_0^1 f = 2 \cdot 2^{-1} - 3 \cdot 3^{-1} = 0$이다. 따라서 $f \in A \cap E$이다.
:::

:::exercise[K-립시츠인 유계 연속 사상 전체]
$(X, d_X)$, $(Y, d_Y)$가 거리공간이고($X$에는 거리위상을 준다) $K$가 $0 \le K$인 실수이다. $C_b(X, Y)$의 원소 가운데 $K$-립시츠인 것 전체의 집합을 $\Lambda_K$로 둔다.

1. 폐포의 점에 수렴하는 수열을 만들지 말고, $\Lambda_K$가 $(C_b(X, Y), d_\infty)$에서 닫힌집합임을 보여라.
2. $(Y, d_Y)$가 완비이면 $\Lambda_K$가 $d_\infty$로 완비임을 보여라. 특히 $X = [0, 1]$, $Y = \mathbb{R}$이면 $\Lambda_1$은 완비이고 $\kappa_0$과 항등함수를 원소로 가짐을 보여라.
:::

:::solution
$C_b$와 $d_\infty$는 [[space-of-continuous-maps|유계인 연속 사상의 공간]]의 것이고, $K$-립시츠는 [[lipschitz-map|거리공간 사이의 립시츠 사상]]의 것이다. "고른 거리 (n)"은 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 번호, "폐포 (n)"은 [[interior-and-closure|내부와 폐포]]의 번호, "순서 (n)"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다. 거리의 조건과 네 점의 부등식은 [[metric-space|거리공간]]의 것이다. 양수 $\varepsilon$에 대하여 $0 < \varepsilon \cdot 2^{-1}$이고 그 두 배는 $\varepsilon$이다(순서 (8), [[real-number-arithmetic|실수의 계산 법칙]]).

**1.** $\overline{\Lambda_K}$를 $(C_b(X, Y), d_\infty)$에서의 폐포라 하고 $f \in \overline{\Lambda_K}$라 하자. 폐포는 $C_b(X, Y)$의 부분집합이므로 $f \in C_b(X, Y)$이다. $p$, $q \in X$와 양의 실수 $\varepsilon$을 잡는다. [[closure-in-a-metric-space|거리공간의 폐포]]의 (1)에 의해 $B(f, \varepsilon \cdot 2^{-1}) \cap \Lambda_K \ne \emptyset$이므로 $d_\infty(f, g) < \varepsilon \cdot 2^{-1}$인 $g \in \Lambda_K$가 있다. 고른 거리 (2)의 (i)과 거리의 대칭에 의해 $d_Y(f(p), g(p)) < \varepsilon \cdot 2^{-1}$, $d_Y(g(q), f(q)) < \varepsilon \cdot 2^{-1}$이고, $g$가 $K$-립시츠이므로 $d_Y(g(p), g(q)) \le K\,d_X(p, q)$이다. 거리공간의 (3)과 순서 (2)의 (iii), (iv)에 의해
$$
\begin{aligned}
d_Y(f(p), f(q)) &\le d_Y(f(p), g(p)) \\
&\quad + d_Y(g(p), g(q)) \\
&\quad + d_Y(g(q), f(q)) \\
&< \varepsilon + K\,d_X(p, q)
\end{aligned}
$$
이다. $t = d_Y(f(p), f(q)) - K\,d_X(p, q)$로 두면 순서 (3)의 (i)에 의해 $t < \varepsilon$이고, 이것이 모든 양수 $\varepsilon$에서 성립하므로 순서 (9)에 의해 $t \le 0$이다. 곧 $d_Y(f(p), f(q)) \le K\,d_X(p, q)$이고, $0 \le K$이므로 $f$는 $K$-립시츠이다. 따라서 $f \in \Lambda_K$이고 $\overline{\Lambda_K} \subseteq \Lambda_K$이다. 폐포 (1)에 의해 $\Lambda_K \subseteq \overline{\Lambda_K}$이므로 두 집합은 같고, 폐포 (3)과 [[closed-set|닫힌집합]]의 (6)에 의해 $\Lambda_K$는 닫힌집합이다.

수열은 쓰지 않았고, $\varepsilon$마다 가까운 사상 $g$ 하나만 썼다. 이 계산은 [[uniform-limit-of-continuous-maps|연속 사상의 고른 극한은 연속이다]]의 (5)의 증명과 같은 세 걸음이다.

**2.** 유계인 연속 사상의 공간의 (2)에 의해 $(C_b(X, Y), d_\infty)$는 완비이고, 1에 의해 $\Lambda_K$는 그 닫힌집합이므로 [[closed-subset-of-complete-space|완비 거리공간의 닫힌 부분집합]]의 (1)에 의해 완비이다.

$X = [0, 1]$, $Y = \mathbb{R}$이면 [[complete-metric-space|완비 거리공간]]의 (2)에 의해 $\mathbb{R}$은 완비이므로 $\Lambda_1$은 완비이다. 립시츠 사상의 (6)의 (i)에 의해 $\kappa_0$은 $0$-립시츠이고 항등함수는 $1$-립시츠이며, 그 (1)에 의해 $\kappa_0$은 $1$-립시츠이기도 하다. 둘 다 연속함수이므로 유계인 연속 사상의 공간의 (3)에 의해 $C_b([0, 1], \mathbb{R})$의 원소이고, 따라서 $\Lambda_1$의 원소이다.
:::

:::exercise[연속함수 공간 위의 축소 사상 Tf(x) = x + f(1 − x)/2]
$Z = C_b([0, 1], \mathbb{R})$에 고른 거리 $d_\infty$를 주고, $f \in Z$와 $x \in [0, 1]$에 대하여 $(Tf)(x) = x + 2^{-1} f(1 - x)$로 둔다.

1. $Tf \in Z$이고, $f$를 $Tf$로 보내는 $T : Z \to Z$가 축소 상수 $2^{-1}$의 축소 사상임을 보여라.
2. $[0, 1]$의 모든 $x$에서 $f(x) = x + 2^{-1} f(1 - x)$인 연속함수 $f : [0, 1] \to \mathbb{R}$가 정확히 하나 있음을 바나흐 고정점 정리로 보이고, 그 함수를 구하라.
3. $\kappa_0$에서 시작하는 $T$의 반복열의 처음 네 항을 구하고, 넷째 항과 2의 함수 사이의 고른 거리를 바나흐 고정점 정리의 어림과 견주어라.
:::

:::solution
$C_b$와 $d_\infty$는 [[space-of-continuous-maps|유계인 연속 사상의 공간]]의 것이고, "고른 거리 (n)"은 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 번호이다. 축소 사상과 고정점은 [[contraction-mapping|축소 사상과 고정점]]의 것이고, 반복열은 [[banach-fixed-point-theorem|바나흐 고정점 정리]]의 것이다. 유계인 연속 사상의 공간의 (3)에 의해 $Z$의 원소는 정확히 $[0, 1]$ 위의 연속함수이고, $(Z, d_\infty)$는 완비이며, $d_\infty(f, g) = \sup\{|f(x) - g(x)| : x \in [0, 1]\}$이다. "순서 (n)"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**1.** *$Tf \in Z$.* $x \in [0, 1]$이면 순서 (3)의 (i), (iii)에 의해 $0 \le 1 - x \le 1$이므로 $\rho(x) = 1 - x$로 정한 $\rho : [0, 1] \to [0, 1]$이 있고, [[continuous-function|연속함수]]의 (4)와 [[continuity-of-sum-and-product|연속함수의 합과 곱]]의 (3)에 의해 연속함수이다. [[composition-of-continuous-functions|연속함수의 합성]]의 (2)에 의해 $f \circ \rho$는 연속함수이고, 연속함수의 합과 곱의 (3)에 의해 $Tf = i + 2^{-1}(f \circ \rho)$($i$는 항등함수)는 연속함수이다. 따라서 $Tf \in Z$이고 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $T : Z \to Z$가 있다.

*축소.* $f$, $g \in Z$, $x \in [0, 1]$이면 [[absolute-value|절댓값]]의 (4)와 (1), 고른 거리 (4)의 (iii)과 (2)의 (i)(점 $1 - x$에서)에 의해
$$
\begin{aligned}
&|(Tf)(x) - (Tg)(x)| \\
&\quad = 2^{-1}|f(1 - x) - g(1 - x)| \\
&\quad \le 2^{-1} d_\infty(f, g)
\end{aligned}
$$
이다. $0 \le 2^{-1}d_\infty(f, g)$이므로 고른 거리 (2)의 (ii)에 의해 $d_\infty(Tf, Tg) \le 2^{-1} d_\infty(f, g)$이다. $0 \le 2^{-1} < 1$이므로 $T$는 축소 상수 $2^{-1}$의 축소 사상이다.

**2.** *정확히 하나.* 연속함수 $f : [0, 1] \to \mathbb{R}$가 식을 만족하는 것은 정확히 $f \in Z$이고 $Tf = f$일 때, 곧 $f$가 $T$의 고정점일 때이다([[real-valued-function|실함수]]의 (2)). $\kappa_0 \in Z$이므로 $Z$는 공집합이 아니고 $(Z, d_\infty)$는 완비이므로, 바나흐 고정점 정리의 (2)에 의해 $T$의 고정점은 정확히 하나 있다.

*구하기.* $f$가 식을 만족하면 $x$ 대신 $1 - x$를 넣어 $f(1 - x) = 1 - x + 2^{-1}f(x)$이고, 이것을 원래 식에 넣으면
$$
\begin{aligned}
f(x) &= x + 2^{-1}(1 - x) + 4^{-1} f(x)
\end{aligned}
$$
이다. 곧 $3 \cdot 4^{-1} f(x) = 2^{-1}(1 + x)$이고 $f(x) = 3^{-1}(2 + 2x)$이다. 거꾸로 $p(x) = 3^{-1}(2 + 2x)$로 정한 함수는 연속함수이고
$$
\begin{aligned}
(Tp)(x) &= x + 6^{-1}\bigl(2 + 2(1 - x)\bigr) \\
&= 3^{-1}(2 + 2x) = p(x)
\end{aligned}
$$
이므로 $p$가 그 고정점이다.

**3.** $f_1 = \kappa_0$이고 $f_{n+1} = Tf_n$이다. 계산하면
$$
\begin{aligned}
f_2(x) &= x, \\
f_3(x) &= x + 2^{-1}(1 - x) \\
&= 2^{-1}(1 + x), \\
f_4(x) &= x + 4^{-1}\bigl(1 + (1 - x)\bigr) \\
&= 4^{-1}(2 + 3x)
\end{aligned}
$$
이다. $p(x) - f_4(x) = 12^{-1}(8 + 8x - 6 - 9x) = 12^{-1}(2 - x)$이고, $x \in [0, 1]$이면 $0 < 12^{-1}(2 - x) \le 6^{-1}$이며 $x = 0$에서 등호이므로 고른 거리 (2)의 (i), (ii)에 의해 $d_\infty(f_4, p) = 6^{-1}$이다.

바나흐 고정점 정리의 (2)의 어림은 $k = 2^{-1}$, $n = 4$에서 $d_\infty(f_4, p) \le k^3(1 - k)^{-1} d_\infty(f_1, f_2)$이다. $d_\infty(\kappa_0, f_2) = \sup\{|x| : x \in [0, 1]\} = 1$(최댓값 $1$, [[upper-bound-and-supremum|상계와 상한]]의 (2))이므로 오른쪽은 $8^{-1} \cdot 2 \cdot 1 = 4^{-1}$이다. 실제 거리 $6^{-1}$은 이 어림 $4^{-1}$ 이하이다.
:::

:::exercise[모든 점에서 양수인 연속함수의 집합과 정의역]
$P$를 $C_b([0, 1], \mathbb{R})$의 원소 $f$ 가운데 모든 $x \in [0, 1]$에서 $0 < f(x)$인 것 전체의 집합이라 하고, $Y = (0, 1]$(보통 거리의 부분공간 거리)에 대하여 $Q$를 $C_b(Y, \mathbb{R})$의 원소 $f$ 가운데 모든 $x \in Y$에서 $0 < f(x)$인 것 전체의 집합이라 하자.

1. $P$가 $(C_b([0, 1], \mathbb{R}), d_\infty)$에서 열린집합임을 보여라.
2. $Q$는 $(C_b(Y, \mathbb{R}), d_\infty)$에서 열린집합이 아님을 보여라. 1의 증명에서 어느 가정이 쓰였는지 밝혀라.
:::

:::solution
$C_b$와 $d_\infty$는 [[space-of-continuous-maps|유계인 연속 사상의 공간]]의 것이고, "고른 거리 (n)"은 [[bounded-maps-and-uniform-metric|유계 사상의 공간과 고른 거리]]의 번호이다. 열린집합과 열린 공은 [[open-set-in-metric-space|거리공간의 열린집합]], [[open-ball|열린 공]]의 것이다. "순서 (n)"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호, "절댓값 (n)"은 [[absolute-value|절댓값]]의 번호이다.

**1.** $f \in P$라 하자. 유계인 연속 사상의 공간의 (3)에 의해 $f$는 연속함수이므로 [[extreme-value-theorem|최대·최소 정리]]의 (2)에 의해 모든 $x \in [0, 1]$에서 $f(c) \le f(x)$인 $c \in [0, 1]$이 있다. $m = f(c)$로 두면 $0 < m$이다. $g \in B(f, m)$, 곧 $g \in C_b([0, 1], \mathbb{R})$이고 $d_\infty(f, g) < m$이라 하자. $x \in [0, 1]$이면 고른 거리 (4)의 (iii)과 (2)의 (i), 절댓값 (6)에 의해 $f(x) - g(x) \le |f(x) - g(x)| \le d_\infty(f, g) < m$이므로
$$
\begin{aligned}
g(x) &= f(x) - (f(x) - g(x)) \\
&> f(x) - m \ge 0
\end{aligned}
$$
이다(순서 (3)의 (iii), (2)의 (iv), (3)의 (i)). 따라서 $g \in P$이고 $B(f, m) \subseteq P$이다. $f$는 $P$의 아무 점이었으므로 $P$는 열린집합이다.

**2.** *$Q$의 점 하나.* $f(x) = x$로 정한 $f : Y \to \mathbb{R}$는 연속함수이고([[continuous-function|연속함수]]의 (4)) 모든 $x \in Y$에서 $|f(x)| = x \le 1$이므로 고른 거리 (4)의 (i)에 의해 유계이다. [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)에 의해 $f \in C_b(Y, \mathbb{R})$이고, 모든 값이 양수이므로 $f \in Q$이다.

*그 둘레의 어떤 공도 $Q$에 들지 않는다.* 양의 실수 $r$를 잡고 $g(x) = x - 2^{-1}r$로 정한 $g : Y \to \mathbb{R}$를 본다. 같은 까닭으로 $g$는 연속이고 $|g(x)| \le 1 + 2^{-1}r$이므로 $g \in C_b(Y, \mathbb{R})$이다. 모든 $x$에서 $|f(x) - g(x)| = 2^{-1}r$이므로 고른 거리 (2)의 (ii)와 순서 (8)에 의해 $d_\infty(f, g) \le 2^{-1}r < r$, 곧 $g \in B(f, r)$이다. 한편 $x_1 = \min\{2^{-1}r, 1\}$은 절댓값 (10)에 의해 양수이고 $1$ 이하이며 $2^{-1}r$ 이하이므로 $x_1 \in Y$이고 $g(x_1) = x_1 - 2^{-1}r \le 0$이다. 따라서 $g \notin Q$이다. $r$는 아무 양수였으므로 $B(f, r) \subseteq Q$인 $r$는 없고, $Q$는 열린집합이 아니다.

*쓰인 가정.* 1의 증명은 $f$가 최솟값을 갖는다는 것, 곧 정의역 $[0, 1]$에서의 최대·최소 정리를 썼다. 2의 $f(x) = x$는 $Y$ 위에서 모든 값이 양수이지만, 2의 $x_1$에서 보듯 값이 $0$에 얼마든지 가까워지고 최솟값이 없다. 그래서 $f$에서 거리 $m$ 이내의 함수가 모두 양수가 되게 하는 양수 $m$이 없다.
:::
