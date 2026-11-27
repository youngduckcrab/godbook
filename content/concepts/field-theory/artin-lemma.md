---
title: 아르틴 보조정리
title_en: Artin's Lemma
aliases: [아르틴의 보조정리, 고정체 위의 차수의 상한, Artin's lemma, degree over a fixed field]
kind: lemma
field: field-theory
msc: ["12F10"]
level: undergrad
summary: "H 가 체 E 의 자기동형군 Aut(E) 의 유한 부분군이면, E 의 원소 |H| + 1 개로 된 열은 고정체 E^H 위에서 일차종속이다. 따라서 E 는 E^H 의 유한 확대이고 [E : E^H] ≤ |H| 이다."
requires: [set, function, adding-or-removing-an-element, subset-of-finite-set, injective-surjective-bijective, finite-set, number-of-elements-is-unique, well-ordering-principle, prime-number, real-number-arithmetic, square-root-exists, rational-numbers-field, group, subgroup, subgroup-criteria, symmetric-group, ring, ring-homomorphism, field, finite-sums-in-a-ring, subfield, vector-space-over-a-field, span-and-independence-over-a-field, basis-over-a-field, dimension-over-a-field, basis-extension-over-a-field, linear-maps-over-a-field, extension-field, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, field-extension-examples, isomorphism-extension-to-simple-extension, automorphism-group-of-extension, fixed-field]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "23.2절 The Fundamental Theorem, Lemma 23.18 과 그 증명 (p.298–299), Theorem 23.19 의 증명, Corollary 23.20 (p.299); 23.1절 Field Automorphisms, 켤레 원소의 예 (p.294)"
    checked: original
    note: "(2)는 출처 Lemma 23.18(p.298, 'Let G be a finite group of automorphisms of E and let F = E_G. Then [E : F] ≤ |G|')이고, 출처는 이것을 Emil Artin 의 증명이라 적는다. (1)은 그 증명의 첫 문장('We must show that any set of n + 1 elements α_1, …, α_{n+1} in E is linearly dependent over F')을 진술로 올린 것이다. 출처의 증명은 동차 연립방정식의 영이 아닌 해 가운데 0 이 아닌 성분이 가장 적은 것을 잡고, 'By rearranging the α_i's' 로 번호를 다시 매겨 a_1 = 1 이고 a_2 ∉ F 라고 둔다. 이 항목의 증명은 번호를 다시 매기지 않고, 해의 받침(0 이 아닌 성분의 번호 전체)의 원소의 개수가 가장 작은 해를 정렬 원리로 잡은 뒤 받침의 한 번호 j_0 에서 1 이 되게 나누고, F 에 속하지 않는 성분의 번호 j_1 을 따로 둔다. 출처는 σ_i 를 씌운 해가 다시 해라는 것을 'we end up with the same homogeneous system, since G is a group' 이라고 적고, 이 항목은 H 의 각 ρ 가 τ(τ⁻¹ρ) 로 쓰인다는 것으로 보인다. 출처의 연립방정식이 영이 아닌 해를 갖는다는 것('From linear algebra we know')은 [[linear-maps-over-a-field|체 위의 선형사상과 핵]]의 (8)로 인용한다. 출처 Corollary 23.20(p.299)과 Theorem 23.19 의 증명의 (3) ⇒ (1)(p.299)이 이 보조정리를 쓴다. 예시 '$\\mathbb{Q}(\\sqrt{2})$의 두 자기동형의 군' 과 반례 '부분군이 아닌 $\\{\\rho\\}$에서 차수가 원소의 개수보다 큰 예' 는 출처 p.294 의 예(ℚ(√2) 에서 √2 와 −√2 는 최소다항식이 같다)와 같은 체와 원소를 쓴다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(새로 쓴 아르틴 보조정리 증명 통독, 예의 부분군·중간체 대응). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체, 확대체, 유한 확대, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이며, 확대체를 벡터공간으로 볼 때는 확대체의 (1)의 (i)의 연산으로 본다. 일차종속은 [[span-and-independence-over-a-field|체 위의 생성과 일차독립]]의 것이다. 자기동형과 $\operatorname{Aut}(E)$는 [[automorphism-group-of-extension|확대의 자기동형군]]의 것이고, 고정체 $E^H$는 [[fixed-field|고정체]]의 것이다. 유한군과 위수 $|H|$는 [[group|군]]의 것이고, 부분군은 [[subgroup|부분군]]의 뜻이다.

**설정.** $E$가 체이고, $H$가 군 $\operatorname{Aut}(E)$의 부분군이며 유한군이라 하자. $n = |H|$, $K = E^H$로 둔다. [[fixed-field|고정체]]의 (1)에 의해 $K$는 $E$의 부분체이다.

1. (일차종속) $E$의 원소의 길이 $n + 1$인 열 $\alpha_1, \dots, \alpha_{n+1}$은 모두 $K$ 위의 벡터공간 $E$에서 일차종속이다. 같은 원소가 되풀이되는 열도 포함한다.
2. (차수의 상한) $E$는 $K$의 유한 확대이고
   $$
   [E : E^H] \le |H|
   $$
   이다.
:::

:::english
Fields are as in "Units and Fields"; subfields, extension fields, finite extensions and the degree $[E : F]$ are as in the entries on subfields and extension fields, and an extension field is regarded as a vector space by the operations of (1)(i) of the entry on extension fields. Linear dependence is as in the entry on span and linear independence over a field. Automorphisms and $\operatorname{Aut}(E)$ are as in the entry on the automorphism group of an extension, and fixed fields $E^H$ as in "Fixed Field". Finite groups and the order $|H|$ are as in "Group", and subgroups as in "Subgroup".

**Setting.** Let $E$ be a field and let $H$ be a subgroup of the group $\operatorname{Aut}(E)$ that is a finite group. Put $n = |H|$ and $K = E^H$. By (1) of "Fixed Field", $K$ is a subfield of $E$.

1. (Linear dependence) Every sequence $\alpha_1, \dots, \alpha_{n+1}$ of elements of $E$ of length $n + 1$ is linearly dependent in the vector space $E$ over $K$. This includes sequences in which an element is repeated.
2. (Bound on the degree) $E$ is a finite extension of $K$, and
   $$
   [E : E^H] \le |H|.
   $$
:::

## 직관

$K = E^H$ 위에서 $E$의 원소들이 일차종속인지 묻는 것은 계수가 $K$에 있는 관계 $\sum c_j \alpha_j = 0$을 찾는 것입니다. $K$의 원소는 $H$의 모든 자기동형으로 고정되는 원소이므로, 그런 관계는 $H$의 각 $\sigma$를 씌운 $\sum c_j \sigma(\alpha_j) = 0$도 모두 만족합니다. 그래서 먼저 계수를 $E$에서 찾되 이 $n$개의 방정식을 한꺼번에 만족하게 하고, 미지수가 $n + 1$개이므로 영이 아닌 해가 있다는 선형대수를 씁니다.

남은 일은 해의 계수를 $K$로 끌어내리는 것입니다. $0$이 아닌 계수가 가장 적은 해를 하나 잡아 한 계수를 $1$로 맞추면, 어떤 계수가 $K$ 밖에 있을 때 그것을 움직이는 $\tau \in H$를 해에 씌워 빼서 $0$이 아닌 계수가 더 적은 해를 만들 수 있습니다. 이것은 가장 적다는 것에 어긋나므로 그 해의 계수는 모두 $K$에 있습니다. 해에 $\tau$를 씌운 것이 다시 해인 것은 $H$가 군이어서 $\sigma$가 $H$를 다 돌 때 $\tau\sigma$도 $H$를 다 돌기 때문입니다. 부분군이라는 가정은 여기와, 항등함수 $i_E$가 $H$에 들어 있어 해에서 $K$ 위의 관계 $\sum b_j \alpha_j = 0$을 읽어 내는 마지막 단계에서 쓰입니다(아래 반례).

## 증명

:::idea
$H$의 원소마다 방정식 $\sum_j x_j \sigma(\alpha_j) = 0$을 세우면 미지수가 방정식보다 많으므로 영이 아닌 해가 있다. 받침이 가장 작은 해를 한 성분이 $1$이 되게 나누면, $\tau \in H$를 씌워 뺀 것이 받침이 더 작은 해가 되지 않으려면 모든 성분이 $E^H$에 있어야 한다.
:::

:::hint
해 전체의 집합은 "모든 $\sigma \in H$에서 $\sum_j c_j \sigma(\alpha_j) = 0$"으로 정해지므로 $H$의 원소에 번호를 어떻게 매기든 같습니다. 해에 $\tau$를 씌우면 $\sigma$ 자리에 $\tau\sigma$가 옵니다.
:::

:::hint
$d = c - \tau(c)$는 $c$의 성분이 $1$인 자리에서 $0$이고, $c$의 성분이 $0$인 자리에서도 $0$입니다.
:::

:::proof
**쓰는 사실.** "자기동형군의 (n)"은 [[automorphism-group-of-extension|확대의 자기동형군]]의 (n), "합의 (n)"은 [[finite-sums-in-a-ring|환의 유한 합]]의 (n), "벡터공간의 (n)"은 [[vector-space-over-a-field|체 위의 벡터공간]]의 (n)이다. 아래에서 $\sum_j$는 $\sum_{j=1}^{n+1}$이다.

**1.** $\alpha_1, \dots, \alpha_{n+1}$을 $E$의 원소의 열이라 하자. 벡터공간의 (3)의 $E^{n+1}$(체 $E$ 위의 벡터공간)의 원소 $c = (c_1, \dots, c_{n+1})$ 가운데
$$
\text{모든 } \sigma \in H \text{에서 } \sum_j c_j \sigma(\alpha_j) = 0
$$
인 것 전체의 집합을 $\mathcal{N}$이라 하자.

*$\mathcal{N}$에 영이 아닌 원소가 있다.* $H$는 원소를 $n$개 가지므로 [[finite-set|유한집합]]의 정의에 의해 전단사 $s : \{1, \dots, n\} \to H$가 있다. [[subgroup|부분군]]의 (5)에 의해 $H \ne \emptyset$이므로 $n \ge 1$이다. $k \in \{1, \dots, n\}$과 $j \in \{1, \dots, n + 1\}$마다 $a_{k,j} = s(k)(\alpha_j) \in E$로 두고 [[linear-maps-over-a-field|체 위의 선형사상과 핵]]의 (8)을 체 $E$와 $m = n + 1 > n$에 쓰면, $c \ne 0$이고 모든 $k$에서 $\sum_j a_{k,j} c_j = 0$인 $c \in E^{n+1}$이 있다. $s$가 전사이므로 모든 $\sigma \in H$가 어떤 $s(k)$이고, 체의 곱의 교환법칙에 의해 $c \in \mathcal{N}$이다.

*$\mathcal{N}$의 성질.* $c, d \in \mathcal{N}$이고 $\lambda \in E$이면, 합의 (6)의 (ii)와 (9)에 의해 모든 $\sigma \in H$에서 $\sum_j (c_j - d_j)\sigma(\alpha_j) = 0 - 0 = 0$이고 $\sum_j (\lambda c_j)\sigma(\alpha_j) = \lambda \cdot 0 = 0$이므로 $c - d \in \mathcal{N}$, $\lambda c \in \mathcal{N}$이다. 또 $c \in \mathcal{N}$이고 $\tau \in H$일 때 $\tau(c) = (\tau(c_1), \dots, \tau(c_{n+1}))$이라 하자. $\rho \in H$이면 $\sigma = \tau^{-1}\rho \in H$이고([[subgroup-criteria|부분군의 판정법]]의 (1)), $\tau\sigma = \rho$이다. $\tau$는 환 준동형이므로 [[ring-homomorphism|환 준동형]]의 (1)과 합의 (7)에 의해
$$
\begin{aligned}
0 &= \tau\Bigl(\sum_j c_j \sigma(\alpha_j)\Bigr) \\
&= \sum_j \tau(c_j)\,\tau(\sigma(\alpha_j)) \\
&= \sum_j \tau(c_j)\,\rho(\alpha_j)
\end{aligned}
$$
이다. 따라서 $\tau(c) \in \mathcal{N}$이다.

*받침이 가장 작은 해.* $c \in E^{n+1}$의 **받침**을 $\operatorname{supp} c = \{j : c_j \ne 0\}$으로 두자. 이것은 $\{1, \dots, n + 1\}$의 부분집합이므로 유한집합이고, $c \ne 0$이면 원소가 $1$개 이상이다. 영이 아닌 $c \in \mathcal{N}$의 받침의 원소의 개수 전체의 집합은 자연수의 공집합이 아닌 집합이므로, [[well-ordering-principle|정렬 원리]]에 의해 가장 작은 원소 $w$가 있다. $|\operatorname{supp} c| = w$이고 $c \ne 0$인 $c \in \mathcal{N}$을 하나 잡고, $j_0 \in \operatorname{supp} c$를 하나 잡는다. $b = c_{j_0}^{-1} c$라 하면 앞 문단에 의해 $b \in \mathcal{N}$이고, $c_{j_0}^{-1} \ne 0$이므로 $\operatorname{supp} b = \operatorname{supp} c$이며 $b_{j_0} = 1$이다.

*$b$의 성분은 모두 $K$에 있다.* 그렇지 않다고 하자. 그러면 $b_{j_1} \notin K = E^H$인 $j_1$이 있고, 고정체의 정의에 의해 $\tau(b_{j_1}) \ne b_{j_1}$인 $\tau \in H$가 있다. $d = b - \tau(b)$라 하면 앞의 성질에 의해 $d \in \mathcal{N}$이다. 자기동형군의 (2)에 의해 $\tau(1) = 1$이므로 $d_{j_0} = 1 - 1 = 0$이고, $j \notin \operatorname{supp} b$이면 $b_j = 0$이므로 $d_j = 0 - \tau(0) = 0$이다. 곧 $\operatorname{supp} d \subseteq \operatorname{supp} b - \{j_0\}$이다. 또 $d_{j_1} = b_{j_1} - \tau(b_{j_1}) \ne 0$이므로 $d \ne 0$이다. [[subset-of-finite-set|유한집합의 부분집합]]의 (1)과 [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (b)에 의해 $|\operatorname{supp} d| \le w - 1 < w$이고, 이것은 $w$가 가장 작다는 것에 어긋난다.

*결론.* 자기동형군의 (1)의 (i)에 의해 $i_E \in H$이므로([[subgroup|부분군]]의 (1)), $b \in \mathcal{N}$의 조건을 $\sigma = i_E$에 쓰면 $\sum_j b_j \alpha_j = 0$이다. 모든 $b_j$가 $K$에 있고 $b_{j_0} = 1 \ne 0$이므로, 이 열은 $K$ 위에서 일차종속이다. 여기서 $K$ 위의 벡터공간 $E$의 스칼라배 $b_j \alpha_j$는 [[extension-field|확대체]]의 (1)의 (i)에 의해 $E$에서의 곱이고, 합은 환 $E$의 유한 합이다.

**2.** (1)에 의해 $K$ 위의 벡터공간 $E$의 길이 $n + 1$인 열은 모두 일차종속이므로, [[basis-extension-over-a-field|기저로 늘리기와 줄이기]]의 (4)에 의해 $E$는 $K$ 위에서 유한차원이고 $\dim_K E \le n$이다. 확대체의 정의에 의해 $E$는 $K$의 유한 확대이고 $[E : K] = \dim_K E \le n = |H|$이다.
:::

## 예시와 반례

:::example[$\mathbb{Q}(\sqrt{2})$의 두 자기동형의 군]
$E = \mathbb{Q}(\sqrt{2})$는 [[field-extension-examples|체의 확대의 예]]의 $\mathbb{R}$의 부분체이고, 그 (1)($2$는 소수)에 의해 $\sqrt{2}$의 최소다항식은 $X^2 - 2$이며 $E$의 원소는 유리수 $x$, $y$로 $x + y\sqrt{2}$로 하나로 정해지게 쓰입니다. [[square-root-exists|제곱근의 존재]]의 (1)과 [[real-number-arithmetic|실수의 계산 법칙]]에 의해 $-\sqrt{2} \in E$도 $X^2 - 2$의 근이므로, [[isomorphism-extension-to-simple-extension|단순 확대로의 동형 연장]]의 (5)에 의해 유리수를 고정하고 $\rho(\sqrt{2}) = -\sqrt{2}$인 환 준동형 $\rho : E \to E$가 있고, $[E : \mathbb{Q}] = 2$이므로 [[automorphism-group-of-extension|확대의 자기동형군]]의 (3)에 의해 $\rho \in \operatorname{Aut}(E/\mathbb{Q})$입니다. $\rho(x + y\sqrt{2}) = x + (-y)\sqrt{2}$이므로 $\rho \circ \rho = i_E$이고, $0 < \sqrt{2}$이므로 $\rho \ne i_E$입니다.

$H = \{i_E, \rho\}$는 $i_E$를 포함하고, $H$의 두 원소의 곱은 $i_E$나 $\rho$이며, $\rho^{-1} = \rho$이므로 [[subgroup-criteria|부분군의 판정법]]의 (1)에 의해 원소가 $2$개인 $\operatorname{Aut}(E)$의 부분군입니다. $E^H$의 원소는 $\rho(x + y\sqrt{2}) = x + y\sqrt{2}$, 곧 $-y = y$인 것이므로 $E^H = \mathbb{Q}$입니다. (2)는 $[E : \mathbb{Q}] \le 2$를 말하고, 실제로 $[E : \mathbb{Q}] = 2 = |H|$입니다.
:::

:::counterexample[부분군이 아닌 $\{\rho\}$에서 차수가 원소의 개수보다 큰 예]
위 예시의 $\rho$에 대하여 $\{\rho\}$는 $i_E$를 원소로 갖지 않으므로 [[subgroup|부분군]]의 (1)에 의해 $\operatorname{Aut}(E)$의 부분군이 아닙니다. 그 고정체는 위 예시와 같은 계산으로 $E^{\{\rho\}} = \mathbb{Q}$이고, $[E : E^{\{\rho\}}] = 2$는 $|\{\rho\}| = 1$보다 큽니다. 증명에서 해 $b$에 $\tau$를 씌운 것이 다시 해라는 단계는 $\sigma$가 $\{\rho\}$를 돌 때 $\rho\sigma$도 $\{\rho\}$를 돌아야 하는데, $\rho\rho = i_E \notin \{\rho\}$이므로 이 단계가 성립하지 않습니다.
:::

## 확인 질문

:::check[$H = \{i_E\}$이면 (1)과 (2)는 무엇을 말하는가?]
$n = 1$이고 $E^H = E$입니다([[fixed-field|고정체]]의 (1)). (1)은 $E$의 두 원소의 열 $a, b$가 $E$ 위에서 일차종속이라는 것이고, 실제로 $a \ne 0$이면 계수 $b, -a$($-a \ne 0$)로 $ba + (-a)b = 0$이며 $a = 0$이면 계수 $1, 0$으로 $1 \cdot 0 + 0 \cdot b = 0$입니다. (2)는 $[E : E] \le 1$이고, [[extension-field|확대체]]의 (2)의 (ii)에 의해 $[E : E] = 1$입니다.
:::

:::check[$E = \mathbb{Q}(\sqrt{2})$, $H = \{i_E, \rho\}$에서 길이 $2$인 열 $1, \sqrt{2}$는 $E^H$ 위에서 일차종속인가?]
아닙니다. $E^H = \mathbb{Q}$이고 [[field-extension-examples|체의 확대의 예]]의 (1)에 의해 $x + y\sqrt{2} = 0$인 유리수는 $x = y = 0$뿐이므로 $1, \sqrt{2}$는 일차독립입니다. (1)이 일차종속을 보장하는 것은 길이가 $|H| + 1 = 3$인 열이고, 길이 $|H|$인 열은 일차독립일 수 있습니다.
:::
