---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "11.1절, Proposition 11.4 의 4 (p.134) — 문제 '정규부분군의 역상'과 같은 내용(출처는 명제로 진술하고 g⁻¹hg 로 증명한다)"
  - ref: judson-abstract-algebra
    loc: "10.4 Exercises, 연습문제 14 (b) (p.132) — 문제 '몫군이 아벨군일 조건'의 1과 같은 발상(출처는 교환자 부분군을 포함하는지로 묻는다)"
  - ref: judson-abstract-algebra
    loc: "10.4 Exercises, 연습문제 4 (p.131), 11.4 Exercises, 연습문제 2 (b) (p.138) — 문제 '준동형의 상이 정규부분군이 아닌 예'와 같은 대상(대각성분이 1 인 삼각행렬. 연습문제 4 는 위삼각행렬 x 의 부분군이 가역 위삼각행렬의 군에서 정규인지를, 2 (b) 는 a 를 아래삼각행렬로 보내는 함수가 준동형인지를 묻는다)"
added: 2026-11-26
---

:::exercise[ℤ₁₂를 {[0], [4], [8]}로 나눈 몫군]
$G = (\mathbb{Z}_{12}, +)$이고 $H = \{[0], [4], [8]\}$이라 하자.

1. $H = \langle [4] \rangle$이고 $H$가 $G$의 정규부분군임을 보여라.
2. 잉여류 $[k] + H$는 모두 $[0] + H$, $[1] + H$, $[2] + H$, $[3] + H$ 가운데 하나이고, 이 넷은 서로 다름을 보여라. $[1] + H$의 원소를 적어라.
3. 몫군 $G/H$에서 $([2] + H) + ([3] + H)$를 계산하고, $[1] + H$의 위수를 구하라. $G/H$는 어느 군과 동형인가?
:::

:::solution
덧셈 표기의 잉여류와 몫군은 [[left-coset|잉여류]]의 (8)과 [[quotient-group|몫군]]의 (6)의 것이다. $\mathbb{Z}_{12}$의 두 동치류가 같은지는 [[congruence-modulo-n|합동]]의 정의와 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]으로 정한다.

**(1)** [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $1 \cdot [4] = [4]$, $2 \cdot [4] = [8]$, $3 \cdot [4] = [12] = [0]$이고($12 - 0 = 12 \cdot 1$), [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[4]$와 $[8]$은 $[0]$이 아니다. 자연수 $n < 3$은 $1$이나 $2$이므로([[prime-number|소수]]의 (Z1)) [[order-of-an-element|원소의 위수]]의 (7)에 의해 $\operatorname{ord}([4]) = 3$이다. [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $\langle [4] \rangle = \{0 \cdot [4], 1 \cdot [4], 2 \cdot [4]\} = \{[0], [4], [8]\} = H$이고 $|H| = 3$이다. [[cyclic-subgroup|순환 부분군]]의 (1)에 의해 $H$는 부분군이고, [[number-groups|수로 이루어진 군]]의 (4)에 의해 $G$는 아벨군이므로 [[normal-subgroup|정규부분군]]의 (3)에 의해 $H$는 정규부분군이다.

**(2)** 잉여류의 (8)과 (3)에 의해 $a + H = b + H$인 것은 정확히 $-a + b \in H$일 때이다. 정수 $k$를 [[division-theorem|나눗셈 정리]]로 $k = 4q + r$, $0 \le r \le 3$으로 쓰면 $-[r] + [k] = [k - r] = [4q] = q \cdot [4]$이고(법 n의 정수의 (2), (4)와 군의 거듭제곱의 (7)), 이것은 $\langle [4] \rangle = H$에 속하므로 $[k] + H = [r] + H$이다. 거꾸로 $0 \le r < s \le 3$이면 $-[r] + [s] = [s - r]$이고 $1 \le s - r \le 3$이므로, 법 n의 정수의 (1)에 의해 $[s - r]$은 $[0]$, $[4]$, $[8]$ 어느 것과도 다르다. 곧 $[s - r] \notin H$이고 $[r] + H \ne [s] + H$이다. 잉여류의 정의에 의해 $[1] + H$의 원소는 $[1] + [0] = [1]$, $[1] + [4] = [5]$, $[1] + [8] = [9]$이므로
$$
[1] + H = \{[1], [5], [9]\}
$$
이다.

**(3)** 몫군의 (6)에 의해 $([2] + H) + ([3] + H) = ([2] + [3]) + H = [5] + H$이고, (2)에서 $5 = 4 \cdot 1 + 1$이므로 이것은 $[1] + H$이다.

몫군의 (6)과 군의 거듭제곱의 (7)에 의해 $k \cdot ([1] + H) = (k \cdot [1]) + H = [k] + H$이다. $k = 1, 2, 3$이면 (2)에 의해 $[k] + H \ne [0] + H$이고, $k = 4$이면 $[4] \in H$이므로 잉여류의 (5)에 의해 $[4] + H = H = [0] + H$이다. 몫군의 항등원은 $H$이므로(몫군의 (6)) 원소의 위수의 (7)에 의해 $\operatorname{ord}([1] + H) = 4$이다.

[[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $12 = [G : H] \cdot 3$이고 $[G : H]$는 이 등식을 만족하는 유일한 정수이므로 $[G : H] = 4$이다. 몫군의 (5)에 의해 $|G/H| = 4$이다. $\operatorname{ord}([1] + H) = 4 = |G/H|$이므로 순환 부분군의 크기의 (4)에 의해 $[1] + H$는 $G/H$의 생성원이고, [[classification-of-cyclic-groups|순환군의 분류]]의 (2)에 의해 $G/H \cong (\mathbb{Z}_4, +)$이다.
:::

:::exercise[정규부분군의 역상]
$\varphi : G \to G'$이 군 준동형이고 $N'$이 $G'$의 정규부분군이라 하자. $N = \{g \in G : \varphi(g) \in N'\}$이 $\operatorname{Ker} \varphi$를 포함하는 $G$의 정규부분군임을 보여라.
:::

:::solution
[[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (5)에 의해 $N$은 $\operatorname{Ker} \varphi$를 포함하는 $G$의 부분군이다. $g \in G$이고 $n \in N$이라 하자. [[group-homomorphism|군 준동형]]의 정의와 (2)에 의해
$$
\begin{aligned}
\varphi(gng^{-1}) &= \varphi((gn)g^{-1}) \\
&= \varphi(gn)\varphi(g^{-1}) \\
&= \varphi(g)\varphi(n)\varphi(g)^{-1}
\end{aligned}
$$
이다. $\varphi(n) \in N'$이고 $\varphi(g) \in G'$이며 $N'$이 $G'$의 정규부분군이므로, [[normal-subgroup|정규부분군]]의 정의에 의해 오른쪽은 $N'$에 속한다. 따라서 $gng^{-1} \in N$이고, 정의에 의해 $N$은 $G$의 정규부분군이다.

$N' = \{e'\}$($e'$은 $G'$의 항등원)으로 두면 $N = \operatorname{Ker} \varphi$이고, 정규부분군의 (2)에 의해 $\{e'\}$은 정규부분군이므로 이 결과는 정규부분군의 (4)를 다시 준다.
:::

:::exercise[몫군이 아벨군일 조건]
$N$이 군 $G$의 정규부분군이라 하자.

1. 몫군 $G/N$이 아벨군인 것은 정확히 모든 $a, b \in G$에 대하여 $(a^{-1}b^{-1})(ab) \in N$일 때임을 보여라.
2. $\varphi : G \to G'$이 군 준동형이고 $G'$이 아벨군이면, 모든 $a, b \in G$에 대하여 $(a^{-1}b^{-1})(ab) \in \operatorname{Ker} \varphi$임을 제1 동형 정리를 써서 보여라.
:::

:::solution
**(1)** [[quotient-group|몫군]]의 (2)에 의해 $G/N$의 원소는 $aN$($a \in G$) 꼴이고 $(aN)(bN) = (ab)N$이다. 따라서 $G/N$이 아벨군인 것은 정확히 모든 $a, b \in G$에서 $(ab)N = (ba)N$일 때이다. [[left-coset|잉여류]]의 (3)의 (i)과 (iv)에 의해 $(ba)N = (ab)N$인 것은 정확히 $(ba)^{-1}(ab) \in N$일 때이고, [[group-basic-properties|군의 기본 성질]]의 (6)에 의해 $(ba)^{-1} = a^{-1}b^{-1}$이다. 따라서 $G/N$이 아벨군인 것은 정확히 모든 $a, b$에서 $(a^{-1}b^{-1})(ab) \in N$일 때이다.

**(2)** $K = \operatorname{Ker} \varphi$라 하자. [[normal-subgroup|정규부분군]]의 (4)에 의해 $K$는 정규부분군이고, [[first-isomorphism-theorem|제1 동형 정리]]의 (1)에 의해 $G/K \cong \varphi(G)$이다. [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (4)에 의해 $\varphi(G)$는 $G'$의 부분군이고, $G'$이 아벨군이므로 [[subgroup|부분군]]의 (7)에 의해 군 $\varphi(G)$는 아벨군이다. [[group-isomorphism|군의 동형]]의 (3)(i)에 의해 $G/K$도 아벨군이고, (1)을 $N = K$에 쓰면 모든 $a, b$에서 $(a^{-1}b^{-1})(ab) \in K$이다.

직접 계산해도 같다. 군 준동형의 정의와 (2)에 의해 $\varphi((a^{-1}b^{-1})(ab)) = (\varphi(a)^{-1}\varphi(b)^{-1})(\varphi(a)\varphi(b))$이고, $G'$이 아벨군이므로 이것은 $(\varphi(a)^{-1}\varphi(a))(\varphi(b)^{-1}\varphi(b)) = e'$이다.
:::

:::exercise[지표가 유한한 정규부분군과 거듭제곱]
$N$이 군 $G$의 정규부분군이고 $N$의 지표가 유한하며 $m = [G : N]$이라 하자.

1. 모든 $a \in G$에 대하여 $a^m \in N$임을 보여라.
2. $a \in G$의 위수가 유한하고 $\gcd(\operatorname{ord}(a), m) = 1$이면 $a \in N$임을 보여라.
:::

:::solution
거듭제곱은 [[power-in-a-group|군의 거듭제곱]]의 것이고, 지표와 $[G : N]$은 [[lagrange-theorem|라그랑주 정리]]의 것이다. $e$는 $G$의 항등원이다.

**(1)** [[quotient-group|몫군]]의 (5)에 의해 $G/N$은 유한군이고 $|G/N| = [G : N] = m$이다. [[order-divides-group-order|원소의 위수는 군의 위수를 나눈다]]의 (2)를 군 $G/N$과 원소 $aN$에 쓰면 $(aN)^m$은 $G/N$의 항등원 $N$이다(몫군의 (2)). 몫군의 (3)에 의해 $(aN)^m = a^mN$이므로 $a^mN = N$이고, [[left-coset|잉여류]]의 (5)에 의해 $a^m \in N$이다.

**(2)** $k = \operatorname{ord}(a)$라 하자. $k$는 자연수이므로 $k \ne 0$이고, [[bezout-identity|베주 항등식]]에 의해 $kx + my = \gcd(k, m) = 1$인 정수 $x$, $y$가 있다. [[laws-of-exponents|지수법칙]]의 (1), (2)와 군의 거듭제곱의 (1), (3)에 의해
$$
\begin{aligned}
a &= a^1 = a^{kx + my} = a^{kx}a^{my} \\
&= (a^k)^x(a^m)^y = e^x(a^m)^y \\
&= e(a^m)^y = (a^m)^y
\end{aligned}
$$
이다. (1)에 의해 $a^m \in N$이고 $N$은 부분군이므로 군의 거듭제곱의 (5)에 의해 $(a^m)^y \in N$이다. 따라서 $a \in N$이다.

예를 들어 $G = (\mathbb{Z}_{12}, +)$, $N = \langle [3] \rangle$이라 하자. [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $k \cdot [3] = [3k]$이고, $k = 1, 2, 3$이면 $[3]$, $[6]$, $[9]$는 $[0]$이 아니며($0 < 3k < 12$와 [[integers-modulo-n|법 n의 정수]]의 (1)) $4 \cdot [3] = [12] = [0]$이므로 [[order-of-an-element|원소의 위수]]의 (7)에 의해 $\operatorname{ord}([3]) = 4$이다. [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $N = \{[0], [3], [6], [9]\}$이고 $|N| = 4$이며, $N$은 [[normal-subgroup|정규부분군]]의 (3)에 의해 정규부분군이다($G$는 아벨군). 라그랑주 정리의 (1)에 의해 $12 = [G : N] \cdot 4$이므로 $m = 3$이다. (1)은 모든 $[k]$에서 $3 \cdot [k] = [3k] \in N$이라는 것이고, $[6] \ne [0]$이고 $2 \cdot [6] = [12] = [0]$이므로 $\operatorname{ord}([6]) = 2$이고, $\gcd(2, 3) = 1$이므로 (2)에 의해 $[6] \in N$이다. 실제로 $[6] = 2 \cdot [3]$이다.
:::

:::exercise[법 n의 정수의 몫군]
$n$이 자연수이고 $H$가 $(\mathbb{Z}_n, +)$의 부분군이며 원소가 $d$개라 하자. $n = d \cdot n'$인 자연수 $n'$이 하나 있고, 몫군 $\mathbb{Z}_n/H$는 $[1] + H$가 생성하는 원소 $n'$개의 순환군이며 $(\mathbb{Z}_{n'}, +)$와 동형임을 보여라. (문제 1은 $n = 12$, $d = 3$인 경우이다.)
:::

:::solution
$G = (\mathbb{Z}_n, +)$라 하자. [[number-groups|수로 이루어진 군]]의 (4)에 의해 $G$는 원소가 $n$개인 유한군이고 아벨군이므로 [[normal-subgroup|정규부분군]]의 (3)에 의해 $H$는 정규부분군이고, [[quotient-group|몫군]] $G/H$가 있다.

[[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $n = [G : H] \cdot d$이고 $d \ge 1$이다. $n' = [G : H]$로 두면 $n = d \cdot n'$이고, 같은 (1)의 유일성에 의해 이런 정수 $n'$은 하나뿐이다. 몫군의 (5)에 의해 $G/H$는 유한군이고 $|G/H| = n'$이다. $G/H$는 원소 $H$를 가지므로 공집합이 아니고, [[finite-set|유한집합]]의 (F2)에 의해 $n' \ne 0$이다. $n'$은 원소의 개수이므로 $0$ 이상이고, 따라서 자연수이다.

[[cyclic-subgroup|순환 부분군]]의 (5)와 (6)에 의해 $G = \langle [1] \rangle$이므로 $G$는 순환군이고 $[1]$은 그 생성원이다. 몫군의 (4)에 의해 $G/H$는 순환군이고 $[1] + H$는 그 생성원이다. [[classification-of-cyclic-groups|순환군의 분류]]의 (2)에 의해 $G/H \cong (\mathbb{Z}_{n'}, +)$이다.

경계의 두 경우를 보면, $d = 1$이면 $H = \{[0]\}$이고 $\mathbb{Z}_n/\{[0]\} \cong \mathbb{Z}_n$이며, $d = n$이면 $n' = 1$이고 몫군은 원소가 하나인 군 $\mathbb{Z}_1$과 동형이다. [[subgroups-of-finite-cyclic-group|유한 순환군의 부분군]]의 (2)에 의해 $n$의 양의 약수 $d$마다 원소가 $d$개인 부분군은 하나뿐이므로, 몫군은 $d$로 정해진다.
:::

:::exercise[유한군에서 나가는 준동형의 상의 크기]
$G$가 유한군이고 $\varphi : G \to G'$이 군 준동형이라 하자.

1. $\operatorname{Ker} \varphi$와 $\varphi(G)$가 유한집합이고 $|G| = |\operatorname{Ker} \varphi| \cdot |\varphi(G)|$임을 보여라.
2. $|\varphi(G)|$가 $|G|$를 나누고, $G'$도 유한군이면 $|\varphi(G)|$가 $|G'|$을 나눔을 보여라.
3. $(\mathbb{Z}_{12}, +)$에서 $(\mathbb{Z}_8, +)$로의 전사 준동형은 없음을 보여라.
:::

:::solution
**(1)** $K = \operatorname{Ker} \varphi$라 하자. [[normal-subgroup|정규부분군]]의 (4)에 의해 $K$는 정규부분군이고, $G$가 유한군이므로 [[subgroup|부분군]]의 (8)에 의해 $K$는 유한군이며, [[quotient-group|몫군]]의 (5)에 의해 $G/K$는 유한군이고 $|G| = |G/K| \cdot |K|$이다. [[first-isomorphism-theorem|제1 동형 정리]]의 (1)에 의해 $G/K \cong \varphi(G)$이므로, [[group-isomorphism|군의 동형]]의 (3)(iii)에 의해 $\varphi(G)$는 유한군이고 $|\varphi(G)| = |G/K|$이다. 따라서 $|G| = |\varphi(G)| \cdot |K| = |K| \cdot |\varphi(G)|$이다.

**(2)** (1)에 의해 $|G| = |\varphi(G)| \cdot |K|$이고 $|K|$는 정수이므로, [[divisibility|나누어떨어짐]]의 정의에 의해 $|\varphi(G)| \mid |G|$이다. $G'$이 유한군이면 [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (4)에 의해 $\varphi(G)$는 $G'$의 부분군이므로 [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $|\varphi(G)| \mid |G'|$이다.

**(3)** 전사 준동형 $\varphi : \mathbb{Z}_{12} \to \mathbb{Z}_8$이 있다면 핵과 상의 (4)에 의해 $\varphi(\mathbb{Z}_{12}) = \mathbb{Z}_8$이고, [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $|\varphi(\mathbb{Z}_{12})| = 8$이다. (2)에 의해 $8 \mid 12$, 곧 $12 = 8c$인 정수 $c$가 있어야 한다. 그러나 [[well-ordering-principle|정렬 원리]]의 (Z5)와 [[prime-number|소수]]의 (Z1)에 의해 $c \le 0$이거나 $c = 1$이거나 $c \ge 2$이고, 각각 $8c \le 0$, $8c = 8$, $8c \ge 16$이므로 어느 경우에도 $8c \ne 12$이다((Z3), (Z6)). 따라서 그런 준동형은 없다.
:::

:::exercise[준동형의 상이 정규부분군이 아닌 예]
실수 $a$에 대하여 $P(a)$를 $(1, 1)$, $(1, 2)$, $(2, 1)$, $(2, 2)$ 성분이 차례로 $1$, $a$, $0$, $1$인 $2 \times 2$ 행렬이라 하자.

1. 모든 실수 $a$, $b$에서 $P(a)P(b) = P(a + b)$이고 $P(0) = I_2$임을 보이고, 이로부터 $P(a) \in GL_2(\mathbb{R})$이며 각 $a$에 $P(a)$를 대응시키는 함수 $\varphi : (\mathbb{R}, +) \to GL_2(\mathbb{R})$가 단사인 준동형임을 보여라.
2. 상 $U = \varphi(\mathbb{R})$은 $GL_2(\mathbb{R})$의 부분군이고 아벨군이지만, $GL_2(\mathbb{R})$의 정규부분군이 아님을 보여라.
:::

:::solution
행렬의 곱의 성분은 [[matrix-product|행렬의 곱]]의 (2)로 $(AB)_{j,k} = a_{j,1}b_{1,k} + a_{j,2}b_{2,k}$이고, 두 행렬이 같은지는 [[matrix|행렬]]의 (2)로 성분을 비교한다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1), (K4), (K9)에 의한다.

**(1)** $P(a)P(b)$의 성분은
$$
\begin{aligned}
(1, 1)&: 1 \cdot 1 + a \cdot 0 = 1, \\
(1, 2)&: 1 \cdot b + a \cdot 1 = a + b, \\
(2, 1)&: 0 \cdot 1 + 1 \cdot 0 = 0, \\
(2, 2)&: 0 \cdot b + 1 \cdot 1 = 1
\end{aligned}
$$
이고(마지막의 $1 \cdot b + a \cdot 1 = b + a = a + b$는 (K4), (K1)), 이것은 $P(a + b)$의 성분이므로 $P(a)P(b) = P(a + b)$이다. $P(0)$의 성분은 $1$, $0$, $0$, $1$이므로 [[matrix|행렬]]의 (6)의 $I_2$와 같다. 따라서 (K5)와 (K8)의 $-a$, (K1)에 의해 $P(a)P(-a) = P(a + (-a)) = P(0) = I_2$이고 $P(-a)P(a) = P((-a) + a) = P(0) = I_2$이므로, [[invertible-matrix|가역행렬과 역행렬]]의 정의에 의해 $P(a)$는 가역이고 $P(a) \in GL_2(\mathbb{R})$이며 $P(a)^{-1} = P(-a)$이다. [[general-linear-group|일반선형군]]의 (2)에 의해 $GL_2(\mathbb{R})$의 곱은 행렬의 곱이므로 $\varphi(a + b) = P(a + b) = P(a)P(b) = \varphi(a)\varphi(b)$이고, [[group-homomorphism|군 준동형]]의 (6)의 읽기로 $\varphi$는 준동형이다. $\varphi(a) = I_2$이면 두 행렬의 $(1, 2)$ 성분을 비교해 $a = 0$이므로 $\operatorname{Ker} \varphi = \{0\}$이고, [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (3)에 의해 $\varphi$는 단사이다.

**(2)** 핵과 상의 (4)에 의해 $U$는 부분군이고, [[number-groups|수로 이루어진 군]]의 (2)에 의해 $(\mathbb{R}, +)$가 아벨군이므로 핵과 상의 (7)에 의해 $U$는 아벨군이다.

$W$를 성분이 차례로 $0$, $1$, $1$, $0$인 $2 \times 2$ 행렬이라 하자. $WW$의 성분은 $0 \cdot 0 + 1 \cdot 1 = 1$, $0 \cdot 1 + 1 \cdot 0 = 0$, $1 \cdot 0 + 0 \cdot 1 = 0$, $1 \cdot 1 + 0 \cdot 0 = 1$이므로 $WW = I_2$이고, $W \in GL_2(\mathbb{R})$이며 $W^{-1} = W$이다([[group-basic-properties|군의 기본 성질]]의 (3)). $P(1)W$의 성분은 $1 \cdot 0 + 1 \cdot 1 = 1$, $1 \cdot 1 + 1 \cdot 0 = 1$, $0 \cdot 0 + 1 \cdot 1 = 1$, $0 \cdot 1 + 1 \cdot 0 = 0$이고, 이 행렬에 왼쪽에서 $W$를 곱한 $WP(1)W$의 성분은
$$
\begin{aligned}
(1, 1)&: 0 \cdot 1 + 1 \cdot 1 = 1, \\
(1, 2)&: 0 \cdot 1 + 1 \cdot 0 = 0, \\
(2, 1)&: 1 \cdot 1 + 0 \cdot 1 = 1, \\
(2, 2)&: 1 \cdot 1 + 0 \cdot 0 = 1
\end{aligned}
$$
이다. 곧 $WP(1)W^{-1} = WP(1)W$의 $(2, 1)$ 성분은 $1$이다. 그런데 $U$의 원소 $P(b)$의 $(2, 1)$ 성분은 모두 $0$이고 (K4)에 의해 $0 \ne 1$이므로 $WP(1)W^{-1} \notin U$이다. $W \in GL_2(\mathbb{R})$, $P(1) \in U$에서 [[normal-subgroup|정규부분군]]의 정의의 조건이 깨지므로 $U$는 정규부분군이 아니다.

준동형의 핵은 언제나 정규부분군이지만(정규부분군의 (4). 여기서는 $\{0\}$), 상은 아벨군이어도 공역의 정규부분군이 아닐 수 있다.
:::
