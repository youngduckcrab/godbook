---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "5.4절 Exercises, 연습문제 1, 3 (p.71) — 문제 '아홉 점 위의 치환의 분해'와 같은 종류(표로 준 치환을 순환치환의 기호로 쓰고 호환의 곱으로 나타내기. 출처는 S₅ 의 치환 넷과 순환치환의 곱을 준다)"
  - ref: judson-abstract-algebra
    loc: "5.4절 Exercises, 연습문제 2 (g), 30 (p.71–72) — 문제 '두 순환치환의 곱의 켤레'의 1과 같은 종류(치환으로 켤레를 만든 결과를 순환치환으로 쓰기. 출처의 2 (g) 는 (1 2 5 4)⁻¹(1 2 3)(4 5)(1 2 5 4) 를 계산하게 하고, 30 은 순환치환의 켤레의 식을 증명하게 한다)"
  - ref: judson-abstract-algebra
    loc: "5.4절 Exercises, 연습문제 23 (p.72) — 문제 '길이 6인 순환치환의 거듭제곱'과 같은 주제(순환치환의 제곱이 순환치환인지. 출처는 길이가 홀수이면 제곱이 순환치환임을 보이게 하고, 이 문제는 길이 6 에서 제곱과 세제곱을 본다)"
added: 2026-11-26
---

:::exercise[아홉 점 위의 치환의 분해]
$X = \{1, 2, \dots, 9\}$에서 치환 $\sigma$가 $1, 2, 3, 4, 5, 6, 7, 8, 9$를 각각 $4, 7, 3, 9, 8, 1, 2, 5, 6$으로 보낸다고 하자.

1. $O_\sigma(1)$, $O_\sigma(2)$, $O_\sigma(3)$, $O_\sigma(5)$를 구하고, 이것이 $\sigma$의 궤도 전체임을 보여라. $\operatorname{supp} \sigma$도 구하라.
2. $\sigma$를 서로소인 순환치환의 곱으로 나타내고, 그렇게 나타내는 데 쓰이는 순환치환의 집합이 하나로 정해짐을 확인하라.
3. $\sigma$를 호환의 곱으로 나타내라.
4. $\sigma^{-1}$을 서로소인 순환치환의 곱으로 나타내라.
:::

:::solution
[[power-in-a-group|군의 거듭제곱]]의 (2)에 의해 모든 정수 $i$에서 $\sigma^{i+1} = \sigma\sigma^i$이므로 $\sigma^{i+1}(x) = \sigma(\sigma^i(x))$이고, $\sigma^0 = i_X$이다. 곱은 [[symmetric-group|대칭군]]의 (1)대로 합성이다.

1. *$1$의 궤도.* 위의 식으로 $\sigma(1) = 4$, $\sigma^2(1) = \sigma(4) = 9$, $\sigma^3(1) = \sigma(9) = 6$, $\sigma^4(1) = \sigma(6) = 1$이다. $\sigma^4(1) = 1$이므로 [[orbits-of-a-permutation|치환의 궤도]]의 (5)에 의해 $O_\sigma(1)$은 유한집합이고, 같은 항목의 (6)의 (i)에 의해 $k = |O_\sigma(1)|$은 $\sigma^n(1) = 1$인 자연수 $n$ 가운데 가장 작은 것이다. $\sigma(1)$, $\sigma^2(1)$, $\sigma^3(1)$은 $1$이 아니므로 $k$는 $1, 2, 3$이 아니고, $\sigma^4(1) = 1$이므로 $k \le 4$이다. $k$는 자연수이므로 [[prime-number|소수]]의 (Z1)에 의해 $k = 4$이고, (6)의 (ii)에 의해
   $$
   \begin{aligned}
   O_\sigma(1) &= \{\sigma^0(1), \sigma^1(1), \\
   &\qquad \sigma^2(1), \sigma^3(1)\} \\
   &= \{1, 4, 9, 6\}
   \end{aligned}
   $$
   이다.

   *나머지 궤도.* 같은 방법으로 $\sigma(2) = 7$, $\sigma^2(2) = \sigma(7) = 2$이고 $\sigma(2) \ne 2$이므로 $O_\sigma(2) = \{2, 7\}$이며, $\sigma(5) = 8$, $\sigma^2(5) = \sigma(8) = 5$이고 $\sigma(5) \ne 5$이므로 $O_\sigma(5) = \{5, 8\}$이다. $\sigma(3) = 3$이므로 궤도의 (4)에 의해 $O_\sigma(3) = \{3\}$이다.

   *궤도 전체.* $X$의 아홉 원소는 모두 이 네 집합 가운데 하나에 들어 있다. $x$가 $O_\sigma(1)$에 들면 궤도의 (2)에 의해 $O_\sigma(x) = O_\sigma(1)$이고, 다른 세 집합에서도 같다. 따라서 $\sigma$의 궤도 전체의 집합은
   $$
   \{\{1, 4, 6, 9\}, \{2, 7\}, \{3\}, \{5, 8\}\}
   $$
   이다. 궤도의 (4)에 의해 $x \notin \operatorname{supp} \sigma$인 것은 정확히 $O_\sigma(x) = \{x\}$일 때이고, 그런 $x$는 $3$뿐이므로 $\operatorname{supp} \sigma = \{1, 2, 4, 5, 6, 7, 8, 9\}$이다.

2. 1에 의해 서로 다른 두 원소를 갖는 궤도 전체는 $\mathcal{O}(\sigma) = \{O_1, O_2, O_3\}$이고, $O_1 = \{1, 4, 6, 9\}$, $O_2 = \{2, 7\}$, $O_3 = \{5, 8\}$이다. [[cycle-permutation|순환치환]]의 (7)을 $\rho = \sigma$와 $x = 1$, $x = 2$, $x = 5$에 쓰면, 1에서 구한 값으로
   $$
   \begin{aligned}
   \sigma_{O_1} &= (1\ 4\ 9\ 6), \\
   \sigma_{O_2} &= (2\ 7), \\
   \sigma_{O_3} &= (5\ 8)
   \end{aligned}
   $$
   이다. $i$를 $O_i$로 보내는 함수 $\{1, 2, 3\} \to \mathcal{O}(\sigma)$는 전단사이므로 [[cycle-decomposition|서로소인 순환치환으로의 분해]]의 (2)에 의해
   $$
   \sigma = (1\ 4\ 9\ 6)(2\ 7)(5\ 8)
   $$
   이고, 세 순환치환은 둘씩 서로소이다. 같은 항목의 (3)에 의해, $\sigma$를 서로소인 순환치환의 열의 곱으로 쓰는 어떤 방법에서도 쓰인 순환치환의 집합은 $\{(1\ 4\ 9\ 6), (2\ 7), (5\ 8)\}$이고 순환치환은 세 개이다.

3. [[product-of-transpositions|호환의 곱으로 나타내기]]의 (1)을 $a_1, a_2, a_3, a_4 = 1, 4, 9, 6$에 쓰면 $(1\ 4\ 9\ 6) = (1\ 6)(1\ 9)(1\ 4)$이다. [[finite-product-in-a-group|군의 유한 곱]]의 (3)에 의해 길이 $3$인 열과 길이 $2$인 열을 이어 붙여
   $$
   \sigma = (1\ 6)(1\ 9)(1\ 4)(2\ 7)(5\ 8)
   $$
   이고, 이것은 다섯 호환의 곱이다.

4. $c = (1\ 4\ 9\ 6)$, $s = (2\ 7)$, $t = (5\ 8)$이라 하자. 유한 곱의 (5)에 의해 $\sigma^{-1} = (cst)^{-1} = t^{-1}s^{-1}c^{-1}$이다. 순환치환의 (5)에 의해 $t^{-1} = t$, $s^{-1} = s$이고, (1)에 의해 $c^{-1} = (6\ 9\ 4\ 1)$이며, (3)으로 세 번 돌려 적으면 $c^{-1} = (1\ 6\ 9\ 4)$이다. 따라서 $\sigma^{-1} = ts\,c^{-1}$이다.

   $\{1, 4, 6, 9\}$, $\{2, 7\}$, $\{5, 8\}$은 둘씩 공통 원소가 없으므로 [[disjoint-cycles-commute|서로소인 순환치환은 교환된다]]의 (1)에 의해 $ts = st$이고, $c^{-1}$은 $t$와도 $s$와도 교환된다. 유한 곱의 (8)에 의해 $c^{-1}$은 곱 $ts$와 교환되므로
   $$
   \begin{aligned}
   \sigma^{-1} &= (ts)c^{-1} = c^{-1}(ts) \\
   &= c^{-1}(st) \\
   &= (1\ 6\ 9\ 4)(2\ 7)(5\ 8)
   \end{aligned}
   $$
   이다. 세 순환치환은 둘씩 서로소이다(순환치환의 (6)).
:::

:::exercise[두 순환치환의 곱의 켤레]
$X = \{1, 2, \dots, 7\}$에서 $\tau = (1\ 3\ 5\ 7)(2\ 6)$이라 하자.

1. $\sigma = (1\ 5\ 7)(2\ 4)$일 때 $\sigma\tau\sigma^{-1}$을 서로소인 순환치환의 곱으로 나타내고, $\sigma\tau\sigma^{-1} \ne \tau$임을 보여라.
2. $\pi\tau\pi^{-1} = (1\ 2\ 3)(4\ 5\ 6\ 7)$인 $\pi \in S_X$는 없음을 보여라.
:::

:::solution
*두 인수의 켤레.* $\rho \in S_X$이고 $\tau_1, \tau_2 \in S_X$이면
$$
\begin{aligned}
&\rho(\tau_1\tau_2)\rho^{-1} \\
&\quad = (\rho\tau_1\rho^{-1})(\rho\tau_2\rho^{-1})
\end{aligned}
$$
이다. [[finite-product-in-a-group|군의 유한 곱]]의 (1)과 (3)에 의해 오른쪽은 길이 $6$인 열 $\rho, \tau_1, \rho^{-1}, \rho, \tau_2, \rho^{-1}$의 곱이고, 같은 (3)으로 묶음을 바꾸면 $(\rho\tau_1)(\rho^{-1}\rho)(\tau_2\rho^{-1}) = (\rho\tau_1)(\tau_2\rho^{-1})$이며, 이것은 다시 (3)에 의해 길이 $4$인 열 $\rho, \tau_1, \tau_2, \rho^{-1}$의 곱, 곧 $\rho(\tau_1\tau_2)\rho^{-1}$이다.

1. *$\sigma$의 값.* $\{1, 5, 7\}$과 $\{2, 4\}$는 공통 원소가 없으므로 [[disjoint-cycles-commute|서로소인 순환치환은 교환된다]]의 (2)에 의해 $\sigma$는 $1, 5, 7$을 각각 $5, 7, 1$로, $2, 4$를 각각 $4, 2$로 보내고 $3$과 $6$을 고정한다.

   *켤레.* 위의 식과 [[conjugate-of-a-cycle|순환치환의 켤레]]의 (1)에 의해
   $$
   \begin{aligned}
   \sigma\tau\sigma^{-1} &= (\sigma(1)\ \sigma(3)\ \sigma(5)\ \sigma(7)) \\
   &\qquad (\sigma(2)\ \sigma(6)) \\
   &= (5\ 3\ 7\ 1)(4\ 6)
   \end{aligned}
   $$
   이다. [[cycle-permutation|순환치환]]의 (3)으로 세 번 돌려 적으면 $(5\ 3\ 7\ 1) = (1\ 5\ 3\ 7)$이다. $\{1, 3, 5, 7\}$과 $\{4, 6\}$은 공통 원소가 없으므로 순환치환의 (6)에 의해 두 순환치환은 서로소이고,
   $$
   \sigma\tau\sigma^{-1} = (1\ 5\ 3\ 7)(4\ 6)
   $$
   은 서로소인 순환치환의 곱이다.

   *$\tau$와 다르다.* $2$는 $\{1, 3, 5, 7\} \cup \{4, 6\}$ 밖에 있으므로 서로소인 순환치환은 교환된다의 (2)에 의해 $\sigma\tau\sigma^{-1}$의 고정점이고, 같은 (2)에 의해 $\tau(2) = (2\ 6)(2) = 6$이다. 두 치환은 $2$에서 값이 다르다.

2. $\pi \in S_X$라 하자. 처음의 식과 순환치환의 켤레의 (1)에 의해
   $$
   \begin{aligned}
   \pi\tau\pi^{-1} &= (\pi(1)\ \pi(3)\ \pi(5)\ \pi(7)) \\
   &\qquad (\pi(2)\ \pi(6))
   \end{aligned}
   $$
   이다. $\pi$는 단사이므로 $\pi(1), \pi(2), \pi(3), \pi(5), \pi(6), \pi(7)$은 서로 다르고, 두 순환치환은 공통 원소가 없다. 서로소인 순환치환은 교환된다의 (2)에 의해 $B = \{1, 2, 3, 5, 6, 7\}$로 두면 $\operatorname{supp}(\pi\tau\pi^{-1}) = \pi(B)$이고, $1, 2, 3, 4, 5, 6$에 차례로 $\pi(1), \pi(2), \pi(3), \pi(5), \pi(6), \pi(7)$을 대응시키는 함수는 $\{1, \dots, 6\}$에서 $\pi(B)$로의 전단사이므로 [[finite-set|유한집합]]의 정의에 의해 이 받침은 원소를 $6$개 갖는다. 한편 $\{1, 2, 3\}$과 $\{4, 5, 6, 7\}$은 공통 원소가 없으므로 같은 (2)에 의해 $\operatorname{supp}\bigl((1\ 2\ 3)(4\ 5\ 6\ 7)\bigr) = \{1, \dots, 7\}$이고 원소가 $7$개이다. $\pi\tau\pi^{-1} = (1\ 2\ 3)(4\ 5\ 6\ 7)$이면 두 받침이 같은 집합이므로 [[number-of-elements-is-unique|원소의 개수]]의 (1)에 의해 $6 = 7$이 되어 어긋난다. 따라서 그런 $\pi$는 없다.
:::

:::exercise[길이 6인 순환치환의 거듭제곱]
$X$가 집합이고 $a_1, \dots, a_6$이 $X$의 서로 다른 원소이며 $\sigma = (a_1\ a_2\ a_3\ a_4\ a_5\ a_6)$이라 하자.

1. $\sigma^2 = (a_1\ a_3\ a_5)(a_2\ a_4\ a_6)$이고 $\operatorname{ord}(\sigma^2) = 3$임을 보여라.
2. $\sigma^3 = (a_1\ a_4)(a_2\ a_5)(a_3\ a_6)$이고 $\operatorname{ord}(\sigma^3) = 2$임을 보여라.
3. $\sigma^2$와 $\sigma^3$은 순환치환이 아님을 보여라.
:::

:::solution
$A = \{a_1, \dots, a_6\}$이라 하자. [[cycle-permutation|순환치환]]의 (4)에 의해 $0 \le i \le 5$에서 $\sigma^i(a_1) = a_{i+1}$이고 $\operatorname{ord}(\sigma) = 6$이다. 같은 (4)에 의해 $O_\sigma(a_1) = A$이고 (2)에 의해 $|A| = 6$이므로, [[orbits-of-a-permutation|치환의 궤도]]의 (6)의 (i)에 의해 정수 $t$, $t'$에서 $\sigma^t(a_1) = \sigma^{t'}(a_1)$인 것은 정확히 $t \equiv t' \pmod 6$일 때이다. $a_j = \sigma^{j-1}(a_1)$이므로 [[laws-of-exponents|지수법칙]]의 (1)에 의해 정수 $m$에서
$$
\begin{aligned}
\sigma^m(a_j) &= \sigma^m(\sigma^{j-1}(a_1)) \\
&= \sigma^{m+j-1}(a_1)
\end{aligned}
$$
이다. $y \notin A$이면 순환치환의 (2)에 의해 $y \notin \operatorname{supp} \sigma$이고 [[support-of-a-permutation|치환의 받침]]의 (2)에 의해 모든 정수 $m$에서 $\sigma^m(y) = y$이다.

1. *값.* 위의 식에서 $m = 2$로 두면 $\sigma^2$는 $a_1, a_2, a_3, a_4$를 각각 $a_3, a_4, a_5, a_6$으로 보내고, $\sigma^2(a_5) = \sigma^6(a_1) = \sigma^0(a_1) = a_1$, $\sigma^2(a_6) = \sigma^7(a_1) = \sigma^1(a_1) = a_2$이다($6 \equiv 0$, $7 \equiv 1 \pmod 6$). $A$ 밖의 점은 고정한다.

   $\{a_1, a_3, a_5\}$와 $\{a_2, a_4, a_6\}$은 공통 원소가 없으므로 [[disjoint-cycles-commute|서로소인 순환치환은 교환된다]]의 (2)에 의해 $(a_1\ a_3\ a_5)(a_2\ a_4\ a_6)$은 $a_1, a_3, a_5$를 각각 $a_3, a_5, a_1$로, $a_2, a_4, a_6$을 각각 $a_4, a_6, a_2$로 보내고 그 밖의 점을 고정한다. 이것은 위의 $\sigma^2$의 값과 모든 점에서 같으므로 $\sigma^2 = (a_1\ a_3\ a_5)(a_2\ a_4\ a_6)$이다.

   *위수.* $2$는 $6 = 2 \cdot 3$의 양의 약수이므로 [[order-of-a-power|거듭제곱의 위수]]의 (4)에 의해 $\operatorname{ord}(\sigma^2) = 3$이다.

2. *값.* $m = 3$으로 두면 $\sigma^3$은 $a_1, a_2, a_3$을 각각 $a_4, a_5, a_6$으로 보내고, $\sigma^3(a_4) = \sigma^6(a_1) = a_1$, $\sigma^3(a_5) = \sigma^7(a_1) = a_2$, $\sigma^3(a_6) = \sigma^8(a_1) = a_3$이다($8 \equiv 2 \pmod 6$). $A$ 밖의 점은 고정한다.

   세 호환 $(a_1\ a_4)$, $(a_2\ a_5)$, $(a_3\ a_6)$은 원소가 겹치지 않으므로 순환치환의 (6)에 의해 둘씩 서로소이다. 받침의 (5)의 (i)에 의해 그 곱 $\rho$는 $x \in \{a_1, a_4\}$에서 $(a_1\ a_4)(x)$를, $x \in \{a_2, a_5\}$에서 $(a_2\ a_5)(x)$를, $x \in \{a_3, a_6\}$에서 $(a_3\ a_6)(x)$를 값으로 갖고 그 밖의 점을 고정한다(순환치환의 (2)로 각 받침을 읽었다). 이것은 위의 $\sigma^3$의 값과 모든 점에서 같으므로 $\sigma^3 = \rho$이다.

   *위수.* $3$은 $6 = 3 \cdot 2$의 양의 약수이므로 거듭제곱의 위수의 (4)에 의해 $\operatorname{ord}(\sigma^3) = 2$이다.

3. 서로소인 순환치환은 교환된다의 (3)에 의해 1의 두 순환치환의 곱 $\sigma^2$는 순환치환이 아니다.

   $\sigma^3$의 궤도를 보자. 2에서 $\sigma^3(a_1) = a_4 \ne a_1$이고 $(\sigma^3)^2(a_1) = \sigma^3(a_4) = a_1$이므로(군의 거듭제곱의 (1)로 $(\sigma^3)^2 = \sigma^3\sigma^3$), 치환의 궤도의 (5)와 (6)을 $\sigma^3$에 써서 $O_{\sigma^3}(a_1) = \{a_1, a_4\}$이고, 같은 방법으로 $O_{\sigma^3}(a_2) = \{a_2, a_5\}$이다. 두 궤도는 다르고 둘 다 서로 다른 두 원소를 가지므로, 순환치환의 (8)의 "그런 궤도가 정확히 하나"가 성립하지 않고 $\sigma^3$은 순환치환이 아니다.
:::

:::exercise[서로소인 두 치환의 곱이 항등치환인 경우]
$X$가 집합이라 하자.

1. $\sigma, \tau \in S_X$가 서로소이고 $\sigma\tau = i_X$이면 $\sigma = \tau = i_X$임을 보여라.
2. $X = \{1, 2\}$에서 $(1\ 2)(1\ 2) = i_X$임을 보이고, 이것이 1과 어긋나지 않는 까닭을 말하라.
:::

:::solution
1. [[support-of-a-permutation|치환의 받침]]의 (4)에 의해 $\operatorname{supp}(\sigma\tau) = \operatorname{supp} \sigma \cup \operatorname{supp} \tau$이고, 같은 항목의 (1)에 의해 $\operatorname{supp} i_X = \emptyset$이다. 따라서 $\operatorname{supp} \sigma \cup \operatorname{supp} \tau = \emptyset$이고, 두 받침은 이 합집합의 부분집합이므로 둘 다 공집합이다. 받침의 (1)의 둘째 문장에 의해 $\sigma = i_X$이고 $\tau = i_X$이다.

2. [[cycle-permutation|순환치환]]의 (5)에 의해 호환 $\tau = (1\ 2)$는 $\tau\tau = i_X$를 만족한다. 그런데 순환치환의 (2)에 의해 $\operatorname{supp} \tau = \{1, 2\}$이므로 $\operatorname{supp} \tau \cap \operatorname{supp} \tau = \{1, 2\} \ne \emptyset$이고, $\tau$와 $\tau$는 서로소가 아니다. 곧 1의 가정 "서로소"가 성립하지 않는 경우이고, 결론 $\tau = i_X$도 성립하지 않는다($\tau(1) = 2$).
:::

:::exercise[순환치환과 교환되는 치환]
$X$가 집합이고 $k \ge 2$가 정수이며 $a_1, \dots, a_k$가 $X$의 서로 다른 원소라 하자. $\sigma = (a_1\ \cdots\ a_k)$, $A = \{a_1, \dots, a_k\}$로 두고, $\pi \in S_X$가 $\pi\sigma = \sigma\pi$를 만족한다고 하자.

1. $\pi(A) = A$임을 보여라.
2. $0 \le j \le k - 1$인 정수 $j$가 있어, 모든 $y \in A$에서 $\pi(y) = \sigma^j(y)$임을 보여라.
3. $X = \{1, \dots, 6\}$, $\sigma = (1\ 2\ 3\ 4\ 5\ 6)$일 때 $(1\ 4)(2\ 5)(3\ 6)$은 $\sigma$와 교환되고 $(1\ 4)$는 교환되지 않음을 보여라.
:::

:::solution
1. [[finite-product-in-a-group|군의 유한 곱]]의 (1)에 의해 세 원소의 곱 $\pi\sigma\pi^{-1}$은 $(\pi\sigma)\pi^{-1}$이고, 가정과 결합법칙에 의해 $(\pi\sigma)\pi^{-1} = (\sigma\pi)\pi^{-1} = \sigma(\pi\pi^{-1}) = \sigma$이다. [[conjugate-of-a-cycle|순환치환의 켤레]]의 (1)에 의해 $\operatorname{supp}(\pi\sigma\pi^{-1}) = \pi(\operatorname{supp} \sigma)$이고, [[cycle-permutation|순환치환]]의 (2)에 의해 $\operatorname{supp} \sigma = A$이다. 따라서 $\pi(A) = \operatorname{supp}(\pi\sigma\pi^{-1}) = \operatorname{supp} \sigma = A$이다.

2. *$\pi(a_1)$의 자리.* $a_1 \in A$이므로 1에 의해 $\pi(a_1) \in A$이다. 순환치환의 (4)에 의해 $0 \le i \le k - 1$에서 $\sigma^i(a_1) = a_{i+1}$이므로, $\pi(a_1) = a_{j+1} = \sigma^j(a_1)$인 정수 $j$가 $0 \le j \le k - 1$에 있다.

   *교환과 거듭제곱.* $0$ 이상인 모든 정수 $i$에서 $\pi(\sigma^i(a_1)) = \sigma^i(\pi(a_1))$임을 $i$에 대한 귀납법으로 보인다. $i = 0$이면 $\sigma^0 = i_X$이므로 양쪽 모두 $\pi(a_1)$이다. $i$에서 성립하면, [[power-in-a-group|군의 거듭제곱]]의 (2)에 의해 $\sigma^{i+1} = \sigma\sigma^i$이므로
   $$
   \begin{aligned}
   \pi(\sigma^{i+1}(a_1)) &= (\pi\sigma)(\sigma^i(a_1)) \\
   &= (\sigma\pi)(\sigma^i(a_1)) \\
   &= \sigma(\sigma^i(\pi(a_1))) \\
   &= \sigma^{i+1}(\pi(a_1))
   \end{aligned}
   $$
   이다.

   *결론.* $y \in A$이면 $y = a_{i+1} = \sigma^i(a_1)$인 $i$가 $0 \le i \le k - 1$에 있다. 위의 식과 [[laws-of-exponents|지수법칙]]의 (1)에 의해
   $$
   \begin{aligned}
   \pi(y) &= \sigma^i(\sigma^j(a_1)) = (\sigma^i\sigma^j)(a_1) \\
   &= (\sigma^j\sigma^i)(a_1) = \sigma^j(\sigma^i(a_1)) \\
   &= \sigma^j(y)
   \end{aligned}
   $$
   이다.

3. *$(1\ 4)(2\ 5)(3\ 6)$.* 문제 3의 2를 $a_i = i$에 쓰면 $(1\ 4)(2\ 5)(3\ 6) = \sigma^3$이다. 지수법칙의 (1)에 의해 $\sigma\sigma^3 = \sigma^4 = \sigma^3\sigma$이므로 이 치환은 $\sigma$와 교환된다.

   *$(1\ 4)$.* $\pi = (1\ 4)$가 $\sigma$와 교환된다고 하자. 2에 의해 $0 \le j \le 5$이고 $A = X$의 모든 점에서 $\pi(y) = \sigma^j(y)$인 $j$가 있다. 순환치환의 (4)에 의해 $\sigma^0(1), \dots, \sigma^5(1)$은 각각 $1, \dots, 6$으로 서로 다르고 $\pi(1) = 4 = \sigma^3(1)$이므로 $j = 3$이다. 그러면 $\pi(2) = \sigma^3(2) = \sigma^3(\sigma(1)) = \sigma^4(1) = 5$여야 하는데, $2$는 $(1\ 4)$의 받침 $\{1, 4\}$ 밖에 있어 $\pi(2) = 2$이다. 어긋나므로 $(1\ 4)$는 $\sigma$와 교환되지 않는다.
:::

:::exercise[모든 궤도가 유한하지만 순환치환의 유한 곱이 아닌 치환]
$X = \mathbb{Z}$이고 $\sigma : \mathbb{Z} \to \mathbb{Z}$를 $\sigma(n) = -n$으로 정하자.

1. $\sigma \in S_{\mathbb{Z}}$이고 $\sigma$의 모든 궤도가 유한집합이며 $\operatorname{supp} \sigma = \mathbb{Z} - \{0\}$임을 보여라.
2. $n \ge 0$이 정수이고 $\gamma_1, \dots, \gamma_n$이 $S_{\mathbb{Z}}$의 순환치환의 열이면 $\operatorname{supp}(\gamma_1 \cdots \gamma_n)$은 유한집합임을 보여라.
3. $\sigma$는 순환치환의 어떤 열의 곱도 아님을 보이고, 이것이 [[cycle-decomposition|서로소인 순환치환으로의 분해]]의 (2)에서 무엇을 말해 주는지 설명하라.
:::

:::solution
정수의 계산은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 계산 법칙을 쓴다.

1. *치환이다.* 모든 정수 $n$에서 $\sigma(\sigma(n)) = -(-n) = n$이므로 $\sigma\sigma = i_{\mathbb{Z}}$이다. $\sigma(a) = \sigma(a')$이면 $a = \sigma(\sigma(a)) = \sigma(\sigma(a')) = a'$이므로 $\sigma$는 단사이고, 모든 정수 $b$는 $b = \sigma(\sigma(b))$이므로 $\sigma : \mathbb{Z} \to \mathbb{Z}$는 전사이다([[injective-surjective-bijective|단사, 전사, 전단사]]). 곧 $\sigma \in S_{\mathbb{Z}}$이다.

   *궤도.* [[power-in-a-group|군의 거듭제곱]]의 (1)에 의해 $\sigma^2 = \sigma\sigma = i_{\mathbb{Z}}$이므로 모든 정수 $n$에서 $\sigma^2(n) = n$이고, $2$는 자연수이므로 [[orbits-of-a-permutation|치환의 궤도]]의 (5)에 의해 $O_\sigma(n)$은 유한집합이다.

   *받침.* $\sigma(n) = n$이면 $-n = n$이고, 양변에 $n$을 더하면 $0 = 2n$이다. $2 \ne 0$이므로 [[integer-cancellation|정수 곱셈의 소거 법칙]]의 (1)에 의해 $n = 0$이다. 거꾸로 $\sigma(0) = -0 = 0$이다. 따라서 $n \in \operatorname{supp} \sigma$인 것은 정확히 $n \ne 0$일 때이고, $\operatorname{supp} \sigma = \mathbb{Z} - \{0\}$이다.

2. $n$에 대한 귀납법. $n = 0$이면 [[finite-product-in-a-group|군의 유한 곱]]의 (1)에 의해 곱은 빈 곱 $i_{\mathbb{Z}}$이고, [[support-of-a-permutation|치환의 받침]]의 (1)에 의해 그 받침은 $\emptyset$이며, [[finite-set|유한집합]]의 (F2)에 의해 유한집합이다.

   $n$에서 성립한다고 하고 $\gamma_1, \dots, \gamma_{n+1}$이 순환치환의 열이라 하자. $\rho = \gamma_1 \cdots \gamma_n$(처음 $n$개의 곱)이라 하면 유한 곱의 (2)에 의해 $\gamma_1 \cdots \gamma_{n+1} = \rho\gamma_{n+1}$이고, 받침의 (3)에 의해
   $$
   \begin{aligned}
   &\operatorname{supp}(\rho\gamma_{n+1}) \\
   &\quad \subseteq \operatorname{supp} \rho \cup \operatorname{supp} \gamma_{n+1}
   \end{aligned}
   $$
   이다. 귀납 가정에 의해 $\operatorname{supp} \rho$는 유한집합이다. $\gamma_{n+1}$이 길이 $k$인 순환치환 $(a_1\ \cdots\ a_k)$이면 [[cycle-permutation|순환치환]]의 (2)에 의해 $\operatorname{supp} \gamma_{n+1} = \{a_1, \dots, a_k\}$는 원소를 $k$개 갖는 유한집합이다. [[disjoint-union-count|서로소인 합집합의 원소의 개수]]의 (3)에 의해 두 받침의 합집합은 유한집합이고, [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 그 부분집합인 $\operatorname{supp}(\gamma_1 \cdots \gamma_{n+1})$도 유한집합이다.

3. *유한 곱이 아니다.* 자연수 $n$은 [[prime-number|소수]]의 (Z1)에 의해 $n \ge 1$이고 [[well-ordering-principle|정렬 원리]]의 (Z8), (Z6)에 의해 $0 < n$이므로 (Z5)에 의해 $n \ne 0$이다. 따라서 $\mathbb{N} \subseteq \mathbb{Z} - \{0\} = \operatorname{supp} \sigma$이고, [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (2)에 의해 $\operatorname{supp} \sigma$는 무한집합이다. $\sigma$가 어떤 순환치환의 열의 곱이라면 2에 의해 $\operatorname{supp} \sigma$가 유한집합이어야 하므로, $\sigma$는 그런 곱이 아니다.

   *뜻.* 서로소인 순환치환으로의 분해의 (2)는 $X$가 유한집합이라고 가정한다. 이 $\sigma$는 1에 의해 모든 궤도가 유한집합인데도 서로소인 순환치환의 (길이가 유한한) 열의 곱으로 쓸 수 없다. 곧 그 가정은 "모든 궤도가 유한하다"로 바꿀 수 없다.
:::
