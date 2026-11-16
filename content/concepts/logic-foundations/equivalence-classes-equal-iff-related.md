---
title: 두 동치류가 같을 조건
title_en: Equality of Equivalence Classes
aliases: [동치류가 같을 조건, equivalence classes are equal iff related]
kind: theorem
field: logic-foundations
msc: ["03E20"]
level: intro
summary: 동치관계 R에서 두 원소 a, b의 동치류 [a]와 [b]가 같은 것은 정확히 aRb일 때이다.
requires: [equivalence-relation, equivalence-class, properties-of-relations, relation, set, subset]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 11.4절 Equivalence Classes and Partitions, Theorem 11.1, p.215
    checked: original
    note: "출처의 증명과 같은 방식이다. 한쪽 방향은 a ∈ [a]에서 aRb를 얻고, 다른 방향은 양쪽 포함을 추이성과 대칭성으로 보인다. 아래는 각 단계의 근거를 requires 항목의 진술에 맞춰 다시 적었다. 예시와 반례, 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 4회. 수학적 오류 없음. 정의되지 않은 기호 제거, 출처에서 가져온 예 교체, 출처 기록 정정."
added: 2026-11-16
---

:::statement
$R$이 집합 $A$ 위의 [[equivalence-relation]]이고 $a, b \in A$라 하자. 그러면 두 [[equivalence-class]] $[a]$와 $[b]$가 같은 것은 정확히 $a R b$일 때이다. 곧 다음 두 문장이 모두 성립한다.

1. $[a] = [b]$이면 $a R b$이다.
2. $a R b$이면 $[a] = [b]$이다.
:::

:::english
Let $R$ be an equivalence relation on a set $A$, and let $a, b \in A$. Then the equivalence classes $[a]$ and $[b]$ are equal exactly when $a R b$. That is, both of the following hold.

1. If $[a] = [b]$, then $a R b$.
2. If $a R b$, then $[a] = [b]$.
:::

## 직관

"같은 반"으로 생각하면, 두 학생의 반이 같다는 것($[a] = [b]$)과 두 학생이 같은 반이라는 것($a R b$)은 같은 말입니다. 이 정리는 그 말이 모든 동치관계에서 통한다고 보증합니다. 이 비유에서 반 하나가 동치류 하나에 해당합니다.

그래서 $[a] = [b]$를 보이고 싶을 때는 $a R b$ 하나만 확인하면 되고, 거꾸로 두 원소가 관계있으면 그 동치류가 통째로 같다고 결론지을 수 있습니다. 증명에서는 동치관계의 세 성질이 모두 쓰입니다. 반사성은 한 방향에서, 대칭성과 추이성은 다른 방향에서 쓰입니다.

## 증명

:::idea
$[a] = [b]$이면 $a \in [a]$가 $[b]$ 안에 있게 되어 $a R b$가 나온다. 거꾸로 $a R b$이면 $[a]$의 원소가 $[b]$에, $[b]$의 원소가 $[a]$에 있음을 추이성(과 대칭성)으로 보인다.
:::

:::hint
첫째 문장에서는 $a \in [a]$인 이유를 반사성에서 찾아 보세요. $[a] = [b]$이면 $a$는 $[b]$에도 속합니다.
:::

:::hint
둘째 문장은 두 집합이 같음을 보이는 것이므로 $[a] \subseteq [b]$와 $[b] \subseteq [a]$를 따로 보입니다. $c \in [a]$를 잡으면 $c R a$이고, 가정은 $a R b$입니다.
:::

:::hint
$[b] \subseteq [a]$에서는 $c R b$와 $a R b$를 가지고 있습니다. $c R a$를 얻으려면 $b R a$가 필요하므로 대칭성을 먼저 쓰세요.
:::

:::proof
$[a]$의 정의에 의해 $A$의 원소 $x$에 대하여 $x \in [a]$인 것은 정확히 $x R a$일 때이고, $x \in [b]$인 것은 정확히 $x R b$일 때이다. 이 사실을 아래에서 계속 쓴다.

**(1) $[a] = [b]$이면 $a R b$이다.** $[a] = [b]$라 하자. $R$은 동치관계이므로 반사적이고, 따라서 모든 $x \in A$에 대하여 $x R x$이다. 특히 $a \in A$이므로 $a R a$이다. $a \in A$이고 $a R a$이므로 $a \in [a]$이다. $[a] = [b]$이므로 $a \in [b]$이다. $a \in A$이고 $a \in [b]$이므로 $a R b$이다.

**(2) $a R b$이면 $[a] = [b]$이다.** $a R b$라 하자. 두 집합이 같음은 서로의 부분집합임으로 보인다.

($[a] \subseteq [b]$) $c \in [a]$라 하자. $[a]$는 $A$의 부분집합이므로 $c \in A$이고, $c \in [a]$이므로 $c R a$이다. $c R a$이고 $a R b$이다. $R$은 추이적이므로 $c R b$이다. $c \in A$이고 $c R b$이므로 $c \in [b]$이다. 따라서 $[a] \subseteq [b]$이다.

($[b] \subseteq [a]$) $c \in [b]$라 하자. $c \in A$이고 $c R b$이다. 가정 $a R b$와 $R$의 대칭성에 의해 $b R a$이다. $c R b$이고 $b R a$이다. $R$은 추이적이므로 $c R a$이다. $c \in A$이고 $c R a$이므로 $c \in [a]$이다. 따라서 $[b] \subseteq [a]$이다.

두 포함에 의해 $[a]$와 $[b]$의 원소가 정확히 일치하므로 $[a] = [b]$이다.
:::

## 예시와 반례

:::example
$A = \{1, 2, 3, 4\}$, $S = \{(1, 1), (2, 2), (3, 3), (4, 4), (1, 2), (2, 1)\}$은 동치관계입니다([[equivalence-class]]의 예시). $1 S 2$이므로 정리에 의해 $[1] = [2]$이고, 실제로 둘 다 $\{1, 2\}$입니다. 반면 $1 S 3$은 성립하지 않으므로 $[1] \ne [3]$이고, 실제로 $[3] = \{3\}$입니다.
:::

:::example
$\mathbb{Z}$ 위의 "$x R y$는 $x^2 = y^2$을 뜻한다"에서 $3 R (-3)$이므로 $[3] = [-3] = \{3, -3\}$입니다. $3 R 4$는 성립하지 않으므로 $[3] \ne [4]$입니다.
:::

:::counterexample[반사성이 없으면 첫째 문장이 깨진다]
정의의 식 $\{x \in A : x R a\}$를 동치관계가 아닌 관계에 형식적으로 적용해 봅시다. $A = \{1, 2\}$ 위의 빈 관계 $R = \emptyset$은 대칭적이고 추이적이지만 반사적이 아닙니다. 이때 $\{x \in A : x R 1\} = \emptyset = \{x \in A : x R 2\}$로 두 집합은 같지만 $1 R 2$는 성립하지 않습니다. 증명 (1)에서 반사성이 쓰이는 이유를 보여 주는 예입니다.
:::

## 확인 질문

:::check[$A = \{1, 2, 3\}$ 위의 동치관계 $R = \{(1, 1), (2, 2), (3, 3), (1, 3), (3, 1)\}$에서 $[1] = [3]$인가? $[1] = [2]$인가?]
$1 R 3$이므로 정리에 의해 $[1] = [3]$입니다. $1 R 2$는 성립하지 않으므로 $[1] \ne [2]$입니다.
:::

:::check[집합 $A$ 위의 동치관계 $R$과 $a, b, c \in A$에 대하여 $[a] = [b]$이고 $b R c$이면 $[a] = [c]$인가?]
그렇습니다. 정리의 첫째 문장에 의해 $a R b$이고, $b R c$와 추이성에 의해 $a R c$입니다. 정리의 둘째 문장에 의해 $[a] = [c]$입니다.
:::
