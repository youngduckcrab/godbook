---
title: 복소 다항함수
title_en: Complex Polynomial Functions
aliases: [복소 다항식, 복소계수 다항함수, 호너 꼴, 평행이동한 다항함수, complex polynomial, complex polynomial function, Horner form]
kind: definition
field: complex-analysis
msc: ["30C10"]
level: undergrad
summary: 0부터 번호가 붙은 복소수의 열 a₀, …, a_d 로 z 에서의 값이 Σ a_k z^k 인 함수 ℂ → ℂ 를 복소 다항함수라 한다. 0 을 덧붙여도 같은 함수이고 합·차·상수배는 계수별로 계산되며, 호너 꼴, 일차식 z − c 를 곱한 계수, 한 점으로 옮긴 표현, 연속, 켤레, 그리고 선형대수 2 의 실계수 다항함수의 열의 합이 Σ 와 같은 값이고 그 계수로 만든 복소 다항함수가 실수를 옮긴 점에서 ι 로 같은 값을 갖는다는 것을 진술한다.
requires: [function, recursion-theorem, mathematical-induction, prime-number, well-ordering-principle, real-number-arithmetic, power-of-a-real-number, finite-sum-of-reals, linearity-and-order-of-finite-sums, series-indexed-from-zero, finite-sum-of-vectors, polynomial-function, coefficients-of-polynomial-function, ring, field, complex-number, complex-field, complex-conjugate, modulus-of-complex-number, power-of-a-complex-number, complex-finite-sum, continuity-of-complex-operations]
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.5절 Maximum principle and the fundamental theorem of algebra, 절의 머리 문단 (p.169), Lemma 11.5.4 의 증명 첫 문장 (p.170); 11.1절 Complex numbers, 11.1.1소절 The complex plane (p.139), 11.1.2소절 Complex numbers and limits (p.141); 8.1.1소절 Vector spaces, Example 8.1.5 (p.9)"
    checked: original
    note: "출처 11.5절의 머리 문단(p.169)은 복소변수 z 의 다항식을 정의역을 드러내려고 'complex polynomials' 라 부른다고만 적고 정의는 하지 않으며, Lemma 11.5.4 의 증명(p.170)에서 p(z) = a₀ + a₁z + ⋯ + a_d z^d 로 쓴다. 이 항목은 복소 다항함수를 그 식을 값으로 갖는 함수 ℂ → ℂ 로 정의하고, 계수를 0부터 번호가 붙은 복소수의 열로, 합을 복소수의 유한 합 Σ 로 둔다. 출처는 11.5절에서 'complex polynomial' 이 형식적인 식인지 함수인지 밝히지 않는다. 실계수 다항식에 대해서는 8.1.1소절 Example 8.1.5(p.9)에서 ℝ[t] 를 두고 'the variable t is really just a formal placeholder. By setting t equal to a real number, we obtain a function' 이라고 적는다. 출처 11.1.2소절(p.141)은 복소수의 대수 연산이 연속이라고 적는데, (5)는 그것을 호너 꼴의 귀납으로 복소 다항함수에 쓴 것이다. Lemma 11.5.1 의 증명(p.169)은 'Without loss of generality assume that z₀ = 0' 으로 한 점을 원점으로 옮기는데, 옮긴 함수가 다시 다항식이라는 것이 (4)이다. 예시 '$zz + 1$의 여러 표현' 의 p(i) = 0 은 출처 11.1.1소절(p.139)이 i 가 방정식 z² + 1 = 0 의 해라고 적는 것과 같은 계산이다."
  - ref: lebl-basic-analysis
    loc: "2.6절 More on series, 2.6.5소절 Power series (p.109); 3.2절 Continuous functions, 3.2.1소절 Definition and basic properties, Proposition 3.2.4 와 그 증명 (p.123–124)"
    checked: original
    note: "Lebl I 2.6.5소절(p.109)은 실수 다항식을 x − x₀ 의 다항식으로 다시 써서 x₀ 둘레의 멱급수로 펼친다고 적고 2x² − 3x + 4 = 3 + (x − 1) + 2(x − 1)² 를 예로 든다. (4)는 같은 일을 복소수에서 하고 b₀ = p(z₀), b_d = a_d 를 덧붙인 것이다. Proposition 3.2.4(p.123–124)는 실수 다항식이 연속이라는 것을 수열로 증명한다. (5)는 같은 결론을 복소 다항함수에 대해 수열 없이 호너 꼴로 증명한다."
  - ref: judson-abstract-algebra
    loc: "17.1절 Polynomial Rings (p.209–210), Example 17.1 (p.210), Theorem 17.5 (p.212); 17.5절 Exercises, 연습문제 2 (p.220)"
    checked: original
    note: "Judson 17.1절(p.209–210)은 가환환 위의 다항식을 형식적인 식 a₀ + a₁x + ⋯ + aₙxⁿ 로 정의하고, 두 다항식은 계수가 모두 같을 때 같다고 정의하며, 합과 곱을 계수로 정한다. Theorem 17.5(p.212)는 α 에서의 값 p(α) 를 주는 평가 사상이 환 준동형임을 보인다. 이 사이트는 선형대수 2 와 같이 형식적인 다항식을 두지 않고 함수로 다룬다. 그래서 (1)의 (ii)처럼 한 함수가 여러 표현을 가질 수 있고, 계수가 함수로 정해진다는 것은 정의가 아니라 정리로 증명해야 한다. (1)의 (iii)의 계수별 합과 (3)의 (ii)의 계수는 출처 17.1절의 합의 정의와 곱의 정의를 일차식 z − c 에 쓴 것과 같은 식이다. 예시 '$(z - i)(z + i)$의 계수' 는 출처 17.1절의 곱의 정의를 두 일차식에 쓴 것과 같은 계산이고, 확인 질문 '$(z - 2)(z + 1)$의 계수를 (3)의 (ii)로 구하면 무엇인가?' 는 출처 17.5절 연습문제 2 의 (b), (e)(p.220)가 두 다항식의 곱을 계산하게 하는 것과 같은 종류의 계산이다. 반례 '끝 번호가 함수만으로 정해지지 않는 예' 는 출처 Example 17.1(p.210)이 p(x) = 3 + 0x + 0x² + 2x³ + 0x⁴ 처럼 계수가 0 인 항을 끝에 붙여 쓰고 그 항을 빼고 써도 된다고 하는 것과 같은 발상이다(출처에서는 형식적인 식의 약속이고, 이 항목에서는 (1)의 (ii)의 함수의 같음이다)."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(최솟값 증명 통독, 증가 어림의 R 에 경계값, 출처 메모 표본 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]]의 것이고, 체 $\mathbb{C}$의 연산과 표기, 함수 $\iota$, 실수인 복소수, 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 켤레 $\overline{z}$는 [[complex-conjugate]], 절댓값 $|z|$는 [[modulus-of-complex-number]], 거듭제곱 $z^k$는 [[power-of-a-complex-number]], $0$부터의 합 $\sum_{k=0}^{d}$는 [[complex-finite-sum|복소수의 유한 합]]의 것이다. $\mathbb{C}$의 위상, 연속과 함수 $|f|$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 것이다. 실계수 다항함수, $t^k$, $\mathcal{P}_n$, $0$부터 번호가 붙은 실수의 열과 그 표현은 [[polynomial-function|다항함수]]의 것이고, $t^k$의 계수는 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 것이며, 실수의 열의 합은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것이다. 두 함수가 같은 것은 정확히 모든 점에서 값이 같을 때이다([[function|함수]]의 같음).

**$0$부터 번호가 붙은 복소수의 열.** $d$가 $0$ 이상인 정수일 때 $\{k \in \mathbb{Z} : 0 \le k \le d\}$에서 $\mathbb{C}$로의 함수를 길이 $d + 1$인 **$0$부터 번호가 붙은 복소수의 열**이라 하고, $k$에서의 값을 $a_k$, 열을 $a_0, \dots, a_d$로 쓴다. ($0$ 이상인 모든 정수에서 정해진 $0$부터 번호가 붙은 복소수열과 다른 대상이다.)

**복소 다항함수.** $d$가 $0$ 이상인 정수이고 $a_0, \dots, a_d$가 $0$부터 번호가 붙은 복소수의 열이라 하자. 각 복소수 $z$마다 복소수 $\sum_{k=0}^{d} a_k z^k$가 하나씩 정해지므로, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $z$에서의 값이 이 수인 함수 $p : \mathbb{C} \to \mathbb{C}$가 있다. 이 $p$를 **계수가 $a_0, \dots, a_d$인 복소 다항함수**라 하고,
$$
p(z) = \sum_{k=0}^{d} a_k z^k
$$
을 $p$의 **표현**(representation), $a_k$를 이 표현에서의 $z^k$의 **계수**(coefficient), $d$를 이 표현의 **끝 번호**라 한다. 함수 $f : \mathbb{C} \to \mathbb{C}$가 **복소 다항함수**(complex polynomial function)인 것은 정확히 $0$ 이상인 어떤 정수 $d$와 $0$부터 번호가 붙은 어떤 복소수의 열 $a_0, \dots, a_d$에 대하여 모든 복소수 $z$에서 $f(z) = \sum_{k=0}^{d} a_k z^k$일 때이다. 한 복소 다항함수가 여러 표현을 가질 수 있다(아래 (1)의 (ii)). 모든 값이 $0$인 함수 $\mathbb{C} \to \mathbb{C}$를 **영함수**라 한다.

다음이 성립한다. 아래에서 $p$는 표현 $p(z) = \sum_{k=0}^{d} a_k z^k$를 갖는 복소 다항함수이고, $z$, $h$, $c$, $z_0$은 복소수, $d$, $e$, $m$은 $0$ 이상인 정수이다.

1. (값과 표현)
   - (i) $p(0) = a_0$이다. $d = 0$이면 $p$는 모든 값이 $a_0$인 상수함수이다. 거꾸로 모든 값이 $c$인 상수함수는 계수가 $c$ 하나인($d = 0$) 복소 다항함수이고, 특히 영함수는 복소 다항함수이다.
   - (ii) ($0$ 덧붙이기) $d \le e$일 때 $0 \le k \le d$에서 $a_k$이고 $d < k \le e$에서 $0$인 열 $a_0, \dots, a_d, 0, \dots, 0$(길이 $e + 1$)에 대하여, 모든 $z$에서 그 열을 계수로 쓴 합은 $\sum_{k=0}^{d} a_k z^k$와 같다. 따라서 이 열도 $p$의 표현의 계수이고, 두 복소 다항함수는 늘 끝 번호가 같은 표현으로 쓸 수 있다.
   - (iii) (계수별 연산) $q(z) = \sum_{k=0}^{d} b_k z^k$가 끝 번호가 같은 복소 다항함수이면, $z$에서의 값이 $p(z) + q(z)$, $p(z) - q(z)$, $c\,p(z)$인 함수는 각각 계수가 $a_k + b_k$, $a_k - b_k$, $c\,a_k$($0 \le k \le d$)인 복소 다항함수이다. 따라서 두 복소 다항함수의 합과 차, 복소 다항함수의 상수배는 복소 다항함수이다.
2. (호너 꼴과 끝항) $d \ge 1$이면 모든 $z$에서
   $$
   \begin{aligned}
   p(z) &= a_0 + z \sum_{k=0}^{d-1} a_{k+1} z^k \\
   &= \sum_{k=0}^{d-1} a_k z^k + a_d z^d
   \end{aligned}
   $$
   이다. 곧 $p_1$을 계수가 $a_1, \dots, a_d$인(곧 $k$번째 계수가 $a_{k+1}$이고 끝 번호가 $d - 1$인) 복소 다항함수라 하면 모든 $z$에서 $p(z) = a_0 + z\,p_1(z)$이다.
3. (일차식을 곱하기) $q$가 계수가 $e_0, \dots, e_m$인 복소 다항함수라 하자.
   - (i) $z$에서의 값이 $z\,q(z)$인 함수는 계수가 $0, e_0, \dots, e_m$인, 곧 끝 번호가 $m + 1$이고 $0$번째 계수가 $0$, $1 \le k \le m + 1$에서 $k$번째 계수가 $e_{k-1}$인 복소 다항함수이다.
   - (ii) $z$에서의 값이 $(z - c)\,q(z)$인 함수는 끝 번호가 $m + 1$이고 계수가
     $$
     \begin{aligned}
     b_0 &= -c\,e_0, \\
     b_k &= e_{k-1} - c\,e_k, \\
     b_{m+1} &= e_m
     \end{aligned}
     $$
     (가운데 줄은 $1 \le k \le m$인 $k$)인 복소 다항함수이다.
4. (한 점으로 옮긴 표현) 모든 복소수 $z_0$에 대하여 $0$부터 번호가 붙은 복소수의 열 $b_0, \dots, b_d$가 있어, 모든 복소수 $h$에서
   $$
   p(z_0 + h) = \sum_{k=0}^{d} b_k h^k
   $$
   이고 $b_0 = p(z_0)$, $b_d = a_d$이다. 곧 $h$에서의 값이 $p(z_0 + h)$인 함수는 끝 번호가 $d$이고 끝 계수가 $a_d$인 표현을 갖는 복소 다항함수이다.
5. (연속) $p : \mathbb{C} \to \mathbb{C}$는 연속이고, $z$에서의 값이 $|p(z)|$인 함수 $|p| : \mathbb{C} \to \mathbb{R}$도 연속이다.
6. (켤레) 모든 $z$에서 $\overline{p(z)} = \sum_{k=0}^{d} \overline{a_k}\,(\overline{z})^k$이다. 특히 모든 계수 $a_k$가 실수인 복소수이면 모든 $z$에서 $\overline{p(z)} = p(\overline{z})$이다.
7. (실계수 다항함수) $r_0, \dots, r_d$가 $0$부터 번호가 붙은 실수의 열이고 $f = r_0 t^0 + \cdots + r_d t^d \in \mathcal{P}_d$라 하자.
   - (i) (열의 합과 $\Sigma$) 모든 실수 $x$에서 $f(x) = \sum_{k=0}^{d} r_k x^k$이다. 곧 [[polynomial-function|다항함수]]의 (3)의 열의 합 $r_0 x^0 + \cdots + r_d x^d$와 [[series-indexed-from-zero]]의 $0$부터의 합 $\sum_{k=0}^{d} r_k x^k$는 같은 실수이다.
   - (ii) 계수가 $\iota(r_0), \dots, \iota(r_d)$인 복소 다항함수 $P$는 모든 실수 $x$에서 $P(\iota(x)) = \iota(f(x))$이다.
   - (iii) $P$는 $f$의 표현을 어떻게 잡든 같은 함수이다. 이 $P$를 **$f$의 계수로 만든 복소 다항함수**라 한다. $P$의 계수는 모두 실수인 복소수이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, and $i$ are those of the entry on complex numbers; the operations and notation of the field $\mathbb{C}$, the function $\iota$, real complex numbers, and the convention for writing real numbers where complex numbers are required are those of the entry on the field of complex numbers; conjugates $\overline{z}$, moduli $|z|$, powers $z^k$, and sums from zero $\sum_{k=0}^{d}$ are those of their entries. The topology of $\mathbb{C}$, continuity, and the function $|f|$ are those of the entry on continuity of complex operations. Real polynomial functions, $t^k$, $\mathcal{P}_n$, sequences of real numbers indexed from zero and their representations are those of the entry on polynomial functions; the coefficient of $t^k$ is that of the entry on coefficients and degree of polynomial functions; and sums of finite sequences of real numbers are those of the entry on finite sums of vectors. Two functions are equal exactly when they have the same value at every point.

**Finite sequences of complex numbers indexed from zero.** For an integer $d \ge 0$, a function from $\{k \in \mathbb{Z} : 0 \le k \le d\}$ to $\mathbb{C}$ is called a **finite sequence of complex numbers indexed from zero** of length $d + 1$; its value at $k$ is written $a_k$ and the sequence is written $a_0, \dots, a_d$. (This is a different object from a sequence of complex numbers indexed from zero, which is defined at every integer $\ge 0$.)

**Complex polynomial functions.** Let $d$ be an integer $\ge 0$ and let $a_0, \dots, a_d$ be a finite sequence of complex numbers indexed from zero. Since each complex number $z$ determines the complex number $\sum_{k=0}^{d} a_k z^k$, item (1) of the recursion theorem gives a function $p : \mathbb{C} \to \mathbb{C}$ whose value at $z$ is this number. This $p$ is called the **complex polynomial function with coefficients $a_0, \dots, a_d$**, and
$$
p(z) = \sum_{k=0}^{d} a_k z^k
$$
is called a **representation** of $p$; $a_k$ is the **coefficient** of $z^k$ in this representation, and $d$ is the **last index** of the representation. A function $f : \mathbb{C} \to \mathbb{C}$ is a **complex polynomial function** exactly when there are an integer $d \ge 0$ and a finite sequence of complex numbers $a_0, \dots, a_d$ indexed from zero such that $f(z) = \sum_{k=0}^{d} a_k z^k$ for every complex number $z$. One complex polynomial function may have several representations (item (1)(ii) below). The function $\mathbb{C} \to \mathbb{C}$ all of whose values are $0$ is called the **zero function**.

The following hold. Below, $p$ is a complex polynomial function with representation $p(z) = \sum_{k=0}^{d} a_k z^k$; $z$, $h$, $c$, $z_0$ are complex numbers; and $d$, $e$, $m$ are integers $\ge 0$.

1. (Values and representations)
   - (i) $p(0) = a_0$. If $d = 0$, then $p$ is the constant function with value $a_0$. Conversely, the constant function with value $c$ is the complex polynomial function with the single coefficient $c$ ($d = 0$); in particular, the zero function is a complex polynomial function.
   - (ii) (Appending zeros) For $d \le e$, consider the sequence $a_0, \dots, a_d, 0, \dots, 0$ (of length $e + 1$) whose term is $a_k$ for $0 \le k \le d$ and $0$ for $d < k \le e$. For every $z$, the sum with this sequence as coefficients equals $\sum_{k=0}^{d} a_k z^k$. Hence this sequence also gives a representation of $p$, and two complex polynomial functions can always be written with representations having the same last index.
   - (iii) (Coefficientwise operations) If $q(z) = \sum_{k=0}^{d} b_k z^k$ is a complex polynomial function with the same last index, then the functions whose values at $z$ are $p(z) + q(z)$, $p(z) - q(z)$, and $c\,p(z)$ are the complex polynomial functions with coefficients $a_k + b_k$, $a_k - b_k$, and $c\,a_k$ ($0 \le k \le d$), respectively. Hence sums and differences of two complex polynomial functions, and constant multiples of a complex polynomial function, are complex polynomial functions.
2. (Horner form and the last term) If $d \ge 1$, then for every $z$
   $$
   \begin{aligned}
   p(z) &= a_0 + z \sum_{k=0}^{d-1} a_{k+1} z^k \\
   &= \sum_{k=0}^{d-1} a_k z^k + a_d z^d.
   \end{aligned}
   $$
   That is, if $p_1$ is the complex polynomial function with coefficients $a_1, \dots, a_d$ (that is, with $k$th coefficient $a_{k+1}$ and last index $d - 1$), then $p(z) = a_0 + z\,p_1(z)$ for every $z$.
3. (Multiplying by a linear factor) Let $q$ be the complex polynomial function with coefficients $e_0, \dots, e_m$.
   - (i) The function whose value at $z$ is $z\,q(z)$ is the complex polynomial function with coefficients $0, e_0, \dots, e_m$, that is, with last index $m + 1$, $0$th coefficient $0$, and $k$th coefficient $e_{k-1}$ for $1 \le k \le m + 1$.
   - (ii) The function whose value at $z$ is $(z - c)\,q(z)$ is the complex polynomial function with last index $m + 1$ and coefficients
     $$
     \begin{aligned}
     b_0 &= -c\,e_0, \\
     b_k &= e_{k-1} - c\,e_k, \\
     b_{m+1} &= e_m
     \end{aligned}
     $$
     (the middle line for $1 \le k \le m$).
4. (Representation about a point) For every complex number $z_0$ there is a finite sequence of complex numbers $b_0, \dots, b_d$ indexed from zero such that for every complex number $h$
   $$
   p(z_0 + h) = \sum_{k=0}^{d} b_k h^k,
   $$
   and $b_0 = p(z_0)$, $b_d = a_d$. That is, the function whose value at $h$ is $p(z_0 + h)$ is a complex polynomial function having a representation with last index $d$ and last coefficient $a_d$.
5. (Continuity) $p : \mathbb{C} \to \mathbb{C}$ is continuous, and so is the function $|p| : \mathbb{C} \to \mathbb{R}$ whose value at $z$ is $|p(z)|$.
6. (Conjugate) For every $z$, $\overline{p(z)} = \sum_{k=0}^{d} \overline{a_k}\,(\overline{z})^k$. In particular, if every coefficient $a_k$ is a real complex number, then $\overline{p(z)} = p(\overline{z})$ for every $z$.
7. (Real polynomial functions) Let $r_0, \dots, r_d$ be a sequence of real numbers indexed from zero and let $f = r_0 t^0 + \cdots + r_d t^d \in \mathcal{P}_d$.
   - (i) (Sums of sequences and $\Sigma$) For every real number $x$, $f(x) = \sum_{k=0}^{d} r_k x^k$. That is, the sum $r_0 x^0 + \cdots + r_d x^d$ of a finite sequence in item (3) of the entry on polynomial functions and the sum from zero $\sum_{k=0}^{d} r_k x^k$ of the entry on series indexed from zero are the same real number.
   - (ii) The complex polynomial function $P$ with coefficients $\iota(r_0), \dots, \iota(r_d)$ satisfies $P(\iota(x)) = \iota(f(x))$ for every real number $x$.
   - (iii) $P$ is the same function whichever representation of $f$ is used. This $P$ is called the **complex polynomial function made from the coefficients of $f$**. All coefficients of $P$ are real complex numbers.
:::

## 직관

다항식 $z^2 + 1$을 말할 때 흔히 식과 함수를 구별하지 않습니다. 이 항목은 선형대수 2 의 [[polynomial-function|다항함수]]처럼 함수 쪽을 택해, 계수의 열을 하나 주면 $z$마다 값 $\sum_{k=0}^{d} a_k z^k$를 내는 함수 $\mathbb{C} \to \mathbb{C}$를 복소 다항함수라 부릅니다. 함수가 먼저이고 계수는 그 함수를 적는 방법이라서, 같은 함수를 끝에 $0$을 붙인 다른 열로도 적을 수 있습니다((1)의 (ii)). 그렇다면 계수가 함수로 정해지는지가 문제가 되는데, 이것은 이 항목에서 다루지 않고 정리로 따로 증명합니다. 그래서 이 항목은 "차수"라는 말을 쓰지 않고 표현의 "끝 번호"만 말합니다.

호너 꼴 (2)는 $a_0 + a_1 z + a_2 z^2$을 $a_0 + z(a_1 + a_2 z)$로 묶는 것입니다. 마트료시카 인형처럼 끝 번호가 $d \ge 1$인 표현 안에 끝 번호가 $d - 1$인 표현의 다항함수 $p_1$이 들어 있습니다. 그래서 끝 번호에 대한 귀납법으로 (4)의 옮긴 표현과 (5)의 연속을 증명합니다. 비유가 맞는 것은 "한 겹을 열면 한 단계 작은 같은 꼴이 나온다"는 데까지입니다. 인형과 달리 바깥 껍질 $a_0 + z(\cdots)$는 안쪽을 그대로 담지 않고 $z$를 곱한 뒤 $a_0$을 더합니다.

(4)는 한 점 $z_0$ 둘레에서 $p$를 $h = z - z_0$의 다항함수로 다시 적는 것입니다. $h = 0$일 때 값이 $p(z_0)$이므로 상수 계수가 $p(z_0)$이고, 끝 번호의 계수는 옮겨도 바뀌지 않습니다. (7)은 실계수 다항함수와 이 항목을 잇는 다리입니다. 선형대수 2 는 실수의 합을 [[finite-sum-of-vectors|벡터의 유한 합]]으로 정했고 이 강의는 $\Sigma$로 쓰므로, 먼저 두 합이 같은 실수라는 것을 보이고((7)의 (i)), 그 계수를 $\iota$로 옮긴 복소 다항함수가 실수를 옮긴 점에서 실계수 다항함수와 같은 값을 갖는다는 것을 보입니다((7)의 (ii)).

## 성질의 증명

:::proof
"합의 ($n$)"은 [[complex-finite-sum|복소수의 유한 합]]의 번호이고, 그 (8)에 의해 (1), (4)–(7)은 $0$부터의 합에도 쓴다. "복소수체의 ($n$)", "켤레의 ($n$)", "거듭제곱의 ($n$)", "연속의 ($n$)"은 [[complex-field]], [[complex-conjugate]], [[power-of-a-complex-number]], [[continuity-of-complex-operations]]의 번호이다. $\mathbb{C}$가 체라는 것(복소수체의 (1))에 의해 [[ring|환]]과 [[field|체]]의 계산 법칙(결합, 교환, 분배, $0$과 $1$)을 쓴다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다.

여러 번 쓰는 사실: (가) 합의 (1)과 (8)에 의해, $0 \le k \le K$인 모든 $k$에서 항이 같으면 두 합 $\sum_{k=0}^{K}$는 같다. (나) 합의 (4)의 상수의 합에 의해, 모든 항이 $0$인 합은 $0$이다(항의 개수와 $0$의 곱). 특히 합의 (4)의 첫 등식에서 $w_k = 0$으로 두면 $\sum (c\,z_k) = c \sum z_k$이다.

**1의 증명.** (i) 합의 (8)의 첫 항에 의해 $d \ge 1$이면 $p(0) = a_0 0^0 + \sum_{k=1}^{d} a_k 0^k$이고, 거듭제곱의 정의에서 $0^0 = 1$, 거듭제곱의 (3)의 (i)에서 $k \ge 1$이면 $0^k = 0$이므로 (나)에 의해 $p(0) = a_0$이다. $d = 0$이면 합의 (8)의 한 항에 의해 모든 $z$에서 $p(z) = a_0 z^0 = a_0$이고, 이것은 $p(0) = a_0$과 상수함수라는 것을 함께 준다. 거꾸로 모든 값이 $c$인 상수함수는 방금의 계산에 의해 계수가 $c$ 하나인 복소 다항함수와 모든 점에서 값이 같으므로 함수의 같음에 의해 그것이다. $c = 0$이면 영함수이다.

(ii) $e = d$이면 두 열이 같다. $d < e$이면 늘린 열을 $a'_k$로 쓰고 합의 (8)의 쪼개기를 쪼개는 번호 $d$에 쓰면 $\sum_{k=0}^{e} a'_k z^k = \sum_{k=0}^{d} a'_k z^k + \sum_{k=d+1}^{e} a'_k z^k$이다. 둘째 합의 항은 $0 \cdot z^k = 0$이므로 (나)에 의해 그 합은 $0$이고, 첫째 합의 항은 $a_k z^k$와 같으므로 (가)에 의해 $\sum_{k=0}^{d} a_k z^k$이다. 둘째 문장: 두 표현의 끝 번호 가운데 작은 쪽을 큰 쪽까지 늘리면 된다.

(iii) 분배법칙에 의해 $(a_k + b_k) z^k = a_k z^k + b_k z^k$, $(a_k - b_k) z^k = a_k z^k - b_k z^k$, $(c\,a_k) z^k = c\,(a_k z^k)$이다. 합의 (4)($c = 1$인 첫 등식과 둘째 등식)와 (나)에 의해 $\sum_{k=0}^{d} (a_k + b_k) z^k = p(z) + q(z)$, $\sum_{k=0}^{d} (a_k - b_k) z^k = p(z) - q(z)$, $\sum_{k=0}^{d} (c\,a_k) z^k = c\,p(z)$이다. 함수의 같음에 의해 세 함수는 그 계수의 복소 다항함수이다.

**2의 증명.** $d \ge 1$이라 하자. 합의 (8)의 첫 항과 $z^0 = 1$에 의해 $p(z) = a_0 + \sum_{k=1}^{d} a_k z^k$이다. 합의 (8)의 옮기기 $\sum_{n=0}^{K} z_{n+1} = \sum_{n=1}^{K+1} z_n$을 $K = d - 1$, $1 \le n \le d$에서 정해진 항 $a_n z^n$에 쓰면 $\sum_{k=1}^{d} a_k z^k = \sum_{k=0}^{d-1} a_{k+1} z^{k+1}$이다. 거듭제곱의 (1)에 의해 $z^{k+1} = z\,z^k$이므로 (나)에 의해 이것은 $z \sum_{k=0}^{d-1} a_{k+1} z^k = z\,p_1(z)$이다. 둘째 등식은 합의 (8)의 끝항 떼기를 $K = d - 1$에 쓴 것이다.

**3의 증명.** (i) 거듭제곱의 (1)과 (나)에 의해 $z\,q(z) = \sum_{k=0}^{m} e_k z^{k+1}$이고, 합의 (8)의 옮기기에 의해 이것은 $\sum_{k=1}^{m+1} e_{k-1} z^k$이다. 합의 (8)의 첫 항과 $0 \cdot z^0 = 0$에 의해 이것은 $0$번째 계수가 $0$이고 $k$번째 계수가 $e_{k-1}$인 끝 번호 $m + 1$의 합과 같다.

(ii) $(z - c)\,q(z) = z\,q(z) - c\,q(z)$이다. (i)에 의해 $z\,q(z)$는 계수가 $0, e_0, \dots, e_m$인 표현을 갖고, (1)의 (iii)에 의해 $c\,q(z)$는 계수가 $c\,e_0, \dots, c\,e_m$인 표현을 가지며, (1)의 (ii)에 의해 이것을 끝 번호 $m + 1$로 늘린 열 $c\,e_0, \dots, c\,e_m, 0$도 그 표현이다. 끝 번호가 같아졌으므로 (1)의 (iii)의 차에 의해 계수는 $0 - c\,e_0 = -c\,e_0$, $1 \le k \le m$에서 $e_{k-1} - c\,e_k$, $k = m + 1$에서 $e_m - 0 = e_m$이다.

**4의 증명.** $d$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로, "끝 번호가 $d$인 모든 표현과 모든 $z_0$에 대하여 그런 열 $b_0, \dots, b_d$가 있다"를 보인다.

$d = 0$이면 (1)의 (i)에 의해 모든 $h$에서 $p(z_0 + h) = a_0$이므로 $b_0 = a_0$으로 두면 된다. 이때 $b_0 = a_0 = p(z_0)$이고 끝 계수 $b_0$도 $a_0$이다.

$d - 1$에서 성립한다고 하고($d \ge 1$) 끝 번호가 $d$인 표현을 보자. (2)에 의해 모든 $h$에서 $p(z_0 + h) = a_0 + (z_0 + h)\,p_1(z_0 + h)$이고 $p_1$은 끝 번호가 $d - 1$이고 끝 계수가 $a_d$인 표현을 갖는다. 귀납 가정에 의해 $0$부터 번호가 붙은 열 $b'_0, \dots, b'_{d-1}$이 있어 모든 $h$에서 $p_1(z_0 + h) = \sum_{k=0}^{d-1} b'_k h^k$이고 $b'_{d-1} = a_d$이다. $h$에서의 값이 이 합인 복소 다항함수를 $Q$라 하자. $z_0 + h = h - (-z_0)$이므로 (3)의 (ii)를 $c = -z_0$에 쓰면, $h$에서의 값이 $(z_0 + h)\,Q(h)$인 함수는 끝 번호가 $d$이고 끝 계수가 $b'_{d-1} = a_d$인 표현 $\sum_{k=0}^{d} \beta_k h^k$를 갖는다. (1)의 (i)과 (ii)에 의해 상수함수 $a_0$은 계수가 $a_0, 0, \dots, 0$(끝 번호 $d$)인 표현을 가지므로, (1)의 (iii)의 합에 의해 $b_0 = a_0 + \beta_0$, $1 \le k \le d$에서 $b_k = \beta_k$로 두면 모든 $h$에서 $p(z_0 + h) = \sum_{k=0}^{d} b_k h^k$이다. $d \ge 1$이므로 $b_d = \beta_d = a_d$이다. 끝으로 $h = 0$을 넣으면 (1)의 (i)에 의해 $b_0 = p(z_0 + 0) = p(z_0)$이다.

**5의 증명.** $d$에 대한 귀납법으로 "끝 번호가 $d$인 표현을 갖는 복소 다항함수는 연속이다"를 보인다. $d = 0$이면 (1)의 (i)에 의해 $p$는 상수함수이므로 연속의 (2)에 의해 연속이다. $d \ge 1$이고 $d - 1$에서 성립하면 $p_1$은 연속이다. 연속의 (2)에 의해 항등함수 $i_{\mathbb{C}}$와 값이 $a_0$인 상수함수는 연속이고, 연속의 (3)에 의해 $z$에서의 값이 $z\,p_1(z)$인 곱 $i_{\mathbb{C}}\,p_1$과 그것에 상수함수를 더한 함수는 연속이다. (2)에 의해 이 합은 모든 점에서 $p$와 값이 같으므로 함수의 같음에 의해 $p$이고, $p$는 연속이다. $|p|$의 연속은 연속의 (3)이다.

**6의 증명.** 합의 (5)에 의해 $\overline{p(z)} = \sum_{k=0}^{d} \overline{a_k z^k}$이고, 켤레의 (2)에 의해 $\overline{a_k z^k} = \overline{a_k}\,\overline{z^k}$, 거듭제곱의 (4)에 의해 $\overline{z^k} = (\overline{z})^k$이다. (가)에 의해 첫 등식이 나온다. 모든 $a_k$가 실수인 복소수이면 켤레의 (4)에 의해 $\overline{a_k} = a_k$이므로 오른쪽은 $\sum_{k=0}^{d} a_k (\overline{z})^k = p(\overline{z})$이다.

**7의 증명.** (i) 실수 $x$를 고정하고, $1 \le j \le d + 1$에서 $y_j = r_{j-1} x^{j-1}$로 정한 길이 $d + 1$인 실수의 열을 보자. [[polynomial-function|다항함수]]의 (3)에 의해 $f(x)$는 이 열의 합(벡터의 유한 합을 $V = \mathbb{R}$에 쓴 것)이다. $0 \le n \le d + 1$인 정수 $n$에 대하여 이 열의 처음 $n$개의 합을 $s_n$이라 하고, $n$에 대한 귀납법으로 $s_n = \sum_{j=1}^{n} y_j$를 보인다(오른쪽은 [[finite-sum-of-reals|실수의 유한 합]]의 범위에서만 정해진 항의 합). $n = 0$이면 [[finite-sum-of-vectors|벡터의 유한 합]]의 정의에 의해 빈 열의 합은 $\mathbb{R}$의 영벡터, 곧 같은 항목의 "실수의 합"에 의해 실수 $0$이고, 실수의 유한 합의 (2)와 [[linearity-and-order-of-finite-sums]]의 (8)에 의해 $\sum_{j=1}^{0} y_j = 0$이다. $n + 1 \le d + 1$이고 $n$에서 성립하면, 처음 $n + 1$개의 열의 처음 $n$개는 원래 열의 처음 $n$개이므로 벡터의 유한 합의 정의의 둘째 줄에 의해 $s_{n+1} = s_n + y_{n+1}$이고, 실수의 유한 합의 (3)과 같은 (8)에 의해 이것은 $\sum_{j=1}^{n} y_j + y_{n+1} = \sum_{j=1}^{n+1} y_j$이다. $n = d + 1$이면 $f(x) = s_{d+1} = \sum_{j=1}^{d+1} r_{j-1} x^{j-1}$이고, [[series-indexed-from-zero]]의 범위에서만 정해진 항의 합의 정의에 의해 이것이 $\sum_{k=0}^{d} r_k x^k$이다.

(ii) 실수 $x$에 대하여 [[power-of-a-complex-number|거듭제곱]]의 (5)에 의해 $\iota(x)^k = \iota(x^k)$이고, 복소수체의 (2)에 의해 $\iota(r_k)\,\iota(x^k) = \iota(r_k x^k)$이다. 따라서 (가)와 합의 (6)(그 (8)의 $0$부터의 합의 꼴)에 의해
$$
\begin{aligned}
P(\iota(x)) &= \sum_{k=0}^{d} \iota(r_k x^k) \\
&= \iota\Bigl(\sum_{k=0}^{d} r_k x^k\Bigr) = \iota(f(x))
\end{aligned}
$$
이고, 마지막 등식은 (i)이다.

(iii) $f = s_0 t^0 + \cdots + s_{e} t^{e}$가 $f$의 다른 표현이라 하자. $d \le e$이면 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (2)의 (ii)에 의해 $k \le d$에서 $s_k = r_k$이고 $d < k \le e$에서 $s_k = 0$이다. 복소수체의 (2)의 (i)에 의해 $\iota(0) = 0$이므로 열 $\iota(s_0), \dots, \iota(s_e)$는 열 $\iota(r_0), \dots, \iota(r_d)$에 $0$을 덧붙인 열이고, (1)의 (ii)에 의해 두 열의 복소 다항함수는 같다. $e < d$이면 두 표현의 자리를 바꾸어 같은 논증을 한다. $P$의 계수 $\iota(r_k)$는 복소수체의 (3)에 의해 실수인 복소수이다. $\blacksquare$
:::

## 예시와 반례

:::example[$zz + 1$의 여러 표현]
$p$를 계수가 $1, 0, 1$인 복소 다항함수, 곧 $p(z) = 1 + 0z + z^2 = zz + 1$이라 합시다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (6)에 의해 $p(i) = -1 + 1 = 0$이고, $p(1 + i) = (1 + i)(1 + i) + 1 = 2i + 1$입니다. 호너 꼴 (2)는 $p(z) = 1 + z(0 + z \cdot 1)$입니다.

(4)를 $z_0 = i$에 써 봅시다. $p(i + h) = (i + h)(i + h) + 1 = -1 + 2ih + hh + 1 = 2i\,h + h^2$이므로 $b_0 = 0$, $b_1 = 2i$, $b_2 = 1$입니다. 실제로 $b_0 = p(i) = 0$이고 $b_2 = 1$은 $p$의 끝 계수 $a_2 = 1$과 같습니다.

계수가 모두 실수인 복소수이므로 (6)에 의해 $\overline{p(z)} = p(\overline{z})$입니다. $z = 1 + i$에서 확인하면 $p(1 - i) = (1 - i)(1 - i) + 1 = -2i + 1$이고 이것은 $\overline{1 + 2i}$입니다. 또 $f = 1\,t^0 + 0\,t^1 + 1\,t^2$이면 $p$는 $f$의 계수로 만든 복소 다항함수이고, (7)의 (ii)에 의해 $p(\iota(2)) = \iota(f(2)) = \iota(5)$입니다. 직접 계산해도 $2 \cdot 2 + 1 = 5$입니다.
:::

:::example[$(z - i)(z + i)$의 계수]
$q(z) = i + 1z$, 곧 계수가 $e_0 = i$, $e_1 = 1$인 복소 다항함수와 $c = i$에 (3)의 (ii)를 쓰면 $(z - i)\,q(z)$의 계수는
$$
\begin{aligned}
b_0 &= -i \cdot i = 1, \\
b_1 &= e_0 - i\,e_1 = i - i = 0, \\
b_2 &= e_1 = 1
\end{aligned}
$$
입니다. 따라서 모든 $z$에서 $(z - i)(z + i) = 1 + 0z + z^2$이고, 이것은 위 예시의 $p$입니다.
:::

:::counterexample[끝 번호가 함수만으로 정해지지 않는 예]
계수가 $0, 1$인 복소 다항함수와 계수가 $0, 1, 0$인 복소 다항함수는 (1)의 (ii)에 의해 같은 함수이고, $0 + 1 \cdot z^1 = z$이므로 그 함수는 항등함수 $i_{\mathbb{C}}$입니다. 그래서 "끝 번호"는 표현에 붙은 수이고 함수에 붙은 수가 아닙니다. 끝 계수도 마찬가지로, 앞의 표현에서는 $1$, 뒤의 표현에서는 $0$입니다. 함수에 붙은 수로서의 차수와 최고차계수를 정하려면 계수가 함수로 정해진다는 것을 먼저 증명해야 합니다.
:::

:::counterexample[계수가 모두 실수여도 값이 실수가 아닐 수 있다]
위 예시의 $p(z) = zz + 1$은 계수가 모두 실수인 복소수이지만 $p(1 + i) = 1 + 2i$는 실수인 복소수가 아닙니다. (7)의 (ii)가 말하는 것은 실수를 옮긴 점 $\iota(x)$에서의 값뿐이고, 그 밖의 점에서는 값이 실수인 복소수라는 보장이 없습니다.
:::

## 확인 질문

:::check[계수가 $1, 2, 3$인 복소 다항함수 $p$의 $p(i)$는 무엇인가?]
$p(i) = 1 + 2i + 3i^2$이고, [[power-of-a-complex-number|복소수의 거듭제곱]]의 (6)에 의해 $i^2 = -1$이므로 $p(i) = 1 + 2i - 3 = -2 + 2i$입니다.
:::

:::check[$(z - 2)(z + 1)$의 계수를 (3)의 (ii)로 구하면 무엇인가?]
$q(z) = 1 + 1z$($e_0 = 1$, $e_1 = 1$)와 $c = 2$에 쓰면 $b_0 = -2 \cdot 1 = -2$, $b_1 = e_0 - 2e_1 = 1 - 2 = -1$, $b_2 = e_1 = 1$입니다. 따라서 모든 $z$에서 $(z - 2)(z + 1) = -2 - z + z^2$입니다. $z = 2$를 넣으면 양쪽 모두 $0$입니다.
:::
