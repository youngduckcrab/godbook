---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "23.3절, Lemma 23.28 의 증명 (p.304) — 문제 '특성다항식이 $2 - x^3$인 행렬'의 (2)와 같은 결론(출처는 xⁿ − a 의 근이 ⁿ√a, ωⁿ√a, …, ω^{n−1}ⁿ√a(ω 는 1 의 원시 n제곱근)라고 적는다)"
added: 2026-11-26
---

:::exercise[$z^2 - (3 + 2i)z + (1 + 3i)$의 근]
$p$를 계수가 $1 + 3i$, $-3 - 2i$, $1$인 복소 다항함수, 곧 모든 복소수 $z$에서 $p(z) = z^2 - (3 + 2i)z + (1 + 3i)$인 함수라 하자.

1. [[complex-arithmetic-examples|복소수 계산의 예]]의 (4)로 $p$의 근을 모두 구하라.
2. 모든 $z$에서 $p(z) = \bigl(z - (2 + i)\bigr)\bigl(z - (1 + i)\bigr)$임을 보이고, 두 근의 합과 곱을 [[complex-factor-theorem|복소 인수 정리와 인수분해]]의 (6)의 (ii)의 식과 비교하라.
3. $p(2 - i)$를 구하여 $2 + i$의 켤레가 $p$의 근이 아님을 보이고, 이것이 [[roots-of-real-polynomial-functions|실계수 다항함수의 복소수 근]]의 (2)와 어긋나지 않는 까닭을 말하라.
:::

:::solution
복소수의 곱은 [[complex-number|복소수]]의 (2)로 계산하고, 체의 계산은 [[complex-field|복소수체]]의 (1)에 의한다.

**(1)** 복소수 계산의 예의 (4)를 $\alpha = 1$, $\beta = -3 - 2i$, $\gamma = 1 + 3i$에 쓴다. $\beta\beta = (3 + 2i)(3 + 2i)$의 실수부는 $9 - 4 = 5$, 허수부는 $6 + 6 = 12$이므로
$$
\begin{aligned}
D &= \beta\beta - 4\alpha\gamma \\
&= (5 + 12i) - (4 + 12i) = 1
\end{aligned}
$$
이다. $u = 1$이면 $uu = D$이므로, $p(z) = 0$인 복소수 $z$는 정확히 $(3 + 2i + 1)/2 = 2 + i$와 $(3 + 2i - 1)/2 = 1 + i$이다. $D \ne 0$이므로 두 근은 다르다.

**(2)** $q$를 계수가 $e_0 = -1 - i$, $e_1 = 1$인 복소 다항함수, 곧 $q(z) = z - (1 + i)$라 하고 $c = 2 + i$라 하자. [[complex-polynomial-function|복소 다항함수]]의 (3)의 (ii)에 의해 $z$에서의 값이 $(z - c)\,q(z)$인 함수는 계수가
$$
\begin{aligned}
b_0 &= -c\,e_0 = (2 + i)(1 + i) \\
&= 1 + 3i, \\
b_1 &= e_0 - c\,e_1 \\
&= -1 - i - 2 - i \\
&= -3 - 2i, \\
b_2 &= e_1 = 1
\end{aligned}
$$
인 복소 다항함수이다. 이 계수는 $p$의 계수와 같으므로 모든 $z$에서 $p(z) = \bigl(z - (2 + i)\bigr)\bigl(z - (1 + i)\bigr)$이다.

[[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]]의 (3)의 (i)에 의해 끝 계수 $1$이 $0$이 아니므로 $\deg p = 2$이고 최고차계수는 $1$이다. 열 $c_1 = 2 + i$, $c_2 = 1 + i$에 대하여 복소 인수 정리와 인수분해의 (1)의 (i)에 의해 $(z - c_1)(z - c_2)$는 이 열의 곱이므로, 이 열은 그 항목의 (4)의 식을 $a = 1$로 만족한다. 근의 합과 곱은
$$
\begin{aligned}
c_1 + c_2 &= 3 + 2i \\
&= -(-3 - 2i) \cdot 1^{-1}, \\
c_1 c_2 &= 1 + 3i \\
&= (-1)^2 (1 + 3i) \cdot 1^{-1}
\end{aligned}
$$
이어서 (6)의 (ii)의 식 $-a_1 a_2^{-1}$, $(-1)^2 a_0 a_2^{-1}$과 맞는다.

**(3)** (2)의 식에 의해
$$
\begin{aligned}
p(2 - i) &= (-2i)(1 - 2i) \\
&= -2i + 4ii = -4 - 2i
\end{aligned}
$$
이고, [[complex-field|복소수체]]의 (4)에 의해 이것은 $0 = 0 + 0i$가 아니다. [[complex-conjugate|켤레복소수]]의 (1)에 의해 $\overline{2 + i} = 2 - i$이므로 근의 켤레가 근이 아니다.

실계수 다항함수의 복소수 근의 (2)는 실계수 다항함수 $f$의 계수로 만든 복소 다항함수에 대한 것이고, 그런 함수의 계수는 복소 다항함수의 (7)의 (iii)에 의해 모두 실수인 복소수이다. 복소 다항함수의 증가와 계수의 유일성의 (2)의 (ii)에 의해 복소 다항함수의 $z^1$의 계수는 표현에 상관없이 정해지는데, $p$의 $z^1$의 계수 $-3 - 2i$는 허수부가 $-2 \ne 0$이므로 실수인 복소수가 아니다. 따라서 $p$는 그런 함수가 아니고, (2)를 쓸 수 없다.
:::

:::exercise[켤레를 취한 계수의 복소 다항함수]
$p$를 표현 $p(z) = \sum_{k=0}^{d} a_k z^k$를 갖는 복소 다항함수라 하고, $z$에서의 값이 $\overline{p(\overline{z})}$인 함수 $q : \mathbb{C} \to \mathbb{C}$를 생각하자.

1. $q$가 계수가 $\overline{a_0}, \dots, \overline{a_d}$인 복소 다항함수임을 보이고, $p$가 영함수가 아니면 $q$도 영함수가 아니고 $\deg q = \deg p$임을 보여라.
2. 복소수 $c$가 $p$의 근인 것은 정확히 $\overline{c}$가 $q$의 근일 때임을 보여라.
3. 문제 1의 $p$에 대하여 $q$의 계수와 근을 모두 구하라.
:::

:::solution
아래에서 "켤레"는 [[complex-conjugate|켤레복소수]], "증가와 계수"는 [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]]의 번호이다.

**(1)** [[complex-polynomial-function|복소 다항함수]]의 (6)을 점 $\overline{z}$에 쓰고 켤레의 (1)의 $\overline{\overline{z}} = z$를 쓰면, 모든 $z$에서
$$
q(z) = \overline{p(\overline{z})} = \sum_{k=0}^{d} \overline{a_k}\, z^k
$$
이다. 따라서 $q$는 계수가 $\overline{a_0}, \dots, \overline{a_d}$인 복소 다항함수이다.

$p$가 영함수가 아니라 하자. 증가와 계수의 (3)의 (i)에 의해 $p$는 끝 번호가 $e = \deg p$이고 끝 계수 $a_e$가 최고차계수인 표현 $p(z) = \sum_{k=0}^{e} a_k z^k$를 갖고, 최고차계수는 $0$이 아니다. 이 표현에 위의 계산을 쓰면 $q$는 끝 번호가 $e$이고 끝 계수가 $\overline{a_e}$인 표현을 갖는다. 켤레의 (2)에 의해 $\overline{a_e} \ne 0$이므로, 증가와 계수의 (2)의 (iii)에 의해 $q$는 영함수가 아니고, (3)의 (i)에 의해 $\deg q = e = \deg p$이다.

**(2)** 켤레의 (1)에 의해 $q(\overline{c}) = \overline{p(\overline{\overline{c}})} = \overline{p(c)}$이다. $p(c) = 0$이면 켤레의 (4)에 의해 $\overline{p(c)} = \overline{0} = 0$이고, 거꾸로 $\overline{p(c)} = 0$이면 켤레의 (1)과 (4)에 의해 $p(c) = \overline{\overline{p(c)}} = \overline{0} = 0$이다. 따라서 $p(c) = 0$인 것은 정확히 $q(\overline{c}) = 0$일 때이다.

**(3)** 켤레의 (1)의 $\overline{a + bi} = a - bi$에 의해 $q$의 계수는 $\overline{1 + 3i} = 1 - 3i$, $\overline{-3 - 2i} = -3 + 2i$, $\overline{1} = 1$이다. 곧 $q(z) = z^2 - (3 - 2i)z + (1 - 3i)$이다.

복소수 $w$가 $q$의 근이라 하자. $w = \overline{\overline{w}}$이므로 (2)를 $c = \overline{w}$에 쓰면 $\overline{w}$는 $p$의 근이고, 문제 1의 (1)에 의해 $\overline{w}$는 $2 + i$이거나 $1 + i$이므로 $w$는 $2 - i$이거나 $1 - i$이다. 거꾸로 (2)에 의해 $\overline{2 + i} = 2 - i$와 $\overline{1 + i} = 1 - i$는 $q$의 근이다. 따라서 $q$의 근은 정확히 $2 - i$와 $1 - i$이다.
:::

:::exercise[주기가 있는 복소 다항함수]
$\omega$를 $0$이 아닌 복소수라 하자.

1. 복소 다항함수 $p$가 모든 복소수 $z$에서 $p(z + \omega) = p(z)$를 만족하면 $p$는 상수함수임을 보여라.
2. 복소 지수함수 $\exp : \mathbb{C} \to \mathbb{C}$는 복소 다항함수가 아님을 보여라.
3. $\omega = 0$이면 모든 함수 $\mathbb{C} \to \mathbb{C}$가 (1)의 조건을 만족함을 보이고, 항등함수 $i_{\mathbb{C}}$가 상수함수가 아닌 복소 다항함수임을 보여라. 따라서 (1)에서 $\omega \ne 0$을 뺄 수 없다.
:::

:::solution
아래에서 "다항함수"는 [[complex-polynomial-function|복소 다항함수]], "증가와 계수"는 [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]], "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]]의 번호이다. 체의 계산은 [[complex-field|복소수체]]의 (1)에 의하고, 자연수 $n$에 대하여 $n\omega$는 $\iota(n)\omega$이다.

**(1)** 먼저 모든 자연수 $n$에서 $p(n\omega) = p(0)$임을 [[mathematical-induction|수학적 귀납법]]으로 보인다. $n = 1$이면 $1\omega = 0 + \omega$이므로 $p(\omega) = p(0 + \omega) = p(0)$이다. $p(k\omega) = p(0)$이면, 복소수체의 (2)에 의해 $\iota(k + 1) = \iota(k) + 1$이므로 $(k + 1)\omega = k\omega + \omega$이고 $p((k + 1)\omega) = p(k\omega) = p(0)$이다.

$z$에서의 값이 $p(z) - p(0)$인 함수를 $h$라 하자. 다항함수의 (1)의 (i)에 의해 값이 $p(0)$인 상수함수는 복소 다항함수이고, 같은 (1)의 (ii), (iii)에 의해 $h$는 복소 다항함수이다. 모든 자연수 $n$에서 $h(n\omega) = 0$이다.

$p$가 상수함수가 아니라고 하자. 모든 $z$, $z'$에서 $h(z) - h(z') = p(z) - p(z')$이므로 $h$도 상수함수가 아니고, 증가와 계수의 (3)의 (ii)에 의해 $h$는 영함수가 아니며 $\deg h \ne 0$, 곧 [[prime-number|소수]] 항목의 (Z1)에 의해 $\deg h \ge 1$이다. 같은 (3)의 (i)에 의해 $h$는 끝 번호가 $\deg h$이고 끝 계수가 $0$이 아닌 표현을 가지므로, 증가와 계수의 (1)의 (iii)을 $M = 1$에 쓰면 $|z| \ge R$인 모든 $z$에서 $|h(z)| \ge 1$인 실수 $R$이 있다. 절댓값의 (1)에 의해 $0 < |\omega|$이므로 [[archimedean-property|아르키메데스 성질]]의 (2)에 의해 $R < n|\omega|$인 자연수 $n$이 있다. 절댓값의 (5)와 $0 < n$에 의해 $|n\omega| = |n|\,|\omega| = n|\omega|$이므로 $|n\omega| \ge R$이고, 따라서 $|h(n\omega)| \ge 1$이다. 그런데 $h(n\omega) = 0$이고 절댓값의 (1)에 의해 $|0| = 0 < 1$이므로 어긋난다. 따라서 $p$는 상수함수이다.

**(2)** [[definition-of-pi|원주율]]의 (4)에 의해 $0 < \pi$이므로 $2\pi \ne 0$이고, 복소수체의 (4)에 의해 $2\pi i = 0 + (2\pi)i$는 $0 = 0 + 0i$가 아니다. [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (2)에 의해 모든 $z$에서 $\exp(z + 2\pi i) = \exp(z)$이다. $\exp$가 복소 다항함수라면 (1)을 $\omega = 2\pi i$에 써서 $\exp$는 상수함수이다. 그런데 [[complex-exponential-function|복소 지수함수]]의 (3)에 의해 $\exp(0) = 1$이고 주기성의 (1)에 의해 $\exp(i\pi) = -1$이며, 두 수는 실수부가 $1$과 $-1$로 달라 같지 않다([[complex-number|복소수]]의 (1)). 따라서 $\exp$는 복소 다항함수가 아니다.

**(3)** $\omega = 0$이면 복소수체의 (1)에 의해 모든 $z$에서 $z + 0 = z$이므로 모든 함수 $f$에서 $f(z + 0) = f(z)$이다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (1)에 의해 $z^0 = 1$, $z^1 = z$이므로 계수가 $0$, $1$인 복소 다항함수는 $z$에서의 값이 $0 + 1 \cdot z = z$인 함수, 곧 $i_{\mathbb{C}}$이다. $i_{\mathbb{C}}(0) = 0 \ne 1 = i_{\mathbb{C}}(1)$이므로 상수함수가 아니다.
:::

:::exercise[상수가 아닌 복소 다항함수의 값과 작은 값을 갖는 점]
$p$를 상수함수가 아닌 복소 다항함수라 하자.

1. 모든 복소수 $w$에 대하여 $p(z) = w$인 복소수 $z$가 있음을 보여라. 곧 $p : \mathbb{C} \to \mathbb{C}$는 전사이다.
2. $K = \{z \in \mathbb{C} : |p(z)| \le 1\}$이 공집합이 아닌 $\mathbb{C}$의 콤팩트 부분집합임을 보여라.
3. 복소 지수함수에서는 (1)과 (2)의 결론이 모두 성립하지 않음을 보여라. 곧 $0$은 $\exp$의 값이 아니고, $\{z \in \mathbb{C} : |\exp(z)| \le 1\}$은 $\mathbb{C}$의 콤팩트 부분집합이 아니다.
:::

:::solution
아래에서 "다항함수"는 [[complex-polynomial-function|복소 다항함수]], "증가와 계수"는 [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]], "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]]의 번호이다.

**(1)** $w$를 복소수라 하고, $z$에서의 값이 $p(z) - w$인 함수를 $h$라 하자. 다항함수의 (1)의 (i)–(iii)에 의해 $h$는 복소 다항함수이고, 모든 $z$, $z'$에서 $h(z) - h(z') = p(z) - p(z')$이므로 $h$는 상수함수가 아니다. 증가와 계수의 (3)의 (ii)에 의해 $h$는 영함수가 아니고 $\deg h \ge 1$이다([[prime-number|소수]] 항목의 (Z1)). [[fundamental-theorem-of-algebra|대수학의 기본정리]]의 (1)에 의해 $h(z_0) = 0$인 $z_0$이 있고, $p(z_0) = w$이다.

**(2)** *공집합이 아니다.* (1)을 $w = 0$에 쓰면 $p(z_0) = 0$인 $z_0$이 있고, 절댓값의 (1)에 의해 $|p(z_0)| = 0 \le 1$이므로 $z_0 \in K$이다.

*유계이다.* 증가와 계수의 (3)의 (ii)에 의해 $p$는 영함수가 아니고 $\deg p \ge 1$이며, (3)의 (i)에 의해 끝 번호가 $\deg p$이고 끝 계수가 $0$이 아닌 표현을 갖는다. 증가와 계수의 (1)의 (iii)을 $M = 2$에 쓰면 $|z| \ge R$인 모든 $z$에서 $|p(z)| \ge 2$인 실수 $R$이 있다. $z \in K$이고 $|z| \ge R$이면 $2 \le |p(z)| \le 1$이 되어 어긋나므로, $K$의 모든 원소 $z$에서 $|z| < R$, 곧 $|z| \le R$이다.

*닫혀 있다.* [[open-set-in-metric-space|거리공간의 열린집합]]의 정의에 의해 $\mathbb{C} - K$가 $(\mathbb{C}, d)$에서 열린집합임을 보이면 된다. $z_1 \in \mathbb{C} - K$이면 $|p(z_1)| > 1$이고, $\varepsilon = |p(z_1)| - 1$로 두면 $0 < \varepsilon$이다. 다항함수의 (5)에 의해 $p$는 연속이므로 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (6)의 (i)에 의해 $|z - z_1| < \delta$인 모든 $z$에서 $|p(z) - p(z_1)| < \varepsilon$인 실수 $\delta > 0$이 있다. 그런 $z$에서 [[complex-triangle-inequality|복소수의 삼각부등식]]의 (4)와 [[absolute-value|실수의 절댓값]]의 (6)에 의해
$$
\begin{aligned}
|p(z_1)| - |p(z)| &\le |p(z_1) - p(z)| \\
&< |p(z_1)| - 1
\end{aligned}
$$
이므로($|p(z_1) - p(z)| = |p(z) - p(z_1)|$는 절댓값의 (2)) $1 < |p(z)|$이고 $z \notin K$이다. [[complex-plane-as-metric-space|복소평면의 거리]]의 (3)에 의해 $B(z_1, \delta) = \{z : |z - z_1| < \delta\}$이므로 $B(z_1, \delta) \subseteq \mathbb{C} - K$이다. 따라서 $\mathbb{C} - K$는 열린집합이고 $K$는 닫힌집합이다.

[[compact-subsets-of-complex-plane|복소평면의 콤팩트 집합]]의 (1)(하이네–보렐 정리)에 의해 $K$는 $\mathbb{C}$의 콤팩트 부분집합이다.

**(3)** [[addition-law-of-complex-exponential|복소 지수함수의 덧셈 법칙]]의 (2)에 의해 $\exp$의 값은 모두 $0$이 아니므로 $0$은 $\exp$의 값이 아니다.

$L = \{z \in \mathbb{C} : |\exp(z)| \le 1\}$이라 하자. 덧셈 법칙의 (6)에 의해 $|\exp(z)| = \exp(\operatorname{Re} z)$이다. 자연수 $n$에서 $z = \iota(-n)$이면 [[complex-field|복소수체]]의 (2)의 (ii)에 의해 $\operatorname{Re} z = -n < 0$이고, [[exponential-function|지수함수]]의 (2)와 (1)에 의해 $\exp(-n) < \exp(0) = 1$이므로 $\iota(-n) \in L$이다. 절댓값의 (5)와 실수의 절댓값의 (1)에 의해 $|\iota(-n)| = |-n| = n$이다. $L$의 모든 원소 $z$에서 $|z| \le M$인 실수 $M$이 있다면, [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $M < n$인 자연수 $n$을 잡아 $\iota(-n) \in L$이고 $|\iota(-n)| = n > M$이 되어 어긋난다. 따라서 $L$은 유계가 아니고, 하이네–보렐 정리에 의해 $\mathbb{C}$의 콤팩트 부분집합이 아니다. (문제 3의 (2)에 의해 $\exp$는 복소 다항함수가 아니므로 (1), (2)와 어긋나지 않는다.)
:::

:::exercise[특성다항식이 $2 - x^3$인 행렬]
$$
A = \begin{pmatrix} 0 & 0 & 2 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}
$$
이라 하고, $r = \sqrt[3]{2}$([[nth-root|n제곱근]])로 두자. $\omega_3$은 [[roots-of-unity|1 의 n제곱근]]의 것이고, $P_A$와 "$A$의 특성다항식의 복소수 근"은 [[complex-roots-of-characteristic-polynomial|특성다항식의 복소수 근]]의 것이다.

1. 모든 실수 $x$에서 $p_A(x) = 2 - x^3$임을 보이고, $\operatorname{tr} A$와 $\det A$를 구하라.
2. 모든 복소수 $z$에서 $P_A(z) = 2 - z^3$임을 보이고, $A$의 특성다항식의 복소수 근이 정확히 $r$, $r\omega_3$, $r\omega_3^2$임을 보여라.
3. 모든 복소수 $z$에서 $P_A(z) = (-1)(z - r)(z - r\omega_3)(z - r\omega_3^2)$임을 보이고, 세 근의 합이 $\iota(\operatorname{tr} A)$, 곱이 $\iota(\det A)$임을 확인하라.
4. $A$의 고윳값이 정확히 $r$ 하나임을 보여라.
:::

:::solution
아래에서 "1 의 n제곱근"은 [[roots-of-unity|1 의 n제곱근]], "복소수 근"은 [[complex-roots-of-characteristic-polynomial|특성다항식의 복소수 근]]의 번호이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]], 복소수의 계산은 [[complex-field|복소수체]]의 (1)에 의한다. $\omega = \omega_3$으로 쓴다.

**(1)** [[matrix|행렬]]의 (1)의 성분마다의 연산과 단위행렬 $I_3$의 성분(같은 항목의 (6))에 의해 실수 $x$에서
$$
A - xI_3 = \begin{pmatrix} -x & 0 & 2 \\ 1 & -x & 0 \\ 0 & 1 & -x \end{pmatrix}
$$
이다. [[determinant|행렬식]]의 (4)의 $3 \times 3$ 식에 의해
$$
\begin{aligned}
&\det(A - xI_3) \\
&\quad = (-x)\bigl((-x)(-x) - 1 \cdot 0\bigr) \\
&\qquad - 1 \cdot \bigl(0 \cdot (-x) - 1 \cdot 2\bigr) \\
&\qquad + 0 \cdot \bigl(0 \cdot 0 - (-x) \cdot 2\bigr) \\
&\quad = -x^3 + 2
\end{aligned}
$$
이므로, [[characteristic-polynomial|특성다항식]]의 정의에 의해 $p_A(x) = 2 - x^3$이다. [[trace|대각합]]의 정의에 의해 $\operatorname{tr} A = 0 + 0 + 0 = 0$이고, 특성다항식의 (2)에 의해 $\det A = p_A(0) = 2$이다.

**(2)** [[polynomial-function|다항함수]]의 (3)에 의해 $f = 2t^0 + 0t^1 + 0t^2 + (-1)t^3$의 $x$에서의 값은 $2 - x^3$이므로, 함수의 같음에 의해 $p_A = f$이다. [[complex-polynomial-function|복소 다항함수]]의 (7)의 (iii)에 의해 $P_A$는 계수가 $\iota(2)$, $0$, $0$, $\iota(-1)$인 복소 다항함수이고, 모든 $z$에서 $P_A(z) = 2 - z^3$이다.

따라서 $P_A(z) = 0$인 것은 정확히 $z^3 = 2$일 때이다. [[polar-form|극형식과 편각]]의 (6)에 의해 $0 \in 2\pi\mathbb{Z} = \arg 2$이고, [[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|2| = 2$이다. [[nth-roots-of-complex-numbers|복소수의 n제곱근]]의 (1)을 $w = 2$, $\varphi = 0$, $n = 3$에 쓰면 $z^3 = 2$인 $z$는 정확히 $r\exp(2\pi i k/3)$, $k = 0, 1, 2$이다. 1 의 n제곱근의 (2)에 의해 $\exp(2\pi i k/3) = \omega^k$이고 $\omega^0 = 1$이므로, 그 셋은 $r$, $r\omega$, $r\omega^2$이다.

**(3)** 1 의 n제곱근의 (6)을 $n = 3$에 쓰면 $1 + \omega + \omega^2 = 0$이고([[complex-finite-sum|복소수의 유한 합]]의 (8)로 합을 풀어 쓴 것), 1 의 n제곱근의 (1)에 의해 $\omega \in \mu_3$이므로 $\omega^3 = 1$이다. 또 [[nth-root|실수의 n제곱근]]의 정의와 [[power-of-a-complex-number|복소수의 거듭제곱]]의 (5)에 의해 복소수로서도 $r^3 = 2$이다. 복소수의 계산으로
$$
\begin{aligned}
&(z - r\omega)(z - r\omega^2) \\
&\quad = z^2 - r(\omega + \omega^2)z + r^2\omega^3 \\
&\quad = z^2 + rz + r^2
\end{aligned}
$$
이고
$$
\begin{aligned}
&(z - r)(z^2 + rz + r^2) \\
&\quad = z^3 + rz^2 + r^2 z \\
&\qquad - rz^2 - r^2 z - r^3 \\
&\quad = z^3 - 2
\end{aligned}
$$
이다. [[complex-factor-theorem|복소 인수 정리와 인수분해]]의 (1)의 (i)에 의해 열 $z - r$, $z - r\omega$, $z - r\omega^2$의 곱은 $\bigl((z - r)(z - r\omega)\bigr)(z - r\omega^2)$이고, 곱셈의 결합법칙으로 이것은 위의 $z^3 - 2$이다. 따라서 $(-1)(z - r)(z - r\omega)(z - r\omega^2) = 2 - z^3 = P_A(z)$이다.

세 근의 합은 $r + r\omega + r\omega^2 = r(1 + \omega + \omega^2) = 0 = \iota(\operatorname{tr} A)$이고, 곱은 $r \cdot r\omega \cdot r\omega^2 = r^3\omega^3 = 2 \cdot 1 = \iota(\det A)$이다. 이것은 복소수 근의 (3)과 맞는다.

**(4)** 복소수 근의 (4)에 의해 실수 $\lambda$가 $A$의 고윳값인 것은 정확히 $\iota(\lambda)$가 $r$, $r\omega$, $r\omega^2$ 가운데 하나일 때이다. [[cosine-and-sine|코사인과 사인]]의 정의와 1 의 n제곱근의 (2)에 의해 $\operatorname{Im} \omega = \sin(2\pi/3)$이고 $\operatorname{Im}(\omega^2) = \sin(4\pi/3)$이다. [[trigonometric-addition-formulas|삼각함수의 덧셈정리]]의 (3)과 [[trigonometric-values-and-pi-estimates|삼각함수의 값과 π 의 어림]]의 (2)에 의해 $\sin(2\pi/3) = 2\sin(\pi/3)\cos(\pi/3) = 2 \cdot \frac{\sqrt{3}}{2} \cdot \frac{1}{2} = \frac{\sqrt{3}}{2}$이고, [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (2)에 의해 $\sin(4\pi/3) = \sin(\pi/3 + \pi) = -\frac{\sqrt{3}}{2}$이다. 복소수체의 (2)의 (ii)에 의해 $\operatorname{Im}(r\omega) = r\frac{\sqrt{3}}{2}$이고 $\operatorname{Im}(r\omega^2) = -r\frac{\sqrt{3}}{2}$이며, 실수의 n제곱근의 (1)에 의해 $0 < r$이고 [[square-root-exists|제곱근]]의 (1)에 의해 $0 < \sqrt{3}$이므로, [[order-properties-of-reals|실수의 순서의 성질]]의 (4)의 (i)에 의해 둘 다 $0$이 아니다. 한편 $\operatorname{Im} \iota(\lambda) = 0$이다. 따라서 $\iota(\lambda) = r = \iota(r)$이어야 하고, $\iota$가 단사이므로(복소수체의 (2)) $\lambda = r$이다. 거꾸로 $\iota(r)$은 (2)에 의해 복소수 근이므로 $r$은 고윳값이다.

실제로 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $A(x_1, x_2, x_3) = (2x_3, x_1, x_2)$이므로, $v = (r^2, r, 1) \ne 0$에서 $Av = (2, r^2, r) = (r^3, r^2, r) = rv$이다.
:::

:::exercise[증가의 어림에서 $R_0$을 $1$로 바꾸면 틀리는 예]
$p$를 계수가 $-4$, $0$, $1$인 복소 다항함수, 곧 $p(z) = z^2 - 4$라 하자. $C$와 $R_0$은 [[growth-of-complex-polynomial|복소 다항함수의 증가와 계수의 유일성]]의 (1)의 것이다.

1. 이 표현에서 $C$와 $R_0$을 구하고, $z = 8$에서 그 항목의 (1)의 (ii)의 부등식 $|p(z)| \ge \frac{1}{2}|a_2|\,|z|^2$을 확인하라.
2. $z = 2$는 $|z| \ge 1$이지만 $|p(2)| < \frac{1}{2}|a_2|\,|2|^2$임을 보여라. 따라서 (1)의 (ii)에서 $R_0$을 $1$로 바꾸면 거짓이 된다.
3. 절댓값이 $2$인 $z = 2i$에서는 같은 부등식이 성립함을 보여라. 곧 이 부등식이 성립하는지는 $|z|$만으로 정해지지 않는다.
:::

:::solution
아래에서 "절댓값"은 [[modulus-of-complex-number|복소수의 절댓값]]의 번호이다. 이 표현에서 $d = 2$, $a_0 = -4$, $a_1 = 0$, $a_2 = 1$이다.

**(1)** 절댓값의 (5)에 의해 $|-4| = 4$, $|0| = 0$이므로 $C = |a_0| + |a_1| = 4$이고, $|a_2| = 1$이므로 $R_0 = \max\{1,\ 2 \cdot 4 \cdot 1^{-1}\} = \max\{1, 8\} = 8$이다([[absolute-value|실수의 절댓값]] 항목의 최대의 정의). $p(8) = 64 - 4 = 60$이고 $|p(8)| = 60$이며, $\frac{1}{2} \cdot 1 \cdot 8^2 = 32$이다. $32 \le 60$이므로 부등식이 성립한다.

**(2)** 절댓값의 (5)에 의해 $|2| = 2 \ge 1$이다. $p(2) = 4 - 4 = 0$이므로 절댓값의 (1)에 의해 $|p(2)| = 0$이고, $\frac{1}{2} \cdot 1 \cdot 2^2 = 2$이다. $0 < 2$이므로 $|p(2)| \ge 2$는 성립하지 않는다. 같은 항목의 (1)의 (i)은 $|z| \ge 1$에서 성립하지만, $z = 2$에서 그 오른쪽은 $2(1 \cdot 2 - 4) = -4$여서 $|p(2)| = 0 \ge -4$라는 것만 말한다.

**(3)** [[complex-field|복소수체]]의 (5)에 의해 $(2i)^2 = 4ii = -4$이므로 $p(2i) = -8$이고, 절댓값의 (5)에 의해 $|p(2i)| = 8$이다. 절댓값의 (5)의 $|i| = 1$과 (3)에 의해 $|2i| = 2$이고, $8 \ge \frac{1}{2} \cdot 1 \cdot 2^2 = 2$이다.
:::
