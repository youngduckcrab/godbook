---
title: 자연수의 집합은 무한집합이다
title_en: The Set of Natural Numbers Is Infinite
aliases: [ℕ은 무한집합, 자연수는 무한히 많다, the natural numbers are infinite]
kind: theorem
field: logic-foundations
msc: ["03E10"]
level: intro
summary: 자연수의 집합 ℕ은 유한집합이 아니다. 따름으로 ℕ을 부분집합으로 갖는 집합과 가산 무한 집합은 모두 무한집합이다.
requires: [set, subset, function, injective-surjective-bijective, proof-by-contradiction, composition-preserves-injectivity-and-surjectivity, countably-infinite-set, finite-set, subset-of-finite-set, number-of-elements-is-unique, prime-number, well-ordering-principle]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 1.1절 Introduction to Sets, p.3(정수 전체를 원소가 무한히 많은 집합의 예로 든다)
    checked: original
    note: "출처는 p.3에서 정수 전체의 집합을 원소가 무한히 많은 집합의 예로 들고(점 세 개로 쓴 목록), 무한히 많은 원소를 가진 집합을 무한집합이라 부른다. 출처는 정수나 자연수의 집합이 무한집합이라는 것을 증명하지 않는다. 이 항목의 진술과 증명은 이 사이트의 것이다. 출처의 '무한집합'은 이 사이트의 finite-set 항목에서 '유한집합이 아닌 집합'으로 정해져 있다. 예시와 반례, 확인 질문은 이 사이트에서 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$\mathbb{N} = \{1, 2, 3, \dots\}$은 양의 정수의 집합이다. 다음이 성립한다.

1. $\mathbb{N}$은 [[finite-set|유한집합]]이 아니다. 곧 $\mathbb{N}$은 무한집합이다.
2. 집합 $C$가 $\mathbb{N} \subseteq C$이면 $C$는 무한집합이다. 예컨대 $\mathbb{Z}$는 무한집합이다.
3. $A$가 [[countably-infinite-set|가산 무한 집합]]이면 $A$는 무한집합이다.

증명에서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 인용하고, [[finite-set]]의 (F2)–(F5), [[number-of-elements-is-unique]]와 [[subset-of-finite-set]]을 쓴다.
:::

:::english
Let $\mathbb{N} = \{1, 2, 3, \dots\}$ be the set of positive integers. The following hold.

1. $\mathbb{N}$ is not a finite set. That is, $\mathbb{N}$ is an infinite set.
2. If a set $C$ satisfies $\mathbb{N} \subseteq C$, then $C$ is an infinite set. For example, $\mathbb{Z}$ is an infinite set.
3. If $A$ is a countably infinite set, then $A$ is an infinite set.

In the proof we cite (Z1) of the entry on prime numbers and (Z5)–(Z8), (L1)–(L3) of the entry on the well-ordering principle, and we use (F2)–(F5) of the entry on finite sets, the uniqueness of the number of elements, and the results on subsets of finite sets.
:::

## 직관

번호를 $1, 2, 3, \dots$로 붙여 나가면 끝이 없다는 것은 누구나 압니다. 이 항목은 그것을 "전단사로 센 결과가 있을 수 없다"는 말로 바꿔 증명합니다. 만약 $\mathbb{N}$이 원소를 $n$개 가진다면 $\{1, \dots, n+1\}$도 $\mathbb{N}$의 일부이므로, 그 일부분이 전체보다 원소가 많다는 모순이 생깁니다. 이 모순을 만드는 도구가 [[subset-of-finite-set|유한집합의 부분집합]]입니다.

비유가 어긋나는 곳은 "무한집합"의 뜻입니다. 이 사이트에서 무한집합은 "유한집합이 아닌 집합", 곧 어떤 $n$에 대해서도 원소를 $n$개 갖지 않는 집합입니다. "무한히 크다"는 느낌과는 다르고, 무한집합이라고 해서 모두 크기가 같은 것도 아닙니다.

## 증명

:::idea
$\mathbb{N}$이 원소를 $n$개 갖는다고 가정하면 $\mathbb{N}$의 부분집합 $\{1, \dots, n+1\}$이 원소를 $n + 1$개 가지므로 부분집합의 개수가 전체의 개수 $n$을 넘는다. 이는 [[subset-of-finite-set]]에 어긋난다.
:::

:::hint
$\{1, \dots, n+1\}$이 $\mathbb{N}$의 부분집합인지부터 확인하세요. 원소는 모두 $1$ 이상인 정수입니다.
:::

:::proof
**1의 증명.** [[proof-by-contradiction]]의 틀을 따른다. $\mathbb{N}$이 유한집합이라고 가정하면 어떤 정수 $n \ge 0$에 대하여 $\mathbb{N}$이 원소를 $n$개 갖는다. $i \in \{1, \dots, n+1\}$이면 $1 \le i$이고 (Z8)의 $0 < 1$과 (Z6)에 의해 $0 < i$이므로 $i \in \mathbb{N}$이다. 따라서 $\{1, \dots, n+1\} \subseteq \mathbb{N}$이다. [[subset-of-finite-set]]의 1에 의해 $|\{1, \dots, n+1\}| \le n$이다. 그런데 [[finite-set]]의 (F2)에 의해 $\{1, \dots, n+1\}$은 원소를 $n + 1$개 가지므로 $|\{1, \dots, n+1\}| = n + 1$이다. 따라서 $n + 1 \le n$이고, (L3)의 $n < n + 1$과 함께 (L1)에 어긋난다. 따라서 $\mathbb{N}$은 유한집합이 아니다.

**2의 증명.** $\mathbb{N} \subseteq C$이고 $C$가 유한집합이라 가정하면 $C$는 원소를 $n$개 갖는 정수 $n \ge 0$이 있다. [[subset-of-finite-set]]의 1에 의해 $\mathbb{N}$은 유한집합이다. 이는 1에 어긋나므로 $C$는 무한집합이다. $\mathbb{Z}$에 대해서는 $\mathbb{N}$의 원소가 모두 정수이므로 $\mathbb{N} \subseteq \mathbb{Z}$이다.

**3의 증명.** $f : \mathbb{N} \to A$가 전단사이고 $A$가 유한집합이라 가정한다. $A$가 원소를 $n$개 갖는 정수 $n \ge 0$이 있고 전단사 $h : \{1, \dots, n\} \to A$가 있다. [[finite-set]]의 (F3)에 의해 $f^{-1} : A \to \mathbb{N}$이 전단사이므로, $f^{-1} \circ h : \{1, \dots, n\} \to \mathbb{N}$은 [[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]의 3번에 의해 전단사이다. 곧 $\mathbb{N}$이 원소를 $n$개 갖게 되어 $\mathbb{N}$이 유한집합이라는 결론이 되는데, 1에 어긋난다. 따라서 $A$는 무한집합이다. $\blacksquare$
:::

## 예시와 반례

:::example[$\mathbb{Z}$와 큰 자연수의 집합]
$\mathbb{N}$의 원소는 모두 정수이므로 $\mathbb{N} \subseteq \mathbb{Z}$이고 2에 의해 $\mathbb{Z}$는 무한집합입니다. 또 $F = \{k \in \mathbb{N} : k \ge 5\}$에 대하여 $g(n) = n + 4$로 정한 $g : \mathbb{N} \to F$는 단사이고($a + 4 = a' + 4$이면 $a = a'$) 전사입니다($k \ge 5$이면 $k - 4 \ge 1$이므로 $k - 4 \in \mathbb{N}$이고 $g(k - 4) = k$). 따라서 $F$는 가산 무한이고 3에 의해 무한집합입니다.
:::

:::counterexample[무한집합이면 비가산인가?]
아닙니다. $\mathbb{N}$은 무한집합이지만 $\mathrm{id}(n) = n$으로 정한 $\mathrm{id} : \mathbb{N} \to \mathbb{N}$이 전단사이므로 $\mathbb{N}$ 자신이 가산 무한이고, [[countably-infinite-set]]의 정의에 의해 비가산이 아닙니다. 비가산은 무한집합이면서 $\mathbb{N}$에서 오는 전단사가 없다는 두 조건이 모두 필요합니다.
:::

## 확인 질문

:::check[$\mathbb{N}$의 부분집합 $\{1, 2, 3\}$은 유한집합이고 원소를 $3$개 갖는다. 이것은 $\mathbb{N}$이 무한집합이라는 결론과 모순되지 않는가?]
모순되지 않습니다. 이 항목은 부분집합이 유한하다고 해서 전체가 유한하다고는 하지 않습니다. 반대로 [[subset-of-finite-set]]은 유한집합의 부분집합이 유한하다는 것이고, $\mathbb{N}$은 유한집합이 아니므로 그 정리가 적용되지 않습니다.
:::

:::check[짝수인 자연수의 집합 $E = \{2n : n \in \mathbb{N}\}$은 $\mathbb{N}$을 부분집합으로 갖지는 않는다. 그래도 무한집합이라고 할 수 있는가?]
할 수 있습니다. $f(n) = 2n$으로 정한 $f : \mathbb{N} \to E$는 단사($a < a'$이면 (Z7)에 의해 $a + a < a' + a < a' + a'$이므로 $2a < 2a'$이고, $a' < a$이면 같은 이유로 $2a' < 2a$이므로, $a \ne a'$이면 (Z5)에 의해 $2a \ne 2a'$)이고 정의에 의해 전사이므로 전단사입니다. 따라서 $E$는 가산 무한이고 3에 의해 무한집합입니다.
:::
