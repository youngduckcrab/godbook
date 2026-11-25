---
title: 직교 여공간
title_en: Orthogonal Complement
aliases: [직교여공간, 직교 분해, orthogonal complement, orthogonal decomposition]
kind: definition
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: 내적공간 V 의 부분집합 S 의 모든 원소와 직교하는 벡터 전체를 S 의 직교 여공간 S^⊥ 라 한다. S^⊥ 는 부분공간이고, 부분공간 E 에 대해 E 와 E^⊥ 의 공통 원소는 영벡터뿐이다. E 가 유한차원이면 모든 벡터가 E 의 원소와 E^⊥ 의 원소의 합으로 단 한 가지로 쓰이고(그 E 쪽 부분이 직교사영), E^⊥ 의 직교 여공간은 E 이며, E^⊥ 로의 직교사영은 v 에서 E 로의 직교사영을 뺀 것이다. V 가 유한차원이면 dim E + dim E^⊥ = dim V 이다.
requires: [subset, real-number-arithmetic, vector-space, vector-space-basic-properties, subspace, subspace-intersection-and-sum, finite-sum-of-vectors, linear-combination-and-span, sequences-in-a-subspace, basis-iff-independent-and-spanning, dimension, dimension-of-subspace, concatenating-bases, inner-product-space, standard-inner-product, orthogonal-vectors, orthogonal-projection, orthonormal-basis-exists]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 3절 Orthogonal projection and Gram-Schmidt orthogonalization 의 3.3 Orthogonal complement. Decomposition V = E ⊕ E⊥ 의 Definition 과 Proposition 3.6, p.133; 같은 절의 연습문제 3.7, 3.12, 3.13, pp.134–135; 7장 4절 Positive definite forms. Minimax. Sylvester's criterion 의 4.2 Minimax characterization of eigenvalues 의 첫 문단, p.211
    checked: original
    note: "출처 3.3 의 Definition(번호 없음, p.133)은 부분공간 E 에 대해 E⊥ := {x : x ⊥ E} 로 정의한다. 이 항목은 같은 식을 부분집합 S 에 대해 정의했다. 출처는 'If x, y ⊥ E then for any linear combination αx + βy ⊥ E (can you see why?)' 라고 묻고 E⊥ 가 부분공간이라고 적으며, 직교사영의 정의에 의해 V 의 모든 벡터가 v = v₁ + v₂ (v₁ ∈ E, v₂ ∈ E⊥) 로 한 가지로 쓰이고 v₁ = P_E v 라고 적은 뒤 이것을 V = E ⊕ E⊥ 로 쓴다고 한다(p.133). 이 사이트는 직합의 기호 ⊕ 를 쓰지 않으므로 (2)와 (3)처럼 말로 썼다. 분해가 있으려면 모든 벡터에 직교사영이 있어야 하므로 (3), (5), (6)에 E 가 유한차원이라는 가정을 두었다. 출처의 Proposition 3.6 은 'For a subspace E' 로 진술한다. (5)는 출처 Proposition 3.6(p.133)이고, 출처는 증명을 연습문제 3.12(p.134)로 남기며 E 가 E⊥ 와 직교한다는 것과 분해를 쓰라는 힌트를 준다. 이 항목의 증명은 그 힌트의 길이다. (4)는 출처 연습문제 3.7(p.134)이 참·거짓을 묻는 등식이고, 출처 7장 4절 4.2(p.211)는 차원이 n 인 공간의 부분공간 E 에 대해 dim E + dim E⊥ = n 이라고 적는다. 이 항목은 (2), (3)과 선형대수 2 의 기저 이어 붙이기로 증명했다. (6)은 출처 연습문제 3.13(pp.134–135)이 E 와 E⊥ 로의 직교사영 P, Q 에 대해 P + Q 와 PQ 를 묻는 것과 같은 대상이다. 예시 'ℝ³ 의 직선의 직교 여공간과 분해' 와 확인 질문 '표준내적을 준 $\\mathbb{R}^2$에서 $S = \\{(1, 2), (2, 4)\\}$의 직교 여공간은 무엇인가?' 는 출처 5장 2절 연습문제 2.1(p.128)이 ℝ⁴ 에서 주어진 두 벡터와 직교하는 벡터를 모두 구하게 하는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(계수 등식의 증명 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[inner-product-space|내적공간]]이라 하자. 직교 $\perp$와 "$x \perp S$"는 [[orthogonal-vectors|직교]]의 것이고, 직교사영과 $\operatorname{proj}_E$는 [[orthogonal-projection|직교사영]]의 것이다. 부분공간의 유한차원과 차원은 [[dimension-of-subspace|부분공간의 차원]]에서처럼 제한한 연산의 벡터공간으로서 말한다. $S$가 $V$의 [[subset|부분집합]]일 때
$$
S^\perp = \{x \in V : x \perp S\}
$$
를 $S$의 **직교 여공간**(orthogonal complement)이라 한다. 곧 $x \in V$가 $S^\perp$의 원소인 것은 정확히 $S$의 모든 원소 $s$에서 $\langle x, s \rangle = 0$일 때이다. $S^\perp$의 직교 여공간은 $(S^\perp)^\perp$로 쓴다.

다음이 성립한다. 아래에서 $S$, $T$는 $V$의 부분집합이고 $E$는 $V$의 [[subspace|부분공간]]이다.

1. (부분공간과 기본 성질) $S^\perp$는 $V$의 부분공간이다. $S \subseteq T$이면 $T^\perp \subseteq S^\perp$이다. $S \subseteq (S^\perp)^\perp$이다. $\emptyset^\perp = V$, $\{0_V\}^\perp = V$이고 $V^\perp = \{0_V\}$이다. $r \ge 0$이 정수이고 $u_1, \dots, u_r$이 $V$의 [[finite-sum-of-vectors|벡터의 열]]이면, $\operatorname{span}(u_1, \dots, u_r)^\perp$는 모든 $k \in \{1, \dots, r\}$에서 $x \perp u_k$인 $x \in V$ 전체의 집합이다([[linear-combination-and-span|생성]]).
2. (공통 원소와 직교사영) $E \cap E^\perp = \{0_V\}$이다. 따라서 $e, e' \in E$이고 $f, f' \in E^\perp$이며 $e + f = e' + f'$이면 $e = e'$이고 $f = f'$이다. 또 $v, w \in V$이면, $w$가 $v$의 $E$로의 직교사영인 것은 정확히 $w \in E$이고 $v - w \in E^\perp$일 때이다.
3. (분해) $E$가 유한차원이라 하자($V$는 유한차원이 아니어도 된다). 그러면 모든 $v \in V$에 대하여 $v = e + f$인 $e \in E$와 $f \in E^\perp$가 있고, (2)에 의해 그런 $e$와 $f$는 하나뿐이다. 그것은 $e = \operatorname{proj}_E v$와 $f = v - \operatorname{proj}_E v$이다. 따라서 [[subspace-intersection-and-sum|두 부분공간의 합]] $E + E^\perp$는 $V$이다.
4. (차원) $V$가 유한차원이면 $E$와 $E^\perp$는 유한차원이고 $\dim E + \dim E^\perp = \dim V$이다.
5. (두 번 취한 직교 여공간) $E$가 유한차원이면 $(E^\perp)^\perp = E$이다.
6. ($E^\perp$로의 직교사영) $E$가 유한차원이면 모든 $v \in V$에 $v$의 $E^\perp$로의 직교사영이 있고, 그것은 $v - \operatorname{proj}_E v$이다. 따라서 직교사영의 (4)의 사상 $\operatorname{proj}_{E^\perp} : V \to V$가 정해지고, 모든 $v \in V$에서 $\operatorname{proj}_{E^\perp} v = v - \operatorname{proj}_E v$이다.
:::

:::english
Let $V$ be an inner product space. Orthogonality $\perp$ and "$x \perp S$" are those of the entry on orthogonality, and orthogonal projections and $\operatorname{proj}_E$ are those of the entry on orthogonal projections. Finite-dimensionality and the dimension of a subspace refer, as in the entry on dimensions of subspaces, to the vector space with the restricted operations. For a subset $S$ of $V$, the set
$$
S^\perp = \{x \in V : x \perp S\}
$$
is called the **orthogonal complement** of $S$. That is, $x \in V$ belongs to $S^\perp$ exactly when $\langle x, s \rangle = 0$ for every element $s$ of $S$. The orthogonal complement of $S^\perp$ is written $(S^\perp)^\perp$.

The following hold. Below, $S$ and $T$ are subsets of $V$ and $E$ is a subspace of $V$.

1. (Subspace and basic properties) $S^\perp$ is a subspace of $V$. If $S \subseteq T$, then $T^\perp \subseteq S^\perp$. Moreover $S \subseteq (S^\perp)^\perp$. We have $\emptyset^\perp = V$, $\{0_V\}^\perp = V$, and $V^\perp = \{0_V\}$. If $r \ge 0$ is an integer and $u_1, \dots, u_r$ is a sequence of vectors in $V$, then $\operatorname{span}(u_1, \dots, u_r)^\perp$ is the set of all $x \in V$ with $x \perp u_k$ for every $k \in \{1, \dots, r\}$.
2. (Common elements and orthogonal projections) $E \cap E^\perp = \{0_V\}$. Hence, if $e, e' \in E$, $f, f' \in E^\perp$, and $e + f = e' + f'$, then $e = e'$ and $f = f'$. Moreover, for $v, w \in V$, $w$ is the orthogonal projection of $v$ onto $E$ exactly when $w \in E$ and $v - w \in E^\perp$.
3. (Decomposition) Suppose $E$ is finite-dimensional ($V$ need not be). Then for every $v \in V$ there are $e \in E$ and $f \in E^\perp$ with $v = e + f$, and by (2) such $e$ and $f$ are unique; namely $e = \operatorname{proj}_E v$ and $f = v - \operatorname{proj}_E v$. Hence the sum $E + E^\perp$ of the two subspaces is $V$.
4. (Dimension) If $V$ is finite-dimensional, then $E$ and $E^\perp$ are finite-dimensional and $\dim E + \dim E^\perp = \dim V$.
5. (The complement taken twice) If $E$ is finite-dimensional, then $(E^\perp)^\perp = E$.
6. (Orthogonal projection onto $E^\perp$) If $E$ is finite-dimensional, then every $v \in V$ has an orthogonal projection onto $E^\perp$, namely $v - \operatorname{proj}_E v$. Hence the map $\operatorname{proj}_{E^\perp} : V \to V$ of item (4) of the entry on orthogonal projections is defined, and $\operatorname{proj}_{E^\perp} v = v - \operatorname{proj}_E v$ for every $v \in V$.
:::

## 직관

방 안에서 바닥을 부분공간 $E$로 보면, 바닥의 모든 방향과 직각을 이루는 방향은 위아래 방향 하나뿐이고 그 방향의 벡터 전체가 $E^\perp$입니다. 비유에서 "바닥의 모든 방향과 직각"이 정의의 "$S$의 모든 원소 $s$에서 $\langle x, s \rangle = 0$"에 해당합니다. 방 안의 모든 화살표는 바닥 위의 부분과 위아래 부분으로 단 한 가지로 나뉘고, 바닥 위의 부분이 바로 직교사영입니다((3)).

집합이 커지면 직교 여공간은 커지지 않습니다. 확인할 조건이 늘어나기 때문입니다((1)). 확인할 조건이 없는 공집합과, 모든 벡터와 직교하는 영벡터 하나로 된 집합의 직교 여공간은 $V$ 전체이고, $V$ 전체와 직교하는 벡터는 영벡터뿐입니다. 부분공간 $E$와 $E^\perp$가 함께 가진 벡터는 자기 자신과 직교하므로 영벡터뿐이고((2)), 그래서 분해가 한 가지뿐입니다.

$E$가 유한차원이면 직교사영이 언제나 있으므로 분해가 있고, 여기서 두 사실이 나옵니다. $E^\perp$와 직교하는 벡터를 분해하면 $E^\perp$ 쪽 부분이 자기 자신과 직교하게 되어 $0_V$이므로, 그 벡터는 $E$에 속합니다((5)). 또 같은 분해를 $E^\perp$ 쪽에서 보면 $v - \operatorname{proj}_E v$가 $v$의 $E^\perp$로의 직교사영입니다((6)). $V$가 유한차원이면 두 부분공간의 기저를 이어 붙인 것이 $V$의 기저가 되어 차원이 더해집니다((4)).

## 성질의 증명

:::proof
아래에서 (V1)–(V8)은 [[vector-space|벡터공간]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것, (S1)–(S3)과 (P1), (P4)는 [[subspace|부분공간]]의 것, (H0)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것이다. [[inner-product-space|내적과 내적공간]]의 번호와 조건은 "내적의 (1)", "내적의 조건 (i)"처럼, [[orthogonal-vectors|직교]]의 번호는 "직교의 (1)"처럼, [[orthogonal-projection|직교사영]]의 번호는 "직교사영의 (1)"처럼 줄여 쓴다.

**(1)의 증명.** 직교의 (3)에 의해 $S$와 직교하는 $V$의 원소 전체의 집합, 곧 $S^\perp$는 $V$의 부분공간이다.

$S \subseteq T$이고 $x \in T^\perp$라 하자. $s \in S$이면 $s \in T$이므로 $x \perp s$이다. 따라서 $x \perp S$이고 $x \in S^\perp$이다.

$s \in S$라 하자. $x \in S^\perp$이면 $x \perp s$이고 직교의 (1)에 의해 $s \perp x$이다. 따라서 $s \perp S^\perp$이고 $s \in (S^\perp)^\perp$이다.

직교의 (2)에 의해, $S$가 공집합이면 모든 $x$에서 $x \perp S$이므로 $\emptyset^\perp = V$이다. 같은 항목의 (2)에 의해 모든 $x$에서 $x \perp 0_V$이므로 $\{0_V\}^\perp = V$이다. 같은 항목의 (2)에 의해 $x \perp V$인 것은 정확히 $x = 0_V$일 때이므로 $V^\perp = \{0_V\}$이다. 마지막 문장은 직교의 (4)를 직교 여공간의 정의로 옮긴 것이다.

**(2)의 증명.** $x \in E \cap E^\perp$이면 $x \in E$이고 $x \perp E$이므로 $x \perp x$이고, 직교의 (2)에 의해 $x = 0_V$이다. 거꾸로 $0_V \in E$이고((S1)), (1)에 의해 $E^\perp$는 부분공간이므로 $0_V \in E^\perp$이다. 따라서 $E \cap E^\perp = \{0_V\}$이다.

$e, e' \in E$, $f, f' \in E^\perp$이고 $e + f = e' + f'$이라 하자. $d = e - e'$, $g = f' - f$로 두면 (S3), (B5), (S2)에 의해 $d \in E$이고, $E^\perp$가 부분공간이므로 같은 이유로 $g \in E^\perp$이다. (V1), (V2), (B2), (H0)에 의해 $d + e' = e + ((-e') + e') = e + 0_V = e$이고, 같은 이유로 $g + f = f'$이다. 그러면 (V2)와 (V1)에 의해
$$
\begin{aligned}
d + (e' + f) &= (d + e') + f \\
&= e + f, \\
g + (e' + f) &= (g + f) + e' \\
&= f' + e' = e' + f'
\end{aligned}
$$
이고, 가정에 의해 두 값이 같으므로 (B7)에 의해 $d = g$이다. 따라서 $d \in E \cap E^\perp = \{0_V\}$이고 $d = g = 0_V$이며, (B12)에 의해 $e = e'$이고 $f' = f$이다.

마지막 문장: 직교사영의 정의에 의해 $w$가 $v$의 $E$로의 직교사영인 것은 정확히 $w \in E$이고 $v - w \perp E$일 때이고, 직교 여공간의 정의에 의해 $v - w \perp E$인 것은 정확히 $v - w \in E^\perp$일 때이다.

**(3)의 증명.** $E$가 유한차원이므로 [[orthonormal-basis-exists|정규직교 기저의 존재와 확장]]의 (4)에 의해 모든 $v \in V$에 $E$로의 직교사영이 있고, 사상 $\operatorname{proj}_E$가 정해진다. $v \in V$라 하고 $e = \operatorname{proj}_E v$, $f = v - e$라 하자. 직교사영의 (4)의 (ii)에 의해 $e \in E$이고 $v - e \perp E$이므로 $f \in E^\perp$이다. (V1), (V2), (B2), (H0)에 의해 $e + f = e + ((-e) + v) = (e + (-e)) + v = 0_V + v = v$이다. 유일성은 (2)이다.

$E + E^\perp$는 $V$의 원소의 합으로 된 집합이므로 $V$에 포함된다. 거꾸로 모든 $v \in V$가 $e + f$ ($e \in E$, $f \in E^\perp$) 꼴이므로 $V \subseteq E + E^\perp$이다. 따라서 $E + E^\perp = V$이다.

**(4)의 증명.** $V$가 유한차원이라 하자. (1)에 의해 $E^\perp$는 부분공간이므로 [[dimension-of-subspace|부분공간의 차원]]의 (1)에 의해 $E$와 $E^\perp$는 유한차원이다. (2)에 의해 $E \cap E^\perp = \{0_V\}$이므로, [[concatenating-bases|기저를 이어 붙이기]]의 (1)의 (iv)에 의해 $E + E^\perp$는 유한차원이고 $\dim(E + E^\perp) = \dim E + \dim E^\perp$이다. 여기서 $\dim(E + E^\perp)$는 $E + E^\perp$를 (P1)의 제한한 연산으로 본 벡터공간의 차원이다.

(3)에 의해 $E + E^\perp = V$이다. (P4)에 의해 $V$는 $V$의 부분공간이고, [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해 $V$의 벡터의 열이 (제한한 연산으로 본) 벡터공간 $V$의 기저인 것은 정확히 그 열이 $V$에서 일차독립이고 그 생성이 $V$일 때이며, [[basis-iff-independent-and-spanning|기저는 일차독립이고 생성하는 열이다]]에 의해 이것은 정확히 그 열이 $V$의 기저일 때이다. 따라서 두 벡터공간의 기저는 같고, [[dimension|차원]]의 (2)에 의해 두 차원은 같다. 곧 $\dim E + \dim E^\perp = \dim V$이다.

**(5)의 증명.** $E$가 유한차원이라 하자. (1)에 의해 $E \subseteq (E^\perp)^\perp$이다. 거꾸로 $x \in (E^\perp)^\perp$라 하자. (3)에 의해 $x = e + f$인 $e \in E$와 $f \in E^\perp$가 있다. $f \in E^\perp$이고 $x \perp E^\perp$이므로 $\langle x, f \rangle = 0$이다. $f \perp E$이고 $e \in E$이므로 $\langle f, e \rangle = 0$이고, 내적의 조건 (i)에 의해 $\langle e, f \rangle = 0$이다. 내적의 (1)에 의해
$$
\begin{aligned}
0 &= \langle x, f \rangle = \langle e, f \rangle + \langle f, f \rangle \\
&= 0 + \langle f, f \rangle
\end{aligned}
$$
이므로 [[real-number-arithmetic|(K1)]]과 (K4)에 의해 $\langle f, f \rangle = 0$이고, 내적의 조건 (iii)에 의해 $f = 0_V$이다. 따라서 (V1)과 (H0)에 의해 $x = e + 0_V = e \in E$이다.

**(6)의 증명.** $E$가 유한차원이라 하고 $v \in V$, $p = \operatorname{proj}_E v$, $w = v - p$라 하자. (3)에 의해 $w \in E^\perp$이다. (B10), (B8), (V2), (B2), (H0)에 의해
$$
\begin{aligned}
v - w &= v + \bigl((-v) + (-(-p))\bigr) \\
&= (v + (-v)) + p \\
&= 0_V + p = p
\end{aligned}
$$
이다. $p \in E$이고 (1)에 의해 $E \subseteq (E^\perp)^\perp$이므로 $v - w \in (E^\perp)^\perp$, 곧 $v - w \perp E^\perp$이다. $E^\perp$는 (1)에 의해 부분공간이므로, 직교사영의 정의에 의해 $w$는 $v$의 $E^\perp$로의 직교사영이다. 이것이 모든 $v$에 있으므로 직교사영의 (4)에 의해 $\operatorname{proj}_{E^\perp}$가 정해지고, 직교사영의 (1)의 유일성에 의해 $\operatorname{proj}_{E^\perp} v = w = v - \operatorname{proj}_E v$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³ 의 직선의 직교 여공간과 분해]
표준내적을 준 $\mathbb{R}^3$에서 $u = (1, -1, 2)$, $E = \operatorname{span}(u)$라 합시다. (1)의 마지막 문장에 의해 $x = (x_1, x_2, x_3)$이 $E^\perp$에 속하는 것은 정확히 $\langle x, u \rangle = x_1 - x_2 + 2x_3 = 0$일 때입니다. 이때 $x_1 = x_2 - 2x_3$이므로
$$
x = x_2 (1, 1, 0) + x_3 (-2, 0, 1)
$$
이고, 거꾸로 이 꼴의 벡터는 모두 식을 만족합니다. $y_1 = (1, 1, 0)$, $y_2 = (-2, 0, 1)$은 둘째와 셋째 성분을 보면 일차독립이므로 $E^\perp$의 기저이고 $\dim E^\perp = 2$입니다. $\dim E = 1$이므로 $1 + 2 = 3 = \dim \mathbb{R}^3$이 되어 (4)와 맞습니다.

$v = (3, 0, 0)$을 분해해 봅시다. $\langle v, u \rangle = 3$, $\langle u, u \rangle = 1 + 1 + 4 = 6$이므로 [[orthogonal-projection|직교사영]]의 (3)에 의해 $\operatorname{proj}_E v = \tfrac{3}{6} u = \bigl(\tfrac{1}{2}, -\tfrac{1}{2}, 1\bigr)$이고, $f = v - \operatorname{proj}_E v = \bigl(\tfrac{5}{2}, \tfrac{1}{2}, -1\bigr)$입니다. $\langle f, u \rangle = \tfrac{5}{2} - \tfrac{1}{2} - 2 = 0$이므로 $f \in E^\perp$이고, 실제로 $f = \tfrac{1}{2} y_1 - y_2$입니다. (3)에 의해 $v$를 $E$의 원소와 $E^\perp$의 원소의 합으로 쓰는 방법은 이것 하나뿐입니다.
:::

:::counterexample[부분공간이 아닌 집합에서는 직교 여공간을 두 번 취하면 더 커질 수 있는 예]
표준내적을 준 $\mathbb{R}^2$에서 $S = \{e_1\}$이라 합시다. [[standard-inner-product|ℝⁿ 의 표준내적]]의 (2)에 의해 $\langle x, e_1 \rangle = x_1$이므로 $S^\perp = \{x : x_1 = 0\} = \operatorname{span}(e_2)$입니다. (1)의 마지막 문장에 의해 $(S^\perp)^\perp = \{x : x_2 = 0\} = \operatorname{span}(e_1)$입니다. 이 집합에는 $2e_1$이 있지만 $S$에는 없으므로 $(S^\perp)^\perp \ne S$입니다. (1)이 말하는 포함 $S \subseteq (S^\perp)^\perp$는 성립하지만 같지는 않습니다. (5)는 $S$가 부분공간일 때(그리고 유한차원일 때)의 진술입니다.
:::

## 확인 질문

:::check[차원이 $5$인 내적공간 $V$의 부분공간 $E$가 $\dim E = 3$이면 $\dim E^\perp$는 무엇인가?]
(4)에 의해 $3 + \dim E^\perp = 5$이므로 $\dim E^\perp = 2$입니다. 특히 $E^\perp \ne \{0_V\}$이어서, $E$의 모든 원소와 직교하는 영벡터가 아닌 벡터가 있습니다.
:::

:::check[표준내적을 준 $\mathbb{R}^2$에서 $S = \{(1, 2), (2, 4)\}$의 직교 여공간은 무엇인가?]
정의에 의해 $x \in S^\perp$인 것은 정확히 $x_1 + 2x_2 = 0$이고 $2x_1 + 4x_2 = 0$일 때입니다. 둘째 식은 첫째 식의 양변에 $2$를 곱한 것이므로 첫째 식만 남고, $x_1 = -2x_2$입니다. 따라서 $S^\perp = \{x_2(-2, 1) : x_2 \in \mathbb{R}\} = \operatorname{span}\bigl((-2, 1)\bigr)$입니다.
:::
