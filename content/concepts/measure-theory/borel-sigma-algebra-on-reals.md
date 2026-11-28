---
title: ℝ 의 보렐 σ-대수
title_en: The Borel σ-Algebra on the Real Line
aliases: [보렐 σ-대수, 보렐 시그마 대수, 보렐 집합, Borel σ-algebra, Borel sets, Borel set]
kind: definition
field: measure-theory
msc: ["28A05", "54H05"]
level: undergrad
summary: 위상공간의 열린집합 전체가 생성한 σ-대수를 보렐 σ-대수라 하고, ℝ 의 열린집합을 유리수 끝점의 열린구간들의 집합열의 합집합으로 쓰는 식을 증명한 뒤, 열린구간, 유리수 끝점의 열린구간, 네 꼴의 반직선이 각각 ℝ 의 보렐 σ-대수를 생성한다는 것, 구간·한 점·가산집합·유리수·무리수가 보렐 집합이라는 것, 연속함수에 의한 보렐 집합의 역상이 보렐 집합이라는 것을 증명한다.
requires: [set, subset, set-operations, power-set, cartesian-product, function, image-and-preimage, preimage-and-set-operations, family-of-sets, sequence-of-sets, sigma-algebra, generated-sigma-algebra, topological-space, metric-space-examples, open-set-in-metric-space, open-ball, standard-topology-on-reals, open-and-closed-sets-of-reals, interval, continuous-map, continuity-criteria, continuity-agrees-with-analysis, continuous-function, continuity-of-sum-and-product, real-valued-function, real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property, rationals-are-dense, rational-and-irrational-numbers, countably-infinite-set, finite-set, n-and-z-have-equal-cardinality, pairing-of-natural-numbers, rationals-are-countable, injective-surjective-bijective, prime-number, well-ordering-principle]
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 2.3절 σ-algebra of Borel, Definition 2.26 과 그 앞뒤 문단 (p.34–35), Proposition 2.27–2.28 과 그 앞 문단 (p.36–37), Proposition 2.29 (p.37), Example 2.32 (p.38); 2.6절 Exercise 2.17 (p.53), Exercise 2.27 (p.55); 3.1절 Example 3.9 (p.62)
    checked: original
    note: "출처 2.3절(p.34)은 위상공간 (X, τ) 의 보렐 σ-대수를 B(X) := σ(τ) 로 정의하고, Definition 2.26(p.35)에서 ℝ 의 보통 위상 τ_R 로 B(R) := σ(τ_R) 을 정의한다. 이 항목은 B(R) 을 필기체 B 로 쓴다(이 사이트가 위상의 기저에 쓰는 글자 𝓑 와 구별하려는 것이다). 출처는 Definition 2.26 바로 뒤(p.35)에서 'ℝ 의 모든 열린집합은 끝점이 실수인 열린구간들의 많아야 가산인 족의 합집합으로 쓸 수 있다'고 증명 없이 적고 B(R) = σ({(a, b) : a < b}) 를 얻는다. 이 항목의 (2)는 열린집합을 유리수 끝점의 열린구간으로 된 집합열의 합집합으로 쓰는 식을 증명하고, (3)의 (i)(ii)로 열린구간 전체와 유리수 끝점의 열린구간 전체가 둘 다 생성한다는 것을 진술한다. 출처 p.36 의 본문은 [a, b], (a, +∞), (−∞, b), [a, +∞), (−∞, b], [a, b), (a, b], {a} 를 열린구간과 반직선의 가산 교집합·합집합으로 써서 보렐 집합임을 보이고 Proposition 2.27 로 모은다. 이 항목의 (4)는 같은 집합들을 열린집합과 닫힌집합의 교집합으로 얻는다. 출처 Proposition 2.28(p.36–37)은 ℕ, ℤ, ℚ 이 보렐 집합이라는 것을 한 점 집합의 합집합으로 보이고(ℚ 은 n, m ∈ ℤ, m ≠ 0 위의 합집합 ⋃{n/m}), 무리수 전체 I 는 ℝ ∖ ℚ 으로 얻는다. 이 항목의 (4)는 가산집합 일반에 대해 자연수에서 오는 전사로 같은 일을 한다. 출처 Proposition 2.29(p.37)는 닫힌구간, (a, b], [a, b), (a, +∞), (−∞, b] 의 족이 각각 B(R) 를 생성한다고 진술하고 닫힌구간의 경우만 증명한 뒤 나머지를 Exercise 2.27(p.55)로 돌린다. 이 항목의 (3)의 (iii)–(vi)은 네 꼴의 반직선을 다루고(출처의 (4)(5)에 (x < c)와 (c ≤ x) 꼴을 더했다), 구간 꼴은 싣지 않았다. 출처 Exercise 2.17 (b)(c)(p.53)는 집합족의 여집합들이 같은 σ-대수를 생성한다는 것과 C = τ 일 때의 뜻을 묻는다(닫힌집합 전체도 보렐 σ-대수를 생성한다는 출처 p.35 의 문장). 이 항목의 (1)은 닫힌집합이 보렐 집합이라는 것만 진술한다. 출처 Example 3.9(p.62)는 연속함수 f : ℝ → ℝ 가 보렐 가측이라는 것을 진술한다(이 항목의 (5)의 ℝ 판과 같은 사실)."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 표본 확인(작은 σ-대수의 계산, 선택이 필요한 꼴을 뺀 판단). 독립 검토 없음."
added: 2026-11-28
---

:::statement
σ-대수, (σ1)–(σ3), 가측집합은 [[sigma-algebra|σ-대수와 가측공간]]의 것이고, 생성한 σ-대수 $\sigma(\mathcal{C})$와 "생성한다"는 [[generated-sigma-algebra|생성한 σ-대수]]의 것이다. 위상공간과 열린집합은 [[topological-space]]의 것이고, $\mathbb{R}$의 보통 거리 $d$는 [[metric-space-examples]]의 (1)의 것이며, $(\mathbb{R}, d)$에서 열린집합과 닫힌집합은 [[open-set-in-metric-space]]의 것이다. $\mathbb{R}$의 보통 위상과 열린구간 전체의 집합족 $\mathcal{J}$는 [[standard-topology-on-reals]]의 (5)의 것이고, 아래에서 보통 위상을 $\mathcal{T}_{\mathbb{R}}$로 쓴다. 구간의 기호는 [[interval]]의 것이다($a < b$일 때만 쓴다). $\mathbb{Q}$는 [[rational-and-irrational-numbers]]의 것이고, $\mathbb{Q}$로의 전사 $q$는 [[rationals-are-countable|유리수의 가산성]]의 (4)의 것이며, $\kappa_1$, $\kappa_2$는 [[pairing-of-natural-numbers|ℕ × ℕ 과 ℕ 의 전단사]]의 것이다. 가산은 [[countably-infinite-set]]의 것이다.

**보렐 σ-대수.** $(X, \mathcal{T})$가 위상공간이면 $\mathcal{T} \subseteq \mathscr{P}(X)$이고, $X$ 위에서 $\mathcal{T}$가 생성한 σ-대수 $\sigma(\mathcal{T})$를 $(X, \mathcal{T})$의 **보렐 σ-대수**(Borel σ-algebra)라 한다. 특히 $\mathbb{R}$ 위에서 $\mathcal{T}_{\mathbb{R}}$가 생성한 σ-대수
$$
\mathscr{B}(\mathbb{R}) = \sigma(\mathcal{T}_{\mathbb{R}})
$$
를 **$\mathbb{R}$의 보렐 σ-대수**라 하고, 그 원소를 **보렐 집합**(Borel set)이라 한다.

**유리수 끝점의 열린구간.** 자연수 $m$에 대하여 $s_m = q(\kappa_1(m))$, $t_m = q(\kappa_2(m))$으로 둔다. 끝점이 유리수인 열린구간 전체의 집합족을
$$
\begin{aligned}
& \mathcal{J}_{\mathbb{Q}} = \{I \in \mathscr{P}(\mathbb{R}) : \\
& \qquad p < r \text{이고 } I = (p, r) \text{인} \\
& \qquad \text{유리수 } p, r \text{가 있다}\}
\end{aligned}
$$
로 둔다. $\mathbb{R}$의 부분집합 $U$와 자연수 $m$에 대하여, $s_m < t_m$이고 $(s_m, t_m) \subseteq U$이면 $J_m(U) = (s_m, t_m)$, 그렇지 않으면 $J_m(U) = \emptyset$으로 둔다. 그러면 $m$번째 항이 $J_m(U)$인 $\mathbb{R}$의 집합열이 정해진다.

**네 꼴의 반직선.** 실수 $c$마다 정해진 집합들로 다음 네 집합족을 둔다(식으로 정한 집합족).
$$
\begin{aligned}
\mathcal{R}_1 &= \bigl\{\{x \in \mathbb{R} : c < x\} : c \in \mathbb{R}\bigr\}, \\
\mathcal{R}_2 &= \bigl\{\{x \in \mathbb{R} : c \le x\} : c \in \mathbb{R}\bigr\}, \\
\mathcal{R}_3 &= \bigl\{\{x \in \mathbb{R} : x < c\} : c \in \mathbb{R}\bigr\}, \\
\mathcal{R}_4 &= \bigl\{\{x \in \mathbb{R} : x \le c\} : c \in \mathbb{R}\bigr\}
\end{aligned}
$$

다음이 성립한다.

1. (열린집합과 닫힌집합) $(X, \mathcal{T})$가 위상공간이면 $\mathcal{T} \subseteq \sigma(\mathcal{T})$이고, $X - F \in \mathcal{T}$인 $X$의 부분집합 $F$는 $\sigma(\mathcal{T})$의 원소이다. 특히 $(\mathbb{R}, d)$에서 열린집합과 닫힌집합은 보렐 집합이다.
2. (열린집합을 유리수 끝점의 열린구간으로 쓰기) $U$가 $(\mathbb{R}, d)$에서 열린집합이면, 모든 자연수 $m$에서 $J_m(U) \in \mathcal{J}_{\mathbb{Q}} \cup \{\emptyset\}$이고 $J_m(U) \subseteq U$이며
   $$
   U = \bigcup_{m=1}^{\infty} J_m(U)
   $$
   이다.
3. (생성하는 집합족) $\mathcal{J}$, $\mathcal{J}_{\mathbb{Q}}$, $\mathcal{R}_1$, $\mathcal{R}_2$, $\mathcal{R}_3$, $\mathcal{R}_4$는 각각 $\mathscr{B}(\mathbb{R})$를 생성한다. 곧 다음이 성립한다.
   - (i) $\sigma(\mathcal{J}) = \mathscr{B}(\mathbb{R})$
   - (ii) $\sigma(\mathcal{J}_{\mathbb{Q}}) = \mathscr{B}(\mathbb{R})$
   - (iii) $\sigma(\mathcal{R}_1) = \mathscr{B}(\mathbb{R})$
   - (iv) $\sigma(\mathcal{R}_2) = \mathscr{B}(\mathbb{R})$
   - (v) $\sigma(\mathcal{R}_3) = \mathscr{B}(\mathbb{R})$
   - (vi) $\sigma(\mathcal{R}_4) = \mathscr{B}(\mathbb{R})$
4. (보렐 집합의 예) $a < b$인 실수 $a$, $b$와 실수 $c$에 대하여 다음은 보렐 집합이다.
   - (i) $(a, b)$, $[a, b]$, $[a, b)$, $(a, b]$와 $\{x \in \mathbb{R} : c < x\}$, $\{x \in \mathbb{R} : c \le x\}$, $\{x \in \mathbb{R} : x < c\}$, $\{x \in \mathbb{R} : x \le c\}$
   - (ii) 한 점 집합 $\{c\}$
   - (iii) $\mathbb{R}$의 가산인 부분집합. 특히 $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$
   - (iv) 무리수 전체의 집합 $\mathbb{R} - \mathbb{Q}$
5. (연속함수의 역상) $(X, \mathcal{T}_X)$, $(Y, \mathcal{T}_Y)$가 위상공간이고 $f : X \to Y$가 [[continuous-map|위상공간 사이의 연속함수]]이면, $\sigma(\mathcal{T}_Y)$의 모든 원소 $B$에서 $f^{-1}(B) \in \sigma(\mathcal{T}_X)$이다. 특히 $f : \mathbb{R} \to \mathbb{R}$가 [[continuous-function|연속함수]]이면, 모든 보렐 집합 $B$에서 $f^{-1}(B)$는 보렐 집합이다.
:::

:::english
σ-algebras, (σ1)–(σ3), and measurable sets are as in [[sigma-algebra]], and the generated σ-algebra $\sigma(\mathcal{C})$ and "generates" are as in [[generated-sigma-algebra]]. Topological spaces and open sets are as in [[topological-space]], the usual metric $d$ on $\mathbb{R}$ is as in item (1) of [[metric-space-examples]], and open and closed sets in $(\mathbb{R}, d)$ are as in [[open-set-in-metric-space]]. The standard topology on $\mathbb{R}$ and the family $\mathcal{J}$ of all open intervals are as in item (5) of [[standard-topology-on-reals]]; below, the standard topology is written $\mathcal{T}_{\mathbb{R}}$. Interval notation is as in [[interval]] (used only when $a < b$). $\mathbb{Q}$ is as in [[rational-and-irrational-numbers]], the surjection $q$ onto $\mathbb{Q}$ is as in item (4) of [[rationals-are-countable]], and $\kappa_1$, $\kappa_2$ are as in [[pairing-of-natural-numbers]]. Countability is as in [[countably-infinite-set]].

**Borel σ-algebra.** If $(X, \mathcal{T})$ is a topological space, then $\mathcal{T} \subseteq \mathscr{P}(X)$, and the σ-algebra $\sigma(\mathcal{T})$ on $X$ generated by $\mathcal{T}$ is called the **Borel σ-algebra** of $(X, \mathcal{T})$. In particular, the σ-algebra on $\mathbb{R}$ generated by $\mathcal{T}_{\mathbb{R}}$,
$$
\mathscr{B}(\mathbb{R}) = \sigma(\mathcal{T}_{\mathbb{R}}),
$$
is called the **Borel σ-algebra of $\mathbb{R}$**, and its elements are called **Borel sets**.

**Open intervals with rational endpoints.** For a natural number $m$, let $s_m = q(\kappa_1(m))$ and $t_m = q(\kappa_2(m))$. Let the family of all open intervals with rational endpoints be
$$
\begin{aligned}
& \mathcal{J}_{\mathbb{Q}} = \{I \in \mathscr{P}(\mathbb{R}) : \\
& \qquad \text{there are rational } p, r \\
& \qquad \text{with } p < r \text{ and } I = (p, r)\}.
\end{aligned}
$$
For a subset $U$ of $\mathbb{R}$ and a natural number $m$, let $J_m(U) = (s_m, t_m)$ if $s_m < t_m$ and $(s_m, t_m) \subseteq U$, and $J_m(U) = \emptyset$ otherwise. This determines the sequence of subsets of $\mathbb{R}$ whose $m$th term is $J_m(U)$.

**Four kinds of rays.** Using the sets determined by each real number $c$, we define the following four families (families defined by a formula).
$$
\begin{aligned}
\mathcal{R}_1 &= \bigl\{\{x \in \mathbb{R} : c < x\} : c \in \mathbb{R}\bigr\}, \\
\mathcal{R}_2 &= \bigl\{\{x \in \mathbb{R} : c \le x\} : c \in \mathbb{R}\bigr\}, \\
\mathcal{R}_3 &= \bigl\{\{x \in \mathbb{R} : x < c\} : c \in \mathbb{R}\bigr\}, \\
\mathcal{R}_4 &= \bigl\{\{x \in \mathbb{R} : x \le c\} : c \in \mathbb{R}\bigr\}
\end{aligned}
$$

The following hold.

1. (Open and closed sets) If $(X, \mathcal{T})$ is a topological space, then $\mathcal{T} \subseteq \sigma(\mathcal{T})$, and every subset $F$ of $X$ with $X - F \in \mathcal{T}$ is an element of $\sigma(\mathcal{T})$. In particular, open sets and closed sets in $(\mathbb{R}, d)$ are Borel sets.
2. (Writing open sets with open intervals with rational endpoints) If $U$ is an open set in $(\mathbb{R}, d)$, then $J_m(U) \in \mathcal{J}_{\mathbb{Q}} \cup \{\emptyset\}$ and $J_m(U) \subseteq U$ for every natural number $m$, and
   $$
   U = \bigcup_{m=1}^{\infty} J_m(U).
   $$
3. (Generating families) Each of $\mathcal{J}$, $\mathcal{J}_{\mathbb{Q}}$, $\mathcal{R}_1$, $\mathcal{R}_2$, $\mathcal{R}_3$, $\mathcal{R}_4$ generates $\mathscr{B}(\mathbb{R})$. That is:
   - (i) $\sigma(\mathcal{J}) = \mathscr{B}(\mathbb{R})$
   - (ii) $\sigma(\mathcal{J}_{\mathbb{Q}}) = \mathscr{B}(\mathbb{R})$
   - (iii) $\sigma(\mathcal{R}_1) = \mathscr{B}(\mathbb{R})$
   - (iv) $\sigma(\mathcal{R}_2) = \mathscr{B}(\mathbb{R})$
   - (v) $\sigma(\mathcal{R}_3) = \mathscr{B}(\mathbb{R})$
   - (vi) $\sigma(\mathcal{R}_4) = \mathscr{B}(\mathbb{R})$
4. (Examples of Borel sets) For real numbers $a < b$ and a real number $c$, the following are Borel sets.
   - (i) $(a, b)$, $[a, b]$, $[a, b)$, $(a, b]$ and $\{x \in \mathbb{R} : c < x\}$, $\{x \in \mathbb{R} : c \le x\}$, $\{x \in \mathbb{R} : x < c\}$, $\{x \in \mathbb{R} : x \le c\}$
   - (ii) the singleton $\{c\}$
   - (iii) every countable subset of $\mathbb{R}$; in particular $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$
   - (iv) the set $\mathbb{R} - \mathbb{Q}$ of all irrational numbers
5. (Preimages under continuous functions) If $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ are topological spaces and $f : X \to Y$ is a continuous map, then $f^{-1}(B) \in \sigma(\mathcal{T}_X)$ for every element $B$ of $\sigma(\mathcal{T}_Y)$. In particular, if $f : \mathbb{R} \to \mathbb{R}$ is a continuous function, then $f^{-1}(B)$ is a Borel set for every Borel set $B$.
:::

## 직관

보렐 집합은 열린집합을 모두 담는 가장 작은 σ-대수의 원소입니다. 그래서 열린집합에서 출발해 여집합과 집합열의 합집합을 몇 번 취해 얻는 집합은 모두 보렐 집합입니다. 구간, 한 점, 유리수 전체처럼 해석학에서 만나는 집합은 대개 이렇게 얻습니다((4)). 레고 블록에 비유하면 열린구간이 블록이고, σ-대수의 조건이 블록을 붙이고 떼는 규칙입니다. 다만 블록을 끝없이 많이 붙일 때는 블록에 자연수로 번호가 붙어 있어야 합니다. (σ3)이 집합열의 합집합만 말하기 때문입니다.

그래서 열린집합 하나를 열린구간들의 합집합으로 쓸 때도 구간들을 자연수로 늘어놓아야 합니다. (2)는 유리수의 순서쌍에 붙인 번호를 그대로 씁니다. $m$번째 순서쌍 $(s_m, t_m)$이 $U$ 안에 드는 열린구간을 이루면 그 구간을, 아니면 공집합을 $m$번째 항으로 둡니다. 어느 쪽인지는 $U$와 $m$으로 정해지므로 무엇을 골라야 하는 곳이 없습니다. $U$의 점 $x$마다 $x$를 품고 $U$ 안에 드는 유리수 끝점의 구간이 있다는 것은 유리수의 조밀성에서 나오고, 그 구간이 늘어놓은 열의 어딘가에 나온다는 것은 번호가 전사이기 때문입니다.

생성하는 집합족을 바꿀 수 있다는 (3)이 있으면, 어떤 σ-대수가 모든 보렐 집합을 담는다는 것을 보일 때 반직선 한 꼴만 담는다는 것을 확인하면 됩니다([[generated-sigma-algebra|생성한 σ-대수]]의 (2)의 (ii)). (5)의 증명이 열린집합으로 같은 일을 합니다.

## 성질의 증명

:::proof
**준비.** 실수의 계산과 순서는 [[real-number-arithmetic]], [[real-order-axioms]]의 (W1)–(W4), [[order-properties-of-reals]]로 다룬다. [[standard-topology-on-reals]]의 (5)에 의해 $U \subseteq \mathbb{R}$이 $\mathcal{T}_{\mathbb{R}}$의 원소인 것은 정확히 $U$가 $(\mathbb{R}, d)$에서 열린집합일 때이다. [[open-set-in-metric-space]]의 정의에 의해 $F \subseteq \mathbb{R}$이 $(\mathbb{R}, d)$에서 닫힌집합인 것은 정확히 $\mathbb{R} - F$가 $(\mathbb{R}, d)$에서 열린집합, 곧 $\mathbb{R} - F \in \mathcal{T}_{\mathbb{R}}$일 때이다. [[generated-sigma-algebra|생성한 σ-대수]]의 (2)의 (i)에 의해 $\mathscr{B}(\mathbb{R})$는 $\mathbb{R}$ 위의 σ-대수이다. 아래에서 "원소 판정"은 [[sequence-of-sets|집합열]]의 (1)을 뜻한다.

**(1)** 생성한 σ-대수의 (2)의 (i)에 의해 $\mathcal{T} \subseteq \sigma(\mathcal{T})$이다. $X - F \in \mathcal{T}$이면 $X - F \in \sigma(\mathcal{T})$이고, [[sigma-algebra|σ-대수]]의 (σ2)에 의해 $X - (X - F) \in \sigma(\mathcal{T})$이다. $F \subseteq X$이므로 σ-대수의 (1)의 마지막 등식에 의해 $X - (X - F) = F$이다. $\mathbb{R}$의 경우는 준비의 두 문장과 이것을 $(\mathbb{R}, \mathcal{T}_{\mathbb{R}})$에 쓴 것이다.

**(2)** 각 $m$에서 $J_m(U)$는 정의의 두 경우 가운데 하나이다. 첫째 경우 $s_m$, $t_m$은 유리수이고 $s_m < t_m$이므로 $J_m(U) = (s_m, t_m) \in \mathcal{J}_{\mathbb{Q}}$이고 $(s_m, t_m) \subseteq U$이다. 둘째 경우 $J_m(U) = \emptyset \subseteq U$이다. 따라서 집합열의 (2)에 의해 $\bigcup_{m=1}^{\infty} J_m(U) \subseteq U$이다.

거꾸로 $x \in U$라 하자. $U$는 열린집합이므로 $B(x, r) \subseteq U$인 실수 $r > 0$이 있다. [[open-ball]]의 (5)에 의해 $B(x, r) = (x - r, x + r)$이고, 같은 항목의 (1)에 의해 $x \in B(x, r)$이므로 $x - r < x < x + r$이다. [[rationals-are-dense|유리수의 조밀성]]의 (2)에 의해 $x - r < p < x$인 유리수 $p$와 $x < t < x + r$인 유리수 $t$가 있다. (W2)에 의해 $p < t$이다. 실수 $y$가 $p < y < t$이면 (W2)에 의해 $x - r < y < x + r$이므로 $y \in B(x, r) \subseteq U$이다. 따라서 $(p, t) \subseteq U$이고, $p < x < t$이므로 $x \in (p, t)$이다. [[rationals-are-countable|유리수의 가산성]]의 (6)에 의해 $m$에서의 값이 $(s_m, t_m)$인 함수 $\mathbb{N} \to \mathbb{Q} \times \mathbb{Q}$는 전사이므로 $(s_m, t_m) = (p, t)$인 자연수 $m$이 있고, [[cartesian-product|곱집합]]의 순서쌍의 같음에 의해 $s_m = p$, $t_m = t$이다. 그러면 $s_m < t_m$이고 $(s_m, t_m) \subseteq U$이므로 $J_m(U) = (p, t)$이고 $x \in J_m(U)$이다. 원소 판정에 의해 $x \in \bigcup_{m=1}^{\infty} J_m(U)$이다.

**(3)** 각 경우에 생성한 σ-대수의 (3)의 (v)를 쓴다. 곧 두 집합족이 서로 상대의 생성한 σ-대수에 포함됨을 보인다.

(i)과 (ii). $\mathcal{J}_{\mathbb{Q}} \subseteq \mathcal{J}$는 정의에서 나온다(유리수는 실수이다). [[open-and-closed-sets-of-reals]]의 (1)과 준비에 의해 $\mathcal{J} \subseteq \mathcal{T}_{\mathbb{R}}$이다. 생성한 σ-대수의 (3)의 (i)에 의해 $\sigma(\mathcal{J}_{\mathbb{Q}}) \subseteq \sigma(\mathcal{J}) \subseteq \sigma(\mathcal{T}_{\mathbb{R}})$이다. 거꾸로 $U \in \mathcal{T}_{\mathbb{R}}$이면 (2)에 의해 $U = \bigcup_{m=1}^{\infty} J_m(U)$이고 각 항은 $\mathcal{J}_{\mathbb{Q}}$의 원소이거나 $\emptyset$이다. $\mathcal{J}_{\mathbb{Q}} \subseteq \sigma(\mathcal{J}_{\mathbb{Q}})$이고 σ-대수의 (1)에 의해 $\emptyset \in \sigma(\mathcal{J}_{\mathbb{Q}})$이므로 이 집합열은 $\sigma(\mathcal{J}_{\mathbb{Q}})$의 원소로 된 집합열이고, (σ3)에 의해 $U \in \sigma(\mathcal{J}_{\mathbb{Q}})$이다. 따라서 $\mathcal{T}_{\mathbb{R}} \subseteq \sigma(\mathcal{J}_{\mathbb{Q}})$이고, 생성한 σ-대수의 (3)의 (iv)에 의해 $\sigma(\mathcal{T}_{\mathbb{R}}) \subseteq \sigma(\mathcal{J}_{\mathbb{Q}})$이다. 세 포함을 합치면 $\sigma(\mathcal{J}_{\mathbb{Q}}) = \sigma(\mathcal{J}) = \mathscr{B}(\mathbb{R})$이다.

반직선을 다루기 전에 실수 $c$에 대한 두 등식을 보인다. 아래에서 $n$번째 항이 각각 $\{x \in \mathbb{R} : x \le c - \tfrac{1}{n}\}$, $\{x \in \mathbb{R} : c + \tfrac{1}{n} \le x\}$인 집합열을 쓴다. 이제부터 $\{x : \dots\}$는 $\{x \in \mathbb{R} : \dots\}$를 줄여 쓴 것이다.
$$
\begin{gathered}
\{x : x < c\} = \bigcup_{n=1}^{\infty} \{x : x \le c - \tfrac{1}{n}\}, \\
\{x : c < x\} = \bigcup_{n=1}^{\infty} \{x : c + \tfrac{1}{n} \le x\}
\end{gathered}
$$
자연수 $n$에서 $0 < \tfrac{1}{n}$이다([[order-properties-of-reals]]의 (6)의 (i)). 첫째 등식: $x < c$이면 같은 항목의 (3)의 (i)에 의해 $0 < c - x$이고, [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $\tfrac{1}{n} < c - x$인 자연수 $n$이 있으며, 같은 항목의 (2)의 (ii)에 의해 양변에 $x - \tfrac{1}{n}$을 더하면 $x < c - \tfrac{1}{n}$이다. 거꾸로 $x \le c - \tfrac{1}{n}$이면, $0 < \tfrac{1}{n}$의 양변에 $c - \tfrac{1}{n}$을 더해 $c - \tfrac{1}{n} < c$이므로 같은 항목의 (1)의 (v)에 의해 $x < c$이다. 원소 판정으로 첫째 등식이 나온다. 둘째 등식: $c < x$이면 같은 방법으로 $0 < x - c$이고 $\tfrac{1}{n} < x - c$인 자연수 $n$이 있으며, 양변에 $c$를 더하면 $c + \tfrac{1}{n} < x$이다. 거꾸로 $c + \tfrac{1}{n} \le x$이면 $0 < \tfrac{1}{n}$의 양변에 $c$를 더해 $c < c + \tfrac{1}{n}$이므로 $c < x$이다.

또 [[order-properties-of-reals]]의 (1)의 (iii)에 의해 실수 $x$와 $c$에서 "$c < x$가 아니다"는 "$x \le c$"와 같고 "$x < c$가 아니다"는 "$c \le x$"와 같으므로
$$
\begin{gathered}
\mathbb{R} - \{x : c < x\} = \{x : x \le c\}, \\
\mathbb{R} - \{x : x < c\} = \{x : c \le x\}
\end{gathered}
$$
이다. 이 둘에 $\mathbb{R} - (\mathbb{R} - A) = A$($A \subseteq \mathbb{R}$, σ-대수의 (1))를 쓰면 $\mathbb{R} - \{x : x \le c\} = \{x : c < x\}$, $\mathbb{R} - \{x : c \le x\} = \{x : x < c\}$도 얻는다.

[[open-and-closed-sets-of-reals]]의 (1)에 의해 $\mathcal{R}_1$과 $\mathcal{R}_3$의 원소는 열린집합이고, (2)에 의해 $\mathcal{R}_2$와 $\mathcal{R}_4$의 원소는 닫힌집합이다. (1)에 의해 네 집합족은 모두 σ-대수 $\mathscr{B}(\mathbb{R})$에 포함되므로, 생성한 σ-대수의 (2)의 (ii)에 의해 $\sigma(\mathcal{R}_k) \subseteq \mathscr{B}(\mathbb{R})$이다($k = 1, 2, 3, 4$). 남은 것은 반대쪽 포함이다.

(iii) $\mathcal{K} = \sigma(\mathcal{R}_1)$이라 하자. 실수 $c$에서 $\{x : c < x\} \in \mathcal{K}$이므로 (σ2)와 위의 여집합 등식에 의해 $\{x : x \le c\} \in \mathcal{K}$이다. 따라서 $n$번째 항이 $\{x : x \le c - \tfrac{1}{n}\}$인 집합열은 $\mathcal{K}$의 원소로 된 집합열이고, 첫째 합집합 등식과 (σ3)에 의해 $\{x : x < c\} \in \mathcal{K}$이다. $a < b$이면 $(a, b) = \{x : a < x\} \cap \{x : x < b\}$이므로([[interval]]의 정의) σ-대수의 (1)에 의해 $(a, b) \in \mathcal{K}$이다. 따라서 $\mathcal{J} \subseteq \mathcal{K}$이고, (i)과 생성한 σ-대수의 (3)의 (iv)에 의해 $\mathscr{B}(\mathbb{R}) = \sigma(\mathcal{J}) \subseteq \mathcal{K}$이다.

(iv) $\mathcal{K} = \sigma(\mathcal{R}_2)$라 하자. 실수 $c$에서 $n$번째 항이 $\{x : c + \tfrac{1}{n} \le x\}$인 집합열은 $\mathcal{K}$의 원소로 된 집합열이므로, 둘째 합집합 등식과 (σ3)에 의해 $\{x : c < x\} \in \mathcal{K}$이다. 따라서 $\mathcal{R}_1 \subseteq \mathcal{K}$이고, (iii)과 생성한 σ-대수의 (3)의 (iv)에 의해 $\mathscr{B}(\mathbb{R}) = \sigma(\mathcal{R}_1) \subseteq \mathcal{K}$이다.

(v) $\mathcal{K} = \sigma(\mathcal{R}_3)$이라 하자. 실수 $c$에서 $\{x : x < c\} \in \mathcal{K}$이므로 (σ2)와 여집합 등식에 의해 $\{x : c \le x\} \in \mathcal{K}$이다. 따라서 $\mathcal{R}_2 \subseteq \mathcal{K}$이고, (iv)에 의해 $\mathscr{B}(\mathbb{R}) = \sigma(\mathcal{R}_2) \subseteq \mathcal{K}$이다.

(vi) $\mathcal{K} = \sigma(\mathcal{R}_4)$라 하자. 실수 $c$에서 $\{x : x \le c\} \in \mathcal{K}$이므로 (σ2)와 여집합 등식에 의해 $\{x : c < x\} \in \mathcal{K}$이다. 따라서 $\mathcal{R}_1 \subseteq \mathcal{K}$이고, (iii)에 의해 $\mathscr{B}(\mathbb{R}) = \sigma(\mathcal{R}_1) \subseteq \mathcal{K}$이다.

**(4)** (i) $(a, b)$와 $\{x : c < x\}$, $\{x : x < c\}$는 [[open-and-closed-sets-of-reals]]의 (1)에 의해 열린집합이고, $[a, b]$와 $\{x : c \le x\}$, $\{x : x \le c\}$는 같은 항목의 (2)에 의해 닫힌집합이므로 (1)에 의해 보렐 집합이다. [[interval]]의 정의에 의해 $[a, b) = \{x : a \le x\} \cap \{x : x < b\}$이고 $(a, b] = \{x : a < x\} \cap \{x : x \le b\}$이므로, σ-대수의 (1)에 의해 둘 다 보렐 집합이다.

(ii) [[open-and-closed-sets-of-reals]]의 (2)에 의해 $\{c\}$는 닫힌집합이고 (1)에 의해 보렐 집합이다.

(iii) $C \subseteq \mathbb{R}$이 가산이라 하자. $C = \emptyset$이면 σ-대수의 (1)에 의해 $C \in \mathscr{B}(\mathbb{R})$이다. $C \ne \emptyset$이면 [[rationals-are-countable|유리수의 가산성]]의 (2)에 의해 전사 $g : \mathbb{N} \to C$가 있다. 그런 전사 하나를 $g$로 두자. $n$번째 항이 $\{g(n)\}$인 $\mathbb{R}$의 집합열은 (ii)에 의해 $\mathscr{B}(\mathbb{R})$의 원소로 된 집합열이다. 원소 판정에 의해 $x$가 그 합집합에 속하는 것은 $x = g(n)$인 $n$이 있을 때이고, $g$의 값은 $C$에 들고 $g$는 전사이므로 이것은 $x \in C$일 때이다. 따라서 $C = \bigcup_{n=1}^{\infty} \{g(n)\}$이고 (σ3)에 의해 $C \in \mathscr{B}(\mathbb{R})$이다.

$\mathbb{N}$은 항등함수가 $\mathbb{N}$에서 $\mathbb{N}$으로의 전단사이므로 가산 무한이고([[countably-infinite-set]]), $\mathbb{Z}$는 [[n-and-z-have-equal-cardinality]]에 의해 가산 무한이며, $\mathbb{Q}$는 유리수의 가산성의 (5)에 의해 가산 무한이다. 가산 무한인 집합은 가산이고, 세 집합은 모두 $\mathbb{R}$의 부분집합이다(정수는 유리수이고 유리수는 실수이다. [[rationals-are-dense|유리수의 조밀성]]의 (1)과 [[rational-and-irrational-numbers]]의 정의). 따라서 앞 문단에 의해 보렐 집합이다.

(iv) (iii)과 (σ2)에 의해 $\mathbb{R} - \mathbb{Q} \in \mathscr{B}(\mathbb{R})$이다.

**(5)** $\mathcal{N} = \{B \in \mathscr{P}(Y) : f^{-1}(B) \in \sigma(\mathcal{T}_X)\}$로 두자. 생성한 σ-대수의 (2)의 (i)에 의해 $\sigma(\mathcal{T}_X)$는 $X$ 위의 σ-대수이므로, σ-대수의 (7)에 의해 $\mathcal{N}$은 $Y$ 위의 σ-대수이다. $V \in \mathcal{T}_Y$이면 연속의 정의에 의해 $f^{-1}(V) \in \mathcal{T}_X \subseteq \sigma(\mathcal{T}_X)$이므로 $V \in \mathcal{N}$이다. 곧 $\mathcal{T}_Y \subseteq \mathcal{N}$이고, 생성한 σ-대수의 (2)의 (ii)에 의해 $\sigma(\mathcal{T}_Y) \subseteq \mathcal{N}$이다. 이것이 첫 문장이다.

$f : \mathbb{R} \to \mathbb{R}$가 해석학 입문의 뜻의 연속함수이면, [[continuity-agrees-with-analysis|해석학 입문의 연속과 같다]]의 (3)에 의해 $f : (\mathbb{R}, \mathcal{T}_{\mathbb{R}}) \to (\mathbb{R}, \mathcal{T}_{\mathbb{R}})$는 위상의 뜻으로 모든 점에서 연속이고, [[continuity-criteria|연속의 판정]]의 (2)에 의해 연속이다. 첫 문장을 $X = Y = \mathbb{R}$에 쓰면 된다.
:::

## 예시와 반례

:::example[제곱이 유리수인 실수 전체]
$A = \{x \in \mathbb{R} : x \cdot x \in \mathbb{Q}\}$는 보렐 집합입니다. $f(x) = x \cdot x$로 정한 함수 $f : \mathbb{R} \to \mathbb{R}$는 [[continuous-function|연속함수]]의 (4)의 항등함수와 [[continuity-of-sum-and-product|연속함수의 합과 곱]]의 (3)에 의해 연속함수이고, $A = f^{-1}(\mathbb{Q})$입니다. (4)의 (iii)에 의해 $\mathbb{Q}$는 보렐 집합이므로 (5)에 의해 $A$는 보렐 집합입니다.

유리수끼리의 곱은 유리수이므로([[rationals-are-dense|유리수의 조밀성]]의 (1)) $\mathbb{Q} \subseteq A$입니다. 이 계산에는 $A$가 그 밖에 어떤 수를 담는지도, $A$가 가산인지도 쓰이지 않습니다. 연속함수에 의한 보렐 집합의 역상이라는 것만으로 보렐 집합임이 나옵니다.
:::

:::counterexample[실수의 보통 위상은 σ-대수가 아니다]
열린구간 $(0, 1)$은 $\mathcal{T}_{\mathbb{R}}$의 원소입니다([[open-and-closed-sets-of-reals]]의 (1)). 그 여집합 $\mathbb{R} - (0, 1)$이 $\mathcal{T}_{\mathbb{R}}$의 원소라면, 닫힌집합의 정의에 의해 $(0, 1)$은 $(\mathbb{R}, d)$에서 닫힌집합이 됩니다. 그러나 같은 항목의 (4)에 의해 $(0, 1)$은 닫힌집합이 아닙니다. 따라서 $\mathcal{T}_{\mathbb{R}}$는 (σ2)를 만족하지 않고 σ-대수가 아닙니다. (1)에 의해 $\mathcal{T}_{\mathbb{R}} \subseteq \mathscr{B}(\mathbb{R})$이고, $\mathbb{R} - (0, 1)$은 보렐 집합이지만 열린집합이 아니므로 이 포함에서 두 집합족은 같지 않습니다.
:::

## 역사와 맥락

출처의 강의록은 $\mathbb{R}$의 보렐 σ-대수를 1898년에 프랑스 수학자 에밀 보렐(Émile Borel)이 도입했다고 적고, 보렐이 르네루이 베르, 앙리 르베그와 함께 측도론과 그 확률론 응용의 개척자 가운데 한 사람이었다고 적습니다.

## 확인 질문

:::check[모든 정수 $k$에 대한 $\{x \in \mathbb{R} : k \le x < k + \tfrac{1}{2}\}$의 합집합 $H$는 보렐 집합인가?]
그렇습니다. 각 정수 $k$에서 $k < k + \tfrac{1}{2}$이므로 이 집합은 반열린구간 $[k, k + \tfrac{1}{2})$입니다. [[n-and-z-have-equal-cardinality]]의 전단사를 $z : \mathbb{N} \to \mathbb{Z}$라 하면, $n$번째 항이 $[z(n), z(n) + \tfrac{1}{2})$인 집합열은 (4)의 (i)에 의해 보렐 집합으로 된 집합열입니다. $z$가 전사이므로 원소 판정에 의해 그 합집합은 $H$이고, (σ3)에 의해 $H$는 보렐 집합입니다.
:::

:::check[끝점이 정수인 열린구간 전체 $\mathcal{J}_{\mathbb{Z}} = \{(k, l) : k, l \in \mathbb{Z},\ k < l\}$는 $\mathscr{B}(\mathbb{R})$를 생성하는가?]
생성하지 않습니다. $\mathbb{R}$의 부분집합 $A$ 가운데 "모든 정수 $k$에서 $(k, k + 1) \subseteq A$이거나 $(k, k + 1) \cap A = \emptyset$"인 것 전체를 $\mathcal{S}$라 합시다. $\mathbb{R} \in \mathcal{S}$이고, $A \in \mathcal{S}$이면 두 경우가 서로 바뀌므로 $\mathbb{R} - A \in \mathcal{S}$이며, 집합열의 합집합은 어떤 항이 $(k, k + 1)$을 포함하면 그것을 포함하고 아니면 모든 항이 $(k, k + 1)$과 서로소이므로 합집합도 서로소입니다. 따라서 $\mathcal{S}$는 σ-대수입니다. $k < l$인 정수에서 $(k, l) \in \mathcal{S}$입니다. 정수 $j$가 $k \le j$이고 $j + 1 \le l$이면 $(j, j + 1) \subseteq (k, l)$이고, $j < k$이면 $j + 1 \le k$이며([[prime-number]]의 (Z1)) $l < j + 1$이면 $l \le j$이므로 어느 쪽이든 $(j, j + 1)$과 $(k, l)$은 서로소입니다. 따라서 [[generated-sigma-algebra|생성한 σ-대수]]의 (2)의 (ii)에 의해 $\sigma(\mathcal{J}_{\mathbb{Z}}) \subseteq \mathcal{S}$입니다. 그런데 $(0, \tfrac{1}{2})$은 $(0, 1)$을 포함하지 않고($\tfrac{3}{4}$이 빠진다) $(0, 1)$과 서로소도 아니므로($\tfrac{1}{4}$이 공통) $\mathcal{S}$에 들지 않습니다. $(0, \tfrac{1}{2})$은 보렐 집합이므로 $\sigma(\mathcal{J}_{\mathbb{Z}}) \ne \mathscr{B}(\mathbb{R})$입니다.
:::
