---
title: 다항함수의 곱
title_en: Product of Polynomial Functions
aliases: [함수의 곱, 함수의 거듭제곱, 다항함수의 거듭제곱, product of functions, product of polynomials]
kind: proposition
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 실함수의 곱 fg 와 함수의 열의 곱, 함수의 거듭제곱을 값으로 정의하고 계산 법칙을 보인다. f ∈ 𝒫ₘ, g ∈ 𝒫ₙ 이면 fg ∈ 𝒫ₘ₊ₙ 이고, 다항함수의 열의 곱과 거듭제곱도 다항함수이며 (t − c₁)⋯(t − c_p) ∈ 𝒫_p 이다.
requires: [function, function-composition, mathematical-induction, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, subspace, finite-sum-of-vectors, linear-combination-and-span, linear-map, standard-basis, power-of-a-real-number, order-properties-of-reals, finite-product-of-reals, polynomial-function]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 1절, 1.5 Multiplicities of eigenvalues, p.102–103; 9장 2절, 2.1 Polynomials of operators, p.257
    checked: original
    note: "출처는 다항식의 곱을 정의하지 않고 쓴다. 4장 1.5(p.102)는 p(z) = (z − λ)q(z) 로, p.103 은 p(z) = aₙ(z − λ₁)(z − λ₂) … (z − λₙ) 으로 적고, 9장 2.1(p.257)은 연산자의 다항식을 말하며 R(z) = p(z)q(z) 와 일차식의 곱 a(z − z₁)(z − z₂) … (z − z_N) 을 쓴다. 두 다항식의 곱이 다시 다항식이고 차수가 더해진다는 것은 출처가 진술하지 않는다('product', 'polynomial', 'degree' 로 책 전체를 찾아 나온 곳을 읽은 범위). 함수의 곱을 값으로 정한 것, (1)–(6)의 진술과 증명(곱하는 사상의 선형성으로 생성의 원소끼리 곱하기)은 이 사이트의 것이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 뒤 항목에 기대던 반례 2건을 바꾸고, 예시 메모의 부정 주장 2건을 지웠으며, 정의하지 않은 표기와 범위 없는 변수를 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$\mathbb{R}^{\mathbb{R}}$, 영함수 $o$, $t^k$, $t - c$, $\mathcal{P}_n$과 $0$부터 번호가 붙은 계수의 표기는 [[polynomial-function|다항함수]]의 것이다. 실수의 열의 곱은 [[finite-product-of-reals|실수의 유한 곱]]의 것이고, 실수의 거듭제곱은 [[power-of-a-real-number]]의 것이다.

**함수의 곱.** $f$, $g \in \mathbb{R}^{\mathbb{R}}$이면 $x$에서의 값이 $f(x)g(x)$인 함수를 $f$와 $g$의 **곱**(product)이라 하고 $fg$로 쓴다([[real-function-space|(G)]]). $p \ge 0$이 정수이고 $f_1, \dots, f_p$가 길이 $p$인 $\mathbb{R}^{\mathbb{R}}$의 열이면, $x$에서의 값이 실수의 열 $f_1(x), \dots, f_p(x)$의 곱 $f_1(x) \cdots f_p(x)$인 함수를 이 열의 곱이라 하고 $f_1 \cdots f_p$로 쓴다. $p = 0$이면 그 값은 빈 곱 $1$이므로 $f_1 \cdots f_p = t^0$이다. 항이 식으로 주어진 열의 곱도 같은 꼴로 쓴다. 예컨대 실수의 열 $c_1, \dots, c_p$에 대하여 $i$번째 항이 $t - c_i$인 열의 곱을 $(t - c_1) \cdots (t - c_p)$로 쓰고, 그 값은 $(x - c_1) \cdots (x - c_p)$이다. 정수 $k \ge 0$에 대하여, 모든 항이 $f$인 길이 $k$인 열의 곱을 $f$의 **$k$제곱**이라 하고 $f^k$로 쓴다. 실수의 유한 곱의 (4)에 의해 그 값은 $f(x)^k$이다.

다음이 성립한다. 아래에서 $f$, $g$, $h \in \mathbb{R}^{\mathbb{R}}$, $\alpha$는 실수, $j$, $k$, $m$, $n$, $p$는 $0$ 이상인 정수이다.

1. (계산 법칙) $fg = gf$, $(fg)h = f(gh)$, $f(g + h) = fg + fh$, $(f + g)h = fh + gh$, $(\alpha f)g = \alpha(fg) = f(\alpha g)$, $t^0 f = f$, $o f = o$이다. $t^j t^k = t^{j+k}$이다. 또 $f$를 정하면 $g$를 $gf$로 보내는 함수 $\mathbb{R}^{\mathbb{R}} \to \mathbb{R}^{\mathbb{R}}$은 [[linear-map|선형사상]]이다.
2. (열의 곱) 길이 $p + 1$인 $\mathbb{R}^{\mathbb{R}}$의 열 $f_1, \dots, f_{p+1}$에 대하여 $f_1 \cdots f_{p+1} = (f_1 \cdots f_p) f_{p+1}$이다(오른쪽의 $f_1 \cdots f_p$는 처음 $p$개의 곱). 길이 $1$인 열의 곱은 $f_1$이고 길이 $2$인 열의 곱은 $f_1 f_2$이다. $k \in \{1, \dots, p+1\}$이고 $g_1, \dots, g_p$가 $k$번째 항을 지운 열이면 $f_1 \cdots f_{p+1} = (g_1 \cdots g_p) f_k$이다. $x$에서 $(f_1 \cdots f_p)(x) = 0$인 것은 정확히 어떤 $i$에서 $f_i(x) = 0$일 때이다.
3. (거듭제곱) $f^0 = t^0$, $f^1 = f$, $f^{k+1} = f^k f$, $f^{j+k} = f^j f^k$, $(fg)^k = f^k g^k$이다. $f = t$이면 이 $k$제곱은 [[polynomial-function|다항함수]]의 $t^k$와 같은 함수이다.
4. (곱은 다항함수) $f \in \mathcal{P}_m$이고 $g \in \mathcal{P}_n$이면 $fg \in \mathcal{P}_{m+n}$이다. 특히 $f \in \mathcal{P}_n$이면 $tf \in \mathcal{P}_{n+1}$이고 실수 $c$에 대하여 $(t - c)f \in \mathcal{P}_{n+1}$이다. 두 다항함수의 곱은 다항함수이다.
5. (열의 곱과 차수의 상계) $d_1, \dots, d_p$가 $0$ 이상인 정수의 열이면 그 합 $d_1 + \cdots + d_p$(실수의 합)는 $0$ 이상인 정수이다. 모든 $i$에서 $f_i \in \mathcal{P}_{d_i}$이면 $f_1 \cdots f_p \in \mathcal{P}_{d_1 + \cdots + d_p}$이다. 모든 $i$에서 $f_i \in \mathcal{P}_1$이면 $f_1 \cdots f_p \in \mathcal{P}_p$이고, 특히 실수의 열 $c_1, \dots, c_p$에 대하여 $(t - c_1) \cdots (t - c_p) \in \mathcal{P}_p$이다.
6. (거듭제곱과 차수의 상계) $f \in \mathcal{P}_d$($d \ge 0$은 정수)이면 $f^k \in \mathcal{P}_{kd}$이다. 특히 $(t - c)^k \in \mathcal{P}_k$이다. 따라서 실수의 열 $\mu_1, \dots, \mu_r$과 $0$ 이상인 정수의 열 $m_1, \dots, m_r$에 대하여, $j$번째 항이 $(t - \mu_j)^{m_j}$인 열의 곱 $(t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}$은 $\mathcal{P}_{m_1 + \cdots + m_r}$에 든다.
:::

:::english
$\mathbb{R}^{\mathbb{R}}$, the zero function $o$, $t^k$, $t - c$, $\mathcal{P}_n$ and the notation for coefficients indexed from $0$ are those of the entry on polynomial functions. Products of sequences of real numbers are those of the entry on finite products of real numbers, and powers of real numbers are those of the entry on powers of a real number.

**Products of functions.** For $f, g \in \mathbb{R}^{\mathbb{R}}$, the function whose value at $x$ is $f(x)g(x)$ is called the **product** of $f$ and $g$ and is written $fg$ (by (G)). If $p \ge 0$ is an integer and $f_1, \dots, f_p$ is a sequence in $\mathbb{R}^{\mathbb{R}}$ of length $p$, the function whose value at $x$ is the product $f_1(x) \cdots f_p(x)$ of the sequence of real numbers $f_1(x), \dots, f_p(x)$ is called the product of this sequence and is written $f_1 \cdots f_p$. If $p = 0$ its values are the empty product $1$, so $f_1 \cdots f_p = t^0$. The product of a sequence whose terms are given by expressions is written in the same way; for example, for a sequence of real numbers $c_1, \dots, c_p$, the product of the sequence whose $i$-th term is $t - c_i$ is written $(t - c_1) \cdots (t - c_p)$, and its value is $(x - c_1) \cdots (x - c_p)$. For an integer $k \ge 0$, the product of the sequence of length $k$ all of whose terms are $f$ is called the **$k$-th power** of $f$ and is written $f^k$. By item (4) of the entry on finite products of real numbers, its value is $f(x)^k$.

The following hold. Below, $f, g, h \in \mathbb{R}^{\mathbb{R}}$, $\alpha$ is a real number, and $j, k, m, n, p$ are integers that are at least $0$.

1. (Rules of computation) $fg = gf$, $(fg)h = f(gh)$, $f(g + h) = fg + fh$, $(f + g)h = fh + gh$, $(\alpha f)g = \alpha(fg) = f(\alpha g)$, $t^0 f = f$, and $o f = o$. Also $t^j t^k = t^{j+k}$. Moreover, for fixed $f$, the function $\mathbb{R}^{\mathbb{R}} \to \mathbb{R}^{\mathbb{R}}$ sending $g$ to $gf$ is a linear map.
2. (Products of sequences) For a sequence $f_1, \dots, f_{p+1}$ in $\mathbb{R}^{\mathbb{R}}$ of length $p + 1$, $f_1 \cdots f_{p+1} = (f_1 \cdots f_p) f_{p+1}$ (where $f_1 \cdots f_p$ on the right is the product of the first $p$ terms). The product of a sequence of length $1$ is $f_1$, and that of a sequence of length $2$ is $f_1 f_2$. If $k \in \{1, \dots, p+1\}$ and $g_1, \dots, g_p$ is the sequence with the $k$-th term deleted, then $f_1 \cdots f_{p+1} = (g_1 \cdots g_p) f_k$. At a point $x$, $(f_1 \cdots f_p)(x) = 0$ exactly when $f_i(x) = 0$ for some $i$.
3. (Powers) $f^0 = t^0$, $f^1 = f$, $f^{k+1} = f^k f$, $f^{j+k} = f^j f^k$ and $(fg)^k = f^k g^k$. If $f = t$, this $k$-th power is the same function as the $t^k$ of the entry on polynomial functions.
4. (Products are polynomial functions) If $f \in \mathcal{P}_m$ and $g \in \mathcal{P}_n$, then $fg \in \mathcal{P}_{m+n}$. In particular, if $f \in \mathcal{P}_n$, then $tf \in \mathcal{P}_{n+1}$ and $(t - c)f \in \mathcal{P}_{n+1}$ for every real number $c$. The product of two polynomial functions is a polynomial function.
5. (Products of sequences and an upper bound) If $d_1, \dots, d_p$ is a sequence of integers that are at least $0$, then its sum $d_1 + \cdots + d_p$ (a sum of real numbers) is an integer that is at least $0$. If $f_i \in \mathcal{P}_{d_i}$ for every $i$, then $f_1 \cdots f_p \in \mathcal{P}_{d_1 + \cdots + d_p}$. If $f_i \in \mathcal{P}_1$ for every $i$, then $f_1 \cdots f_p \in \mathcal{P}_p$; in particular, for a sequence of real numbers $c_1, \dots, c_p$, $(t - c_1) \cdots (t - c_p) \in \mathcal{P}_p$.
6. (Powers and an upper bound) If $f \in \mathcal{P}_d$ ($d \ge 0$ an integer), then $f^k \in \mathcal{P}_{kd}$. In particular $(t - c)^k \in \mathcal{P}_k$. Hence, for a sequence of real numbers $\mu_1, \dots, \mu_r$ and a sequence of integers $m_1, \dots, m_r$ that are at least $0$, the product $(t - \mu_1)^{m_1} \cdots (t - \mu_r)^{m_r}$ of the sequence whose $j$-th term is $(t - \mu_j)^{m_j}$ lies in $\mathcal{P}_{m_1 + \cdots + m_r}$.
:::

## 직관

두 함수의 곱은 점마다 두 값을 곱한 함수입니다. 계산 법칙 (1)은 모두 실수의 곱의 법칙을 점마다 쓴 것입니다. 해석학 입문의 [[real-valued-function|실숫값 함수]]도 같은 값으로 곱을 정하므로, 정의역이 $\mathbb{R}$인 두 함수의 곱은 어느 쪽으로 정해도 같은 함수입니다. 이 강의에서는 이 항목의 정의를 씁니다.

(4)의 핵심은 "생성의 원소끼리 곱하면 생성의 원소"라는 것입니다. $f = a_0 t^0 + \cdots + a_m t^m$에 $g$를 곱하는 일은 선형사상이므로 $fg$는 $t^j g$들의 일차결합이고, $g = b_0 t^0 + \cdots + b_n t^n$에 $t^j$를 곱하면 $b_k t^{j+k}$들의 일차결합이 됩니다. 지수 $j + k$가 $m + n$을 넘지 않으므로 $fg$는 $\mathcal{P}_{m+n}$에 듭니다. 두 다항식을 전개할 때 "항마다 곱해 지수를 더한다"는 계산이 바로 이것입니다.

(5)와 (6)은 차수의 위쪽 한계만 말합니다. 곱이 정확히 어느 $\mathcal{P}_n$부터 드는지(차수)는 계수가 하나로 정해진다는 것을 증명한 뒤 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]에서 다룹니다.

## 증명

:::idea
점마다의 실수 계산으로 법칙을 얻고, 곱하는 사상의 선형성과 $t^j t^k = t^{j+k}$로 $fg$를 $t^{j+k}$들의 일차결합으로 바꾼다.
:::

:::hint
$g$를 고정하고 $f$를 $fg$로 보내는 사상이 선형이면, $f$가 일차결합일 때 $fg$는 어떤 것들의 일차결합인가?
:::

:::hint
$t^j g$를 다시 $g$의 계수로 펼친다. 이번에는 $t^j$를 곱하는 사상의 선형성을 쓴다.
:::

:::proof
두 함수는 모든 $x$에서 값이 같으면 같다([[function|함수]]의 같음). (K…)는 [[real-number-arithmetic]]의 것, (H…), (C…)는 [[finite-sum-of-vectors]]의 것, (N…)는 [[linear-combination-and-span]]의 것, (S…)는 [[subspace]]의 것, (T5)는 [[linear-map]]의 것이다. $\mathbb{R}^{\mathbb{R}}$의 덧셈과 스칼라배의 값은 [[real-function-space]]의 정의대로 $(f + g)(x) = f(x) + g(x)$, $(\alpha f)(x) = \alpha f(x)$이다.

**(1)의 증명.** 모든 $x$에서 (K1)에 의해 $f(x)g(x) = g(x)f(x)$, (K2)에 의해 $(f(x)g(x))h(x) = f(x)(g(x)h(x))$, (K3)에 의해 $f(x)(g(x) + h(x)) = f(x)g(x) + f(x)h(x)$, (K12)의 (i)에 의해 $(f(x) + g(x))h(x) = f(x)h(x) + g(x)h(x)$, (K1)과 (K2)에 의해 $(\alpha f(x))g(x) = \alpha(f(x)g(x)) = f(x)(\alpha g(x))$, (K4)와 (K1)에 의해 $1 \cdot f(x) = f(x)$, (K9)에 의해 $0 \cdot f(x) = 0$이다. 각 등식의 양변은 이 값을 갖는 함수이므로 같다. $t^j t^k$의 값은 $x^j x^k$이고 거듭제곱의 (2)의 (i)에 의해 $x^{j+k}$이므로 $t^j t^k = t^{j+k}$이다. 마지막으로 $g$를 $gf$로 보내는 함수를 $M$이라 하면, 위의 법칙에 의해 $M(g + h) = (g + h)f = gf + hf = Mg + Mh$이고 $M(\alpha g) = (\alpha g)f = \alpha(gf) = \alpha Mg$이므로 $M$은 선형사상이다.

**(2)의 증명.** 모든 $x$에서 값을 비교한다. 처음 $p$개의 열의 값의 열 $f_1(x), \dots, f_p(x)$는 열 $f_1(x), \dots, f_{p+1}(x)$의 처음 $p$개이므로, [[finite-product-of-reals|실수의 유한 곱]]의 (1)에 의해 $(f_1 \cdots f_{p+1})(x) = (f_1(x) \cdots f_p(x)) f_{p+1}(x)$이고 이것은 $((f_1 \cdots f_p) f_{p+1})(x)$이다. 길이 $1$, $2$인 경우도 같은 (1)로 값이 $f_1(x)$, $f_1(x)f_2(x)$이다. 지운 열 $g$의 값의 열 $g_1(x), \dots, g_p(x)$는 값의 열에서 $k$번째 항을 지운 열이므로 유한 곱의 (6)에 의해 셋째 등식이 성립한다. 마지막 문장은 유한 곱의 (5)이다.

**(3)의 증명.** $f^0$은 빈 열의 곱이므로 $t^0$이다(정의). $f^1 = f$와 $f^{k+1} = f^k f$는 (2)이다(모든 항이 $f$인 길이 $k + 1$인 열의 처음 $k$개는 모든 항이 $f$인 길이 $k$인 열). 나머지는 값으로 본다. $f^j f^k$의 값은 $f(x)^j f(x)^k$이고 거듭제곱의 (2)의 (i)에 의해 $f(x)^{j+k}$, 곧 $f^{j+k}$의 값이다. $(fg)^k$의 값은 $(f(x)g(x))^k$이고 거듭제곱의 (2)의 (iii)에 의해 $f(x)^k g(x)^k$, 곧 $f^k g^k$의 값이다. $f = t$이면 $f^k$의 값은 $x^k$이므로 [[polynomial-function|다항함수]]의 $t^k$와 같은 함수이다.

**(4)의 증명.** 먼저 $g \in \mathcal{P}_n$, $g = b_0 t^0 + \cdots + b_n t^n$이고 $0 \le j \le m$이면 $t^j g \in \mathcal{P}_{m+n}$임을 보인다. (1)에 의해 $t^j g = g t^j$이고, $u$를 $u\,t^j$로 보내는 사상은 (1)에 의해 선형사상이므로 (T5)에 의해
$$
g\,t^j = b_0 (t^0 t^j) + \cdots + b_n (t^n t^j)
$$
이다(오른쪽은 $i$번째 항이 $b_{i-1}(t^{i-1} t^j)$인 열의 합). (1)에 의해 $t^{i-1} t^j = t^{(i-1)+j}$이고, $1 \le i \le n + 1$, $j \le m$이면 [[well-ordering-principle|(Z7)]]에 의해 $0 \le (i - 1) + j \le n + m$이다. 따라서 [[polynomial-function|다항함수]]의 (1)에 의해 각 항 $t^{(i-1)+j}$는 $\mathcal{P}_{m+n}$에 들고, (S3)에 의해 $b_{i-1} t^{(i-1)+j}$도 들며, (H1)에 의해 합 $t^j g$가 $\mathcal{P}_{m+n}$에 든다.

이제 $f = a_0 t^0 + \cdots + a_m t^m$이라 하자. $u$를 $ug$로 보내는 사상은 선형사상이므로 (T5)에 의해 $fg = a_0 (t^0 g) + \cdots + a_m (t^m g)$이다. 앞 문단에 의해 각 $t^{i-1} g$는 $\mathcal{P}_{m+n}$에 들고, (S3)과 (H1)에 의해 $fg \in \mathcal{P}_{m+n}$이다. $t \in \mathcal{P}_1$과 $t - c \in \mathcal{P}_1$(다항함수의 (4))에 이것을 쓰고 (1)의 $fg = gf$를 쓰면 $tf$, $(t - c)f \in \mathcal{P}_{1+n}$이다. $m + n$은 정수이다([[even-and-odd]]).

**(5)의 증명.** 첫 문장은 $p$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)이다. $p = 0$이면 합은 빈 합 $0$이다. 처음 $p$개의 합 $s$가 $0$ 이상인 정수이면, 합의 재귀 정의에 의해 길이 $p + 1$인 열의 합은 $s + d_{p+1}$이다. [[real-number-arithmetic|(K7)]]에 의해 이 실수의 합은 정수의 합과 같고, 정수의 합은 정수이며([[even-and-odd]]), $0 \le s$와 (Z7)에 의해 $d_{p+1} \le s + d_{p+1}$이고 $0 \le d_{p+1}$과 (Z6)에 의해 $0 \le s + d_{p+1}$이다.

둘째 문장도 $p$에 대한 귀납법이다. $p = 0$이면 곱은 $t^0$이고 합은 $0$이며 $t^0 \in \mathcal{P}_0$이다. 처음 $p$개의 곱이 $\mathcal{P}_s$($s$는 처음 $p$개의 $d$의 합)에 들면, (2)에 의해 $f_1 \cdots f_{p+1} = (f_1 \cdots f_p) f_{p+1}$이고 (4)에 의해 이것은 $\mathcal{P}_{s + d_{p+1}}$에 든다. 합의 재귀 정의에 의해 $s + d_{p+1}$은 $d_1 + \cdots + d_{p+1}$이다.

셋째 문장도 같은 귀납법이다. $p = 0$이면 $t^0 \in \mathcal{P}_0$이고, 처음 $p$개의 곱이 $\mathcal{P}_p$에 들면 (2)와 (4)에 의해 길이 $p + 1$인 열의 곱은 $\mathcal{P}_{p+1}$에 든다. 다항함수의 (4)에 의해 $t - c_i \in \mathcal{P}_1$이므로 마지막 문장이 나온다.

**(6)의 증명.** [[order-properties-of-reals|실수의 순서의 성질]]의 (4)의 (iv)와 (10)에 의해 $0$ 이상인 두 정수의 곱은 $0$ 이상이고, 정수의 곱은 정수이다([[even-and-odd]]). $k$에 대한 귀납법을 쓴다. $k = 0$이면 $f^0 = t^0 \in \mathcal{P}_0$이고 $0 \cdot d = 0$이다. $f^k \in \mathcal{P}_{kd}$이면 (3)과 (4)에 의해 $f^{k+1} = f^k f \in \mathcal{P}_{kd + d}$이고, $kd + d = (k + 1)d$이다(정수의 분배법칙). $f = t - c$, $d = 1$이면 $f^k \in \mathcal{P}_k$이다. 마지막 문장은 $f_j = (t - \mu_j)^{m_j} \in \mathcal{P}_{m_j}$를 (5)에 쓴 것이다. $\blacksquare$
:::

## 예시와 반례

:::example[두 일차 다항함수의 곱]
$f = 1\,t^0 + 2t^1$, $g = -3t^0 + 1\,t^1$이면 (1)의 분배법칙과 $t^j t^k = t^{j+k}$로
$$
\begin{aligned}
fg &= -3t^0 + 1\,t^1 - 6t^1 + 2t^2 \\
&= -3t^0 - 5t^1 + 2t^2
\end{aligned}
$$
이고 $\mathcal{P}_2$에 듭니다((4)에서 $m = n = 1$). 값으로 확인하면 $x = 2$에서 $f(2)g(2) = 5 \cdot (-1) = -5$이고 $-3 - 10 + 8 = -5$입니다.
:::

:::example[세 일차식의 곱]
$(t - 1)(t - 2)(t - 5)$, 곧 실수의 열 $1, 2, 5$에 대한 $(t - c_1)(t - c_2)(t - c_3)$은 (5)에 의해 $\mathcal{P}_3$에 듭니다. $x = 0$에서 값은 $(-1) \cdot (-2) \cdot (-5) = -10$이고, $x = 2$에서는 둘째 인수의 값이 $0$이므로 (2)의 마지막 문장에 의해 $0$입니다.
:::

:::counterexample[함수의 곱과 합성이 다른 예]
곱 $fg$는 점마다 값을 곱한 것이고, 한 함수의 값을 다른 함수에 넣는 합성과는 다를 수 있습니다. $f = t - (-1)$(값 $x + 1$)과 $g = t^2$에서 $fg$의 $1$에서의 값은 $f(1)g(1) = 2 \cdot 1 = 2$이지만, [[function-composition|합성]] $g \circ f$의 $1$에서의 값은 $g(f(1)) = 2^2 = 4$입니다. 그래서 $(t - c)^2$처럼 쓴 것은 (3)의 거듭제곱, 곧 $(t - c)(t - c)$이고 합성이 아닙니다.
:::

## 확인 질문

:::check[$f \in \mathcal{P}_2$일 때 $f^3$과 $t f^2$는 각각 어느 $\mathcal{P}_n$에 든다고 (4)–(6)으로 말할 수 있는가?]
(6)에 의해 $f^3 \in \mathcal{P}_{3 \cdot 2} = \mathcal{P}_6$이고, $f^2 \in \mathcal{P}_4$이므로 (4)에 의해 $t f^2 \in \mathcal{P}_{1+4} = \mathcal{P}_5$입니다.
:::

:::check[$p = 0$이면 $(t - c_1) \cdots (t - c_p)$는 어떤 함수인가?]
빈 열의 곱이므로 정의에 의해 $t^0$, 곧 값이 $1$인 상수함수이고 $\mathcal{P}_0$에 듭니다. (5)의 $\mathcal{P}_p$와도 맞습니다.
:::
