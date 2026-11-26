---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "7.6절 Fixed point theorem and Picard's theorem again, 7.6.3소절 Exercises, Exercise 7.6.4 (p.299) — 문제 '점화식으로 정한 복소수열'과 같은 발상(출처는 0 < k < 1 인 F(x) = kx + b 가 축소사상임을 보이고 고정점을 구하게 한다. 이 문제는 복소수의 F(z) = (i/2)z + 1 을 되풀이해 얻은 수열이 고정점으로 수렴함을 직접 보인다)"
added: 2026-11-26
---

:::exercise[몫으로 정한 복소수열의 극한]
자연수 $n$에서 $z_n = \dfrac{n + 2i}{n - i}$로 둔다.

1. 모든 $n$에서 $n - i \ne 0$임을 보이고, $(z_n)$이 $1$로 수렴함을 [[limit-laws-for-complex-sequences|복소수열의 극한 법칙]]으로 보여라.
2. $|z_n - 1|$을 $n$으로 나타내고, $n \ge 300$인 모든 자연수 $n$에서 $|z_n - 1| < \dfrac{1}{100}$임을 보여라.
:::

:::solution
아래에서 $\mathbb{C}$ 안의 계산은 [[complex-field|복소수체]]의 (1)에 의해 $\mathbb{C}$가 체라는 것([[ring|환]]과 [[field|가역원과 체]]의 정의, [[ring-basic-properties|환의 기본 성질]])으로 하고, 실수는 복소수체의 (3)의 약속대로 읽는다. "극한 법칙"은 복소수열의 극한 법칙, "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**(1)** 복소수체의 (4)에 의해 $n - i = n + (-1)i$의 실수부는 $n$이고, 순서 성질의 (10)에 의해 $n$은 양의 실수라 $0$이 아니다. 따라서 [[complex-number|복소수]]의 (1)에 의해 $n - i \ne 0 = 0 + 0i$이다.

$t_n = \iota(n^{-1})$로 두고 $u_n = 1 + 2i\,t_n$, $v_n = 1 - i\,t_n$이라 하자. 복소수체의 (2)의 (i)에 의해 $\iota(n)\,t_n = \iota(n\,n^{-1}) = 1$이므로 분배법칙에 의해 $\iota(n)\,u_n = n + 2i$이고 $\iota(n)\,v_n = n - i$이다. 복소수체의 (4)에 의해 $v_n = 1 + (-n^{-1})i$의 실수부는 $1$이므로 $v_n \ne 0$이고, 가역원과 체의 (1)의 $(ab)^{-1} = b^{-1}a^{-1}$과 교환법칙에 의해
$$
z_n = \iota(n)\,u_n\,\bigl(\iota(n)\,v_n\bigr)^{-1} = u_n\, v_n^{-1}
$$
이다. [[basic-limits|기본적인 극한]]의 (2)에 의해 $(n^{-1})$은 $0$으로 수렴하므로 극한 법칙의 (6)의 (i)에 의해 $(t_n)$은 $\iota(0) = 0$으로 수렴한다. 극한 법칙의 (2)의 상수배와 상수 더하기에 의해 $(u_n)$은 $1 + 2i \cdot 0 = 1$로, $(v_n)$은 $1 - i \cdot 0 = 1$로 수렴한다. 모든 $v_n$이 $0$이 아니고 극한 $1$도 $0$이 아니므로, 극한 법칙의 (5)의 (i)에 의해 $(z_n)$은 $1 \cdot 1^{-1} = 1$로 수렴한다.

**(2)** (1)에서 $n - i \ne 0$이므로 $z_n - 1 = \bigl((n + 2i) - (n - i)\bigr)(n - i)^{-1} = 3i\,(n - i)^{-1}$이다. 절댓값의 (3), (4), (5)와 [[absolute-value|실수의 절댓값]]의 (1), 복소수의 절댓값의 정의에 의해
$$
|z_n - 1| = \frac{|3|\,|i|}{|n - i|} = \frac{3}{\sqrt{n^2 + 1}}
$$
이다. $0 \le n^2 < n^2 + 1$이므로 [[square-root-exists|제곱근]]의 (2)에 의해 $n = \sqrt{nn} < \sqrt{n^2 + 1}$이고, 순서 성질의 (6)의 (ii)에 의해 $\bigl(\sqrt{n^2 + 1}\bigr)^{-1} < n^{-1}$이다. 순서 성질의 (4)의 (i)에 의해 $|z_n - 1| < 3n^{-1}$이다. $n \ge 300$이면 $n^{-1} \le 300^{-1}$이다($n = 300$이면 같고, $300 < n$이면 순서 성질의 (6)의 (ii)). 따라서 $3n^{-1} \le 3 \cdot 300^{-1} = \tfrac{1}{100}$이고, 순서 성질의 (1)의 (v)에 의해 $|z_n - 1| < \tfrac{1}{100}$이다.
:::

:::exercise[점화식으로 정한 복소수열]
$z_1 = 0$이고 모든 자연수 $n$에서 $z_{n+1} = \dfrac{i}{2}\, z_n + 1$인 복소수열 $(z_n)$을 생각한다.

1. 이런 복소수열이 정확히 하나 있음을 보이고, $z_2$, $z_3$, $z_4$를 구하라.
2. $L = \dfrac{4}{5} + \dfrac{2}{5} i$로 두면 $L = \dfrac{i}{2} L + 1$임을 보여라.
3. 모든 자연수 $n$에서 $|z_n - L| = \bigl(\tfrac{1}{2}\bigr)^{n-1} |L|$임을 보이고, $(z_n)$이 $L$로 수렴함을 보여라.
:::

:::solution
아래에서 $\mathbb{C}$ 안의 계산과 실수를 복소수 자리에 쓰는 약속은 문제 1의 풀이 첫머리와 같다. "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "실수의 거듭제곱"은 [[power-of-a-real-number|실수의 거듭제곱]]의 번호이다. $\tfrac{i}{2}$는 $\iota(2^{-1})\,i$이다.

**(1)** $\mathbb{N} \times \mathbb{C}$의 원소 $(n, t)$마다 복소수 $\tfrac{i}{2}t + 1$이 식으로 정해지므로, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $g(n, t) = \tfrac{i}{2}t + 1$인 함수 $g : \mathbb{N} \times \mathbb{C} \to \mathbb{C}$가 있다. 재귀 정리를 $X = \mathbb{C}$, $a = 0$, 이 $g$에 쓰면 $z(1) = 0$이고 $z(n + 1) = g(n, z(n))$인 함수 $z : \mathbb{N} \to \mathbb{C}$, 곧 복소수열이 정확히 하나 있다. 계산하면 [[complex-field|복소수체]]의 (5)의 $ii = -1$에 의해
$$
\begin{aligned}
z_2 &= \tfrac{i}{2} \cdot 0 + 1 = 1, \\
z_3 &= \tfrac{i}{2} \cdot 1 + 1 = 1 + \tfrac{1}{2} i, \\
z_4 &= \tfrac{i}{2}\bigl(1 + \tfrac{1}{2} i\bigr) + 1 = \tfrac{3}{4} + \tfrac{1}{2} i
\end{aligned}
$$
이다.

**(2)** $ii = -1$에 의해 $\tfrac{i}{2} L = \tfrac{2}{5} i + \tfrac{1}{5}\,ii = -\tfrac{1}{5} + \tfrac{2}{5} i$이고, $1$을 더하면 $\tfrac{4}{5} + \tfrac{2}{5} i = L$이다.

**(3)** 먼저 $\bigl|\tfrac{i}{2}\bigr| = \tfrac{1}{2}$이다. 절댓값의 (5)에 의해 $|\iota(2^{-1})\,i| = |2^{-1}|\,|i| = 2^{-1}$이기 때문이다([[absolute-value|실수의 절댓값]]의 (1)과 $0 < 2^{-1}$). (2)를 쓰면 모든 자연수 $k$에서 분배법칙에 의해
$$
\begin{aligned}
z_{k+1} - L &= \Bigl(\tfrac{i}{2} z_k + 1\Bigr) - \Bigl(\tfrac{i}{2} L + 1\Bigr) \\
&= \tfrac{i}{2}\,(z_k - L)
\end{aligned}
$$
이다. $n$에 대한 [[mathematical-induction|수학적 귀납법]]으로 $|z_n - L| = (2^{-1})^{n-1} |L|$을 보인다. $n = 1$이면 $z_1 - L = -L$이고 절댓값의 (2)에 의해 $|-L| = |L| = (2^{-1})^{0} |L|$이다. $n = k$에서 성립하면 위 식과 절댓값의 (3)에 의해 $|z_{k+1} - L| = 2^{-1}\,(2^{-1})^{k-1} |L| = (2^{-1})^{k} |L|$이다(실수의 거듭제곱의 (1)).

[[geometric-sequence-limit|등비수열의 극한]]의 (1)에 의해 $|2^{-1}| < 1$이므로 $\bigl((2^{-1})^n\bigr)$은 $0$으로 수렴하고, 실수의 거듭제곱의 (1)에 의해 $(2^{-1})^{n-1} |L| = 2|L|\,(2^{-1})^{n}$이므로 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $n$번째 항이 $|z_n - L|$인 실수열은 $2|L| \cdot 0 = 0$으로 수렴한다. [[convergence-of-complex-sequences|복소수열의 수렴]]의 (1)에 의해 $(z_n)$은 $L$로 수렴한다.
:::

:::exercise[두 연속함수의 값이 같은 점의 집합]
1. $(Z, \mathcal{T}_Z)$가 위상공간이고 $f, g : Z \to \mathbb{C}$가 연속이면 $S = \{z \in Z : f(z) = g(z)\}$는 $Z$에서 닫힌집합임을 보여라.
2. 이를 써서 실수인 복소수 전체의 집합 $\iota(\mathbb{R})$가 $\mathbb{C}$에서 닫힌집합임을 보여라.
:::

:::solution
아래에서 "연속"은 [[continuity-of-complex-operations|복소수 연산의 연속]]의 번호이다.

**(1)** $h = f - g : Z \to \mathbb{C}$로 두면 연속의 (3)에 의해 $h$는 연속이다. $z \in Z$에서 $f(z) = g(z)$인 것은 정확히 $h(z) = f(z) - g(z) = 0$일 때이다(양변에 $g(z)$를 더하거나 빼면 된다, [[complex-field|복소수체]]의 (1)). 따라서 $S$는 역상 $h^{-1}(\{0\})$이다. 한 점 집합 $\{0\}$은 $\mathbb{C}$의 유한 부분집합이므로 [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (2)에 의해 $(\mathbb{C}, d)$에서 닫힌집합이고, [[closed-set|위상공간의 닫힌집합]]의 (6)에 의해 거리위상에서 닫힌집합이다. [[continuity-criteria|연속의 판정]]의 (1)에 의해 $S = h^{-1}(\{0\})$은 $Z$에서 닫힌집합이다.

**(2)** (1)을 $Z = \mathbb{C}$, $f = i_{\mathbb{C}}$(항등함수), $g$는 켤레를 취하는 함수로 쓴다. 연속의 (2)에 의해 두 함수는 연속이다. [[complex-conjugate|켤레복소수]]의 (4)와 복소수체의 (2)의 (iii)에 의해
$$
\begin{aligned}
S &= \{z \in \mathbb{C} : z = \overline{z}\} \\
&= \{z \in \mathbb{C} : \operatorname{Im} z = 0\} = \iota(\mathbb{R})
\end{aligned}
$$
이므로, $\iota(\mathbb{R})$는 $\mathbb{C}$에서 닫힌집합이다.
:::

:::exercise[콤팩트 집합에서 한 점에 가장 가까운 점]
$K$를 공집합이 아닌 $\mathbb{C}$의 콤팩트 부분집합, $a$를 복소수라 하자.

1. 모든 $z \in K$에서 $|a - c| \le |a - z|$인 $c \in K$가 있음을 보여라.
2. $a \notin K$이면 모든 $z \in K$에서 $m \le |a - z|$인 양의 실수 $m$이 있음을 보여라.
3. $K = C(0, 1)$, $a = 2$이면 (1)의 $c$는 $1$ 하나뿐임을 보여라.
:::

:::solution
아래에서 "콤팩트"는 [[compact-subsets-of-complex-plane|복소평면의 콤팩트 집합]], "삼각부등식"은 [[complex-triangle-inequality|복소수의 삼각부등식]], "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**(1)** $F(z) = z - a$인 함수 $F : \mathbb{C} \to \mathbb{C}$는 항등함수와 모든 값이 $a$인 상수함수의 차이므로 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2), (3)에 의해 연속이다. 콤팩트의 (4)의 (ii)를 $A = \mathbb{C}$에 쓰면 모든 $z \in K$에서 $|F(c)| \le |F(z)|$, 곧 $|c - a| \le |z - a|$인 $c \in K$가 있다. [[complex-plane-as-metric-space|복소평면의 거리]]의 (1)에 의해 $|c - a| = |a - c|$이고 $|z - a| = |a - z|$이다.

**(2)** (1)의 $c$에서 $m = |a - c|$로 둔다. $c \in K$이고 $a \notin K$이므로 $a \ne c$이고 $a - c \ne 0$이며, 절댓값의 (1)에 의해 $0 < m$이다. (1)에 의해 모든 $z \in K$에서 $m \le |a - z|$이다.

**(3)** 콤팩트의 (2)에 의해 $K = C(0, 1) = \{z : |z| \le 1\}$은 공집합이 아닌 콤팩트 부분집합이다. $z \in K$이면 삼각부등식의 (4)와 [[absolute-value|실수의 절댓값]]의 (6)에 의해 $|2| - |z| \le \bigl|\,|2| - |z|\,\bigr| \le |2 - z|$이고, 절댓값의 (5)에 의해 $|2| = 2$이므로 $1 \le 2 - |z| \le |2 - z|$이다(순서 성질의 (3)의 (iii), (2)의 (i)). $|2 - 1| = 1$이고 $1 \in K$이므로 $c = 1$은 (1)의 조건을 만족한다.

거꾸로 $c \in K$가 (1)의 조건을 만족한다고 하자. $z = 1$에서 $|2 - c| \le 1$이고 위의 부등식에서 $1 \le |2 - c|$이므로 $|2 - c| = 1$이다. 삼각부등식의 (2)에 의해
$$
\begin{aligned}
2 &= |(2 - c) + c| \le |2 - c| + |c| \\
&= 1 + |c| \le 2
\end{aligned}
$$
이므로 $|c| = 1$이고 $|(2 - c) + c| = |2 - c| + |c|$이다(순서 성질의 (1)의 (ii)). 절댓값의 (1)에 의해 $c \ne 0$이므로, 삼각부등식의 (3)에 의해 $0 \le t$이고 $2 - c = tc$인 실수 $t$가 있다. 그러면 $2 = (1 + t)c$이고 $0 < 1 + t$이므로 [[complex-field|복소수체]]의 (2)의 (i)에 의해 $c = \iota\bigl(2(1 + t)^{-1}\bigr)$이다. 절댓값의 (5)와 실수의 절댓값의 (1)에 의해 $1 = |c| = 2(1 + t)^{-1}$이므로 $1 + t = 2$, 곧 $t = 1$이고 $c = 1$이다.
:::

:::exercise[닫혀 있지만 유계가 아닌 집합 위에서 최솟값이 없는 예]
$F(z) = (1 + |z|)^{-1}$로 정한 함수 $F : \mathbb{C} \to \mathbb{C}$와 $K = \iota(\mathbb{R})$를 생각한다(오른쪽의 실수는 $\iota$로 옮겨 읽는다).

1. $F$는 연속이고 $0$을 값으로 갖지 않음을 보여라.
2. 모든 $z \in K$에서 $|F(c')| \le |F(z)|$인 $c' \in K$가 없음을 보여라.
3. 모든 $z \in K$에서 $m \le |F(z)|$인 양의 실수 $m$이 없음을 보여라.
4. $K$는 $\mathbb{C}$에서 닫힌집합임을 문제 3에서 보였다. (2)가 [[compact-subsets-of-complex-plane|복소평면의 콤팩트 집합]]의 (4)의 (ii)에 어긋나지 않는 까닭을 말하라.
:::

:::solution
아래에서 "연속"은 [[continuity-of-complex-operations|복소수 연산의 연속]], "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]], "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이다.

**(1)** 연속의 (2)에 의해 절댓값 함수 $\mathbb{C} \to \mathbb{R}$와 $\iota : \mathbb{R} \to \mathbb{C}$는 연속이므로, [[composition-of-continuous-maps|연속함수의 합성]]의 (1)에 의해 $z$에서의 값이 $\iota(|z|)$인 함수는 연속이다. 연속의 (2), (3)에 의해 모든 값이 $1$인 상수함수와 더한 $g(z) = 1 + \iota(|z|)$도 연속이다. [[complex-field|복소수체]]의 (2)에 의해 $g(z) = \iota(1 + |z|)$이고, 절댓값의 (1)과 순서 성질의 (2)의 (iii), (5)의 (ii)에 의해 $0 < 1 \le 1 + |z|$이므로 복소수체의 (2)의 (i)에 의해 $g(z) \ne 0$이다. 연속의 (4)의 (i)에 의해 $F = 1/g$는 연속이다. $F(z)\,g(z) = 1$이므로 $F(z) \ne 0$이다.

아래에서 쓰는 값: 실수 $x$에서 절댓값의 (5)에 의해 $|\iota(x)| = |x|$이고, 복소수체의 (2)의 (i)과 절댓값의 (5), [[absolute-value|실수의 절댓값]]의 (1)에 의해
$$
\begin{aligned}
|F(\iota(x))| &= \bigl|\iota\bigl((1 + |x|)^{-1}\bigr)\bigr| \\
&= (1 + |x|)^{-1}
\end{aligned}
$$
이다.

**(2)** $c' \in K$라 하고 $c' = \iota(x_0)$로 쓰자. $x_1 = |x_0| + 1$로 두면 실수의 절댓값의 (1)에 의해 $|x_1| = x_1$이고 $0 < 1 + |x_0| < 2 + |x_0| = 1 + |x_1|$이므로, 순서 성질의 (6)의 (ii)에 의해 $|F(\iota(x_1))| = (1 + |x_1|)^{-1} < (1 + |x_0|)^{-1} = |F(c')|$이다. $\iota(x_1) \in K$이므로 $c'$는 조건을 만족하지 않는다.

**(3)** $m$이 양의 실수라 하자. [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $n^{-1} < m$인 자연수 $n$이 있다. $0 < n < 1 + n$이므로 순서 성질의 (6)의 (ii)에 의해 $|F(\iota(n))| = (1 + n)^{-1} < n^{-1} < m$이다. 따라서 $z = \iota(n) \in K$에서 $m \le |F(z)|$가 성립하지 않는다.

**(4)** 그 (4)의 (ii)는 $K$가 콤팩트라고 가정한다. [[compact-subsets-of-complex-plane|복소평면의 콤팩트 집합]]의 (3)에 의해 $\iota(\mathbb{R})$는 유계가 아니어서 콤팩트가 아니므로, 이 $K$에는 그 결론을 쓸 수 없다. 이 예에서는 $K$가 닫혀 있어도 유계가 아니어서 $|F|$가 $K$ 위에서 최솟값을 갖지 않는다.
:::
