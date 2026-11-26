---
title: 궤도
title_en: Orbit of a Group Action
aliases: [작용의 궤도, G-동치, 추이적 작용, orbit, G-equivalence, transitive action]
kind: theorem
field: group-theory
msc: ["20"]
level: undergrad
summary: 군 G 가 집합 X 에 작용할 때 g·x = y 인 g 가 있으면 x 와 y 가 G-동치라 한다. 이것은 동치관계이고 x 의 동치류가 궤도 G·x 이며, 궤도 전체는 X 의 분할이다. 치환 σ 가 생성한 순환 부분군의 궤도는 σ 의 궤도와 같고, 불변 부분집합과 부분군의 궤도, 추이적 작용을 다룬다.
requires: [set, subset, function, equivalence-relation, equivalence-class, equivalence-classes-equal-iff-related, equivalence-classes-form-a-partition, partition, real-number-arithmetic, group, subgroup, subgroup-examples, number-groups, subgroup-criteria, cyclic-subgroup, symmetric-group, order-of-symmetric-group, cycle-permutation, orbits-of-a-permutation, left-coset, group-action, group-action-examples]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "14.1절 Groups Acting on Sets, G-동치와 Proposition 14.6, 궤도의 정의 (p.169), Example 14.7 (p.169); 5.4절 Exercises, 연습문제 32 (p.73)"
    checked: original
    note: "출처 14.1절(p.169)은 gx = y 인 g ∈ G 가 있으면 x 가 y 와 G-equivalent 라 하고 x ∼_G y 로 쓰며, Proposition 14.6 에서 이것이 동치관계임을 증명한 뒤 G-동치가 정하는 분할의 조각을 orbit 이라 부르고 x 를 포함하는 궤도를 O_x 로 쓴다. 이 항목의 정의와 (1), (2)는 같은 내용이고, 기호는 O_x 대신 G·x 를 쓴다. 출처의 대칭성의 증명은 'In this case g⁻¹y = x' 라고 적고, 이 항목은 그 단계를 군의 작용 항목의 (1)로 정당화한다. (3)의 ⟨σ⟩ 의 궤도와 σ 의 궤도의 일치, (4)의 불변 부분집합과 제한한 작용의 궤도, (5)의 부분군의 궤도는 출처가 명제로 진술하지 않는다(검색어 'orbit' 23건은 5장 연습문제 32, 14장의 정의·Example 14.7·Theorem 14.11·류 방정식·번사이드 정리와 그 예·Sage 안내·연습문제 4, 5, 15장 제3 정리의 증명과 연습문제 25, 찾아보기이고, 'G-equivalen' 9건은 위의 정의와 Proposition 14.6, 번사이드 정리의 예(p.174), 연습문제 1, 3, 찾아보기이며, 14·15장의 'partition' 은 위의 정의, 류 방정식, 정수의 분할, 15장 제2 정리의 증명에 나온다. 14.5절 연습문제 1–25 를 처음부터 읽었다). 출처 Theorem 15.7 의 증명(p.183)은 실로우 부분군의 켤레 전체를 Q 의 켤레류로 나누며 'Clearly, these conjugacy classes partition S' 라고 적는데, 이것은 (5)를 쓰는 곳이다. (6)의 추이적 작용은 출처 5.4절 연습문제 32 (d)(p.73)가 S_X 의 부분군 H 에 대하여 모든 x, y 에 σ(x) = y 인 σ ∈ H 가 있으면 H 가 transitive 라 하는 것과 같은 정의를 작용에 대해 쓴 것이다. 그 연습문제는 ⟨σ⟩ 가 추이적인 것이 어떤 x 에서 O_{x,σ} = X 인 것과 같음을 보이게 하는데, 이것은 (3)과 (6)을 합친 것과 같은 내용이다. 출처 14·15장에는 'transitive' 가 Proposition 14.6 의 증명의 추이성(관계의 성질) 말고는 나오지 않는다. 예시 '부호를 바꾸는 작용의 궤도' 는 출처 14.5절 연습문제 1 의 힌트(p.327)가 Example 14.1 의 궤도를 0 과 ℝ² − {0} 으로 적는 것과 같은 발상이다. 예시 '왼쪽 곱 작용의 부분군 궤도' 의 집합 {(1 3), (1 3 2)} 는 출처 6.1절 Example 6.2 다음 문단(p.75)에 K = {(1), (1 2)} 의 오른쪽 잉여류 K(1 3) 으로 나오고, 출처 Example 14.3(p.169) 끝의 '부분군 H 의 왼쪽 곱 작용' 에 대해 14.5절 연습문제 1(p.178)이 G-동치류를 계산하게 하는 것과 같은 발상이다. 반례 '부분군으로 제한하면 궤도가 작아질 수 있다' 의 S₃ 의 궤도 {1, 2, 3} 은 출처 14.5절 연습문제 3 의 힌트(p.328)에 나온다. 확인 질문 '$X = \\{1, 2, 3, 4\\}$이고 $\\sigma = (1\\ 2\\ 3)$일 때 $\\langle \\sigma \\rangle$의 궤도는 무엇인가?' 는 출처 Example 14.7(p.169)이 치환군의 궤도 {1, 2, 3}, {4, 5} 를 적는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인('(1)–(3) 은 명제로 없다' 를 검색어 넷으로 대조, 14.1절 원문 대조). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이며, $G$가 집합 $X$에 작용한다고 하자. 작용, 그 값 $g \cdot x$, $G$-불변, 제한한 작용은 [[group-action|군의 작용]]의 것이다.

$X$ 위의 관계 $\sim_G$를 다음과 같이 정한다: $x, y \in X$에 대하여 $x \sim_G y$인 것은 정확히 $g \cdot x = y$인 $g \in G$가 있을 때이고, 이때 $x$와 $y$가 **$G$-동치**($G$-equivalent)라 한다. $x \in X$에 대하여
$$G \cdot x = \{g \cdot x : g \in G\}$$
를 $x$의 **궤도**(orbit)라 한다. 곧 $y \in G \cdot x$인 것은 정확히 $g \cdot x = y$인 $g \in G$가 있을 때이다. $X$의 부분집합 $O$가 이 작용의 **궤도**인 것은 정확히 어떤 $x \in X$에서 $O = G \cdot x$일 때이다.

다음이 성립한다.

1. (동치관계) $\sim_G$는 $X$ 위의 [[equivalence-relation|동치관계]]이다. 모든 $x \in X$에서 $G \cdot x$는 $\sim_G$의 $x$를 포함하는 [[equivalence-class|동치류]]이고, $x \in G \cdot x$이다.
2. (분할) 궤도 전체의 집합 $\{G \cdot x : x \in X\}$는 $X$의 [[partition|분할]]이다. $x, y \in X$에 대하여 $y \in G \cdot x$인 것은 정확히 $G \cdot y = G \cdot x$일 때이다. 특히 모든 $g \in G$에서 $G \cdot (g \cdot x) = G \cdot x$이다.
3. (치환의 궤도와의 일치) $X$가 집합이고 $\sigma \in S_X$이며, $\langle \sigma \rangle$가 [[group-action-examples|군의 작용의 예]]의 (2)의 작용 $\tau \cdot x = \tau(x)$로 $X$에 작용한다고 하자. 그러면 모든 $x \in X$에서 $\langle \sigma \rangle \cdot x$는 [[orbits-of-a-permutation|치환의 궤도]]의 $O_\sigma(x)$와 같은 집합이고, 관계 $\sim_{\langle \sigma \rangle}$는 그 항목의 $\sim_\sigma$와 같다. 따라서 이 작용의 궤도는 정확히 $\sigma$의 궤도이다.
4. (불변 부분집합) $Y \subseteq X$가 $G$-불변인 것은 정확히 모든 $y \in Y$에서 $G \cdot y \subseteq Y$일 때이다. 모든 궤도는 $G$-불변이다. $Y$가 $G$-불변이고 $y \in Y$이면, $Y$로 제한한 작용에서 $y$의 궤도는 $G \cdot y$이다. 특히 $O$가 궤도이면 $G$는 $O$에 작용하고, 그 작용의 궤도는 $O$ 하나뿐이다.
5. (부분군의 궤도) $H$가 $G$의 [[subgroup|부분군]]이고, [[group-action|군의 작용]]의 (4)로 $H$가 $X$에 작용한다고 하자. 그 작용에서 $x$의 궤도를 $H \cdot x = \{h \cdot x : h \in H\}$로 쓴다. 그러면 $H \cdot x \subseteq G \cdot x$이고, 모든 궤도 $O$에서 $\{H \cdot y : y \in O\}$는 $O$의 분할이다.
6. (추이적 작용) 작용이 **추이적**(transitive)인 것은 정확히 $X \ne \emptyset$이고 모든 $x, y \in X$에 대하여 $g \cdot x = y$인 $g \in G$가 있을 때이다. 다음 세 조건은 서로 동치이다: (i) 작용이 추이적이다. (ii) $X \ne \emptyset$이고 어떤 $x \in X$에서 $G \cdot x = X$이다. (iii) $X \ne \emptyset$이고 모든 $x \in X$에서 $G \cdot x = X$이다. 또 다음 작용은 추이적이다.
   - (가) (4)의 궤도 $O$ 위의 작용.
   - (나) $X \ne \emptyset$일 때 $S_X$의 $X$ 위의 자연스러운 작용([[group-action-examples|군의 작용의 예]]의 (2)).
   - (다) $G$의 왼쪽 곱 작용(같은 항목의 (3))과, 부분군 $H$에 대한 $G/H$ 위의 왼쪽 곱 작용(같은 항목의 (5)).

관계 $\sim_G$와 관계의 성질 "추이성"([[equivalence-relation|동치관계]])은 다른 것이고, (6)의 "추이적"은 작용에 대한 말이다.
:::

:::english
Let $G$ be a group with identity $e$, and suppose $G$ acts on a set $X$. Actions, their values $g \cdot x$, $G$-invariance and restricted actions are those of the entry on group actions.

Define a relation $\sim_G$ on $X$ as follows: for $x, y \in X$, $x \sim_G y$ exactly when there is $g \in G$ with $g \cdot x = y$; in this case $x$ and $y$ are said to be **$G$-equivalent**. For $x \in X$, the set
$$G \cdot x = \{g \cdot x : g \in G\}$$
is called the **orbit** of $x$. Thus $y \in G \cdot x$ exactly when there is $g \in G$ with $g \cdot x = y$. A subset $O$ of $X$ is an **orbit** of the action exactly when $O = G \cdot x$ for some $x \in X$.

The following hold.

1. (Equivalence relation) $\sim_G$ is an equivalence relation on $X$. For every $x \in X$, $G \cdot x$ is the equivalence class of $\sim_G$ containing $x$, and $x \in G \cdot x$.
2. (Partition) The set $\{G \cdot x : x \in X\}$ of all orbits is a partition of $X$. For $x, y \in X$, $y \in G \cdot x$ exactly when $G \cdot y = G \cdot x$. In particular, $G \cdot (g \cdot x) = G \cdot x$ for every $g \in G$.
3. (Agreement with orbits of a permutation) Let $X$ be a set and $\sigma \in S_X$, and let $\langle \sigma \rangle$ act on $X$ by the action $\tau \cdot x = \tau(x)$ of item (2) of the examples of group actions. Then for every $x \in X$, $\langle \sigma \rangle \cdot x$ is the same set as $O_\sigma(x)$ of the entry on orbits of a permutation, and the relation $\sim_{\langle \sigma \rangle}$ is the same as $\sim_\sigma$ of that entry. Hence the orbits of this action are exactly the orbits of $\sigma$.
4. (Invariant subsets) $Y \subseteq X$ is $G$-invariant exactly when $G \cdot y \subseteq Y$ for every $y \in Y$. Every orbit is $G$-invariant. If $Y$ is $G$-invariant and $y \in Y$, then the orbit of $y$ under the restricted action on $Y$ is $G \cdot y$. In particular, if $O$ is an orbit, then $G$ acts on $O$, and $O$ is the only orbit of that action.
5. (Orbits of a subgroup) Let $H$ be a subgroup of $G$, acting on $X$ by item (4) of the entry on group actions. Write the orbit of $x$ under that action as $H \cdot x = \{h \cdot x : h \in H\}$. Then $H \cdot x \subseteq G \cdot x$, and for every orbit $O$, $\{H \cdot y : y \in O\}$ is a partition of $O$.
6. (Transitive actions) An action is **transitive** exactly when $X \ne \emptyset$ and for all $x, y \in X$ there is $g \in G$ with $g \cdot x = y$. The following three conditions are equivalent: (i) the action is transitive; (ii) $X \ne \emptyset$ and $G \cdot x = X$ for some $x \in X$; (iii) $X \ne \emptyset$ and $G \cdot x = X$ for every $x \in X$. Moreover, the following actions are transitive.
   - (a) The action on an orbit $O$ in (4).
   - (b) When $X \ne \emptyset$, the natural action of $S_X$ on $X$ (item (2) of the examples of group actions).
   - (c) The action of $G$ by left multiplication (item (3) of the same entry), and the action by left multiplication on $G/H$ for a subgroup $H$ (item (5) of the same entry).

The relation $\sim_G$ and the property of relations called "transitivity" (equivalence relation) are different things; "transitive" in (6) is a word about actions.
:::

## 직관

작용으로 점 $x$를 움직여 닿을 수 있는 곳을 모두 모은 것이 궤도입니다. 군의 원소마다 $x$를 한 곳으로 보내므로 궤도는 "$x$에서 출발해 갈 수 있는 곳의 지도"입니다. 역원으로 되돌아올 수 있고(대칭) 두 번 가는 것은 곱 하나로 가는 것과 같으므로(추이) 이 지도는 집합을 겹치지 않는 조각으로 나눕니다. 비유가 정의와 맞는 곳은 "갈 수 있다"가 "$g \cdot x = y$인 $g$가 있다"라는 점이고, 맞지 않는 곳은 같은 곳에 가는 원소가 여럿일 수 있다는 점입니다. 몇 개인지는 다음 항목의 안정자가 셉니다.

1단원의 [[orbits-of-a-permutation|치환의 궤도]]는 치환 하나를 정수 번 거듭 적용해 닿는 곳이었습니다. (3)은 그것이 순환 부분군 $\langle \sigma \rangle$의 작용의 궤도와 같은 것이라는 것입니다. 그래서 궤도라는 같은 이름이 두 뜻으로 갈리지 않습니다.

부분군 $H$로 작용을 줄이면 갈 수 있는 곳이 줄어 궤도가 잘게 쪼개질 수 있습니다((5)와 아래 반례). $H = G$이면 궤도는 그대로입니다. 반대로 궤도가 $X$ 전체 하나뿐인 작용이 추이적인 작용입니다. 빈 집합에는 궤도가 없으므로 추이적이라 하지 않습니다.

## 증명

:::idea
동치관계의 세 성질은 작용의 조건 (i), (ii)와 [[group-action|군의 작용]]의 (1)에서 나온다. 나머지는 동치류가 분할을 이룬다는 것과, 궤도의 원소가 모두 같은 궤도를 갖는다는 것에서 나온다.
:::

:::hint
$g \cdot x = y$이면 $g^{-1} \cdot y$는 무엇인가?
:::

:::hint
$H$-궤도로 $O$를 나누려면, $O$로 제한한 $G$의 작용을 다시 $H$로 제한해 보라.
:::

:::proof
**(1)** 반사성: 작용의 조건 (i)에 의해 $e \cdot x = x$이므로 $x \sim_G x$이다. 대칭성: $g \cdot x = y$이면 [[group-action|군의 작용]]의 (1)에 의해 $x = g^{-1} \cdot y$이고 $g^{-1} \in G$이므로 $y \sim_G x$이다. 추이성: $g \cdot x = y$이고 $h \cdot y = z$이면 조건 (ii)에 의해 $(hg) \cdot x = h \cdot (g \cdot x) = z$이고 $hg \in G$이므로 $x \sim_G z$이다. 따라서 $\sim_G$는 동치관계이다.

$x$를 포함하는 동치류는 $\{y \in X : y \sim_G x\}$이다([[equivalence-class|동치류]]의 정의). 대칭성에 의해 $y \sim_G x$인 것은 정확히 $x \sim_G y$, 곧 $y \in G \cdot x$일 때이므로 이 동치류는 $G \cdot x$이다. 반사성에 의해 $x \in G \cdot x$이다.

**(2)** (1)과 [[equivalence-classes-form-a-partition|동치류 전체는 분할을 이룬다]]에 의해 궤도 전체는 $X$의 분할이다. [[equivalence-classes-equal-iff-related|두 동치류가 같을 조건]]에 의해 $G \cdot y = G \cdot x$인 것은 정확히 $y \sim_G x$일 때이고, 대칭성에 의해 이것은 $x \sim_G y$, 곧 $y \in G \cdot x$와 같다. $g \cdot x \in G \cdot x$이므로 방금 것에 의해 $G \cdot (g \cdot x) = G \cdot x$이다.

**(3)** [[orbits-of-a-permutation|치환의 궤도]]의 (1)에 의해 $O_\sigma(x) = \{\tau(x) : \tau \in \langle \sigma \rangle\}$이다. 이 작용에서 $\tau \cdot x = \tau(x)$이므로 이것은 $\{\tau \cdot x : \tau \in \langle \sigma \rangle\} = \langle \sigma \rangle \cdot x$이다. $x \sim_{\langle \sigma \rangle} y$인 것은 정확히 $y \in \langle \sigma \rangle \cdot x = O_\sigma(x)$일 때이고, 치환의 궤도의 정의에 의해 이것은 정확히 $x \sim_\sigma y$일 때이다. 따라서 두 관계는 같고, 궤도도 같다.

**(4)** $Y$가 $G$-불변이고 $y \in Y$이면 $G \cdot y$의 원소는 $g \cdot y$ 꼴이므로 $Y$에 속한다. 거꾸로 모든 $y \in Y$에서 $G \cdot y \subseteq Y$이면 $g \cdot y \in G \cdot y \subseteq Y$이므로 $Y$는 $G$-불변이다.

$O = G \cdot x$가 궤도이고 $y \in O$이면 (2)에 의해 $G \cdot y = O$이므로 $G \cdot y \subseteq O$이고, 방금 것에 의해 $O$는 $G$-불변이다.

$Y$가 $G$-불변이면 [[group-action|군의 작용]]의 (5)에 의해 $G$는 $Y$에 작용하고 그 값은 원래의 $g \cdot y$이다. 따라서 그 작용에서 $y \in Y$의 궤도는 $\{g \cdot y : g \in G\} = G \cdot y$이다. $O$가 궤도이면 $O$는 $G$-불변이므로 $G$는 $O$에 작용하고, $y \in O$의 그 작용에서의 궤도는 $G \cdot y = O$이다. 곧 그 작용의 궤도는 $O$뿐이다.

**(5)** [[subgroup|부분군]]의 정의에 의해 $H \subseteq G$이므로 $h \cdot x$ 꼴의 원소는 $G \cdot x$에 속하고, $H \cdot x \subseteq G \cdot x$이다. $O$가 궤도라 하자. (4)에 의해 $O$는 $G$-불변이고, [[group-action|군의 작용]]의 (5)의 (iii)에 의해 $H$는 $O$에 $h \cdot y$로 작용한다. 이 작용에서 $y \in O$의 궤도는 $\{h \cdot y : h \in H\} = H \cdot y$이다. 이 작용에 (2)를 쓰면 $\{H \cdot y : y \in O\}$는 $O$의 분할이다.

**(6)** (i)에서 (iii): 작용이 추이적이고 $x \in X$이면, 모든 $y \in X$에 $g \cdot x = y$인 $g$가 있으므로 $X \subseteq G \cdot x$이고, $G \cdot x \subseteq X$이므로 $G \cdot x = X$이다. (iii)에서 (ii): $X \ne \emptyset$이므로 $X$의 원소 $x$가 있고, 그 $x$에서 $G \cdot x = X$이다. (ii)에서 (i): 어떤 $x_0$에서 $G \cdot x_0 = X$라 하고 $x, y \in X$라 하자. $x, y \in G \cdot x_0$이므로 (2)에 의해 $G \cdot x = G \cdot x_0 = X$이고, $y \in G \cdot x$이므로 $g \cdot x = y$인 $g$가 있다.

(가) (4)에 의해 $G$는 $O$에 작용하고 $O$의 점 $y$의 궤도는 $O$이다. $O = G \cdot x$는 (1)에 의해 $x$를 포함하므로 공집합이 아니다. (ii)에 의해 추이적이다.

(나) $x, y \in X$라 하자. $x = y$이면 $i_X \cdot x = y$이다. $x \ne y$이면 호환 $(x\ y)$([[cycle-permutation|순환치환]]의 표기와 (1))는 $S_X$의 원소이고 $x$를 $y$로 보내므로 $(x\ y) \cdot x = y$이다. $X \ne \emptyset$이므로 추이적이다.

(다) 왼쪽 곱 작용: $G$는 군이므로 공집합이 아니고([[group|군]]의 (4)), $x, y \in G$이면 $g = yx^{-1}$에서 군의 (1)과 역원의 정의에 의해 $g \cdot x = (yx^{-1})x = y(x^{-1}x) = ye = y$이다. $G/H$ 위의 작용: [[left-coset|잉여류]]의 (5)에 의해 $H = eH \in G/H$이므로 $G/H \ne \emptyset$이다. $G/H$의 원소는 $aH$ 꼴이고 $a \cdot (eH) = (ae)H = aH$이므로 $G \cdot (eH) = G/H$이며, (ii)에 의해 추이적이다.
:::

## 예시와 반례

:::example[부호를 바꾸는 작용의 궤도]
[[subgroup-examples|부분군의 예]]의 (3)에 의해 $G = \{1, -1\}$은 [[number-groups|수로 이루어진 군]]의 $(\mathbb{R} - \{0\}, \cdot)$의 부분군입니다. 실수 $x$에 대하여 $\varepsilon \cdot x = \varepsilon x$로 정하면 [[real-number-arithmetic|실수의 계산 법칙]]의 (K1), (K4)에 의해 $1 \cdot x = x$이고 (K2)에 의해 $(\varepsilon\delta) \cdot x = \varepsilon \cdot (\delta \cdot x)$이므로, 이것은 $G$의 $\mathbb{R}$ 위의 작용입니다. 실수 $x$의 궤도는 $G \cdot x = \{1x, (-1)x\} = \{x, -x\}$입니다((K9)의 $(-1)a = -a$). $x \ne 0$이면 $x \ne -x$입니다. $x = -x$라면 $x + x = 0$이고 (K1), (K3), (K4)에 의해 $2x = x + x = 0$이며, $2 \ne 0$이므로 (K10)에 의해 $x = 0$이기 때문입니다. 따라서 $0$의 궤도는 원소가 하나인 $\{0\}$이고, $0$이 아닌 실수 $x$의 궤도는 원소가 둘인 $\{x, -x\}$입니다. 궤도가 둘 이상이므로 이 작용은 추이적이 아닙니다.
:::

:::example[왼쪽 곱 작용의 부분군 궤도]
$G$의 부분군 $H$가 $G$에 왼쪽 곱 $h \cdot x = hx$로 작용하면([[group-action-examples|군의 작용의 예]]의 (3)), $H \cdot x = \{hx : h \in H\}$는 [[left-coset|잉여류]]의 (7)의 오른쪽 잉여류 $Hx$입니다. 그래서 (2)는 이 경우 오른쪽 잉여류 전체가 $G$의 분할이라는 것이 됩니다.

$X = \{1, 2, 3\}$, $G = S_X = S_3$이고 $H = \{i_X, (1\ 2)\}$이면(이 $H$가 부분군이라는 것은 [[subgroup-criteria|부분군 판정법]]의 (4)와 [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (2), [[cycle-permutation|순환치환]]의 (5)로 확인합니다), $(1\ 2)(1\ 3)$이 $1, 2, 3$을 각각 $3, 1, 2$로 보내는 $(1\ 3\ 2)$이므로 $H \cdot (1\ 3) = \{(1\ 3), (1\ 3\ 2)\}$입니다. 이것은 왼쪽 잉여류 $(1\ 3)H = \{(1\ 3), (1\ 2\ 3)\}$과 다릅니다. 왼쪽에서 곱하는 작용의 궤도가 오른쪽 잉여류가 되는 것은 곱하는 원소 $h$가 왼쪽에, 궤도의 대표 $x$가 오른쪽에 놓이기 때문입니다.
:::

:::counterexample[부분군으로 제한하면 궤도가 작아질 수 있다]
$X = \{1, 2, 3\}$에서 $S_X$의 자연스러운 작용은 (6)의 (나)에 의해 추이적이므로 궤도는 $X$ 하나뿐입니다. 이것을 $H = \{i_X, (1\ 2)\}$로 제한하면 $H \cdot 1 = \{1, 2\}$, $H \cdot 2 = \{2, 1\}$, $H \cdot 3 = \{3, 3\} = \{3\}$입니다. 곧 $G$의 궤도 $\{1, 2, 3\}$이 (5)대로 두 $H$-궤도 $\{1, 2\}$와 $\{3\}$으로 나뉩니다. $H$의 작용은 추이적이 아닙니다.
:::

## 확인 질문

:::check[자명한 작용은 언제 추이적인가?]
[[group-action-examples|군의 작용의 예]]의 (1)의 자명한 작용에서는 $g \cdot x = x$이므로 모든 궤도가 $G \cdot x = \{x\}$입니다. (6)의 (iii)에 의해 추이적인 것은 정확히 $X \ne \emptyset$이고 모든 $x \in X$에서 $\{x\} = X$일 때, 곧 $X$가 원소를 하나만 가질 때입니다.
:::

:::check[$X = \{1, 2, 3, 4\}$이고 $\sigma = (1\ 2\ 3)$일 때 $\langle \sigma \rangle$의 궤도는 무엇인가?]
(3)에 의해 $\langle \sigma \rangle$의 궤도는 $\sigma$의 궤도입니다. [[cycle-permutation|순환치환]]의 (4)에 의해 $O_\sigma(1) = O_\sigma(2) = O_\sigma(3) = \{1, 2, 3\}$이고 $4 \notin \{1, 2, 3\}$이므로 $O_\sigma(4) = \{4\}$입니다. 따라서 궤도는 $\{1, 2, 3\}$과 $\{4\}$이고, 이 작용은 추이적이 아닙니다.
:::
