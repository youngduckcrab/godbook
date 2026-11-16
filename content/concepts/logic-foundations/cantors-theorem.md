---
title: 칸토어 정리
title_en: Cantor's Theorem
aliases: [Cantor's theorem, 멱집합은 더 크다, 대각선 논법, 모든 집합은 멱집합보다 작다]
kind: theorem
field: logic-foundations
msc: ["03E10"]
level: intro
summary: 모든 집합 A에 대해 A에서 멱집합 𝒫(A)로의 단사는 존재하지만 전단사는 존재하지 않으므로 |A| < |𝒫(A)|이다.
requires: [set, subset, function, injective-surjective-bijective, power-set, empty-set-is-subset, negation-of-quantified-statements, proof-by-contradiction, equal-cardinality, comparing-cardinalities]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 14.3절 Comparing Cardinalities, Theorem 14.7, pp.281–282 (정리와 증명의 앞부분은 p.281, 전사가 없음을 보이는 부분과 결론은 p.282)
    checked: original
    note: "출처 Theorem 14.7은 'A가 임의의 집합이면 |A| < |𝒫(A)|'라고 진술하고, 직접 증명으로 Definition 14.4가 요구하는 두 가지를 보인다. 단사는 f(x) = {x}로, 전단사가 없음은 임의의 f : A → 𝒫(A)에 대해 B = {x ∈ A : x ∉ f(x)}가 어떤 f(a)와도 같지 않음을 a ∈ f(a)인 경우와 a ∉ f(a)인 경우로 나누어 보인다. 아래 증명은 같은 집합 B를 쓰되, 이 사이트의 귀류법 틀로 '전사라고 가정하면 f(x₀) = B인 x₀가 있고 x₀ ∈ B와 x₀ ∉ B가 함께 나온다'로 다시 썼다. 출처는 정리 앞에서 'A가 유한이면 |A| < 2^|A| = |𝒫(A)|로 분명하다'고 말하는데 이 항목은 그것을 쓰지 않는다. 출처는 이 정리에 '칸토어 정리'라는 이름을 붙이지 않고 Theorem 14.7이라고만 부른다. '칸토어 정리'라는 이름은 아래 SEP에서 가져왔다. 출처의 정리가 A = ∅인 경우를 따로 말하지는 않으며, 아래 예시에서 이 사이트가 직접 확인했다. 예시, 반례, 확인 질문은 이 사이트에서 새로 만들었다."
  - ref: sep-settheory-early
    loc: "2절(Consolidation), 칸토어의 1895년과 1897년 논문을 다루는 단락의 끝부분(칸토어 정리와 1892년의 짧은 논문을 언급하는 문장들)"
    checked: original
    note: 역사와 맥락 절의 근거. 이 항목의 증명은 이 출처의 것이 아니다.
status: source-checked
added: 2026-11-16
---

:::statement
$A$가 임의의 [[set|집합]]이면 $|A| < |\mathscr{P}(A)|$이다([[comparing-cardinalities]]). 곧 다음 두 가지가 모두 성립한다.

1. $A$에서 [[power-set|멱집합]] $\mathscr{P}(A)$로의 단사가 존재한다.
2. $A$에서 $\mathscr{P}(A)$로의 전단사는 존재하지 않는다. 더 강하게, $A$에서 $\mathscr{P}(A)$로의 함수는 모두 전사가 아니다. 여기서 $\mathscr{P}(A)$는 $f : A \to \mathscr{P}(A)$라고 쓸 때 밝힌 공역이다.
:::

:::english
For every set $A$, $|A| < |\mathscr{P}(A)|$ (in the sense of the comparison of cardinalities). That is, both of the following hold.

1. There exists an injection from $A$ to its power set $\mathscr{P}(A)$.
2. There is no bijection from $A$ to $\mathscr{P}(A)$. More strongly, every function from $A$ to $\mathscr{P}(A)$ fails to be surjective, where $\mathscr{P}(A)$ is the codomain named in the notation $f : A \to \mathscr{P}(A)$.
:::

## 직관

$A$의 각 원소에 $A$의 부분집합을 하나씩 짝지어 준 명단 $f$를 생각합시다. 명단에는 원소 $x$마다 "$x$가 자기 짝 $f(x)$ 안에 들어 있는가, 아닌가"가 적혀 있습니다. 칸토어 정리의 핵심은 이 명단을 거꾸로 읽어서 만든 부분집합 $B$, 곧 자기 짝 안에 들어 있지 않은 원소들만 모은 집합이 명단의 어떤 짝과도 같을 수 없다는 것입니다. $B$가 $f(a)$와 같다면 $a$는 $B$에 들어가는지 아닌지 어느 쪽으로도 말이 안 됩니다. 이 "자기 자신에 대해 반대로 정한다"는 방법을 대각선 논법이라 부르는데, 이름은 $x$와 $f(x)$의 관계를 표의 대각선 칸에서 읽기 때문입니다.

정리는 어떤 집합 $A$에서도 그 부분집합 전체의 모임이 $A$보다 "크다"고 말합니다. 여기서 "크다"는 [[comparing-cardinalities]]의 정의, 곧 단사는 있지만 전단사는 없다는 뜻입니다. $A$가 무한집합이어도 같은 문장이 성립하며, 이 정리를 거듭 적용하면 크기가 계속 커지는 집합들 $A$, $\mathscr{P}(A)$, $\mathscr{P}(\mathscr{P}(A))$, … 을 얻는다는 것이 출처의 설명입니다. 이 항목은 그 거듭된 적용을 증명하지 않습니다.

비유는 이렇습니다. 학급 학생 각자가 "친구 모임"(학급의 부분집합)을 하나씩 말했다고 합시다. 자기가 말한 모임에 자기가 들어 있지 않은 학생만 모아 새 모임 $B$를 만들면, $B$는 어떤 학생이 말한 모임과도 같을 수 없습니다. 그 학생이 $B$에 들어 있는지를 따지면 모순이 되기 때문입니다. 비유는 학생이 유한하다고 느끼게 하지만 증명은 학급이 유한한지를 전혀 쓰지 않습니다.

## 증명

:::idea
단사는 $a$를 한 원소만 담은 집합 $\{a\}$로 보내면 된다. 전단사가 없음은, 어떤 $f$가 전사라고 가정하고 "자기 짝에 들어 있지 않은 원소들의 집합 $B$"의 원상 $x_0$가 $B$에 속하는 동시에 속하지 않음을 보여 모순을 얻는다.
:::

:::hint
$\{a\}$는 $A$의 부분집합이므로 $\mathscr{P}(A)$의 원소이다. 단사임은 $\{a\} = \{a'\}$에서 $a = a'$을 이끌어내면 된다.
:::

:::hint
$B = \{x \in A : x \notin f(x)\}$를 정의하라. $B \subseteq A$이므로 $B \in \mathscr{P}(A)$이다. $f$가 전사라고 가정하면 $f(x_0) = B$인 $x_0$가 있다. $x_0 \in B$인지 아닌지를 따져 보라.
:::

:::proof
**(1) 단사의 존재.** $a \in A$에 대하여 $\{a\}$는 $a$만 원소로 갖는 집합이고, $\{a\}$의 모든 원소 $a$는 $A$의 원소이므로 $\{a\} \subseteq A$, 곧 $\{a\} \in \mathscr{P}(A)$이다. $g = \{(a, \{a\}) : a \in A\}$로 두면, 각 $a \in A$에 대하여 $(a, X) \in g$인 $X$는 $X = \{a\}$ 하나뿐이므로 $g$는 $A$에서 $\mathscr{P}(A)$로의 함수이고 $g(a) = \{a\}$이다. $a, a' \in A$이고 $g(a) = g(a')$라 하자. 그러면 $\{a\} = \{a'\}$이다. $a \in \{a\}$이므로 $a \in \{a'\}$이고, $\{a'\}$의 유일한 원소는 $a'$이므로 $a = a'$이다. 따라서 $g$는 단사이다.

**(2) 전단사의 부재.** 임의의 함수 $f : A \to \mathscr{P}(A)$가 전사가 아님을 [[proof-by-contradiction|귀류법]]으로 보인다. 곧 $P$를 "$f : A \to \mathscr{P}(A)$는 전사가 아니다"로 두고 $\lnot P$, 곧 "$f : A \to \mathscr{P}(A)$는 전사이다"를 가정한다. [[negation-of-quantified-statements]]에 의해 이는 $\mathscr{P}(A)$의 모든 원소 $Y$에 대하여 $f(x) = Y$인 $x \in A$가 존재한다는 뜻이다.

$f$의 값 $f(x)$는 $\mathscr{P}(A)$의 원소이므로 $A$의 부분집합이다. 따라서 각 $x \in A$에 대하여 $x \in f(x)$이거나 $x \notin f(x)$이다. 다음 집합을 정의한다.
$$B = \{x \in A : x \notin f(x)\}$$
$B$의 원소는 모두 $A$의 원소이므로 $B \subseteq A$, 곧 $B \in \mathscr{P}(A)$이다. $f$가 전사라는 가정에 의해 $f(x_0) = B$인 $x_0 \in A$가 있다. 이 $x_0$에 대하여 $C$를 명제 "$x_0 \in B$"로 두고, $C$와 $\lnot C$가 모두 성립함을 보인다. $x_0 \in B$이거나 $x_0 \notin B$이다.

- $x_0 \in B$인 경우: $B$의 정의에 의해 $x_0 \notin f(x_0)$이고 $f(x_0) = B$이므로 $x_0 \notin B$이다. 곧 $C$이고 $\lnot C$이다.
- $x_0 \notin B$인 경우: $x_0 \in A$인데 $B$의 원소가 아니므로 $B$의 정의에 의해 $x_0 \notin f(x_0)$가 아니다. 곧 $x_0 \in f(x_0)$이고 $f(x_0) = B$이므로 $x_0 \in B$이다. 곧 $\lnot C$이고 $C$이다.

어느 경우에도 $C \land (\lnot C)$이므로 모순이다. 따라서 $\lnot P$가 틀렸고 $P$, 곧 $f$는 전사가 아니다.

모든 전단사는 전사이므로 $A$에서 $\mathscr{P}(A)$로의 전단사는 존재하지 않는다.

**결론.** (1)에 의해 단사가 존재하고 (2)에 의해 전단사가 없으므로 [[comparing-cardinalities]]의 정의에 의해 $|A| < |\mathscr{P}(A)|$이다.

이 증명은 $A$가 공집합인 경우에도 그대로 맞다. $A = \emptyset$이면 (1)의 $g$는 $\emptyset$이고 단사 조건은 공허하게 참이다. (2)에서 $f : \emptyset \to \mathscr{P}(\emptyset)$가 전사라는 가정은 $f(x_0) = B$인 $x_0 \in \emptyset$의 존재를 말하는데, 증명은 그런 $x_0$가 있다고 하고 모순을 이끌어내므로 논증에 빈틈이 없다(실제로는 그런 $x_0$가 없으므로 가정부터 성립하지 않는다).
:::

## 예시와 반례

:::example[$A = \{1, 2, 3\}$에서 $B$를 만들기]
$f(1) = \{1, 2\}$, $f(2) = \emptyset$, $f(3) = \{1, 3\}$이라 합시다. $1 \in f(1)$이므로 $1 \notin B$이고, $2 \notin f(2) = \emptyset$이므로 $2 \in B$이고, $3 \in f(3)$이므로 $3 \notin B$입니다. 따라서 $B = \{2\}$입니다. $f(1) = \{1, 2\} \ne \{2\}$, $f(2) = \emptyset \ne \{2\}$, $f(3) = \{1, 3\} \ne \{2\}$이므로 $B$는 $f$의 값이 아닙니다. $f$는 전사가 아닙니다.

다른 $f$로 $f(1) = \{2, 3\}$, $f(2) = \{2\}$, $f(3) = \{1\}$이라 하면 $1 \notin f(1)$이므로 $1 \in B$, $2 \in f(2)$이므로 $2 \notin B$, $3 \notin f(3)$이므로 $3 \in B$여서 $B = \{1, 3\}$입니다. $f$의 값 $\{2, 3\}$, $\{2\}$, $\{1\}$은 모두 $\{1, 3\}$과 다릅니다.
:::

:::example[단사 $g(a) = \{a\}$]
$A = \{1, 2, 3\}$일 때 $g(1) = \{1\}$, $g(2) = \{2\}$, $g(3) = \{3\}$이고 세 값이 서로 다르므로 $g$는 단사입니다. $\mathscr{P}(A)$에는 $\emptyset$, $\{1, 2\}$ 등도 있으므로 $g$는 전사가 아니고, 정리에 의해 어떤 함수도 전사가 아닙니다.
:::

:::example[공집합]
$A = \emptyset$이면 $\mathscr{P}(A) = \{\emptyset\}$입니다. $\emptyset$의 모든 부분집합은 $\emptyset$뿐이기 때문입니다. $\emptyset$에서 $\{\emptyset\}$로의 함수는 $\emptyset$ 하나이고 단사입니다. 이 함수의 값은 하나도 없으므로 $\{\emptyset\}$의 원소 $\emptyset$이 값이 아니어서 전사가 아닙니다. 따라서 $|\emptyset| < |\mathscr{P}(\emptyset)|$입니다.
:::

:::counterexample[$\notin$ 대신 $\in$으로 집합을 만들면 안 된다]
$C = \{x \in A : x \in f(x)\}$로 정하면 $f$의 값이 될 수 있어서 증명이 안 됩니다. $A = \{1, 2\}$, $f(1) = \{1\}$, $f(2) = \emptyset$이면 $1 \in f(1)$이고 $2 \notin f(2)$이므로 $C = \{1\} = f(1)$입니다. 증명의 모순은 $B$의 정의가 "자기 짝에 들어 있지 않은"이어서 $x_0 \in B$와 $x_0 \in f(x_0)$가 서로 반대가 되기 때문에 나옵니다.
:::

:::counterexample[단사만으로는 크기가 다르다고 할 수 없다]
정리의 (1)만으로는 $|A| < |\mathscr{P}(A)|$가 나오지 않습니다. 단사는 [[comparing-cardinalities]]의 $|A| \le |B|$에 해당할 뿐이고, 둘째 조건인 전단사의 부재가 따로 필요합니다. 예를 들어 $g(n) = n$인 $g : \mathbb{N} \to \mathbb{Z}$는 단사이지만 $|\mathbb{N}| < |\mathbb{Z}|$가 아닙니다. 칸토어 정리에서는 (2)가 모든 $f$에 대해 증명되어 있기 때문에 $<$를 얻습니다.
:::

## 역사와 맥락

스탠퍼드 철학 백과사전(SEP)의 집합론 초기 발전 항목은 칸토어가 1895년과 1897년의 마지막 두 논문에 수록하지 않은 정리로 "칸토어 정리"를 언급합니다. 그 서술은 어떤 집합 $S$가 주어져도 그보다 기수가 큰 다른 집합이 있다는 것이고, 지금은 이것을 멱집합 $\mathscr{P}(S)$라 하지만 칸토어는 $S$에서 $\{0, 1\}$로의 함수 전체의 집합을 썼다고 합니다. 같은 항목은 1892년의 짧은 논문에서 칸토어가 대각선 방법으로 실수 집합이 자연수와 일대일 대응될 수 없음을 보였고, 이 방법을 확장해 칸토어 정리를 증명했다고 적습니다. 이 항목의 증명이 SEP가 말하는 칸토어 본래의 증명과 같은지는 확인하지 않았습니다. 출처 Book of Proof는 이 정리를 Theorem 14.7이라고만 부릅니다.

## 확인 질문

:::check[$A = \{1, 2\}$이고 $f(1) = \{2\}$, $f(2) = \{1\}$일 때 증명의 집합 $B$를 구하고 $B$가 $f$의 값이 아님을 확인하라.]
$1 \notin f(1) = \{2\}$이므로 $1 \in B$이고, $2 \notin f(2) = \{1\}$이므로 $2 \in B$입니다. 따라서 $B = \{1, 2\}$입니다. $f(1) = \{2\} \ne \{1, 2\}$이고 $f(2) = \{1\} \ne \{1, 2\}$이므로 $B$는 $f$의 값이 아닙니다.
:::

:::check[$A = \{1\}$이다. $\mathscr{P}(A)$를 적고, $A$에서 $\mathscr{P}(A)$로의 함수를 모두 찾아 단사와 전사 여부를 말하라.]
$\mathscr{P}(A) = \{\emptyset, \{1\}\}$입니다. 함수는 $f_1 = \{(1, \emptyset)\}$과 $f_2 = \{(1, \{1\})\}$ 둘입니다. 둘 다 정의역의 원소가 하나뿐이어서 단사입니다. $f_1$의 값은 $\emptyset$뿐이어서 $\{1\}$이 값이 아니고, $f_2$의 값은 $\{1\}$뿐이어서 $\emptyset$이 값이 아니므로 둘 다 전사가 아닙니다. 따라서 단사는 있고 전단사는 없으며 $|A| < |\mathscr{P}(A)|$입니다.
:::
