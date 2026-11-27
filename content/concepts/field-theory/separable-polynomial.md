---
title: 근이 서로 다른 다항식
title_en: Polynomials with Distinct Roots
aliases: [근이 서로 다르다, 중근이 없는 분해, 모닉 기약 인수, distinct roots, no repeated roots, separable]
kind: definition
field: field-theory
msc: ["12F10"]
level: undergrad
summary: "체 E 에서 분해되는 영이 아닌 다항식이 중근을 갖지 않는 것, 일차식 분해의 근들이 서로 다른 것, 근이 차수만큼 있는 것은 서로 같다. K 위의 기약 다항식 h 가 E 에서 분해되고 근이 deg h 개일 때 h 는 E 에서 근이 서로 다르다고 한다. 표수 0 인 체의 기약 다항식은 그것이 분해되는 체에서 언제나 근이 서로 다르고, f 의 모닉 기약 인수마다 근이 서로 다르다는 조건은 f 자신에 중근이 없으면 성립하며 사이의 체로 물려진다."
requires: [set, function, injective-surjective-bijective, finite-set, number-of-elements-is-unique, subset-of-finite-set, disjoint-union-count, mathematical-induction, prime-number, real-number-arithmetic, square-root-exists, integers-modulo-n, ring, ring-basic-properties, ring-examples, integral-domain, field, finite-integral-domain-is-a-field, characteristic-of-a-ring, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, factor-theorem-for-polynomials, formal-derivative, multiple-roots-and-derivative, divisibility-in-integral-domains, principal-ideal-domain, subfield, irreducible-polynomial, factorization-into-irreducible-polynomials, rational-numbers-field, extension-field, kronecker-theorem, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, field-extension-examples, splitting-field]
sources:
  - ref: judson-abstract-algebra
    loc: "22.1절 Structure of a Finite Field, separable 의 정의와 Example 22.4, Lemma 22.5 (p.279); 23.1절 Field Automorphisms, Theorem 23.7 (p.295), 'Separable Extensions' 의 첫 문단과 Proposition 23.12 (p.296); 23.3절 Applications 의 첫 문단 (p.303); 21.1절 Extension Fields 첫머리의 x⁴ − 5x² + 6 (p.260); 22.4절 Exercises, 연습문제 4 (p.289), 17 (p.290); 23.5절 Exercises, 연습문제 2 (p.308)"
    checked: original
    note: "출처 p.279 는 F[x] 의 차수 n 인 f(x) 가 'it has n distinct roots in the splitting field of f(x)' 일 때 separable 이라 하고, p.296 에서 같은 정의를 다시 적으며 근의 중복도와 단순근을 정의한다. 이 항목은 '근이 서로 다르다' 를 기약 다항식에만 쓰고, 분해되는 체 E 를 밝혀 '근이 deg h 개' 로 정의한다. 다항식 f 자신에 대해서는 '중근이 없다' 로 말하고 separable 에 해당하는 이름을 두지 않는다. 출처는 f(x) 가 분해체에서 서로 다른 일차식들로 인수분해된다는 것을 같은 말로 적는다(p.279, p.296). 이 항목의 (1)은 그것을 중근이 없다는 것, 근이 차수만큼 있다는 것과 함께 증명한다. 출처 Lemma 22.5(p.279)는 separable 인 것을 f 와 f′ 이 서로소인 것으로 판정하고, 이 항목은 최대공약수를 쓰지 않는다. (5)는 출처 Proposition 23.12(p.296)의 표수 0 부분이고, 출처의 증명은 gcd(f, f′) ≠ 1 이려면 f′ 이 영다항식이어야 한다고 적는다. 이 항목은 중근 c 의 최소다항식이 h 와 h′ 을 나눈다는 것으로 증명한다. 출처 23.3절 첫 문단(p.303)도 표수 0 을 가정하는 까닭으로 기약 다항식이 중근을 갖지 않는다는 것을 든다. 출처 Theorem 23.7(p.295)은 'If f(x) has no repeated roots' 를 가정하고, 이 항목의 (4)에 의해 그 가정에서 '모닉 기약 인수마다 근이 서로 다르다' 가 나온다. (6)의 물려받음은 출처 22.4절 연습문제 17(p.290, 분리 확대가 사이의 체 위에서도 분리 확대)과 같은 방향의 사실이다. 반례 '중근이 있어도 모닉 기약 인수의 근은 서로 다른 $X^3 + X^2 - 5X + 3$' 은 반복되는 인수를 가진 다항식의 분리성을 묻는 출처 23.5절 연습문제 2(b)(p.308, x⁴ + 2x² + 1 = (x² + 1)²)와 같은 발상이고, 예시 '$\\mathbb{Q}$ 위의 $(X^2 - 3)(X^2 - 2X - 2)$' 는 서로 다른 일차식들로 인수분해되는 것을 보이는 출처 Example 22.4(p.279, x² − 2 = (x − √2)(x + √2)), 두 이차식의 곱이 실수 안에서 일차식들로 인수분해되는 출처 21.1절 첫머리(p.260)의 x⁴ − 5x² + 6 = (x² − 2)(x² − 3), 서로 다른 근을 갖는 가약 다항식의 분리성을 묻는 출처 23.5절 연습문제 2(a)(p.308, x³ + 2x² − x − 2)와 같은 발상이다. 확인 질문 '$h = X^2 + X + [1] \\in \\mathbb{Z}_5[X]$로 만든 크로네커 체 $L$에서 $\\iota(\\mathbb{Z}_5)$ 위의 $h^{\\iota} = X^2 + X + \\iota([1])$은 근이 서로 다른가?' 는 Z_2 위의 기약 다항식이 그 근을 붙인 체에서 분해되는지 묻는 출처 22.4절 연습문제 4(p.289, x³ + x² + 1)와, 유한체 위의 다항식의 분리성을 묻는 23.5절 연습문제 2(c)(d)(p.308)와 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(반례 다항식의 인수분해, 상수 다항식 등 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체는 [[subfield|부분체]]의 뜻이며, 표수 $\operatorname{char} K$는 [[characteristic-of-a-ring|환의 표수]]의 것이다. 다항식환, 상수 다항식과 읽는 약속, 부정원 $X$, 나누어떨어짐은 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$, 모닉은 [[degree-of-a-polynomial|다항식의 차수]]의 것이며, 대입한 값과 근은 [[evaluation-homomorphism|대입 준동형]]의 것이다. 기약은 [[irreducible-polynomial|기약 다항식]]의 뜻이고, 중근은 [[multiple-roots-and-derivative|중근과 도함수]]의 뜻이며, 형식적 도함수 $f'$는 [[formal-derivative|형식적 도함수]]의 것이다. 최소다항식은 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 것이다. "$E$에서 분해된다"와 일차식 분해는 [[splitting-field|분해체]]의 것이고, $K$가 $E$의 부분체이면 $f \in K[X]$의 $E$ 안의 근과 중근은 $f$를 $E[X]$의 원소로 보고 말한다. 유한집합과 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 것이다.

**근이 서로 다르다.** $K$가 체 $E$의 부분체이고, $h \in K[X]$가 $K$ 위에서 기약이며 $E$에서 분해된다고 하자. $h$가 **$E$에서 근이 서로 다르다**(has distinct roots in $E$)는 것은 정확히 $E$ 안의 $h$의 근 전체의 집합이 원소를 $\deg h$개 가질 때이다. 이 말은 기약 다항식에만 쓴다.

**모닉 기약 인수.** $K$가 체이고 $f \in K[X]$일 때, $K[X]$에서 $f$를 나누는 $K$ 위의 모닉 기약 다항식을 $f$의 **$K$ 위의 모닉 기약 인수**(monic irreducible factor over $K$)라 한다.

다음이 성립한다.

1. (중근이 없는 일차식 분해) $E$가 체이고 $f \in E[X]$가 영다항식이 아니며 $E$에서 분해된다고 하자. $n = \deg f$, $R$은 $E$ 안의 $f$의 근 전체의 집합이다. 그러면 $R$은 유한집합이고 $|R| \le n$이며, 다음 네 조건은 서로 동치이다.
   - (i) $f$는 $E$ 안에 중근을 갖지 않는다. 곧 $E[X]$에서 $(X - c)^2 \mid f$인 $c \in E$가 없다.
   - (ii) $f$의 $E$에서의 모든 일차식 분해 $f = a(X - c_1) \cdots (X - c_n)$에서 $c_1, \dots, c_n$은 서로 다르다. 곧 각 $j$에 $c_j$를 대응시키는 함수 $\{1, \dots, n\} \to E$가 단사이다.
   - (iii) $f$의 $E$에서의 어떤 일차식 분해 $f = a(X - c_1) \cdots (X - c_n)$에서 $c_1, \dots, c_n$은 서로 다르다.
   - (iv) $R$은 원소를 $n$개 갖는다.
2. (근이 서로 다른 기약 다항식) 위 정의의 $h$가 $E$에서 근이 서로 다른 것은 (1)에 의해 정확히 $h$가 $E$ 안에 중근을 갖지 않을 때이고, 정확히 $h$의 $E$에서의 일차식 분해에서 $c_j$들이 서로 다를 때이다. 차수가 $1$인 기약 다항식은 그것이 분해되는 모든 체에서 근이 서로 다르다.
3. (모닉 기약 인수의 근) $K$가 체 $E$의 부분체이고, $f \in K[X]$가 영다항식이 아니며 $\deg f \ge 1$이고 $E$에서 분해된다고 하자.
   - (i) $f$의 $K$ 위의 모닉 기약 인수 $h$는 $E$에서 분해되고, $E$ 안의 $h$의 근은 모두 $f$의 근이다. 따라서 "$f$의 $K$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르다"는 말이 정해진다.
   - (ii) $E$ 안의 $f$의 근 $c$마다, $c$의 $K$ 위의 최소다항식은 $f$의 $K$ 위의 모닉 기약 인수이다.
4. ($f$ 자신에 중근이 없을 때) (3)의 설정에서 $f$가 $E$ 안에 중근을 갖지 않으면, $f$의 $K$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르다.
5. (표수 $0$) $K$가 체 $E$의 부분체이고 $\operatorname{char} K = 0$이라 하자. $K$ 위의 기약 다항식 $h$가 $E$에서 분해되면 $h$는 $E$에서 근이 서로 다르다. 따라서 (3)의 설정에서 $\operatorname{char} K = 0$이면 $f$의 $K$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르다.
6. (사이의 체로 물려받는다) (3)의 설정에서 $L$이 $E$의 부분체이고 $K \subseteq L$이라 하자. 그러면 $K$는 $L$의 부분체이고 $f \in L[X]$이므로 $L$과 $f$도 (3)의 설정을 만족한다. $f$의 $K$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르면, $f$의 $L$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르다.
:::

:::english
Fields are as in "Units and Fields", subfields as in the subfield entry, and the characteristic $\operatorname{char} K$ as in "Characteristic of a Ring". Polynomial rings, constant polynomials with the reading convention, the indeterminate $X$ and divisibility are as in "Polynomial Ring"; degree and monic are as in "Degree of a Polynomial"; values and roots are as in "Evaluation Homomorphism". Irreducible is meant as in "Irreducible Polynomial", multiple roots as in "Multiple Roots and the Derivative", and the formal derivative $f'$ as in "Formal Derivative". Minimal polynomials are as in "Algebraic Elements and Minimal Polynomials". "Splits in $E$" and factorizations into linear factors are as in "Splitting Field", and if $K$ is a subfield of $E$, roots and multiple roots in $E$ of $f \in K[X]$ refer to $f$ regarded as an element of $E[X]$. Finite sets and the number of elements $|A|$ are as in the entries on finite sets and on the number of elements.

**Distinct roots.** Let $K$ be a subfield of a field $E$, and let $h \in K[X]$ be irreducible over $K$ and split in $E$. We say that $h$ **has distinct roots in $E$** exactly when the set of all roots of $h$ in $E$ has $\deg h$ elements. This phrase is used only for irreducible polynomials.

**Monic irreducible factors.** For a field $K$ and $f \in K[X]$, a monic irreducible polynomial over $K$ that divides $f$ in $K[X]$ is called a **monic irreducible factor of $f$ over $K$**.

The following hold.

1. (Factorizations into linear factors without multiple roots) Let $E$ be a field and let $f \in E[X]$ be nonzero and split in $E$. Let $n = \deg f$ and let $R$ be the set of all roots of $f$ in $E$. Then $R$ is a finite set with $|R| \le n$, and the following four conditions are equivalent.
   - (i) $f$ has no multiple root in $E$; that is, there is no $c \in E$ with $(X - c)^2 \mid f$ in $E[X]$.
   - (ii) In every factorization $f = a(X - c_1) \cdots (X - c_n)$ of $f$ into linear factors in $E$, the elements $c_1, \dots, c_n$ are distinct; that is, the function $\{1, \dots, n\} \to E$ sending each $j$ to $c_j$ is injective.
   - (iii) In some factorization $f = a(X - c_1) \cdots (X - c_n)$ of $f$ into linear factors in $E$, the elements $c_1, \dots, c_n$ are distinct.
   - (iv) $R$ has $n$ elements.
2. (Irreducible polynomials with distinct roots) By (1), the polynomial $h$ of the definition has distinct roots in $E$ exactly when $h$ has no multiple root in $E$, and exactly when the $c_j$ in a factorization of $h$ into linear factors in $E$ are distinct. An irreducible polynomial of degree $1$ has distinct roots in every field in which it splits.
3. (Roots of monic irreducible factors) Let $K$ be a subfield of a field $E$, and let $f \in K[X]$ be nonzero with $\deg f \ge 1$ and split in $E$.
   - (i) Every monic irreducible factor $h$ of $f$ over $K$ splits in $E$, and every root of $h$ in $E$ is a root of $f$. Hence the phrase "every monic irreducible factor of $f$ over $K$ has distinct roots in $E$" is meaningful.
   - (ii) For every root $c$ of $f$ in $E$, the minimal polynomial of $c$ over $K$ is a monic irreducible factor of $f$ over $K$.
4. (When $f$ itself has no multiple root) In the setting of (3), if $f$ has no multiple root in $E$, then every monic irreducible factor of $f$ over $K$ has distinct roots in $E$.
5. (Characteristic $0$) Let $K$ be a subfield of a field $E$ with $\operatorname{char} K = 0$. If an irreducible polynomial $h$ over $K$ splits in $E$, then $h$ has distinct roots in $E$. Hence, in the setting of (3), if $\operatorname{char} K = 0$, then every monic irreducible factor of $f$ over $K$ has distinct roots in $E$.
6. (Inheritance by intermediate fields) In the setting of (3), let $L$ be a subfield of $E$ with $K \subseteq L$. Then $K$ is a subfield of $L$ and $f \in L[X]$, so $L$ and $f$ also satisfy the setting of (3). If every monic irreducible factor of $f$ over $K$ has distinct roots in $E$, then every monic irreducible factor of $f$ over $L$ has distinct roots in $E$.
:::

## 직관

일차식 분해에 같은 일차식 $X - c$가 두 번 나오면 $c$는 중근이고, 근의 개수는 차수보다 적어집니다. (1)은 세 가지 말, 곧 "중근이 없다", "일차식 분해에 나오는 $c_j$들이 서로 다르다", "근이 차수만큼 있다"가 분해되는 다항식에 대해서는 같은 말이라는 것입니다. 기약 다항식에 대해서는 이것을 "근이 서로 다르다"고 부릅니다.

다항식 $f$에 대해서는 $f$ 자신에 중근이 없다는 것보다 약한 조건, 곧 $f$의 모닉 기약 인수마다 근이 서로 다르다는 조건을 다룹니다. $f$ 자신에 중근이 없으면 이 조건이 성립하지만((4)), 기약 다항식 $h$로 $f = h^2$처럼 쓰이는 $f$는 중근을 가지면서도 이 조건을 만족할 수 있습니다. 밑체를 $K$에서 더 큰 $L$로 바꾸면 기약 인수는 더 잘게 쪼개질 수 있지만, 쪼개진 인수는 원래 인수의 약수이므로 근이 서로 다르다는 성질을 물려받습니다((6)).

표수가 $0$이면 기약 다항식은 그것이 분해되는 체에서 늘 근이 서로 다릅니다((5)). 중근 $c$가 있으면 $c$는 $h$와 형식적 도함수 $h'$의 공통 근인데, 표수 $0$에서 $h'$은 영다항식이 아니고 차수가 $\deg h - 1$입니다. 그래서 $c$의 최소다항식은 $h'$을 나누어 차수가 $\deg h$보다 작으면서 $h$도 나누게 되고, $h$가 기약이라는 데 어긋납니다.

## 증명

:::idea
(1)은 근을 하나씩 떼어 내는 귀납과 근의 개수 세기이다. (5)는 중근이 도함수의 근이라는 것과 최소다항식의 차수 비교이고, (6)은 $L$ 위의 모닉 기약 인수가 $K$ 위의 어떤 모닉 기약 인수를 나눈다는 것이다.
:::

:::hint
(1)에서 (i)이 (ii)를 준다는 것은 대우로 봅니다. $c_i = c_j$이고 $i < j$이면 $j$가 마지막 자리인 경우와 아닌 경우로 나눕니다.
:::

:::hint
(6)에서 $L$ 위의 모닉 기약 인수 $u$는 $L[X]$의 소원입니다. $f$를 $K$ 위의 모닉 기약 인수들의 곱으로 쓰고 [[principal-ideal-domain|주 아이디얼 정역]]의 (7)을 씁니다.
:::

:::proof
**쓰는 사실.** "분해체의 (n)"은 [[splitting-field|분해체]]의 (n), "차수의 (n)"은 [[degree-of-a-polynomial|다항식의 차수]]의 (n), "다항식환의 (n)"은 [[polynomial-ring|다항식환]]의 (n), "대입의 (n)"은 [[evaluation-homomorphism|대입 준동형]]의 (n), "곱의 (n)"은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (n), "인수의 (n)"은 [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (n), "기약의 (n)"은 [[irreducible-polynomial|기약 다항식]]의 (n), "부분체의 (n)"은 [[subfield|부분체]]의 (n), "최소의 (n)"은 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (n)이다. 체는 정역이다([[field|가역원과 체]]의 (3)).

**1.** 인수의 (4)에 의해 $R$은 유한집합이고 $|R| \le n$이다. 분해체의 (1)의 (i)에 의해 $f$의 일차식 분해는 모두 길이 $n$인 열로 쓰인다.

(i)에서 (ii): 대우를 보인다. $1$ 이상인 정수 $k$마다 다음 명제 $U_k$를 [[mathematical-induction|수학적 귀납법]]으로 보인다. $U_k$는 "$a \in E$, $a \ne 0$이고 $c_1, \dots, c_k$가 단사가 아닌 $E$의 원소의 열이면 $g = a(X - c_1) \cdots (X - c_k)$는 $E$ 안에 중근을 갖는다"이다. 길이 $1$인 열은 단사이므로 $U_1$은 참이다. $k \ge 2$이고 $U_{k-1}$이 참이라 하자. 열이 단사가 아니므로 $i < j$이고 $c_i = c_j$인 $i, j \in \{1, \dots, k\}$가 있다. $g_0 = a(X - c_1) \cdots (X - c_{k-1})$이라 하면 곱의 (2)와 결합법칙에 의해 $g = g_0(X - c_k)$이다. $j = k$이면 $i \le k - 1$이므로 분해체의 (1)의 (ii)에 의해 $c_k = c_i$는 $g_0$의 근이고, 인수의 (2)에 의해 $g_0 = (X - c_k)q$인 $q$가 있어 곱의 (6)의 (i)에 의해 $g = (X - c_k)^2 q$이다. $j < k$이면 처음 $k - 1$개로 된 열이 단사가 아니므로 $U_{k-1}$에 의해 $(X - e)^2 \mid g_0$인 $e \in E$가 있고, 다항식환의 (6)의 (iii)에 의해 $(X - e)^2 \mid g$이다. 이제 (ii)가 거짓이면 $c$가 단사가 아닌 일차식 분해가 있고, 이때 $n \ge 2$이므로 $U_n$에 의해 $f$는 중근을 가져 (i)이 거짓이다.

(ii)에서 (iii): $f$는 $E$에서 분해되므로 일차식 분해가 있고, (ii)에 의해 그 $c_j$들은 서로 다르다.

(iii)에서 (iv): 분해체의 (1)의 (ii)에 의해 $R = \{c_1, \dots, c_n\}$이므로 각 $j$에 $c_j$를 대응시키는 함수 $\{1, \dots, n\} \to R$은 전사이고, (iii)에 의해 단사이다. 따라서 이것은 전단사이고, [[finite-set|유한집합]]의 정의에 의해 $R$은 원소를 $n$개 갖는다.

(iv)에서 (i): 대우를 보인다. $(X - e)^2 \mid f$인 $e \in E$가 있어 $f = (X - e)^2 q$라 하자. $f \ne 0$이므로 $q \ne 0$이다. 차수의 (2)와 (5)에 의해 $(X - e)^2$은 차수 $2$인 모닉이므로 $n = 2 + \deg q$이고 $\deg q = n - 2$이다. $R_q$를 $E$ 안의 $q$의 근 전체의 집합이라 하자. $r \in R$이면 대입의 (2)에 의해 $0 = f(r) = (r - e)^2 q(r)$이고, 곱의 (7)에 의해 $r - e = 0$이거나 $q(r) = 0$이다. 곧 $R \subseteq \{e\} \cup R_q$이다. 인수의 (4)에 의해 $R_q$는 유한집합이고 $|R_q| \le n - 2$이며, $\{e\}$는 원소를 $1$개 갖는다. [[disjoint-union-count|서로소인 합집합의 원소의 개수]]의 (3)에 의해 $\{e\} \cup R_q$는 유한집합이고 그 원소의 개수는 $1 + |R_q| - |\{e\} \cap R_q| \le 1 + (n - 2) = n - 1$이다. [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $|R| \le n - 1$이므로, [[number-of-elements-is-unique|원소의 개수는 하나로 정해진다]]의 (1)에 의해 $R$은 원소를 $n$개 갖지 않는다.

**2.** 첫 문장은 (1)을 $h \in K[X] \subseteq E[X]$에 쓴 것이다. $\deg h = 1$이면 분해체의 (1)에 의해 $h$의 일차식 분해는 $h = a(X - c_1)$ 꼴이고, 그 열은 길이가 $1$이어서 단사이므로 (1)의 (iii)에 의해 근은 $1$개이다.

**3.** (i) $h$는 $K[X]$에서 $f$를 나누므로 다항식환의 (7)의 (iii)에 의해 $E[X]$에서도 $f$를 나눈다. 분해체의 (3)의 (i)에 의해 $h$는 $E$에서 분해되고 $E$ 안의 $h$의 근은 $f$의 근이다. $h$는 $K$ 위에서 기약이므로 위의 정의를 $h$에 쓸 수 있다.

(ii) 분해체의 (6)의 (i)에 의해 $c$는 $K$ 위에서 대수적이고, 최소의 (3)의 (i)에 의해 그 최소다항식 $m$은 $K$ 위의 모닉 기약 다항식이며, $f(c) = 0$이므로 최소의 (4)에 의해 $K[X]$에서 $m \mid f$이다.

**4.** $h$가 $f$의 $K$ 위의 모닉 기약 인수이고 $E[X]$에서 $(X - e)^2 \mid h$인 $e \in E$가 있다고 하자. (3)의 (i)의 증명대로 $E[X]$에서 $h \mid f$이므로 다항식환의 (6)의 (ii)에 의해 $(X - e)^2 \mid f$가 되어 가정에 어긋난다. 따라서 $h$는 $E$ 안에 중근을 갖지 않고, (3)의 (i)에 의해 $h$는 $E$에서 분해되므로 (1)에 의해 $E$ 안의 $h$의 근은 $\deg h$개이다.

**5.** $n = \deg h$라 하면 기약의 정의에 의해 $n \ge 1$이다. $h$가 $E$에서 근이 서로 다르지 않다고 하면, (1)에 의해 $E[X]$에서 $(X - e)^2 \mid h$인 $e \in E$가 있다. [[multiple-roots-and-derivative|중근과 도함수]]의 (1)을 $E[X]$의 원소 $h$에 쓰면 $h(e) = 0$이고 $h'(e) = 0$이며, [[formal-derivative|형식적 도함수]]의 (7)에 의해 이 $h'$은 $K[X]$에서 구한 것과 같다. 분해체의 (6)의 (i)에 의해 $e$는 $K$ 위에서 대수적이고, 그 최소다항식 $m$은 최소의 (3)의 (i)에 의해 $\deg m \ge 1$이다. $\operatorname{char} K = 0$이고 $\deg h = n \ge 1$이므로 형식적 도함수의 (5)에 의해 $h' \ne 0$이고 $\deg h' = n - 1$이다. $h'(e) = 0$이므로 최소의 (3)의 (ii)에 의해 $\deg m \le n - 1$이다. 또 $h(e) = 0$이므로 최소의 (4)에 의해 $K[X]$에서 $h = mq$인 $q$가 있고, 차수의 (6)에 의해 $q \ne 0$, $\deg q = n - \deg m \ge 1$이다. 그러면 $\deg m < n$, $\deg q < n$이므로 기약의 (2)에 의해 $h$는 $K$ 위에서 기약이 아니게 되어 어긋난다. 따라서 $h$는 $E$에서 근이 서로 다르다. 둘째 문장은 (3)의 (i)에 의해 $f$의 $K$ 위의 모닉 기약 인수가 $K$ 위에서 기약이고 $E$에서 분해되므로 첫 문장을 그것에 쓴 것이다.

**6.** 부분체의 (5)의 (i)에 의해 $K$는 $L$의 부분체이고, 부분체의 (3)의 (iv)에 의해 $f \in L[X]$이며, 차수의 (8)에 의해 $L[X]$에서도 $f \ne 0$, $\deg f \ge 1$이다. $f$는 $E$에서 분해된다. 이제 $u$가 $f$의 $L$ 위의 모닉 기약 인수라 하자.

$c$를 $f$의 최고차계수라 하면 [[factorization-into-irreducible-polynomials|기약 다항식으로의 분해]]의 (2)에 의해 $K[X]$에서 $f = c\,h_1 \cdots h_k$이고 각 $h_j$가 $K$ 위의 모닉 기약 다항식으로서 $f$를 나누는 $k \ge 1$과 열 $h_1, \dots, h_k$가 있다. 곧 각 $h_j$는 $f$의 $K$ 위의 모닉 기약 인수이다. 포함 함수 $K \to L$은 부분체의 (3)의 (iii)에 의해 $1$을 $1$로 보내는 환 준동형이고, 대입의 (8)과 (3), 곱의 (9)에 의해 이 등식은 $L[X]$에서도 성립한다. [[principal-ideal-domain|주 아이디얼 정역]]의 (2), (6)과 기약의 (1)에 의해 $u$는 $L[X]$의 소원이다. 길이 $k + 1$인 열 $c, h_1, \dots, h_k$의 곱은 곱의 (4)에 의해 $f$이므로, 주 아이디얼 정역의 (7)에 의해 $u$는 상수 다항식 $c$를 나누거나 어떤 $h_j$를 나눈다. 차수의 (7)에 의해 $c$는 $L[X]$의 가역원이므로 $u \mid c$이면 $u$가 가역원이 되어([[divisibility-in-integral-domains|정역의 나누어떨어짐과 기약원]]의 (3)) 기약이라는 데 어긋난다. 따라서 $L[X]$에서 $u \mid h_j$인 $j$가 있고, 다항식환의 (7)의 (iii)에 의해 $E[X]$에서도 $u \mid h_j$이다.

가정에 의해 $h_j$는 $E$에서 근이 서로 다르므로 (2)에 의해 $E$ 안에 중근을 갖지 않는다. $E[X]$에서 $(X - e)^2 \mid u$이면 $(X - e)^2 \mid h_j$가 되므로 $u$도 $E$ 안에 중근을 갖지 않는다. (3)의 (i)을 $L$과 $f$에 쓰면 $u$는 $E$에서 분해되므로, (1)에 의해 $E$ 안의 $u$의 근은 $\deg u$개이고 $u$는 $E$에서 근이 서로 다르다.
:::

## 예시와 반례

:::example[$\mathbb{Q}$ 위의 $(X^2 - 3)(X^2 - 2X - 2)$]
$s = \sqrt{3}$이라 하면([[square-root-exists|제곱근의 존재]]의 (1)) $\mathbb{R}[X]$에서 $X^2 - 3 = (X - s)(X - (-s))$, $X^2 - 2X - 2 = (X - (1 + s))(X - (1 - s))$입니다. 그래서 [[rational-numbers-field|유리수체]]의 (1)의 $\mathbb{Q} \subseteq \mathbb{R}$ 위의 $f = (X^2 - 3)(X^2 - 2X - 2)$는 [[splitting-field|분해체]]의 (3)의 (ii)에 의해 $\mathbb{R}$에서 분해되고, [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (3)에 의해 그 일차식 분해는 열 $s, -s, 1 + s, 1 - s$로 쓰입니다.

이 네 실수는 서로 다릅니다. $0 < s$이므로 $s \ne -s$, $1 + s \ne 1 - s$이고, $1 + s - s = 1 \ne 0$, $1 - s - (-s) = 1 \ne 0$입니다. $1 + s = -s$이면 $1 + 2s = 0$인데 $1 + 2s > 0$이고, $1 - s = s$이면 $s = \tfrac{1}{2}$이 되어 $s^2 = \tfrac{1}{4} \ne 3$입니다. 따라서 (1)의 (iii)에 의해 $f$는 $\mathbb{R}$ 안에 중근을 갖지 않고, (4)에 의해 $f$의 $\mathbb{Q}$ 위의 모닉 기약 인수마다 $\mathbb{R}$에서 근이 서로 다릅니다. 예를 들어 $X^2 - 3$은 [[field-extension-examples|체의 확대의 예]]의 (1)에 의해 $\mathbb{Q}$ 위에서 기약이고 $f$를 나누며, $\mathbb{R}$ 안의 근은 $s$, $-s$ 둘입니다. (6)에 의해 밑체를 $\mathbb{Q} \subseteq \mathbb{Q}(s) \subseteq \mathbb{R}$인 $\mathbb{Q}(s)$로 바꾸어도, $f$의 $\mathbb{Q}(s)$ 위의 모닉 기약 인수마다 $\mathbb{R}$에서 근이 서로 다릅니다.
:::

:::counterexample[중근이 있어도 모닉 기약 인수의 근은 서로 다른 $X^3 + X^2 - 5X + 3$]
$\mathbb{Q}[X]$에서
$$
\begin{aligned}
&(X - 1)^2(X + 3) \\
&\quad = (X^2 - 2X + 1)(X + 3) \\
&\quad = X^3 + X^2 - 5X + 3
\end{aligned}
$$
이므로 $f = X^3 + X^2 - 5X + 3$은 $f = 1 \cdot (X - 1)(X - 1)(X - (-3))$으로 $\mathbb{Q}$에서 분해되고, $(X - 1)^2 \mid f$이므로 $1$은 중근입니다. 근 전체는 $\{1, -3\}$으로 원소가 $2$개이고 차수 $3$보다 적어 (1)과도 맞습니다. 형식적 도함수 $f' = 3X^2 + 2X - 5$에 $1$을 넣으면 $0$인 것도 [[multiple-roots-and-derivative|중근과 도함수]]의 (1)과 맞습니다.

그런데 분해체의 (2)에 의해 $f$를 나누는 $\mathbb{Q}$ 위의 모닉 기약 다항식은 $X - 1$이나 $X + 3$이고, (2)에 의해 차수가 $1$인 기약 다항식은 근이 서로 다릅니다. 곧 $f$의 $\mathbb{Q}$ 위의 모닉 기약 인수마다 $\mathbb{Q}$에서 근이 서로 다르지만 $f$는 중근을 갖습니다. (4)의 거꾸로는 이 다항식에서 성립하지 않습니다.
:::

## 확인 질문

:::check[체 $K$ 위의 일차 다항식 $aX + b$($a \ne 0$)는 그것이 분해되는 체에서 근이 서로 다른가?]
그렇습니다. [[irreducible-polynomial|기약 다항식]]의 (3)의 (ii)에 의해 $aX + b$는 기약이고, (2)에 의해 차수가 $1$인 기약 다항식은 그것이 분해되는 모든 체에서 근이 서로 다릅니다. 실제로 $aX + b = a\bigl(X - (-a^{-1}b)\bigr)$이고 근은 $-a^{-1}b$ 하나입니다.
:::

:::check[$h = X^2 + X + [1] \in \mathbb{Z}_5[X]$로 만든 크로네커 체 $L$에서 $\iota(\mathbb{Z}_5)$ 위의 $h^{\iota} = X^2 + X + \iota([1])$은 근이 서로 다른가?]
그렇습니다. $h$에 $[0], \dots, [4]$를 넣은 값은 $[1], [3], [2], [3], [1]$이므로 근이 없고 기약이며(기약 다항식의 (5)), 기약 다항식의 (7)의 (iii)을 [[extension-field|확대체]]의 (3)의 (iii)의 환 동형사상 $\iota : \mathbb{Z}_5 \to \iota(\mathbb{Z}_5)$에 쓰면 $h^{\iota}$는 $\iota(\mathbb{Z}_5)$ 위에서 기약입니다. [[kronecker-theorem|크로네커 정리]]의 근 $\alpha$에 대하여 $\beta = -\alpha - \iota([1])$이라 하면 $\beta^2 + \beta + \iota([1]) = \alpha^2 + \alpha + \iota([1]) = 0$이고, $L[X]$에서 $X^2 + X + \iota([1]) = (X - \alpha)(X - \beta)$입니다(곱을 전개하면 $X^2 - (\alpha + \beta)X + \alpha\beta$이고 $\alpha\beta = -\alpha^2 - \alpha = \iota([1])$). 크로네커 정리의 (2)의 (ii)에 의해 $\beta$는 $\alpha$의 계수가 $[4]$라서 $\alpha$와 다르므로 (1)의 (iii)에 의해 근이 서로 다릅니다. 표수가 $5$여서 (5)는 쓸 수 없지만 직접 확인됩니다.
:::
