---
title: 잉여류
title_en: Cosets
aliases: [왼쪽 잉여류, 오른쪽 잉여류, 좌잉여류, 우잉여류, left coset, right coset, coset]
kind: definition
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 부분군 H에 대해 a⁻¹b ∈ H로 정한 관계는 동치관계이고, a의 동치류는 왼쪽 잉여류 aH이다. 왼쪽 잉여류 전체 G/H는 G의 분할이고 각 잉여류는 H와 크기가 같다. 오른쪽 잉여류 Ha도 같은 성질을 갖고, 자연수 n에 대해 (ℤ, +)에서 ℤ/nℤ는 ℤ_n이다.
requires: [set, subset, set-operations, cartesian-product, relation, function, injective-surjective-bijective, image-and-preimage, adding-or-removing-an-element, equivalence-relation, equivalence-class, equivalence-classes-equal-iff-related, partition, equivalence-classes-form-a-partition, operation-on-equivalence-classes, equal-cardinality, finite-set, number-of-elements-is-unique, group, group-basic-properties, subgroup, subgroup-examples, number-groups, symmetric-group, real-number-arithmetic, divisibility, congruence-modulo-n, integers-modulo-n, even-and-odd]
sources:
  - ref: judson-abstract-algebra
    loc: 6.1절 Cosets, 왼쪽·오른쪽 잉여류의 정의(번호 없음) p.74, Example 6.1 p.74, Example 6.2 p.74–75, Lemma 6.3 p.75, Theorem 6.4 p.75, Remark 6.5 p.75. 6.2절 Proposition 6.9 p.76. 6.5절 연습문제 11 p.79
    checked: original
    note: "출처는 왼쪽 잉여류를 집합 gH = {gh : h ∈ H} 로, 오른쪽 잉여류를 Hg = {hg : h ∈ H} 로 정의한다(p.74). 이 항목은 같은 집합을 왼쪽 곱 L_a 에 의한 H 의 상으로 적는다. 관계 a⁻¹b ∈ H 를 동치관계로 세우고 잉여류를 그 동치류로 얻는 (1)(2)는 출처에 없다(검색어 'equivalence relation' 47건: 1장의 정의와 예, 5장 연습문제, 6장 연습문제 20 의 이중 잉여류, 9장·11장·14장·18장 — 왼쪽 잉여류의 관계는 없다). 출처 Lemma 6.3(p.75)은 g₁, g₂ 에 대해 다섯 조건 1. g₁H = g₂H, 2. Hg₁⁻¹ = Hg₂⁻¹, 3. g₁H ⊂ g₂H, 4. g₂ ∈ g₁H, 5. g₁⁻¹g₂ ∈ H 가 동치라고 하고 증명을 연습문제 11(p.79)로 둔다. 대응: 1 ↔ (3)의 (i), 3 ↔ (ii), 4 ↔ (iii), 5 ↔ (iv), 2 ↔ (7)의 마지막에서 둘째 문장. (3)의 (v) b⁻¹a ∈ H 는 출처의 목록에 없다. 출처의 ⊂ 는 그림으로 확인했다(p.75). Theorem 6.4(p.75)는 왼쪽 잉여류들이 G 를 분할한다는 것이고((4)), 출처의 증명은 두 잉여류가 만나면 같다는 것만 보인다. 이 항목은 동치류 전체가 분할을 이룬다는 정리로 증명한다. (5)는 출처에 명제로 없다(검색어 'gH = H' 8건은 모두 'gH = Hg', 'aH = H' 0건, 'H = gH' 0건, 'g ∈ H' 4건은 부분군 판정법과 준동형의 증명). 출처 Proposition 6.9(p.76)는 h 를 gh 로 보내는 H → gH 가 전단사이고 따라서 H 와 gH 의 원소의 수가 같다는 것이고((6)), 증명도 같다(왼쪽 소거와 정의). 출처는 H 가 무한일 때도 '원소의 수'라고 쓰지만 이 항목은 유한일 때만 |aH| 를 쓰고, 일반적으로는 크기가 같다고 쓴다. Remark 6.5(p.75)는 오른쪽 잉여류도 G 를 분할하고 증명은 곱을 H 의 반대쪽에서 하는 것만 다르다고 적는다. (7)은 그 증명을 직접 쓴 것이다. (7)의 '아벨군이면 aH = Ha'는 Example 6.1(p.74)의 끝 문장 '가환군에서는 왼쪽 잉여류와 오른쪽 잉여류가 늘 같다'와 같은 내용이다. 출처는 그 문장을 증명하지 않는다. (8)의 덧셈 표기는 출처 p.74 의 '(ℤ 와 ℤ_n 의 부분군의 잉여류는) 덧셈 표기로 쓴다'와 같다. ℤ/nℤ 의 잉여류가 nℤ, 1 + nℤ, …, (n − 1) + nℤ 라는 것은 출처 10.1절 Example 10.6 뒤의 문단(p.127)에 있고, 출처는 그 문단에서 집합 ℤ_n 과 같다고는 쓰지 않는다. 기호 G/H 를 모든 부분군의 왼쪽 잉여류 전체에 쓰는 것은 이 사이트의 약속이다. 출처는 왼쪽 잉여류 전체를 ℒ_H, 오른쪽 잉여류 전체를 ℛ_H 로 쓰고(p.75, Theorem 6.8 의 증명), G/N 은 정규부분군에만 쓴다. 예시 '0 이 아닌 실수와 ±1'은 출처에서 찾지 못했다(검색어 '{1, −1}', '{−1, 1}' 1건(12장의 행렬식), '±1' 9건(사원수군, 행렬식, 환의 단원), 'R∗' 22건(3장의 예와 연습문제, 4장 연습문제, 11장의 행렬식) — 잉여류 문맥은 없다). 예시 '두 극단'의 a{e} = {a}, aG = G 는 출처에서 찾지 못했다(검색어 'trivial subgroup' 10건, '{e}' 29건 가운데 6장의 것은 없다). 반례 'S₃ 에서 왼쪽과 오른쪽이 다른 예'는 출처 Example 6.2(p.75)의 K = {(1), (12)} 와 같은 발상이다(S₃ 에서 한 원소를 고정하는 두 원소 부분군의 왼쪽 잉여류와 오른쪽 잉여류가 다르다). 출처 10.3절 읽기 질문 1(p.130)도 같은 부분군 ⟨(1 2)⟩ 의 왼쪽·오른쪽 잉여류를 묻는다. 이 항목은 1 을 고정하는 치환 전체를 쓰고 순환 표기 없이 함수의 값으로 계산하며, 잉여류를 나열하지 않고 한 원소가 한쪽에만 속함을 보인다. 첫째 확인 질문은 (ℤ, +) 에서 nℤ 의 잉여류를 다룬다는 점에서 출처 6장 연습문제 5(c)(p.79, ℤ 에서 3ℤ 의 잉여류 나열)와 Example 10.6(p.127)과 대상이 같은 종류이고, 두 잉여류가 같은지를 (3)의 조건으로 판정하는 물음은 출처에서 찾지 못했다. 둘째 확인 질문(a ∉ H 이면 aH 는 부분군이 아니다)은 출처에서 찾지 못했다(검색어 'subgroup.{0,40}coset' 15건, 'coset.{0,60}(not|never).{0,30}subgroup' 0건, 6장 연습문제 1–23 과 읽기 질문을 읽었다)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 문장과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며 $H$가 $G$의 [[subgroup|부분군]]이라 하자. 곱 $ab$와 역원 $a^{-1}$은 [[group|군]]의 표기이다.

**관계.** $G$ 위의 [[relation|관계]] $\sim_H$를 $\{(a, b) \in G \times G : a^{-1}b \in H\}$로 정한다. 곧 $a, b \in G$에 대하여 $a \sim_H b$인 것은 정확히 $a^{-1}b \in H$일 때이다.

**왼쪽 잉여류.** $a \in G$일 때, [[group-basic-properties|군의 기본 성질]]의 (10)의 왼쪽 곱 $L_a : G \to G$에 의한 $H$의 [[image-and-preimage|상]]
$$aH = L_a(H) = \{ah : h \in H\}$$
를 $a$를 대표로 하는 $H$의 **왼쪽 잉여류**(left coset)라 한다. 곧 $x \in G$에 대하여 $x \in aH$인 것은 정확히 $x = ah$인 $h \in H$가 있을 때이다. $G$의 부분집합 $C$가 $H$의 왼쪽 잉여류인 것은 정확히 $C = aH$인 $a \in G$가 있을 때이고, $H$의 왼쪽 잉여류 전체의 집합을
$$G/H = \{aH : a \in G\}$$
로 쓴다. 곧 $C \in G/H$인 것은 정확히 $C = aH$인 $a \in G$가 있을 때이다.

다음이 성립한다.

1. (동치관계) $\sim_H$는 $G$ 위의 [[equivalence-relation|동치관계]]이다.
2. (동치류) $a \in G$이면 $\sim_H$에 대한 $a$의 [[equivalence-class|동치류]] $\{x \in G : x \sim_H a\}$는 $aH$이다. 특히 $a \in aH$이다. 따라서 [[operation-on-equivalence-classes|동치류 위의 연산]]의 몫집합 $G/{\sim_H}$는 $G/H$이다.
3. (두 왼쪽 잉여류가 같을 조건) $a, b \in G$에 대하여 다음 다섯 조건은 서로 동치이다.
   - (i) $aH = bH$
   - (ii) $aH \subseteq bH$
   - (iii) $b \in aH$
   - (iv) $a^{-1}b \in H$
   - (v) $b^{-1}a \in H$
4. (분할) $G/H$는 $G$의 [[partition|분할]]이다. 특히 $a, b \in G$에 대하여 $aH = bH$이거나 $aH \cap bH = \emptyset$이다.
5. ($H$ 자신) $eH = H$이다. $a \in G$에 대하여 $aH = H$인 것은 정확히 $a \in H$일 때이다.
6. (크기) $a \in G$이면 각 $h \in H$에 $ah$를 대응시키는 함수 $H \to aH$는 [[injective-surjective-bijective|전단사]]이다. 따라서 $H$와 $aH$는 [[equal-cardinality|크기가 같다]]. 특히 $H$가 [[finite-set|유한집합]]이면 $aH$도 유한집합이고 $|aH| = |H|$이다([[number-of-elements-is-unique|원소의 개수]]).
7. (오른쪽 잉여류) $a \in G$일 때 오른쪽 곱 $R_a : G \to G$에 의한 $H$의 상 $Ha = R_a(H) = \{ha : h \in H\}$를 $a$를 대표로 하는 $H$의 **오른쪽 잉여류**(right coset)라 한다. $G$ 위의 관계 $\approx_H$를 $\{(a, b) \in G \times G : ab^{-1} \in H\}$로 정한다. 그러면 $\approx_H$는 $G$ 위의 동치관계이고, $a \in G$의 $\approx_H$에 대한 동치류 $\{x \in G : x \approx_H a\}$는 $Ha$이며, $a \in Ha$이다. $a, b \in G$에 대하여 $Ha = Hb$인 것과 $ab^{-1} \in H$인 것과 $a \in Hb$인 것은 서로 동치이다. 오른쪽 잉여류 전체의 집합 $\{Ha : a \in G\}$는 $G$의 분할이다. 각 $h \in H$에 $ha$를 대응시키는 함수 $H \to Ha$는 전단사이고, $H$가 유한집합이면 $Ha$도 유한집합이고 $|Ha| = |H|$이다. $a, b \in G$에 대하여 $aH = bH$인 것은 정확히 $Ha^{-1} = Hb^{-1}$일 때이다. $G$가 아벨군이면 모든 $a \in G$에서 $aH = Ha$이다.
8. (덧셈 표기) $G$가 [[number-groups|수로 이루어진 군]]의 덧셈 표기로 쓰는 아벨군이면 $aH$를 $a + H = \{a + h : h \in H\}$로 쓰고, $a \sim_H b$인 것은 정확히 $-a + b \in H$일 때이다. $n$이 자연수이고 $G = (\mathbb{Z}, +)$, $H = n\mathbb{Z}$([[subgroup-examples|부분군의 예]]의 (1))이면, 정수 $a$, $b$에 대하여 $a \sim_{n\mathbb{Z}} b$인 것은 정확히 $a \equiv b \pmod n$일 때이다. 따라서 모든 정수 $a$에 대하여 $a + n\mathbb{Z}$는 [[integers-modulo-n|법 n의 정수]]의 동치류 $[a]$이고, $\mathbb{Z}/n\mathbb{Z} = \mathbb{Z}_n$이다.
:::

:::english
Let $G$ be a group with identity $e$ and let $H$ be a subgroup of $G$. Products $ab$ and inverses $a^{-1}$ are written as in the entry on groups.

**The relation.** Define the relation $\sim_H$ on $G$ to be $\{(a, b) \in G \times G : a^{-1}b \in H\}$. That is, for $a, b \in G$, $a \sim_H b$ exactly when $a^{-1}b \in H$.

**Left cosets.** For $a \in G$, the image of $H$ under the left multiplication $L_a : G \to G$ of property (10) of the basic properties of groups,
$$aH = L_a(H) = \{ah : h \in H\},$$
is called the **left coset** of $H$ with representative $a$. Thus for $x \in G$, $x \in aH$ exactly when $x = ah$ for some $h \in H$. A subset $C$ of $G$ is a left coset of $H$ exactly when $C = aH$ for some $a \in G$, and the set of all left cosets of $H$ is written
$$G/H = \{aH : a \in G\}.$$
Thus $C \in G/H$ exactly when $C = aH$ for some $a \in G$.

Then the following hold.

1. (Equivalence relation) $\sim_H$ is an equivalence relation on $G$.
2. (Equivalence classes) For $a \in G$, the equivalence class $\{x \in G : x \sim_H a\}$ of $a$ for $\sim_H$ is $aH$. In particular $a \in aH$. Hence the quotient set $G/{\sim_H}$ of the entry on operations on equivalence classes is $G/H$.
3. (When two left cosets are equal) For $a, b \in G$ the following five conditions are equivalent.
   - (i) $aH = bH$
   - (ii) $aH \subseteq bH$
   - (iii) $b \in aH$
   - (iv) $a^{-1}b \in H$
   - (v) $b^{-1}a \in H$
4. (Partition) $G/H$ is a partition of $G$. In particular, for $a, b \in G$, either $aH = bH$ or $aH \cap bH = \emptyset$.
5. ($H$ itself) $eH = H$. For $a \in G$, $aH = H$ exactly when $a \in H$.
6. (Size) For $a \in G$, the function $H \to aH$ assigning $ah$ to each $h \in H$ is a bijection. Hence $H$ and $aH$ have the same cardinality. In particular, if $H$ is a finite set, then $aH$ is a finite set and $|aH| = |H|$.
7. (Right cosets) For $a \in G$, the image $Ha = R_a(H) = \{ha : h \in H\}$ of $H$ under the right multiplication $R_a : G \to G$ is called the **right coset** of $H$ with representative $a$. Define the relation $\approx_H$ on $G$ to be $\{(a, b) \in G \times G : ab^{-1} \in H\}$. Then $\approx_H$ is an equivalence relation on $G$, the equivalence class $\{x \in G : x \approx_H a\}$ of $a \in G$ for $\approx_H$ is $Ha$, and $a \in Ha$. For $a, b \in G$, the conditions $Ha = Hb$, $ab^{-1} \in H$ and $a \in Hb$ are equivalent. The set $\{Ha : a \in G\}$ of all right cosets is a partition of $G$. The function $H \to Ha$ assigning $ha$ to each $h \in H$ is a bijection, and if $H$ is a finite set, then $Ha$ is a finite set and $|Ha| = |H|$. For $a, b \in G$, $aH = bH$ exactly when $Ha^{-1} = Hb^{-1}$. If $G$ is abelian, then $aH = Ha$ for every $a \in G$.
8. (Additive notation) If $G$ is an abelian group written in the additive notation of the entry on groups of numbers, we write $aH$ as $a + H = \{a + h : h \in H\}$, and $a \sim_H b$ exactly when $-a + b \in H$. If $n$ is a natural number, $G = (\mathbb{Z}, +)$ and $H = n\mathbb{Z}$, then for integers $a$ and $b$, $a \sim_{n\mathbb{Z}} b$ exactly when $a \equiv b \pmod n$. Hence for every integer $a$, $a + n\mathbb{Z}$ is the equivalence class $[a]$ of the entry on the integers modulo $n$, and $\mathbb{Z}/n\mathbb{Z} = \mathbb{Z}_n$.
:::

## 직관

$(\mathbb{Z}, +)$와 부분군 $7\mathbb{Z}$를 날짜에 빗대 봅시다. 날짜를 정수로 매기면 $a + 7\mathbb{Z}$는 $a$일과 $7$의 배수만큼 떨어진 날 전체, 곧 $a$일과 같은 요일의 날 전체입니다. 두 날이 같은 요일인 것은 날짜의 차가 $7$의 배수일 때이고, 이것이 관계 $\sim_{7\mathbb{Z}}$입니다. 요일이 날짜 전체를 일곱 무리로 나누듯 왼쪽 잉여류는 $G$를 나눕니다((4)). 비유가 맞지 않는 곳도 있습니다. 요일은 늘 일곱 개이지만, 잉여류의 개수는 부분군에 따라 다릅니다. (8)에 의해 $\mathbb{Z}/n\mathbb{Z} = \mathbb{Z}_n$은 원소가 $n$개이고([[integers-modulo-n|법 n의 정수]]의 (1)), 아래 예시처럼 $G/G$는 원소가 하나입니다.

정의의 핵심은 "$a^{-1}b \in H$", 곧 $b$가 $a$에 $H$의 원소를 오른쪽에서 곱한 것이라는 조건입니다. 이 조건이 동치관계를 이루고 그 동치류가 $aH$이므로, 두 잉여류는 같거나 겹치지 않는다는 것((4))과 두 잉여류가 같을 조건((3))이 [[equivalence-classes-equal-iff-related|동치류에 관한 앞의 정리들]]에서 바로 나옵니다.

각 왼쪽 잉여류는 $H$를 $a$만큼 "옮겨 놓은" 것입니다. $h$를 $ah$로 보내는 대응은 서로 다른 것을 서로 다른 것으로 보내고 $aH$를 빠짐없이 덮으므로, 옮겨도 크기가 변하지 않습니다((6)). 곱의 순서를 바꾸면 오른쪽 잉여류 $Ha$가 됩니다. 아벨군에서는 두 쪽이 같지만, 아벨군이 아닌 군에서는 $aH$와 $Ha$가 다를 수 있습니다(아래 반례). $H = G$나 $H = \{e\}$처럼 아벨군이 아니어도 늘 같은 경우도 있습니다(아래 예시).

"잉여류"라는 말은 정수론에서도 쓰입니다. 법 $n$의 동치류 $[a]$를 "법 $n$의 잉여류"라고도 부르고, [[integers-modulo-n|법 n의 정수]] $\mathbb{Z}_n$을 "잉여류의 집합"이라고도 부릅니다. (8)에 의해 법 $n$의 동치류 $[a]$는 $(\mathbb{Z}, +)$에서 $n\mathbb{Z}$의 잉여류 $a + n\mathbb{Z}$와 같은 집합이므로 두 쓰임은 어긋나지 않습니다. 이 사이트에서 군의 잉여류는 늘 $aH$, $Ha$, $a + H$로 쓰고 기호 $[a]$를 쓰지 않습니다.

## 성질의 증명

:::proof
**정의가 뜻을 갖는 것.** $\sim_H$와 $\approx_H$는 $G \times G$의 부분집합이므로 [[relation|관계]]의 뜻으로 $G$ 위의 관계이다. [[group-basic-properties|군의 기본 성질]]의 (10)에 의해 $L_a$와 $R_a$는 $G$에서 $G$로의 함수이고 $L_a(h) = ah$, $R_a(h) = ha$이므로, [[image-and-preimage|상과 역상]]의 (1)에 의해 $aH$와 $Ha$는 $G$의 부분집합이고 $x \in aH$인 것은 정확히 $x = ah$인 $h \in H$가 있을 때, $x \in Ha$인 것은 정확히 $x = ha$인 $h \in H$가 있을 때이다. 아래에서 "기본 성질의 ($k$)"는 군의 기본 성질의 ($k$), "부분군의 ($k$)"는 [[subgroup|부분군]]의 ($k$)이다. $H$는 곱에 대해 닫혀 있다(부분군의 정의).

**(1)** 반사성: $a \in G$이면 $a^{-1}a = e \in H$(부분군의 (1))이므로 $a \sim_H a$이다. 대칭성: $a^{-1}b \in H$이면 부분군의 (2)에 의해 $(a^{-1}b)^{-1} \in H$이고, 기본 성질의 (6)과 (5)에 의해 $(a^{-1}b)^{-1} = b^{-1}(a^{-1})^{-1} = b^{-1}a$이므로 $b \sim_H a$이다. 추이성: $a^{-1}b \in H$이고 $b^{-1}c \in H$이면 닫힘에 의해 $(a^{-1}b)(b^{-1}c) \in H$이다. [[group|군]]의 결합법칙을 두 번 쓰면
$$(a^{-1}b)(b^{-1}c) = a^{-1}\bigl(b(b^{-1}c)\bigr) = a^{-1}\bigl((bb^{-1})c\bigr) = a^{-1}(ec) = a^{-1}c$$
이므로 $a \sim_H c$이다. 따라서 $\sim_H$는 [[equivalence-relation|동치관계]]이다.

**(2)** $x \in G$라 하자. (1)의 대칭성을 두 방향으로 쓰면 $x \sim_H a$인 것은 정확히 $a \sim_H x$, 곧 $a^{-1}x \in H$일 때이다. $a^{-1}x \in H$이면 $h = a^{-1}x$로 두어 $ah = a(a^{-1}x) = (aa^{-1})x = ex = x$이므로 $x \in aH$이다. 거꾸로 $x = ah$인 $h \in H$가 있으면 $a^{-1}x = a^{-1}(ah) = (a^{-1}a)h = eh = h \in H$이다. 따라서 $a$의 동치류는 $aH$이다. $a \sim_H a$이므로 $a \in aH$이다. 끝으로 [[operation-on-equivalence-classes|동치류 위의 연산]]의 진술에 의해 $C \in G/{\sim_H}$인 것은 정확히 $C$가 어떤 $a \in G$의 동치류일 때, 곧 방금 보인 것에 의해 $C = aH$인 $a \in G$가 있을 때이므로 $G/{\sim_H} = G/H$이다.

**(3)** (2)에 의해 $b \in aH$인 것은 정확히 $b \sim_H a$, 곧 $b^{-1}a \in H$일 때이므로 (iii)과 (v)는 동치이다. (1)의 대칭성에 의해 $b \sim_H a$와 $a \sim_H b$는 동치이므로 (v)와 (iv)는 동치이다. (2)와 [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]에 의해 $aH = bH$인 것은 정확히 $a \sim_H b$일 때이므로 (i)과 (iv)는 동치이다. (i)이면 (ii)이다. 끝으로 (ii)를 가정하면 (2)의 $a \in aH$에 의해 $a \in bH$이고, 앞에서 보인 (iii)과 (iv)의 동치를 $a$와 $b$를 바꾸어 쓰면 $b^{-1}a \in H$, 곧 (v)가 성립한다. 따라서 다섯 조건은 서로 동치이다.

**(4)** (2)에 의해 $G/H$는 $\sim_H$의 동치류 전체의 집합 $\{\{x \in G : x \sim_H a\} : a \in G\}$이다. [[equivalence-classes-form-a-partition|동치류 전체는 분할을 이룬다]]에 의해 이것은 $G$의 [[partition|분할]]이다. 분할의 조건 3에 의해, $aH \ne bH$이면 $aH \cap bH = \emptyset$이다.

**(5)** $x \in eH$인 것은 정확히 $x = eh$인 $h \in H$가 있을 때이고 $eh = h$이므로, $eH = H$이다. (3)의 (i)과 (iii)의 동치를 $e$와 $a$에 쓰면 $eH = aH$인 것은 정확히 $a \in eH = H$일 때이다.

**(6)** $L_a$의 $H$로의 [[adding-or-removing-an-element|제한]] $\lambda = L_a|_H$는 $H$에서 $G$로의 함수이고 $h \in H$에서 $\lambda(h) = ah$이다. 기본 성질의 (10)에 의해 $L_a$는 단사이므로, 제한에 관한 같은 진술에 의해 $\lambda$도 단사이다. $\lambda$의 값은 모두 $aH$에 속하므로 [[function|함수]]의 진술에 의해 $\lambda$는 $H$에서 $aH$로의 함수이기도 하다. $x \in aH$이면 $x = ah$인 $h \in H$가 있고 $\lambda(h) = x$이므로 $\lambda : H \to aH$는 전사이다. 따라서 $\lambda : H \to aH$는 전단사이고, [[equal-cardinality|크기가 같다]]의 정의에 의해 $H$와 $aH$는 크기가 같다. $H$가 원소를 $n$개 가지면 [[finite-set|유한집합]]의 (F4)에 의해 $aH$도 원소를 $n$개 가지므로, $aH$는 유한집합이고 $|aH| = |H|$이다.

**(7)** 반사성: $aa^{-1} = e \in H$이다. 대칭성: $ab^{-1} \in H$이면 부분군의 (2)와 기본 성질의 (6), (5)에 의해 $(ab^{-1})^{-1} = (b^{-1})^{-1}a^{-1} = ba^{-1} \in H$이다. 추이성: $ab^{-1} \in H$이고 $bc^{-1} \in H$이면 닫힘에 의해
$$(ab^{-1})(bc^{-1}) = a\bigl(b^{-1}(bc^{-1})\bigr) = a\bigl((b^{-1}b)c^{-1}\bigr) = a(ec^{-1}) = ac^{-1}$$
이 $H$에 속한다. 따라서 $\approx_H$는 동치관계이다.

$x \in G$라 하자. $x \approx_H a$, 곧 $xa^{-1} \in H$이면 $h = xa^{-1}$로 두어 $ha = (xa^{-1})a = x(a^{-1}a) = xe = x$이므로 $x \in Ha$이다. 거꾸로 $x = ha$인 $h \in H$가 있으면 $xa^{-1} = (ha)a^{-1} = h(aa^{-1}) = he = h \in H$이다. 따라서 $a$의 동치류는 $Ha$이고, 반사성에 의해 $a \in Ha$이다.

두 동치류가 같을 조건에 의해 $Ha = Hb$인 것은 정확히 $a \approx_H b$, 곧 $ab^{-1} \in H$일 때이다. 방금 보인 것을 $b$의 동치류에 쓰면 $a \in Hb$인 것도 정확히 $a \approx_H b$일 때이다. 동치류 전체는 분할을 이룬다는 정리에 의해 $\{Ha : a \in G\}$는 $G$의 분할이다.

$\rho = R_a|_H$는 $H$에서 $G$로의 함수이고 $\rho(h) = ha$이다. 기본 성질의 (10)에 의해 $R_a$가 단사이므로 제한에 관한 진술에 의해 $\rho$도 단사이고, 값이 모두 $Ha$에 속하므로 $H$에서 $Ha$로의 함수이며, $x = ha \in Ha$이면 $\rho(h) = x$이므로 전사이다. $H$가 원소를 $n$개 가지면 (F4)에 의해 $Ha$도 원소를 $n$개 갖는다.

$a, b \in G$에 대하여 기본 성질의 (5)에 의해 $(b^{-1})^{-1} = b$이므로 $a^{-1}b = a^{-1}(b^{-1})^{-1}$이다. 따라서 (3)에 의해 $aH = bH$인 것은 정확히 $a^{-1}(b^{-1})^{-1} \in H$일 때이고, 방금 보인 오른쪽 잉여류의 조건을 $a^{-1}$과 $b^{-1}$에 쓰면 이것은 정확히 $Ha^{-1} = Hb^{-1}$일 때이다.

$G$가 아벨군이면 모든 $h \in H$에서 $ah = ha$이므로, $x \in aH$인 것과 $x \in Ha$인 것은 둘 다 정확히 $x = ah$인 $h \in H$가 있을 때이다. 따라서 $aH = Ha$이다.

**(8)** 덧셈 표기에서 곱 $ah$는 $a + h$로, 역원 $a^{-1}$은 $-a$로 쓰므로([[number-groups|수로 이루어진 군]]), $aH$는 $a + H$이고 $a^{-1}b \in H$는 $-a + b \in H$이다. 이제 $G = (\mathbb{Z}, +)$라 하자. 같은 항목의 (1)에 의해 이 군의 연산은 정수의 덧셈이고 $a$의 역원은 정수 $-a$이므로, 군에서의 $-a + b$는 정수 $b - a$이다. [[subgroup-examples|부분군의 예]]의 (1)에 의해 $b - a \in n\mathbb{Z}$인 것은 정확히 $n \mid (b - a)$일 때이다. 정수 $c$에 대하여 $b - a = nc$인 것은 정확히 $a - b = n(-c)$일 때이므로, $n \mid (b - a)$인 것은 정확히 $n \mid (a - b)$일 때, 곧 [[congruence-modulo-n|합동]]의 정의에 의해 $a \equiv b \pmod n$일 때이다. 따라서 $\sim_{n\mathbb{Z}}$는 [[integers-modulo-n|법 n의 정수]]의 진술에서 정한 법 $n$ 합동의 관계 $\sim$과 같은 순서쌍의 집합이다. 두 관계가 같으므로 정수 $a$의 두 동치류도 같고, (2)에 의해 $a + n\mathbb{Z} = \{x \in \mathbb{Z} : x \equiv a \pmod n\} = [a]$이다. 몫집합도 같으므로 (2)에 의해 $\mathbb{Z}/n\mathbb{Z} = \mathbb{Z}/{\sim} = \mathbb{Z}_n$이다. $\blacksquare$
:::

## 예시와 반례

:::example[0이 아닌 실수의 곱셈군과 부호]
$G = (\mathbb{R} - \{0\}, \cdot)$이고 $H = \{1, -1\}$이라 합시다. [[subgroup-examples|부분군의 예]]의 (3)에 의해 $H$는 $G$의 부분군입니다. $a \ne 0$인 실수 $a$에 대하여 $a \cdot 1 = a$이고 [[real-number-arithmetic|실수의 계산 법칙]]의 (K12)의 (ii)와 (K4)에 의해 $a \cdot (-1) = -(a \cdot 1) = -a$이므로, $aH = \{a, -a\}$입니다. (3)의 (i)과 (iii)에 의해 $aH = bH$인 것은 정확히 $b \in \{a, -a\}$일 때이고, $G/H = \{\{a, -a\} : a \in \mathbb{R} - \{0\}\}$입니다.

$1 \ne -1$입니다. $1 = -1$이면 양변에 $1$을 더해 $1 + 1 = 0$이 되는데, (K7)에 의해 정수 $2 = 1 + 1$은 $0$이 아니기 때문입니다. 따라서 [[adding-or-removing-an-element|원소 하나를 더하는]] 결과로 $H = \{1\} \cup \{-1\}$은 원소를 $2$개 갖고, (6)에 의해 모든 $aH$도 원소를 $2$개 갖습니다. 특히 $a \ne -a$입니다. $a = -a$라면 $aH = \{a\}$가 원소를 $1$개 가져 [[number-of-elements-is-unique|원소의 개수]]의 유일성에 어긋나기 때문입니다.
:::

:::example[두 극단: $H = G$와 $H = \{e\}$]
$H = G$이면 모든 $a \in G$가 $G$에 속하므로 (5)에 의해 $aG = G$이고, $G/G = \{G\}$입니다. $H = \{e\}$([[subgroup|부분군]]의 (4))이면 $a\{e\} = \{ae\} = \{a\}$이므로 $G/\{e\} = \{\{a\} : a \in G\}$입니다. 오른쪽 잉여류도 $\{e\}a = \{ea\} = \{a\}$이고, $x \in G$이면 $x = (xa^{-1})a$이므로 $Ga = G$입니다. 따라서 두 경우 모두 $G$가 아벨군이 아니어도 모든 $a$에서 왼쪽 잉여류와 오른쪽 잉여류가 같습니다.
:::

:::counterexample[$S_3$에서 왼쪽과 오른쪽이 다른 예]
[[symmetric-group|대칭군]] $S_3$에서 곱 $fg$는 합성 $f \circ g$입니다. $H = \{g \in S_3 : g(1) = 1\}$은 [[subgroup-examples|부분군의 예]]의 (6)에 의해 $S_3$의 부분군입니다. $f$와 $h$를 $\{1, 2, 3\}$에서 자신으로의 함수로서
$$f(1) = 2,\ f(2) = 1,\ f(3) = 3, \qquad h(1) = 1,\ h(2) = 3,\ h(3) = 2$$
로 정합니다. 두 함수 모두 값이 서로 다르고 $1, 2, 3$이 모두 값으로 나오므로 전단사이고, $f, h \in S_3$입니다. $h(1) = 1$이므로 $h \in H$입니다.

$g = fh$로 두면 $g(1) = f(h(1)) = f(1) = 2$, $g(2) = f(3) = 3$, $g(3) = f(2) = 1$이고, $g \in fH$입니다. 한편 $f(f(1)) = 1$, $f(f(2)) = 2$, $f(f(3)) = 3$이므로 $ff = i_{\{1,2,3\}}$은 항등원이고, [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 $f^{-1} = f$입니다. (7)에 의해 $g \in Hf$인 것은 정확히 $gf^{-1} = gf \in H$일 때인데, $(gf)(1) = g(f(1)) = g(2) = 3 \ne 1$이므로 $gf \notin H$입니다. 따라서 $g \in fH$이고 $g \notin Hf$이어서 $fH \ne Hf$입니다.
:::

## 확인 질문

:::check[$(\mathbb{Z}, +)$에서 $4 + 6\mathbb{Z}$와 $-8 + 6\mathbb{Z}$는 같은가?]
같습니다. (8)과 (3)에 의해 두 잉여류가 같은 것은 정확히 $-4 + (-8) = -12 \in 6\mathbb{Z}$일 때이고, $-12 = 6 \cdot (-2)$이므로 [[subgroup-examples|부분군의 예]]의 (1)에 의해 $-12 \in 6\mathbb{Z}$입니다. (8)에 의해 두 잉여류는 $\mathbb{Z}_6$의 원소 $[4] = [-8]$입니다.
:::

:::check[$a \notin H$이면 왼쪽 잉여류 $aH$는 $G$의 부분군이 될 수 있는가?]
될 수 없습니다. 부분군은 항등원 $e$를 원소로 가집니다([[subgroup|부분군]]의 (1)). 그런데 (3)의 (i)과 (iii)에 의해 $e \in aH$인 것은 정확히 $aH = eH$일 때이고, (5)에 의해 $eH = H$이며 $aH = H$인 것은 정확히 $a \in H$일 때입니다. 따라서 $a \notin H$이면 $e \notin aH$이고 $aH$는 부분군이 아닙니다. $a \in H$이면 $aH = H$이므로 부분군입니다.
:::
