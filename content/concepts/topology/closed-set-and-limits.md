---
title: 닫힌집합은 수렴하는 수열의 극한을 포함한다
title_en: Closed Sets Contain Limits of Convergent Sequences
aliases: [수열의 극한과 폐포, 닫힌집합과 수열, limits of sequences lie in the closure, sequence lemma]
kind: proposition
field: topology
msc: ["54A20", "54A05"]
level: undergrad
summary: 위상공간에서 항이 A 에 드는 수열이 p 로 수렴하면 p 는 A 의 폐포에 속하고, 따라서 닫힌집합은 그 안의 수열의 극한을 모두 포함한다. 무한히 많은 항만 A 에 들어도 같다. 실수의 닫힌구간과 정수 전체에 쓰면 해석학 입문의 극한의 부등식과 이어진다.
requires: [lower-limit-topology, real-number-arithmetic, subset, set-operations, interval, order-properties-of-reals, basic-limits, sequence, limit-of-sequence, topological-space, topology-examples, closed-set, neighborhood, interior-and-closure, closure-by-neighborhoods, open-and-closed-sets-of-reals, standard-topology-on-reals, sequence-in-a-space, limit-unique-in-hausdorff, convergence-in-metric-spaces]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Sequences and convergence 절: Lemma closure-convergence(The sequence lemma)와 그 증명 (content/topological-spaces.tex:735–743)"
    checked: original
    note: "(2)는 출처 Lemma closure-convergence 의 첫 문장(737줄: A 의 수열이 x 로 수렴하면 x ∈ Ā)과 같다. 출처의 증명(740줄)은 x ∉ A 일 때 x 의 모든 근방이 A 와 X − A 를 함께 만나 x ∈ ∂A 임을 보이고 relations-closure-boundary 로 x ∈ Ā 를 얻는다. 이 항목은 closure-by-neighborhoods 의 (1)로 증명한다. 출처는 같은 Lemma 의 둘째 문장에서 X 가 first-countable 이면 거꾸로도 성립한다고 적고, 그 증명(742줄)은 모든 n 에 대해 x_n ∈ U_n ∩ A 를 고른다. 이 항목은 그 방향을 싣지 않는다."
  - ref: lebl-basic-analysis
    loc: "7.3.3절 Proposition 7.3.12, Proposition 7.3.13 과 그 증명 (p.277), 7.3.4절 연습문제 7.3.1, 7.3.9 (p.277), 2.1절 Example 2.1.4 (p.53)"
    checked: original
    note: "(3)은 출처 Proposition 7.3.12(p.277, 거리공간에서 닫힌집합 E 의 수열이 p 로 수렴하면 p ∈ E)를 위상공간에서 적은 것이다. 출처의 증명은 대우를 써서 Eᶜ 가 열려 있으므로 어느 번호부터 x_n ∈ Eᶜ 라고 한다. (2)는 출처 Proposition 7.3.13(p.277)의 한 방향이고 출처는 그 방향을 연습문제 7.3.1 로 둔다. 출처는 Proposition 7.3.13 에서 p ∈ Ā 이면 A 의 수열로 p 에 수렴하는 것이 있다는 방향도 진술하고, 그 증명은 모든 n ∈ ℕ 에 대해 x_n ∈ B(p, 1/n) ∩ A 인 점을 잡는다. 이 항목은 그 방향을 싣지 않는다. (1)은 출처 연습문제 7.3.9(p.277, 닫힌 E 와 무한히 많은 n 에서 x_n ∈ E)를 '모든 M 에 대하여 n ≥ M 이고 x_n ∈ A 인 n 이 있다'로 적고 폐포로 넓힌 꼴이다. 반례 '닫혀 있지 않으면 극한이 밖에 있을 수 있다'의 수열 n⁻¹ 은 출처 Example 2.1.4(p.53)의 수열이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 근거 없이 결론을 내린 확인 질문 1건, 상수 수열에서 거짓이던 반례 제목, 줄 범위와 빠진 근거를 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 닫힌집합은 [[topological-space]], [[closed-set]]의 것이고, 폐포 $\overline{A}$는 [[interior-and-closure]]의 것이다. 수열과 수렴은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이고, 극한의 기호는 [[limit-unique-in-hausdorff]]의 것이다. 아래에서 $(X, \mathcal{T})$는 위상공간이고, $A \subseteq X$이며, $(x_n)$은 $X$의 수열이고 $p \in X$이다.

1. (무한히 많은 항이 $A$에 드는 경우) $(x_n)$이 $p$로 수렴하고, 모든 자연수 $M$에 대하여 $n \ge M$이고 $x_n \in A$인 자연수 $n$이 있으면 $p \in \overline{A}$이다.
2. (모든 항이 $A$에 드는 경우) 모든 자연수 $n$에서 $x_n \in A$이고 $(x_n)$이 $p$로 수렴하면 $p \in \overline{A}$이다.
3. (닫힌집합) $A$가 닫힌집합이면, (1)이나 (2)의 가정 아래 $p \in A$이다. 특히 $(X, \mathcal{T})$가 하우스도르프 공간이고 모든 항이 닫힌집합 $A$에 드는 수열이 수렴하면 $\lim_{n \to \infty} x_n \in A$이다.
4. (실수의 경우) 실수열 $(x_n)$이 수렴하고 $a < b$인 실수 $a$, $b$에 대하여 모든 자연수 $n$에서 $a \le x_n \le b$이면 $a \le \lim_{n \to \infty} x_n \le b$이다. 모든 항이 정수인 실수열이 수렴하면 그 극한은 정수이다.
:::

:::english
Topological spaces and closed sets are as in the entries on topological spaces and closed sets, and the closure $\overline{A}$ is as in the entry on interior and closure. Sequences and convergence are as in the entry on sequences and convergence in a topological space, and the limit symbol is as in the entry on uniqueness of limits in Hausdorff spaces. Below, $(X, \mathcal{T})$ is a topological space, $A \subseteq X$, $(x_n)$ is a sequence in $X$ and $p \in X$.

1. (Infinitely many terms in $A$) If $(x_n)$ converges to $p$ and for every natural number $M$ there is a natural number $n \ge M$ with $x_n \in A$, then $p \in \overline{A}$.
2. (All terms in $A$) If $x_n \in A$ for every natural number $n$ and $(x_n)$ converges to $p$, then $p \in \overline{A}$.
3. (Closed sets) If $A$ is closed, then under the hypotheses of (1) or (2) we have $p \in A$. In particular, if $(X, \mathcal{T})$ is a Hausdorff space and a sequence all of whose terms lie in a closed set $A$ converges, then $\lim_{n \to \infty} x_n \in A$.
4. (The real case) If a real sequence $(x_n)$ converges and real numbers $a < b$ satisfy $a \le x_n \le b$ for every natural number $n$, then $a \le \lim_{n \to \infty} x_n \le b$. If a convergent real sequence has only integer terms, its limit is an integer.
:::

## 직관

$p$가 $A$의 폐포에 든다는 것은 $p$의 어느 근방도 $A$와 만난다는 것입니다. 수열이 $p$로 수렴하면 $p$의 어느 근방에도 어느 번호부터의 항이 모두 들어오고, 그 가운데 $A$의 항이 하나라도 있으면 그 근방은 $A$와 만납니다. 그래서 $A$의 점들이 다가가는 곳은 $A$를 떠나 멀리 있을 수 없고, 폐포 안에 있습니다. 닫힌집합은 자기 폐포와 같으므로 그런 점을 모두 품습니다.

거꾸로 "폐포의 점마다 그 점으로 수렴하는 $A$의 수열이 있다"는 이 항목에 싣지 않습니다. 거리공간에서 이것을 보이는 보통의 증명은 각 자연수 $n$마다 $B(p, n^{-1}) \cap A$의 점을 하나씩 고르는데, 이 사이트는 그렇게 고르는 것(가산 선택)을 쓰지 않기 때문입니다.

(4)는 해석학 입문의 [[limits-preserve-inequalities|극한과 부등식]]의 (3)과 같은 결론을, 닫힌구간이 닫힌집합이라는 데서 다시 얻는 것입니다.

## 증명

:::idea
$p$의 근방 $U$에 대하여 수렴이 주는 번호 이후에 $A$의 항이 있으면 그 항이 $U \cap A$에 든다. 근방으로 폐포를 판정하는 [[closure-by-neighborhoods]]의 (1)을 쓴다.
:::

:::hint
$p \in \overline{A}$를 보이려면 $p$의 모든 근방이 $A$와 만난다는 것을 보이면 됩니다.
:::

:::hint
(4)에서는 닫힌구간 $[a, b]$와 $\mathbb{Z}$가 보통 위상에서 닫힌집합이라는 것과, 실수열의 두 뜻의 수렴이 같다는 것을 씁니다.
:::

:::proof
**(1).** $p$의 근방 $U$를 잡는다. $(x_n)$이 $p$로 수렴하므로 $n \ge M$인 모든 $n$에서 $x_n \in U$인 자연수 $M$이 있다. 가정을 이 $M$에 쓰면 $n \ge M$이고 $x_n \in A$인 자연수 $n$이 있고, 이 $n$에서 $x_n \in U$이므로 $x_n \in U \cap A$이다. 따라서 $p$의 모든 근방이 $A$와 만나고, [[closure-by-neighborhoods]]의 (1)에 의해 $p \in \overline{A}$이다.

**(2).** 모든 항이 $A$에 들면, 모든 자연수 $M$에 대하여 $n = M$이 $n \ge M$이고 $x_n \in A$를 만족한다. (1)에 의해 $p \in \overline{A}$이다.

**(3).** $A$가 닫힌집합이면 [[interior-and-closure]]의 (3)에 의해 $\overline{A} = A$이므로 (1), (2)에서 $p \in A$이다. $(X, \mathcal{T})$가 하우스도르프 공간이고 $(x_n)$이 수렴하면 [[limit-unique-in-hausdorff]]의 (2)에 의해 $(x_n)$은 $\lim_{n \to \infty} x_n$으로 수렴하므로, 앞 문장을 $p = \lim_{n \to \infty} x_n$에 쓴다.

**(4).** $\mathbb{R}$에 보통 위상을 준다. [[convergence-in-metric-spaces]]의 (3)에 의해 실수열의 수렴과 극한은 해석학 입문의 뜻으로 읽으나 보통 위상의 뜻으로 읽으나 같고, 보통 위상의 $\mathbb{R}$은 하우스도르프 공간이다(같은 항목의 (3)). [[open-and-closed-sets-of-reals]]의 (2)에 의해 $[a, b]$는 $(\mathbb{R}, d)$($d$는 보통 거리)에서 닫힌집합이고, [[closed-set]]의 (6)과 [[standard-topology-on-reals]]의 (5)에 의해 보통 위상에서 닫힌집합이다. [[interval]]의 정의에 의해 $a \le x_n \le b$는 $x_n \in [a, b]$와 같으므로, (3)에 의해 $\lim_{n \to \infty} x_n \in [a, b]$, 곧 $a \le \lim_{n \to \infty} x_n \le b$이다. 정수의 경우는 [[open-and-closed-sets-of-reals]]의 (5)에 의해 $\mathbb{Z}$가 $(\mathbb{R}, d)$에서 닫힌집합이므로 같은 방식으로 (3)에서 나온다.
:::

## 예시와 반례

:::example[밀착위상에서는 극한이 모두 폐포에 있다]
$X$에 서로 다른 두 점 $a$, $b$가 있고 $\mathcal{T}$가 밀착위상이면, [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (5)에 의해 모든 항이 $a$인 상수 수열은 $X$의 모든 점으로 수렴하므로, (2)에 의해 $X$의 모든 점이 $\overline{\{a\}}$에 듭니다. 이것은 [[interior-and-closure]]의 (9)에 의해 $\overline{\{a\}} = X$인 것과 맞습니다. 하우스도르프가 아닌 공간에서는 극한이 여럿일 수 있지만, (2)는 그 극한 모두에 대해 성립합니다.
:::

:::counterexample[닫혀 있지 않으면 극한이 밖에 있을 수 있다]
$A = (0, 1] = \{x \in \mathbb{R} : 0 < x \le 1\}$이라 합시다. $n$번째 항이 $n^{-1}$인 수열은 모든 항이 $A$에 들고([[order-properties-of-reals]]의 (10)에 의해 $0 < n^{-1}$이고, $n = 1$이면 $n^{-1} = 1$, $1 < n$이면 같은 항목의 (6)의 (ii)에 의해 $n^{-1} < 1^{-1} = 1$), [[basic-limits]]의 (2)와 [[convergence-in-metric-spaces]]의 (3)에 의해 보통 위상에서 $0$으로 수렴합니다. 극한 $0$은 $A$에 들지 않습니다. (2)에 의해 $0 \in \overline{A}$이므로 $\overline{A} \ne A$이고, [[interior-and-closure]]의 (3)에 의해 $A$는 닫힌집합이 아닙니다. (3)의 "닫힌집합" 가정은 뺄 수 없습니다.
:::

## 확인 질문

:::check[$\mathbb{R}_l$에서 모든 항이 $0$ 이상 $1$ 미만인 수열이 $p$로 수렴하면 $p$는 어디에 있는가? $n$번째 항이 $1 - n^{-1}$인 수열은 $\mathbb{R}_l$에서 $1$로 수렴하는가?]
[[lower-limit-topology]]의 (4)에 의해 $[0, 1)$은 $\mathbb{R}_l$에서 닫힌집합이므로 (3)에 의해 $p \in [0, 1)$입니다. 그래서 $1 - n^{-1}$의 수열은 $\mathbb{R}_l$에서 $1$로 수렴하지 않습니다. 모든 항이 $[0, 1)$에 들고(반례에서 본 $0 < n^{-1} \le 1$에 [[order-properties-of-reals]]의 (3)을 쓰면 $0 \le 1 - n^{-1} < 1$) $1 \notin [0, 1)$이기 때문입니다. 직접 보아도 $[1, 2)$는 $\mathbb{R}_l$에서 $1$의 근방인데 이 근방에 드는 항이 없습니다. 보통 위상에서는 $[0, 1)$이 닫힌집합이 아니고([[lower-limit-topology]]의 (4)), 보통 거리로 $|(1 - n^{-1}) - 1| = n^{-1}$이므로 [[basic-limits]]의 (2)와 [[convergence-in-metric-spaces]]의 (2)에 의해 이 수열은 $1$로 수렴합니다.
:::

:::check[이산위상을 준 $X$에서 (2)가 말하는 것은 무엇인가?]
이산위상에서는 모든 부분집합이 닫혀 있으므로 [[interior-and-closure]]의 (9)에 의해 $\overline{A} = A$이고, (2)는 "모든 항이 $A$에 드는 수열이 $p$로 수렴하면 $p \in A$"가 됩니다. 실제로 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (4)에 의해 그 수열은 어느 번호부터 모든 항이 $p$이므로 $p$는 그 항으로서 $A$에 듭니다.
:::
