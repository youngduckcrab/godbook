---
title: 리우빌 정리
title_en: Liouville's Theorem
aliases: [리우빌의 정리, 유계인 정함수는 상수, 다항식 크기로 눌린 정함수, Liouville's theorem, bounded entire function]
kind: theorem
field: complex-analysis
msc: ["30D20"]
level: undergrad
summary: "복소평면 전체에서 정칙이고 유계인 함수, 곧 유계인 정함수는 상수함수이다. 코시 부등식을 모든 반지름의 원판에 써서 모든 점에서 도함수가 0 임을 보인다. 또 0 이상인 실수 A, B 와 0 이상인 정수 k 로 모든 z 에서 |f(z)| ≤ A + B|z|ᵏ 인 정함수는 차수가 k 이하인 복소 다항함수이거나 영함수이다."
requires: [real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, well-ordering-principle, factorial-from-zero, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-plane-as-metric-space, compact-subsets-of-complex-plane, complex-series, complex-derivative, complex-derivative-rules, higher-complex-derivatives, derivative-of-complex-exponential, zero-derivative-on-a-region, holomorphic-derivatives-and-cauchy-estimates, complex-polynomial-function, growth-of-complex-polynomial]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Taking Cauchy's Formulas to the Limit 절의 Corollary liouville 앞 문단, Corollary liouville 과 그 각주·증명, Second proof of Theorem fundthmalg, source/sec_cauchytothelimit.ptx:171–243; 5장 연습문제 가운데 |f(z)| ≤ √|z|, |f(z)| ≤ a|z| + b 인 정함수를 묻는 것, source/exercises-chap5.ptx:322–335, 361–377; 같은 절의 Proposition polynomialestimate, source/sec_cauchytothelimit.ptx:19–55; 5장 연습문제 bounded, source/exercises-chap5.ptx:272–293"
    checked: original
    note: "출처 Corollary liouville(sec_cauchytothelimit.ptx:176–192)은 '유계인 정함수는 상수'를 진술하고, 증명(193–221)은 f′(w) 의 적분 공식을 원 C[w, R] 에 써서 |f′(w)| ≤ M/R 을 얻은 뒤 R 을 얼마든지 크게 잡을 수 있으므로 f′ = 0 이고 도함수가 0 인 함수는 상수라는 정리로 마친다. (1)의 증명은 같은 길이고, 'R 을 크게' 를 1 이상인 모든 실수 r 에서 xr ≤ C 이면 x = 0 이라는 보조 사실로 바꾼다. (2)는 출처 5장 연습문제(exercises-chap5.ptx:361–377, |f(z)| ≤ a|z| + b 이면 차수 1 이하의 다항식)를 지수 k 로 넓혀 진술로 올린 것이고, 증명은 코시 부등식을 원점 중심의 원에 쓰는 같은 발상이다. 같은 장의 연습문제(322–335, |f(z)| ≤ √|z| 이면 f = 0)도 같은 발상이다. 출처는 정리 앞 문단(171–174)에서 이 결과가 실해석에 짝이 없다며 실수의 사인함수를 보라고 적는데, 직관의 사인함수는 이것과 같은 예이다. 예시 '상수가 아닌 복소 다항함수의 근'은 출처의 Second proof of Theorem fundthmalg(224–243: 근이 없으면 1/p 가 정함수이고, |z| → ∞ 에서 1/p → 0 이므로 유계, 리우빌로 상수)와 같은 길이다. 출처는 Proposition polynomialestimate(sec_cauchytothelimit.ptx:19–55: 충분히 큰 |z| 에서 ½|a_d||z|^d ≤ |p(z)| ≤ 2|a_d||z|^d)로 1/p → 0 을 얻고 5장 연습문제 bounded(exercises-chap5.ptx:272–293)로 유계를 얻는다. 이 예시는 같은 꼴의 아래 어림을 쓰되 무한대에서의 극한을 거치지 않고, 그 어림과 닫힌 원판 위의 최솟값으로 유계임을 보인다. 역사와 맥락의 첫 문장은 정리의 각주(177–183)에서, 둘째 문장은 Second proof 앞 문단(223–228)에서 읽었다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(다항식 크기로 눌린 정함수의 코시 부등식, 영점 분류의 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수와 $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]], 복소수의 거듭제곱은 [[power-of-a-complex-number]], 실수의 거듭제곱은 [[power-of-a-real-number]]의 것이다. 열린 공 $B(a, R)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이다. 정함수와 도함수는 [[complex-derivative|복소 미분]]의 것이고, $n$계 도함수 $f^{(n)}$은 [[higher-complex-derivatives|고계 복소 도함수]]의 것이며(정함수는 [[holomorphic-derivatives-and-cauchy-estimates|정칙함수의 고계 도함수와 코시 부등식]]의 (1)에 의해 무한 번 미분가능하다), $0$ 이상인 정수의 계승 $n!$은 [[factorial-from-zero]]의 것이다. 급수의 합 $\sum_{n=0}^{\infty}$는 [[complex-series|복소 급수]]의 것이고, 복소 다항함수와 영함수는 [[complex-polynomial-function|복소 다항함수]], 차수 $\deg$는 [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]]의 것이다.

아래에서 $f : \mathbb{C} \to \mathbb{C}$는 정함수이다.

1. (**리우빌 정리**) 실수 $M$이 모든 복소수 $z$에서 $|f(z)| \le M$을 만족하면 $f$는 상수함수이다. 곧 모든 복소수 $z$, $w$에서 $f(z) = f(w)$이다.
2. (다항식 크기로 눌린 정함수) $k$가 $0$ 이상인 정수이고 $A$, $B$가 $0 \le A$, $0 \le B$인 실수이며, 모든 복소수 $z$에서
   $$
   |f(z)| \le A + B\,|z|^k
   $$
   라 하자. 그러면 $k < n$인 모든 정수 $n$에서 $f^{(n)}(0) = 0$이고, 모든 복소수 $z$에서
   $$
   f(z) = \sum_{n=0}^{k} \frac{f^{(n)}(0)}{n!}\, z^n
   $$
   이다. 따라서 $f$는 계수가 $f^{(n)}(0)/n!$ ($0 \le n \le k$)인 복소 다항함수이고, 영함수이거나 $\deg f \le k$이다.
:::

:::english
Complex numbers and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$ and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus is that of the entry on the modulus of a complex number; powers of complex numbers and of real numbers are those of the entries on powers of a complex number and of a real number. Open balls $B(a, R)$ are those of the entry on the metric of the complex plane. Entire functions and derivatives are those of the entry on the complex derivative; the $n$th derivative $f^{(n)}$ is that of the entry on higher complex derivatives (an entire function is infinitely differentiable by (1) of the entry on derivatives of holomorphic functions and Cauchy's estimates), and the factorial $n!$ of an integer $n \ge 0$ is that of the entry on factorials from zero. Sums of series $\sum_{n=0}^{\infty}$ are those of the entry on complex series; complex polynomial functions and the zero function are those of the entry on complex polynomial functions, and the degree $\deg$ is that of the entry on growth of complex polynomials and uniqueness of coefficients.

Below, $f : \mathbb{C} \to \mathbb{C}$ is an entire function.

1. (**Liouville's theorem**) If a real number $M$ satisfies $|f(z)| \le M$ for every complex number $z$, then $f$ is a constant function; that is, $f(z) = f(w)$ for all complex numbers $z$, $w$.
2. (Entire functions bounded by a polynomial size) Let $k$ be an integer with $k \ge 0$, let $A$, $B$ be real numbers with $0 \le A$, $0 \le B$, and suppose that for every complex number $z$
   $$
   |f(z)| \le A + B\,|z|^k.
   $$
   Then $f^{(n)}(0) = 0$ for every integer $n$ with $k < n$, and for every complex number $z$
   $$
   f(z) = \sum_{n=0}^{k} \frac{f^{(n)}(0)}{n!}\, z^n.
   $$
   Hence $f$ is the complex polynomial function with coefficients $f^{(n)}(0)/n!$ ($0 \le n \le k$), and $f$ is the zero function or $\deg f \le k$.
:::

## 직관

코시 부등식을 첫째 도함수에 쓰면, 원 위에서 $|f| \le M$일 때 중심에서의 $|f'|$이 $M$을 반지름으로 나눈 것 이하입니다. 정함수는 복소평면 전체에서 정칙이므로 이 원을 얼마든지 크게 잡을 수 있고, $|f|$가 평면 전체에서 $M$ 이하이면 반지름을 키워 도함수의 상한 $M/R$을 얼마든지 작게 할 수 있습니다. 그래서 모든 점에서 도함수가 $0$이고, 복소평면은 영역이므로 $f$는 상수입니다((1)).

비유하면 끝없이 넓은 호수의 수면이 어디서도 일정한 높이를 넘지 않으면 잔잔하다는 것입니다. 맞는 곳은 "끝없이 넓다"가 모든 반지름의 원을 쓸 수 있다는 것에, "일정한 높이"가 모든 점에서 같은 $M$에 해당한다는 점입니다. 실제 물결은 높이가 일정한 한계 안에 있어도 출렁일 수 있다는 점에서 비유가 맞지 않고, 그것이 실함수와 정함수의 차이입니다. 실수 위의 [[cosine-and-sine|사인]]은 모든 실수에서 미분가능하고 절댓값이 $1$ 이하이지만 상수가 아닙니다.

(2)는 같은 생각을 $|f|$가 $|z|^k$의 크기로 자라는 것까지 허락한 것입니다. 원점 중심의 반지름 $r$인 원 위에서 $|f| \le A + Br^k$이므로 코시 부등식에 의해 $n$계 도함수는 $r^n$으로 나눈 만큼 작고, $n > k$이면 $r$을 키울 때 그 상한이 $0$으로 갑니다. 그래서 멱급수 전개에서 $k$차보다 높은 항이 모두 사라집니다. [[fundamental-theorem-of-algebra|대수학의 기본정리]]를 (1)로 다시 증명할 수 있다는 것이 아래 예시입니다.

## 증명

:::idea
(1) 모든 점 $a$와 모든 반지름 $R$에 코시 부등식을 써서 $|f'(a)| R \le M$을 얻고, 실수의 작은 사실로 $f'(a) = 0$이라 한 뒤 영역에서 도함수가 $0$인 함수는 상수라는 것을 쓴다. (2) 원점 중심의 원에 코시 부등식을 써서 $n > k$인 $n$계 도함수가 $0$임을 보이고, 멱급수 전개의 높은 항을 떼어 낸다.
:::

:::hint
"모든 $R$에서 $xR \le M$"에서 $x = 0$을 얻으려면, $x > 0$이라 가정하고 $xR$이 $M$보다 커지는 $R$ 하나를 식으로 잡아 보세요.
:::

:::hint
(2)에서 $r \ge 1$이면 $r^k \ge 1$이고 $n > k$일 때 $r^n \ge r \cdot r^k$입니다. 이 둘로 $A + Br^k \le (A + B) r^k$와 $|f^{(n)}(0)|\, r \cdot r^k \le |f^{(n)}(0)|\, r^n$을 얻을 수 있습니다.
:::

:::proof
"미분 (n)"은 [[complex-derivative|복소 미분]], "고계 (n)"은 [[higher-complex-derivatives|고계 복소 도함수]], "코시 (n)"은 [[holomorphic-derivatives-and-cauchy-estimates|정칙함수의 고계 도함수와 코시 부등식]], "순서 (n)"은 [[order-properties-of-reals]], "실수 거듭제곱 (n)"은 [[power-of-a-real-number]]의 번호이다. $G = \mathbb{C}$는 $(\mathbb{C}, d)$의 열린집합이고, 모든 복소수 $a$와 실수 $R > 0$에서 $B(a, R) \subseteq \mathbb{C}$이므로 코시 (2)–(4)를 아무 $a$와 아무 $R > 0$에 쓸 수 있다.

**보조 사실 (A).** $x$, $C$가 $0 \le x$, $0 \le C$인 실수이고 $1 \le r$인 모든 실수 $r$에서 $xr \le C$이면 $x = 0$이다.

(A)의 증명: $0 < x$라 가정하자. 순서 (6)의 (i)에 의해 $0 < x^{-1}$이고, 순서 (4)의 (iv)에 의해 $0 \le C x^{-1}$이므로 $r = 1 + C x^{-1}$로 두면 순서 (2)의 (i)에 의해 $1 \le r$이다. [[real-number-arithmetic]]의 분배법칙과 역수의 성질에 의해 $xr = x + C$이고, $0 < x$이므로 순서 (2)의 (ii)에 의해 $C < x + C = xr$이다. 이것은 가정 $xr \le C$와 순서 (1)의 (i)에 의해 함께 성립할 수 없다. 따라서 $0 < x$가 아니고, 순서 (1)의 (iii)에 의해 $x \le 0$이며, $0 \le x$와 순서 (1)의 (ii)에 의해 $x = 0$이다.

**1의 증명.** [[modulus-of-complex-number]]의 (1)에 의해 $0 \le |f(0)| \le M$이므로 $0 \le M$이다. 복소수 $a$와 $1 \le R$인 실수 $R$을 잡는다. $0 < R$이고 $B(a, R)$의 모든 $z$에서 $|f(z)| \le M$이므로 코시 (4)를 $n = 1$에 쓰면 $|f^{(1)}(a)| \le 1! \cdot M / R^1$이다. 고계 (1)에 의해 $f^{(1)} = f'$이고, [[factorial-from-zero]]의 (1)에 의해 $1! = 1$이며, 실수 거듭제곱 (1)에 의해 $R^1 = R$이므로 $|f'(a)| \le M R^{-1}$, 곧 순서 (6)의 (iv)에 의해 $|f'(a)|\, R \le M$이다. $R$은 $1$ 이상인 아무 실수였으므로 (A)를 $x = |f'(a)|$, $C = M$에 쓰면 $|f'(a)| = 0$이고, [[modulus-of-complex-number]]의 (1)에 의해 $f'(a) = 0$이다.

$a$는 아무 복소수였으므로 모든 $z \in \mathbb{C}$에서 $f'(z) = 0$이다. [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (1)의 (ii)에 의해 $\mathbb{C}$는 영역이고, 같은 항목의 (3)에 의해 모든 $z$, $w \in \mathbb{C}$에서 $f(z) = f(w)$이다.

**2의 증명.** $n$을 $k < n$인 정수라 하자. $n$과 $k$는 정수이므로 [[well-ordering-principle]]의 (Z5)와 (Z1)에 의해 $k + 1 \le n$이고, $n - k$와 $n - k - 1$은 $0$ 이상인 정수이다. $1 \le r$인 실수 $r$을 잡는다. $|z| = r$인 모든 복소수 $z$에서 $|z|^k = r^k$이므로 가정에 의해 $|f(z)| \le A + B r^k$이다. $0 < r < r + 1$이므로 코시 (3)을 $a = 0$, 반지름 $R = r + 1$, 원의 반지름 $r$, $M = A + B r^k$에 쓰면
$$
|f^{(n)}(0)| \le \frac{n!\,(A + B r^k)}{r^n}
$$
이다. 실수 거듭제곱 (6)의 (i)에 의해 $0 < r^n$이므로 순서 (6)의 (iv)에 의해 $|f^{(n)}(0)|\, r^n \le n!\,(A + B r^k)$이다.

$1 \le r$이므로 실수 거듭제곱 (6)의 (ii)와 (2)의 (iv)에 의해 $1 = 1^k \le r^k$이고 $1 = 1^{n-k-1} \le r^{n-k-1}$이다. $0 \le A$이므로 순서 (4)의 (iii)에 의해 $A = A \cdot 1 \le A r^k$이고, 순서 (2)의 (i)에 의해 $A + B r^k \le (A + B) r^k$이다. 또 실수 거듭제곱 (2)의 (i)에 의해 $r^n = r^{n-k-1} \cdot r \cdot r^k$이고, $0 \le |f^{(n)}(0)|\, r \cdot r^k$이므로 순서 (4)의 (iii)에 의해 $|f^{(n)}(0)|\, r \cdot r^k \le |f^{(n)}(0)|\, r^n$이다. [[factorial-from-zero]]의 (3)에 의해 $0 < n!$이므로, 이 부등식들을 순서 (4)의 (iii)과 (1)의 (v)로 이으면
$$
|f^{(n)}(0)|\, r \cdot r^k \le n!\,(A + B)\, r^k
$$
이다. $0 < r^k$이므로 순서 (6)의 (iv)에 의해 $|f^{(n)}(0)|\, r \le n!\,(A + B)$이다. $r$은 $1$ 이상인 아무 실수였고 $0 \le n!\,(A + B)$이므로, (A)를 $x = |f^{(n)}(0)|$, $C = n!\,(A + B)$에 쓰면 $|f^{(n)}(0)| = 0$이고, [[modulus-of-complex-number]]의 (1)에 의해 $f^{(n)}(0) = 0$이다.

이제 복소수 $z$를 잡고 $R = |z| + 1$로 두면 $0 < R$이고 $z \in B(0, R)$이다. 코시 (2)를 $a = 0$에 쓰면, $b_n = f^{(n)}(0)/n!$로 둘 때 $0$ 이상인 정수 $n$의 항 $b_n (z - 0)^n = b_n z^n$의 급수가 수렴하고 $f(z) = \sum_{n=0}^{\infty} b_n z^n$이다. 위에 의해 $k < n$이면 $b_n = 0 \cdot (n!)^{-1} = 0$이므로 $b_n z^n = 0$이다. [[complex-series|복소 급수]]의 (4)를 $m = 0$, $K = k$에 쓰면 $n \ge k + 1$에서 정해진 항 $b_n z^n$의 급수도 수렴하고 $f(z) = \sum_{n=0}^{k} b_n z^n + \sum_{n=k+1}^{\infty} b_n z^n$이며, 같은 항목의 (3)에 의해 모든 항이 $0$인 뒤의 급수의 합은 $0$이다. 따라서 $f(z) = \sum_{n=0}^{k} b_n z^n$이다.

$z$는 아무 복소수였으므로 [[complex-polynomial-function|복소 다항함수]]의 정의에 의해 $f$는 계수가 $b_0, \dots, b_k$이고 끝 번호가 $k$인 표현을 갖는 복소 다항함수이다. [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]]의 (3)의 (i)에 의해 $f$는 영함수이거나 $\deg f \le k$이다. $\blacksquare$
:::

## 예시와 반례

:::example[상수가 아닌 복소 다항함수의 근]
상수함수가 아닌 복소 다항함수 $p$가 근을 갖는다는 것을 (1)로 보입니다. $p$가 근을 갖지 않는다, 곧 모든 $z$에서 $p(z) \ne 0$이라 가정합시다. [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]]의 (3)의 (ii)에 의해 $p$는 영함수가 아니고 $d = \deg p \ge 1$이며, 같은 (3)의 (i)에 의해 $p(z) = \sum_{k=0}^{d} a_k z^k$이고 $a_d \ne 0$인 표현이 있습니다.

[[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (iii)에 의해 $p$는 정함수이고, 같은 항목의 (3)의 (iii)에 의해 $h = 1/p : \mathbb{C} \to \mathbb{C}$도 정함수입니다. $h$가 유계임을 보입니다. [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]]의 (1)의 (ii)의 $R_0 \ge 1$을 잡으면, $|z| \ge R_0$에서 $|p(z)| \ge \frac{1}{2}|a_d|\,|z|^d$이고 $|z| \ge 1$이므로 $|z|^d \ge 1$([[power-of-a-real-number]]의 (6)의 (ii)와 (2)의 (iv))이어서 $|p(z)| \ge |a_d|/2$([[order-properties-of-reals]]의 (4)의 (iii)), 곧 $|h(z)| \le 2|a_d|^{-1}$입니다([[modulus-of-complex-number]]의 (4), [[order-properties-of-reals]]의 (6)의 (ii), 두 수가 같으면 역수도 같다). $|z| \le R_0$인 $z$ 전체의 집합 $K$는 [[compact-subsets-of-complex-plane|복소평면의 콤팩트 집합]]의 (2)에 의해 콤팩트 집합이고 $0$을 원소로 가져 공집합이 아니며, [[complex-polynomial-function|복소 다항함수]]의 (5)에 의해 $p$는 연속이므로, [[compact-subsets-of-complex-plane|복소평면의 콤팩트 집합]]의 (4)의 (ii)에 의해 $K$의 모든 $z$에서 $|p(c')| \le |p(z)|$인 $c' \in K$가 있습니다. $p(c') \ne 0$이므로 [[modulus-of-complex-number]]의 (1)에 의해 $0 < |p(c')|$이고, 같은 항목의 (4)와 [[order-properties-of-reals]]의 (6)의 (ii)(두 수가 같으면 역수도 같다)에 의해 $K$에서 $|h(z)| = |p(z)|^{-1} \le |p(c')|^{-1}$입니다.

따라서 모든 $z$에서 $|h(z)| \le M = 2|a_d|^{-1} + |p(c')|^{-1}$이고, (1)에 의해 $h$는 상수함수입니다. 그러면 $p(z) = h(z)^{-1}$도 모든 $z$에서 같은 값이어서 $p$는 상수함수이고, 이것은 처음의 가정과 어긋납니다. 따라서 $p$는 근을 갖습니다.
:::

:::counterexample[$B(0, 1)$ 위의 유계인 정칙함수 $z$]
열린 원판 $B(0, 1)$ 위에서 $z$에서의 값이 $z$인 함수 $f$는 [[complex-derivative|복소 미분]]의 (5)에 의해 정칙함수이고, 모든 $z \in B(0, 1)$에서 $|f(z)| < 1$이어서 유계입니다. 그러나 $f(0) = 0$이고 $f(1/2) = 1/2$이므로 상수가 아닙니다. 이 $f$는 $\mathbb{C}$ 전체에서 정의된 함수가 아니므로 (1)의 가정을 만족하지 않습니다. 증명에서 코시 부등식에 쓴 원판 $B(a, R)$가 정의역에 들어야 하는데, 여기서는 $a = 0$이어도 $R \le 1$이어야 해서 $|f'(0)| \le M/R$의 상한을 $0$에 가깝게 할 수 없습니다.
:::

## 역사와 맥락

출처(Beck 외)는 각주에서 이 정리가 역사적 이유로 조제프 리우빌(1809–1882)의 것으로 잘못 알려져 있고, 그보다 먼저 코시가 발표했으며, 가우스가 코시보다 먼저 알았을 수도 있다고 적습니다. 또 이 정리로 대수학의 기본정리를 다시 증명하면서, 그 증명이 가우스의 원래 증명에 가깝다고 적습니다.

## 확인 질문

:::check[모든 $z$에서 $|f(z)| \le 7$인 정함수 $f$가 $f(0) = 2$이면 $f(5i)$는?]
(1)에 의해 $f$는 상수함수이므로 $f(5i) = f(0) = 2$입니다.
:::

:::check[$0$ 이상인 실수 $A$, $B$와 $0$ 이상인 정수 $k$로 모든 $z$에서 $|\exp(z)| \le A + B|z|^k$가 되게 할 수 있는가?]
없습니다. 그런 $A$, $B$, $k$가 있다면 $\exp$는 정함수이므로([[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (1)) (2)에 의해 $\exp^{(k+1)}(0) = 0$이어야 합니다. 그런데 같은 항목의 (2)에 의해 $\exp^{(k+1)}(0) = 1$입니다.
:::
