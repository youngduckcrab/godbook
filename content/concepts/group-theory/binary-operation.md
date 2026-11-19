---
title: 이항연산
title_en: Binary Operation
aliases: [연산, 결합법칙, 교환법칙, 항등원, 역원, 닫혀 있다, 연산표, 케일리 표, law of composition, associative law, commutative law, identity element, inverse, closed, Cayley table]
kind: definition
field: group-theory
msc: ["08A02"]
level: undergrad
summary: 집합 S 위의 이항연산은 함수 S × S → S이다. 결합법칙, 교환법칙, 항등원, 역원, 닫힌 부분집합을 정의하고, 항등원과 (결합적인 연산의) 역원이 하나뿐임을 보인다.
requires: [set, subset, power-set, cartesian-product, function, adding-or-removing-an-element, function-composition, composition-is-associative, inverse-function, recursion-theorem, even-and-odd, well-ordering-principle]
sources:
  - ref: judson-abstract-algebra
    loc: 3.2절 Definitions and Examples, 이항연산의 정의(번호 없음), p.33. 결합법칙·항등원·역원은 같은 절 군의 정의 안, p.34
    checked: original
    note: "출처는 이항연산(law of composition)을 G × G → G 인 함수로 정의하고 값을 a ◦ b 또는 ab 로 쓴다. 이 사이트에서 ◦ 는 함수의 합성이므로 일반 연산의 기호는 ∗ 로 바꾸었다. 출처는 결합법칙, 항등원, 역원을 군의 공리 안에서만 말하고(p.34), 교환법칙은 아벨군의 정의로 말한다(p.34). 이 항목은 이 넷을 군이 아닌 연산에도 쓰도록 이항연산의 성질로 따로 정의했다. (1)의 증명은 출처 Proposition 3.17(p.36)의 증명과 같고, (2)의 증명은 출처가 Proposition 3.18(p.36) 앞에서 군에 대해 하는 계산과 같다. 이 항목은 (2)를 군이 아니라 결합법칙과 항등원만 가진 연산에 대해 진술한다. '닫혀 있다'(closed)는 출처가 정의하지 않고 쓴다(연습문제 3.11, p.41; 16.1절 환의 정의 'two closed binary operations', p.190; Proposition 9.13 의 증명, p.118). (3)의 제한은 출처가 부분군의 정의에서 'when the group operation of G is restricted to H'(3.3절, p.38)라고 말로만 하는 것을 함수의 제한으로 쓴 것이다. (4)의 정수의 덧셈은 출처 Example 3.8(p.34)에서 정수의 덧셈을 ℤ 위의 이항연산이라 하는 것과 같은 대상이고, 정수의 곱셈은 출처가 ℤ 를 환의 예로 들 때(Example 16.2, p.191) 환의 두 이항연산 가운데 하나로 쓰이고, 뺄셈을 이항연산이라 부르는 곳은 출처에서 찾지 못했다(검색어 'subtract' 1건은 23장의 근의 공식, 'minus' 0건, 'binary operations?' 31건을 모두 읽었다. 출처는 p.34 에서 덧셈으로 쓰는 군의 m − n 을 m + (−n) 의 줄임으로 쓴다). (5)는 출처 Theorem 1.15(p.9, 합성의 결합법칙)와 Theorem 5.1(p.59, S_n 의 연산이 합성)과 같은 재료이나, 출처는 모든 함수 A → A 의 집합 위의 연산으로는 진술하지 않는다. 예시 '짝수 전체는 덧셈에 대해 닫혀 있다'는 출처가 2ℤ 를 덧셈에 대한 군이라 하는 곳(p.38)과 같은 대상이다. 반례 '나눗셈'의 핵심인 '2c = 1 인 정수 c 는 없다'는 출처 Example 16.2(p.191)의 '2 의 곱셈 역원인 정수는 없다'와 같은 사실이다. 예시 '원소가 둘인 집합에서 합성은 가환이 아니다'는 출처 Example 1.11(p.8)과 같은 결론을 다른 함수(두 상수함수)로 보인 것이다. 연산표를 출처는 군을 적는 방법(Cayley table, p.34)으로 소개한다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 제목·직관과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$S$가 [[set]]일 때, $S$ 위의 **이항연산**(binary operation)은 [[function]] $\ast : S \times S \to S$, 곧 [[cartesian-product|곱집합]] $S \times S$에서 $S$로의 함수이다. $a, b \in S$일 때 순서쌍 $(a, b)$에서의 값을 $a \ast b$로 쓴다. 따라서 모든 $a, b \in S$에 대하여 $a \ast b$는 $S$의 원소 하나로 정해진다. $S$ 위의 두 이항연산 $\ast$와 $\star$가 같은 것은 정확히 모든 $a, b \in S$에서 $a \ast b = a \star b$일 때이다([[function]]의 함수의 같음).

$\ast$가 $S$ 위의 이항연산일 때 다음 용어를 정한다.

- $\ast$가 **결합법칙**(associative law)을 만족한다(**결합적**이다)는 것은 정확히 모든 $a, b, c \in S$에 대하여 $(a \ast b) \ast c = a \ast (b \ast c)$일 때이다.
- $\ast$가 **교환법칙**(commutative law)을 만족한다(**가환**이다)는 것은 정확히 모든 $a, b \in S$에 대하여 $a \ast b = b \ast a$일 때이다.
- $S$의 원소 $e$가 $\ast$의 **항등원**(identity element)인 것은 정확히 모든 $a \in S$에 대하여 $e \ast a = a$이고 $a \ast e = a$일 때이다.
- $\ast$가 항등원 $e$를 가질 때, $a, b \in S$에 대하여 $b$가 $a$의 **역원**(inverse)인 것은 정확히 $a \ast b = e$이고 $b \ast a = e$일 때이다. 아래 (1)에 의해 항등원은 있으면 하나뿐이므로, 역원은 그 하나뿐인 항등원에 대한 것이다.

다음이 성립한다.

1. (항등원의 유일성) $e$와 $e'$이 둘 다 $\ast$의 항등원이면 $e = e'$이다.
2. (역원의 유일성) $\ast$가 결합법칙을 만족하고 항등원 $e$를 가지며 $a \in S$라 하자. $b$와 $c$가 둘 다 $a$의 역원이면 $b = c$이다.
3. (닫힌 부분집합) $T \subseteq S$가 $\ast$에 대하여 **닫혀 있다**(closed)는 것은 정확히 모든 $a, b \in T$에 대하여 $a \ast b \in T$일 때이다. $T$가 $\ast$에 대하여 닫혀 있으면 $\ast$의 $T \times T$로의 [[adding-or-removing-an-element|제한]] $\ast|_{T \times T}$는 $T$ 위의 이항연산이고, 모든 $a, b \in T$에서 그 값은 $a \ast b$이다. 이 이항연산을 **$\ast$를 $T$로 제한한 연산**이라 하고 같은 기호 $\ast$로 쓴다. 이때 다음이 성립한다.
   - (i) $\ast$가 결합법칙을 만족하면 $\ast$를 $T$로 제한한 연산도 결합법칙을 만족한다. 교환법칙도 마찬가지이다.
   - (ii) $\ast$의 항등원 $e$가 $T$에 속하면 $e$는 $\ast$를 $T$로 제한한 연산의 항등원이다.
   - (iii) (ii)의 가정에 더해 $a \in T$이고 $\ast$에 대한 $a$의 역원 $b$가 $T$에 속하면, $b$는 $\ast$를 $T$로 제한한 연산에 대해서도 $a$의 역원이다.
4. (정수의 연산) 정수 $a$, $b$에 각각 $a + b$, $ab$, $a - b$를 대응시키는 정수의 **덧셈**, **곱셈**, **뺄셈**은 $\mathbb{Z}$ 위의 이항연산이다. 덧셈과 곱셈은 결합법칙과 교환법칙을 만족한다. $0$은 덧셈의 항등원이고 $1$은 곱셈의 항등원이다. 모든 정수 $a$에 대하여 $-a$는 덧셈에 대한 $a$의 역원이다.
5. (함수의 합성) $A$가 집합이고 $\mathcal{F}$가 $A$에서 $A$로의 함수 전체의 집합, 곧 [[power-set|멱집합]] $\mathscr{P}(A \times A)$의 원소 가운데 $A$에서 $A$로의 함수인 것 전체의 집합이라 하자. $f, g \in \mathcal{F}$에 [[function-composition|합성]] $f \circ g$를 대응시키는 것은 $\mathcal{F}$ 위의 이항연산이다. 이 연산은 결합법칙을 만족하고, [[inverse-function|항등함수]] $i_A$는 이 연산의 항등원이다.
:::

:::english
Let $S$ be a set. A **binary operation** on $S$ is a function $\ast : S \times S \to S$, that is, a function from the Cartesian product $S \times S$ to $S$. For $a, b \in S$ the value at the ordered pair $(a, b)$ is written $a \ast b$. Hence for all $a, b \in S$, $a \ast b$ is a uniquely determined element of $S$. Two binary operations $\ast$ and $\star$ on $S$ are equal exactly when $a \ast b = a \star b$ for all $a, b \in S$ (equality of functions).

Let $\ast$ be a binary operation on $S$. We define the following terms.

- $\ast$ satisfies the **associative law** (is **associative**) exactly when $(a \ast b) \ast c = a \ast (b \ast c)$ for all $a, b, c \in S$.
- $\ast$ satisfies the **commutative law** (is **commutative**) exactly when $a \ast b = b \ast a$ for all $a, b \in S$.
- An element $e$ of $S$ is an **identity element** of $\ast$ exactly when $e \ast a = a$ and $a \ast e = a$ for all $a \in S$.
- When $\ast$ has an identity element $e$, for $a, b \in S$, $b$ is an **inverse** of $a$ exactly when $a \ast b = e$ and $b \ast a = e$. By (1) below an identity element, if it exists, is unique, so an inverse is taken with respect to that unique identity element.

The following hold.

1. (Uniqueness of the identity) If $e$ and $e'$ are both identity elements of $\ast$, then $e = e'$.
2. (Uniqueness of inverses) Suppose $\ast$ is associative and has an identity element $e$, and let $a \in S$. If $b$ and $c$ are both inverses of $a$, then $b = c$.
3. (Closed subsets) A subset $T \subseteq S$ is **closed** under $\ast$ exactly when $a \ast b \in T$ for all $a, b \in T$. If $T$ is closed under $\ast$, then the restriction $\ast|_{T \times T}$ of $\ast$ to $T \times T$ is a binary operation on $T$, and its value at any $a, b \in T$ is $a \ast b$. We call this binary operation **the restriction of $\ast$ to $T$** and denote it by the same symbol $\ast$. Then:
   - (i) If $\ast$ is associative, so is the restriction of $\ast$ to $T$. The same holds for commutativity.
   - (ii) If the identity element $e$ of $\ast$ belongs to $T$, then $e$ is an identity element of the restriction of $\ast$ to $T$.
   - (iii) If, in addition to the hypothesis of (ii), $a \in T$ and an inverse $b$ of $a$ with respect to $\ast$ belongs to $T$, then $b$ is also an inverse of $a$ for the restriction of $\ast$ to $T$.
4. (Operations on the integers) **Addition**, **multiplication** and **subtraction** of integers, which assign to integers $a$, $b$ the integers $a + b$, $ab$ and $a - b$ respectively, are binary operations on $\mathbb{Z}$. Addition and multiplication are associative and commutative. $0$ is the identity element of addition and $1$ is the identity element of multiplication. For every integer $a$, $-a$ is an inverse of $a$ with respect to addition.
5. (Composition of functions) Let $A$ be a set and let $\mathcal{F}$ be the set of all functions from $A$ to $A$, that is, the set of those elements of the power set $\mathscr{P}(A \times A)$ that are functions from $A$ to $A$. Assigning to $f, g \in \mathcal{F}$ their composition $f \circ g$ is a binary operation on $\mathcal{F}$. This operation is associative, and the identity function $i_A$ is its identity element.
:::

## 직관

이항연산은 두 칸짜리 계산기 버튼과 같습니다. 첫 칸에 $a$, 둘째 칸에 $b$를 넣고 누르면 답이 하나 나옵니다. 비유의 세 부분이 정의의 세 부분에 맞습니다. 두 칸이 구별되는 것은 입력이 집합 $\{a, b\}$가 아니라 순서쌍 $(a, b)$라는 것이고, 답이 늘 하나라는 것은 $\ast$가 함수라는 것이며, 답이 다시 $S$의 원소라는 것은 공역이 $S$라는 것입니다. 마지막 조건 때문에 나온 답을 다시 버튼에 넣을 수 있고, 그래서 $(a \ast b) \ast c$ 같은 식이 뜻을 갖습니다.

결합법칙, 교환법칙, 항등원, 역원은 모두 이 버튼이 가질 수도 있고 갖지 않을 수도 있는 성질입니다. 정수의 덧셈은 넷을 다 가지지만, 뺄셈은 결합법칙도 교환법칙도 갖지 않습니다(아래 반례). 항등원의 정의는 양쪽, 곧 $e \ast a = a$와 $a \ast e = a$를 모두 요구합니다. 뺄셈에서 $a - 0 = a$이지만 $0 - 1 = -1 \ne 1$이므로 $0$은 뺄셈의 항등원이 아닙니다.

(2)의 증명에는 결합법칙이 쓰이므로, 역원의 유일성을 결합적인 연산에 대해서만 진술합니다.

:::remark[(1)과 (2)의 증명]
(1) $e'$이 항등원이므로 $a \ast e' = a$에 $a = e$를 넣으면 $e \ast e' = e$이다. $e$가 항등원이므로 $e \ast a = a$에 $a = e'$을 넣으면 $e \ast e' = e'$이다. 두 등식에서 $e = e \ast e' = e'$이다.

(2) $b$와 $c$가 $a$의 역원이므로 $b \ast a = e$이고 $a \ast c = e$이다. 따라서
$$b = b \ast e = b \ast (a \ast c) = (b \ast a) \ast c = e \ast c = c$$
이다. 첫째 등호는 $e$가 항등원이라는 것, 둘째는 $a \ast c = e$, 셋째는 결합법칙, 넷째는 $b \ast a = e$, 다섯째는 $e$가 항등원이라는 것이다.
:::

:::remark[(3)의 증명]
$(a, b) \in T \times T$이면 [[cartesian-product|곱집합]]의 뜻에 의해 $a, b \in T$이고, $T \subseteq S$이므로 $a, b \in S$, 따라서 $(a, b) \in S \times S$이다. 곧 $T \times T \subseteq S \times S$이다. [[adding-or-removing-an-element|함수의 제한]]에 의해 $\ast|_{T \times T}$는 $T \times T$에서 $S$로의 함수이고 $(a, b) \in T \times T$에서의 값은 $a \ast b$이다. $T$가 닫혀 있으므로 이 값은 모두 $T$에 속하고, [[function]]의 진술("공역은 선언하기 나름이다")에 의해 $\ast|_{T \times T}$는 $T \times T$에서 $T$로의 함수, 곧 $T$ 위의 이항연산이다.

$\ast$를 $T$로 제한한 연산을 잠시 $\ast_T$로 쓰자. $a, b \in T$에서 $a \ast_T b = a \ast b$이다. (i) $a, b, c \in T$라 하자. $a \ast b \in T$이므로 $(a \ast_T b) \ast_T c = (a \ast b) \ast_T c = (a \ast b) \ast c$이고, 마찬가지로 $b \ast c \in T$이므로 $a \ast_T (b \ast_T c) = a \ast (b \ast c)$이다. $\ast$가 결합적이면 두 값이 같다. 교환법칙은 $a \ast_T b = a \ast b = b \ast a = b \ast_T a$이다. (ii) $e \in T$이고 $a \in T$이면 $e \ast_T a = e \ast a = a$이고 $a \ast_T e = a \ast e = a$이다. (iii) (ii)에 의해 $e$가 $\ast_T$의 항등원이고, $a \ast_T b = a \ast b = e$, $b \ast_T a = b \ast a = e$이다.
:::

:::remark[(4)와 (5)의 증명]
(4) 정수끼리 더하거나 빼거나 곱한 결과는 정수이다([[even-and-odd]]에서 받아들인 사실). 따라서 $\mathbb{Z} \times \mathbb{Z}$의 각 원소 $(a, b)$에 정수 $a + b$가 식으로 정해져 있고, [[recursion-theorem|재귀 정리]]의 (1)(값으로 정한 함수)에 의해 $\{((a, b), a + b) : (a, b) \in \mathbb{Z} \times \mathbb{Z}\}$는 $\mathbb{Z} \times \mathbb{Z}$에서 $\mathbb{Z}$로의 함수이고 $(a, b)$에서의 값은 $a + b$이다. 곱셈과 뺄셈도 같다. 나머지 주장, 곧 $(a + b) + c = a + (b + c)$, $a + b = b + a$, $(ab)c = a(bc)$, $ab = ba$, $0 + a = a + 0 = a$, $1 \cdot a = a \cdot 1 = a$, $a + (-a) = (-a) + a = 0$은 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 정수의 계산 법칙이다.

(5) $f, g \in \mathcal{F}$이면 $g : A \to A$이고 $f : A \to A$이므로 [[function-composition|합성]] $f \circ g$는 $A$에서 $A$로의 함수이고, $A \times A$의 부분집합이므로 $f \circ g \in \mathcal{F}$이다. 각 $(f, g) \in \mathcal{F} \times \mathcal{F}$에 이미 정해진 대상 $f \circ g \in \mathcal{F}$가 대응하므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 이 대응은 $\mathcal{F} \times \mathcal{F}$에서 $\mathcal{F}$로의 함수이다. 결합법칙: $f, g, h \in \mathcal{F}$이면 [[composition-is-associative|합성의 결합법칙]]에 의해 $(f \circ g) \circ h = f \circ (g \circ h)$이다. 항등원: [[inverse-function|항등함수]] $i_A$는 $A$에서 $A$로의 함수이므로 $i_A \in \mathcal{F}$이다. $f \in \mathcal{F}$이고 $x \in A$이면 $(i_A \circ f)(x) = i_A(f(x)) = f(x)$이고 $(f \circ i_A)(x) = f(i_A(x)) = f(x)$이다. 세 함수의 정의역이 모두 $A$이므로 [[function]]의 함수의 같음에 의해 $i_A \circ f = f$이고 $f \circ i_A = f$이다.
:::

## 예시와 반례

:::example[연산표와 왼쪽 원소를 내는 연산]
원소가 몇 개 안 되는 집합 위의 이항연산은 표로 적을 수 있습니다. $a$의 행과 $b$의 열이 만나는 칸에 $a \ast b$를 적습니다. 이런 표를 **연산표** 또는 **케일리 표**(Cayley table)라 합니다. $p$, $q$가 서로 다른 두 대상이고 $S = \{p, q\}$일 때, 모든 $a, b \in S$에서 $a \ast b = a$로 정한 연산의 표는 다음과 같습니다. 이 연산은 각 $(a, b)$에 식으로 $a$를 정하므로 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $S \times S$에서 $S$로의 함수입니다.

| $\ast$ | $p$ | $q$ |
|---|---|---|
| $p$ | $p$ | $p$ |
| $q$ | $q$ | $q$ |

이 연산은 결합적입니다. $a, b, c \in S$이면 $(a \ast b) \ast c = a \ast c = a$이고 $a \ast (b \ast c) = a$입니다. 가환이 아닙니다. $p \ast q = p$이고 $q \ast p = q$인데 $p \ne q$입니다. 항등원이 없습니다. $e$가 항등원이면 $e \ast p = p$이고 $e \ast q = q$이어야 하는데, 연산의 정의에서 $e \ast p = e$, $e \ast q = e$이므로 $p = e = q$가 되어 $p \ne q$에 어긋납니다.
:::

:::example[짝수 전체는 덧셈에 대해 닫혀 있다]
$E$를 짝수 전체의 집합이라 합시다. $a, b \in E$이면 [[even-and-odd|짝수의 정의]]에 의해 $a = 2s$, $b = 2t$인 정수 $s$, $t$가 있고 $a + b = 2s + 2t = 2(s + t)$입니다(분배법칙, [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 계산 법칙). $s + t$는 정수이므로([[even-and-odd]]에서 받아들인 사실) $a + b \in E$입니다. 따라서 $E$는 정수의 덧셈에 대해 닫혀 있고, 이 항목의 (3)에 의해 덧셈을 $E$로 제한한 연산은 $E$ 위의 이항연산입니다. (3)의 (i)과 (4)에 의해 그 연산은 결합적이고 가환입니다. 또 $0 = 2 \cdot 0 \in E$이므로 (3)의 (ii)에 의해 $0$이 그 연산의 항등원입니다.
:::

:::example[원소가 둘인 집합에서 합성은 가환이 아니다]
$A = \{1, 2\}$이고 $f = \{(1, 1), (2, 1)\}$, $g = \{(1, 2), (2, 2)\}$라 합시다. 둘 다 $A$에서 $A$로의 함수이므로 (5)의 집합 $\mathcal{F}$의 원소입니다. $x \in A$이면 $(f \circ g)(x) = f(g(x)) = f(2) = 1$이고 $(g \circ f)(x) = g(f(x)) = g(1) = 2$입니다. 두 합성의 정의역은 $A$로 같고 $1$에서의 값이 $1$과 $2$로 다르므로 $f \circ g \ne g \circ f$입니다. 따라서 $A = \{1, 2\}$일 때 (5)의 연산은 결합적이고 항등원을 갖지만 가환은 아닙니다.
:::

:::counterexample[뺄셈은 결합법칙도 교환법칙도 만족하지 않는다]
(4)에 의해 뺄셈은 $\mathbb{Z}$ 위의 이항연산입니다. 그러나 $(5 - 3) - 2 = 2 - 2 = 0$이고 $5 - (3 - 2) = 5 - 1 = 4$이며 $0 \ne 4$이므로 결합법칙이 깨집니다. 또 $5 - 3 = 2$이고 $3 - 5 = -2$이며 $2 \ne -2$이므로 교환법칙도 깨집니다. 이항연산이라는 것만으로는 괄호를 옮기거나 두 원소의 자리를 바꿀 수 없습니다.
:::

:::counterexample[나눗셈은 정수 위의 이항연산이 아니다]
"정수 $a$, $b$에 $a = bc$인 정수 $c$를 대응시킨다"는 규칙은 $\mathbb{Z}$ 위의 이항연산을 정하지 못합니다. $(1, 2)$에 대응할 값이 없기 때문입니다. $1 = 2c$인 정수 $c$가 있다면 $1$은 짝수인데, $1 = 2 \cdot 0 + 1$이므로 $1$은 홀수이기도 하여, 짝수이면서 홀수인 정수는 없다는 [[even-and-odd]]의 사실에 어긋납니다. $(1, 0)$에도 대응할 값이 없습니다. 모든 정수 $c$에서 $0 \cdot c = 0$이고 $0 \ne 1$이기 때문입니다([[well-ordering-principle]]의 (L3)). 이항연산은 $S \times S$의 **모든** 순서쌍에 값을 정해야 합니다.
:::

## 확인 질문

:::check[정수 $a$, $b$에 대하여 $a \ast b = 2a + b$로 정하면 $\ast$는 결합적인가? 항등원이 있는가?]
$2a + b$는 정수이므로 (4)의 증명과 같은 까닭으로 $\ast$는 $\mathbb{Z}$ 위의 이항연산입니다. 결합적이지 않습니다. $(1 \ast 0) \ast 0 = 2 \ast 0 = 4$이고 $1 \ast (0 \ast 0) = 1 \ast 0 = 2$이며 $4 \ne 2$입니다. 항등원도 없습니다. $e$가 항등원이면 $e \ast 1 = 1$, 곧 $2e + 1 = 1$이므로 $e = 0$인데, $1 \ast 0 = 2 \ne 1$이라 $0$은 항등원이 아닙니다. 모든 정수 $a$에서 $0 \ast a = a$이지만, 항등원은 양쪽에서 모두 성립해야 합니다.
:::

:::check[$\{0, 1\}$은 정수의 곱셈에 대해 닫혀 있는가? 덧셈에 대해서는?]
곱셈에 대해서는 닫혀 있습니다. $0 \cdot 0 = 0$, $0 \cdot 1 = 0$, $1 \cdot 0 = 0$, $1 \cdot 1 = 1$이 모두 $\{0, 1\}$에 속합니다. 덧셈에 대해서는 닫혀 있지 않습니다. $1 + 1 = 2$이고 $2 \ne 0$, $2 \ne 1$이므로 $2 \notin \{0, 1\}$입니다.
:::
