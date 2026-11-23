---
title: 콤팩트 거리공간은 완비이다
title_en: Compact Metric Spaces Are Complete
aliases: [콤팩트이면 완비, compact implies complete, 콤팩트 부분집합은 완비]
kind: theorem
field: topology
msc: ["54E45", "54E50"]
level: undergrad
summary: 콤팩트 거리공간의 코시 수열은 수렴하는 부분수열을 가지므로 수렴하고, 따라서 콤팩트 거리공간은 완비이다. 거리공간의 콤팩트 부분집합도 부분공간 거리로 완비이다. 실수 전체와 무한집합 위의 이산 거리는 완비이지만 콤팩트가 아니다.
requires: [subset, finite-set, metric-space, metric-space-examples, topology-examples, standard-topology-on-reals, sequence-in-a-space, compact-space, closed-subset-of-compact, compact-metric-closed-and-bounded, compact-metric-space-sequences, cauchy-sequence-in-metric-space, cauchy-subsequence-and-limit, complete-metric-space, closed-subset-of-complete-space, closed-set, open-set-in-metric-space, open-and-closed-sets-of-reals, heine-borel-on-reals]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.4.3소절 Exercises 의 연습문제 7.4.6 (p.286), 7.4.1, 7.4.3 (p.285); 7.4.2소절 Compactness 의 p.281–282 문단, Example 7.4.15 (p.285); 7.4.1소절의 Proposition 7.4.6 (p.280)과 연습문제 7.4.16 (p.286)"
    checked: original
    note: "출처 연습문제 7.4.6(p.286)은 어떤 거리공간에서든 콤팩트 집합 K 가 부분공간 거리로 완비 거리공간임을 보이라고 한다. 이 항목의 (2)는 같은 진술이고, 출처는 증명을 독자에게 맡긴다. 이 항목은 compact-metric-space-sequences 의 수렴하는 부분수열과 cauchy-subsequence-and-limit 의 (2)로 증명한다. 출처는 p.281–282 의 문단에서 완비이지만 닫히고 유계인 것만으로는 콤팩트가 되지 않는 공간이 많다고 적고 C([a, b], ℝ) 의 닫힌 단위 공을 예로 든다. (3)은 같은 방향(완비이지만 콤팩트가 아니다)의 내용을 ℝ 과 이산 거리로 본 것이다. (3)의 이산 거리의 무한집합은 출처 Example 7.4.15(p.285: 이산 거리를 준 무한집합은 완비이고, 모든 부분집합이 닫혀 있고 유계이며, 콤팩트 부분집합은 유한집합뿐이다)의 (i)–(iii)과 같은 대상, 같은 결론이다. 확인 질문 '(X, d)가 콤팩트이고 F 가 (X, d)에서 닫힌집합이면 F 는 완비인가?'의 둘째 길은 출처 Proposition 7.4.6(p.280: 완비 거리공간의 닫힌 부분집합은 완비)과 연습문제 7.4.16(p.286: 그 명제를 증명하라)의 내용이다. 예시 '유한 거리공간은 완비이다'는 출처 연습문제 7.4.1(p.285: 거리공간의 유한 부분집합은 콤팩트이다)의 결론에 (1)을 잇는 것이고, 출처 연습문제 7.4.3 a)(p.285: 이산 거리 공간은 완비이다)와 같은 방향의 결론이다. 직관의 '완전유계'는 출처 연습문제 7.4.12(p.286)의 Note 의 이름이고, 그 연습문제의 다른 방향(완비 공간에서 닫혀 있고 완전유계이면 콤팩트)은 이 강의가 싣지 않는다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계 경우에서 거짓이거나 근거 없던 설명 문장 5건, 틀린 인용 번호 2건, 메모의 쪽 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 부분공간 거리 $d_K$는 [[metric-space]], [[metric-space-examples]]의 것이고, 거리공간에는 거리위상을 준다. 콤팩트 부분집합은 [[compact-space]]의 것이고, 거리공간 $(X, d)$가 콤팩트라는 것은 [[compact-metric-space-sequences|콤팩트 거리공간의 수열에 관한 정리]]의 머리에서 정한 뜻이다. 코시 수열은 [[cauchy-sequence-in-metric-space]]의 것이고, 완비와 "$K$는 완비이다"는 [[complete-metric-space]]의 것이다. 아래에서 $(X, d)$는 거리공간이다.

1. (콤팩트이면 완비) $(X, d)$가 콤팩트이면 $(X, d)$는 완비이다.
2. (콤팩트 부분집합) $K$가 $X$의 콤팩트 부분집합이면 $K$는 완비이다. 곧 $(K, d_K)$는 완비 거리공간이다.
3. (거꾸로는 성립하지 않을 수 있다) 보통 거리를 준 $\mathbb{R}$은 완비이지만 콤팩트가 아니다. $X$가 무한집합이고 $d$가 이산 거리이면 $(X, d)$는 완비이고 유계이지만 콤팩트가 아니다.
:::

:::english
Metric spaces and the subspace metric $d_K$ are as in the entries on metric spaces and their examples, and metric spaces carry the metric topology. Compact subsets are as in the entry on open covers and compact spaces, and a metric space $(X, d)$ is compact in the sense fixed at the head of the entry on sequences in compact metric spaces. Cauchy sequences are as in the entry on Cauchy sequences in a metric space, and completeness and "$K$ is complete" as in the entry on complete metric spaces. Below, $(X, d)$ is a metric space.

1. (Compact implies complete) If $(X, d)$ is compact, then $(X, d)$ is complete.
2. (Compact subsets) If $K$ is a compact subset of $X$, then $K$ is complete. That is, $(K, d_K)$ is a complete metric space.
3. (The converse may fail) $\mathbb{R}$ with the standard metric is complete but not compact. If $X$ is an infinite set and $d$ is the discrete metric, then $(X, d)$ is complete and bounded but not compact.
:::

## 직관

코시 수열은 항들이 서로 점점 가까워지는 수열이지만, 다가가는 점이 공간 안에 없으면 수렴하지 않습니다. 콤팩트 거리공간에서는 어떤 수열이든 공간 안의 점으로 수렴하는 부분수열을 갖습니다. 코시 수열의 항들은 서로 가까이 모여 있으므로, 그 일부가 어떤 점으로 다가가면 나머지 항들도 그 점으로 끌려갑니다. 그래서 코시 수열 자신이 그 점으로 수렴합니다.

완비는 거리에 달린 성질이고 콤팩트는 열린 덮개로 정한 성질인데, 이 정리는 콤팩트 쪽이 더 강하다고 말합니다. 거꾸로는 성립하지 않을 수 있습니다. $\mathbb{R}$은 완비이지만 콤팩트가 아니고, 무한집합 위의 이산 거리는 완비이고 유계이기까지 하지만 콤팩트가 아닙니다. 콤팩트 거리공간은 완비이면서, 같은 단원의 [[totally-bounded|완전유계]]의 (4)에 의해 완전유계이기도 합니다. 이 강의는 그 거꾸로, 곧 완비이고 완전유계인 거리공간이 콤팩트라는 것을 싣지 않습니다.

## 증명

:::idea
코시 수열에 콤팩트 거리공간의 수렴하는 부분수열을 쓰고, 수렴하는 부분수열을 가진 코시 수열은 그 극한으로 수렴한다는 것을 쓴다.
:::

:::hint
(2)에서는 콤팩트 부분집합 $K$에 부분공간 거리를 주면 콤팩트 거리공간이 된다는 것을 먼저 확인합니다.
:::

:::proof
**(1).** $(x_n)$이 $(X, d)$의 코시 수열이라 하자. $(X, d)$가 콤팩트이므로 [[compact-metric-space-sequences|콤팩트 거리공간의 수열에 관한 정리]]의 (2)의 (ii)에 의해 $(x_n)$의 부분수열 가운데 어떤 점 $p \in X$로 수렴하는 것이 있다. [[cauchy-subsequence-and-limit|코시 수열의 부분수열과 극한]]의 (2)에 의해 $(x_n)$은 $p$로 수렴한다. 모든 코시 수열이 $X$의 점으로 수렴하므로 [[complete-metric-space]]의 정의에 의해 $(X, d)$는 완비이다.

**(2).** [[compact-metric-space-sequences|콤팩트 거리공간의 수열에 관한 정리]]의 (3)의 끝 문장에 의해 $(K, d_K)$는 콤팩트 거리공간이다. (1)을 $(K, d_K)$에 쓰면 $(K, d_K)$는 완비이다.

**(3).** [[complete-metric-space]]의 (2)에 의해 보통 거리의 $\mathbb{R}$은 완비이다. [[standard-topology-on-reals]]의 (5)에 의해 그 거리위상은 보통 위상이고, [[compact-space]]의 (8)의 (vi)에 의해 보통 위상의 $\mathbb{R}$은 콤팩트가 아니다.

$X$가 무한집합이고 $d$가 이산 거리이면 [[complete-metric-space]]의 (3)의 (iii)에 의해 $(X, d)$는 완비이다. [[compact-metric-closed-and-bounded|거리공간의 콤팩트 집합에 관한 정리]]의 (4)에 의해 $X$는 유계이지만 $X$의 콤팩트 부분집합이 아니고, [[compact-space]]의 콤팩트 집합 단락에 의해 이것은 $(X, \mathcal{T}_d)$가 콤팩트가 아니라는 뜻이다.

:::

## 예시와 반례

:::example[유한 거리공간은 완비이다]
$X$가 유한집합이고 $d$가 $X$ 위의 아무 거리이면 $(X, d)$는 완비입니다. [[compact-space]]의 (8)의 (ii)에 의해 유한집합 $X$는 어떤 위상으로도 콤팩트이고, 특히 거리위상으로 콤팩트이므로 (1)이 적용됩니다. 코시 수열이 어떤 점으로 수렴하는지 계산하지 않고, 콤팩트성 하나로 완비를 얻는 예입니다.
:::

:::counterexample[완비가 아닌 부분집합은 콤팩트가 아니다]
$\mathbb{R}$의 부분집합 $Y = \{x \in \mathbb{R} : 0 < x \le 1\}$에 보통 거리의 부분공간 거리를 주면 [[complete-metric-space]]의 (4)에 의해 $Y$는 완비가 아닙니다. 그러므로 (2)의 대우에 의해 $Y$는 $\mathbb{R}$의 콤팩트 부분집합이 아닙니다. 콤팩트가 아니라는 것을 열린 덮개를 찾지 않고 완비성만으로 알아낸 것입니다.
:::

## 확인 질문

:::check[$(X, d)$가 콤팩트이고 $F$가 $(X, d)$에서 닫힌집합이면 $F$는 완비인가?]
그렇습니다. 두 길이 있습니다. [[closed-set]]의 (6)에 의해 $F$는 거리위상의 닫힌집합이고, [[closed-subset-of-compact|콤팩트 공간의 닫힌 부분집합]]의 (1)에 의해 $F$는 $X$의 콤팩트 부분집합이므로 (2)에 의해 완비입니다. 또 (1)에 의해 $(X, d)$가 완비이므로 [[closed-subset-of-complete-space|완비 거리공간의 닫힌 부분집합]]의 (1)에 의해서도 $(F, d_F)$는 완비입니다.
:::

:::check[보통 거리를 준 $\mathbb{R}$에서 집합 $\mathbb{Z}$는 완비인가? 콤팩트 부분집합인가?]
$\mathbb{Z}$는 [[open-and-closed-sets-of-reals]]의 (5)에 의해 $\mathbb{R}$의 닫힌집합이고, $\mathbb{R}$이 완비이므로([[complete-metric-space]]의 (2)) [[closed-subset-of-complete-space|완비 거리공간의 닫힌 부분집합]]의 (1)에 의해 완비입니다. 그러나 [[heine-borel-on-reals|실수의 하이네–보렐 정리]]의 (3)의 (ii)에 의해 콤팩트 부분집합이 아닙니다. 완비이면서 콤팩트가 아닌 또 하나의 예입니다.
:::
