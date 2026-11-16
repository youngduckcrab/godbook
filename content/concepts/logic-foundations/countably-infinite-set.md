---
title: 가산 무한 집합
title_en: Countably Infinite Set
aliases: [가산 집합, 비가산 집합, 셀 수 있는 무한 집합, 알레프 영, countable, uncountable, countably infinite, aleph null]
kind: definition
field: logic-foundations
msc: ["03E10"]
level: intro
summary: 자연수의 집합에서 A로의 전단사가 존재하는 집합 A를 가산 무한이라 하고, 유한이거나 가산 무한이면 가산, 무한이면서 가산 무한이 아니면 비가산이라 한다.
requires: [set, function, injective-surjective-bijective, equal-cardinality, n-and-z-have-equal-cardinality, even-and-odd, subset, prime-number]
sources:
  - ref: hammack-book-of-proof
    loc: 14.2절 Countable and Uncountable Sets, Definition 14.2와 14.3, p.275 (예 Example 14.5도 p.275, 원소를 목록으로 늘어놓는 설명과 Theorem 14.3은 p.276). 유한집합과 무한집합의 뜻은 1.1절, p.3
    checked: original
    note: "출처 Definition 14.2는 |ℕ| = |A|, 곧 ℕ에서 A로의 전단사가 존재할 때 A를 countably infinite라 하고, A가 유한이거나 countably infinite이면 countable, A가 무한이고 |ℕ| ≠ |A|이면 uncountable이라 정의한다. Definition 14.3은 |ℕ| = ℵ₀라 쓰고 '따라서 가산 무한 집합의 크기는 ℵ₀'라고 말한다. 아래 진술은 이 정의들과 같은 내용을 다시 서술했고, 유한집합·무한집합의 뜻을 밝히는 구절을 덧붙였다. 출처는 p.275에서 ℵ₀를 'the cardinality of the natural numbers'로 정의하고 'any countably infinite set has cardinality ℵ₀'라고 대상처럼 말한다. 이 사이트는 이를 줄임 표기로만 쓴다. '|A| = ℵ₀'는 'A가 가산 무한이다', 곧 '|ℕ| = |A|'를 줄여 쓴 표기이고 정확히 A가 가산 무한일 때 쓰며, ℵ₀라는 대상을 정하지 않고 이 표기에서 |A| = |ℕ|을 끌어내지도 않는다. 출처는 ℵ₀를 'aleph naught'로 읽는다(p.275). 출처는 1.1절(p.3)에서 무한집합을 '원소가 무한히 많은 집합', 그렇지 않으면 유한집합이라 부르며 '무한히 많다'를 따로 정의하지 않는다. 유한집합의 엄밀한 정의는 이 강의 9단원의 finite-set 항목에서 주어지며, 그 전까지는 set 항목의 '원소가 유한 개인 집합'으로 읽는다(처음 이 항목을 쓸 때는 후자의 뜻이었다). 무한집합은 유한집합이 아닌 집합이다. 유한·무한이라는 말은 {1, 2}가 유한집합이라는 사실에만 쓰고, 가산 무한임을 보이는 논증에는 쓰지 않는다. 이 항목은 가산 무한 집합이 무한집합이라는 사실을 증명하지 않는다. 직관의 '목록으로 늘어놓을 수 있다'는 설명은 출처 p.276의 설명과 Theorem 14.3(가산 무한인 것과 원소를 a₁, a₂, a₃, …로 늘어놓을 수 있는 것은 동치)을 소개한 것이며 이 항목은 이를 증명하지 않는다. 출처가 'ℤ는 가산 무한이고 ℝ은 비가산'이라 말한 것(p.275)은 아래 예시에서 ℤ는 앞 항목으로 확인하고 ℝ은 증명 없이 출처의 말로만 언급한다. 예시와 반례, 확인 질문은 이 사이트에서 새로 만들었고, 짝수인 자연수의 집합 예는 출처 Example 14.5(ℤ에서 짝수인 정수의 집합으로 f(n) = 2n)와 같은 발상이나 집합과 증명이 다르다. 이 항목의 정수·부등식 사실은 prime-number 항목의 진술에서 받아들인 (Z1), (Z3)을 인용하고, 그 밖에 등식·부등식의 양변에 같은 수를 더하거나 빼거나 0이 아닌 수로 나눌 수 있다는 것을 증명 없이 쓴다."
status: reviewed
review_note: "2026-11-16 독립 검토 4회. 수학적 오류 없음. 증명 가능한 범위로 진술을 좁히고 받아들이는 사실을 명시, 역사 인용과 출처 기록 정정."
added: 2026-11-16
updated: 2026-11-16
---

:::statement
$A$가 [[set]]일 때 다음과 같이 정의한다. [[equal-cardinality]]에서처럼 $|\mathbb{N}| = |A|$는 $\mathbb{N}$에서 $A$로의 전단사가 존재한다는 뜻이다.

- $A$가 **가산 무한**(countably infinite)이라는 것은 $|\mathbb{N}| = |A|$, 곧 $\mathbb{N}$에서 $A$로의 [[injective-surjective-bijective|전단사]] $f : \mathbb{N} \to A$가 존재한다는 것이다.
- $A$가 **가산**(countable)이라는 것은 $A$가 유한집합이거나 가산 무한이라는 것이다. 유한집합의 엄밀한 정의는 이 강의 9단원의 "유한집합과 원소의 개수" 항목에서 한다. 그 전까지는 [[set]]에서 말한 원소가 유한 개인 집합으로 읽는다.
- $A$가 **비가산**(uncountable)이라는 것은 $A$가 무한집합(유한집합이 아닌 집합)이고 $|\mathbb{N}| \ne |A|$, 곧 $\mathbb{N}$에서 $A$로의 전단사가 하나도 없다는 것이다.
- "$|A| = \aleph_0$"($\aleph_0$는 aleph naught로 읽는다)는 "$A$가 가산 무한이다", 곧 "$|\mathbb{N}| = |A|$"를 줄여 쓴 표기이다. 정확히 $A$가 가산 무한일 때 $|A| = \aleph_0$라 쓴다. 이 표기는 $\aleph_0$라는 대상을 정하지 않으며, 이 표기에서 $|A| = |\mathbb{N}|$을 끌어내지 않는다. $A = \mathbb{N}$일 때 $|\mathbb{N}| = \aleph_0$는 $\mathbb{N}$이 가산 무한이라는 뜻이고, 이는 $\mathrm{id}(n) = n$이 $\mathbb{N}$에서 $\mathbb{N}$으로의 전단사이기 때문이다.
:::

:::english
Let $A$ be a set. As in the definition of equal cardinality, $|\mathbb{N}| = |A|$ means that there exists a bijection from $\mathbb{N}$ to $A$.

- $A$ is **countably infinite** if $|\mathbb{N}| = |A|$, that is, if there exists a bijection $f : \mathbb{N} \to A$.
- $A$ is **countable** if $A$ is finite or countably infinite. The rigorous definition of a finite set is given in the entry "Finite Sets and the Number of Elements" in unit 9 of this course. Until then, read it as a set with finitely many elements in the sense of the entry on sets.
- $A$ is **uncountable** if $A$ is infinite (not finite) and $|\mathbb{N}| \ne |A|$, that is, if there is no bijection from $\mathbb{N}$ to $A$.
- The expression "$|A| = \aleph_0$" (with $\aleph_0$ read as aleph naught) is an abbreviation for "$A$ is countably infinite", that is, for "$|\mathbb{N}| = |A|$". We write $|A| = \aleph_0$ exactly when $A$ is countably infinite. This notation does not introduce an object called $\aleph_0$, and we do not derive $|A| = |\mathbb{N}|$ from it. For $A = \mathbb{N}$, $|\mathbb{N}| = \aleph_0$ means that $\mathbb{N}$ is countably infinite, because $\mathrm{id}(n) = n$ is a bijection from $\mathbb{N}$ to $\mathbb{N}$.
:::

## 직관

가산 무한 집합은 "첫째, 둘째, 셋째, …로 빠짐없이 번호를 매길 수 있는 집합"입니다. $\mathbb{N}$에서 $A$로의 전단사 $f$가 있으면 $f(1)$을 첫째, $f(2)$를 둘째, $f(3)$을 셋째로 부를 수 있습니다. 전사이므로 $A$의 모든 원소가 어딘가에 나오고, 단사이므로 같은 원소가 두 번 나오지 않습니다. 출처는 거꾸로 원소를 이렇게 무한히 긴 목록으로 늘어놓을 수 있으면 가산 무한이라는 것까지 정리(Theorem 14.3)로 진술합니다. 이 항목은 그 정리를 증명하지 않으며, 위의 설명은 정의를 이해하기 위한 직관으로만 씁니다.

번호표를 나누어 주는 비유를 쓰면, $f : \mathbb{N} \to A$의 세 조건은 이렇게 읽힙니다. 번호마다 원소가 정확히 하나 불리고(함수), 서로 다른 번호는 서로 다른 원소를 부르고(단사), 불리지 않는 원소가 없습니다(전사). 비유가 맞지 않는 곳도 있습니다. 번호표는 순서를 뜻하는 듯하지만, 정의는 전단사의 존재만 요구하고 어떤 번호 매김이 "자연스러운" 순서인지는 말하지 않습니다.

비가산의 정의는 두 조건이 모두 필요합니다. 예를 들어 $\{1, 2\}$에는 아래 반례처럼 $\mathbb{N}$에서 오는 전단사가 없지만, 유한집합이므로 비가산이 아니라 가산입니다. 출처는 $\mathbb{Z}$가 가산 무한이고 $\mathbb{R}$이 비가산이라고 말합니다. $\mathbb{R}$에 대해서는 이 항목이 다루지 않습니다. $|A| = \aleph_0$라는 표기도 "$A$가 가산 무한이다"를 줄여 쓴 것일 뿐, $\aleph_0$가 어떤 수인지는 이 항목에서 묻지 않으며 $|A| = |\mathbb{N}|$(반대 방향의 전단사)도 이 표기에서 읽어 내지 않습니다. 이름에 "무한"이 들어 있지만 정의는 $\mathbb{N}$에서 오는 전단사의 존재만 요구합니다. 가산 무한 집합이 무한집합이라는 사실은 이 항목이 증명하지 않습니다.

## 예시와 반례

:::example[$\mathbb{N}$ 자신]
$\mathrm{id}(n) = n$으로 정한 $\mathrm{id} : \mathbb{N} \to \mathbb{N}$은 $\mathrm{id}(a) = \mathrm{id}(a')$이면 $a = a'$이므로 단사이고, 모든 $b \in \mathbb{N}$에 대하여 $\mathrm{id}(b) = b$이므로 전사입니다. 전단사가 있으므로 $\mathbb{N}$은 가산 무한이고 $|\mathbb{N}| = \aleph_0$입니다.
:::

:::example[$\mathbb{Z}$]
[[n-and-z-have-equal-cardinality|앞의 정리]]에서 $\mathbb{N}$에서 $\mathbb{Z}$로의 전단사를 보였으므로 $|\mathbb{N}| = |\mathbb{Z}|$이고 $\mathbb{Z}$는 가산 무한입니다. 목록으로는 $0, 1, -1, 2, -2, \dots$입니다.
:::

:::example[짝수인 자연수의 집합]
$E = \{n \in \mathbb{N} : n \text{은 짝수}\}$라 하고 $f(n) = 2n$으로 정한 $f : \mathbb{N} \to E$를 봅시다. $n \in \mathbb{N}$이면 $n \ge 1$이므로 [[prime-number|소수]] 항목의 진술에서 받아들인 성질 (Z3)에 의해 $2n \ge 2$이고, $2n$은 정수의 곱이라 정수이며 $2n = 2 \cdot n$이므로 짝수입니다. 따라서 $f(n) \in E$입니다.

단사: $f(a) = f(a')$이면 $2a = 2a'$이고 양변을 $2$로 나누어 $a = a'$입니다. 전사: $e \in E$이면 $e = 2k$인 정수 $k$가 있습니다. $k \le 0$이면 (Z3)에 의해 $e = 2k \le 0$인데 $e \ge 1$이라 모순이므로 $k > 0$이고, (Z1)에 의해 $k \ge 1$이어서 $k \in \mathbb{N}$이며 $f(k) = e$입니다. 따라서 $f$는 전단사이고 $|\mathbb{N}| = |E|$이므로 $E$는 가산 무한입니다. 목록은 $f(1), f(2), f(3), \dots = 2, 4, 6, \dots$입니다.
:::

:::counterexample[$\{1, 2\}$는 가산 무한이 아니다]
$A = \{1, 2\}$는 원소가 유한 개이므로 가산입니다. 그러나 가산 무한은 아닙니다. 이를 보이려면 $\mathbb{N}$에서 $A$로의 함수가 모두 전단사가 아님을 보여야 합니다. $f : \mathbb{N} \to A$가 함수라 합시다. $f(1) = f(2)$이면 $1 \ne 2$이므로 단사가 아닙니다. $f(1) \ne f(2)$이면 $(f(1), f(2))$는 $(1, 2)$ 또는 $(2, 1)$이므로 $\{f(1), f(2)\} = \{1, 2\}$이고, $f(3) \in A$이므로 $f(3)$은 $f(1)$ 또는 $f(2)$와 같습니다. $3 \ne 1$이고 $3 \ne 2$이므로 역시 단사가 아닙니다. 어느 경우에도 $f$는 전단사가 아니므로 $|\mathbb{N}| \ne |A|$이고 $A$는 가산 무한이 아닙니다. 위의 정의에서 $A$는 가산이지만 비가산은 아닙니다. 비가산이려면 무한집합이어야 하기 때문입니다.
:::

:::counterexample[전체와 같지 않은 부분집합이면 크기가 같을 수 없다는 착각]
$E = \{n \in \mathbb{N} : n \text{은 짝수}\}$는 $E \subseteq \mathbb{N}$이고 $1 \notin E$이므로($1 = 2 \cdot 0 + 1$은 홀수이고 짝수이면서 홀수인 정수는 없다) $E \ne \mathbb{N}$이지만 $|\mathbb{N}| = |E|$입니다. 또 $\mathbb{N} \subseteq \mathbb{Z}$이고 $0 \notin \mathbb{N}$이므로 $\mathbb{N} \ne \mathbb{Z}$이지만 $|\mathbb{N}| = |\mathbb{Z}|$입니다.
:::

## 확인 질문

:::check[$B = \{n \in \mathbb{N} : n \ge 3\}$이고 $g(n) = n + 2$로 정한 $g : \mathbb{N} \to B$가 전단사임을 확인하고 $B$가 가산 무한인지 판단하라.]
$g(n) = n + 2$는 $n \ge 1$이므로 $g(n) \ge 3$이고 정수이니 $g(n) \in B$입니다. 단사: $g(a) = g(a')$이면 $a + 2 = a' + 2$이고 양변에서 $2$를 빼면 $a = a'$입니다. 전사: $b \in B$이면 $b \ge 3$이므로 $n = b - 2$는 $n \ge 1$인 정수이고 $n \in \mathbb{N}$이며 $g(n) = b$입니다. 따라서 $g$는 전단사이고 $|\mathbb{N}| = |B|$이므로 $B$는 가산 무한입니다.
:::

:::check[$C = \{-n : n \in \mathbb{N}\}$(자연수에 음의 부호를 붙인 수의 집합)이고 $g(n) = -n$으로 정한 $g : \mathbb{N} \to C$는 전단사인가? $C$는 가산 무한인가?]
$g(n) = -n$은 $C$의 정의에 의해 $C$의 원소입니다. 단사: $g(a) = g(a')$이면 $-a = -a'$이고 $-(-a) = a$이므로 $a = a'$입니다. 전사: $c \in C$이면 $c = -m$인 $m \in \mathbb{N}$이 있고 $g(m) = c$입니다. 따라서 전단사이고 $|\mathbb{N}| = |C|$이므로 $C$는 가산 무한입니다.
:::
