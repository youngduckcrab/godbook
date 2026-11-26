---
title: 대수학의 기본정리
title_en: Fundamental Theorem of Algebra
aliases: [대수학의 기본 정리, 복소 다항함수의 근의 존재, fundamental theorem of algebra, FTA]
kind: theorem
field: complex-analysis
msc: ["12D10", "30C10"]
level: undergrad
summary: 차수가 1 이상인, 곧 상수함수가 아닌 복소 다항함수는 근을 갖는다. 또 그런 다항함수의 절댓값이 최솟값을 갖는 점은 정확히 근이다. 증명은 절댓값의 최솟값의 존재와 달랑베르 보조정리를 잇는다.
requires: [order-properties-of-reals, real-order-axioms, absolute-value, field, complex-number, complex-field, modulus-of-complex-number, complex-arithmetic-examples, complex-exponential-function, addition-law-of-complex-exponential, polar-form, complex-polynomial-function, growth-of-complex-polynomial, extreme-value-theorem-for-compact-spaces, minimum-of-modulus-of-polynomial, dalembert-lemma]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.5절 Maximum principle and the fundamental theorem of algebra, Theorem 11.5.5 와 그 증명, 그 뒤 문단 (p.170)"
    checked: original
    note: "출처 Theorem 11.5.5(p.170)는 상수가 아닌 복소 다항식 p 에 p(z₀) = 0 인 z₀ ∈ ℂ 가 있다는 것이고, 증명은 하한 μ 에서 최솟값을 갖는 점 z₀ 을 잡은 뒤 앞의 보조정리(Lemma 11.5.1)로 |p(z₀)| = 0 을 얻는다. (1)은 같은 진술을 '영함수가 아니고 차수가 1 이상' 으로 쓴 것이고, 증명도 같은 두 단계를 이 사이트의 항목으로 잇는다(최솟값의 점은 하한 없이). (2)의 '최솟값을 갖는 점은 정확히 근' 은 출처가 Lemma 11.5.1 뒤 문단에서 해석함수에 대해 말하는 것을 다항함수에 대해 두 방향으로 진술한 것이다. 출처는 정리 뒤 문단에서 이 정리가 해석함수로 일반화되지 않는다는 예로 e^z 를 드는데, 이 강의는 기호 e^z 를 쓰지 않으므로 반례 '복소 지수함수' 는 exp 로 적는다."
  - ref: judson-abstract-algebra
    loc: "21.1절 Extension Fields, Theorem 21.25 와 Theorem 21.28 및 그 앞 문단 (p.267–268); 23.3절 Applications, Theorem 23.34 와 그 앞뒤 문단 (p.307); 18장 Historical Note (p.234); 17.6절 Additional Exercises: Solving the Cubic and Quartic Equations, 연습문제 1 (p.222)"
    checked: original
    note: "Judson Theorem 21.28(p.268)은 '복소수체는 대수적으로 닫혀 있다' 는 꼴로 이 정리를 진술하고 증명을 23장으로 미루며, Theorem 23.34(p.307)는 갈루아 이론과 실로우 정리로 증명한다. 출처 p.307 은 그 증명이 홀수 차수의 실다항식이 실근을 갖는다는 것과 양수의 제곱근을 위해 완비성 공리를 써야 한다고 적는다. 이 항목의 증명은 출처의 증명과 완전히 다르다. '대수적으로 닫혀 있다' 의 정의(21.1절 p.267)는 형식적인 다항식환 F[x] 의 말이라 이 사이트는 그 꼴로 진술하지 않는다. 역사와 맥락의 두 문장은 출처 p.268 과 18장 Historical Note(p.234)에서 읽었다. 17.6절 연습문제 1(p.222)은 완전제곱으로 이차방정식의 근의 공식을 얻게 하고 판별식이 음수이면 'two distinct imaginary solutions' 가 있다고 적는데, 예시 '일차와 이차의 근'의 실계수 이차식 zz + 2z + 5 의 실수가 아닌 근과 같은 경우이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(달랑베르 증명 통독 — r 의 세 조건이 r^k|b_k| ≤ |b_0| 와 rC' < |b_k| 를 주는지 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
복소수는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$는 [[complex-field]], 절댓값은 [[modulus-of-complex-number]]의 것이고, 복소 다항함수와 영함수는 [[complex-polynomial-function|복소 다항함수]], 차수 $\deg$는 [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]]의 것이다. 최솟값을 갖는다는 것은 [[extreme-value-theorem-for-compact-spaces|콤팩트 공간 위의 최대·최소 정리]]의 (1)의 뜻이다.

**근.** $p$가 복소 다항함수일 때, $p(c) = 0$인 복소수 $c$를 $p$의 **근**(root, zero)이라 한다.

1. (**대수학의 기본정리**) 영함수가 아니고 차수가 $1$ 이상인 복소 다항함수는 근을 갖는다. 곧 상수함수가 아닌 복소 다항함수 $p$에 대하여 $p(z_0) = 0$인 복소수 $z_0$이 있다.
2. (최솟값을 갖는 점과 근) $p$가 영함수가 아니고 $\deg p \ge 1$이면, 복소수 $z_0$에 대하여 $|p| : \mathbb{C} \to \mathbb{R}$가 $z_0$에서 최솟값을 갖는 것은 정확히 $z_0$이 $p$의 근일 때이다. 따라서 $|p|$의 최솟값은 $0$이다.
:::

:::english
Complex numbers are those of the entry on complex numbers; the operations of the field $\mathbb{C}$ and the function $\iota$ are those of the entry on the field of complex numbers; moduli are those of the entry on the modulus; complex polynomial functions and the zero function are those of the entry on complex polynomial functions; and the degree $\deg$ is that of the entry on growth of complex polynomials and uniqueness of coefficients. Attaining a minimum is meant as in item (1) of the extreme value theorem for compact spaces.

**Roots.** For a complex polynomial function $p$, a complex number $c$ with $p(c) = 0$ is called a **root** (zero) of $p$.

1. (**Fundamental theorem of algebra**) Every complex polynomial function other than the zero function whose degree is at least $1$ has a root. That is, for every complex polynomial function $p$ that is not a constant function there is a complex number $z_0$ with $p(z_0) = 0$.
2. (Points of minimum and roots) If $p$ is not the zero function and $\deg p \ge 1$, then for a complex number $z_0$, the function $|p| : \mathbb{C} \to \mathbb{R}$ attains its minimum at $z_0$ exactly when $z_0$ is a root of $p$. Hence the minimum value of $|p|$ is $0$.
:::

## 직관

실수만 쓰면 $x^2 + 1 = 0$에는 해가 없습니다. 복소수에는 그 해 $i$가 있고, 이 정리는 실수를 복소수로 한 번 넓히는 것으로 충분하다는 것을 말합니다. 복소수를 계수로 하는 어떤 다항함수를 가져와도, 상수가 아니면 복소수 안에 근이 있어서 더 큰 수 체계가 필요하지 않습니다.

증명은 두 사실을 잇습니다. [[minimum-of-modulus-of-polynomial|복소 다항함수의 절댓값의 최솟값]]은 $|p|$가 가장 작아지는 점이 있다는 것이고, [[dalembert-lemma|달랑베르 보조정리]]는 값이 $0$이 아닌 점에서는 그 가까이에 더 작은 점이 있다는 것입니다. 가장 작은 점에서 값이 $0$이 아니면 더 작은 점이 있다는 것과 어긋나므로, 가장 작은 점에서 값은 $0$입니다. 첫째 사실은 차수가 $1$ 이상일 때 $|z|$가 크면 $|p(z)|$도 크다는 증가의 어림에 기대고, 둘째 사실은 복소수의 $k$제곱근에 기댑니다. 실수 계수의 다항함수를 실수에서만 보면 둘째 사실이 성립하지 않을 수 있고(달랑베르 보조정리의 예시), 그래서 실수 범위에는 근이 없을 수 있습니다.

## 증명

:::idea
$|p|$가 최솟값을 갖는 점을 잡고, 그 점의 값이 $0$이 아니면 달랑베르 보조정리가 더 작은 값을 주어 모순이라는 것을 쓴다.
:::

:::hint
상수함수가 아닌 복소 다항함수는 영함수가 아니고 차수가 $1$ 이상이다([[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]]의 (3)의 (ii)).
:::

:::proof
**2의 증명.** $p(z_0) = 0$이면 [[modulus-of-complex-number|복소수의 절댓값]]의 (1)에 의해 모든 $z$에서 $|p(z_0)| = 0 \le |p(z)|$이므로 $|p|$는 $z_0$에서 최솟값을 갖는다. 거꾸로 $|p|$가 $z_0$에서 최솟값을 가지면 [[dalembert-lemma|달랑베르 보조정리]]의 (2)에 의해 $p(z_0) = 0$이다. 마지막 문장은 (1)이 근 $z_0$을 주고 그 점에서 $|p(z_0)| = 0$이기 때문이다(아래 (1)의 증명은 (2)의 둘째 방향만 쓴다).

**1의 증명.** [[minimum-of-modulus-of-polynomial|복소 다항함수의 절댓값의 최솟값]]의 (1)에 의해 모든 $z$에서 $|p(z_0)| \le |p(z)|$인 복소수 $z_0$이 있다. $p$가 영함수가 아니고 $\deg p \ge 1$이므로 달랑베르 보조정리의 (2)에 의해 $p(z_0) = 0$이다. 둘째 문장: $p$가 상수함수가 아니면 [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]]의 (3)의 (ii)에 의해 $p$는 영함수가 아니고 $\deg p \ne 0$이므로 $\deg p \ge 1$이다. 거꾸로 영함수가 아니고 차수가 $1$ 이상이면 같은 (ii)에 의해 상수함수가 아니므로, 두 문장은 같은 범위의 $p$를 말한다. $\blacksquare$
:::

## 예시와 반례

:::example[일차와 이차의 근]
$a_1 \ne 0$이면 $p(z) = a_0 + a_1 z$의 근은 $-a_0 a_1^{-1}$이고, 이것뿐입니다($p(z) = 0$이면 $a_1 z = -a_0$이고 [[field|체]]의 (5)에 의해 $z$는 하나로 정해집니다). 이차인 경우는 [[complex-arithmetic-examples|복소수 계산의 예]]가 근의 공식으로 근을 직접 구합니다. 예컨대 $zz + 2z + 5$는 $(z + 1)(z + 1) + 4$이므로 $z = -1 + 2i$에서 $(2i)(2i) + 4 = 0$입니다. 계수가 모두 실수이지만 근은 실수인 복소수가 아닙니다.
:::

:::counterexample[복소 지수함수]
복소 다항함수가 아니면 상수가 아니어도 근이 없을 수 있습니다. [[complex-exponential-function|복소 지수함수]] $\exp : \mathbb{C} \to \mathbb{C}$는 [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (2)에 의해 값이 $0$이 되는 점이 없습니다. 그런데 복소 지수함수 항목의 (3)에 의해 $\exp(0) = 1$이고, [[polar-form|극형식과 편각]]의 (6)에 의해 $\pi \in \arg(-1)$이므로 $\exp(i\pi) = -1 \ne 1$이어서 상수함수가 아닙니다. 증명에서 복소 다항함수라는 것은 최솟값의 존재(증가의 어림)와 달랑베르 보조정리(한 점으로 옮긴 표현) 두 곳에서 쓰입니다.
:::

:::counterexample[영함수와 0 이 아닌 상수함수]
가정에서 차수가 $1$ 이상이라는 것을 빼면 결론이 깨질 수 있습니다. 값이 $5$인 상수함수는 근이 없습니다. 영함수는 모든 점이 근이지만 차수가 없으므로 (1)의 가정에 들지 않습니다.
:::

## 역사와 맥락

Judson 은 이 정리를 가우스가 22세에 박사논문에서 처음 증명했다고 적고 있습니다(*Abstract Algebra* p.268). 같은 책의 18장 역사 노트는 그 논문의 증명을 이 정리의 첫 완전한 증명이라 부르고, 그 정리를 실수 계수의 모든 다항식이 복소수 위에서 일차식들로 인수분해된다는 것으로 소개합니다(p.234).

## 확인 질문

:::check[$p(z) = z^4 + 4$의 근을 하나 찾으면?]
$z = 1 + i$이면 $zz = 2i$이고 $z^4 = (2i)(2i) = -4$이므로 $p(1 + i) = 0$입니다. (1)이 말하는 근이 실제로 있습니다.
:::

:::check[$|p|$의 최솟값이 $0$이 아닌 복소 다항함수가 있는가?]
있습니다. 값이 $0$이 아닌 상수함수가 그렇습니다. (2)에 의해 그런 $p$는 영함수가 아니고 차수가 $1$ 이상일 수 없으므로, 차수가 $0$인 다항함수, 곧 값이 $0$이 아닌 상수함수뿐입니다.
:::
