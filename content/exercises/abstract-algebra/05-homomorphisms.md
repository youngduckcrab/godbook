---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "11.1절, Example 11.9 (p.135) — 문제 'ℤ에서 U(15)로 가는 준동형'과 같은 발상(n 에 g^n 을 대응시키는 준동형의 핵은 g 의 위수가 n 이면 nℤ)"
  - ref: judson-abstract-algebra
    loc: "11.4 Exercises, 연습문제 11 (p.139) — 문제 '두 준동형이 같은 값을 갖는 원소 전체'의 2와 같은 발상(순환군 위의 준동형은 생성원에서의 값으로 정해진다)"
  - ref: judson-abstract-algebra
    loc: "11.1절, Example 11.8 (p.135), 11.4 Exercises, 연습문제 5, 6 (p.138) — 문제 '법 n의 정수에서 나가는 준동형'과 같은 종류(유한 순환군 사이의 준동형을 모두 구하기. Example 11.8 은 ℤ₇ 에서 ℤ₁₂ 로의 준동형이 자명한 것뿐임을 보인다)"
added: 2026-11-26
---

:::exercise[ℤ에서 U(15)로 가는 준동형]
$U(15)$는 법 $15$의 단원군이다. 각 정수 $n$에 $[2]^n \in U(15)$를 대응시키는 함수를 $\psi : \mathbb{Z} \to U(15)$라 하자.

1. $[2] \in U(15)$이고 $\psi$가 $(\mathbb{Z}, +)$에서 $U(15)$로의 준동형임을 보여라.
2. $\operatorname{Ker} \psi$를 구하고, $\psi$가 단사가 아님을 보여라.
3. 상 $\psi(\mathbb{Z})$의 원소를 모두 적고, $\psi$가 전사가 아님을 보여라.
4. 군 $\psi(\mathbb{Z})$는 어느 군과 동형인가?
:::

:::solution
**(1)** $[2][8] = [16]$이고 $16 - 1 = 15 \cdot 1$이므로 [[congruence-modulo-n|합동]]의 정의와 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]에 의해 $[16] = [1]$이다. $\mathbb{Z}_{15}$의 곱셈은 가환이므로([[integers-modulo-n|법 n의 정수]]의 (3)) $[8][2] = [1]$이기도 하다. 따라서 [[group-of-units-modulo-n|법 n의 단원군]]의 (3)에 의해 $[2] \in U(15)$이다. [[group-homomorphism|군 준동형]]의 (7)(ii)를 군 $U(15)$와 원소 $[2]$에 쓰면 $\psi$는 $(\mathbb{Z}, +)$에서 $U(15)$로의 준동형이다.

**(2)** 단원군의 (2)에 의해 $U(15)$의 곱은 $\mathbb{Z}_{15}$의 곱셈이고 항등원은 $[1]$이다. [[power-in-a-group|군의 거듭제곱]]의 (8)에 의해 $[2]^k = [2^k]$이므로
$$
\begin{aligned}
[2]^1 &= [2], & [2]^2 &= [4], \\
[2]^3 &= [8], & [2]^4 &= [16] = [1]
\end{aligned}
$$
이다. $0 \le 1 < 2 < 4 < 8 \le 14$이므로 법 n의 정수의 (1)에 의해 $[2]$, $[4]$, $[8]$은 $[1]$이 아니다. 자연수 $n$이 $n < 4$이면 [[prime-number|소수]]의 (Z1)에 의해 $n$은 $1$, $2$, $3$ 가운데 하나이므로 $[2]^n \ne [1]$이다. 곧 $[2]^n = [1]$인 모든 자연수 $n$에 대하여 $4 \le n$이고(삼분법 [[well-ordering-principle|정렬 원리]]의 (Z5)), [[order-of-an-element|원소의 위수]]의 정의에 의해 $\operatorname{ord}([2]) = 4$이다.

[[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (8)에 의해 $\operatorname{Ker} \psi = \{n \in \mathbb{Z} : [2]^n = [1]\}$이고, 원소의 위수의 (2)에 의해 이것은 $\{n \in \mathbb{Z} : 4 \mid n\}$이며, [[subgroup-examples|부분군의 예와 교집합]]의 (1)에 의해 $4\mathbb{Z}$이다. $4 \in \operatorname{Ker} \psi$이고 $4 \ne 0$이므로 $\operatorname{Ker} \psi \ne \{0\}$이고, 핵과 상의 (3)에 의해 $\psi$는 단사가 아니다. 실제로 $\psi(0) = [1] = \psi(4)$이다.

**(3)** 핵과 상의 (8)에 의해 $\psi(\mathbb{Z}) = \langle [2] \rangle$이고, [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 그 원소는 정확히 $[2]^0 = [1]$, $[2]^1$, $[2]^2$, $[2]^3$이다. 곧
$$
\psi(\mathbb{Z}) = \{[1], [2], [4], [8]\}
$$
이다. 한편 $[7][13] = [91]$이고 $91 - 1 = 15 \cdot 6$이므로 $[7][13] = [1]$이며, 곱셈이 가환이므로 $[13][7] = [1]$이다. 단원군의 (3)에 의해 $[7] \in U(15)$이다. $7$은 $0$ 이상 $14$ 이하이고 $1$, $2$, $4$, $8$ 어느 것과도 다르므로 법 n의 정수의 (1)에 의해 $[7]$은 $[1]$, $[2]$, $[4]$, $[8]$ 어느 것과도 다르다. 따라서 $[7] \notin \psi(\mathbb{Z})$이고 $\psi(\mathbb{Z}) \ne U(15)$이므로, 핵과 상의 (4)에 의해 $\psi$는 전사가 아니다.

**(4)** $(\mathbb{Z}_4, +)$와 동형이다. (2)에서 $[2]$의 위수는 유한하고 $\operatorname{ord}([2]) = 4$이므로, [[classification-of-cyclic-groups|순환군의 분류]]의 (3)에 의해 군 $\langle [2] \rangle = \psi(\mathbb{Z})$는 $(\mathbb{Z}_4, +)$와 동형이다.
:::

:::exercise[동형사상과 중심]
$G$와 $G'$이 군이고 $Z(G)$, $Z(G')$이 각각의 중심이라 하자.

1. $\varphi : G \to G'$이 전사인 준동형이면 $\varphi(Z(G)) \subseteq Z(G')$임을 보여라.
2. $\varphi : G \to G'$이 동형사상이면 $\varphi(Z(G)) = Z(G')$이고, 군 $Z(G)$와 군 $Z(G')$이 동형임을 보여라.
:::

:::solution
중심은 [[subgroup-examples|부분군의 예와 교집합]]의 (5)의 것이고, 같은 곳에서 $Z(G)$와 $Z(G')$은 각각 $G$와 $G'$의 부분군이다.

**(1)** $y \in \varphi(Z(G))$라 하자. [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 상의 뜻에 의해 $y = \varphi(a)$인 $a \in Z(G)$가 있다. $x \in G'$이라 하자. $\varphi$가 전사이므로 $x = \varphi(g)$인 $g \in G$가 있다. $a \in Z(G)$이므로 $ag = ga$이고, [[group-homomorphism|군 준동형]]의 정의에 의해
$$
\begin{aligned}
yx &= \varphi(a)\varphi(g) = \varphi(ag) \\
&= \varphi(ga) = \varphi(g)\varphi(a) = xy
\end{aligned}
$$
이다. 모든 $x \in G'$에서 $yx = xy$이므로 $y \in Z(G')$이다.

**(2)** 동형사상은 전사인 준동형이므로([[group-isomorphism|군의 동형]]의 정의) (1)에 의해 $\varphi(Z(G)) \subseteq Z(G')$이다. 거꾸로 $y \in Z(G')$이라 하자. $\varphi$가 전사이므로 $y = \varphi(a)$인 $a \in G$가 있다. $g \in G$이면 $\varphi(g) \in G'$이고 $y \in Z(G')$이므로
$$
\begin{aligned}
\varphi(ag) &= \varphi(a)\varphi(g) \\
&= \varphi(g)\varphi(a) = \varphi(ga)
\end{aligned}
$$
이고, $\varphi$가 단사이므로 $ag = ga$이다. 모든 $g \in G$에서 그러므로 $a \in Z(G)$이고 $y = \varphi(a) \in \varphi(Z(G))$이다. 따라서 $\varphi(Z(G)) = Z(G')$이다.

$Z(G)$는 $G$의 부분군이므로 군의 동형의 (3)(iv)에 의해 $\varphi$를 $Z(G)$로 제한해 $Z(G) \to \varphi(Z(G))$로 선언한 것은 동형사상이다. $\varphi(Z(G)) = Z(G')$이므로 군 $Z(G)$와 군 $Z(G')$은 동형이다.
:::

:::exercise[준동형과 원소의 위수]
$\varphi : G \to G'$이 군 준동형이고 $e$, $e'$이 각각 $G$, $G'$의 항등원이며, $a \in G$의 위수가 유한하다고 하자.

1. $\varphi(a)$의 위수도 유한하고 $\operatorname{ord}(\varphi(a)) \mid \operatorname{ord}(a)$임을 보여라.
2. $\varphi$가 단사이면 $\operatorname{ord}(\varphi(a)) = \operatorname{ord}(a)$임을 보여라.
3. 1의 등호가 성립하지 않는 예를 하나 들어라.
:::

:::solution
원소의 위수와 $\operatorname{ord}$는 [[order-of-an-element|원소의 위수]]의 것이다. $n = \operatorname{ord}(a)$라 하자.

**(1)** [[group-homomorphism|군 준동형]]의 (3)과 (1)에 의해
$$
\varphi(a)^n = \varphi(a^n) = \varphi(e) = e'
$$
이다. $n$은 자연수이므로 원소의 위수의 정의에 의해 $\varphi(a)$의 위수는 유한하다. 원소의 위수의 (2)를 $\varphi(a)$와 $k = n$에 쓰면 $\varphi(a)^n = e'$에서 $\operatorname{ord}(\varphi(a)) \mid n$이다.

**(2)** 먼저 모든 자연수 $k$에 대하여 $a^k = e$인 것과 $\varphi(a)^k = e'$인 것이 같음을 보인다. $a^k = e$이면 (1)의 계산과 같이 $\varphi(a)^k = \varphi(a^k) = \varphi(e) = e'$이다. 거꾸로 $\varphi(a)^k = e'$이면 $\varphi(a^k) = \varphi(a)^k = e' = \varphi(e)$이고, $\varphi$가 단사이므로 $a^k = e$이다.

이제 $\varphi(a)^n = e'$이고, $\varphi(a)^k = e'$인 자연수 $k$는 $a^k = e$를 만족하므로 원소의 위수의 정의에 의해 $n \le k$이다. 원소의 위수의 정의의 마지막 문장("거꾸로 자연수 $m$이 …")에 의해 $\operatorname{ord}(\varphi(a)) = n = \operatorname{ord}(a)$이다.

**(3)** $G = (\mathbb{Z}_2, +)$, $G' = (\mathbb{Z}_2, +)$이고 $\varphi$가 [[group-homomorphism|군 준동형]]의 (4)의 자명한 준동형, 곧 모든 값이 $[0]$인 준동형이라 하자. [[order-of-an-element|원소의 위수]]의 (7)에 의해 $\operatorname{ord}([1]) = 2$이고, 같은 항목의 (1)에 의해 $\operatorname{ord}(\varphi([1])) = \operatorname{ord}([0]) = 1$이다. $1 \mid 2$이므로 (1)과 맞고, $1 \ne 2$이므로 등호는 성립하지 않는다. (2)와 함께 보면 이 준동형은 단사가 아니고, 실제로 $\varphi([0]) = \varphi([1])$이며 [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[0] \ne [1]$이다.
:::

:::exercise[두 준동형이 같은 값을 갖는 원소 전체]
$\varphi, \psi : G \to G'$이 두 군 준동형이라 하고 $E = \{a \in G : \varphi(a) = \psi(a)\}$라 하자.

1. $E$가 $G$의 부분군임을 보여라.
2. $G$가 순환군이고 $a$가 그 생성원이며 $\varphi(a) = \psi(a)$이면 $\varphi = \psi$임을 보여라.
:::

:::solution
**(1)** $e$, $e'$을 각각 $G$, $G'$의 항등원이라 하자. [[group-homomorphism|군 준동형]]의 (1)에 의해 $\varphi(e) = e' = \psi(e)$이므로 $e \in E$이고 $E \ne \emptyset$이다. $a, b \in E$라 하자. 같은 항목의 정의와 (2)에 의해
$$
\begin{aligned}
&\varphi(ab^{-1}) = \varphi(a)\varphi(b^{-1}) \\
&\quad = \varphi(a)\varphi(b)^{-1} \\
&\quad = \psi(a)\psi(b)^{-1} \\
&\quad = \psi(a)\psi(b^{-1}) = \psi(ab^{-1})
\end{aligned}
$$
이므로 $ab^{-1} \in E$이다. [[subgroup-criteria|부분군 판정법]]의 (2)에 의해 $E$는 $G$의 부분군이다.

**(2)** $\varphi(a) = \psi(a)$이므로 $a \in E$이다. (1)에 의해 $E$는 $a$를 포함하는 $G$의 부분군이므로 [[cyclic-subgroup|순환 부분군]]의 (2)에 의해 $\langle a \rangle \subseteq E$이다. $a$가 생성원이므로 $G = \langle a \rangle \subseteq E \subseteq G$이고 $E = G$이다. 곧 모든 $g \in G$에서 $\varphi(g) = \psi(g)$이다. 두 함수는 정의역이 같고 모든 원소에서 값이 같으므로 [[function|함수]]의 뜻으로 $\varphi = \psi$이다.
:::

:::exercise[법 n의 정수에서 나가는 준동형]
$n$이 자연수이고 $G$가 군이며 $e$가 그 항등원이라 하자.

1. $a \in G$라 하자. $(\mathbb{Z}_n, +)$에서 $G$로의 준동형 $\psi$로서 $\psi([1]) = a$인 것이 있는 것은 정확히 $a^n = e$일 때임을 보여라. 또 그런 $\psi$는 하나뿐이고 모든 정수 $k$에서 $\psi([k]) = a^k$임을 보여라.
2. $(\mathbb{Z}_6, +)$에서 $(\mathbb{Z}_4, +)$로의 준동형을 모두 구하라.
3. 자연수 $m$, $n$이 서로소이면 $(\mathbb{Z}_m, +)$에서 $(\mathbb{Z}_n, +)$로의 준동형은 자명한 준동형뿐임을 보여라.
:::

:::solution
거듭제곱은 [[power-in-a-group|군의 거듭제곱]]의 것이고, 덧셈 표기의 준동형은 [[group-homomorphism|군 준동형]]의 (6)대로 읽는다.

**(1)** *필요.* $\psi$가 준동형이고 $\psi([1]) = a$라 하자. 정수 $k$에 대하여 군의 거듭제곱의 (7)에 의해 $(\mathbb{Z}_n, +)$에서 $k \cdot [1] = [k]$이므로, 군 준동형의 (3)과 (6)에 의해
$$
\psi([k]) = \psi(k \cdot [1]) = \psi([1])^k = a^k
$$
이다. $n - 0 = n \cdot 1$이므로 [[congruence-modulo-n|합동]]의 정의와 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]에 의해 $[n] = [0]$이고, 군 준동형의 (1)과 (6)에 의해 $a^n = \psi([n]) = \psi([0]) = e$이다. 위 계산은 $\psi$의 모든 값이 $a$로 정해진다는 것도 보여 주므로, 그런 $\psi$는 있으면 하나뿐이다.

*충분.* $a^n = e$라 하자. 군 준동형의 (7)(ii)에 의해 각 정수 $k$에 $a^k$를 대응시키는 $\gamma : \mathbb{Z} \to G$는 $(\mathbb{Z}, +)$에서 $G$로의 준동형이다. 정수 $k$, $l$이 $k \equiv l \pmod n$이면 $k - l = nc$인 정수 $c$가 있고, [[laws-of-exponents|지수법칙]]의 (1)과 (2), 군의 거듭제곱의 (3)에 의해
$$
\begin{aligned}
a^k &= a^{l + nc} = a^l a^{nc} \\
&= a^l (a^n)^c = a^l e^c \\
&= a^l e = a^l
\end{aligned}
$$
이다. 곧 $\gamma$는 법 $n$ 합동과 호환되므로 [[operation-on-equivalence-classes|동치류 위의 연산]]의 (1)에 의해 함수 $\psi : \mathbb{Z}_n \to G$로서 모든 정수 $k$에서 $\psi([k]) = a^k$인 것이 정확히 하나 있다. [[integers-modulo-n|법 n의 정수]]의 (2)와 지수법칙의 (1)에 의해
$$
\begin{aligned}
\psi([k] + [l]) &= \psi([k + l]) = a^{k + l} \\
&= a^k a^l = \psi([k])\psi([l])
\end{aligned}
$$
이므로 $\psi$는 준동형이고, $\psi([1]) = a^1 = a$이다.

**(2)** 두 개이다. 자명한 준동형과, 각 $[k]$를 $[2k]$로 보내는 준동형이다. (1)을 $n = 6$, $G = (\mathbb{Z}_4, +)$에 쓰면, 준동형은 $6 \cdot a = [0]$인 $a \in \mathbb{Z}_4$와 하나씩 짝지어지고 $\psi([k]) = k \cdot a$이다. 법 n의 정수의 (1)에 의해 $a$는 $[0]$, $[1]$, $[2]$, $[3]$ 가운데 하나이고, 군의 거듭제곱의 (7)에 의해 $6 \cdot [r] = [6r]$이다.
$$
\begin{aligned}
6 \cdot [0] &= [0], \\
6 \cdot [1] &= [6] = [2], \\
6 \cdot [2] &= [12] = [0], \\
6 \cdot [3] &= [18] = [2]
\end{aligned}
$$
($6 - 2$, $12$, $18 - 2$가 $4$의 배수)이고, $[2] \ne [0]$이므로 조건을 만족하는 것은 $a = [0]$과 $a = [2]$이다. $a = [0]$이면 $\psi([k]) = k \cdot [0] = [0]$(군의 거듭제곱의 (3))이므로 자명한 준동형이고, $a = [2]$이면 $\psi([k]) = k \cdot [2] = [2k]$이다. 두 준동형은 $[1]$에서의 값이 다르므로 서로 다르다.

**(3)** $\psi$가 $(\mathbb{Z}_m, +)$에서 $(\mathbb{Z}_n, +)$로의 준동형이고 $b = \psi([1])$이라 하자. [[order-of-an-element|원소의 위수]]의 (7)에 의해 $\operatorname{ord}([1]) = m$이므로, 문제 3의 1에 의해 $b$의 위수는 유한하고 $\operatorname{ord}(b) \mid m$이다. 또 [[number-groups|수로 이루어진 군]]의 (4)에 의해 $(\mathbb{Z}_n, +)$는 원소가 $n$개인 유한군이므로 [[order-divides-group-order|원소의 위수는 군의 위수를 나눈다]]의 (1)에 의해 $\operatorname{ord}(b) \mid n$이다. 곧 $\operatorname{ord}(b)$는 $m$과 $n$의 양의 공약수이므로 [[greatest-common-divisor|최대공약수]]의 정의의 2에 의해 $\operatorname{ord}(b) \le \gcd(m, n) = 1$이다. $\operatorname{ord}(b)$는 자연수이므로 [[prime-number|소수]]의 (Z1)에 의해 $1 \le \operatorname{ord}(b)$이고, [[well-ordering-principle|정렬 원리]]의 (L2)에 의해 $\operatorname{ord}(b) = 1$이다. 원소의 위수의 (1)에 의해 $b = [0]$이고, (1)에 의해 모든 $k$에서 $\psi([k]) = k \cdot [0] = [0]$이다. 곧 $\psi$는 자명한 준동형이다. 자명한 준동형이 준동형이라는 것은 군 준동형의 (4)이다. 예를 들어 $(\mathbb{Z}_3, +)$에서 $(\mathbb{Z}_4, +)$로의 준동형은 자명한 것뿐이다.
:::

:::exercise[두 무한 아벨군 (ℝ, +)와 (ℝ − {0}, ·)]
$(\mathbb{R}, +)$와 $(\mathbb{R} - \{0\}, \cdot)$는 둘 다 무한군이고 아벨군이다. 두 군이 동형이 아님을 보여라.
:::

:::solution
두 군이 무한군이고 아벨군이라는 것은 [[number-groups|수로 이루어진 군]]의 (2)와 (3)이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의한다.

두 군이 동형이라고 하자. 그러면 [[group-isomorphism|군의 동형]]의 (2)의 대칭에 의해 $(\mathbb{R} - \{0\}, \cdot)$에서 $(\mathbb{R}, +)$로의 동형사상 $\varphi$가 있다. $(\mathbb{R} - \{0\}, \cdot)$의 항등원은 $1$이고, (K12)(iii)과 (K4)에 의해 $(-1)(-1) = 1 \cdot 1 = 1$이다. [[power-in-a-group|군의 거듭제곱]]의 (1)에 의해 이 군에서 $(-1)^2 = (-1)(-1) = 1$이므로, 군의 동형의 (3)(v)를 $n = 2$에 쓰면 $(\mathbb{R}, +)$에서 $2 \cdot \varphi(-1) = 0$이다. 군의 거듭제곱의 (4)에 의해 $2 \cdot x = 1 \cdot x + x = x + x$이므로 $x = \varphi(-1)$은 $x + x = 0$을 만족한다.

그런데 실수 $x$가 $x + x = 0$이면 (K4), (K1), (K3)과 (K7)의 $1 + 1 = 2$에 의해
$$
\begin{aligned}
0 &= x + x = x \cdot 1 + x \cdot 1 \\
&= x(1 + 1) = x \cdot 2
\end{aligned}
$$
이고, (K7)에 의해 $2 \ne 0$이므로 (K10)에 의해 $x = 0$이다. 따라서 $\varphi(-1) = 0$이다. 한편 [[group-homomorphism|군 준동형]]의 (1)에 의해 $\varphi$는 항등원 $1$을 $(\mathbb{R}, +)$의 항등원 $0$으로 보내므로 $\varphi(1) = 0 = \varphi(-1)$이다. $\varphi$는 단사이므로 $-1 = 1$이어야 하는데, (K7)에 의해 정수 사이의 계산 $-1 \ne 1$은 실수로서도 성립한다. 모순이므로 두 군은 동형이 아니다.

곧 $(\mathbb{R} - \{0\}, \cdot)$에는 항등원이 아니면서 제곱이 항등원인 원소 $-1$이 있지만, $(\mathbb{R}, +)$에는 $0$이 아니면서 두 배가 $0$인 원소가 없다. 군의 동형의 (3)(i)의 교환법칙과 (3)(iii)의 유한·무한만으로는 두 군을 구별할 수 없지만, (3)(v)가 구별해 준다.
:::
