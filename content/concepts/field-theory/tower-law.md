---
title: 차수의 곱셈 공식
title_en: Tower Law
aliases: [탑 법칙, 차수의 곱, 확대의 차수의 곱셈 공식, tower law, multiplicativity of degrees]
kind: theorem
field: field-theory
msc: ["12F05"]
level: undergrad
summary: "F ⊆ K ⊆ E 인 체에서 K 가 F 위에서 m 차, E 가 K 위에서 n 차이면 E 는 F 위에서 mn 차이고, 두 기저의 곱 aᵢbⱼ 를 길이 mn 인 열로 늘어놓은 것이 기저이다. 거꾸로 E 가 F 의 유한 확대이면 두 차수가 모두 유한하고 [K : F] 와 [E : K] 는 [E : F] 를 나눈다. 유한 개의 확대를 이은 사슬의 차수는 각 차수의 곱이고, 대수적 원소의 차수는 [E : F] 를 나누며, 차수가 소수인 확대에는 사이의 체가 양 끝뿐이다."
requires: [divisibility, prime-number, well-ordering-principle, division-theorem, mathematical-induction, integers-modulo-n, ring, field, finite-integral-domain-is-a-field, finite-sums-in-a-ring, finite-products-in-a-commutative-ring, polynomial-ring, evaluation-homomorphism, irreducible-polynomial, subfield, vector-space-over-a-field, span-and-independence-over-a-field, basis-over-a-field, dimension-over-a-field, extension-field, kronecker-theorem, algebraic-element-and-minimal-polynomial, simple-algebraic-extension]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "21.1절 Extension Fields, Theorem 21.17 (p.265–266), Corollary 21.18, Corollary 21.19 (p.266); 22.1절 Structure of a Finite Field, Theorem 22.7 의 증명 (p.280); 21.5절 Exercises, 연습문제 23 (p.277); 22.4절 Exercises, 연습문제 1, 2 (p.289); 22.1절 Structure of a Finite Field, Example 22.13 (p.281–282)"
    checked: original
    note: "(2)는 출처 Theorem 21.17(p.265, 'If E is a finite extension of F and K is a finite extension of E, then K is a finite extension of F and [K : F] = [K : E][E : F]')이다. 출처의 문자는 F ⊆ E ⊆ K 이고 이 항목은 F ⊆ K ⊆ E 로 쓴다. 출처의 증명은 {α_iβ_j} 가 기저라는 것을 이중 합 Σ_j Σ_i a_ij α_i β_j 와 Σ_{i,j} a_ij(α_iβ_j) 를 같은 것으로 놓고 보인다. 이 항목은 mn 개의 곱을 l = (j − 1)m + i 로 번호 매긴 길이 mn 인 열로 정하고, 그 열의 합이 블록마다의 합의 합이라는 것을 (1)로 증명한다. (3)의 '거꾸로 E 가 유한 확대이면 두 차수가 유한하다' 는 출처 Theorem 21.17 의 진술에 들어 있지 않고, 출처 Corollary 21.19 의 증명(p.266)은 [F(α) : F] = [F(α) : F(β)][F(β) : F] 를 F ⊂ F(β) ⊂ F(α) 에서 바로 쓴다. (4)는 출처 Corollary 21.18(p.266)이고 출처는 'easily proved using mathematical induction' 이라고만 적는다. (5)의 둘째 문장은 출처 Corollary 21.19(p.266)이다. (5), (6)과 같은 '차수가 나눈다' 는 논법은 출처 Theorem 22.7 의 증명(p.280)이 유한체의 부분체의 원소 개수를 정할 때 쓰고, 22.4절 연습문제 1, 2(p.289)는 유한체 사이의 차수를 묻는다. (6)은 출처 21.5절 연습문제 23(p.277, [E : F] = 2 이면 E 는 분해체)과 같은 '차수가 작은 확대' 의 성질이다. 예시 '$\\mathbb{Z}_2$ 위에 두 번 쌓은 크로네커의 체' 는 출처 22.4절 연습문제 1(p.289)이 [GF(p^12) : GF(p^2)] 같은 사슬의 차수를 계산하게 하는 것과 같은 종류의 계산이고, 그 체의 원소 개수 16 은 출처 Example 22.13(p.281–282)이 다루는 GF(2⁴) 와 같다. 반례 '차수가 $4$인 확대의 사이의 체 $\\iota'(L)$' 의 사이의 체(원소 4 개)는 출처 Theorem 22.7(p.280)이 GF(pⁿ) 의 부분체로 m | n 인 GF(pᵐ) 이 있다고 하는 것을 p = 2, n = 4, m = 2 에서 본 것과 같은 대상이고, 확인 질문 '$E$가 $F$의 유한 확대이고 $[E : F] = 6$일 때 $[K : F] = 4$인 사이의 체 $K$가 있을 수 있는가?' 는 그 정리의 증명이 [E : K] = [E : F][F : K] 에서 m | n 을 얻는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예의 수치 재계산, 차수 논법의 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체, 확대체, 유한 확대, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이며, 확대체를 벡터공간으로 볼 때는 확대체의 (1)의 (i)의 연산으로 본다. 기저, 유한차원, $\dim$은 [[basis-over-a-field|체 위의 기저와 좌표]]와 [[dimension-over-a-field|체 위의 차원]]의 것이다. 대수적, 최소다항식, 원소의 차수는 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 것이고, $F(\alpha)$는 [[simple-algebraic-extension|단순 대수적 확대]]의 것이다. 정수 사이의 나누어떨어짐 $a \mid b$는 [[divisibility|나누어떨어짐]]의 것이고, 정수의 열의 곱과 빈 곱 $1$은 환 $\mathbb{Z}$에서의 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]이다.

**설정.** 아래 (2), (3), (5), (6)에서 $F$, $K$, $E$는 체이고, $F$는 $K$의 부분체, $K$는 $E$의 부분체이다. 이때 [[subfield|부분체]]의 (5)의 (i)에 의해 $F$는 $E$의 부분체이다.

1. (블록으로 나눈 합) $m$, $n$이 자연수라 하자.
   - (i) $\{1, \dots, mn\}$의 모든 원소 $l$은 $i \in \{1, \dots, m\}$, $j \in \{1, \dots, n\}$인 정수의 쌍 $(i, j)$로 $l = (j - 1)m + i$로 정확히 한 가지로 쓰이고, 거꾸로 그런 쌍마다 $(j - 1)m + i \in \{1, \dots, mn\}$이다.
   - (ii) $A$가 덧셈 표기로 쓰는 아벨군이고 $t_1, \dots, t_{mn}$이 $A$의 원소의 열이면
     $$
     \sum_{l=1}^{mn} t_l = \sum_{j=1}^{n} \sum_{i=1}^{m} t_{(j-1)m+i}
     $$
     이다. 오른쪽은 $j$번째 항이 $\sum_{i=1}^{m} t_{(j-1)m+i}$인 합이다.
2. (곱셈 공식) $K$가 $F$의 유한 확대이고 $E$가 $K$의 유한 확대이며 $[K : F] = m$, $[E : K] = n$이라 하자. $a_1, \dots, a_m$이 $K$의 $F$ 위의 기저이고 $b_1, \dots, b_n$이 $E$의 $K$ 위의 기저이면, (1)의 (i)로 $l = (j - 1)m + i$일 때 $c_l = a_i b_j$로 정한 길이 $mn$인 열 $c_1, \dots, c_{mn}$은 $E$의 $F$ 위의 기저이다. 따라서 $E$는 $F$의 유한 확대이고
   $$
   [E : F] = [E : K]\,[K : F]
   $$
   이다.
3. (거꾸로와 나눔) $E$가 $F$의 유한 확대라 하자.
   - (i) $K$는 $F$의 유한 확대이고 $E$는 $K$의 유한 확대이며, $[E : F] = [E : K][K : F]$이다. 따라서 $[K : F]$와 $[E : K]$는 $[E : F]$를 나누고, 둘 다 $[E : F]$ 이하이다.
   - (ii) $[K : F] = [E : F]$인 것은 정확히 $K = E$일 때이고([[extension-field|확대체]]의 (2)의 (iii)), $[E : K] = [E : F]$인 것은 정확히 $K = F$일 때이다.
4. (사슬) $k$가 자연수이고 $F_1, \dots, F_k$가 체이며, $1 \le i \le k - 1$인 모든 $i$에서 $F_i$는 $F_{i+1}$의 부분체이고 $F_{i+1}$은 $F_i$의 유한 확대라 하자. 그러면 $F_1$은 $F_k$의 부분체이고 $F_k$는 $F_1$의 유한 확대이며, $d_i = [F_{i+1} : F_i]$로 둔 길이 $k - 1$인 정수의 열에 대하여
   $$
   [F_k : F_1] = d_1 d_2 \cdots d_{k-1}
   $$
   이다. $k = 1$이면 오른쪽은 빈 곱 $1$이다.
5. (원소의 차수) $E$가 $F$의 유한 확대이고 $\alpha \in E$가 $F$ 위에서 대수적이면 $\alpha$의 $F$ 위의 차수는 $[E : F]$를 나눈다. 또 $\beta \in F(\alpha)$가 $F$ 위에서 대수적이면 $F(\beta) \subseteq F(\alpha)$이고 $\beta$의 $F$ 위의 차수는 $\alpha$의 $F$ 위의 차수를 나눈다.
6. (소수 차수) $E$가 $F$의 유한 확대이고 $[E : F]$가 소수이면 $K = F$이거나 $K = E$이다. 또 $\alpha \in E$가 $F$ 위에서 대수적이고 $\alpha \notin F$이면 $E = F(\alpha)$이다.
:::

:::english
Fields are as in units and fields; subfields, extension fields, finite extensions and degrees $[E : F]$ are those of subfields and extension fields, and an extension field is regarded as a vector space with the operations of item (1)(i) of extension fields. Bases, finite-dimensionality and $\dim$ are those of bases and dimension over a field. Algebraic elements, minimal polynomials and degrees of elements are those of algebraic elements and minimal polynomials, and $F(\alpha)$ is that of simple algebraic extensions. Divisibility $a \mid b$ of integers is that of divisibility, and products of lists of integers and the empty product $1$ are finite products in the ring $\mathbb{Z}$.

**Setting.** In (2), (3), (5) and (6) below, $F$, $K$, $E$ are fields, $F$ is a subfield of $K$ and $K$ is a subfield of $E$. Then, by item (5)(i) of subfields, $F$ is a subfield of $E$.

1. (Sums in blocks) Let $m$ and $n$ be natural numbers.
   - (i) Every element $l$ of $\{1, \dots, mn\}$ can be written as $l = (j - 1)m + i$ in exactly one way with a pair of integers $(i, j)$, $i \in \{1, \dots, m\}$, $j \in \{1, \dots, n\}$; conversely, $(j - 1)m + i \in \{1, \dots, mn\}$ for every such pair.
   - (ii) If $A$ is an abelian group written additively and $t_1, \dots, t_{mn}$ is a list of elements of $A$, then
     $$
     \sum_{l=1}^{mn} t_l = \sum_{j=1}^{n} \sum_{i=1}^{m} t_{(j-1)m+i}.
     $$
     The right side is the sum whose $j$th term is $\sum_{i=1}^{m} t_{(j-1)m+i}$.
2. (Multiplication formula) Let $K$ be a finite extension of $F$ and $E$ a finite extension of $K$, with $[K : F] = m$ and $[E : K] = n$. If $a_1, \dots, a_m$ is a basis of $K$ over $F$ and $b_1, \dots, b_n$ is a basis of $E$ over $K$, then the list $c_1, \dots, c_{mn}$ of length $mn$ defined by $c_l = a_i b_j$ when $l = (j - 1)m + i$ as in (1)(i) is a basis of $E$ over $F$. Hence $E$ is a finite extension of $F$ and
   $$
   [E : F] = [E : K]\,[K : F].
   $$
3. (Converse and divisibility) Let $E$ be a finite extension of $F$.
   - (i) $K$ is a finite extension of $F$, $E$ is a finite extension of $K$, and $[E : F] = [E : K][K : F]$. Hence $[K : F]$ and $[E : K]$ divide $[E : F]$, and both are at most $[E : F]$.
   - (ii) $[K : F] = [E : F]$ if and only if $K = E$ (item (2)(iii) of extension fields), and $[E : K] = [E : F]$ if and only if $K = F$.
4. (Chains) Let $k$ be a natural number and $F_1, \dots, F_k$ fields such that, for every $i$ with $1 \le i \le k - 1$, $F_i$ is a subfield of $F_{i+1}$ and $F_{i+1}$ is a finite extension of $F_i$. Then $F_1$ is a subfield of $F_k$, $F_k$ is a finite extension of $F_1$, and for the list of integers $d_i = [F_{i+1} : F_i]$ of length $k - 1$,
   $$
   [F_k : F_1] = d_1 d_2 \cdots d_{k-1}.
   $$
   If $k = 1$, the right side is the empty product $1$.
5. (Degrees of elements) If $E$ is a finite extension of $F$ and $\alpha \in E$ is algebraic over $F$, then the degree of $\alpha$ over $F$ divides $[E : F]$. Moreover, if $\beta \in F(\alpha)$ is algebraic over $F$, then $F(\beta) \subseteq F(\alpha)$ and the degree of $\beta$ over $F$ divides the degree of $\alpha$ over $F$.
6. (Prime degree) If $E$ is a finite extension of $F$ and $[E : F]$ is a prime, then $K = F$ or $K = E$. Moreover, if $\alpha \in E$ is algebraic over $F$ and $\alpha \notin F$, then $E = F(\alpha)$.
:::

## 직관

$K$의 원소를 적는 데 $F$의 원소 $m$개가, $E$의 원소를 적는 데 $K$의 원소 $n$개가 필요하면, $E$의 원소를 적는 데는 $F$의 원소가 $mn$개 필요합니다. $E$의 원소는 $b_1, \dots, b_n$의 $K$ 계수 일차결합이고, 그 계수 하나하나가 다시 $a_1, \dots, a_m$의 $F$ 계수 일차결합이기 때문입니다. 서랍장 $n$개에 서랍이 $m$개씩 있으면 서랍은 모두 $mn$개인 것과 같습니다. 서랍장이 $b_j$에, 그 안의 서랍이 $a_i$에, 서랍 하나가 곱 $a_ib_j$에 해당합니다. (1)은 서랍에 $1$부터 $mn$까지 번호를 붙이는 방법을 정한 것입니다.

곱셈 공식에서 나눔이 나옵니다((3)). 차수가 소수인 확대에서는 사이에 낄 수 있는 체의 차수가 $1$이거나 전체와 같으므로, 사이의 체는 양 끝뿐입니다((6)). 원소의 차수는 그 원소를 붙인 체의 차수이므로 역시 $[E : F]$를 나눕니다((5)). 차수가 $2$인 확대에는 차수가 $3$인 원소가 없습니다.

## 증명

:::idea
$E$의 원소를 $b_j$의 $K$ 계수로 쓰고, 그 계수를 다시 $a_i$의 $F$ 계수로 쓰면 $a_ib_j$의 $F$ 계수 일차결합이 된다. 일차독립도 같은 두 단계로 보인다. 나머지는 이 공식과 차원의 비교에서 나온다.
:::

:::hint
(1)의 (ii)는 $n$에 대한 귀납법입니다. $\sum_{l=1}^{(n+1)m}$을 $\sum_{l=1}^{nm}$과 $\sum_{l=nm+1}^{nm+m}$으로 쪼갭니다.
:::

:::hint
(3)의 (i)에서 $E$의 $F$ 위의 기저는 $F \subseteq K$이므로 $E$를 $K$ 위에서도 생성합니다.
:::

:::proof
**쓰는 사실.** "확대체의 (n)"은 [[extension-field|확대체]]의 (n), "합의 (n)"은 [[finite-sums-in-a-ring|환의 유한 합]]의 (n), "차원의 (n)"은 [[dimension-over-a-field|체 위의 차원]]의 (n), "단순의 (n)"은 [[simple-algebraic-extension|단순 대수적 확대]]의 (n)이다. 정수의 부등식은 [[prime-number|소수]]의 (Z1)–(Z3)과 [[well-ordering-principle|정렬 원리]]의 (Z5)–(Z8), (L1)–(L3)을 쓴다. 차수는 확대체의 (2)의 (i)에 의해 자연수이다.

**1.** (i) $l \in \{1, \dots, mn\}$이면 [[division-theorem|나눗셈 정리]]에 의해 $l - 1 = qm + r$이고 $0 \le r < m$인 정수 $q$, $r$이 정확히 한 쌍 있다. $q < 0$이면 (Z1)에 의해 $q \le -1$이고 (Z3)에 의해 $qm + r \le -m + r < 0$이 되어 $0 \le l - 1$과 어긋나고, $q \ge n$이면 $qm + r \ge nm$이 되어 $l - 1 \le mn - 1$과 어긋난다. 따라서 $0 \le q \le n - 1$이고, $i = r + 1$, $j = q + 1$로 두면 $i \in \{1, \dots, m\}$, $j \in \{1, \dots, n\}$, $l = (j - 1)m + i$이다. 이런 쌍이 둘이면 나눗셈 정리의 하나뿐임에 의해 같다. 거꾸로 그런 쌍에서 $1 \le (j - 1)m + i \le (n - 1)m + m = nm$이다.

(ii) $n$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. $n = 1$이면 오른쪽은 합의 (1)에 의해 항이 하나인 합 $\sum_{i=1}^{m} t_i$이고 왼쪽과 같다. $n$에서 성립한다고 하고 길이 $(n + 1)m$인 열을 보자. 합의 (4)를 $l = nm$에서 쓰고, 합의 (5)로 첨자를 $nm$만큼 옮기면
$$
\begin{aligned}
\sum_{l=1}^{(n+1)m} t_l &= \sum_{l=1}^{nm} t_l + \sum_{l=nm+1}^{nm+m} t_l \\
&= \sum_{l=1}^{nm} t_l + \sum_{i=1}^{m} t_{nm+i}
\end{aligned}
$$
이다. 귀납 가정에 의해 첫 합은 $\sum_{j=1}^{n} \sum_{i=1}^{m} t_{(j-1)m+i}$이고, 둘째 합은 $j = n + 1$인 블록이므로 합의 (2)에 의해 전체가 $\sum_{j=1}^{n+1} \sum_{i=1}^{m} t_{(j-1)m+i}$이다.

**2.** $F \subseteq K$이므로 $F$의 원소는 $K$의 원소이고, $x \in F$와 $a \in K$, $b \in E$에 대하여 $E$의 곱셈의 결합법칙에 의해 $x(ab) = (xa)b$이다. 확대체의 (1)의 (i)에 의해 $E$, $K$의 스칼라배는 $E$에서의 곱이다.

생성: $u \in E$라 하자. $b$는 $E$의 $K$ 위의 기저이므로 [[basis-over-a-field|체 위의 기저와 좌표]]의 정의에 의해 $u = \sum_{j=1}^{n} \beta_j b_j$인 $K$의 원소의 열 $\beta$(좌표)가 하나 있고, 각 $\beta_j$에 대하여 $\beta_j = \sum_{i=1}^{m} x_{i,j} a_i$인 $F$의 원소 $x_{1,j}, \dots, x_{m,j}$(좌표)가 하나씩 있다. 합의 (9)에 의해
$$
\begin{aligned}
u &= \sum_{j=1}^{n} \Bigl(\sum_{i=1}^{m} x_{i,j} a_i\Bigr) b_j \\
&= \sum_{j=1}^{n} \sum_{i=1}^{m} x_{i,j}\,(a_i b_j)
\end{aligned}
$$
이다. (1)의 (i)로 $l = (j - 1)m + i$일 때 $y_l = x_{i,j}$로 두면 (1)의 (ii)에 의해 $u = \sum_{l=1}^{mn} y_l c_l$이다.

일차독립: $F$의 원소의 열 $y_1, \dots, y_{mn}$에 대하여 $\sum_{l=1}^{mn} y_l c_l = 0$이라 하자. (1)의 (ii)와 합의 (9)에 의해
$$
\begin{aligned}
&0 = \sum_{j=1}^{n} \gamma_j b_j, \\
&\gamma_j = \sum_{i=1}^{m} y_{(j-1)m+i}\, a_i
\end{aligned}
$$
이다. $\gamma_j$는 $K$의 원소의 합이므로 $K$에 속하고([[subfield|부분체]]의 (3)의 (iii)), $b$가 $K$ 위에서 일차독립이므로 모든 $j$에서 $\gamma_j = 0$이다. $a$가 $F$ 위에서 일차독립이므로 모든 $i$, $j$에서 $y_{(j-1)m+i} = 0$이고, (1)의 (i)에 의해 모든 $l$에서 $y_l = 0$이다. 따라서 $c$는 기저이고, 차원의 (4)에 의해 $[E : F] = mn$이다.

**3.** (i) 확대체의 (2)의 (iii)에 의해 $K$는 $F$의 유한 확대이다. $[E : F] = N$이고 $v_1, \dots, v_N$이 $E$의 $F$ 위의 기저라 하자. $u \in E$이면 $u = \sum_{k=1}^{N} x_k v_k$인 $x_k \in F \subseteq K$가 있으므로 $u$는 $v_1, \dots, v_N$의 $K$ 계수 일차결합이다. 곧 이 열은 $E$를 $K$ 위에서 생성하고, 차원의 (5)의 (iv)에 의해 $E$는 $K$ 위에서 유한차원이다. (2)에 의해 $[E : F] = [E : K][K : F]$이다. 두 차수는 자연수이므로 이 식에서 $[E : F]$를 나누고, (Z1)에 의해 각각 $1$ 이상이므로 (Z3)에 의해 둘 다 $[E : F]$ 이하이다.

(ii) 앞 문장은 확대체의 (2)의 (iii)이다. $[E : F] = [E : K][K : F]$이고 $[E : K] \ne 0$이므로 $[E : K] = [E : F]$인 것은 정확히 $[K : F] = 1$일 때이고([[prime-number|소수]]의 (Z4)와 정수의 계산), 확대체의 (2)의 (ii)에 의해 그것은 정확히 $K = F$일 때이다.

**4.** $k$에 대한 귀납법으로 보인다. $k = 1$이면 [[subfield|부분체]]의 (4)에 의해 $F_1$은 $F_1$의 부분체이고, 확대체의 (2)의 (ii)에 의해 $[F_1 : F_1] = 1$이며, 이것은 빈 곱이다([[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (1)). $k$에서 성립하고 $F_1, \dots, F_{k+1}$이 가정을 만족한다고 하자. 귀납 가정에 의해 $F_1$은 $F_k$의 부분체이고 $[F_k : F_1] = d_1 \cdots d_{k-1}$이다. $F_k$는 $F_{k+1}$의 부분체이므로 부분체의 (5)의 (i)에 의해 $F_1$은 $F_{k+1}$의 부분체이다. (2)를 $F = F_1$, $K = F_k$, $E = F_{k+1}$에 쓰면 $F_{k+1}$은 $F_1$의 유한 확대이고 $[F_{k+1} : F_1] = d_k\,(d_1 \cdots d_{k-1})$이며, 가환환의 유한 곱의 (2)와 $\mathbb{Z}$의 교환법칙에 의해 이것은 $d_1 \cdots d_k$이다.

**5.** 단순의 (1)에 의해 $F(\alpha)$는 $F$를 포함하는 $E$의 부분체이고, 부분체의 (5)의 (i)에 의해 $F$는 $F(\alpha)$의 부분체이다. (3)의 (i)을 $K = F(\alpha)$에 쓰면 $[F(\alpha) : F]$는 $[E : F]$를 나누고, 단순의 (3)의 (iii)에 의해 $[F(\alpha) : F]$는 $\alpha$의 차수이다. 둘째 문장: $F(\alpha)$는 $F$와 $\beta$를 포함하는 $E$의 부분체이므로 단순의 (1)에 의해 $F(\beta) \subseteq F(\alpha)$이다. $F(\alpha)$는 $F$의 유한 확대이므로(단순의 (3)의 (iii)) 첫 문장을 체 $F(\alpha)$와 원소 $\beta$에 쓰면 $\beta$의 차수는 $[F(\alpha) : F]$, 곧 $\alpha$의 차수를 나눈다.

**6.** $p = [E : F]$라 하자. (3)의 (i)에 의해 $[K : F]$는 $p$의 양의 약수이므로 소수의 정의에 의해 $1$이거나 $p$이다. $1$이면 확대체의 (2)의 (ii)에 의해 $K = F$이고, $p$이면 (3)의 (ii)에 의해 $K = E$이다. 둘째 문장: 단순의 (4)에 의해 $F(\alpha) \ne F$이고, 첫 문장을 $K = F(\alpha)$에 쓰면 $F(\alpha) = E$이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_2$ 위에 두 번 쌓은 크로네커의 체]
$\mathbb{Z}_2$는 체이고([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)) $h = X^2 + X + [1]$은 $[0]$, $[1]$에서 값이 $[1]$이므로 기약입니다. $h$로 만든 [[kronecker-theorem|크로네커 정리]]의 체를 $L$, 단사를 $\iota$, $X$의 잉여류를 $\alpha$라 합시다. $L = \{0, 1, \alpha, 1 + \alpha\}$이고 $1 + 1 = 0$, $\alpha^2 = \alpha + 1$입니다. 이제 체 $L$ 위의 $h' = X^2 + X + \alpha \in L[X]$에 $L$의 네 원소를 넣으면
$$
\begin{aligned}
h'(0) &= \alpha, \\
h'(1) &= \alpha, \\
h'(\alpha) &= \alpha^2 = \alpha + 1, \\
h'(1 + \alpha) &= \alpha + (1 + \alpha) + \alpha \\
&= 1 + \alpha
\end{aligned}
$$
이므로($(1 + \alpha)^2 = 1 + \alpha^2 = \alpha$) 근이 없고, 차수가 $2$이므로 [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 $L$ 위에서 기약입니다. $h'$로 다시 크로네커 정리를 쓴 체를 $L'$, 단사를 $\iota' : L \to L'$이라 합시다.

크로네커 정리의 (2)의 (iii)에 의해 $[L' : \iota'(L)] = 2$이고 $[L : \iota(\mathbb{Z}_2)] = 2$입니다. 뒤의 것에 [[extension-field|확대체]]의 (5)의 (iii)을 $\tau = \iota'$에 쓰면 $[\iota'(L) : \iota'(\iota(\mathbb{Z}_2))] = 2$입니다. (2)에 의해 $[L' : \iota'(\iota(\mathbb{Z}_2))] = 2 \cdot 2 = 4$입니다. 크로네커 정리의 (4)로 세어도 $|L'| = |L|^2 = 16 = 2^4$으로 맞습니다.
:::

:::counterexample[차수가 $4$인 확대의 사이의 체 $\iota'(L)$]
위 예시에서 $[L' : \iota'(\iota(\mathbb{Z}_2))] = 4$이고, 사이의 체 $\iota'(L)$은 차수가 $2$여서 양 끝의 어느 것과도 다릅니다. (6)은 차수가 소수일 때 사이의 체가 양 끝뿐이라고 말하고, 이 예처럼 차수가 소수가 아니면 양 끝이 아닌 사이의 체가 있을 수 있습니다. 그래도 (3)에 의해 사이의 체의 차수는 $4$의 약수 $1, 2, 4$ 가운데 하나입니다.
:::

## 확인 질문

:::check[$E$가 $F$의 유한 확대이고 $[E : F] = 6$일 때 $[K : F] = 4$인 사이의 체 $K$가 있을 수 있는가?]
없습니다. (3)의 (i)에 의해 $[K : F]$는 $6$을 나누는데 $4$는 $6$을 나누지 않습니다.
:::

:::check[$E$가 $F$의 유한 확대이고 $[E : F] = 2$이면, $F$ 위에서 대수적이고 $F$ 위의 차수가 $3$인 $E$의 원소가 있을 수 있는가?]
없습니다. (5)에 의해 그런 원소의 차수는 $2$를 나누는데 $3$은 $2$를 나누지 않습니다.
:::
