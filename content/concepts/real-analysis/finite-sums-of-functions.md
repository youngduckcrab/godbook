---
title: 함수의 유한 합
title_en: Finite Sums of Functions
aliases: [부분합 함수, 부분합 함수의 열, 0부터 번호가 붙은 사상의 열, 한 칸 옮긴 사상의 열, partial sum function, finite sum of functions, sequence of maps indexed from zero]
kind: proposition
field: real-analysis
msc: ["26A06", "40A30"]
level: undergrad
summary: 집합 X 에서 ℝ 로의 사상의 열의 부분합 함수 F_m(x) = Σ_{n=1}^m f_n(x) 와 0부터 번호가 붙은 사상의 열의 부분합 함수 G_m(x) = Σ_{n=0}^m f_n(x) 를 정하고, 항들이 한 점에서 연속이거나 미분가능하거나 적분가능하면 그 유한 합도 그렇고 미분계수와 적분이 항별 합이라는 것, Σ_{n=0}^m c_n(x − a)ⁿ 의 도함수와 a 에서의 값을 진술한다.
requires: [function, adding-or-removing-an-element, mathematical-induction, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, recursion-theorem, real-number-arithmetic, order-properties-of-reals, interval, power-of-a-real-number, sequence, real-valued-function, continuous-function, continuity-of-sum-and-product, power-function-is-continuous, derivative, derivative-rules, continuously-differentiable, antiderivative-and-integral-of-power, riemann-integral, oriented-integral, linearity-of-the-integral, finite-sum-of-reals, splitting-and-shifting-finite-sums, linearity-and-order-of-finite-sums, telescoping-sum, pointwise-convergence, series-indexed-from-zero]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "6.2.4절 Convergence of power series 의 Proposition 6.2.11 의 증명 (p.241), Corollary 6.2.12 의 증명 (p.241), Corollary 6.2.13 의 증명 (p.242); 4.1.3절 Exercises 의 Exercise 4.1.4 (p.160); 3.2.1절 Definition and basic properties 의 Proposition 3.2.4 (p.123); 2.6.5절 Power series 의 다항식 문단 (p.109); 4.1.1절 Example 4.1.5 (p.157)"
    checked: original
    note: "출처는 이 항목의 내용을 멱급수의 증명 안에서 쓴다. Proposition 6.2.11 의 증명(p.241)은 멱급수의 부분합이 다항식이므로 연속이라 적고, Corollary 6.2.12 의 증명(p.241)은 부분합 Σ_{n=0}^{k} c_n(s − a)ⁿ 을 항마다 적분해 Σ_{n=1}^{k+1} c_{n−1}(x − a)ⁿ/n 을 얻으며, Corollary 6.2.13 의 증명(p.242)은 Σ_{n=0}^{k} (n + 1)c_{n+1}(x − a)ⁿ 이 부분합 Σ_{n=0}^{k+1} c_n(x − a)ⁿ 의 도함수라고 적는다. (7)의 도함수 식은 이 마지막 식에서 m = k + 1 로 둔 것과 같다. 다항식이 연속이라는 것은 출처 Proposition 3.2.4(p.123, 수열로 증명한다)이고, 다항식이 미분가능하다는 것과 그 도함수를 구하는 것은 출처가 Exercise 4.1.4(p.160)로 둔다. 이 항목은 다항식이라는 말을 정의하지 않고, 유한 개의 항에 대한 성질을 두 함수의 합에 대한 앞 강의의 규칙에서 개수에 대한 귀납으로 얻는다. 2.6.5절의 다항식 문단(p.109)은 다항식을 x₀ 를 중심으로 (x − x₀) 의 거듭제곱의 합으로 다시 쓰는 예(2x² − 3x + 4 = 3 + (x − 1) + 2(x − 1)²)를 든다. 예시 '중심이 2 인 경우'의 h 는 이와 같은 꼴(중심을 밝힌 거듭제곱의 합)이다. 반례 '항은 미분가능하지 않은데 합은 미분가능한 예'가 쓰는 사실, 곧 |x| 가 0 에서 미분가능하지 않다는 것은 출처 4.1.1절의 Example 4.1.5(p.157)와 같다(이 항목은 derivative 의 (3)을 인용한다). Basic Analysis II 에서도 Proposition 11.3.4 의 증명(p.156)이 부분합이 연속이라고 적고 같은 사실을 쓴다. 출처는 이런 함수를 부분합(partial sums)이라 부르고, 이 항목은 그것을 부분합 함수라 부르며 글자 F_m, G_m 을 붙인다."
  - ref: lebl-basic-analysis-2
    loc: "11.3.3절 Properties of analytic functions 의 Proposition 11.3.4 의 증명 (p.156)"
    checked: original
    note: "출처는 복소 멱급수의 부분합이 연속이라고 괄호 안에 적고('the partial sums (which are continuous)') 증명에 쓴다. 이 항목은 실숫값 함수만 다룬다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(M 판정의 가정과 빈 정의역의 경우 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
사상, $X$에서 $\mathbb{R}$로의 사상 전체의 집합, 사상의 열 $(f_n)$, $x$에서의 값의 수열 $(f_n(x))$, 식으로 정한 사상의 열, 제한의 열 $(f_n|_A)$는 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이고, $\mathbb{R}$에는 보통 거리를 준다. 함수의 같음은 [[function]], 제한 $f|_A$는 [[adding-or-removing-an-element]]의 것이다. 유한 합 $\sum_{i=m}^{n}$, 빈 합, 범위에서만 정해진 항의 합은 [[finite-sum-of-reals]]의 것이고, 0부터 번호가 붙은 수열, 그 유한 합 $\sum_{n=0}^{k}$, 범위에서만 정해진 항의 $0$부터의 합은 [[series-indexed-from-zero]]의 것이다. 실함수와 그 합, 상수배, 상수함수, 제한은 [[real-valued-function]], 연속은 [[continuous-function]], 구간은 [[interval]], 미분가능, 미분계수, 미분가능한 함수와 도함수는 [[derivative]], 연속미분가능은 [[continuously-differentiable]], 리만 적분가능과 $\int_a^b f$는 [[riemann-integral]], "$\alpha$와 $\beta$ 사이에서 적분가능"과 방향 있는 적분 $\int_\alpha^\beta f$는 [[oriented-integral]], 거듭제곱은 [[power-of-a-real-number]]의 것이다. 아래에서 $X$는 집합이다.

**부분합 함수.** $(f_n)$을 $X$에서 $\mathbb{R}$로의 사상의 열이라 하자. $0$ 이상인 정수 $m$과 $x \in X$에 대하여 $\sum_{n=1}^{m} f_n(x)$는 값의 수열 $(f_n(x))$의 유한 합이고, $m = 0$이면 빈 합 $0$이다. [[recursion-theorem|재귀 정리]]의 (1)에 의해 모든 $x \in X$에서
$$
F_m(x) = \sum_{n=1}^{m} f_n(x)
$$
인 사상 $F_m : X \to \mathbb{R}$가 있다. 이것을 $(f_n)$의 **$m$번째 부분합 함수**(partial sum function)라 한다. 각 자연수 $m$에서 $F_m$은 이미 정해진 사상이므로, [[pointwise-convergence|사상의 열과 점별 수렴]]의 (1)에 의해 $m$번째 항이 $F_m$인 $X$에서 $\mathbb{R}$로의 사상의 열 $(F_m)$이 있다. 이것을 $(f_n)$의 **부분합 함수의 열**이라 한다.

**0부터 번호가 붙은 사상의 열.** $0$ 이상인 정수 전체의 집합 $\{n \in \mathbb{Z} : 0 \le n\}$에서 "$X$에서 $\mathbb{R}$로의 사상 전체의 집합"으로의 함수를 $X$에서 $\mathbb{R}$로의 **0부터 번호가 붙은 사상의 열**이라 하고, $n$에서의 값을 $f_n$, 이 함수를 $(f_n)_{n \ge 0}$으로 쓴다. $x \in X$이면 $n$에서의 값이 $f_n(x)$인 0부터 번호가 붙은 수열 $(f_n(x))_{n \ge 0}$이 있다. $-1$ 이상인 정수 $m$에 대하여, 재귀 정리의 (1)로 모든 $x \in X$에서
$$
G_m(x) = \sum_{n=0}^{m} f_n(x)
$$
가 되게 정한 사상 $G_m : X \to \mathbb{R}$를 $(f_n)_{n \ge 0}$의 **0부터의 $m$번째 부분합 함수**라 한다.

다음이 성립한다. (1)–(5)에서 $(f_n)$은 $X$에서 $\mathbb{R}$로의 사상의 열이고 $F_m$은 그 부분합 함수이며, $m$은 $0$ 이상인 정수이다. (2)–(5)의 "$1 \le n \le m$인 $f_n$"은 $1 \le n \le m$인 모든 정수 $n$에서의 $f_n$을 뜻하고, $m = 0$이면 그런 $n$이 없다.

1. (값과 점화)
   - (i) $F_0$은 모든 점에서 값이 $0$인 사상이고 $F_1 = f_1$이다. 모든 $x \in X$에서 $F_{m+1}(x) = F_m(x) + f_{m+1}(x)$이다.
   - (ii) $m$이 자연수이면 $F_m(x)$는 값의 수열 $(f_n(x))$의 $m$번째 부분합이다.
   - (iii) $0 \le m \le k$인 정수 $k$와 모든 $x \in X$에서 $F_k(x) - F_m(x) = \sum_{n=m+1}^{k} f_n(x)$이다.
   - (iv) $A \subseteq X$이면 $(f_n|_A)$의 $m$번째 부분합 함수는 $F_m|_A$이다.
   - (v) $X$가 $\mathbb{R}$의 부분집합이면 $F_m$은 $X$ 위의 실함수이고 $F_{m+1} = F_m + f_{m+1}$이다.
2. (연속) $X = S$가 $\mathbb{R}$의 부분집합이고 $c \in S$라 하자. $1 \le n \le m$인 $f_n$이 모두 $c$에서 연속이면 $F_m$도 $c$에서 연속이다. $1 \le n \le m$인 $f_n$이 모두 연속함수이면 $F_m$도 연속함수이다.
3. (한 점에서의 미분) $X = I$가 구간이고 $c \in I$라 하자. $1 \le n \le m$인 $f_n$이 모두 $c$에서 미분가능하면 $F_m$도 $c$에서 미분가능하고
   $$
   F_m'(c) = \sum_{n=1}^{m} f_n'(c)
   $$
   이다. 오른쪽은 $1 \le n \le m$에서 정해진 항 $f_n'(c)$의 합이고, $m = 0$이면 $0$이다.
4. (도함수와 연속미분가능) $X = I$가 구간이라 하자. $1 \le n \le m$인 $f_n$이 모두 미분가능한 함수이면 $F_m$도 미분가능한 함수이고 모든 $x \in I$에서 $F_m'(x) = \sum_{n=1}^{m} f_n'(x)$이다. $1 \le n \le m$인 $f_n$이 모두 연속미분가능하면 $F_m$도 연속미분가능하다. 모든 자연수 $n$에서 $f_n$이 미분가능한 함수이면 $n$번째 항이 $f_n'$인 사상의 열 $(f_n')$이 있고, 그 $m$번째 부분합 함수는 $F_m'$이다.
5. (적분)
   - (i) $a < b$이고 $X = [a, b]$라 하자. $1 \le n \le m$인 $f_n$이 모두 리만 적분가능하면 $F_m$도 리만 적분가능하고 $\int_a^b F_m = \sum_{n=1}^{m} \int_a^b f_n$이다.
   - (ii) $X = I$가 구간이고 $\alpha$, $\beta$가 $I$의 원소라 하자. $1 \le n \le m$인 $f_n$이 모두 $\alpha$와 $\beta$ 사이에서 적분가능하면 $F_m$도 $\alpha$와 $\beta$ 사이에서 적분가능하고 $\int_\alpha^\beta F_m = \sum_{n=1}^{m} \int_\alpha^\beta f_n$이다.
6. (0부터 번호가 붙은 열) $(f_n)_{n \ge 0}$을 $X$에서 $\mathbb{R}$로의 0부터 번호가 붙은 사상의 열, $G_m$을 그 0부터의 부분합 함수라 하고, 아래에서 $m$은 $-1$ 이상인 정수이다. "$0 \le n \le m$인 $f_n$"은 $0 \le n \le m$인 모든 정수 $n$에서의 $f_n$을 뜻한다.
   - (i) $j$번째 항이 $f_{j-1}$인 사상의 열 $(g_j)$가 있다. 이것을 $(f_n)_{n \ge 0}$을 **한 칸 옮긴 사상의 열**이라 한다. $G_m$은 $(g_j)$의 $(m + 1)$번째 부분합 함수이다. $G_{-1}$은 모든 점에서 값이 $0$인 사상이고 $G_0 = f_0$이며, 모든 $x \in X$에서 $G_{m+1}(x) = G_m(x) + f_{m+1}(x)$이고, $m \ge 0$이면 $G_m(x) = f_0(x) + \sum_{n=1}^{m} f_n(x)$이다.
   - (ii) (연속) $X = S \subseteq \mathbb{R}$이고 $c \in S$일 때, $0 \le n \le m$인 $f_n$이 모두 $c$에서 연속이면 $G_m$도 $c$에서 연속이고, 모두 연속함수이면 $G_m$도 연속함수이다.
   - (iii) (미분) $X = I$가 구간이고 $c \in I$일 때, $0 \le n \le m$인 $f_n$이 모두 $c$에서 미분가능하면 $G_m$도 $c$에서 미분가능하고 $G_m'(c) = \sum_{n=0}^{m} f_n'(c)$이다. $0 \le n \le m$인 $f_n$이 모두 미분가능한 함수이면 $G_m$도 미분가능한 함수이고 모든 $x \in I$에서 $G_m'(x) = \sum_{n=0}^{m} f_n'(x)$이며, 모두 연속미분가능하면 $G_m$도 연속미분가능하다.
   - (iv) (적분) $a < b$이고 $X = [a, b]$일 때, $0 \le n \le m$인 $f_n$이 모두 리만 적분가능하면 $G_m$도 리만 적분가능하고 $\int_a^b G_m = \sum_{n=0}^{m} \int_a^b f_n$이다. $X = I$가 구간이고 $\alpha$, $\beta \in I$일 때, $0 \le n \le m$인 $f_n$이 모두 $\alpha$와 $\beta$ 사이에서 적분가능하면 $G_m$도 그렇고 $\int_\alpha^\beta G_m = \sum_{n=0}^{m} \int_\alpha^\beta f_n$이다.
7. ($\sum_{n=0}^{m} c_n (x - a)^n$ 꼴의 함수) $a$를 실수, $m$을 $0$ 이상인 정수, $c_0, \dots, c_m$을 0부터 번호가 붙은 실수([[telescoping-sum|망원 합]]의 뜻)라 하고,
   $$
   h(x) = \sum_{n=0}^{m} c_n (x - a)^n
   $$
   으로 정한 함수 $h : \mathbb{R} \to \mathbb{R}$를 생각한다. $x = a$에서 $(x - a)^0 = 0^0 = 1$이다.
   - (i) $h$는 연속미분가능하고 따라서 연속함수이며, 모든 실수 $x$에서
     $$
     \begin{aligned}
     &h'(x) \\
     &= \sum_{n=1}^{m} n\,c_n (x - a)^{n-1} \\
     &= \sum_{n=0}^{m-1} (n + 1)\,c_{n+1} (x - a)^n
     \end{aligned}
     $$
     이다. $m = 0$이면 두 합은 빈 합이고 $h'$은 값이 $0$인 상수함수이다.
   - (ii) $h(a) = c_0$이다.
   - (iii) $I$가 구간이면 제한 $h|_I$는 연속미분가능하고 모든 $x \in I$에서 $(h|_I)'(x) = h'(x)$이다.
   - (iv) (한 항) $n$이 $0$ 이상인 정수이고 $c$가 실수이면, $x$에서의 값이 $c\,(x - a)^n$인 함수 $\mathbb{R} \to \mathbb{R}$는 연속미분가능하고, 그 도함수는 $n = 0$이면 값이 $0$인 상수함수, $n \ge 1$이면 $x$에서의 값이 $n\,c\,(x - a)^{n-1}$인 함수이다.
:::

:::english
Maps, the set of all maps from $X$ to $\mathbb{R}$, a sequence of maps $(f_n)$, the sequence of values $(f_n(x))$ at $x$, sequences of maps given by formulas and the sequence of restrictions $(f_n|_A)$ are those of the entry on sequences of maps and pointwise convergence, and $\mathbb{R}$ carries the usual metric. Equality of functions and the restriction $f|_A$ are those of the corresponding entries. Finite sums $\sum_{i=m}^{n}$, the empty sum and sums of terms given only on a range are those of the entry on finite sums of real numbers, and sequences indexed from zero, their finite sums $\sum_{n=0}^{k}$ and sums from $0$ of terms given only on a range are those of the entry on sums of sequences indexed from zero. Real-valued functions with their sums, constant multiples, constant functions and restrictions, continuity, intervals, differentiability, derivatives at a point, differentiable functions and derivatives, continuous differentiability, Riemann integrability and $\int_a^b f$, "integrable between $\alpha$ and $\beta$" and the oriented integral $\int_\alpha^\beta f$, and powers are those of the corresponding entries. Below, $X$ is a set.

**Partial sum functions.** Let $(f_n)$ be a sequence of maps from $X$ to $\mathbb{R}$. For an integer $m \ge 0$ and $x \in X$, $\sum_{n=1}^{m} f_n(x)$ is a finite sum of the sequence of values $(f_n(x))$, and it is the empty sum $0$ when $m = 0$. By item (1) of the recursion theorem there is a map $F_m : X \to \mathbb{R}$ with
$$
F_m(x) = \sum_{n=1}^{m} f_n(x)
$$
for every $x \in X$. It is called the **$m$th partial sum function** of $(f_n)$. For each natural number $m$, $F_m$ is an already determined map, so by item (1) of the entry on sequences of maps and pointwise convergence there is a sequence of maps $(F_m)$ from $X$ to $\mathbb{R}$ whose $m$th term is $F_m$. It is called the **sequence of partial sum functions** of $(f_n)$.

**Sequences of maps indexed from zero.** A function from the set $\{n \in \mathbb{Z} : 0 \le n\}$ of nonnegative integers to "the set of all maps from $X$ to $\mathbb{R}$" is called a **sequence of maps indexed from zero** from $X$ to $\mathbb{R}$; its value at $n$ is written $f_n$, and the function is written $(f_n)_{n \ge 0}$. If $x \in X$, there is a sequence indexed from zero $(f_n(x))_{n \ge 0}$ whose value at $n$ is $f_n(x)$. For an integer $m \ge -1$, the map $G_m : X \to \mathbb{R}$ given by item (1) of the recursion theorem so that
$$
G_m(x) = \sum_{n=0}^{m} f_n(x)
$$
for every $x \in X$ is called the **$m$th partial sum function from zero** of $(f_n)_{n \ge 0}$.

The following hold. In (1)–(5), $(f_n)$ is a sequence of maps from $X$ to $\mathbb{R}$, $F_m$ are its partial sum functions, and $m$ is an integer with $m \ge 0$. In (2)–(5), "the $f_n$ with $1 \le n \le m$" means $f_n$ for every integer $n$ with $1 \le n \le m$; when $m = 0$ there is no such $n$.

1. (Values and recursion)
   - (i) $F_0$ is the map whose value is $0$ at every point, and $F_1 = f_1$. For every $x \in X$, $F_{m+1}(x) = F_m(x) + f_{m+1}(x)$.
   - (ii) If $m$ is a natural number, $F_m(x)$ is the $m$th partial sum of the sequence of values $(f_n(x))$.
   - (iii) For every integer $k$ with $0 \le m \le k$ and every $x \in X$, $F_k(x) - F_m(x) = \sum_{n=m+1}^{k} f_n(x)$.
   - (iv) If $A \subseteq X$, the $m$th partial sum function of $(f_n|_A)$ is $F_m|_A$.
   - (v) If $X$ is a subset of $\mathbb{R}$, then $F_m$ is a real-valued function on $X$ and $F_{m+1} = F_m + f_{m+1}$.
2. (Continuity) Let $X = S$ be a subset of $\mathbb{R}$ and $c \in S$. If all the $f_n$ with $1 \le n \le m$ are continuous at $c$, then $F_m$ is continuous at $c$. If all the $f_n$ with $1 \le n \le m$ are continuous functions, then $F_m$ is a continuous function.
3. (Derivative at a point) Let $X = I$ be an interval and $c \in I$. If all the $f_n$ with $1 \le n \le m$ are differentiable at $c$, then $F_m$ is differentiable at $c$ and
   $$
   F_m'(c) = \sum_{n=1}^{m} f_n'(c) .
   $$
   The right-hand side is the sum of the terms $f_n'(c)$ given for $1 \le n \le m$, and it is $0$ when $m = 0$.
4. (Derivatives and continuous differentiability) Let $X = I$ be an interval. If all the $f_n$ with $1 \le n \le m$ are differentiable functions, then $F_m$ is a differentiable function and $F_m'(x) = \sum_{n=1}^{m} f_n'(x)$ for every $x \in I$. If all the $f_n$ with $1 \le n \le m$ are continuously differentiable, then so is $F_m$. If $f_n$ is a differentiable function for every natural number $n$, there is a sequence of maps $(f_n')$ whose $n$th term is $f_n'$, and its $m$th partial sum function is $F_m'$.
5. (Integrals)
   - (i) Let $a < b$ and $X = [a, b]$. If all the $f_n$ with $1 \le n \le m$ are Riemann integrable, then $F_m$ is Riemann integrable and $\int_a^b F_m = \sum_{n=1}^{m} \int_a^b f_n$.
   - (ii) Let $X = I$ be an interval and $\alpha$, $\beta$ elements of $I$. If all the $f_n$ with $1 \le n \le m$ are integrable between $\alpha$ and $\beta$, then $F_m$ is integrable between $\alpha$ and $\beta$ and $\int_\alpha^\beta F_m = \sum_{n=1}^{m} \int_\alpha^\beta f_n$.
6. (Sequences indexed from zero) Let $(f_n)_{n \ge 0}$ be a sequence of maps indexed from zero from $X$ to $\mathbb{R}$, let $G_m$ be its partial sum functions from zero, and below let $m$ be an integer with $m \ge -1$. "The $f_n$ with $0 \le n \le m$" means $f_n$ for every integer $n$ with $0 \le n \le m$.
   - (i) There is a sequence of maps $(g_j)$ whose $j$th term is $f_{j-1}$. It is called the **shifted sequence of maps** of $(f_n)_{n \ge 0}$. $G_m$ is the $(m + 1)$th partial sum function of $(g_j)$. $G_{-1}$ is the map whose value is $0$ at every point, $G_0 = f_0$, $G_{m+1}(x) = G_m(x) + f_{m+1}(x)$ for every $x \in X$, and if $m \ge 0$ then $G_m(x) = f_0(x) + \sum_{n=1}^{m} f_n(x)$.
   - (ii) (Continuity) When $X = S \subseteq \mathbb{R}$ and $c \in S$: if all the $f_n$ with $0 \le n \le m$ are continuous at $c$, then $G_m$ is continuous at $c$, and if they are all continuous functions, then $G_m$ is a continuous function.
   - (iii) (Derivatives) When $X = I$ is an interval and $c \in I$: if all the $f_n$ with $0 \le n \le m$ are differentiable at $c$, then $G_m$ is differentiable at $c$ and $G_m'(c) = \sum_{n=0}^{m} f_n'(c)$. If all the $f_n$ with $0 \le n \le m$ are differentiable functions, then $G_m$ is a differentiable function and $G_m'(x) = \sum_{n=0}^{m} f_n'(x)$ for every $x \in I$, and if they are all continuously differentiable, then so is $G_m$.
   - (iv) (Integrals) When $a < b$ and $X = [a, b]$: if all the $f_n$ with $0 \le n \le m$ are Riemann integrable, then $G_m$ is Riemann integrable and $\int_a^b G_m = \sum_{n=0}^{m} \int_a^b f_n$. When $X = I$ is an interval and $\alpha$, $\beta \in I$: if all the $f_n$ with $0 \le n \le m$ are integrable between $\alpha$ and $\beta$, then so is $G_m$, and $\int_\alpha^\beta G_m = \sum_{n=0}^{m} \int_\alpha^\beta f_n$.
7. (Functions of the form $\sum_{n=0}^{m} c_n (x - a)^n$) Let $a$ be a real number, $m$ an integer with $m \ge 0$, and $c_0, \dots, c_m$ real numbers indexed from zero (in the sense of the entry on telescoping sums), and consider the function $h : \mathbb{R} \to \mathbb{R}$ given by
   $$
   h(x) = \sum_{n=0}^{m} c_n (x - a)^n .
   $$
   At $x = a$, $(x - a)^0 = 0^0 = 1$.
   - (i) $h$ is continuously differentiable, hence a continuous function, and for every real $x$
     $$
     \begin{aligned}
     &h'(x) \\
     &= \sum_{n=1}^{m} n\,c_n (x - a)^{n-1} \\
     &= \sum_{n=0}^{m-1} (n + 1)\,c_{n+1} (x - a)^n .
     \end{aligned}
     $$
     When $m = 0$ both sums are empty and $h'$ is the constant function with value $0$.
   - (ii) $h(a) = c_0$.
   - (iii) If $I$ is an interval, the restriction $h|_I$ is continuously differentiable and $(h|_I)'(x) = h'(x)$ for every $x \in I$.
   - (iv) (One term) If $n$ is an integer with $n \ge 0$ and $c$ is a real number, the function $\mathbb{R} \to \mathbb{R}$ whose value at $x$ is $c\,(x - a)^n$ is continuously differentiable, and its derivative is the constant function with value $0$ if $n = 0$, and the function whose value at $x$ is $n\,c\,(x - a)^{n-1}$ if $n \ge 1$.
:::

## 직관

함수 몇 개를 더한 함수는 점마다 값을 더해 만듭니다. 그래서 $x$를 하나 정해 놓으면 $F_m(x)$는 실수 $f_1(x), \dots, f_m(x)$의 유한 합일 뿐이고, 극한은 들어 있지 않습니다. 앞 강의들은 두 함수가 연속이면 그 합도 연속이고, 미분가능하면 합의 미분계수가 미분계수의 합이며, 적분가능하면 합의 적분이 적분의 합이라는 것을 증명했습니다. 이 항목은 그 규칙을 항의 개수에 대해 한 번씩 되풀이해 $m$개의 합으로 넓힙니다. 함수항 급수의 부분합 함수가 바로 이것입니다.

비유하자면 물통 하나에 수도꼭지 $m$개를 틀어 놓은 것과 같습니다. 시각 $t$까지 꼭지 $n$에서 나온 물의 양을 $f_n(t)$라 하면 통에 든 물의 양은 $F_m(t)$이고, 통의 물이 불어나는 빠르기 $F_m'(t)$는 꼭지마다의 빠르기 $f_n'(t)$를 더한 것입니다. 이것이 (3)의 등식입니다. 비유가 맞는 것은 꼭지가 유한 개일 때까지입니다. 꼭지가 무한히 많으면 "더한 것"이 급수가 되고, 그때 도함수를 항마다 더해도 되는지는 따로 따져야 합니다.

(6)은 $0$부터 번호를 붙인 열을 번호를 한 칸 옮긴 열로 읽어 (1)–(5)를 그대로 쓰는 것이고, (7)은 그 한 경우입니다. $n \ge 1$이면 $(x - a)^n$을 미분해 $n(x - a)^{n-1}$이 되고 $n = 0$인 상수항은 미분하면 $0$이므로, 남은 항의 번호를 하나 내리면 도함수도 같은 꼴 $\sum_{n=0}^{m-1} d_n (x - a)^n$이 됩니다. 이때 새 계수는 $d_n = (n + 1)c_{n+1}$입니다.

## 증명

:::idea
$m$에 대한 귀납법을 쓴다. $F_0$은 값이 $0$인 상수함수이고, $F_{m+1} = F_m + f_{m+1}$이므로 두 함수의 합에 대한 연속, 미분, 적분의 규칙을 한 번씩 쓰면 된다. $0$부터 번호가 붙은 열은 한 칸 옮긴 열의 부분합 함수로 읽는다.
:::

:::hint
$F_{m+1}(x)$를 $F_m(x)$와 $f_{m+1}(x)$로 나타내는 것은 실수의 유한 합의 끝항 떼기이다.
:::

:::hint
(7)에서는 $n$번째 항이 $c_n(x - a)^n$인 함수가 $x - a$와 $x^n$의 합성의 상수배라는 것을 쓰고, $m$보다 큰 번호에는 영함수를 두어 0부터 번호가 붙은 사상의 열을 만든다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)으로 다룬다. 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). 정수의 합과 차는 정수이다([[even-and-odd]]). [[order-properties-of-reals]]의 (10)에 의해 정수 사이의 부등식은 실수의 부등식으로 읽어도 뜻이 같다. 귀납법은 [[mathematical-induction|수학적 귀납법]]의 시작점이 $0$인 꼴이다. 범위에서만 정해진 항에 유한 합의 규칙을 쓰는 것은 [[linearity-and-order-of-finite-sums]]의 (8)에 의한 것이다.

**정의가 뜻을 갖는다는 것.** $m \ge 0$이면 (Z7)에 의해 $1 - 1 = 0 \le m$이므로, 시작 번호 $1$과 끝 번호 $m$은 [[finite-sum-of-reals]]의 조건 $1 \le 1$, $1 - 1 \le m$을 만족하고 $\sum_{n=1}^{m} f_n(x)$가 정해진다. $x \in X$마다 이 실수가 식으로 정해지므로 [[recursion-theorem]]의 (1)($A = X$, $B = \mathbb{R}$)에 의해 $F_m$이 있다. 0부터 번호가 붙은 수열 $(f_n(x))_{n \ge 0}$은 [[series-indexed-from-zero]]의 진술에서처럼 재귀 정리의 (1)로 있고, $-1$ 이상인 정수 $m$에서 $\sum_{n=0}^{m} f_n(x)$는 그 항목의 정의로 정해지므로 같은 이유로 $G_m$이 있다.

**1의 증명.** $x \in X$를 잡는다. (i) [[finite-sum-of-reals]]의 (2)에 의해 $F_0(x) = \sum_{n=1}^{0} f_n(x) = 0$이고 $F_1(x) = \sum_{n=1}^{1} f_n(x) = f_1(x)$이다. $F_1$과 $f_1$은 둘 다 $X$에서 $\mathbb{R}$로의 함수이고 모든 점에서 값이 같으므로 [[function]]의 함수의 같음에 의해 $F_1 = f_1$이다. 같은 항목의 (3)을 시작 번호 $1$, 끝 번호 $m$에 쓰면 $\sum_{n=1}^{m+1} f_n(x) = \sum_{n=1}^{m} f_n(x) + f_{m+1}(x)$, 곧 $F_{m+1}(x) = F_m(x) + f_{m+1}(x)$이다.

(ii) [[finite-sum-of-reals]]의 (1)에 의해 자연수 $m$에서 $\sum_{n=1}^{m} f_n(x)$는 $(f_n(x))$의 $m$번째 부분합이다.

(iii) $0 \le m \le k$이면 $1 - 1 \le m \le k$이므로 [[splitting-and-shifting-finite-sums|유한 합의 쪼개기와 첨자 옮기기]]의 (1)에 의해 $\sum_{n=1}^{k} f_n(x) = \sum_{n=1}^{m} f_n(x) + \sum_{n=m+1}^{k} f_n(x)$이다. 양변에서 $F_m(x)$를 빼면((K…)) 결론이다.

(iv) [[pointwise-convergence]]의 (7)에 의해 $(f_n|_A)$는 $A$에서 $\mathbb{R}$로의 사상의 열이고, $x \in A$이면 제한의 정의([[adding-or-removing-an-element]])에 의해 모든 자연수 $n$에서 $f_n|_A(x) = f_n(x)$이다. 따라서 $x \in A$에서의 두 값의 수열은 같은 항을 가지므로 같은 수열이고([[sequence]]), $(f_n|_A)$의 $m$번째 부분합 함수의 $x$에서의 값은 $\sum_{n=1}^{m} f_n(x) = F_m(x) = F_m|_A(x)$이다. 두 사상은 정의역이 $A$로 같고 값이 같으므로 같다([[function]]).

(v) $X \subseteq \mathbb{R}$이면 $F_m : X \to \mathbb{R}$는 [[real-valued-function]]의 뜻의 실함수이다. 그 항목의 (4)에 의해 $F_m + f_{m+1}$의 $x$에서의 값은 $F_m(x) + f_{m+1}(x)$이고, (i)에 의해 이것은 $F_{m+1}(x)$이다. 그 항목의 (2)에 의해 $F_{m+1} = F_m + f_{m+1}$이다.

**2의 증명.** $0$ 이상인 정수 $m$에 대하여 명제 $P_m$을 "$1 \le n \le m$인 $f_n$이 모두 $c$에서 연속이면 $F_m$은 $c$에서 연속이다"로 두자. $m = 0$이면 (1)의 (i)에 의해 $F_0$은 $S$ 위의 값이 $0$인 상수함수이므로([[real-valued-function]]의 (3)) [[continuous-function]]의 (4)에 의해 $c$에서 연속이다. 따라서 $P_0$이 참이다. $k \ge 0$에서 $P_k$가 참이라 하고, $1 \le n \le k + 1$인 $f_n$이 모두 $c$에서 연속이라 하자. $1 \le n \le k$인 $n$은 (L3)의 $k < k + 1$과 (Z6)에 의해 $1 \le n \le k + 1$을 만족하므로 그런 $f_n$은 $c$에서 연속이고, $P_k$에 의해 $F_k$는 $c$에서 연속이다. $1 \le k + 1 \le k + 1$이므로 $f_{k+1}$도 $c$에서 연속이다. (1)의 (v)에 의해 $F_{k+1} = F_k + f_{k+1}$이고, [[continuity-of-sum-and-product|연속함수의 합과 곱]]의 (1)에 의해 이것은 $c$에서 연속이다. 따라서 $P_{k+1}$이 참이고, 귀납법에 의해 모든 $m \ge 0$에서 $P_m$이 참이다. $1 \le n \le m$인 $f_n$이 모두 연속함수이면 $S$의 모든 점 $c$에서 앞 문장을 쓴다.

**3의 증명.** 명제 $Q_m$을 "$1 \le n \le m$인 $f_n$이 모두 $c$에서 미분가능하면 $F_m$은 $c$에서 미분가능하고 $F_m'(c) = \sum_{n=1}^{m} f_n'(c)$이다"로 두자. 여기서 $\sum_{n=1}^{m} f_n'(c)$는 $1 \le n \le m$에서 정해진 항 $t_n = f_n'(c)$의 합이다. $m = 0$이면 $F_0$은 $I$ 위의 값이 $0$인 상수함수이므로 [[derivative]]의 (1)에 의해 $c$에서 미분가능하고 $F_0'(c) = 0$이다. 빈 합 $\sum_{n=1}^{0} f_n'(c)$는 [[finite-sum-of-reals]]의 (2)에 의해 $0$이므로 $Q_0$이 참이다. $Q_k$가 참이라 하고 $1 \le n \le k + 1$인 $f_n$이 모두 $c$에서 미분가능하다고 하자. 2의 증명과 같이 $F_k$는 $c$에서 미분가능하고 $F_k'(c) = \sum_{n=1}^{k} f_n'(c)$이며, $f_{k+1}$도 $c$에서 미분가능하다. $F_{k+1} = F_k + f_{k+1}$이므로 [[derivative-rules|미분의 규칙]]의 (2)에 의해 $F_{k+1}$은 $c$에서 미분가능하고
$$
\begin{aligned}
F_{k+1}'(c) &= F_k'(c) + f_{k+1}'(c) \\
&= \sum_{n=1}^{k} f_n'(c) + f_{k+1}'(c) \\
&= \sum_{n=1}^{k+1} f_n'(c)
\end{aligned}
$$
이다. 마지막 등식은 $1 \le n \le k + 1$에서 정해진 항 $f_n'(c)$에 [[finite-sum-of-reals]]의 (3)을 쓴 것이다. 따라서 $Q_{k+1}$이 참이다.

**4의 증명.** $1 \le n \le m$인 $f_n$이 모두 미분가능한 함수이면 $I$의 모든 점 $c$에서 그 $f_n$이 미분가능하므로 (3)에 의해 $F_m$은 $c$에서 미분가능하고 $F_m'(c) = \sum_{n=1}^{m} f_n'(c)$이다. 따라서 $F_m$은 미분가능한 함수이다.

연속미분가능에 대해서는 명제 $R_m$을 "$1 \le n \le m$인 $f_n$이 모두 연속미분가능하면 $F_m$도 연속미분가능하다"로 두고 귀납한다. $F_0$은 $I$ 위의 상수함수이므로 [[continuously-differentiable]]의 (4)에 의해 연속미분가능하다. $R_k$가 참이고 $1 \le n \le k + 1$인 $f_n$이 모두 연속미분가능하면, $F_k$와 $f_{k+1}$이 연속미분가능하므로 그 항목의 (3)에 의해 $F_{k+1} = F_k + f_{k+1}$도 연속미분가능하다.

모든 자연수 $n$에서 $f_n$이 미분가능한 함수이면, 각 $n$에서 $f_n' : I \to \mathbb{R}$는 이미 정해진 사상이므로 [[pointwise-convergence]]의 (1)($r(n, x) = f_n'(x)$)에 의해 $n$번째 항이 $f_n'$인 사상의 열이 있다. 그 $m$번째 부분합 함수의 $x$에서의 값은 수열 $(f_n'(x))$의 유한 합 $\sum_{n=1}^{m} f_n'(x)$이다. 이 수는 범위에서만 정해진 항 $f_n'(x)$의 합과 같으므로([[finite-sum-of-reals]]의 범위에서만 정해진 항의 합의 약속) 앞 문단에 의해 $F_m'(x)$이다. 두 사상은 정의역이 $I$로 같고 값이 같으므로 같다.

**5의 증명.** (i) 명제 "$1 \le n \le m$인 $f_n$이 모두 리만 적분가능하면 $F_m$도 리만 적분가능하고 $\int_a^b F_m = \sum_{n=1}^{m} \int_a^b f_n$이다"를 $m$에 대해 귀납한다. $F_0$은 $[a, b]$ 위의 값이 $0$인 상수함수이므로 [[riemann-integral]]의 (5)에 의해 적분가능하고 적분은 $0$이며, 이것은 빈 합과 같다. 귀납 단계에서는 $F_{k+1} = F_k + f_{k+1}$에 [[linearity-of-the-integral|적분의 선형성]]의 (4)를 써서 $F_{k+1}$이 적분가능하고 $\int_a^b F_{k+1} = \int_a^b F_k + \int_a^b f_{k+1}$임을 얻고, 3의 증명과 같이 [[finite-sum-of-reals]]의 (3)으로 $\sum_{n=1}^{k+1} \int_a^b f_n$과 같음을 본다.

(ii) 같은 귀납을 한다. $F_0$은 $\alpha$와 $\beta$ 사이에 있는 모든 점에서 값이 $0$이므로 [[oriented-integral]]의 (4)에 의해 $\alpha$와 $\beta$ 사이에서 적분가능하고 $\int_\alpha^\beta F_0 = 0 \cdot (\beta - \alpha) = 0$이다((K9)). 귀납 단계에서는 [[linearity-of-the-integral]]의 (6)을 쓴다.

**6의 증명.** (i) 자연수 $j$에 대하여 (Z1)과 (Z7)에 의해 $0 \le j - 1$이므로 $f_{j-1}$은 이미 정해진 사상이다. [[pointwise-convergence]]의 (1)을 $r(j, x) = f_{j-1}(x)$로 쓰면 $j$번째 항 $g_j$가 모든 $x$에서 $g_j(x) = f_{j-1}(x)$를 만족하는 사상의 열 $(g_j)$가 있고, [[function]]의 함수의 같음에 의해 $g_j = f_{j-1}$이다. $x \in X$이면 값의 수열 $(g_j(x))$의 $j$번째 항은 $f_{j-1}(x)$이므로, 이 수열은 0부터 번호가 붙은 수열 $(f_n(x))_{n \ge 0}$을 [[series-indexed-from-zero]]의 뜻으로 한 칸 옮긴 수열이다. 그 항목의 유한 합의 정의에 의해 $-1$ 이상인 $m$에서
$$
G_m(x) = \sum_{n=0}^{m} f_n(x) = \sum_{j=1}^{m+1} g_j(x)
$$
이고, $m + 1 \ge 0$이므로 오른쪽은 $(g_j)$의 $(m + 1)$번째 부분합 함수의 $x$에서의 값이다. 두 사상은 값이 같으므로 같다. 나머지 등식은 [[series-indexed-from-zero]]의 (1)(빈 합과 한 항), (2)(끝항 떼기), (3)(첫 항 떼기)을 $x$마다 쓴 것이고, $G_0 = f_0$은 함수의 같음에 의한 것이다.

(ii)–(iv) $0 \le n \le m$인 정수 $n$과 $1 \le j \le m + 1$인 정수 $j$는 $j = n + 1$로 하나씩 짝지어지고((Z7)), 그때 $g_j = f_n$이다. 따라서 "$0 \le n \le m$인 $f_n$이 모두 ○○이다"는 "$1 \le j \le m + 1$인 $g_j$가 모두 ○○이다"와 같다. (i)에 의해 $G_m$은 $(g_j)$의 $(m + 1)$번째 부분합 함수이므로, (2), (3), (4), (5)를 $(g_j)$와 $m + 1$에 쓰면 연속, 미분가능, 연속미분가능, 적분가능에 관한 결론을 얻는다. 등식은 예컨대
$$
\begin{aligned}
G_m'(c) &= \sum_{j=1}^{m+1} g_j'(c) \\
&= \sum_{j=1}^{m+1} f_{j-1}'(c) = \sum_{n=0}^{m} f_n'(c)
\end{aligned}
$$
이다. 마지막 등식은 [[series-indexed-from-zero]]의 범위에서만 정해진 항의 합의 정의($0 \le n \le m$에서 정해진 $f_n'(c)$의 합은 $\sum_{j=1}^{m+1} f_{j-1}'(c)$)이다. 도함수의 값 $G_m'(x)$와 두 적분의 등식도 같은 정의로 옮긴다.

**7의 증명.** (iv)를 먼저 보인다. $u(x) = 1 \cdot x + (-a)$로 정한 $u : \mathbb{R} \to \mathbb{R}$를 두면 (K…)에 의해 $u(x) = x - a$이다. $\mathbb{R}$은 구간이다([[interval]]의 (2)). [[continuously-differentiable]]의 (4)에 의해 $u$는 연속미분가능하고 $u'$은 값이 $1$인 상수함수이며, $0$ 이상인 정수 $n$에서 [[power-function-is-continuous]]의 (1)의 $p_n : \mathbb{R} \to \mathbb{R}$($p_n(x) = x^n$)는 연속미분가능하고 $p_0'$은 값이 $0$인 상수함수, $n \ge 1$이면 $p_n' = n\,p_{n-1}$이다. 그 항목의 (5)($I_1 = I_2 = \mathbb{R}$)에 의해 $p_n \circ u : \mathbb{R} \to \mathbb{R}$는 연속미분가능하고 $(p_n \circ u)'(x) = p_n'(u(x))\,u'(x) = p_n'(x - a)$이다. 곧 $(p_n \circ u)(x) = (x - a)^n$이고, 그 도함수의 $x$에서의 값은 $n = 0$이면 $0$, $n \ge 1$이면 $n (x - a)^{n-1}$이다((K4)). 실수 $c$에 대하여 $x$에서의 값이 $c\,(x - a)^n$인 함수는 $c\,(p_n \circ u)$([[real-valued-function]]의 (4)의 상수배)이므로, [[continuously-differentiable]]의 (3)에 의해 연속미분가능하고 그 도함수의 $x$에서의 값은 $c\,(p_n \circ u)'(x)$, 곧 $n = 0$이면 $c \cdot 0 = 0$((K9)), $n \ge 1$이면 $c \cdot n (x - a)^{n-1} = n\,c\,(x - a)^{n-1}$((K1)–(K3))이다. 이로써 (iv)가 증명되었다.

(i) $0$ 이상인 정수 $n$마다 사상 $\varphi_n$을, $n \le m$이면 $c_n (p_n \circ u)$([[real-valued-function]]의 (4)의 상수배), $m < n$이면 $\mathbb{R}$ 위의 값이 $0$인 상수함수로 정한다. (Z5)에 의해 각 $n$은 정확히 한 경우에 들고, 이렇게 정해진 사상들을 [[recursion-theorem]]의 (1)로 모으면 0부터 번호가 붙은 사상의 열 $(\varphi_n)_{n \ge 0}$이 있다. $0 \le n \le m$이면 (iv)에 의해 $\varphi_n$은 연속미분가능하고 $\varphi_0'(x) = 0$, $1 \le n \le m$이면 $\varphi_n'(x) = n\,c_n (x - a)^{n-1}$이다. $m < n$이면 $\varphi_n$은 상수함수이므로 [[continuously-differentiable]]의 (4)에 의해 연속미분가능하고 도함수의 값은 $0$이다.

$0 \le n \le m$에서 $\varphi_n(x) = c_n (x - a)^n$이므로, [[series-indexed-from-zero]]의 범위에서만 정해진 항의 합의 정의에 의해 $(\varphi_n)_{n \ge 0}$의 0부터의 $m$번째 부분합 함수의 $x$에서의 값은 $h(x)$이고, 그 부분합 함수는 $h$와 같다. (6)의 (iii)에 의해 $h$는 연속미분가능하고 모든 실수 $x$에서 $h'(x) = \sum_{n=0}^{m} \varphi_n'(x)$이다. [[series-indexed-from-zero]]의 (3)($m \ge 0$)을 0부터 번호가 붙은 수열 $(\varphi_n'(x))_{n \ge 0}$에 쓰면 이것은
$$
\begin{aligned}
&\varphi_0'(x) + \sum_{n=1}^{m} \varphi_n'(x) \\
&\quad = 0 + \sum_{n=1}^{m} n\,c_n (x - a)^{n-1}
\end{aligned}
$$
이고((K4)), 둘째 합은 $1 \le n \le m$에서 정해진 항 $n\,c_n (x - a)^{n-1}$의 합이다($n - 1 \ge 0$이므로 거듭제곱이 정해진다). 이로써 첫째 등식을 얻는다. 둘째 등식: $0 \le n \le m - 1$에서 정해진 항 $t_n = (n + 1) c_{n+1} (x - a)^n$($n + 1 \le m$이므로 $c_{n+1}$이 정해진다)의 합은 [[series-indexed-from-zero]]의 정의에 의해 $\sum_{j=1}^{m} t_{j-1}$이고, $t_{j-1} = j\,c_j (x - a)^{j-1}$이므로 이것은 첫째 합과 같은 수이다(합의 첨자의 글자는 바꿔도 된다). $m = 0$이면 첫째 합은 [[finite-sum-of-reals]]의 (2)에 의해, 둘째 합은 [[series-indexed-from-zero]]의 (1)에 의해 빈 합 $0$이다. 연속미분가능한 함수는 연속함수이다([[continuously-differentiable]]의 (1)).

(ii) $a - a = 0$이고 [[power-of-a-real-number|실수의 거듭제곱]]의 정의에 의해 $0^0 = 1$, 그 항목의 (2)의 (iv)에 의해 $n \ge 1$이면 $0^n = 0$이다. [[series-indexed-from-zero]]의 (3)과 (4)(범위에서만 정해진 항)에 의해
$$
\begin{aligned}
h(a) &= c_0 \cdot 0^0 + \sum_{n=1}^{m} c_n \cdot 0^n \\
&= c_0 + \sum_{n=1}^{m} 0
\end{aligned}
$$
이고((K4), (K9)), [[linearity-and-order-of-finite-sums]]의 (2)에 의해 $\sum_{n=1}^{m} 0 = m \cdot 0 = 0$이다. 따라서 $h(a) = c_0$이다.

(iii) [[continuously-differentiable]]의 (2)에 의해 $h|_I$는 연속미분가능하고 $(h|_I)' = h'|_I$이다. $\blacksquare$
:::

## 예시와 반례

:::example[망원 합이 되는 부분합 함수]
$\mathbb{R}$에서 $\mathbb{R}$로의 사상의 열 $(f_n)$을 $f_n(x) = x^n - x^{n+1}$로 정합니다([[pointwise-convergence|사상의 열과 점별 수렴]]의 (1)). $v_i = x^{i+1}$($0 \le i \le m$)로 두면 $f_n(x) = v_{n-1} - v_n$이므로, [[telescoping-sum|망원 합]]의 (2)에 의해
$$
\begin{aligned}
F_m(x) &= \sum_{n=1}^{m} (v_{n-1} - v_n) \\
&= v_0 - v_m = x - x^{m+1}
\end{aligned}
$$
입니다($v_0 = x^1 = x$). [[power-function-is-continuous]]의 (1)의 $p_n$으로 쓰면 각 $f_n$은 $p_n - p_{n+1}$이므로 [[continuously-differentiable]]의 (3), (4)에 의해 미분가능하고 $f_n'(x) = n x^{n-1} - (n + 1) x^n$입니다. 이번에는 $w_i = (i + 1) x^i$로 두면 $f_n'(x) = w_{n-1} - w_n$이므로 (4)와 망원 합의 (2)에 의해
$$
F_m'(x) = w_0 - w_m = 1 - (m + 1) x^m
$$
입니다($w_0 = 1 \cdot x^0 = 1$, $x = 0$에서도 $0^0 = 1$). $F_m = p_1 - p_{m+1}$을 직접 미분해도 $1 - (m + 1) x^m$이 나옵니다.
:::

:::example[중심이 2 인 경우]
(7)에서 $a = 2$, $m = 3$, $c_0 = 1$, $c_1 = -1$, $c_2 = 0$, $c_3 = 2$로 두면 $h(x) = 1 - (x - 2) + 2(x - 2)^3$입니다. (7)의 (i)의 둘째 꼴로
$$
\begin{aligned}
h'(x) &= 1 \cdot c_1 + 2\,c_2 (x - 2) \\
&\qquad + 3\,c_3 (x - 2)^2 \\
&= -1 + 6(x - 2)^2
\end{aligned}
$$
이고, (ii)에 의해 $h(2) = c_0 = 1$입니다. $h'(2) = -1 = c_1$이고, $x = 3$에서는 $h(3) = 1 - 1 + 2 = 2$, $h'(3) = -1 + 6 = 5$입니다.
:::

:::counterexample[항은 미분가능하지 않은데 합은 미분가능한 예]
$\mathbb{R}$ 위에서 $f_1(x) = |x|$, $f_2(x) = -|x|$로 두면 $F_2(x) = |x| - |x| = 0$이므로 $F_2$는 값이 $0$인 상수함수이고 $0$에서 미분가능합니다([[derivative]]의 (1)). 그런데 $f_1$은 $0$에서 미분가능하지 않고([[derivative]]의 (3)), $f_2$가 $0$에서 미분가능하다면 [[derivative-rules|미분의 규칙]]의 (1)에 의해 $f_1 = (-1) f_2$도 그래야 하므로 $f_2$도 $0$에서 미분가능하지 않습니다. 따라서 (3)의 거꾸로, 곧 "$F_m$이 미분가능하면 항들도 미분가능하다"는 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$f_n$이 $[0, 1]$ 위의 $x$에서의 값이 $x^{n-1}$인 함수일 때 $\int_0^1 F_3$은 얼마인가?]
각 $f_n$은 $p_{n-1}$의 제한이므로 [[continuously-differentiable]]의 (1)에 의해 적분가능하고, [[antiderivative-and-integral-of-power|거듭제곱의 원시함수와 적분]]의 (3)에 의해 $\int_0^1 x^{n-1}\,dx = (1^n - 0^n)\,n^{-1} = n^{-1}$입니다. (5)의 (i)에 의해 $\int_0^1 F_3 = 1 + \tfrac{1}{2} + \tfrac{1}{3} = \tfrac{11}{6}$입니다.
:::

:::check[(7)에서 $m = 0$이면 무엇을 말하는가?]
$h(x) = c_0 (x - a)^0 = c_0$이므로 $h$는 값이 $c_0$인 상수함수입니다. (i)은 $h'$이 값이 $0$인 상수함수라는 것이고, 이것은 [[derivative]]의 (1)과 맞습니다. (ii)는 $h(a) = c_0$입니다.
:::
