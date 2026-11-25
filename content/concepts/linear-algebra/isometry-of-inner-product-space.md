---
title: 내적공간의 등거리 사상
title_en: Isometries of Inner Product Spaces
aliases: [등거리 사상, 강체 운동, isometry, rigid motion, distance-preserving map]
kind: theorem
field: linear-algebra
msc: ["15A04", "51F99"]
level: undergrad
summary: 내적공간 V 에서 W 로의 함수 f 가 모든 x, y 에서 ‖f(x) − f(y)‖ = ‖x − y‖ 를 만족하면 등거리 사상이라 한다. 선형이라고 가정하지 않아도, 0 을 0 으로 보내는 등거리 사상은 선형이고 직교사상이다. 따라서 모든 등거리 사상은 직교사상 T 와 평행이동으로 f(x) = Tx + f(0) 꼴로 하나로 정해지게 쓰이고, 거꾸로 이런 꼴은 모두 등거리 사상이다. 등거리 사상은 단사이고, 차원이 같은 유한차원 공간 사이에서는 전단사이다.
requires: [function, function-composition, injective-surjective-bijective, real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, linear-map, linear-map-examples, dimension, inner-product-space, standard-inner-product, norm-in-inner-product-space, absolute-value, orthogonal-map, orthogonal-matrices-2x2]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "5장 7절 Rigid motions in Rn 의 정의와 예, p.151; Theorem 7.1, Lemma 7.2 와 그 증명, p.152; Theorem 7.1 의 증명(둘째 증명 포함), pp.152–153; 7절 연습문제 7.1, p.153"
    checked: original
    note: "출처 5장 7절(p.151)은 내적공간 V 에서 V 로의 함수 f 가 모든 x, y 에서 ‖f(x) − f(y)‖ = ‖x − y‖ 를 만족할 때 rigid motion 이라 부르고, 정의에서 f 가 선형이라고 가정하지 않는다고 적는다. 이 항목은 그것을 V 에서 W 로의 함수로 넓혀 '등거리 사상'이라 부른다. 출처의 isometry(p.146)는 노름을 보존하는 선형사상이어서 이 사이트에서는 '직교사상'이고, 이 항목의 '등거리 사상'은 출처의 rigid motion 이다. 출처는 unitary transformation 과 평행이동 x + a 가 rigid motion 의 예라고 적는다(p.151). (1)은 출처 Lemma 7.2(p.152)이고 증명도 같다. (2)는 Theorem 7.1(p.152) '실내적공간의 rigid motion f 에 대해 T(x) = f(x) − f(0) 은 orthogonal transformation 이다'를 W 로 넓힌 것이다. 출처는 첫째 증명에서 정규직교 기저와 Fourier 전개로 T 가 선형임을 보이고(pp.152–153), 이어 'An alternative way' 로 ‖T(x + αy) − (T(x) + αT(y))‖² 을 펼쳐 0 임을 보이는 둘째 증명을 적는다(p.153). 이 항목은 기저가 필요 없는 둘째 증명을 따른다. 출처의 둘째 증명 끝의 등식 'T(x − αy) = T(x) + αT(y)'(p.153)는 바로 위 계산과 맞지 않는 오타로 보이고(위 계산은 x + αy 에 대한 것이다), 이 항목은 T(x + αy) = T(x) + αT(y) 로 쓴다. 출처는 T 가 X 에서 X 로의 사상이므로 Proposition 6.3 에 의해 unitary 라고 결론짓는데, 이 항목은 그것을 (5)의 차원이 같을 때의 전단사로 적는다. (3)의 분해와 그 유일성, (4)의 단사와 합성은 출처가 Theorem 7.1 앞에서 'any rigid motion … is a composition of an orthogonal transformation and a translation' 이라고 적고(p.152) Lemma 7.2 의 증명에서 'a composition of rigid motions is a rigid motion' 이라고 적는 것(p.152)을 진술로 올린 것이다. 출처 연습문제 7.1(p.153)은 복소 공간 ℂⁿ 에서 T(0) = 0 이지만 선형이 아닌 rigid motion 의 예를 묻는다. 실수에서는 (2)에 의해 그런 예가 없다. 출처는 rigid motion 을 '점 사이의 거리(distance)를 보존하는' 변환이라 적는다(p.151). 이 강의는 위상수학 입문의 거리와 거리공간을 선행으로 두지 않으므로 '거리'라는 말 대신 차의 노름 ‖x − y‖ 로 진술한다. 반례 '노름을 보존하고 0 을 0 으로 보내지만 등거리 사상이 아닌 함수'는 출처 연습문제 7.1 처럼 0 을 0 으로 보내지만 선형이 아닌 함수의 예이고, 차의 노름 대신 각 점의 노름만 보존한다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(반사 행렬의 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$, $W$가 [[inner-product-space|내적공간]]이라 하자. 노름은 [[norm-in-inner-product-space|내적공간의 노름]]의 것이고, 직교사상은 [[orthogonal-map|직교사상]]의 것이다. [[function|함수]] $f : V \to W$가 **등거리 사상**(isometry)인 것은 정확히 모든 $x, y \in V$에서

$$
\lVert f(x) - f(y) \rVert = \lVert x - y \rVert
$$

일 때이다. 왼쪽은 $W$의 노름이고 오른쪽은 $V$의 노름이다. $f$가 [[linear-map|선형사상]]이라고 가정하지 않는다.

1. (원점을 옮긴 사상) $f : V \to W$가 등거리 사상이라 하자. 모든 $x \in V$에서 값이 $f(x) - f(0_V)$인 함수 $T : V \to W$에 대하여, $T(0_V) = 0_W$이고 모든 $x, y \in V$에서
   $$
   \begin{aligned}
   &\lVert T(x) - T(y) \rVert = \lVert x - y \rVert, \\
   &\lVert T(x) \rVert = \lVert x \rVert, \\
   &\langle T(x), T(y) \rangle = \langle x, y \rangle
   \end{aligned}
   $$
   이다.
2. (선형성) (1)의 $T$는 선형사상이고 직교사상이다. 특히 $f(0_V) = 0_W$인 등거리 사상 $f$는 선형사상이고 직교사상이다.
3. (분해) $f : V \to W$가 등거리 사상이면, (1)의 직교사상 $T$에 대하여 모든 $x \in V$에서 $f(x) = Tx + f(0_V)$이다. 거꾸로 $S : V \to W$가 직교사상이고 $a \in W$이면, 모든 $x$에서 값이 $Sx + a$인 함수는 등거리 사상이다. 또 등거리 사상 $f$가 직교사상 $S$와 $a \in W$로 모든 $x$에서 $f(x) = Sx + a$이면 $a = f(0_V)$이고 $S = T$이다. 특히 선형사상 $S : V \to W$가 등거리 사상인 것은 정확히 $S$가 직교사상일 때이다.
4. (단사와 합성) 등거리 사상은 [[injective-surjective-bijective|단사]]이다. $X$가 내적공간이고 $f : V \to W$와 $g : W \to X$가 등거리 사상이면 [[function-composition|합성]] $g \circ f : V \to X$도 등거리 사상이다.
5. (유한차원) $V$, $W$가 [[dimension|유한차원]]이고 $f : V \to W$가 등거리 사상이면 $\dim V \le \dim W$이다. $\dim V = \dim W$이면 $f : V \to W$는 전단사이다.
:::

:::english
Let $V$, $W$ be inner product spaces; norms are as in the entry on norms in inner product spaces, and orthogonal maps as in the entry on orthogonal maps. A function $f : V \to W$ is an **isometry** exactly when

$$
\lVert f(x) - f(y) \rVert = \lVert x - y \rVert
$$

for all $x, y \in V$. The left side is the norm of $W$ and the right side that of $V$. $f$ is not assumed to be a linear map.

1. (Moving the origin) Let $f : V \to W$ be an isometry. For the function $T : V \to W$ whose value at every $x \in V$ is $f(x) - f(0_V)$, we have $T(0_V) = 0_W$ and, for all $x, y \in V$,
   $$
   \begin{aligned}
   &\lVert T(x) - T(y) \rVert = \lVert x - y \rVert, \\
   &\lVert T(x) \rVert = \lVert x \rVert, \\
   &\langle T(x), T(y) \rangle = \langle x, y \rangle.
   \end{aligned}
   $$
2. (Linearity) The $T$ of (1) is a linear map and an orthogonal map. In particular, an isometry $f$ with $f(0_V) = 0_W$ is a linear map and an orthogonal map.
3. (Decomposition) If $f : V \to W$ is an isometry, then $f(x) = Tx + f(0_V)$ for all $x \in V$, where $T$ is the orthogonal map of (1). Conversely, if $S : V \to W$ is an orthogonal map and $a \in W$, then the function whose value at every $x$ is $Sx + a$ is an isometry. Moreover, if an isometry $f$ satisfies $f(x) = Sx + a$ for all $x$ with an orthogonal map $S$ and $a \in W$, then $a = f(0_V)$ and $S = T$. In particular, a linear map $S : V \to W$ is an isometry exactly when $S$ is an orthogonal map.
4. (Injectivity and composition) An isometry is injective. If $X$ is an inner product space and $f : V \to W$ and $g : W \to X$ are isometries, then the composition $g \circ f : V \to X$ is an isometry.
5. (Finite dimension) If $V$, $W$ are finite-dimensional and $f : V \to W$ is an isometry, then $\dim V \le \dim W$. If $\dim V = \dim W$, then $f : V \to W$ is bijective.
:::

## 직관

등거리 사상은 두 점 사이의 "떨어진 정도" $\lVert x - y \rVert$를 그대로 두는 함수입니다. 비유하면 종이 위의 그림을 찢거나 늘이지 않고 들어서 다른 자리에 내려놓는 것과 닮았습니다. 정의의 "모든 $x, y$"는 그림의 모든 두 점에 해당합니다. 내려놓을 때 옮기고, 돌리고, 뒤집을 수는 있지만 두 점 사이를 늘이거나 줄일 수는 없습니다.

직교사상과 다른 점은 원점을 원점으로 보낼 필요가 없다는 것입니다. 평행이동 $x$에서 $x + a$로 가는 함수는 차를 바꾸지 않으므로 등거리 사상이지만, $a \ne 0_W$이면 선형이 아닙니다. 이 항목의 정리는 원점이 움직인 것을 빼고 나면, 곧 $f(x) - f(0_V)$를 보면 남는 것은 언제나 직교사상이라는 것입니다((2), (3)). 선형성을 가정하지 않았는데 선형성이 나오는 까닭은 차의 노름을 모든 두 점에서 보존한다는 조건이 내적까지 보존하게 하고((1)), 내적을 보존하는 함수에서는 $T(x + \alpha y)$와 $T(x) + \alpha T(y)$의 차의 노름이 계산으로 $0$이 되기 때문입니다.

이 조건에서 "차의 노름"이 중요합니다. 각 점의 노름만 보존하는 함수는 원점을 원점으로 보내더라도 선형이 아닐 수 있습니다(반례).

## 증명

:::idea
$T(x) = f(x) - f(0_V)$는 차의 노름을 보존하고 $T(0_V) = 0_W$이므로 노름도 보존합니다. 노름의 제곱을 펼친 식에서 내적을 보존한다는 것이 나오고, 그러면 $z = T(x + \alpha y) - T(x) - \alpha T(y)$의 노름의 제곱을 펼쳐 $0$임을 보일 수 있습니다.
:::

:::hint
$\lVert T(x) - T(y) \rVert^2$과 $\lVert x - y \rVert^2$을 각각 노름의 제곱과 내적으로 펼치십시오.
:::

:::hint
$p = T(x + \alpha y) - T(x)$, $q = \alpha T(y)$로 두고 $\lVert p - q \rVert^2 = \lVert p \rVert^2 - 2\langle p, q \rangle + \lVert q \rVert^2$의 세 항을 각각 $\langle y, y \rangle$로 나타내 보십시오.
:::

:::proof
아래에서 [[inner-product-space|내적과 내적공간]]의 번호는 "내적의 (1)"처럼, [[norm-in-inner-product-space|내적공간의 노름]]의 번호는 "노름의 (1)"처럼, [[orthogonal-map|직교사상]]의 번호는 "직교사상의 (1)"처럼 줄여 쓴다. (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것이고, (V1)–(V8)은 [[vector-space|벡터공간]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것이다. 벡터공간의 계산 법칙 (V1)–(V8)과 (B1)–(B12)를 아래에서 "벡터공간의 계산"이라 줄여 쓴다. $W$의 원소 $a$, $b$, $c$에 대하여 벡터공간의 계산((V1), (V2), (B10), (B8)과 덧셈 역원의 정의)으로

$$
(a - c) - (b - c) = a - b
$$

이다(이것을 (가)라 부른다). 각 $x \in V$에 $W$의 원소 $f(x) - f(0_V)$가 하나씩 정해지므로 [[real-function-space|실숫값 함수의 공간]]의 (G)에 의해 $T$가 있다.

**(1)의 증명.** (B12)에 의해 $T(0_V) = f(0_V) - f(0_V) = 0_W$이다. (가)에 의해 $T(x) - T(y) = f(x) - f(y)$이므로 $\lVert T(x) - T(y) \rVert = \lVert f(x) - f(y) \rVert = \lVert x - y \rVert$이다. $y = 0_V$로 두면 벡터공간의 계산으로 $T(x) - T(0_V) = T(x) - 0_W = T(x)$이고 $x - 0_V = x$이므로 $\lVert T(x) \rVert = \lVert x \rVert$이다. 노름의 (5)를 $W$와 $V$에서 쓰면

$$
\begin{aligned}
&\lVert T(x) - T(y) \rVert^2 \\
&\quad = \lVert T(x) \rVert^2 - 2\langle T(x), T(y) \rangle \\
&\qquad + \lVert T(y) \rVert^2, \\
&\lVert x - y \rVert^2 \\
&\quad = \lVert x \rVert^2 - 2\langle x, y \rangle + \lVert y \rVert^2
\end{aligned}
$$

이다. 두 왼쪽은 같고, 앞에서 본 노름의 등식에 의해 $\lVert T(x) \rVert^2 = \lVert x \rVert^2$, $\lVert T(y) \rVert^2 = \lVert y \rVert^2$이다. 두 식의 오른쪽에서 같은 항을 빼면((K1), (K2), (K12)) $-2\langle T(x), T(y) \rangle = -2\langle x, y \rangle$이고, (K7)에 의해 $-2 \ne 0$이므로 (K11)에 의해 $\langle T(x), T(y) \rangle = \langle x, y \rangle$이다.

**(2)의 증명.** $x, y \in V$이고 $\alpha$가 실수라 하자. $p = T(x + \alpha y) - T(x)$, $q = \alpha T(y)$, $z = p - q$라 하자. 노름의 (5)에 의해 $\lVert z \rVert^2 = \lVert p \rVert^2 - 2\langle p, q \rangle + \lVert q \rVert^2$이다. 세 항을 차례로 계산한다. $c = \langle y, y \rangle$라 하자.

- (1)의 첫 등식과 벡터공간의 계산 $(x + \alpha y) - x = \alpha y$에 의해 $\lVert p \rVert = \lVert \alpha y \rVert$이고, 노름의 (2)와 내적의 (1)에 의해 $\lVert p \rVert^2 = \langle \alpha y, \alpha y \rangle = (\alpha\alpha) c$이다.
- 노름의 (2), 내적의 (1)과 (1)의 셋째 등식에 의해 $\lVert q \rVert^2 = (\alpha\alpha)\langle T(y), T(y) \rangle = (\alpha\alpha) c$이다.
- 내적의 (2)와 (1), (1)의 셋째 등식에 의해
  $$
  \begin{aligned}
  \langle p, q \rangle &= \alpha \langle T(x + \alpha y), T(y) \rangle \\
  &\quad - \alpha \langle T(x), T(y) \rangle \\
  &= \alpha \langle x + \alpha y, y \rangle - \alpha \langle x, y \rangle \\
  &= \alpha\bigl(\langle x, y \rangle + \alpha c\bigr) \\
  &\quad - \alpha \langle x, y \rangle \\
  &= (\alpha\alpha) c
  \end{aligned}
  $$
  이다(마지막 두 등호는 내적의 (1)과 (K2), (K3), (K12)).

따라서 $\lVert z \rVert^2 = (\alpha\alpha)c - 2(\alpha\alpha)c + (\alpha\alpha)c = 0$이고((K3), (K7), (K12)), 노름의 (2)와 (1)에 의해 $\lVert z \rVert = 0$, $z = 0_W$이다. (B12)에 의해 $p = q$이고, 양변에 $T(x)$를 더하면 벡터공간의 계산으로

$$
T(x + \alpha y) = T(x) + \alpha T(y)
$$

이다(이것을 (나)라 부른다). (나)에서 $\alpha = 1$로 두면 (V5)에 의해 $T(x + y) = T(x) + T(y)$이고, $x = 0_V$로 두면 벡터공간의 계산과 (1)의 $T(0_V) = 0_W$에 의해 $T(\alpha y) = \alpha T(y)$이다. 따라서 $T$는 (T-합)과 (T-배)를 만족하는 선형사상이고, (1)의 셋째 등식에 의해 직교사상이다. $f(0_V) = 0_W$이면 벡터공간의 계산으로 모든 $x$에서 $T(x) = f(x) - 0_W = f(x)$이므로 $T = f$이다.

**(3)의 증명.** $T$의 정의와 벡터공간의 계산으로 $Tx + f(0_V) = (f(x) - f(0_V)) + f(0_V) = f(x)$이다. 거꾸로 $S$가 직교사상이고 $g(x) = Sx + a$이면, 벡터공간의 계산과 [[linear-map|선형사상]]의 (T2)에 의해 $g(x) - g(y) = Sx - Sy = S(x - y)$이므로 직교사상의 (1)에 의해 $\lVert g(x) - g(y) \rVert = \lVert x - y \rVert$이다. 등거리 사상 $f$가 모든 $x$에서 $f(x) = Sx + a$이면, $x = 0_V$에서 (T1)에 의해 $f(0_V) = 0_W + a = a$이고, 모든 $x$에서 $Sx = f(x) - a = f(x) - f(0_V) = T(x)$이므로 함수의 같음에 의해 $S = T$이다. 마지막 문장: 선형사상 $S$에서 (T1)에 의해 $S(0_V) = 0_W$이므로, $S$가 등거리 사상이면 (2)에 의해 직교사상이고, $S$가 직교사상이면 $a = 0_W$로 둔 앞 문장에 의해 등거리 사상이다.

**(4)의 증명.** $f(x) = f(y)$이면 (B12)와 노름의 (1)에 의해 $\lVert x - y \rVert = \lVert f(x) - f(y) \rVert = \lVert 0_W \rVert = 0$이므로 노름의 (1)과 (B12)에 의해 $x = y$이다. [[injective-surjective-bijective|단사, 전사, 전단사]]의 단사의 동치 꼴에 의해 $f$는 단사이다. $g \circ f$에 대해서는 $\lVert g(f(x)) - g(f(y)) \rVert = \lVert f(x) - f(y) \rVert = \lVert x - y \rVert$이다.

**(5)의 증명.** (2)에 의해 $T$는 직교사상이므로 직교사상의 (4)에 의해 $\dim V \le \dim W$이다. $\dim V = \dim W$이면 직교사상의 (6)에 의해 $T$는 동형사상, 곧 전단사이다. $f$는 (4)에 의해 단사이다. $w \in W$이면 $T$가 전사이므로 $Tx = w - f(0_V)$인 $x \in V$가 있고, (3)과 벡터공간의 계산으로 $f(x) = (w - f(0_V)) + f(0_V) = w$이다. 따라서 $f : V \to W$는 전사이고 전단사이다. $\blacksquare$
:::

## 예시와 반례

:::example[뒤집고 옮기는 등거리 사상]
$\mathbb{R}^2$에 [[standard-inner-product|표준내적]]을 주고, 모든 $x = (x_1, x_2)$에서 값이 $f(x) = (3 - x_1, x_2)$인 함수 $f : \mathbb{R}^2 \to \mathbb{R}^2$를 봅시다. $f(x) - f(y) = (y_1 - x_1, x_2 - y_2)$이므로 노름의 제곱은 $(y_1 - x_1)^2 + (x_2 - y_2)^2 = (x_1 - y_1)^2 + (x_2 - y_2)^2 = \lVert x - y \rVert^2$이고, $f$는 등거리 사상입니다. $f(0) = (3, 0) \ne 0$이므로 $f$는 선형사상이 아닙니다([[linear-map|선형사상]]의 (T1)). (3)의 분해에서 $T(x) = f(x) - (3, 0) = (-x_1, x_2)$이고, 이것은 [[orthogonal-matrices-2x2|2 × 2 직교행렬]]의 $a = -1$, $b = 0$인 둘째 꼴 $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$의 사상이어서 직교사상입니다. 그림으로는 $x_2$ 축을 거울로 뒤집은 뒤 $(3, 0)$만큼 옮긴 것입니다.
:::

:::counterexample[노름을 보존하고 0 을 0 으로 보내지만 등거리 사상이 아닌 함수]
$\mathbb{R}$에 [[standard-inner-product|ℝⁿ 의 표준내적]]의 (6)의 내적 $xy$를 주면 [[norm-in-inner-product-space|내적공간의 노름]]의 (8)에 의해 노름은 [[absolute-value|절댓값]]입니다. 모든 실수 $x$에서 값이 $|x|$인 함수 $g : \mathbb{R} \to \mathbb{R}$는 $g(0) = 0$이고 모든 $x$에서 $\lVert g(x) \rVert = \bigl| |x| \bigr| = |x| = \lVert x \rVert$입니다. 그러나 $\lVert g(1) - g(-1) \rVert = |1 - 1| = 0$이고 $\lVert 1 - (-1) \rVert = 2$이므로 $g$는 등거리 사상이 아니고, $g(1) = g(-1)$이어서 선형사상도 아닙니다. (2)가 쓰는 것은 각 점의 노름이 아니라 모든 두 점의 차의 노름입니다.
:::

## 확인 질문

:::check[$\mathbb{R}$에서 $\mathbb{R}$로의 등거리 사상은 어떤 꼴인가?]
$f(x) = cx + a$이고 $c = 1$이거나 $c = -1$인 꼴입니다. (3)에 의해 $f(x) = T(x) + f(0)$이고 $T$는 선형사상이므로 [[linear-map-examples|선형사상의 예]]의 (5)에 의해 $c = T(1)$로 두면 $T(x) = cx$입니다. $T$는 직교사상이므로 $1 \cdot 1 = \langle 1, 1 \rangle = \langle T(1), T(1) \rangle = cc$이고, $(c - 1)(c + 1) = cc - 1 = 0$에서 [[real-number-arithmetic|(K10)]]에 의해 $c = 1$이거나 $c = -1$입니다. 거꾸로 이런 꼴은 (3)에 의해 등거리 사상입니다.
:::

:::check[영공간 $\{0_V\}$에서 내적공간 $W$로의 함수는 모두 등거리 사상인가?]
그렇습니다. 정의역의 원소는 $0_V$ 하나뿐이므로 $x = y = 0_V$만 확인하면 되고, 그때 $\lVert f(0_V) - f(0_V) \rVert = \lVert 0_W \rVert = 0 = \lVert 0_V - 0_V \rVert$입니다([[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B12), [[norm-in-inner-product-space|내적공간의 노름]]의 (1)). 값 $f(0_V)$가 $W$의 어느 원소이든 그렇고, 이것은 (3)의 꼴에서 $T$가 영공간 위의 직교사상이고 $a = f(0_V)$인 경우입니다.
:::
