---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "16.7 Exercises, 연습문제 6 (p.205) — 문제 'ℤ₆에서 ℤ₆으로 가는 세 함수'와 문제 '체에서 나가는 환 준동형'의 2와 같은 종류(ℤ/6ℤ 에서 ℤ/15ℤ 로의 환 준동형을 모두 구하기)"
  - ref: judson-abstract-algebra
    loc: "16.7 Exercises, 연습문제 4 (a) (p.204) — 문제 '원소가 모두 단위원의 정수배인 환의 아이디얼'의 2와 같은 종류(ℤ₁₈ 의 아이디얼을 모두 구하기)"
  - ref: judson-abstract-algebra
    loc: "16.4절, Example 16.37 (p.199) — 문제 '유한 몫환과 소 아이디얼'의 2와 같은 대상(ℤ₁₂ 의 짝수 동치류 전체가 소 아이디얼이고 극대 아이디얼이다)"
  - ref: judson-abstract-algebra
    loc: "16.3절, Remark 16.28 (p.197) — 문제 '가환이 아닌 환에서 한 원소의 오른쪽 배수 전체'와 같은 내용(한쪽 흡수만 만족하는 왼쪽·오른쪽 아이디얼. 출처는 예를 들지 않는다)"
added: 2026-11-26
---

:::exercise[ℤ₆에서 ℤ₆으로 가는 세 함수]
환 $\mathbb{Z}_6$에서 모든 정수 $k$에 대하여 $f([k]) = [3k]$, $g([k]) = [4k]$, $h([k]) = [2k]$인 함수 $f, g, h : \mathbb{Z}_6 \to \mathbb{Z}_6$을 생각한다.

1. 세 함수가 하나씩 정해짐을 보여라.
2. $f$와 $g$는 환 준동형이고 $h$는 환 준동형이 아님을 보여라.
3. $f$와 $g$의 핵과 상을 구하고, 환의 제1 동형 정리가 주는 두 동형을 적어라.
:::

:::solution
$\mathbb{Z}_6$의 두 동치류가 같은지는 [[congruence-modulo-n|합동]]의 정의와 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]으로 정하고, 합과 곱은 [[integers-modulo-n|법 n의 정수]]의 (2)이다.

**(1)** $t$가 정수이고 정수 $k$, $l$이 $k \equiv l \pmod 6$이면 $k - l = 6c$인 정수 $c$가 있고 $tk - tl = 6(tc)$이므로 $[tk] = [tl]$이다. 곧 각 정수 $k$에 $[tk]$를 대응시키는 함수 $\mathbb{Z} \to \mathbb{Z}_6$은 법 $6$ 합동과 호환되고, [[operation-on-equivalence-classes|동치류 위의 연산]]의 (1)에 의해 함수 $\mathbb{Z}_6 \to \mathbb{Z}_6$으로서 모든 $k$에서 $[k]$를 $[tk]$로 보내는 것이 정확히 하나 있다. $t = 3, 4, 2$가 $f$, $g$, $h$이다.

**(2)** 세 함수 모두 덧셈을 보존한다. $t$가 정수이면 $[tk + tl] = [tk] + [tl]$이므로 $[k] + [l] = [k + l]$의 값은 $[t(k + l)] = [tk] + [tl]$이다. 곱은 $[k][l] = [kl]$의 값 $[tkl]$과 두 값의 곱 $[tk][tl] = [ttkl]$을 비교한다. $t = 3$이면 $9kl - 3kl = 6kl$, $t = 4$이면 $16kl - 4kl = 6(2kl)$이므로 두 경우 모두 같고, [[ring-homomorphism|환 준동형]]의 정의에 의해 $f$와 $g$는 환 준동형이다. $t = 2$이면 $h([1][1]) = h([1]) = [2]$이고 $h([1])h([1]) = [4]$이며, 법 n의 정수의 (1)에 의해 $[2] \ne [4]$이므로 $h$는 곱셈을 보존하지 않고 환 준동형이 아니다.

**(3)** *$f$의 핵.* $f([k]) = [0]$인 것은 정확히 $3k = 6c$인 정수 $c$가 있을 때이다. 그러면 $k = 3k - 2k = 6c - 2k = 2(3c - k)$이고, 거꾸로 $k = 2c$이면 $3k = 6c$이다. 법 n의 정수의 (1)에 의해 $\mathbb{Z}_6 = \{[0], [1], \dots, [5]\}$이고, $0$부터 $5$까지에서 짝수는 $0$, $2$, $4$이므로([[even-and-odd|짝수와 홀수]]에서 받아들인 사실: $1$, $3$, $5$는 $2a + 1$ 꼴의 홀수) $\operatorname{Ker} f = \{[0], [2], [4]\}$이다.

*$f$의 상.* $[0], \dots, [5]$의 값은 차례로 $[0]$, $[3]$, $[6] = [0]$, $[9] = [3]$, $[12] = [0]$, $[15] = [3]$이므로 $f(\mathbb{Z}_6) = \{[0], [3]\}$이다.

*$g$의 핵.* $g([k]) = [0]$인 것은 정확히 $4k = 6c$인 정수 $c$가 있을 때이다. 그러면 $k = 6c - 3k = 3(2c - k)$이고, 거꾸로 $k = 3c$이면 $4k = 6(2c)$이다. $0$부터 $5$까지에서 $3$의 배수는 $0$과 $3$이므로($1$, $2$, $4$, $5$는 $3c$와 같지 않다. $c \le 0$이면 $3c \le 0$, $c = 1$이면 $3$, $c \ge 2$이면 $3c \ge 6$) $\operatorname{Ker} g = \{[0], [3]\}$이다.

*$g$의 상.* $[0], \dots, [5]$의 값은 $[0]$, $[4]$, $[8] = [2]$, $[12] = [0]$, $[16] = [4]$, $[20] = [2]$이므로 $g(\mathbb{Z}_6) = \{[0], [2], [4]\}$이다.

[[first-isomorphism-theorem-for-rings|환의 제1 동형 정리]]의 (1)에 의해 환으로서
$$
\begin{aligned}
\mathbb{Z}_6/\{[0], [2], [4]\} &\cong \{[0], [3]\}, \\
\mathbb{Z}_6/\{[0], [3]\} &\cong \{[0], [2], [4]\}
\end{aligned}
$$
이고, 오른쪽은 $\mathbb{Z}_6$의 두 연산을 제한한 환이다. $f([1]) = [3]$은 $\mathbb{Z}_6$의 단위원 $[1]$과 다르지만, 환 준동형의 (5)대로 상 $\{[0], [3]\}$의 곱셈의 항등원이다.
:::

:::exercise[전사인 환 준동형과 아이디얼의 상]
$\varphi : R \to R'$이 환 준동형이고 $I$가 $R$의 아이디얼이라 하자.

1. $\varphi : R \to R'$이 전사이면 $\varphi(I)$가 $R'$의 아이디얼임을 보여라.
2. 전사라는 가정을 빼면 1의 결론이 깨지는 예를 들어라.
:::

:::solution
**(1)** [[ring-homomorphism|환 준동형]]의 (1)에 의해 $\varphi$는 덧셈군 $(R, +)$에서 $(R', +)$로의 군 준동형이다. [[ideal|아이디얼]]의 정의에 의해 $I$는 $(R, +)$의 부분군이므로, [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (4)에 의해 $\varphi(I)$는 $(R', +)$의 부분군이다.

$r' \in R'$이고 $y \in \varphi(I)$라 하자. $y = \varphi(a)$인 $a \in I$가 있고, $\varphi$가 전사이므로 $r' = \varphi(r)$인 $r \in R$가 있다. 환 준동형의 정의에 의해
$$
\begin{aligned}
r'y &= \varphi(r)\varphi(a) = \varphi(ra), \\
yr' &= \varphi(a)\varphi(r) = \varphi(ar)
\end{aligned}
$$
이고, $I$의 왼쪽 흡수와 오른쪽 흡수에 의해 $ra, ar \in I$이므로 $r'y, yr' \in \varphi(I)$이다. 따라서 $\varphi(I)$는 $R'$의 아이디얼이다.

**(2)** [[subring|부분환]]의 (4)에 의해 $\mathbb{Z}$는 환 $\mathbb{R}$의 부분환이고, 환 준동형의 (7)(ii)에 의해 포함 함수 $\iota : \mathbb{Z} \to \mathbb{R}$는 환 준동형이다. 아이디얼의 (3)에 의해 $\mathbb{Z}$는 환 $\mathbb{Z}$의 아이디얼이지만, $\iota(\mathbb{Z}) = \mathbb{Z}$는 아이디얼의 (2)에 의해 환 $\mathbb{R}$의 아이디얼이 아니다. $\iota$는 전사가 아니다($2^{-1} \notin \mathbb{Z}$, 아이디얼의 (2)).
:::

:::exercise[원소가 모두 단위원의 정수배인 환의 아이디얼]
1. $R$이 단위원 $1$을 갖는 환이고, $R$의 모든 원소가 어떤 정수 $n$에 대한 $n \cdot 1$ 꼴이라 하자. $R$의 부분집합 $I$가 $R$의 아이디얼인 것은 정확히 $I$가 덧셈군 $(R, +)$의 부분군일 때임을 보여라.
2. 환 $\mathbb{Z}_{12}$의 아이디얼을 모두 구하라.
:::

:::solution
정수배 $n \cdot a$는 [[ring|환]]의 것, 곧 덧셈군에서의 [[power-in-a-group|군의 거듭제곱]]이다.

**(1)** 아이디얼은 정의에 의해 덧셈군의 부분군이다([[ideal|아이디얼]]). 거꾸로 $I$가 $(R, +)$의 부분군이라 하자. $r \in R$이고 $a \in I$이면 가정에 의해 $r = n \cdot 1$인 정수 $n$이 있고, [[ring-basic-properties|환의 기본 성질]]의 (5)에 의해
$$
\begin{aligned}
ra &= (n \cdot 1)a = n \cdot (1a) = n \cdot a, \\
ar &= a(n \cdot 1) = n \cdot (a1) = n \cdot a
\end{aligned}
$$
이다. 군의 거듭제곱의 (5)를 덧셈군 $(R, +)$의 부분군 $I$에 쓰면 $n \cdot a \in I$이다. 왼쪽 흡수와 오른쪽 흡수가 성립하므로 $I$는 아이디얼이다.

**(2)** [[ring-examples|환의 예]]의 (3)에 의해 $\mathbb{Z}_{12}$는 단위원 $[1]$을 갖는 환이고, 군의 거듭제곱의 (7)에 의해 모든 $[k]$는 $k \cdot [1]$이다. (1)에 의해 $\mathbb{Z}_{12}$의 아이디얼은 정확히 $(\mathbb{Z}_{12}, +)$의 부분군이다. [[cyclic-subgroup|순환 부분군]]의 (5)에 의해 $(\mathbb{Z}_{12}, +)$는 $[1]$이 생성하는 순환군이고 [[number-groups|수로 이루어진 군]]의 (4)에 의해 원소가 $12$개이므로, [[subgroups-of-finite-cyclic-group|유한 순환군의 부분군]]의 (5)와 (2)에 의해 부분군은 $12$의 양의 약수 $d$마다 하나씩 있는 $H_d = \langle n' \cdot [1] \rangle = \langle [n'] \rangle$($12 = d \cdot n'$)뿐이다.

$12$의 양의 약수는 [[prime-number|소수]]의 진술에 의해 $1$ 이상 $12$ 이하이고, $12 = 1 \cdot 12 = 2 \cdot 6 = 3 \cdot 4$이며, $12 = 5 \cdot 2 + 2 = 7 \cdot 1 + 5 = 8 \cdot 1 + 4 = 9 \cdot 1 + 3 = 10 \cdot 1 + 2 = 11 \cdot 1 + 1$에서 나머지가 $0$이 아니므로 [[division-theorem|나눗셈 정리]]의 유일성에 의해 $5$, $7$, $8$, $9$, $10$, $11$은 약수가 아니다. 곧 약수는 $1, 2, 3, 4, 6, 12$이다. 각 $H_d$의 원소는 [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)과 [[order-of-a-power|거듭제곱의 위수]]의 (4)(원소 $[n']$의 위수가 $d$)에 의해 $0 \cdot [n'], 1 \cdot [n'], \dots, (d - 1) \cdot [n']$이다. 따라서 아이디얼은 다음 여섯 개이다.
$$
\begin{aligned}
H_1 &= \{[0]\}, \\
H_2 &= \{[0], [6]\}, \\
H_3 &= \{[0], [4], [8]\}, \\
H_4 &= \{[0], [3], [6], [9]\}, \\
H_6 &= \{[0], [2], [4], [6], [8], [10]\}, \\
H_{12} &= \mathbb{Z}_{12}
\end{aligned}
$$
:::

:::exercise[체에서 나가는 환 준동형]
1. $F$가 체이고 $R'$이 환이며 $\varphi : F \to R'$이 환 준동형이면, $\varphi$는 영 준동형이거나 단사임을 보여라.
2. 모든 정수 $k$에 대하여 $[k] \in \mathbb{Z}_5$를 $[6k] \in \mathbb{Z}_{10}$으로 보내는 함수 $\varphi : \mathbb{Z}_5 \to \mathbb{Z}_{10}$이 하나 정해지고 단사인 환 준동형임을 보여라.
:::

:::solution
**(1)** [[ideal|아이디얼]]의 (5)에 의해 $\operatorname{Ker} \varphi$는 $F$의 아이디얼이다. [[maximal-and-prime-ideals|극대 아이디얼과 소 아이디얼]]의 (5)에 의해 체 $F$의 아이디얼은 $\{0\}$과 $F$뿐이다. $\operatorname{Ker} \varphi = F$이면 모든 값이 $0$이므로 $\varphi$는 영 준동형이고, $\operatorname{Ker} \varphi = \{0\}$이면 [[ring-homomorphism|환 준동형]]의 (2)에 의해 $\varphi$는 단사이다.

**(2)** *함수.* 정수 $k$, $l$이 $k \equiv l \pmod 5$이면 $k - l = 5c$이고 $6k - 6l = 10(3c)$이므로 $\mathbb{Z}_{10}$에서 $[6k] = [6l]$이다([[congruence-modulo-n|합동]], [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]). [[operation-on-equivalence-classes|동치류 위의 연산]]의 (1)에 의해 그런 함수 $\varphi$가 정확히 하나 있다.

*환 준동형.* [[integers-modulo-n|법 n의 정수]]의 (2)에 의해 $\varphi([k] + [l]) = [6k + 6l] = [6k] + [6l]$이다. 곱은 $\varphi([k][l]) = [6kl]$이고 $\varphi([k])\varphi([l]) = [36kl]$이며 $36kl - 6kl = 10(3kl)$이므로 같다.

*단사.* $5$의 양의 약수는 $1 \le d \le 5$인데([[prime-number|소수]]의 진술) $5 = 2 \cdot 2 + 1 = 3 \cdot 1 + 2 = 4 \cdot 1 + 1$이므로 [[division-theorem|나눗셈 정리]]의 유일성에 의해 $1$과 $5$뿐이고, $5$는 소수이다. [[finite-integral-domain-is-a-field|유한 정역은 체이다]]의 (3)에 의해 $\mathbb{Z}_5$는 체이다. $\varphi([1]) = [6]$이고 법 n의 정수의 (1)에 의해 $[6] \ne [0]$이므로 $\varphi$는 영 준동형이 아니고, (1)에 의해 단사이다. 실제로 $[0], \dots, [4]$의 값은 $[0]$, $[6]$, $[12] = [2]$, $[18] = [8]$, $[24] = [4]$로 서로 다르다. $\varphi([1]) = [6]$은 $\mathbb{Z}_{10}$의 단위원 $[1]$이 아니다.
:::

:::exercise[유한 몫환과 소 아이디얼]
$R$이 단위원을 갖는 가환환이라 하자.

1. $P$가 $R$의 소 아이디얼이고 $R/P$가 유한집합이면 $P$는 극대 아이디얼임을 보여라.
2. $n \ge 2$인 자연수 $n$에 대하여 $\mathbb{Z}_n$의 소 아이디얼은 모두 극대 아이디얼임을 보여라.
3. 1에서 $R/P$가 유한집합이라는 가정을 빼면 결론이 깨지는 예를 들어라.
:::

:::solution
**(1)** [[maximal-and-prime-ideals|극대 아이디얼과 소 아이디얼]]의 (3)에 의해 $R/P$는 정역이다. $R/P$가 유한집합이므로 [[finite-integral-domain-is-a-field|유한 정역은 체이다]]의 (1)에 의해 $R/P$는 체이고, 극대 아이디얼과 소 아이디얼의 (2)에 의해 $P$는 극대 아이디얼이다.

**(2)** [[ring-examples|환의 예]]의 (3)에 의해 $\mathbb{Z}_n$은 단위원을 갖는 가환환이다. $P$가 $\mathbb{Z}_n$의 소 아이디얼이라 하자. [[ideal|아이디얼]]의 정의에 의해 $P$는 덧셈군 $(\mathbb{Z}_n, +)$의 부분군이고, [[number-groups|수로 이루어진 군]]의 (4)에 의해 이 군은 유한군이므로 [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 잉여류 전체 $\mathbb{Z}_n/P$는 유한집합이다. 이 집합이 몫환 $\mathbb{Z}_n/P$의 집합이므로([[quotient-ring|몫환]]의 진술), 1에 의해 $P$는 극대 아이디얼이다.

**(3)** 극대 아이디얼과 소 아이디얼의 (7)(ii)에 의해 $\{0\}$은 환 $\mathbb{Z}$의 소 아이디얼이지만 극대 아이디얼이 아니다. 이때 몫환 $\mathbb{Z}/\{0\}$은 유한집합이 아니다. 유한집합이라면 1에 의해 $\{0\}$이 극대 아이디얼이 되기 때문이다.
:::

:::exercise[가환이 아닌 환에서 한 원소의 오른쪽 배수 전체]
환 $M_2(\mathbb{R})$에서 $E$를 $(1, 1)$ 성분이 $1$이고 나머지 성분이 $0$인 행렬이라 하고, $J = \{EA : A \in M_2(\mathbb{R})\}$라 하자.

1. $J$는 덧셈군의 부분군이고 오른쪽 흡수를 만족함을 보여라.
2. $J$는 $M_2(\mathbb{R})$의 아이디얼이 아님을 보여라. 이것은 아이디얼의 (6)(i)에서 가환이라는 가정을 뺄 수 없음을 보여 준다.
:::

:::solution
환 $M_2(\mathbb{R})$는 [[ring-examples|환의 예]]의 (5)의 것이고, 곱의 성분은 [[matrix-product|행렬의 곱]]의 (2)로 $(AB)_{j,k} = a_{j,1}b_{1,k} + a_{j,2}b_{2,k}$이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 (K4), (K9)에 의한다.

**(1)** [[ring|환]]의 정의에 의해 $M_2(\mathbb{R})$의 곱셈은 결합법칙과 분배법칙을 만족한다. $E = EI_2$이므로([[matrix-product-properties|행렬 곱의 성질]]의 (4)) $E \in J$이고 $J \ne \emptyset$이다. $EA, EB \in J$이면 [[ring-basic-properties|환의 기본 성질]]의 (4)에 의해 $EA - EB = E(A - B) \in J$이므로, [[subgroup-criteria|부분군 판정법]]의 (3)에 의해 $J$는 덧셈군의 부분군이다. $EA \in J$이고 $C \in M_2(\mathbb{R})$이면 결합법칙에 의해 $(EA)C = E(AC) \in J$이므로 오른쪽 흡수가 성립한다.

**(2)** $A \in M_2(\mathbb{R})$이면 $E$의 $(2, 1)$, $(2, 2)$ 성분이 $0$이므로 $(EA)_{2,1} = 0 \cdot a_{1,1} + 0 \cdot a_{2,1} = 0$이다. 곧 $J$의 모든 원소는 $(2, 1)$ 성분이 $0$이다. $F$를 $(2, 1)$ 성분이 $1$이고 나머지 성분이 $0$인 행렬이라 하면 $FE$의 성분은
$$
\begin{aligned}
(1, 1)&: 0 \cdot 1 + 0 \cdot 0 = 0, \\
(1, 2)&: 0 \cdot 0 + 0 \cdot 0 = 0, \\
(2, 1)&: 1 \cdot 1 + 0 \cdot 0 = 1, \\
(2, 2)&: 1 \cdot 0 + 0 \cdot 0 = 0
\end{aligned}
$$
이다. $FE$의 $(2, 1)$ 성분은 $1 \ne 0$이므로 $FE \notin J$이다. $E \in J$에 왼쪽에서 $F$를 곱한 것이 $J$에 없으므로 왼쪽 흡수가 깨지고, [[ideal|아이디얼]]의 정의에 의해 $J$는 아이디얼이 아니다.

아이디얼의 (6)(i)은 가환환 $R$에서 $aR$이 아이디얼이라고 말한다. $M_2(\mathbb{R})$은 가환환이 아니고(환의 예의 (5)), 여기서 $J = EM_2(\mathbb{R})$은 오른쪽 흡수만 만족한다.
:::
