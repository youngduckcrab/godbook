---
title: 비둘기집 원리
title_en: Pigeonhole Principle
aliases: [비둘기집 원리, 서랍 원리, pigeonhole principle, Dirichlet's box principle]
kind: theorem
field: logic-foundations
msc: ["03"]
level: intro
summary: m이 n보다 크면 {1, …, m}에서 {1, …, n}으로의 단사는 없다. 따라서 원소가 더 많은 유한집합에서 더 적은 유한집합으로의 함수는 단사가 아니다.
requires: [set, subset, function, injective-surjective-bijective, function-composition, composition-preserves-injectivity-and-surjectivity, mathematical-induction, comparing-cardinalities, finite-set, adding-or-removing-an-element, prime-number, well-ordering-principle]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 3.9절 The Division and Pigeonhole Principles, Fact 3.10, p.104(개수판). 12.3절 The Pigeonhole Principle Revisited, p.233(함수판)
    checked: original
    note: "출처 Fact 3.10(p.104)은 '물건 n개를 상자 k개에 넣을 때 n > k이면 어떤 상자에는 물건이 둘 이상 들어 있고, n < k이면 빈 상자가 있다'는 개수판이다. 출처는 이것이 나눗셈 원리(Fact 3.9)에서 따라 나온다고 쓰고 증명하지 않으며, 바로 뒤에서 '나눗셈 원리와 비둘기집 원리는 직관적이고 자명하다(intuitive and obvious)'고 쓴다(p.105). 12.3절(p.233)의 함수판은 유한집합 A, B와 함수 f : A → B에 대해 |A| > |B|이면 f가 단사가 아니고 |A| < |B|이면 f가 전사가 아니라고 서술하며, 출처는 이 원리가 자명하다(obvious)고 쓸 뿐 증명하지 않는다. 이 항목은 함수판 중 단사에 관한 1번만 다루고(전사에 관한 2번은 다루지 않는다) 증명은 출처에 없으며 이 사이트가 n에 대한 귀납으로 직접 썼다. 출처는 |A| > |B|를 원소의 개수의 대소로 쓰지만 이 항목은 정수 m, n의 대소로 진술해, comparing-cardinalities의 |A| ≤ |B|(단사의 존재)와 섞이지 않게 했다. '비둘기집'이라는 이름과 비둘기·상자의 직관은 출처가 3.9절(p.104)에서 설명한 것과 같은 취지이다. 예시와 반례, 확인 질문은 이 사이트에서 새로 만들었고 출처의 예(12.3절의 부분집합 합, 텍사스 사람의 머리카락 수, 3.9절의 예들)와 다르다."
status: source-checked
added: 2026-11-16
---

:::statement
$m$과 $n$이 정수이고 $m \ge 0$, $n \ge 0$이라 하자. 여기서 $\{1, \dots, n\}$은 [[finite-set]]에서 정한 집합이다.

1. $\{1, \dots, m\}$에서 $\{1, \dots, n\}$으로의 단사가 존재하면 $m \le n$이다. 곧 $m > n$이면 $\{1, \dots, m\}$에서 $\{1, \dots, n\}$으로의 단사는 존재하지 않는다.
2. (함수판) $A$가 원소를 $m$개, $B$가 원소를 $n$개 갖고 $m > n$이며 $f : A \to B$가 [[function|함수]]이면, $f$는 단사가 아니다. 곧 $a \ne a'$이고 $f(a) = f(a')$인 $a, a' \in A$가 있다.

여기서 $m \le n$, $m > n$은 정수 $m$, $n$의 대소 비교이다([[comparing-cardinalities]]의 $|A| \le |B|$와 다르다). 증명에서는 [[prime-number]]의 (Z1), [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3), [[finite-set]]의 (F1)–(F3)과 [[adding-or-removing-an-element]]의 결과를 인용한다.
:::

:::english
Let $m$ and $n$ be integers with $m \ge 0$ and $n \ge 0$. Here $\{1, \dots, n\}$ is the set defined in the entry on finite sets.

1. If there exists an injection from $\{1, \dots, m\}$ to $\{1, \dots, n\}$, then $m \le n$. Equivalently, if $m > n$, there is no injection from $\{1, \dots, m\}$ to $\{1, \dots, n\}$.
2. (Function version) If $A$ has $m$ elements, $B$ has $n$ elements, $m > n$, and $f : A \to B$ is a function, then $f$ is not injective. That is, there are $a, a' \in A$ with $a \ne a'$ and $f(a) = f(a')$.

Here $m \le n$ and $m > n$ are comparisons of the integers $m$ and $n$ (not the relation $|A| \le |B|$ defined by the existence of an injection). In the proof we cite (Z1) of the entry on prime numbers, (Z5)–(Z8) and (L1)–(L3) of the entry on the well-ordering principle, (F1)–(F3) of the entry on finite sets, and the results on adding or removing one element.
:::

## 직관

비둘기 $m$마리가 집 $n$개에 들어갈 때 $m > n$이면 어느 집에는 두 마리 이상이 들어갑니다. 비둘기를 $\{1, \dots, m\}$, 집을 $\{1, \dots, n\}$의 원소로 보고 "비둘기가 들어간 집"을 함수 $f$로 쓰면, 어느 집에 두 마리 이상 있다는 것은 $f$가 단사가 아니라는 말입니다. 그러니 "$m > n$이면 단사가 없다"가 같은 말입니다.

비유가 어긋나는 곳은 집이 무한히 많거나 비둘기가 무한히 많은 경우입니다. 이 항목은 $\{1, \dots, m\}$, $\{1, \dots, n\}$처럼 개수가 정해진 집합에 대한 것이고, 무한집합에는 아래 반례처럼 이 결론이 통하지 않습니다.

증명은 $n$에 대한 귀납입니다. 집이 하나 늘 때, 마지막 비둘기가 들어간 집 하나를 치우고 나머지 비둘기와 나머지 집을 보면 비둘기 한 마리와 집 한 개가 줄어든 같은 문제가 됩니다.

## 증명

:::idea
$n$에 대한 귀납법. $n = 0$이면 집이 없으므로 비둘기도 없다. $n$에서 $n + 1$로 갈 때는 마지막 비둘기가 들어간 집을 치우고, 나머지 집이 $n$개임을 [[adding-or-removing-an-element]]로 확인한 뒤 귀납 가정을 쓴다. 함수판은 전단사로 $\{1, \dots, m\}$과 $\{1, \dots, n\}$으로 옮겨 1번에 보낸다.
:::

:::hint
정수 $n \ge 0$마다 "모든 정수 $m \ge 0$에 대하여, $\{1, \dots, m\}$에서 $\{1, \dots, n\}$으로의 단사가 있으면 $m \le n$이다"를 $S_n$이라 두고, 시작점이 $0$인 귀납법으로 모든 $n$에서 $S_n$을 보이세요.
:::

:::hint
귀납 단계에서 $f : \{1, \dots, m\} \to \{1, \dots, n+1\}$이 단사이고 $m > 0$이면, 값 $f(m)$을 집합 $\{1, \dots, n+1\}$에서 뺀 집합은 원소를 $n$개 갖습니다. $f$의 $\{1, \dots, m-1\}$으로의 제한이 그 집합으로 가는 단사입니다.
:::

:::proof
**1의 증명.** 정수 $n \ge 0$에 대하여 명제 $S_n$을 "모든 정수 $m \ge 0$에 대하여, $\{1, \dots, m\}$에서 $\{1, \dots, n\}$으로의 단사가 있으면 $m \le n$이다"로 정한다. 시작점이 $0$인 [[mathematical-induction]]으로 모든 정수 $n \ge 0$에서 $S_n$이 참임을 보인다.

*기초 단계 ($S_0$).* $m \ge 0$이고 $f : \{1, \dots, m\} \to \{1, \dots, 0\}$이 단사라 하자. $m > 0$이라 가정하면 (Z1)에 의해 $0 + 1 \le m$, 곧 $1 \le m$이고 $1 \le 1$이므로 $1 \in \{1, \dots, m\}$이다. 그러면 $f(1) \in \{1, \dots, 0\}$인데 [[finite-set]]의 (F1)에 의해 $\{1, \dots, 0\} = \emptyset$이므로 불가능하다. 따라서 $m > 0$이 아니고, $m \ge 0$은 $m > 0$ 또는 $m = 0$이므로 $m = 0$이다. 곧 $m \le 0$이다.

*귀납 단계.* $n \ge 0$인 정수 $n$을 하나 잡고 $S_n$이 참이라고 가정한다(귀납 가정). $m \ge 0$이고 $f : \{1, \dots, m\} \to \{1, \dots, n+1\}$이 단사라 하자. $m \le n + 1$임을 보인다. $m \ge 0$이므로 $m = 0$ 또는 $m > 0$이다.

$m = 0$이면 $0 \le n$과 (L3)의 $n < n + 1$에서 (Z6)에 의해 $0 < n + 1$이므로 $m \le n + 1$이다.

$m > 0$이면 (Z1)에 의해 $1 \le m$이고, 양변에서 $1$을 빼면 (Z7)에 의해 $0 \le m - 1$이다. $p = m - 1$로 두면 $p$는 $p \ge 0$인 정수이고 $p + 1 = m$이다. (F1)에 의해 $\{1, \dots, m\} = \{1, \dots, p\} \cup \{m\}$이고 $m \notin \{1, \dots, p\}$이다. $c = f(m)$이라 하면 $c \in \{1, \dots, n+1\}$이다. $i \in \{1, \dots, p\}$이면 $i \in \{1, \dots, m\}$이고 $i \ne m$이므로 $f$가 단사라서 $f(i) \ne f(m) = c$이다. 곧 $f|_{\{1, \dots, p\}}$의 값은 모두 $B' = \{1, \dots, n+1\} - \{c\}$의 원소이다. [[adding-or-removing-an-element]]의 결과에 의해 $f|_{\{1, \dots, p\}}$는 $\{1, \dots, p\}$에서 $\{1, \dots, n+1\}$로의 단사이고, [[function]]의 진술에 의해 $\{1, \dots, p\}$에서 $B'$로의 단사 함수이기도 하다. (F2)에 의해 $\{1, \dots, n+1\}$은 원소를 $n + 1$개 갖고 $c \in \{1, \dots, n+1\}$이므로, 같은 항목의 (b)에 의해 $B'$는 원소를 $n$개 갖는다. 곧 전단사 $e : \{1, \dots, n\} \to B'$가 있다. (F3)에 의해 $e^{-1} : B' \to \{1, \dots, n\}$은 전단사이고, [[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]의 1번에 의해 $e^{-1} \circ f|_{\{1, \dots, p\}} : \{1, \dots, p\} \to \{1, \dots, n\}$은 단사이다. 귀납 가정 $S_n$을 정수 $p \ge 0$에 쓰면 $p \le n$이다. 양변에 $1$을 더하면 (Z7)에 의해 $m = p + 1 \le n + 1$이다.

두 경우 모두 $m \le n + 1$이므로 $S_{n+1}$이 참이다. 귀납법의 원리에 의해 모든 정수 $n \ge 0$에서 $S_n$이 참이다. 이것이 1이다. "곧 $m > n$이면 단사가 없다"는 대우이다: 단사가 있으면 $m \le n$이고, (L1)에 의해 $n < m$과 $m \le n$은 함께 성립하지 않는다.

**2의 증명.** $f : A \to B$가 단사라고 가정하고 모순을 이끈다. $A$가 원소를 $m$개, $B$가 원소를 $n$개 가지므로 전단사 $h_A : \{1, \dots, m\} \to A$와 $h_B : \{1, \dots, n\} \to B$가 있다. (F3)에 의해 $h_B^{-1} : B \to \{1, \dots, n\}$도 전단사이다. [[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]의 1번에 의해 $f \circ h_A : \{1, \dots, m\} \to B$가 단사이고, 같은 정리를 다시 쓰면 $h_B^{-1} \circ f \circ h_A : \{1, \dots, m\} \to \{1, \dots, n\}$이 단사이다. 1에 의해 $m \le n$인데, $m > n$이므로 (L1)에 어긋난다. 따라서 $f$는 단사가 아니고, [[injective-surjective-bijective|단사의 부정]]에 의해 $a \ne a'$이고 $f(a) = f(a')$인 $a, a' \in A$가 있다. $\blacksquare$
:::

:::remark[전사에 관한 판은 다루지 않는다]
출처는 함수판에서 $|A| < |B|$이면 $f$가 전사가 아니라는 것도 말하지만, 이 항목은 단사에 관한 1번과 2번만 증명합니다. 전사에 관한 판은 여기서 쓰지 않으며 이 항목의 진술에 없습니다.
:::

## 예시와 반례

:::example[$\{1, 2, 3\}$에서 $\{1, 2\}$로의 함수를 모두 늘어놓기]
$3 > 2$이므로 비둘기집 원리는 $\{1, 2, 3\}$에서 $\{1, 2\}$로의 단사가 없다고 말합니다. 직접 확인해 봅시다. 함수는 $(f(1), f(2), f(3))$를 $\{1, 2\}$에서 고르는 것이므로 $2^3 = 8$개이고, 각각 값이 같은 서로 다른 입력의 쌍이 있습니다.

| $(f(1), f(2), f(3))$ | 값이 같은 두 입력 |
|---|---|
| (1, 1, 1) | 1과 2 |
| (1, 1, 2) | 1과 2 |
| (1, 2, 1) | 1과 3 |
| (1, 2, 2) | 2와 3 |
| (2, 1, 1) | 2와 3 |
| (2, 1, 2) | 1과 3 |
| (2, 2, 1) | 1과 2 |
| (2, 2, 2) | 1과 2 |

여덟 개 모두 단사가 아닙니다. 비둘기집 원리는 이런 목록을 만들지 않고도 같은 결론을 줍니다.
:::

:::example[함수판의 적용: 요일 배정]
학생 8명의 집합 $S$(원소를 $8$개 갖는 집합)가 있고, 각 학생에게 월요일부터 금요일까지 다섯 요일 가운데 하루를 발표일로 정했다고 합시다. 요일의 집합 $W$는 원소를 $5$개 갖습니다. 배정은 함수 $f : S \to W$입니다. $8 > 5$이므로 2번에 의해 $f$는 단사가 아니고, 따라서 서로 다른 두 학생이 같은 요일에 배정됩니다. 누구인지는 알려 주지 않고 그런 두 학생이 있다는 것만 알려 줍니다.
:::

:::counterexample[역은 성립하지 않는다]
"$m \le n$이면 $\{1, \dots, m\}$에서 $\{1, \dots, n\}$으로의 함수는 모두 단사이다"는 거짓입니다. $m = 2$, $n = 3$이면 $2 \le 3$이지만 $f = \{(1, 1), (2, 1)\}$은 $\{1, 2\}$에서 $\{1, 2, 3\}$으로의 함수이고 $f(1) = f(2)$이며 $1 \ne 2$이므로 단사가 아닙니다. 이 항목은 $m > n$일 때 단사가 하나도 없다고 말할 뿐, $m \le n$일 때 어떤 함수가 단사일지는 말하지 않습니다.
:::

:::counterexample[무한집합에서는 통하지 않는다]
$E = \{2n : n \in \mathbb{N}\}$이라 하고 $g(n) = 2n$으로 정한 $g : \mathbb{N} \to E$를 봅시다. $2a = 2a'$이면 $a = a'$이므로(양변을 $2$로 나눈다) 단사이고, $E$의 원소는 모두 $2n$ 꼴이므로 전사입니다. 한편 $n \ge 1$이면 $2n = n + n \ge 1 + 1 = 2$($\mathbb{Z}$의 덧셈과 부등식의 성질 (Z7)과 (Z6))이므로 $E$의 원소는 모두 $2$ 이상의 자연수이고, $1 \in \mathbb{N}$은 $E$에 속하지 않습니다. $E$는 $\mathbb{N}$의 일부분인데도 $\mathbb{N}$에서 $E$로의 단사가 있습니다. 이 항목이 증명한 것은 $\{1, \dots, m\}$, $\{1, \dots, n\}$처럼 원소의 개수가 정해진 집합에 대한 "더 큰 쪽에서 더 작은 쪽으로는 단사가 없다"뿐입니다.
:::

## 확인 질문

:::check[$\{1, 2, 3, 4\}$에서 $\{1, 2, 3\}$으로의 단사가 있는가? 비둘기집 원리의 어느 부분을 쓰는가?]
없습니다. $m = 4$, $n = 3$이고 $4 > 3$이므로 1에 의해 단사가 존재하지 않습니다.
:::

:::check[$f : \{1, 2, 3\} \to \{1, 2, 3, 4\}$이고 $f(1) = f(2) = 3$이다. 비둘기집 원리가 $f$가 단사가 아니라는 것을 보장하는가?]
보장하지 않습니다. $3 \le 4$이므로 비둘기집 원리는 이 경우에 아무 결론도 주지 않습니다. $f$가 단사가 아닌 것은 $f(1) = f(2)$이고 $1 \ne 2$라는 구체적인 사실 때문입니다.
:::
