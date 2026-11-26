---
title: 류 방정식
title_en: Class Equation
aliases: [유 방정식, 류방정식, 궤도의 분할과 고정점, 켤레류의 분할, class equation]
kind: theorem
field: group-theory
msc: ["20E45", "20D60"]
level: undergrad
summary: "유한집합의 분할에서 모든 조각의 원소 개수를 d가 나누면 전체도 d가 나눈다. 그래서 유한집합 X에 군이 작용할 때 원소가 둘 이상인 궤도마다 d가 나누면 |X| ≡ |X^G| (mod d)이고, 켤레 작용에서는 G − Z(G)가 원소가 둘 이상인 켤레류들로 나뉘어 Z(G) 밖의 모든 a에서 d가 [G : C_G(a)]를 나누면 |G| ≡ |Z(G)| (mod d)이다."
requires: [set, subset, set-operations, partition, finite-set, number-of-elements-is-unique, subset-of-finite-set, adding-or-removing-an-element, disjoint-union-count, partition-into-equal-blocks, mathematical-induction, prime-number, well-ordering-principle, even-and-odd, divisibility, congruence-modulo-n, prime-power-divisors, group, subgroup-examples, lagrange-theorem, group-action, group-action-examples, orbit-of-an-action, stabilizer-and-fixed-points, centralizer-and-normalizer, conjugacy-class, symmetric-group, order-of-symmetric-group, cycle-permutation]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "14.2절 The Class Equation, 첫머리의 식과 류 방정식 (p.170–171), Example 14.12 (p.171); 15.1절 The Sylow Theorems 첫머리 (p.181)"
    checked: original
    note: "출처 14.2절(p.170–171, 그 쪽을 그림으로 확인했다)은 유한 G-집합 X 와 고정점 집합 X_G 에 대해 '궤도들이 X 를 분할하므로' |X| = |X_G| + Σ_{i=k}^{n} |O_{x_i}| 라 쓰고, x_k, …, x_n 을 서로 다른 자명하지 않은 궤도들의 대표라 한다. 이어 켤레 작용에서 중심 Z(G) 가 고정점 전체이고 '자명하지 않은 궤도를 G 의 conjugacy class 라 부른다'고 한 뒤, 그 대표 x_1, …, x_k 로 |G| = |Z(G)| + n_1 + ⋯ + n_k 와 'class equation' |G| = |Z(G)| + [G : C(x_1)] + ⋯ + [G : C(x_k)] 를 적고, '류 방정식의 한 결과로 각 켤레류의 위수는 G 의 위수를 나눈다'고 쓴다. 15.1절 첫머리(p.181)는 원소가 둘 이상인 켤레류의 대표로 같은 식을 다시 적는다. 출처는 합의 첨자와 대표의 존재를 따로 말하지 않는다. 이 항목은 대표와 유한 합을 쓰지 않고, 분할의 조각마다 d 가 나누면 전체도 나눈다는 (1)과 X − X^G 의 분할 (2)로 출처의 식을 대신하며, 출처가 이 식을 쓰는 꼴인 '나누어떨어짐'을 (3)과 (5)의 합동으로 진술한다. 출처의 켤레류는 원소가 둘 이상인 궤도만 가리키고, 이 사이트의 켤레류(conjugacy-class)는 원소가 하나인 것도 포함하므로 (4)의 (iii)은 '원소가 둘 이상인 켤레류'라고 적는다. 출처의 X_G, C(x), O_x 는 이 사이트의 X^G, C_G(x), G·x 이다. 예시 '$S_3$의 켤레 작용'은 출처 Example 14.12(p.171, S₃ 의 켤레류 {(1)}, {(1 2 3), (1 3 2)}, {(1 2), (1 3), (2 3)} 과 6 = 1 + 2 + 3)와 같은 대상과 같은 결론이고, 14.5절 연습문제 6(p.179, S₄, D₅, Z₉, Q₈ 의 켤레류와 류 방정식을 구하라)과 같은 갈래의 물음이다. 확인 질문 '원소가 $8$개인 군에서 $Z(G)$ 밖의 원소의 켤레류는 원소를 몇 개 가질 수 있는가?'는 출처 Example 14.13(p.171, 원소가 8 개인 D₄ 의 류 방정식 8 = 2 + 2 + 2 + 2)과 같은 갈래의 물음이고 14.5절 연습문제 6(d)(p.179, 3.2절 Example 3.15(p.36)에서 원소 여덟 개로 정의한 Q₈ 의 켤레류와 류 방정식)와 같은 갈래이며, 출처 Theorem 14.15 의 증명(p.172, 'n_i > 1 이고 n_i | |G| 이므로 p 가 각 n_i 를 나눈다')과 같은 발상이다. 확인 질문 '$G$가 유한집합 $X$에 자명하게 작용하면 (2)의 $\\mathcal{O}$와 (3)은 무엇이 되는가?'의 자명한 작용은 출처 14.1절 첫머리(p.168, '모든 군 G 는 모든 집합 X 에 자명한 작용 (g, x) ↦ x 로 작용한다')의 것과 같다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(류 방정식 (3)·고정점 (2)·중심 (1) 에 자명한 작용과 n = 0 대입, 뒤 단원 경로 대조, fixed-points (4) 를 받아들임). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이라 하자. 작용과 그 값 $g \cdot x$는 [[group-action|군의 작용]], 궤도 $G \cdot x$와 "궤도"는 [[orbit-of-an-action|궤도]], 고정점 전체의 집합 $X^G$는 [[stabilizer-and-fixed-points|안정자와 고정점]]의 것이다. 켤레 작용은 [[group-action-examples|군의 작용의 예]]의 (4)의 (i), 중심 $Z(G)$는 [[subgroup-examples|부분군의 예와 교집합]]의 (5), 중심화 부분군 $C_G(a)$는 [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]], 켤레류 $\operatorname{cl}(a)$는 [[conjugacy-class|켤레류]], 지표 $[G : H]$는 [[lagrange-theorem|라그랑주 정리]]의 것이다. 분할과 그 조각은 [[partition|분할]]과 [[partition-into-equal-blocks|크기가 같은 조각으로 나눈 유한집합]]의 것이고, 원소의 개수 $|A|$는 [[number-of-elements-is-unique|원소의 개수]], 나누어떨어짐 $d \mid n$과 합동은 [[divisibility|나누어떨어짐]]과 [[congruence-modulo-n|합동]]의 것이다.

1. (조각마다 나누면 전체도 나눈다) $A$가 유한집합이고 $\mathcal{S}$가 $A$의 분할이며 $d$가 정수라 하자. $\mathcal{S}$의 모든 조각 $B$에서 $d \mid |B|$이면 $d \mid |A|$이다.
2. (고정점과 나머지 궤도) $G$가 유한집합 $X$에 작용한다고 하자. 그러면 모든 궤도는 유한집합이다. 궤도 $O$가 **원소가 둘 이상인 궤도**인 것은 정확히 $|O| \ge 2$일 때이고, 그런 궤도 전체의 집합을 $\mathcal{O}$라 하자.
   - (i) $x \in X$에 대하여 $|G \cdot x| = 1$인 것은 정확히 $x \in X^G$일 때이다. $x \notin X^G$이면 $|G \cdot x| \ge 2$이다.
   - (ii) $\mathcal{O}$는 $X - X^G$의 분할이다.
   - (iii) $X^G$와 $X - X^G$는 유한집합이고 $|X| = |X^G| + |X - X^G|$이다.
3. (합동 꼴) (2)의 가정 아래 $d$가 자연수이고, 원소가 둘 이상인 모든 궤도 $O$에서 $d \mid |O|$이면 $d \mid |X - X^G|$이고
   $$|X| \equiv |X^G| \pmod d$$
   이다.
4. (켤레 작용) $G$가 유한군이라 하자.
   - (i) 켤레 작용의 고정점 전체의 집합은 $Z(G)$이다. 모든 $a \in G$에서 켤레 작용의 $a$의 궤도는 $\operatorname{cl}(a)$이고, 따라서 이 작용의 궤도는 정확히 $G$의 켤레류이다.
   - (ii) $a \in G$에 대하여 $|\operatorname{cl}(a)| = [G : C_G(a)]$이고 이 수는 $|G|$를 나눈다. 이 수가 $1$인 것은 정확히 $a \in Z(G)$일 때이고, $a \notin Z(G)$이면 이 수는 $2$ 이상이다.
   - (iii) 원소가 둘 이상인 켤레류 전체의 집합은 $G - Z(G)$의 분할이다. $Z(G)$와 $G - Z(G)$는 유한집합이고 $|G| = |Z(G)| + |G - Z(G)|$이다.
5. (류 방정식의 합동 꼴) $G$가 유한군이고 $d$가 자연수이며, $Z(G)$에 속하지 않는 모든 $a \in G$에서 $d \mid [G : C_G(a)]$이면 $d \mid |G - Z(G)|$이고
   $$|G| \equiv |Z(G)| \pmod d$$
   이다.
:::

:::english
Let $G$ be a group with identity $e$. Actions and their values $g \cdot x$, orbits $G \cdot x$, and the set $X^G$ of all fixed points are as in the entries on group actions, orbits, and stabilizers and fixed points. The action by conjugation is item (4)(i) of the entry on examples of group actions, the center $Z(G)$ is item (5) of the entry on examples of subgroups, and the centralizer $C_G(a)$, the conjugacy class $\operatorname{cl}(a)$ and the index $[G : H]$ are as in the corresponding entries. Partitions and their blocks are as in the entries on partitions and on finite sets split into blocks of equal size; the number of elements $|A|$, divisibility $d \mid n$ and congruence are as in the corresponding entries.

1. (If $d$ divides every block, it divides the whole) Let $A$ be a finite set, $\mathcal{S}$ a partition of $A$, and $d$ an integer. If $d \mid |B|$ for every block $B$ of $\mathcal{S}$, then $d \mid |A|$.
2. (Fixed points and the remaining orbits) Let $G$ act on a finite set $X$. Then every orbit is a finite set. An orbit $O$ is an **orbit with at least two elements** if and only if $|O| \ge 2$; let $\mathcal{O}$ be the set of all such orbits.
   - (i) For $x \in X$, $|G \cdot x| = 1$ if and only if $x \in X^G$. If $x \notin X^G$, then $|G \cdot x| \ge 2$.
   - (ii) $\mathcal{O}$ is a partition of $X - X^G$.
   - (iii) $X^G$ and $X - X^G$ are finite sets and $|X| = |X^G| + |X - X^G|$.
3. (Congruence form) Under the hypotheses of (2), if $d$ is a natural number and $d \mid |O|$ for every orbit $O$ with at least two elements, then $d \mid |X - X^G|$ and
   $$|X| \equiv |X^G| \pmod d.$$
4. (The action by conjugation) Let $G$ be a finite group.
   - (i) The set of all fixed points of the action by conjugation is $Z(G)$. For every $a \in G$, the orbit of $a$ under the action by conjugation is $\operatorname{cl}(a)$; hence the orbits of this action are exactly the conjugacy classes of $G$.
   - (ii) For $a \in G$, $|\operatorname{cl}(a)| = [G : C_G(a)]$, and this number divides $|G|$. It equals $1$ if and only if $a \in Z(G)$, and if $a \notin Z(G)$ it is at least $2$.
   - (iii) The set of all conjugacy classes with at least two elements is a partition of $G - Z(G)$. The sets $Z(G)$ and $G - Z(G)$ are finite and $|G| = |Z(G)| + |G - Z(G)|$.
5. (Congruence form of the class equation) If $G$ is a finite group, $d$ is a natural number, and $d \mid [G : C_G(a)]$ for every $a \in G$ not in $Z(G)$, then $d \mid |G - Z(G)|$ and
   $$|G| \equiv |Z(G)| \pmod d.$$
:::

## 직관

군이 유한집합 $X$에 작용하면 $X$는 궤도들로 나뉩니다([[orbit-of-an-action|궤도]]의 (2)). 원소가 하나인 궤도는 정확히 고정점 하나로 된 궤도이고((2)의 (i)), 나머지 궤도는 원소가 둘 이상입니다. 그래서 $X$의 원소를 셀 때 고정점을 먼저 세고, 남은 $X - X^G$는 원소가 둘 이상인 궤도들로 나누어 셉니다((2)의 (ii), (iii)). 출처 Judson 은 이것을 궤도의 대표를 골라 $|X| = |X^G| + (\text{궤도의 크기의 합})$으로 적습니다.

이 사이트에서는 대표도 합의 기호도 쓰지 않고, 쓰는 곳에서 실제로 필요한 것만 진술합니다. 그것은 "원소가 둘 이상인 궤도의 크기가 모두 $d$의 배수이면 $|X|$와 $|X^G|$는 $d$를 법으로 합동"이라는 (3)입니다. 바탕은 (1)입니다. 상자에 든 구슬 묶음마다 구슬 수가 $d$의 배수이면, 묶음을 몇 개로 나누었든 전체 구슬 수도 $d$의 배수입니다. 묶음 하나가 분할의 조각 하나이고, "묶음이 겹치지 않고 모든 구슬이 어느 묶음에 든다"가 분할의 조건입니다. 묶음이 겹치면 이 말은 맞지 않을 수 있습니다(아래 반례).

$G$가 자기 자신에 켤레로 작용하면 고정점 전체는 중심 $Z(G)$이고 궤도는 켤레류입니다((4)의 (i)). 켤레류의 크기는 $[G : C_G(a)]$이므로, 출처가 "류 방정식"이라 부르는 식 $|G| = |Z(G)| + [G : C(x_1)] + \cdots + [G : C(x_k)]$의 쓰임새는 이 항목의 (4)와 (5)가 맡습니다. 원소가 둘 이상인 켤레류가 없을 수도 있습니다. $G$가 아벨군이면 $G - Z(G) = \emptyset$이고 (4)의 (iii)은 $|G| = |Z(G)| + 0$입니다.

## 증명

:::idea
(1)은 분할의 조각의 개수에 대한 귀납이다. 조각 하나를 떼면 나머지가 남은 집합의 분할이 된다. (2)는 고정점의 궤도가 원소 하나이고 다른 점의 궤도가 원소 둘 이상이라는 것에서, (3)은 (1)을 $X - X^G$와 $\mathcal{O}$에 쓴 것이다. (4), (5)는 (2), (3)을 켤레 작용에 쓴 것이다.
:::

:::hint
(1)에서 "조각이 $k$개인 모든 분할에 대하여"를 귀납의 명제로 둡니다. 조각 $X_0$ 하나를 떼면 [[partition-into-equal-blocks|크기가 같은 조각으로 나눈 유한집합]]의 (1)로 남은 조각들이 $A - X_0$의 분할이 됩니다.
:::

:::hint
(2)의 (ii)에서 원소가 둘 이상인 궤도가 $X^G$와 만나지 않는 까닭은, 고정점 $y$를 가진 궤도가 $G \cdot y$이고 그 크기가 $1$이기 때문입니다.
:::

:::proof
정수의 계산(교환·결합·분배법칙)은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 계산 법칙으로 쓰고, 정수끼리의 합, 차, 곱이 정수라는 것은 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실을 쓴다. 부등식은 [[prime-number|소수]]의 진술의 (Z1)과 정렬 원리의 진술의 (Z5), (L1)을 인용한다.

**(1)** $0$ 이상인 정수 $k$에 대한 명제 $P_k$를 "원소를 $k$개 갖는 분할 $\mathcal{S}$를 가진 모든 유한집합 $A$에 대하여, $\mathcal{S}$의 모든 조각의 원소의 개수를 $d$가 나누면 $d \mid |A|$"로 두고, [[mathematical-induction|수학적 귀납법]]의 시작점이 $0$인 꼴로 보인다.

$P_0$: $\mathcal{S}$가 원소를 $0$개 가지면 [[finite-set|유한집합]]의 (F2)에 의해 $\mathcal{S} = \emptyset$이다. $A$에 원소 $x$가 있다면 [[partition|분할]]의 조건 2에 의해 $x \in X$인 $X \in \mathcal{S}$가 있어야 하는데 $\mathcal{S}$에 원소가 없으므로, $A$에는 원소가 없고 $A = \emptyset$이다. (F2)와 [[number-of-elements-is-unique|원소의 개수]]에 의해 $|A| = 0 = d \cdot 0$이므로 $d \mid |A|$이다.

$P_k \Rightarrow P_{k+1}$: $\mathcal{S}$가 원소를 $k + 1$개 갖는 $A$의 분할이고 모든 조각의 원소의 개수를 $d$가 나눈다고 하자. $k + 1 \ge 1$이므로 $\mathcal{S} \ne \emptyset$이고((F2)와 원소의 개수의 (1)), $X_0 \in \mathcal{S}$인 $X_0$이 있다. [[partition-into-equal-blocks|크기가 같은 조각으로 나눈 유한집합]]의 (1)에 의해 $\mathcal{S}' = \mathcal{S} - \{X_0\}$은 $A - X_0$의 분할이고, [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (b)에 의해 $\mathcal{S}'$은 원소를 $k$개 갖는다. 분할의 조건 1에 의해 $X_0 \subseteq A$이므로, [[disjoint-union-count|서로소인 합집합의 원소의 개수]]의 (2)에 의해 $A - X_0$과 $X_0$은 유한집합이고 $|A - X_0| = |A| - |X_0|$이다. $\mathcal{S}'$의 조각은 $\mathcal{S}$의 조각이므로 그 원소의 개수를 $d$가 나누고, 귀납 가정 $P_k$를 $A - X_0$과 $\mathcal{S}'$에 쓰면 $d \mid |A - X_0|$이다. 곧 $|A - X_0| = ds$, $|X_0| = dt$인 정수 $s$, $t$가 있고
$$|A| = |A - X_0| + |X_0| = ds + dt = d(s + t)$$
이므로 $d \mid |A|$이다. 따라서 $P_{k+1}$이 성립한다.

이제 $A$가 유한집합이고 $\mathcal{S}$가 그 분할이면 크기가 같은 조각으로 나눈 유한집합의 (2)에 의해 $\mathcal{S}$는 유한집합이므로, $k = |\mathcal{S}|$에 대한 $P_k$에서 (1)이 나온다.

**(2)** 궤도는 $X$의 부분집합이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 유한집합이다.

(i) $x \in X^G$이면 [[stabilizer-and-fixed-points|안정자와 고정점]]의 (4)의 (ii)에 의해 $G \cdot x = \{x\}$이고, [[group|군]]의 (5)에 의해 $|\{x\}| = 1$이다. $x \notin X^G$, 곧 $x \in X - X^G$라 하자. [[orbit-of-an-action|궤도]]의 (1)에 의해 $x \in G \cdot x$이므로 $\{x\} \subseteq G \cdot x$이고, 안정자와 고정점의 (4)의 (iv)에 의해 $G \cdot x$에는 $x$와 다른 원소가 있으므로 $\{x\} \ne G \cdot x$이다. 유한집합의 부분집합의 (2)에 의해 $1 = |\{x\}| < |G \cdot x|$이고, (Z1)에 의해 $|G \cdot x| \ge 2$이다. 이때 (L1)에 의해 $|G \cdot x| \ne 1$이다. 두 경우를 합치면 $|G \cdot x| = 1$인 것은 정확히 $x \in X^G$일 때이다.

(ii) 분할의 세 조건을 확인한다.

조건 1: $O \in \mathcal{O}$이면 $O = G \cdot x$인 $x \in X$가 있고, $x \in O$이므로 $O \ne \emptyset$이다. $y \in O$라 하자. $y \in X^G$이면 궤도의 (2)에 의해 $G \cdot y = G \cdot x = O$이고 (i)에 의해 $|O| = 1$이 되어, $|O| \ge 2$와 함께 (L1)에 어긋난다. 따라서 $y \in X - X^G$이고 $O \subseteq X - X^G$이다.

조건 2: $y \in X - X^G$이면 (i)에 의해 $|G \cdot y| \ge 2$이므로 $G \cdot y \in \mathcal{O}$이고, 궤도의 (1)에 의해 $y \in G \cdot y$이다.

조건 3: $\mathcal{O}$의 원소는 궤도이고, 궤도의 (2)에 의해 궤도 전체의 집합은 $X$의 분할이므로, 분할의 조건 3에 의해 $\mathcal{O}$의 서로 다른 두 원소는 서로소이다.

(iii) $X^G \subseteq X$이므로 [[disjoint-union-count|서로소인 합집합의 원소의 개수]]의 (2)에 의해 $X^G$와 $X - X^G$는 유한집합이고 $|X - X^G| = |X| - |X^G|$, 곧 $|X| = |X^G| + |X - X^G|$이다.

**(3)** (2)의 (ii)에 의해 $\mathcal{O}$는 유한집합 $X - X^G$의 분할이고, 가정에 의해 그 모든 조각의 원소의 개수를 $d$가 나눈다. (1)에 의해 $d \mid |X - X^G|$이고, (2)의 (iii)에 의해 $|X - X^G| = |X| - |X^G|$이다. 따라서 [[congruence-modulo-n|합동]]의 정의에 의해 $|X| \equiv |X^G| \pmod d$이다.

**(4)** [[group-action-examples|군의 작용의 예]]의 (4)의 (i)에 의해 켤레 작용은 $G$의 집합 $G$ 위의 작용이고 $g \cdot x = gxg^{-1}$이다. $G$는 유한집합이므로 (2), (3)을 $X = G$인 이 작용에 쓸 수 있다.

(i) [[stabilizer-and-fixed-points|안정자와 고정점]]의 (5)의 (iv)에 의해 이 작용의 고정점 전체의 집합은 $Z(G)$이다. 궤도의 정의에 의해 $a$의 궤도는 $\{g \cdot a : g \in G\} = \{gag^{-1} : g \in G\} = \operatorname{cl}(a)$이다. 따라서 $G$의 부분집합 $C$가 이 작용의 궤도인 것(어떤 $a$에서 $C = G \cdot a$)은 정확히 $C$가 켤레류인 것(어떤 $a$에서 $C = \operatorname{cl}(a)$, [[conjugacy-class|켤레류]]의 정의)과 같다.

(ii) 켤레류의 (2)에 의해 $|\operatorname{cl}(a)| = [G : C_G(a)]$이고 이 수는 $|G|$를 나눈다. (i)에 의해 $\operatorname{cl}(a) = G \cdot a$이고 $X^G = Z(G)$이므로, (2)의 (i)에 의해 이 수가 $1$인 것은 정확히 $a \in Z(G)$일 때이고, $a \notin Z(G)$이면 $2$ 이상이다.

(iii) (i)에 의해 이 작용의 원소가 둘 이상인 궤도는 정확히 원소가 둘 이상인 켤레류이고 $X - X^G = G - Z(G)$이므로, (2)의 (ii), (iii)에서 나온다.

**(5)** (4)의 (i)에 의해 켤레 작용의 원소가 둘 이상인 궤도 $O$는 어떤 $a \in G$에서 $O = \operatorname{cl}(a)$이고 $|\operatorname{cl}(a)| \ge 2$이다. (4)의 (ii)에 의해 $|\operatorname{cl}(a)| \ne 1$이므로 $a \notin Z(G)$이고, $|O| = [G : C_G(a)]$를 가정에 의해 $d$가 나눈다. (3)을 $X = G$, $X^G = Z(G)$에 쓰면 $d \mid |G - Z(G)|$이고 $|G| \equiv |Z(G)| \pmod d$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$S_3$의 켤레 작용]
$X = \{1, 2, 3\}$이고 $S_3 = S_X$이며, 곱은 오른쪽 치환을 먼저 적용하고 순환치환은 [[cycle-permutation|순환치환]]의 표기입니다. [[order-of-symmetric-group|대칭군의 원소의 개수]]의 (6)에 의해 $|S_3| = 6$입니다.

[[conjugacy-class|켤레류]]의 (6)에 의해 $\operatorname{cl}((1\ 2))$는 $S_3$의 호환 전체입니다. 순환치환의 (2)에 의해 호환 $(a\ b)$의 받침은 $\{a, b\}$이므로 받침이 다른 호환은 다르고, (5)에 의해 $(a\ b) = (b\ a)$이므로 받침이 같은 호환은 같습니다. $X$의 원소 둘로 된 부분집합은 $\{1, 2\}$, $\{1, 3\}$, $\{2, 3\}$의 셋이므로 $\operatorname{cl}((1\ 2)) = \{(1\ 2), (1\ 3), (2\ 3)\}$이고 원소가 $3$개입니다. 같은 (6)에 의해 $\operatorname{cl}((1\ 2\ 3))$은 길이 $3$인 순환치환 전체이고, 순환치환의 (3)으로 돌려 적어 첫 자리를 $1$로 두면 $(1\ 2\ 3)$과 $(1\ 3\ 2)$뿐이며, 둘은 $1$을 각각 $2$와 $3$으로 보내므로 다릅니다. 곧 원소가 $2$개입니다.

[[conjugacy-class|켤레류]]의 (3)에 의해 $\operatorname{cl}(i_X) = \{i_X\}$이고 $i_X \in Z(S_3)$입니다. 세 켤레류 $\{i_X\}$, $\operatorname{cl}((1\ 2))$, $\operatorname{cl}((1\ 2\ 3))$은 원소의 개수가 $1$, $3$, $2$로 달라 서로 다른 집합이므로([[number-of-elements-is-unique|원소의 개수]]) 켤레류의 (1)의 분할에서 서로소이고, [[disjoint-union-count|서로소인 합집합의 원소의 개수]]의 (1)을 두 번 쓰면 그 합집합은 원소가 $1 + 3 + 2 = 6$개입니다. 이 합집합은 $S_3$의 부분집합이고 $|S_3| = 6$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $S_3$ 전체입니다.

원소가 $3$개와 $2$개인 두 켤레류의 원소 $b$는 켤레류의 (1)에 의해 $\operatorname{cl}(b)$가 그 켤레류 자신이어서 $|\operatorname{cl}(b)| \ne 1$이므로, (4)의 (ii)에 의해 $Z(S_3)$에 속하지 않습니다. 따라서 $Z(S_3) = \{i_X\}$이고, (4)의 (iii)의 분할은 $S_3 - Z(S_3)$을 이 두 켤레류로 나눕니다. 곧 $|S_3| = |Z(S_3)| + |S_3 - Z(S_3)|$은 $6 = 1 + 5$이고 $5 = 3 + 2$입니다. $d = 2$로 (5)를 쓰려 하면 $[S_3 : C_{S_3}((1\ 2))] = |\operatorname{cl}((1\ 2))| = 3$은 홀수라서 $2$로 나누어지지 않아 가정이 성립하지 않습니다([[even-and-odd|짝수와 홀수]]). 실제로 $6 - 1 = 5 = 2 \cdot 2 + 1$도 홀수여서 $6 \not\equiv 1 \pmod 2$입니다.
:::

:::counterexample[조각이 겹치면 깨질 수 있다]
(1)은 분할에 대한 진술입니다. $A = \{1, 2, 3\}$을 $\{1, 2\}$와 $\{2, 3\}$으로 덮으면 두 집합은 모두 원소가 $2$개라 $2$로 나누어지지만, $|A| = 3$은 $2$로 나누어지지 않습니다($3 = 2 \cdot 1 + 1$은 홀수이고 짝수이면서 홀수인 정수는 없습니다, [[even-and-odd|짝수와 홀수]]). 두 집합이 $2$를 함께 가져 분할의 조건 3이 깨졌습니다. 증명에서는 조각 $X_0$을 뗀 나머지가 $A - X_0$의 분할이 된다는 단계에서 이 조건을 썼습니다.
:::

## 확인 질문

:::check[원소가 $8$개인 군에서 $Z(G)$ 밖의 원소의 켤레류는 원소를 몇 개 가질 수 있는가?]
$2$개 또는 $4$개입니다. $a \notin Z(G)$이면 (4)의 (ii)에 의해 $|\operatorname{cl}(a)| = [G : C_G(a)]$는 $8 = 2^3$을 나누고 $2$ 이상이므로, [[prime-power-divisors|소수의 거듭제곱과 그 약수]]의 (3)에 의해 $2$, $4$, $8$ 가운데 하나입니다. $8$이면 [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $8 = 8 \cdot |C_G(a)|$, 곧 $|C_G(a)| = 1$입니다. 그런데 [[centralizer-and-normalizer|중심화 부분군과 정규화 부분군]]의 (1)에 의해 $C_G(a)$는 부분군이어서 $e \in C_G(a)$이고 $a \in C_G(a)$이며, [[conjugacy-class|켤레류]]의 (3)에 의해 $e \in Z(G)$이므로 $a \ne e$입니다. 곧 $\{e\}$는 $C_G(a)$와 같지 않은 부분집합이고, [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $1 = |\{e\}| < |C_G(a)|$여서 어긋납니다. 따라서 $8$은 될 수 없습니다. 이로부터 $Z(G)$ 밖의 모든 $a$에서 $2 \mid [G : C_G(a)]$이므로 (5)에 의해 $8 \equiv |Z(G)| \pmod 2$, 곧 $|Z(G)|$는 짝수입니다.
:::

:::check[$G$가 유한집합 $X$에 자명하게 작용하면 (2)의 $\mathcal{O}$와 (3)은 무엇이 되는가?]
자명한 작용([[group-action-examples|군의 작용의 예]]의 (1))에서는 [[stabilizer-and-fixed-points|안정자와 고정점]]의 (5)의 (i)에 의해 $X^G = X$입니다. 그러면 $X - X^G = \emptyset$이고, (2)의 (i)에 의해 모든 궤도의 원소가 하나이므로 $\mathcal{O} = \emptyset$입니다. 이것은 [[partition|분할]]의 진술대로 $\emptyset$의 분할입니다. (3)의 가정은 확인할 궤도가 없어 모든 자연수 $d$에서 성립하고, 결론 $|X| \equiv |X| \pmod d$도 참입니다.
:::
