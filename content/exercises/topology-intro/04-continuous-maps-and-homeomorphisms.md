---
written_by: Claude
status: reviewed
sources:
  - ref: lebl-basic-analysis
    loc: "3.4.3절 Proposition 3.4.8 (p.141), 3.4.4절 연습문제 3.4.6 (p.143) — 문제 '거리를 일정한 배수 이하로 늘리는 함수'의 1과 3과 같은 발상(립시츠 연속인 함수는 연속이다, 차수가 2 이상인 다항식은 ℝ 에서 립시츠 연속이 아니다. 출처는 실함수와 고른 연속)"
  - ref: lebl-basic-analysis
    loc: "7.5.6절 연습문제 7.5.3 (p.294) — 문제 '위상동형사상이 옮기는 폐포와 내부'의 2와 같은 발상(연속함수에서 폐포의 상이 상의 폐포보다 작은 예. 출처는 거리공간)"
  - ref: lebl-basic-analysis
    loc: "7.1절 연습문제 7.1.8 (p.262), 7.5.6절 연습문제 7.5.10 (a) (p.294) — 문제 '집합까지의 거리'와 같은 대상(점에서 집합까지의 거리를 하한으로 정한 것. 출처의 7.5.10 (a)는 집합이 한 점일 때의 연속)"
added: 2026-11-26
---

:::exercise[세 점 사슬 위상에서 자기 자신으로 가는 함수]
$X = \{1, 2, 3\}$에 위상 $\mathcal{T} = \{\emptyset, \{1\}, \{1, 2\}, X\}$를 주고, $X$에서 $X$로의 세 함수를 다음 값으로 정한다.

| | $1$ | $2$ | $3$ |
|---|---|---|---|
| $f$ | $1$ | $1$ | $2$ |
| $g$ | $2$ | $1$ | $3$ |
| $h$ | $1$ | $3$ | $3$ |

1. $f$, $g$, $h$ 가운데 연속인 것을 가려라.
2. $(X, \mathcal{T})$에서 $(X, \mathcal{T})$로의 위상동형사상을 모두 구하라.
:::

:::solution
$\mathcal{T}$는 [[topology-examples|위상의 예]]의 (8)의 (i)의 위상이다. 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 정의대로 열린집합의 역상으로 본다. [[preimage-and-set-operations|역상과 집합의 연산]]의 (7)에 의해 어느 함수든 $\emptyset$과 $X$의 역상은 $\emptyset$과 $X$이고 둘 다 열린집합이므로, $\{1\}$과 $\{1, 2\}$의 역상만 보면 된다.

**(1)**
- $f$: $f^{-1}(\{1\}) = \{1, 2\}$이고 $f^{-1}(\{1, 2\}) = \{1, 2, 3\} = X$이다. 둘 다 열린집합이므로 $f$는 연속이다.
- $g$: $g^{-1}(\{1\}) = \{2\}$이고 $\{2\} \notin \mathcal{T}$이므로 $g$는 연속이 아니다.
- $h$: $h^{-1}(\{1\}) = \{1\}$이고 $h^{-1}(\{1, 2\}) = \{1\}$이다. 둘 다 열린집합이므로 $h$는 연속이다.

**(2)** 항등함수 $i_X$는 [[homeomorphism|위상동형사상]]의 (3)의 (i)에 의해 위상동형사상이다. 이것뿐임을 보인다. $\varphi : X \to X$가 위상동형사상이라 하자.

$\varphi$는 전단사이고, 위상동형사상의 (2)의 (i)에 의해 $X$의 부분집합 $U$가 열린집합인 것은 정확히 $\varphi(U)$가 열린집합일 때이다. $\{1\}$이 열린집합이므로 $\varphi(\{1\}) = \{\varphi(1)\}$은 원소가 하나인 열린집합이다. $\mathcal{T}$의 원소 가운데 원소가 하나인 것은 $\{1\}$뿐이므로 $\varphi(1) = 1$이다. 또 $\{1, 2\}$가 열린집합이므로 $\varphi(\{1, 2\}) = \{1, \varphi(2)\}$는 열린집합이고, $\varphi$가 단사이므로 $\varphi(2) \ne \varphi(1) = 1$이다. $\mathcal{T}$의 원소 가운데 $1$을 원소로 갖고 원소가 정확히 둘인 것은 $\{1, 2\}$뿐이므로 $\varphi(2) = 2$이다. 단사이므로 $\varphi(3)$은 $1$도 $2$도 아니고, $\varphi(3) = 3$이다. 따라서 $\varphi = i_X$이다.

(1)의 $f$와 $h$는 연속이지만 단사가 아니므로 위상동형사상이 아니고, $g$는 전단사이지만 연속이 아니다.
:::

:::exercise[내부의 역상]
$(X, \mathcal{T}_X)$, $(Y, \mathcal{T}_Y)$가 위상공간이고 $f : X \to Y$가 함수라 하자.

1. $f$가 연속이면 $Y$의 모든 부분집합 $B$에 대하여 $f^{-1}(\operatorname{Int} B) \subseteq \operatorname{Int} f^{-1}(B)$임을 보여라. 여기서 왼쪽의 내부는 $Y$에서, 오른쪽의 내부는 $X$에서 취한다.
2. 거꾸로 $Y$의 모든 부분집합 $B$에 대하여 이 포함이 성립하면 $f$는 연속임을 보여라.
3. $\mathbb{R}$(보통 위상)에서 값이 늘 $0$인 상수함수 $c : \mathbb{R} \to \mathbb{R}$와 $B = [0, 1]$로 (1)의 포함이 등호가 아닐 수 있음을 보여라.
:::

:::solution
내부는 [[interior-and-closure|내부와 폐포]]의 것이고, 역상의 성질은 [[preimage-and-set-operations|역상과 집합의 연산]]의 번호로 인용한다. 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 정의대로 읽는다.

**(1)** $B \subseteq Y$라 하자. 내부와 폐포의 (1)에 의해 $\operatorname{Int} B$는 $Y$의 열린집합이고 $\operatorname{Int} B \subseteq B$이다. $f$가 연속이므로 $f^{-1}(\operatorname{Int} B)$는 $X$의 열린집합이고, 역상의 (7)에 의해 $f^{-1}(\operatorname{Int} B) \subseteq f^{-1}(B)$이다. 내부와 폐포의 (2)의 앞 문장에 의해 $f^{-1}(\operatorname{Int} B) \subseteq \operatorname{Int} f^{-1}(B)$이다.

**(2)** $V$가 $Y$의 열린집합이라 하자. 내부와 폐포의 (3)에 의해 $\operatorname{Int} V = V$이므로, 가정을 $B = V$에 쓰면 $f^{-1}(V) \subseteq \operatorname{Int} f^{-1}(V)$이다. 내부와 폐포의 (1)에 의해 $\operatorname{Int} f^{-1}(V) \subseteq f^{-1}(V)$이므로 두 집합은 같고, 같은 항목의 (3)에 의해 $f^{-1}(V)$는 $X$의 열린집합이다. 따라서 $f$는 연속이다.

**(3)** 위상공간 사이의 연속함수의 (2)에 의해 상수함수 $c$는 연속이다. [[closure-in-a-metric-space|거리공간의 폐포·내부·경계·집적점]]의 (6)에 의해 보통 거리의 거리위상, 곧 보통 위상([[standard-topology-on-reals|거리위상의 기저와 실수의 보통 위상]]의 (5))에서 $\operatorname{Int}[0, 1] = (0, 1)$이다.
- $0 \notin (0, 1)$이므로 $c^{-1}\bigl((0, 1)\bigr) = \emptyset$이다.
- $0 \in [0, 1]$이므로 $c^{-1}([0, 1]) = \mathbb{R}$이고, 내부와 폐포의 (8)에 의해 $\operatorname{Int} \mathbb{R} = \mathbb{R}$이다.

따라서 $c^{-1}(\operatorname{Int} B) = \emptyset$이고 $\operatorname{Int} c^{-1}(B) = \mathbb{R}$이어서 포함은 등호가 아니다.
:::

:::exercise[거리를 일정한 배수 이하로 늘리는 함수]
$(X, d_X)$, $(Y, d_Y)$가 거리공간이고 $K$가 양의 실수이며, 함수 $f : X \to Y$가 $X$의 모든 점 $x$, $x'$에서 $d_Y(f(x), f(x')) \le K\, d_X(x, x')$를 만족한다고 하자.

1. $f$는 연속임을 보여라.
2. $u((s, t)) = s + t$로 정한 함수 $u : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$는, 정의역에 합 거리 $d_{\mathrm{sum}}$을 주든 최대 거리 $d_{\max}$를 주든 연속임을 보여라. 공역 $\mathbb{R}$에는 보통 거리를 준다.
3. $\mathbb{R}$(보통 거리)에서 값이 $x^2$인 함수 $\mathbb{R} \to \mathbb{R}$는 연속이지만, 이런 양수 $K$를 갖지 않음을 보여라.
:::

:::solution
거리공간에는 거리위상을 준다. 연속은 [[continuity-in-metric-spaces|거리공간에서 연속과 ε–δ]]의 (2)로 판정하고, 실수의 순서는 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로 인용한다.

**(1)** $x \in X$이고 $\varepsilon > 0$이라 하자. 순서의 성질 (6)의 (i)에 의해 $0 < K^{-1}$이고, [[real-order-axioms|실수의 순서]]의 (W4)에 의해 $\delta = \varepsilon K^{-1}$은 양수이다. $y \in X$이고 $d_X(x, y) < \delta$이면 순서의 성질 (4)의 (i)에 의해 $K\, d_X(x, y) < K\delta = \varepsilon$이므로, 가정과 (1)의 (v)에 의해 $d_Y(f(x), f(y)) < \varepsilon$이다. 따라서 $X$의 모든 점에서 그 항목의 (1)의 (c)가 성립하고, (2)에 의해 $f$는 연속이다.

**(2)** 점 $p = (s, t)$, $q = (s', t')$에 대하여 [[triangle-inequality|삼각부등식]]의 (1)에 의해
$$
\begin{aligned}
|u(p) - u(q)| &= \bigl|(s - s') + (t - t')\bigr|\\
&\le |s - s'| + |t - t'|\\
&= d_{\mathrm{sum}}(p, q)
\end{aligned}
$$
이다. 왼쪽은 보통 거리로 잰 $u(p)$와 $u(q)$ 사이의 거리이므로, $K = 1$로 (1)을 쓰면 $u : (\mathbb{R} \times \mathbb{R}, d_{\mathrm{sum}}) \to \mathbb{R}$는 연속이다. 또 [[metric-space-examples|거리공간의 예]]의 (7)에 의해 $d_{\mathrm{sum}}(p, q) \le 2\, d_{\max}(p, q)$이므로 $|u(p) - u(q)| \le 2\, d_{\max}(p, q)$이고, $K = 2$로 (1)을 쓰면 $u : (\mathbb{R} \times \mathbb{R}, d_{\max}) \to \mathbb{R}$도 연속이다.

**(3)** 연속: 값이 $x^2 = xx$인 함수는 항등함수 $i_{\mathbb{R}}$와 자신의 곱이다([[power-of-a-real-number|실수의 거듭제곱]]의 (1), [[real-valued-function|실함수]]의 (4)). [[continuous-function|연속함수]]의 (4)에 의해 $i_{\mathbb{R}}$는 연속함수이고, [[continuity-of-sum-and-product|연속함수의 합과 곱]]의 (3)에 의해 그 곱도 연속함수이다. [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)에 의해 이 함수는 보통 위상의 $\mathbb{R}$에서 보통 위상의 $\mathbb{R}$로의 함수로서 연속이다.

$K$가 없다: 양수 $K$가 모든 실수 $x$, $y$에서 $|xx - yy| \le K|x - y|$를 만족한다고 하자. $x = K + 1$, $y = 0$으로 두면 $0 < K < x$이므로 순서의 성질 (4)의 (iv)와 [[absolute-value|절댓값]]의 (1)에 의해 $|xx - 0| = xx$이고 $K|x - 0| = Kx$이다. 따라서 $xx \le Kx$이다. $0 < x$이므로 순서의 성질 (6)의 (iv)에 의해 양변에 $x^{-1}$을 곱한 $x \le K$도 성립하는데, 이는 $K < x$와 함께 (1)의 (i)에 어긋난다. 따라서 그런 $K$는 없다.

$X$, $Y$가 $\mathbb{R}$의 부분집합이고 보통 거리의 부분공간 거리를 줄 때 이 조건은 해석학 입문의 [[lipschitz-continuity|립시츠 연속]]의 부등식이다. (1)의 조건은 연속이기 위한 충분조건이지만 필요조건은 아니다. $x^2$은 $x$가 커질수록 기울기가 커져서, 어떤 고정된 배수로도 거리의 늘어남을 누를 수 없다.
:::

:::exercise[위상동형사상이 옮기는 폐포와 내부]
$(X, \mathcal{T}_X)$, $(Y, \mathcal{T}_Y)$가 위상공간이라 하자.

1. $f : X \to Y$가 위상동형사상이면 $X$의 모든 부분집합 $A$에 대하여 $f(\overline{A}) = \overline{f(A)}$이고 $f(\operatorname{Int} A) = \operatorname{Int} f(A)$임을 보여라. 왼쪽의 폐포와 내부는 $X$에서, 오른쪽은 $Y$에서 취한다.
2. 연속인 전단사 $f$와 부분집합 $A$로서 $f(\overline{A}) \ne \overline{f(A)}$인 예를 들어라.
:::

:::solution
위상동형사상은 [[homeomorphism|위상동형사상]], 폐포와 내부는 [[interior-and-closure|내부와 폐포]]의 것이고, 상과 역상의 성질은 [[preimage-and-set-operations|역상과 집합의 연산]](아래에서 "역상")의 번호로 인용한다.

**(1)** $f$의 역함수를 $g : Y \to X$라 하자. 위상동형사상의 정의에 의해 $f$와 $g$는 연속이다. 먼저 두 등식을 본다. $V \subseteq Y$이면 역상의 (6)의 (ii)에 의해 $g(V) = f^{-1}(V)$이고, 위상동형사상의 (2)의 (ii)에 의해 $f(f^{-1}(V)) = V$이므로 $f(g(V)) = V$이다. 또 $U \subseteq X$이면 같은 이유로 $g(f(U)) = f^{-1}(f(U)) = U$이다.

폐포. [[continuity-criteria|연속의 판정]]의 (5)를 $f$와 $A$에 쓰면 $f(\overline{A}) \subseteq \overline{f(A)}$이다. 같은 (5)를 $g$와 $f(A)$에 쓰면 $g\bigl(\overline{f(A)}\bigr) \subseteq \overline{g(f(A))} = \overline{A}$이다. 역상의 (7)의 상에 관한 문장에 의해 양쪽의 $f$에 의한 상을 취해도 포함이 지켜지므로
$$
\overline{f(A)} = f\Bigl(g\bigl(\overline{f(A)}\bigr)\Bigr) \subseteq f(\overline{A})
$$
이다. 두 포함에서 $f(\overline{A}) = \overline{f(A)}$이다.

내부. 내부와 폐포의 (6)에 의해 $\operatorname{Int} A = X - \overline{X - A}$이다. 역상의 (6)의 (iii)에 의해 $X$의 부분집합 $S$에서 $f(X - S) = Y - f(S)$이므로, 폐포의 등식과 함께
$$
\begin{aligned}
f(\operatorname{Int} A) &= Y - f\bigl(\overline{X - A}\bigr)\\
&= Y - \overline{f(X - A)}\\
&= Y - \overline{Y - f(A)}
\end{aligned}
$$
이다. 내부와 폐포의 (6)을 $Y$의 부분집합 $f(A)$에 쓰면 마지막 집합은 $\operatorname{Int} f(A)$이다.

**(2)** $a \ne b$이고 $X = \{a, b\}$라 하자. 위상동형사상의 (4)에 의해 항등함수 $i_X : (X, \mathscr{P}(X)) \to (X, \{\emptyset, X\})$는 연속인 전단사이다. $A = \{a\}$로 두면 내부와 폐포의 (9)에 의해 이산위상에서 $\overline{A} = \{a\}$이므로 $i_X(\overline{A}) = \{a\}$이고, 밀착위상에서 $A \ne \emptyset$이므로 $\overline{i_X(A)} = \overline{\{a\}} = X$이다. $b \notin \{a\}$이므로 $\{a\} \ne X$이다.

연속의 판정의 (5)가 주는 포함 $f(\overline{A}) \subseteq \overline{f(A)}$는 연속만으로 성립하고, 반대쪽 포함에는 역함수의 연속이 쓰였다.
:::

:::exercise[집합까지의 거리]
$(X, d)$가 거리공간이고 $A$가 공집합이 아닌 $X$의 부분집합이라 하자. $x \in X$마다 $D(x) = \{d(x, a) : a \in A\}$로 둔다.

1. $D(x)$는 하한을 갖고 $0 \le \inf D(x)$임을 보여라. 이 하한을 $\operatorname{dist}(x, A)$로 쓴다.
2. $X$의 모든 점 $x$, $y$에서 $|\operatorname{dist}(x, A) - \operatorname{dist}(y, A)| \le d(x, y)$임을 보이고, $x$를 $\operatorname{dist}(x, A)$로 보내는 함수 $X \to \mathbb{R}$가 연속임을 보여라($\mathbb{R}$에는 보통 거리).
3. $\operatorname{dist}(x, A) = 0$인 것은 정확히 $x \in \overline{A}$일 때임을 보여라.
:::

:::solution
하계와 하한은 [[upper-bound-and-supremum|상계와 상한]]의 것이고, 거리의 조건 (i)–(iv)는 [[metric-space|거리공간]]의 것이다. $X$에는 거리위상을 준다.

**(1)** $A \ne \emptyset$이므로 $D(x) \ne \emptyset$이다. 거리의 조건 (i)에 의해 $D(x)$의 원소는 모두 $0$ 이상이므로 $0$은 $D(x)$의 하계이다. [[infimum-exists|하한의 존재]]의 (4)에 의해 $D(x)$는 하한을 갖고, 하한의 정의(하계 가운데 가장 큰 것)에 의해 $0 \le \inf D(x)$이다. 상계와 상한의 (1)에 의해 하한은 하나뿐이므로, $\operatorname{dist}(x, A)$는 $x$마다 실수 하나로 정해지고, $x$를 $\operatorname{dist}(x, A)$로 보내는 함수 $X \to \mathbb{R}$가 정해진다([[recursion-theorem|재귀 정리]]의 (1)).

**(2)** $x$, $y \in X$라 하자. $a \in A$이면 $\operatorname{dist}(x, A)$는 $D(x)$의 하계이므로 $\operatorname{dist}(x, A) \le d(x, a)$이고, 거리의 조건 (iv)에 의해 $d(x, a) \le d(x, y) + d(y, a)$이다. [[order-properties-of-reals|실수의 순서의 성질]]의 (1)의 (v)와 (2)의 (ii)에 의해 $\operatorname{dist}(x, A) - d(x, y) \le d(y, a)$이다. 이것이 모든 $a \in A$에서 성립하므로 $\operatorname{dist}(x, A) - d(x, y)$는 $D(y)$의 하계이고, 하한의 정의에 의해 $\operatorname{dist}(x, A) - d(x, y) \le \operatorname{dist}(y, A)$, 곧 $\operatorname{dist}(x, A) - \operatorname{dist}(y, A) \le d(x, y)$이다. $x$와 $y$의 자리를 바꾸고 거리의 조건 (iii)을 쓰면 $\operatorname{dist}(y, A) - \operatorname{dist}(x, A) \le d(x, y)$, 곧 $-d(x, y) \le \operatorname{dist}(x, A) - \operatorname{dist}(y, A)$이다(순서의 성질 (3)의 (iii)). [[absolute-value|절댓값]]의 (7)에 의해 $|\operatorname{dist}(x, A) - \operatorname{dist}(y, A)| \le d(x, y)$이다.

왼쪽은 보통 거리로 잰 $\operatorname{dist}(x, A)$와 $\operatorname{dist}(y, A)$ 사이의 거리이다. 문제 3의 (1)을 $K = 1$로 쓰면 이 함수는 연속이다.

**(3)** [[closure-in-a-metric-space|거리공간의 폐포·내부·경계·집적점]]의 (1)에 의해 $x \in \overline{A}$인 것은 정확히 모든 실수 $r > 0$에서 $B(x, r) \cap A \ne \emptyset$일 때이다.

$\operatorname{dist}(x, A) = 0$이라 하고 $r > 0$이라 하자. $0 < r$이므로 상계와 상한의 (4)의 하한에 관한 문장에 의해 $d(x, a) < r$인 $a \in A$가 있다. 이 $a$는 $B(x, r) \cap A$의 원소이다. 따라서 $x \in \overline{A}$이다.

거꾸로 $x \in \overline{A}$라 하자. $\operatorname{dist}(x, A) \ne 0$이면 (1)에 의해 $0 < \operatorname{dist}(x, A)$이므로 $r = \operatorname{dist}(x, A)$로 두면 $B(x, r) \cap A$의 원소 $a$가 있어 $d(x, a) < \operatorname{dist}(x, A)$이다. 그런데 $\operatorname{dist}(x, A)$는 $D(x)$의 하계이므로 $\operatorname{dist}(x, A) \le d(x, a)$이고, 둘은 순서의 성질 (1)의 (i)에 의해 함께 성립하지 않는다. 따라서 $\operatorname{dist}(x, A) = 0$이다.
:::

:::exercise[열린 사상도 닫힌 사상도 아닌 연속함수의 예]
$f(x) = |x|\,(1 + |x|)^{-1}$로 정한 함수 $f : \mathbb{R} \to \mathbb{R}$를 생각한다. $\mathbb{R}$에는 보통 위상을 준다.

1. $f$가 연속임을 보여라.
2. $f(\mathbb{R}) = [0, 1)$임을 보여라.
3. $f$는 열린 사상도 아니고 닫힌 사상도 아님을 보여라.
:::

:::solution
실수의 계산과 순서는 [[real-number-arithmetic|실수의 계산 법칙]]과 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로, 절댓값은 [[absolute-value|절댓값]]의 번호로 인용한다. 모든 실수 $x$에서 절댓값의 (2)에 의해 $0 \le |x|$이므로 순서의 성질 (2)의 (ii)에 의해 $1 \le 1 + |x|$이고, (5)의 (ii)의 $0 < 1$과 함께 $0 < 1 + |x|$이다. 따라서 $1 + |x| \ne 0$이고 (6)의 (i)에 의해 $0 < (1 + |x|)^{-1}$이다. 그래서 $f$는 모든 실수에서 정의된다.

**(1)** [[continuous-function|연속함수]]의 (4)에 의해 항등함수 $i_{\mathbb{R}}$와 값이 $1$인 상수함수는 연속함수이다. [[continuity-of-sum-and-product|연속함수의 합과 곱]]의 (3)에 의해 $|i_{\mathbb{R}}|$와 $1 + |i_{\mathbb{R}}|$는 연속함수이고, $1 + |i_{\mathbb{R}}|$가 어디서도 $0$이 아니므로 같은 (3)과 (2)의 마지막 문장에 의해 몫 $f = |i_{\mathbb{R}}|/(1 + |i_{\mathbb{R}}|)$는 $\mathbb{R}$ 위의 연속함수이다. [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)에 의해 $f$는 보통 위상의 $\mathbb{R}$에서 보통 위상의 $\mathbb{R}$로의 함수로서 연속이다.

**(2)** $f(\mathbb{R}) \subseteq [0, 1)$: 실수 $x$에서 $c = (1 + |x|)^{-1}$이라 하면 $0 < c$이다. 순서의 성질 (4)의 (iv)에 의해 $0 \le |x|\,c = f(x)$이다. $|x| < 1 + |x|$이므로 (4)의 (i)에 의해 $|x|\,c < (1 + |x|)\,c = 1$이다. 따라서 $0 \le f(x) < 1$이다.

$[0, 1) \subseteq f(\mathbb{R})$: $0 \le y < 1$이라 하자. 순서의 성질 (3)의 (i)에 의해 $0 < 1 - y$이고, $x = y\,(1 - y)^{-1}$로 두면 (6)의 (i)과 (4)의 (iv)에 의해 $0 \le x$이므로 절댓값의 (1)에 의해 $|x| = x$이다. 계산하면
$$
\begin{aligned}
1 + x &= \bigl((1 - y) + y\bigr)(1 - y)^{-1}\\
&= (1 - y)^{-1}
\end{aligned}
$$
이고, 따라서 $f(x) = x\,(1 + x)^{-1} = y\,(1 - y)^{-1}(1 - y) = y$이다. 곧 $y \in f(\mathbb{R})$이다.

**(3)** [[topological-space|위상공간]]의 조건 (i)에 의해 $\mathbb{R}$은 보통 위상에서 열린집합이고, [[closed-set|위상공간의 닫힌집합]]의 (1)에 의해 닫힌집합이다. 그런데 (2)에 의해 그 상은 $[0, 1)$이고, [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (3)에 의해 $[0, 1)$은 보통 거리에서 열린집합도 닫힌집합도 아니다. [[standard-topology-on-reals|거리위상의 기저와 실수의 보통 위상]]의 (5)와 닫힌집합의 (6)에 의해 이것은 보통 위상에서도 열린집합도 닫힌집합도 아니라는 뜻이다. 따라서 열린집합 $\mathbb{R}$의 상이 열려 있지 않으므로 $f$는 [[homeomorphism|위상동형사상]]의 뜻의 열린 사상이 아니고, 닫힌집합 $\mathbb{R}$의 상이 닫혀 있지 않으므로 닫힌 사상도 아니다.

연속은 열린집합의 역상만 말하고 상에 대해서는 아무것도 말하지 않는다. 이 $f$는 정의역 전체 하나만으로 두 성질을 함께 깨뜨린다.
:::
