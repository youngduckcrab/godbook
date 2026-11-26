---
written_by: Claude
status: reviewed
sources:
  - ref: hammack-book-of-proof
    loc: "12.4절, 연습문제 3–4 (p.238)"
added: 2026-11-26
---

:::exercise[네 원소 위의 함수를 세 번 합성하기]
$A = \{1, 2, 3, 4\}$이고 $f = \{(1, 2), (2, 3), (3, 1), (4, 4)\}$라 하자.

1. $f : A \to A$가 함수이고 전단사임을 확인하라.
2. $f \circ f$와 $(f \circ f) \circ f$를 순서쌍의 집합으로 적어라.
3. 역관계를 직접 계산하지 않고, (1)과 (2)의 결과, 합성의 결합법칙, 역함수의 등식 $f \circ f^{-1} = i_A$로 $f^{-1} = f \circ f$임을 보여라. 그다음 역관계 $f^{-1}$을 직접 구해 맞는지 확인하라.
:::

:::solution
**(1)** $f \subseteq A \times A$이고 $1, 2, 3, 4$가 각각 첫째 성분으로 정확히 한 번씩 나오며 둘째 성분이 모두 $A$의 원소이므로 [[function]]의 정의에 의해 $f : A \to A$는 함수이고 $f(1) = 2$, $f(2) = 3$, $f(3) = 1$, $f(4) = 4$이다. 네 값 $2, 3, 1, 4$가 서로 다르므로 [[injective-surjective-bijective|단사, 전사, 전단사]]의 1에 의해 단사이고, $1 = f(3)$, $2 = f(1)$, $3 = f(2)$, $4 = f(4)$이므로 같은 항목의 2에 의해 $f : A \to A$는 전사이다. 따라서 전단사이다.

**(2)** $f$의 공역과 정의역이 모두 $A$이므로 합성이 정의되고, [[function-composition|함수의 합성]]의 식 $(u \circ v)(x) = u(v(x))$를 쓴다.

$$
\begin{aligned}
(f \circ f)(1) &= f(2) = 3,\\
(f \circ f)(2) &= f(3) = 1,\\
(f \circ f)(3) &= f(1) = 2,\\
(f \circ f)(4) &= f(4) = 4
\end{aligned}
$$

이므로 $f \circ f = \{(1, 3), (2, 1), (3, 2), (4, 4)\}$이다. 이어서 $\bigl((f \circ f) \circ f\bigr)(x) = (f \circ f)(f(x))$이므로

$$
\begin{aligned}
\bigl((f \circ f) \circ f\bigr)(1) &= (f \circ f)(2) = 1,\\
\bigl((f \circ f) \circ f\bigr)(2) &= (f \circ f)(3) = 2,\\
\bigl((f \circ f) \circ f\bigr)(3) &= (f \circ f)(1) = 3,\\
\bigl((f \circ f) \circ f\bigr)(4) &= (f \circ f)(4) = 4
\end{aligned}
$$

이고 $(f \circ f) \circ f = \{(1, 1), (2, 2), (3, 3), (4, 4)\}$이다. 이것은 [[inverse-function|역관계와 역함수]]에서 정의한 항등함수 $i_A$이다.

**(3)** 먼저 작은 사실 하나를 보인다. $g : A \to A$가 함수이면 $i_A \circ g = g$이고 $g \circ i_A = g$이다. $x \in A$이면 합성의 식에 의해 $(i_A \circ g)(x) = i_A(g(x)) = g(x)$이고 $(g \circ i_A)(x) = g(i_A(x)) = g(x)$이다. 세 함수의 정의역이 모두 $A$이고 모든 $x \in A$에서 값이 같으므로 [[function]]의 함수의 같음에 의해 같은 함수이다.

(1)에서 $f : A \to A$가 전단사이므로 [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 $f^{-1}$은 $A$에서 $A$로의 함수이고, [[inverse-function|역관계와 역함수]]의 진술에 의해 $f \circ f^{-1} = i_A$이다. 그러면

$$
\begin{aligned}
f^{-1} &= i_A \circ f^{-1} = \bigl((f \circ f) \circ f\bigr) \circ f^{-1}\\
&= (f \circ f) \circ (f \circ f^{-1})\\
&= (f \circ f) \circ i_A = f \circ f
\end{aligned}
$$

이다. 첫째 등호와 마지막 등호는 위의 작은 사실, 둘째 등호는 (2), 넷째 등호는 $f \circ f^{-1} = i_A$이다. 셋째 등호는 [[composition-is-associative|합성의 결합법칙]]을 진술의 $f$, $g$, $h$ 자리에 차례로 $f^{-1} : A \to A$, $f : A \to A$, $f \circ f : A \to A$를 넣은 것이다.

직접 확인하면, 역관계는 $f$의 순서쌍의 성분을 맞바꾼 $f^{-1} = \{(2, 1), (3, 2), (1, 3), (4, 4)\}$이고, 이 네 순서쌍은 (2)에서 구한 $f \circ f = \{(1, 3), (2, 1), (3, 2), (4, 4)\}$의 네 순서쌍과 같다. 두 집합은 원소가 같으므로 $f^{-1} = f \circ f$이다.
:::

:::exercise[합성이 단사이거나 전사일 때]
$f : A \to B$와 $g : B \to C$가 함수라 하자. 다음을 증명하라.

1. $g \circ f$가 단사이면 $f$는 단사이다.
2. $g \circ f : A \to C$가 전사이면 $g : B \to C$는 전사이다.
:::

:::solution
**(1)** $g \circ f$가 단사라 하자. [[injective-surjective-bijective|단사, 전사, 전단사]]의 단사의 동치 꼴로 보이기 위해 $a, a' \in A$이고 $f(a) = f(a')$라 하자. $f(a)$와 $f(a')$는 $B$의 같은 원소이므로 [[function]]의 진술(모든 $b \in B$에 대하여 $g(b)$는 $C$의 원소 하나로 정해진다)에 의해 $g(f(a)) = g(f(a'))$이다. [[function-composition|함수의 합성]]의 식에 의해 이는 $(g \circ f)(a) = (g \circ f)(a')$이다. $g \circ f$가 단사이므로 단사의 동치 꼴에 의해 $a = a'$이다. 따라서 $f$는 단사이다.

**(2)** $g \circ f : A \to C$가 전사라 하고 $c \in C$라 하자. 전사의 정의에 의해 $(g \circ f)(a) = c$인 $a \in A$가 있다. $b = f(a)$로 두면 $b \in B$이고, 합성의 식에 의해 $g(b) = g(f(a)) = (g \circ f)(a) = c$이다. 따라서 모든 $c \in C$에 대하여 $g(b) = c$인 $b \in B$가 있고, $g : B \to C$는 전사이다.

(1)의 결론은 $f$에 관한 것뿐이고 (2)의 결론은 $g$에 관한 것뿐이다. [[composition-preserves-injectivity-and-surjectivity|합성과 단사, 전사의 관계]]의 반례 '역은 성립하지 않는다'에서 보듯, $g \circ f$가 단사이고 $g \circ f : A \to C$가 전사여도 $g$는 단사가 아니고 $f : A \to B$는 전사가 아닐 수 있다.
:::

:::exercise[역상과 차집합]
$f : A \to B$가 함수이고 $Y \subseteq B$라 하자. $f^{-1}(B - Y) = A - f^{-1}(Y)$임을 증명하라. 여기서 $f^{-1}(\,\cdot\,)$은 역상이다.
:::

:::solution
$B - Y$의 원소는 모두 $B$의 원소이므로 $B - Y \subseteq B$이고, [[image-and-preimage|상과 역상]]의 2에 의해 $f^{-1}(B - Y)$와 $f^{-1}(Y)$가 정의되며 둘 다 $A$의 부분집합이다. 차집합은 [[set-operations|집합의 연산]]의 정의대로 쓴다. 두 집합의 원소가 같음을 두 방향으로 보인다.

$a \in f^{-1}(B - Y)$라 하자. 역상의 정의에 의해 $a \in A$이고 $f(a) \in B - Y$, 곧 $f(a) \notin Y$이다. 만약 $a \in f^{-1}(Y)$이면 역상의 정의에 의해 $f(a) \in Y$이므로 이에 어긋난다. 따라서 $a \notin f^{-1}(Y)$이고 $a \in A - f^{-1}(Y)$이다.

거꾸로 $a \in A - f^{-1}(Y)$라 하자. 그러면 $a \in A$이고 $a \notin f^{-1}(Y)$이다. $f(a) \in B$이고, $f(a) \in Y$이면 역상의 정의에 의해 $a \in f^{-1}(Y)$가 되어 어긋나므로 $f(a) \notin Y$이다. 따라서 $f(a) \in B - Y$이고, 역상의 정의에 의해 $a \in f^{-1}(B - Y)$이다.

두 집합은 원소가 정확히 같으므로 [[set]]의 같음에 의해 $f^{-1}(B - Y) = A - f^{-1}(Y)$이다. 이 증명은 $f$가 단사이거나 전사라는 가정을 쓰지 않는다.
:::

:::exercise[합성의 상과 역상]
$f : A \to B$와 $g : B \to C$가 함수이고 $X \subseteq A$, $Z \subseteq C$라 하자. 다음을 증명하라.

1. $(g \circ f)(X) = g\bigl(f(X)\bigr)$
2. $(g \circ f)^{-1}(Z) = f^{-1}\bigl(g^{-1}(Z)\bigr)$
:::

:::solution
[[function-composition|함수의 합성]]에 의해 $g \circ f : A \to C$는 함수이고 $(g \circ f)(x) = g(f(x))$이다. 상과 역상은 [[image-and-preimage|상과 역상]]의 1, 2의 뜻이다.

**(1)** 상과 역상의 1에 의해 $f(X) \subseteq B$이므로 $g(f(X))$가 정의되고, $(g \circ f)(X)$와 $g(f(X))$는 둘 다 $C$의 부분집합이다. $c \in C$라 하자.

$c \in (g \circ f)(X)$이면 상의 정의에 의해 $(g \circ f)(x) = c$인 $x \in X$가 있다. $b = f(x)$로 두면 $x \in X$이므로 $b \in f(X)$이고 $g(b) = g(f(x)) = c$이다. 따라서 $c \in g(f(X))$이다.

$c \in g(f(X))$이면 상의 정의에 의해 $g(b) = c$인 $b \in f(X)$가 있고, 다시 상의 정의에 의해 $f(x) = b$인 $x \in X$가 있다. 그러면 $(g \circ f)(x) = g(f(x)) = g(b) = c$이므로 $c \in (g \circ f)(X)$이다.

두 방향이 모두 성립하므로 $(g \circ f)(X) = g(f(X))$이다.

**(2)** 상과 역상의 2에 의해 $g^{-1}(Z) \subseteq B$이므로 $f^{-1}(g^{-1}(Z))$가 정의되고, 두 집합은 둘 다 $A$의 부분집합이다. $a \in A$라 하자. 역상의 정의에 의해 $a \in (g \circ f)^{-1}(Z)$인 것은 정확히 $(g \circ f)(a) = g(f(a)) \in Z$일 때이다. $f(a) \in B$이므로 역상의 정의에 의해 $g(f(a)) \in Z$인 것은 정확히 $f(a) \in g^{-1}(Z)$일 때이고, 다시 역상의 정의에 의해 이는 정확히 $a \in f^{-1}(g^{-1}(Z))$일 때이다. 따라서 두 집합의 원소가 같고 $(g \circ f)^{-1}(Z) = f^{-1}(g^{-1}(Z))$이다.

(1)의 오른쪽은 먼저 $f$로, 다음에 $g$로 보내는 순서이고 (2)의 오른쪽은 먼저 $g$로, 다음에 $f$로 되돌리는 순서이다.
:::

:::exercise[서로 되돌리는 두 함수]
$f : A \to B$와 $g : B \to A$가 함수이고 $g \circ f = i_A$, $f \circ g = i_B$라 하자. 여기서 $i_A$, $i_B$는 항등함수이다. 다음을 증명하라.

1. $f : A \to B$는 전단사이다.
2. 역관계 $f^{-1}$은 $B$에서 $A$로의 함수이고, $f^{-1} = g$이다.
:::

:::solution
**두 등식을 값으로 읽기.** $g \circ f$와 $i_A$는 정의역이 $A$인 함수이므로, [[function]]의 함수의 같음에 의해 $g \circ f = i_A$는 모든 $a \in A$에서 $(g \circ f)(a) = i_A(a)$라는 뜻이다. [[function-composition|함수의 합성]]의 식과 [[inverse-function|역관계와 역함수]]의 항등함수의 정의에 의해 이는 모든 $a \in A$에 대하여 $g(f(a)) = a$이다. 같은 이유로 $f \circ g = i_B$는 모든 $b \in B$에 대하여 $f(g(b)) = b$이다.

**(1)** 단사: $a, a' \in A$이고 $f(a) = f(a')$라 하자. $f(a)$와 $f(a')$가 $B$의 같은 원소이므로 $g(f(a)) = g(f(a'))$이고, 위의 첫째 식에 의해 $a = g(f(a)) = g(f(a')) = a'$이다. [[injective-surjective-bijective|단사, 전사, 전단사]]의 단사의 동치 꼴에 의해 $f$는 단사이다.

전사: $b \in B$라 하자. $a = g(b)$는 $A$의 원소이고 위의 둘째 식에 의해 $f(a) = f(g(b)) = b$이다. 따라서 $f : A \to B$는 전사이다.

단사이고 전사이므로 $f : A \to B$는 전단사이다.

**(2)** (1)과 [[bijective-iff-inverse-is-a-function|전단사일 조건]]에 의해 $f^{-1}$은 $B$에서 $A$로의 함수이다. $b \in B$라 하자. 위의 둘째 식 $f(g(b)) = b$는 $(g(b), b) \in f$를 뜻하므로, 역관계의 정의에 의해 $(b, g(b)) \in f^{-1}$이다. 곧 $f^{-1}(b) = g(b)$이다. $f^{-1}$과 $g$는 정의역이 $B$로 같고 모든 $b \in B$에서 값이 같으므로 [[function]]의 함수의 같음에 의해 $f^{-1} = g$이다.

단사를 보일 때는 $g \circ f = i_A$만, 전사를 보일 때는 $f \circ g = i_B$만 썼다.
:::

:::exercise[차집합의 상]
$f : A \to B$가 함수이고 $X \subseteq A$일 때 $f(A - X)$와 $B - f(X)$를 비교한다. 여기서 $f(\,\cdot\,)$은 상이다.

1. $f(A - X) \subseteq B - f(X)$도 $B - f(X) \subseteq f(A - X)$도 성립하지 않는 $A$, $B$, $f$, $X$의 예를 하나 들어라.
2. $f : A \to B$가 전단사이면 $f(A - X) = B - f(X)$임을 증명하라.
:::

:::solution
**(1)** $A = \{1, 2\}$, $B = \{\text{가}, \text{나}\}$(가와 나는 서로 다른 대상), $f = \{(1, \text{가}), (2, \text{가})\}$, $X = \{1\}$로 둔다. $1, 2$가 각각 첫째 성분으로 정확히 한 번 나오고 둘째 성분이 $B$의 원소이므로 $f : A \to B$는 [[function]]이다.

$1 \in X$이고 $2 \ne 1$이므로 $2 \notin X$이고, [[set-operations|차집합]]의 정의에 의해 $A - X = \{2\}$이다. [[image-and-preimage|상과 역상]]의 1에 의해 $f(A - X) = \{f(2)\} = \{\text{가}\}$이고 $f(X) = \{f(1)\} = \{\text{가}\}$이므로 $B - f(X) = \{\text{나}\}$이다.

가 $\in f(A - X)$이지만 가 $\notin \{\text{나}\} = B - f(X)$이므로 $f(A - X) \subseteq B - f(X)$가 아니다. 나 $\in B - f(X)$이지만 나 $\notin \{\text{가}\} = f(A - X)$이므로 $B - f(X) \subseteq f(A - X)$도 아니다. 이 $f$는 $1 \ne 2$이고 $f(1) = f(2)$이므로 단사가 아니고, 나가 값이 아니므로 $f : A \to B$는 전사도 아니다.

**(2)** $f : A \to B$가 전단사라 하자. 두 집합은 모두 $B$의 부분집합이다.

$f(A - X) \subseteq B - f(X)$: $y \in f(A - X)$이면 상의 정의에 의해 $f(x) = y$인 $x \in A - X$가 있다. $y \in f(X)$라 하면 $f(x') = y$인 $x' \in X$가 있고, $f(x) = f(x')$이므로 [[injective-surjective-bijective|단사, 전사, 전단사]]의 단사의 동치 꼴에 의해 $x = x' \in X$인데, 이는 $x \notin X$에 어긋난다. 따라서 $y \notin f(X)$이고 $y \in B$이므로 $y \in B - f(X)$이다. 이 방향에는 단사만 썼다.

$B - f(X) \subseteq f(A - X)$: $y \in B - f(X)$이면 $f : A \to B$가 전사이므로 $f(x) = y$인 $x \in A$가 있다. $x \in X$이면 상의 정의에 의해 $y = f(x) \in f(X)$가 되어 $y \notin f(X)$에 어긋나므로 $x \notin X$이다. 곧 $x \in A - X$이고 $y = f(x) \in f(A - X)$이다. 이 방향에는 전사만 썼다.

두 포함이 모두 성립하므로 $f(A - X) = B - f(X)$이다. (1)의 예는 단사도 전사도 아니어서 두 방향이 모두 깨졌다. 상과 달리 역상은 함수에 아무 가정이 없어도 차집합과 맞는다는 것을 셋째 문제에서 보았다.
:::
