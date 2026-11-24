---
title: 다항함수의 계수와 차수
title_en: Coefficients and Degree of a Polynomial Function
aliases: [계수, 차수, 최고차계수, 상수항, 계수의 유일성, coefficient, degree, leading coefficient, constant term, monic]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: t⁰, t¹, …, tⁿ 은 일차독립이고 𝒫ₙ 의 기저이며 dim 𝒫ₙ = n + 1 이다. 그래서 다항함수의 tᵏ 의 계수가 하나로 정해지고, 영함수가 아닌 다항함수의 차수와 최고차계수를 정의한다. 곱의 차수는 차수의 합이고 최고차계수는 최고차계수의 곱이며, 합·스칼라배의 차수와 근의 개수의 상계를 차수로 말한다.
requires: [function, mathematical-induction, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, subspace, finite-sum-of-vectors, linear-combination-and-span, linear-independence, basis, dimension, sequences-in-a-subspace, linear-map, eigenvectors-of-distinct-eigenvalues, power-of-a-real-number, finite-product-of-reals, polynomial-function, product-of-polynomial-functions, factor-theorem, roots-of-polynomial-function]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 1장 2절, Example 2.3, p.7; 1장 1절 연습문제 1.2 c, 1.3 d, e, p.5; 4장 1절, 연습문제 1.11, p.105; 8장 1절 연습문제 1.2, p.224
    checked: original
    note: "출처는 1장 Example 2.3(p.7)에서 e₀ := 1, …, eₙ := tⁿ 에 대해 '분명히(Clearly) 모든 다항식 p(t) = a₀ + a₁t + … + aₙtⁿ 은 p = a₀e₀ + … + aₙeₙ 으로 유일하게 표현된다'고 적고 이 열을 Pₙ 의 표준기저라 부른다. 표현의 유일성, 곧 이 항목의 (1)과 (2)를 증명하지 않는다. 출처는 '차수(degree)'와 'deg p'(8장 연습문제 1.2, p.224)를 정의 없이 쓴다. 1장 연습문제 1.3 d, e(p.5)는 차수가 n 인 두 다항식의 합의 차수가 n 인지, 차수가 n 이하인 두 다항식의 합의 차수가 n 이하인지 묻는데, 이 항목의 (6)과 예시 '차수가 떨어지는 합'이 같은 물음을 다룬다. 1장 연습문제 1.2 c(p.5)는 차수가 정확히 n 인 다항식 전체가 벡터공간인지 묻는데, 반례 '차수가 정확히 2 인 다항함수 전체가 부분공간이 아닌 예'가 같은 물음이다. 4장 연습문제 1.11(p.105)은 특성다항식의 λ^{n−1} 의 계수를 비교하게 하는데, 이 항목의 (9)는 그런 계수 계산에 쓸 수 있는 꼴이다. 출처 8장 1.4.1(p.222)은 범함수 p ↦ p⁽ᵏ⁾(0)/k! 들이 tᵏ 들의 쌍대 열임을 확인하고 테일러 공식 p(t) = Σ p⁽ᵏ⁾(0)/k! tᵏ 를 얻는데, 이 공식은 계수가 도함수로 정해진다는 것, 곧 (2)와 같은 내용을 미분으로 담는다(그 절은 tᵏ 들이 기저라는 것을 이미 아는 것으로 두고, 쌍대 열이 있으면 일차독립이라는 것은 p.223 의 Remark 와 연습문제 1.1 a)에 있다). 일차독립의 증명(t = 0 을 넣고 t 를 떼어 내는 귀납), 차수의 정의, (3)–(9)의 진술과 증명은 이 사이트의 것이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 뒤 항목에 기대던 반례 2건을 바꾸고, 예시 메모의 부정 주장 2건을 지웠으며, 정의하지 않은 표기와 범위 없는 변수를 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$t^k$, $\mathcal{P}_n$, 영함수 $o$, $0$부터 번호가 붙은 계수의 표기, 표현에서의 계수는 [[polynomial-function|다항함수]]의 것이다. 함수의 곱과 거듭제곱은 [[product-of-polynomial-functions|다항함수의 곱]]의 것이고, 근과 "서로 다른 열"은 [[roots-of-polynomial-function|다항함수의 근의 개수]]의 것이다.

1. (일차독립) 정수 $n \ge 0$마다 열 $t^0, t^1, \dots, t^n$은 $\mathbb{R}^{\mathbb{R}}$에서 [[linear-independence|일차독립]]이다. 따라서 이 열은 ([[subspace|(P1)]]의 제한한 연산으로 본) 벡터공간 $\mathcal{P}_n$의 [[basis|기저]]이고, $\mathcal{P}_n$은 유한차원이며 $\dim \mathcal{P}_n = n + 1$이다.
2. (계수의 유일성) (i) $0$부터 번호가 붙은 실수의 열 $a_0, \dots, a_n$과 $b_0, \dots, b_n$에 대하여 $a_0 t^0 + \cdots + a_n t^n = b_0 t^0 + \cdots + b_n t^n$이면 모든 $k$에서 $a_k = b_k$이다. (ii) $m \le n$이고 $a_0 t^0 + \cdots + a_m t^m = b_0 t^0 + \cdots + b_n t^n$이면 $k \le m$에서 $a_k = b_k$이고 $m < k \le n$에서 $b_k = 0$이다.

   **계수.** $f$가 다항함수이고 $k \ge 0$이 정수라 하자. $f \in \mathcal{P}_n$인 정수 $n \ge 0$과 표현 $f = a_0 t^0 + \cdots + a_n t^n$을 하나 잡아, $k \le n$이면 $a_k$를, $k > n$이면 $0$을 $f$의 **$t^k$의 계수**(coefficient of $t^k$)라 한다. (ii)에 의해 이 수는 $n$과 표현을 어떻게 잡든 같다. $t^0$의 계수를 **상수항**(constant term)이라 한다.

   (iii) $f \in \mathcal{P}_n$이면 $f = a_0 t^0 + \cdots + a_n t^n$인 $a_k$는 $f$의 $t^k$의 계수이고, $k > n$이면 $f$의 $t^k$의 계수는 $0$이다. 상수항은 $f(0)$이다. 두 다항함수가 같은 것은 정확히 모든 $k \ge 0$에서 $t^k$의 계수가 같을 때이고, 다항함수 $f$가 $o$인 것은 정확히 모든 계수가 $0$일 때이다.
3. (계수의 계산) $f$, $g$가 다항함수이고 $\alpha$, $c$가 실수이며 $j$, $k \ge 0$이 정수이고, $f$의 $t^k$의 계수를 $a_k$라 하자. (i) $f + g$, $f - g$, $\alpha f$의 $t^k$의 계수는 각각 $f$와 $g$의 $t^k$의 계수의 합, 차, $\alpha a_k$이다. (ii) $t^j f$의 $t^k$의 계수는 $k \ge j$이면 $a_{k-j}$이고 $k < j$이면 $0$이다. (iii) $(t - c)f$의 $t^0$의 계수는 $-c\,a_0$이고, $k \ge 1$이면 $t^k$의 계수는 $a_{k-1} - c\,a_k$이다.
4. (차수) $f$가 영함수가 아닌 다항함수이면, $t^k$의 계수가 $0$이 아닌 정수 $k \ge 0$ 전체의 집합은 공집합이 아니고 위로 유계이므로 [[well-ordering-principle|최대 원소]]를 갖는다. 그 최대 원소를 $f$의 **차수**(degree)라 하고 $\deg f$로 쓰며, $f$의 $t^{\deg f}$의 계수를 **최고차계수**(leading coefficient)라 한다. 최고차계수는 $0$이 아니다. 영함수의 차수는 정의하지 않는다. 다음이 성립한다.
   - 다항함수 $f$와 정수 $n \ge 0$에 대하여, $f \in \mathcal{P}_n$인 것은 정확히 $f = o$이거나 $\deg f \le n$일 때이다. 특히 영함수가 아닌 다항함수 $f$는 $\mathcal{P}_{\deg f}$에 든다.
   - 다항함수 $f$의 차수가 $0$인 것은 정확히 $f$가 값이 $0$이 아닌 상수함수일 때이다.
   - 정수 $k \ge 0$과 실수 $c$에 대하여 $t^k$의 차수는 $k$이고 $t - c$의 차수는 $1$이며, 최고차계수는 둘 다 $1$이다.
5. (곱의 차수) $f$, $g$가 영함수가 아닌 다항함수이면 $fg$는 영함수가 아니고, $\deg(fg) = \deg f + \deg g$이며, $fg$의 최고차계수는 $f$와 $g$의 최고차계수의 곱이다. 따라서 두 다항함수 $f$, $g$에 대하여 $fg = o$이면 $f = o$이거나 $g = o$이다.
6. (합과 스칼라배의 차수) $f$, $g$가 영함수가 아닌 다항함수라 하자. (i) 실수 $\alpha \ne 0$이면 $\deg(\alpha f) = \deg f$이고 최고차계수는 $\alpha$와 $f$의 최고차계수의 곱이다. (ii) $\deg f \le n$이고 $\deg g \le n$이면 $f + g = o$이거나 $\deg(f + g) \le n$이다. (iii) $\deg f < \deg g$이면 $f + g \ne o$이고 $\deg(f + g) = \deg g$이며, $f + g$의 최고차계수는 $g$의 최고차계수이다.
7. (차수와 근) (i) 영함수가 아닌 다항함수 $f$에 대하여, 모든 항이 $f$의 근인 서로 다른 실수의 열의 길이는 $\deg f$ 이하이다. (ii) $n \ge 0$이고 두 다항함수 $f$, $g$가 각각 영함수이거나 차수가 $n$ 이하이며, 서로 다른 실수의 열 $c_1, \dots, c_{n+1}$의 모든 항에서 값이 같으면 $f = g$이다. (iii) 두 다항함수 $f$, $g$와 실수 $c$에 대하여 $x \ne c$인 모든 $x$에서 $f(x) = g(x)$이면 $f = g$이다.
8. (최고차계수가 $1$인 곱) $p \ge 0$이고 $f_1, \dots, f_p$가 다항함수의 열이며, 모든 $i$에서 $f_i \ne o$이고 최고차계수가 $1$이며 $\deg f_i = d_i$라 하자. 그러면 $f_1 \cdots f_p \ne o$이고 $\deg(f_1 \cdots f_p) = d_1 + \cdots + d_p$이며 최고차계수는 $1$이다. 특히 정수 $k \ge 0$과 실수 $c$에 대하여 $(t - c)^k$의 차수는 $k$이고 최고차계수는 $1$이다. 또 실수의 열 $\mu_1, \dots, \mu_r$, $0$ 이상인 정수의 열 $m_1, \dots, m_r$, 실수 $a \ne 0$에 대하여 $a(t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}$은 영함수가 아니고 차수가 $m_1 + \cdots + m_r$이며 최고차계수가 $a$이다.
9. (최고차 다음의 계수) $f$, $g$가 영함수가 아니고 최고차계수가 $1$인 다항함수이며 $\deg f = m$, $\deg g = n$, $m + n \ge 1$이라 하자. $\alpha$를 $m \ge 1$이면 $f$의 $t^{m-1}$의 계수, $m = 0$이면 $0$으로 두고, $\beta$를 $g$와 $n$으로 같게 둔다. 그러면 $fg$의 $t^{m+n-1}$의 계수는 $\alpha + \beta$이다. 특히 정수 $k \ge 1$과 실수 $c$에 대하여 $(t - c)^k$의 $t^{k-1}$의 계수는 $-kc$이다.
:::

:::english
$t^k$, $\mathcal{P}_n$, the zero function $o$, the notation for coefficients indexed from $0$ and coefficients in a representation are those of the entry on polynomial functions. Products and powers of functions are those of the entry on products of polynomial functions, and roots and "distinct sequences" are those of the entry on the number of roots of a polynomial function.

1. (Linear independence) For every integer $n \ge 0$, the sequence $t^0, t^1, \dots, t^n$ is linearly independent in $\mathbb{R}^{\mathbb{R}}$. Hence this sequence is a basis of the vector space $\mathcal{P}_n$ (with the restricted operations of (P1)), $\mathcal{P}_n$ is finite-dimensional, and $\dim \mathcal{P}_n = n + 1$.
2. (Uniqueness of coefficients) (i) For sequences of real numbers $a_0, \dots, a_n$ and $b_0, \dots, b_n$ indexed from $0$, if $a_0 t^0 + \cdots + a_n t^n = b_0 t^0 + \cdots + b_n t^n$, then $a_k = b_k$ for every $k$. (ii) If $m \le n$ and $a_0 t^0 + \cdots + a_m t^m = b_0 t^0 + \cdots + b_n t^n$, then $a_k = b_k$ for $k \le m$ and $b_k = 0$ for $m < k \le n$.

   **Coefficients.** Let $f$ be a polynomial function and $k \ge 0$ an integer. Take an integer $n \ge 0$ with $f \in \mathcal{P}_n$ and a representation $f = a_0 t^0 + \cdots + a_n t^n$; the **coefficient of $t^k$** in $f$ is $a_k$ if $k \le n$ and $0$ if $k > n$. By (ii) this number does not depend on the choice of $n$ and of the representation. The coefficient of $t^0$ is called the **constant term**.

   (iii) If $f \in \mathcal{P}_n$ and $f = a_0 t^0 + \cdots + a_n t^n$, then $a_k$ is the coefficient of $t^k$ in $f$, and the coefficient of $t^k$ in $f$ is $0$ for $k > n$. The constant term is $f(0)$. Two polynomial functions are equal exactly when their coefficients of $t^k$ agree for every $k \ge 0$, and a polynomial function $f$ is $o$ exactly when all its coefficients are $0$.
3. (Computing coefficients) Let $f$, $g$ be polynomial functions, $\alpha$, $c$ real numbers, $j, k \ge 0$ integers, and let $a_k$ be the coefficient of $t^k$ in $f$. (i) The coefficients of $t^k$ in $f + g$, $f - g$ and $\alpha f$ are, respectively, the sum and the difference of the coefficients of $t^k$ in $f$ and $g$, and $\alpha a_k$. (ii) The coefficient of $t^k$ in $t^j f$ is $a_{k-j}$ if $k \ge j$ and $0$ if $k < j$. (iii) The coefficient of $t^0$ in $(t - c)f$ is $-c\,a_0$, and for $k \ge 1$ the coefficient of $t^k$ is $a_{k-1} - c\,a_k$.
4. (Degree) If $f$ is a polynomial function other than the zero function, then the set of integers $k \ge 0$ for which the coefficient of $t^k$ is nonzero is nonempty and bounded above, so it has a greatest element. That greatest element is called the **degree** of $f$ and written $\deg f$, and the coefficient of $t^{\deg f}$ in $f$ is called the **leading coefficient**. The leading coefficient is nonzero. The degree of the zero function is not defined. The following hold.
   - For a polynomial function $f$ and an integer $n \ge 0$, $f \in \mathcal{P}_n$ exactly when $f = o$ or $\deg f \le n$. In particular, a polynomial function $f$ other than the zero function lies in $\mathcal{P}_{\deg f}$.
   - A polynomial function $f$ has degree $0$ exactly when $f$ is a constant function with nonzero value.
   - For an integer $k \ge 0$ and a real number $c$, $t^k$ has degree $k$ and $t - c$ has degree $1$, and both have leading coefficient $1$.
5. (Degree of a product) If $f$, $g$ are polynomial functions other than the zero function, then $fg$ is not the zero function, $\deg(fg) = \deg f + \deg g$, and the leading coefficient of $fg$ is the product of the leading coefficients of $f$ and $g$. Hence for two polynomial functions $f$, $g$, if $fg = o$, then $f = o$ or $g = o$.
6. (Degree of sums and scalar multiples) Let $f$, $g$ be polynomial functions other than the zero function. (i) If $\alpha \ne 0$ is a real number, then $\deg(\alpha f) = \deg f$, and the leading coefficient is $\alpha$ times the leading coefficient of $f$. (ii) If $\deg f \le n$ and $\deg g \le n$, then $f + g = o$ or $\deg(f + g) \le n$. (iii) If $\deg f < \deg g$, then $f + g \ne o$, $\deg(f + g) = \deg g$, and the leading coefficient of $f + g$ is that of $g$.
7. (Degree and roots) (i) For a polynomial function $f$ other than the zero function, the length of a distinct sequence of real numbers all of whose terms are roots of $f$ is at most $\deg f$. (ii) If $n \ge 0$, each of two polynomial functions $f$, $g$ is the zero function or has degree at most $n$, and they agree at every term of a distinct sequence of real numbers $c_1, \dots, c_{n+1}$, then $f = g$. (iii) For two polynomial functions $f$, $g$ and a real number $c$, if $f(x) = g(x)$ for every $x \ne c$, then $f = g$.
8. (Products with leading coefficient $1$) Let $p \ge 0$, and let $f_1, \dots, f_p$ be a sequence of polynomial functions such that for every $i$, $f_i \ne o$, its leading coefficient is $1$, and $\deg f_i = d_i$. Then $f_1 \cdots f_p \ne o$, $\deg(f_1 \cdots f_p) = d_1 + \cdots + d_p$, and its leading coefficient is $1$. In particular, for an integer $k \ge 0$ and a real number $c$, $(t - c)^k$ has degree $k$ and leading coefficient $1$. Also, for a sequence of real numbers $\mu_1, \dots, \mu_r$, a sequence of integers $m_1, \dots, m_r$ that are at least $0$, and a real number $a \ne 0$, the function $a(t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}$ is not the zero function, has degree $m_1 + \cdots + m_r$, and has leading coefficient $a$.
9. (The coefficient below the leading one) Let $f$, $g$ be polynomial functions other than the zero function with leading coefficient $1$, $\deg f = m$, $\deg g = n$, and $m + n \ge 1$. Let $\alpha$ be the coefficient of $t^{m-1}$ in $f$ if $m \ge 1$ and $0$ if $m = 0$, and define $\beta$ from $g$ and $n$ in the same way. Then the coefficient of $t^{m+n-1}$ in $fg$ is $\alpha + \beta$. In particular, for an integer $k \ge 1$ and a real number $c$, the coefficient of $t^{k-1}$ in $(t - c)^k$ is $-kc$.
:::

## 직관

[[polynomial-function|다항함수]]는 함수로 정의했으므로, 같은 함수를 계수가 다른 두 일차결합으로 쓸 수 있는지는 따로 따져야 합니다. (1)은 그럴 수 없다는 것입니다. $a_0 + a_1 x + \cdots + a_n x^n$이 모든 $x$에서 $0$이면 $x = 0$을 넣어 $a_0 = 0$을 얻고, 남은 식에서 $x$를 하나 떼어 내면 $x \ne 0$에서 $a_1 + a_2 x + \cdots + a_n x^{n-1} = 0$입니다. 한 점을 뺀 모든 점에서 $0$인 다항함수는 영함수이므로([[roots-of-polynomial-function|근의 개수]]의 (4)) 같은 일을 되풀이할 수 있습니다. 출처가 "분명히" 하나뿐이라고 넘어가는 곳을 이렇게 채웁니다.

계수가 하나로 정해지면 차수를 말할 수 있습니다. 차수는 $0$이 아닌 계수가 붙은 가장 높은 지수입니다. 영함수는 $0$이 아닌 계수가 없으므로 차수가 없습니다. 그래서 "차수가 $n$ 이하"라는 말을 영함수에 쓰지 않고, $\mathcal{P}_n$을 "영함수이거나 차수가 $n$ 이하인 다항함수 전체"로 읽습니다((4)).

곱의 차수가 차수의 합이라는 (5)는 최고차 항끼리의 곱 $a\,t^m \cdot b\,t^n = ab\,t^{m+n}$을 다른 어떤 항도 상쇄할 수 없다는 데서 나옵니다. 다른 항끼리의 곱은 지수가 $m + n$보다 작습니다. 여기서 실수의 곱 $ab$가 $0$이 아니라는 것이 쓰이므로, 영함수가 아닌 두 다항함수의 곱은 영함수가 아닙니다. 합에서는 최고차 항이 상쇄될 수 있어 차수가 떨어질 수 있습니다((6)과 아래 예시).

## 증명

:::idea
일차독립은 $x = 0$을 넣고 $t$를 하나 떼어 내는 $n$에 대한 귀납과 근의 개수 정리로 보인다. 나머지는 계수의 유일성으로 계수를 비교해 얻는다.
:::

:::hint
$f = a_0 t^0 + \cdots + a_n t^n = o$이면 $f(0) = a_0 = 0$이다. 그러면 $f = t\,g$인 $g \in \mathcal{P}_{n-1}$이 있다. $g$는 어디서 $0$인가?
:::

:::hint
곱의 차수는 $f = a\,t^m + f_1$, $g = b\,t^n + g_1$로 나누고, $f_1$, $g_1$이 영함수이거나 차수가 작다는 것을 쓴다.
:::

:::proof
두 함수는 모든 $x$에서 값이 같으면 같다([[function|함수]]의 같음). (K…)는 [[real-number-arithmetic]]의 것, (H…), (C…)는 [[finite-sum-of-vectors]]의 것, (B…)는 [[vector-space-basic-properties]]의 것, (T5)는 [[linear-map]]의 것이다. [[polynomial-function|다항함수]]를 "다항함수의", [[product-of-polynomial-functions|다항함수의 곱]]을 "곱의", [[roots-of-polynomial-function|다항함수의 근의 개수]]를 "근의"로 줄여 그 번호를 인용한다. 정수의 순서는 [[prime-number|(Z1)]], [[well-ordering-principle|(Z5)–(Z8), (L1)–(L3)]]으로 다루고, 정수의 합과 차는 정수이다([[even-and-odd]]). 곱의 (1)에 의해 $u$를 $u\,t^j$로 보내는 사상은 선형사상이고 $t^j u = u\,t^j$이므로, $u = b_0 t^0 + \cdots + b_n t^n$이면 (T5)와 곱의 (1)의 $t^i t^j = t^{i+j}$에 의해
$$
t^j u = b_0 t^{j} + b_1 t^{1+j} + \cdots + b_n t^{n+j}
$$
이다(오른쪽은 $i$번째 항이 $b_{i-1} t^{(i-1)+j}$인 열의 합). 이것을 (가)라 부른다.

**(1)의 증명.** [[linear-independence|일차독립]]의 정의에 의해, $0$부터 번호가 붙은 실수의 열 $a_0, \dots, a_n$에 대하여 $a_0 t^0 + \cdots + a_n t^n = o$이면 모든 $a_k = 0$임을 보이면 된다. $n$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)을 쓴다. $n = 0$이면 $a_0 t^0 = o$의 값이 $a_0 = 0$이다.

$n$에서 성립한다고 하고 $f = a_0 t^0 + \cdots + a_{n+1} t^{n+1} = o$라 하자. 다항함수의 (3)에 의해 $a_0 = f(0) = 0$이다. $g = a_1 t^0 + a_2 t^1 + \cdots + a_{n+1} t^n$($i$번째 항이 $a_i t^{i-1}$인 길이 $n + 1$인 열의 합)으로 두면 $g \in \mathcal{P}_n$이고, (가)에 의해 $t\,g$는 $i$번째 항이 $a_i t^i$($1 \le i \le n + 1$)인 열의 합이다. 이 열은 $f$의 합의 열(길이 $n + 2$)에서 첫째 항 $a_0 t^0$을 지운 열이므로, (H6)에 의해 $f = t\,g + a_0 t^0 = t\,g + 0\,t^0 = t\,g$이다((B3)). $x \ne 0$이면 $0 = f(x) = x\,g(x)$이고 (K10)에 의해 $g(x) = 0$이다. 근의 (4)에 의해 $g = o$이고, 귀납 가정에 의해 $a_1 = \cdots = a_{n+1} = 0$이다.

이 열은 $\mathcal{P}_n$을 생성하고 모든 항이 $\mathcal{P}_n$에 든다(다항함수의 (1)). [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해 이 열은 벡터공간 $\mathcal{P}_n$의 기저이고, [[dimension|차원]]의 (1), (2)에 의해 $\mathcal{P}_n$은 유한차원이고 $\dim \mathcal{P}_n = n + 1$이다.

**(2)의 증명.** (i) 다항함수의 (1)의 차의 식과 (B12)에 의해 $(a_0 - b_0)t^0 + \cdots + (a_n - b_n)t^n = o$이고, (1)에 의해 모든 $k$에서 $a_k - b_k = 0$, 곧 (K12)의 (v)에 의해 $a_k = b_k$이다. (ii) 다항함수의 (2)에 의해 왼쪽은 $0$을 덧붙인 열 $a_0, \dots, a_m, 0, \dots, 0$의 일차결합과 같으므로 (i)에 의해 결론이 나온다.

계수가 잘 정해진다는 것: $f = a_0 t^0 + \cdots + a_m t^m = b_0 t^0 + \cdots + b_n t^n$이라 하자. (Z5)에 의해 $m \le n$이거나 $n < m$이고, 뒤의 경우는 두 표현의 이름을 바꾸면 앞의 경우가 되므로 $m \le n$이라 하자. $k \le m$이면 두 정의는 $a_k$와 $b_k$를 주고 (ii)에 의해 같다. $m < k \le n$이면 $0$과 $b_k$를 주고 (ii)에 의해 $b_k = 0$이다. $k > n$이면 둘 다 $0$이다.

(iii) 첫 문장은 정의에서 그 표현을 잡은 것이다. 상수항은 $a_0 = f(0)$이다(다항함수의 (3)). 두 다항함수 $f \in \mathcal{P}_m$, $g \in \mathcal{P}_n$은 다항함수의 (2)에 의해 모두 $\mathcal{P}_N$($N = m + n$)에 든다. 그 표현 $f = a_0 t^0 + \cdots + a_N t^N$, $g = b_0 t^0 + \cdots + b_N t^N$에서 $a_k$, $b_k$는 계수이므로, 모든 계수가 같으면 두 표현이 같아 $f = g$이다. 거꾸로 $f = g$이면 같은 함수의 계수이므로 같다. $o = 0\,t^0$의 계수는 모두 $0$이므로 마지막 문장이 나온다.

**(3)의 증명.** (i) $f$, $g$를 같은 $\mathcal{P}_N$의 표현으로 쓰고 다항함수의 (1)의 세 식과 (iii)을 쓴다. $k > N$이면 모든 계수가 $0$이고 $0 + 0 = 0$, $0 - 0 = 0$, $\alpha \cdot 0 = 0$이다. (ii) $f = a_0 t^0 + \cdots + a_n t^n$이면 (가)에 의해 $t^j f$는 $i$번째 항이 $a_{i-1} t^{(i-1)+j}$인 길이 $n + 1$인 열의 합이다. (H2)와 (H5), (B3)에 의해 이것은 앞에 $0\,t^0, \dots, 0\,t^{j-1}$($j$개)을 이어 붙인 길이 $n + j + 1$인 열의 합, 곧 $0$부터 번호가 붙은 계수 $0, \dots, 0, a_0, \dots, a_n$의 $t^0, \dots, t^{n+j}$의 일차결합과 같다. (iii)에 의해 $t^k$의 계수는 $k < j$이면 $0$, $j \le k \le n + j$이면 $a_{k-j}$이고, $k > n + j$이면 $0$인데 이때 $k - j > n$이라 $a_{k-j} = 0$이기도 하다. (iii) 곱의 (1)에 의해 $(t - c)f = (t^1 - c\,t^0)f = t\,f - c\,(t^0 f) = t\,f - c f$이다. (i)과 (ii)에 의해 $t^0$의 계수는 $0 - c\,a_0$이고, $k \ge 1$이면 $a_{k-1} - c\,a_k$이다.

**(4)의 증명.** 집합을 $K$라 하자. $K$가 공집합이면 모든 계수가 $0$이라 (2)의 (iii)에 의해 $f = o$이므로, $f \ne o$이면 $K \ne \emptyset$이다. $f \in \mathcal{P}_n$이면 $k > n$에서 계수가 $0$이므로 (Z5)에 의해 $K$의 모든 원소는 $n$ 이하이다. [[well-ordering-principle|정렬 원리]]의 (나)에 의해 최대 원소가 있고 정렬 원리의 (1)에 의해 하나뿐이다. 최고차계수는 $K$의 원소에서의 계수이므로 $0$이 아니다.

첫째 항목: $f \in \mathcal{P}_n$이고 $f \ne o$이면 방금 본 대로 $\deg f \le n$이다. 거꾸로 $f = o$이면 $o \in \mathcal{P}_n$이다. $f \ne o$이고 $d = \deg f \le n$이라 하자. $f \in \mathcal{P}_N$인 표현 $f = a_0 t^0 + \cdots + a_N t^N$을 잡는다. $N \le d$이면 다항함수의 (2)에 의해 $f \in \mathcal{P}_N \subseteq \mathcal{P}_n$이다. $d < N$이면 $d < k \le N$에서 $k \notin K$이므로 $a_k = 0$이고, 다항함수의 (2)에 의해 $a_0 t^0 + \cdots + a_d t^d$은 $0$을 덧붙인 $a_0, \dots, a_d, 0, \dots, 0$의 일차결합, 곧 $f$이다. 따라서 $f \in \mathcal{P}_d \subseteq \mathcal{P}_n$이다.

둘째 항목: $\deg f = 0$이면 첫째 항목에 의해 $f \in \mathcal{P}_0$이고 다항함수의 (4)에 의해 상수함수이며, $f \ne o$이므로 값이 $0$이 아니다. 거꾸로 $f = a\,t^0$, $a \ne 0$이면 $K = \{0\}$이다.

셋째 항목: $t^k = 0\,t^0 + \cdots + 0\,t^{k-1} + 1\,t^k$이다((C4)). 따라서 $t^k$의 계수는 $1$, 나머지 계수는 $0$이고 $K = \{k\}$이다. $t - c = (-c)t^0 + 1\,t^1$(다항함수의 (4))이므로 $t^1$의 계수가 $1$이고 $k \ge 2$의 계수는 $0$이다.

**(5)의 증명.** $m = \deg f$, $n = \deg g$, 최고차계수를 $a$, $b$라 하고 $f_1 = f - a\,t^m$, $g_1 = g - b\,t^n$으로 둔다. (3)의 (i)과 (4)의 셋째 항목에 의해 $f_1$의 $t^k$의 계수는 $k < m$에서 $f$의 것이고, $k = m$에서 $a - a = 0$, $k > m$에서 $0 - 0 = 0$이다. 따라서 $f_1 = o$이거나, $f_1 \ne o$이고 $\deg f_1 < m$(그러면 $m \ge 1$이고 (Z1)에 의해 $\deg f_1 \le m - 1$, 곧 (4)에 의해 $f_1 \in \mathcal{P}_{m-1}$)이다. $g_1$도 같다. 곱의 (1)에 의해
$$
\begin{aligned}
fg &= (a\,t^m + f_1)(b\,t^n + g_1) \\
&= ab\,t^{m+n} + r, \\
r &= a\,(t^m g_1) + b\,(t^n f_1) + f_1 g_1
\end{aligned}
$$
이다. $r$의 세 항은 모두 $k \ge m + n$에서 $t^k$의 계수가 $0$이다. $g_1 = o$이면 $t^m g_1 = o$이고, 아니면 $n \ge 1$이고 곱의 (4)에 의해 $t^m g_1 \in \mathcal{P}_{m+n-1}$이므로 (2)의 (iii)에 의해 $k > m + n - 1$에서 계수가 $0$이다. $t^n f_1$도 같다. $f_1 g_1$은 둘 중 하나가 $o$이면 $o$이고, 아니면 곱의 (4)에 의해 $\mathcal{P}_{(m-1)+(n-1)} \subseteq \mathcal{P}_{m+n-1}$에 든다. 따라서 (3)의 (i)에 의해 $fg$의 $t^{m+n}$의 계수는 $ab$이고 $k > m + n$에서는 $0$이다. (K12)의 (vi)에 의해 $ab \ne 0$이므로 $fg \ne o$이고 $\deg(fg) = m + n$이며 최고차계수는 $ab$이다. 마지막 문장은 앞의 대우이다.

**(6)의 증명.** (i) (3)의 (i)에 의해 $\alpha f$의 $t^k$의 계수는 $\alpha a_k$이고, (K10)과 (K12)의 (vi)에 의해 $\alpha a_k \ne 0$인 것은 정확히 $a_k \ne 0$일 때이다. 따라서 두 집합 $K$가 같다. (ii) (4)의 첫째 항목에 의해 $f$, $g \in \mathcal{P}_n$이고 다항함수의 (1)에 의해 $f + g \in \mathcal{P}_n$이므로 다시 (4)를 쓴다. (iii) $m = \deg f < n = \deg g$이면 $f$의 $t^n$의 계수는 $0$이므로 (3)의 (i)에 의해 $f + g$의 $t^n$의 계수는 $g$의 최고차계수이고 $0$이 아니며, $k > n$에서는 $0 + 0 = 0$이다.

**(7)의 증명.** (i) (4)에 의해 $f \in \mathcal{P}_{\deg f}$이고 근의 (1)을 쓴다. (ii) (4)에 의해 $f$, $g \in \mathcal{P}_n$이고 근의 (3)을 쓴다. (iii) $f \in \mathcal{P}_m$, $g \in \mathcal{P}_n$이면 다항함수의 (2)에 의해 둘 다 $\mathcal{P}_{m+n}$에 들고 근의 (4)를 쓴다.

**(8)의 증명.** $p$에 대한 귀납법(시작점 $0$). $p = 0$이면 곱은 $t^0$이고 차수는 $0$(빈 합), 최고차계수는 $1$이다. 처음 $p$개의 곱 $P$가 영함수가 아니고 차수가 $s = d_1 + \cdots + d_p$, 최고차계수가 $1$이면, 곱의 (2)에 의해 길이 $p + 1$인 열의 곱은 $P f_{p+1}$이고 (5)에 의해 영함수가 아니며 차수 $s + d_{p+1}$(합의 재귀 정의에 의해 $d_1 + \cdots + d_{p+1}$), 최고차계수 $1 \cdot 1 = 1$이다.

$(t - c)^k$: $k$에 대한 귀납법. $(t - c)^0 = t^0$이고, 곱의 (3)에 의해 $(t - c)^{k+1} = (t - c)^k (t - c)$이므로 (4)의 셋째 항목과 (5)로 차수는 $k + 1$, 최고차계수는 $1$이다. 마지막 문장은 $f_j = (t - \mu_j)^{m_j}$에 앞의 결과를 쓰고 (6)의 (i)을 쓴 것이다.

**(9)의 증명.** (5)의 증명의 $f_1$, $g_1$을 $a = b = 1$로 쓴다. $fg = t^{m+n} + t^m g_1 + t^n f_1 + f_1 g_1$이고 $N = m + n - 1 \ge 0$에서의 계수를 본다. $t^{m+n}$의 $t^N$의 계수는 $0$이다. $n \ge 1$이면 $N \ge m$이므로 (3)의 (ii)에 의해 $t^m g_1$의 $t^N$의 계수는 $g_1$의 $t^{n-1}$의 계수이고, (3)의 (i)과 $t^n$의 $t^{n-1}$의 계수가 $0$인 것에 의해 이것은 $\beta$이다. $n = 0$이면 $g$는 $t^0$이라 $g_1 = o$이고 계수는 $0 = \beta$이다. 같은 방법으로 $t^n f_1$의 $t^N$의 계수는 $\alpha$이다. $f_1 g_1$은 $o$이거나 $\mathcal{P}_{(m-1)+(n-1)}$에 들어 $t^N$의 계수가 $0$이다. (3)의 (i)에 의해 $fg$의 $t^N$의 계수는 $\alpha + \beta$이다.

$(t - c)^k$: $k$에 대한 귀납법(시작점 $1$). $k = 1$이면 $t - c$의 $t^0$의 계수는 $-c = -1 \cdot c$이다. $(t - c)^k$의 $t^{k-1}$의 계수가 $-kc$이면, $(t - c)^{k+1} = (t - c)^k (t - c)$에 앞 문단을 $m = k$, $n = 1$, $\alpha = -kc$, $\beta = -c$로 쓰면 $t^k$의 계수는 $-kc + (-c) = -(k + 1)c$이다((K3), (K7), (K12)의 (iv)). $\blacksquare$
:::

## 예시와 반례

:::example[차수가 떨어지는 합]
$f = 2t^0 + 3t^1 - 1\,t^2$과 $g = 1\,t^0 + 0\,t^1 + 1\,t^2$은 둘 다 차수가 $2$이고 최고차계수가 $-1$과 $1$입니다. (3)의 (i)에 의해 $f + g = 3t^0 + 3t^1 + 0\,t^2$이므로 $t^2$의 계수가 $0$이 되어 $\deg(f + g) = 1$입니다. (6)의 (ii)는 차수가 $2$ 이하라는 것만 말하고, 최고차 항이 상쇄되면 차수가 떨어질 수 있습니다.
:::

:::example[곱의 차수와 최고차계수]
$f = 1\,t^0 - 2t^1$(차수 $1$, 최고차계수 $-2$)과 $g = 4t^0 + 0\,t^1 + 3t^2$(차수 $2$, 최고차계수 $3$)의 곱은 (5)에 의해 차수가 $3$이고 최고차계수가 $-6$입니다. 전개하면 $fg = 4t^0 - 8t^1 + 3t^2 - 6t^3$으로 맞습니다.
:::

:::counterexample[차수가 정확히 2 인 다항함수 전체가 부분공간이 아닌 예]
차수가 정확히 $2$인 다항함수 전체의 집합을 $D$라 하면, 위 예시의 $f$, $g$는 $D$에 들지만 $f + g$는 차수가 $1$이라 $D$에 들지 않습니다. 또 영함수는 차수가 없어 $D$에 들지 않습니다. 따라서 $D$는 $\mathbb{R}^{\mathbb{R}}$의 부분공간이 아닙니다. 반면 "영함수이거나 차수가 $2$ 이하"인 것 전체는 (4)에 의해 부분공간 $\mathcal{P}_2$입니다.
:::

## 확인 질문

:::check[$(t - 2)^3$의 $t^2$의 계수와 상수항은 무엇인가?]
(9)에 의해 $t^2$의 계수는 $-3 \cdot 2 = -6$입니다. 상수항은 (2)의 (iii)에 의해 값 $(0 - 2)^3 = -8$입니다. 실제로 $(x - 2)^3 = x^3 - 6x^2 + 12x - 8$입니다.
:::

:::check[$f = 5(t - 1)^2 (t - 4)^3$의 차수와 최고차계수는 무엇인가?]
(8)의 마지막 문장에 의해 차수는 $2 + 3 = 5$이고 최고차계수는 $5$입니다.
:::
