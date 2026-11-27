---
title: 다항식의 인수 정리와 근의 개수
title_en: Factor Theorem and Number of Roots for Polynomials
aliases: [인수 정리, 나머지 정리, 근의 개수, factor theorem, remainder theorem, number of roots]
kind: theorem
field: ring-theory
msc: ["13", "12"]
level: undergrad
summary: 다항식 f 를 X − c 로 나눈 나머지는 f(c) 이고(나머지 정리), c 가 f 의 근인 것은 X − c 가 f 를 나누는 것과 같다(인수 정리). 몫의 차수는 하나 줄고 최고차계수는 같다. 정역 위의 영이 아닌 다항식의 근 전체는 원소가 차수 이하인 유한집합이고, 그래서 차수가 n 이하인 두 다항식이 n 개보다 많은 점에서 값이 같으면 같으며, 무한 정역에서는 다항식이 값들로 정해진다.
requires: [set, subset, function, finite-set, adding-or-removing-an-element, number-of-elements-is-unique, subset-of-finite-set, injective-surjective-bijective, prime-number, well-ordering-principle, mathematical-induction, integers-modulo-n, ring, ring-basic-properties, ring-examples, integral-domain, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, division-algorithm-for-polynomials]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "17.2절 The Division Algorithm, 근의 정의와 Corollary 17.8, 17.9 (p.214); 17.5절 Exercises, 연습문제 5, 11, 17, 20, 24 (p.220–221); 3.2절 Figure 3.12 (p.35); 22.4 Hints and Answers 22.4.7 (p.334); 23.1절 Field Automorphisms, Example 23.11 (p.296)"
    checked: original
    note: "출처 Corollary 17.8(p.214)은 체 F 위에서 α 가 p(x) 의 근인 것과 x − α 가 p(x) 의 인수인 것이 같다는 것이고, 나눗셈 정리로 나머지가 상수 a 이며 0 = p(α) = a 임을 보인다. 이 항목의 (2)가 그것이고, 단위원을 갖는 가환환에서 진술한다(X − c 는 모닉이므로 나눗셈 정리를 쓸 수 있다). (1)의 나머지 정리는 출처 연습문제 17(p.221, 체 위에서 p(a) 는 p(x) 를 x − a 로 나눈 나머지)과 같은 내용이다. 출처 Corollary 17.9(p.214)는 체 위에서 차수 n 인 영이 아닌 다항식이 서로 다른 근을 많아야 n 개 갖는다는 것이고, 증명은 차수에 대한 귀납이며 'Since α ≠ β and F is a field, q(β) = 0' 으로 정역의 성질만 쓴다. 이 항목의 (4)는 정역에서 근 전체의 집합이 원소가 차수 이하인 유한집합이라는 꼴로 진술하고, 출처의 증명이 말로 넘어가는 근의 집합의 세기(α 와 q 의 근)를 집합의 포함과 원소의 개수로 쓴다. 출처 연습문제 11(p.221)은 Z_6[x] 에서 차수 n 인 다항식이 n 개보다 많은 근을 가질 수 있는지 묻는다 — 반례 '정역이 아니면 근이 차수보다 많을 수 있다'는 그것과 같은 발상이다(이 항목은 Z_8 을 쓴다). 그 반례의 [3]² = [5]² = [7]² = [1] 은 출처 3.2절 Figure 3.12(p.35)의 U(8) 곱셈표의 대각선과 같은 계산이다. (3)의 몫의 차수는 출처 Corollary 17.9 의 증명(p.214)이 'The degree of q(x) is n − 1 by Proposition 17.4' 로 쓰는 것이고, 이 항목은 최고차계수가 같다는 것을 덧붙여 진술한다. (5)의 값으로 다항식을 정하기와 (6)의 무한 정역은 이 사이트가 덧붙였다. 확인 질문 '$\\mathbb{Z}_7$에서 $X^3 - X$의 근을 모두 구하면?' 은 출처 연습문제 5(p.220, 근을 모두 구하라)와 같은 종류의 물음이고, 출처 연습문제 24(p.221)의 x^p − x 가 Z_p 에서 p 개의 근을 갖는다는 것과 대상이 닮았다(이 확인 질문은 X³ − X 를 Z_7 에서 본다). 확인 질문 '$X^5 - 1$을 $X - 1$로 나눈 몫의 차수와 최고차계수는?' 의 몫 X⁴ + X³ + X² + X + 1 은 출처 Example 23.11(p.296)이 '(x − 1)f(x) = x⁵ − 1' 로 쓰는 f 와 같고, 출처 연습문제 20(p.221)의 원분다항식 Φ_n 을 n = 5 로 한 것이다. 연습문제 22.4.7(a)의 힌트(p.334)도 Z_2[x] 에서 x⁵ − 1 = (x + 1)(x⁴ + x³ + x² + x + 1) 로 쓴다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(ℤ₉·ℤ₂ 예의 계산 대입, 출처 주장 검색 — 틀린 '덧붙였다' 1건을 찾아 단원 전체를 다시 확인, 4건 고침). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$R$이 단위원을 갖는 가환환이라 하자. 다항식환 $R[X]$, 상수 다항식과 읽는 약속, 부정원 $X$, 나누어떨어짐 $g \mid f$는 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$와 최고차계수는 [[degree-of-a-polynomial|다항식의 차수]], 대입한 값 $f(r)$과 근은 [[evaluation-homomorphism|대입 준동형]]의 것이다. 유한집합과 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 것이다. 아래에서 $f, g \in R[X]$이고 $c \in R$이다.

1. (나머지 정리) $f = (X - c)\,q + f(c)$인 $q \in R[X]$가 정확히 하나 있다. 곧 $f$를 $X - c$로 나눈 나머지는 상수 다항식 $f(c)$이다.
2. (인수 정리) $c$가 $f$의 근인 것은 정확히 $R[X]$에서 $X - c \mid f$일 때이다.
3. (몫의 차수) (1)의 $q$에 대하여, $f \ne 0$이고 $\deg f = n \ge 1$이면 $q \ne 0$이고 $\deg q = n - 1$이며 $q$의 최고차계수는 $f$의 최고차계수와 같다. $f$가 상수 다항식이면 $q = 0$이다.
4. (근의 개수) $R$이 [[integral-domain|정역]]이고 $f \ne 0$이라 하자. 그러면 $f$의 $R$ 안의 근 전체의 집합 $\{r \in R : f(r) = 0\}$은 유한집합이고 원소의 개수가 $\deg f$ 이하이다. 따라서 $R$의 서로 다른 원소의 열 $c_1, \dots, c_k$(곧 단사인 함수 $\{1, \dots, k\} \to R$)의 항이 모두 $f$의 근이면 $k \le \deg f$이다.
5. (값으로 다항식 정하기) $R$이 정역이고 $n$이 $0$ 이상인 정수이며, $f$와 $g$가 각각 $0$이거나 차수가 $n$ 이하라 하자. $A \subseteq R$이 원소가 $n + 1$개 이상인 유한집합이고 모든 $a \in A$에서 $f(a) = g(a)$이면 $f = g$이다.
6. (무한 정역) $R$이 정역이고 [[finite-set|무한집합]]이면, 모든 $r \in R$에서 $f(r) = g(r)$인 $f$, $g$는 같다. 곧 각 $f \in R[X]$에 $r$에서의 값이 $f(r)$인 함수 $R \to R$를 대응시키는 함수는 단사이다.
:::

:::english
Let $R$ be a commutative ring with unity. The polynomial ring $R[X]$, constant polynomials with the reading convention, the indeterminate $X$ and divisibility $g \mid f$ are those of the polynomial ring; the degree $\deg$ and the leading coefficient are those of the degree of a polynomial; the value $f(r)$ and roots are those of the evaluation homomorphism. Finite sets and the number of elements $|A|$ are those of finite sets and of the number of elements. Below, $f, g \in R[X]$ and $c \in R$.

1. (Remainder theorem) There is exactly one $q \in R[X]$ with $f = (X - c)\,q + f(c)$. That is, the remainder of $f$ divided by $X - c$ is the constant polynomial $f(c)$.
2. (Factor theorem) $c$ is a root of $f$ if and only if $X - c \mid f$ in $R[X]$.
3. (Degree of the quotient) For the $q$ of (1): if $f \ne 0$ and $\deg f = n \ge 1$, then $q \ne 0$, $\deg q = n - 1$, and the leading coefficient of $q$ equals that of $f$. If $f$ is a constant polynomial, then $q = 0$.
4. (Number of roots) Let $R$ be an integral domain and $f \ne 0$. Then the set $\{r \in R : f(r) = 0\}$ of all roots of $f$ in $R$ is finite, with at most $\deg f$ elements. Hence if the terms of a sequence $c_1, \dots, c_k$ of distinct elements of $R$ (that is, an injective function $\{1, \dots, k\} \to R$) are all roots of $f$, then $k \le \deg f$.
5. (Determining a polynomial by values) Let $R$ be an integral domain, $n$ a nonnegative integer, and $f$ and $g$ each $0$ or of degree at most $n$. If $A \subseteq R$ is a finite set with at least $n + 1$ elements and $f(a) = g(a)$ for all $a \in A$, then $f = g$.
6. (Infinite integral domains) If $R$ is an integral domain and an infinite set, then $f$ and $g$ with $f(r) = g(r)$ for all $r \in R$ are equal. That is, the function assigning to each $f \in R[X]$ the function $R \to R$ whose value at $r$ is $f(r)$ is injective.
:::

## 직관

정수에서 "$a$를 $b$로 나눈 나머지가 $0$이면 $b$가 $a$를 나눈다"와 같이, $f$를 $X - c$로 나눈 나머지가 $0$이면 $X - c$가 $f$를 나눕니다. 그 나머지는 상수이고, $c$를 넣으면 $X - c$ 쪽이 사라지므로 나머지는 바로 $f(c)$입니다((1)). 그래서 "근을 하나 찾으면 일차 인수를 하나 떼어 낼 수 있다"((2), (3))가 됩니다.

근을 하나 뗄 때마다 차수가 하나 줄어드므로, 근이 차수보다 많을 수는 없을 것 같습니다. 그런데 이 셈에는 "$(r - c)\,q(r) = 0$이고 $r \ne c$이면 $q(r) = 0$"이 필요하고, 이것은 영인자가 없으면 보장됩니다. 그래서 (4)는 정역에서 진술합니다. (5)는 (4)를 두 다항식의 차에 쓴 것입니다. 정역 위에서 차수가 $n$ 이하인 다항식은 $n + 1$개의 점에서의 값으로 정해집니다.

(6)은 무한 정역에서는 다항식과 그것이 주는 함수가 서로를 정한다는 것입니다. 유한환에서는 그렇지 않을 수 있습니다. $\mathbb{Z}_3$ 위의 $X^3$과 $X$가 그런 예입니다.

## 증명

:::idea
(1)은 모닉 다항식 $X - c$로 나눈 나머지가 상수라는 것과, 그 등식에 $c$를 대입하는 것이다. (4)는 차수에 대한 귀납법으로, 근 $c$를 하나 떼어 $f = (X - c)q$로 쓰면 $f$의 근은 $c$이거나 $q$의 근이라는 것이다.
:::

:::hint
(4)에서 $f$의 근 전체의 집합은 $q$의 근 전체의 집합에 $c$를 더한 집합의 부분집합입니다.
:::

:::proof
**쓰는 사실.** 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3)을 쓴다. 귀납법은 [[mathematical-induction|수학적 귀납법]](시작점 $0$)이다. "나눗셈의 (n)"은 [[division-algorithm-for-polynomials|다항식의 나눗셈 정리]]의 (n), "차수의 (n)"은 [[degree-of-a-polynomial|다항식의 차수]]의 (n), "대입의 (n)"은 [[evaluation-homomorphism|대입 준동형]]의 (n)이다. 차수의 (2)에 의해 $X - c$는 차수가 $1$인 모닉 다항식이다. $f$의 근 전체의 집합을 $Z(f)$로 쓴다(이 증명 안에서만 쓰는 이름이다).

**1의 증명.** 나눗셈의 (1)에 의해 $f = (X - c)\,q + r$이고 $r = 0$이거나 $\deg r < 1$인 $q$, $r$이 정확히 한 쌍 있다. 차수의 (2)에 의해 $r$은 상수 다항식 $d$이다. 대입의 (2), (1)에 의해 $c$에서 값을 구하면 $f(c) = (c - c)\,q(c) + d = 0\,q(c) + d = d$이다([[ring-basic-properties|환의 기본 성질]]의 (1)). 따라서 $r = f(c)$이다. $f = (X - c)\,q' + f(c)$이면 상수 다항식 $f(c)$는 $0$이거나 차수가 $0 < 1$이므로 나눗셈의 (1)의 유일성에 의해 $q' = q$이다.

**2의 증명.** $f(c) = 0$이면 (1)에 의해 $f = (X - c)\,q$이다. 거꾸로 $f = (X - c)\,q$이면 대입의 (2)에 의해 $f(c) = (c - c)\,q(c) = 0$이다.

**3의 증명.** 나눗셈의 (4)를 $g = X - c$($\deg g = 1$, 최고차계수 $1$, $1^{-1} = 1$)에 쓴다. $\deg f = n \ge 1$이면 $q \ne 0$, $\deg q = n - 1$이고 $q$의 최고차계수는 $f$의 최고차계수와 $1$의 곱이다. $f$가 상수 다항식이면 차수의 (2)에 의해 $f = 0$이거나 $\deg f = 0 < 1$이므로 $q = 0$이다.

**4의 증명.** $n \ge 0$에 대한 귀납법으로 "차수가 $n$인 모든 $f$에서 $Z(f)$는 유한집합이고 $|Z(f)| \le n$"을 보인다.

$n = 0$: 차수의 (2)에 의해 $f$는 $0$이 아닌 상수 $d$이고, 대입의 (1)에 의해 모든 $r$에서 $f(r) = d \ne 0$이다. 따라서 $Z(f) = \emptyset$이고 [[finite-set|유한집합]]의 (F2)에 의해 원소가 $0$개이다.

$n$에서 $n + 1$로: $\deg f = n + 1$이라 하자. $Z(f) = \emptyset$이면 원소가 $0 \le n + 1$개이다. 아니면 $c \in Z(f)$가 있고, (2)와 (3)에 의해 $f = (X - c)\,q$이고 $q \ne 0$, $\deg q = n$이다. $r \in Z(f)$이면 대입의 (2)에 의해 $0 = f(r) = (r - c)\,q(r)$이고, $R$이 정역이므로 $r - c = 0$이거나 $q(r) = 0$, 곧 $r = c$이거나 $r \in Z(q)$이다. 따라서 $Z(f) \subseteq Z(q) \cup \{c\}$이다. 귀납 가정에 의해 $Z(q)$는 유한집합이고 원소의 개수 $t$가 $n$ 이하이다. $c \in Z(q)$이면 $Z(q) \cup \{c\} = Z(q)$는 원소가 $t$개이고, $c \notin Z(q)$이면 [[adding-or-removing-an-element|원소 하나를 더하기]]의 (a)에 의해 원소가 $t + 1$개이다. 어느 경우든 원소의 개수는 $n + 1$ 이하이다((Z7)). [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $Z(f)$는 유한집합이고 $|Z(f)|$는 그 개수 이하이므로 $n + 1$ 이하이다((Z6)).

열에 관한 주장: $h : \{1, \dots, k\} \to R$가 단사이고 모든 값이 $Z(f)$에 속하면, 같은 집합 $h$는 $\{1, \dots, k\}$에서 $Z(f)$로의 단사이다([[function|함수]]의 공역, [[injective-surjective-bijective|단사]]). $\{1, \dots, k\}$는 원소가 $k$개이므로(유한집합의 (F2)) [[number-of-elements-is-unique|원소의 개수]]의 (3)에 의해 $k \le |Z(f)| \le \deg f$이다.

**5의 증명.** $h = f - g$로 두면 차수의 (3)에 의해 $h$는 $0$이거나 차수가 $n$ 이하이다. $h \ne 0$이라 하자. 모든 $a \in A$에서 대입의 (2)에 의해 $h(a) = f(a) - g(a) = 0$이므로 $A \subseteq Z(h)$이다. (4)에 의해 $Z(h)$는 원소가 $\deg h \le n$개 이하인 유한집합이고, 유한집합의 부분집합의 (1)에 의해 $|A| \le |Z(h)| \le n$이다. 이것은 $|A| \ge n + 1$과 어긋난다((L1)). 따라서 $h = 0$이고 $f = g$이다.

**6의 증명.** $h = f - g \ne 0$이라 하면 모든 $r \in R$에서 $h(r) = 0$이므로 $Z(h) = R$이고, (4)에 의해 $R$이 유한집합이 되어 가정과 어긋난다. 따라서 $f = g$이다. 마지막 문장은 [[function|함수]]의 같음(정의역이 같은 두 함수는 모든 점에서 값이 같을 때 같다)에서 나온다.
:::

## 예시와 반례

:::example[근 셋으로 인수분해되는 정수 계수 다항식]
$\mathbb{Z}[X]$의 $f = X^3 - 7X + 6$은 $f(1) = 1 - 7 + 6 = 0$이므로 (2)에 의해 $X - 1$로 나누어떨어지고, 몫은 (3)에 의해 차수가 $2$인 모닉 $X^2 + X - 6$입니다(검산: $(X - 1)(X^2 + X - 6) = X^3 + X^2 - 6X - X^2 - X + 6 = X^3 - 7X + 6$). 다시 $X^2 + X - 6$에 $2$를 넣으면 $4 + 2 - 6 = 0$이므로 $X^2 + X - 6 = (X - 2)(X + 3)$입니다. 따라서 $f = (X - 1)(X - 2)(X + 3)$이고 $1$, $2$, $-3$이 근입니다. $\mathbb{Z}$는 정역이므로 (4)에 의해 근 전체의 집합은 원소가 $3$개 이하이고, 서로 다른 세 근 $1$, $2$, $-3$으로 이루어진 집합은 원소가 $3$개인 그 부분집합이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 근 전체와 같습니다.
:::

:::counterexample[정역이 아니면 근이 차수보다 많을 수 있다]
$\mathbb{Z}_8[X]$의 $f = X^2 - [1]$은 차수가 $2$이지만 $[1]^2 = [1]$, $[3]^2 = [9] = [1]$, $[5]^2 = [25] = [1]$, $[7]^2 = [49] = [1]$이므로 근이 $[1]$, $[3]$, $[5]$, $[7]$의 넷입니다. $\mathbb{Z}_8$은 정역이 아니므로([[integral-domain|정역]]의 (3)) (4)가 적용되지 않습니다. 증명의 "$(r - c)\,q(r) = 0$이면 $r = c$이거나 $q(r) = 0$"이 깨지는 곳입니다. $c = [1]$, $q = X + [1]$, $r = [3]$이면 $(r - c)\,q(r) = [2][4] = [8] = [0]$인데 $[2] \ne [0]$이고 $[4] \ne [0]$입니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_7$에서 $X^3 - X$의 근을 모두 구하면?]
$r = [0], [1], \dots, [6]$에서 $r^3 - r$은 차례로 $[0]$, $[0]$, $[6]$, $[24] = [3]$, $[60] = [4]$, $[120] = [1]$, $[210] = [0]$이므로 근은 $[0]$, $[1]$, $[6]$입니다. $7$은 소수이므로 $\mathbb{Z}_7$은 정역이고([[integral-domain|정역]]의 (3)), (4)에 의해 근은 많아야 $3$개이므로 셋이 전부라는 것과 맞습니다.
:::

:::check[$X^5 - 1$을 $X - 1$로 나눈 몫의 차수와 최고차계수는?]
$1$은 근이므로 (2)에 의해 나머지는 $0$이고, (3)에 의해 몫은 차수가 $4$이고 최고차계수가 $1$입니다. [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (11)의 (i)을 $x = X$, $q = 5$에 쓰면 $X^5 - 1 = (X - 1)(X^4 + X^3 + X^2 + X + 1)$이므로, (1)의 몫의 유일성에 의해 몫은 $X^4 + X^3 + X^2 + X + 1$입니다.
:::
