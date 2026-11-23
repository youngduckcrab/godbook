---
title: 완비 거리공간의 닫힌 부분집합
title_en: Closed Subsets of a Complete Metric Space
aliases: [닫힌 부분공간의 완비성, closed subspace of a complete space, 닫힌구간의 완비성]
kind: theorem
field: topology
msc: ["54E50"]
level: undergrad
summary: 완비 거리공간의 닫힌 부분집합은 부분공간 거리로 완비이다. 거꾸로 완비인 부분집합은 그 집합의 수열의 극한을 모두 포함한다. 그래서 ℝ 의 닫힌구간과 닫힌 반직선, 완비 거리공간의 닫힌 공은 완비이다.
requires: [subset, prime-number, real-number-arithmetic, real-order-axioms, order-properties-of-reals, interval, basic-limits, metric-space, metric-space-examples, open-ball, open-set-in-metric-space, open-ball-is-open, open-and-closed-sets-of-reals, topology-examples, closed-set, sequence-in-a-space, convergence-in-metric-spaces, closed-set-and-limits, metric-space-is-hausdorff, limit-unique-in-hausdorff, cauchy-sequence-in-metric-space, complete-metric-space]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "7.4절 7.4.1소절 Proposition 7.4.6 과 그 앞 문단 (p.280); 7.4.3소절 연습문제 7.4.16 (p.286); 7.6절 Theorem 7.6.3 의 증명 (p.298)"
    checked: original
    note: "출처 Proposition 7.4.6(p.280)은 (X, d) 가 완비이고 E ⊆ X 가 닫혀 있으면 E 가 부분공간 거리로 완비라는 것이고, 이 항목의 (1)이다. 출처는 증명을 연습문제 7.4.16(p.286)으로 돌리고, 앞 문단에서 '닫힌집합은 그 집합에서 수열로 닿는 점을 모두 포함한다고 생각할 수 있다'고 적는다. 이 항목의 증명은 그 생각을 위상수학 입문 closed-set-and-limits 의 (3)(닫힌집합의 점들로 된 수열의 극한은 그 집합에 든다)으로 쓴다. (2)는 (1)과 거꾸로의 방향을 '완비인 부분집합의 수열이 바깥에서 수렴하면 극한은 그 부분집합에 든다'는 수열의 꼴로 적은 것이다. 출처는 같은 앞 문단(p.280)에서 (0, 1] 이 부분공간 거리로 완비가 아니라고 적고, 예시 '부분집합이 완비가 아님을 보이는 한 방법'은 같은 대상, 같은 결론을 (2)로 보인 것이다. 출처는 7.6절 Theorem 7.6.3 의 증명(p.298)에서 닫힌집합 J 에 값을 갖는 연속함수의 집합이 닫혀 있다는 것과 Proposition 7.4.6 을 함께 써서 완비성을 얻는다. (3)의 닫힌 공은 그런 쓰임을 위해 둔 것이다. 확인 질문 '정수 전체'의 ℤ 가 ℝ 의 닫힌집합이라는 것은 open-and-closed-sets-of-reals 의 (5)이다."
status: reviewed
review_note: "2026-11-23 자기 검토(docs/self-review.md)와 지휘자의 확인. 뒤 단원 항목을 인용하던 근거 2곳을 앞 단원의 것으로 바꾸고 이름 없이 쓴 근거 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-23
---

:::statement
거리공간과 부분공간 거리 $d_Y$는 [[metric-space]], [[metric-space-examples]]의 것이고, 열린 공과 닫힌 공 $C(x, r)$는 [[open-ball]]의 것이며, $(X, d)$에서 닫힌집합은 [[open-set-in-metric-space]]의 것이다. 거리공간에는 늘 거리위상을 준다. 수열과 수렴은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이고, 완비와 "$Y$는 완비이다"는 [[complete-metric-space]]의 것이다. $\mathbb{R}$에는 보통 거리를 준다. 아래에서 $(X, d)$는 거리공간이다.

1. (닫힌 부분집합은 완비) $(X, d)$가 완비이고 $E$가 $(X, d)$에서 닫힌집합이면 $(E, d_E)$는 완비이다.
2. (완비인 부분집합은 수열의 극한을 포함한다) $Y \subseteq X$이고 $(Y, d_Y)$가 완비라 하자. $Y$의 수열 $(y_n)$이 $(X, d)$에서 점 $p \in X$로 수렴하면 $p \in Y$이다.
3. (예)
   - (i) $a < b$인 실수 $a$, $b$에 대하여 닫힌구간 $[a, b]$, 닫힌 반직선 $\{x \in \mathbb{R} : a \le x\}$와 $\{x \in \mathbb{R} : x \le b\}$는 완비이다.
   - (ii) $(X, d)$가 완비이고 $x \in X$, $r > 0$이면 닫힌 공 $C(x, r)$는 완비이다.
:::

:::english
Metric spaces and the subspace metric $d_Y$ are as in the entries on metric spaces and examples of metric spaces, open balls and closed balls $C(x, r)$ are as in the entry on open balls, and closed sets in $(X, d)$ are as in the entry on open sets in a metric space. A metric space always carries its metric topology. Sequences and convergence are as in the entry on sequences and convergence in a topological space, and completeness and "$Y$ is complete" are as in the entry on complete metric spaces. $\mathbb{R}$ carries the standard metric. Below, $(X, d)$ is a metric space.

1. (Closed subsets are complete) If $(X, d)$ is complete and $E$ is a closed set in $(X, d)$, then $(E, d_E)$ is complete.
2. (Complete subsets contain the limits of their sequences) Let $Y \subseteq X$ with $(Y, d_Y)$ complete. If a sequence $(y_n)$ in $Y$ converges in $(X, d)$ to a point $p \in X$, then $p \in Y$.
3. (Examples)
   - (i) For real numbers $a < b$, the closed interval $[a, b]$ and the closed half-lines $\{x \in \mathbb{R} : a \le x\}$ and $\{x \in \mathbb{R} : x \le b\}$ are complete.
   - (ii) If $(X, d)$ is complete, $x \in X$ and $r > 0$, then the closed ball $C(x, r)$ is complete.
:::

## 직관

완비 공간 $X$의 부분집합 $E$에서 코시 수열을 하나 잡으면, 그것은 $X$에서도 코시 수열이므로 $X$ 안의 어떤 점으로 모입니다. 문제는 그 점이 $E$ 안에 있느냐입니다. 닫힌집합은 자기 점들이 모여드는 곳을 놓치지 않는 집합이므로 그 점이 $E$ 안에 있고, 그래서 $E$도 완비입니다((1)). 울타리를 친 목장에 빗대면, 넓은 들판($X$)에서는 서로 붙어 걷는 양 떼가 늘 어느 한 곳에 모이는데, 울타리($E$의 경계)까지 목장에 포함되어 있으면 목장 안의 양 떼가 모이는 곳도 목장 안에 있다는 것입니다.

(2)는 거꾸로의 방향입니다. 완비인 부분집합의 점들이 바깥에서 어떤 점으로 모이면, 그 점들은 서로 붙어 가는 수열이므로 부분집합 안에서도 어떤 점으로 모이고, 극한은 하나뿐이므로 두 점이 같습니다. 이 항목은 이것을 수열의 꼴로만 진술합니다. 이 꼴은 어떤 부분집합이 완비가 아님을 보일 때 쓸 수 있습니다(아래 예시).

(1)에서 바깥 공간이 완비라는 가정은 빼면 안 됩니다. 모든 공간은 자기 자신 안에서 닫힌집합이므로, 그 가정이 없으면 "모든 거리공간은 완비"라는 거짓 결론이 나옵니다(아래 반례).

## 증명

:::proof
"수렴 (n)"은 [[convergence-in-metric-spaces]]의 번호, "코시 (n)"은 [[cauchy-sequence-in-metric-space]]의 번호, "완비 (n)"은 [[complete-metric-space]]의 번호이다. $Y \subseteq X$이면 $(Y, d_Y)$는 [[metric-space-examples]]의 (3)에 의해 거리공간이고 $Y$의 점 $y$, $y'$에서 $d_Y(y, y') = d(y, y')$이다.

먼저 다음을 본다. (가) $Y \subseteq X$이고 $(y_n)$이 $Y$의 수열이며 $q \in Y$이면, $(y_n)$이 $(Y, d_Y)$에서 $q$로 수렴하는 것은 정확히 $(X, d)$에서 $q$로 수렴할 때이다. 수렴 (1)에 의해 두 조건은 각각 "모든 양의 실수 $\varepsilon$에 대하여 $n \ge M$이면 $d_Y(y_n, q) < \varepsilon$인 자연수 $M$이 있다"와 "$d(y_n, q) < \varepsilon$인 $M$이 있다"이고, $d_Y(y_n, q) = d(y_n, q)$이므로 같은 문장이다.

**(1).** $(y_n)$을 $(E, d_E)$의 코시 수열이라 하자. 코시 (6)에 의해 $(y_n)$은 $(X, d)$의 코시 수열이고, $(X, d)$가 완비이므로 어떤 점 $p \in X$로 수렴한다. [[closed-set]]의 (6)에 의해 $E$는 위상공간 $(X, \mathcal{T}_d)$에서 닫힌집합이고, 모든 항이 $E$에 들므로 [[closed-set-and-limits|닫힌집합과 수열의 극한]]의 (3)에 의해 $p \in E$이다. (가)에 의해 $(y_n)$은 $(E, d_E)$에서 $p$로 수렴한다. 따라서 $(E, d_E)$는 완비이다. ($E = \emptyset$이면 $E$의 수열이 없으므로 완비 (3)의 (i)과 같이 따질 것이 없다.)

**(2).** $(y_n)$이 $(X, d)$에서 $p$로 수렴하므로 코시 (3)에 의해 $(X, d)$의 코시 수열이고, 코시 (6)에 의해 $(Y, d_Y)$의 코시 수열이다. $(Y, d_Y)$가 완비이므로 $(y_n)$은 $(Y, d_Y)$에서 어떤 점 $q \in Y$로 수렴하고, (가)에 의해 $(X, d)$에서도 $q$로 수렴한다. [[metric-space-is-hausdorff|거리공간은 하우스도르프 공간이다]]의 (1)에 의해 $(X, \mathcal{T}_d)$는 하우스도르프 공간이므로 [[limit-unique-in-hausdorff]]의 (1)에 의해 $p = q$이고, 따라서 $p \in Y$이다.

**(3).** (i) 완비 (2)에 의해 $\mathbb{R}$은 완비이고, [[open-and-closed-sets-of-reals]]의 (2)에 의해 $[a, b]$, $\{x : a \le x\}$, $\{x : x \le b\}$는 $\mathbb{R}$의 닫힌집합이다. (1)에 의해 셋은 완비이다.

(ii) [[open-ball-is-open|열린 공은 열린집합이다]]의 (2)에 의해 $C(x, r)$는 $(X, d)$에서 닫힌집합이므로 (1)에 의해 완비이다.
:::

## 예시와 반례

:::example[부분집합이 완비가 아님을 보이는 한 방법]
$Y = \{x \in \mathbb{R} : 0 < x \le 1\}$을 봅시다. $n$번째 항이 $n^{-1}$인 수열은 $Y$의 수열이고([[complete-metric-space]]의 (4)), [[basic-limits]]의 (2)와 [[convergence-in-metric-spaces]]의 (3)에 의해 $\mathbb{R}$에서 $0$으로 수렴합니다. $0 \notin Y$이므로 (2)의 대우에 의해 $(Y, d_Y)$는 완비가 아닙니다. (2)를 쓰면 $Y$의 코시 수열이 $Y$ 안에서 수렴하지 않는다는 것을 따로 보이지 않아도 됩니다.
:::

:::counterexample[바깥 공간이 완비가 아닐 때]
$(X, d)$가 거리공간이면 $X$ 자신은 [[open-set-in-metric-space]]의 (1)에 의해 $(X, d)$에서 닫힌집합입니다. 그래서 (1)에서 "$(X, d)$가 완비"라는 가정을 빼면, 모든 거리공간이 완비라는 결론이 나옵니다. 그러나 위 예시의 $Y$에 부분공간 거리를 준 $(Y, d_Y)$는 완비가 아닙니다. $X = Y$로 두면 $Y$는 $(Y, d_Y)$에서 닫힌집합이지만 완비가 아니므로, 그 가정은 뺄 수 없습니다.
:::

## 확인 질문

:::check[$\mathbb{Z}$에 $\mathbb{R}$의 부분공간 거리를 주면 완비인가?]
완비입니다. [[open-and-closed-sets-of-reals]]의 (5)에 의해 $\mathbb{Z}$는 $\mathbb{R}$의 닫힌집합이고, [[complete-metric-space]]의 (2)에 의해 $\mathbb{R}$은 완비이므로 (1)에 의해 $\mathbb{Z}$는 완비입니다.
:::

:::check[$\{x \in \mathbb{R} : 0 \le x < 1\}$은 완비인가?]
완비가 아닙니다. $n$번째 항이 $1 - n^{-1}$인 수열은 이 집합의 수열이고((Z1)([[prime-number]]의 진술)에 의해 $1 \le n$이므로 [[order-properties-of-reals]]의 (10)과 (6)의 (ii)에 의해 $0 < n^{-1} \le 1$, 곧 $0 \le 1 - n^{-1} < 1$입니다), $|(1 - n^{-1}) - 1| = n^{-1}$이므로 [[basic-limits]]의 (2)와 [[convergence-in-metric-spaces]]의 (1)에 의해 $\mathbb{R}$에서 $1$로 수렴합니다. $1$은 이 집합에 속하지 않으므로 (2)의 대우에 의해 이 집합은 완비가 아닙니다.
:::
