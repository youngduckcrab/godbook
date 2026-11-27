---
title: 호환과 길이 p인 순환치환
title_en: A Transposition and a p-Cycle
aliases: [호환과 p-순환치환을 포함하는 부분군, 위수가 p인 치환, transposition and p-cycle, subgroup containing a transposition and a p-cycle]
kind: theorem
field: group-theory
msc: ["20B30", "20B35"]
level: undergrad
summary: "원소가 소수 p개인 집합 X에서 위수가 p인 치환은 길이 p인 순환치환이고, 호환 하나와 길이 p인 순환치환 하나를 포함하는 S_X의 부분군은 S_X 전체이다. 원소의 개수가 p로 나누어지는 부분군에는 길이 p인 순환치환이 있다."
requires: [set, subset, function, injective-surjective-bijective, finite-set, number-of-elements-is-unique, subset-of-finite-set, prime-number, divisibility, greatest-common-divisor, well-ordering-principle, mathematical-induction, group, subgroup, subgroup-criteria, power-in-a-group, laws-of-exponents, order-of-an-element, order-of-a-power, symmetric-group, support-of-a-permutation, orbits-of-a-permutation, cycle-permutation, conjugate-of-a-cycle, product-of-transpositions, finite-product-in-a-group, cauchy-theorem, order-of-symmetric-group, factorial, alternating-group]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "23.3절 Solvability by Radicals 의 'Insolvability of the Quintic', Lemma 23.31 (p.305); 5.4 Exercises, 연습문제 26 (p.72)"
    checked: original
    note: "(2)는 출처 Lemma 23.31(p.305, 'p 가 소수이면 호환 하나와 길이 p 인 순환치환 하나를 포함하는 S_p 의 부분군은 S_p 전체')를 원소가 p 개인 임의의 집합 X 에서 진술한 것이다. 출처의 증명은 'σ = (1 2) 라 가정해도 된다'와 'μ = τⁿ = (1, 2, i₃, …, i_p) 라 가정해도 된다'로 번호를 다시 매기고, τⁿ 이 길이 p 인 순환치환이라는 데 연습문제 5.4.13 을 가리키며(그 연습문제는 서로소인 순환치환의 곱의 위수가 길이의 최소공배수라는 것이다), 마지막에 '호환들이 S_p 를 생성한다'로 끝낸다. 이 항목은 번호를 다시 매기지 않고 μ 의 궤도로 X 의 원소에 이름 c₀, …, c_{p−1} 을 붙이며, μ 가 길이 p 인 순환치환이라는 것은 (1)로, 생성 대신 '모든 호환이 H 에 속한다'와 product-of-transpositions (2)로 보인다. 출처는 (c_j c_{j+1}) 꼴 대신 (1 i_k) 꼴의 호환을 먼저 얻고 (1 j)(1 i)(1 j) = (i j) 를 쓴다. 출처 연습문제 5.4.26 (b)(c)(p.72)는 Sₙ 의 모든 원소가 (1 2), (2 3), …, (n − 1, n) 의 곱, 그리고 (1 2), (1 2 … n) 의 곱으로 쓰인다는 것을 묻는데, 이것은 (2)의 증명에서 이웃한 호환 (c_j c_{j+1}) 을 거치는 것과 같은 발상이다. (1)과 (3)은 출처 Example 23.33(p.306–307)이 'G(K/Q) 는 길이 5 인 순환치환을 포함한다'고 적는 단계에 쓰이는 사실을 이 사이트가 진술로 올린 것이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(교환자·S₄ 예의 계산 대입, 출처 13.4절 연습문제 대조). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$p$가 [[prime-number|소수]]이고 $X$가 원소를 $p$개 갖는 [[finite-set|유한집합]]이라 하자. $S_X$와 그 항등치환 $i_X$는 [[symmetric-group|대칭군]], 순환치환과 호환은 [[cycle-permutation|순환치환]], 받침 $\operatorname{supp}$은 [[support-of-a-permutation|치환의 받침]], 원소의 위수 $\operatorname{ord}$는 [[order-of-an-element|원소의 위수]], 부분군은 [[subgroup|부분군]]의 것이다.

1. (위수가 $p$인 치환) $\sigma \in S_X$의 위수가 유한하고 $\operatorname{ord}(\sigma) = p$이면 $\sigma$는 길이 $p$인 순환치환이고 $\operatorname{supp} \sigma = X$이다. 거꾸로 길이 $p$인 순환치환의 위수는 $p$이다.
2. (호환과 길이 $p$인 순환치환) $H$가 $S_X$의 부분군이고, 호환 하나와 길이 $p$인 순환치환 하나를 포함하면 $H = S_X$이다.
3. (원소의 개수가 $p$로 나누어지는 부분군) $H$가 $S_X$의 부분군이고 $p \mid |H|$이면 $H$에 길이 $p$인 순환치환이 있다. 따라서 $p \mid |H|$이고 $H$가 호환 하나를 포함하면 $H = S_X$이다.
:::

:::english
Let $p$ be a prime and $X$ a finite set with $p$ elements. $S_X$ and its identity permutation $i_X$, cycles and transpositions, the support $\operatorname{supp}$, the order $\operatorname{ord}$ of an element, and subgroups are as in the corresponding entries.

1. (Permutations of order $p$) If $\sigma \in S_X$ has finite order and $\operatorname{ord}(\sigma) = p$, then $\sigma$ is a cycle of length $p$ and $\operatorname{supp} \sigma = X$. Conversely, a cycle of length $p$ has order $p$.
2. (A transposition and a cycle of length $p$) If $H$ is a subgroup of $S_X$ containing a transposition and a cycle of length $p$, then $H = S_X$.
3. (Subgroups whose order is divisible by $p$) If $H$ is a subgroup of $S_X$ and $p \mid |H|$, then $H$ contains a cycle of length $p$. Hence if $p \mid |H|$ and $H$ contains a transposition, then $H = S_X$.
:::

## 직관

원소가 $p$개인 집합의 길이 $p$인 순환치환은 모든 원소를 한 바퀴로 잇습니다. 그 거듭제곱 $\mu = \sigma^r$($1 \le r \le p - 1$)도 $p$가 소수이므로 다시 한 바퀴짜리 순환치환이 되어, 원소를 $\mu$가 보내는 순서대로 $c_0, c_1, \dots, c_{p-1}$이라 부를 수 있습니다. 호환 $(a\ b)$가 있으면 $\mu$를 $a$를 $b$로 보내는 거듭제곱으로 골라 $a = c_0$, $b = c_1$이 되게 할 수 있습니다. 그러면 $(c_0\ c_1)$을 $\mu$로 켤레하여 이웃한 호환 $(c_j\ c_{j+1})$을 모두 얻고, 이웃한 호환을 이어 붙여 모든 호환을, 호환을 곱해 모든 치환을 얻습니다.

둥글게 앉은 $p$명이 자리를 바꾸는 일에 비유할 수 있습니다. 한 칸씩 도는 것(순환치환)과 이웃한 두 사람의 맞바꿈(호환) 두 가지 동작만으로 어떤 자리 배치든 만들 수 있습니다. 비유에서 "이웃"이 되는 것이 $\mu$의 순서로 붙인 이름 $c_j$, $c_{j+1}$입니다. 맞바꾸는 두 사람이 처음부터 이웃이 아니면 한 칸씩 도는 대신 $r$칸씩 도는 $\mu$로 바꿔 이웃으로 만드는데, 이것이 $p$가 소수라는 가정이 쓰이는 곳입니다. 원소가 $4$개이면 두 칸씩 돌아 마주 앉은 두 사람을 이웃으로 만들 수 없고, 실제로 결론이 깨질 수 있습니다(아래 반례 '원소가 $4$개인 집합').

## 증명

:::idea
(1)은 $\sigma^p = i_X$이므로 궤도의 원소의 개수가 $p$의 약수, 곧 $1$이거나 $p$라는 것에서 나온다. (2)는 위 직관대로 $\mu = \sigma^r$의 궤도로 이름을 붙이고, 이웃한 호환을 켤레로, 모든 호환을 귀납으로 얻는다. (3)은 [[cauchy-theorem|코시 정리]]와 (1)이다.
:::

:::hint
(1)에서 $\sigma \ne i_X$이므로 $\sigma(x) \ne x$인 $x$가 있습니다. $O_\sigma(x)$의 원소의 개수는 $p$를 나눕니다.
:::

:::hint
(2)에서 $\operatorname{ord}(\sigma^r) = p$인 것은 $\gcd(r, p) = 1$이기 때문입니다. $\mu^j(c_0\ c_1)\mu^{-j}$를 [[conjugate-of-a-cycle|순환치환의 켤레]]의 (1)로 계산하십시오.
:::

:::proof
궤도 $O_\sigma(x)$와 그 성질은 [[orbits-of-a-permutation|치환의 궤도]]의 것이다. 정수의 부등식은 [[prime-number|소수]]의 진술의 (Z1)과 [[well-ordering-principle|정렬 원리]]의 진술의 (Z5)–(Z7), (L1)을 쓴다.

**(1)** 위수의 정의에 의해 $\sigma^p = i_X$이고, [[order-of-an-element|원소의 위수]]의 (1)에 의해 $p \ne 1$이므로 $\sigma \ne i_X$이다. [[support-of-a-permutation|치환의 받침]]의 (1)에 의해 $\operatorname{supp} \sigma \ne \emptyset$이므로 $\sigma(x) \ne x$인 $x \in X$가 있다. $O = O_\sigma(x)$로 두자. $X$가 유한집합이므로 치환의 궤도의 (5)에 의해 $O$는 유한집합이고, $k = |O|$는 같은 항목의 (6)에 의해 자연수이다. $\sigma^p(x) = i_X(x) = x$이므로 (6)의 (i)에 의해 $k \mid p$이다. $p$는 소수이므로 $k = 1$이거나 $k = p$이다. 치환의 궤도의 (4)에 의해 $O$는 서로 다른 두 원소 $x$, $\sigma(x)$를 가지므로 $k \ne 1$이고, 따라서 $k = p$이다. $O \subseteq X$이고 $|O| = p = |X|$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $O = X$이다.

[[cycle-permutation|순환치환]]의 (7)을 $\rho = \sigma$, $x$, $O = X$, $m = p \ge 2$에 쓰자($p \ge 2$는 $p$가 소수이므로 $p \ne 1$이고 (Z1)에 의해 $p \ge 1$인 데서 나온다). $\sigma_O$는 $y \in O$이면 $\sigma(y)$를 값으로 갖는 함수인데 $O = X$이므로 $\sigma_O = \sigma$이다. 따라서 $\sigma = (x\ \ \sigma(x)\ \ \cdots\ \ \sigma^{p-1}(x))$는 길이 $p$인 순환치환이고 $\operatorname{supp} \sigma = O = X$이다. 거꾸로 길이 $p$인 순환치환의 위수가 $p$라는 것은 순환치환의 (4)이다.

**(2)** $H$가 호환 $\tau$와 길이 $p$인 순환치환 $\sigma$를 포함한다고 하자. 순환치환의 정의에 의해 $\tau = (a\ b)$인 서로 다른 $a, b \in X$가 있다.

*$a$를 $b$로 보내는 거듭제곱.* 순환치환의 (2)에 의해 $\operatorname{supp} \sigma$는 $X$의 부분집합이고 원소가 $p$개이므로 유한집합의 부분집합의 (2)에 의해 $\operatorname{supp} \sigma = X$이고, 순환치환의 (4)에 의해 $O_\sigma(a) = \operatorname{supp} \sigma = X$이다. 치환의 궤도의 (6)의 (ii)에 의해 $X = \{\sigma^s(a) : s \in \mathbb{Z},\ 0 \le s \le p - 1\}$이다. $b \in X$이고 $b \ne a = \sigma^0(a)$이므로 $b = \sigma^r(a)$이고 $1 \le r \le p - 1$인 정수 $r$이 있다.

*$\mu = \sigma^r$은 길이 $p$인 순환치환이다.* [[power-in-a-group|군의 거듭제곱]]의 (5)에 의해 $\mu \in H$이다. $d = \gcd(r, p)$는 [[greatest-common-divisor|최대공약수]]의 (i)에 의해 $d \ge 1$이고 $d \mid p$이므로 $d = 1$이거나 $d = p$이다. $d = p$이면 $p \mid r$이고 $r \ge 1$이므로 소수의 진술에 의해 $p \le r \le p - 1$이 되어 어긋난다. 따라서 $d = 1$이다. 순환치환의 (4)에 의해 $\operatorname{ord}(\sigma) = p$이므로, [[order-of-a-power|거듭제곱의 위수]]의 (3)을 $n = p$, $k = r$, $d = 1$, $n' = p$에 쓰면 $\operatorname{ord}(\mu) = p$이다. (1)에 의해 $\mu$는 길이 $p$인 순환치환이고 $\operatorname{supp} \mu = X$이다.

*이름 붙이기.* 순환치환의 (4)에 의해 $O_\mu(a) = \operatorname{supp} \mu = X$이고, 그 원소의 개수는 $p$이다. $0 \le j \le p - 1$인 정수 $j$에서 $c_j = \mu^j(a)$로 두면 치환의 궤도의 (6)의 (ii)에 의해 $c_0, \dots, c_{p-1}$은 서로 다르고 $X = \{c_0, \dots, c_{p-1}\}$이며, (6)의 (iii)에 의해 $0 \le j \le p - 2$에서 $\mu(c_j) = c_{j+1}$이다. $c_0 = a$이고 $c_1 = \mu(a) = b$이므로 $\tau = (c_0\ c_1)$이다.

*이웃한 호환.* $0 \le j \le p - 2$라 하자. [[laws-of-exponents|지수법칙]]의 (1)에 의해 $\mu^j(c_0) = c_j$이고 $\mu^j(c_1) = \mu^j(\mu(a)) = \mu^{j+1}(a) = c_{j+1}$이다. [[conjugate-of-a-cycle|순환치환의 켤레]]의 (1)에 의해
$$
\mu^j (c_0\ c_1) (\mu^j)^{-1} = (c_j\ c_{j+1})
$$
이고, 군의 거듭제곱의 (5)와 [[subgroup-criteria|부분군 판정법]]의 (1)에 의해 왼쪽은 $H$에 속한다. 곧 $(c_j\ c_{j+1}) \in H$이다.

*모든 호환.* $0 \le s \le p - 2$인 정수 $s$를 하나 정하고, $j \ge s + 1$인 정수 $j$마다 명제 $R_j$를 "$j \le p - 1$이면 $(c_s\ c_j) \in H$이다"로 두어 [[mathematical-induction|수학적 귀납법]](시작점 $s + 1$)으로 보인다. $R_{s+1}$은 앞 단락이다. $R_j$에서 $R_{j+1}$: $j + 1 \le p - 1$이면 $s < j$이고 $j \le p - 2$이므로 앞 단락에 의해 $t = (c_j\ c_{j+1}) \in H$이다. $c_s$, $c_j$, $c_{j+1}$은 서로 다르므로 $t(c_s) = c_s$, $t(c_j) = c_{j+1}$이고, 순환치환의 켤레의 (1)과 순환치환의 (5)($t^{-1} = t$)에 의해
$$
t\,(c_s\ c_j)\,t^{-1} = (c_s\ c_{j+1})
$$
이다. $R_j$에 의해 $(c_s\ c_j) \in H$이므로 부분군 판정법의 (1)에 의해 $(c_s\ c_{j+1}) \in H$이다.

$S_X$의 호환 $(x\ y)$($x \ne y$)는 $x = c_s$, $y = c_j$이고 $s \ne j$인 $s, j$로 쓸 수 있다. $s < j$이면 위에서 $(x\ y) \in H$이고, $j < s$이면 순환치환의 (5)에 의해 $(x\ y) = (y\ x) = (c_j\ c_s) \in H$이다. 따라서 $S_X$의 모든 호환이 $H$에 속한다.

*모든 치환.* [[product-of-transpositions|호환의 곱]]의 (2)에 의해 모든 $\pi \in S_X$는 어떤 호환의 열의 곱이고, 그 열의 모든 항이 $H$에 속하므로 [[finite-product-in-a-group|군의 유한 곱]]의 (9)에 의해 $\pi \in H$이다. 따라서 $S_X \subseteq H \subseteq S_X$이고 $H = S_X$이다.

**(3)** [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (2)에 의해 $S_X$는 유한군이므로 부분군의 (8)에 의해 $H$는 유한군이다. [[cauchy-theorem|코시 정리]]의 (1)을 군 $H$에 쓰면 군 $H$에서 위수가 $p$인 $\sigma \in H$가 있고, 원소의 위수의 (9)에 의해 $S_X$에서도 $\operatorname{ord}(\sigma) = p$이다. (1)에 의해 $\sigma$는 길이 $p$인 순환치환이다. 둘째 문장은 이것과 (2)이다. $\blacksquare$
:::

## 예시와 반례

:::example[원소가 $5$개인 집합에서 이름 붙이기]
$X = \{1, 2, 3, 4, 5\}$, $\tau = (2\ 5)$, $\sigma = (1\ 2\ 3\ 4\ 5)$라 합시다. $\sigma$는 $2 \to 3 \to 4 \to 5$로 보내므로 $\sigma^3(2) = 5$이고, 증명의 $r$은 $3$입니다. $\mu = \sigma^3$은 각 원소를 세 칸 앞으로 보내 $2 \to 5 \to 3 \to 1 \to 4 \to 2$이므로 $\mu = (2\ 5\ 3\ 1\ 4)$이고, $c_0 = 2$, $c_1 = 5$, $c_2 = 3$, $c_3 = 1$, $c_4 = 4$입니다. 이웃한 호환은 $(2\ 5)$, $(5\ 3)$, $(3\ 1)$, $(1\ 4)$이고, 예를 들어 $\mu(2\ 5)\mu^{-1} = (\mu(2)\ \mu(5)) = (5\ 3)$입니다. (2)에 의해 $\tau$와 $\sigma$를 포함하는 $S_X$의 부분군은 $S_X$뿐입니다.
:::

:::counterexample[원소가 $4$개인 집합]
$X = \{1, 2, 3, 4\}$에서 $B_1 = \{1, 3\}$, $B_2 = \{2, 4\}$로 두고, $\sigma(B_1)$과 $\sigma(B_2)$가 각각 $B_1$이나 $B_2$인 $\sigma \in S_4$ 전체를 $H$라 합시다. $i \in H$이고, $\sigma, \pi \in H$이면 $(\sigma\pi)(B_k) = \sigma(\pi(B_k))$에서 $\pi(B_k)$가 $B_1$이나 $B_2$이므로 $\sigma\pi \in H$입니다. $S_4$는 유한군이므로 [[subgroup-criteria|부분군 판정법]]의 (4)에 의해 $H$는 $S_4$의 부분군입니다.

$(1\ 3)$은 $B_1$을 $B_1$로, $B_2$를 $B_2$로 보내고, $(1\ 2\ 3\ 4)$는 $B_1 = \{1, 3\}$을 $\{2, 4\} = B_2$로, $B_2$를 $\{3, 1\} = B_1$로 보내므로 둘 다 $H$에 속합니다. 그러나 $(1\ 2)$는 $B_1$을 $\{2, 3\}$으로 보내므로 $H$에 속하지 않고, $H \ne S_4$입니다. $4$는 소수가 아니므로 (2)에 어긋나지 않습니다. 증명에서 깨지는 곳은 $\mu = \sigma^r$의 단계입니다. $(1\ 2\ 3\ 4)^r(1) = 3$인 $r$은 $r = 2$이고, $(1\ 2\ 3\ 4)^2 = (1\ 3)(2\ 4)$는 순환치환이 아닙니다.
:::

## 확인 질문

:::check[$X = \{1, 2, 3\}$에서 길이 $3$인 순환치환 하나를 포함하는 $S_X$의 부분군 $H$는 언제 $S_X$인가?]
$H$가 호환을 하나라도 포함할 때, 그리고 그때에만 $S_X$입니다. $3$은 소수이므로 호환을 포함하면 (2)에 의해 $H = S_X$이고, 거꾸로 $H = S_X$이면 호환 $(1\ 2)$가 $H$에 속합니다. 예를 들어 [[alternating-group|교대군]]의 (4)의 $A_3 = \{i, (1\ 2\ 3), (1\ 3\ 2)\}$는 길이 $3$인 순환치환을 포함하는 부분군이지만, 세 원소의 받침은 [[cycle-permutation|순환치환]]의 (2)와 [[support-of-a-permutation|치환의 받침]]의 (1)에 의해 원소가 $0$개이거나 $3$개여서 받침의 원소가 $2$개인 호환과 다르므로, $A_3$은 호환을 포함하지 않고 $S_3$이 아닙니다.
:::

:::check[원소가 $7$개인 집합 $X$에서 $|H| = 14$인 $S_X$의 부분군 $H$에 호환이 있으면 $H$는 무엇인가?]
$7 \mid 14$이므로 (3)에 의해 $H = S_X$입니다. 그런데 [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (3)에 의해 $|S_X| = 7! = 5040 \ne 14$이므로 이것은 어긋납니다. 곧 원소가 $14$개인 $S_X$의 부분군에는 호환이 없습니다.
:::
