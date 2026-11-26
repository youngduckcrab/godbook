---
title: 라그랑주 정리
title_en: Lagrange's Theorem
aliases: [지표, 부분군의 지표, 라그랑주의 정리, index of a subgroup, Lagrange theorem]
kind: theorem
field: group-theory
msc: ["20A05", "20D99"]
level: undergrad
summary: "부분군 H의 왼쪽 잉여류 전체 G/H가 유한집합이면 그 원소의 개수를 지표 [G : H]라 한다. 유한군 G에서는 |G| = [G : H]·|H|이므로 부분군의 원소의 개수는 |G|를 나눈다. 지표의 탑 공식, 왼쪽과 오른쪽 잉여류의 개수가 같다는 것, [ℤ : nℤ] = n도 다룬다."
requires: [set, subset, function, injective-surjective-bijective, inverse-function, recursion-theorem, finite-set, number-of-elements-is-unique, natural-numbers-are-infinite, equal-cardinality, partition, operation-on-equivalence-classes, partition-into-equal-blocks, group, group-basic-properties, subgroup, subgroup-criteria, left-coset, number-groups, integers-modulo-n, divisibility, integer-cancellation, prime-number, well-ordering-principle, even-and-odd]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 6.1절, 지표의 정의(번호 없음) p.75, Example 6.6, 6.7 p.75, Theorem 6.8 p.75–76. 6.2절 Theorem 6.10 p.76, Corollary 6.13 p.76, Remark 6.14 p.76. 6.5절 연습문제 3 p.78
    checked: original
    note: "출처는 H 의 지표를 'G 에서 H 의 왼쪽 잉여류의 개수'로 정의하고 [G : H] 로 쓴다(p.75). 출처는 연습문제 3, 9, 10(p.78–79)에서 '유한한 지표', '무한한 지표'라는 말을 쓴다. 이 항목은 G/H 가 유한집합일 때만 기호 [G : H] 를 쓰고, 아니면 '지표가 무한하다'고 말로만 쓴다. (1)은 출처 Theorem 6.10(라그랑주 정리, p.76)이다. 출처는 |G|/|H| = [G : H] 로 진술하고 '군 G 는 [G : H] 개의 서로 다른 왼쪽 잉여류로 분할되고 각 왼쪽 잉여류는 원소가 |H| 개이므로 |G| = [G : H]|H|'라고 증명한다. 이 항목은 정수의 나눗셈 기호를 쓰지 않고 곱의 등식으로 진술하며, 그 '이므로'를 크기가 같은 조각으로 나눈 유한집합 항목으로 정당화하고, 잉여류의 집합이 유한하다는 것도 그 항목에서 얻는다. '[G : H] 는 |G| 를 나눈다'는 출처에 명제로 없다(검색어 'index.{0,40}divide' 0건, '[G : H] divides' 0건, 'divides |G|' 4건(15장 Sylow 정리)). 15장 Sylow 정리의 증명(p.182)은 |G| = |C(x_i)|·[G : C(x_i)] 를 쓴다. (2)는 출처에 명제로 없다(검색어 '[G : G]' 0건, '[G : {e}]' 의 꼴 0건, 'G : e' 0건). (3)은 출처 Corollary 6.13(p.76)이고 증명도 같은 계산이다(출처는 분수 |G|/|K| = (|G|/|H|)(|H|/|K|) 로 쓰고, 이 항목은 소거 법칙으로 쓴다). (4)는 출처 Theorem 6.8(p.75–76)이다. 출처는 ϕ(gH) = Hg⁻¹ 이 Lemma 6.3 에 의해 잘 정의되고 단사이며 ϕ(g⁻¹H) = Hg 이므로 전사라고 증명한다. 이 항목은 같은 함수를 동치류 위의 함수 정리로 정하고 잉여류 항목의 (7)로 같은 단계를 밟는다. 출처는 '개수가 같다'를 잉여류가 무한히 많을 때도 쓰고, 이 항목은 일반적으로는 크기가 같다고 쓰고 유한할 때만 개수를 쓴다. (5)는 출처에 명제로 없다(검색어 '[Z : nZ]' 의 꼴 0건, '[Z : ' 0건, 'index n' 0건). 출처 Example 10.6 의 끝 문단(p.127)이 ℤ/nℤ 의 잉여류를 nℤ, 1 + nℤ, …, (n − 1) + nℤ 로 늘어놓는다. 출처 Remark 6.14 와 Proposition 6.15(p.76–77)는 라그랑주 정리의 역이 성립하지 않는다는 것을 교대군 A₄ 로 보인다. 이 항목은 역이 성립하지 않는다는 것은 다루지 않는다(A₄ 와 그 예는 강의 '군의 작용과 실로우 정리' 2단원에서 다룬다). 예시 'ℤ₁₂ 의 부분군 {[0], [4], [8]}'의 잉여류 나열은 출처 Example 6.1(p.74, ℤ₆ 의 {0, 3}), 6.4절 읽기 질문 2(p.78, ℤ₉ 의 ⟨3⟩), 6.5절 연습문제 5(a)(p.79, ℤ₂₄ 의 ⟨8⟩, 부록 p.323 의 답)와 같은 발상(ℤₙ 의 순환 부분군의 잉여류 나열)이고, 부분군 {[0], [4], [8]} 은 4장 연습문제 3(c)(p.55, ℤ₁₂ 의 모든 부분군)의 답에 들어 있다. 이 항목은 잉여류를 늘어놓기 전에 (1)의 유일성으로 개수를 먼저 구한다(검색어 'Z12' 26건: 4, 9, 11, 13, 16, 17, 19장과 부록). 예시 '지표가 무한한 예'는 출처 6장 연습문제 3(p.78, '정수의 모든 부분군은 지표가 유한한가')에 답하는 것이다. 확인 질문 '원소가 15 개인 군의 부분집합'은 출처 6장 연습문제 2(p.78, 원소가 60 개인 군의 부분군의 가능한 위수)와 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 올린 뒤 표본 독립 검토 1회(수학 오류 0건)의 지적을 고쳤다. 경계 경우에서 거짓이 되는 문장과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며 $H$가 $G$의 [[subgroup|부분군]]이라 하자. 왼쪽 잉여류 $aH$, 오른쪽 잉여류 $Ha$와 왼쪽 잉여류 전체의 집합 $G/H$는 [[left-coset|잉여류]]의 것이고, 유한집합과 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]] 항목의 것이다.

**지표.** $G/H$가 유한집합일 때 $H$의 ($G$에서의) **지표가 유한하다**고 하고, 정수 $|G/H|$를 $H$의 **지표**(index)라 하여 $[G : H]$로 쓴다. 곧 $[G : H] = |G/H|$는 $H$의 서로 다른 왼쪽 잉여류의 개수이다. $G/H$가 유한집합이 아니면 $H$의 **지표가 무한하다**고 하고, 이때는 기호 $[G : H]$를 쓰지 않는다.

다음이 성립한다.

1. (라그랑주 정리) $G$가 유한군이면 $H$는 유한집합이고 $|H| \ge 1$이며, $G/H$는 유한집합이고
   $$|G| = [G : H] \cdot |H|$$
   이다. 따라서 $|H|$는 $|G|$를 나누고([[divisibility|나누어떨어짐]]) $[G : H]$도 $|G|$를 나눈다. 또 $[G : H]$는 정수 $x$에 대한 등식 $|G| = x \cdot |H|$를 만족하는 유일한 정수이다.
2. (두 극단) $G/G = \{G\}$이고 $[G : G] = 1$이다. $G/\{e\} = \{\{a\} : a \in G\}$이고, $G$가 유한군이면 $[G : \{e\}] = |G|$이다.
3. (탑 공식) $G$가 유한군이고 $K$가 $G$의 부분군이며 $K \subseteq H$이면, $K$는 군 $H$의 부분군이고
   $$[G : K] = [G : H] \cdot [H : K]$$
   이다. 여기서 $[H : K]$는 군 $H$에서 $K$의 지표이다.
4. (오른쪽 잉여류의 개수) 오른쪽 잉여류 전체의 집합 $\{Ha : a \in G\}$를 이 항목에서 $\mathcal{R}$로 쓴다. 모든 $a \in G$에서 $aH$를 $Ha^{-1}$로 보내는 함수 $\psi : G/H \to \mathcal{R}$가 정확히 하나 있고, $\psi$는 [[injective-surjective-bijective|전단사]]이다. 따라서 $G/H$와 $\mathcal{R}$는 [[equal-cardinality|크기가 같고]], $G/H$가 유한집합인 것은 정확히 $\mathcal{R}$가 유한집합일 때이며, 그때 $|\mathcal{R}| = [G : H]$이다. 특히 $G$가 유한군이면 $\mathcal{R}$는 유한집합이고 $|\mathcal{R}| = [G : H]$이다.
5. (정수의 덧셈군) $n$이 자연수이면 $(\mathbb{Z}, +)$에서 $n\mathbb{Z}$의 지표는 유한하고 $[\mathbb{Z} : n\mathbb{Z}] = n$이다.

증명에서 정수의 계산과 부등식에 관하여 [[prime-number]]의 (Z1), [[well-ordering-principle]]의 진술에서 받아들인 계산 법칙과 (Z5)를 쓰고, 정수끼리의 곱이 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.
:::

:::english
Let $G$ be a group with identity $e$ and let $H$ be a subgroup of $G$. Left cosets $aH$, right cosets $Ha$ and the set $G/H$ of all left cosets are those of the entry on cosets, and finite sets and the number of elements $|A|$ are those of the entries on finite sets and on the uniqueness of the number of elements.

**Index.** When $G/H$ is a finite set we say that $H$ has **finite index** (in $G$), and the integer $|G/H|$ is called the **index** of $H$ and written $[G : H]$. Thus $[G : H] = |G/H|$ is the number of distinct left cosets of $H$. When $G/H$ is not a finite set we say that $H$ has **infinite index**, and in that case we do not use the symbol $[G : H]$.

Then the following hold.

1. (Lagrange's theorem) If $G$ is a finite group, then $H$ is a finite set with $|H| \ge 1$, $G/H$ is a finite set, and
   $$|G| = [G : H] \cdot |H|.$$
   Hence $|H|$ divides $|G|$, and $[G : H]$ also divides $|G|$. Moreover $[G : H]$ is the unique integer $x$ satisfying $|G| = x \cdot |H|$.
2. (The two extremes) $G/G = \{G\}$ and $[G : G] = 1$. $G/\{e\} = \{\{a\} : a \in G\}$, and if $G$ is a finite group, then $[G : \{e\}] = |G|$.
3. (Tower formula) If $G$ is a finite group, $K$ is a subgroup of $G$ and $K \subseteq H$, then $K$ is a subgroup of the group $H$ and
   $$[G : K] = [G : H] \cdot [H : K].$$
   Here $[H : K]$ is the index of $K$ in the group $H$.
4. (Number of right cosets) In this entry we write $\mathcal{R}$ for the set $\{Ha : a \in G\}$ of all right cosets. There is exactly one function $\psi : G/H \to \mathcal{R}$ sending $aH$ to $Ha^{-1}$ for every $a \in G$, and $\psi$ is a bijection. Hence $G/H$ and $\mathcal{R}$ have the same cardinality, $G/H$ is a finite set exactly when $\mathcal{R}$ is a finite set, and in that case $|\mathcal{R}| = [G : H]$. In particular, if $G$ is a finite group, then $\mathcal{R}$ is a finite set and $|\mathcal{R}| = [G : H]$.
5. (The additive group of integers) If $n$ is a natural number, then $n\mathbb{Z}$ has finite index in $(\mathbb{Z}, +)$ and $[\mathbb{Z} : n\mathbb{Z}] = n$.

In the proof we use (Z1) of the entry on prime numbers, the accepted laws of integer arithmetic and (Z5) from the entry on the well-ordering principle, and the accepted fact that products of integers are integers.
:::

## 직관

$G$가 유한군이면, [[left-coset|잉여류]] 항목에서 본 대로 왼쪽 잉여류들은 $G$를 겹치지 않게 나누고 각 잉여류는 원소의 수가 $|H|$로 같습니다. 같은 크기의 상자에 물건을 빈틈없이 나눠 담으면 물건의 수는 상자의 수에 상자 하나의 크기를 곱한 것이므로, $|G|$는 잉여류의 개수 $[G : H]$와 $|H|$의 곱입니다. 이 셈 자체는 [[partition-into-equal-blocks|크기가 같은 조각으로 나눈 유한집합]]이 하고, 이 항목은 잉여류가 그 정리의 가정을 만족한다는 것을 확인합니다.

라그랑주 정리는 부분군이 될 수 없는 부분집합을 걸러 냅니다. 원소가 $6$개인 군에서 원소가 $4$개인 부분집합은 $4$가 $6$을 나누지 않으므로 부분군이 아닙니다. 거꾸로 $|G|$의 약수 $d$가 있다고 원소가 $d$개인 부분군이 있는지는 이 정리가 말해 주지 않습니다.

지표는 $G$가 무한군이어도 유한할 수 있습니다. $(\mathbb{Z}, +)$는 무한군이지만 $n\mathbb{Z}$의 왼쪽 잉여류는 $n$개입니다((5)). 반대로 아래 예시처럼 지표가 무한한 부분군도 있습니다.

## 증명

:::idea
(1)은 왼쪽 잉여류 전체 $G/H$가 $G$의 분할이고 모든 조각이 원소를 $|H|$개 갖는다는 것을 확인한 뒤, 크기가 같은 조각으로 나눈 유한집합의 정리를 쓴다. (3)은 (1)을 세 번 쓰고 $|K|$를 소거한다. (4)는 $a$에 $Ha^{-1}$을 대응시키는 함수가 왼쪽 잉여류의 관계와 호환된다는 것으로 $G/H$ 위의 함수를 얻는다.
:::

:::hint
(1)에서 $H$는 항등원 $e$를 가지므로 공집합이 아니고, $|H|$는 자연수입니다. [[left-coset|잉여류]]의 (4)와 (6)을 보세요.
:::

:::hint
(4)에서 $aH = bH$이면 $Ha^{-1} = Hb^{-1}$이라는 것이 [[left-coset|잉여류]]의 (7)에 있습니다. 전사는 $Hb = H(b^{-1})^{-1}$로 보입니다.
:::

:::proof
아래에서 "잉여류의 ($k$)"는 [[left-coset|잉여류]]의 ($k$), "조각 정리의 ($k$)"는 [[partition-into-equal-blocks|크기가 같은 조각으로 나눈 유한집합]]의 ($k$), "부분군의 ($k$)"는 [[subgroup|부분군]]의 ($k$)이다.

**(1)** $G$가 유한군이라 하자. 부분군의 (8)에 의해 $H$는 유한집합이다. 부분군의 (1)에 의해 $e \in H$이므로 $H \ne \emptyset$이고, [[finite-set]]의 (F2)에 의해 $|H| \ne 0$이다. $|H| \ge 0$이므로 (Z5)에 의해 $|H| > 0$이고 (Z1)에 의해 $|H| \ge 1$이다. 곧 $|H|$는 자연수이다.

잉여류의 (4)에 의해 $G/H$는 $G$의 [[partition|분할]]이다. $G/H$의 조각 $C$는 $C = aH$인 $a \in G$가 있는 집합이고, 잉여류의 (6)에 의해 $|aH| = |H|$이므로 $C$는 원소를 $|H|$개 갖는다. 따라서 조각 정리의 (2), (3), (4)를 $A = G$, $\mathcal{S} = G/H$, $m = |H|$에 쓰면, $G/H$는 유한집합이고 $|G| = |G/H| \cdot |H| = [G : H] \cdot |H|$이며 $|H| \mid |G|$이다. 정수의 곱셈의 교환법칙에 의해 $|G| = |H| \cdot [G : H]$이고 $|H|$는 정수이므로, 나누어떨어짐의 정의에 의해 $[G : H] \mid |G|$이다. 끝으로 정수 $x$가 $|G| = x \cdot |H|$를 만족하면 $x \cdot |H| = [G : H] \cdot |H|$이고 $|H| \ne 0$이므로, [[integer-cancellation|정수 곱셈의 소거 법칙]]의 2에 의해 $x = [G : H]$이다.

**(2)** $G$는 자기 자신의 부분군이다(부분군의 (4)). $a \in G$이면 잉여류의 (5)에 의해 $aG = G$이다. 따라서 $C \in G/G$이면 $C = aG = G$인 $a$가 있어 $C = G$이고, 거꾸로 $G = eG \in G/G$이다. 곧 $G/G = \{G\}$이다. $\{(1, G)\}$는 $\{1\}$에서 $\{G\}$로의 전단사이므로 $G/G$는 원소를 $1$개 갖고, $[G : G] = 1$이다.

$\{e\}$는 $G$의 부분군이다(부분군의 (4)). $a \in G$이면 $x \in a\{e\}$인 것은 정확히 $x = ah$인 $h \in \{e\}$가 있을 때, 곧 $x = ae = a$일 때이므로 $a\{e\} = \{a\}$이다. 따라서 $C \in G/\{e\}$인 것은 정확히 $C = \{a\}$인 $a \in G$가 있을 때이고, $G/\{e\} = \{\{a\} : a \in G\}$이다. $G$가 유한군이면 $\{(1, e)\}$가 $\{1\}$에서 $\{e\}$로의 전단사이므로 $|\{e\}| = 1$이고, (1)에 의해 $|G| = [G : \{e\}] \cdot 1 = [G : \{e\}]$이다.

**(3)** 부분군의 (6)에 의해 $K$는 군 $H$의 부분군이다. 부분군의 (8)에 의해 $H$는 유한집합이므로 군 $H$는 유한군이다. (1)을 군 $G$와 부분군 $K$, 군 $G$와 부분군 $H$, 군 $H$와 부분군 $K$에 쓰면
$$|G| = [G : K] \cdot |K|, \qquad |G| = [G : H] \cdot |H|, \qquad |H| = [H : K] \cdot |K|$$
이고 $|K| \ge 1$이다. 둘째와 셋째 등식과 정수의 곱셈의 결합법칙에 의해 $|G| = \bigl([G : H] \cdot [H : K]\bigr) \cdot |K|$이다. 이것을 첫째 등식과 비교하면 $|K| \ne 0$이므로 정수 곱셈의 소거 법칙의 2에 의해 $[G : K] = [G : H] \cdot [H : K]$이다.

**(4)** $\mathcal{R}$는 $G$의 부분집합들의 집합이다. $f : G \to \mathcal{R}$를 각 $a \in G$에 $Ha^{-1}$을 대응시키는 함수로 정한다. [[group|군]]의 역원은 $a$마다 하나로 정해지므로 $Ha^{-1}$은 하나로 정해진 $\mathcal{R}$의 원소이고, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $f$는 $G$에서 $\mathcal{R}$로의 함수이다.

$f$는 잉여류의 관계 $\sim_H$와 호환된다. $a \sim_H b$이면 잉여류의 (3)에 의해 $aH = bH$이고, 잉여류의 (7)에 의해 $Ha^{-1} = Hb^{-1}$, 곧 $f(a) = f(b)$이기 때문이다. [[operation-on-equivalence-classes|동치류 위의 연산]]의 (1)에 의해 함수 $\bar f : G/{\sim_H} \to \mathcal{R}$로서 모든 $a \in G$에서 $\bar f$가 $a$의 동치류에서 $f(a)$의 값을 갖는 것이 정확히 하나 있다. 잉여류의 (2)에 의해 $G/{\sim_H} = G/H$이고 $a$의 동치류는 $aH$이므로, 이 $\bar f$가 모든 $a$에서 $aH$를 $Ha^{-1}$로 보내는 함수 $\psi : G/H \to \mathcal{R}$이다. 같은 성질을 갖는 함수 $G/H \to \mathcal{R}$는 $G/{\sim_H}$ 위의 같은 성질의 함수이므로 하나뿐이다.

단사: $\psi(aH) = \psi(bH)$이면 $Ha^{-1} = Hb^{-1}$이고, 잉여류의 (7)에 의해 $aH = bH$이다. $G/H$의 두 원소는 $aH$, $bH$ 꼴이므로 $\psi$는 단사이다. 전사: $D \in \mathcal{R}$이면 $D = Hb$인 $b \in G$가 있고, [[group-basic-properties|군의 기본 성질]]의 (5)에 의해 $(b^{-1})^{-1} = b$이므로 $\psi(b^{-1}H) = H(b^{-1})^{-1} = Hb = D$이다. 따라서 $\psi$는 전단사이고 $G/H$와 $\mathcal{R}$는 크기가 같다.

$G/H$가 원소를 $k$개 가지면 [[finite-set]]의 (F4)에 의해 $\mathcal{R}$도 원소를 $k$개 갖는다. $\mathcal{R}$가 원소를 $k$개 가지면 (F3)에 의해 역함수 $\psi^{-1} : \mathcal{R} \to G/H$가 전단사이고, (F4)에 의해 $G/H$도 원소를 $k$개 갖는다. 따라서 $G/H$가 유한집합인 것은 정확히 $\mathcal{R}$가 유한집합일 때이고, 그때 $|\mathcal{R}| = |G/H| = [G : H]$이다. $G$가 유한군이면 (1)에 의해 $G/H$가 유한집합이므로 마지막 문장이 나온다.

**(5)** $n$이 자연수이면 잉여류의 (8)에 의해 $(\mathbb{Z}, +)$에서 $\mathbb{Z}/n\mathbb{Z} = \mathbb{Z}_n$이고, [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $\mathbb{Z}_n$은 유한집합이며 $|\mathbb{Z}_n| = n$이다. 따라서 $n\mathbb{Z}$의 지표는 유한하고 $[\mathbb{Z} : n\mathbb{Z}] = n$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$\mathbb{Z}_{12}$의 부분군 $\{[0], [4], [8]\}$]
$G = (\mathbb{Z}_{12}, +)$와 $H = \{[0], [4], [8]\}$을 봅니다. $[4] + [4] = [8]$, $[4] + [8] = [12] = [0]$, $[8] + [8] = [16] = [4]$이고 $[0]$을 더하면 그대로이므로, $H$는 공집합이 아니고 덧셈에 닫혀 있습니다. [[subgroup-criteria|부분군 판정법]]의 (4)에 의해 $H$는 유한군 $G$의 부분군입니다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[0]$, $[4]$, $[8]$은 서로 다르므로 $|H| = 3$이고, $|G| = 12$입니다.

(1)에 의해 $12 = [G : H] \cdot 3$이고, $12 = 4 \cdot 3$이므로 (1)의 유일성에 의해 $[G : H] = 4$입니다. 잉여류를 하나하나 늘어놓지 않아도 개수를 압니다. 실제로 늘어놓으면 $[0] + H$, $[1] + H = \{[1], [5], [9]\}$, $[2] + H = \{[2], [6], [10]\}$, $[3] + H = \{[3], [7], [11]\}$의 넷입니다.
:::

:::example[지표가 무한한 예]
$(\mathbb{Z}, +)$의 부분군 $\{0\}$의 지표는 무한합니다. (2)에 의해 $\mathbb{Z}/\{0\} = \{\{a\} : a \in \mathbb{Z}\}$이고, 각 정수 $a$에 $\{a\}$를 대응시키는 함수 $\mathbb{Z} \to \mathbb{Z}/\{0\}$([[recursion-theorem|재귀 정리]]의 (1))는 $\{a\} = \{b\}$이면 $a = b$이므로 단사이고, 정의에 의해 전사입니다. $\mathbb{Z}/\{0\}$이 유한집합이라면 [[finite-set]]의 (F3)과 (F4)에 의해 $\mathbb{Z}$도 유한집합이 되어 [[natural-numbers-are-infinite|자연수의 집합은 무한집합이다]]의 2에 어긋납니다. 따라서 $\mathbb{Z}/\{0\}$은 유한집합이 아닙니다.
:::

## 확인 질문

:::check[원소가 $15$개인 군 $G$에서, 원소가 $6$개인 부분집합은 부분군이 될 수 있는가?]
될 수 없습니다. 그런 부분집합 $H$가 부분군이면 (1)에 의해 $6 \mid 15$, 곧 $15 = 6c$인 정수 $c$가 있습니다. (Z5)와 (Z1)에 의해 $c \le 2$이거나 $c \ge 3$이고, [[prime-number]]의 (Z3)과 (Z6)에 의해 앞의 경우 $6c \le 12 < 15$, 뒤의 경우 $6c \ge 18 > 15$이므로 (Z5)에 의해 $6c \ne 15$입니다.
:::

:::check[유한군 $G$가 $|G| = 20$이고 부분군 $H$의 지표가 $[G : H] = 4$이면 $|H|$는 얼마인가?]
(1)에 의해 $20 = 4 \cdot |H|$이고 $20 = 4 \cdot 5$이므로, $4 \ne 0$과 [[integer-cancellation|정수 곱셈의 소거 법칙]]의 2에 의해 $|H| = 5$입니다.
:::
