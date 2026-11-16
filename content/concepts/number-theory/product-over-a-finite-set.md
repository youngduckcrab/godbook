---
title: 유한집합 위의 곱
title_en: Product over a Finite Set of Integers
aliases: [집합의 원소의 곱, 정수 집합의 곱, product over a finite set]
kind: theorem
field: number-theory
msc: ["11"]
level: undergrad
summary: 공집합이 아닌 유한한 정수 집합 S의 원소를 하나씩 나열해 곱한 값은 나열 방식과 무관하게 정해지며, 원소 b를 하나 떼어 낸 집합의 곱에 b를 곱한 것과 같다.
requires: [set, set-operations, function, injective-surjective-bijective, inverse-function, function-composition, composition-is-associative, composition-preserves-injectivity-and-surjectivity, finite-set, adding-or-removing-an-element, number-of-elements-is-unique, finite-product, rearranging-a-finite-product]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 2.1절, Theorem 2.1.20(Euler's Theorem)의 증명 p.27, Proposition 2.1.22(Wilson's Theorem, p.27)의 증명 p.28
    checked: original
    note: "출처는 오일러 정리의 증명(p.27)에서 집합 P의 원소들에 대한 곱을 ∏_{a∈P}로 쓰고 윌슨 정리의 증명(p.28)에서 집합 {2, 3, …, p − 2}의 원소들을 짝지어 곱한다. 출처는 집합 위의 곱을 정의하지 않고, 곱이 원소를 늘어놓는 순서와 무관하다는 것도 쓰지 않는다. 이 항목의 정의(전단사 {1, …, k} → S로 원소를 나열해 곱한다), 잘 정의됨의 증명, 성질 2–4의 증명은 출처에 없고 이 사이트가 썼다. 예시와 반례, 확인 질문은 이 사이트에서 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$S$가 원소를 $k$개($k \ge 1$) 갖는 정수의 집합이라 하자. 곧 $k \ge 1$이고 전단사 $p : \{1, \dots, k\} \to S$가 있다. $S \subseteq \mathbb{Z}$이므로 $p$는 길이 $k$인 정수의 열 $p_1, \dots, p_k$이다([[function]]의 진술에서 공역은 선언하기 나름이다). 이 열의 [[finite-product|곱]] $p_1 p_2 \cdots p_k$를 $S$의 **나열 $p$에 대한 곱**이라 한다. 다음이 성립한다.

1. (잘 정의됨) $S$의 두 나열 $p : \{1, \dots, k\} \to S$, $q : \{1, \dots, l\} \to S$에 대하여 $k = l$이고 $p_1 \cdots p_k = q_1 \cdots q_l$이다. 따라서 이 정수는 $S$만으로 정해지며 $S$의 **원소의 곱**이라 하고 $\prod_{s \in S} s$로 쓴다.
2. $b$가 정수이면 $\prod_{s \in \{b\}} s = b$이다.
3. $S$가 원소를 $k \ge 2$개 갖고 $b \in S$이면 $S - \{b\}$는 공집합이 아닌 유한집합이고 $\prod_{s \in S} s = \left(\prod_{s \in S - \{b\}} s\right) \cdot b$이다.
4. $S$가 위와 같이 원소를 $k \ge 1$개 갖고 $x$가 정수이며 $x \notin S$이면 $S \cup \{x\}$는 공집합이 아닌 유한집합이고 $\prod_{s \in S \cup \{x\}} s = \left(\prod_{s \in S} s\right) \cdot x$이다.

공집합 위의 곱(빈 곱)은 정의하지 않는다. 증명에서는 [[finite-set]]의 (F3), [[adding-or-removing-an-element]], [[number-of-elements-is-unique]], [[rearranging-a-finite-product|재배열 정리]]를 쓴다.
:::

:::english
Let $S$ be a set of integers with $k \ge 1$ elements; that is, $k \ge 1$ and there is a bijection $p : \{1, \dots, k\} \to S$. Since $S \subseteq \mathbb{Z}$, $p$ is a sequence of integers $p_1, \dots, p_k$ of length $k$ (the codomain of a function is a matter of declaration). The finite product $p_1 p_2 \cdots p_k$ of this sequence is called the **product of $S$ along the listing $p$**. The following hold.

1. (Well-definedness) For two listings $p : \{1, \dots, k\} \to S$ and $q : \{1, \dots, l\} \to S$ of $S$, we have $k = l$ and $p_1 \cdots p_k = q_1 \cdots q_l$. Hence this integer is determined by $S$ alone; we call it the **product of the elements** of $S$ and write $\prod_{s \in S} s$.
2. For an integer $b$, $\prod_{s \in \{b\}} s = b$.
3. If $S$ has $k \ge 2$ elements and $b \in S$, then $S - \{b\}$ is a nonempty finite set and $\prod_{s \in S} s = \left(\prod_{s \in S - \{b\}} s\right) \cdot b$.
4. If $S$ has $k \ge 1$ elements as above, $x$ is an integer and $x \notin S$, then $S \cup \{x\}$ is a nonempty finite set and $\prod_{s \in S \cup \{x\}} s = \left(\prod_{s \in S} s\right) \cdot x$.

The product over the empty set (the empty product) is not defined. In the proof we use (F3) of the entry on finite sets, the results on adding or removing one element, the uniqueness of the number of elements, and the rearrangement of finite products.
:::

## 직관

$\{2, 3, 5\}$의 원소를 모두 곱한다고 하면 어느 것을 먼저 곱하느냐는 문제가 되지 않을 것 같지만, 집합에는 순서가 없는데 이 사이트의 곱은 열(순서가 있는 것)에 대해서만 정의되어 있습니다. 그래서 집합의 원소에 번호를 붙이는 방법(나열)을 하나 골라 그 열의 곱을 구하고, 어떤 나열을 골라도 같은 값이 나온다는 것을 보여야 합니다. 그 보증이 [[rearranging-a-finite-product|곱의 재배열]]입니다. 두 나열 사이의 번호 바꿈이 전단사이기 때문입니다.

3과 4는 원소 하나를 떼거나 붙일 때의 계산 규칙입니다. 나열을 고를 때 떼어 낼 원소를 맨 끝에 두면 곱의 정의("마지막 항을 마지막에 곱한다")와 맞아떨어집니다. 이를 가능하게 하는 것이 [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]에서 구성한, 마지막 번호에 $b$가 있는 나열입니다. 주의할 점은 같은 값을 두 번 곱하지 않는다는 것입니다. 집합에서는 같은 수가 한 번만 원소이므로 $\{2, 2, 3\}$은 $\{2, 3\}$이고 곱은 $6$입니다.

## 증명

:::idea
두 나열 $p$, $q$ 사이에는 $q = p \circ \sigma$인 전단사 $\sigma = p^{-1} \circ q$가 있으므로 [[rearranging-a-finite-product|재배열]]에 의해 곱이 같다. 3은 $b$가 마지막 번호인 나열을 쓴다.
:::

:::hint
$q = p \circ \sigma$임을 보이려면 $p \circ p^{-1}$이 항등함수라는 것과 합성이 결합법칙을 만족한다는 것을 쓰세요.
:::

:::proof
**1의 증명.** $S$가 원소를 $k$개, $l$개 갖는 두 나열 $p$, $q$가 있으므로 [[number-of-elements-is-unique]]의 1에 의해 $k = l$이다. [[finite-set]]의 (F3)에 의해 $p^{-1} : S \to \{1, \dots, k\}$는 전단사이므로 [[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]의 3번에 의해 $\sigma = p^{-1} \circ q : \{1, \dots, k\} \to \{1, \dots, k\}$는 전단사이다. [[inverse-function]]의 진술에 의해 $p \circ p^{-1} = i_S$이고, 합성은 결합법칙을 만족하므로([[composition-is-associative|합성의 결합법칙]]) $p \circ \sigma = p \circ (p^{-1} \circ q) = (p \circ p^{-1}) \circ q = i_S \circ q$이고, 모든 $i$에서 $(i_S \circ q)(i) = i_S(q(i)) = q(i)$이므로 [[function]]의 함수의 같음에 의해 $i_S \circ q = q$이다. 곧 모든 $i$에서 $q_i = p_{\sigma(i)}$이므로 열 $q$는 $p$와 $\sigma$의 합성인 열이다. [[rearranging-a-finite-product]]의 2에 의해 $q_1 \cdots q_k = p_{\sigma(1)} \cdots p_{\sigma(k)} = p_1 \cdots p_k$이다.

**2의 증명.** $\{b\}$는 $\{(1, b)\}$가 $\{1\}$에서 $\{b\}$로의 전단사이므로 원소를 $1$개 갖는다. 이 나열 $p$에 대한 곱은 길이 $1$인 열 $p_1 = b$의 곱, 곧 $b$이다. 1에 의해 이것이 $\prod_{s \in \{b\}} s$이다.

**3의 증명.** $S$가 원소를 $k = (k - 1) + 1$개 갖고 $k - 1 \ge 1$이다. [[adding-or-removing-an-element]]의 (b)에 의해 $g(k) = b$인 전단사 $g : \{1, \dots, k\} \to S$가 있고, 제한 $g|_{\{1, \dots, k-1\}}$은 $\{1, \dots, k - 1\}$에서 $S - \{b\}$로의 전단사이다. 따라서 $S - \{b\}$는 원소를 $k - 1 \ge 1$개 갖는 유한집합이고, $g|_{\{1, \dots, k-1\}}$이 그 나열이다. $1 \le k - 1$이므로 $1 \in \{1, \dots, k-1\}$이고 $g(1) \in S - \{b\}$이므로 $S - \{b\}$는 공집합이 아니다. 이 나열은 열 $g_1, \dots, g_k$의 처음 $k - 1$개이다. $S$의 나열 $g$에 대한 곱은 정의의 둘째 줄($k - 1 \ge 1$)에 의해 $g_1 \cdots g_k = (g_1 \cdots g_{k-1}) \cdot g_k$이다. $g_1 \cdots g_{k-1}$은 $S - \{b\}$의 나열 $g|_{\{1, \dots, k-1\}}$에 대한 곱이므로 1에 의해 $\prod_{s \in S - \{b\}} s$이고, $g_k = g(k) = b$이다. 또 $g_1 \cdots g_k$는 1에 의해 $\prod_{s \in S} s$이다.

**4의 증명.** $S$가 원소를 $k \ge 1$개 갖고 $h : \{1, \dots, k\} \to S$가 전단사라 하자. [[adding-or-removing-an-element]]의 (a)에 의해 $h^+ = h \cup \{(k+1, x)\}$는 $\{1, \dots, k+1\}$에서 $S \cup \{x\}$로의 전단사이고 $h^+(k+1) = x$, $i \le k$에서 $h^+(i) = h(i)$이다. 따라서 $S \cup \{x\}$는 원소를 $k + 1 \ge 2$개 갖는 유한집합이고, $x \in S \cup \{x\}$이므로 공집합이 아니다. $h^+$의 처음 $k$개는 $h$와 같은 열이므로 $\prod_{s \in S \cup \{x\}} s = h^+_1 \cdots h^+_{k+1} = (h_1 \cdots h_k) \cdot x$이다. 정의의 둘째 줄($k \ge 1$)에 의해 이렇게 되고, 1에 의해 $h_1 \cdots h_k = \prod_{s \in S} s$이다. $\blacksquare$
:::

## 예시와 반례

:::example[세 소수의 집합]
$S = \{2, 3, 5\}$는 $p = \{(1, 2), (2, 3), (3, 5)\}$와 $q = \{(1, 5), (2, 2), (3, 3)\}$ 두 가지로 나열됩니다. $p$에 대한 곱은 $(2 \cdot 3) \cdot 5 = 30$이고 $q$에 대한 곱은 $(5 \cdot 2) \cdot 3 = 30$으로 같습니다. 3에서 $b = 3$으로 잡으면 $S - \{3\} = \{2, 5\}$의 곱은 $2 \cdot 5 = 10$이고 $10 \cdot 3 = 30$입니다.
:::

:::counterexample[같은 수를 두 번 쓰는 열과 집합은 다르다]
열 $2, 2, 3$의 [[finite-product|곱]]은 $(2 \cdot 2) \cdot 3 = 12$입니다. 그러나 집합 $\{2, 2, 3\}$은 $\{2, 3\}$과 같고 원소는 $2$, $3$ 두 개뿐이므로 원소의 곱은 $2 \cdot 3 = 6$입니다. 집합 위의 곱은 집합의 각 원소를 한 번씩 곱합니다. 또 공집합에는 이 항목의 곱을 정의하지 않습니다. 3에서 $k \ge 2$를 요구하는 것도 $S - \{b\}$가 공집합이 되지 않게 하려는 것이어서, $k = 1$이면 2를 씁니다.
:::

## 확인 질문

:::check[$S = \{-2, 3, 7\}$이다. $b = 7$로 3을 써서 $\prod_{s \in S} s$를 구하라.]
$S - \{7\} = \{-2, 3\}$이고 이 집합의 곱은 $(-2) \cdot 3 = -6$입니다. 따라서 $\prod_{s \in S} s = (-6) \cdot 7 = -42$입니다.
:::

:::check[$S = \{2, 3, 4\}$와 $x = 5$이다. 4를 써서 $\prod_{s \in S \cup \{5\}} s$를 구하라.]
$5 \notin S$이고 $\prod_{s \in S} s = (2 \cdot 3) \cdot 4 = 24$입니다. 4에 의해 $\prod_{s \in S \cup \{5\}} s = 24 \cdot 5 = 120$입니다.
:::
