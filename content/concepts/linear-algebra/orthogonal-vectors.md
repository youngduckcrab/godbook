---
title: 직교
title_en: Orthogonality
aliases: [직교하는 벡터, 수직, 피타고라스 정리, 피타고라스 항등식, orthogonal, perpendicular, orthogonal vectors, Pythagorean theorem, Pythagorean identity]
kind: definition
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: 내적공간의 두 벡터 x, y 가 직교한다는 것은 ⟨x, y⟩ = 0 이라는 것이고 x ⊥ y 로 쓴다. 벡터가 부분집합의 모든 원소와 직교하면 그 집합과 직교한다고 한다. 직교는 대칭이고, 영벡터는 모든 벡터와 직교하며, 자기 자신과 직교하는 벡터는 영벡터뿐이다. 열의 모든 항과 직교하면 그 열의 생성과 직교하고, 서로 직교하는 벡터들의 합의 노름의 제곱은 노름의 제곱의 합이다(피타고라스).
requires: [subset, real-number-arithmetic, order-properties-of-reals, mathematical-induction, subspace, finite-sum-of-vectors, linear-combination-and-span, inner-product-space, standard-inner-product, inner-product-examples, norm-in-inner-product-space]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 2절 Orthogonality. Orthogonal and orthonormal bases 의 Definition 2.1, 피타고라스 항등식, Definition 2.2, p.125; Lemma 2.3, Lemma 2.5, p.126; Remark, p.127; 3절 3.3 Orthogonal complement 의 첫 문단, p.133
    checked: original
    note: "출처 Definition 2.1(p.125)은 (u, v) = 0 인 두 벡터 u, v 를 orthogonal(또는 perpendicular)이라 하고 u ⊥ v 로 쓴다. 이 사이트는 내적을 ⟨u, v⟩ 로 쓴다. 출처 Definition 2.2(p.125)는 벡터가 부분공간 E 의 모든 벡터와 직교할 때 E 와 직교한다고 하고, 두 부분공간이 직교한다는 것도 정한다. 이 항목은 같은 정의를 부분공간이 아닌 부분집합에도 쓴다(부분공간이면 출처의 정의와 같다). (2)의 첫 문장은 출처 2절 Remark(p.127)가 '영벡터는 모든 것과 직교한다'고 적는 것이다. (3)의 첫 문장은 출처 3절 3.3(p.133)이 'x, y ⊥ E 이면 모든 일차결합 αx + βy ⊥ E 이다(can you see why?)'라고 적고 그것으로 E^⊥ 가 부분공간이라고 하는 것과 같다. (4)는 출처 Lemma 2.3(p.126)이고 증명도 같다(일차결합의 내적을 펼친다). (5)의 첫 등식은 출처 p.125 의 피타고라스 항등식이고 출처도 (u + v, u + v) 를 펼쳐 증명한다. (5)의 여러 항의 꼴은 출처 Lemma 2.5(p.126, Generalized Pythagorean identity)에서 모든 계수가 1 인 경우이다. 출처는 이중 합을 펼쳐 j = k 인 항만 남기고, 이 항목은 항의 개수에 대한 귀납으로 증명했다. (6)은 내적과 내적공간 항목의 (4)에서 바로 나온다. 예시 '생성하는 열의 항과 직교하는 벡터'는 출처 2절 연습문제 2.1(p.128)이 두 벡터에 직교하는 ℝ⁴ 의 벡터를 모두 찾게 하는 것과 같은 대상(두 벡터와 직교하는 벡터)을 다룬다. 확인 질문 '표준내적을 준 $\\mathbb{R}^2$에서 $(a, 3)$이 $(2, -4)$와 직교하는 실수 $a$는 무엇인가?'는 출처 2절 연습문제 2.1(p.128)이 주어진 벡터와 직교하는 벡터를 찾게 하는 것과 같은 발상이다. 확인 질문 '내적공간의 벡터 $x$, $y$에서 $x \\perp y$이고 $\\lVert x \\rVert = 5$, $\\lVert y \\rVert = 12$이면 $\\lVert x - y \\rVert$는 무엇인가?'는 출처 1절 연습문제 1.3(p.124)이 ‖u‖, ‖v‖, (u, v) 의 값으로 ‖u − v‖² 를 계산하게 하는 것과 같은 발상이다(여기서는 내적이 0 이다)."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(최소 거리의 양방향 증명 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[inner-product-space|내적공간]]이라 하자. 내적과 내적의 조건 (i)–(iii)은 그 항목의 것이고, 노름 $\lVert x \rVert$는 [[norm-in-inner-product-space|내적공간의 노름]]의 것이다. $x, y \in V$가 **직교한다**(orthogonal)는 것은 정확히 $\langle x, y \rangle = 0$일 때이고, 이것을 $x \perp y$로 쓴다. $S$가 $V$의 [[subset|부분집합]]일 때 $x$가 $S$와 **직교한다**는 것은 정확히 $S$의 모든 원소 $s$에서 $x \perp s$일 때이고, 이것을 $x \perp S$로 쓴다. $S$와 $T$가 $V$의 부분집합일 때 $S$와 $T$가 **직교한다**는 것은 정확히 $S$의 모든 원소 $s$에서 $s \perp T$일 때, 곧 모든 $s \in S$와 모든 $t \in T$에서 $s \perp t$일 때이다.

다음이 성립한다. 아래에서 $x$, $x'$, $y$는 $V$의 임의의 원소이고 $\alpha$, $\beta$는 임의의 실수이며 $S$, $T$는 $V$의 임의의 부분집합이다.

1. (대칭) $x \perp y$인 것은 정확히 $y \perp x$일 때이다. $S$와 $T$가 직교하는 것은 정확히 $T$와 $S$가 직교할 때이다.
2. (영벡터와 자기 자신) $0_V \perp x$이고 $x \perp 0_V$이며, $0_V \perp S$이다. $x \perp x$인 것은 정확히 $x = 0_V$일 때이다. $x \perp V$인 것은 정확히 $x = 0_V$일 때이다. $S$가 공집합이면 모든 $x$에서 $x \perp S$이다.
3. (일차결합) $x \perp S$이고 $x' \perp S$이면 $\alpha x + \beta x' \perp S$이다. 따라서 $S$와 직교하는 $V$의 원소 전체의 집합은 $V$의 [[subspace|부분공간]]이다. 또 $x \perp y$이면 $\alpha x \perp \beta y$이다.
4. (열의 생성) $r \ge 0$이 정수이고 $u_1, \dots, u_r$이 $V$의 [[finite-sum-of-vectors|벡터의 열]]이라 하자. $x \perp \operatorname{span}(u_1, \dots, u_r)$인 것은 정확히 모든 $k \in \{1, \dots, r\}$에서 $x \perp u_k$일 때이다([[linear-combination-and-span|생성]]). $r = 0$이면 생성은 $\{0_V\}$이고 모든 $x$가 그것과 직교한다.
5. (피타고라스) $x \perp y$인 것은 정확히 $\lVert x + y \rVert^2 = \lVert x \rVert^2 + \lVert y \rVert^2$일 때이고, 또 정확히 $\lVert x - y \rVert^2 = \lVert x \rVert^2 + \lVert y \rVert^2$일 때이다. 또 $r \ge 0$이 정수이고 $v_1, \dots, v_r$이 서로 다른 모든 두 자리 $i \ne j$에서 $v_i \perp v_j$인 $V$의 벡터의 열이면
   $$
   \begin{aligned}
   &\lVert v_1 + \cdots + v_r \rVert^2 \\
   &\quad = \lVert v_1 \rVert^2 + \cdots + \lVert v_r \rVert^2
   \end{aligned}
   $$
   이다. 오른쪽은 $k$번째 항이 $\lVert v_k \rVert^2$인 길이 $r$인 실수의 열의 합이다.
6. (부분공간 안의 직교) $W$가 $V$의 부분공간이고 $W$를 [[inner-product-space|내적과 내적공간]]의 (4)의 내적으로 내적공간으로 보자. $x, y \in W$이면 내적공간 $W$에서 $x \perp y$인 것은 정확히 $V$에서 $x \perp y$일 때이다. $x \in W$이고 $S \subseteq W$이면 $W$에서 $x \perp S$인 것은 정확히 $V$에서 $x \perp S$일 때이다.
:::

:::english
Let $V$ be an inner product space. The inner product and the conditions (i)–(iii) for an inner product are those of the entry on inner product spaces, and the norm $\lVert x \rVert$ is that of the entry on norms. Two vectors $x, y \in V$ are **orthogonal** exactly when $\langle x, y \rangle = 0$; we write $x \perp y$. For a subset $S$ of $V$, $x$ is **orthogonal** to $S$ exactly when $x \perp s$ for every element $s$ of $S$; we write $x \perp S$. For subsets $S$ and $T$ of $V$, $S$ and $T$ are **orthogonal** exactly when $s \perp T$ for every element $s$ of $S$, that is, when $s \perp t$ for all $s \in S$ and all $t \in T$.

The following hold. Below, $x$, $x'$, $y$ are arbitrary elements of $V$, $\alpha$, $\beta$ are arbitrary real numbers, and $S$, $T$ are arbitrary subsets of $V$.

1. (Symmetry) $x \perp y$ exactly when $y \perp x$. $S$ and $T$ are orthogonal exactly when $T$ and $S$ are orthogonal.
2. (The zero vector and the vector itself) $0_V \perp x$, $x \perp 0_V$, and $0_V \perp S$. $x \perp x$ exactly when $x = 0_V$. $x \perp V$ exactly when $x = 0_V$. If $S$ is empty, then $x \perp S$ for every $x$.
3. (Linear combinations) If $x \perp S$ and $x' \perp S$, then $\alpha x + \beta x' \perp S$. Hence the set of all elements of $V$ orthogonal to $S$ is a subspace of $V$. Moreover, if $x \perp y$, then $\alpha x \perp \beta y$.
4. (Span of a sequence) Let $r \ge 0$ be an integer and $u_1, \dots, u_r$ a sequence of vectors in $V$. Then $x \perp \operatorname{span}(u_1, \dots, u_r)$ exactly when $x \perp u_k$ for every $k \in \{1, \dots, r\}$. If $r = 0$, the span is $\{0_V\}$ and every $x$ is orthogonal to it.
5. (Pythagoras) $x \perp y$ exactly when $\lVert x + y \rVert^2 = \lVert x \rVert^2 + \lVert y \rVert^2$, and also exactly when $\lVert x - y \rVert^2 = \lVert x \rVert^2 + \lVert y \rVert^2$. Moreover, if $r \ge 0$ is an integer and $v_1, \dots, v_r$ is a sequence of vectors in $V$ with $v_i \perp v_j$ for any two different positions $i \ne j$, then
   $$
   \begin{aligned}
   &\lVert v_1 + \cdots + v_r \rVert^2 \\
   &\quad = \lVert v_1 \rVert^2 + \cdots + \lVert v_r \rVert^2.
   \end{aligned}
   $$
   The right-hand side is the sum of the sequence of $r$ real numbers whose $k$-th term is $\lVert v_k \rVert^2$.
6. (Orthogonality inside a subspace) Let $W$ be a subspace of $V$, regarded as an inner product space with the inner product of item (4) of the entry on inner product spaces. If $x, y \in W$, then $x \perp y$ in the inner product space $W$ exactly when $x \perp y$ in $V$. If $x \in W$ and $S \subseteq W$, then $x \perp S$ in $W$ exactly when $x \perp S$ in $V$.
:::

## 직관

$\mathbb{R}^2$에서 동쪽으로 $3$만큼 가는 화살표 $(3, 0)$과 북쪽으로 $4$만큼 가는 화살표 $(0, 4)$는 표준내적이 $0$입니다. 두 화살표를 이어 붙인 $(3, 4)$의 길이의 제곱은 $9 + 16 = 25$이고, 이것이 각 길이의 제곱의 합입니다. 동쪽으로 걸은 뒤 북쪽으로 걸으면 출발점까지의 직선거리를 두 거리로 계산할 수 있다는 익숙한 사실이 (5)의 피타고라스 식입니다. 비유와 다른 점은, 직교는 "그림에서 직각으로 보인다"가 아니라 내적의 값이 $0$이라는 식으로 정해진다는 것입니다. 그래서 같은 두 벡터도 내적을 바꾸면 직교하지 않을 수 있습니다(아래 반례).

$x + y$의 노름의 제곱을 펼치면 $\lVert x \rVert^2 + 2\langle x, y \rangle + \lVert y \rVert^2$입니다. 가운데 항이 사라지는 것이 정확히 $\langle x, y \rangle = 0$일 때이므로 피타고라스 식은 직교와 같은 조건입니다. 여러 항의 꼴도 같은 이유로 성립합니다. 앞의 항들의 합이 다음 항과 직교하기 때문입니다.

(4)는 부분공간과의 직교를 확인할 때 그 부분공간의 원소를 모두 볼 필요가 없다는 뜻입니다. 생성하는 열의 항과만 직교하면 그 일차결합은 모두 직교합니다. 내적이 각 자리에서 선형이기 때문입니다. 자기 자신과 직교하는 벡터는 내적의 조건 (iii)에 의해 영벡터뿐이므로, 부분공간 $E$의 원소가 $E$와 직교하면 그 원소는 영벡터입니다.

## 성질의 증명

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (H0)–(H7)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것, (N1)–(N4)는 [[linear-combination-and-span|일차결합과 생성]]의 것이다. [[inner-product-space|내적과 내적공간]]의 번호는 "내적의 (1)"처럼, [[norm-in-inner-product-space|내적공간의 노름]]의 번호는 "노름의 (1)"처럼 줄여 쓴다. 실수 $s$, $c$에 대하여 $s + c = s$이면 $c = 0$이다. 실제로 양변에 $-s$를 더하면 오른쪽은 $s + (-s) = 0$이고((K8)의 (ii)), 왼쪽은 (K1), (K2), (K4)에 의해 $(s + c) + (-s) = c + (s + (-s)) = c + 0 = c$이다. 이것을 "더하기의 소거"라 부른다.

**(1)의 증명.** 내적의 조건 (i)에 의해 $\langle x, y \rangle = \langle y, x \rangle$이므로 한쪽이 $0$인 것은 정확히 다른 쪽이 $0$일 때이다. $S$와 $T$가 직교하는 것은 정의에 의해 모든 $s \in S$, $t \in T$에서 $\langle s, t \rangle = 0$일 때이고, 조건 (i)에 의해 이것은 모든 $t \in T$, $s \in S$에서 $\langle t, s \rangle = 0$인 것, 곧 $T$와 $S$가 직교하는 것과 같다.

**(2)의 증명.** 내적의 (2)에 의해 $\langle 0_V, x \rangle = \langle x, 0_V \rangle = 0$이다. 따라서 $S$의 모든 원소 $s$에서 $0_V \perp s$이고 $0_V \perp S$이다. $x \perp x$는 $\langle x, x \rangle = 0$이고, 내적의 조건 (iii)에 의해 이것은 정확히 $x = 0_V$일 때이다. $x \perp V$는 모든 $y \in V$에서 $\langle x, y \rangle = 0$이라는 것이고, 내적의 (5)에 의해 이것은 정확히 $x = 0_V$일 때이다. $S$가 공집합이면 "$S$의 모든 원소 $s$에서 $x \perp s$"는 $s$가 없어서 참이다.

**(3)의 증명.** $x \perp S$, $x' \perp S$이고 $s \in S$라 하자. 내적의 조건 (ii)와 (K9), (K4)에 의해 $\langle \alpha x + \beta x', s \rangle = \alpha \langle x, s \rangle + \beta \langle x', s \rangle = \alpha \cdot 0 + \beta \cdot 0 = 0$이다. $s$는 임의였으므로 $\alpha x + \beta x' \perp S$이다. $S$와 직교하는 원소 전체의 집합을 $U$라 하면 (2)에 의해 $0_V \in U$이므로 $U$는 공집합이 아니고, 방금 보인 것에 의해 $U$의 두 원소 $x$, $x'$과 실수 $\alpha$, $\beta$에서 $\alpha x + \beta x' \in U$이다. [[subspace|부분공간]]의 (P3)에 의해 $U$는 부분공간이다. 끝으로 $x \perp y$이면 조건 (ii), 내적의 (1), (K9)에 의해 $\langle \alpha x, \beta y \rangle = \alpha \langle x, \beta y \rangle = \alpha(\beta \langle x, y \rangle) = \alpha(\beta \cdot 0) = 0$이다.

**(4)의 증명.** $E = \operatorname{span}(u_1, \dots, u_r)$이라 하자. $x \perp E$이면, (N2)에 의해 모든 $k$에서 $u_k \in E$이므로 $x \perp u_k$이다. 거꾸로 모든 $k$에서 $x \perp u_k$라 하고 $z \in E$라 하자. 생성의 정의에 의해 $z = \beta_1 u_1 + \cdots + \beta_r u_r$인 실수의 열 $\beta_1, \dots, \beta_r$이 있다. 내적의 (3)의 (i)의 둘째 등식에 의해 $\langle x, z \rangle$는 $k$번째 항이 $\beta_k \langle x, u_k \rangle = \beta_k \cdot 0$인 열의 합이고, (K9)에 의해 모든 항이 $0$이므로 (H5)에 의해 $\langle x, z \rangle = 0$이다. $z$는 임의였으므로 $x \perp E$이다. $r = 0$이면 생성의 정의에 의해 $E = \{0_V\}$이고, $E$의 원소는 $0_V$뿐이므로 (2)에 의해 모든 $x$가 $E$와 직교한다.

**(5)의 증명.** $a = \lVert x \rVert^2$, $b = \lVert y \rVert^2$, $p = \langle x, y \rangle$라 하자. 노름의 (5)에 의해 $\lVert x + y \rVert^2 = (a + 2p) + b$이고, (K1)과 (K2)에 의해 이것은 $(a + b) + 2p$이다. $p = 0$이면 (K9)에 의해 $2p = 0$이고 (K4)에 의해 $\lVert x + y \rVert^2 = a + b$이다. 거꾸로 $(a + b) + 2p = a + b$이면 더하기의 소거에 의해 $2p = 0$이고, (K7)에 의해 $2 \ne 0$이므로 (K10)에 의해 $p = 0$이다.

빼기의 꼴도 같다. 노름의 (5)에 의해 $\lVert x - y \rVert^2 = (a - 2p) + b$이고, 뺄셈의 정의와 (K1), (K2)에 의해 이것은 $(a + b) + (-(2p))$이다. $p = 0$이면 $2p = 0$이고, (K4)에 의해 $0 + 0 = 0$이므로 (K8)의 (ii)에 의해 $-0 = 0$이어서 $\lVert x - y \rVert^2 = a + b$이다. 거꾸로 $(a + b) + (-(2p)) = a + b$이면 더하기의 소거에 의해 $-(2p) = 0$이고, (K9)에 의해 $2p = -(-(2p)) = -0 = 0$이므로 앞 문단과 같이 $p = 0$이다.

여러 항의 꼴은 $r$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 증명한다. 명제 $P_r$을 "서로 다른 두 자리의 항이 직교하는 길이 $r$인 모든 열에서 식이 성립한다"로 둔다. $r = 0$이면 왼쪽의 합은 (합의 정의에 의해) $0_V$이고 노름의 (2)와 내적의 (2)에 의해 $\lVert 0_V \rVert^2 = \langle 0_V, 0_V \rangle = 0$이다. 오른쪽은 빈 열의 합 $0$이다. 따라서 $P_0$이 참이다.

$r \ge 0$에서 $P_r$이 참이라 하고, $v_1, \dots, v_{r+1}$이 서로 다른 두 자리의 항이 직교하는 길이 $r + 1$인 열이라 하자. 처음 $r$개 $v_1, \dots, v_r$도 서로 다른 두 자리의 항이 직교하므로, 그 합을 $s$라 하면 귀납 가정에 의해 $\lVert s \rVert^2 = \lVert v_1 \rVert^2 + \cdots + \lVert v_r \rVert^2$이다. 합의 정의에 의해 $v_1 + \cdots + v_{r+1} = s + v_{r+1}$이다. 내적의 (3)의 (i)의 "특히"에 의해 $\langle s, v_{r+1} \rangle$는 $i$번째 항이 $\langle v_i, v_{r+1} \rangle$ ($i \le r$)인 열의 합인데, $i \le r < r + 1$이어서 $i \ne r + 1$이므로 모든 항이 $0$이고 (H5)에 의해 $\langle s, v_{r+1} \rangle = 0$이다. 곧 $s \perp v_{r+1}$이다. 첫 문단에 의해
$$
\lVert s + v_{r+1} \rVert^2 = \lVert s \rVert^2 + \lVert v_{r+1} \rVert^2
$$
이고, 이것은 귀납 가정에 의해 $(\lVert v_1 \rVert^2 + \cdots + \lVert v_r \rVert^2) + \lVert v_{r+1} \rVert^2$이다. 합의 정의에 의해 이것은 $k$번째 항이 $\lVert v_k \rVert^2$인 길이 $r + 1$인 열의 합이다(그 열의 처음 $r$개는 $k$번째 항이 $\lVert v_k \rVert^2$인 길이 $r$인 열이다). 따라서 $P_{r+1}$이 참이고, 귀납법에 의해 모든 $r \ge 0$에서 $P_r$이 참이다.

**(6)의 증명.** 내적의 (4)에 의해 $x, y \in W$이면 내적공간 $W$의 내적의 $(x, y)$에서의 값은 $\langle x, y \rangle$이다. 따라서 "$W$에서 $x \perp y$"와 "$V$에서 $x \perp y$"는 같은 등식 $\langle x, y \rangle = 0$이다. $S \subseteq W$이면 $S$의 원소는 모두 $W$에 속하므로 앞 문장을 $S$의 모든 원소에 쓰면 두 번째 문장이 나온다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³ 에서 직교하는 두 벡터와 피타고라스 식]
[[standard-inner-product|ℝⁿ 의 표준내적]]을 준 $\mathbb{R}^3$에서 $x = (1, 2, -1)$, $y = (3, -1, 1)$이면 $\langle x, y \rangle = 3 + (-2) + (-1) = 0$이므로 $x \perp y$입니다. $\lVert x \rVert^2 = 1 + 4 + 1 = 6$, $\lVert y \rVert^2 = 9 + 1 + 1 = 11$이고 $x + y = (4, 1, 0)$이므로 $\lVert x + y \rVert^2 = 16 + 1 + 0 = 17 = 6 + 11$입니다. $x - y = (-2, 3, -2)$에서도 $\lVert x - y \rVert^2 = 4 + 9 + 4 = 17$입니다. (3)에 의해 $2x \perp -5y$이기도 하고, 직접 계산해도 $\langle (2, 4, -2), (-15, 5, -5) \rangle = -30 + 20 + 10 = 0$입니다.
:::

:::example[생성하는 열의 항과 직교하는 벡터]
$\mathbb{R}^3$에서 $u_1 = (1, 0, 1)$, $u_2 = (0, 1, 1)$, $E = \operatorname{span}(u_1, u_2)$, $z = (1, 1, -1)$이라 합시다. $\langle z, u_1 \rangle = 1 + 0 + (-1) = 0$이고 $\langle z, u_2 \rangle = 0 + 1 + (-1) = 0$이므로 (4)에 의해 $z \perp E$입니다. 예를 들어 $E$의 원소 $2u_1 + 3u_2 = (2, 3, 5)$와는 $\langle z, (2, 3, 5) \rangle = 2 + 3 + (-5) = 0$입니다. $z$ 자신은 $\langle z, z \rangle = 3 \ne 0$이므로 (2)에 의해 $E$에 속하지 않습니다. $E$에 속했다면 $z \perp z$가 되어 $z = 0_V$였을 것이기 때문입니다.
:::

:::counterexample[(1, 0) 과 (1, 1) 에서 피타고라스 식이 성립하지 않는 예]
$\mathbb{R}^2$에서 $x = (1, 0)$, $y = (1, 1)$이면 $\langle x, y \rangle = 1$이므로 직교하지 않습니다. $\lVert x + y \rVert^2 = \lVert (2, 1) \rVert^2 = 5$이지만 $\lVert x \rVert^2 + \lVert y \rVert^2 = 1 + 2 = 3$입니다. 차이 $5 - 3 = 2$는 노름의 (5)의 가운데 항 $2\langle x, y \rangle$입니다.
:::

:::counterexample[내적을 바꾸면 직교가 달라질 수 있는 예]
$x = (2, 1)$, $y = (1, -1) \in \mathbb{R}^2$의 표준내적은 $2 + (-1) = 1$이므로 표준내적에서는 직교하지 않습니다. [[inner-product-examples|내적의 예]]의 (1)에서 가중치를 $w_1 = 1$, $w_2 = 2$로 둔 내적은 그 항목의 (1)의 (iii)에 의해 $\mathbb{R}^2$ 위의 내적이고, 그 값은 $1 \cdot (2 \cdot 1) + 2 \cdot (1 \cdot (-1)) = 2 + (-2) = 0$이어서 이 내적에서는 $x \perp y$입니다. 두 벡터가 직교하는지는 내적에 따라 달라질 수 있습니다.
:::

## 확인 질문

:::check[표준내적을 준 $\mathbb{R}^2$에서 $(a, 3)$이 $(2, -4)$와 직교하는 실수 $a$는 무엇인가?]
$\langle (a, 3), (2, -4) \rangle = 2a - 12$이므로 이것이 $0$인 것은 정확히 $2a = 12$, 곧 $a = 6$일 때입니다.
:::

:::check[내적공간의 벡터 $x$, $y$에서 $x \perp y$이고 $\lVert x \rVert = 5$, $\lVert y \rVert = 12$이면 $\lVert x - y \rVert$는 무엇인가?]
(5)의 빼기의 꼴에 의해 $\lVert x - y \rVert^2 = 25 + 144 = 169$입니다. [[order-properties-of-reals|실수의 순서의 성질]]의 (10)에 의해 정수 사이의 부등식 $0 \le 13$을 실수의 부등식으로 쓸 수 있고 $13 \cdot 13 = 169$이므로 [[norm-in-inner-product-space|내적공간의 노름]]의 (2)에 의해 $\lVert x - y \rVert = 13$입니다.
:::
