---
title: 정칙함수의 영점
title_en: Zeros of Holomorphic Functions
aliases: [영점의 분류, 영점의 중복도, 고립된 영점, 정칙함수의 영점의 중복도, classification of zeros, multiplicity of a zero, isolated zero]
kind: theorem
field: complex-analysis
msc: ["30C15"]
level: undergrad
summary: "열린집합 위의 정칙함수 f 의 영점 a 에서는 a 를 중심으로 하는 어떤 원판에서 f 가 0 이거나, 자연수 m 과 a 에서 0 이 아닌 정칙함수 g 가 있어 f(z) = (z − a)ᵐ g(z) 이고, 둘 가운데 정확히 하나가 성립한다. 뒤의 경우 m 과 g 는 하나뿐이고 m 을 영점의 중복도라 하며, a 둘레에는 다른 영점이 없고, m 은 a 에서의 도함수가 처음으로 0 이 아닌 계수이다. 영점의 집합의 집적점인 점에서는 앞의 경우가 성립한다."
requires: [real-number-arithmetic, order-properties-of-reals, well-ordering-principle, natural-numbers-are-infinite, factorial-from-zero, complex-number, complex-field, modulus-of-complex-number, power-of-a-complex-number, complex-exponential-function, derivative-of-complex-exponential, open-ball, open-ball-is-open, open-set-in-metric-space, complex-plane-as-metric-space, complex-series, complex-power-series, radius-of-convergence-of-complex-power-series, limit-of-complex-function, complex-derivative, complex-derivative-rules, higher-complex-derivatives, taylor-coefficients-of-complex-power-series, holomorphic-functions-have-power-series, holomorphic-derivatives-and-cauchy-estimates, zero-derivative-on-a-region, complex-polynomial-function]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Classification of Zeros and the Identity Principle 절의 첫 문단, Theorem classificationzeros 와 그 증명, source/sec_classifzeros.ptx:5–27, 28–122; 8장 연습문제 가운데 f′(z₀) ≠ 0 인 영점의 중복도와 영점의 중복도를 구하는 것, source/exercises-chap8.ptx:453–462, 463–492, 493–528"
    checked: original
    note: "출처 Theorem classificationzeros(sec_classifzeros.ptx:28–62)는 영점 a 에서 (a) a 중심의 열린 원판에서 f 가 0 이거나 (b) 양의 정수 m 과 g(a) ≠ 0 인 정칙함수 g 가 있어 G 에서 f(z) = (z − a)^m g(z) 이고 이때 a 는 고립된 영점이라고 진술하며, m 은 f 와 a 로 하나로 정해지고 multiplicity 라 부른다. 이 항목의 (1)과 (2)는 같은 내용이고, 두 경우가 함께 성립하지 않는다는 것과 g 가 하나뿐이라는 것을 덧붙인다. 증명(63–121)은 멱급수 전개에서 c_k = 0 (k < m), c_m ≠ 0 인 m 을 잡고 g 를 원판에서는 급수로, G − {a} 에서는 f/(z − a)^m 로 정하며 두 정의가 맞는다고 적는다. 이 항목도 같은 길이고, m 은 가장 작은 첨자로 잡고, g 가 G 전체에서 정칙인 것은 두 열린집합의 합집합의 국소성으로 보인다(원판 밖에서만 f/(z − a)^m 로 정해 두 경우가 겹치지 않게 한다). 출처는 m 이 하나로 정해지는 까닭을 멱급수 전개의 유일성으로 들지만, 이 항목은 두 표현의 지수가 다르면 지수가 작은 쪽의 g 가 a 에서 0 이 된다는 연속성 논법으로 보인다. (3)의 (iii)은 출처 8장 연습문제(exercises-chap8.ptx:453–462, f′(z₀) ≠ 0 이면 중복도 1)를 진술로 올린 것이다. 출처 첫 문단(5–27)은 다항식 p 의 영점 a 에서 z − a 를 되풀이해 떼어 p(z) = (z − a)^m g(z) 로 쓰고 m 을 영점의 multiplicity 라 하는데, 예시 '복소 다항함수 $(z - i)^2(z + 1)$의 영점'은 이것과 같은 대상이다. 8장 연습문제(463–492)는 exp(z) − 1 과 cos(z) − 1 + sin²(z)/2 의 영점의 중복도를 묻는데, 예시 '$\\exp(z) - 1 - z$의 영점 $0$'은 같은 발상이다(함수에서 앞 항을 빼고 도함수로 중복도를 읽는다). 8장 연습문제(463–492, 493–528)는 영점의 중복도를 구하게 하는데, 확인 질문 '$z^2 - 2z + 2$의 영점 $1 + i$의 중복도는?'과 같은 물음이다."
  - ref: lebl-basic-analysis-2
    loc: "11.3.5 Identity theorem for analytic functions, Lemma 11.3.8 과 그 증명 (p.160)"
    checked: original
    note: "출처 Lemma 11.3.8 은 0 이 아닌 점들의 수열 z_n → 0 에서 f(z_n) = 0 인 멱급수 f 의 계수가 모두 0 이라고 진술하고, 증명은 0 이 아닌 계수 가운데 첨자가 가장 작은 m 으로 f(z) = z^m g(z), g(0) ≠ 0 이라 쓴 뒤 g 의 연속으로 B(0, δ) 에 다른 영점이 없다고 한다. 이 항목의 (4)는 수열 대신 영점의 집합의 집적점으로 진술하고, 멱급수가 아닌 열린집합 위의 정칙함수에 대해 그 점의 원판에서 f 가 0 이라고 결론짓는다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(다항식 크기로 눌린 정함수의 코시 부등식, 영점 분류의 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수와 $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]], 거듭제곱은 [[power-of-a-complex-number]]의 것이다. $\mathbb{C}$의 거리와 위상, 열린 공 $B(a, r)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이며, $\mathbb{C}$의 부분집합의 집적점은 [[limit-of-complex-function|복소함수의 극한]]의 것이다. 정칙함수는 [[complex-derivative|복소 미분]]의 것이고, $k$계 도함수 $f^{(k)}$는 [[higher-complex-derivatives|고계 복소 도함수]]의 것이며(정칙함수는 [[holomorphic-derivatives-and-cauchy-estimates|정칙함수의 고계 도함수와 코시 부등식]]의 (1)에 의해 무한 번 미분가능하다), $0$ 이상인 정수의 계승 $k!$은 [[factorial-from-zero]]의 것이다.

아래에서 $G$는 $(\mathbb{C}, d)$의 열린집합이고 $f : G \to \mathbb{C}$는 정칙함수이다.

**영점.** $f(a) = 0$인 $a \in G$를 $f$의 **영점**(zero)이라 한다.

1. (**영점의 분류**) $a$가 $f$의 영점이면 다음 둘 가운데 정확히 하나가 성립한다.
   - (가) 어떤 실수 $r > 0$이 있어 $B(a, r) \subseteq G$이고, $B(a, r)$의 모든 $z$에서 $f(z) = 0$이다.
   - (나) 자연수 $m$과 정칙함수 $g : G \to \mathbb{C}$가 있어 $g(a) \ne 0$이고, $G$의 모든 $z$에서
     $$
     f(z) = (z - a)^m\, g(z)
     $$
     이다.

   (나)가 성립하면 (나)의 조건을 만족하는 자연수 $m$과 함수 $g$는 하나씩뿐이다.

   **영점의 중복도.** (나)가 성립할 때 그 자연수 $m$을 $f$의 영점 $a$의 **중복도**(multiplicity)라 한다. 이것을 **영점의 중복도**라고도 한다. (가)가 성립하면 중복도를 정의하지 않는다.
2. (고립된 영점) $a$가 $f$의 영점이고 (나)가 성립하면, 어떤 실수 $r > 0$이 있어 $B(a, r) \subseteq G$이고 $0 < |z - a| < r$인 모든 복소수 $z$에서 $f(z) \ne 0$이다.
3. (도함수로 읽기) $a$가 $f$의 영점이라 하자.
   - (i) (가)가 성립하는 것은 정확히 $0$ 이상인 모든 정수 $k$에서 $f^{(k)}(a) = 0$일 때이다.
   - (ii) (나)가 성립하면, 중복도 $m$은 $f^{(k)}(a) \ne 0$인 $0$ 이상의 정수 $k$ 가운데 가장 작은 것이다. 곧 $0 \le k < m$인 정수 $k$에서 $f^{(k)}(a) = 0$이고 $f^{(m)}(a) \ne 0$이다. 또 (나)의 $g$는 $g(a) = f^{(m)}(a)/m!$을 만족한다.
   - (iii) $f'(a) \ne 0$이면 (나)가 성립하고 $a$의 중복도는 $1$이다.
4. (영점의 집적점) $Z = \{z \in G : f(z) = 0\}$이라 하자. $a \in G$가 $Z$의 집적점이면 $f(a) = 0$이고 (1)의 (가)가 성립한다.
:::

:::english
Complex numbers and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$ and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus is that of the entry on the modulus of a complex number; powers are those of the entry on powers of a complex number. The metric and topology of $\mathbb{C}$ and open balls $B(a, r)$ are those of the entry on the metric of the complex plane, open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$, and cluster points of subsets of $\mathbb{C}$ are those of the entry on limits of complex functions. Holomorphic functions are those of the entry on the complex derivative; the $k$th derivative $f^{(k)}$ is that of the entry on higher complex derivatives (a holomorphic function is infinitely differentiable by (1) of the entry on derivatives of holomorphic functions and Cauchy's estimates), and the factorial $k!$ of an integer $k \ge 0$ is that of the entry on factorials from zero.

Below, $G$ is an open set of $(\mathbb{C}, d)$ and $f : G \to \mathbb{C}$ is a holomorphic function.

**Zero.** A point $a \in G$ with $f(a) = 0$ is called a **zero** of $f$.

1. (**Classification of zeros**) If $a$ is a zero of $f$, then exactly one of the following holds.
   - (a) There is a real number $r > 0$ such that $B(a, r) \subseteq G$ and $f(z) = 0$ for every $z$ in $B(a, r)$.
   - (b) There are a natural number $m$ and a holomorphic function $g : G \to \mathbb{C}$ such that $g(a) \ne 0$ and, for every $z$ in $G$,
     $$
     f(z) = (z - a)^m\, g(z).
     $$

   If (b) holds, then the natural number $m$ and the function $g$ satisfying the conditions of (b) are each unique.

   **Multiplicity of a zero.** When (b) holds, the natural number $m$ is called the **multiplicity** of the zero $a$ of $f$, also the **multiplicity of the zero**. When (a) holds, the multiplicity is not defined.
2. (Isolated zero) If $a$ is a zero of $f$ and (b) holds, then there is a real number $r > 0$ such that $B(a, r) \subseteq G$ and $f(z) \ne 0$ for every complex number $z$ with $0 < |z - a| < r$.
3. (Reading off from derivatives) Let $a$ be a zero of $f$.
   - (i) (a) holds exactly when $f^{(k)}(a) = 0$ for every integer $k \ge 0$.
   - (ii) If (b) holds, then the multiplicity $m$ is the smallest integer $k \ge 0$ with $f^{(k)}(a) \ne 0$; that is, $f^{(k)}(a) = 0$ for every integer $k$ with $0 \le k < m$, and $f^{(m)}(a) \ne 0$. Moreover, the function $g$ of (b) satisfies $g(a) = f^{(m)}(a)/m!$.
   - (iii) If $f'(a) \ne 0$, then (b) holds and the multiplicity of $a$ is $1$.
4. (Cluster point of zeros) Let $Z = \{z \in G : f(z) = 0\}$. If $a \in G$ is a cluster point of $Z$, then $f(a) = 0$ and (a) of (1) holds.
:::

## 직관

다항식 $(z - 1)^3(z + 2)$는 $z = 1$에서 $0$이고, $z - 1$을 세 번 떼어 내면 $1$에서 $0$이 아닌 $z + 2$가 남습니다. 정칙함수도 영점 둘레에서 멱급수와 같으므로 같은 일이 일어납니다. 멱급수의 계수가 모두 $0$이면 영점 둘레의 원판에서 함수가 $0$이고((가)), 그렇지 않으면 처음으로 $0$이 아닌 계수의 첨자 $m$만큼 $z - a$를 떼어 낼 수 있습니다((나)). 계수는 도함수를 계승으로 나눈 것이므로, $m$은 $a$에서의 도함수가 처음으로 $0$이 아닌 차수이기도 합니다((3)).

(나)에서는 $g$가 $a$에서 $0$이 아니고 연속이므로 $a$ 바로 둘레에서도 $0$이 아니고, $(z - a)^m$은 $z \ne a$에서 $0$이 아니므로 $a$ 둘레에 다른 영점이 없습니다((2)). 비유하면 (나)의 영점은 땅에 홀로 파인 구덩이의 바닥이고 (가)의 영점은 물에 잠긴 땅의 한 점입니다. 구덩이 바닥 둘레에는 바닥과 같은 깊이의 점이 없다는 것이 (2)의 "$0 < |z - a| < r$에서 $f(z) \ne 0$"에 해당하고, 잠긴 땅에서는 둘레가 모두 같은 깊이라는 것이 (가)의 "$B(a, r)$의 모든 $z$에서 $f(z) = 0$"에 해당합니다. 비유가 맞지 않는 곳은 깊이가 실수인 데 비해 함숫값은 복소수라는 점입니다.

그래서 영점들이 $G$의 한 점으로 모여들면 그 점에서는 (나)가 될 수 없고 (가)가 됩니다((4)). "중복도"라는 말은 선형대수 2 의 [[multiplicity-of-a-root|근의 중복도]]에도 쓰이는데, 그것은 실계수 다항함수의 근에 대한 말이고 근이 아닌 점에서 $0$으로 정합니다. 이 항목의 중복도는 열린집합 위의 정칙함수의 영점에서만, (나)가 성립할 때만 정의하는 자연수입니다.

## 증명

:::idea
영점 $a$의 원판에서 $f$를 멱급수와 같게 두고, 계수가 모두 $0$이면 (가), 아니면 가장 작은 $0$이 아닌 계수의 첨자 $m$으로 $f = (z - a)^m g$를 만든다. $g$는 원판에서는 급수로, 원판 밖에서는 $f/(z - a)^m$로 정하고 두 열린집합의 국소성으로 정칙임을 보인다. 두 경우가 함께 성립하지 않는 것과 $m$, $g$가 하나뿐인 것은 $g$의 $a$에서의 연속으로 보인다.
:::

:::hint
$f(z) = (z - a)^m g(z) = (z - a)^{q} h(z)$이고 $m < q$이면, $z \ne a$에서 $g(z) = (z - a)^{q - m} h(z)$입니다. 두 변은 모두 $a$에서 연속인 함수의 값이고, 오른쪽의 $a$에서의 값은 $0$입니다.
:::

:::hint
(4)에서 $f(a) \ne 0$이면 $a$ 둘레의 원판에서 $f$가 $0$이 아닙니다([[complex-derivative-rules|복소 미분의 법칙]]의 (3)의 (i)). (나)이면 (2)를 쓰세요.
:::

:::proof
"미분 (n)"은 [[complex-derivative|복소 미분]], "법칙 (n)"은 [[complex-derivative-rules|복소 미분의 법칙]], "고계 (n)"은 [[higher-complex-derivatives|고계 복소 도함수]], "전개 (n)"은 [[holomorphic-functions-have-power-series|정칙함수의 멱급수 전개]], "코시 (n)"은 [[holomorphic-derivatives-and-cauchy-estimates|정칙함수의 고계 도함수와 코시 부등식]], "계수 (n)"은 [[taylor-coefficients-of-complex-power-series|복소 멱급수의 계수와 도함수]], "극한 (n)"은 [[limit-of-complex-function|복소함수의 극한]], "거듭제곱 (n)"은 [[power-of-a-complex-number]]의 번호이다.

**준비 1 (거듭제곱의 함수).** $a \in G$이고 $q$가 $0$ 이상인 정수일 때, $z \in G$에서의 값이 $(z - a)^q$인 함수 $P_q : G \to \mathbb{C}$는 정칙함수이다. 미분 (5)에 의해 $z$에서의 값이 $z - a$인 함수 $G \to \mathbb{C}$가 정칙함수이고, 법칙 (4)의 (i)에 의해 $w$에서의 값이 $w^q$인 함수 $\mathbb{C} \to \mathbb{C}$가 정함수이므로, 법칙 (5)를 $H = \mathbb{C}$에 쓰면 된다. 또 $z \ne a$이면 거듭제곱 (2)에 의해 $(z - a)^q \ne 0$이고, $q \ge 1$이면 거듭제곱 (3)의 (i)에 의해 $P_q(a) = 0^q = 0$이다. 미분 (3)에 의해 $P_q$를 포함해 정칙함수는 모두 연속이다. 또 극한 (1)의 (ii)에 의해 $a$는 $G - \{a\}$의 집적점이고, $u : G \to \mathbb{C}$가 정칙함수이면 미분 (3)에 의해 제한 $u|_{G - \{a\}}$는 $a$에서 $u(a)$로 수렴한다.

**준비 2 (전개).** $a$를 $f$의 영점이라 하자. $G$가 열린집합이므로 $B = B(a, R) \subseteq G$인 실수 $R > 0$이 있다. 전개 (2)에 의해, 전개 (1)의 계수 $(c_n)_{n \ge 0}$로 만든 중심 $a$의 복소 멱급수는 [[radius-of-convergence-of-complex-power-series|복소 멱급수의 수렴 반지름]]의 (7)의 (i)의 두 경우 가운데 하나이고, 그것이 $D$ 위에 나타내는 함수 $\varphi$에 대하여 $B \subseteq D$이며 $B$의 모든 $z$에서 $f(z) = \varphi(z) = \sum_{n=0}^{\infty} c_n (z - a)^n$이다. 코시 (2)에 의해 $0$ 이상인 모든 $n$에서 $c_n = f^{(n)}(a)/n!$이고, [[factorial-from-zero]]의 (3)에 의해 $n! \ne 0$이므로 $c_n \ne 0$인 것은 정확히 $f^{(n)}(a) \ne 0$일 때이다. 특히 고계 (1)과 [[factorial-from-zero]]의 (1)에 의해 $c_0 = f^{(0)}(a)/0! = f(a) = 0$이다.

**단계 A (계수가 모두 0 이면 (가)).** 모든 $n$에서 $c_n = 0$이면 $B$의 모든 $z$에서 항 $c_n (z - a)^n$이 모두 $0$이므로 [[complex-series|복소 급수]]의 (3)에 의해 $f(z) = 0$이다. 곧 $r = R$로 (가)가 성립한다.

**단계 B (0 이 아닌 계수가 있으면 (나)).** $c_n \ne 0$인 $n$이 있다고 하자. 계수 (6)을 이 복소 멱급수와 $\varphi$에 쓰면, 그런 $n$ 가운데 가장 작은 것 $m$이 있고, 정칙함수 $g_0 : D \to \mathbb{C}$가 있어 $D$의 모든 $z$에서 $\varphi(z) = (z - a)^m g_0(z)$이고 $g_0(a) = c_m \ne 0$이다. $c_0 = 0$이므로 $m \ne 0$이고, $0 \le m$이므로 [[well-ordering-principle]]의 (Z5)에 의해 $0 < m$이다. [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 첫 문장에 의해 양의 정수 $m$은 자연수이다.

$G$의 각 점 $z$는 $z \in B$와 $z \in G - B$ 가운데 정확히 하나에 들므로, $z \in B$이면 $g(z) = g_0(z)$이고 $z \in G - B$이면 $g(z) = f(z)\bigl((z - a)^m\bigr)^{-1}$인 함수 $g : G \to \mathbb{C}$가 정해진다. 뒤의 경우 $z \ne a$이므로 준비 1에 의해 $(z - a)^m \ne 0$이다.

- $G$의 모든 $z$에서 $f(z) = (z - a)^m g(z)$이다. $z \in B$이면 준비 2에 의해 $f(z) = \varphi(z) = (z - a)^m g_0(z) = (z - a)^m g(z)$이고, $z \in G - B$이면 $g$의 정의에 의해 그렇다.
- $g(a) = g_0(a) = c_m \ne 0$이다.
- $g$는 정칙함수이다. $U_1 = B$와 $U_2 = G - \{a\}$를 둔다. $U_1$은 [[open-ball-is-open|열린 공은 열린집합]]의 (1)에 의해 열린집합이고, $g|_{U_1} = g_0|_B$는 $B \subseteq D$이므로 미분 (4)의 (i)에 의해 정칙함수이다. 법칙 (3)의 (iv)를 준비 1의 $P_m$에 쓰면 $\{z \in G : P_m(z) \ne 0\} = U_2$는 열린집합이고, $z$에서의 값이 $f(z)/P_m(z)$인 함수 $U_2 \to \mathbb{C}$는 정칙함수이다. $U_2$의 모든 $z$에서 위의 등식 $f(z) = (z - a)^m g(z)$의 양변에 $\bigl((z - a)^m\bigr)^{-1}$을 곱하면 $g(z) = f(z)/P_m(z)$이므로, $g|_{U_2}$는 그 정칙함수이다. $a \in U_1$이므로 $G = U_1 \cup U_2$이고, 미분 (4)의 (ii)에 의해 $g$는 정칙함수이다.

따라서 $m$과 $g$로 (나)가 성립하고, 이 $m$은 $c_m \ne 0$인 가장 작은 $m$, 곧 준비 2에 의해 $f^{(k)}(a) \ne 0$인 가장 작은 $k$이며, $g(a) = c_m = f^{(m)}(a)/m!$이다.

**단계 C ((나)이면 (2)가 성립하고 (가)는 성립하지 않는다).** (나)가 자연수 $m$과 함수 $g$로 성립한다고 하자. $g$는 $a$에서 미분가능하고 $g(a) \ne 0$이므로 법칙 (3)의 (i)에 의해 $B(a, r) \subseteq G$이고 $B(a, r)$에서 $g$가 $0$이 아닌 실수 $r > 0$이 있다. $0 < |z - a| < r$이면 $z \ne a$이므로 준비 1에 의해 $(z - a)^m \ne 0$이고 $g(z) \ne 0$이며, [[complex-field]]의 (1)에 의해 $\mathbb{C}^{\times}$는 곱셈으로 군이므로 $f(z) = (z - a)^m g(z) \ne 0$이다. 이것이 (2)이다.

(가)도 어떤 $r_1 > 0$으로 성립한다고 하자. [[order-properties-of-reals]]의 (1)의 (iv)에 의해 $r \le r_1$이거나 $r_1 \le r$이므로, 둘 가운데 작은 쪽을 $t$라 하면 $0 < t$이다. 같은 항목의 (8)에 의해 $0 < t/2 < t$이고, $z = a + t/2$로 두면 [[modulus-of-complex-number]]의 (5)에 의해 $|z - a| = t/2$이므로 $0 < |z - a| < r$이고 $z \in B(a, r_1)$이다. 그러면 (가)에 의해 $f(z) = 0$이고 위에 의해 $f(z) \ne 0$이어서 어긋난다. 따라서 (나)가 성립하면 (가)는 성립하지 않는다.

**단계 D ($m$과 $g$는 하나뿐이다).** 자연수 $m$, $q$와 정칙함수 $g$, $h : G \to \mathbb{C}$가 $g(a) \ne 0$, $h(a) \ne 0$이고 $G$의 모든 $z$에서 $(z - a)^m g(z) = f(z) = (z - a)^q h(z)$를 만족한다고 하자.

$m \ne q$라 가정하자. 두 쌍 $(m, g)$와 $(q, h)$ 가운데 지수가 작은 쪽을 $(p, u)$, 큰 쪽을 $(s, v)$라 하면 $p < s$이고 $u(a) \ne 0$이다. $s - p$는 양의 정수이므로 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 첫 문장에 의해 자연수이다. $z \in G - \{a\}$이면 거듭제곱 (3)의 (i)에 의해 $(z - a)^s = (z - a)^p (z - a)^{s - p}$이고, $(z - a)^p u(z) = (z - a)^p (z - a)^{s - p} v(z)$의 양변에 $\bigl((z - a)^p\bigr)^{-1}$을 곱하면 $u(z) = (z - a)^{s - p} v(z)$이다. $w = P_{s-p} v$는 법칙 (2)에 의해 정칙함수이고 $w(a) = 0 \cdot v(a) = 0$이다. $u$와 $w$는 $G - \{a\}$에서 같은 값을 가지므로 두 제한 $u|_{G - \{a\}}$와 $w|_{G - \{a\}}$는 같은 함수이고, 준비 1에 의해 이 함수는 $a$에서 $u(a)$로도, $w(a) = 0$으로도 수렴한다. 극한 (3)에 의해 $u(a) = 0$이고, 이것은 $u(a) \ne 0$과 어긋난다. 따라서 $m = q$이다.

$m = q$이면 $z \in G - \{a\}$에서 양변에 $\bigl((z - a)^m\bigr)^{-1}$을 곱해 $g(z) = h(z)$이다. 위와 같이 두 제한이 같은 함수이므로 그것이 $a$에서 $g(a)$로도, $h(a)$로도 수렴하고, 극한 (3)에 의해 $g(a) = h(a)$이다. 따라서 $g = h$이다.

**1의 증명.** $a$가 $f$의 영점이면 준비 2의 계수는 모두 $0$이거나 $0$이 아닌 것이 있으므로, 단계 A와 B에 의해 (가)나 (나)가 성립하고, 단계 C에 의해 둘이 함께 성립하지는 않는다. (나)가 성립할 때 $m$과 $g$가 하나씩뿐이라는 것은 단계 D이다.

**2의 증명.** 단계 C의 첫 문단이다.

**3의 증명.** (i) 모든 $k$에서 $f^{(k)}(a) = 0$이면 준비 2에 의해 모든 계수가 $0$이고 단계 A에 의해 (가)가 성립한다. 거꾸로 (가)가 성립하면 단계 C에 의해 (나)는 성립하지 않으므로, 단계 B에 의해 $0$이 아닌 계수는 없다. 곧 모든 $k$에서 $c_k = 0$이고 준비 2에 의해 $f^{(k)}(a) = 0$이다.

(ii) (나)가 자연수 $m$과 함수 $g$로 성립하면 단계 C에 의해 (가)는 성립하지 않으므로, 단계 A에 의해 $0$이 아닌 계수가 있다. $f^{(k)}(a) \ne 0$인 가장 작은 $k$를 $m_0$이라 하면, 단계 B에 의해 자연수 $m_0$과 그 단계에서 만든 정칙함수(여기서는 $g_1$이라 쓴다)로 (나)가 성립하고 $g_1(a) = f^{(m_0)}(a)/m_0!$이다. 단계 D에 의해 $m = m_0$이고 $g = g_1$이다. $m_0$이 가장 작은 것이므로 $0 \le k < m$에서 $f^{(k)}(a) = 0$이다.

(iii) 고계 (1)에 의해 $f^{(0)}(a) = f(a) = 0$이고 $f^{(1)}(a) = f'(a) \ne 0$이다. (i)에 의해 (가)는 성립하지 않으므로 (1)에 의해 (나)가 성립하고, (ii)에 의해 중복도는 $f^{(k)}(a) \ne 0$인 가장 작은 $k$, 곧 $1$이다.

**4의 증명.** $f(a) \ne 0$이라 가정하자. $f$는 $a$에서 미분가능하므로 법칙 (3)의 (i)에 의해 $B(a, r) \subseteq G$이고 $B(a, r)$에서 $f$가 $0$이 아닌 실수 $r > 0$이 있다. 그러면 $z \in Z$이고 $|z - a| < r$인 $z$는 없으므로, 극한 (1)의 (i)에 의해 $a$는 $Z$의 집적점이 아니다. 이것은 가정과 어긋나므로 $f(a) = 0$이고, $a$는 $f$의 영점이다.

(나)가 성립한다고 가정하자. (2)의 $r > 0$에 대하여 $z \in Z$, $z \ne a$, $|z - a| < r$이면 $0 < |z - a| < r$이고 $f(z) = 0$이어서 (2)와 어긋나므로 그런 $z$는 없다. 극한 (1)의 (i)에 의해 $a$는 $Z$의 집적점이 아니고, 이것도 가정과 어긋난다. 따라서 (1)에 의해 (가)가 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[복소 다항함수 $(z - i)^2(z + 1)$의 영점]
$z$에서의 값이 $f(z) = (z - i)^2 (z + 1)$인 함수 $f : \mathbb{C} \to \mathbb{C}$는 [[complex-derivative|복소 미분]]의 (5)에 의해 $z - i$와 $z + 1$의 함수가 정함수이므로 [[complex-derivative-rules|복소 미분의 법칙]]의 (2)를 두 번 써서 정함수입니다. $f(i) = 0 \cdot (i + 1) = 0$이므로 $i$는 영점이고, $g(z) = z + 1$로 두면 $g$는 정함수이고 $g(i) = 1 + i \ne 0$이므로 (나)가 $m = 2$로 성립합니다. (1)에 의해 $i$의 중복도는 $2$입니다. 마찬가지로 $f(-1) = 0$이고 $h(z) = (z - i)^2$로 두면 $f(z) = (z - (-1))^1 h(z)$이며 $h(-1) = (-1 - i)^2 = 2i \ne 0$이므로 $-1$의 중복도는 $1$입니다.

(3)의 (ii)로 확인하면, 법칙 (2)에 의해 $f'(z) = 2(z - i)(z + 1) + (z - i)^2$이어서 $f'(i) = 0$이고, $f'(-1) = (-1 - i)^2 = 2i \ne 0$입니다. $f'$을 한 번 더 미분하면 $f''(z) = 2(z + 1) + 2(z - i) + 2(z - i)$이므로 $f''(i) = 2(i + 1) = 2 + 2i \ne 0$이고, $g(i) = f''(i)/2! = 1 + i$와 맞습니다.
:::

:::example[$\exp(z) - 1 - z$의 영점 $0$]
$f(z) = \exp(z) - 1 - z$로 정한 함수 $f : \mathbb{C} \to \mathbb{C}$는 정함수이고, [[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (1), [[complex-derivative|복소 미분]]의 (5), [[complex-derivative-rules|복소 미분의 법칙]]의 (1)에 의해 $f'(z) = \exp(z) - 1$, $f''(z) = \exp(z)$입니다. $\exp(0) = 1$([[complex-exponential-function|복소 지수함수]]의 (3))이므로 $f(0) = 0$, $f'(0) = 0$, $f''(0) = 1 \ne 0$입니다. (3)의 (i)에 의해 (가)는 성립하지 않고, (1)과 (3)의 (ii)에 의해 영점 $0$의 중복도는 $2$이며 $g(0) = 1/2! = 1/2$입니다.
:::

:::counterexample[실수부를 값으로 하는 함수의 영점 $0$]
$z$에서의 값이 $\operatorname{Re} z$인 함수 $u : \mathbb{C} \to \mathbb{C}$를 봅시다. $u(0) = 0$이고 $u(1) = 1$이어서 $u$는 상수가 아니고, 모든 값이 실수인 복소수이므로 [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (1)의 (ii)와 (5)의 (i)에 의해 정칙함수가 아닙니다. 이 $u$의 영점 $0$에서는 (1)의 (가)도, (2)의 결론도 성립하지 않습니다. 실수 $r > 0$마다 $z = r/2$는 $B(0, r)$에 있고 [[complex-field]]의 (2)의 (ii)에 의해 $u(z) = r/2 \ne 0$이므로 (가)가 아니고, $z = (r/2)\,i$는 $0 < |z| < r$이고 $u(z) = 0$이므로 (2)의 결론도 성립하지 않습니다. 이 항목의 결론은 $f$가 정칙함수라는 가정에 기댑니다.
:::

## 확인 질문

:::check[$z^2 - 2z + 2$의 영점 $1 + i$의 중복도는?]
$f(z) = z^2 - 2z + 2$이면 $f(1 + i) = (1 + i)^2 - 2(1 + i) + 2 = 2i - 2 - 2i + 2 = 0$이므로 $1 + i$는 영점입니다. [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (iii)에 의해 $f'(z) = 2z - 2$이고 $f'(1 + i) = 2i \ne 0$이므로, (3)의 (iii)에 의해 중복도는 $1$입니다.
:::

:::check[정함수 $f$의 영점 $0$의 중복도가 $2$이면 $z f(z)$의 영점 $0$의 중복도는?]
$3$입니다. (1)의 (나)에 의해 $f(z) = z^2 g(z)$이고 $g(0) \ne 0$인 정함수 $g$가 있습니다. [[power-of-a-complex-number]]의 (1)에 의해 $z \cdot z^2 = z^3$이므로 모든 $z$에서 $z f(z) = z^3 g(z)$이고, $z f(z)$는 [[complex-derivative-rules|복소 미분의 법칙]]의 (2)에 의해 정함수입니다. 따라서 $z f(z)$의 영점 $0$에서 (나)가 $m = 3$과 같은 $g$로 성립하고, (1)의 유일성에 의해 중복도는 $3$입니다.
:::
