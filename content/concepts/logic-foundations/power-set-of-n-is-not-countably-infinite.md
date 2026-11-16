---
title: 자연수 집합의 멱집합은 가산 무한이 아니다
title_en: The Power Set of the Natural Numbers Is Not Countably Infinite
aliases: [자연수의 멱집합, P(N)은 가산 무한이 아니다, 𝒫(ℕ)은 가산 무한이 아니다, power set of N]
kind: corollary
field: logic-foundations
msc: ["03E10"]
level: intro
summary: ℕ에서 𝒫(ℕ)로의 전단사는 존재하지 않으므로 𝒫(ℕ)은 가산 무한이 아니고, 더 나아가 |ℕ| < |𝒫(ℕ)|이다.
requires: [set, subset, function, injective-surjective-bijective, power-set, equal-cardinality, comparing-cardinalities, countably-infinite-set, cantors-theorem, n-and-z-have-equal-cardinality]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 14.3절 Comparing Cardinalities, Theorem 14.7 뒤의 사슬 (14.2)와 그 아래 설명, p.282
    checked: original
    note: "출처는 Theorem 14.7을 ℕ에 거듭 적용해 ℵ₀ = |ℕ| < |𝒫(ℕ)| < |𝒫(𝒫(ℕ))| < ⋯ (14.2)을 얻고, 'ℕ은 가산이고 𝒫(ℕ), 𝒫(𝒫(ℕ)) 등은 모두 비가산'이라고 문장으로 말한다(p.282). 출처는 이를 따로 정리로 진술하지 않는다. 출처의 비가산은 'A가 무한집합이고 ℕ에서 A로의 전단사가 없다'이고(Definition 14.2), 출처는 𝒫(ℕ)이 무한집합이라는 것을 따로 증명하지 않는다. 이 사이트에는 유한집합·무한집합에 관한 엄밀한 도구가 없으므로 이 항목은 '무한집합이다'를 증명하지 않고, 진술을 '𝒫(ℕ)은 가산 무한이 아니다(ℕ에서 𝒫(ℕ)로의 전단사는 존재하지 않는다)'로 좁혀서 증명한다. 그래서 진술에 '비가산'이라는 낱말을 쓰지 않았다. 증명은 cantors-theorem 항목을 ℕ에 적용한 것이다. 예시, 반례, 확인 질문은 이 사이트에서 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 4회. 수학적 오류 없음. 증명 가능한 범위로 진술을 좁히고 받아들이는 사실을 명시, 역사 인용과 출처 기록 정정."
added: 2026-11-16
---

:::statement
자연수의 집합 $\mathbb{N}$의 [[power-set|멱집합]] $\mathscr{P}(\mathbb{N})$에 대하여 다음이 성립한다.

1. $\mathbb{N}$에서 $\mathscr{P}(\mathbb{N})$로의 전단사는 존재하지 않는다. 곧 $|\mathbb{N}| \ne |\mathscr{P}(\mathbb{N})|$이다.
2. 따라서 $\mathscr{P}(\mathbb{N})$은 [[countably-infinite-set|가산 무한]]이 아니다.
3. 더 나아가 $|\mathbb{N}| < |\mathscr{P}(\mathbb{N})|$이다.
:::

:::english
For the power set $\mathscr{P}(\mathbb{N})$ of the set $\mathbb{N}$ of natural numbers, the following hold.

1. There is no bijection from $\mathbb{N}$ to $\mathscr{P}(\mathbb{N})$. That is, $|\mathbb{N}| \ne |\mathscr{P}(\mathbb{N})|$.
2. Hence $\mathscr{P}(\mathbb{N})$ is not countably infinite.
3. Moreover, $|\mathbb{N}| < |\mathscr{P}(\mathbb{N})|$.
:::

## 직관

[[countably-infinite-set|가산 무한]]은 자연수 $1, 2, 3, \dots$로 번호를 매겨 원소를 빠짐없이 늘어놓을 수 있다는 뜻이었습니다. 이 항목은 $\mathbb{N}$의 부분집합 전체는 그렇게 번호를 매길 수 없다고 말합니다. 어떤 번호 매김 $f$가 주어져도, "$n$번 부분집합 $f(n)$ 안에 $n$이 없는 $n$들"을 모은 집합은 어느 번호의 집합과도 다르기 때문입니다.

정의에서 "비가산"은 가산 무한이 아닌 것에 더해 무한집합일 것을 요구합니다. 출처는 $\mathscr{P}(\mathbb{N})$을 비가산이라고 말하지만, 이 항목은 $\mathscr{P}(\mathbb{N})$이 무한집합이라는 것까지는 증명하지 않습니다. 그래서 증명한 것만 진술에 적었고, 진술은 "가산 무한이 아니다"로 끝납니다. 이것은 유한집합과 무한집합을 엄밀히 다루는 도구가 아직 이 강의에 없기 때문입니다. 가산 무한이 아니라는 사실이 이 항목이 증명하는 내용입니다.

## 증명

:::idea
[[cantors-theorem|칸토어 정리]]에서 $A = \mathbb{N}$으로 두면 $\mathbb{N}$에서 $\mathscr{P}(\mathbb{N})$으로의 전단사가 없다. 가산 무한의 정의가 바로 그 전단사의 존재이다.
:::

:::hint
칸토어 정리의 진술은 모든 집합 $A$에 대해 성립한다. $A$에 $\mathbb{N}$을 넣어 보라.
:::

:::proof
$\mathbb{N}$은 집합이므로 [[cantors-theorem|칸토어 정리]]에 의해 $|\mathbb{N}| < |\mathscr{P}(\mathbb{N})|$이다. [[comparing-cardinalities|크기 비교]]의 정의에 의해 이는 $\mathbb{N}$에서 $\mathscr{P}(\mathbb{N})$으로의 단사가 존재하지만 $\mathbb{N}$에서 $\mathscr{P}(\mathbb{N})$으로의 전단사는 존재하지 않는다는 뜻이다. 이로써 3과 1이 증명된다. 1은 [[equal-cardinality]]의 정의에 의해 $|\mathbb{N}| \ne |\mathscr{P}(\mathbb{N})|$과 같다.

$\mathscr{P}(\mathbb{N})$이 가산 무한이라는 것은 [[countably-infinite-set]]의 정의에 의해 $|\mathbb{N}| = |\mathscr{P}(\mathbb{N})|$, 곧 $\mathbb{N}$에서 $\mathscr{P}(\mathbb{N})$으로의 전단사가 존재한다는 것이다. 1에 의해 그런 전단사는 없으므로 $\mathscr{P}(\mathbb{N})$은 가산 무한이 아니다. 이로써 2가 증명된다.
:::

## 예시와 반례

:::example[번호 매김 하나에서 빠진 부분집합 만들기]
$f(n) = \{m \in \mathbb{N} : m \le n\}$으로 정한 $f : \mathbb{N} \to \mathscr{P}(\mathbb{N})$을 봅시다. 곧 $f(1) = \{1\}$, $f(2) = \{1, 2\}$, $f(3) = \{1, 2, 3\}$, … 입니다. 모든 $n$에 대하여 $n \le n$이므로 $n \in f(n)$이고, [[cantors-theorem]]의 집합 $B = \{x \in \mathbb{N} : x \notin f(x)\}$는 원소가 없어 $B = \emptyset$입니다. 모든 $n$에 대하여 $1 \le n$이므로 $1 \in f(n)$이어서 $f(n) \ne \emptyset$이고, $\emptyset$은 $f$의 값이 아닙니다.

다른 번호 매김으로 $h(n) = \{m \in \mathbb{N} : m \ge n + 1\}$이라 하면 $n \ge n + 1$이 아니므로 $n \notin h(n)$이고 $B = \mathbb{N}$입니다. 모든 $n$에 대하여 $n \in \mathbb{N}$이고 $n \notin h(n)$이므로 $h(n) \ne \mathbb{N}$이고, $\mathbb{N}$은 $h$의 값이 아닙니다. 두 경우 모두 $f$나 $h$가 전사가 아닙니다.
:::

:::counterexample[단사가 있다고 가산 무한이 아닌 것은 아니다]
$g(n) = \{n\}$으로 정한 $g : \mathbb{N} \to \mathscr{P}(\mathbb{N})$은 단사입니다. 그러나 단사가 있다는 것만으로는 $\mathscr{P}(\mathbb{N})$이 가산 무한이 아니라고 할 수 없습니다. $\mathbb{N}$에서 $\mathbb{Z}$로의 $j(n) = n$도 단사이지만 [[n-and-z-have-equal-cardinality|앞의 정리]]에 의해 $\mathbb{Z}$는 $\mathbb{N}$과 전단사가 있어 가산 무한입니다. $\mathscr{P}(\mathbb{N})$이 가산 무한이 아닌 이유는 단사가 아니라 전단사가 하나도 없다는 것입니다.
:::

:::counterexample["가산 무한이 아니다"를 곧바로 "비가산이다"로 쓰면]
정의에 의하면 비가산은 무한집합이면서 $\mathbb{N}$에서 오는 전단사가 없는 집합입니다. 이 항목이 증명한 것은 두 번째 조건뿐입니다. 예컨대 $\{1, 2\}$도 $\mathbb{N}$에서 오는 전단사가 없지만 유한집합이므로 비가산이 아닙니다. 가산 무한이 아니라는 사실에서 곧바로 비가산이 나오지는 않습니다.
:::

## 확인 질문

:::check[$f(n) = \{n\}$으로 정한 $f : \mathbb{N} \to \mathscr{P}(\mathbb{N})$에 대해 증명의 집합 $B = \{x \in \mathbb{N} : x \notin f(x)\}$를 구하고, $B$가 $f$의 값이 아님을 확인하라.]
모든 $x \in \mathbb{N}$에 대하여 $x \in \{x\} = f(x)$이므로 $x \notin f(x)$인 $x$는 없고 $B = \emptyset$입니다. 모든 $n$에 대하여 $f(n) = \{n\}$은 원소 $n$을 가지므로 $\emptyset$이 아닙니다. 따라서 $B$는 $f$의 값이 아닙니다.
:::

:::check[$\mathscr{P}(\mathbb{N})$을 [[countably-infinite-set]]의 정의에서 말하는 "비가산"이라고 쓰려면 이 항목의 증명 말고 무엇이 더 필요한가?]
비가산의 정의는 무한집합이면서 $\mathbb{N}$에서 오는 전단사가 없는 것입니다. 이 항목은 전단사가 없음만 증명했으므로 $\mathscr{P}(\mathbb{N})$이 무한집합, 곧 유한집합이 아니라는 사실이 더 필요합니다. 이 항목은 그 사실을 증명하지 않습니다.
:::
