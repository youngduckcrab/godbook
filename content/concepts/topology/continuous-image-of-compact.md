---
title: 콤팩트 공간의 연속 상과 위상동형 판정
title_en: Continuous Images of Compact Spaces and a Homeomorphism Criterion
aliases: [연속 상, continuous image of a compact space, 콤팩트에서 하우스도르프로 가는 연속 전단사, continuous bijection from compact to Hausdorff, 닫힌 사상, closed map]
kind: theorem
field: topology
msc: ["54D30", "54C05"]
level: undergrad
summary: 연속함수는 콤팩트 집합을 콤팩트 집합으로 보낸다. 콤팩트 공간에서 하우스도르프 공간으로 가는 연속함수는 닫힌 사상이고, 연속 전단사는 위상동형사상이며, 연속 단사는 그 상과의 위상동형을 준다. 두 가정 가운데 하나를 빼면 깨질 수 있다.
requires: [set, subset, set-operations, function, injective-surjective-bijective, image-and-preimage, preimage-and-set-operations, finite-set, adding-or-removing-an-element, real-number-arithmetic, absolute-value, interval, topological-space, topology-examples, closed-set, open-set-in-metric-space, open-and-closed-sets-of-reals, standard-topology-on-reals, lower-limit-topology, subspace-topology, metric-subspace-topology, continuous-map, homeomorphism, subspace-and-continuity, homeomorphism-examples, hausdorff-space, metric-space-is-hausdorff, hausdorff-subspace-and-product, compact-space, closed-subset-of-compact, compact-subset-of-hausdorff-is-closed]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Compactness 절의 Theorem funcs-compact 와 Corollary cont-compact-Hausdorff, compact-quotient 와 증명, content/compactness.tex:55–77; 예 s1-compact, 78–81; Local compactness and one-point compactification 절의 proper 의 정의, 404–406; content/homeomorphisms.tex:63; Basis for a topology 절의 Lemma, content/topological-spaces.tex:180–188; 연습문제 1.3, content/exercises.tex:14"
    checked: original
    note: "(1)의 둘째 문장(X 가 콤팩트인 경우)과 (3)의 (i)은 출처 Theorem funcs-compact(55–58)와 같은 진술이고, (3)의 (ii)는 Corollary cont-compact-Hausdorff(64–67)와 같은 진술이다. 출처는 Corollary compact-quotient(71–77)에서 몫사상이 연속이고 전사라는 것으로 몫공간의 콤팩트를 얻는다. (1)의 끝 문장(연속 전사이면 Y 가 콤팩트)과 같은 내용이고, 출처의 예 s1-compact(78–81)도 [0, 1] 에서 S¹ 로 가는 연속 전사로 S¹ 의 콤팩트를 얻는다. 출처의 첫 부분 증명(60)은 f(X) 의 열린 덮개 {U_i}_{i∈I} 에서 V_i = f⁻¹(U_i) 로 X 의 열린 덮개를 만들고, 유한 부분덮개의 첨수에 대응하는 U_i 들을 쓴다. 이 항목은 첨수를 쓰지 않으므로, f(S) 가 유한 부분족으로 덮이는 S 전체의 집합족에 compact-space 의 (1)을 써서 유한 부분덮개의 원소마다 원래의 열린집합을 고르지 않는다. 또 이 항목은 바깥 공간 Y 의 열린집합으로 판정하는 compact-space 의 (3)을 쓰므로 f 의 공역을 f(X) 로 줄이지 않는다. 출처의 둘째 부분 증명(62)은 열린 U 에 대해 f(U)ᶜ = f(Uᶜ) 가 콤팩트이므로 닫혀 있다는 것으로 역함수의 연속을 보이고, 이 항목은 그것을 (2)의 닫힌 사상으로 적은 뒤 homeomorphism 의 (1)을 쓴다. 출처의 Corollary 의 증명(69)은 f(X) 가 하우스도르프라는 것을 연습문제(subspace-Hausdorff)로 돌리고, 이 항목은 hausdorff-subspace-and-product 의 (1)을 인용한다. (4)의 (i)의 함수는 homeomorphism 의 (4)의 것이고, 같은 두 위상은 출처 content/homeomorphisms.tex:63 이 서로 다른 위상공간의 예로 든다. (4)의 (i)과 예시 '여유한 위상에서 보통 위상으로 가는 항등함수'는 출처 연습문제 1.3(exercises.tex:14: 두 위상 사이의 항등함수가 언제 연속인가)과 같은 대상을 다룬다. (4)의 (ii)가 쓰는 '보통 위상은 아래끝 위상에 포함된다'는 출처 content/topological-spaces.tex:180–183 의 Lemma(ℝ_l 은 보통 위상보다 진짜로 섬세하다)와 같은 결론이다. 반례 '역상은 콤팩트를 보존하지 않을 수 있다'와 관련해, 출처 404–406 은 콤팩트 집합의 역상이 늘 콤팩트인 연속함수를 proper 라 부른다."
  - ref: lebl-basic-analysis
    loc: "7.5.2절 첫 문단과 Lemma 7.5.5 (p.289), 연습문제 7.5.7, 7.5.8 (p.294); 7.4.3절 연습문제 7.4.19 (p.286)"
    checked: original
    note: "출처 Lemma 7.5.5(p.289)는 거리공간 사이의 연속함수가 콤팩트 집합을 콤팩트 집합으로 보낸다고 진술하고, 증명은 수열과 수렴하는 부분수열로 한다. 이 항목의 (1)과 같은 진술이고 증명은 열린 덮개로 한다. 7.5.2절 첫 문단(p.289)은 연속함수가 닫힌집합을 닫힌집합으로 보내지 않는 예로 f(x) = x 인 f : (0, 1) → ℝ 를 든다. (4)의 (iii)은 같은 현상을 다른 함수 ℝ → ℝ 로 보인 것이고, 그 함수 h(y) = y/(1 + |y|) 는 연습문제 7.4.19(p.286)의 거리 d′(x, y) = |x/(1 + |x|) − y/(1 + |y|)| 에 쓰인 함수와 같다. 연습문제 7.5.8(p.294)은 콤팩트 거리공간에서 가는 연속 전단사의 역함수가 연속임을 보이라고 한다. 이 항목의 (3)의 (i)을 거리위상에 쓴 것과 같은 결론이다(거리공간은 하우스도르프 공간이다). 반례 '역상은 콤팩트를 보존하지 않을 수 있다'와 관련해, 연습문제 7.5.7(p.294)은 콤팩트 집합의 역상이 늘 콤팩트인 연속함수를 proper 라 부른다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우에서 거짓이던 직관 문장 2건, 다른 항목의 증명을 근거로 삼은 곳, 넘겨짚은 단원 글 문장을 고쳤다."
added: 2026-11-19
---

:::statement
콤팩트 공간과 콤팩트 부분집합(콤팩트 집합), $\mathcal{K}_{\mathcal{U}}$와 유한 합집합의 보조정리는 [[compact-space]]의 것이다. 연속은 [[continuous-map|위상공간 사이의 연속함수]]의 것이고, 위상동형사상, $\simeq$, 닫힌 사상은 [[homeomorphism|위상동형사상]]의 것이며, 하우스도르프 공간은 [[hausdorff-space]]의 것이다. 부분공간 위상은 [[subspace-topology]]의 것이고, 함수의 공역을 그 상으로 줄인 것은 [[subspace-and-continuity|부분공간 위상과 연속]]의 (3)의 것이다. 아래에서 $(X, \mathcal{T}_X)$, $(Y, \mathcal{T}_Y)$는 위상공간이고 $f : X \to Y$는 함수이다. $f(X)$에는 $\mathcal{T}_Y$의 부분공간 위상을 준다.

1. (연속 상) $f$가 연속이고 $A$가 $X$의 콤팩트 부분집합이면 $f(A)$는 $Y$의 콤팩트 부분집합이다. 특히 $f$가 연속이고 $X$가 콤팩트이면 $f(X)$는 $Y$의 콤팩트 부분집합이다. 여기에 $f$가 전사이기도 하면 $Y$는 콤팩트이다.
2. (닫힌 사상) $X$가 콤팩트이고 $Y$가 하우스도르프 공간이며 $f$가 연속이면 $f$는 닫힌 사상이다.
3. (위상동형 판정) $X$가 콤팩트이고 $Y$가 하우스도르프 공간이라 하자.
   - (i) $f$가 연속인 전단사이면 $f$는 위상동형사상이다.
   - (ii) $f$가 연속인 단사이면, $f$를 $X$에서 $f(X)$로의 함수로 본 것은 위상동형사상이다. 따라서 $X \simeq f(X)$이다.
4. (가정을 뺀 경우)
   - (i) ($Y$가 하우스도르프가 아닌 경우) $a \ne b$이고 $X = \{a, b\}$이면 항등함수 $i_X : (X, \mathscr{P}(X)) \to (X, \{\emptyset, X\})$는 콤팩트 공간에서 가는 연속인 전단사이지만 위상동형사상이 아니고 닫힌 사상도 아니다.
   - (ii) ($X$가 콤팩트가 아닌 경우) 항등함수 $i_{\mathbb{R}} : \mathbb{R}_l \to \mathbb{R}$는 하우스도르프 공간으로 가는 연속인 전단사이지만 위상동형사상이 아니다.
   - (iii) ($X$가 콤팩트가 아닌 경우의 닫힌 사상) $\mathbb{R}$의 모든 점 $y$에서 $1 + |y| \ne 0$이고, $h(y) = y\,(1 + |y|)^{-1}$로 정한 함수 $h : \mathbb{R} \to \mathbb{R}$는 연속이지만 닫힌 사상이 아니다. $h(\mathbb{R})$은 열린구간 $(-1, 1)$이고 $\mathbb{R}$에서 닫혀 있지 않다.
:::

:::english
Compact spaces and compact subsets (compact sets), $\mathcal{K}_{\mathcal{U}}$ and the lemma on finite unions are as in the entry on open covers and compact spaces. Continuity is as in the entry on continuous maps between topological spaces; homeomorphisms, $\simeq$ and closed maps are as in the entry on homeomorphisms; and Hausdorff spaces are as in the entry on $T_1$ and Hausdorff spaces. The subspace topology is as in the entry on the subspace topology, and shrinking the codomain of a function to its image is as in (3) of the entry on the subspace topology and continuity. Below, $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ are topological spaces and $f : X \to Y$ is a function. The set $f(X)$ carries the subspace topology of $\mathcal{T}_Y$.

1. (Continuous images) If $f$ is continuous and $A$ is a compact subset of $X$, then $f(A)$ is a compact subset of $Y$. In particular, if $f$ is continuous and $X$ is compact, then $f(X)$ is a compact subset of $Y$. If moreover $f$ is surjective, then $Y$ is compact.
2. (Closed maps) If $X$ is compact, $Y$ is a Hausdorff space and $f$ is continuous, then $f$ is a closed map.
3. (A criterion for homeomorphisms) Let $X$ be compact and $Y$ a Hausdorff space.
   - (i) If $f$ is a continuous bijection, then $f$ is a homeomorphism.
   - (ii) If $f$ is a continuous injection, then $f$, regarded as a function from $X$ to $f(X)$, is a homeomorphism. Hence $X \simeq f(X)$.
4. (Dropping a hypothesis)
   - (i) (When $Y$ is not Hausdorff) If $a \ne b$ and $X = \{a, b\}$, then the identity function $i_X : (X, \mathscr{P}(X)) \to (X, \{\emptyset, X\})$ is a continuous bijection from a compact space, but it is neither a homeomorphism nor a closed map.
   - (ii) (When $X$ is not compact) The identity function $i_{\mathbb{R}} : \mathbb{R}_l \to \mathbb{R}$ is a continuous bijection into a Hausdorff space, but it is not a homeomorphism.
   - (iii) (Closed maps when $X$ is not compact) For every point $y$ of $\mathbb{R}$ we have $1 + |y| \ne 0$, and the function $h : \mathbb{R} \to \mathbb{R}$ defined by $h(y) = y\,(1 + |y|)^{-1}$ is continuous but not a closed map. Its image $h(\mathbb{R})$ is the open interval $(-1, 1)$, which is not closed in $\mathbb{R}$.
:::

## 직관

$f(A)$를 덮는 $Y$의 열린집합들이 있으면 그 역상들은 $X$의 열린집합이고 $A$를 덮습니다. $A$가 콤팩트이므로 역상 가운데 유한 개로 $A$가 덮이고, 그 유한 개의 역상을 낸 열린집합들이 $f(A)$를 덮습니다. 연속은 "열린집합의 역상이 열린집합"이라는 첫 단계에서만 쓰입니다. 전사는 필요 없습니다. $f(A)$만 덮으면 되기 때문입니다.

이 강의는 "유한 개의 역상마다 그것을 낸 열린집합을 하나씩 다시 고르는" 단계를 쓰지 않습니다. 같은 역상을 내는 열린집합이 여럿일 수 있기 때문입니다. 대신 "$f(S)$가 유한 개로 덮인다"는 성질을 가진 $S$ 전체에 [[compact-space]]의 (1)을 씁니다. $f(S \cup T) = f(S) \cup f(T)$이므로 이 성질은 두 집합의 합집합으로 넘어갑니다.

비유하자면 연속함수는 도장을 찍는 일입니다. 콤팩트한 판(어떻게 천막을 쳐도 그 가운데 유한 개로 덮이는 판)에 새긴 무늬를 종이에 찍으면, 종이 위의 무늬를 덮는 천막들을 판으로 되돌려 본 것도 판을 덮으므로 유한 개면 충분하고, 종이 위의 무늬도 유한 개의 천막으로 덮입니다. "되돌려 본다"가 역상에, "되돌린 것이 열린집합"이 연속에 맞습니다.

(2)와 (3)은 "콤팩트에서 하우스도르프로"라는 짝이 하는 일입니다. 콤팩트 공간의 닫힌집합은 콤팩트이고([[closed-subset-of-compact]]), 그 상은 콤팩트이며((1)), 하우스도르프 공간의 콤팩트 집합은 닫혀 있습니다([[compact-subset-of-hausdorff-is-closed]]). 그래서 닫힌집합이 닫힌집합으로 가고, 전단사이면 역함수가 연속입니다. (4)는 둘 가운데 하나만 빠져도 이 결론이 깨질 수 있음을 보입니다.

## 증명

:::idea
$f(S)$가 유한 부분족으로 덮이는 $S$ 전체가 두 집합의 합집합에 닫혀 있음을 보이고 유한 합집합의 보조정리를 쓴다. 나머지는 닫힌집합, 콤팩트 집합, 상을 차례로 잇는다.
:::

:::hint
[[compact-space]]의 (3)으로 $f(A)$를 덮는 $Y$의 열린집합들의 집합족 $\mathcal{V}$를 받고, 역상의 집합족 $\{f^{-1}(V) : V \in \mathcal{V}\}$를 봅니다.
:::

:::hint
(3)의 (i)에서는 [[homeomorphism|위상동형사상]]의 (1)을 씁니다. 전단사가 닫힌 사상이면 역함수가 연속입니다.
:::

:::proof
"콤팩트 (1)"처럼 쓴 것은 [[compact-space]]의 번호이고, "역상 (1)"처럼 쓴 것은 [[preimage-and-set-operations]]의 번호이다.

**(1).** 콤팩트 (3)의 (b)를 $f(A) \subseteq Y$에 대해 보인다. $\mathcal{V}$가 $f(A) \subseteq \bigcup \mathcal{V}$인 $Y$의 열린집합들의 집합족이라 하자. 식으로 정한 $X$의 집합족 $\mathcal{U} = \{f^{-1}(V) : V \in \mathcal{V}\}$를 두면, $f$가 연속이므로 $\mathcal{U}$의 원소는 모두 $X$의 열린집합이다. 역상 (1)의 (iii)에 의해 $A \subseteq f^{-1}(f(A))$이고, 역상 (7)과 (2)에 의해 $f^{-1}(f(A)) \subseteq f^{-1}\bigl(\bigcup \mathcal{V}\bigr) = \bigcup \mathcal{U}$이다. 따라서 $A \subseteq \bigcup \mathcal{U}$이고, $A$가 콤팩트 부분집합이므로 콤팩트 (3)의 (a)에서 (b)로 $A \subseteq \bigcup \mathcal{F}$인 $\mathcal{U}$의 유한 부분족 $\mathcal{F}$가 있다.

$Y$의 집합족 $\mathcal{V}$에 대한 콤팩트 (2)의 $\mathcal{K}_{\mathcal{V}}$를 써서
$$
\mathcal{K} = \{S \in \mathscr{P}(X) : f(S) \in \mathcal{K}_{\mathcal{V}}\}
$$
로 둔다. 역상 (5)에 의해 $f(\emptyset) = \emptyset$이고 콤팩트 (2)의 (i)에 의해 $\emptyset \in \mathcal{K}_{\mathcal{V}}$이므로 $\emptyset \in \mathcal{K}$이다. $S$, $T \in \mathcal{K}$이면 역상 (1)의 (ii)에 의해 $f(S \cup T) = f(S) \cup f(T)$이고 콤팩트 (2)의 (ii)에 의해 이것은 $\mathcal{K}_{\mathcal{V}}$에 들므로 $S \cup T \in \mathcal{K}$이다. $\mathcal{U}$의 원소는 어떤 $V \in \mathcal{V}$에 대하여 $f^{-1}(V)$이고, 역상 (1)의 (vi)에 의해 $f(f^{-1}(V)) \subseteq V$이므로 콤팩트 (2)의 (iv)에 의해 $f^{-1}(V) \in \mathcal{K}$이다. 곧 $\mathcal{F} \subseteq \mathcal{U} \subseteq \mathcal{K}$이고, 콤팩트 (1)의 (i)에 의해 $\bigcup \mathcal{F} \in \mathcal{K}$, 곧 $f\bigl(\bigcup \mathcal{F}\bigr) \in \mathcal{K}_{\mathcal{V}}$이다. $A \subseteq \bigcup \mathcal{F}$이므로 역상 (7)에 의해 $f(A) \subseteq f\bigl(\bigcup \mathcal{F}\bigr)$이고, 콤팩트 (2)의 (iii)에 의해 $f(A) \in \mathcal{K}_{\mathcal{V}}$이다. 콤팩트 (3)에 의해 $f(A)$는 $Y$의 콤팩트 부분집합이다.

$X$가 콤팩트이면 콤팩트 집합 단락에 의해 $X$는 $X$의 콤팩트 부분집합이므로 $A = X$로 둔다. $f$가 전사이면 $f(X) = Y$이고([[injective-surjective-bijective|전사]]의 정의와 [[image-and-preimage|상]]의 정의), $Y$가 $Y$의 콤팩트 부분집합이므로 콤팩트 집합 단락에 의해 $Y$는 콤팩트이다.

**(2).** $F$가 $X$의 닫힌집합이면 [[closed-subset-of-compact]]의 (1)에 의해 $F$는 $X$의 콤팩트 부분집합이고, (1)에 의해 $f(F)$는 $Y$의 콤팩트 부분집합이며, [[compact-subset-of-hausdorff-is-closed]]의 (2)에 의해 $f(F)$는 $Y$의 닫힌집합이다. 따라서 $f$는 닫힌 사상이다.

**(3).** (i) (2)에 의해 $f$는 닫힌 사상이다. $f$가 전단사이므로 [[homeomorphism|위상동형사상]]의 (1)에 의해 $f$의 역함수는 연속이다((c)에서 (a)). $f$는 연속인 전단사이고 역함수도 연속이므로 위상동형사상이다.

(ii) $Z = f(X)$라 하자. 모든 $x \in X$에서 $f(x) \in Z$이므로 [[subspace-and-continuity|부분공간 위상과 연속]]의 (3)에 의해 같은 집합 $f$는 $X$에서 $Z$로의 함수 $f_Z$이기도 하고, 그 항목의 (3)의 (iii)에 의해 $f_Z : X \to Z$는 연속이다. 단사는 집합 $f$만으로 정해지므로 $f_Z$는 단사이고, 상의 정의에 의해 $Z$의 모든 원소는 어떤 $x \in X$의 $f(x)$이므로 $f_Z : X \to Z$는 전사이다. [[hausdorff-subspace-and-product|하우스도르프 공간의 부분공간과 곱]]의 (1)에 의해 부분공간 위상을 준 $Z$는 하우스도르프 공간이다. (i)을 $f_Z : X \to Z$에 쓰면 $f_Z$는 위상동형사상이고, $X \simeq Z$이다.

**(4).** (i) [[homeomorphism|위상동형사상]]의 (4)에 의해 $i_X$는 연속인 전단사이지만 위상동형사상이 아니다. [[finite-set]]의 (F2)와 [[adding-or-removing-an-element]]의 (a)를 두 번 쓰면 $\{a\} = \emptyset \cup \{a\}$는 원소를 $1$개, $X = \{a\} \cup \{b\}$는 원소를 $2$개 가지므로 $X$는 유한집합이고, 콤팩트 (8)의 (ii)에 의해 $(X, \mathscr{P}(X))$는 콤팩트이다. [[hausdorff-space]]의 (4)에 의해 $(X, \{\emptyset, X\})$는 하우스도르프 공간이 아니므로 (3)의 (i)과 어긋나지 않는다. 또 [[closed-set]]의 (7)에 의해 $\{a\}$는 이산위상에서 닫힌집합이고 밀착위상에서 닫힌집합이 아니며, $i_X(\{a\}) = \{a\}$이므로 $i_X$는 닫힌 사상이 아니다.

(ii) [[homeomorphism-examples|위상동형의 예]]의 (5)에 의해 $i_{\mathbb{R}} : \mathbb{R}_l \to \mathbb{R}$는 연속인 전단사이지만 위상동형사상이 아니다. [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (3)의 (i)에 의해 $\mathbb{R}$은 하우스도르프 공간이고, 콤팩트 (8)의 (vii)에 의해 $\mathbb{R}_l$은 콤팩트가 아니므로 (3)의 (i)과 어긋나지 않는다.

(iii) $I = (-1, 1)$이라 하자. [[homeomorphism-examples|위상동형의 예]]의 (2)에 의해 모든 실수 $y$에서 $1 + |y| \ne 0$이고, $g(y) = y\,(1 + |y|)^{-1}$로 정한 $g : \mathbb{R} \to I$는 위상동형사상이다. 거기서 $I$에 준 위상은 보통 거리의 부분공간 거리의 거리위상이고, [[metric-subspace-topology]]의 (1)에 의해 부분공간 위상과 같다. 집합으로서 $h$와 $g$는 같고 $h$의 모든 값은 $I$에 들므로, [[subspace-and-continuity|부분공간 위상과 연속]]의 (3)의 (i)에 의해 $g$가 연속이라는 것에서 $h : \mathbb{R} \to \mathbb{R}$가 연속이라는 것이 나온다. $g : \mathbb{R} \to I$가 전사이므로 $h(\mathbb{R}) = g(\mathbb{R}) = I$이다. [[closed-set]]의 (1)에 의해 $\mathbb{R}$은 $\mathbb{R}$의 닫힌집합이고, [[open-and-closed-sets-of-reals]]의 (4)에 의해 $I$는 보통 거리에서 닫힌집합이 아니며, [[closed-set]]의 (6)과 [[standard-topology-on-reals]]의 (5)에 의해 보통 위상에서도 닫힌집합이 아니다. 따라서 $h$는 닫힌 사상이 아니다. 콤팩트 (8)의 (vi)에 의해 $\mathbb{R}$은 콤팩트가 아니므로 (2)와 어긋나지 않는다.
:::

## 예시와 반례

:::example[여유한 위상에서 보통 위상으로 가는 항등함수]
$\mathbb{R}$에 여유한 위상 $\mathcal{T}_{\mathrm{cof}}$를 준 공간은 [[compact-space]]의 (8)의 (v)에 의해 콤팩트입니다. 항등함수 $i_{\mathbb{R}} : (\mathbb{R}, \mathcal{T}_{\mathrm{cof}}) \to \mathbb{R}$(보통 위상)가 연속이라면 전사이므로 (1)에 의해 보통 위상을 준 $\mathbb{R}$이 콤팩트가 되어야 하는데, [[compact-space]]의 (8)의 (vi)에 의해 그렇지 않습니다. 따라서 이 항등함수는 연속이 아닙니다. 열린집합을 하나도 따지지 않고 콤팩트성만으로 연속이 아님을 안 것입니다.
:::

:::counterexample[역상은 콤팩트를 보존하지 않을 수 있다]
(1)은 상에 대한 것이고 역상에 대해서는 같은 것이 성립하지 않을 수 있습니다. 모든 $x$에서 값이 $0$인 상수함수 $c : \mathbb{R} \to \mathbb{R}$는 [[continuous-map|위상공간 사이의 연속함수]]의 (2)에 의해 연속이고, $\{0\}$은 [[compact-space]]의 (8)의 (ii)에 의해 콤팩트 부분집합입니다. 그러나 역상 $c^{-1}(\{0\}) = \mathbb{R}$은 [[compact-space]]의 (8)의 (vi)에 의해 콤팩트가 아닙니다.
:::

## 확인 질문

:::check[$X$가 콤팩트이고 $Y$가 하우스도르프이며 $f : X \to Y$가 연속이면 $f$는 열린 사상인가?]
그렇지 않을 수 있습니다. 한 점 공간 $X = \{0\}$(위상은 $\{\emptyset, X\}$)에서 $\mathbb{R}$로 가는 함수 $f(0) = 0$은 상수함수이므로 연속이고, $X = \emptyset \cup \{0\}$은 [[finite-set]]의 (F2)와 [[adding-or-removing-an-element]]의 (a)에 의해 유한집합이라 [[compact-space]]의 (8)의 (ii)에 의해 콤팩트이며, $\mathbb{R}$은 하우스도르프입니다. $X$는 $X$에서 열린집합이지만 $f(X) = \{0\}$은 [[open-set-in-metric-space]]의 (6)에 의해 보통 거리에서 열린집합이 아니고, [[standard-topology-on-reals]]의 (5)에 의해 보통 위상에서도 열린집합이 아닙니다. (2)는 닫힌집합에 대한 것입니다.
:::

:::check[(3)의 (ii)의 상황에서 $f(X)$는 $Y$에서 닫혀 있는가?]
닫혀 있습니다. (1)에 의해 $f(X)$는 $Y$의 콤팩트 부분집합이고, $Y$가 하우스도르프이므로 [[compact-subset-of-hausdorff-is-closed]]의 (2)에 의해 닫힌집합입니다. 단사라는 가정은 이 결론에 쓰이지 않습니다.
:::
