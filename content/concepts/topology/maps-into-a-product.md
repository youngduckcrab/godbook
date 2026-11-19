---
title: 사영과 곱으로 가는 함수
title_en: Projections and Maps into a Product
aliases: [사영의 연속, projections are continuous, 곱으로 가는 함수의 연속, maps into a product, 성분함수, 각 변수에 대한 연속, 두 인자 맞바꾸기]
kind: theorem
field: topology
msc: ["54B10"]
level: undergrad
summary: 두 사영은 연속인 열린 사상이지만 닫힌 사상이 아닐 수 있다. 곱공간으로 가는 함수가 연속인 것은 두 성분이 연속일 때이고, 곱위상은 두 사영을 연속으로 하는 가장 거친 위상이다. 연속함수 둘을 짝지은 함수는 연속이고, 한 성분을 고정하는 함수는 한 인자와 그 단면 사이의 위상동형사상이며, 두 인자를 맞바꾸어도 위상동형이다.
requires: [set, subset, cartesian-product, function, function-composition, inverse-function, recursion-theorem, image-and-preimage, preimage-and-set-operations, family-of-sets, topological-space, topology-examples, closed-set, neighborhood, basis-generates-by-unions, subspace-topology, product-topology, continuous-map, continuity-criteria, composition-of-continuous-maps, homeomorphism, homeomorphism-examples, subspace-and-continuity, absolute-value, metric-space-examples, order-properties-of-reals, archimedean-property, interval, open-ball, open-set-in-metric-space, open-and-closed-sets-of-reals, standard-topology-on-reals]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "The product topology 절의 정의와 Theorem, content/topological-spaces.tex:509–532; 연습문제 1.17, 3.8, content/exercises.tex:63, 114–121; Compactness 장 튜브 보조정리의 증명, content/compactness.tex:93; Connectedness 장 Theorem products-connected 의 증명, content/connectedness.tex:110"
    checked: original
    note: "(2)는 출처의 Theorem(523–532)을 두 공간으로 좁힌 것이다. 출처는 사영의 연속을 곱위상의 정의('사영을 모두 연속으로 하는 가장 거친 위상', 512–514)에서 얻고 뒤 방향을 부분기저로 보인다. 이 항목은 곱위상을 기저로 정의했으므로 사영의 연속은 역상 U × X₂ 로, (2)의 뒤 방향은 기저 판정으로 보이고, 한 점에서의 판도 진술한다. (3)은 출처가 정의로 삼은 성질을 정리로 되찾은 것이다. (1)의 열린 사상과 (1)의 (iii)의 반례, (4), (5)의 증명은 이 항목이 쓴 것이다. (1)의 (iii)과 관련해 출처 연습문제 3.8 (a)(exercises.tex:114–117)는 Y 가 콤팩트이면 사영 X × Y → X 가 닫힌 사상임을 보이라고 한다. (4)의 y 를 (x₀, y) 로 보내는 함수의 연속은 출처가 튜브 보조정리의 증명(compactness.tex:93)과 곱의 연결의 증명(connectedness.tex:110)에서 쓰는 것이고, (4)의 끝 문장(연속인 F 는 각 변수에 대하여 연속)은 출처 연습문제 1.17(exercises.tex:63)과 같은 결론이다. (1)의 (iii)의 집합 {n⁻¹ : n ∈ ℕ} 은 출처 compactness.tex:24 의 부분공간 {1/n | n ∈ ℕ} 과 같은 대상이다. 예시 '직선 위의 그래프'의 L 은 함수의 그래프이고, 출처 연습문제 3.8 (b)(exercises.tex:118–121)가 함수의 그래프 G_f 를 다룬다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 표본 검사에서 일반 문장으로 읽히는 반례 제목이 나와 같은 종류를 전부 다시 보고 6건을 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 열린집합은 [[topological-space]]의 것이고, 곱위상 $\mathcal{T}_1 \otimes \mathcal{T}_2$, 그 기저 $\mathcal{B}$, 사영 $\pi_1$, $\pi_2$는 [[product-topology|두 공간의 곱위상]]의 것이며, 부분공간 위상은 [[subspace-topology]]의 것이다. 연속, "$x$에서 연속", 위상동형사상, 열린 사상, 닫힌 사상은 [[continuous-map|위상공간 사이의 연속함수]]와 [[homeomorphism|위상동형사상]]의 것이고, 합성은 [[function-composition|함수의 합성]]의 것이다. 아래에서 $(X_1, \mathcal{T}_1)$, $(X_2, \mathcal{T}_2)$, $(Z, \mathcal{T}_Z)$, $(W, \mathcal{T}_W)$는 위상공간이고, 곱집합에는 곱위상을, 곱집합의 부분집합에는 곱위상의 부분공간 위상을 준다.

1. (사영)
   - (i) $\pi_1 : X_1 \times X_2 \to X_1$과 $\pi_2 : X_1 \times X_2 \to X_2$는 연속이다.
   - (ii) $\pi_1$과 $\pi_2$는 열린 사상이다.
   - (iii) 사영은 닫힌 사상이 아닐 수 있다. $X_1 = \mathbb{R}$에 보통 위상을, $X_2 = \mathbb{N}$에 이산위상을 주면 $F = \{(n^{-1}, n) : n \in \mathbb{N}\}$은 $\mathbb{R} \times \mathbb{N}$에서 닫혀 있지만 $\pi_1(F) = \{n^{-1} : n \in \mathbb{N}\}$은 $\mathbb{R}$에서 닫혀 있지 않다.
2. (곱으로 가는 함수) $f : Z \to X_1 \times X_2$가 함수이고 $z \in Z$라 하자. $f$가 $z$에서 연속인 것은 정확히 $\pi_1 \circ f$와 $\pi_2 \circ f$가 둘 다 $z$에서 연속일 때이다. 따라서 $f$가 연속인 것은 정확히 $\pi_1 \circ f : Z \to X_1$과 $\pi_2 \circ f : Z \to X_2$가 둘 다 연속일 때이다.
3. (가장 거친 위상) $\mathcal{S}$가 $X_1 \times X_2$ 위의 위상이면, $\pi_1 : (X_1 \times X_2, \mathcal{S}) \to (X_1, \mathcal{T}_1)$과 $\pi_2 : (X_1 \times X_2, \mathcal{S}) \to (X_2, \mathcal{T}_2)$가 둘 다 연속인 것은 정확히 $\mathcal{T}_1 \otimes \mathcal{T}_2 \subseteq \mathcal{S}$일 때이다. 곧 곱위상은 두 사영을 연속으로 하는 위상 가운데 가장 거칠다.
4. (짝지은 함수와 단면)
   - (i) $g_1 : Z \to X_1$, $g_2 : Z \to X_2$가 함수이면 $h(z) = (g_1(z), g_2(z))$로 정한 함수 $h : Z \to X_1 \times X_2$가 있고 $\pi_1 \circ h = g_1$, $\pi_2 \circ h = g_2$이다. $g_1$, $g_2$가 연속이면 $h$는 연속이다.
   - (ii) $x_0 \in X_1$이면 $j(y) = (x_0, y)$로 정한 함수 $j : X_2 \to X_1 \times X_2$는 연속이고, $j$를 $X_2$에서 $\{x_0\} \times X_2$로의 함수로 본 것은 위상동형사상이다. 그 역함수는 $\pi_2$를 $\{x_0\} \times X_2$로 제한한 것이다. 따라서 $X_2 \simeq \{x_0\} \times X_2$이다.
   - (iii) 마찬가지로 $y_0 \in X_2$이면 $k(x) = (x, y_0)$로 정한 함수 $k : X_1 \to X_1 \times X_2$는 연속이고, $k$를 $X_1$에서 $X_1 \times \{y_0\}$로의 함수로 본 것은 위상동형사상이며, 그 역함수는 $\pi_1$을 $X_1 \times \{y_0\}$로 제한한 것이다. 따라서 $X_1 \simeq X_1 \times \{y_0\}$이다.
   - (iv) $F : X_1 \times X_2 \to W$가 연속이면, $x_0 \in X_1$을 고정하고 $y$를 $F(x_0, y)$로 보내는 함수 $X_2 \to W$와, $y_0 \in X_2$를 고정하고 $x$를 $F(x, y_0)$로 보내는 함수 $X_1 \to W$는 연속이다.
5. (두 인자 맞바꾸기) $\sigma(x, y) = (y, x)$로 정한 함수 $\sigma : X_1 \times X_2 \to X_2 \times X_1$은 위상동형사상이다. 여기서 $X_2 \times X_1$에는 곱위상 $\mathcal{T}_2 \otimes \mathcal{T}_1$을 준다. 따라서 $X_1 \times X_2 \simeq X_2 \times X_1$이다.
:::

:::english
Topological spaces and open sets are as in the entry on topological spaces; the product topology $\mathcal{T}_1 \otimes \mathcal{T}_2$, its basis $\mathcal{B}$ and the projections $\pi_1$, $\pi_2$ are as in the entry on the product topology of two spaces; and the subspace topology is as in the entry on the subspace topology. Continuity, "continuous at $x$", homeomorphisms, open maps and closed maps are as in the entries on continuous maps and on homeomorphisms, and composition is as in the entry on composition of functions. Throughout, $(X_1, \mathcal{T}_1)$, $(X_2, \mathcal{T}_2)$, $(Z, \mathcal{T}_Z)$, $(W, \mathcal{T}_W)$ are topological spaces; Cartesian products carry the product topology, and subsets of a product carry the subspace topology of the product topology.

1. (Projections)
   - (i) $\pi_1 : X_1 \times X_2 \to X_1$ and $\pi_2 : X_1 \times X_2 \to X_2$ are continuous.
   - (ii) $\pi_1$ and $\pi_2$ are open maps.
   - (iii) A projection need not be a closed map. If $X_1 = \mathbb{R}$ has the standard topology and $X_2 = \mathbb{N}$ the discrete topology, then $F = \{(n^{-1}, n) : n \in \mathbb{N}\}$ is closed in $\mathbb{R} \times \mathbb{N}$, but $\pi_1(F) = \{n^{-1} : n \in \mathbb{N}\}$ is not closed in $\mathbb{R}$.
2. (Maps into a product) Let $f : Z \to X_1 \times X_2$ be a function and $z \in Z$. Then $f$ is continuous at $z$ exactly when $\pi_1 \circ f$ and $\pi_2 \circ f$ are both continuous at $z$. Hence $f$ is continuous exactly when $\pi_1 \circ f : Z \to X_1$ and $\pi_2 \circ f : Z \to X_2$ are both continuous.
3. (The coarsest topology) If $\mathcal{S}$ is a topology on $X_1 \times X_2$, then $\pi_1 : (X_1 \times X_2, \mathcal{S}) \to (X_1, \mathcal{T}_1)$ and $\pi_2 : (X_1 \times X_2, \mathcal{S}) \to (X_2, \mathcal{T}_2)$ are both continuous exactly when $\mathcal{T}_1 \otimes \mathcal{T}_2 \subseteq \mathcal{S}$. That is, the product topology is the coarsest topology making both projections continuous.
4. (Paired maps and slices)
   - (i) If $g_1 : Z \to X_1$ and $g_2 : Z \to X_2$ are functions, there is a function $h : Z \to X_1 \times X_2$ given by $h(z) = (g_1(z), g_2(z))$, and $\pi_1 \circ h = g_1$, $\pi_2 \circ h = g_2$. If $g_1$ and $g_2$ are continuous, then $h$ is continuous.
   - (ii) If $x_0 \in X_1$, then the function $j : X_2 \to X_1 \times X_2$ given by $j(y) = (x_0, y)$ is continuous, and $j$ regarded as a function from $X_2$ to $\{x_0\} \times X_2$ is a homeomorphism, whose inverse is the restriction of $\pi_2$ to $\{x_0\} \times X_2$. Hence $X_2 \simeq \{x_0\} \times X_2$.
   - (iii) Likewise, if $y_0 \in X_2$, then the function $k : X_1 \to X_1 \times X_2$ given by $k(x) = (x, y_0)$ is continuous, and $k$ regarded as a function from $X_1$ to $X_1 \times \{y_0\}$ is a homeomorphism, whose inverse is the restriction of $\pi_1$ to $X_1 \times \{y_0\}$. Hence $X_1 \simeq X_1 \times \{y_0\}$.
   - (iv) If $F : X_1 \times X_2 \to W$ is continuous, then for fixed $x_0 \in X_1$ the function $X_2 \to W$ sending $y$ to $F(x_0, y)$, and for fixed $y_0 \in X_2$ the function $X_1 \to W$ sending $x$ to $F(x, y_0)$, are continuous.
5. (Swapping the factors) The function $\sigma : X_1 \times X_2 \to X_2 \times X_1$ given by $\sigma(x, y) = (y, x)$ is a homeomorphism, where $X_2 \times X_1$ carries the product topology $\mathcal{T}_2 \otimes \mathcal{T}_1$. Hence $X_1 \times X_2 \simeq X_2 \times X_1$.
:::

## 직관

곱공간의 점은 두 좌표의 짝이고, 사영은 좌표 하나를 읽어 내는 함수입니다. 곱위상의 기저 원소는 직사각형 $U \times V$였으므로, 한 좌표만 열린집합 $U$에 들라는 조건 $\pi_1^{-1}(U) = U \times X_2$는 곱위상에서 열려 있습니다. 그래서 사영은 연속이고, (3)은 거꾸로 곱위상이 사영을 연속으로 만드는 데 꼭 필요한 열린집합만 가졌다는 것입니다. 직사각형은 $\pi_1^{-1}(U) \cap \pi_2^{-1}(V)$이기 때문입니다.

(2)는 "곱으로 가는 함수는 좌표마다 보면 된다"는 말입니다. 함숫값 $f(z)$가 직사각형 $U \times V$에 들어가는 것은 두 좌표가 각각 $U$와 $V$에 들어가는 것과 같으므로, 기저 원소의 역상이 두 성분의 역상의 교집합이 됩니다. 이 덕분에 두 연속함수를 짝지은 함수가 연속이고((4)의 (i)), 좌표 하나를 고정한 "단면"이 다른 인자와 위상동형이 됩니다((4)의 (ii), (iii)). 이것은 곱위상이라서 되는 일입니다. 같은 곱집합에 더 섬세한 위상을 주면 (2)가 깨질 수 있습니다(아래 반례).

사영은 열린집합을 열린집합으로 보내지만 닫힌집합을 닫힌집합으로 보내지는 않을 수 있습니다. (1)의 (iii)의 $F$는 점마다 떨어져 있어 닫혀 있지만, 첫째 좌표만 읽으면 $0$으로 몰려드는 점들 $n^{-1}$이 남고 $0$은 빠집니다.

## 증명

:::idea
기저 원소의 역상 $f^{-1}(U \times V) = (\pi_1 \circ f)^{-1}(U) \cap (\pi_2 \circ f)^{-1}(V)$와 사영의 상 $\pi_1(U \times V)$를 계산한다. (4), (5)의 위상동형은 서로 거꾸로인 두 연속함수로 보인다.
:::

:::hint
열린 사상인 것은 열린집합을 기저 원소의 합집합으로 쓰고 상의 합집합 공식을 씁니다.
:::

:::hint
(1)의 (iii)에서 $F$의 여집합의 점 $(x, m)$에는 $x \ne m^{-1}$이므로 $(\mathbb{R} - \{m^{-1}\}) \times \{m\}$을 씁니다.
:::

:::proof
[[product-topology]]의 진술에서 쓰는 것: (1)의 (a)–(e) 곱집합 등식, (2) $\mathcal{B}$는 위상 $\mathcal{T}_1 \otimes \mathcal{T}_2$의 기저, (3)의 (b)와 (c) 열린집합의 판정, (4) $U \times V$는 열려 있음, (6)의 (a) $\pi_1^{-1}(A) = A \times X_2$, $\pi_2^{-1}(B) = X_1 \times B$, $\pi_1^{-1}(A) \cap \pi_2^{-1}(B) = A \times B$와 (6)의 (b) 사영의 상. 이 증명에서 "곱위상의 (n)"은 그 항목의 번호이다.

**(1).** (i) $U \in \mathcal{T}_1$이면 곱위상의 (6)의 (a)에 의해 $\pi_1^{-1}(U) = U \times X_2$이고, $X_2 \in \mathcal{T}_2$이므로 곱위상의 (4)에 의해 열려 있다. $\pi_2$도 $\pi_2^{-1}(V) = X_1 \times V$로 같다.
(ii) $G$가 곱위상에서 열려 있다고 하자. 곱위상의 (3)의 (c)에 의해 $G = \bigcup \mathcal{D}$인 부분족 $\mathcal{D} \subseteq \mathcal{B}$가 있다. [[preimage-and-set-operations]]의 (5)에 의해 $\pi_1(G) = \bigcup \{\pi_1(D) : D \in \mathcal{D}\}$이다. $D \in \mathcal{D}$이면 $D = U \times V$인 $U \in \mathcal{T}_1$, $V \in \mathcal{T}_2$가 있고, 곱위상의 (6)의 (b)에 의해 $V \ne \emptyset$이면 $\pi_1(D) = U$, $V = \emptyset$이면 $\pi_1(D) = \emptyset$이므로 어느 쪽이든 $\pi_1(D) \in \mathcal{T}_1$이다. 위상의 조건 (ii)에 의해 $\pi_1(G) \in \mathcal{T}_1$이다. $\pi_2$도 $\pi_2(U \times V)$가 $U \ne \emptyset$이면 $V$, $U = \emptyset$이면 $\emptyset$인 것으로 같다.
(iii) [[standard-topology-on-reals]]의 (5)에 의해 $\mathbb{R}$의 보통 위상의 열린집합과 닫힌집합은 보통 거리의 것과 같다([[closed-set]]의 (6)). $F$는 $\mathbb{N}$의 각 원소 $n$에 $\mathbb{R} \times \mathbb{N}$의 원소 $(n^{-1}, n)$을 대응시켜 정한 집합이다.
$F$가 닫혀 있음: $(x, m) \in (\mathbb{R} \times \mathbb{N}) - F$라 하자. $x = m^{-1}$이면 $(x, m) \in F$이므로 $x \ne m^{-1}$이다. $U = \mathbb{R} - \{m^{-1}\}$은 [[open-and-closed-sets-of-reals]]의 (2)와 [[closed-set]]의 (5)에 의해 열려 있고 $x \in U$이며, $\{m\}$은 이산위상에서 열려 있다([[topology-examples]]의 (1)). $(u, m) \in U \times \{m\}$이 $F$에 속하면 $(u, m) = (n^{-1}, n)$인 $n$이 있어 $n = m$, $u = m^{-1}$이 되는데 $u \in U$에 어긋난다. 따라서 $U \times \{m\} \subseteq (\mathbb{R} \times \mathbb{N}) - F$이고, 곱위상의 (3)의 (b)에 의해 $F$의 여집합은 열려 있다.
$\pi_1(F) = E = \{n^{-1} : n \in \mathbb{N}\}$은 [[image-and-preimage]]의 (1)로 바로 나온다. [[order-properties-of-reals]]의 (10)에 의해 $0 < n^{-1}$이므로 $0 \notin E$이다. 모든 실수 $r > 0$에 대하여 [[archimedean-property]]의 (3)에 의해 $n^{-1} < r$인 자연수 $n$이 있고, [[absolute-value]]의 (1)에 의해 $|0 - n^{-1}| = |n^{-1}| = n^{-1} < r$이므로([[absolute-value]]의 (3)) $n^{-1} \in B(0, r) \cap E$이다. [[open-set-in-metric-space]]의 (3)에 의해 $E$는 닫힌집합이 아니다.

**(2).** $f$가 $z$에서 연속이라 하자. (1)의 (i)과 [[continuity-criteria]]의 (2)에 의해 $\pi_1$은 $f(z)$에서 연속이므로, [[composition-of-continuous-maps|연속함수의 합성]]의 (2)에 의해 $\pi_1 \circ f$는 $z$에서 연속이다. $\pi_2 \circ f$도 같다.
거꾸로 $\pi_1 \circ f$와 $\pi_2 \circ f$가 $z$에서 연속이라 하자. 곱위상의 (2)와 [[continuity-criteria]]의 (4)의 (ii)에 의해, $f(z) \in U \times V$인 $U \in \mathcal{T}_1$, $V \in \mathcal{T}_2$마다 $f(G) \subseteq U \times V$인 $z$의 근방 $G$가 있음을 보이면 된다. $f(z) = (a, b)$이면 $(\pi_1 \circ f)(z) = a \in U$이고 $(\pi_2 \circ f)(z) = b \in V$이다. [[continuous-map]]의 "$x$에서 연속"의 정의에 의해 $z \in G_1$, $(\pi_1 \circ f)(G_1) \subseteq U$인 열린 $G_1$과 $z \in G_2$, $(\pi_2 \circ f)(G_2) \subseteq V$인 열린 $G_2$가 있다. [[neighborhood]]의 (2)에 의해 $G = G_1 \cap G_2$는 $z$의 근방이다. $g \in G$이고 $f(g) = (s, t)$이면 $s = \pi_1(f(g)) \in U$, $t = \pi_2(f(g)) \in V$이므로 $f(g) \in U \times V$이다.
끝 문장은 [[continuity-criteria]]의 (2)(연속인 것은 모든 점에서 연속인 것)에 의해 나온다.

**(3).** 두 사영이 $\mathcal{S}$에 대하여 연속이라 하자. $U \in \mathcal{T}_1$, $V \in \mathcal{T}_2$이면 $\pi_1^{-1}(U), \pi_2^{-1}(V) \in \mathcal{S}$이고, 곱위상의 (6)의 (a)에 의해 $U \times V = \pi_1^{-1}(U) \cap \pi_2^{-1}(V)$이므로 위상의 조건 (iii)에 의해 $U \times V \in \mathcal{S}$이다. 곧 $\mathcal{B} \subseteq \mathcal{S}$이고, [[basis-generates-by-unions]]의 (3)에 의해 $\mathcal{T}_1 \otimes \mathcal{T}_2 = \mathcal{T}_{\mathcal{B}} \subseteq \mathcal{S}$이다. 거꾸로 $\mathcal{T}_1 \otimes \mathcal{T}_2 \subseteq \mathcal{S}$이면 (1)의 (i)의 계산에서 $\pi_1^{-1}(U) = U \times X_2 \in \mathcal{T}_1 \otimes \mathcal{T}_2 \subseteq \mathcal{S}$이고 $\pi_2$도 같다.

**(4).** (i) $z \in Z$마다 $(g_1(z), g_2(z))$는 $X_1 \times X_2$의 원소로 정해지므로 [[recursion-theorem]]의 (1)에 의해 $h$는 함수이다. [[function-composition]]에 의해 $(\pi_1 \circ h)(z) = \pi_1(g_1(z), g_2(z)) = g_1(z)$이므로 [[function]]의 함수의 같음에 의해 $\pi_1 \circ h = g_1$이고, 같은 방식으로 $\pi_2 \circ h = g_2$이다. $g_1$, $g_2$가 연속이면 (2)에 의해 $h$는 연속이다.
(ii) $j$는 (i)에서 $Z = X_2$, $g_1$을 값이 늘 $x_0$인 상수함수, $g_2 = i_{X_2}$로 둔 것이다. [[continuous-map]]의 (2), (1)에 의해 둘은 연속이므로 $j$는 연속이다. $S = \{x_0\} \times X_2$로 두면 $j$의 값은 모두 $S$에 속하므로 [[subspace-and-continuity]]의 (3)의 (i)에 의해 $j$를 $X_2$에서 $S$로의 함수로 본 $j_S$는 연속이다. $p$를 $\pi_2|_S : S \to X_2$라 하면 [[subspace-and-continuity]]의 (2)에 의해 $p$는 연속이다. $y \in X_2$이면 $p(j_S(y)) = \pi_2(x_0, y) = y$이다. $u \in S$이면 $u = (x_0, y)$인 $y \in X_2$가 있고 $j_S(p(u)) = j(y) = (x_0, y) = u$이다. 곧 $p \circ j_S = i_{X_2}$, $j_S \circ p = i_S$이고, [[homeomorphism]]의 (5)에 의해 $j_S$는 위상동형사상이며 $p$는 그 역함수이다.
(iii) $k$는 (i)에서 $Z = X_1$, $g_1 = i_{X_1}$, $g_2$를 값이 늘 $y_0$인 상수함수로 둔 것이므로 연속이다. $R = X_1 \times \{y_0\}$로 두면 $k$를 $X_1$에서 $R$로의 함수로 본 $k_R$은 [[subspace-and-continuity]]의 (3)의 (i)에 의해 연속이고, $q = \pi_1|_R$은 같은 항목의 (2)에 의해 연속이다. $q(k_R(x)) = \pi_1(x, y_0) = x$이고, $u = (x, y_0) \in R$이면 $k_R(q(u)) = (x, y_0) = u$이므로 [[homeomorphism]]의 (5)에 의해 $k_R$은 위상동형사상이다.
(iv) $F \circ j : X_2 \to W$는 $y$를 $F(x_0, y)$로 보내고, $j : X_2 \to X_1 \times X_2$의 공역이 $F$의 정의역과 위상까지 같으므로 [[composition-of-continuous-maps|연속함수의 합성]]의 (1)에 의해 연속이다. $F \circ k$도 같다.

**(5).** $\pi_1'$, $\pi_2'$를 $X_2 \times X_1$의 사영이라 하자. (4)의 (i)을 $Z = X_1 \times X_2$, $g_1 = \pi_2$, $g_2 = \pi_1$에 쓰면, $\sigma(x, y) = (\pi_2(x, y), \pi_1(x, y)) = (y, x)$인 함수 $\sigma : X_1 \times X_2 \to X_2 \times X_1$이 있고 (1)의 (i)에 의해 연속이다. 같은 방식으로 $\tau(y, x) = (x, y)$인 $\tau : X_2 \times X_1 \to X_1 \times X_2$는 $\pi_2'$와 $\pi_1'$을 짝지은 것이므로 연속이다. $\tau(\sigma(x, y)) = (x, y)$이고 $\sigma(\tau(y, x)) = (y, x)$이므로 $\tau \circ \sigma$와 $\sigma \circ \tau$는 항등함수이고, [[homeomorphism]]의 (5)에 의해 $\sigma$는 위상동형사상이다.
:::

## 예시와 반례

:::example[직선 위의 그래프]
$\mathbb{R} \times \mathbb{R}$에 $\mathbb{R}$의 보통 위상 둘의 곱위상을 주고 $h(t) = (t, 2t)$로 정한 함수 $h : \mathbb{R} \to \mathbb{R} \times \mathbb{R}$를 봅니다. 성분 $t$와 $2t$는 [[homeomorphism-examples]]의 (1)에 의해 연속이므로 (4)의 (i)에 의해 $h$는 연속입니다. 상 $L = h(\mathbb{R}) = \{(t, 2t) : t \in \mathbb{R}\}$에 부분공간 위상을 주면, $h$를 $\mathbb{R}$에서 $L$로의 함수로 본 것은 [[subspace-and-continuity]]의 (3)에 의해 연속이고, $\pi_1|_L : L \to \mathbb{R}$은 같은 항목의 (2)에 의해 연속입니다. $\pi_1(h(t)) = t$이고 $(t, 2t) \in L$에서 $h(\pi_1(t, 2t)) = (t, 2t)$이므로 [[homeomorphism]]의 (5)에 의해 $\mathbb{R} \simeq L$입니다.
:::

:::counterexample[곱위상보다 섬세한 위상을 준 예]
$\mathbb{R} \times \mathbb{R}$에 곱위상 대신 이산위상을 주고 $d(t) = (t, t)$로 정한 함수 $d : \mathbb{R} \to \mathbb{R} \times \mathbb{R}$를 봅니다($\mathbb{R}$에는 보통 위상). 두 성분은 항등함수이므로 연속입니다. 그러나 $\{(0, 0)\}$은 이산위상에서 열려 있는데 $d^{-1}(\{(0, 0)\}) = \{0\}$은 $\mathbb{R}$에서 열려 있지 않습니다([[open-set-in-metric-space]]의 (6)과 [[standard-topology-on-reals]]의 (5)). 따라서 $d$는 연속이 아닙니다. 성분이 연속이면 연속이라는 (2)는 공역에 곱위상을 줄 때의 이야기입니다. 이 경우 이산위상에서도 두 사영은 연속이므로([[continuous-map]]의 (3)), (3)에서 곱위상이 가장 거칠다는 것과 맞습니다.
:::

## 확인 질문

:::check[$X_2 = \{q\}$이면 $\pi_1 : X_1 \times X_2 \to X_1$은 닫힌 사상인가?]
닫힌 사상입니다. $X_1 \times X_2 = X_1 \times \{q\}$이므로 (4)의 (iii)에 의해 $k(x) = (x, q)$로 정한 함수는 $X_1$에서 $X_1 \times X_2$로의 위상동형사상이고, 그 역함수는 $\pi_1$입니다($\pi_1(k(x)) = x$). [[homeomorphism]]의 (3)의 (ii)에 의해 $\pi_1$은 위상동형사상이고, 같은 항목의 (1)에 의해 닫힌 사상입니다.
:::

:::check[(4)의 (ii)에서 $X_2 = \emptyset$이면 $j$와 $\{x_0\} \times X_2$는 무엇인가?]
[[product-topology]]의 (1)의 (b)에 의해 $\{x_0\} \times \emptyset = \emptyset$이고, $j$는 정의역이 공집합인 함수, 곧 공집합입니다. 공집합에서 공집합으로의 함수 $\emptyset$은 전단사이고 그 역함수도 $\emptyset$이며, [[continuous-map]]의 (7)에 의해 둘 다 연속이므로 (4)의 (ii)의 결론 $\emptyset \simeq \emptyset$과 맞습니다.
:::
