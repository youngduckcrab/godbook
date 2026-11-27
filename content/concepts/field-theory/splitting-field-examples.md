---
title: 분해체의 예
title_en: Examples of Splitting Fields
aliases: [이차 다항식의 분해체, 크로네커 체는 이차 다항식의 분해체, Q(√2, √5) 는 분해체, examples of splitting fields]
kind: proposition
field: field-theory
msc: ["12F05"]
level: undergrad
summary: "체 K 위의 이차 기약 다항식 h 로 만든 크로네커 체는 계수를 옮긴 h 의 분해체이고 차수는 2 이다. 그래서 Z_2 위의 X² + X + 1, Z_3 위의 X² + 1 의 크로네커 체는 원소가 4 개, 9 개인 분해체이고 근이 서로 다르다. 실수 안에서 Q 위의 X² − 2 의 분해체는 Q(√2), (X² − 2)(X² − 5) 의 분해체는 차수가 4 인 Q(√2, √5) 이다."
requires: [prime-number, real-number-arithmetic, square-root-exists, integers-modulo-n, ring, ring-basic-properties, ring-examples, ring-homomorphism, field, finite-integral-domain-is-a-field, finite-set, number-of-elements-is-unique, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, subfield, irreducible-polynomial, rational-numbers-field, extension-field, kronecker-theorem, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, tower-law, finite-extension-is-algebraic, field-extension-examples, splitting-field, separable-polynomial]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "21.1절 Extension Fields, 첫머리의 x⁴ − 5x² + 6 (p.260), Example 21.2 (p.261); 21.2절 Splitting Fields, 분해체의 정의 (p.268); 22.1절 Structure of a Finite Field, Example 22.4 (p.279); 23.1절 Field Automorphisms, Example 23.4 (p.294); 21.5절 Exercises, 연습문제 23 (p.277); 22.4절 Exercises, 연습문제 4 (p.289); 23.5절 Exercises, 연습문제 2, 6 (p.308), 17 (p.309)"
    checked: original
    note: "출처 p.268 의 분해체 예(Example 21.29, 21.30)와 21.5절 연습문제 3 의 다항식은 쓰지 않았다. (1)은 차수 2 인 확대가 분해체라는 출처 21.5절 연습문제 23(p.277)과, 이차 다항식의 분해체를 묻는 23.5절 연습문제 17(p.309), 분해체 안의 차수 2 인 확대가 분해체라는 23.5절 연습문제 19(p.309)와 같은 발상이고, 크로네커의 체가 그 다항식의 분해체라는 것은 출처 22.4절 연습문제 4(p.289, x³ + x² + 1 이 Z_2(α) 에서 분해된다)와 같은 발상이다. 출처 23.5절 연습문제 6(p.308)은 기약 이차 다항식의 갈루아 군을 묻는다. (2)의 Z_2 위의 x² + x + 1 로 만든 원소 4 개인 체는 출처 Example 21.2(p.261)의 체이고, 출처는 그 예에서 (1 + α)(1 + α) = α 를 계산하고 덧셈표와 곱셈표를 든다. 이 항목은 1 + α 가 다른 근이라는 것과 그 체가 분해체라는 것을 보인다. (4)는 √2 와 −√2 로 x² − 2 를 인수분해하는 출처 21.1절 첫머리(p.260)와 Example 22.4(p.279)와 같은 대상이고, (5)는 출처 p.260 의 x⁴ − 5x² + 6 = (x² − 2)(x² − 3) 과 같은 꼴(이차식 둘의 곱)이고, 분해체를 묻는 21.5절 연습문제 3(a)(p.276)의 x⁴ − 10x² + 21 = (x² − 3)(x² − 7)과 분해체의 원시원을 묻는 23.5절 연습문제 5(b)(p.308)의 x⁴ − 8x² + 15 = (x² − 3)(x² − 5)도 같은 꼴이며, 두 제곱근을 붙인 체는 출처 Example 23.4(p.294)의 Q(√3, √5) 와 같은 꼴이다. 예시 '$\\mathbb{Z}_2$ 위의 $X^2 + X + [1]$의 분해체의 원소' 는 출처 Example 21.2(p.261)와 같은 체의 원소를 나열한다. 확인 질문 '$\\mathbb{Q}(\\sqrt{2}, \\sqrt{5})$는 $\\mathbb{Q}(\\sqrt{5})$ 위에서 $(X^2 - 2)(X^2 - 5)$의 분해체인가? 그 차수는?' 의 사슬 ℚ ⊆ ℚ(√5) ⊆ ℚ(√2, √5) 는 출처 Example 23.4(p.294)의 Q ⊂ Q(√5) ⊂ Q(√3, √5) 와 같은 꼴이다. 확인 질문 '$\\mathbb{Z}_5$ 위의 $X^2 - [2]$로 만든 크로네커 체 $L$은 $\\iota(\\mathbb{Z}_5)$ 위에서 무엇의 분해체이고, 원소는 몇 개인가?' 의 원소 개수 5² 는 출처 22.4절 연습문제 18(p.290, F(α) 의 원소가 qⁿ 개)과 같은 셈이다. 반례 '분해체의 차수가 $2$인 사차 다항식 $(X^2 - 2)^2$' 는 반복되는 인수를 가진 출처 23.5절 연습문제 2(b)(p.308, x⁴ + 2x² + 1)와 같은 꼴이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(연장 개수의 귀납과 분할 셈 통독). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체, 확대체, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이다. 크로네커 정리의 설정 $L$, $\iota$, $\alpha$는 [[kronecker-theorem|크로네커 정리]]의 것이고, 계수를 옮긴 다항식 $f^{\varphi}$는 [[evaluation-homomorphism|대입 준동형]]의 것이다. 분해된다, 일차식 분해, 분해체는 [[splitting-field|분해체]]의 것이고, 근이 서로 다르다와 모닉 기약 인수는 [[separable-polynomial|근이 서로 다른 다항식]]의 것이다. $\mathbb{Q}$는 [[rational-numbers-field|유리수체]]의 (1)에 의해 $\mathbb{R}$의 부분체이고, 제곱근 $\sqrt{a}$는 [[square-root-exists|제곱근의 존재]]의 것이며, $\mathbb{Q}(\sqrt{2})$, $\mathbb{Q}(\sqrt{2}, \sqrt{5})$는 $\mathbb{R}$의 부분체로서 [[field-extension-examples|체의 확대의 예]]의 것이다. 유한집합과 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 것이다.

1. (이차 기약 다항식의 크로네커 체) $K$가 체이고 $h = cX^2 + bX + e \in K[X]$($c \ne 0$)가 $K$ 위에서 기약이며, $L$, $\iota$, $\alpha$가 $h$로 만든 크로네커 정리의 설정의 것이라 하자. $\alpha' = -\alpha - \iota(c^{-1}b)$로 두면 다음이 성립한다.
   - (i) $h^{\iota}$는 $\iota(K)$ 위에서 기약이고, $L[X]$에서 $h^{\iota} = \iota(c)(X - \alpha)(X - \alpha')$이다.
   - (ii) $L$은 $\iota(K)$ 위에서 $h^{\iota}$의 분해체이고 $[L : \iota(K)] = 2$이다.
   - (iii) $h^{\iota}$가 $L$에서 근이 서로 다른 것은 정확히 $\alpha' \ne \alpha$일 때이다.
2. ($\mathbb{Z}_2$ 위의 $X^2 + X + [1]$) $h = X^2 + X + [1] \in \mathbb{Z}_2[X]$는 기약이고, (1)의 $\alpha'$는 $\alpha + \iota([1])$이다. $L$은 원소가 $4$개이고 $\iota(\mathbb{Z}_2)$ 위에서 $h^{\iota}$의 분해체이며, $h^{\iota}$는 $L$에서 근이 서로 다르다.
3. ($\mathbb{Z}_3$ 위의 $X^2 + [1]$) $h = X^2 + [1] \in \mathbb{Z}_3[X]$는 기약이고, (1)의 $\alpha'$는 $-\alpha$이다. $L$은 원소가 $9$개이고 $\iota(\mathbb{Z}_3)$ 위에서 $h^{\iota}$의 분해체이며, $h^{\iota}$는 $L$에서 근이 서로 다르다.
4. ($\mathbb{Q}$ 위의 $X^2 - 2$) $\mathbb{Q}(\sqrt{2})$는 $\mathbb{Q}$ 위에서 $X^2 - 2$의 분해체이고, $[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2$이며, $X^2 - 2$는 $\mathbb{Q}(\sqrt{2})$에서 근이 서로 다르다.
5. ($\mathbb{Q}$ 위의 $(X^2 - 2)(X^2 - 5)$) $f = (X^2 - 2)(X^2 - 5)$라 하자. $\mathbb{Q}(\sqrt{2}, \sqrt{5})$는 $\mathbb{Q}$ 위에서 $f$의 분해체이고 $[\mathbb{Q}(\sqrt{2}, \sqrt{5}) : \mathbb{Q}] = 4$이다. $\mathbb{Q}(\sqrt{2}, \sqrt{5})$ 안의 $f$의 근은 $\sqrt{2}$, $-\sqrt{2}$, $\sqrt{5}$, $-\sqrt{5}$의 네 개로 서로 다르고, $f$의 $\mathbb{Q}$ 위의 모닉 기약 인수마다 $\mathbb{Q}(\sqrt{2}, \sqrt{5})$에서 근이 서로 다르다.
:::

:::english
Fields are as in "Units and Fields"; subfields, extension fields and the degree $[E : F]$ are as in the entries on subfields and extension fields. The Kronecker setting $L$, $\iota$, $\alpha$ is that of "Kronecker's Theorem", and $f^{\varphi}$ is as in "Evaluation Homomorphism". Splitting, factorizations into linear factors and splitting fields are as in "Splitting Field", and distinct roots and monic irreducible factors are as in "Polynomials with Distinct Roots". By (1) of "The Field of Rational Numbers", $\mathbb{Q}$ is a subfield of $\mathbb{R}$; square roots $\sqrt{a}$ are as in "Existence of Square Roots", and $\mathbb{Q}(\sqrt{2})$, $\mathbb{Q}(\sqrt{2}, \sqrt{5})$ are the subfields of $\mathbb{R}$ of "Examples of Field Extensions". Finite sets and the number of elements $|A|$ are as in the entries on finite sets and on the number of elements.

1. (Kronecker fields of irreducible quadratics) Let $K$ be a field, let $h = cX^2 + bX + e \in K[X]$ with $c \ne 0$ be irreducible over $K$, and let $L$, $\iota$, $\alpha$ be the Kronecker setting built from $h$. Put $\alpha' = -\alpha - \iota(c^{-1}b)$. Then:
   - (i) $h^{\iota}$ is irreducible over $\iota(K)$, and $h^{\iota} = \iota(c)(X - \alpha)(X - \alpha')$ in $L[X]$.
   - (ii) $L$ is a splitting field of $h^{\iota}$ over $\iota(K)$, and $[L : \iota(K)] = 2$.
   - (iii) $h^{\iota}$ has distinct roots in $L$ exactly when $\alpha' \ne \alpha$.
2. ($X^2 + X + [1]$ over $\mathbb{Z}_2$) The polynomial $h = X^2 + X + [1] \in \mathbb{Z}_2[X]$ is irreducible, and the $\alpha'$ of (1) is $\alpha + \iota([1])$. The field $L$ has $4$ elements and is a splitting field of $h^{\iota}$ over $\iota(\mathbb{Z}_2)$, and $h^{\iota}$ has distinct roots in $L$.
3. ($X^2 + [1]$ over $\mathbb{Z}_3$) The polynomial $h = X^2 + [1] \in \mathbb{Z}_3[X]$ is irreducible, and the $\alpha'$ of (1) is $-\alpha$. The field $L$ has $9$ elements and is a splitting field of $h^{\iota}$ over $\iota(\mathbb{Z}_3)$, and $h^{\iota}$ has distinct roots in $L$.
4. ($X^2 - 2$ over $\mathbb{Q}$) $\mathbb{Q}(\sqrt{2})$ is a splitting field of $X^2 - 2$ over $\mathbb{Q}$, $[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2$, and $X^2 - 2$ has distinct roots in $\mathbb{Q}(\sqrt{2})$.
5. ($(X^2 - 2)(X^2 - 5)$ over $\mathbb{Q}$) Let $f = (X^2 - 2)(X^2 - 5)$. Then $\mathbb{Q}(\sqrt{2}, \sqrt{5})$ is a splitting field of $f$ over $\mathbb{Q}$ and $[\mathbb{Q}(\sqrt{2}, \sqrt{5}) : \mathbb{Q}] = 4$. The roots of $f$ in $\mathbb{Q}(\sqrt{2}, \sqrt{5})$ are the four distinct elements $\sqrt{2}$, $-\sqrt{2}$, $\sqrt{5}$, $-\sqrt{5}$, and every monic irreducible factor of $f$ over $\mathbb{Q}$ has distinct roots in $\mathbb{Q}(\sqrt{2}, \sqrt{5})$.
:::

## 직관

크로네커 정리는 기약 다항식의 근을 하나 가진 체를 만듭니다. 다항식이 이차이면 근 하나를 알면 나머지 근은 근과 계수의 관계로 정해집니다. 두 근의 합이 $-\iota(c^{-1}b)$이므로 다른 근 $\alpha'$도 이미 그 체에 있고, 크로네커의 체가 곧 분해체입니다((1)). $\mathbb{Z}_2$, $\mathbb{Z}_3$ 위의 두 예는 이것을 원소가 $4$개, $9$개인 체에서 확인한 것입니다.

실수의 부분체에서는 실수 안의 근을 붙여 분해체를 얻습니다([[splitting-field|분해체]]의 (9)). $X^2 - 2$의 분해체는 $\sqrt{2}$ 하나를 붙인 체이고, $(X^2 - 2)(X^2 - 5)$의 분해체는 두 제곱근을 붙인 체로 차수가 $4$입니다. 근 $\pm\sqrt{2}$, $\pm\sqrt{5}$가 서로 다르므로 모닉 기약 인수의 근도 서로 다릅니다.

## 증명

:::idea
(1)은 $h^{\iota}(\alpha) = 0$에서 $\alpha^2$을 낮은 차수로 바꿔 $(X - \alpha)(X - \alpha')$를 전개하는 계산이고, 분해체인 것은 $L$이 $\alpha$ 하나로 생성된다는 데서 나온다. (4), (5)는 실수 안에서 일차식 분해를 쓰고 분해체의 (9)와 체의 확대의 예의 차수를 쓴다.
:::

:::hint
(1)에서 $h^{\iota}(\alpha) = 0$을 $\iota(c)$로 나누면 $\alpha^2 = -\iota(c^{-1}b)\alpha - \iota(c^{-1}e)$입니다. 이것으로 $\alpha\alpha'$를 계산합니다.
:::

:::proof
**쓰는 사실.** "분해체의 (n)"은 [[splitting-field|분해체]]의 (n), "근의 (n)"은 [[separable-polynomial|근이 서로 다른 다항식]]의 (n), "크로네커의 (n)"은 [[kronecker-theorem|크로네커 정리]]의 (n), "기약의 (n)"은 [[irreducible-polynomial|기약 다항식]]의 (n), "단순의 (n)"은 [[simple-algebraic-extension|단순 대수적 확대]]의 (n), "붙인 체의 (n)"은 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (n), "예의 (n)"은 [[field-extension-examples|체의 확대의 예]]의 (n)이다.

**1.** (i) [[extension-field|확대체]]의 (3)의 (iii)에 의해 $\iota : K \to \iota(K)$는 환 동형사상이고, 기약의 (7)의 (iii)에 의해 $h^{\iota}$는 $\iota(K)$ 위에서 기약이다. 크로네커의 (1)의 (iv)에 의해 $h^{\iota}(\alpha) = \iota(c)\alpha^2 + \iota(b)\alpha + \iota(e) = 0$이고, $\iota(c) \ne 0$이므로 양변에 $\iota(c)^{-1} = \iota(c^{-1})$을 곱하면($\iota$는 환 준동형) $\alpha^2 = -\iota(c^{-1}b)\alpha - \iota(c^{-1}e)$이다. 따라서
$$
\begin{aligned}
\alpha\alpha' &= -\alpha^2 - \iota(c^{-1}b)\alpha \\
&= \iota(c^{-1}e)
\end{aligned}
$$
이고 $\alpha + \alpha' = -\iota(c^{-1}b)$이다. $L[X]$에서 $(X - \alpha)(X - \alpha') = X^2 - (\alpha + \alpha')X + \alpha\alpha' = X^2 + \iota(c^{-1}b)X + \iota(c^{-1}e)$이므로, 여기에 상수 $\iota(c)$를 곱하면 $h^{\iota}$이다.

(ii) 단순의 (7)에 의해 $L = \iota(K)(\alpha)$이다. $\alpha' \in L$이므로 붙인 체의 (1)의 (ii)에 의해 $\iota(K)(\alpha, \alpha') \subseteq L$이고, $\iota(K)(\alpha, \alpha')$는 $\iota(K)$와 $\alpha$를 포함하는 부분체이므로 단순의 (1)에 의해 $L = \iota(K)(\alpha) \subseteq \iota(K)(\alpha, \alpha')$이다. 따라서 $L = \iota(K)(\alpha, \alpha')$이고, (i)의 일차식 분해와 분해체의 (6)의 (ii)에 의해 $L$은 $\iota(K)$ 위에서 $h^{\iota}$의 분해체이다. 크로네커의 (2)의 (iii)에 의해 $[L : \iota(K)] = \deg h = 2$이다.

(iii) 근의 (1)의 (ii), (iii)과 정의에 의해, $h^{\iota}$가 $L$에서 근이 서로 다른 것은 정확히 (i)의 일차식 분해의 열 $\alpha, \alpha'$이 단사, 곧 $\alpha \ne \alpha'$일 때이다.

**2.** $h$에 $[0]$, $[1]$을 넣으면 $[1]$, $[3] = [1]$이므로 $\mathbb{Z}_2$ 안에 근이 없고, $\mathbb{Z}_2$는 체이므로([[finite-integral-domain-is-a-field|유한 정역은 체이다]]의 (3)) 기약의 (5)에 의해 $h$는 기약이다. $c = [1]$, $b = [1]$이고 $\mathbb{Z}_2$에서 $-[1] = [1]$이므로 $-\alpha = \alpha$, $-\iota([1]) = \iota([1])$이고 $\alpha' = -\alpha - \iota([1]) = \alpha + \iota([1])$이다. 크로네커의 (4)에 의해 $L$은 원소가 $2^2 = 4$개이고, (1)의 (ii)에 의해 분해체이다. 크로네커의 (2)의 (ii)에 의해 $\alpha'$와 $\alpha$는 상수 계수가 $[1]$과 $[0]$으로 달라 서로 다르므로, (1)의 (iii)에 의해 근이 서로 다르다.

**3.** $h$에 $[0], [1], [2]$를 넣으면 $[1], [2], [5] = [2]$이므로 근이 없고, 기약의 (5)에 의해 기약이다. $b = [0]$이므로 $\alpha' = -\alpha$이다. 크로네커의 (4)에 의해 $L$은 원소가 $3^2 = 9$개이고, (1)의 (ii)에 의해 분해체이다. $-\alpha = \iota([2])\alpha$와 $\alpha = \iota([1])\alpha$는 크로네커의 (2)의 (ii)에 의해 서로 다르므로, (1)의 (iii)에 의해 근이 서로 다르다.

**4.** $s = \sqrt{2}$라 하면 $\mathbb{R}[X]$에서 $(X - s)(X - (-s)) = X^2 - s^2 = X^2 - 2$이므로 $X^2 - 2$는 $\mathbb{R}$에서 분해된다. 분해체의 (9)에 의해 $\mathbb{Q}(s, -s)$는 $\mathbb{Q}$ 위에서 $X^2 - 2$의 분해체이고, $-s \in \mathbb{Q}(s)$이므로 붙인 체의 (1)의 (ii)와 단순의 (1)에 의해 $\mathbb{Q}(s, -s) = \mathbb{Q}(s)$이다. 예의 (1)($2$는 소수)에 의해 $[\mathbb{Q}(s) : \mathbb{Q}] = 2$이고 $X^2 - 2$는 $\mathbb{Q}$ 위에서 기약이다. 제곱근의 존재의 (1)에 의해 $0 < s$이므로 $s \ne -s$이고, 분해체의 (9)의 마지막 문장과 근의 (1)의 (iii)에 의해 $\mathbb{Q}(s)$ 안의 근 $s$, $-s$는 서로 다른 두 개이다.

**5.** $t = \sqrt{5}$라 하면 $\mathbb{R}[X]$에서 $X^2 - 5 = (X - t)(X - (-t))$이고, 분해체의 (3)의 (ii)와 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (3)에 의해 $f = (X - s)(X - (-s))(X - t)(X - (-t))$가 $f$의 $\mathbb{R}$에서의 일차식 분해이다. 분해체의 (9)에 의해 $M = \mathbb{Q}(s, -s, t, -t)$는 $\mathbb{Q}$ 위에서 $f$의 분해체이다. $M$은 $\mathbb{Q}$와 $s$, $t$를 포함하므로 붙인 체의 (1)의 (ii)에 의해 $\mathbb{Q}(s, t) \subseteq M$이고, 거꾸로 $\mathbb{Q}(s, t)$는 $\mathbb{Q}$와 $\pm s$, $\pm t$를 포함하므로 같은 진술에 의해 $M \subseteq \mathbb{Q}(s, t)$이다. 따라서 $M = \mathbb{Q}(\sqrt{2}, \sqrt{5})$이고, 예의 (2)에 의해 $[M : \mathbb{Q}] = 4$이다.

네 근은 서로 다르다. $0 < s$, $0 < t$이므로 $s \ne -s$, $t \ne -t$이고, $s = \pm t$이면 제곱하여 $2 = 5$가 되어 어긋나며, $-s = \pm t$도 같다. 근의 (1)의 (iii)에 의해 $f$는 $M$ 안에 중근을 갖지 않고, 근의 (4)에 의해 $f$의 $\mathbb{Q}$ 위의 모닉 기약 인수마다 $M$에서 근이 서로 다르다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_2$ 위의 $X^2 + X + [1]$의 분해체의 원소]
(2)의 $L$의 원소는 [[kronecker-theorem|크로네커 정리]]의 (2)의 (ii)에 의해 $\iota([0])$, $\iota([1])$, $\alpha$, $\alpha + \iota([1])$의 네 개입니다. 이 가운데 $h^{\iota}$의 근은 $\alpha$와 $\alpha + \iota([1])$이고, 직접 넣어 보면 $\alpha^2 = \alpha + \iota([1])$이므로
$$
\begin{aligned}
&(\alpha + \iota([1]))^2 + (\alpha + \iota([1])) + \iota([1]) \\
&\quad = \alpha^2 + \alpha + \iota([1]) = 0
\end{aligned}
$$
입니다(표수가 $2$이므로 $(\alpha + \iota([1]))^2 = \alpha^2 + \iota([1])$이고 $\iota([1]) + \iota([1]) = 0$). 나머지 두 원소 $\iota([0])$, $\iota([1])$에서의 값은 $\iota([1])$입니다. 곧 $L$의 원소 넷 가운데 근은 둘이고, $L$은 그 근 하나만 붙여도 이미 다른 근을 담습니다.
:::

:::counterexample[분해체의 차수가 $2$인 사차 다항식 $(X^2 - 2)^2$]
분해체의 차수는 다항식의 차수로 정해지지 않습니다. $g = (X^2 - 2)^2$은 차수가 $4$이지만 $\mathbb{R}[X]$에서 $g = (X - s)(X - s)(X - (-s))(X - (-s))$($s = \sqrt{2}$)이므로, 분해체의 (9)에 의해 $\mathbb{Q}(s, s, -s, -s)$가 $\mathbb{Q}$ 위에서 $g$의 분해체입니다. 이 체와 $\mathbb{Q}(s)$는 서로를 포함하므로([[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (ii), [[simple-algebraic-extension|단순 대수적 확대]]의 (1)) 같고, 차수는 체의 확대의 예의 (1)에 의해 $2$입니다. $g$는 중근 $\pm\sqrt{2}$를 갖지만, 모닉 기약 인수 $X^2 - 2$는 (4)에 의해 근이 서로 다릅니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_5$ 위의 $X^2 - [2]$로 만든 크로네커 체 $L$은 $\iota(\mathbb{Z}_5)$ 위에서 무엇의 분해체이고, 원소는 몇 개인가?]
$X^2 - \iota([2])$의 분해체이고 원소는 $25$개입니다. $\mathbb{Z}_5$의 원소의 제곱은 $[0], [1], [4], [4], [1]$이므로 $X^2 - [2]$는 근이 없고 기약입니다(기약 다항식의 (5)). (1)에서 $b = [0]$이므로 $\alpha' = -\alpha$이고, (1)의 (ii)에 의해 $L$은 분해체, 크로네커 정리의 (4)에 의해 원소는 $5^2 = 25$개입니다. $\alpha$와 $-\alpha = \iota([4])\alpha$는 서로 다르므로 근도 서로 다릅니다.
:::

:::check[$\mathbb{Q}(\sqrt{2}, \sqrt{5})$는 $\mathbb{Q}(\sqrt{5})$ 위에서 $(X^2 - 2)(X^2 - 5)$의 분해체인가? 그 차수는?]
분해체이고 차수는 $2$입니다. (5)와 [[splitting-field|분해체]]의 (8)에 의해 $\mathbb{Q}(\sqrt{2}, \sqrt{5})$는 사이의 체 $\mathbb{Q}(\sqrt{5})$ 위에서도 분해체입니다. 예의 (1)에 의해 $[\mathbb{Q}(\sqrt{5}) : \mathbb{Q}] = 2$이고, [[tower-law|차수의 곱셈 공식]]의 (3)의 (i)에 의해 $4 = [\mathbb{Q}(\sqrt{2}, \sqrt{5}) : \mathbb{Q}(\sqrt{5})] \cdot 2$이므로 차수는 $2$입니다.
:::
