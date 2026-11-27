---
written_by: Claude
status: reviewed
sources:
  - ref: beck-first-course-complex-analysis
    loc: "4장 연습문제 ex_4_4, source/exercises-chap4.ptx:760–775, 연습문제 ex_partfracint, source/exercises-chap4.ptx:776–797 — 문제 '원 경로 네 개를 따른 $1/(z^2 + 4)$의 적분'과 같은 발상(출처는 C[−2i, r] 위의 1/(z² + 1) 과 C[0, r] 위의 1/(z² − 2z − 8) 을 반지름에 따라 계산하게 하고, 뒤의 것에 부분분수를 쓰라는 힌트를 준다)"
  - ref: beck-first-course-complex-analysis
    loc: "4장 연습문제 ex_4_3, source/exercises-chap4.ptx:415–425, 연습문제 ex_laurentoutlook, source/exercises-chap4.ptx:438–453 — 문제 '거듭제곱 네 개의 합이 복소 원시함수를 갖는 조건'의 (2)와 같은 발상(출처는 −1 이 아닌 지수의 zⁿ 의 닫힌 경로 적분이 0 이고 지수 −1 에서만 2πi 가 남는다는 것을 묻는다)"
  - ref: klazar-complex-derivatives-continuous
    loc: "2절, Proposition 2.2 의 2. (k.txt 189–195줄, p.4) — 문제 '평행사변형의 둘레를 따른 적분'과 같은 결론(출처는 직사각형 R 이 U 에 들고 f 가 정칙이면 R 의 둘레 적분이 0 이라는 것을 넷으로 나누는 논법으로 보인다. 이 문제는 평행사변형을 대각선으로 두 삼각형으로 나눈다)"
  - ref: beck-first-course-complex-analysis
    loc: "4장 연습문제, source/exercises-chap4.ptx:106–113, 연습문제 ex_varint, source/exercises-chap4.ptx:183–235 — 문제 '삼각형의 둘레를 따른 $\\overline{z}$의 적분'의 (1)과 같은 대상(출처는 선분, 원, 포물선 위에서 z̄ 를 적분하게 한다)"
added: 2026-11-27
---

:::exercise[$\Delta(0, 3, 3 + 3i)$에서 꼭짓점 쪽 작은 삼각형 떼어 내기]
$p = 0$, $b = 3$, $c = 3 + 3i$, $\lambda = 1/3$이라 하고, [[closed-triangle|닫힌 삼각형]]의 (7)처럼 $x = p + \lambda(b - p)$, $y = p + \lambda(c - p)$로 둔다.

1. $x$와 $y$를 구하고, $\ell(\partial\Delta(p, b, c))$와 $\ell(\partial\Delta(p, x, y))$를 계산해 (7)의 둘레의 등식과 맞춰 보라.
2. (9)의 $u = b - p$, $v = c - p$에서 $\operatorname{Im}(\overline{u}v)$를 구하고, $p$가 $\Delta(x, b, c)$와 $\Delta(x, c, y)$의 원소가 아님을 보여라.
3. $p = 0$, $b = 2$, $c = -2$, $\lambda = 1/2$로 바꾸면 $\operatorname{Im}(\overline{u}v) = 0$이고 $p \in \Delta(x, b, c)$임을 보여라.
:::

:::solution
"삼각형 (n)"은 [[closed-triangle|닫힌 삼각형]]의 번호이다. 실수는 [[complex-field|복소수체]]의 (3)의 약속대로 복소수 자리에 쓴다.

**(1)** $x = 0 + \tfrac13(3 - 0) = 1$이고 $y = 0 + \tfrac13(3 + 3i) = 1 + i$이다. 둘레의 길이는 삼각형의 정의 문단의 식 $\ell(\partial\Delta(a, b, c)) = |b - a| + |c - b| + |a - c|$로 계산한다.

[[modulus-of-complex-number|복소수의 절댓값]]의 (5)에 의해 $|3| = 3$이고 $|3i| = |3|\,|i| = 3$이다. 같은 항목의 (1)에 의해 $|-3 - 3i|^2 = 9 + 9 = 18$이다. [[square-root-exists|제곱근]]의 (1)에 의해 $(3\sqrt{2})(3\sqrt{2}) = 9 \cdot 2 = 18$이고 $0 \le 3\sqrt{2}$, $0 \le |-3 - 3i|$이므로 [[order-properties-of-reals|실수의 순서의 성질]]의 (7)의 (iv)에 의해 $|-3 - 3i| = 3\sqrt{2}$이다. 따라서
$$
\begin{aligned}
&\ell(\partial\Delta(0, 3, 3 + 3i)) \\
&\quad = |3| + |3i| + |-3 - 3i| \\
&\quad = 6 + 3\sqrt{2}
\end{aligned}
$$
이다. 같은 방법으로 $|1| = 1$, $|i| = 1$, $|-1 - i|^2 = 2$이고 $\sqrt{2}\sqrt{2} = 2$이므로 $|-1 - i| = \sqrt{2}$이고 $\ell(\partial\Delta(0, 1, 1 + i)) = 2 + \sqrt{2}$이다. $\tfrac13(6 + 3\sqrt{2}) = 2 + \sqrt{2}$이므로 삼각형 (7)의 $\ell(\partial\Delta(p, x, y)) = \lambda\,\ell(\partial\Delta(p, b, c))$와 맞는다.

**(2)** $u = 3$, $v = 3 + 3i$이다. [[complex-conjugate|켤레복소수]]의 (4)에 의해 $\overline{u} = 3$이므로 $\overline{u}v = 9 + 9i$이고 $\operatorname{Im}(\overline{u}v) = 9 \ne 0$이다. $0 < \tfrac13 < 1$이고 $x$, $y$는 삼각형 (7)의 것이므로, 삼각형 (9)의 (ii)에 의해 $p = 0$은 $\Delta(1, 3, 3 + 3i)$와 $\Delta(1, 3 + 3i, 1 + i)$의 원소가 아니다.

**(3)** $u = 2$, $v = -2$이면 $\overline{u}v = 2 \cdot (-2) = -4$이므로 $\operatorname{Im}(\overline{u}v) = 0$이다. $x = 0 + \tfrac12 \cdot 2 = 1$이다. 실수 $0$, $\tfrac12$, $\tfrac12$은 $0$ 이상이고 합이 $1$이며
$$
0 \cdot 1 + \tfrac12 \cdot 2 + \tfrac12 \cdot (-2) = 0
$$
이므로, 삼각형 (1)에 의해 $0 \in \Delta(1, 2, -2) = \Delta(x, b, c)$이다. 곧 (9)의 (ii)의 결론은 $\operatorname{Im}(\overline{u}v) \ne 0$이라는 가정 없이는 성립하지 않을 수 있다.
:::

:::exercise[원 경로 네 개를 따른 $1/(z^2 + 4)$의 적분]
$z$에서의 값이 $1/(z^2 + 4)$인 함수 $f : \mathbb{C} - \{2i, -2i\} \to \mathbb{C}$를 생각한다.

1. $z \ne 2i$, $z \ne -2i$이면 $z^2 + 4 \ne 0$이고
   $$
   \begin{aligned}
   &\frac{1}{z^2 + 4} \\
   &\quad = -\frac{i}{4}\Bigl(\frac{1}{z - 2i} - \frac{1}{z + 2i}\Bigr)
   \end{aligned}
   $$
   임을 보여라.
2. $(a, r)$가 $(2i, 1)$, $(i, 2)$, $(0, 1)$, $(0, 3)$일 때 $\int_{\gamma_{a,r}} f$를 구하라.
:::

:::solution
**(1)** [[complex-field|복소수체]]의 (1)의 체의 법칙과 (5)의 $ii = -1$에 의해 $(z - 2i)(z + 2i) = z^2 - 4i^2 = z^2 + 4$이다. $z \ne \pm 2i$이면 두 인수가 $0$이 아니므로 체에서 곱도 $0$이 아니다. 또
$$
\begin{aligned}
&\frac{1}{z - 2i} - \frac{1}{z + 2i} \\
&\quad = \frac{(z + 2i) - (z - 2i)}{(z - 2i)(z + 2i)} = \frac{4i}{z^2 + 4}
\end{aligned}
$$
이고, $-\tfrac{i}{4} \cdot 4i = -i^2 = 1$이므로 등식이 성립한다.

**(2)** "원 (n)"은 [[integrals-over-circles|원 경로 위의 적분]]의 번호이다. 네 경우 모두 $|2i - a| \ne r$이고 $|-2i - a| \ne r$이다($|2i - 2i| = 0$, $|-2i - 2i| = |-4i| = 4$, $|2i - i| = 1$, $|-2i - i| = 3$, $|2i - 0| = |-2i - 0| = 2$이고 [[modulus-of-complex-number|복소수의 절댓값]]의 (5)로 계산한다). 따라서 원 경로 위의 적분의 진술 첫 문단에 의해 $(z - 2i)^{-1}$과 $(z + 2i)^{-1}$의 함수는 $\gamma_{a,r}$의 상 $K$ 위에서 연속이고 $\pm 2i \notin K$이다. (1)에 의해 $K$의 점에서 $f$의 값은 $-\tfrac{i}{4}$와 두 함수의 차의 곱과 같으므로, [[path-integral|경로 적분]]의 (1)(선형성과 상 위의 값)에 의해
$$
\begin{aligned}
\int_{\gamma_{a,r}} f &= -\frac{i}{4}\Bigl(\int_{\gamma_{a,r}} \frac{dz}{z - 2i} \\
&\qquad - \int_{\gamma_{a,r}} \frac{dz}{z + 2i}\Bigr)
\end{aligned}
$$
이다. 오른쪽의 두 적분은 $w = \pm 2i$가 원의 안쪽($|w - a| < r$)이면 원 (3)에 의해 $2\pi i$, 바깥쪽($|w - a| > r$)이면 원 (4)에 의해 $0$이다.

- $(2i, 1)$: $0 < 1$이고 $4 > 1$이므로 $-\tfrac{i}{4}(2\pi i - 0) = \tfrac{\pi}{2}$이다.
- $(i, 2)$: $1 < 2$이고 $3 > 2$이므로 같은 방법으로 $\tfrac{\pi}{2}$이다.
- $(0, 1)$: $2 > 1$이 두 번이므로 $-\tfrac{i}{4}(0 - 0) = 0$이다.
- $(0, 3)$: $2 < 3$이 두 번이므로 $-\tfrac{i}{4}(2\pi i - 2\pi i) = 0$이다.

마지막 경우는 두 점이 모두 안쪽에 있어도 두 항이 지워져 $0$이 된다.
:::

:::exercise[거듭제곱 네 개의 합이 복소 원시함수를 갖는 조건]
$\alpha$, $\beta$, $\gamma$, $\delta$를 복소수라 하고, $z$에서의 값이
$$
f(z) = \alpha z^2 + \beta + \gamma z^{-1} + \delta z^{-3}
$$
인 함수 $f : \mathbb{C} - \{0\} \to \mathbb{C}$를 생각한다.

1. $\gamma = 0$이면 $z$에서의 값이 $F(z) = \tfrac{\alpha}{3} z^3 + \beta z - \tfrac{\delta}{2} z^{-2}$인 함수 $F : \mathbb{C} - \{0\} \to \mathbb{C}$가 $\mathbb{C} - \{0\}$ 위의 $f$의 복소 원시함수임을 보여라.
2. $\gamma \ne 0$이면 $\int_{\gamma_{0,1}} f = 2\pi i\,\gamma$이고, $f$는 $\mathbb{C} - \{0\}$ 위에서 복소 원시함수를 갖지 않음을 보여라.
3. $\alpha = 3$, $\beta = \gamma = 0$, $\delta = 2$일 때 $\int_{\sigma_{1,i}} f$를 구하라.
:::

:::solution
"원시 (n)"은 [[primitive-and-path-integral|복소 원시함수와 경로 적분]]의 번호이고, "법칙 (n)"은 [[complex-derivative-rules|복소 미분의 법칙]]의 번호이다. 원시 (4)의 (i)에 의해 $\mathbb{C} - \{0\}$은 열린집합이다.

**(1)** 원시 (4)의 (ii)를 $a = 0$과 $k = 2$, $0$, $-3$에 쓰면, $z$에서의 값이 $z^3 \cdot 3^{-1}$, $z^1 \cdot 1^{-1} = z$, $z^{-2}(-2)^{-1}$인 함수가 각각 $z^2$, $z^0 = 1$, $z^{-3}$의 함수의 복소 원시함수이다(앞의 둘은 $\mathbb{C}$ 위, 셋째는 $\mathbb{C} - \{0\}$ 위). 앞의 둘을 $\mathbb{C} - \{0\}$로 제한해도 [[complex-derivative|복소 미분]]의 (4)의 (i)에 의해 정칙이고 미분계수가 같다. 법칙 (1)(합과 상수배)에 의해 $F$는 정칙함수이고
$$
F'(z) = \alpha z^2 + \beta + \delta z^{-3} = f(z)
$$
이다($\gamma = 0$). 곧 $F$는 복소 원시함수이다.

**(2)** 법칙 (4)의 (i), (ii)와 (1)에 의해 $f$는 정칙함수이고, 복소 미분의 (3)에 의해 연속이다. [[path-integral|경로 적분]]의 (1)(선형성)과 [[integrals-over-circles|원 경로 위의 적분]]의 (1)을 $a = 0$, $r = 1$, $k = 2, 0, -1, -3$에 쓰면($z^0 = 1$)
$$
\begin{aligned}
\int_{\gamma_{0,1}} f &= \alpha \cdot 0 + \beta \cdot 0 \\
&\quad + \gamma \cdot 2\pi i + \delta \cdot 0 \\
&= 2\pi i\,\gamma
\end{aligned}
$$
이다. [[definition-of-pi|원주율]]의 (4)에 의해 $0 < \pi$이므로 $2\pi i \ne 0$이고, $\gamma \ne 0$이므로 [[complex-field|복소수체]]의 (1)(체)에 의해 $2\pi i\,\gamma \ne 0$이다. $\gamma_{0,1}$은 상이 $\mathbb{C} - \{0\}$에 드는 닫힌 C¹ 경로이고([[path-in-the-complex-plane|경로]]의 (3)), 길이 $1$인 경로열 $(\gamma_{0,1})$의 적분은 $\int_{\gamma_{0,1}} f$이므로, 원시 (3)의 마지막 문장에 의해 $f$는 $\mathbb{C} - \{0\}$ 위에서 복소 원시함수를 갖지 않는다.

**(3)** $\sigma_{1,i}(t) = (1 - t) + ti$이다([[path-in-the-complex-plane|경로]]의 (2)). $1 - t = 0$이면 $t = 1$이고 허수부가 $1$이므로 상은 $0$을 원소로 갖지 않는다. (1)에 의해 $F(z) = z^3 - z^{-2}$는 복소 원시함수이고, $f$는 (2)의 첫 문장처럼 연속이므로 원시 (2)의 (i)에 의해 $\int_{\sigma_{1,i}} f = F(i) - F(1)$이다. [[power-of-a-complex-number|복소수의 거듭제곱]]의 (6)과 (3)에 의해 $i^3 = -i$이고 $i^{-2} = (i^2)^{-1} = (-1)^{-1} = -1$이며, $1^3 = 1$, $1^{-2} = 1$이다. 따라서
$$
\int_{\sigma_{1,i}} f = (-i + 1) - (1 - 1) = 1 - i
$$
이다.
:::

:::exercise[평행사변형의 둘레를 따른 적분]
$a$, $u$, $v$를 복소수라 하고 $b = a + u$, $c = a + u + v$, $e = a + v$,
$$
\begin{aligned}
P = \{\,&a + su + tv : s, t \in \mathbb{R}, \\
&0 \le s \le 1,\ 0 \le t \le 1\,\}
\end{aligned}
$$
로 둔다. $U$를 $P \subseteq U$인 $(\mathbb{C}, d)$의 열린집합이라 하고, $f : U \to \mathbb{C}$가 다음 (가), (나) 가운데 하나를 만족한다고 하자.

- (가) $f$는 정칙함수이다.
- (나) $q \in U$가 있어 $f$는 연속이고 $U - \{q\}$에서 정칙이다.

$\Pi = (\sigma_{a,b}, \sigma_{b,c}, \sigma_{c,e}, \sigma_{e,a})$가 상이 $U$에 드는 닫힌 경로열이고 $\int_\Pi f = 0$임을 보여라.
:::

:::solution
"삼각형 (n)"은 [[closed-triangle|닫힌 삼각형]]의 번호, "적분 (n)"은 [[path-integral|경로 적분]]의 번호이다.

**두 삼각형은 $P$에 든다.** $T_1 = \Delta(a, b, c)$, $T_2 = \Delta(a, c, e)$로 둔다. $z \in T_1$이면 삼각형 (1)에 의해 $0$ 이상이고 합이 $1$인 실수 $\lambda_1$, $\lambda_2$, $\lambda_3$으로 $z = \lambda_1 a + \lambda_2 (a + u) + \lambda_3 (a + u + v)$이고, 체의 계산([[complex-field|복소수체]]의 (1))으로 $z = a + (\lambda_2 + \lambda_3) u + \lambda_3 v$이다. $0 \le \lambda_2 + \lambda_3 = 1 - \lambda_1 \le 1$이고 $0 \le \lambda_3 \le 1$이므로 $z \in P$이다. $z \in T_2$이면 같은 방법으로 $z = a + \lambda_2 u + (\lambda_2 + \lambda_3) v$이고 $z \in P$이다. 따라서 $T_1$, $T_2 \subseteq P \subseteq U$이다.

**경로열.** 네 선분의 끝점과 시작점이 차례로 맞고 $\Pi$의 시작점과 끝점이 $a$이므로 $\Pi$는 닫힌 경로열이다([[path-in-the-complex-plane|경로]]의 (2)). 삼각형 (2)에 의해 $\sigma_{a,b}$, $\sigma_{b,c}$의 상은 $T_1$에, $\sigma_{c,e}$, $\sigma_{e,a}$의 상은 $T_2$에 들므로 $\Pi$의 상은 $U$에 든다. (가)이면 [[complex-derivative|복소 미분]]의 (3)에 의해 $f$는 연속이므로, 어느 경우든 $f$는 모든 선분의 상 위에서 연속이고 적분이 정해진다.

**두 삼각형의 둘레.** 경로열의 경로 적분의 정의에 의해
$$
\begin{aligned}
&\int_{\partial\Delta(a, b, c)} f + \int_{\partial\Delta(a, c, e)} f \\
&= \Bigl(\int_{\sigma_{a,b}} f + \int_{\sigma_{b,c}} f + \int_{\sigma_{c,a}} f\Bigr) \\
&\quad + \Bigl(\int_{\sigma_{a,c}} f + \int_{\sigma_{c,e}} f + \int_{\sigma_{e,a}} f\Bigr)
\end{aligned}
$$
이다. 적분 (2)에 의해 $\int_{\sigma_{c,a}} f = -\int_{\sigma_{a,c}} f$이므로 두 항이 지워지고, 남는 넷의 합이 $\int_\Pi f$이다. 한편 (가)이면 [[goursat-theorem|구르사 정리]]에 의해, (나)이면 [[goursat-theorem-with-exceptional-point|예외점이 있는 구르사 정리]]에 의해 $T_1$, $T_2 \subseteq U$이므로 위의 두 둘레 적분은 모두 $0$이다. 따라서 $\int_\Pi f = 0 + 0 = 0$이다.
:::

:::exercise[삼각형의 둘레를 따른 $\overline{z}$의 적분]
1. 복소수 $z$, $w$에 대하여
   $$
   \begin{aligned}
   &\int_{\sigma_{z,w}} \overline{\zeta}\,d\zeta \\
   &\quad = \overline{z}\,(w - z) + \tfrac12 |w - z|^2
   \end{aligned}
   $$
   임을 보여라.
2. 복소수 $p$, $b$, $c$와 $u = b - p$, $v = c - p$에 대하여
   $$
   \int_{\partial\Delta(p, b, c)} \overline{z}\,dz = i \operatorname{Im}(\overline{u}v)
   $$
   임을 보여라.
3. $U$가 $(\mathbb{C}, d)$의 열린집합이고 $f : U \to \mathbb{C}$가 정칙함수이며 $\Delta(p, b, c) \subseteq U$이고 $\operatorname{Im}(\overline{u}v) \ne 0$이라 하자. $\alpha$가 $0$이 아닌 복소수이면 $z$에서의 값이 $f(z) + \alpha\overline{z}$인 함수 $U \to \mathbb{C}$는 정칙함수가 아님을 [[goursat-theorem|구르사 정리]]로 보여라.
:::

:::solution
켤레를 취하는 함수 $\mathbb{C} \to \mathbb{C}$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2)에 의해 연속이므로, 모든 경로를 따른 적분이 정해진다([[path-integral|경로 적분]]의 "상 위에서 연속"의 정의 문단).

**(1)** $e = w - z$로 두면 [[path-in-the-complex-plane|경로]]의 (2)에 의해 $\sigma_{z,w}(t) = z + te$이고 $\sigma_{z,w}'(t) = e$이다. [[complex-conjugate|켤레복소수]]의 (2), (4)에 의해 $\overline{z + te} = \overline{z} + t\overline{e}$이고, [[modulus-of-complex-number|복소수의 절댓값]]의 (2)에 의해 $\overline{e}e = \iota(|e|^2)$이므로 피적분함수의 $t$에서의 값은
$$
(\overline{z} + t\overline{e})\,e = \overline{z}e + \iota(t\,|e|^2)
$$
이다. [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 (5)에 의해 값이 $\overline{z}e$인 상수함수의 $[0, 1]$ 위의 적분은 $\overline{z}e$이고, 같은 항목의 (2)와 [[antiderivative-and-integral-of-power]]의 (3), [[linearity-of-the-integral|적분의 선형성]]의 (4)에 의해 둘째 항의 적분은 $\iota(|e|^2 \int_0^1 t\,dt) = \iota(\tfrac12|e|^2)$이다. [[properties-of-integral-of-complex-valued-function|복소수값 함수의 적분의 성질]]의 (1)(합)으로 더하면 공식이다.

**(2)** $b = p + u$, $c = p + v$이고 $\partial\Delta(p, b, c) = (\sigma_{p,b}, \sigma_{b,c}, \sigma_{c,p})$이다. 세 선분에서 $w - z$는 차례로 $u$, $v - u$, $-v$이고 시작점의 켤레는 $\overline{p}$, $\overline{p} + \overline{u}$, $\overline{p} + \overline{v}$이다(켤레의 (2)). (1)을 세 번 쓰고 더하면, $\overline{p}$가 붙은 항은 $\overline{p}(u + (v - u) - v) = 0$이 되어
$$
\begin{aligned}
&\int_{\partial\Delta(p, b, c)} \overline{z}\,dz \\
&= \overline{u}(v - u) - \overline{v}v \\
&\quad + \tfrac12\bigl(|u|^2 + |v - u|^2 + |v|^2\bigr)
\end{aligned}
$$
이다(체의 법칙, [[complex-field|복소수체]]의 (1)). 절댓값의 (2)에 의해 $\overline{u}u = |u|^2$, $\overline{v}v = |v|^2$이고, [[complex-triangle-inequality|복소수의 삼각부등식]]의 (1)에 의해 $|v - u|^2 = |v|^2 + |u|^2 - 2\operatorname{Re}(v\overline{u})$이다. 곱셈의 교환법칙으로 $v\overline{u} = \overline{u}v$이므로 오른쪽은
$$
\begin{aligned}
&\overline{u}v - |u|^2 - |v|^2 + |u|^2 + |v|^2 \\
&\quad - \operatorname{Re}(\overline{u}v) = \overline{u}v - \operatorname{Re}(\overline{u}v)
\end{aligned}
$$
이다. 복소수체의 (4)에 의해 $\overline{u}v = \operatorname{Re}(\overline{u}v) + \operatorname{Im}(\overline{u}v)\,i$이므로 값은 $i\operatorname{Im}(\overline{u}v)$이다.

**(3)** $h(z) = f(z) + \alpha\overline{z}$인 $h : U \to \mathbb{C}$가 정칙함수라 가정하자. [[closed-triangle|닫힌 삼각형]]의 (2)에 의해 둘레의 세 상은 $\Delta(p, b, c) \subseteq U$에 든다. 구르사 정리를 $f$와 $h$에 쓰면 두 둘레 적분이 모두 $0$이다. 한편 경로 적분의 (1)(선형성과 상 위의 값)과 이 문제의 (2)에 의해
$$
\begin{aligned}
&\int_{\partial\Delta(p, b, c)} h \\
&\quad = \int_{\partial\Delta(p, b, c)} f + \alpha\, i\operatorname{Im}(\overline{u}v) \\
&\quad = \alpha\, i \operatorname{Im}(\overline{u}v)
\end{aligned}
$$
이고, $\alpha \ne 0$, $i \ne 0$, $\operatorname{Im}(\overline{u}v) \ne 0$이므로 복소수체의 (1)(체)에 의해 이 값은 $0$이 아니다. 어긋나므로 $h$는 정칙함수가 아니다.

(2)에서 $\operatorname{Im}(\overline{u}v) = 0$이면 값이 $0$이고, 이것은 [[closed-triangle|닫힌 삼각형]]의 (9)의 (iii)과 맞는다.
:::

:::exercise[둘레 적분이 0 인 삼각형이 있는 $|z|^2$]
$z$에서의 값이 $|z|^2$(실수 $|z|^2$를 $\iota$로 옮긴 것)인 함수 $g : \mathbb{C} \to \mathbb{C}$를 생각한다.

1. $\int_{\partial\Delta(2,\ -1 + i,\ -1 - i)} g = 0$임을 보여라.
2. $\int_{\partial\Delta(0, 1, i)} g = -\tfrac13 + \tfrac13 i$임을 보여라.
3. $\Delta(2, -1 + i, -1 - i)$를 포함하는 어떤 열린집합 $U$에서도 $g|_U$가 정칙함수가 아님을 보여라. 곧 한 삼각형의 둘레 적분이 $0$이라는 것만으로는 그 둘레의 안팎에서 정칙이라고 할 수 없다.
:::

:::solution
[[modulus-of-complex-number|복소수의 절댓값]]의 (2)에 의해 $g(z) = z\overline{z}$이므로, [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2)(항등함수와 켤레)와 (3)(곱)에 의해 $g$는 연속이고 둘레 적분이 정해진다. 선분 $\sigma_{z,w}$에서 $e = w - z$로 두면 피적분함수의 $t$에서의 값은 $\iota(|\sigma_{z,w}(t)|^2)\,e$이고, [[integral-of-complex-valued-function|복소수값 함수의 적분]]의 (2)와 [[properties-of-integral-of-complex-valued-function|복소수값 함수의 적분의 성질]]의 (1)(복소수배)에 의해
$$
\int_{\sigma_{z,w}} g = e\,\int_0^1 |\sigma_{z,w}(t)|^2\,dt
$$
이다. 오른쪽의 실함수의 적분은 [[antiderivative-and-integral-of-power]]의 (3)과 [[linearity-of-the-integral|적분의 선형성]]의 (4)로 계산한다($\int_0^1 t^k\,dt = 1/(k + 1)$). $|\zeta|^2 = (\operatorname{Re}\zeta)^2 + (\operatorname{Im}\zeta)^2$은 복소수의 절댓값의 (1)이다.

**(1)** 세 선분과 $e$, $|\sigma(t)|^2$, 그 적분은 다음과 같다([[path-in-the-complex-plane|경로]]의 (2)).

- $\sigma_{2,-1+i}(t) = (2 - 3t) + ti$, $e = -3 + i$: $|\sigma(t)|^2 = 4 - 12t + 10t^2$이고 적분은 $4 - 6 + \tfrac{10}{3} = \tfrac43$이다.
- $\sigma_{-1+i,-1-i}(t) = -1 + (1 - 2t)i$, $e = -2i$: $|\sigma(t)|^2 = 2 - 4t + 4t^2$이고 적분은 $2 - 2 + \tfrac43 = \tfrac43$이다.
- $\sigma_{-1-i,2}(t) = (-1 + 3t) + (-1 + t)i$, $e = 3 + i$: $|\sigma(t)|^2 = 2 - 8t + 10t^2$이고 적분은 $2 - 4 + \tfrac{10}{3} = \tfrac43$이다.

경로열의 경로 적분의 정의([[path-integral|경로 적분]])에 의해 둘레 적분은 $\tfrac43\bigl((-3 + i) + (-2i) + (3 + i)\bigr) = \tfrac43 \cdot 0 = 0$이다.

**(2)** 같은 방법으로

- $\sigma_{0,1}(t) = t$, $e = 1$: $|\sigma(t)|^2 = t^2$, 적분 $\tfrac13$.
- $\sigma_{1,i}(t) = (1 - t) + ti$, $e = -1 + i$: $|\sigma(t)|^2 = 1 - 2t + 2t^2$, 적분 $1 - 1 + \tfrac23 = \tfrac23$.
- $\sigma_{i,0}(t) = (1 - t)i$, $e = -i$: $|\sigma(t)|^2 = 1 - 2t + t^2$, 적분 $1 - 1 + \tfrac13 = \tfrac13$.

이므로 둘레 적분은 $\tfrac13 + \tfrac23(-1 + i) + \tfrac13(-i) = -\tfrac13 + \tfrac13 i$이다.

**(3)** $U$가 $\Delta(2, -1 + i, -1 - i)$를 포함하는 열린집합이라 하자. [[closed-triangle|닫힌 삼각형]]의 (1)에 의해 $2$는 이 삼각형의 원소이므로 $2 \in U$이다. [[complex-differentiability-examples|복소 미분가능하지 않은 함수의 예]]의 (5)에 의해 $g$는 $0$이 아닌 점 $2$에서 복소 미분가능하지 않고, [[complex-derivative|복소 미분]]의 (4)의 (i)에 의해 $g|_U$도 $2$에서 복소 미분가능하지 않다. 따라서 $g|_U$는 정칙함수가 아니다. 그런데도 (1)에 의해 이 삼각형의 둘레 적분은 $0$이다. (2)는 같은 $g$에서 둘레 적분이 $0$이 아닌 삼각형도 있다는 것을 보인다.
:::
