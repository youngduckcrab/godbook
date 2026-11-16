---
title: 실숫값 함수의 공간과 ℝⁿ
title_en: Space of Real-Valued Functions and ℝⁿ
aliases: [함수공간, 실수 n-튜플의 공간, ℝ^X, 유클리드 공간, space of functions, real n-space, R^n]
kind: proposition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 집합 X에서 실수로의 함수 전체는 값마다 더하고 스칼라배하는 연산으로 벡터공간을 이루고, 특히 {1, …, n}에서의 함수의 공간을 ℝⁿ으로 쓴다. 실수 전체 ℝ도 자신의 덧셈과 곱셈으로 벡터공간이다.
requires: [set, cartesian-product, function, quantifiers, injective-surjective-bijective, finite-set, real-number-arithmetic, vector-space, vector-space-basic-properties]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 1절 1.1 Examples(ℝⁿ의 정의와 뒤따르는 Remark), p.3–4. 1.2 Matrix notation, p.4–5
    checked: original
    note: "출처는 ℝⁿ을 실수 성분 n개의 열(column)로 정의하고 덧셈과 스칼라배를 성분별로 정한 뒤(p.3), 성분별 연산이므로 공리가 스칼라에서 그대로 성립해 '공짜로' 벡터공간이 된다고 하며 그 이유는 'can you see why?'로 돌린다(p.3–4). 출처는 열의 정의나 같음을 따로 정하지 않고, 함수의 공간 ℝ^X는 나오지 않는다. 이 항목은 열을 함수 {1, …, n} → ℝ로 정의하고, 집합 X에 대한 ℝ^X가 벡터공간임을 (V1)–(V8) 하나씩 증명한다. 출처가 돌린 이유를 증명으로 채운 것이고, ℝ^X, '값으로 함수를 정하는 법 (G)', ℝⁿ의 (x₁, …, xₙ)이 함수를 가리키는 표기라는 약속, ℝ²과 ℝ × ℝ의 표기 구별과 둘 사이의 전단사는 출처에 없고 이 사이트가 정했다. 출처는 성분을 세로로 쓰고 (x₁, …, xₙ)ᵀ로 적는 약속을 두는데(1.2절), 전치는 이 강의에서 아직 쓰지 않으므로 이 항목은 ᵀ 없이 (x₁, …, xₙ)로 적는다. 출처의 ℂⁿ과 행렬의 공간 Mₘ×ₙ, 차수가 n 이하인 다항식의 공간 Pₙ은 이 항목에서 다루지 않는다. 예시와 반례와 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회 통과. 정수와 실수를 잇는 문구, 뒤 단원이 쓸 부호 규칙과 계산 법칙, 값으로 함수 정하기, 출처 메모를 보완했다."
added: 2026-11-16
---

:::statement
**값으로 함수 정하기 (G).** $X$, $Y$가 [[set]]이고 각 $x \in X$에 $Y$의 원소 $r(x)$가 하나씩 정해져 있으면, $\{(x, r(x)) : x \in X\}$는 $X$에서 $Y$로의 [[function|함수]]이고 $x$에서의 값이 $r(x)$이다. ($X = \emptyset$이면 이 집합은 공집합이다.)

$X$가 집합이라 하자. $\mathbb{R}^X$는 $X$에서 $\mathbb{R}$로의 함수(공역을 $\mathbb{R}$로 밝힌 것) 전체의 집합이다. ($X = \emptyset$이면 $\mathbb{R}^X$는 빈 함수 하나만을 원소로 갖는 집합이다.) $f$, $g \in \mathbb{R}^X$와 실수 $\alpha$에 대하여 $f + g$와 $\alpha f$는 다음 값을 갖는 $X$에서 $\mathbb{R}$로의 함수이다(이런 함수가 있다는 것은 (G)이고 하나뿐이라는 것은 아래 증명의 (E)이다).

$$(f + g)(x) = f(x) + g(x), \qquad (\alpha f)(x) = \alpha f(x) \qquad (x \in X)$$

**명제.** (1) 이 덧셈과 스칼라배에 대하여 $\mathbb{R}^X$는 [[vector-space|벡터공간]]이다. 영벡터는 모든 $x \in X$에서 값이 $0$인 함수 $o$이고, $f$의 덧셈 역원 $-f$는 $x$에서의 값이 $-f(x)$인 함수이다. (2) 실수 전체의 집합 $\mathbb{R}$도 실수의 합을 덧셈으로, 실수의 곱을 스칼라배로 하여 벡터공간이다.

**$\mathbb{R}^n$.** 이 강의에서 $\mathbb{R}^n$은 자연수 $n$에 대하여 언제나 $\mathbb{R}^{\{1, \dots, n\}}$, 곧 $\{1, \dots, n\}$에서 $\mathbb{R}$로의 함수의 집합을 뜻한다([[finite-set]]의 $\{1, \dots, n\}$. $n = 0$은 이 항목에서 다루지 않는다). 따라서 $\mathbb{R}^n$은 위 명제의 $X = \{1, \dots, n\}$인 경우이고 벡터공간이다. 실수 $x_1, \dots, x_n$에 대하여 $(x_1, \dots, x_n)$은 "$i$번째 값이 $x_i$인 함수", 곧 각 $i \in \{1, \dots, n\}$에서 값이 $x_i$인 함수를 가리키는 표기이다. 괄호 $(x_1, \dots, x_n)$이 $\mathbb{R}^n$의 원소로 쓰일 때는 이 함수를 가리킨다. $n = 2$일 때 괄호 $(a, b)$는 곱집합 $\mathbb{R} \times \mathbb{R}$의 원소인 순서쌍과 표기가 같다. $\mathbb{R}^2$의 원소로 쓰일 때는 함수를, $\mathbb{R} \times \mathbb{R}$의 원소로 쓰일 때는 순서쌍을 가리키며, 어느 집합의 원소인지 밝혀 쓴다. $\mathbb{R}^n$의 모든 원소 $x$는 $x_i = x(i)$로 두어 $(x_1, \dots, x_n)$으로 쓸 수 있고, 다음이 성립한다.

- $(x_1, \dots, x_n) = (y_1, \dots, y_n)$인 것은 정확히 모든 $i$에서 $x_i = y_i$일 때이다.
- $(x_1, \dots, x_n) + (y_1, \dots, y_n) = (x_1 + y_1, \dots, x_n + y_n)$이고 $\alpha(x_1, \dots, x_n) = (\alpha x_1, \dots, \alpha x_n)$이다.
- 영벡터는 $(0, \dots, 0)$이고 $-(x_1, \dots, x_n) = (-x_1, \dots, -x_n)$이다.

**$\mathbb{R}^2$와 $\mathbb{R} \times \mathbb{R}$.** [[cartesian-product|곱집합]]의 항목은 $A \times A$를 $A^2$으로도 쓴다고 했지만, 이 강의는 $\mathbb{R} \times \mathbb{R}$를 $\mathbb{R}^2$로 쓰지 않는다. $\mathbb{R}^2$는 언제나 $\{1, 2\}$에서 $\mathbb{R}$로의 함수의 집합이고, $\mathbb{R} \times \mathbb{R}$의 원소는 순서쌍이다. 순서쌍 $p = (a, b) \in \mathbb{R} \times \mathbb{R}$에 "$1$에서의 값이 $a$, $2$에서의 값이 $b$인 함수"를 짝짓는 대응을 $\varphi$라 하면 $\varphi : \mathbb{R} \times \mathbb{R} \to \mathbb{R}^2$는 [[injective-surjective-bijective|전단사]]이다.
:::

:::english
**Defining a function by its values (G).** Let $X$ and $Y$ be sets, and suppose that to each $x \in X$ an element $r(x)$ of $Y$ is assigned. Then $\{(x, r(x)) : x \in X\}$ is a function from $X$ to $Y$ whose value at $x$ is $r(x)$. (If $X = \emptyset$, this set is empty.)

Let $X$ be a set. $\mathbb{R}^X$ is the set of all functions from $X$ to $\mathbb{R}$ (with codomain declared to be $\mathbb{R}$). (If $X = \emptyset$, $\mathbb{R}^X$ is the set whose only element is the empty function.) For $f$, $g \in \mathbb{R}^X$ and a real number $\alpha$, $f + g$ and $\alpha f$ are the functions from $X$ to $\mathbb{R}$ with the following values (that such a function exists is (G), and that it is unique is (E) in the proof below).

$$(f + g)(x) = f(x) + g(x), \qquad (\alpha f)(x) = \alpha f(x) \qquad (x \in X)$$

**Proposition.** (1) With this addition and scalar multiplication, $\mathbb{R}^X$ is a vector space. Its zero vector is the function $o$ whose value is $0$ at every $x \in X$, and the additive inverse $-f$ of $f$ is the function whose value at $x$ is $-f(x)$. (2) The set $\mathbb{R}$ of real numbers is also a vector space, with the sum of real numbers as addition and the product of real numbers as scalar multiplication.

**$\mathbb{R}^n$.** In this course, for a natural number $n$, $\mathbb{R}^n$ always means $\mathbb{R}^{\{1, \dots, n\}}$, the set of functions from $\{1, \dots, n\}$ to $\mathbb{R}$ (with $\{1, \dots, n\}$ as in the entry on finite sets; the case $n = 0$ is not treated in this entry). So $\mathbb{R}^n$ is the case $X = \{1, \dots, n\}$ of the proposition, and it is a vector space. For real numbers $x_1, \dots, x_n$, the notation $(x_1, \dots, x_n)$ denotes "the function whose $i$th value is $x_i$", that is, the function whose value at each $i \in \{1, \dots, n\}$ is $x_i$. When the parenthesized $(x_1, \dots, x_n)$ is used as an element of $\mathbb{R}^n$ it denotes this function. For $n = 2$, the notation $(a, b)$ is the same as that of an ordered pair in $\mathbb{R} \times \mathbb{R}$: as an element of $\mathbb{R}^2$ it denotes the function, and as an element of $\mathbb{R} \times \mathbb{R}$ it denotes the ordered pair. We state which set the element belongs to. Every element $x$ of $\mathbb{R}^n$ can be written as $(x_1, \dots, x_n)$ with $x_i = x(i)$, and the following hold.

- $(x_1, \dots, x_n) = (y_1, \dots, y_n)$ exactly when $x_i = y_i$ for every $i$.
- $(x_1, \dots, x_n) + (y_1, \dots, y_n) = (x_1 + y_1, \dots, x_n + y_n)$ and $\alpha(x_1, \dots, x_n) = (\alpha x_1, \dots, \alpha x_n)$.
- The zero vector is $(0, \dots, 0)$ and $-(x_1, \dots, x_n) = (-x_1, \dots, -x_n)$.

**$\mathbb{R}^2$ and $\mathbb{R} \times \mathbb{R}$.** The entry on Cartesian products says that $A \times A$ is also written $A^2$, but in this course we do not write $\mathbb{R} \times \mathbb{R}$ as $\mathbb{R}^2$. $\mathbb{R}^2$ is always the set of functions from $\{1, 2\}$ to $\mathbb{R}$, while the elements of $\mathbb{R} \times \mathbb{R}$ are ordered pairs. Let $\varphi$ be the correspondence that assigns to an ordered pair $p = (a, b) \in \mathbb{R} \times \mathbb{R}$ the function whose value at $1$ is $a$ and whose value at $2$ is $b$. Then $\varphi : \mathbb{R} \times \mathbb{R} \to \mathbb{R}^2$ is a bijection.
:::

## 직관

시장에서 과일 세 가지의 가격표를 생각해 봅시다. 가격표는 "과일마다 실수 하나"를 정하는 것, 곧 과일의 집합에서 실수로의 함수입니다. 두 가게의 가격표를 더하거나 한 가게의 가격표에 일정한 수를 곱하는 것은 과일마다 따로 계산하는 일이고, 그렇게 만든 것도 가격표입니다. 이 항목의 연산이 바로 "값마다 계산하는" 연산입니다.

이렇게 정의하면 벡터공간의 여덟 법칙 하나하나가 각 값에서의 [[real-number-arithmetic|실수의 계산 법칙]]으로 바뀝니다. 영벡터와 덧셈 역원만은 값이 $0$, $-f(x)$인 함수를 직접 만들어야 합니다. $\mathbb{R}^n$은 정의역이 $\{1, \dots, n\}$인 경우이고, 함수를 "$1$번째 값, $2$번째 값, …"의 목록으로 적은 것이 $(x_1, \dots, x_n)$입니다.

비유가 어긋나는 곳이 있습니다. 가격표의 정의역은 과일의 집합이지만 $\mathbb{R}^n$의 정의역 $\{1, \dots, n\}$은 자리 번호의 집합일 뿐이고, 번호에는 순서 말고 의미가 없습니다. 또 순서쌍을 쓰는 곱집합 $\mathbb{R} \times \mathbb{R}$과 $\mathbb{R}^2$은 표기가 비슷하지만, 이 강의에서 $\mathbb{R}^2$의 원소는 함수로, $\mathbb{R} \times \mathbb{R}$의 원소는 순서쌍으로 읽습니다. 둘 사이에는 순서쌍 $(a, b)$에 "1에서 $a$, 2에서 $b$"인 함수를 짝짓는 대응이 있고, 그것이 전단사라는 것이 마지막에 증명됩니다. 전단사가 있으므로 원소를 하나씩 짝지을 수 있지만, 이 강의는 $\mathbb{R}^2$를 언제나 함수의 집합으로 읽습니다.

## 증명

:::idea
함수는 값으로 정해지므로 모든 법칙을 "각 $x$에서 값이 같다"로 바꿔 [[real-number-arithmetic|실수의 법칙]]에 맡긴다. 영벡터와 덧셈 역원은 값이 $0$, $-f(x)$인 함수로 직접 잡는다. $\mathbb{R}^2$와 $\mathbb{R} \times \mathbb{R}$의 대응은 값을 읽어 순서쌍을 되살리는 방식으로 단사와 전사를 보인다.
:::

:::hint
두 함수가 같음을 보이려면 정의역이 같은지 보고, 모든 $x$에서 값이 같은지를 보면 됩니다. 법칙 하나마다 양변의 $x$에서의 값을 계산해 보세요.
:::

:::hint
$\mathbb{R}^X$의 영벡터가 $o$뿐인지는 영벡터 $z$에 대하여 $o + z$와 $z + o$를 두 가지로 읽으면 됩니다.
:::

:::proof
**(E) 함수의 같음.** $f$, $g$가 모두 $X$에서 $\mathbb{R}$로의 함수일 때, $f = g$인 것은 정확히 모든 $x \in X$에서 $f(x) = g(x)$일 때이다. ([[function]]의 "함수의 같음"에 의해, 두 함수는 정의역이 $X$로 같다.)

**(G)의 증명.** $F = \{(x, r(x)) : x \in X\}$라 하자. $r(x) \in Y$이므로 $F \subseteq X \times Y$이다. (존재) $a \in X$이면 $(a, r(a)) \in F$이다. (유일) $(a, b)$, $(a, b') \in F$라 하자. $F$의 정의에 의해 $(a, b) = (x, r(x))$인 $x \in X$가 있고, 순서쌍이 같을 조건([[cartesian-product]])에 의해 $a = x$, $b = r(x) = r(a)$이다. $(a, b') \in F$이므로 같은 이유로 $(a, b') = (x', r(x'))$인 $x' \in X$가 있고 $a = x'$, $b' = r(x') = r(a)$이다. 그러므로 $b = b'$이다. 따라서 $F$는 함수이고 $(a, r(a)) \in F$는 $F(a) = r(a)$이다.

**$X = \emptyset$인 경우.** 순서쌍의 첫째 성분이 $\emptyset$의 원소여야 하므로 $\emptyset \times \mathbb{R}$에는 원소가 없고, 그 부분집합은 $\emptyset$뿐이다. [[function]]의 정의에서 두 조건은 "$\emptyset$의 모든 원소 $a$에 대하여"라는 전칭 명제로 요구된다. [[quantifiers]]의 진술에 의해 전칭 명제는 조건이 거짓인 원소가 하나라도 있을 때만 거짓인데, $\emptyset$에는 원소가 없으므로 참이다. 따라서 $\emptyset$은 $\emptyset$에서 $\mathbb{R}$로의 함수이고 유일한 함수이므로 $\mathbb{R}^\emptyset = \{\emptyset\}$이다.

**연산이 정의되어 있음.** $f$, $g \in \mathbb{R}^X$, $\alpha \in \mathbb{R}$이면 각 $x$에서 실수 $f(x) + g(x)$, $\alpha f(x)$가 하나로 정해지므로 (G)에서 $Y = \mathbb{R}$로 두면 $f + g$, $\alpha f \in \mathbb{R}^X$가 있고, (E)에 의해 값이 같은 두 함수는 같으므로 이 함수는 하나뿐이다. 따라서 $(f, g) \in \mathbb{R}^X \times \mathbb{R}^X$마다 $\mathbb{R}^X$의 원소 $f + g$가 하나씩 정해지고, (G)에서 $X$ 자리에 $\mathbb{R}^X \times \mathbb{R}^X$, $Y = \mathbb{R}^X$로 두면 $+ : \mathbb{R}^X \times \mathbb{R}^X \to \mathbb{R}^X$는 함수이다. 같은 방법으로 $\cdot : \mathbb{R} \times \mathbb{R}^X \to \mathbb{R}^X$도 함수이다.

**(V1)–(V8).** $f$, $g$, $h \in \mathbb{R}^X$, $\alpha$, $\beta \in \mathbb{R}$이라 하자. 각 법칙에서 양변은 $X$에서 $\mathbb{R}$로의 함수이므로, (E)에 의해 모든 $x \in X$에서 양변의 값이 같음을 보이면 된다. $x \in X$를 하나 잡는다. 계산 끝에 연산의 정의를 되돌리는 단계는 "정의"로 적는다.

- (V1) $(f + g)(x) = f(x) + g(x) = g(x) + f(x) = (g + f)(x)$. 차례로 정의, (K1), 정의.
- (V2) $((f + g) + h)(x) = (f(x) + g(x)) + h(x) = f(x) + (g(x) + h(x)) = (f + (g + h))(x)$. 차례로 정의, (K2), 정의.
- (V3) $(f + o)(x) = f(x) + o(x) = f(x) + 0 = f(x)$이다. 차례로 정의, $o(x) = 0$, (K4). (E)에 의해 $f + o = f$이므로 $o$는 영벡터이고 영벡터가 있다. ($o$는 (G)에서 모든 $x$에 $r(x) = 0$으로 정한 함수이다.)
- (V4) $z$를 $\mathbb{R}^X$의 영벡터라 하자. $o$와 $z$가 모두 영벡터이므로 $o + z = o$이고 $z + o = z$이다. (V1)에 의해 $o + z = z + o$이므로 $z = o$이다. 곧 영벡터는 $o$뿐이다. $f \in \mathbb{R}^X$일 때 (G)에서 $r(x) = -f(x)$로 정한 함수를 $-f$라 하면 $(f + (-f))(x) = f(x) + (-f(x)) = 0 = o(x)$이다. 차례로 정의, (K8)의 (ii)($-f(x)$의 뜻), $o$의 뜻. (E)에 의해 $f + (-f) = o = z$이다. 따라서 $w = -f$로 잡으면 $f + w = z$이다.
- (V5) $(1f)(x) = 1f(x) = f(x)$이다. 차례로 정의, (K1)과 (K4). (E)에 의해 $1f = f$.
- (V6) $((\alpha\beta)f)(x) = (\alpha\beta)f(x) = \alpha(\beta f(x)) = \alpha((\beta f)(x)) = (\alpha(\beta f))(x)$. 차례로 정의, (K2), 정의, 정의.
- (V7) $(\alpha(f + g))(x) = \alpha(f(x) + g(x)) = \alpha f(x) + \alpha g(x) = (\alpha f)(x) + (\alpha g)(x) = (\alpha f + \alpha g)(x)$. 차례로 정의, (K3), 정의, 정의.
- (V8) $((\alpha + \beta)f)(x) = (\alpha + \beta)f(x) = f(x)(\alpha + \beta) = f(x)\alpha + f(x)\beta = \alpha f(x) + \beta f(x) = (\alpha f)(x) + (\beta f)(x) = (\alpha f + \beta f)(x)$. 차례로 정의, (K1), (K3), (K1), 정의, 정의.

따라서 $\mathbb{R}^X$는 벡터공간이다. (V4)에서 영벡터가 $o$뿐임을 보았고, $f + (-f) = o$이므로 [[vector-space-basic-properties]]의 (B2)에 의해 $-f$는 벡터공간 $\mathbb{R}^X$에서 $f$의 덧셈 역원이다. 이것으로 명제의 (1)이 증명되었다.

**명제의 (2).** $\mathbb{R}$의 덧셈과 스칼라배는 $\mathbb{R} \times \mathbb{R}$에서 $\mathbb{R}$로의 함수이다([[real-number-arithmetic]]). $u$, $v$, $w$, $\alpha$, $\beta$를 실수라 하면 (V1)은 (K1), (V2)는 (K2)이다. (V3): (K4)에 의해 $0$은 영벡터이다. (V4): $z$가 영벡터이면 모든 실수 $v$에서 $v + z = v$이므로 (K8)의 (i)에 의해 $z = 0$이고, $w = -v$로 잡으면 (K8)의 (ii)에 의해 $v + w = 0 = z$이다. (V5): $1v = v1 = v$이다((K1), (K4)). (V6)은 (K2), (V7)은 (K3)이다. (V8): $(\alpha + \beta)v = v(\alpha + \beta) = v\alpha + v\beta = \alpha v + \beta v$이다. 차례로 (K1), (K3), (K1)에 의한다.

**$\mathbb{R}^n$.** $\mathbb{R}^n$은 위 명제의 $X = \{1, \dots, n\}$인 경우이므로 벡터공간이다. 실수 $x_1, \dots, x_n$에 대하여 (G)에서 $Y = \mathbb{R}$, $r(i) = x_i$로 정한 함수가 $(x_1, \dots, x_n)$이므로 $i$에서의 값은 $x_i$이다. $x \in \mathbb{R}^n$이면 $(x(1), \dots, x(n))$과 $x$는 모든 $i$에서 값이 같으므로 (E)에 의해 같다. 따라서 모든 원소는 $(x_1, \dots, x_n)$($x_i = x(i)$)으로 쓰인다. 첫째 항목: $(x_1, \dots, x_n)$과 $(y_1, \dots, y_n)$의 $i$에서의 값은 $x_i$, $y_i$이므로 (E)에 의해 두 함수가 같은 것은 모든 $i$에서 $x_i = y_i$일 때이다. 둘째 항목: $(x_1, \dots, x_n) + (y_1, \dots, y_n)$의 $i$에서의 값은 정의에 의해 $x_i + y_i$이고, $(x_1 + y_1, \dots, x_n + y_n)$의 $i$에서의 값도 $x_i + y_i$이므로 (E)에 의해 같다. $\alpha(x_1, \dots, x_n)$도 $i$에서의 값 $\alpha x_i$로 같은 방식으로 $(\alpha x_1, \dots, \alpha x_n)$과 같다. 셋째 항목: $o$는 모든 $i$에서 값이 $0$이므로 (E)에 의해 $(0, \dots, 0)$과 같고, $-(x_1, \dots, x_n)$은 $i$에서의 값이 $-x_i$이므로 (E)에 의해 $(-x_1, \dots, -x_n)$과 같다.

**$\mathbb{R}^2$와 $\mathbb{R} \times \mathbb{R}$.** [[finite-set]]의 (F1)에 의해 $\{1, \dots, 1\} = \{1, \dots, 0\} \cup \{1\} = \emptyset \cup \{1\} = \{1\}$이고 $\{1, \dots, 2\} = \{1, \dots, 1\} \cup \{2\} = \{1, 2\}$이다. 따라서 $\{1, \dots, 2\}$의 원소는 $1$이거나 $2$이고, $1 \ne 2$이다((K7)의 구체적인 계산). 순서쌍 $p = (a, b) \in \mathbb{R} \times \mathbb{R}$에 대하여 $\varphi(p)$를 (G)에서 $Y = \mathbb{R}$, $r(1) = a$, $r(2) = b$로 정한 함수라 하자. $\{1, 2\}$의 각 원소가 $1$이거나 $2$이고 둘이 다르므로 $r$는 잘 정해지고, $\varphi(p) \in \mathbb{R}^2$이다. 순서쌍은 성분이 하나로 정해지므로 $\varphi$는 $\mathbb{R} \times \mathbb{R}$에서 $\mathbb{R}^2$로의 함수이다. 단사: $p = (a, b)$, $p' = (a', b')$이고 $\varphi(p) = \varphi(p')$이면 $1$에서의 값이 같아 $a = a'$이고 $2$에서의 값이 같아 $b = b'$이므로 $p = p'$이다. 전사: $x \in \mathbb{R}^2$이면 첫째 성분이 $x(1)$, 둘째 성분이 $x(2)$인 순서쌍 $q \in \mathbb{R} \times \mathbb{R}$이 있고, $\varphi(q)$와 $x$는 $1$과 $2$에서 값이 같으며 정의역의 원소는 $1$이거나 $2$이므로 (E)에 의해 $\varphi(q) = x$이다. 따라서 $\varphi$는 전단사이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³의 계산]
$\mathbb{R}^3$에서 $x = (1, 2, 3)$, $y = (4, -1, 0)$이라 합시다. 값마다 계산하면 $x + y = (1 + 4, 2 + (-1), 3 + 0) = (5, 1, 3)$이고 $2x = (2 \cdot 1, 2 \cdot 2, 2 \cdot 3) = (2, 4, 6)$이며 $-x = (-1, -2, -3)$입니다. $x + (-x) = (1 + (-1), 2 + (-2), 3 + (-3)) = (0, 0, 0)$이고 이것이 영벡터입니다. 값은 모두 (K7)의 구체적인 계산입니다.
:::

:::example[가격표의 공간]
$X = \{\text{사과}, \text{배}\}$라 하고 $f$는 사과에 $3$, 배에 $5$를, $g$는 사과에 $2$, 배에 $4$를 대응시키는 함수라 합시다. $f + g$는 사과에 $5$, 배에 $9$를 대응시키고, $(-2)f$는 사과에 $-6$, 배에 $-10$을 대응시킵니다. 영벡터는 두 과일에 모두 $0$을 대응시키는 함수이고, $\mathbb{R}^X$의 원소는 이런 가격표 전체입니다. 정의역이 수가 아니어도 같은 증명이 적용됩니다.
:::

:::counterexample[첫 성분이 1인 벡터만 모으면 벡터공간이 아니다]
$\mathbb{R}^3$의 원소 가운데 첫째 값이 $1$인 것만 모은 집합을 $S$라 하고, $\mathbb{R}^3$의 연산을 그대로 쓰려 합니다. $e = (1, 0, 0) \in S$이고 $e + e = (1 + 1, 0 + 0, 0 + 0) = (2, 0, 0)$인데 첫째 값 $2$는 $1$이 아니므로 $e + e \notin S$입니다. 곧 $\mathbb{R}^3$의 덧셈이 $S \times S$에서 $S$로의 함수가 되지 못해서 $S$는 $\mathbb{R}^3$의 연산으로는 벡터공간이 아닙니다. 영벡터 $(0, 0, 0)$도 $S$에 없습니다. 값마다 계산하는 연산이라고 해서 $\mathbb{R}^X$의 아무 부분집합이나 벡터공간이 되는 것은 아닙니다.
:::

## 확인 질문

:::check[$\mathbb{R}^2$에서 $2(3, -1) + (2, 5)$를 값마다 계산하라.]
$2(3, -1) = (2 \cdot 3, 2 \cdot (-1)) = (6, -2)$이고 $(6, -2) + (2, 5) = (6 + 2, (-2) + 5) = (8, 3)$입니다. 따라서 $2(3, -1) + (2, 5) = (8, 3)$입니다.
:::

:::check[$X = \{1, 2, 3\}$이고 $f$가 모든 $x \in X$에서 값이 $1$인 함수일 때, $f + f$와 $2f$는 같은 함수인가?]
같습니다. 둘 다 $X$에서 $\mathbb{R}$로의 함수이고 모든 $x$에서 $(f + f)(x) = 1 + 1 = 2$, $(2f)(x) = 2 \cdot 1 = 2$로 값이 같으므로 함수의 같음에 의해 $f + f = 2f$입니다. ((K4)와 (K7)의 계산.)
:::
