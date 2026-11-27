---
title: 중근과 도함수
title_en: Multiple Roots and the Derivative
aliases: [중근, 중복근, multiple root, repeated root]
kind: proposition
field: ring-theory
msc: ["13", "12"]
level: undergrad
summary: 다항식 f 에 대하여 (X − c)² 가 f 를 나눌 때 c 를 f 의 중근이라 한다. 단위원을 갖는 가환환에서 c 가 f 의 중근인 것은 f(c) = 0 이고 형식적 도함수의 값 f′(c) 도 0 인 것과 같다. 계수를 다른 환으로 옮겨도 같은 판정이 되고, 형식적 도함수가 0 이 아닌 상수이면 중근이 없다.
requires: [ring, ring-basic-properties, ring-examples, integers-modulo-n, characteristic-of-a-ring, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, factor-theorem-for-polynomials, formal-derivative]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "22.1절 Structure of a Finite Field, Lemma 22.3 (p.278), Lemma 22.5 의 증명 (p.279), Theorem 22.6 의 증명 (p.280); 23.1절 Field Automorphisms, 중복도의 정의와 Proposition 23.12 (p.296); 17.5절 Exercises, 연습문제 24 (p.221), 25(e) (p.222); 23.3절 Applications, 'multiple roots' (p.303)"
    checked: original
    note: "출처 Lemma 22.5(p.279)는 체 위에서 'f(x) is separable if and only if f(x) and f′(x) are relatively prime' 이고, 그 증명의 둘째 부분이 'Suppose that f(x) = (x − α)^k g(x), where k > 1. Differentiating, we have f′(x) = k(x − α)^{k−1}g(x) + (x − α)^k g′(x). Therefore, f(x) and f′(x) have a common factor' 이다. 이 항목의 (1)은 그 계산을 k = 2 에서 근의 꼴로 쓴 것이다. (3)은 출처 Theorem 22.6 의 증명(p.280)이 'f′(x) = p^n x^{p^n −1} − 1 = −1 is relatively prime to f(x)' 이므로 Lemma 22.5 에 의해 f(x) 가 서로 다른 p^n 개의 근을 갖는다고 하는 단계와 같은 발상이다(출처는 f′ 와 f 가 서로소라는 것을 거치고, 이 항목은 근에서의 값으로 본다). (2)는 출처 Lemma 22.5 의 증명의 첫째 부분(p.279)이 서로 다른 일차식들의 곱 f 의 f′ 를 펼쳐 'f(x) and f′(x) can have no common factors' 라고 하는 것과 같은 방향(반복되는 근이 없으면 f 와 f′ 에 공통 인수가 없다)의 사실이고, 이 항목은 그것을 근 하나에서 'f(c) = 0 이고 f′(c) = 0 이면 c 는 중근' 으로 진술하며 증명(f = (X − c)q 에서 f′(c) = q(c))은 이 사이트가 썼다. 이 항목은 다항식의 최대공약수를 쓰지 않는다. '중근' 은 이 항목이 '(X − c)² 가 f 를 나눈다' 로 정의한 이름이다. 출처는 23.1절(p.296)에서 분해체 위의 인수분해의 지수로 근의 중복도(multiplicity)를 정의하고, 'repeated roots'(p.295–296), 'multiple roots'(p.303) 라는 말을 쓴다. 출처 연습문제 25(e)(p.222)는 일차식들로 분해되는 f 가 반복되는 인수를 갖지 않을 조건을 f 와 f′ 가 서로소인 것으로 묻는다. 반례 '도함수가 영다항식이면 근은 모두 중근이다'의 Z_3 의 X³ − 1 은 출처 Proposition 23.12 의 증명(p.296)이 표수 p 에서 f′ 가 영다항식이 되는 f(x) = a_0 + a_1x^p + ⋯ 꼴과 같은 발상이고, 그 반례의 (X − [1])³ = X³ − [1] 은 출처 Lemma 22.3(Freshman's Dream, p.278)을 p = 3, n = 1 에 쓴 것과 같다. 확인 질문 '$\\mathbb{Z}_5[X]$에서 $X^5 - X$는 중근을 갖는가?' 의 X⁵ − X 는 출처 연습문제 24(p.221, x^p − x 는 Z_p 에서 서로 다른 p 개의 근을 갖는다)를 p = 5 에 쓴 것과 같은 다항식이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(ℤ₉·ℤ₂ 예의 계산 대입, 출처 주장 검색 — 틀린 '덧붙였다' 1건을 찾아 단원 전체를 다시 확인, 4건 고침). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$R$이 단위원을 갖는 가환환이라 하자. 다항식환 $R[X]$, 상수 다항식과 읽는 약속, 부정원 $X$, 나누어떨어짐 $g \mid f$는 [[polynomial-ring|다항식환]]의 것, 대입한 값 $f(r)$, 근, 계수 사상 $f^{\varphi}$는 [[evaluation-homomorphism|대입 준동형]]의 것, 형식적 도함수 $f'$는 [[formal-derivative|형식적 도함수]]의 것이다. $f'(c)$는 $f'$에 $c$를 대입한 값이다.

$f \in R[X]$와 $c \in R$에 대하여, $R[X]$에서 $(X - c)^2 \mid f$일 때 $c$를 $f$의 **중근**(multiple root)이라 한다. 영다항식은 모든 $c \in R$를 중근으로 갖는다.

다음이 성립한다. 아래에서 $f \in R[X]$이고 $c \in R$이다.

1. $c$가 $f$의 중근이면 $f(c) = 0$이고 $f'(c) = 0$이다. 특히 중근은 근이다.
2. 거꾸로 $f(c) = 0$이고 $f'(c) = 0$이면 $c$는 $f$의 중근이다. 따라서 $c$가 $f$의 중근인 것은 정확히 $f(c) = 0$이고 $f'(c) = 0$일 때이다.
3. (도함수가 $0$이 아닌 상수) $f'$가 $0$이 아닌 상수 다항식이면 $f$는 $R$의 어떤 원소도 중근으로 갖지 않는다.
4. (계수를 옮겨서) $S$가 단위원을 갖는 가환환이고 $\varphi : R \to S$가 $1$을 $1$로 보내는 환 준동형이며 $s \in S$라 하자. $S[X]$에서 $(X - s)^2 \mid f^{\varphi}$인 것은 정확히 $f^{\varphi}(s) = 0$이고 $(f')^{\varphi}(s) = 0$일 때이다.
:::

:::english
Let $R$ be a commutative ring with unity. The polynomial ring $R[X]$, constant polynomials with the reading convention, the indeterminate $X$ and divisibility $g \mid f$ are those of the polynomial ring; the value $f(r)$, roots and the coefficient map $f^{\varphi}$ are those of the evaluation homomorphism; the formal derivative $f'$ is that of the formal derivative. $f'(c)$ is the value of $f'$ at $c$.

For $f \in R[X]$ and $c \in R$, $c$ is called a **multiple root** of $f$ if $(X - c)^2 \mid f$ in $R[X]$. The zero polynomial has every $c \in R$ as a multiple root.

The following hold. Below, $f \in R[X]$ and $c \in R$.

1. If $c$ is a multiple root of $f$, then $f(c) = 0$ and $f'(c) = 0$. In particular a multiple root is a root.
2. Conversely, if $f(c) = 0$ and $f'(c) = 0$, then $c$ is a multiple root of $f$. Hence $c$ is a multiple root of $f$ if and only if $f(c) = 0$ and $f'(c) = 0$.
3. (Nonzero constant derivative) If $f'$ is a nonzero constant polynomial, then $f$ has no element of $R$ as a multiple root.
4. (After carrying the coefficients over) Let $S$ be a commutative ring with unity, $\varphi : R \to S$ a ring homomorphism sending $1$ to $1$, and $s \in S$. Then $(X - s)^2 \mid f^{\varphi}$ in $S[X]$ if and only if $f^{\varphi}(s) = 0$ and $(f')^{\varphi}(s) = 0$.
:::

## 직관

$f = (X - c)^2 g$이면 곱의 법칙으로 $f' = 2 \cdot (X - c)\,g + (X - c)^2 g'$이고, 두 항 모두에 $X - c$가 붙어 있으므로 $c$를 넣으면 $0$이 됩니다((1)). 실수 함수의 그래프로 보면 중근은 그래프가 축과 만나는 점에서 기울기도 $0$인 경우이지만, 여기서는 극한이나 기울기 없이 계수의 계산만으로 같은 판정이 성립합니다.

거꾸로((2)) $f(c) = 0$이면 인수 정리로 $f = (X - c)\,q$이고, 곱의 법칙으로 $f' = q + (X - c)\,q'$이므로 $f'(c) = q(c)$입니다. 그래서 $f'(c) = 0$이면 $q$도 $c$를 근으로 가져 $X - c$를 한 번 더 뗄 수 있습니다. 이 논법은 영인자가 없다는 것을 쓰지 않으므로 단위원을 갖는 모든 가환환에서 성립합니다.

## 증명

:::idea
(1)은 $(X - c)^2 g$에 곱의 법칙을 쓰고 $c$를 대입한다. (2)는 인수 정리를 두 번 쓴다.
:::

:::hint
$f = (X - c)\,q$이면 $f' = q + (X - c)\,q'$입니다.
:::

:::proof
**쓰는 사실.** "대입의 (n)"은 [[evaluation-homomorphism|대입 준동형]]의 (n), "도함수의 (n)"은 [[formal-derivative|형식적 도함수]]의 (n), "인수 정리의 (n)"은 [[factor-theorem-for-polynomials|다항식의 인수 정리와 근의 개수]]의 (n)이다. 대입의 (2)에 의해 $c$에서의 대입은 합, 곱, 거듭제곱을 보존하고, 대입의 (1)에 의해 $(X - c)(c) = c - c = 0$이다. 도함수의 (2)에 의해 $(X - c)' = 1$이다.

**1의 증명.** $f = (X - c)^2 g$라 하자. 도함수의 (3), (4)에 의해
$$
\begin{aligned}
f' &= ((X - c)^2)' g + (X - c)^2 g' \\
&= 2 \cdot ((X - c)\,g) + (X - c)^2 g'
\end{aligned}
$$
이다. $c$를 대입하면 $(X - c)(c) = 0$이고 [[ring-basic-properties|환의 기본 성질]]의 (1), [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (6)의 (v)($0^2 = 0$)와 [[ring|환]]의 정수배($2 \cdot 0 = 0 + 0 = 0$)에 의해 $f(c) = 0^2 g(c) = 0$, $f'(c) = 2 \cdot (0\, g(c)) + 0^2 g'(c) = 0$이다.

**2의 증명.** $f(c) = 0$이므로 인수 정리의 (2)에 의해 $f = (X - c)\,q$인 $q$가 있다. 도함수의 (3)에 의해 $f' = 1 \cdot q + (X - c)\,q' = q + (X - c)\,q'$이고, $c$를 대입하면 $f'(c) = q(c) + 0\, q'(c) = q(c)$이다. $f'(c) = 0$이므로 $q(c) = 0$이고, 다시 인수 정리의 (2)에 의해 $q = (X - c)\,h$인 $h$가 있다. 결합법칙과 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (6)의 (i)에 의해 $f = (X - c)((X - c)\,h) = (X - c)^2 h$이다.

**3의 증명.** $f' = d$이고 $d \ne 0$이면 대입의 (1)에 의해 모든 $c$에서 $f'(c) = d \ne 0$이므로 (1)에 의해 $c$는 중근이 아니다.

**4의 증명.** (1), (2)를 $S$와 $f^{\varphi} \in S[X]$, $s$에 쓰면 $(X - s)^2 \mid f^{\varphi}$인 것은 정확히 $f^{\varphi}(s) = 0$이고 $(f^{\varphi})'(s) = 0$일 때이다. 도함수의 (7)에 의해 $(f^{\varphi})' = (f')^{\varphi}$이다.
:::

## 예시와 반례

:::example[정수 계수 다항식의 중근]
$\mathbb{Z}[X]$의 $f = X^3 - X^2 - X + 1$은 $f(1) = 1 - 1 - 1 + 1 = 0$이고, $f' = 3X^2 - 2X - 1$이므로 $f'(1) = 3 - 2 - 1 = 0$입니다. (2)에 의해 $1$은 중근이고, 실제로 $f = (X - 1)^2 (X + 1)$입니다(검산: $(X^2 - 2X + 1)(X + 1) = X^3 - X^2 - X + 1$). 근 $-1$에서는 $f'(-1) = 3 + 2 - 1 = 4 \ne 0$이므로 $-1$은 중근이 아닙니다.
:::

:::counterexample[도함수가 영다항식이면 근은 모두 중근이다]
$\mathbb{Z}_3[X]$의 $f = X^3 - [1]$은 $f' = [3]X^2 = 0$입니다([[formal-derivative|형식적 도함수]]의 (6)). 그래서 (2)에 의해 $f$의 근은 모두 중근이고, $f([1]) = [0]$이므로 $[1]$은 중근입니다. 실제로 $(X - [1])^3 = X^3 - [3]X^2 + [3]X - [1] = X^3 - [1]$입니다. 상수가 아닌 다항식의 도함수가 영다항식이 되는 것은 표수가 $3$이기 때문이고, 표수 $0$인 체에서는 일어나지 않습니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_5[X]$에서 $X^5 - X$는 중근을 갖는가?]
[[formal-derivative|형식적 도함수]]의 (6)에 의해 $(X^5 - X)' = -[1]$이고 이것은 $0$이 아닌 상수이므로, (3)에 의해 $\mathbb{Z}_5$의 어떤 원소도 중근이 아닙니다.
:::

:::check[$\mathbb{Z}[X]$의 $X^2$에서 $0$은 중근인가? $X$에서는?]
$X^2 = (X - 0)^2 \cdot 1$이므로 $0$은 $X^2$의 중근입니다. $X$에서는 $X' = 1$이므로 $X'(0) = 1 \ne 0$이고, (1)에 의해 $0$은 $X$의 중근이 아닙니다. $X$의 근은 $0$이지만 중근이 아닌 경우입니다.
:::
