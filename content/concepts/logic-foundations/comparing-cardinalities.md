---
title: 크기의 비교
title_en: Comparing Cardinalities
aliases: [크기 비교, 기수의 대소, comparing cardinalities]
kind: definition
field: logic-foundations
msc: ["03E10"]
level: intro
summary: A에서 B로의 단사가 존재하면 |A| ≤ |B|이고, 단사는 존재하지만 전단사가 없으면 |A| < |B|라고 쓴다. 무한집합에서는 이것이 수의 대소가 아니라 이 정의로 뜻이 정해진 표기이다.
requires: [set, function, injective-surjective-bijective, equal-cardinality, n-and-z-have-equal-cardinality, equal-cardinality-is-an-equivalence, even-and-odd]
sources:
  - ref: hammack-book-of-proof
    loc: 14.3절 Comparing Cardinalities, Definition 14.4, p.281 (절의 도입과 유한집합에 대한 설명은 p.280, 정의 직후의 ℕ과 ℝ의 예는 p.281)
    checked: original
    note: "출처 Definition 14.4는 '|A| = |B|는 A에서 B로의 전단사가 있다는 뜻, |A| < |B|는 A에서 B로의 단사는 있지만 A에서 B로의 전단사는 없다는 뜻, |A| ≤ |B|는 A에서 B로의 단사가 있다는 뜻'이라 정의한다. 아래 진술의 내용은 같고, '|A| < |B|'를 '|A| ≤ |B|이고 |A| ≠ |B|'로 풀어 쓴 것은 equal-cardinality 항목의 |A| ≠ |B|의 뜻을 이은 것이다. 출처는 도입(p.280)에서 유한집합에 대해서는 |A| < |B|가 '|A|가 |B|보다 원소가 적다'는 뜻이고 이것이 단사는 있으나 전단사는 없는 것과 직관적으로 같다고 말한다. 이 항목은 이 말을 증명하지 않고, 직관에서 출처가 그렇게 말한다고만 소개한다. 출처는 이 정의 직후 'f(n) = n은 ℕ에서 ℝ로의 단사이지만 전사가 아니다'라는 예를 들고 Theorem 14.2에서 |ℕ| < |ℝ|를 얻는다. 아래 예시와 반례, 확인 질문은 이 사이트에서 새로 만들었다. 출처는 |A| ≤ |B|와 |B| ≤ |A|이면 |A| = |B|(칸토어-베른슈타인-슈뢰더, 14.4절)를 증명하지만 이 항목은 그것을 다루지 않고 쓰지도 않는다."
status: source-checked
added: 2026-11-16
---

:::statement
$A$와 $B$가 [[set|집합]]일 때 다음과 같이 정의한다. 단사와 전단사는 [[injective-surjective-bijective|단사와 전단사]]의 뜻이고, 공역은 $f : A \to B$라고 쓸 때 밝힌 $B$이다.

- $|A| \le |B|$는 $A$에서 $B$로의 **단사** $f : A \to B$가 존재한다는 뜻의 표기이다.
- $|A| < |B|$는 $A$에서 $B$로의 단사가 존재하지만 $A$에서 $B$로의 전단사는 존재하지 않는다는 뜻의 표기이다. 곧 $|A| \le |B|$이고 $|A| \ne |B|$([[equal-cardinality|크기가 같다는 정의]])라는 뜻이다.

두 표기는 "$|A| \le |B|$", "$|A| < |B|$"라는 표기 전체에 뜻을 주는 정의이다. 집합이 무한일 때 $|A|$와 $|B|$는 어떤 수도 아니며, $\le$와 $<$는 수의 대소 비교가 아니다. 이 정의는 $A$에서 $B$로 가는 함수의 존재에 관한 것이다.
:::

:::english
Let $A$ and $B$ be sets. Injective and bijective are as defined for functions, and the codomain is the set $B$ named in the notation $f : A \to B$.

- The expression $|A| \le |B|$ means that there exists an **injection** $f : A \to B$ from $A$ to $B$.
- The expression $|A| < |B|$ means that there exists an injection from $A$ to $B$ but no bijection from $A$ to $B$. That is, $|A| \le |B|$ and $|A| \ne |B|$ (as defined for equal cardinality).

Each of these is a definition of the whole expression "$|A| \le |B|$" or "$|A| < |B|$". When the sets are infinite, $|A|$ and $|B|$ are not numbers, and $\le$ and $<$ are not comparisons of numbers. The definition concerns the existence of functions from $A$ to $B$.
:::

## 직관

유한집합에서는 "$A$의 원소가 $B$의 원소보다 적다"가 크기의 비교입니다. 출처는 유한집합의 경우 이것이 "$A$에서 $B$로의 단사는 있지만 전단사는 없다"와 직관적으로 같다고 설명합니다. 손님과 의자의 비유로는, 손님 모두를 서로 다른 의자에 앉힐 수 있고(단사) 그러고도 빈 의자가 남는다(전단사는 아님)는 것입니다. 이 항목은 유한집합에 대한 이 동치를 증명하지 않으며, 이 설명은 정의의 동기일 뿐입니다.

이 정의는 원소를 세지 않고도 쓸 수 있고, 무한집합에도 같은 문장을 씁니다. 그래서 "$|A| < |B|$"는 "$A$에서 $B$로의 단사는 있지만 전단사는 없다"를 줄여 쓴 것이고, 이것이 $A$와 $B$의 "개수"라는 수를 비교한 것은 아닙니다. 또 "단사는 있다"와 "전단사는 없다"가 모두 필요합니다. 전단사가 있으면 단사도 있으므로 $|A| = |B|$일 때는 $|A| \le |B|$가 성립하지만, 그때는 $|A| < |B|$가 아닙니다.

이 정의는 정의의 방향이 $A$에서 $B$로 고정되어 있습니다. 예컨대 $|A| \le |B|$이면서 $|B| \le |A|$일 때 $|A| = |B|$인지는 이 항목이 다루지 않는 별개의 문제입니다. 비유가 놓치는 곳은 유한집합에서는 개수라는 수가 있어서 "더 작다"가 분명하지만, 무한집합에서는 이 정의가 "더 작다"의 유일한 뜻이라는 점입니다.

## 예시와 반례

:::example[$|A| \le |B|$이지만 $|A| < |B|$는 아닌 경우]
$A = \{1, 2\}$, $B = \{\text{가}, \text{나}\}$이고 $f = \{(1, \text{가}), (2, \text{나})\}$라 합시다. $f(1) \ne f(2)$이므로 $f : A \to B$는 단사이고 $|A| \le |B|$입니다. 그러나 $f$는 전사이기도 하므로 전단사이고 $|A| = |B|$입니다. 따라서 $|A| < |B|$는 성립하지 않습니다.
:::

:::example[$|A| < |B|$인 경우]
$A = \{1\}$, $B = \{\text{가}, \text{나}\}$라 합시다. $A$에서 $B$로의 함수는 $f(1)$을 가 또는 나로 고르는 것이므로 $\{(1, \text{가})\}$와 $\{(1, \text{나})\}$ 둘뿐입니다. 정의역에 원소가 하나뿐이어서 $a \ne a'$인 쌍이 없으므로 둘 다 단사이고 $|A| \le |B|$입니다. 그런데 $\{(1, \text{가})\}$에서는 나가, $\{(1, \text{나})\}$에서는 가가 값이 아니므로 둘 다 전사가 아닙니다. 전단사가 하나도 없으므로 정의에 따라 $|A| < |B|$입니다.
:::

:::example[무한집합에서 $|A| \le |B|$]
$g(n) = n$으로 정한 $g : \mathbb{N} \to \mathbb{Z}$는 $g(a) = g(a')$이면 $a = a'$이므로 단사이고 $|\mathbb{N}| \le |\mathbb{Z}|$입니다. $g$ 자체는 $0$을 놓치지만, [[n-and-z-have-equal-cardinality|앞의 정리]]에 의해 $\mathbb{N}$에서 $\mathbb{Z}$로의 전단사가 있으므로 $|\mathbb{N}| < |\mathbb{Z}|$는 성립하지 않습니다.
:::

:::counterexample[단사 하나가 있고 전사가 아니라고 $|A| < |B|$는 아니다]
$|A| < |B|$를 보이려면 $A$에서 $B$로의 전단사가 하나도 없음을 보여야 합니다. 위의 $g : \mathbb{N} \to \mathbb{Z}$는 단사이고 전사가 아니지만 $|\mathbb{N}| < |\mathbb{Z}|$가 아닙니다. 단사이면서 전사가 아닌 함수 하나를 찾았다고 해서 정의의 둘째 조건("전단사는 존재하지 않는다")이 확인된 것이 아닙니다.
:::

:::counterexample[$|A| < |B|$는 수의 부등식이 아니다]
$A$가 $B$의 일부분이고 $A \ne B$이면 $|A| < |B|$라고 읽어서는 안 됩니다. 이 정의에는 원소의 개수가 나오지 않습니다. 예를 들어 짝수인 자연수의 집합 $E$는 $\mathbb{N}$의 일부분이고 $E \ne \mathbb{N}$이므로($1 \notin E$) $\mathbb{N}$에 원소가 더 많아 보입니다. 그러나 $f(n) = 2n$으로 정한 $f : \mathbb{N} \to E$는 단사이고($2a = 2a'$이면 $a = a'$) 전사이므로($e \in E$이면 $e = 2k$인 정수 $k$가 있고, $e \ge 1$에서 $k \ge 1$이므로 $k \in \mathbb{N}$이고 $f(k) = e$) $|\mathbb{N}| = |E|$이며 [[equal-cardinality-is-an-equivalence|대칭]]에 의해 $|E| = |\mathbb{N}|$, 곧 $E$에서 $\mathbb{N}$으로의 전단사가 있습니다. 따라서 $|E| < |\mathbb{N}|$은 성립하지 않습니다. 단사 $E \to \mathbb{N}$, 곧 $|E| \le |\mathbb{N}|$은 성립하지만 둘째 조건이 깨집니다.
:::

## 확인 질문

:::check[$A = \{1, 2, 3\}$, $B = \{\text{가}, \text{나}\}$이고 $h = \{(1, \text{가}), (2, \text{나}), (3, \text{가})\}$는 함수이다. $h$로부터 $|A| \le |B|$를 얻는가?]
얻지 못합니다. $|A| \le |B|$는 $A$에서 $B$로의 단사가 존재한다는 뜻인데 $h(1) = h(3) = \text{가}$이고 $1 \ne 3$이므로 $h$는 단사가 아닙니다. $h$ 하나가 단사가 아니라는 것만으로는 단사가 없다고 할 수 없으므로 $|A| \le |B|$가 거짓이라고도 아직 말할 수 없습니다.
:::

:::check[$A = \{1, 2, 3\}$, $B = \{\text{가}, \text{나}, \text{다}\}$이고 $f = \{(1, \text{나}), (2, \text{다}), (3, \text{가})\}$일 때 $|A| \le |B|$인가? $|A| < |B|$인가?]
$f(1), f(2), f(3)$이 서로 다르므로 $f$는 단사이고 $|A| \le |B|$입니다. 가, 나, 다가 모두 값이므로 $f$는 전사이기도 하여 전단사입니다. 전단사가 존재하므로 $|A| < |B|$의 둘째 조건("전단사가 없다")이 깨져서 $|A| < |B|$는 아닙니다.
:::
