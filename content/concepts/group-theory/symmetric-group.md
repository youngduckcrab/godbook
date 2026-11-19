---
title: 대칭군
title_en: Symmetric Group
aliases: [S_X, S_n, 치환, 치환군, 전단사 전체의 군, symmetric group, permutation, permutation group]
kind: theorem
field: group-theory
msc: ["20B30"]
level: undergrad
summary: 집합 X에서 X로의 전단사 전체 S_X는 합성으로 군이고, 항등원은 항등함수, 역원은 역함수이다. X가 원소를 둘 이하로 가지면 아벨군이고, 서로 다른 원소를 셋 가지면 아벨군이 아니다.
requires: [set, function, function-composition, injective-surjective-bijective, composition-preserves-injectivity-and-surjectivity, inverse-function, bijective-iff-inverse-is-a-function, finite-set, adding-or-removing-an-element, number-of-elements-is-unique, binary-operation, group, group-basic-properties, recursion-theorem]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 1.2절 Example 1.14 의 치환의 정의(p.9), 3.1절(p.33, 치환을 다시 정의), 5.1절 Theorem 5.1 과 S_X, S_n 의 표기(p.59), Remark 5.3(곱의 순서, p.60), Example 5.4(p.60)
    checked: original
    note: "출처는 집합 S 에서 S 로의 일대일 대응(one-to-one and onto)을 S 의 치환(permutation)이라 하고(p.9, p.33), 5.1절(p.59)에서 'X 의 치환 전체는 군 S_X 를 이룬다. X 가 유한집합이면 X = {1, …, n} 으로 둘 수 있고 S_n 으로 쓴다'고 한 뒤 Theorem 5.1 을 'S_n 은 n! 개의 원소를 갖는 군'으로 진술한다. 출처의 증명은 항등사상, 'f 는 일대일 대응이므로 f⁻¹ 이 있다', 합성의 결합법칙을 들고, |S_n| = n! 은 연습문제로 둔다(p.60, 연습문제 3.18 p.41). 이 항목은 |S_n| = n! 을 진술하지 않는다(이 사이트에 함수의 개수를 세는 도구가 없다). Theorem 5.1 의 증명은 합성이 S_n 에 닫혀 있다는 것을 따로 적지 않고, 필요한 사실(전단사의 합성은 전단사)은 출처 Theorem 1.15 의 4(p.9)에 있다. 이 항목은 그것을 composition-preserves-injectivity-and-surjectivity 로, 역함수가 S_X 에 있다는 것을 finite-set 의 (F3)으로 보인다. 출처는 '유한집합이면 {1, …, n} 으로 둘 수 있다'고 하지만 이 항목은 S_n 을 S_{{1,…,n}} 의 표기로만 정한다. 곱 fg 를 f ∘ g(g 를 먼저)로 읽는 것은 출처 Remark 5.3(p.60)의 약속과 같다. (2)(X 가 공집합이거나 원소가 하나)와 (3)(원소 둘)은 출처에서 찾지 못했다(대소문자를 가린 검색어 'S1', 'S2', 'S0' 0건, 'empty set' 10건과 'one element', 'two elements' 34건은 치환의 문맥이 아니다). (4)는 출처가 Example 3.13(p.35)에서 정삼각형의 대칭으로 S_3 가 아벨군이 아니라 하고 Example 5.4(p.60)에서 S_4 의 두 치환으로 στ ≠ τσ 를 보이는 것과 같은 결론이다. 이 항목은 서로 다른 세 원소를 가진 모든 X 에 대해 두 맞바꿈으로 보인다. 출처는 연습문제 5.17(p.72) 'Prove that S_n is nonabelian for n ≥ 3' 으로 이것을 S_n 에 대해 둔다. 이 항목의 (4)는 그것을 서로 다른 세 원소를 가진 집합 X 로 넓혀 증명한 것이다. 예시 |S_3| = 6 은 출처 p.33 이 꼭짓점의 배열을 '3·2·1 = 3! = 6' 으로 세는 것과 같은 대상, 같은 발상(첫 자리의 값 3 가지, 둘째 자리 2 가지)이다. 첫째 확인 질문(서로 겹치지 않는 두 맞바꿈은 교환된다)은 출처 Proposition 5.8(p.62, 서로소인 순환치환은 교환된다)의 특별한 경우와 같은 내용이다. 둘째 확인 질문의 역함수 계산은 출처 Example 1.19(p.10)가 {1, 2, 3} 의 치환의 역을 구하는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 제목·직관과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$X$가 집합이고 $\mathcal{F}$가 [[binary-operation|이항연산]]의 (5)의 집합, 곧 $X$에서 $X$로의 함수 전체의 집합이라 하자.
$$S_X = \{f \in \mathcal{F} : f : X \to X \text{가 전단사}\}$$
로 정한다([[injective-surjective-bijective|전단사]]). $S_X$의 원소를 $X$의 **치환**(permutation)이라 한다.

1. (군) $S_X$는 [[function-composition|합성]]에 대해 닫혀 있고, 합성을 $S_X$로 제한한 연산으로 $S_X$는 [[group|군]]이다. 이 군을 $X$ 위의 **대칭군**(symmetric group)이라 한다. 항등원은 [[inverse-function|항등함수]] $i_X$이고, $f \in S_X$의 역원은 역함수 $f^{-1}$이다. 이 군의 곱 $fg$는 $f \circ g$이다. 곧 모든 $x \in X$에서 $(fg)(x) = f(g(x))$이고, $g$를 먼저 적용한다.
2. (원소가 하나 이하) $S_\emptyset = \{i_\emptyset\}$이고, $x$가 대상이면 $S_{\{x\}} = \{i_{\{x\}}\}$이다. 두 경우 모두 대칭군은 원소가 하나인 아벨군이다.
3. (원소가 둘) $p$, $q$가 서로 다른 대상이고 $X = \{p, q\}$이면, $t(p) = q$이고 $t(q) = p$인 함수 $t : X \to X$에 대하여 $S_X = \{i_X, t\}$이고 $i_X \ne t$이다. 따라서 $|S_X| = 2$이고 $S_X$는 아벨군이다.
4. (원소가 셋 이상) $X$에 서로 다른 세 원소 $x$, $y$, $z$가 있으면 $S_X$는 아벨군이 아니다.
5. (표기) $n$이 자연수이면 $S_{\{1, \dots, n\}}$을 $S_n$으로 쓴다. $\{1, \dots, n\}$은 [[finite-set|유한집합]]의 것이다.
:::

:::english
Let $X$ be a set and let $\mathcal{F}$ be the set of (5) in the entry on binary operations, that is, the set of all functions from $X$ to $X$. Put
$$S_X = \{f \in \mathcal{F} : f : X \to X \text{ is bijective}\}.$$
The elements of $S_X$ are called **permutations** of $X$.

1. (Group) $S_X$ is closed under composition, and with the restriction of composition to $S_X$, $S_X$ is a group. It is called the **symmetric group** on $X$. Its identity is the identity function $i_X$, and the inverse of $f \in S_X$ is the inverse function $f^{-1}$. The product $fg$ in this group is $f \circ g$; that is, $(fg)(x) = f(g(x))$ for all $x \in X$, and $g$ is applied first.
2. (At most one element) $S_\emptyset = \{i_\emptyset\}$, and if $x$ is an object, $S_{\{x\}} = \{i_{\{x\}}\}$. In both cases the symmetric group is an abelian group with one element.
3. (Two elements) If $p$ and $q$ are distinct objects and $X = \{p, q\}$, then for the function $t : X \to X$ with $t(p) = q$ and $t(q) = p$ we have $S_X = \{i_X, t\}$ and $i_X \ne t$. Hence $|S_X| = 2$ and $S_X$ is abelian.
4. (Three or more elements) If $X$ has three distinct elements $x$, $y$, $z$, then $S_X$ is not abelian.
5. (Notation) For a natural number $n$, $S_{\{1, \dots, n\}}$ is written $S_n$, where $\{1, \dots, n\}$ is as in the entry on finite sets.
:::

## 직관

치환은 $X$의 원소들의 자리를 바꾸는 일입니다. 카드 몇 장을 섞는 방법 하나하나가 치환이고, 두 번 섞는 것이 합성입니다. 비유가 정의에 맞는 곳은 이렇습니다. 섞은 뒤에도 카드가 한 장도 없어지거나 겹치지 않는다는 것이 전단사이고, 섞지 않는 방법이 항등함수이며, 섞은 것을 되돌리는 방법이 역함수입니다. 비유가 맞지 않는 곳은 $X$가 무한집합일 수도 있다는 것입니다.

이 군은 지금까지의 예와 달리 아벨군이 아닐 수 있습니다. 두 번 섞는 순서를 바꾸면 결과가 달라질 수 있기 때문입니다. (4)는 원소가 셋만 있어도 그런 두 치환이 있다는 것이고, (2)와 (3)은 원소가 둘 이하이면 그런 일이 없다는 것입니다.

곱 $fg$를 "$g$를 먼저, $f$를 나중에"로 읽는 것은 함수의 합성 $f \circ g$의 읽는 법을 따른 것입니다. 군의 곱 기호 자체에는 순서의 뜻이 없으므로, 이것은 대칭군의 곱을 읽는 약속입니다.

## 증명

:::idea
$S_X$는 $\mathcal{F}$의 부분집합이므로 [[binary-operation|이항연산]]의 (3)과 (5)로 군임을 보인다. 닫힘은 전단사의 합성이 전단사라는 것, 역원은 전단사의 역함수가 전단사라는 것이다. (4)는 $x$와 $y$를 맞바꾸는 치환과 $y$와 $z$를 맞바꾸는 치환을 $x$에 적용해 비교한다.
:::

:::hint
$g \circ g = i_X$인 함수 $g : X \to X$는 전단사이다. 맞바꾸는 함수가 전단사임을 보일 때 쓴다.
:::

:::proof
먼저 쓸 사실 하나를 보인다. 이것을 "(가)"라 부른다. **(가)** $g : X \to X$가 함수이고 $g \circ g = i_X$이면 $g : X \to X$는 전단사이다. 단사: $g(a) = g(b)$이면 $a = i_X(a) = g(g(a)) = g(g(b)) = i_X(b) = b$이다. 전사: $b \in X$이면 $g(g(b)) = b$이고 $g(b) \in X$이다.

**(1)** $f, g \in S_X$이면 [[composition-preserves-injectivity-and-surjectivity|합성은 단사와 전사를 보존한다]]의 (3)에 의해 $f \circ g : X \to X$는 전단사이므로 $f \circ g \in S_X$이다. 따라서 $S_X$는 [[binary-operation|이항연산]]의 (5)의 연산에 대해 닫혀 있고, 같은 항목의 (3)에 의해 합성을 $S_X$로 제한한 연산은 $S_X$ 위의 이항연산이다. (5)에 의해 합성은 결합적이므로 (3)의 (i)에 의해 제한한 연산도 결합적이다.

$i_X \circ i_X = i_X$이므로 (가)에 의해 $i_X$는 전단사이고 $i_X \in S_X$이다. (5)에 의해 $i_X$는 $\mathcal{F}$ 위의 합성의 항등원이므로 (3)의 (ii)에 의해 제한한 연산의 항등원이다.

$f \in S_X$이면 [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 역관계 $f^{-1}$은 $X$에서 $X$로의 함수, 곧 역함수이고, [[finite-set|유한집합]]의 (F3)에 의해 $f^{-1} : X \to X$는 전단사이다. 따라서 $f^{-1} \in S_X$이다. [[inverse-function|역관계와 역함수]]에 의해 $f^{-1} \circ f = i_X$이고 $f \circ f^{-1} = i_X$이므로, $f^{-1}$은 $\mathcal{F}$ 위의 합성에 대한 $f$의 역원이고, (3)의 (iii)에 의해 제한한 연산에 대한 역원이다. [[group|군]]의 세 조건이 성립하므로 $S_X$는 군이고, 항등원과 역원은 하나뿐이므로 항등원은 $i_X$, $f$의 역원은 $f^{-1}$이다. 곱 $fg$는 군의 연산의 값이므로 $f \circ g$이고, [[function-composition|합성]]에 의해 $(f \circ g)(x) = f(g(x))$이다.

**(2)** $X = \emptyset$이면 $X \times X = \emptyset$이므로 $X \times X$의 부분집합은 $\emptyset$뿐이고, $\emptyset$은 정의역의 원소에 관한 조건이 공허하게 참이어서 $\emptyset$에서 $\emptyset$으로의 함수이며, 단사와 전사의 조건도 공허하게 참이다. $i_\emptyset = \{(x, x) : x \in \emptyset\} = \emptyset$이므로 $S_\emptyset = \{i_\emptyset\}$이다.

$X = \{x\}$이고 $f \in S_X$이면 $f(x) \in \{x\}$이므로 $f(x) = x = i_X(x)$이고, [[function]]의 함수의 같음에 의해 $f = i_X$이다. (1)에서 $i_X \in S_X$이므로 $S_X = \{i_X\}$이다.

두 경우 모두 $S_X$는 원소 $i_X$ 하나의 집합이고, [[group|군]]의 (5)에 의해 원소가 하나인 아벨군이다.

**(3)** $t$는 $p$와 $q$에 각각 $q$와 $p$를 정해 주므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $X$에서 $X$로의 함수이다. $t(t(p)) = t(q) = p$이고 $t(t(q)) = t(p) = q$이므로 $t \circ t = i_X$이고, (가)에 의해 $t \in S_X$이다. $i_X(p) = p \ne q = t(p)$이므로 $i_X \ne t$이다.

$f \in S_X$라 하자. $f(p) \in \{p, q\}$이다. $f(p) = p$이면, $f$가 단사이고 $q \ne p$이므로 $f(q) \ne f(p) = p$이고 $f(q) \in \{p, q\}$이므로 $f(q) = q$이다. 두 점에서 값이 $i_X$와 같으므로 $f = i_X$이다. $f(p) = q$이면 같은 방법으로 $f(q) \ne q$이므로 $f(q) = p$이고 $f = t$이다. 따라서 $S_X = \{i_X, t\}$이다.

[[group|군]]의 (5)에 의해 $\{i_X\}$는 원소를 $1$개 갖고 $t \notin \{i_X\}$이므로, [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)에 의해 $S_X = \{i_X\} \cup \{t\}$는 원소를 $2$개 갖는다. 곧 $|S_X| = 2$이다([[number-of-elements-is-unique|원소의 개수]]). 아벨군: $f, g \in S_X$라 하자. 둘 가운데 하나가 항등원 $i_X$이면 $fg = gf$이다(둘 다 나머지 하나와 같다). 둘 다 $i_X$가 아니면 $f = g = t$이고 $fg = gf$이다.

**(4)** $X$의 각 원소 $w$에 대하여 $w = x$이면 $y$를, $w = y$이면 $x$를, $w$가 $x$도 $y$도 아니면 $w$를 정한다. $x \ne y$이므로 각 $w$에 정해지는 원소는 하나이고, [[recursion-theorem|재귀 정리]]의 (1)에 의해 이것은 함수 $\sigma : X \to X$이다. 같은 방법으로 $y$와 $z$를 맞바꾸고 나머지는 그대로 두는 함수 $\tau : X \to X$를 정한다.

$\sigma \circ \sigma = i_X$이다. $\sigma(\sigma(x)) = \sigma(y) = x$, $\sigma(\sigma(y)) = \sigma(x) = y$이고, $w$가 $x$도 $y$도 아니면 $\sigma(\sigma(w)) = \sigma(w) = w$이기 때문이다. 같은 계산으로 $\tau \circ \tau = i_X$이다. (가)에 의해 $\sigma, \tau \in S_X$이다.

$x$는 $y$도 $z$도 아니므로 $\tau(x) = x$이고 $(\sigma\tau)(x) = \sigma(\tau(x)) = \sigma(x) = y$이다. 또 $(\tau\sigma)(x) = \tau(\sigma(x)) = \tau(y) = z$이다. $y \ne z$이므로 $\sigma\tau$와 $\tau\sigma$는 $x$에서 값이 다르고, $\sigma\tau \ne \tau\sigma$이다. 따라서 $S_X$는 아벨군이 아니다.
:::

## 예시와 반례

:::example[S₃의 원소는 여섯 개이다]
$X = \{1, 2, 3\}$이라 합시다. $f \in S_3$이면 $f(1) \in \{1, 2, 3\}$이고, $f$가 단사이므로 $f(2) \ne f(1)$이며, $f(3)$은 $f(1)$과도 $f(2)$와도 다릅니다. 따라서 $f(3)$은 $\{1, 2, 3\}$에서 $f(1)$, $f(2)$가 아닌 나머지 하나로 정해집니다. $(f(1), f(2))$의 가능한 쌍은 여섯 개이고, 그에 따라 다음 여섯 함수가 나옵니다.

| | $f_1$ | $f_2$ | $f_3$ | $f_4$ | $f_5$ | $f_6$ |
|---|---|---|---|---|---|---|
| $1$에서의 값 | $1$ | $1$ | $2$ | $2$ | $3$ | $3$ |
| $2$에서의 값 | $2$ | $3$ | $1$ | $3$ | $1$ | $2$ |
| $3$에서의 값 | $3$ | $2$ | $3$ | $1$ | $2$ | $1$ |

각 열의 세 값은 서로 다르고 $1, 2, 3$이 모두 나오므로 여섯 함수는 모두 전단사이고, 어느 두 열도 같은 자리에서 값이 다르므로 여섯 함수는 서로 다릅니다. 따라서 $S_3 = \{f_1, \dots, f_6\}$입니다. 원소가 $1$개인 $\{f_1\}$에서 시작해 [[adding-or-removing-an-element|원소 하나를 더하거나 빼기]]의 (a)를 다섯 번 쓰면 $|S_3| = 6$입니다. $f_1 = i_X$이고, $f_2$는 $2$와 $3$을, $f_3$은 $1$과 $2$를 맞바꾸는 치환입니다. $(f_3 f_2)(1) = f_3(1) = 2$이고 $(f_2 f_3)(1) = f_2(2) = 3$이므로 $f_3 f_2 \ne f_2 f_3$입니다. 나머지 두 점에서도 계산하면 $f_3 f_2 = f_4$이고 $f_2 f_3 = f_5$입니다.
:::

:::counterexample[X = {1, 2}에서 함수 전체는 합성으로 군이 아니다]
$X = \{1, 2\}$이면 [[binary-operation|이항연산]]의 (5)에 의해 $\mathcal{F}$는 합성으로 결합적이고 항등원 $i_X$를 갖지만 군은 아닙니다. 모든 점에서 값이 $1$인 함수 $c \in \mathcal{F}$를 보면, 어떤 $g \in \mathcal{F}$에 대해서도 $(c \circ g)(2) = c(g(2)) = 1 \ne 2 = i_X(2)$이므로 $c \circ g \ne i_X$이고, $c$는 역원을 갖지 않습니다. 그래서 대칭군은 $\mathcal{F}$ 전체가 아니라 전단사만 모읍니다.
:::

## 확인 질문

:::check[$X = \{1, 2, 3, 4\}$에서 $1$과 $2$를 맞바꾸는 치환 $\alpha$와 $3$과 $4$를 맞바꾸는 치환 $\beta$는 교환되는가?]
교환됩니다. $(\alpha\beta)(1) = \alpha(1) = 2 = (\beta\alpha)(1)$, $(\alpha\beta)(2) = 1 = (\beta\alpha)(2)$, $(\alpha\beta)(3) = \alpha(4) = 4$이고 $(\beta\alpha)(3) = \beta(3) = 4$, $(\alpha\beta)(4) = 3 = (\beta\alpha)(4)$입니다. 네 점에서 값이 같으므로 $\alpha\beta = \beta\alpha$입니다. 아벨군이 아닌 군에도 교환되는 두 원소는 있습니다.
:::

:::check[위 예시의 $f_4$의 역원을 표의 $f_1, \dots, f_6$ 가운데에서 찾아라.]
$f_4(1) = 2$, $f_4(2) = 3$, $f_4(3) = 1$이므로 역함수는 $2$를 $1$로, $3$을 $2$로, $1$을 $3$으로 보냅니다. 곧 $1$, $2$, $3$에서의 값이 $3$, $1$, $2$인 $f_5$입니다. 실제로 $(f_4 f_5)(1) = f_4(3) = 1$, $(f_4 f_5)(2) = f_4(1) = 2$, $(f_4 f_5)(3) = f_4(2) = 3$이므로 $f_4 f_5 = i_X$이고, [[group-basic-properties|군의 기본 성질]]의 (3)에 의해 한쪽만 확인해도 $f_5 = f_4^{-1}$입니다.
:::
