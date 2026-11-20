---
title: 부분공간 위상과 연속
title_en: Subspace Topology and Continuity
aliases: [포함함수, inclusion map, 연속함수의 제한, restriction of a continuous map, 공역 줄이기, 공역을 줄여도 연속]
kind: proposition
field: topology
msc: ["54C05"]
level: undergrad
summary: 포함함수는 연속이고 부분공간 위상은 그것을 연속으로 하는 가장 거친 위상이다. 연속함수를 부분집합으로 제한해도 연속이고, 공역을 값을 모두 담는 부분집합으로 줄이거나 다시 키워도 연속인지는 바뀌지 않는다. 열린집합으로 제한해 한 점에서의 연속을 판정할 수 있고, 위상동형사상을 부분집합으로 제한하면 그 상과의 위상동형사상이 된다.
requires: [set, subset, function, function-composition, injective-surjective-bijective, inverse-function, adding-or-removing-an-element, image-and-preimage, preimage-and-set-operations, topological-space, topology-examples, comparing-topologies, subspace-topology, continuous-map, continuity-criteria, composition-of-continuous-maps, homeomorphism, homeomorphism-examples, recursion-theorem, real-number-arithmetic, order-properties-of-reals, interval, open-ball, open-set-in-metric-space, standard-topology-on-reals, open-and-closed-sets-of-reals]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "The subspace topology 절의 Proposition props-subspace-top (i)(ii)와 Lemma universal-inclusion-lemma, content/topological-spaces.tex:378–390, 408–414; 연습문제 1.4, 1.7, content/exercises.tex:15–16, 22; Homeomorphisms 장의 embedding 정의와 예, content/homeomorphisms.tex:54–60"
    checked: original
    note: "(1)의 앞부분과 (2)는 출처 props-subspace-top 의 (i)(ii)이고, 출처의 증명(388, 390)과 같이 역상 ι⁻¹(U) = U ∩ Y, (f|_Y)⁻¹(V) = f⁻¹(V) ∩ Y 로 보인다. (1)의 '가장 거친 위상'은 출처 연습문제 1.4(exercises.tex:15–16)이다. (3)은 출처 Lemma universal-inclusion-lemma(408–414, 'f 가 연속 ⇔ ι ∘ f 가 연속')와 같은 내용이다. 출처는 그 증명을 연습문제 1.7(exercises.tex:22)로 둔다. 이 항목은 함수를 순서쌍의 집합으로 보는 이 사이트의 약속에 따라 ι ∘ g 와 f 가 같은 집합임을 밝히고 한 점에서의 판도 진술한다. (4)와 (5)의 증명은 이 항목이 쓴 것이다. (5)는 출처가 homeomorphisms.tex:56 에서 정의하는 embedding('f : X → f(X) 가 위상동형사상')과 같은 꼴이고, 출처 59–60줄의 예(포함함수는 embedding 이다)는 (5)에서 f 를 항등함수로 둔 경우와 같은 결론이다. 반례 '열린 부분집합이 아닌 U 의 한 예'은 출처 weird-opens-subspace-example(topological-spaces.tex:374–377, [0, ∞) 안의 [0, 1))와 같은 발상(부분집합 안에서는 열려 있지만 전체에서는 아닌 집합)을 쓴다. Lebl, Basic Analysis I 연습문제 3.2.7(p.128, S ⊆ ℝ 위의 연속함수를 A ⊆ S 로 제한해도 연속이다)은 (2)를, 연습문제 3.2.8(p.128, (c − α, c + α) ⊆ S 이고 f 를 (c − α, c + α) 로 제한한 것이 c 에서 연속이면 f 는 c 에서 연속이다)은 (4)의 한 방향을 실수의 부분집합에서 묻는 것과 같다. 반례 '열린 부분집합이 아닌 U 의 한 예'의 계단 함수는 Lebl Example 3.2.10(p.125, x < 0 에서 −1, x ≥ 0 에서 1)과 같은 꼴의 함수이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 표본 검사에서 일반 문장으로 읽히는 반례 제목이 나와 같은 종류를 전부 다시 보고 6건을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합은 [[topological-space]]의 것이고, 부분공간 위상 $\mathcal{T}|_Y$와 "$Y$에서 열린"은 [[subspace-topology]]의 것이다. 연속과 "$x$에서 연속"은 [[continuous-map|위상공간 사이의 연속함수]]의 것이고, 위상동형사상은 [[homeomorphism|위상동형사상]]의 것이며, "거칠다"는 [[comparing-topologies]]의 것이다. 함수의 제한 $f|_A$는 [[adding-or-removing-an-element]]의 것이고, 공역은 [[function]]의 "공역은 선언하기 나름이다"에서와 같이 $f : A \to B$라고 쓸 때 밝힌 $B$이다. 아래에서 $(X, \mathcal{T}_X)$, $(W, \mathcal{T}_W)$, $(Z, \mathcal{T}_Z)$는 위상공간이고, $X$의 부분집합에는 따로 밝히지 않으면 $\mathcal{T}_X$의 부분공간 위상을 준다.

1. (포함함수) $Y \subseteq X$이고 $\iota = \{(y, y) : y \in Y\}$라 하자. $\iota$는 $Y$에서 $X$로의 함수이고 모든 $y \in Y$에서 $\iota(y) = y$이다. 이것을 **포함함수**(inclusion map)라 한다. 모든 $U \subseteq X$에서 $\iota^{-1}(U) = U \cap Y$이다.
   - (i) $\iota : (Y, \mathcal{T}_X|_Y) \to (X, \mathcal{T}_X)$는 연속이다.
   - (ii) $\mathcal{S}$가 $Y$ 위의 위상이면, $\iota : (Y, \mathcal{S}) \to (X, \mathcal{T}_X)$가 연속인 것은 정확히 $\mathcal{T}_X|_Y \subseteq \mathcal{S}$일 때이다. 곧 부분공간 위상은 포함함수를 연속으로 하는 $Y$ 위의 위상 가운데 가장 거칠다.
2. (제한) $f : X \to W$가 함수이고 $Y \subseteq X$이면 모든 $V \subseteq W$에서 $(f|_Y)^{-1}(V) = f^{-1}(V) \cap Y$이다. $f$가 연속이면 $f|_Y : Y \to W$는 연속이다. $y \in Y$이고 $f$가 $y$에서 연속이면 $f|_Y$는 $y$에서 연속이다.
3. (공역을 줄이기와 키우기) $Y \subseteq X$이고 $f : Z \to X$가 함수이며 모든 $z \in Z$에서 $f(z) \in Y$라 하자. 그러면 같은 집합 $f$는 $Z$에서 $Y$로의 함수이기도 하다. 이것을 $f_Y : Z \to Y$라 쓰면 $\iota \circ f_Y$는 집합으로서 $f$와 같고, 모든 $U \subseteq X$에서 $f_Y^{-1}(U \cap Y) = f^{-1}(U)$이다. 또 다음이 성립한다.
   - (i) $f_Y : (Z, \mathcal{T}_Z) \to (Y, \mathcal{T}_X|_Y)$가 연속인 것은 정확히 $f : (Z, \mathcal{T}_Z) \to (X, \mathcal{T}_X)$가 연속일 때이다.
   - (ii) $z \in Z$이면, $f_Y$가 $z$에서 연속인 것은 정확히 $f$가 $z$에서 연속일 때이다.
   - (iii) 특히 $g : Z \to W$가 함수이면 상 $g(Z) \subseteq W$에 부분공간 위상을 줄 때, $g$를 $Z$에서 $g(Z)$로의 함수로 본 것이 연속인 것은 정확히 $g : Z \to W$가 연속일 때이다.
4. (열린집합에서의 국소성) $f : X \to W$가 함수이고, $U$가 $X$의 열린집합이며 $x \in U$라 하자. $f$가 $x$에서 연속인 것은 정확히 $f|_U : (U, \mathcal{T}_X|_U) \to (W, \mathcal{T}_W)$가 $x$에서 연속일 때이다.
5. (위상동형사상의 제한) $f : X \to W$가 위상동형사상이고 $A \subseteq X$이면, $f|_A$를 $A$에서 $f(A)$로의 함수로 본 것은 위상동형사상이다. 여기서 $A$에는 $\mathcal{T}_X$의, $f(A)$에는 $\mathcal{T}_W$의 부분공간 위상을 준다. 따라서 $A \simeq f(A)$이다.
:::

:::english
Topological spaces and open sets are as in the entry on topological spaces, and the subspace topology $\mathcal{T}|_Y$ and "open in $Y$" are as in the entry on the subspace topology. Continuity and "continuous at $x$" are as in the entry on continuous maps between topological spaces, homeomorphisms are as in the entry on homeomorphisms, and "coarser" is as in the entry on comparing topologies. The restriction $f|_A$ of a function is as in the entry on restrictions, and the codomain is, as in "the codomain is a matter of declaration" in the entry on functions, the $B$ named when we write $f : A \to B$. Throughout, $(X, \mathcal{T}_X)$, $(W, \mathcal{T}_W)$, $(Z, \mathcal{T}_Z)$ are topological spaces, and a subset of $X$ is given the subspace topology of $\mathcal{T}_X$ unless stated otherwise.

1. (The inclusion map) Let $Y \subseteq X$ and $\iota = \{(y, y) : y \in Y\}$. Then $\iota$ is a function from $Y$ to $X$ with $\iota(y) = y$ for every $y \in Y$; it is called the **inclusion map**. For every $U \subseteq X$ we have $\iota^{-1}(U) = U \cap Y$.
   - (i) $\iota : (Y, \mathcal{T}_X|_Y) \to (X, \mathcal{T}_X)$ is continuous.
   - (ii) If $\mathcal{S}$ is a topology on $Y$, then $\iota : (Y, \mathcal{S}) \to (X, \mathcal{T}_X)$ is continuous exactly when $\mathcal{T}_X|_Y \subseteq \mathcal{S}$. That is, the subspace topology is the coarsest topology on $Y$ making the inclusion map continuous.
2. (Restriction) If $f : X \to W$ is a function and $Y \subseteq X$, then $(f|_Y)^{-1}(V) = f^{-1}(V) \cap Y$ for every $V \subseteq W$. If $f$ is continuous, then $f|_Y : Y \to W$ is continuous. If $y \in Y$ and $f$ is continuous at $y$, then $f|_Y$ is continuous at $y$.
3. (Shrinking and enlarging the codomain) Let $Y \subseteq X$, let $f : Z \to X$ be a function, and suppose $f(z) \in Y$ for every $z \in Z$. Then the same set $f$ is also a function from $Z$ to $Y$. Writing it as $f_Y : Z \to Y$, the set $\iota \circ f_Y$ equals $f$, and $f_Y^{-1}(U \cap Y) = f^{-1}(U)$ for every $U \subseteq X$. Moreover, the following hold.
   - (i) $f_Y : (Z, \mathcal{T}_Z) \to (Y, \mathcal{T}_X|_Y)$ is continuous exactly when $f : (Z, \mathcal{T}_Z) \to (X, \mathcal{T}_X)$ is continuous.
   - (ii) If $z \in Z$, then $f_Y$ is continuous at $z$ exactly when $f$ is continuous at $z$.
   - (iii) In particular, if $g : Z \to W$ is a function and the image $g(Z) \subseteq W$ is given the subspace topology, then $g$ regarded as a function from $Z$ to $g(Z)$ is continuous exactly when $g : Z \to W$ is continuous.
4. (Locality on open sets) Let $f : X \to W$ be a function, let $U$ be an open set of $X$, and let $x \in U$. Then $f$ is continuous at $x$ exactly when $f|_U : (U, \mathcal{T}_X|_U) \to (W, \mathcal{T}_W)$ is continuous at $x$.
5. (Restricting a homeomorphism) If $f : X \to W$ is a homeomorphism and $A \subseteq X$, then $f|_A$ regarded as a function from $A$ to $f(A)$ is a homeomorphism. Here $A$ carries the subspace topology of $\mathcal{T}_X$ and $f(A)$ that of $\mathcal{T}_W$. Hence $A \simeq f(A)$.
:::

## 직관

부분공간 위상은 "열린집합을 $Y$로 잘라 낸 조각"이었습니다. 포함함수 $\iota$의 역상이 바로 그 조각 $U \cap Y$이므로, $\iota$가 연속이 되려면 $Y$에 적어도 이 조각들이 열린집합으로 들어 있어야 하고, 부분공간 위상은 딱 그만큼만 넣은 위상입니다((1)). 연속함수의 제한이 연속이라는 것((2))도 같은 계산입니다. 역상을 구한 다음 $Y$로 자르면 됩니다.

(3)은 이 사이트가 함수를 순서쌍의 집합으로 보는 데서 나오는 약속을 위상으로 옮긴 것입니다. 같은 집합 $f$를 공역 $X$의 함수로도, 값을 모두 담는 더 작은 공역 $Y$의 함수로도 볼 수 있는데, $Y$에 부분공간 위상을 주면 두 쪽의 연속이 정확히 같습니다. 다만 $Y$에 부분공간 위상이 아닌 다른 위상을 주면 이 일치는 깨질 수 있습니다.

(4)는 "한 점에서 연속인지는 그 점 둘레만 보면 된다"는 말을 열린집합 $U$로 적은 것입니다. $U$가 열려 있다는 가정이 중요합니다. $U$ 안에서 열린집합이 $X$에서도 열려 있어야 $f|_U$의 근방을 $f$의 근방으로 쓸 수 있기 때문입니다(아래 반례).

## 증명

:::idea
모든 계산은 역상을 $Y$로 자르는 등식 $\iota^{-1}(U) = U \cap Y$, $(f|_Y)^{-1}(V) = f^{-1}(V) \cap Y$, $f_Y^{-1}(U \cap Y) = f^{-1}(U)$와 부분공간 위상의 정의로 끝난다. (4)에서는 열린 $U$ 안에서 열린집합이 $X$에서 열린집합이라는 것을, (5)에서는 위상동형사상의 판정 "서로 거꾸로인 두 연속함수"를 쓴다.
:::

:::hint
$(f|_Y)^{-1}(V)$의 원소 $y$는 $y \in Y$이고 $f|_Y(y) = f(y) \in V$인 점입니다.
:::

:::hint
(5)에서 역함수 후보는 $f$의 역함수를 $f(A)$로 제한하고 공역을 $A$로 줄인 것입니다.
:::

:::proof
[[subspace-topology]]의 정의에 의해 집합 $C$가 $\mathcal{T}_X|_Y$의 원소인 것은 정확히 $C = U \cap Y$인 $U \in \mathcal{T}_X$가 있을 때이다. 이것을 (가)라 부른다. 역상과 상은 [[image-and-preimage]]의 (1), (2)의 원소 조건으로 계산한다.

**(1).** [[adding-or-removing-an-element]]의 함수의 제한을 항등함수 $i_X$([[inverse-function]])에 쓰면 $i_X|_Y = \{(x, y) \in i_X : x \in Y\} = \{(y, y) : y \in Y\} = \iota$이므로, $\iota$는 $Y$에서 $X$로의 함수이고 $\iota(y) = i_X(y) = y$이다. $U \subseteq X$이면 $y \in Y$가 $\iota^{-1}(U)$에 속하는 것은 정확히 $\iota(y) = y \in U$일 때이므로 $\iota^{-1}(U) = U \cap Y$이다.
(i) $U \in \mathcal{T}_X$이면 (가)에 의해 $\iota^{-1}(U) = U \cap Y \in \mathcal{T}_X|_Y$이다.
(ii) $\iota : (Y, \mathcal{S}) \to (X, \mathcal{T}_X)$가 연속이라 하자. $C \in \mathcal{T}_X|_Y$이면 (가)에 의해 $C = U \cap Y = \iota^{-1}(U)$인 $U \in \mathcal{T}_X$가 있고, 연속성에 의해 $C \in \mathcal{S}$이다. 거꾸로 $\mathcal{T}_X|_Y \subseteq \mathcal{S}$이면 $U \in \mathcal{T}_X$에서 $\iota^{-1}(U) = U \cap Y \in \mathcal{T}_X|_Y \subseteq \mathcal{S}$이다. [[comparing-topologies]]의 정의에 의해 이것은 $\mathcal{S}$가 $\mathcal{T}_X|_Y$보다 섬세하다는 것, 곧 부분공간 위상이 $\iota$를 연속으로 하는 모든 위상보다 거칠다는 것이다.

**(2).** $y \in Y$가 $(f|_Y)^{-1}(V)$에 속하는 것은 정확히 $f|_Y(y) = f(y) \in V$일 때이므로([[adding-or-removing-an-element]]), $(f|_Y)^{-1}(V) = f^{-1}(V) \cap Y$이다. $f$가 연속이고 $V \in \mathcal{T}_W$이면 $f^{-1}(V) \in \mathcal{T}_X$이므로 (가)에 의해 $(f|_Y)^{-1}(V) \in \mathcal{T}_X|_Y$이다.
한 점에서: $f$가 $y$에서 연속이고 $V$가 $f|_Y(y) = f(y)$를 원소로 갖는 $W$의 열린집합이라 하자. [[continuous-map]]의 정의에 의해 $y \in U$이고 $f(U) \subseteq V$인 $X$의 열린집합 $U$가 있다. $U \cap Y$는 (가)에 의해 $Y$에서 열려 있고 $y \in U \cap Y$이며, $u \in U \cap Y$이면 $f|_Y(u) = f(u) \in f(U) \subseteq V$이므로 $f|_Y(U \cap Y) \subseteq V$이다. 따라서 $f|_Y$는 $y$에서 연속이다.

**(3).** [[function]]의 "공역은 선언하기 나름이다"에 의해 같은 집합 $f$는 $Z$에서 $Y$로의 함수 $f_Y$이고 $f_Y(z) = f(z)$이다. [[function-composition]]에 의해 $\iota \circ f_Y = \{(z, \iota(f_Y(z))) : z \in Z\} = \{(z, f(z)) : z \in Z\}$이고, 이것은 함수 $f$의 순서쌍 전체이므로 집합으로서 $f$와 같다. $U \subseteq X$이면 $z \in Z$가 $f_Y^{-1}(U \cap Y)$에 속하는 것은 정확히 $f(z) \in U \cap Y$일 때이고, $f(z) \in Y$는 늘 성립하므로 이것은 정확히 $f(z) \in U$, 곧 $z \in f^{-1}(U)$일 때이다.
(i) $f$가 연속이라 하자. $Y$에서 열린 $C$는 (가)에 의해 $C = U \cap Y$($U \in \mathcal{T}_X$)이고 $f_Y^{-1}(C) = f^{-1}(U) \in \mathcal{T}_Z$이다. 거꾸로 $f_Y$가 연속이면 $U \in \mathcal{T}_X$에서 $U \cap Y$는 $Y$에서 열려 있으므로 $f^{-1}(U) = f_Y^{-1}(U \cap Y) \in \mathcal{T}_Z$이다.
(ii) $f$가 $z$에서 연속이라 하자. $C$가 $f_Y(z)$를 원소로 갖는 $Y$의 열린집합이면 $C = U \cap Y$인 $U \in \mathcal{T}_X$가 있고 $f(z) \in U$이다. $z \in G$이고 $f(G) \subseteq U$인 $Z$의 열린집합 $G$가 있고, $g \in G$이면 $f_Y(g) = f(g) \in U$이고 $f(g) \in Y$이므로 $f_Y(G) \subseteq U \cap Y = C$이다. 거꾸로 $f_Y$가 $z$에서 연속이고 $U$가 $f(z)$를 원소로 갖는 $X$의 열린집합이면, $U \cap Y$는 $f_Y(z)$를 원소로 갖는 $Y$의 열린집합이므로 $z \in G$이고 $f_Y(G) \subseteq U \cap Y$인 $Z$의 열린집합 $G$가 있다. $f(G) = f_Y(G) \subseteq U$이다.
(iii) [[image-and-preimage]]의 (1)에 의해 모든 $z \in Z$에서 $g(z) \in g(Z)$이고 $g(Z) \subseteq W$이므로, (i)을 $X = W$, $Y = g(Z)$, $f = g$에 쓴다.

**(4).** $f$가 $x$에서 연속이면 (2)의 한 점에서의 판에 의해 $f|_U$는 $x$에서 연속이다. 거꾸로 $f|_U$가 $x$에서 연속이라 하고, $V$가 $f(x)$를 원소로 갖는 $W$의 열린집합이라 하자. $f|_U(x) = f(x) \in V$이므로 $x \in G$이고 $f|_U(G) \subseteq V$인, $U$에서 열린 $G$가 있다. $U$는 $X$에서 열려 있으므로 [[subspace-topology]]의 (3)의 (ii)에 의해 $G$는 $X$에서 열려 있다. $G \subseteq U$이고 $g \in G$에서 $f(g) = f|_U(g)$이므로 $f(G) = f|_U(G) \subseteq V$이다. 따라서 $f$는 $x$에서 연속이다.

**(5).** $f$의 역함수를 $k : W \to X$라 하자. [[homeomorphism]]의 정의에 의해 $f$와 $k$는 연속이다. $B = f(A)$로 두고, $h$를 $f|_A$를 $A$에서 $B$로의 함수로 본 것이라 하자. [[image-and-preimage]]의 (1)에 의해 모든 $a \in A$에서 $f|_A(a) = f(a) \in B$이므로 이렇게 볼 수 있다. (2)에 의해 $f|_A : A \to W$는 연속이고, (3)의 (i)에 의해 $h : A \to B$는 연속이다.
$w \in B$이면 $w = f(a)$인 $a \in A$가 있고 $k(w) = k(f(a)) = a \in A$이다([[inverse-function]]). 따라서 $k|_B$의 값은 모두 $A$에 속하고, (2)에 의해 $k|_B : B \to X$는 연속이며 (3)의 (i)에 의해 $k|_B$를 $B$에서 $A$로의 함수로 본 $m : B \to A$는 연속이다. $a \in A$이면 $m(h(a)) = k(f(a)) = a$이고, $w \in B$이면 $h(m(w)) = f(k(w)) = w$이다. 곧 $m \circ h = i_A$, $h \circ m = i_B$이다. [[homeomorphism]]의 (5)에 의해 $h : A \to B$는 전단사이고 $m$은 그 역함수이며, $h$와 $m$이 모두 연속이므로 $h$는 위상동형사상이다.
:::

## 예시와 반례

:::example[반열린구간으로 공역 줄이기]
$\mathbb{R}$에 보통 위상을 주고 $f(x) = x \cdot 2^{-1}$로 정한 함수 $f : \mathbb{R} \to \mathbb{R}$를 생각합니다. [[homeomorphism-examples]]의 (1)에 의해 $f$는 위상동형사상입니다. $A = [0, 2)$로 두면 $f(A) = [0, 1)$입니다. $0 \le x < 2$인 것과 $0 \le x \cdot 2^{-1} < 1$인 것은 [[order-properties-of-reals]]의 (6)의 (iv)(양수 $2^{-1}$을 곱하기)에 의해 같은 말이고, $y \in [0, 1)$이면 $y = f(2y)$이며 $2y \in A$이기 때문입니다. (5)에 의해 $f|_A$를 $[0, 2)$에서 $[0, 1)$로의 함수로 본 것은 위상동형사상이고, 두 반열린구간에는 각각 보통 위상의 부분공간 위상을 줍니다. 따라서 $[0, 2) \simeq [0, 1)$입니다.

같은 $f|_A$를 공역 $\mathbb{R}$의 함수로 보면 (2)에 의해 연속이지만, 그때는 전사가 아니므로 위상동형사상이 아닙니다. 공역을 상으로 줄여야 (5)의 말이 됩니다.
:::

:::counterexample[열린 부분집합이 아닌 U 의 한 예]
(4)에서 $U$가 열려 있다는 가정을 빼면 결론이 깨질 수 있습니다. $\mathbb{R}$(보통 위상)에서 $f(x) = 0$ ($x < 0$), $f(x) = 1$ ($0 \le x$)로 정한 함수 $f : \mathbb{R} \to \mathbb{R}$([[recursion-theorem]]의 (1)로 정한 함수)와 $U = \{x \in \mathbb{R} : 0 \le x\}$를 봅니다. $f|_U$는 값이 늘 $1$인 상수함수이므로 [[continuous-map]]의 (2)에 의해 연속이고, 특히 $0$에서 연속입니다.

그러나 $f$는 $0$에서 연속이 아닙니다. 열린구간 $V = (\tfrac{1}{2}, \tfrac{3}{2})$는 $f(0) = 1$을 원소로 갖는 열린집합이고([[open-and-closed-sets-of-reals]]의 (1)과 [[standard-topology-on-reals]]의 (5)), $0$을 원소로 갖는 $\mathbb{R}$의 열린집합 $G$에는 어떤 음수 $t$가 들어 있어 $f(t) = 0 \notin V$이기 때문입니다. 실제로 [[open-set-in-metric-space]]의 정의와 [[open-ball]]의 (5)에 의해 $(-r, r) \subseteq G$인 $r > 0$이 있고, $t = -r \cdot 2^{-1}$로 잡으면 [[order-properties-of-reals]]의 (8)과 (3)의 (iii)에 의해 $-r < t < 0$입니다. $U$는 $\mathbb{R}$에서 열려 있지 않습니다([[open-and-closed-sets-of-reals]]의 (4)). $U$ 안에서는 $U$ 자신이 $0$의 근방이지만 $\mathbb{R}$에서는 그렇지 않아서, $f|_U$의 근방을 $f$의 근방으로 쓸 수 없습니다.
:::

## 확인 질문

:::check[$a \ne b$이고 $X = \{a, b\}$에 밀착위상을 줄 때, $Y = \{a\}$ 위의 위상 가운데 포함함수 $\iota : Y \to X$를 연속으로 하는 것은 무엇인가?]
$\{a\}$ 위의 위상은 $\{\emptyset, \{a\}\}$ 하나뿐이고([[topological-space]]의 조건 (i)에 의해 $\emptyset$과 $\{a\}$가 들어 있어야 하고 $\mathscr{P}(\{a\})$의 원소는 이 둘뿐입니다), (1)의 (ii)에 의해 $\iota$를 연속으로 하는 것은 $\mathcal{T}_X|_Y = \{\emptyset \cap Y, X \cap Y\} = \{\emptyset, \{a\}\}$를 포함하는 위상이므로 이것이 답입니다. 원소가 하나인 집합에서는 부분공간 위상이 유일한 위상과 같습니다.
:::

:::check[$g : Z \to W$가 상수함수이고 값이 $w_0$이면, $g$를 $Z$에서 $g(Z)$로의 함수로 본 것은 연속인가?]
연속입니다. [[continuous-map]]의 (2)에 의해 $g : Z \to W$는 연속이므로 (3)의 (iii)에 의해 그렇습니다. $Z \ne \emptyset$이면 $g(Z) = \{w_0\}$이고, $Z = \emptyset$이면 $g(Z) = \emptyset$이며 $g$는 공집합인 함수입니다([[continuous-map]]의 (7)).
:::
