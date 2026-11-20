---
title: 실수의 조밀한 부분집합
title_en: Dense Subsets of the Reals
aliases: [유리수는 조밀하다, 무리수는 조밀하다, ℚ 의 경계, dense subsets of the real line]
kind: proposition
field: topology
msc: ["54A05", "26A03"]
level: undergrad
summary: 실수의 보통 위상에서 부분집합이 조밀한 것은 정확히 두 실수 사이마다 그 원소가 있을 때이고, 그래서 유리수 전체와 무리수 전체는 조밀하며 해석학 입문의 유리수의 조밀성과 같은 말이다. ℚ 의 내부는 공집합이고 경계는 ℝ 이며, ℤ 는 조밀하지 않고, 아래끝 위상에서도 ℚ 는 조밀하다.
requires: [set, subset, set-operations, rational-and-irrational-numbers, rationals-are-dense, interval, order-properties-of-reals, prime-number, topological-space, closed-set, interior-and-closure, boundary, dense-subset, closure-by-neighborhoods, boundary-closure-and-cluster-points, basis-of-a-given-topology, standard-topology-on-reals, lower-limit-topology, open-and-closed-sets-of-reals, metric-space-examples, topology-examples]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Interior, closure, boundary, and limit points 절의 예(ℚ 는 ℝ 에서 조밀하다), content/topological-spaces.tex:625–627; 연습문제 3.10 (content/exercises.tex:124–137)"
    checked: original
    note: "(2)의 'ℚ 는 조밀하다'와 (3)의 'ℚ 의 경계는 ℝ'은 출처의 예(625–627)와 같은 대상의 같은 결론이다. 출처는 'U 같은 열린집합은 구간 몇 개의 합집합이고 모든 구간은 유리수와 무리수를 함께 품는다'로 보이며, 이 항목은 (1)(열린구간 전체가 보통 위상의 기저라는 것과 closure-by-neighborhoods 의 (4))로 보인다. 확인 질문 '정수가 아닌 실수 전체'는 출처의 그 예와 같은 발상(구간마다 무리수가 있다)을 쓴다. 반례 '조밀한 두 집합이 서로소일 수 있다'와 예시 '0 을 뺀 실수'(조밀하면서 열린 집합)는 출처 연습문제 3.10(exercises.tex:124–137, 열린 조밀 집합들의 교집합이 조밀한지 묻는다)과 같은 주제를 다룬다."
  - ref: lebl-basic-analysis
    loc: "1.2.2절 Archimedean property, Theorem 1.2.4 (ii) (p.31); 1.2.5절 연습문제 1.2.8 (p.34); 3.1.1절 Cluster points, 예 (iii) (p.113); 7.3.4절 연습문제 7.3.7 (p.277)"
    checked: original
    note: "(1)의 오른쪽 조건은 출처 Theorem 1.2.4 (ii)(p.31, 'ℚ is dense in ℝ': x < y 이면 x < r < y 인 r ∈ ℚ 가 있다)가 '조밀하다'고 부르는 성질이다. 이 사이트에서 그것은 해석학 입문 rationals-are-dense 의 (2)이고, 이 항목의 (1)은 그 이름이 위상의 '조밀하다'와 같은 뜻이라는 것이다. (2)의 무리수 쪽은 출처 연습문제 1.2.8(p.34, x < y 이면 x < s < y 인 무리수 s 가 있다)의 결론을 쓴 것이고, 이 사이트에서는 open-and-closed-sets-of-reals 의 (6)의 (i)이다. 확인 질문 '정수가 아닌 실수 전체'도 같은 결론을 쓴다. 출처 연습문제 7.3.7(p.277)은 거리공간에서 조밀을 폐포로 정의하고 ℝⁿ 의 가산 조밀 부분집합을 묻는다. 이 항목은 가산성을 다루지 않는다. (2)의 ℚ 는 출처 p.113 의 예 (iii)(ℚ 의 cluster point 전체는 ℝ 이다)과 같은 대상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 틀린 근거 1건, 부정확한 직관과 단원 글 문장, 블록 제목이 깨지는 화면 오류를 고쳤다."
added: 2026-11-19
---

:::statement
유리수, 무리수, $\mathbb{Q}$는 [[rational-and-irrational-numbers]]의 것이고, 구간의 기호는 [[interval]]의 것이다. $\mathbb{R}$의 보통 위상과 열린구간 전체의 집합족 $\mathcal{J}$는 [[standard-topology-on-reals]]의 것이고, $\mathbb{R}_l$과 $\mathcal{B}_l$은 [[lower-limit-topology]]의 것이다. 조밀한 부분집합은 [[dense-subset]], 내부와 폐포는 [[interior-and-closure]], 경계는 [[boundary]]의 것이다. 아래에서 위상을 밝히지 않은 $\mathbb{R}$은 보통 위상을 준 것이다.

1. (두 실수 사이로 판정하기) $S \subseteq \mathbb{R}$이 $\mathbb{R}$에서 조밀한 것은 정확히 $a < b$인 모든 실수 $a$, $b$에 대하여 $a < s < b$인 $s \in S$가 있을 때이다. 따라서 해석학 입문의 [[rationals-are-dense|유리수의 조밀성]]의 (2)가 말하는 성질과 위상의 "조밀하다"는 $\mathbb{R}$의 부분집합에 대하여 같은 말이다.
2. (유리수와 무리수) $\mathbb{Q}$와 무리수 전체의 집합 $\mathbb{R} - \mathbb{Q}$는 둘 다 $\mathbb{R}$에서 조밀하다.
3. (내부와 경계) $\operatorname{Int} \mathbb{Q} = \emptyset$이고 $\operatorname{Int}(\mathbb{R} - \mathbb{Q}) = \emptyset$이다. $\partial \mathbb{Q} = \mathbb{R}$이고 $\partial(\mathbb{R} - \mathbb{Q}) = \mathbb{R}$이다.
4. (정수) $\overline{\mathbb{Z}} = \mathbb{Z}$이고, $\mathbb{Z}$는 $\mathbb{R}$에서 조밀하지 않다.
5. (아래끝 위상) $\mathbb{Q}$와 $\mathbb{R} - \mathbb{Q}$는 둘 다 $\mathbb{R}_l$에서 조밀하다.
:::

:::english
Rational and irrational numbers and $\mathbb{Q}$ are as in the entry on rational and irrational numbers, and interval notation is as in the entry on intervals. The standard topology on $\mathbb{R}$ and the family $\mathcal{J}$ of all open intervals are as in the entry on bases for metric topologies and the standard topology on the reals, and $\mathbb{R}_l$ and $\mathcal{B}_l$ are as in the entry on the lower limit topology. Dense subsets, interior and closure, and boundaries are as in the corresponding entries. Below, $\mathbb{R}$ without a named topology carries the standard topology.

1. (Test by pairs of reals) $S \subseteq \mathbb{R}$ is dense in $\mathbb{R}$ exactly when for all real numbers $a < b$ there is $s \in S$ with $a < s < b$. Hence, for subsets of $\mathbb{R}$, the property stated in (2) of the entry on density of the rationals and the topological notion "dense" are the same.
2. (Rationals and irrationals) $\mathbb{Q}$ and the set $\mathbb{R} - \mathbb{Q}$ of irrational numbers are both dense in $\mathbb{R}$.
3. (Interior and boundary) $\operatorname{Int} \mathbb{Q} = \emptyset$ and $\operatorname{Int}(\mathbb{R} - \mathbb{Q}) = \emptyset$. $\partial \mathbb{Q} = \mathbb{R}$ and $\partial(\mathbb{R} - \mathbb{Q}) = \mathbb{R}$.
4. (Integers) $\overline{\mathbb{Z}} = \mathbb{Z}$, and $\mathbb{Z}$ is not dense in $\mathbb{R}$.
5. (Lower limit topology) $\mathbb{Q}$ and $\mathbb{R} - \mathbb{Q}$ are both dense in $\mathbb{R}_l$.
:::

## 직관

해석학 입문에서 "유리수는 조밀하다"는 "두 실수 사이에 늘 유리수가 있다"는 뜻이었습니다. 위상에서 "조밀하다"는 "폐포가 전체이다"는 뜻입니다. (1)은 $\mathbb{R}$의 보통 위상에서 이 둘이 같은 말이라는 것입니다. 보통 위상의 열린집합은 열린구간들로 이루어져 있으므로, 공집합이 아닌 모든 열린집합과 만난다는 것은 모든 열린구간과 만난다는 것, 곧 두 실수 사이마다 원소가 있다는 것이 됩니다.

유리수와 무리수는 둘 다 어디에나 있어서, 어느 열린구간도 한쪽만으로 채워지지 않습니다. 그래서 $\mathbb{Q}$ 안에 들어가는 열린집합은 공집합뿐이고(내부가 공집합), 모든 실수의 근방이 유리수와 무리수를 함께 품습니다(경계가 전체). 비유하자면 $\mathbb{Q}$와 무리수는 한 장의 천에 촘촘히 섞여 짜인 두 가닥의 실과 같아서, 천의 어느 조각을 잘라 내도 두 가닥이 다 들어 있습니다. "어느 조각"이 "공집합이 아닌 모든 열린집합", "두 가닥이 다 들어 있다"가 두 집합 모두와 만난다는 것에 맞습니다. 두 가닥이 서로 겹치지 않듯 두 집합은 공통 원소가 없습니다.

조밀함은 위상에 달려 있습니다. 아래끝 위상은 보통 위상보다 열린집합이 많지만, 그 기저 원소 $[a, b)$도 유리수와 무리수를 품으므로 $\mathbb{Q}$는 여전히 조밀합니다((5)). 반면 이산 거리의 거리위상에서는 $\mathbb{R}$ 자신만 조밀합니다([[dense-subset]]의 (2)).

## 증명

:::idea
열린구간 전체 $\mathcal{J}$가 보통 위상의 기저이므로 [[closure-by-neighborhoods]]의 (4)의 기저 판정을 쓰면 (1)이 나오고, (2)는 두 실수 사이의 유리수와 무리수로, (3)은 내부와 폐포의 여집합 등식으로 나온다.
:::

:::hint
$a < b$이면 열린구간 $(a, b)$는 공집합이 아니다. [[order-properties-of-reals]]의 (8)의 평균을 쓴다.
:::

:::hint
(3): [[interior-and-closure]]의 (6)에 의해 $\operatorname{Int} \mathbb{Q} = \mathbb{R} - \overline{\mathbb{R} - \mathbb{Q}}$이다.
:::

:::proof
**보통 위상과 기저.** [[standard-topology-on-reals]]의 (5)에 의해 $\mathcal{J}$는 위상의 기저이고 $\mathcal{T}_{\mathcal{J}}$가 보통 위상이므로, [[basis-of-a-given-topology]]의 정의에 의해 $\mathcal{J}$는 보통 위상의 기저이다. 같은 (5)에 의해 $\mathcal{T}_{\mathcal{J}} = \mathcal{T}_d$이다($d$는 [[metric-space-examples]]의 (1)의 보통 거리). 마찬가지로 [[lower-limit-topology]]의 (1)에 의해 $\mathcal{B}_l$은 위상의 기저이고 $\mathcal{T}_l = \mathcal{T}_{\mathcal{B}_l}$이므로 $\mathcal{B}_l$은 위상 $\mathcal{T}_l$의 기저이다.

**(1).** $\mathcal{J}$의 원소는 $a < b$인 실수 $a$, $b$에 대한 열린구간 $(a, b)$이고, [[order-properties-of-reals]]의 (8)에 의해 $a < (a + b)/2 < b$이므로 공집합이 아니다. 따라서 [[closure-by-neighborhoods]]의 (4)의 둘째 문장에 의해 $S$가 조밀한 것은 정확히 $a < b$인 모든 $a$, $b$에서 $(a, b) \cap S \ne \emptyset$일 때이다. [[interval]]의 정의에 의해 $(a, b) \cap S \ne \emptyset$은 $a < s < b$인 $s \in S$가 있다는 것이다. 둘째 문장은 $S = \mathbb{Q}$일 때 첫 문장의 오른쪽 조건이 [[rationals-are-dense|유리수의 조밀성]]의 (2)와 같은 문장이라는 것이다. 더 일반적으로 첫 문장은 임의의 $S \subseteq \mathbb{R}$에서 위상의 "조밀하다"가 그 (2)의 꼴, 곧 "두 실수 사이마다 $S$의 원소가 있다"와 같다는 것이다.

**(2).** $a < b$이면 [[rationals-are-dense|유리수의 조밀성]]의 (2)에 의해 $a < r < b$인 유리수 $r$이 있고, [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (6)의 (i)에 의해 $a < z < b$인 무리수 $z$가 있다. [[rational-and-irrational-numbers]]의 정의에 의해 무리수는 유리수가 아닌 실수이므로 $z \in \mathbb{R} - \mathbb{Q}$이다. (1)에 의해 $\mathbb{Q}$와 $\mathbb{R} - \mathbb{Q}$는 조밀하다.

**(3).** [[interior-and-closure]]의 (6)에 의해 $\operatorname{Int} \mathbb{Q} = \mathbb{R} - \overline{\mathbb{R} - \mathbb{Q}}$이고, (2)와 조밀의 정의에 의해 $\overline{\mathbb{R} - \mathbb{Q}} = \mathbb{R}$이므로 $\operatorname{Int} \mathbb{Q} = \mathbb{R} - \mathbb{R} = \emptyset$이다. 또 $\mathbb{R} - (\mathbb{R} - \mathbb{Q}) = \mathbb{Q}$이므로([[closed-set]]의 (5)) 같은 (6)에 의해 $\operatorname{Int}(\mathbb{R} - \mathbb{Q}) = \mathbb{R} - \overline{\mathbb{Q}} = \mathbb{R} - \mathbb{R} = \emptyset$이다. [[boundary-closure-and-cluster-points|경계·폐포·집적점의 관계]]의 (3)에 의해 $\partial \mathbb{Q} = \overline{\mathbb{Q}} - \operatorname{Int} \mathbb{Q} = \mathbb{R} - \emptyset = \mathbb{R}$이고, [[boundary]]의 (1)에 의해 $\partial(\mathbb{R} - \mathbb{Q}) = \partial \mathbb{Q} = \mathbb{R}$이다.

**(4).** [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (5)에 의해 $\mathbb{Z}$는 $(\mathbb{R}, d)$에서 닫힌집합이다. 보통 위상은 $\mathcal{T}_d$이므로 [[closed-set]]의 (6)에 의해 보통 위상에서 닫힌집합이고, [[interior-and-closure]]의 (3)에 의해 $\overline{\mathbb{Z}} = \mathbb{Z}$이다. $\mathbb{Z}$가 조밀하지 않다는 것은 (1)로 보인다. $0 < 1$이고, $0 < s < 1$인 정수 $s$는 없다. 그런 $s$가 있다면 $0 < s$이므로 [[prime-number]]의 (Z1)에 의해 $1 \le s$이고, 이것은 $s < 1$과 함께 성립하지 않는다([[order-properties-of-reals]]의 (10)과 (1)의 (i)). 따라서 (1)의 조건이 $a = 0$, $b = 1$에서 깨지므로 $\mathbb{Z}$는 조밀하지 않다.

**(5).** $\mathcal{B}_l$의 원소는 $a < b$인 $[a, b)$이고 $a \in [a, b)$이므로 공집합이 아니다. (2)의 증명처럼 $a < r < b$인 유리수 $r$과 $a < z < b$인 무리수 $z$가 있고, $a \le r < b$, $a \le z < b$이므로 $r$, $z \in [a, b)$이다. 곧 $\mathcal{B}_l$의 모든 원소가 $\mathbb{Q}$와도 $\mathbb{R} - \mathbb{Q}$와도 만난다. [[closure-by-neighborhoods]]의 (4)의 둘째 문장을 위상 $\mathcal{T}_l$의 기저 $\mathcal{B}_l$에 쓰면, $\mathbb{Q}$와 $\mathbb{R} - \mathbb{Q}$는 $\mathbb{R}_l$에서 조밀하다.
:::

## 예시와 반례

:::example[0 을 뺀 실수]
$\mathbb{R} - \{0\}$은 $\mathbb{R}$에서 조밀합니다. $a < b$라 하고 $m = (a + b)/2$라 하면 [[order-properties-of-reals]]의 (8)에 의해 $a < m < b$입니다. $m \ne 0$이면 $m$이 $(a, b)$ 안의 $\mathbb{R} - \{0\}$의 원소입니다. $m = 0$이면 $a < 0 < b$이고, 같은 (8)에 의해 $0 < b/2 < b$이므로 $b/2$가 $(a, b)$ 안의 $0$이 아닌 실수입니다. (1)에 의해 $\mathbb{R} - \{0\}$은 조밀합니다. 한편 $\{0\}$은 닫힌집합이므로([[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (2)) 그 여집합 $\mathbb{R} - \{0\}$은 열린집합이고, 조밀하면서 열린 집합의 예입니다.
:::

:::counterexample[조밀한 두 집합이 서로소일 수 있다]
(2)의 $\mathbb{Q}$와 $\mathbb{R} - \mathbb{Q}$는 둘 다 조밀하지만 공통 원소가 없습니다. 따라서 조밀한 두 집합의 교집합은 조밀하지 않을 수 있습니다. 교집합 $\emptyset$은 $\mathbb{R} \ne \emptyset$이므로 [[dense-subset]]의 (1)에 의해 조밀하지 않습니다.
:::

:::counterexample[구간 안의 유리수]
$\mathbb{Q} \cap (0, 1)$, 곧 $0$과 $1$ 사이의 유리수 전체는 $\mathbb{R}$에서 조밀하지 않습니다. $2 < 3$이고 $2 < s < 3$인 $s$는 $s < 1$일 수 없으므로([[order-properties-of-reals]]의 (1)의 (i)과 (v)) $\mathbb{Q} \cap (0, 1)$에 들지 않고, (1)의 조건이 $a = 2$, $b = 3$에서 깨집니다. 유리수가 "어디에나 있다"는 것은 집합 $\mathbb{Q}$ 전체의 성질입니다.
:::

## 확인 질문

:::check[정수가 아닌 실수 전체의 집합 $\mathbb{R} - \mathbb{Z}$는 $\mathbb{R}$에서 조밀한가?]
그렇습니다. $a < b$이면 (2)의 증명처럼 $a < z < b$인 무리수 $z$가 있습니다. [[rationals-are-dense|유리수의 조밀성]]의 (1)에 의해 정수는 유리수이므로 무리수 $z$는 정수가 아니고, $z \in \mathbb{R} - \mathbb{Z}$입니다. (1)에 의해 $\mathbb{R} - \mathbb{Z}$는 조밀합니다.
:::

:::check[$\mathbb{R}$에 이산 거리의 거리위상을 주면 $\mathbb{Q}$는 조밀한가?]
아닙니다. [[topology-examples]]의 (5)에 의해 이 위상은 이산위상이고, [[dense-subset]]의 (2)에 의해 이산위상에서 조밀한 부분집합은 전체뿐입니다. [[open-and-closed-sets-of-reals|실수의 열린집합과 닫힌집합의 예]]의 (6)의 (i)에 의해 $0$과 $1$ 사이에 무리수가 있으므로 $\mathbb{Q} \ne \mathbb{R}$입니다. 같은 집합 $\mathbb{Q}$가 보통 위상과 아래끝 위상에서는 조밀하고((2), (5)) 이산 거리의 위상에서는 조밀하지 않습니다.
:::
