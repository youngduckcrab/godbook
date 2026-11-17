---
title: 실함수와 그 연산
title_en: Real-Valued Functions and Their Operations
aliases: [실함수, 상수함수, 항등함수, 함수의 합, 함수의 곱, 함수의 몫, real-valued function, constant function, sum of functions, product of functions, quotient of functions]
kind: definition
field: real-analysis
msc: ["26A03"]
level: undergrad
summary: ℝ 의 부분집합 S 에서 ℝ 로의 함수를 S 위의 실함수라 하고, 식이나 경우 나누기로 함수를 정하는 법, 상수함수와 항등함수, 두 실함수의 합·차·곱, 상수배, 절댓값, 그리고 분모가 0 이 아닌 점들의 집합 위에서의 몫을 정의한다.
requires: [set, subset, set-operations, function, inverse-function, adding-or-removing-an-element, recursion-theorem, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval]
sources:
  - ref: lebl-basic-analysis
    loc: 0.3절 Definition 0.3.11 (p.14); 1.3절 연습문제 1.3.8, 1.3.9 (p.40); 3.1절 Corollary 3.1.10 앞 문단 (p.117), Corollary 3.1.12 (p.118), Definition 3.1.14 (p.118); 3.2절 Proposition 3.2.5 (p.124)
    checked: original
    note: "출처의 Definition 0.3.11(p.14)은 함수 f : A → B 를 A × B 의 부분집합으로 정의하고, 같은 쪽에서 함수의 정의역이 대개 공집합이 아니라고 가정한다고 적는다. 출처는 3장에서 S ⊂ ℝ 와 f : S → ℝ 를 이름 없이 쓰며, 이 항목의 '실함수'라는 이름은 3장에 나오지 않는다(3장을 검색한 범위). 출처는 함수를 f(x) := x² 같은 식이나 경우 나누기로 정하고 그것이 함수임을 따로 정당화하지 않는다. 이 항목은 (1)을 recursion-theorem 의 (1)로 정당화한다. 상수함수는 출처가 Corollary 3.1.10 앞 문단(p.117)에서 'constant functions 를 적용하면'이라고 쓰고, 합과 상수배는 출처가 연습문제 1.3.8(p.40)에서 공집합이 아닌 D 위의 함수에 대해 (f + g)(x) := f(x) + g(x), (αf)(x) := αf(x) 로 정의하고 연습문제 1.3.9(p.40)에서 그 뜻을 다시 쓴다. 차·곱·몫은 출처가 Corollary 3.1.12(p.118)에서 f(x) + g(x) 등의 극한으로, Proposition 3.2.5(p.124)에서 'h(x) := f(x) + g(x) 로 정한 h : S → ℝ' 꼴로 그때그때 쓴다. 출처의 Corollary 3.1.12 (iv)는 S \\ {c} 의 모든 x 에서 g(x) ≠ 0 이라고 가정하고 f(x)/g(x) 의 극한을 말하며, Proposition 3.2.5 (iv)는 S 의 모든 x 에서 g(x) ≠ 0 일 때 h(x) := f(x)/g(x) 로 정한 h : S → ℝ 를 말한다. 이 항목은 몫 f/g 를 언제나 g 가 0 이 아닌 점들의 집합 위의 함수로 정한다. 제한은 출처의 Definition 3.1.14(p.118)이고 이 사이트에서는 adding-or-removing-an-element 의 진술에서 이미 정의했다. (6)의 제한과 연산의 관계는 출처에 없다(검색한 범위). 예시, 반례, 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
집합, 부분집합, 함수와 함수의 같음은 [[set]], [[subset]], [[function]]의 것이고, 덧셈, 곱셈, $-a$, $a^{-1}$, 뺄셈, 나눗셈은 [[real-number-arithmetic]]의 것이며, 절댓값은 [[absolute-value]]의 것이다. 아래에서 $S$는 $\mathbb{R}$의 부분집합이다.

**실함수.** $S$에서 $\mathbb{R}$로의 함수 $f : S \to \mathbb{R}$를 $S$ 위의 **실함수**(real-valued function)라 한다. [[function]]의 진술에 의해 $S$의 각 원소 $x$에서 $f$의 값 $f(x)$는 실수 하나로 정해진다.

다음이 성립한다. 아래에서 $f$, $g$는 $S$ 위의 실함수이고 $k$는 실수이다.

1. (값으로 정한 함수) $S$의 각 원소 $x$마다 실수 $r(x)$가 하나씩 정해져 있으면, 집합 $\{(x, r(x)) : x \in S\}$는 $S$ 위의 실함수이고 $x$에서의 값은 $r(x)$이다. 이 함수를 "$f(x) = r(x)$로 정한 함수 $f : S \to \mathbb{R}$"라 한다. 여기서 "정해져 있다"는 [[recursion-theorem]]의 (1)의 뜻, 곧 $r(x)$가 $x$에 대한 식이나 이미 정해진 대상으로 주어진다는 뜻이다. 경우를 나누어 정할 때(예: $0 \le x$이면 $r(x) = x$, $x < 0$이면 $r(x) = 0$)는 $S$의 각 원소 $x$가 정확히 한 경우에 든다는 것이 확인되어 있어야 하고, 그러면 $r(x)$는 그 경우의 식으로 정해진다. 각 $x$마다 어떤 조건을 만족하는 여러 수 가운데 하나를 고르는 것은 이 진술에 들어가지 않는다.
2. (같음) $f = g$인 것은 정확히 모든 $x \in S$에서 $f(x) = g(x)$일 때이다.
3. (상수함수와 항등함수) $f(x) = k$로 정한 함수 $f : S \to \mathbb{R}$를 $S$ 위의 값이 $k$인 **상수함수**(constant function)라 한다. [[inverse-function]]에서 정의한 $S$ 위의 항등함수 $i_S = \{(x, x) : x \in S\}$는 $S$ 위의 실함수이기도 하고, 모든 $x \in S$에서 $i_S(x) = x$이다.
4. (합, 차, 곱, 상수배, 절댓값) 다음 함수들을 (1)로 정한다. 각각은 $S$ 위의 실함수이다.
   - $f + g$: $(f + g)(x) = f(x) + g(x)$, $\quad f - g$: $(f - g)(x) = f(x) - g(x)$,
   - $fg$: $(fg)(x) = f(x)\,g(x)$, $\quad kf$: $(kf)(x) = k\,f(x)$, $\quad |f|$: $|f|(x) = |f(x)|$.

   함수에 붙은 막대 $|f|$는 함수의 절댓값, 곧 $x$에서의 값이 $|f(x)|$인 함수이고, 집합으로서의 $f$의 원소의 개수가 아니다.
5. (몫) $Z = \{x \in S : g(x) \ne 0\}$로 두자. 몫 $f/g$는 $(f/g)(x) = f(x)/g(x)$로 정한 함수 $f/g : Z \to \mathbb{R}$이고, $1/g$는 $(1/g)(x) = g(x)^{-1}$로 정한 함수 $1/g : Z \to \mathbb{R}$이다. 곧 $f/g$의 정의역은 $S$가 아니라 $g$가 $0$이 아닌 점들의 집합 $Z$이고, $Z \subseteq S$이다. $S$의 모든 원소 $x$에서 $g(x) \ne 0$이면 $Z = S$이다.
6. (제한과 연산) $A \subseteq S$이면 제한 $f|_A$([[adding-or-removing-an-element]]의 진술)는 $A$ 위의 실함수이고 모든 $x \in A$에서 $f|_A(x) = f(x)$이다. 또
   $$
   (f + g)|_A = f|_A + g|_A, \quad (f - g)|_A = f|_A - g|_A, \quad (fg)|_A = f|_A\,g|_A, \quad (kf)|_A = k\,(f|_A)
   $$
   이다.
:::

:::english
Sets, subsets, functions and equality of functions are those of the entries on sets, subsets and functions; addition, multiplication, $-a$, $a^{-1}$, subtraction and division are those of the entry on real arithmetic; and the absolute value is that of the entry on absolute value. Below, $S$ is a subset of $\mathbb{R}$.

**Real-valued functions.** A function $f : S \to \mathbb{R}$ from $S$ to $\mathbb{R}$ is called a **real-valued function** on $S$. By the entry on functions, for each element $x$ of $S$ the value $f(x)$ of $f$ is determined as a single real number.

The following hold. Below, $f$ and $g$ are real-valued functions on $S$ and $k$ is a real number.

1. (Functions given by values) If for each element $x$ of $S$ a single real number $r(x)$ is determined, then the set $\{(x, r(x)) : x \in S\}$ is a real-valued function on $S$ whose value at $x$ is $r(x)$. This function is called "the function $f : S \to \mathbb{R}$ defined by $f(x) = r(x)$". Here "determined" is meant as in item (1) of the recursion theorem, that is, $r(x)$ is given by a formula in $x$ or by an already determined object. When the definition is by cases (for example, $r(x) = x$ if $0 \le x$ and $r(x) = 0$ if $x < 0$), it must be established that each element $x$ of $S$ falls under exactly one case, and then $r(x)$ is given by the formula of that case. Choosing, for each $x$, one of several numbers satisfying some condition is not covered by this statement.
2. (Equality) $f = g$ exactly when $f(x) = g(x)$ for all $x \in S$.
3. (Constant functions and the identity function) The function $f : S \to \mathbb{R}$ defined by $f(x) = k$ is called the **constant function** on $S$ with value $k$. The identity function $i_S = \{(x, x) : x \in S\}$ on $S$, defined in the entry on inverse functions, is also a real-valued function on $S$, and $i_S(x) = x$ for all $x \in S$.
4. (Sum, difference, product, scalar multiple, absolute value) The following functions are defined by (1). Each is a real-valued function on $S$.
   - $f + g$: $(f + g)(x) = f(x) + g(x)$, $\quad f - g$: $(f - g)(x) = f(x) - g(x)$,
   - $fg$: $(fg)(x) = f(x)\,g(x)$, $\quad kf$: $(kf)(x) = k\,f(x)$, $\quad |f|$: $|f|(x) = |f(x)|$.

   The bars in $|f|$ attached to a function denote the absolute value of the function, that is, the function whose value at $x$ is $|f(x)|$; they do not denote the number of elements of $f$ as a set.
5. (Quotient) Let $Z = \{x \in S : g(x) \ne 0\}$. The quotient $f/g$ is the function $f/g : Z \to \mathbb{R}$ defined by $(f/g)(x) = f(x)/g(x)$, and $1/g$ is the function $1/g : Z \to \mathbb{R}$ defined by $(1/g)(x) = g(x)^{-1}$. That is, the domain of $f/g$ is not $S$ but the set $Z$ of points where $g$ is not $0$, and $Z \subseteq S$. If $g(x) \ne 0$ for every element $x$ of $S$, then $Z = S$.
6. (Restrictions and operations) If $A \subseteq S$, the restriction $f|_A$ (from the entry on adding or removing an element) is a real-valued function on $A$, and $f|_A(x) = f(x)$ for all $x \in A$. Moreover,
   $$
   (f + g)|_A = f|_A + g|_A, \quad (f - g)|_A = f|_A - g|_A, \quad (fg)|_A = f|_A\,g|_A, \quad (kf)|_A = k\,(f|_A).
   $$
:::

## 직관

함수는 순서쌍의 집합이므로, "$f(x) = x \cdot x$로 정한다"고 말하는 것은 사실 "순서쌍 $(x, x \cdot x)$를 모두 모은 집합을 $f$라 한다"는 뜻입니다. (1)은 이렇게 값을 하나씩 정하면 정말 함수가 된다는 것을 말합니다. 요리법에 비유하면, 재료($x$)마다 무엇을 만들지가 하나의 조리법(식)으로 정해져 있으면 차림표(함수)가 완성됩니다. 비유가 맞는 곳은 "재료마다 결과가 하나"라는 점이고, 맞지 않는 곳은 함수가 결과를 만드는 과정이 아니라 재료와 결과의 짝을 모은 집합이라는 점입니다.

경우를 나누어 정할 때는 모든 $x$가 정확히 한 경우에 들어야 합니다. 어떤 $x$가 두 경우에 다 들고 두 식의 값이 다르면 값이 하나로 정해지지 않고, 어느 경우에도 들지 않으면 값이 없습니다.

함수의 합, 곱 같은 연산은 값마다 계산합니다. 몫만은 주의가 필요합니다. $g$가 $0$이 되는 점에서는 $f(x)/g(x)$가 정해지지 않으므로, 이 사이트는 $f/g$를 처음부터 $g$가 $0$이 아닌 점들의 집합 $Z$ 위의 함수로 정합니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다.

**1의 증명.** [[recursion-theorem]]의 (1)을 $A = S$, $B = \mathbb{R}$로 쓰면 $\{(x, r(x)) : x \in S\}$는 $S$에서 $\mathbb{R}$로의 함수이고 $x$에서의 값은 $r(x)$이다. 경우를 나누어 정할 때 $r(x)$는 "($x$가 첫째 경우에 들고 $y$가 첫째 식의 값) 또는 ($x$가 둘째 경우에 들고 $y$가 둘째 식의 값)"을 만족하는 실수 $y$이고, $x$가 정확히 한 경우에 들므로 그런 $y$는 정확히 하나이다. 따라서 $r(x)$는 [[recursion-theorem]]의 (1)의 "이미 정해진 대상"에 든다. 예의 경우 나눔에서는 [[order-properties-of-reals]]의 (1)의 (iii)에 의해 모든 실수 $x$가 $0 \le x$와 $x < 0$ 가운데 정확히 하나를 만족한다.

**2의 증명.** $f$와 $g$는 정의역이 $S$로 같은 두 함수이므로 [[function]]의 함수의 같음에 의해 그렇다.

**3의 증명.** 상수함수는 (1)에서 $r(x) = k$로 둔 것이다. $i_S$는 [[inverse-function]]의 진술에 의해 $S$에서 $S$로의 함수이고 $i_S(x) = x$이다. 모든 $x \in S$에서 $i_S(x) = x$는 $S \subseteq \mathbb{R}$의 원소이므로 실수이고, [[function]]의 "공역은 선언하기 나름이다"에 의해 같은 집합 $i_S$는 $S$에서 $\mathbb{R}$로의 함수이기도 하다.

**4의 증명.** $x \in S$이면 $f(x)$, $g(x)$는 이미 정해진 실수이므로, $f(x) + g(x)$, $f(x) - g(x)$, $f(x)\,g(x)$, $k\,f(x)$, $|f(x)|$는 각각 $x$에 대한 식으로 정해지는 실수이다(뺄셈은 (K8)의 (ii)로 정해진 $-g(x)$를 더한 것이고, 절댓값은 [[absolute-value]]의 진술에 의해 실수 하나로 정해진다). 따라서 (1)에 의해 다섯 함수는 모두 $S$ 위의 실함수이다.

**5의 증명.** $Z$는 $S$의 원소 가운데 조건을 만족하는 것을 모은 집합이므로 $Z \subseteq S$이다. $x \in Z$이면 $g(x) \ne 0$이므로 (K8)의 (iii)에 의해 $g(x)^{-1}$이 실수 하나로 정해지고, $f(x)/g(x) = f(x)\,g(x)^{-1}$도 그렇다. 따라서 (1)을 $S$ 대신 $Z$에 쓰면 $f/g$와 $1/g$는 $Z$에서 $\mathbb{R}$로의 함수이다. $S$의 모든 원소 $x$에서 $g(x) \ne 0$이면 $S$의 모든 원소가 $Z$에 속하므로 $S \subseteq Z$이고, $Z \subseteq S$와 함께 $Z = S$이다.

**6의 증명.** [[adding-or-removing-an-element]]의 진술에 의해 $f|_A$는 $A$에서 $\mathbb{R}$로의 함수이고 모든 $x \in A$에서 $f|_A(x) = f(x)$이다. $x \in A$이면 (4)의 정의와 이 사실에 의해
$$
(f + g)|_A(x) = (f + g)(x) = f(x) + g(x) = f|_A(x) + g|_A(x) = (f|_A + g|_A)(x)
$$
이다. 두 함수 $(f + g)|_A$와 $f|_A + g|_A$는 정의역이 $A$로 같으므로 (2)를 $S$ 대신 $A$에 쓰면 둘은 같다. 차, 곱, 상수배도 위 식에서 $+$를 각각 $-$, 곱, $k$를 곱하는 것으로 바꾼 같은 계산으로 같다. 예컨대 곱은 $(fg)|_A(x) = (fg)(x) = f(x)\,g(x) = f|_A(x)\,g|_A(x) = (f|_A\,g|_A)(x)$이고, 상수배는 $(kf)|_A(x) = (kf)(x) = k\,f(x) = k\,f|_A(x) = (k\,(f|_A))(x)$이다. $\blacksquare$
:::

## 예시와 반례

:::example[경우로 정한 함수를 연산으로 다시 쓰기]
$h(x) = x$ ($0 \le x$일 때), $h(x) = 0$ ($x < 0$일 때)로 정한 함수 $h : \mathbb{R} \to \mathbb{R}$를 생각합니다. 모든 실수는 두 경우 가운데 정확히 하나에 들므로 (1)에 의해 $h$는 실함수입니다. 이제 $i = i_{\mathbb{R}}$로 두고 $u = 2^{-1}(i + |i|)$를 (3), (4)로 정합니다. $u(x) = 2^{-1}(x + |x|)$입니다.

- $0 \le x$이면 [[absolute-value|절댓값]]의 (1)에 의해 $|x| = x$이므로 $u(x) = 2^{-1}(x + x) = 2^{-1} \cdot 2 \cdot x = x = h(x)$입니다((K1), (K2), (K3), (K4), (K7)의 $1 + 1 = 2$, (K8)의 (iii)).
- $x < 0$이면 $|x| = -x$이므로 $u(x) = 2^{-1}(x + (-x)) = 2^{-1} \cdot 0 = 0 = h(x)$입니다((K8)의 (ii), (K9)).

모든 $x$에서 값이 같으므로 (2)에 의해 $u = h$입니다. 경우로 정한 함수와 연산으로 만든 함수가 같은 집합이라는 것을 값을 비교해 확인했습니다.
:::

:::counterexample[몫은 원래 정의역 위의 함수가 아니다]
$i = i_{\mathbb{R}}$에 대하여 몫 $i/i$를 생각합니다. (5)의 $Z$는 $\{x \in \mathbb{R} : x \ne 0\} = \mathbb{R} - \{0\}$이고, $x \in Z$에서 $(i/i)(x) = x\,x^{-1} = 1$입니다. 그래서 $i/i$는 $\mathbb{R} - \{0\}$ 위의 값이 $1$인 상수함수입니다. 그러나 $\mathbb{R}$ 위의 값이 $1$인 상수함수와는 같지 않습니다. 앞의 것은 $0$을 정의역에 포함하지 않으므로, [[function]]의 함수의 같음에서 정의역이 다른 두 함수는 같은 집합이 아니기 때문입니다. "$x/x = 1$"을 모든 실수에서의 등식으로 읽으면 이 차이를 놓칩니다.
:::

## 확인 질문

:::check[$S = \{x \in \mathbb{R} : 0 \le x \le 1\}$로 두고, $f(x) = 1$, $g(x) = 2x - 1$로 정한 $S$ 위의 실함수 $f$, $g$를 생각한다. $f/g$의 정의역은 무엇인가?]
$S = [0, 1]$입니다. $g(x) = 0$인 것은 정확히 $2x = 1$, 곧 $x = 2^{-1}$일 때입니다((K12)의 (v), (K7)의 $2 \ne 0$, (K8)의 (iii), (K11)). [[order-properties-of-reals]]의 (8)에 의해 $0 < 2^{-1} < 1$이므로 $2^{-1} \in S$이고, 정의역은 $Z = [0, 1] - \{2^{-1}\}$입니다. $0$과 $1$은 $Z$의 원소이고 그 사이의 $2^{-1}$은 $Z$에 속하지 않으므로, $Z$는 [[interval|구간]]이 아닙니다.
:::

:::check[$f$, $g$가 $S$ 위의 실함수일 때 $(f + g) - g = f$인가?]
그렇습니다. 두 함수의 정의역은 모두 $S$이고, $x \in S$에서 $((f + g) - g)(x) = (f(x) + g(x)) - g(x) = f(x) + (g(x) - g(x)) = f(x) + 0 = f(x)$입니다((K2), (K8)의 (ii), (K4)). (2)에 의해 두 함수는 같습니다.
:::
