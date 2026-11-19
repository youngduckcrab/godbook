---
title: 닫힌구간은 콤팩트이다
title_en: Closed Intervals Are Compact
aliases: [닫힌구간의 콤팩트성, closed interval is compact, compactness of a closed interval, 유계인 닫힌구간]
kind: theorem
field: topology
msc: ["54D30", "26A03"]
level: undergrad
summary: a < b 이면 닫힌구간 [a, b] 는 보통 위상을 준 ℝ 의 콤팩트 부분집합이다. 바깥 공간의 열린집합으로 하는 판정과 상한 논법으로, 덮개의 원소를 하나씩 고르지 않고 증명한다. 한 점 집합도 콤팩트이고, 아래끝 위상에서는 [0, 1] 이 콤팩트가 아니다.
requires: [set, subset, set-operations, family-of-sets, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, upper-bound-and-supremum, least-upper-bound-property, open-ball, open-set-in-metric-space, open-and-closed-sets-of-reals, standard-topology-on-reals, lower-limit-topology, metric-subspace-topology, continuous-function, continuity-agrees-with-analysis, metric-space-is-hausdorff, compact-space, continuous-image-of-compact, compact-subset-of-hausdorff-is-closed]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Compactness in ℝⁿ 절의 Theorem intervals-compact 와 증명, content/compactness.tex:178–190; Compactness 절의 예 interval-compact, 32–35"
    checked: original
    note: "(1)은 출처의 Theorem intervals-compact(178–181, '유계인 닫힌구간 [a, b] ⊆ ℝ 은 콤팩트이다')와 같다. 출처의 증명(182–190)은 열린 덮개 {U_i} 에 대해 M = {x ∈ [a, b] | [a, x] 가 유한 개의 U_i 로 덮인다} 를 두고, 'a ∈ M', 'm = sup M > a', 'M 은 구간이다' 라고 적은 뒤 m < b 를 가정해 m − ε ∈ M 과 m + ε/2 ∈ M 으로 모순을 얻고, 'M = [a, b] 를 보이면 된다' 고 적는다. 이 항목은 같은 상한 논법을 compact-space 의 (3)과 𝒦_𝒱 로 쓰고, s = sup E 가 E 에 든다는 것과 s = b 라는 것을 따로 보이며, 오른쪽으로 넘어갈 점은 min{s + δ/2, b} 로 잡는다. 출처의 [a, x] 는 x = a 에서 한 점이고, 이 사이트의 구간 기호는 a < b 일 때만 쓰므로 집합 {y : a ≤ y ≤ t} 로 적는다. 출처는 예 interval-compact(32–35)에서 [0, 1] 이 콤팩트라는 것을 하이네–보렐 정리의 한 경우라고 적는다."
  - ref: lebl-basic-analysis
    loc: "7.4.2절 Example 7.4.12 (p.284), Theorem 7.4.14 의 증명 (p.284)"
    checked: original
    note: "출처 Example 7.4.12(p.284)는 볼차노–바이어슈트라스 정리로 [a, b] 의 모든 수열이 [a, b] 안으로 수렴하는 부분수열을 가진다는 것을 보이고 [a, b] 가 (수열) 콤팩트라고 적는다. 콤팩트와 수열 콤팩트가 같다는 것은 출처 Theorem 7.4.11 이다. 이 항목은 수열을 쓰지 않고 열린 덮개로 증명한다. 이 항목의 증명의 틀은 해석학 입문의 continuous-on-closed-interval-is-bounded 의 상한 논법과 같다. 예시 '닫힌구간의 연속 상'과 관련해, 출처 Lemma 7.5.5(p.289)는 연속함수가 콤팩트 집합을 콤팩트 집합으로 보낸다고 진술한다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 다른 항목의 예를 근거로 삼은 곳 3군데, 근거 없는 연속 주장, 단원 글의 틀린 문장을 고쳤다."
added: 2026-11-19
---

:::statement
닫힌구간 $[a, b]$는 [[interval]]의 것이고 $a < b$일 때만 쓴다. $\mathbb{R}$에는 [[standard-topology-on-reals]]의 (5)의 보통 위상을 주고, $\mathbb{R}$의 부분집합에는 그 부분공간 위상을 준다. 콤팩트 부분집합(콤팩트 집합)은 [[compact-space]]의 것이다.

1. ($[a, b]$는 콤팩트이다) $a < b$인 실수 $a$, $b$에 대하여 닫힌구간 $[a, b]$는 $\mathbb{R}$의 콤팩트 부분집합이다. 곧 부분공간 위상을 준 $[a, b]$는 콤팩트 공간이다.
2. (한 점) 실수 $a$에 대하여 $\{a\}$는 $\mathbb{R}$의 콤팩트 부분집합이다. 따라서 $a \le b$인 실수 $a$, $b$에 대하여 $\{x \in \mathbb{R} : a \le x \le b\}$는 $\mathbb{R}$의 콤팩트 부분집합이다. 이 집합은 $a < b$이면 $[a, b]$이고 $a = b$이면 $\{a\}$이다.
:::

:::english
The closed interval $[a, b]$ is as in the entry on intervals and is used only when $a < b$. $\mathbb{R}$ carries the standard topology of (5) in the entry on the standard topology on the reals, and subsets of $\mathbb{R}$ carry its subspace topology. Compact subsets (compact sets) are as in the entry on open covers and compact spaces.

1. ($[a, b]$ is compact) For real numbers $a$, $b$ with $a < b$, the closed interval $[a, b]$ is a compact subset of $\mathbb{R}$; that is, $[a, b]$ with the subspace topology is a compact space.
2. (One point) For a real number $a$, the set $\{a\}$ is a compact subset of $\mathbb{R}$. Hence for real numbers $a$, $b$ with $a \le b$, the set $\{x \in \mathbb{R} : a \le x \le b\}$ is a compact subset of $\mathbb{R}$. This set is $[a, b]$ if $a < b$ and $\{a\}$ if $a = b$.
:::

## 직관

$[a, b]$를 덮는 열린집합들이 주어졌다고 합시다. 왼쪽 끝 $a$에서 출발해 "여기까지는 유한 개로 덮인다"는 점 $t$를 오른쪽으로 밀어 봅니다. 그런 $t$ 전체의 상한을 $s$라 하면, $s$를 품은 열린집합 하나가 $s$의 양옆 조금씩을 함께 덮습니다. 그래서 $s$보다 조금 왼쪽까지 유한 개로 덮였다면 그 열린집합 하나를 보태 $s$까지, 그리고 $s$보다 조금 오른쪽까지도 덮입니다. 상한보다 오른쪽까지 덮일 수는 없으므로 $s$는 오른쪽 끝 $b$이고, $b$까지 유한 개로 덮입니다.

이 논증은 해석학 입문의 [[continuous-on-closed-interval-is-bounded|닫힌구간 위의 연속함수는 유계이다]]의 증명과 같은 틀입니다. 거기서는 "여기까지는 함수가 유계"를 밀었고, 여기서는 "여기까지는 유한 개로 덮인다"를 밉니다. 최소상계 성질 (U)이 쓰이는 곳은 상한 $s$가 있다는 한 곳입니다.

비유하자면 막대 위에 덮개 조각을 왼쪽부터 이어 붙이는 일입니다. 조각 하나하나는 막대의 한 점과 그 둘레를 덮고, "어디까지 유한 개로 덮을 수 있는가"의 끝이 막대의 오른쪽 끝에 닿아야 합니다. 막대가 두 끝점을 포함한다는 것과 길이가 유한하다는 것이 이 논증의 두 기둥입니다.

## 증명

:::idea
$\{x : a \le x \le t\}$가 유한 개로 덮이는 $t$ 전체의 상한 $s$를 잡고, $s$를 품은 열린집합 하나를 보태 $s$와 그 조금 오른쪽까지 덮이게 해 $s = b$를 얻는다.
:::

:::hint
[[compact-space]]의 (3)으로 $[a, b]$를 덮는 $\mathbb{R}$의 열린집합들의 집합족 $\mathcal{V}$를 받습니다. 그 열린집합 $V$가 점 $s$를 품으면 $(s - \delta, s + \delta) \subseteq V$인 $\delta > 0$이 있습니다.
:::

:::hint
$s - \delta$는 상한보다 작으므로 상계가 아닙니다. 오른쪽으로 넘어갈 점은 $b$를 넘지 않게 $\min\{s + \delta/2, b\}$로 잡습니다.
:::

:::proof
"순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호, "상한 (4)"는 [[upper-bound-and-supremum]]의 번호, "구간 (3)"은 [[interval]]의 번호, "콤팩트 (3)"은 [[compact-space]]의 번호이다. (K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 것이다.

**(1).** 콤팩트 (3)의 (b)를 보인다. $\mathcal{V}$가 $[a, b] \subseteq \bigcup \mathcal{V}$인 $\mathbb{R}$의 열린집합들의 집합족이라 하고, $\mathcal{K}_{\mathcal{V}}$를 콤팩트 (2)의 것이라 하자. 실수 $t$에 대하여 $L_t = \{x \in \mathbb{R} : a \le x \le t\}$로 쓰고
$$
E = \{t \in [a, b] : L_t \in \mathcal{K}_{\mathcal{V}}\}
$$
로 둔다. 다음 사실을 여러 번 쓴다.

> (가) $s$, $t$, $u$, $\delta$가 실수이고 $\delta > 0$이며, $V \in \mathcal{V}$이고 $(s - \delta, s + \delta) \subseteq V$이며, $s - \delta < t$, $u < s + \delta$, $L_t \in \mathcal{K}_{\mathcal{V}}$이면 $L_u \in \mathcal{K}_{\mathcal{V}}$이다.

(가)의 증명: $x \in L_u$라 하자. 순서 성질 (1)의 (iii)에 의해 $x \le t$이거나 $t < x$이다. $x \le t$이면 $a \le x$이므로 $x \in L_t$이다. $t < x$이면 $s - \delta < t < x$이므로 (W2)에 의해 $s - \delta < x$이고, $x \le u < s + \delta$이므로 순서 성질 (1)의 (v)에 의해 $x < s + \delta$이다. 곧 $x \in (s - \delta, s + \delta) \subseteq V$이다. 따라서 $L_u \subseteq L_t \cup V$이다. 콤팩트 (2)의 (iv)에 의해 $V \in \mathcal{K}_{\mathcal{V}}$이고, (ii)에 의해 $L_t \cup V \in \mathcal{K}_{\mathcal{V}}$이며, (iii)에 의해 $L_u \in \mathcal{K}_{\mathcal{V}}$이다.

*첫째 단계: $s = \sup E$가 있고 $s \in [a, b]$이다.* 구간 (3)에 의해 $a \in [a, b]$이다. $x \in L_a$이면 $a \le x \le a$이므로 순서 성질 (1)의 (ii)에 의해 $x = a$이고, 거꾸로 순서 성질 (1)의 (iv)에 의해 $a \in L_a$이므로 $L_a = \{a\}$이다. $a \in \bigcup \mathcal{V}$이므로 $a \in V$인 $V \in \mathcal{V}$가 있고 $\{a\} \subseteq V$이므로, 콤팩트 (2)의 (iv)에 의해 $L_a \in \mathcal{K}_{\mathcal{V}}$이다. 따라서 $a \in E$이고 $E$는 공집합이 아니다. $E \subseteq [a, b]$이므로 $b$는 $E$의 상계이다. [[least-upper-bound-property|최소상계 성질]] (U)에 의해 $s = \sup E$가 있다. $a \in E$이므로 $a \le s$이고, 상한의 정의에 의해 $s \le b$이다. 따라서 $s \in [a, b]$이다.

*둘째 단계: $s$를 품은 열린집합.* $s \in [a, b] \subseteq \bigcup \mathcal{V}$이므로 $s \in V_0$인 $V_0 \in \mathcal{V}$가 있다. $V_0$은 보통 위상의 원소이므로 [[standard-topology-on-reals]]의 (5)에 의해 보통 거리에서 열린집합이고, [[open-set-in-metric-space]]의 정의에 의해 $B(s, \delta) \subseteq V_0$인 실수 $\delta > 0$이 있다. [[open-ball]]의 (5)에 의해 $B(s, \delta) = (s - \delta, s + \delta)$이다.

*셋째 단계: $s \in E$이다.* 순서 성질 (3)의 (ii)와 (2)의 (ii)에 의해 $s - \delta < s$이다((K1), (K4)). 상한 (4)에 의해 $s - \delta$는 $E$의 상계가 아니므로 $s - \delta < t$인 $t \in E$가 있다. $s < s + \delta$이므로(같은 근거) (가)를 $u = s$로 쓰면 $L_s \in \mathcal{K}_{\mathcal{V}}$이다. $s \in [a, b]$이므로 $s \in E$이다.

*넷째 단계: $s = b$이다.* $s < b$라 하자. $t' = \min\{s + \delta/2, b\}$로 둔다. 순서 성질 (8)에 의해 $0 < \delta/2 < \delta$이고, 순서 성질 (2)의 (ii)로 $s$를 더하면 $s < s + \delta/2 < s + \delta$이다. 절댓값 (10)에 의해 $t'$은 $s + \delta/2$이거나 $b$이고 $t' \le s + \delta/2$, $t' \le b$이다. 두 경우 모두 $s < t'$이므로 $a \le s < t'$이고 $t' \in [a, b]$이다. $s - \delta < s$이고 $t' \le s + \delta/2 < s + \delta$이므로, (가)를 $t = s$, $u = t'$로 쓰면 셋째 단계의 $L_s \in \mathcal{K}_{\mathcal{V}}$에서 $L_{t'} \in \mathcal{K}_{\mathcal{V}}$를 얻는다. 곧 $t' \in E$이고, $s$가 $E$의 상계이므로 $t' \le s$이다. 이것은 $s < t'$과 함께 성립할 수 없다(순서 성질 (1)의 (i)). 따라서 $s < b$가 아니고, 순서 성질 (1)의 (iii)에 의해 $b \le s$이며, $s \le b$와 순서 성질 (1)의 (ii)에 의해 $s = b$이다.

셋째 단계와 넷째 단계에 의해 $b \in E$, 곧 $L_b \in \mathcal{K}_{\mathcal{V}}$이다. $[a, b]$의 정의에 의해 $L_b = [a, b]$이므로 $[a, b] \in \mathcal{K}_{\mathcal{V}}$이고, 콤팩트 (3)에 의해 $[a, b]$는 콤팩트 부분집합이다.

**(2).** [[compact-space]]의 증명의 한 원소 집합 단락에 의해 $\{a\}$는 유한집합이므로 콤팩트 (8)의 (ii)에 의해 콤팩트 부분집합이다. $a \le b$이면 [[real-order-axioms]]의 용어에 의해 $a < b$이거나 $a = b$이다. $a < b$이면 집합은 $[a, b]$의 정의 그 자체이고, $a = b$이면 첫째 단계와 같이 $\{x : a \le x \le a\} = \{a\}$이다. 두 경우 모두 앞에서 콤팩트임을 보였다.
:::

## 예시와 반례

:::example[닫힌구간의 연속 상]
$a < b$이고 $f : [a, b] \to \mathbb{R}$가 해석학 입문의 뜻의 연속함수이면 $f([a, b])$는 $\mathbb{R}$의 콤팩트 부분집합이고 닫힌집합입니다. [[metric-subspace-topology]]의 (2)에 의해 $[a, b]$에 준 위상은 부분공간 거리의 거리위상이고, [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)에 의해 $f$는 위상의 뜻으로 연속입니다. (1)과 [[continuous-image-of-compact]]의 (1)에 의해 $f([a, b])$는 콤팩트 부분집합이고, $\mathbb{R}$은 하우스도르프 공간이므로([[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (3)의 (i)) [[compact-subset-of-hausdorff-is-closed]]의 (2)에 의해 닫힌집합입니다. 예컨대 $f(x) = x$인 $f : [0, 1] \to \mathbb{R}$의 상은 $[0, 1]$ 자신입니다.
:::

:::counterexample[아래끝 위상에서의 닫힌구간 [0, 1]]
(1)은 보통 위상에 대한 것입니다. $\mathbb{R}_l$에서는 $[0, 1]$이 콤팩트 부분집합이 아닙니다. [[lower-limit-topology]]의 (3)과 (4)에 의해 $t < 1$인 실수 $t$마다 $\{x : x < t\}$는 $\mathbb{R}_l$의 열린집합이고 $[1, 2)$도 열린집합입니다. 이것들 전체의 집합족을 $\mathcal{V}$라 하면 $[0, 1]$의 점 $x$는 $x = 1$이면 $[1, 2)$에, $x < 1$이면 $t = (x + 1)/2$에 대한 $\{y : y < t\}$에 듭니다([[order-properties-of-reals]]의 (8)에 의해 $x < t < 1$). 이제 $\mathcal{E} = \{S \in \mathscr{P}(\mathbb{R}) : S \cap [0, 1) \subseteq \{y : y < t\} \text{인 실수 } t < 1 \text{이 있다}\}$로 두면, $t = 0$으로 $\emptyset \in \mathcal{E}$이고, 두 원소의 $t$들의 최대([[absolute-value]]의 (10))로 두 원소의 합집합이 $\mathcal{E}$에 들며, $\mathcal{V}$의 원소는 모두 $\mathcal{E}$에 듭니다($[1, 2) \cap [0, 1) = \emptyset$). [[compact-space]]의 (1)의 (i)에 의해 $\mathcal{V}$의 유한 부분족의 합집합은 $\mathcal{E}$에 듭니다. 그것이 $[0, 1]$을 포함한다면 $[0, 1) \subseteq \{y : y < t\}$인 $t < 1$이 있는데, $t' = \max\{t, 0\}$이라 하면 $(t' + 1)/2$는 $[0, 1)$에 들고 $t$ 이상입니다. 따라서 $\mathcal{V}$의 유한 부분족은 $[0, 1]$을 덮지 못하고, [[compact-space]]의 (3)에 의해 $[0, 1]$은 $\mathbb{R}_l$의 콤팩트 부분집합이 아닙니다. 증명에서 열린집합 $V_0$이 $s$의 왼쪽까지 덮는다는 것을 썼는데, $\mathbb{R}_l$의 열린집합 $[1, 2)$는 $1$의 왼쪽을 덮지 않습니다.
:::

## 확인 질문

:::check[$f : [0, 1] \to \mathbb{R}$가 해석학 입문의 뜻으로 연속이고 단사이면 $[0, 1]$과 $f([0, 1])$은 위상동형인가?]
그렇습니다. 위 예시처럼 $f$는 위상의 뜻으로 연속이고, (1)에 의해 $[0, 1]$은 콤팩트이며, $\mathbb{R}$은 하우스도르프 공간입니다. [[continuous-image-of-compact]]의 (3)의 (ii)에 의해 $f$를 $[0, 1]$에서 $f([0, 1])$로의 함수로 본 것은 위상동형사상입니다. 역함수가 연속이라는 것을 따로 계산하지 않아도 됩니다.
:::

:::check[$[0, 1] \cup [2, 3]$은 $\mathbb{R}$의 콤팩트 부분집합인가? $(0, 1)$은?]
$[0, 1] \cup [2, 3]$은 콤팩트 부분집합입니다. (1)에 의해 두 닫힌구간이 콤팩트이고 [[compact-space]]의 (6)에 의해 그 합집합도 콤팩트입니다. 반면 $(0, 1)$은 [[compact-space]]의 (8)의 (vi)에 의해 콤팩트 부분집합이 아닙니다. 끝점 둘을 뺀 것만으로 콤팩트가 깨집니다.
:::
