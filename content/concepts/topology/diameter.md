---
title: 지름
title_en: Diameter
aliases: [집합의 지름, diameter of a set, diam]
kind: definition
field: topology
msc: ["54E35"]
level: undergrad
summary: 거리공간의 공집합이 아닌 부분집합이 유계인 것은 그 점들 사이의 거리 전체가 위로 유계인 것과 같고, 이때 그 상한을 지름이라 한다. 지름의 기본 성질, 한 점 집합, 부분집합, 열린 공과 닫힌 공, 폐포, 실수의 구간, 이산 거리에서의 지름을 다룬다.
requires: [set, subset, set-operations, cartesian-product, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, upper-bound-and-supremum, least-upper-bound-property, interval, prime-number, metric-space, metric-space-examples, open-ball, open-ball-is-open, topology-examples, closed-set, interior-and-closure, closure-in-a-metric-space, compact-metric-closed-and-bounded]
sources:
  - ref: lebl-basic-analysis
    loc: "7.1절 Definition 7.1.12 아래 문단의 (ii) (p.261); 7.1.1소절 연습문제 7.1.9 b), 7.1.10 (p.262); 7.2절 7.2.2소절 Example 7.2.17 (p.269)"
    checked: original
    note: "출처는 p.261 에서 X 가 공집합이 아닐 때 S ⊆ X 가 유계인 것이 diam(S) := sup{d(x, y) : x, y ∈ S} < ∞ 와 같다고 적고, diam(S) 를 집합의 지름이라 부르며 보통 공집합이 아닌 집합에만 정의한다고 적는다. 동치의 증명은 연습문제 7.1.9 b)(p.262: 공집합이 아닌 S 가 유계인 것은 정확히 diam(S) < ∞ 일 때)로 돌린다. 출처는 유계라는 조건을 diam(S) < ∞ 로 적고, 이 항목은 ∞ 를 쓰지 않고 지름을 공집합이 아니고 유계인 집합에만 정의한다. (1)은 그 연습문제의 내용이다. (7)의 닫힌구간의 경우는 출처 연습문제 7.1.10 a)(p.262: ℝ 에서 diam [a, b] 를 구하라)와 같은 계산이다. (8)은 출처 연습문제 7.1.10 c)(p.262: 두 점 이상인 이산 거리 공간에서 diam({p}) 와 diam(X) 를 구하고 X 가 유계임을 보여라)와 같은 대상, 같은 결론이다. (5)의 이산 거리의 공 B(x, 1) 이 한 점이라는 것은 출처 Example 7.2.17(p.269: 두 점의 이산 거리 공간에서 B(a, 1) = {a})와 같은 대상이다. (5)의 공의 지름은 출처 연습문제 7.1.10 b)(ℝⁿ 의 유클리드 공의 지름을 구하라)와 같은 대상을 다룬다. 이 사이트는 ℝⁿ 을 쓰지 않고 일반 거리공간의 공에 대해 위로 누르는 부등식과 등호가 아닌 예를 적는다. 예시 '같은 정사각형의 두 지름'의 합 거리와 최대 거리는 출처 연습문제 7.1.6(p.262: 곱집합 X × Y 의 합 거리와 최대 거리가 거리임을 보여라)과 연습문제 7.3.14(p.278: ℝⁿ 의 d′ 와 d″)의 거리와 같은 대상이다. 반례 '지름이 반지름의 두 배보다 작은 공'이 부분공간의 공을 ℝ 의 같은 반지름의 공과 견주는 것은 출처 Example 7.2.3(p.264: 부분공간 [0, 1] 에서 B(0, 1/2) = [0, 1/2) 이고 이것은 B_ℝ(0, 1/2) = (−1/2, 1/2) 와 다르다)과 같은 발상이다."
  - ref: fuglede-basic-topology
    loc: "Proofs of lifting lemmas 소절, content/homotopy.tex:398–405; 같은 소절의 Lemma lebesgue-number-lemma 의 증명, 419"
    checked: original
    note: "출처는 공집합이 아닌 부분집합 A 가 '집합 {d(a₁, a₂) | a₁, a₂ ∈ A} ⊆ ℝ 이 유계'라는 뜻으로 유계일 때 diam(A) = sup{d(a₁, a₂) | a₁, a₂ ∈ A} ∈ ℝ 로 정의한다(402–405). 이 항목의 정의는 같은 꼴이고, 출처가 유계의 뜻으로 삼은 조건이 compact-metric-closed-and-bounded 의 유계와 같다는 것을 (1)에서 증명한다. 확인 질문 '지름이 δ인 집합 S와 s ∈ S가 있으면 S ⊆ B(s, δ)인가?'와 (2)의 (v)는 출처가 르베그 수 보조정리의 증명(419)에서 '지름이 δ 보다 작은 A 와 a ∈ A 에 대하여 A ⊆ B_d(a, δ)' 라고 쓰는 사실과 같은 대상을 다룬다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 단원 글의 거짓 문장 1건, 뒤 항목을 예고하던 문장 1건, 근거 없이 쓴 작은 사실 4건, 메모의 위치 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 그 예는 [[metric-space]], [[metric-space-examples]]의 것이고, 열린 공 $B(x, r)$와 닫힌 공 $C(x, r)$는 [[open-ball]]의 것이다. 거리공간의 부분집합이 유계라는 것은 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합은 닫혀 있고 유계라는 정리]]의 것이다. 상계, 위로 유계, 상한 $\sup$은 [[upper-bound-and-supremum]]의 것이고, 최소상계 성질 (U)는 [[least-upper-bound-property]]의 것이다. 거리공간에는 거리위상을 주고, 폐포 $\overline{S}$는 [[interior-and-closure]]의 것이다. 아래에서 $(X, d)$는 거리공간이다.

**거리의 집합.** $S$가 $X$의 공집합이 아닌 부분집합일 때, $t = d(x, y)$인 $x, y \in S$가 있는 실수 $t$ 전체의 집합을 이 항목에서
$$
D(S) = \{d(x, y) : x, y \in S\}
$$
로 쓴다. $S$의 점 $s$ 하나에 대하여 $d(s, s) = 0 \in D(S)$이므로 $D(S)$는 공집합이 아니다.

**지름.** $S$가 $X$의 공집합이 아니고 유계인 부분집합이면, 아래 (1)에 의해 $D(S)$는 위로 유계이고, (U)에 의해 $D(S)$의 상한이 있다. 이 상한
$$
\operatorname{diam} S = \sup D(S)
$$
를 $S$의 **지름**(diameter)이라 한다. 공집합과 유계가 아닌 집합에는 지름을 정의하지 않는다. 거리를 밝혀야 할 때는 "$d$로 잰 지름"이라고 쓴다.

다음이 성립한다. 아래에서 $S$는 $X$의 공집합이 아닌 부분집합이다.

1. (유계와 거리의 집합) $S$가 유계인 것은 정확히 $D(S)$가 위로 유계일 때이다. 더 자세히, $S \subseteq B(p, r)$이면 $2r$은 $D(S)$의 상계이고, 실수 $c$가 $D(S)$의 상계이고 $s \in S$이면 $0 \le c$이고 $S \subseteq B(s, c + 1)$이다.
2. (지름의 기본 성질) $S$가 유계라 하자.
   - (i) $0 \le \operatorname{diam} S$이다.
   - (ii) $x, y \in S$이면 $d(x, y) \le \operatorname{diam} S$이다.
   - (iii) 실수 $c$가 모든 $x, y \in S$에서 $d(x, y) \le c$를 만족하면 $\operatorname{diam} S \le c$이다.
   - (iv) 실수 $c$가 $c < \operatorname{diam} S$이면 $c < d(x, y)$인 $x, y \in S$가 있다.
   - (v) $s \in S$이고 실수 $r$이 $\operatorname{diam} S < r$이면 $S \subseteq B(s, r)$이다.
3. (한 점 집합) $x \in X$이면 $\{x\}$는 유계이고 $\operatorname{diam} \{x\} = 0$이다. 거꾸로 $S$가 유계이고 $\operatorname{diam} S = 0$이면 $S$는 한 점 집합이다. 곧 $S = \{s\}$인 $s \in X$가 있다.
4. (부분집합) $S$가 유계이고 $T$가 $S$의 공집합이 아닌 부분집합이면 $T$는 유계이고 $\operatorname{diam} T \le \operatorname{diam} S$이다.
5. (공의 지름) $x \in X$이고 $r > 0$이면 $B(x, r)$와 $C(x, r)$는 공집합이 아니고 유계이며 $\operatorname{diam} B(x, r) \le 2r$, $\operatorname{diam} C(x, r) \le 2r$이다. 이 부등식은 등호가 아닐 수 있다. $d$가 $X$ 위의 이산 거리이면 $\operatorname{diam} B(x, 1) = 0$이다.
6. (폐포의 지름) $S$가 유계이면 $\overline{S}$도 공집합이 아니고 유계이며 $\operatorname{diam} \overline{S} = \operatorname{diam} S$이다.
7. (실수의 유계인 구간) $\mathbb{R}$에 보통 거리를 주고, $a < b$인 실수 $a$, $b$에 대하여 $I$가 $(a, b)$, $[a, b)$, $(a, b]$, $[a, b]$ 가운데 하나이면 $I$는 공집합이 아니고 유계이며 $\operatorname{diam} I = b - a$이다.
8. (이산 거리) $d$가 $X$ 위의 이산 거리이면 $S$는 유계이다. $S$가 한 점 집합이면 $\operatorname{diam} S = 0$이고, $S$에 서로 다른 두 점이 있으면 $\operatorname{diam} S = 1$이다.
:::

:::english
Metric spaces and their examples are as in the entries on metric spaces and examples of metric spaces, and open balls $B(x, r)$ and closed balls $C(x, r)$ are as in the entry on open balls. Bounded subsets of a metric space are as in the entry on compact sets in metric spaces being closed and bounded. Upper bounds, being bounded above and the supremum $\sup$ are as in the entry on upper bounds and suprema, and the least-upper-bound property (U) is as in the entry on that property. A metric space carries its metric topology, and the closure $\overline{S}$ is as in the entry on interior and closure. Below, $(X, d)$ is a metric space.

**The set of distances.** When $S$ is a nonempty subset of $X$, in this entry we write
$$
D(S) = \{d(x, y) : x, y \in S\}
$$
for the set of all real numbers $t$ such that $t = d(x, y)$ for some $x, y \in S$.
For a point $s$ of $S$ we have $d(s, s) = 0 \in D(S)$, so $D(S)$ is nonempty.

**Diameter.** If $S$ is a nonempty bounded subset of $X$, then by (1) below $D(S)$ is bounded above, and by (U) $D(S)$ has a supremum. This supremum
$$
\operatorname{diam} S = \sup D(S)
$$
is called the **diameter** of $S$. The diameter is not defined for the empty set or for unbounded sets. When the metric must be named we say "the diameter with respect to $d$".

The following hold. Below, $S$ is a nonempty subset of $X$.

1. (Boundedness and the set of distances) $S$ is bounded exactly when $D(S)$ is bounded above. More precisely, if $S \subseteq B(p, r)$, then $2r$ is an upper bound of $D(S)$; and if a real number $c$ is an upper bound of $D(S)$ and $s \in S$, then $0 \le c$ and $S \subseteq B(s, c + 1)$.
2. (Basic properties of the diameter) Let $S$ be bounded.
   - (i) $0 \le \operatorname{diam} S$.
   - (ii) If $x, y \in S$, then $d(x, y) \le \operatorname{diam} S$.
   - (iii) If a real number $c$ satisfies $d(x, y) \le c$ for all $x, y \in S$, then $\operatorname{diam} S \le c$.
   - (iv) If a real number $c$ satisfies $c < \operatorname{diam} S$, then there are $x, y \in S$ with $c < d(x, y)$.
   - (v) If $s \in S$ and a real number $r$ satisfies $\operatorname{diam} S < r$, then $S \subseteq B(s, r)$.
3. (One-point sets) If $x \in X$, then $\{x\}$ is bounded and $\operatorname{diam} \{x\} = 0$. Conversely, if $S$ is bounded and $\operatorname{diam} S = 0$, then $S$ is a one-point set; that is, there is $s \in X$ with $S = \{s\}$.
4. (Subsets) If $S$ is bounded and $T$ is a nonempty subset of $S$, then $T$ is bounded and $\operatorname{diam} T \le \operatorname{diam} S$.
5. (Diameter of balls) If $x \in X$ and $r > 0$, then $B(x, r)$ and $C(x, r)$ are nonempty and bounded, and $\operatorname{diam} B(x, r) \le 2r$, $\operatorname{diam} C(x, r) \le 2r$. These inequalities may be strict: if $d$ is the discrete metric on $X$, then $\operatorname{diam} B(x, 1) = 0$.
6. (Diameter of the closure) If $S$ is bounded, then $\overline{S}$ is also nonempty and bounded, and $\operatorname{diam} \overline{S} = \operatorname{diam} S$.
7. (Bounded intervals of the reals) Give $\mathbb{R}$ the standard metric. If $a < b$ are real numbers and $I$ is one of $(a, b)$, $[a, b)$, $(a, b]$, $[a, b]$, then $I$ is nonempty and bounded and $\operatorname{diam} I = b - a$.
8. (The discrete metric) If $d$ is the discrete metric on $X$, then $S$ is bounded. If $S$ is a one-point set, then $\operatorname{diam} S = 0$; if $S$ has two distinct points, then $\operatorname{diam} S = 1$.
:::

## 직관

지름은 "집합 안의 두 점이 서로 얼마나 멀리 떨어질 수 있는가"를 재는 수입니다. 섬의 지름을 잰다고 생각해 봅시다. 섬 위의 두 지점을 아무렇게나 골라 그 사이의 거리를 재고, 그렇게 잰 거리를 모두 모은 것이 $D(S)$입니다. 지름은 그 가운데 가장 큰 값, 정확히는 그 거리들의 상한입니다. 가장 먼 두 지점이 실제로 있지 않을 수도 있어서(열린구간 $(a, b)$에는 거리가 $b - a$인 두 점이 없습니다) 최댓값 대신 상한을 씁니다. (7)이 그런 경우입니다.

상한이 있으려면 거리들이 위로 막혀 있어야 합니다. (1)은 이것이 집합이 유계인 것과 같다고 말합니다. 반지름이 $r$인 공 하나에 들어가는 집합은 두 점의 거리가 $2r$보다 작고, 거꾸로 두 점의 거리가 $c$를 넘지 않으면 집합의 한 점을 중심으로 반지름 $c + 1$인 공에 다 들어갑니다. 그래서 이 사이트는 지름을 유계인 집합에만 정의하고, 잴 거리가 하나도 없는 공집합에도 정의하지 않습니다.

"공의 지름은 반지름의 두 배"라는 그림은 평면의 원판에서 온 것이고, 일반 거리공간에서는 $2r$ 이하라는 것만 남습니다((5)). 이산 거리에서는 반지름이 $1$인 공이 점 하나뿐이라 지름이 $0$입니다. 폐포를 취해도 지름이 그대로라는 것((6))은 폐포에 새로 들어오는 점이 집합의 점에 얼마든지 가까워서, 그 점들 사이의 거리가 원래 거리들의 상한을 넘을 수 없기 때문입니다.

## 증명

:::proof
"순서 성질 (n)"은 [[order-properties-of-reals]]의 번호, "상한 (n)"은 [[upper-bound-and-supremum]]의 번호, "공 (n)"은 [[open-ball]]의 번호, "유계 (n)"은 [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합은 닫혀 있고 유계라는 정리]]의 번호이다. 거리의 조건 (i)–(iv)와 성질 (1)–(5)는 [[metric-space]]의 것이다. $D(S)$, $D(T)$는 [[cartesian-product|곱집합]]의 원소 $(x, y)$에 대한 조건으로 정한 $\mathbb{R}$의 부분집합이다.

**(1).** $S \subseteq B(p, r)$이고 $x, y \in S$라 하자. 거리의 삼각부등식 (iv)와 (iii)에 의해 $d(x, y) \le d(x, p) + d(p, y) = d(p, x) + d(p, y)$이고, $d(p, x) < r$, $d(p, y) < r$이므로 순서 성질 (2)의 (iv)에 의해 $d(p, x) + d(p, y) < r + r = 2r$이다. 순서 성질 (1)의 (v)에 의해 $d(x, y) < 2r$이므로 $2r$은 $D(S)$의 상계이다. $S$가 유계이면 $S \ne \emptyset$이므로 유계의 정의에 의해 그런 $p$, $r$이 있고, 따라서 $D(S)$는 위로 유계이다.

거꾸로 $c$가 $D(S)$의 상계이고 $s \in S$라 하자. $0 = d(s, s) \in D(S)$이므로 $0 \le c$이다. 순서 성질 (5)의 (ii)와 (2)의 (iv)에 의해 $c < c + 1$이고 $0 < c + 1$이다. $x \in S$이면 $d(s, x) \in D(S)$이므로 $d(s, x) \le c < c + 1$이고, 순서 성질 (1)의 (v)에 의해 $x \in B(s, c + 1)$이다. 따라서 $S \subseteq B(s, c + 1)$이고 $S$는 유계이다.

**(2).** $\delta = \operatorname{diam} S$는 $D(S)$의 상한이므로 $D(S)$의 상계이다. (i) $0 \in D(S)$이므로 $0 \le \delta$이다. (ii) $x, y \in S$이면 $d(x, y) \in D(S)$이므로 $d(x, y) \le \delta$이다. (iii) 가정에 의해 $c$는 $D(S)$의 상계이므로 상한의 정의에 의해 $\delta \le c$이다. (iv) 상한 (4)에 의해 $c$는 $D(S)$의 상계가 아니므로 $c < t$인 $t \in D(S)$가 있고, $t = d(x, y)$인 $x, y \in S$가 있다. (v) (i)에 의해 $0 \le \delta < r$이므로 순서 성질 (1)의 (v)에 의해 $0 < r$이고, $x \in S$이면 (ii)에 의해 $d(s, x) \le \delta < r$이므로 $x \in B(s, r)$이다.

**(3).** 공 (1)에 의해 $\{x\} \subseteq B(x, 1)$이므로 $\{x\}$는 유계이다. $D(\{x\})$의 원소는 $y, z \in \{x\}$인 $d(y, z)$, 곧 $d(x, x) = 0$뿐이므로 $D(\{x\}) = \{0\}$이다. $0$은 $\{0\}$의 원소이자 상계이므로 최댓값이고, 상한 (2)에 의해 $\operatorname{diam} \{x\} = \sup \{0\} = 0$이다.

거꾸로 $S$가 유계이고 $\operatorname{diam} S = 0$이라 하자. $S \ne \emptyset$이므로 $s \in S$를 하나 잡는다. $x \in S$이면 (2)의 (ii)와 거리의 조건 (i)에 의해 $0 \le d(s, x) \le 0$이므로 순서 성질 (1)의 (ii)에 의해 $d(s, x) = 0$이고, 거리의 조건 (ii)에 의해 $x = s$이다. 따라서 $S \subseteq \{s\}$이고, $s \in S$이므로 $S = \{s\}$이다.

**(4).** 유계 (1)의 (i)에 의해 $T$는 유계이다. $x, y \in T$이면 $x, y \in S$이므로 (2)의 (ii)에 의해 $d(x, y) \le \operatorname{diam} S$이다. (2)의 (iii)을 $T$와 $c = \operatorname{diam} S$에 쓰면 $\operatorname{diam} T \le \operatorname{diam} S$이다.

**(5).** 공 (1)에 의해 $x \in B(x, r) \subseteq C(x, r)$이므로 두 공은 공집합이 아니고, 유계 (1)의 (iv)에 의해 유계이다. $y, z \in C(x, r)$이면 거리의 삼각부등식 (iv)와 (iii)에 의해 $d(y, z) \le d(x, y) + d(x, z)$이고, $d(x, y) \le r$, $d(x, z) \le r$이므로 순서 성질 (2)의 (iii)에 의해 $d(y, z) \le r + r = 2r$이다. (2)의 (iii)에 의해 $\operatorname{diam} C(x, r) \le 2r$이다. $B(x, r) \subseteq C(x, r)$이므로 같은 계산이 $B(x, r)$의 점에도 성립하고, $\operatorname{diam} B(x, r) \le 2r$이다.

$d$가 이산 거리이면 공 (6)에 의해 $1 \le 1$이므로 $B(x, 1) = \{x\}$이고, (3)에 의해 $\operatorname{diam} B(x, 1) = 0$이다. 순서 성질 (5)의 (ii)에 의해 $0 < 1$이고 $1 < 2$이므로 $0 < 2 \cdot 1$이어서, 이때 $\operatorname{diam} B(x, 1) \ne 2 \cdot 1$이다.

**(6).** [[interior-and-closure]]의 (1)에 의해 $S \subseteq \overline{S}$이므로 $\overline{S} \ne \emptyset$이다. $S$는 유계이고 공집합이 아니므로 $S \subseteq B(p, r)$인 $p$, $r$이 있고, 공 (1)에 의해 $S \subseteq C(p, r)$이다. [[open-ball-is-open|열린 공은 열린집합이다]]의 (2)에 의해 $C(p, r)$는 $(X, d)$에서 닫힌집합이고, [[closed-set]]의 (6)에 의해 $(X, \mathcal{T}_d)$에서 닫힌집합이다. [[interior-and-closure]]의 (2)에 의해 $\overline{S} \subseteq C(p, r)$이고, 유계 (1)의 (iv)와 (i)에 의해 $\overline{S}$는 유계이다. (4)에 의해 $\operatorname{diam} S \le \operatorname{diam} \overline{S}$이다.

거꾸로 $x, y \in \overline{S}$라 하고 $\delta = \operatorname{diam} S$로 둔다. $\eta$를 양의 실수라 하고 $\varepsilon = \eta / 2$로 두면 순서 성질 (8)에 의해 $0 < \varepsilon$이다. [[closure-in-a-metric-space|거리공간의 폐포에 관한 정리]]의 (1)에 의해 $B(x, \varepsilon) \cap S \ne \emptyset$이고 $B(y, \varepsilon) \cap S \ne \emptyset$이므로, $d(x, s) < \varepsilon$인 $s \in S$와 $d(y, t) < \varepsilon$인 $t \in S$가 있다. 거리공간의 (3)(네 점을 잇는 부등식)과 거리의 조건 (iii), (2)의 (ii)에 의해
$$
\begin{aligned}
d(x, y) &\le d(x, s) + d(s, t) + d(t, y) \\
&< \varepsilon + \delta + \varepsilon = \delta + \eta
\end{aligned}
$$
이다(부등식은 순서 성질 (2)의 (iii)과 (iv)). 순서 성질 (2)의 (ii)에 의해 $d(x, y) - \delta < \eta$이고, 따라서 $d(x, y) - \delta \le \eta$이다. 이것이 모든 양의 실수 $\eta$에서 성립하므로 순서 성질 (9)에 의해 $d(x, y) - \delta \le 0$이고, 순서 성질 (3)의 (i)에 의해 $d(x, y) \le \delta$이다. (2)의 (iii)을 $\overline{S}$와 $c = \delta$에 쓰면 $\operatorname{diam} \overline{S} \le \operatorname{diam} S$이다. 순서 성질 (1)의 (ii)에 의해 두 지름은 같다.

**(7).** 먼저 $[a, b]$를 본다. [[interval]]의 (3)에 의해 $a, b \in [a, b]$이므로 $[a, b]$는 공집합이 아니고, 공 (5)에 의해 $[a, b]$는 닫힌 공이므로 유계 (1)의 (iv)에 의해 유계이다. $x, y \in [a, b]$이면 $x \le b$이고 $a \le y$이다. 순서 성질 (3)의 (iii)에 의해 $-y \le -a$이고, 순서 성질 (2)의 (iii)에 의해 $x - y \le b - a$이다. 같은 방식으로 $y - x \le b - a$이고, 순서 성질 (3)의 (iii)에 의해 $-(b - a) \le x - y$이다. [[absolute-value]]의 (7)에 의해 $d(x, y) = |x - y| \le b - a$이고, (2)의 (iii)에 의해 $\operatorname{diam} [a, b] \le b - a$이다. 한편 순서 성질 (3)의 (i)에 의해 $0 < b - a$이므로 [[absolute-value]]의 (1)에 의해 $d(b, a) = |b - a| = b - a$이고, (2)의 (ii)에 의해 $b - a \le \operatorname{diam} [a, b]$이다. 따라서 $\operatorname{diam} [a, b] = b - a$이다.

이제 $I$가 네 구간 가운데 하나라 하자. [[interval]]의 (3)에 의해 $\frac{a + b}{2} \in (a, b) \subseteq I \subseteq [a, b]$이므로 $I$는 공집합이 아니고 유계 (1)의 (i)에 의해 유계이다. [[closure-in-a-metric-space|거리공간의 폐포에 관한 정리]]의 (6)에 의해 $\overline{I} = [a, b]$이므로, (6)에 의해 $\operatorname{diam} I = \operatorname{diam} [a, b] = b - a$이다.

**(8).** $S \ne \emptyset$이므로 $s \in S$가 있고, 공 (6)에 의해 $1 < 2$이므로 $S \subseteq X = B(s, 2)$이다. 따라서 $S$는 유계이다. 한 점 집합이면 (3)에 의해 지름은 $0$이다. $S$에 서로 다른 두 점 $x$, $y$가 있으면 $d(x, y) = 1$이므로 (2)의 (ii)에 의해 $1 \le \operatorname{diam} S$이고, 이산 거리의 값은 $0$이나 $1$이므로 모든 $u, v \in S$에서 $d(u, v) \le 1$이어서 (2)의 (iii)에 의해 $\operatorname{diam} S \le 1$이다. 순서 성질 (1)의 (ii)에 의해 $\operatorname{diam} S = 1$이다.
:::

## 예시와 반례

:::example[같은 정사각형의 두 지름]
곱집합 $\mathbb{R} \times \mathbb{R}$의 부분집합 $Q = [0, 1] \times [0, 1]$을 봅시다. $Q$의 두 점 $p = (p_1, p_2)$, $q = (q_1, q_2)$에서 $p_1, q_1 \in [0, 1]$이고, $\mathbb{R}$의 보통 거리로 (7)에 의해 $\operatorname{diam} [0, 1] = 1$이므로 (2)의 (ii)에 의해 $|p_1 - q_1| \le 1$입니다. 같은 이유로 $|p_2 - q_2| \le 1$입니다.

최대 거리 $d_{\max}$를 주면 [[metric-space-examples]]의 (5)와 [[absolute-value]]의 (10)에 의해 $d_{\max}(p, q) \le 1$입니다. 그래서 (1)에 의해 $Q$는 유계이고 (2)의 (iii)에 의해 $\operatorname{diam} Q \le 1$이며, $o = (0, 0)$과 $e = (1, 1)$에서 $d_{\max}(o, e) = \max\{1, 1\} = 1$이므로 (2)의 (ii)에 의해 $d_{\max}$로 잰 지름은 $1$입니다. 합 거리 $d_{\mathrm{sum}}$을 주면 $d_{\mathrm{sum}}(p, q) = |p_1 - q_1| + |p_2 - q_2| \le 2$이고 $d_{\mathrm{sum}}(o, e) = 2$이므로 $d_{\mathrm{sum}}$으로 잰 지름은 $2$입니다. 같은 집합이라도 지름은 거리에 따라 다를 수 있습니다.
:::

:::counterexample[지름이 반지름의 두 배보다 작은 공]
$\mathbb{Z} \subseteq \mathbb{R}$에 부분공간 거리를 주고 $Z = B_{\mathbb{Z}}(0, 3/2)$를 봅시다. [[open-ball]]의 (7)과 (5)에 의해 $Z = (-3/2, 3/2) \cap \mathbb{Z}$입니다. 정수 $n$이 $n < 3/2$이면 $n < 2$이므로 (Z1)([[prime-number]]의 진술, [[order-properties-of-reals]]의 (10))에 의해 $n + 1 \le 2$, 곧 $n \le 1$이고, 같은 방식으로 $-3/2 < n$이면 $-1 \le n$입니다. 거꾸로 $-1$, $0$, $1$은 $(-3/2, 3/2)$에 속하므로 $Z = \{-1, 0, 1\}$입니다. $Z$의 두 점 사이의 거리는 $0$, $1$, $2$ 가운데 하나이므로 (2)의 (iii)에 의해 $\operatorname{diam} Z \le 2$이고, $d(-1, 1) = 2$이므로 $\operatorname{diam} Z = 2$입니다. 반지름의 두 배는 $3$이고 $2 < 3$입니다. 같은 반지름의 공 $B_{\mathbb{R}}(0, 3/2) = (-3/2, 3/2)$는 (7)에 의해 지름이 $3$입니다.
:::

## 확인 질문

:::check[지름이 $\delta$인 집합 $S$와 $s \in S$가 있으면 $S \subseteq B(s, \delta)$인가?]
그렇지 않을 수 있습니다. $\mathbb{R}$에서 $S = [0, 1]$, $s = 0$이면 (7)에 의해 $\delta = 1$인데, $1 \in S$이고 $d(0, 1) = 1$이 $1$보다 작지 않으므로 $1 \notin B(0, 1)$입니다. 반지름을 지름보다 조금이라도 크게 잡으면 됩니다. $\delta < r$이면 (2)의 (v)에 의해 $S \subseteq B(s, r)$입니다. 위의 $[0, 1]$에서도 $1 < r$이면 $[0, 1] \subseteq B(0, r)$입니다.
:::

:::check[공집합이 아니고 유계인 두 집합 $S$, $T$에 대하여 $\operatorname{diam}(S \cup T) \le \operatorname{diam} S + \operatorname{diam} T$가 늘 성립하는가?]
그렇지 않습니다. $\mathbb{R}$에서 $S = \{0\}$, $T = \{1\}$이면 (3)에 의해 $\operatorname{diam} S = \operatorname{diam} T = 0$입니다. 한편 $S \cup T = \{0, 1\}$은 $|0 - 0| = 0 < 2$, $|0 - 1| = 1 < 2$이므로 $B(0, 2)$에 포함되어 유계이고, $d(0, 1) = 1$이므로 (2)의 (ii)에 의해 $1 \le \operatorname{diam}(S \cup T)$입니다. $0 + 0 < 1$이므로 부등식은 성립하지 않습니다. 두 집합이 서로 멀리 떨어져 있으면 합집합의 지름은 두 지름의 합보다 클 수 있습니다.
:::
