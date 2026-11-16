---
title: 가산 무한 집합
title_en: Countably Infinite Set
aliases: [가산 집합, 비가산 집합, 셀 수 있는 무한 집합, 알레프 영, countable, uncountable, countably infinite, aleph null]
kind: definition
field: logic-foundations
msc: ["03E10"]
level: intro
summary: "$\\mathbb{N}$에서 $A$로의 전단사가 존재하는 집합 $A$를 가산 무한이라 하고, 유한이거나 가산 무한이면 가산, 무한이면서 가산 무한이 아니면 비가산이라 한다."
requires: [set, function, injective-surjective-bijective, equal-cardinality, n-and-z-have-equal-cardinality, even-and-odd]
sources:
  - ref: hammack-book-of-proof
    loc: 14.2절 Countable and Uncountable Sets, Definition 14.2와 14.3, p.275 (예 Example 14.5도 p.275, 원소를 목록으로 늘어놓는 설명과 Theorem 14.3은 p.276). 유한집합과 무한집합의 뜻은 1.1절, p.3
    checked: original
    note: "출처 Definition 14.2는 |ℕ| = |A|, 곧 ℕ에서 A로의 전단사가 존재할 때 A를 countably infinite라 하고, A가 유한이거나 countably infinite이면 countable, A가 무한이고 |ℕ| ≠ |A|이면 uncountable이라 정의한다. Definition 14.3은 |ℕ| = ℵ₀라 쓰고 '따라서 가산 무한 집합의 크기는 ℵ₀'라고 말한다. 아래 진술은 이 정의들을 그대로 옮겼고, 'A가 가산 무한이면 |A| = ℵ₀라 쓴다'는 문장은 출처의 'any countably infinite set has cardinality ℵ₀'를 이 사이트의 표기 약속으로 적은 것이다. ℵ₀ 자체가 어떤 대상인지는 이 항목이 다루지 않는다. 출처는 1.1절(p.3)에서 무한집합을 '원소가 무한히 많은 집합', 그렇지 않으면 유한집합이라 부르며 '무한히 많다'를 따로 정의하지 않는다. 이 사이트의 유한집합은 set 항목의 '원소가 유한 개인 집합'이고 무한집합은 유한집합이 아닌 집합이다. 이 항목의 어떤 증명도 유한·무한이라는 말을 근거로 쓰지 않는다. 직관의 '목록으로 늘어놓을 수 있다'는 설명은 출처 p.276의 설명과 Theorem 14.3(가산 무한인 것과 원소를 a₁, a₂, a₃, …로 늘어놓을 수 있는 것은 동치)을 소개한 것이며 이 항목은 이를 증명하지 않는다. 출처가 'ℤ는 가산 무한이고 ℝ은 비가산'이라 말한 것(p.275)은 아래 예시에서 ℤ는 앞 항목으로 확인하고 ℝ은 증명 없이 출처의 말로만 언급한다. 예시와 반례, 확인 질문은 이 사이트에서 새로 만들었고, 짝수인 자연수의 집합 예는 출처 Example 14.5(ℤ에서 짝수인 정수의 집합으로 f(n) = 2n)와 같은 발상이나 집합과 증명이 다르다."
status: source-checked
added: 2026-11-16
---

:::statement
$A$가 [[set]]일 때 다음과 같이 정의한다. [[equal-cardinality]]에서처럼 $|\mathbb{N}| = |A|$는 $\mathbb{N}$에서 $A$로의 전단사가 존재한다는 뜻이다.

- $A$가 **가산 무한**(countably infinite)이라는 것은 $|\mathbb{N}| = |A|$, 곧 $\mathbb{N}$에서 $A$로의 [[injective-surjective-bijective|전단사]] $f : \mathbb{N} \to A$가 존재한다는 것이다.
- $A$가 **가산**(countable)이라는 것은 $A$가 유한집합이거나 가산 무한이라는 것이다. 여기서 유한집합은 [[set]]에서 말한 원소가 유한 개인 집합이다.
- $A$가 **비가산**(uncountable)이라는 것은 $A$가 무한집합(유한집합이 아닌 집합)이고 $|\mathbb{N}| \ne |A|$, 곧 $\mathbb{N}$에서 $A$로의 전단사가 하나도 없다는 것이다.
- $\mathbb{N}$의 크기를 $\aleph_0$("알레프 영", aleph null)로 쓰고 $|\mathbb{N}| = \aleph_0$라 한다. $A$가 가산 무한이면 $|A| = \aleph_0$라 쓴다.
:::

:::english
Let $A$ be a set. As in the definition of equal cardinality, $|\mathbb{N}| = |A|$ means that there exists a bijection from $\mathbb{N}$ to $A$.

- $A$ is **countably infinite** if $|\mathbb{N}| = |A|$, that is, if there exists a bijection $f : \mathbb{N} \to A$.
- $A$ is **countable** if $A$ is finite or countably infinite. Here a finite set is a set with finitely many elements.
- $A$ is **uncountable** if $A$ is infinite (not finite) and $|\mathbb{N}| \ne |A|$, that is, if there is no bijection from $\mathbb{N}$ to $A$.
- The cardinality of $\mathbb{N}$ is written $\aleph_0$ ("aleph null"), so $|\mathbb{N}| = \aleph_0$. If $A$ is countably infinite, we write $|A| = \aleph_0$.
:::

## 직관

가산 무한 집합은 "첫째, 둘째, 셋째, …로 빠짐없이 번호를 매길 수 있는 집합"입니다. $\mathbb{N}$에서 $A$로의 전단사 $f$가 있으면 $f(1)$을 첫째, $f(2)$를 둘째, $f(3)$을 셋째로 부를 수 있습니다. 전사이므로 $A$의 모든 원소가 어딘가에 나오고, 단사이므로 같은 원소가 두 번 나오지 않습니다. 출처는 거꾸로 원소를 이렇게 무한히 긴 목록으로 늘어놓을 수 있으면 가산 무한이라는 것까지 정리(Theorem 14.3)로 진술합니다. 이 항목은 그 정리를 증명하지 않으며, 위의 설명은 정의를 이해하기 위한 직관으로만 씁니다.

번호표를 나누어 주는 비유를 쓰면, $A$의 원소마다 자연수 번호가 하나씩 붙고 번호가 겹치지 않고 모든 번호가 쓰입니다. 비유가 맞지 않는 곳도 있습니다. 번호표는 순서를 뜻하는 듯하지만, 정의는 전단사의 존재만 요구하고 어떤 번호 매김이 "자연스러운" 순서인지는 말하지 않습니다.

비가산의 정의는 두 조건이 모두 필요합니다. 예를 들어 $\{1, 2\}$에는 아래 반례처럼 $\mathbb{N}$에서 오는 전단사가 없지만, 유한집합이므로 비가산이 아니라 가산입니다. 출처는 $\mathbb{Z}$가 가산 무한이고 $\mathbb{R}$이 비가산이라고 말합니다. $\mathbb{R}$에 대해서는 이 항목이 다루지 않습니다. $|A| = \aleph_0$라는 표기도 "$A$가 가산 무한이다"를 가리키는 데 쓸 뿐, $\aleph_0$가 어떤 수인지는 이 항목에서 묻지 않습니다.

## 예시와 반례

:::example[$\mathbb{N}$ 자신]
$\mathrm{id}(n) = n$으로 정한 $\mathrm{id} : \mathbb{N} \to \mathbb{N}$은 $\mathrm{id}(a) = \mathrm{id}(a')$이면 $a = a'$이므로 단사이고, 모든 $b \in \mathbb{N}$에 대하여 $\mathrm{id}(b) = b$이므로 전사입니다. 전단사가 있으므로 $\mathbb{N}$은 가산 무한이고 $|\mathbb{N}| = \aleph_0$입니다.
:::

:::example[$\mathbb{Z}$]
[[n-and-z-have-equal-cardinality]]에서 $\mathbb{N}$에서 $\mathbb{Z}$로의 전단사를 보였으므로 $|\mathbb{N}| = |\mathbb{Z}|$이고 $\mathbb{Z}$는 가산 무한입니다. 목록으로는 $0, 1, -1, 2, -2, \dots$입니다.
:::

:::example[짝수인 자연수의 집합]
$E = \{n \in \mathbb{N} : n \text{은 짝수}\}$라 하고 $f(n) = 2n$으로 정한 $f : \mathbb{N} \to E$를 봅시다. [[equal-cardinality]]의 예에서 이 $f$가 단사이고 전사임을 보였습니다. 따라서 $|\mathbb{N}| = |E|$이고 $E$는 가산 무한입니다. 목록은 $f(1), f(2), f(3), \dots = 2, 4, 6, \dots$입니다.
:::

:::counterexample[$\{1, 2\}$는 가산 무한이 아니다]
$A = \{1, 2\}$는 원소가 유한 개이므로 가산입니다. 그러나 가산 무한은 아닙니다. 이를 보이려면 $\mathbb{N}$에서 $A$로의 함수가 모두 전단사가 아님을 보여야 합니다. $f : \mathbb{N} \to A$가 함수라 합시다. $f(1) = f(2)$이면 $1 \ne 2$이므로 단사가 아닙니다. $f(1) \ne f(2)$이면 $(f(1), f(2))$는 $(1, 2)$ 또는 $(2, 1)$이므로 $\{f(1), f(2)\} = \{1, 2\}$이고, $f(3) \in A$이므로 $f(3)$은 $f(1)$ 또는 $f(2)$와 같습니다. $3 \ne 1$이고 $3 \ne 2$이므로 역시 단사가 아닙니다. 어느 경우에도 $f$는 전단사가 아니므로 $|\mathbb{N}| \ne |A|$이고 $A$는 가산 무한이 아닙니다. 위의 정의에서 $A$는 가산이지만 비가산은 아닙니다. 비가산이려면 무한집합이어야 하기 때문입니다.
:::

:::counterexample[부분집합이면 크기가 더 작다는 착각]
$E \subseteq \mathbb{N}$이지만 $E$와 $\mathbb{N}$은 같은 크기($\aleph_0$)입니다. 부분집합이라고 해서 크기가 더 작다고 말할 수 없습니다. 반대로 $\mathbb{N} \subseteq \mathbb{Z}$이지만 위에서 보았듯이 $|\mathbb{N}| = |\mathbb{Z}|$입니다.
:::

## 확인 질문

:::check[$B = \{n \in \mathbb{N} : n \ge 3\}$이고 $g(n) = n + 2$로 정한 $g : \mathbb{N} \to B$가 전단사임을 확인하고 $B$가 가산 무한인지 판단하라.]
$g(n) = n + 2$는 $n \ge 1$이므로 $g(n) \ge 3$이고 정수이니 $g(n) \in B$입니다. 단사: $g(a) = g(a')$이면 $a + 2 = a' + 2$이고 양변에서 $2$를 빼면 $a = a'$입니다. 전사: $b \in B$이면 $b \ge 3$이므로 $n = b - 2$는 $n \ge 1$인 정수이고 $n \in \mathbb{N}$이며 $g(n) = b$입니다. 따라서 $g$는 전단사이고 $|\mathbb{N}| = |B|$이므로 $B$는 가산 무한입니다.
:::

:::check[$\{1, 2\}$는 가산인가? 가산 무한인가?]
원소가 유한 개이므로 가산입니다. 위의 반례에서 보았듯이 $\mathbb{N}$에서 $\{1, 2\}$로의 전단사가 없으므로 가산 무한은 아닙니다.
:::
