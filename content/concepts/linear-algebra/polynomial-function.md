---
title: 다항함수
title_en: Polynomial Function
aliases: [다항식, 다항함수의 공간, 거듭제곱 함수, 상수함수, 계수, polynomial, polynomial function, space of polynomials, constant function]
kind: definition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 0 이상인 정수 k 마다 x 를 xᵏ 으로 보내는 함수 tᵏ 을 두고, 𝒫ₙ 을 t⁰, t¹, …, tⁿ 의 생성으로, 다항함수를 어떤 𝒫ₙ 의 원소인 실함수로 정의한다. 𝒫ₙ 은 ℝ 위의 실함수 공간의 부분공간이고 𝒫ₘ ⊆ 𝒫ₙ (m ≤ n)이며, 다항함수의 값과 합·스칼라배를 계수로 계산한다.
requires: [function, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, subspace, finite-sum-of-vectors, linear-combination-and-span, standard-basis, power-of-a-real-number]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 1절, 1.2 Examples 의 다섯째 Example(Pₙ), p.4; 1장 2절, Example 2.3, p.7; 1장 연습문제 1.2 c, 1.3 d, e, p.5
    checked: original
    note: "출처는 1장 1.2 의 Example(p.4)에서 Pₙ 을 '차수가 n 이하인 다항식' p(t) = a₀ + a₁t + a₂t² + … + aₙtⁿ 전체로 도입하고 t 를 '독립변수'라 부르며, 계수의 일부나 전부가 0 이어도 된다고 적는다. 다항식이 함수인지 형식적인 식인지는 밝히지 않고, 차수(degree)를 정의하지 않은 채 쓴다. 1장 Example 2.3(p.7)은 e₀ := 1, e₁ := t, …, eₙ := tⁿ 을 Pₙ 의 표준기저라 부른다. 이 항목은 다항함수를 ℝ 위의 실함수 공간의 원소로 정하고 𝒫ₙ 을 t⁰, …, tⁿ 의 생성으로 정의했다. 𝒫ₙ 이 부분공간이라는 것, 𝒫ₘ ⊆ 𝒫ₙ, 값의 계산 (3), 'tᵏ', '다항함수'라는 이름과 번호는 이 사이트의 것이다. 출처의 연습문제 1.2 c(차수가 정확히 n 인 다항식 전체는 벡터공간인가)와 1.3 d, e(두 다항식의 합의 차수)는 차수를 정의한 '다항함수의 계수와 차수' 항목 쪽의 물음이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 뒤 항목에 기대던 반례 2건을 바꾸고, 예시 메모의 부정 주장 2건을 지웠으며, 정의하지 않은 표기와 범위 없는 변수를 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$\mathbb{R}^{\mathbb{R}}$은 [[real-function-space|실숫값 함수의 공간]]의 $X = \mathbb{R}$인 경우, 곧 $\mathbb{R}$에서 $\mathbb{R}$로의 함수 전체의 [[vector-space|벡터공간]]이고, 영벡터는 모든 값이 $0$인 함수 $o$이다. 실수의 거듭제곱 $x^k$는 [[power-of-a-real-number]]의 것이고($x^0 = 1$, $0^0 = 1$ 포함), 열과 합은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것이며, 일차결합과 생성은 [[linear-combination-and-span]]의 것이다. 두 함수가 같은 것은 정확히 모든 $x \in \mathbb{R}$에서 값이 같을 때이다([[function|함수]]의 같음).

**거듭제곱 함수.** $k \ge 0$이 정수이면, 각 실수 $x$에 실수 $x^k$가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $x$에서의 값이 $x^k$인 함수 $\mathbb{R} \to \mathbb{R}$가 있다. 이 함수를 $t^k$로 쓴다. $t^k$는 함수의 이름이고 $t$는 수가 아니다. 함숫값을 말할 때는 $x$를 쓴다. $t^1$을 $t$로도 쓰며, 거듭제곱의 (1)의 $x^1 = x$에 의해 $t$는 항등함수 $i_{\mathbb{R}}$이다. $t^0$은 모든 값이 $1$인 함수이다.

**상수함수.** 실수 $c$에 대하여 모든 값이 $c$인 함수를 값이 $c$인 **상수함수**(constant function)라 한다. $(c\,t^0)(x) = c \cdot 1 = c$이므로 그것은 $c\,t^0$이다. 실수 $c$에 대하여 $t - c$는 함수 $t^1 - c\,t^0$를 뜻하고, 그 값은 $x - c$이다.

**$\mathcal{P}_n$과 계수의 표기.** $n \ge 0$이 정수일 때, 길이 $n + 1$이고 $i$번째 항이 $t^{i-1}$인 $\mathbb{R}^{\mathbb{R}}$의 열을 $t^0, t^1, \dots, t^n$으로 쓰고
$$
\mathcal{P}_n = \operatorname{span}(t^0, t^1, \dots, t^n)
$$
으로 정한다. 길이 $n + 1$인 실수의 열의 $i$번째 항을 $a_{i-1}$로 이름 붙인 것을 **$0$부터 번호가 붙은 실수의 열** $a_0, a_1, \dots, a_n$이라 하고, $i$번째 항이 $a_{i-1} t^{i-1}$인 열의 합을
$$
a_0 t^0 + a_1 t^1 + \cdots + a_n t^n
$$
으로 쓴다. 이것은 열 $t^0, \dots, t^n$의 일차결합이고 계수의 $i$번째 항이 $a_{i-1}$이다. 따라서 $f \in \mathcal{P}_n$인 것은 정확히 $f = a_0 t^0 + \cdots + a_n t^n$인 $0$부터 번호가 붙은 실수의 열 $a_0, \dots, a_n$이 있을 때이다. 이때 $a_k$를 이 **표현**에서의 $t^k$의 계수라 한다.

**다항함수.** 함수 $f : \mathbb{R} \to \mathbb{R}$가 **다항함수**(polynomial function)인 것은 정확히 어떤 정수 $n \ge 0$에서 $f \in \mathcal{P}_n$일 때이다. (기호 $\mathcal{P}_n$은 멱집합 $\mathscr{P}(A)$와 다른 기호이다.)

다음이 성립한다. 아래에서 $m$, $n$은 $0$ 이상인 정수이다.

1. (부분공간) $\mathcal{P}_n$은 $\mathbb{R}^{\mathbb{R}}$의 [[subspace|부분공간]]이고, $0 \le k \le n$인 모든 정수 $k$에서 $t^k \in \mathcal{P}_n$이다. 특히 $o \in \mathcal{P}_n$이고, $f$, $g \in \mathcal{P}_n$이며 $\alpha$가 실수이면 $f + g$, $f - g$, $\alpha f \in \mathcal{P}_n$이다. $0$부터 번호가 붙은 실수의 열 $a_0, \dots, a_n$과 $b_0, \dots, b_n$으로 $f = a_0 t^0 + \cdots + a_n t^n$, $g = b_0 t^0 + \cdots + b_n t^n$이고 $\alpha$가 실수이면
   $$
   \begin{aligned}
   f + g &= (a_0 + b_0) t^0 + \cdots \\
   &\quad + (a_n + b_n) t^n, \\
   f - g &= (a_0 - b_0) t^0 + \cdots \\
   &\quad + (a_n - b_n) t^n, \\
   \alpha f &= (\alpha a_0) t^0 + \cdots \\
   &\quad + (\alpha a_n) t^n
   \end{aligned}
   $$
   이다.
2. ($0$ 덧붙이기) $m \le n$이고 $a_0, \dots, a_m$이 $0$부터 번호가 붙은 실수의 열이면, $k \le m$에서 $a_k$이고 $m < k \le n$에서 $0$인 $0$부터 번호가 붙은 열 $a_0, \dots, a_m, 0, \dots, 0$에 대하여
   $$
   \begin{aligned}
   &a_0 t^0 + \cdots + a_m t^m \\
   &\quad = a_0 t^0 + \cdots + a_m t^m \\
   &\qquad + 0\,t^{m+1} + \cdots + 0\,t^n
   \end{aligned}
   $$
   이다(오른쪽은 길이 $n + 1$인 열 $t^0, \dots, t^n$의 일차결합이다). 따라서 $\mathcal{P}_m \subseteq \mathcal{P}_n$이다.
3. (값) $0$부터 번호가 붙은 실수의 열 $a_0, \dots, a_n$과 실수 $x$에 대하여
   $$
   \begin{aligned}
   &(a_0 t^0 + \cdots + a_n t^n)(x) \\
   &\quad = a_0 x^0 + a_1 x^1 + \cdots + a_n x^n
   \end{aligned}
   $$
   이다. 오른쪽은 $i$번째 항이 $a_{i-1} x^{i-1}$인 실수의 열의 합이고, $a_0 + a_1 x + \cdots + a_n x^n$으로도 쓴다. 특히 $f = a_0 t^0 + \cdots + a_n t^n$이면 $f(0) = a_0$이다.
4. (작은 경우) $\mathcal{P}_0$은 상수함수 전체의 집합이다. 상수함수와 $t$와 $t - c$($c$는 실수)는 다항함수이고, $t - c = (-c)\,t^0 + 1\,t^1 \in \mathcal{P}_1$이다.
5. (합과 스칼라배) $f \in \mathcal{P}_m$이고 $g \in \mathcal{P}_n$이면 $f + g$, $f - g \in \mathcal{P}_{m+n}$이다. 따라서 두 다항함수의 합과 차, 다항함수의 스칼라배는 다항함수이다.
:::

:::english
$\mathbb{R}^{\mathbb{R}}$ is the case $X = \mathbb{R}$ of the entry on real function spaces, that is, the vector space of all functions from $\mathbb{R}$ to $\mathbb{R}$; its zero vector is the function $o$ all of whose values are $0$. The power $x^k$ of a real number is that of the entry on powers of a real number ($x^0 = 1$, including $0^0 = 1$), sequences and sums are those of the entry on finite sums of vectors, and linear combinations and spans are those of the entry on linear combinations and spans. Two functions are equal exactly when they have the same value at every $x \in \mathbb{R}$ (equality of functions).

**Power functions.** If $k \ge 0$ is an integer, then since a real number $x^k$ is assigned to each real number $x$, by (G) there is a function $\mathbb{R} \to \mathbb{R}$ whose value at $x$ is $x^k$. This function is written $t^k$. $t^k$ is the name of a function, and $t$ is not a number; values of functions are written with $x$. We also write $t$ for $t^1$; by $x^1 = x$ in item (1) of the entry on powers, $t$ is the identity function $i_{\mathbb{R}}$. $t^0$ is the function all of whose values are $1$.

**Constant functions.** For a real number $c$, the function all of whose values are $c$ is called the **constant function** with value $c$. Since $(c\,t^0)(x) = c \cdot 1 = c$, it is $c\,t^0$. For a real number $c$, $t - c$ denotes the function $t^1 - c\,t^0$; its value is $x - c$.

**$\mathcal{P}_n$ and the notation for coefficients.** For an integer $n \ge 0$, the sequence in $\mathbb{R}^{\mathbb{R}}$ of length $n + 1$ whose $i$-th term is $t^{i-1}$ is written $t^0, t^1, \dots, t^n$, and we set
$$
\mathcal{P}_n = \operatorname{span}(t^0, t^1, \dots, t^n).
$$
A sequence of real numbers of length $n + 1$ whose $i$-th term is named $a_{i-1}$ is called a **sequence of real numbers indexed from $0$**, $a_0, a_1, \dots, a_n$, and the sum of the sequence whose $i$-th term is $a_{i-1} t^{i-1}$ is written
$$
a_0 t^0 + a_1 t^1 + \cdots + a_n t^n.
$$
This is a linear combination of the sequence $t^0, \dots, t^n$ whose $i$-th coefficient is $a_{i-1}$. Hence $f \in \mathcal{P}_n$ exactly when there is a sequence of real numbers $a_0, \dots, a_n$ indexed from $0$ with $f = a_0 t^0 + \cdots + a_n t^n$. In that case $a_k$ is called the coefficient of $t^k$ in this **representation**.

**Polynomial functions.** A function $f : \mathbb{R} \to \mathbb{R}$ is a **polynomial function** exactly when $f \in \mathcal{P}_n$ for some integer $n \ge 0$. (The symbol $\mathcal{P}_n$ is different from the power set $\mathscr{P}(A)$.)

The following hold. Below, $m$ and $n$ are integers with $m, n \ge 0$.

1. (Subspace) $\mathcal{P}_n$ is a subspace of $\mathbb{R}^{\mathbb{R}}$, and $t^k \in \mathcal{P}_n$ for every integer $k$ with $0 \le k \le n$. In particular $o \in \mathcal{P}_n$, and if $f, g \in \mathcal{P}_n$ and $\alpha$ is a real number, then $f + g$, $f - g$, $\alpha f \in \mathcal{P}_n$. If $f = a_0 t^0 + \cdots + a_n t^n$ and $g = b_0 t^0 + \cdots + b_n t^n$ for sequences of real numbers $a_0, \dots, a_n$ and $b_0, \dots, b_n$ indexed from $0$, and $\alpha$ is a real number, then
   $$
   \begin{aligned}
   f + g &= (a_0 + b_0) t^0 + \cdots \\
   &\quad + (a_n + b_n) t^n, \\
   f - g &= (a_0 - b_0) t^0 + \cdots \\
   &\quad + (a_n - b_n) t^n, \\
   \alpha f &= (\alpha a_0) t^0 + \cdots \\
   &\quad + (\alpha a_n) t^n.
   \end{aligned}
   $$
2. (Appending zeros) If $m \le n$ and $a_0, \dots, a_m$ is a sequence of real numbers indexed from $0$, then for the sequence $a_0, \dots, a_m, 0, \dots, 0$ indexed from $0$ whose term with index $k$ is $a_k$ for $k \le m$ and $0$ for $m < k \le n$,
   $$
   \begin{aligned}
   &a_0 t^0 + \cdots + a_m t^m \\
   &\quad = a_0 t^0 + \cdots + a_m t^m \\
   &\qquad + 0\,t^{m+1} + \cdots + 0\,t^n
   \end{aligned}
   $$
   (the right side is a linear combination of the sequence $t^0, \dots, t^n$ of length $n + 1$). Hence $\mathcal{P}_m \subseteq \mathcal{P}_n$.
3. (Values) For a sequence of real numbers $a_0, \dots, a_n$ indexed from $0$ and a real number $x$,
   $$
   \begin{aligned}
   &(a_0 t^0 + \cdots + a_n t^n)(x) \\
   &\quad = a_0 x^0 + a_1 x^1 + \cdots + a_n x^n
   \end{aligned}.
   $$
   The right side is the sum of the sequence of real numbers whose $i$-th term is $a_{i-1} x^{i-1}$, and it is also written $a_0 + a_1 x + \cdots + a_n x^n$. In particular, if $f = a_0 t^0 + \cdots + a_n t^n$, then $f(0) = a_0$.
4. (Small cases) $\mathcal{P}_0$ is the set of all constant functions. Constant functions, $t$, and $t - c$ ($c$ a real number) are polynomial functions, and $t - c = (-c)\,t^0 + 1\,t^1 \in \mathcal{P}_1$.
5. (Sums and scalar multiples) If $f \in \mathcal{P}_m$ and $g \in \mathcal{P}_n$, then $f + g$, $f - g \in \mathcal{P}_{m+n}$. Hence the sum and difference of two polynomial functions, and a scalar multiple of a polynomial function, are polynomial functions.
:::

## 직관

다항함수는 "$x$를 넣으면 $a_0 + a_1 x + \cdots + a_n x^n$을 내놓는 기계"입니다. 이 사이트는 이것을 식이 아니라 함수로 다룹니다. 그래서 $t^2$는 "$x$를 $x^2$으로 보내는 함수"의 이름이고, 다항함수는 이런 함수들 $t^0, t^1, \dots, t^n$을 실수배해 더한 것, 곧 그 열의 일차결합입니다. 비유로 말하면 $t^0, t^1, \dots, t^n$은 부품이고 계수는 부품마다 쓰는 개수이며, $\mathcal{P}_n$은 $n$번 부품까지만으로 조립할 수 있는 기계 전체입니다.

계수는 $0$부터 번호를 붙이는데, 열은 $1$부터 번호를 붙이므로 열의 $i$번째 항이 $t^{i-1}$이고 그 계수가 $a_{i-1}$입니다. 이 한 칸의 밀림 덕분에 $a_k$가 언제나 $t^k$의 계수가 됩니다.

같은 함수가 여러 $\mathcal{P}_n$에 들어갑니다. $\mathcal{P}_1$의 원소 $2t^0 + 3t^1$은 $t^2$의 계수를 $0$으로 덧붙이면 $\mathcal{P}_2$의 원소이기도 합니다((2)). 그래서 다항함수의 정의는 "어떤 $n$에서" $\mathcal{P}_n$에 든다고 말하고, 두 다항함수를 더할 때는 둘이 함께 드는 $\mathcal{P}_{m+n}$에서 계산합니다((5)). 한 다항함수를 나타내는 계수가 하나뿐이라는 것은 이 항목에서 주장하지 않습니다. 그것은 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]에서 근의 개수를 써서 증명합니다.

## 성질의 증명

:::proof
(H1)–(H7), (C1)–(C6)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것이고, 그 진술에 따라 실수의 합은 $V = \mathbb{R}$인 벡터의 유한 합이다. (N1)–(N3)은 [[linear-combination-and-span]]의 것, (S1)–(S3)은 [[subspace]]의 것, (B…)는 [[vector-space-basic-properties]]의 것, (K…)는 [[real-number-arithmetic]]의 것이다.

**(1)의 증명.** (N1)에 의해 $\mathcal{P}_n$은 부분공간이다. $0 \le k \le n$이면 $i = k + 1$은 $1 \le i \le n + 1$이고 열의 $i$번째 항이 $t^k$이므로 (N2)에 의해 $t^k \in \mathcal{P}_n$이다. (S1)에 의해 $o \in \mathcal{P}_n$이고, (S2), (S3)에 의해 $f + g$, $\alpha f \in \mathcal{P}_n$이며, $f - g = f + (-1)g$((B5))도 그렇다. 세 등식은 열 $t^0, \dots, t^n$에 (C1), (C6), (C2)를 쓴 것이다.

**(2)의 증명.** $m \le n$이면 (Z7)에 의해 $n - m \ge 0$이다. 오른쪽의 길이 $n + 1$인 열(일차결합의 항들) $v$는 $i \le m + 1$에서 $a_{i-1} t^{i-1}$, $m + 1 < i \le n + 1$에서 $0\,t^{i-1}$이다. 따라서 $v$는 왼쪽 합의 열(길이 $m + 1$)과, 모든 항이 $0\,t^{i-1} = o$((B3))인 길이 $n - m$인 열을 이어 붙인 것이고, (H2)와 (H5)와 영벡터의 성질에 의해 오른쪽은 왼쪽 $+\ o =$ 왼쪽이다. 따라서 $\mathcal{P}_m$의 모든 원소가 $t^0, \dots, t^n$의 일차결합이므로 $\mathcal{P}_m \subseteq \mathcal{P}_n$이다. (이어 붙인 열의 자리 번호: $(m + 1) + j$번째 항이 $0\,t^{m+j}$이고 $1 \le j \le n - m$이다.)

**(3)의 증명.** [[standard-basis|ℝⁿ의 표준기저]]의 (1)에 의해 $\mathbb{R}^{\mathbb{R}}$에서 열의 합의 $x$에서의 값은 값들의 합이다. $i$번째 항 $a_{i-1} t^{i-1}$의 $x$에서의 값은 스칼라배의 정의에 의해 $a_{i-1} \cdot t^{i-1}(x) = a_{i-1} x^{i-1}$이다. 따라서 등식이 성립한다. $x = 0$이면 거듭제곱의 정의와 그 (2)의 (iv)에 의해 $0^0 = 1$이고 $k \ge 1$에서 $0^k = 0$이므로, 첫째 항은 $a_0 \cdot 1 = a_0$이고 나머지 항은 $a_k \cdot 0 = 0$((K9))이다. (H7)을 $k = 1$로 쓰면 합은 $a_0$이다.

**(4)의 증명.** $n = 0$이면 열은 $t^0$ 하나이고 [[linear-combination-and-span]]의 (N4)에 의해 $\mathcal{P}_0 = \{c\,t^0 : c \in \mathbb{R}\}$이다. 위의 "상수함수" 문단에 의해 이것은 상수함수 전체이다. 따라서 상수함수는 다항함수이다. (H0)에 의해 $(-c)t^0 + 1\,t^1$은 두 함수의 합이고, (3)에 의해 그 $x$에서의 값은 $-c + 1 \cdot x = x - c$이다. $t^1 - c\,t^0$의 값도 $x - c$이므로 두 함수는 같고, 이것은 $\mathcal{P}_1$의 원소이다. 계수의 열 $0, 1$로 $t = 0\,t^0 + 1\,t^1 \in \mathcal{P}_1$이다(값이 $0 + x = x$).

**(5)의 증명.** 정수 $m$, $n \ge 0$에서 $m \le m + n$이고 $n \le m + n$이다((Z7)). (2)에 의해 $f$, $g \in \mathcal{P}_{m+n}$이고, (1)에 의해 $f + g$, $f - g \in \mathcal{P}_{m+n}$이다. $m + n$은 정수이다([[even-and-odd]]에서 받아들인 사실). 스칼라배는 (1)에 의해 같은 $\mathcal{P}_n$에 든다. $\blacksquare$
:::

## 예시와 반례

:::example[계수로 계산하는 합과 값]
$f = 4t^0 - 1\,t^1 + 2t^2$와 $g = -4t^0 + 3t^1$을 생각합니다(빼기는 계수를 $-1$배한 것). $g \in \mathcal{P}_1$을 (2)로 $-4t^0 + 3t^1 + 0\,t^2$로 써서 $\mathcal{P}_2$에서 (1)로 더하면
$$
f + g = 0\,t^0 + 2t^1 + 2t^2
$$
입니다. (3)으로 $x = 3$에서의 값을 구하면 $f(3) = 4 - 3 + 18 = 19$, $g(3) = -4 + 9 = 5$이고 $(f + g)(3) = 0 + 6 + 18 = 24 = 19 + 5$로 맞습니다. 또 $f(0) = 4$로 $t^0$의 계수와 같습니다((3)).
:::

:::example[𝒫₀ 의 원소와 영함수]
$\mathcal{P}_0$의 원소는 $c\,t^0$뿐이므로 상수함수입니다. 특히 $0\,t^0 = o$는 $\mathcal{P}_0$에 들고, (2)에 의해 모든 $\mathcal{P}_n$에 듭니다. $t^0$은 $0$에서도 값이 $1$입니다($0^0 = 1$). 그래서 $t^0$은 $1\,t^0$, 곧 값이 $1$인 상수함수입니다.
:::

:::counterexample[두 점에서 값이 같은 서로 다른 두 다항함수]
$t^2$과 $t$는 $x = 0$에서 값이 $0$으로 같고 $x = 1$에서 값이 $1$로 같습니다($0^2 = 0$, $1^2 = 1$은 거듭제곱의 (2)의 (iv)). 그러나 $x = 2$에서 $t^2(2) = 4$이고 $t(2) = 2$이므로 두 함수는 같지 않습니다. 다항함수가 같다는 것은 모든 실수에서 값이 같다는 것이고, 몇 점에서 값이 같은 것만으로는 같은 함수라고 할 수 없습니다.
:::

## 확인 질문

:::check[$f = 1\,t^0 + 0\,t^1 - 2t^2$일 때 $f(-1)$과 $f(0)$은 무엇인가?]
(3)에 의해 $f(-1) = 1 + 0 \cdot (-1) + (-2)(-1)^2 = 1 + 0 - 2 = -1$이고($(-1)^2 = 1$은 거듭제곱의 (5)), $f(0) = 1$입니다.
:::

:::check[$f \in \mathcal{P}_2$이고 $g \in \mathcal{P}_3$이면 $2f - g$는 어느 $\mathcal{P}_n$에 든다고 (1), (2)로 말할 수 있는가?]
(1)에 의해 $2f \in \mathcal{P}_2$이고, (2)에 의해 $\mathcal{P}_2 \subseteq \mathcal{P}_3$이므로 $2f$와 $g$는 모두 $\mathcal{P}_3$에 들며, (1)에 의해 $2f - g \in \mathcal{P}_3$입니다. (5)만 쓰면 $\mathcal{P}_5$이고, 이것도 참입니다.
:::
