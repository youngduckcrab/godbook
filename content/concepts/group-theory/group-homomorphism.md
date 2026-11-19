---
title: 군 준동형
title_en: Group Homomorphism
aliases: [준동형, 준동형사상, 군 준동형사상, 자명한 준동형, 포함 함수, group homomorphism, homomorphism, trivial homomorphism, inclusion]
kind: definition
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 군 G에서 군 G′으로의 함수 φ가 모든 a, b ∈ G에서 φ(ab) = φ(a)φ(b)를 만족하면 준동형이다. 준동형은 항등원, 역원, 거듭제곱을 보존하고, 준동형의 합성과 부분군으로의 제한도 준동형이며, 정수의 덧셈군에서 나가는 준동형은 1에서의 값으로 정해진다.
requires: [set, function, function-composition, inverse-function, injective-surjective-bijective, adding-or-removing-an-element, recursion-theorem, mathematical-induction, well-ordering-principle, group, group-basic-properties, subgroup, power-in-a-group, laws-of-exponents, number-groups, integers-modulo-n, real-number-arithmetic, congruence-modulo-n, equivalence-classes-equal-iff-related]
sources:
  - ref: judson-abstract-algebra
    loc: 11.1절 Group Homomorphisms, 준동형의 정의(번호 없음) p.133, Example 11.1 p.133, Proposition 11.4 의 1, 2 p.134
    checked: original
    note: "출처는 군 (G, ·) 와 (H, ◦) 사이의 사상 ϕ 로서 모든 g₁, g₂ ∈ G 에서 ϕ(g₁ · g₂) = ϕ(g₁) ◦ ϕ(g₂) 인 것을 준동형이라 하고, 그 치역을 homomorphic image 라 부른다(p.133). 이 항목은 두 군을 (G, ∗), (G′, ∗′) 로 쓰고 정의를 '정확히 ~일 때'로 적는다. 출처의 연산 기호 ◦ 는 이 사이트에서 합성이므로 쓰지 않았다. (1), (2)는 출처 Proposition 11.4 의 1, 2(p.134)이다. 출처는 (1)을 e′ϕ(e) = ϕ(e)ϕ(e) 에서 소거로, (2)를 ϕ(g⁻¹)ϕ(g) = e′ 한 식으로 보인다. 이 항목은 (1)에 같은 소거를 담은 군의 기본 성질의 (9)를, (2)에 한쪽 곱으로 역원을 판정하는 같은 항목의 (3)을 인용한다. (3)은 출처에 명제로 없다(검색어 'ϕ(g n )', 'ϕ(a n )', 'ϕ(g) n', 'ϕ(gk', 'powers' 로 책 전체를 찾았다. 'ϕ(a n )' 의 2건은 다항식의 계수에 사상을 쓰는 21장의 식과 17장 연습문제의 답이고, 'powers' 의 14건에 이런 진술은 없다). 9장과 11장의 연습문제를 처음부터 끝까지 읽었고, 연습문제 11.10, 11.11 과 연습문제 9.27 의 답의 힌트(p.325)가 이 사실을 쓰게 하지만 진술하지는 않는다. (4)의 합성은 출처에 준동형에 대한 명제로 없다(검색어 'composition of homomorphisms' 0건, 'composite' 8건은 합성수, 'ψ ◦ ϕ' 1건은 동형사상에 관한 연습문제 9.31(p.123)이다). 11.5절 연습문제 1(p.139–140, 자기동형 전체 Aut(G) 가 군이다)도 동형사상의 합성을 쓰게 한다. 출처는 Theorem 11.13 의 증명(p.137)에서 G → G/N → (G/N)/(H/N) 을 이어 붙인 준동형을 말없이 쓴다. 항등함수가 준동형이라는 것은 출처에 명제로 없고, 연습문제 9.31(동형이 동치관계라는 것의 반사성)과 11.5절 연습문제 1 이 쓰게 하는 사실이다(검색어 'identity (map|homomorphism|mapping)' 4건은 1장의 항등사상의 정의(p.9, p.11), 5장의 S_n 의 항등원(p.59), 기호표이다). '자명한 준동형'이라는 이름은 출처에 없고(검색어 'trivial homomorphism' 0건), 출처 Example 11.8(p.135)이 ℤ₇ 에서 ℤ₁₂ 로의 준동형은 모든 원소를 0 으로 보내는 것뿐이라고 적는다. (5)는 출처에 명제로 없다(검색어 'inclusion' 12건은 집합의 포함, 13장의 부분군의 열, 19장의 순서이고, 'restrict' 7건은 1장 머리말, 부분군의 정의(p.38)의 '연산을 H 로 제한', 13장의 'restrict our attention', 23장의 체의 자기동형이다). 출처 Theorem 11.12 의 증명(p.136)이 H 에서 HN/N 으로 h 를 hN 으로 보내는 사상은 표준 준동형을 H 로 제한한 것과 같은 함수이지만, 출처는 그것을 제한이라 부르지 않고 직접 준동형임을 보인다. (6)의 덧셈 표기에서의 꼴은 출처 Example 11.1(p.133)이 ϕ(m + n) = g^{m+n} = g^m g^n 으로 쓰는 것과 같다. (7)(ii)는 출처 Example 11.1(p.133)과 같은 대상, 같은 결론이다. (7)(i)의 함수는 출처 Example 16.20(p.195)이 a 를 a (mod n) 으로 보내는 환 준동형 ℤ → ℤ_n 으로 드는 것과 같은 함수이고, 군 준동형으로 따로 드는 곳은 찾지 못했다(검색어 'Z → Zn' 1건). 연습문제 11.6(p.138, ℤ 에서 ℤ₁₂ 로의 준동형을 모두 구하라)이 구하게 하는 준동형 가운데 하나와 같은 꼴이다. (7)(iii)은 출처 연습문제 11.11(p.139, 순환군에서 정의된 준동형은 생성원에서의 값으로 정해진다)을 (ℤ, +) 에 쓴 것과 같은 발상이고, 11.5절 연습문제 7(p.140, ℤ 에서 ℤ 로의 준동형을 모두 구하라)도 같은 발상이다. 예시 '정수의 k 배'는 출처 연습문제 11.4(p.138, ϕ(n) = 7n)와 같은 발상이다. 예시 '0 이 아닌 실수의 제곱'은 출처 연습문제 11.8(p.139, 아벨군에서 g 를 gⁿ 으로 보내는 함수)의 n = 2 를 (ℝ − {0}, ·) 에 쓴 것이다. 두 반례(정수의 제곱, 1 을 더하는 함수)는 출처에서 찾지 못했다(검색어 'is not a homomorphism|fails to be a homomorphism' 의 1건은 연습문제 11.2(c) 의 답(p.326)이고, '7→ n2', '7→ x2', '7→ n + 1', '7→ x + 1' 꼴은 0건이다). 첫째 확인 질문(역원을 대응시키는 함수)은 출처에서 찾지 못했다(검색어 '7→ g −1' 꼴, '(g) = g −1' 꼴, 'inverse map', 'abelian if and only if'. 건들은 1장의 역사상, 연습문제 9.36 의 B⁻¹AB, 15장 답의 g⁻¹Hg, 직접곱과 교환자 부분군에 관한 연습문제이다). 둘째 확인 질문은 출처 연습문제 11.6(p.138, ℤ 에서 ℤ₁₂ 로의 준동형을 모두 구하라)과 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 출처의 연습문제와 겹치는 것을 메모에 밝히고 경계 경우의 문장을 고침"
added: 2026-11-19
---

:::statement
$(G, \ast)$와 $(G', \ast')$이 [[group|군]]이고 $e$, $e'$이 각각 그 항등원이라 하자. 두 군에 [[group|군]]의 곱 표기를 쓴다. 곧 $a, b \in G$이면 $ab = a \ast b$이고, $x, y \in G'$이면 $xy = x \ast' y$이다. 아래의 식에서 $\varphi$의 괄호 안에 있는 곱, 역원 $x^{-1}$, [[power-in-a-group|군의 거듭제곱]] $x^n$은 $G$에서 계산하고, $\varphi$의 값들 사이의 곱, 역원, 거듭제곱은 $G'$에서 계산한다.

[[function|함수]] $\varphi : G \to G'$이 군 $G$에서 군 $G'$으로의 **준동형**(homomorphism)인 것은 정확히 모든 $a, b \in G$에 대하여
$$\varphi(a \ast b) = \varphi(a) \ast' \varphi(b), \quad \text{곧} \quad \varphi(ab) = \varphi(a)\varphi(b)$$
일 때이다. 왼쪽의 곱은 $G$에서, 오른쪽의 곱은 $G'$에서 계산한다.

다음이 성립한다. (1)–(3)에서 $\varphi : G \to G'$은 준동형이고 $a \in G$이다.

1. (항등원) $\varphi(e) = e'$이다.
2. (역원) $\varphi(a^{-1}) = \varphi(a)^{-1}$이다.
3. (거듭제곱) 모든 정수 $n$에 대하여 $\varphi(a^n) = \varphi(a)^n$이다.
4. (합성, 항등함수, 자명한 준동형) $(G'', \ast'')$이 군이고 $\varphi : G \to G'$과 $\psi : G' \to G''$이 준동형이면 [[function-composition|합성]] $\psi \circ \varphi : G \to G''$은 준동형이다. [[inverse-function|항등함수]] $i_G : G \to G$는 준동형이다. 모든 $a \in G$에서 값이 $e'$인 함수 $G \to G'$은 준동형이고, 이것을 **자명한 준동형**(trivial homomorphism)이라 한다.
5. (부분군) $\varphi : G \to G'$이 준동형이라 하자. 부분군은 [[subgroup|부분군]]의 뜻이고, 부분군은 제한한 연산으로 군이다.
   - (i) $H$가 $G$의 부분군이면 $\varphi$의 $H$로의 [[adding-or-removing-an-element|제한]] $\varphi|_H : H \to G'$은 군 $H$에서 군 $G'$으로의 준동형이다. 특히 $\varphi = i_G$로 두면, 모든 $h \in H$에서 값이 $h$인 함수 $H \to G$, 곧 **포함 함수**(inclusion)는 준동형이다.
   - (ii) $K$가 $G'$의 부분군이고 모든 $a \in G$에서 $\varphi(a) \in K$이면, 같은 집합 $\varphi$를 [[function|함수]] $\varphi : G \to K$로 선언한 것은 군 $G$에서 군 $K$로의 준동형이다.
6. (덧셈 표기) $G$나 $G'$이 [[number-groups|수로 이루어진 군]]의 덧셈 표기로 쓰는 아벨군이면, 위의 식에서 그 군의 곱 $xy$를 합 $x + y$로, 항등원을 $0$으로, 역원 $x^{-1}$을 $-x$로, 거듭제곱 $x^n$을 [[power-in-a-group|군의 거듭제곱]]의 (4)의 배수 $n \cdot x$로 읽는다. 예를 들어 $G$와 $G'$이 모두 덧셈 표기이면, $\varphi$가 준동형인 것은 정확히 모든 $a, b \in G$에서 $\varphi(a + b) = \varphi(a) + \varphi(b)$일 때이고, 그때 $\varphi(0) = 0$, $\varphi(-a) = -\varphi(a)$이며 모든 정수 $n$에서 $\varphi(n \cdot a) = n \cdot \varphi(a)$이다. $G$가 $(\mathbb{Z}, +)$이고 $G'$이 곱 표기이면, $\varphi$가 준동형인 것은 정확히 모든 정수 $m$, $n$에서 $\varphi(m + n) = \varphi(m)\varphi(n)$일 때이고, 그때 $\varphi(0) = e'$, $\varphi(-n) = \varphi(n)^{-1}$이다.
7. (정수의 덧셈군에서 나가는 준동형) $(\mathbb{Z}, +)$와, 자연수 $m$에 대한 $(\mathbb{Z}_m, +)$는 [[number-groups|수로 이루어진 군]]의 군이다.
   - (i) $m$이 자연수이면 각 정수 $n$에 [[integers-modulo-n|법 m의 정수]]의 동치류 $[n]$을 대응시키는 함수 $\mathbb{Z} \to \mathbb{Z}_m$은 $(\mathbb{Z}, +)$에서 $(\mathbb{Z}_m, +)$로의 준동형이다.
   - (ii) $a \in G$이면 각 정수 $n$에 $a^n$을 대응시키는 함수 $\mathbb{Z} \to G$는 $(\mathbb{Z}, +)$에서 $G$로의 준동형이다.
   - (iii) $\psi$가 $(\mathbb{Z}, +)$에서 $G$로의 준동형이면 모든 정수 $n$에서 $\psi(n) = \psi(1)^n$이다. 곧 $\psi$는 (ii)에서 $a = \psi(1)$로 둔 함수와 같다.
:::

:::english
Let $(G, \ast)$ and $(G', \ast')$ be groups with identities $e$ and $e'$ respectively. We use the product notation of groups in both: for $a, b \in G$, $ab = a \ast b$, and for $x, y \in G'$, $xy = x \ast' y$. In the formulas below, products, inverses $x^{-1}$ and powers $x^n$ inside the parentheses of $\varphi$ are computed in $G$, and products, inverses and powers among values of $\varphi$ are computed in $G'$.

A function $\varphi : G \to G'$ is a **homomorphism** from the group $G$ to the group $G'$ exactly when, for all $a, b \in G$,
$$\varphi(a \ast b) = \varphi(a) \ast' \varphi(b), \quad \text{that is,} \quad \varphi(ab) = \varphi(a)\varphi(b).$$
The product on the left is computed in $G$ and the one on the right in $G'$.

The following hold. In (1)–(3), $\varphi : G \to G'$ is a homomorphism and $a \in G$.

1. (Identity) $\varphi(e) = e'$.
2. (Inverses) $\varphi(a^{-1}) = \varphi(a)^{-1}$.
3. (Powers) $\varphi(a^n) = \varphi(a)^n$ for every integer $n$.
4. (Composition, identity function, trivial homomorphism) If $(G'', \ast'')$ is a group and $\varphi : G \to G'$ and $\psi : G' \to G''$ are homomorphisms, then the composition $\psi \circ \varphi : G \to G''$ is a homomorphism. The identity function $i_G : G \to G$ is a homomorphism. The function $G \to G'$ whose value at every $a \in G$ is $e'$ is a homomorphism, called the **trivial homomorphism**.
5. (Subgroups) Let $\varphi : G \to G'$ be a homomorphism. Subgroups are meant in the sense of the entry on subgroups; a subgroup is a group under the restricted operation.
   - (i) If $H$ is a subgroup of $G$, then the restriction $\varphi|_H : H \to G'$ of $\varphi$ to $H$ is a homomorphism from the group $H$ to the group $G'$. In particular, taking $\varphi = i_G$, the function $H \to G$ whose value at every $h \in H$ is $h$, the **inclusion**, is a homomorphism.
   - (ii) If $K$ is a subgroup of $G'$ and $\varphi(a) \in K$ for every $a \in G$, then the same set $\varphi$, declared as a function $\varphi : G \to K$, is a homomorphism from the group $G$ to the group $K$.
6. (Additive notation) If $G$ or $G'$ is an abelian group written additively as in the entry on groups of numbers, then in the formulas above the product $xy$ of that group is read as the sum $x + y$, the identity as $0$, the inverse $x^{-1}$ as $-x$, and the power $x^n$ as the multiple $n \cdot x$ of item (4) of the entry on powers in a group. For example, if both $G$ and $G'$ are written additively, then $\varphi$ is a homomorphism exactly when $\varphi(a + b) = \varphi(a) + \varphi(b)$ for all $a, b \in G$, and then $\varphi(0) = 0$, $\varphi(-a) = -\varphi(a)$, and $\varphi(n \cdot a) = n \cdot \varphi(a)$ for every integer $n$. If $G$ is $(\mathbb{Z}, +)$ and $G'$ is written multiplicatively, then $\varphi$ is a homomorphism exactly when $\varphi(m + n) = \varphi(m)\varphi(n)$ for all integers $m$, $n$, and then $\varphi(0) = e'$ and $\varphi(-n) = \varphi(n)^{-1}$.
7. (Homomorphisms out of the additive group of integers) $(\mathbb{Z}, +)$ and, for a natural number $m$, $(\mathbb{Z}_m, +)$ are the groups of the entry on groups of numbers.
   - (i) If $m$ is a natural number, the function $\mathbb{Z} \to \mathbb{Z}_m$ assigning to each integer $n$ its class $[n]$ is a homomorphism from $(\mathbb{Z}, +)$ to $(\mathbb{Z}_m, +)$.
   - (ii) If $a \in G$, the function $\mathbb{Z} \to G$ assigning $a^n$ to each integer $n$ is a homomorphism from $(\mathbb{Z}, +)$ to $G$.
   - (iii) If $\psi$ is a homomorphism from $(\mathbb{Z}, +)$ to $G$, then $\psi(n) = \psi(1)^n$ for every integer $n$; that is, $\psi$ equals the function of (ii) with $a = \psi(1)$.
:::

## 직관

준동형은 한 군의 곱셈표를 다른 군으로 옮기되, "곱한 뒤 옮긴 것"과 "옮긴 뒤 곱한 것"이 늘 같게 옮기는 함수입니다. 시계를 떠올려 봅시다. 지금부터 $a$시간 뒤에 다시 $b$시간 뒤의 시곗바늘 자리는, $a + b$를 먼저 더한 뒤 바늘 자리로 옮겨도, $a$시간과 $b$시간을 각각 바늘 자리로 옮긴 뒤 바늘끼리 더해도 같습니다. 이것이 (7)(i)의 $\mathbb{Z} \to \mathbb{Z}_{12}$이고, 정의의 "모든 $a, b$에 대하여"는 "어떤 두 시간을 골라도"에 해당합니다. 비유가 맞지 않는 곳도 있습니다. 시간의 덧셈은 순서를 바꿔도 같지만, 준동형의 정의는 교환법칙을 가정하지 않고 곱의 순서 그대로 $\varphi(ab) = \varphi(a)\varphi(b)$를 요구합니다.

시계에서 $0$시간 뒤와 $12$시간 뒤는 같은 바늘 자리입니다. 준동형은 서로 다른 원소를 같은 원소로 보낼 수 있고, 그래서 곱셈표의 일부 정보를 잃을 수 있습니다. 그래도 곱셈이 지켜지므로 항등원은 항등원으로, 역원은 역원으로, 거듭제곱은 거듭제곱으로 옮겨 갑니다((1)–(3)). 이것들은 정의에 따로 넣지 않아도 곱셈을 지킨다는 한 조건에서 나옵니다.

(7)(iii)은 $(\mathbb{Z}, +)$의 모든 원소가 $1$의 배수라는 데서 나옵니다. $1$이 어디로 가는지만 정하면 $n = n \cdot 1$이 갈 곳은 (3)에 의해 정해지므로, $(\mathbb{Z}, +)$에서 나가는 준동형은 $1$에서의 값 하나로 모두 정해집니다.

:::remark[(1)–(3)의 증명]
$\varphi : G \to G'$이 준동형이고 $a \in G$라 하자.

(1) $e$는 $G$의 항등원이므로 $ee = e$이다. 준동형의 조건에 의해 $\varphi(e)\varphi(e) = \varphi(ee) = \varphi(e)$이다. [[group-basic-properties|군의 기본 성질]]의 (9)를 군 $G'$의 원소 $\varphi(e)$에 쓰면 $\varphi(e) = e'$이다.

(2) 준동형의 조건과 (1)에 의해 $\varphi(a)\varphi(a^{-1}) = \varphi(aa^{-1}) = \varphi(e) = e'$이다. [[group-basic-properties|군의 기본 성질]]의 (3)을 $G'$에서 쓰면 $\varphi(a^{-1}) = \varphi(a)^{-1}$이다.

(3) 거듭제곱의 성질은 [[power-in-a-group|군의 거듭제곱]]의 (1)과 정의를 쓴다. 먼저 자연수 $n$에 대하여 $\varphi(a^n) = \varphi(a)^n$임을 [[mathematical-induction|수학적 귀납법]]으로 보인다. $n = 1$이면 $a^1 = a$이고 $\varphi(a)^1 = \varphi(a)$이므로 성립한다. 자연수 $n$에서 성립한다고 하면, $a^{n+1} = a^n a$이고 $\varphi(a)^{n+1} = \varphi(a)^n \varphi(a)$이므로
$$\varphi(a^{n+1}) = \varphi(a^n a) = \varphi(a^n)\varphi(a) = \varphi(a)^n \varphi(a) = \varphi(a)^{n+1}$$
이다. 따라서 모든 자연수 $n$에서 성립한다.

$n = 0$이면 $a^0 = e$, $\varphi(a)^0 = e'$이므로 (1)에 의해 성립한다. $n$이 음의 정수이면 $-n$은 자연수이고 정의에 의해 $a^n = (a^{-1})^{-n}$, $\varphi(a)^n = (\varphi(a)^{-1})^{-n}$이다. 자연수의 경우를 원소 $a^{-1}$과 자연수 $-n$에 쓰고 (2)를 쓰면
$$\varphi(a^n) = \varphi\bigl((a^{-1})^{-n}\bigr) = \varphi(a^{-1})^{-n} = (\varphi(a)^{-1})^{-n} = \varphi(a)^n$$
이다. [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 (Z5)에 의해 모든 정수는 양수이거나 $0$이거나 음수이고, 양의 정수는 자연수이며, (Z7)에 의해 음의 정수 $n$에서 $-n > 0$이다. 따라서 모든 정수 $n$에서 (3)이 성립한다.
:::

:::remark[(4)–(7)의 증명]
(4) 합성: $\varphi$의 공역 $G'$이 $\psi$의 정의역이므로 [[function-composition|합성]] $\psi \circ \varphi : G \to G''$이 정의된다. $a, b \in G$이면 $\varphi$와 $\psi$가 준동형이므로
$$(\psi \circ \varphi)(ab) = \psi(\varphi(ab)) = \psi\bigl(\varphi(a)\varphi(b)\bigr) = \psi(\varphi(a))\,\psi(\varphi(b)) = (\psi \circ \varphi)(a)\,(\psi \circ \varphi)(b)$$
이다. 첫째와 마지막 등식은 [[function-composition|합성]]의 진술 $(\psi \circ \varphi)(x) = \psi(\varphi(x))$이다. 항등함수: [[inverse-function|역관계와 역함수]]의 정의에 의해 $i_G(ab) = ab = i_G(a)\,i_G(b)$이다. 자명한 준동형: 각 $a \in G$에 $e'$을 대응시키는 $\{(a, e') : a \in G\}$는 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $G$에서 $G'$으로의 함수이다. 이 함수를 $z$라 하면 $e'$이 $G'$의 항등원이므로 $z(ab) = e' = e'e' = z(a)z(b)$이다.

(5) (i) [[adding-or-removing-an-element|함수의 제한]]의 진술에 의해 $\varphi|_H : H \to G'$은 함수이고 모든 $h \in H$에서 $\varphi|_H(h) = \varphi(h)$이다. $a, b \in H$이면 [[subgroup|부분군]]의 (3)에 의해 군 $H$에서의 곱은 $G$에서의 곱 $ab$이고, $ab \in H$이다. 따라서 $\varphi|_H(ab) = \varphi(ab) = \varphi(a)\varphi(b) = \varphi|_H(a)\,\varphi|_H(b)$이다. (4)에 의해 $i_G$는 준동형이므로 $i_G|_H : H \to G$도 준동형이고, 모든 $h \in H$에서 $i_G|_H(h) = i_G(h) = h$이다.

(ii) 모든 $a \in G$에서 $\varphi(a) \in K$이므로 [[function|함수]]의 진술("공역은 선언하기 나름이다")에 의해 $\varphi$는 $G$에서 $K$로의 함수이기도 하다. $a, b \in G$이면 $\varphi(a), \varphi(b) \in K$이고, [[subgroup|부분군]]의 (3)에 의해 군 $K$에서 $\varphi(a)$와 $\varphi(b)$의 곱은 $G'$에서의 곱 $\varphi(a)\varphi(b)$이다. 이것은 $\varphi(ab)$와 같으므로 $\varphi : G \to K$는 준동형이다.

(6) 덧셈 표기는 [[number-groups|수로 이루어진 군]]과 [[power-in-a-group|군의 거듭제곱]]의 (4)에서 정한 기호의 바꿔 쓰기이다. 곧 덧셈 표기의 군에서 $x + y$, $0$, $-x$, $n \cdot x$는 각각 그 군의 곱, 항등원, 역원, $n$제곱이다. 따라서 정의와 (1)–(3)을 이 기호로 옮겨 쓴 것이 (6)의 식들이다.

(7) (i) 각 정수 $n$에 $\mathbb{Z}_m$의 원소 $[n]$이 정해져 있으므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $f = \{(n, [n]) : n \in \mathbb{Z}\}$는 $\mathbb{Z}$에서 $\mathbb{Z}_m$으로의 함수이다. [[integers-modulo-n|법 m의 정수]]의 (2)에 의해 모든 정수 $a$, $b$에서 $f(a + b) = [a + b] = [a] + [b] = f(a) + f(b)$이므로 (6)에 의해 $f$는 준동형이다.

(ii) [[power-in-a-group|군의 거듭제곱]]의 (1)에 의해 각 정수 $n$에 $a^n \in G$가 하나로 정해지므로, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $g = \{(n, a^n) : n \in \mathbb{Z}\}$는 $\mathbb{Z}$에서 $G$로의 함수이다. [[laws-of-exponents|지수법칙]]의 (1)에 의해 모든 정수 $m$, $n$에서 $g(m + n) = a^{m+n} = a^m a^n = g(m)g(n)$이므로 (6)에 의해 $g$는 준동형이다.

(iii) 정수 $n$에 대하여 [[power-in-a-group|군의 거듭제곱]]의 (6)에 의해 $(\mathbb{Z}, +)$에서 $n \cdot 1$은 정수의 곱 $n1 = n$이다. (3)을 $(\mathbb{Z}, +)$의 원소 $1$에 쓰면, (6)의 읽기에 의해 $\psi(n) = \psi(n \cdot 1) = \psi(1)^n$이다. 따라서 $\psi$와 (ii)에서 $a = \psi(1)$로 둔 함수는 정의역 $\mathbb{Z}$의 모든 원소에서 값이 같고, [[function|함수]]의 같음에 의해 두 함수는 같다.
:::

## 예시와 반례

:::example[정수의 k 배]
$k$를 정해진 정수라 하고, 각 정수 $n$에 $kn$을 대응시키는 함수 $\mu_k : \mathbb{Z} \to \mathbb{Z}$를 생각합시다. (7)(ii)를 군 $(\mathbb{Z}, +)$와 원소 $a = k$에 쓰면, $n$에 $n \cdot k$를 대응시키는 함수가 준동형이고, [[power-in-a-group|군의 거듭제곱]]의 (6)에 의해 $n \cdot k = nk = kn$이므로 이것이 $\mu_k$입니다. 직접 확인해도 $\mu_k(m + n) = k(m + n) = km + kn = \mu_k(m) + \mu_k(n)$입니다. $k = 0$이면 $\mu_0$은 자명한 준동형이고, $k = 1$이면 $\mu_1$은 항등함수 $i_{\mathbb{Z}}$입니다. (7)(iii)에 의해 $(\mathbb{Z}, +)$에서 $(\mathbb{Z}, +)$로의 준동형 $\psi$는 모두 $\psi(n) = n \cdot \psi(1) = \psi(1)n$이므로, 이런 준동형은 $\mu_k$들뿐입니다.
:::

:::example[0이 아닌 실수의 제곱]
[[number-groups|수로 이루어진 군]]의 (3)의 군 $(\mathbb{R} - \{0\}, \cdot)$에서 각 $x$에 $xx$를 대응시키는 함수 $s$를 생각합시다. $x \ne 0$이면 [[real-number-arithmetic|실수의 계산 법칙]]의 (K12)(vi)에 의해 $xx \ne 0$이므로 $s$는 $\mathbb{R} - \{0\}$에서 $\mathbb{R} - \{0\}$으로의 함수입니다. 0이 아닌 실수 $x$, $y$에 대하여 (K1)과 (K2)로 곱의 순서와 괄호를 옮기면 $s(xy) = (xy)(xy) = (xx)(yy) = s(x)s(y)$이므로 $s$는 준동형입니다. (1)이 말하는 대로 $s(1) = 1$이고, (2)가 말하는 대로 (K12)(vi)에 의해 $s(x^{-1}) = x^{-1}x^{-1} = (xx)^{-1} = s(x)^{-1}$입니다. $(-1)(-1) = 1 \cdot 1 = 1$((K12)(iii)과 (K4))이므로 $s(-1) = 1 = s(1)$이고, (K7)에 의해 정수 $-1$과 $1$은 실수로서도 서로 다르므로 이 준동형은 서로 다른 두 원소를 같은 원소로 보냅니다.
:::

:::counterexample[항등원을 항등원으로 보내도 준동형이 아닐 수 있다]
각 정수 $n$에 $nn$을 대응시키는 함수 $q : \mathbb{Z} \to \mathbb{Z}$는 $q(0) = 0$이어서 $(\mathbb{Z}, +)$의 항등원을 항등원으로 보냅니다. 그러나 $q(1 + 1) = 2 \cdot 2 = 4$이고 $q(1) + q(1) = 1 + 1 = 2$이며 $4 \ne 2$이므로, (6)의 조건 $q(a + b) = q(a) + q(b)$가 $a = b = 1$에서 깨집니다. 따라서 $q$는 $(\mathbb{Z}, +)$에서 $(\mathbb{Z}, +)$로의 준동형이 아닙니다. (1)은 준동형이기 위한 필요조건일 뿐 충분조건이 아닙니다.
:::

:::counterexample[1을 더하는 함수]
각 정수 $n$에 $n + 1$을 대응시키는 함수 $t : \mathbb{Z} \to \mathbb{Z}$는 [[injective-surjective-bijective|전단사]]입니다($t(n) = t(n')$이면 $n = n'$이고, 정수 $m$은 $t(m - 1)$입니다). 그러나 $t(0) = 1 \ne 0$이므로 (1)의 대우에 의해 $t$는 $(\mathbb{Z}, +)$에서 $(\mathbb{Z}, +)$로의 준동형이 아닙니다. 실제로 $t(0 + 0) = 1$이고 $t(0) + t(0) = 2$입니다.
:::

## 확인 질문

:::check[군 $G$에서 각 원소 $a$에 $a^{-1}$을 대응시키는 함수 $G \to G$는 언제 준동형인가?]
정확히 $G$가 아벨군일 때입니다. 이 함수를 $r$이라 하면 [[group-basic-properties|군의 기본 성질]]의 (6)에 의해 $r(ab) = (ab)^{-1} = b^{-1}a^{-1}$이고, $r(a)r(b) = a^{-1}b^{-1}$입니다. $G$가 아벨군이면 $b^{-1}a^{-1} = a^{-1}b^{-1}$이므로 $r$은 준동형입니다. 거꾸로 $r$이 준동형이면 모든 $a, b \in G$에서 $b^{-1}a^{-1} = a^{-1}b^{-1}$입니다. $x, y \in G$에 대하여 $a = x^{-1}$, $b = y^{-1}$로 두면 같은 항목의 (5)에 의해 $yx = xy$이므로 $G$는 아벨군입니다.
:::

:::check[$\psi$가 $(\mathbb{Z}, +)$에서 $(\mathbb{Z}_7, +)$로의 준동형이고 $\psi(1) = [3]$이면 $\psi(5)$와 $\psi(-1)$은 무엇인가?]
(7)(iii)과 (6)의 읽기에 의해 $\psi(n) = n \cdot [3]$이고, [[power-in-a-group|군의 거듭제곱]]의 (7)에 의해 $n \cdot [3] = [3n]$입니다. 따라서 $\psi(5) = [15]$이고, $15 - 1 = 7 \cdot 2$이므로 [[congruence-modulo-n|합동]]의 정의와 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]에 의해 $[15] = [1]$입니다. $\psi(-1) = [-3]$이고 $-3 - 4 = 7 \cdot (-1)$이므로 $[-3] = [4]$입니다.
:::
