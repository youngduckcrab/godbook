---
title: 대입 준동형
title_en: Evaluation Homomorphism
aliases: [대입, 다항식의 값, 근, 계수 사상, 계수를 옮긴 다항식, 법 m 으로 줄이기, evaluation, root, zero of a polynomial, coefficient map, reduction modulo m]
kind: theorem
field: ring-theory
msc: ["13"]
level: undergrad
summary: 다항식에 환의 원소를 대입한 값과 근을 정의하고, 대입이 1 을 1 로 보내는 환 준동형이라는 것을 보인다. 1 을 1 로 보내는 환 준동형으로 계수를 옮긴 다항식(계수 사상)이 환 준동형이고 합성·항등과 맞으며 대입과 맞물린다는 것, 다항식환에서 나가는 환 준동형은 상수와 X 의 상으로 정해진다는 것, X 를 X + c 로 옮기는 자기동형, 정수 계수를 법 m 으로 줄이는 사상을 다룬다.
requires: [function, function-composition, inverse-function, injective-surjective-bijective, prime-number, well-ordering-principle, congruence-modulo-n, equivalence-classes-equal-iff-related, integers-modulo-n, mathematical-induction, ring, ring-basic-properties, ring-examples, subring, ring-homomorphism, finite-sums-in-a-ring, rearranging-finite-sums-in-a-ring, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "17.1절 Polynomial Rings, Theorem 17.5 와 evaluation homomorphism 의 정의 (p.212); 17.2절 The Division Algorithm, 근(zero, root)의 정의 (p.214); 16.3절 Ring Homomorphisms and Ideals, Example 16.21 (p.195–196); 21.1절 Extension Fields, Theorem 21.10 의 증명 (p.263); 21.2절 Splitting Fields, Lemma 21.32 의 증명 (p.269); 23.1절 Field Automorphisms, Proposition 23.5 의 증명 (p.294); 17.3절 Irreducible Polynomials, Theorem 17.14 의 증명 (p.216); 17.5절 Exercises, 연습문제 5 (p.220), 16 (p.221)과 그 힌트 (p.330); 17.3절 Example 17.12 (p.215); 17.6절 Additional Exercises, 연습문제 2 (p.222)"
    checked: original
    note: "출처 Theorem 17.5(p.212)는 단위원을 갖는 가환환 R 과 α ∈ R 에 대하여 φ_α(p(x)) = p(α) 가 환 준동형 R[x] → R 이라는 것이고, 덧셈의 보존은 'It is easy to show' 로, 곱셈의 보존은 Σ 의 곱을 펼친 한 줄의 계산으로 보인다. 이 항목의 (2)가 그것이고, 곱의 보존은 유한 합의 쪼개기와 삼각형 이중 합으로 증명한다. 근의 정의는 출처 p.214 의 'α is a zero or root of p(x) if p(x) is in the kernel of the evaluation homomorphism φ_α' 와 같고, 이 항목은 '근' 이라는 이름 하나만 쓴다. 'evaluation homomorphism' 이라는 이름은 출처 Example 16.21(p.195–196)이 연속함수의 환 C[a, b] 에서 f 에 f(α) 를 대응시키는 사상에도 쓴다. 출처는 Theorem 21.10 의 증명(p.263) 등에서 확대체 E 의 원소 α 에 대한 evaluation homomorphism φ_α : F[x] → E 를 쓴다. 이 항목은 그런 대입을 (6)의 계수 사상을 거친 대입으로 정한다(φ 는 포함 함수). 계수 사상((3))은 출처 Lemma 21.32 의 증명(p.269)이 체의 동형사상 φ 를 'φ(a_0 + a_1 x + ⋯ + a_n x^n) = φ(a_0) + φ(a_1)x + ⋯ + φ(a_n)x^n' 으로 E[x] → F[x] 에 연장하고 'constant polynomials get mapped to constant polynomials' 라고 적는 것과 같은 사상이고, 출처 연습문제 16(p.221, R ≅ S 이면 R[x] ≅ S[x])의 힌트(p.330)가 정의하는 사상과도 같다. (3)의 (ii)의 마지막 문장이 그 연습문제의 내용이다. (5)의 근을 근으로 옮기는 계산은 출처 Proposition 23.5 의 증명(p.294)이 F 위에서 항등인 자기동형 σ 에 대하여 σ(f(α)) = a_0 + a_1σ(α) + ⋯ + a_nσ(α)^n 으로 하는 계산과 같은 발상이다. (10)의 법 m 으로 줄인 다항식은 출처 Theorem 17.14 의 증명(p.216)이 'the polynomials in Z_p[x] obtained by reducing the coefficients … modulo p' 라고 쓰는 것과 같다. 예시 '정수에서의 값과 법 3 으로 줄인 다항식의 근' 의 근 찾기는 출처 Example 17.12(p.215, Z_3 의 세 원소를 넣어 x³ + x² + 2 의 근이 없음을 본다)와 연습문제 5(p.220, Z_12[x], Z_5[x], Z_7[x], Z_2[x] 의 다항식의 근을 모두 구하라)와 같은 종류의 계산이다. (9)의 X 를 X + c 로 옮기기는 출처 17.6절 연습문제 2(p.222)가 x³ + bx² + cx + d = 0 에 x = y − b/3 을 넣는 치환과 같은 발상이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(ℤ₉·ℤ₂ 예의 계산 대입, 출처 주장 검색 — 틀린 '덧붙였다' 1건을 찾아 단원 전체를 다시 확인, 4건 고침). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$R$, $S$, $T$가 단위원을 갖는 가환환이라 하자. 다항식환 $R[X]$, 계수 $\operatorname{coef}_n$, 상수 다항식 $\kappa(c)$와 읽는 약속, 부정원 $X$, 나누어떨어짐 $g \mid f$는 [[polynomial-ring|다항식환]]의 것이고, 차수 $\deg$와 최고차계수는 [[degree-of-a-polynomial|다항식의 차수]]의 것이다. 환 준동형, 환 동형사상, 핵은 [[ring-homomorphism|환 준동형]]의 뜻이고, "$1$을 $1$로 보내는 환 준동형 $\varphi : R \to S$"는 $\varphi(1_R) = 1_S$인 환 준동형이다. 거듭제곱 $a^k$는 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 것이다.

**대입과 근.** $f \in R[X]$이고 $r \in R$이라 하자. $N$이 $0$ 이상인 정수이고 $n > N$인 모든 $n$에서 $\operatorname{coef}_n(f) = 0$일 때
$$
f(r) = \sum_{k=0}^{N} \operatorname{coef}_k(f)\, r^k
$$
로 정하고, $f$에 $r$을 **대입한 값**(value of $f$ at $r$)이라 한다. 아래 (1)에 의해 이 값은 $N$에 상관없다. $f(r) = 0$일 때 $r$을 $f$의 **근**(root)이라 한다.

**계수 사상.** $\varphi : R \to S$가 $1$을 $1$로 보내는 환 준동형이라 하자. $f \in R[X]$에 대하여 $f^{\varphi}$는 $0$ 이상인 모든 정수 $n$에서 $\operatorname{coef}_n(f^{\varphi}) = \varphi(\operatorname{coef}_n(f))$인 $S[X]$의 원소이고, $f$의 계수를 $\varphi$로 **옮긴 다항식**이라 한다. $f$에 $f^{\varphi}$를 대응시키는 함수 $R[X] \to S[X]$를 $\varphi$의 **계수 사상**(coefficient map)이라 한다.

다음이 성립한다. 아래에서 $f$, $g$는 $R[X]$의 원소이고, $r \in R$, $s \in S$, $c \in R$이며, $\varphi : R \to S$와 $\psi : S \to T$는 $1$을 $1$로 보내는 환 준동형이다.

1. (대입한 값) $f(r)$은 $N$에 상관없다. $0 \le k \le N$에서 정해진 $a_k \in R$에 대하여 $f = \sum_{k=0}^{N} a_k X^k$이면 $f(r) = \sum_{k=0}^{N} a_k r^k$이다. 특히 상수 다항식 $c$에 대하여 $c(r) = c$이고, $X(r) = r$, $X^k(r) = r^k$, $(X - c)(r) = r - c$이다.
2. (대입 준동형) $f$에 $f(r)$을 대응시키는 함수 $R[X] \to R$는 $1$을 $1$로 보내는 환 준동형이다. 이것을 $r$에서의 **대입 준동형**(evaluation homomorphism)이라 한다. 곧 $(f + g)(r) = f(r) + g(r)$, $(fg)(r) = f(r)g(r)$, $1(r) = 1$이고, 따라서 $(-f)(r) = -f(r)$, $(f - g)(r) = f(r) - g(r)$이며, 유한 합, 유한 곱, 거듭제곱에 대하여 $\bigl(\sum_{i=m}^{l} g_i\bigr)(r) = \sum_{i=m}^{l} g_i(r)$, $(g_1 \cdots g_l)(r) = g_1(r) \cdots g_l(r)$, $(f^k)(r) = f(r)^k$이다($g_i \in R[X]$, $k \ge 0$).
3. (계수 사상) $\varphi$의 계수 사상은 $1$을 $1$로 보내는 환 준동형 $R[X] \to S[X]$이다. 상수 다항식 $c$를 상수 다항식 $\varphi(c)$로, $X$를 $X$로 보내고, $f = \sum_{k=0}^{N} a_k X^k$이면 $f^{\varphi} = \sum_{k=0}^{N} \varphi(a_k) X^k$이다.
   - (i) (차수) $f \ne 0$이고 $f$의 최고차계수 $a$가 $\varphi(a) \ne 0$을 만족하면 $f^{\varphi} \ne 0$, $\deg f^{\varphi} = \deg f$이고 $f^{\varphi}$의 최고차계수는 $\varphi(a)$이다. 특히 $f$가 모닉이면 $f^{\varphi}$도 같은 차수의 모닉이고, $\varphi$가 단사이면 영이 아닌 모든 $f$에서 그렇다.
   - (ii) (단사, 전사, 동형) $\varphi$가 단사이면 계수 사상은 단사이고, $\varphi : R \to S$가 전사이면 계수 사상 $R[X] \to S[X]$는 전사이다. $\varphi$가 환 동형사상이면 계수 사상은 환 동형사상이고 그 역함수는 $\varphi^{-1}$의 계수 사상이다. 따라서 $R \cong S$이면 $R[X] \cong S[X]$이다.
   - (iii) (나누어떨어짐) $R[X]$에서 $g \mid f$이면 $S[X]$에서 $g^{\varphi} \mid f^{\varphi}$이다.
4. (합성과 항등) $(f^{\varphi})^{\psi} = f^{\psi \circ \varphi}$이고, 항등함수 $i_R$에 대하여 $f^{i_R} = f$이다. 여기서 $\psi \circ \varphi : R \to T$는 $1$을 $1$로 보내는 환 준동형이다.
5. (대입과 계수 사상의 맞물림) $\varphi(f(r)) = f^{\varphi}(\varphi(r))$이다. 따라서 $r$이 $f$의 근이면 $\varphi(r)$은 $f^{\varphi}$의 근이고, $\varphi$가 단사이면 그 역도 성립한다.
6. (계수 사상을 거친 대입) $f$에 $f^{\varphi}(s)$를 대응시키는 함수 $R[X] \to S$는 $1$을 $1$로 보내는 환 준동형이고, 상수 다항식 $c$를 $\varphi(c)$로, $X$를 $s$로 보낸다. $n > N$에서 $\operatorname{coef}_n(f) = 0$이면 $f^{\varphi}(s) = \sum_{k=0}^{N} \varphi(\operatorname{coef}_k(f))\, s^k$이다.
7. (상수와 $X$의 상으로 정해진다) $\theta : R[X] \to S$가 $1$을 $1$로 보내는 환 준동형이면, [[function-composition|합성]] $\theta \circ \kappa : R \to S$는 $1$을 $1$로 보내는 환 준동형이고 모든 $f$에서 $\theta(f) = f^{\theta \circ \kappa}(\theta(X))$이다. 따라서 $1$을 $1$로 보내는 두 환 준동형 $\theta, \theta' : R[X] \to S$가 모든 상수 다항식과 $X$에서 같은 값을 가지면 $\theta = \theta'$이다.
8. (부분환) $R_0$이 $1 \in R_0$인 $R$의 [[subring|부분환]]이고 $f \in R_0[X]$라 하자. $r \in R_0$이면 $f(r)$은 $f$를 $R_0[X]$의 원소로 보고 계산한 것과 $R[X]$의 원소로 보고 계산한 것이 같다. 포함 함수 $\iota : R_0 \to R$에 대하여 $f^{\iota} = f$이다.
9. ($X$를 $X + c$로 옮기기) (6)을 $S = R[X]$, $\varphi = \kappa$, $s = X + c$에 쓴 환 준동형 $R[X] \to R[X]$를 $\tau_c$로 쓰고, $\tau_c(f)$를 $f(X + c)$로도 쓴다. 곧 $n > N$에서 $\operatorname{coef}_n(f) = 0$이면 $\tau_c(f) = \sum_{k=0}^{N} \operatorname{coef}_k(f) (X + c)^k$이고, $\tau_c$는 상수 다항식을 그대로 두고 $X$를 $X + c$로 보낸다.
   - (i) $\tau_{-c} \circ \tau_c$와 $\tau_c \circ \tau_{-c}$는 항등함수 $i_{R[X]}$이다. 따라서 $\tau_c : R[X] \to R[X]$는 환 동형사상이다.
   - (ii) $f \ne 0$이면 $\tau_c(f) \ne 0$이고, $\tau_c(f)$와 $f$는 차수와 최고차계수가 같다.
   - (iii) 모든 $r \in R$에서 $\tau_c(f)(r) = f(r + c)$이다.
   - (iv) $R[X]$에서 $g \mid f$인 것은 정확히 $\tau_c(g) \mid \tau_c(f)$일 때이다.
10. (법 $m$으로 줄이기) $m \ge 2$인 정수 $m$에 대하여, 정수 $k$에 [[integers-modulo-n|법 m의 정수]]의 $[k]$를 대응시키는 함수 $\rho : \mathbb{Z} \to \mathbb{Z}_m$은 $1$을 $1$로 보내는 환 준동형이다([[ring-examples|환의 예]]의 환). 그 계수 사상 $\mathbb{Z}[X] \to \mathbb{Z}_m[X]$는 전사인 환 준동형이고, $f \in \mathbb{Z}[X]$에 대하여 $f^{\rho} = 0$인 것은 정확히 $m$이 $f$의 모든 계수를 나눌 때이다. $f^{\rho}$를 $f$를 **법 $m$으로 줄인 다항식**이라 한다. (5)에 의해 정수 $r$에 대하여 $[f(r)] = f^{\rho}([r])$이다.
:::

:::english
Let $R$, $S$, $T$ be commutative rings with unity. The polynomial ring $R[X]$, the coefficients $\operatorname{coef}_n$, the constant polynomials $\kappa(c)$ with the reading convention, the indeterminate $X$ and divisibility $g \mid f$ are those of the polynomial ring, and the degree $\deg$ and the leading coefficient are those of the degree of a polynomial. Ring homomorphisms, ring isomorphisms and kernels are in the sense of ring homomorphisms, and "a ring homomorphism $\varphi : R \to S$ sending $1$ to $1$" means a ring homomorphism with $\varphi(1_R) = 1_S$. The power $a^k$ is that of finite products and powers in a commutative ring.

**Evaluation and roots.** Let $f \in R[X]$ and $r \in R$. When $N$ is a nonnegative integer with $\operatorname{coef}_n(f) = 0$ for all $n > N$, define
$$
f(r) = \sum_{k=0}^{N} \operatorname{coef}_k(f)\, r^k,
$$
the **value of $f$ at $r$**. By (1) below this value does not depend on $N$. If $f(r) = 0$, then $r$ is called a **root** of $f$.

**Coefficient maps.** Let $\varphi : R \to S$ be a ring homomorphism sending $1$ to $1$. For $f \in R[X]$, $f^{\varphi}$ is the element of $S[X]$ with $\operatorname{coef}_n(f^{\varphi}) = \varphi(\operatorname{coef}_n(f))$ for every nonnegative integer $n$; it is the polynomial obtained by carrying the coefficients of $f$ over by $\varphi$. The function $R[X] \to S[X]$ sending $f$ to $f^{\varphi}$ is called the **coefficient map** of $\varphi$.

The following hold. Below, $f$, $g$ are elements of $R[X]$, $r \in R$, $s \in S$, $c \in R$, and $\varphi : R \to S$ and $\psi : S \to T$ are ring homomorphisms sending $1$ to $1$.

1. (Values) $f(r)$ does not depend on $N$. If $a_k \in R$ are given for $0 \le k \le N$ and $f = \sum_{k=0}^{N} a_k X^k$, then $f(r) = \sum_{k=0}^{N} a_k r^k$. In particular, for the constant polynomial $c$, $c(r) = c$; also $X(r) = r$, $X^k(r) = r^k$ and $(X - c)(r) = r - c$.
2. (Evaluation homomorphism) The function $R[X] \to R$ sending $f$ to $f(r)$ is a ring homomorphism sending $1$ to $1$, called the **evaluation homomorphism** at $r$. That is, $(f + g)(r) = f(r) + g(r)$, $(fg)(r) = f(r)g(r)$ and $1(r) = 1$; hence $(-f)(r) = -f(r)$, $(f - g)(r) = f(r) - g(r)$, and for finite sums, finite products and powers, $\bigl(\sum_{i=m}^{l} g_i\bigr)(r) = \sum_{i=m}^{l} g_i(r)$, $(g_1 \cdots g_l)(r) = g_1(r) \cdots g_l(r)$ and $(f^k)(r) = f(r)^k$ ($g_i \in R[X]$, $k \ge 0$).
3. (Coefficient maps) The coefficient map of $\varphi$ is a ring homomorphism $R[X] \to S[X]$ sending $1$ to $1$. It sends the constant polynomial $c$ to the constant polynomial $\varphi(c)$ and $X$ to $X$, and if $f = \sum_{k=0}^{N} a_k X^k$, then $f^{\varphi} = \sum_{k=0}^{N} \varphi(a_k) X^k$.
   - (i) (Degree) If $f \ne 0$ and the leading coefficient $a$ of $f$ satisfies $\varphi(a) \ne 0$, then $f^{\varphi} \ne 0$, $\deg f^{\varphi} = \deg f$, and the leading coefficient of $f^{\varphi}$ is $\varphi(a)$. In particular, if $f$ is monic then $f^{\varphi}$ is monic of the same degree, and if $\varphi$ is injective this holds for every nonzero $f$.
   - (ii) (Injective, surjective, isomorphism) If $\varphi$ is injective, the coefficient map is injective; if $\varphi : R \to S$ is surjective, the coefficient map $R[X] \to S[X]$ is surjective. If $\varphi$ is a ring isomorphism, the coefficient map is a ring isomorphism whose inverse is the coefficient map of $\varphi^{-1}$. Hence $R \cong S$ implies $R[X] \cong S[X]$.
   - (iii) (Divisibility) If $g \mid f$ in $R[X]$, then $g^{\varphi} \mid f^{\varphi}$ in $S[X]$.
4. (Composition and identity) $(f^{\varphi})^{\psi} = f^{\psi \circ \varphi}$, and for the identity function $i_R$, $f^{i_R} = f$. Here $\psi \circ \varphi : R \to T$ is a ring homomorphism sending $1$ to $1$.
5. (Evaluation and coefficient maps commute) $\varphi(f(r)) = f^{\varphi}(\varphi(r))$. Hence if $r$ is a root of $f$, then $\varphi(r)$ is a root of $f^{\varphi}$, and the converse holds if $\varphi$ is injective.
6. (Evaluation through a coefficient map) The function $R[X] \to S$ sending $f$ to $f^{\varphi}(s)$ is a ring homomorphism sending $1$ to $1$; it sends the constant polynomial $c$ to $\varphi(c)$ and $X$ to $s$. If $\operatorname{coef}_n(f) = 0$ for $n > N$, then $f^{\varphi}(s) = \sum_{k=0}^{N} \varphi(\operatorname{coef}_k(f))\, s^k$.
7. (Determined by constants and $X$) If $\theta : R[X] \to S$ is a ring homomorphism sending $1$ to $1$, then the composite $\theta \circ \kappa : R \to S$ is a ring homomorphism sending $1$ to $1$, and $\theta(f) = f^{\theta \circ \kappa}(\theta(X))$ for every $f$. Hence two ring homomorphisms $\theta, \theta' : R[X] \to S$ sending $1$ to $1$ that agree on all constant polynomials and on $X$ are equal.
8. (Subrings) Let $R_0$ be a subring of $R$ with $1 \in R_0$ and $f \in R_0[X]$. If $r \in R_0$, then $f(r)$ is the same whether $f$ is regarded as an element of $R_0[X]$ or of $R[X]$. For the inclusion $\iota : R_0 \to R$, $f^{\iota} = f$.
9. (Shifting $X$ to $X + c$) Write $\tau_c$ for the ring homomorphism $R[X] \to R[X]$ obtained from (6) with $S = R[X]$, $\varphi = \kappa$ and $s = X + c$, and also write $\tau_c(f)$ as $f(X + c)$. That is, if $\operatorname{coef}_n(f) = 0$ for $n > N$, then $\tau_c(f) = \sum_{k=0}^{N} \operatorname{coef}_k(f) (X + c)^k$; $\tau_c$ fixes the constant polynomials and sends $X$ to $X + c$.
   - (i) $\tau_{-c} \circ \tau_c$ and $\tau_c \circ \tau_{-c}$ are the identity function $i_{R[X]}$. Hence $\tau_c : R[X] \to R[X]$ is a ring isomorphism.
   - (ii) If $f \ne 0$, then $\tau_c(f) \ne 0$, and $\tau_c(f)$ and $f$ have the same degree and the same leading coefficient.
   - (iii) $\tau_c(f)(r) = f(r + c)$ for every $r \in R$.
   - (iv) $g \mid f$ in $R[X]$ if and only if $\tau_c(g) \mid \tau_c(f)$.
10. (Reduction modulo $m$) For an integer $m \ge 2$, the function $\rho : \mathbb{Z} \to \mathbb{Z}_m$ sending an integer $k$ to $[k]$ of the integers modulo $m$ is a ring homomorphism sending $1$ to $1$ (rings as in the examples of rings). Its coefficient map $\mathbb{Z}[X] \to \mathbb{Z}_m[X]$ is a surjective ring homomorphism, and for $f \in \mathbb{Z}[X]$, $f^{\rho} = 0$ if and only if $m$ divides every coefficient of $f$. $f^{\rho}$ is called the **reduction of $f$ modulo $m$**. By (5), $[f(r)] = f^{\rho}([r])$ for every integer $r$.
:::

## 직관

다항식은 계수의 열이므로, "$X$ 자리에 $r$을 넣는다"는 것은 정의해야 하는 일입니다. 이 항목은 그것을 $\sum_k \operatorname{coef}_k(f)\, r^k$로 정하고, 이렇게 넣는 일이 합과 곱을 그대로 옮긴다는 것((2))을 보입니다. 다항식을 먼저 곱한 뒤 넣으나, 각각 넣은 뒤 곱하나 결과가 같다는 뜻입니다. 대입은 다항식에서 값을 읽어 내는 일일 뿐이고, 다항식을 그 값들로 이루어진 함수로 바꾸는 것은 아닙니다. 계수가 다른 두 다항식이 모든 원소에서 같은 값을 가질 수 있기 때문입니다.

계수 사상은 다항식의 "계수를 다른 환으로 옮겨 적는 것"입니다. $\mathbb{Z}$의 계수를 $\mathbb{Z}_m$으로 옮기면 법 $m$으로 줄인 다항식이 되고((10)), 체 사이의 동형사상으로 옮기면 같은 모양의 다항식이 다른 체 위에 생깁니다. (5)는 "먼저 넣고 옮기나, 먼저 옮기고 넣으나 같다"는 것이고, 그래서 근은 근으로 옮겨집니다.

(7)은 다항식환에서 나가는 환 준동형 가운데 $1$을 $1$로 보내는 것이 "상수를 어디로 보내는가"와 "$X$를 어디로 보내는가"로 다 정해진다는 것입니다. 모든 다항식은 상수와 $X$의 거듭제곱을 곱하고 더해 만들어지기 때문입니다. (9)의 $\tau_c$가 자기동형이라는 것도 이것으로 보입니다. $\tau_{-c} \circ \tau_c$는 상수와 $X$를 그대로 두므로 항등함수와 같습니다.

## 증명

:::idea
(2)의 곱의 보존은 두 합의 곱을 이중 합으로 펼친 뒤, 지수의 합이 같은 항끼리 모으는 것이다. 계수 사상의 성질은 계수마다 $\varphi$가 합과 곱을 보존한다는 것에서 나온다. (7)은 다항식을 상수와 $X$의 거듭제곱의 합으로 쓴 꼴에 $\theta$를 쓴 것이다.
:::

:::hint
$f(r)g(r) = \sum_{j=0}^{N} \sum_{k=0}^{N} a_j b_k r^{j+k}$에서 $j + k > N$인 항은 $0$입니다. 남은 항을 $j + k = l$로 모으면 $\operatorname{coef}_l(fg)$가 나옵니다.
:::

:::hint
(9)의 (i)은 $\tau_{-c} \circ \tau_c$가 $X$를 어디로 보내는지 보고 (7)을 씁니다.
:::

:::proof
**쓰는 사실.** 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7)을 쓴다. "다항식환의 (n)"은 [[polynomial-ring|다항식환]]의 (n), "차수의 (n)"은 [[degree-of-a-polynomial|다항식의 차수]]의 (n), "합의 (n)"은 [[finite-sums-in-a-ring|환의 유한 합]]의 (n), "재배열의 (n)"은 [[rearranging-finite-sums-in-a-ring|유한 합의 재배열과 이중 합]]의 (n), "곱의 (n)"은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (n), "준동형의 (n)"은 [[ring-homomorphism|환 준동형]]의 (n)이다. 환 준동형은 덧셈군의 군 준동형이므로(준동형의 (1)) 유한 합을 보존하고(합의 (7)), $1$을 $1$로 보내면 유한 곱과 거듭제곱을 보존한다(곱의 (9)). 아래에서 "$N$이 $f$에 맞는다"는 "$n > N$이면 $\operatorname{coef}_n(f) = 0$"을 줄인 말이다. $N$이 $f$에 맞고 $N \le N'$이면 $N'$도 $f$에 맞는다((Z6)). 차수의 (1)에 의해 $N$이 $f$에 맞는 것은 정확히 "$f = 0$이거나 $\deg f \le N$"일 때이다. $a_k = \operatorname{coef}_k(f)$, $b_k = \operatorname{coef}_k(g)$로 쓴다.

**1의 증명.** $N \le N'$이 둘 다 $f$에 맞으면 합의 (4)에 의해 $\sum_{k=0}^{N'} a_k r^k = \sum_{k=0}^{N} a_k r^k + \sum_{k=N+1}^{N'} a_k r^k$이고, 뒤의 합의 항은 $k > N$이므로 $0 r^k = 0$이어서([[ring-basic-properties|환의 기본 성질]]의 (1)) 합의 (3)과 (6)의 (iv)에 의해 $0$이다. $N_1$, $N_2$가 둘 다 $f$에 맞으면 둘 다 $N_1 + N_2$ 이하이고((Z7)) 이것도 $f$에 맞으므로 두 값은 $N_1 + N_2$로 계산한 값과 같다. $f = \sum_{k=0}^{N} a_k X^k$이면 다항식환의 (5)의 (i)에 의해 $N$이 $f$에 맞고 $k \le N$에서 계수가 $a_k$이므로 합의 (3)에 의해 $f(r) = \sum_{k=0}^{N} a_k r^k$이다. 상수 다항식 $c$는 $N = 0$으로 $c\, r^0 = c$(곱의 (6)의 (i)), $X^k$는 다항식환의 (4)의 (iii)과 합의 (6)의 (v)로 $r^k$이고, $X - c = (-c)X^0 + 1 X^1$이므로 $(-c) + r = r - c$이다.

**2의 증명.** $N_1$이 $f$에, $N_2$가 $g$에 맞으면 $N = N_1 + N_2$는 $f$, $g$, $f + g$, $fg$에 모두 맞는다(차수의 (3), (4)의 마지막 문장과 (1)). *덧셈.* 분배법칙과 합의 (6)의 (i)에 의해 $(f + g)(r) = \sum_{k=0}^{N} (a_k + b_k) r^k = f(r) + g(r)$이다. *곱셈.* 재배열의 (6), 곱셈의 교환법칙과 결합법칙, 곱의 (6)의 (ii), 합의 (3)에 의해
$$
\begin{aligned}
f(r)g(r) &= \sum_{j=0}^{N} \sum_{k=0}^{N} a_j r^j b_k r^k \\
&= \sum_{j=0}^{N} \sum_{k=0}^{N} a_j b_k r^{j+k}
\end{aligned}
$$
이다. $0 \le j \le N$이면 $-1 \le N - j \le N$이므로 합의 (4)로 안쪽 합을 $k \le N - j$와 $k \ge N - j + 1$로 쪼갤 수 있다. 뒤쪽의 항은 $j + k > N = N_1 + N_2$이므로 $j > N_1$이거나 $k > N_2$이고, 따라서 $a_j = 0$이거나 $b_k = 0$이어서 $0$이다. 그래서 뒤쪽의 합은 $0$이다(합의 (3), (6)의 (iv)). $0 \le j$, $0 \le k$, $j + k \le N$에서 $u_{j,k} = a_j b_k r^{j+k}$로 두면 재배열의 (5)의 (ii)와 합의 (9)에 의해
$$
\begin{aligned}
f(r)g(r) &= \sum_{j=0}^{N} \sum_{k=0}^{N-j} u_{j,k} \\
&= \sum_{l=0}^{N} \sum_{j=0}^{l} u_{j,\,l-j} \\
&= \sum_{l=0}^{N} \Bigl(\sum_{j=0}^{l} a_j b_{l-j}\Bigr) r^l \\
&= \sum_{l=0}^{N} \operatorname{coef}_l(fg)\, r^l
\end{aligned}
$$
이고 이것은 $(fg)(r)$이다. *단위원.* (1)에 의해 $1(r) = 1$이다. 나머지는 준동형의 (1), 합의 (7), 곱의 (9)이다.

**3의 증명.** $\varphi(0) = 0$(준동형의 (1))이므로 $f$에 맞는 $N$은 $f^{\varphi}$에도 맞고, $f^{\varphi} \in S[X]$이다(값으로 정한 함수). $\operatorname{coef}_n((f + g)^{\varphi}) = \varphi(a_n + b_n) = \varphi(a_n) + \varphi(b_n)$이고, 합의 (7)에 의해
$$
\begin{aligned}
\operatorname{coef}_n((fg)^{\varphi}) &= \varphi\Bigl(\sum_{k=0}^{n} a_k b_{n-k}\Bigr) \\
&= \sum_{k=0}^{n} \varphi(a_k)\varphi(b_{n-k}) \\
&= \operatorname{coef}_n(f^{\varphi} g^{\varphi})
\end{aligned}
$$
이다. 상수 다항식 $c$의 계수를 옮기면 $\operatorname{coef}_0 = \varphi(c)$이고 나머지는 $\varphi(0) = 0$이므로 상수 다항식 $\varphi(c)$이고, 특히 $1$은 $\varphi(1) = 1$로 간다. $X$의 계수를 옮기면 $\varphi(1) = 1$과 $0$들이므로 $X$이다. 마지막 식은 계수 사상이 $1$을 $1$로 보내는 환 준동형이므로 합의 (7)과 곱의 (9)에서 나온다.

(i) $n = \deg f$이면 $k > n$에서 $\operatorname{coef}_k(f^{\varphi}) = \varphi(0) = 0$이고 $\operatorname{coef}_n(f^{\varphi}) = \varphi(a) \ne 0$이므로 차수의 (1)에서 나온다. 모닉이면 $\varphi(1) = 1 \ne 0$이다($S$는 단위원을 갖는 환). $\varphi$가 단사이면 준동형의 (2)에 의해 $a \ne 0$에서 $\varphi(a) \ne 0$이다.

(ii) $\varphi$가 단사이고 $f^{\varphi} = 0$이면 모든 $n$에서 $\varphi(a_n) = 0$이므로 $a_n = 0$이고 $f = 0$이다. 준동형의 (2)에 의해 계수 사상은 단사이다. $\varphi$가 전사라 하자. $0$ 이상인 정수 $N$에 대한 귀납법으로 "$N$이 맞는 모든 $h \in S[X]$는 어떤 $f$의 $f^{\varphi}$이다"를 보인다. $N = 0$이면 $h$는 상수 다항식 $d$이고(다항식환의 (3)의 (ii)) $d = \varphi(a)$인 $a \in R$이 있으므로 $h$는 상수 다항식 $a$의 계수를 옮긴 것이다. $N$에서 성립하고 $N + 1$이 $h$에 맞는다고 하자. $d = \operatorname{coef}_{N+1}(h) = \varphi(a)$인 $a \in R$을 잡는다. 다항식환의 (2), (3)의 (iii), (4)의 (iii)에 의해 $h - d X^{N+1}$은 $N + 1$차 계수가 $d - d = 0$이고 그보다 높은 계수도 $0$이므로 $N$이 맞는다. 귀납 가정에 의해 $h - d X^{N+1} = f_1^{\varphi}$인 $f_1$이 있고, 앞 문단에 의해 $(f_1 + a X^{N+1})^{\varphi} = f_1^{\varphi} + \varphi(a) X^{N+1} = h$이다. $\varphi$가 환 동형사상이면 단사이고 전사이므로 계수 사상은 전단사인 환 준동형, 곧 환 동형사상이다. 준동형의 (6)의 (iii)에 의해 $\varphi^{-1}$은 $1$을 $1$로 보내는 환 동형사상이고, (4)에 의해 $(f^{\varphi})^{\varphi^{-1}} = f^{i_R} = f$이므로 $\varphi^{-1}$의 계수 사상이 역함수이다([[inverse-function|역함수]]).

(iii) $f = gq$이면 계수 사상이 환 준동형이므로 $f^{\varphi} = g^{\varphi} q^{\varphi}$이다.

**4의 증명.** $\operatorname{coef}_n((f^{\varphi})^{\psi}) = \psi(\varphi(a_n)) = (\psi \circ \varphi)(a_n)$이다. 준동형의 (6)의 (i)에 의해 $\psi \circ \varphi$는 환 준동형이고 $\psi(\varphi(1)) = \psi(1) = 1$이다. $f^{i_R}$은 $f$와 계수가 모두 같다.

**5의 증명.** $N$이 $f$에 맞으면 $f^{\varphi}$에도 맞으므로, 환 준동형이 합과 곱과 거듭제곱을 보존한다는 것에 의해 $\varphi(f(r)) = \sum_{k=0}^{N} \varphi(a_k)\varphi(r)^k = f^{\varphi}(\varphi(r))$이다. $f(r) = 0$이면 $\varphi(f(r)) = 0$이다. $\varphi$가 단사이고 $f^{\varphi}(\varphi(r)) = 0$이면 $\varphi(f(r)) = 0 = \varphi(0)$이므로 $f(r) = 0$이다.

**6의 증명.** 이 함수는 (3)의 계수 사상과 (2)를 $S$에 쓴 $s$에서의 대입 준동형의 합성이므로, 준동형의 (6)의 (i)에 의해 $1$을 $1$로 보내는 환 준동형이다. (3)과 (1)에 의해 상수 다항식 $c$는 $\varphi(c)$로, $X$는 $X(s) = s$로 간다. 식은 $N$이 $f^{\varphi}$에도 맞으므로 대입의 정의이다.

**7의 증명.** $\kappa$와 $\theta$는 환 준동형이므로 합성도 환 준동형이고(준동형의 (6)의 (i)), $\theta(\kappa(1)) = \theta(1) = 1$이다. $N$이 $f$에 맞으면 다항식환의 (5)의 (ii)에 의해 $f = \sum_{k=0}^{N} \kappa(a_k) X^k$이므로, $\theta$가 합과 곱과 거듭제곱을 보존한다는 것과 (6)의 식에 의해 $\theta(f) = \sum_{k=0}^{N} \theta(\kappa(a_k))\, \theta(X)^k = f^{\theta \circ \kappa}(\theta(X))$이다. $\theta$와 $\theta'$가 상수 다항식과 $X$에서 같으면 $\theta \circ \kappa = \theta' \circ \kappa$이고 $\theta(X) = \theta'(X)$이므로 모든 $f$에서 $\theta(f) = \theta'(f)$이다.

**8의 증명.** 다항식환의 (7)의 (i)에 의해 계수가 같으므로 같은 $N$이 맞는다. $\sum_{k=0}^{N} a_k r^k$의 거듭제곱과 곱은 $R_0$에서 계산한 것과 $R$에서 계산한 것이 같고(포함 함수는 $1$을 $1$로 보내는 환 준동형이므로 준동형의 (7)의 (ii)와 곱의 (9), [[subring|부분환]]의 (1)), 합은 합의 (8)에 의해 같다. $\operatorname{coef}_n(f^{\iota}) = \iota(a_n) = a_n$이므로 $f^{\iota}$와 $f$는 계수가 모두 같고, 다항식환의 (7)의 (i)에 의해 같은 $R[X]$의 원소이다.

**9의 증명.** $\kappa$는 $1$을 $1$로 보내는 환 준동형이므로(다항식환의 (3)의 (i)) (6)을 쓸 수 있고, $\tau_c$는 상수 다항식 $a$를 $\kappa(a)$로, $X$를 $X + c$로 보낸다. 식은 (6)의 식이다.

(i) $\tau_{-c} \circ \tau_c$는 $1$을 $1$로 보내는 환 준동형이고(준동형의 (6)의 (i)), 상수 다항식을 그대로 두며, $X$를 $\tau_{-c}(X + c) = (X - c) + c = X$로 보낸다. 항등함수도 그렇다(준동형의 (6)의 (ii)). (7)에 의해 둘은 같다. $c$와 $-c$를 바꾸면 $\tau_c \circ \tau_{-c} = i_{R[X]}$이다. 따라서 $\tau_c$는 역함수 $\tau_{-c}$를 갖고 전단사이다([[inverse-function|역함수]]).

(ii) $n = \deg f$, $a = a_n$이라 하자. 먼저 $(X + c)^k$는 차수가 $k$인 모닉 다항식이다. $k = 0$이면 $1$이고(차수의 (2)), $k$에서 성립하면 곱의 (6)의 (i)에 의해 $(X + c)^{k+1} = (X + c)^k (X + c)$이고, 차수의 (2)와 (5)에 의해 이것은 차수가 $k + 1$인 모닉이다(수학적 귀납법). 따라서 $j > k$이면 $\operatorname{coef}_j(a_k (X + c)^k) = a_k \operatorname{coef}_j((X + c)^k) = 0$이고(다항식환의 (3)의 (iii), 차수의 (1)), $\operatorname{coef}_n(a (X + c)^n) = a \cdot 1 = a$이다. 다항식환의 (2)에 의해 $\tau_c(f) = \sum_{k=0}^{n} a_k (X + c)^k$의 $j$차 계수는 각 항의 $j$차 계수의 합이다. $j > n$이면 모든 항의 $j$차 계수가 $0$이고, $j = n$이면 $k < n$인 항의 $n$차 계수가 $0$이므로 합의 (6)의 (v)에 의해 $a$이다. $a \ne 0$이므로 차수의 (1)에 의해 결론이 나온다.

(iii) (2)의 $r$에서의 대입 준동형과 $\tau_c$의 합성, 그리고 $r + c$에서의 대입 준동형은 둘 다 $R[X] \to R$인 $1$을 $1$로 보내는 환 준동형이고, 상수 다항식 $a$를 $a$로 보내며((1)), $X$를 각각 $(X + c)(r) = r + c$와 $r + c$로 보낸다. (7)에 의해 둘은 같다.

(iv) $f = gq$이면 $\tau_c(f) = \tau_c(g)\tau_c(q)$이다. 거꾸로 $\tau_c(f) = \tau_c(g) q'$이면 (i)에 의해 $f = \tau_{-c}(\tau_c(f)) = g\, \tau_{-c}(q')$이다.

**10의 증명.** [[ring-examples|환의 예]]의 (3)에 의해 $m \ge 2$이면 $\mathbb{Z}_m$은 단위원 $[1]$을 갖는 가환환이고, 준동형의 (7)의 (i)에 의해 $\rho$는 전사인 환 준동형이며 $\rho(1) = [1]$이다. (3)의 (ii)에 의해 계수 사상은 전사이다. $f^{\rho} = 0$인 것은 정확히 모든 $n$에서 $[\operatorname{coef}_n(f)] = [0]$일 때이고, [[equivalence-classes-equal-iff-related|동치류가 같을 조건]]과 [[congruence-modulo-n|법 n 합동]]에 의해 $[a] = [0]$인 것은 정확히 $m \mid a - 0$, 곧 $m \mid a$일 때이다. 마지막 등식은 (5)이다.
:::

## 예시와 반례

:::example[정수에서의 값과 법 3 으로 줄인 다항식의 근]
$\mathbb{Z}[X]$의 $f = X^3 - 2X + 5$에 $2$를 대입하면 (1)에 의해 $f(2) = 8 - 4 + 5 = 9$입니다. $f$를 법 $3$으로 줄이면 $f^{\rho} = X^3 - [2]X + [5] = X^3 + [1]X + [2]$이고, (10)에 의해 $f^{\rho}([2]) = [f(2)] = [9] = [0]$입니다. 그래서 $[2]$는 $f^{\rho}$의 근입니다. 직접 계산해도 $[8] + [2] + [2] = [12] = [0]$입니다.
:::

:::counterexample[법 5 로 줄이면 근이 아닌 정수의 상이 근일 수 있다]
$\mathbb{Z}[X]$의 $g = X^2 + 1$은 $g(2) = 5 \ne 0$이므로 $2$는 $g$의 근이 아닙니다. 그러나 법 $5$로 줄이면 $g^{\rho}([2]) = [5] = [0]$이어서 $[2]$는 $g^{\rho}$의 근입니다. (5)의 "그 역"에 $\varphi$가 단사라는 가정이 있는 까닭이 이것이고, $\rho : \mathbb{Z} \to \mathbb{Z}_5$는 단사가 아닙니다($\rho(0) = \rho(5)$).
:::

## 확인 질문

:::check[$\mathbb{Z}[X]$의 $f = 2X^2 - X$를 법 $2$로 줄이면?]
계수를 옮기면 $[2]X^2 - [1]X = -X = [1]X$입니다($[-1] = [1]$). $f$의 차수는 $2$인데 $f^{\rho}$의 차수는 $1$입니다. 최고차계수 $2$의 상 $[2] = [0]$이 $0$이어서 (3)의 (i)의 가정이 성립하지 않기 때문입니다.
:::

:::check[$\tau_1(X^2)$은 무엇이고, $\mathbb{Z}[X]$에서 $\tau_1(X^2)$에 $3$을 대입하면?]
(9)에 의해 $\tau_1(X^2) = (X + 1)^2$이고, 분배법칙으로 펼치면 $X^2 + 2X + 1$입니다. (9)의 (iii)에 의해 여기에 $3$을 넣으면 $X^2$에 $3 + 1 = 4$를 넣은 값 $16$이고, 직접 계산해도 $9 + 6 + 1 = 16$입니다.
:::
