---
written_by: Claude
status: reviewed
sources:
  - ref: judson-abstract-algebra
    loc: "21.5절 Exercises, 연습문제 2 (a) (p.275) — 문제 '제곱근 셋을 붙인 체의 차수'와 같은 종류(제곱근 둘을 붙인 체의 차수를 구하기. 출처는 ℚ(√3, √6))"
  - ref: judson-abstract-algebra
    loc: "21.5절 Exercises, 연습문제 25 (p.277) — 문제 '차수가 홀수인 원소와 그 제곱'과 같은 발상(α 를 근으로 갖는 X^k − α^k 로 [F(α) : F(α^k)] 를 재기. 출처는 k = 3)"
added: 2026-11-27
---

:::exercise[법 7의 정수 위의 X² + 1로 만든 체]
$h = X^2 + [1] \in \mathbb{Z}_7[X]$이고, $L$, $\iota$, $\alpha = X + h\mathbb{Z}_7[X]$는 [[kronecker-theorem|크로네커 정리]]의 설정의 것이라 하자.

1. $h$가 $\mathbb{Z}_7$ 위에서 기약임을 보이고, $L$의 원소의 개수를 구하라.
2. $x^2 = \iota([3])$인 $x \in L$을 모두 구하라.
3. $L$의 부분체는 $\iota(\mathbb{Z}_7)$과 $L$뿐임을 보여라.
:::

:::solution
$7$은 소수이므로 $\mathbb{Z}_7$은 체이고([[finite-integral-domain-is-a-field|유한 정역은 체]]의 (3)) $|\mathbb{Z}_7| = 7$이다. [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (10)의 (ii)에 의해 $[r]^2 = [r^2]$이므로 $r = 0, 1, \dots, 6$에서 $[r]^2$은 차례로
$$
[0], [1], [4], [2], [2], [4], [1]
$$
이다($9 = 7 + 2$, $16 = 14 + 2$, $25 = 21 + 4$, $36 = 35 + 1$).

1. 위의 목록에 $-[1] = [6]$이 없으므로 $h([r]) = [r]^2 + [1] \ne [0]$이고([[evaluation-homomorphism|대입 준동형]]의 (1)), $h$는 $\mathbb{Z}_7$ 안에 근이 없다. 차수가 $2$이므로 [[irreducible-polynomial|기약 다항식]]의 (5)에 의해 $h$는 기약이다. 크로네커 정리의 (1)의 (i)에 의해 $L$은 체이고, (4)에 의해 $|L| = 7^2 = 49$이다.

2. 크로네커 정리의 (1)의 (ii)에 의해 $\iota$는 $\iota([1]) = 1$인 단사 환 준동형이므로 $h^{\iota} = X^2 + 1$이고, (1)의 (iv)에 의해 $\alpha^2 + 1 = 0$, 곧 $\alpha^2 = -1$이다. (2)의 (ii)에 의해 $L$의 원소는 $a, b \in \mathbb{Z}_7$로 $x = \iota(a) + \iota(b)\alpha$의 꼴로 하나씩 쓰인다. $\iota$가 환 준동형이므로
   $$
   \begin{aligned}
   x^2 &= \iota(a)^2 + \iota([2])\iota(a)\iota(b)\alpha \\
   &\quad + \iota(b)^2\alpha^2 \\
   &= \iota(a^2 - b^2) + \iota([2]ab)\,\alpha
   \end{aligned}
   $$
   이다. $\iota([3]) = \iota([3]) + \iota([0])\alpha$이므로 (2)의 (ii)의 유일성에 의해 $x^2 = \iota([3])$인 것은 정확히 $a^2 - b^2 = [3]$이고 $[2]ab = [0]$일 때이다. $\mathbb{Z}_7$은 정역이고 $[2] \ne [0]$이므로 $ab = [0]$, 곧 $a = [0]$이거나 $b = [0]$이다. $b = [0]$이면 $a^2 = [3]$인데 $[3]$은 위의 목록에 없다. $a = [0]$이면 $-b^2 = [3]$, 곧 $b^2 = [4]$이고, 목록에서 $b = [2]$이거나 $b = [5]$이다. 따라서 $x$는 $\iota([2])\alpha$와 $\iota([5])\alpha$의 둘이다. 검산: $(\iota([2])\alpha)^2 = \iota([4])(-1) = \iota([-4]) = \iota([3])$이다.

3. $K$가 $L$의 부분체라 하자. [[subfield|부분체]]의 정의와 [[subring|부분환]]의 (1)에 의해 $K$는 $1$을 포함하는 덧셈군 $(L, +)$의 부분군이므로, [[power-in-a-group|군의 거듭제곱]]의 (5)에 의해 모든 정수 $n$에서 $n \cdot 1 \in K$이다. [[ring-homomorphism|환 준동형]]의 (1)과 군의 거듭제곱의 (7)에 의해 $\iota([n]) = \iota(n \cdot [1]) = n \cdot \iota([1]) = n \cdot 1$이므로 $\iota(\mathbb{Z}_7) \subseteq K$이다. 크로네커 정리의 (1)의 (ii)에 의해 $\iota(\mathbb{Z}_7)$은 $L$의 부분체이므로, 부분체의 (5)의 (i)에 의해 체 $K$의 부분체이다. 크로네커 정리의 (2)의 (iii)에 의해 $[L : \iota(\mathbb{Z}_7)] = 2$이고 $2$는 소수이므로, [[tower-law|차수의 곱셈 공식]]의 (6)에 의해 $K = \iota(\mathbb{Z}_7)$이거나 $K = L$이다. 거꾸로 이 둘은 $L$의 부분체이다(부분체의 (4)).
:::

:::exercise[제곱근 셋을 붙인 체의 차수]
$\mathbb{Q}$와 그 확대체는 모두 $\mathbb{R}$의 부분체로 본다.

1. $\sqrt{6}$과 $\sqrt{15}$의 $\mathbb{Q}$ 위의 최소다항식을 구하라.
2. $\sqrt{10} \notin \mathbb{Q}(\sqrt{6})$임을 보여라.
3. $[\mathbb{Q}(\sqrt{6}, \sqrt{10}) : \mathbb{Q}] = 4$임을 보여라.
4. $\mathbb{Q}(\sqrt{6}, \sqrt{10}, \sqrt{15}) = \mathbb{Q}(\sqrt{6}, \sqrt{10})$임을 보이고, 이 체의 $\mathbb{Q}(\sqrt{15})$ 위의 차수를 구하라.
:::

:::solution
1. [[eisenstein-criterion|아이젠슈타인 판정법]]의 (1)을 $p = 3$에 쓴다. $X^2 - 6$의 최고차계수 $1$을 $3$이 나누지 않고 $3 \mid 0$, $3 \mid -6$이며, $-6 = 9 \cdot (-1) + 3$이므로 [[division-theorem|나눗셈 정리]]의 나머지의 유일성에 의해 $9 \nmid -6$이다. $X^2 - 15$도 $3 \mid -15$이고 $-15 = 9 \cdot (-2) + 3$이므로 $9 \nmid -15$이다. 따라서 둘 다 $\mathbb{Q}$ 위에서 기약이고, [[field-extension-examples|체의 확대의 예]]의 (1)에 의해 $\sqrt{6}$, $\sqrt{15}$의 최소다항식은 각각 $X^2 - 6$, $X^2 - 15$이다. 같은 (1)에 의해 $[\mathbb{Q}(\sqrt{6}) : \mathbb{Q}] = [\mathbb{Q}(\sqrt{15}) : \mathbb{Q}] = 2$이고, $\mathbb{Q}(\sqrt{6})$의 원소는 유리수 $x$, $y$로 $x + y\sqrt{6}$의 꼴로 하나씩 쓰인다.

2. $\sqrt{10} = x + y\sqrt{6}$인 유리수 $x$, $y$가 있다고 하자. 양변을 제곱하면 [[square-root-exists|제곱근의 존재]]의 (1)에 의해
   $$
   10 = (x^2 + 6y^2) + 2xy\,\sqrt{6}
   $$
   이고, $10 = 10 + 0\sqrt{6}$이므로 1의 유일성에 의해 $2xy = 0$이고 $x^2 + 6y^2 = 10$이다. [[field|가역원과 체]]의 (4), (3)에 의해 $\mathbb{R}$은 정역이므로 $x = 0$이거나 $y = 0$이다. $y = 0$이면 $\sqrt{10} = x \in \mathbb{Q}$인데, 체의 확대의 예의 (1)에 의해 $\sqrt{10} \notin \mathbb{Q}$이다. $x = 0$이면 $6y^2 = 10$이므로 $(3y)^2 = 15$이고, $3y$는 $X^2 - 15$의 유리수 근이 된다. 1에 의해 $X^2 - 15$는 차수가 $2$인 기약 다항식이므로 [[irreducible-polynomial|기약 다항식]]의 (4)에 의해 $\mathbb{Q}$ 안에 근이 없다. 어느 경우에도 어긋나므로 $\sqrt{10} \notin \mathbb{Q}(\sqrt{6})$이다.

3. $K = \mathbb{Q}(\sqrt{6})$으로 두면 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 (i)에 의해 $\mathbb{Q}(\sqrt{6}, \sqrt{10}) = K(\sqrt{10})$이다. [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (7)에 의해 $\sqrt{10}$은 $K$ 위에서 대수적이고, 그 최소다항식 $m$은 $X^2 - 10$을 나누며 $\deg m \le 2$이다. 2에 의해 $\sqrt{10} \notin K$이므로 같은 항목의 (6)에 의해 $\deg m \ne 1$이고, 따라서 $\deg m = 2$이다. [[simple-algebraic-extension|단순 대수적 확대]]의 (3)에 의해 $[K(\sqrt{10}) : K] = 2$이고, [[tower-law|차수의 곱셈 공식]]의 (2)에 의해 $[\mathbb{Q}(\sqrt{6}, \sqrt{10}) : \mathbb{Q}] = 2 \cdot 2 = 4$이다.

4. 제곱근의 존재의 (2)에 의해 $\sqrt{6}\sqrt{10} = \sqrt{60} = \sqrt{4}\sqrt{15}$이고, $0 \le 2$, $2 \cdot 2 = 4$이므로 같은 항목의 (1)의 유일성에 의해 $\sqrt{4} = 2$이다. 그래서 $\sqrt{15} = \tfrac{1}{2}\sqrt{6}\sqrt{10}$이고, $E = \mathbb{Q}(\sqrt{6}, \sqrt{10})$은 $\mathbb{Q}$와 $\sqrt{6}$, $\sqrt{10}$을 포함하는 체이므로 $\sqrt{15} \in E$이다. 유한 확대와 대수적 확대의 (1)의 (i)에 의해 $\mathbb{Q}(\sqrt{6}, \sqrt{10}, \sqrt{15}) = E(\sqrt{15})$이고, 단순 대수적 확대의 (4)에 의해 $E(\sqrt{15}) = E$이다.

   단순 대수적 확대의 (1)에 의해 $\mathbb{Q}(\sqrt{15}) \subseteq E$이다. 차수의 곱셈 공식의 (3)의 (i)과 3, 1에 의해
   $$
   4 = [E : \mathbb{Q}(\sqrt{15})] \cdot 2
   $$
   이므로 $[E : \mathbb{Q}(\sqrt{15})] = 2$이다.
:::

:::exercise[차수가 홀수인 원소와 그 제곱]
$E$가 체이고 $F$가 $E$의 부분체이며, $\alpha \in E$가 $F$ 위에서 대수적이라 하자.

1. $\alpha^2$은 $F$ 위에서 대수적이고 $F(\alpha^2) \subseteq F(\alpha)$이며 $[F(\alpha) : F(\alpha^2)] \le 2$임을 보여라.
2. $[F(\alpha) : F]$가 홀수이면 $F(\alpha^2) = F(\alpha)$임을 보여라.
3. $F = \mathbb{Q}$, $\alpha = \sqrt{2}$이면 $F(\alpha^2) \ne F(\alpha)$임을 확인하라.
:::

:::solution
1. [[simple-algebraic-extension|단순 대수적 확대]]의 (3)에 의해 $F(\alpha)$는 $F$의 유한 확대이고, $\alpha^2 \in F(\alpha)$이므로 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (3)에 의해 $\alpha^2$은 $F$ 위에서 대수적이다. $F(\alpha)$는 $F$를 포함하고 $\alpha^2$을 원소로 갖는 $E$의 부분체이므로 단순 대수적 확대의 (1)에 의해 $K = F(\alpha^2) \subseteq F(\alpha)$이다.

   $\alpha$는 $K[X]$의 영이 아닌 다항식 $X^2 - \alpha^2$의 근이므로 $K$ 위에서 대수적이고([[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (1)), 같은 항목의 (3)의 (ii)에 의해 $\alpha$의 $K$ 위의 차수는 $2$ 이하이다. $K(\alpha)$는 $F$와 $\alpha$를 포함하므로 단순 대수적 확대의 (1)에 의해 $F(\alpha) \subseteq K(\alpha)$이고, $F(\alpha)$는 $K$와 $\alpha$를 포함하므로 같은 이유로 $K(\alpha) \subseteq F(\alpha)$이다. 곧 $K(\alpha) = F(\alpha)$이고, 단순 대수적 확대의 (3)에 의해 $[F(\alpha) : K]$는 $\alpha$의 $K$ 위의 차수로서 $2$ 이하이다.

2. $[F(\alpha) : F]$를 $n$, $[F(\alpha) : K]$를 $e$라 하면 [[tower-law|차수의 곱셈 공식]]의 (3)의 (i)에 의해 $n = e\,[K : F]$이다. 1에 의해 $e$는 $1$이거나 $2$이고, $e = 2$이면 $n$이 짝수가 되어 $n$이 홀수라는 가정과 어긋난다([[even-and-odd|짝수와 홀수]]에서 받아들인 사실). 따라서 $e = 1$이고, [[extension-field|확대체]]의 (2)의 (ii)에 의해 $F(\alpha) = K = F(\alpha^2)$이다.

3. $\alpha^2 = 2 \in \mathbb{Q}$이므로 단순 대수적 확대의 (4)에 의해 $\mathbb{Q}(\alpha^2) = \mathbb{Q}$이다. 한편 [[field-extension-examples|체의 확대의 예]]의 (1)에 의해 $\sqrt{2} \notin \mathbb{Q}$이므로 $\sqrt{2} \in \mathbb{Q}(\sqrt{2})$에서 $\mathbb{Q}(\sqrt{2}) \ne \mathbb{Q}$이다. 이때 $[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2$는 짝수이므로 2와 어긋나지 않는다.
:::

:::exercise[유리수체에 제곱근을 붙인 체 위의 X³ − 2]
$c$는 [[field-extension-examples|체의 확대의 예]]의 (4)의 실수, 곧 $c^3 = 2$이고 $1 < c < 2$인 실수이고, $K = \mathbb{Q}(\sqrt{5})$라 하자. 체는 모두 $\mathbb{R}$의 부분체로 본다.

1. $c$의 $K$ 위의 차수가 $3$임을 보여라.
2. $X^3 - 2$가 $K$ 위에서 기약임을 보여라.
:::

:::solution
1. $5$는 소수이므로 체의 확대의 예의 (1)에 의해 $[K : \mathbb{Q}] = 2$이고, 같은 항목의 (4)에 의해 $c$의 $\mathbb{Q}$ 위의 최소다항식은 $X^3 - 2$이며 $[\mathbb{Q}(c) : \mathbb{Q}] = 3$이다. [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (7)에 의해 $c$는 $K$ 위에서 대수적이고, 그 최소다항식 $m_K$는 $K[X]$에서 $X^3 - 2$를 나누며 $d = \deg m_K \le 3$이다. 같은 항목의 (3)의 (i)에 의해 $d \ge 1$이다.

   $E = K(c)$로 두면 [[simple-algebraic-extension|단순 대수적 확대]]의 (3)에 의해 $[E : K] = d$이고, [[tower-law|차수의 곱셈 공식]]의 (2)에 의해 $E$는 $\mathbb{Q}$의 유한 확대이며 $[E : \mathbb{Q}] = 2d$이다. $E$는 $\mathbb{Q}$와 $c$를 포함하므로 단순 대수적 확대의 (1)에 의해 $\mathbb{Q}(c) \subseteq E$이고, 차수의 곱셈 공식의 (3)의 (i)에 의해 $3 = [\mathbb{Q}(c) : \mathbb{Q}]$는 $2d$를 나눈다. $d$는 $1, 2, 3$ 가운데 하나이므로 $2d$는 $2, 4, 6$ 가운데 하나이고, $2 = 3 \cdot 0 + 2$, $4 = 3 \cdot 1 + 1$이므로 [[division-theorem|나눗셈 정리]]의 나머지의 유일성에 의해 $3$은 $2$와 $4$를 나누지 않는다. 따라서 $2d = 6$이고 $d = 3$이다.

2. $X^3 - 2 = m_K q$인 $q \in K[X]$가 있다. $X^3 - 2 \ne 0$이므로 $q \ne 0$이고, $m_K$가 모닉이므로 [[degree-of-a-polynomial|다항식의 차수]]의 (5)에 의해 $3 = 3 + \deg q$, 곧 $\deg q = 0$이며, $X^3 - 2$의 최고차계수 $1$은 $m_K$의 최고차계수 $1$과 $q$의 최고차계수의 곱이다. 그래서 $q$는 상수 다항식 $1$이고 $X^3 - 2 = m_K$이다. 대수적 원소와 최소다항식의 (3)의 (i)에 의해 $m_K$는 $K$ 위에서 기약이므로 $X^3 - 2$는 $K$ 위에서 기약이다.
:::

:::exercise[√2의 부호를 바꾸는 환 동형사상]
$E = \mathbb{Q}(\sqrt{2}) \subseteq \mathbb{R}$이라 하고, $x$, $y$가 유리수일 때 $\sigma(x + y\sqrt{2}) = x - y\sqrt{2}$로 정하자.

1. $\sigma : E \to E$가 함수로 잘 정해지고, $\sigma(1) = 1$인 환 준동형이며, 모든 유리수 $c$에서 $\sigma(c) = c$임을 보여라.
2. $\sigma$가 환 동형사상임을 [[extension-field|확대체]]의 (4)로 보여라.
3. $E$를 자기 자신 위의 벡터공간으로 보면 $\sigma$는 $E$-선형사상이 아님을 보이고, 확대체의 (4)의 가정 "모든 $c \in F$에서 $\tau(c) = c$"를 뺄 수 없음을 말하라.
:::

:::solution
$2$는 소수이므로 [[field-extension-examples|체의 확대의 예]]의 (1)에 의해 $E$의 모든 원소는 유리수 $x$, $y$로 $x + y\sqrt{2}$의 꼴로 쓰이고 이 $x$, $y$는 하나로 정해진다. 또 $\sqrt{2}\sqrt{2} = 2$이다([[square-root-exists|제곱근의 존재]]의 (1)).

1. 원소마다 $x$, $y$가 하나로 정해지므로 $\sigma$는 $E$의 각 원소에 실수 $x - y\sqrt{2}$를 하나씩 대응시키고, $E$는 $\mathbb{Q}$와 $\sqrt{2}$를 포함하는 체이므로([[simple-algebraic-extension|단순 대수적 확대]]의 (1)) $x - y\sqrt{2} = x + (-y)\sqrt{2} \in E$이다. $z = x + y\sqrt{2}$, $w = u + v\sqrt{2}$($x, y, u, v \in \mathbb{Q}$)라 하면 실수의 계산으로
   $$
   \begin{aligned}
   z + w &= (x + u) + (y + v)\sqrt{2}, \\
   zw &= (xu + 2yv) \\
   &\quad + (xv + yu)\sqrt{2}
   \end{aligned}
   $$
   이고 $x + u$, $y + v$, $xu + 2yv$, $xv + yu$는 유리수이다([[rational-numbers-field|유리수체]]의 (1)). 따라서 $\sigma(z + w) = (x + u) - (y + v)\sqrt{2} = \sigma(z) + \sigma(w)$이고
   $$
   \begin{aligned}
   &\sigma(z)\sigma(w) \\
   &\quad = (x - y\sqrt{2})(u - v\sqrt{2}) \\
   &\quad = (xu + 2yv) \\
   &\qquad - (xv + yu)\sqrt{2} \\
   &\quad = \sigma(zw)
   \end{aligned}
   $$
   이다. 곧 $\sigma$는 환 준동형이다. 유리수 $c$는 $c + 0\sqrt{2}$이므로 $\sigma(c) = c$이고, 특히 $\sigma(1) = 1$이다.

2. 체의 확대의 예의 (1)에 의해 $E$는 $\mathbb{Q}$의 유한 확대이다. 확대체의 (4)를 $F = \mathbb{Q}$, $E' = E$, $\tau = \sigma$에 쓰면, 1에 의해 $\sigma$는 $\mathbb{Q}$의 원소를 고정하는 환 준동형이고 $[E : \mathbb{Q}] = [E : \mathbb{Q}]$이므로, (4)의 (ii)에 의해 $\sigma$는 환 동형사상이다. 또 (4)의 (i)에 의해 $\sigma$는 $\mathbb{Q}$-선형사상이다.

3. [[subfield|부분체]]의 (4)에 의해 $E$는 $E$의 부분체이고, [[vector-space-over-a-field|체 위의 벡터공간]]의 (3)의 (iv)에 의해 $E$는 곱셈을 스칼라배로 하여 $E$ 위의 벡터공간이다. 스칼라 $\sqrt{2}$와 벡터 $1$에 대하여 $\sigma(\sqrt{2} \cdot 1) = \sigma(0 + 1\sqrt{2}) = -\sqrt{2}$이고 $\sqrt{2}\,\sigma(1) = \sqrt{2}$이다. $-\sqrt{2} = \sqrt{2}$이면 $2\sqrt{2} = 0$이고 $\mathbb{R}$이 정역이므로 $\sqrt{2} = 0$이 되는데, 제곱근의 존재의 (1)에 의해 $0 < \sqrt{2}$이므로 어긋난다. 따라서 $\sigma(\sqrt{2} \cdot 1) \ne \sqrt{2}\,\sigma(1)$이고, [[linear-maps-over-a-field|체 위의 선형사상과 핵]]의 정의에 의해 $\sigma$는 $E$-선형사상이 아니다.

   확대체의 (4)를 $F = E$, $E' = E$, $\tau = \sigma$에 쓰려 하면, $\sigma$는 환 준동형이고 $\sigma(1) = 1$이지만 $\sigma(\sqrt{2}) \ne \sqrt{2}$이므로 $F$의 원소를 고정하지 않는다. 그리고 결론인 "$F$-선형사상이다"가 성립하지 않는다. 그래서 (4)의 (i)에서 고정한다는 가정을 뺄 수 없다.
:::
