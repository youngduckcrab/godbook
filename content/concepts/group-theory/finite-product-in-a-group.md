---
title: 군의 유한 곱
title_en: Finite Products in a Group
aliases: [군의 원소의 열, 여러 원소의 곱, 빈 곱, 일반 결합법칙, 곱의 역원, finite product in a group, empty product, generalized associative law, inverse of a product]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 군의 원소의 길이 n ≥ 0 인 열의 곱을 재귀 정리로 정의한다(빈 곱은 항등원). 끝항 떼기, 이어 붙이기(일반 결합법칙), 맨 앞 떼기, 역원은 순서를 뒤집은 역원들의 곱이라는 것, 모든 항이 같으면 거듭제곱이라는 것, 준동형·교환·부분군과의 관계, 대칭군에서의 값을 보인다.
requires: [set, function, function-composition, adding-or-removing-an-element, finite-set, natural-numbers-are-infinite, mathematical-induction, even-and-odd, prime-number, well-ordering-principle, recursion-theorem, group, group-basic-properties, subgroup, power-in-a-group, group-homomorphism, symmetric-group]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "3.2절, Proposition 3.19 와 그 증명 (p.36), Theorem 3.23 앞 문단의 거듭제곱 gⁿ = g · g ⋯ g (p.37); 3.5절 Exercises, 연습문제 27 (p.42); 5.1절 Theorem 5.9 의 증명 (p.62), Theorem 5.15 의 증명과 Theorem 5.16 의 증명 (p.64)"
    checked: original
    note: "출처는 여러 원소의 곱을 정의 없이 쓴다. 3.2절(p.37)은 자연수 n 에 대해 gⁿ 을 'g · g ⋯ g (n times)' 로 적고, Theorem 5.9 의 증명(p.62)은 σ = σ₁σ₂⋯σ_r, Theorem 5.15 의 증명(p.64)은 σ 의 역을 σ_m ⋯ σ₁ 로, Theorem 5.16 의 증명(p.64)은 σ⁻¹ = σ_r σ_{r−1} ⋯ σ₁ 로 쓴다. 이 항목의 재귀 정의와 (1)–(10)의 진술과 증명은 이 사이트가 썼다. 일반 결합법칙((3))은 출처에서 찾지 못했다(검색어 'associativ' 24건은 각 구조의 결합법칙과 합성의 결합법칙, 'general associative' 0건, 'parenthes' 2건은 책 끝의 라이선스 문구. 3.5절 연습문제 1–54 를 읽었다). (5)는 출처 연습문제 3.27(p.42) 'Prove that the inverse of g₁g₂⋯gₙ is gₙ⁻¹gₙ₋₁⁻¹⋯g₁⁻¹' 과 같은 내용이다. (6)은 출처가 p.37 에서 gⁿ 을 정의하는 식을 이 사이트의 거듭제곱(power-in-a-group, 재귀로 정의)과 맞춘 것이다. 'empty product' 를 찾으면 0건이고, 이 항목은 빈 곱을 e 로 정한다. 반례 '역원을 곱할 때 순서를 뒤집지 않으면 틀릴 수 있다' 는 출처 연습문제 3.27 의 등식에서 순서를 지키지 않으면 틀린다는 것을 대칭군의 두 원소로 보인 것이고, 출처 연습문제 3.16(p.41, (gh)ⁿ ≠ gⁿhⁿ 인 예를 들라)과 같은 종류의 물음(교환되지 않는 두 원소에서 순서가 결과를 바꾼다)이다. 그 반례의 (fg)⁻¹ = g⁻¹f⁻¹ 는 출처 Proposition 3.19(p.36) '(ab)⁻¹ = b⁻¹a⁻¹' 를 두 원소에 쓴 것이고, 확인 질문 '$G$의 원소 $a$, $b$에 대하여 길이 $4$인 열 $a, b, b^{-1}, a^{-1}$의 곱은 무엇인가?' 의 계산 abb⁻¹a⁻¹ = e 는 그 증명(p.36)의 첫 줄과 같다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(순환치환 (8) 에 항등치환과 ℤ 위의 옮기기를 대입, 뒤 단원 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이라 하자. 곱 $xy$, 역원 $x^{-1}$, 세 원소의 곱 $xyz$는 [[group|군]]의 표기이고, 거듭제곱 $x^n$은 [[power-in-a-group|군의 거듭제곱]]의 것이다. $\{1, \dots, n\}$은 [[finite-set|유한집합]]의 것이고, $\mathbb{N}$은 ([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해) 양의 정수의 집합이다.

**군의 원소의 열.** $n$이 $0$ 이상인 정수일 때, [[function|함수]] $a : \{1, \dots, n\} \to G$를 $G$의 원소의 길이 $n$인 **열**(finite sequence)이라 한다. $a(i)$를 $a_i$로 써서 열을 $a_1, \dots, a_n$으로 나타내고, $a_i$를 $i$번째 **항**(term)이라 한다. 같은 원소가 여러 자리에 나와도 된다. 함수의 같음에 의해, 길이가 같은 두 열이 같은 것은 정확히 모든 자리에서 항이 같을 때이다. $n = 0$인 열은 정의역이 공집합인 함수 하나뿐이고 **빈 열**(empty sequence)이라 한다. $0 \le k \le n$일 때 열 $a_1, \dots, a_n$의 **처음 $k$개**란 $a$를 $\{1, \dots, k\}$로 [[adding-or-removing-an-element|제한]]한 길이 $k$인 열 $a_1, \dots, a_k$이다. 자리 $i$마다 $G$의 원소가 식으로 하나씩 정해지면 [[recursion-theorem|재귀 정리]]의 (1)에 의해 그 원소들을 항으로 갖는 열이 있다.

**곱.** 길이 $n$인 열 $a_1, \dots, a_n$의 **곱**(product) $a_1 a_2 \cdots a_n$을 다음과 같이 정한다.

- $n = 0$이면 $a_1 \cdots a_n = e$이고, 이것을 **빈 곱**(empty product)이라 한다.
- $n \ge 1$이면, 자연수 $k$와 $s \in G$마다 $k + 1 \le n$일 때 $s\,a_{k+1}$을, $k + 1 > n$일 때 $s$를 값으로 하는 함수 $q : \mathbb{N} \times G \to G$를 생각한다(재귀 정리의 (1)). 재귀 정리에 의해 $P(1) = a_1$이고 모든 자연수 $k$에서 $P(k + 1) = q(k, P(k))$인 함수 $P : \mathbb{N} \to G$가 정확히 하나 있고, $a_1 \cdots a_n = P(n)$으로 정한다.

따라서 열마다 그 곱인 $G$의 원소가 하나로 정해진다. 항이 식인 열의 곱도 같은 꼴로 쓴다. 예컨대 $x, y, z, w \in G$이면 $xyzw$는 길이 $4$인 열 $x, y, z, w$의 곱이다. 이 항목부터는 네 개 이상의 원소의 곱도 괄호 없이 이렇게 쓴다(아래 (1)에 의해 세 원소의 곱 $xyz$와 맞는다). 곱 기호 $\Pi$는 쓰지 않는다.

다음이 성립한다. 아래에서 $m$, $n$은 $0$ 이상인 정수이다.

1. (짧은 열) 빈 곱은 $e$이다. 길이 $1$인 열 $a_1$의 곱은 $a_1$이고, 길이 $2$인 열 $a_1, a_2$의 곱은 군의 곱 $a_1 a_2$이며, 길이 $3$인 열 $a_1, a_2, a_3$의 곱은 군의 표기의 $a_1 a_2 a_3 = (a_1 a_2) a_3$이다.
2. (끝항 떼기) 길이 $n + 1$인 열 $a_1, \dots, a_{n+1}$에 대하여 $a_1 \cdots a_{n+1} = (a_1 \cdots a_n)\,a_{n+1}$이다. 오른쪽의 $a_1 \cdots a_n$은 처음 $n$개의 곱이다.
3. (이어 붙이기) $a_1, \dots, a_m$과 $b_1, \dots, b_n$이 열일 때, $c_i = a_i$ ($1 \le i \le m$), $c_{m+j} = b_j$ ($1 \le j \le n$)로 정한 길이 $m + n$인 열 $c_1, \dots, c_{m+n}$을 두 열을 **이어 붙인 열**(concatenation)이라 한다. 그러면
   $$(a_1 \cdots a_m)(b_1 \cdots b_n) = c_1 \cdots c_{m+n}$$
   이다. 이것을 **일반 결합법칙**(generalized associative law)이라고도 한다.
4. (맨 앞 떼기) $n \ge 1$이고 $a_1, \dots, a_n$이 열이라 하자. $b_j = a_{j+1}$ ($1 \le j \le n - 1$)로 정한 길이 $n - 1$인 열의 곱을 $a_2 \cdots a_n$으로 쓴다($n = 1$이면 빈 곱 $e$이다). 그러면 $a_1 \cdots a_n = a_1 (a_2 \cdots a_n)$이다.
5. (역원) 열 $a_1, \dots, a_n$에 대하여 $h_j = (a_{n+1-j})^{-1}$ ($1 \le j \le n$)로 정한 열의 곱을 $a_n^{-1} \cdots a_1^{-1}$로 쓴다. 그러면
   $$(a_1 \cdots a_n)^{-1} = a_n^{-1} \cdots a_1^{-1}$$
   이다.
6. (모든 항이 같은 열) $g \in G$이고 길이 $n$인 열의 모든 항이 $g$이면 그 곱은 $g^n$이다.
7. (준동형) $G'$이 군이고 $\varphi : G \to G'$이 [[group-homomorphism|군 준동형]]이면, 열 $a_1, \dots, a_n$에 대하여 $\varphi(a_1 \cdots a_n) = \varphi(a_1) \cdots \varphi(a_n)$이다. 오른쪽은 $i$번째 항이 $\varphi(a_i)$인 $G'$의 원소의 열의 $G'$에서의 곱이다.
8. (교환) $b \in G$가 모든 $i \in \{1, \dots, n\}$에서 $b a_i = a_i b$이면 $b\,(a_1 \cdots a_n) = (a_1 \cdots a_n)\,b$이다.
9. (부분군) $H$가 $G$의 [[subgroup|부분군]]이고 열 $a_1, \dots, a_n$의 모든 항이 $H$에 속하면 $a_1 \cdots a_n \in H$이고, 이 곱은 군 $H$에서 같은 열의 곱과 같다.
10. (대칭군에서의 값) $X$가 집합이고 $G$가 [[symmetric-group|대칭군]] $S_X$이며 $\sigma_1, \dots, \sigma_{n+1}$이 $S_X$의 원소의 열이면, 모든 $x \in X$에서
    $$
    \begin{aligned}
    &(\sigma_1 \cdots \sigma_{n+1})(x) \\
    &\quad = (\sigma_1 \cdots \sigma_n)\bigl(\sigma_{n+1}(x)\bigr), \\
    &(\sigma_1 \cdots \sigma_{n+1})(x) \\
    &\quad = \sigma_1\bigl((\sigma_2 \cdots \sigma_{n+1})(x)\bigr)
    \end{aligned}
    $$
    이다. 첫 줄의 $\sigma_1 \cdots \sigma_n$은 처음 $n$개의 곱이고, 둘째 줄의 $\sigma_2 \cdots \sigma_{n+1}$은 (4)의 뜻이다.
:::

:::english
Let $G$ be a group with identity $e$. Products $xy$, inverses $x^{-1}$ and triple products $xyz$ are written as in the entry on groups, and powers $x^n$ are those of the entry on powers in a group. The set $\{1, \dots, n\}$ is that of the entry on finite sets, and $\mathbb{N}$ is the set of positive integers.

**Sequences of group elements.** For an integer $n \ge 0$, a function $a : \{1, \dots, n\} \to G$ is called a **finite sequence** of elements of $G$ of length $n$. We write $a(i)$ as $a_i$, denote the sequence by $a_1, \dots, a_n$, and call $a_i$ its $i$th **term**. The same element may occur in several places. By equality of functions, two sequences of the same length are equal exactly when their terms agree in every place. For $n = 0$ there is exactly one sequence, the function with empty domain, called the **empty sequence**. For $0 \le k \le n$, the **first $k$ terms** of $a_1, \dots, a_n$ form the sequence $a_1, \dots, a_k$ of length $k$ obtained by restricting $a$ to $\{1, \dots, k\}$. If an element of $G$ is given by an expression for each place $i$, then by (1) of the recursion theorem there is a sequence having these elements as its terms.

**Product.** The **product** $a_1 a_2 \cdots a_n$ of a sequence $a_1, \dots, a_n$ of length $n$ is defined as follows.

- If $n = 0$, then $a_1 \cdots a_n = e$; this is called the **empty product**.
- If $n \ge 1$, consider the function $q : \mathbb{N} \times G \to G$ whose value at a natural number $k$ and $s \in G$ is $s\,a_{k+1}$ if $k + 1 \le n$ and $s$ if $k + 1 > n$ (by (1) of the recursion theorem). By the recursion theorem there is exactly one function $P : \mathbb{N} \to G$ with $P(1) = a_1$ and $P(k + 1) = q(k, P(k))$ for every natural number $k$, and we set $a_1 \cdots a_n = P(n)$.

Thus each sequence determines exactly one element of $G$, its product. Products of sequences whose terms are expressions are written in the same way; for instance, if $x, y, z, w \in G$, then $xyzw$ is the product of the sequence $x, y, z, w$ of length $4$. From this entry on, products of four or more elements are also written without parentheses in this way (by (1) below this agrees with the triple product $xyz$). The product sign $\Pi$ is not used.

The following hold, where $m$ and $n$ are integers $\ge 0$.

1. (Short sequences) The empty product is $e$. The product of a sequence $a_1$ of length $1$ is $a_1$, the product of a sequence $a_1, a_2$ of length $2$ is the group product $a_1 a_2$, and the product of a sequence $a_1, a_2, a_3$ of length $3$ is $a_1 a_2 a_3 = (a_1 a_2) a_3$ in the notation for groups.
2. (Splitting off the last term) For a sequence $a_1, \dots, a_{n+1}$ of length $n + 1$, $a_1 \cdots a_{n+1} = (a_1 \cdots a_n)\,a_{n+1}$, where $a_1 \cdots a_n$ on the right is the product of the first $n$ terms.
3. (Concatenation) For sequences $a_1, \dots, a_m$ and $b_1, \dots, b_n$, the sequence $c_1, \dots, c_{m+n}$ of length $m + n$ with $c_i = a_i$ ($1 \le i \le m$) and $c_{m+j} = b_j$ ($1 \le j \le n$) is called the **concatenation** of the two sequences. Then
   $$(a_1 \cdots a_m)(b_1 \cdots b_n) = c_1 \cdots c_{m+n}.$$
   This is also called the **generalized associative law**.
4. (Splitting off the first term) Let $n \ge 1$ and let $a_1, \dots, a_n$ be a sequence. The product of the sequence of length $n - 1$ given by $b_j = a_{j+1}$ ($1 \le j \le n - 1$) is written $a_2 \cdots a_n$ (for $n = 1$ it is the empty product $e$). Then $a_1 \cdots a_n = a_1 (a_2 \cdots a_n)$.
5. (Inverse) For a sequence $a_1, \dots, a_n$, the product of the sequence given by $h_j = (a_{n+1-j})^{-1}$ ($1 \le j \le n$) is written $a_n^{-1} \cdots a_1^{-1}$. Then
   $$(a_1 \cdots a_n)^{-1} = a_n^{-1} \cdots a_1^{-1}.$$
6. (Constant sequences) If $g \in G$ and every term of a sequence of length $n$ is $g$, then its product is $g^n$.
7. (Homomorphisms) If $G'$ is a group and $\varphi : G \to G'$ is a group homomorphism, then for a sequence $a_1, \dots, a_n$ we have $\varphi(a_1 \cdots a_n) = \varphi(a_1) \cdots \varphi(a_n)$, where the right side is the product in $G'$ of the sequence of elements of $G'$ whose $i$th term is $\varphi(a_i)$.
8. (Commuting) If $b \in G$ satisfies $b a_i = a_i b$ for every $i \in \{1, \dots, n\}$, then $b\,(a_1 \cdots a_n) = (a_1 \cdots a_n)\,b$.
9. (Subgroups) If $H$ is a subgroup of $G$ and every term of $a_1, \dots, a_n$ lies in $H$, then $a_1 \cdots a_n \in H$, and this product equals the product of the same sequence in the group $H$.
10. (Values in the symmetric group) If $X$ is a set, $G$ is the symmetric group $S_X$, and $\sigma_1, \dots, \sigma_{n+1}$ is a sequence of elements of $S_X$, then for every $x \in X$
    $$
    \begin{aligned}
    &(\sigma_1 \cdots \sigma_{n+1})(x) \\
    &\quad = (\sigma_1 \cdots \sigma_n)\bigl(\sigma_{n+1}(x)\bigr), \\
    &(\sigma_1 \cdots \sigma_{n+1})(x) \\
    &\quad = \sigma_1\bigl((\sigma_2 \cdots \sigma_{n+1})(x)\bigr).
    \end{aligned}
    $$
    In the first line $\sigma_1 \cdots \sigma_n$ is the product of the first $n$ terms, and in the second line $\sigma_2 \cdots \sigma_{n+1}$ is as in (4).
:::

## 직관

군의 곱은 두 원소의 곱만 정해 줍니다. 원소 여러 개를 곱하려면 어떤 순서로 둘씩 묶을지 정해야 하는데, 이 항목은 "왼쪽부터 하나씩 곱해 나간다"로 정합니다. 계산기에 수를 하나씩 넣으며 곱을 누적하는 것과 같습니다. 비유가 맞는 곳은 누적값 $P(k)$가 처음 $k$개의 곱이고 다음 항을 오른쪽에 곱해 $P(k+1)$을 얻는다는 점이고, 맞지 않는 곳은 군의 곱이 교환되지 않을 수 있어 항의 순서를 바꾸면 결과가 달라질 수 있다는 점입니다.

(3)은 어떻게 둘씩 묶어도 결과가 같다는 일반 결합법칙입니다. 두 덩어리를 따로 곱한 뒤 곱해도, 이어 붙여 한꺼번에 곱해도 같습니다. 그래서 이 항목 뒤로는 $\sigma_1 \sigma_2 \sigma_3 \sigma_4$처럼 괄호 없이 써도 뜻이 하나로 정해집니다. 반면 항의 순서는 그대로 지켜야 합니다. (5)에서 역원이 순서를 뒤집은 곱이 되는 것은 양말을 신고 신발을 신은 것을 되돌리려면 신발부터 벗어야 하는 것과 같습니다.

빈 곱을 $e$로 정하면 (2)와 (3)이 길이 $0$에서도 그대로 성립합니다. 예컨대 (2)에서 $n = 0$이면 $a_1 = e\,a_1$이 되고, (6)에서 $n = 0$이면 $e = g^0$이 됩니다.

## 증명

:::idea
모든 성질은 길이에 대한 귀납법이다. 핵심은 (2)이고, 나머지는 (2)와 군의 결합법칙을 되풀이해 쓴다. (3)은 둘째 열의 길이에 대한 귀납법이다.
:::

:::hint
(2)는 정의의 함수 $P$를 길이 $n + 1$인 열과 처음 $n$개의 열에 대해 각각 만들고, $1 \le k \le n$에서 두 함수의 값이 같다는 것을 $k$에 대한 귀납법으로 보이면 된다.
:::

:::hint
(3)에서 길이 $m + n + 1$인 이어 붙인 열의 처음 $m + n$개는, 첫째 열과 둘째 열의 처음 $n$개를 이어 붙인 열이다.
:::

:::proof
귀납법은 [[mathematical-induction|수학적 귀납법]](시작점이 $0$이나 $1$인 꼴)이다. 정수의 순서와 계산은 [[prime-number]]의 (Z1), [[well-ordering-principle]]의 (Z5)–(Z7)과 그 진술에서 받아들인 계산 법칙을 쓰고, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실이다. 군의 계산은 [[group|군]]의 결합법칙과 세 원소의 곱 표기를 쓴다.

**정의에 대하여.** 각 $(k, s)$에서 $k + 1 \le n$과 $k + 1 > n$ 가운데 정확히 하나가 성립하므로((Z5)) $q$의 값은 하나로 정해지고, 재귀 정리의 (1)에 의해 $q$는 함수 $\mathbb{N} \times G \to G$이다. 따라서 재귀 정리를 쓸 수 있다.

**(2)의 증명.** $n = 0$이면 길이 $1$인 열의 함수 $P$는 $P(1) = a_1$이므로 곱은 $a_1$이고, 빈 곱과 $a_1$의 곱 $e\,a_1$도 $a_1$이다([[group|군]]의 (2)). $n \ge 1$이라 하고, 길이 $n + 1$인 열의 함수를 $P$, 그 처음 $n$개의 열의 함수를 $P'$라 하자. 두 열의 $q$를 각각 $q$, $q'$이라 하면, $k + 1 \le n$일 때 $q(k, s) = s\,a_{k+1} = q'(k, s)$이다(처음 $n$개의 $k + 1$번째 항은 $a_{k+1}$이다). $1 \le k \le n$에서 $P(k) = P'(k)$임을 $k$에 대한 귀납법으로 보인다. $k = 1$이면 둘 다 $a_1$이다. $k + 1 \le n$이고 $P(k) = P'(k)$이면 $P(k + 1) = q(k, P(k)) = q'(k, P'(k)) = P'(k + 1)$이다. 따라서 $P(n) = P'(n)$이고, $n + 1 \le n + 1$이므로
$$
\begin{aligned}
a_1 \cdots a_{n+1} &= P(n + 1) \\
&= q(n, P(n)) \\
&= P(n)\,a_{n+1} \\
&= P'(n)\,a_{n+1} \\
&= (a_1 \cdots a_n)\,a_{n+1}
\end{aligned}
$$
이다.

**(1)의 증명.** 빈 곱은 정의에 의해 $e$이다. 길이 $1$인 열의 곱은 $P(1) = a_1$이다. 길이 $2$이면 (2)와 길이 $1$의 경우에 의해 곱은 $(a_1)\,a_2 = a_1 a_2$이고, 길이 $3$이면 (2)와 길이 $2$의 경우에 의해 $(a_1 a_2)\,a_3$이며, 이것은 군의 표기의 $a_1 a_2 a_3$이다.

**(3)의 증명.** 첫째 열 $a_1, \dots, a_m$을 고정하고 $n$에 대한 귀납법을 쓴다. 각 $i \in \{1, \dots, m + n\}$에서 $i \le m$과 $i > m$ 가운데 정확히 하나가 성립하고, 뒤의 경우 $j = i - m$은 $1 \le j \le n$을 만족하므로((Z1), (Z7)) 이어 붙인 열은 재귀 정리의 (1)에 의해 함수로 정해진다.

$n = 0$이면 둘째 열은 빈 열이고 이어 붙인 열 $c$는 모든 $i \le m$에서 $c_i = a_i$인 길이 $m$인 열, 곧 $a$ 자신이다. 따라서 왼쪽은 $(a_1 \cdots a_m)\,e = a_1 \cdots a_m = c_1 \cdots c_m$이다.

$n$에서 성립한다고 하고 $b_1, \dots, b_{n+1}$을 길이 $n + 1$인 열, $c$를 $a$와 $b$를 이어 붙인 길이 $m + n + 1$인 열이라 하자. $c$의 처음 $m + n$개는 모든 $i \le m$에서 $a_i$이고 $1 \le j \le n$에서 $m + j$번째 항이 $b_j$이므로, $a$와 $b$의 처음 $n$개를 이어 붙인 열이다. 또 $c_{m+n+1} = b_{n+1}$이다. 따라서 (2), 귀납 가정, 결합법칙, 다시 (2)에 의해
$$
\begin{aligned}
&c_1 \cdots c_{m+n+1} \\
&\quad = (c_1 \cdots c_{m+n})\,b_{n+1} \\
&\quad = \bigl((a_1 \cdots a_m)(b_1 \cdots b_n)\bigr)\,b_{n+1} \\
&\quad = (a_1 \cdots a_m)\bigl((b_1 \cdots b_n)\,b_{n+1}\bigr) \\
&\quad = (a_1 \cdots a_m)(b_1 \cdots b_{n+1})
\end{aligned}
$$
이다.

**(4)의 증명.** 길이 $1$인 열 $a_1$과 길이 $n - 1$인 열 $b$를 이어 붙인 열을 $c$라 하면 $c_1 = a_1$이고 $1 \le j \le n - 1$에서 $c_{1+j} = b_j = a_{j+1}$이므로 모든 자리에서 $c_i = a_i$, 곧 $c$는 $a$이다. (3)과 (1)에 의해 $a_1 (a_2 \cdots a_n) = c_1 \cdots c_n = a_1 \cdots a_n$이다.

**(5)의 증명.** $n$에 대한 귀납법. $n = 0$이면 양쪽 모두 빈 곱이고, [[group-basic-properties|군의 기본 성질]]의 (4)에 의해 $e^{-1} = e$이다. $n$에서 성립한다고 하고 $a_1, \dots, a_{n+1}$을 길이 $n + 1$인 열이라 하자. 이 열의 $h$는 $h_1 = a_{n+1}^{-1}$이고, $1 \le j \le n$에서 $h_{1+j} = (a_{n+1-j})^{-1}$이다. 이것은 처음 $n$개의 열 $a_1, \dots, a_n$에서 만든 열 $a_n^{-1}, \dots, a_1^{-1}$의 $j$번째 항이다. 따라서 (4)에 의해 $h$의 곱은 $a_{n+1}^{-1}\,(a_n^{-1} \cdots a_1^{-1})$이다. 한편 (2), 군의 기본 성질의 (6), 귀납 가정에 의해
$$
\begin{aligned}
(a_1 \cdots a_{n+1})^{-1} &= \bigl((a_1 \cdots a_n)\,a_{n+1}\bigr)^{-1} \\
&= a_{n+1}^{-1}\,(a_1 \cdots a_n)^{-1} \\
&= a_{n+1}^{-1}\,(a_n^{-1} \cdots a_1^{-1})
\end{aligned}
$$
이므로 두 쪽이 같다.

**(6)의 증명.** $n = 0$이면 빈 곱 $e$와 [[power-in-a-group|군의 거듭제곱]]의 정의의 $g^0 = e$가 같다. $n$에서 성립하면 길이 $n + 1$인 열의 처음 $n$개도 모든 항이 $g$이므로, (2), 귀납 가정, 군의 거듭제곱의 (2)에 의해 곱은 $g^n g = g^{n+1}$이다.

**(7)의 증명.** $n = 0$이면 $\varphi(e) = e'$([[group-homomorphism|군 준동형]]의 (1), $e'$은 $G'$의 항등원)이고 오른쪽은 $G'$의 빈 곱 $e'$이다. $n$에서 성립하면, $i$번째 항이 $\varphi(a_i)$인 길이 $n + 1$인 열의 처음 $n$개는 처음 $n$개의 열에서 같은 방법으로 만든 열이므로, (2), 준동형의 정의, 귀납 가정, $G'$에서의 (2)에 의해
$$
\begin{aligned}
&\varphi(a_1 \cdots a_{n+1}) \\
&\quad = \varphi\bigl((a_1 \cdots a_n)\,a_{n+1}\bigr) \\
&\quad = \varphi(a_1 \cdots a_n)\,\varphi(a_{n+1}) \\
&\quad = \bigl(\varphi(a_1) \cdots \varphi(a_n)\bigr)\varphi(a_{n+1}) \\
&\quad = \varphi(a_1) \cdots \varphi(a_{n+1})
\end{aligned}
$$
이다.

**(8)의 증명.** $n = 0$이면 $be = b = eb$이다. $n$에서 성립하고 $b$가 $a_1, \dots, a_{n+1}$과 모두 교환된다고 하자. $p = a_1 \cdots a_n$이라 하면 귀납 가정에 의해 $bp = pb$이므로, (2)와 결합법칙에 의해
$$
\begin{aligned}
b\,(p\,a_{n+1}) &= (bp)\,a_{n+1} = (pb)\,a_{n+1} \\
&= p\,(b\,a_{n+1}) = p\,(a_{n+1} b) \\
&= (p\,a_{n+1})\,b
\end{aligned}
$$
이다.

**(9)의 증명.** $n$에 대한 귀납법. $n = 0$이면 $G$의 빈 곱 $e$는 [[subgroup|부분군]]의 (1)에 의해 $H$에 속하고 $H$의 항등원, 곧 $H$의 빈 곱과 같다. $n$에서 성립하면 처음 $n$개의 곱 $p$는 $H$에 속하고 $H$에서의 곱과 같다. (2)에 의해 $G$에서의 곱은 $p\,a_{n+1}$이고, $H$에서 (2)를 쓰면 $H$에서의 곱은 $H$의 연산으로 $p$와 $a_{n+1}$을 곱한 것이다. 부분군의 정의(닫혀 있음)에 의해 $p\,a_{n+1} \in H$이고, 부분군의 (3)에 의해 두 곱은 같다.

**(10)의 증명.** [[symmetric-group|대칭군]]의 (1)에 의해 $S_X$의 곱은 합성이고 모든 $x$에서 $(fg)(x) = f(g(x))$이다([[function-composition|합성]]). 첫 줄은 (2)를 $x$에서의 값으로 쓴 것이다. 둘째 줄은 $n + 1 \ge 1$이므로 (4)를 $x$에서의 값으로 쓴 것이다.
:::

## 예시와 반례

:::example[두 맞바꿈을 번갈아 곱한 네 원소의 곱]
$X = \{1, 2, 3\}$이고 $f$는 $1$과 $2$를, $g$는 $2$와 $3$을 맞바꾸고 나머지 점은 그대로 두는 $S_X$의 원소라 합시다. 길이 $4$인 열 $f, g, f, g$의 곱 $fgfg$의 값을 (10)의 첫 줄을 되풀이해 구하면, 오른쪽 항부터 차례로 적용하게 됩니다.

| $x$ | $g(x)$ | $f(g(x))$ | $g(f(g(x)))$ | $(fgfg)(x)$ |
|---|---|---|---|---|
| $1$ | $1$ | $2$ | $3$ | $3$ |
| $2$ | $3$ | $3$ | $2$ | $1$ |
| $3$ | $2$ | $1$ | $1$ | $2$ |

(3)에 의해 $fgfg = (fg)(fg)$이기도 합니다. $fg$는 $1$, $2$, $3$을 각각 $2$, $3$, $1$로 보내므로 $(fg)(fg)$는 $1$, $2$, $3$을 각각 $3$, $1$, $2$로 보내고 위 표와 같습니다. (6)에 의해 이것은 $(fg)^2$입니다.
:::

:::counterexample[역원을 곱할 때 순서를 뒤집지 않으면 틀릴 수 있다]
위 예시의 $f$, $g$에서 $f^{-1} = f$, $g^{-1} = g$입니다. $ff$와 $gg$가 세 점을 모두 제자리로 보내 $i_X$이므로 [[group-basic-properties|군의 기본 성질]]의 (3)에 의해서입니다. (5)는 $(fg)^{-1} = g^{-1} f^{-1} = gf$라고 말합니다. 순서를 뒤집지 않은 $f^{-1} g^{-1} = fg$는 $(fg)^{-1}$이 아닙니다. 위에서 $(fg)(fg)$는 $1$을 $3$으로 보내므로 $i_X$가 아니고, 따라서 [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 $fg$는 $fg$의 역원이 아닙니다. 실제로 $gf$는 $1$, $2$, $3$을 각각 $3$, $1$, $2$로 보내고 $(fg)(gf)$는 세 점을 모두 제자리로 보냅니다.
:::

## 확인 질문

:::check[$G$의 원소 $a$, $b$에 대하여 길이 $4$인 열 $a, b, b^{-1}, a^{-1}$의 곱은 무엇인가?]
$e$입니다. (3)에 의해 $abb^{-1}a^{-1} = (ab)(b^{-1}a^{-1})$이고, (5)에 의해 $b^{-1}a^{-1}$은 $(ab)^{-1}$이므로 곱은 $e$입니다. 교환법칙은 쓰지 않았습니다.
:::

:::check[$a$, $b \in G$가 $ab \ne ba$이면 길이 $4$인 열 $a, b, a^{-1}, b^{-1}$의 곱은 $e$일 수 있는가?]
아닙니다. 곱이 $e$라고 하면 (3)에 의해 $(ab)(a^{-1}b^{-1}) = e$이고, [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 $a^{-1}b^{-1} = (ab)^{-1}$입니다. (5)에 의해 $(ab)^{-1} = b^{-1}a^{-1}$이므로 $a^{-1}b^{-1} = b^{-1}a^{-1}$이고, 양쪽의 역원을 군의 기본 성질의 (6)과 (5)로 구하면 $ba = ab$가 되어 가정과 어긋납니다.
:::
