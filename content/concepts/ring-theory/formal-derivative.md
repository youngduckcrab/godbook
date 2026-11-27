---
title: 형식적 도함수
title_en: Formal Derivative
aliases: [다항식의 도함수, 곱의 법칙, formal derivative, derivative of a polynomial, product rule]
kind: definition
field: ring-theory
msc: ["13", "12"]
level: undergrad
summary: 단위원을 갖는 가환환 위의 다항식 f 의 형식적 도함수 f′ 를 k차 계수가 (k + 1)·(f 의 k + 1차 계수)인 다항식으로 정의한다. 합과 상수배를 보존하고 곱의 법칙과 거듭제곱의 법칙을 만족하며 계수 사상과 바꿀 수 있다. 표수 0 인 체에서는 차수가 하나 줄고, 표수가 소수 p 인 환에서는 지수가 p 의 배수인 항의 도함수가 0 이다.
requires: [prime-number, well-ordering-principle, divisibility, prime-power-divisors, mathematical-induction, group-homomorphism, power-in-a-group, integers-modulo-n, ring, ring-basic-properties, ring-examples, ring-homomorphism, integral-domain, field, subring, finite-sums-in-a-ring, finite-products-in-a-commutative-ring, characteristic-of-a-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism]
sources:
  - ref: judson-abstract-algebra
    loc: "17.5절 Exercises, 연습문제 25 (p.221–222); 22.1절 Structure of a Finite Field, 도함수의 정의와 Lemma 22.5 (p.279), Theorem 22.6 의 증명 (p.280); 23.1절 Field Automorphisms, Proposition 23.12 의 증명 (p.296)"
    checked: original
    note: "출처는 체 F 위의 f(x) = a_0 + a_1x + ⋯ + a_nx^n 의 도함수를 f′(x) = a_1 + 2a_2x + ⋯ + na_nx^{n−1} 로 정의하고(연습문제 25, p.221; 22.1절 p.279 에서 다시), 'the derivative of f(x)' 라고만 부른다. '형식적 도함수' 라는 이름은 출처에 나오지 않는다(검색어 formal, derivative). 이 항목은 단위원을 갖는 가환환에서 k차 계수를 (k + 1)·a_{k+1}(정수배)로 정의하며, 출처의 정의와 같은 다항식이다. (2)의 합의 법칙과 도함수를 취하는 함수가 덧셈군의 준동형이라는 것은 연습문제 25(a), (3)의 곱의 법칙은 연습문제 25(d)와 같은 내용이다. (5)의 표수 0 인 체에서 f′ ≠ 0 이고 차수가 하나 준다는 것은 연습문제 25(b)(D 의 핵)와 같은 내용이고, 출처 Proposition 23.12 의 증명(p.296)이 'this is impossible in a field of characteristic zero' 로 쓰는 사실이다. (6)의 표수 p 에서 도함수가 0 이 되는 항은 연습문제 25(c)와 Proposition 23.12 의 증명이 'f′(x) can be the zero polynomial if every coefficient of f′(x) is a multiple of p' 로 쓰는 것과 같은 발상이고, (X^{p^n} − X)′ = −1 은 출처 Theorem 22.6 의 증명(p.280)의 'f′(x) = p^n x^{p^n −1} − 1 = −1' 과 같다. (4)의 거듭제곱의 법칙은 출처 Lemma 22.5 의 증명(p.279)이 (x − α)^k g(x) 를 미분할 때 쓰는 k(x − α)^{k−1} 과 같은 식이다. (7)의 부분환 쪽은 출처 Lemma 22.5 의 증명(p.279)이 F[x] 의 f 를 확대체 위에서 일차식들의 곱으로 쓴 꼴로 미분하는 단계에서 말없이 쓰는 사실이고, 계수 사상과의 교환은 이 사이트가 덧붙였다. 예시 '정수 계수 다항식의 도함수'와 확인 질문은 출처 연습문제 25 와 같은 종류의 계산이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(ℤ₉·ℤ₂ 예의 계산 대입, 출처 주장 검색 — 틀린 '덧붙였다' 1건을 찾아 단원 전체를 다시 확인, 4건 고침). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$R$이 단위원을 갖는 가환환이라 하자. 다항식환 $R[X]$, 계수 $\operatorname{coef}_n$, 상수 다항식과 읽는 약속, 부정원 $X$는 [[polynomial-ring|다항식환]]의 것, 차수와 최고차계수는 [[degree-of-a-polynomial|다항식의 차수]]의 것, 계수 사상 $f^{\varphi}$와 대입은 [[evaluation-homomorphism|대입 준동형]]의 것이다. 정수배 $n \cdot a$는 [[ring|환]]의 것이고, 표수 $\operatorname{char} R$는 [[characteristic-of-a-ring|환의 표수]]의 것이다.

$f \in R[X]$에 대하여, $0$ 이상인 모든 정수 $k$에서
$$
\operatorname{coef}_k(f') = (k + 1) \cdot \operatorname{coef}_{k+1}(f)
$$
인 다항식 $f'$를 $f$의 **형식적 도함수**(formal derivative)라 한다. 기호 $f'$는 해석학의 도함수와 같은 기호이지만, 다항식 $f$에 쓰면 이 항목의 것이다.

다음이 성립한다. 아래에서 $f$, $g$는 $R[X]$의 원소이고 $c \in R$이며 $k$, $N$은 $0$ 이상인 정수이다.

1. (계수로 쓴 꼴) $0 \le j \le N$에서 정해진 $a_j \in R$에 대하여 $f = \sum_{j=0}^{N} a_j X^j$이면 $f' = \sum_{j=1}^{N} (j \cdot a_j) X^{j-1}$이다($N = 0$이면 빈 합 $0$). 따라서 $N \ge 1$이고 $f$가 $0$이거나 차수가 $N$ 이하이면 $f'$는 $0$이거나 차수가 $N - 1$ 이하이다. 상수 다항식의 형식적 도함수는 $0$이다.
2. (합과 상수배) $(f + g)' = f' + g'$, $(-f)' = -f'$, $(f - g)' = f' - g'$이고 $(cf)' = c f'$이다. 곧 $f$에 $f'$를 대응시키는 함수는 덧셈군 $(R[X], +)$에서 자기 자신으로의 군 준동형이다. 또 $X' = 1$이고, $k \ge 1$이면 $(X^k)' = k \cdot X^{k-1}$이다.
3. (곱의 법칙) $(fg)' = f'g + fg'$이다.
4. (거듭제곱) $k \ge 1$이면 $(f^k)' = k \cdot (f^{k-1} f')$이다. 특히 $((X - c)^k)' = k \cdot (X - c)^{k-1}$이다.
5. (표수 $0$인 체) $F$가 $\operatorname{char} F = 0$인 [[field|체]]이고 $f \in F[X]$의 차수가 $n \ge 1$이면, $f' \ne 0$이고 $\deg f' = n - 1$이며 $f'$의 최고차계수는 $n \cdot a$이다($a$는 $f$의 최고차계수). 따라서 $f \in F[X]$에 대하여 $f' = 0$인 것은 정확히 $f$가 상수 다항식일 때이다.
6. (표수가 소수인 환) $\operatorname{char} R = p$이고 $p$가 소수라 하자. $k$가 $p$의 배수이면 $(X^k)' = 0$이다. 특히 모든 자연수 $n$에 대하여 $(X^{p^n} - X)' = -1$이다. 여기서 지수 $p^n$은 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 정수의 거듭제곱이다.
7. (계수 사상과 부분환) $S$가 단위원을 갖는 가환환이고 $\varphi : R \to S$가 $1$을 $1$로 보내는 환 준동형이면 $(f^{\varphi})' = (f')^{\varphi}$이다. $R_0$이 $1 \in R_0$인 $R$의 [[subring|부분환]]이고 $f \in R_0[X]$이면 $f'$는 $R_0[X]$에서 구한 것과 $R[X]$에서 구한 것이 같다.
:::

:::english
Let $R$ be a commutative ring with unity. The polynomial ring $R[X]$, the coefficients $\operatorname{coef}_n$, constant polynomials with the reading convention and the indeterminate $X$ are those of the polynomial ring; degree and leading coefficient are those of the degree of a polynomial; the coefficient map $f^{\varphi}$ and evaluation are those of the evaluation homomorphism. The integer multiple $n \cdot a$ is that of rings, and the characteristic $\operatorname{char} R$ is that of the characteristic of a ring.

For $f \in R[X]$, the polynomial $f'$ with
$$
\operatorname{coef}_k(f') = (k + 1) \cdot \operatorname{coef}_{k+1}(f)
$$
for every nonnegative integer $k$ is called the **formal derivative** of $f$. The symbol $f'$ is the same as that of the derivative in analysis, but applied to a polynomial $f$ it means the one defined here.

The following hold. Below, $f$, $g$ are elements of $R[X]$, $c \in R$, and $k$, $N$ are nonnegative integers.

1. (In terms of coefficients) If $a_j \in R$ are given for $0 \le j \le N$ and $f = \sum_{j=0}^{N} a_j X^j$, then $f' = \sum_{j=1}^{N} (j \cdot a_j) X^{j-1}$ (the empty sum $0$ if $N = 0$). Hence if $N \ge 1$ and $f$ is $0$ or of degree at most $N$, then $f'$ is $0$ or of degree at most $N - 1$. The formal derivative of a constant polynomial is $0$.
2. (Sums and constant multiples) $(f + g)' = f' + g'$, $(-f)' = -f'$, $(f - g)' = f' - g'$ and $(cf)' = c f'$. That is, the function sending $f$ to $f'$ is a group homomorphism from the additive group $(R[X], +)$ to itself. Also $X' = 1$, and $(X^k)' = k \cdot X^{k-1}$ for $k \ge 1$.
3. (Product rule) $(fg)' = f'g + fg'$.
4. (Powers) If $k \ge 1$, then $(f^k)' = k \cdot (f^{k-1} f')$. In particular $((X - c)^k)' = k \cdot (X - c)^{k-1}$.
5. (Fields of characteristic $0$) If $F$ is a field with $\operatorname{char} F = 0$ and $f \in F[X]$ has degree $n \ge 1$, then $f' \ne 0$, $\deg f' = n - 1$, and the leading coefficient of $f'$ is $n \cdot a$, where $a$ is the leading coefficient of $f$. Hence for $f \in F[X]$, $f' = 0$ if and only if $f$ is a constant polynomial.
6. (Rings of prime characteristic) Let $\operatorname{char} R = p$ with $p$ prime. If $k$ is a multiple of $p$, then $(X^k)' = 0$. In particular $(X^{p^n} - X)' = -1$ for every natural number $n$. Here the exponent $p^n$ is the integer power of the divisors that are powers of a prime.
7. (Coefficient maps and subrings) If $S$ is a commutative ring with unity and $\varphi : R \to S$ is a ring homomorphism sending $1$ to $1$, then $(f^{\varphi})' = (f')^{\varphi}$. If $R_0$ is a subring of $R$ with $1 \in R_0$ and $f \in R_0[X]$, then $f'$ is the same whether computed in $R_0[X]$ or in $R[X]$.
:::

## 직관

실수의 다항함수에서 $x^k$의 도함수가 $k x^{k-1}$이라는 것을 계수에만 남겨 적으면, "$k + 1$차 계수에 $k + 1$을 곱해 한 칸 아래로 내린다"가 됩니다. 이 항목은 극한을 쓰지 않고 이 규칙 자체를 정의로 삼습니다. 그래서 "형식적"이라는 이름이 붙고, 극한이 없는 $\mathbb{Z}_p$ 같은 환 위에서도 정의됩니다.

정의에 극한이 없어도 미분에서 익숙한 규칙은 그대로 성립합니다. 합과 상수배를 보존하고((2)) 곱의 법칙((3))과 거듭제곱의 법칙((4))이 성립합니다. 곱의 법칙은 $X^j X^k$에서 확인한 뒤, 두 다항식이 그런 항들의 합이라는 것으로 넓힙니다. 다른 점은 계수에 붙는 정수배 $k \cdot a$가 $0$이 될 수 있다는 것입니다. 표수가 $p$이면 $p \cdot 1 = 0$이므로 $X^p$의 도함수는 $0$입니다((6)). 표수가 $0$인 체에서는 이런 일이 없어서, 상수가 아닌 다항식의 도함수는 $0$이 아니고 차수가 정확히 하나 줍니다((5)).

## 증명

:::idea
(1)과 (2)는 계수의 정의에서 바로 나온다. (3)은 $B(f, g) = (fg)' - f'g - fg'$가 두 자리 모두에서 합과 상수배를 보존하고 $B(X^j, X^k) = 0$임을 보인 뒤, $f$와 $g$를 $X$의 거듭제곱의 합으로 쓴다.
:::

:::hint
$(X^j X^k)' = (j + k) \cdot X^{j+k-1}$이고, $(X^j)' X^k + X^j (X^k)'$도 $j \cdot X^{j+k-1} + k \cdot X^{j+k-1}$입니다($j = 0$이나 $k = 0$이면 해당 항은 $0$).
:::

:::proof
**쓰는 사실.** 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7)을 쓴다. 귀납법은 [[mathematical-induction|수학적 귀납법]]이다. "다항식환의 (n)"은 [[polynomial-ring|다항식환]]의 (n), "차수의 (n)"은 [[degree-of-a-polynomial|다항식의 차수]]의 (n), "대입의 (n)"은 [[evaluation-homomorphism|대입 준동형]]의 (n), "합의 (n)"은 [[finite-sums-in-a-ring|환의 유한 합]]의 (n), "기본 성질의 (n)"은 [[ring-basic-properties|환의 기본 성질]]의 (n)이다. 정수배는 [[power-in-a-group|군의 거듭제곱]]의 (4)의 것이므로 정수 $m$, $l$과 $x, y \in R[X]$에서 $(m + l) \cdot x = m \cdot x + l \cdot x$, $m \cdot (x + y) = m \cdot x + m \cdot y$, $m \cdot (l \cdot x) = (ml) \cdot x$이고, 기본 성질의 (5), (6)에 의해 $(m \cdot x) y = m \cdot (xy) = x (m \cdot y)$, $m \cdot x = (m \cdot 1) x$이다.

**정의에 대하여.** $N$ 너머에서 $f$의 계수가 $0$이면 $k \ge N$에서 $k + 1 > N$이므로 $\operatorname{coef}_k(f') = (k + 1) \cdot 0 = 0$이다. 따라서 $f'$는 $R[X]$의 원소이다(값으로 정한 함수).

**2의 증명.** 군 준동형의 조건 $\operatorname{coef}_k((f + g)') = (k + 1) \cdot (\operatorname{coef}_{k+1}(f) + \operatorname{coef}_{k+1}(g))$는 정수배의 분배에 의해 $\operatorname{coef}_k(f') + \operatorname{coef}_k(g')$이다. $-f$와 $f - g$는 [[group-homomorphism|군 준동형]]의 (6)에서 나온다. 다항식환의 (3)의 (iii)과 기본 성질의 (5)에 의해 $\operatorname{coef}_k((cf)') = (k + 1) \cdot (c \operatorname{coef}_{k+1}(f)) = c\,((k + 1) \cdot \operatorname{coef}_{k+1}(f))$이다. 다항식환의 (4)의 (iii)에 의해 $\operatorname{coef}_k((X^j)')$는 $k + 1 = j$이면 $j \cdot 1$이고 아니면 $0$이다. 따라서 $j \ge 1$이면 $(X^j)'$는 $(j \cdot 1) X^{j-1}$과 계수가 같고(다항식환의 (3)의 (iii)), 이것은 $j \cdot X^{j-1}$이다. $j = 1$이면 $X' = 1 \cdot X^0 = 1$이다.

**1의 증명.** (2)와 합의 (7)(도함수를 취하는 함수는 군 준동형)에 의해 $f' = \sum_{j=0}^{N} (a_j X^j)'$이고 (2)에 의해 $(a_j X^j)' = a_j (X^j)'$이다. $j = 0$이면 $(X^0)' = 1' = 0$이고(모든 계수가 $(k+1) \cdot 0$), $j \ge 1$이면 $a_j (j \cdot X^{j-1}) = (j \cdot a_j) X^{j-1}$이다. 합의 (2)로 $j = 0$인 항(값 $0$)을 떼면 식이 나온다. $f$가 $0$이거나 차수가 $N$ 이하이면 차수의 (1)에 의해 이 꼴로 쓸 수 있고, 이 식의 각 항은 $0$이거나 차수가 $N - 1$ 이하이므로(차수의 (2), (4)) 합도 그렇다(차수의 (3)을 거듭 쓴다. 합의 (2)로 항을 하나씩 더하는 귀납법). 상수 다항식은 $N = 0$인 경우이다.

**3의 증명.** $B(f, g) = (fg)' - f'g - fg'$로 두자. (2)와 분배법칙에 의해 $B(f_1 + f_2, g) = B(f_1, g) + B(f_2, g)$, $B(cf, g) = c\,B(f, g)$이고, 곱셈의 교환법칙에 의해 $B(f, g) = B(g, f)$이다. 따라서 $g$를 고정하면 $f$에 $B(f, g)$를 대응시키는 함수는 덧셈군의 군 준동형이고, 합의 (7)에 의해 유한 합을 보존한다.

먼저 $0$ 이상인 정수 $j$, $k$에서 $B(X^j, X^k) = 0$이다. $j = 0$이면 $X^0 = 1$이고 $1' = 0$이므로 $B(1, X^k) = (X^k)' - 0 - (X^k)' = 0$이다. $k = 0$도 대칭에 의해 같다. $j, k \ge 1$이면 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (6)의 (ii)와 (2)에 의해 $(X^j X^k)' = (X^{j+k})' = (j + k) \cdot X^{j+k-1}$이고, $(X^j)' X^k + X^j (X^k)' = j \cdot (X^{j-1} X^k) + k \cdot (X^j X^{k-1}) = j \cdot X^{j+k-1} + k \cdot X^{j+k-1} = (j + k) \cdot X^{j+k-1}$이다.

이제 $f = \sum_{j=0}^{N} a_j X^j$, $g = \sum_{k=0}^{N} b_k X^k$로 쓰자(차수의 (1), 두 다항식 모두에 맞는 $N$). 앞 문단의 성질에 의해 $B(f, g) = \sum_{j=0}^{N} a_j\, B(X^j, g)$이고, 대칭과 같은 성질로 $B(X^j, g) = \sum_{k=0}^{N} b_k\, B(X^j, X^k) = 0$이다(합의 (3), (6)의 (iv)). 따라서 $B(f, g) = 0$이다.

**4의 증명.** $k$에 대한 귀납법. $k = 1$이면 $f^1 = f$이고 $1 \cdot (f^0 f') = f'$이다. $k$에서 성립하면 곱의 (6)의 (i)과 (3), 귀납 가정에 의해
$$
\begin{aligned}
(f^{k+1})' &= (f^k f)' = (f^k)' f + f^k f' \\
&= k \cdot (f^{k-1} f' f) + f^k f' \\
&= (k + 1) \cdot (f^k f')
\end{aligned}
$$
이다($f^{k-1} f = f^k$). $f = X - c$이면 (2)에 의해 $f' = 1 - 0 = 1$이다.

**5의 증명.** $f$의 $n$차 계수를 $a \ne 0$이라 하자. $k \ge n$이면 $\operatorname{coef}_k(f') = (k + 1) \cdot 0 = 0$이고, $\operatorname{coef}_{n-1}(f') = n \cdot a$이다. 체는 정역이고([[field|가역원과 체]]의 (3)), [[characteristic-of-a-ring|환의 표수]]의 (3)에 의해 정역의 $a \ne 0$에서 $n \cdot a = 0$인 것은 정확히 $\operatorname{char} F = 0$이 $n$을 나눌 때, 곧 $n = 0$일 때이다([[divisibility|나누어떨어짐]]). $n \ge 1$이므로 $n \cdot a \ne 0$이고, 차수의 (1)에 의해 결론이 나온다. 마지막 문장: $f$가 상수이면 (1)에 의해 $f' = 0$이고, 상수가 아니면 $f \ne 0$이고 $\deg f \ge 1$(차수의 (2))이므로 $f' \ne 0$이다.

**6의 증명.** $k = pm$이면 $k \cdot 1 = 0$이다(표수의 (1)). $k = 0$이면 $(X^0)' = 0$이고, $k \ge 1$이면 (2)에 의해 $(X^k)' = k \cdot X^{k-1} = (k \cdot 1) X^{k-1} = 0$이다. 자연수 $n$에서 $p^n$은 $p$의 배수이므로([[prime-power-divisors|소수의 거듭제곱인 약수]]의 (2)) $(X^{p^n} - X)' = 0 - 1 = -1$이다((2)).

**7의 증명.** 환 준동형은 덧셈군의 준동형이므로([[ring-homomorphism|환 준동형]]의 (1)) $\varphi((k + 1) \cdot a) = (k + 1) \cdot \varphi(a)$이다. 따라서 $\operatorname{coef}_k((f^{\varphi})') = (k + 1) \cdot \varphi(\operatorname{coef}_{k+1}(f)) = \varphi(\operatorname{coef}_k(f')) = \operatorname{coef}_k((f')^{\varphi})$이다. 부분환의 경우는 포함 함수 $\iota : R_0 \to R$에 이것을 쓰고, 대입의 (8)에 의해 $f^{\iota} = f$, $(f')^{\iota} = f'$이다($f'$는 $R_0[X]$에서 구한 것).
:::

## 예시와 반례

:::example[정수 계수 다항식의 도함수]
$\mathbb{Z}[X]$의 $f = 2 - 5X + X^3 + 4X^4$이면 (1)에 의해 $f' = -5 + 3X^2 + 16X^3$입니다. $f = (X^2 + 1)(X^2 - X)$로 나누어 곱의 법칙을 쓰면 $(2X)(X^2 - X) + (X^2 + 1)(2X - 1) = 2X^3 - 2X^2 + 2X^3 - X^2 + 2X - 1 = 4X^3 - 3X^2 + 2X - 1$이고, 이것은 $(X^2 + 1)(X^2 - X) = X^4 - X^3 + X^2 - X$를 (1)로 미분한 $4X^3 - 3X^2 + 2X - 1$과 같습니다.
:::

:::counterexample[표수가 소수이면 상수가 아닌 다항식의 도함수가 0 일 수 있다]
$\mathbb{Z}_2[X]$에서 $(X^2 + [1])' = [2]X = [0]$입니다. $\operatorname{char} \mathbb{Z}_2 = 2$이므로 (6)의 경우이고, (5)의 "표수 $0$"이라는 가정 없이는 상수가 아닌 다항식의 도함수가 $0$일 수 있습니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_3[X]$에서 $X^4 + X^3 + [2]X$의 형식적 도함수는?]
(1)에 의해 $[4]X^3 + [3]X^2 + [2] = X^3 + [2]$입니다. $X^3$의 도함수 $[3]X^2$는 $\operatorname{char} \mathbb{Z}_3 = 3$이므로 $0$입니다((6)).
:::

:::check[$f \in \mathbb{R}[X]$이고 $f' = 0$이면 $f$는 어떤 다항식인가?]
$\mathbb{R}$은 체이고([[field|가역원과 체]]의 (4)) 표수가 $0$이므로([[characteristic-of-a-ring|환의 표수]]의 (4)) (5)에 의해 상수 다항식입니다. 차수가 $1$ 이상이면 도함수의 차수가 하나 줄 뿐 $0$이 되지는 않습니다.
:::
