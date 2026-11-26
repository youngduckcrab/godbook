---
written_by: Claude
status: reviewed
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 7절, 연습문제 7.5 (p.31)"
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 7절 Subspaces 첫머리, 조건 αu + βv (p.30)"
added: 2026-11-26
---

:::exercise[벡터 식 하나를 정리하기]
$V$가 벡터공간이고 $u$, $v \in V$라 하자. 벡터공간의 정의 (V1)–(V8), 벡터공간의 기본 성질 (B1)–(B12), 실수의 계산 법칙만 인용하여

$$
3(u - 2v) + 2(3v - u) = u
$$

임을 보여라.
:::

:::solution
[[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B11)에서 $\alpha = 3$이고 두 벡터가 $u$, $2v$인 경우를 쓰면 $3(u - 2v) = 3u - 3(2v)$이다. [[vector-space|(V6)]]에 의해 $3(2v) = (3 \cdot 2)v = 6v$이다([[real-number-arithmetic|(K7)]]의 계산 $3 \cdot 2 = 6$). 따라서 $3(u - 2v) = 3u + (-(6v))$이다. 같은 방법으로 $2(3v - u) = 2(3v) - 2u = 6v + (-(2u))$이다.

두 벡터를 더한다. 먼저 (V2)를 두 번 쓰면

$$
\begin{aligned}
&\bigl(3u + (-(6v))\bigr) + \bigl(6v + (-(2u))\bigr)\\
&\quad= 3u + \Bigl(\bigl((-(6v)) + 6v\bigr)\\
&\qquad\qquad + (-(2u))\Bigr)
\end{aligned}
$$

이다. (V1)과 (B2)에 의해 $(-(6v)) + 6v = 6v + (-(6v)) = 0_V$이고, (V1)과 영벡터의 정의에 의해 $0_V + (-(2u)) = (-(2u)) + 0_V = -(2u)$이다. 따라서 왼쪽 변은 $3u + (-(2u)) = 3u - 2u$이다. (B11)의 둘째 등식에 의해 $3u - 2u = (3 - 2)u$이고, (K7)의 계산 $3 + (-2) = 1$에 의해 이것은 $1u$이며, (V5)에 의해 $1u = u$이다. 곧 $3(u - 2v) + 2(3v - u) = u$이다.
:::

:::exercise[벡터 방정식의 해]
$V$가 벡터공간이고 $v$, $w \in V$이며 $\alpha$가 실수라 하자. $x \in V$에 대한 방정식 $\alpha x + v = w$를 생각한다.

1. $\alpha \ne 0$이면 이 방정식의 해가 정확히 하나 있고 그것이 $\alpha^{-1}(w - v)$임을 보여라.
2. $\alpha = 0$이면, $v = w$일 때는 $V$의 모든 원소가 해이고 $v \ne w$일 때는 해가 없음을 보여라.
:::

:::solution
**(1)** $x_0 = \alpha^{-1}(w - v)$라 하자. [[real-number-arithmetic|(K8)]]의 (iii)에 의해 $\alpha\alpha^{-1} = 1$이므로 [[vector-space|(V6)]]과 (V5)에 의해

$$
\begin{aligned}
\alpha x_0 &= \alpha\bigl(\alpha^{-1}(w - v)\bigr)\\
&= (\alpha\alpha^{-1})(w - v) = 1(w - v)\\
&= w - v
\end{aligned}
$$

이다. 그러면 $\alpha x_0 + v = (w + (-v)) + v = w + ((-v) + v)$이고((V2)), (V1)과 [[vector-space-basic-properties|(B2)]]에 의해 $(-v) + v = v + (-v) = 0_V$이므로 $\alpha x_0 + v = w + 0_V = w$이다. 곧 $x_0$은 해이다.

거꾸로 $x$가 해라 하자. 그러면 $\alpha x + v = w = \alpha x_0 + v$이고, (B7)에 의해 $\alpha x = \alpha x_0$이다. (K8)의 (iii)과 (K1)에 의해 $\alpha^{-1}\alpha = 1$이므로 (V5)와 (V6)에 의해

$$
\begin{aligned}
x &= 1x = (\alpha^{-1}\alpha)x = \alpha^{-1}(\alpha x)\\
&= \alpha^{-1}(\alpha x_0) = (\alpha^{-1}\alpha)x_0\\
&= 1x_0 = x_0
\end{aligned}
$$

이다. 따라서 해는 $x_0$ 하나뿐이다.

**(2)** $\alpha = 0$이면 모든 $x \in V$에서 (B3)에 의해 $0x = 0_V$이고, (V1)과 영벡터의 정의에 의해 $0x + v = 0_V + v = v + 0_V = v$이다. 따라서 $x$가 해인 것은 정확히 $v = w$일 때이다. $v = w$이면 모든 $x \in V$가 해이고, $v \ne w$이면 어떤 $x$도 해가 아니다.
:::

:::exercise[스칼라 하나로 줄인 부분공간 판정]
$V$가 벡터공간이고 $W$가 $V$의 부분집합이라 하자. $W$가 $V$의 부분공간인 것은 정확히 다음 두 조건이 모두 성립할 때임을 보여라.

- $W \ne \emptyset$이다.
- 모든 $u$, $v \in W$와 모든 실수 $\alpha$에 대하여 $\alpha u + v \in W$이다. ($u$와 $v$가 같은 원소여도 된다.)
:::

:::solution
($\Rightarrow$) $W$가 [[subspace|부분공간]]이라 하자. (S1)에 의해 $0_V \in W$이므로 $W \ne \emptyset$이다. $u$, $v \in W$이고 $\alpha$가 실수이면 (S3)에 의해 $\alpha u \in W$이고, (S2)를 $\alpha u$와 $v$에 쓰면 $\alpha u + v \in W$이다.

($\Leftarrow$) 두 조건이 성립한다고 하자. $W \ne \emptyset$이므로 $u \in W$인 $u$가 있다.

(S1): 둘째 조건에서 $\alpha = -1$이고 두 원소를 모두 $u$로 두면 $(-1)u + u \in W$이다. [[vector-space-basic-properties|(B5)]]에 의해 $(-1)u = -u$이고, [[vector-space|(V1)]]과 (B2)에 의해 $(-u) + u = u + (-u) = 0_V$이다. 따라서 $0_V \in W$이다.

(S2): $v$, $v' \in W$이면 둘째 조건에서 $\alpha = 1$로 두어 $1v + v' \in W$이고, (V5)에 의해 $1v + v' = v + v'$이다.

(S3): $v \in W$이고 $\alpha$가 실수라 하자. (S1)에서 $0_V \in W$임을 보였으므로 둘째 조건을 $v$와 $0_V$에 쓰면 $\alpha v + 0_V \in W$이고, 영벡터의 정의에 의해 $\alpha v + 0_V = \alpha v$이다.

(S1)–(S3)이 모두 성립하므로 $W$는 부분공간이다.
:::

:::exercise[1을 옮긴 연산으로 만든 벡터공간]
$V = \mathbb{R}$에 실수 $u$, $v$, $\alpha$마다

$$
\begin{aligned}
u \oplus v &= (u + v) + (-1),\\
\alpha \odot v &= (\alpha v + (-\alpha)) + 1
\end{aligned}
$$

로 덧셈 $\oplus$와 스칼라배 $\odot$을 정한다(오른쪽은 실수의 합과 곱). 실수 $v$에 대하여 $s(v) = v + (-1)$로 쓴다.

1. 모든 실수 $u$, $v$, $\alpha$에서 $s(u \oplus v) = s(u) + s(v)$이고 $s(\alpha \odot v) = \alpha\, s(v)$임을 보여라. 또 $s(a) = s(b)$이면 $a = b$임을 보여라.
2. (1)을 써서 이 두 연산에 관하여 $V$가 벡터공간임을 보여라.
3. 이 벡터공간의 영벡터와, $v$의 덧셈 역원을 구하라.
:::

:::solution
두 연산은 각 순서쌍에 실수 하나를 정하므로 [[real-function-space|(G)]]에 의해 함수 $\oplus : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$와 $\odot : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$이다. 아래 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의한다. (K8)의 (ii)와 (K1)에 의해 $1 + (-1) = (-1) + 1 = 0$이다.

**(1)** 첫째 등식. (K2), (K2), (K1), (K2)를 차례로 써서

$$
\begin{aligned}
&s(u) + s(v)\\
&\quad= (u + (-1)) + (v + (-1))\\
&\quad= \bigl((u + (-1)) + v\bigr) + (-1)\\
&\quad= \bigl(u + ((-1) + v)\bigr) + (-1)\\
&\quad= \bigl(u + (v + (-1))\bigr) + (-1)\\
&\quad= \bigl((u + v) + (-1)\bigr) + (-1)\\
&\quad= s(u \oplus v)
\end{aligned}
$$

이다. 둘째 등식. (K12)의 (ii)와 (K4)에 의해 $\alpha(-1) = -(\alpha \cdot 1) = -\alpha$이므로, (K2), (K4), (K3)에 의해

$$
\begin{aligned}
&s(\alpha \odot v)\\
&\quad= \bigl((\alpha v + (-\alpha)) + 1\bigr) + (-1)\\
&\quad= (\alpha v + (-\alpha)) + 0\\
&\quad= \alpha v + \alpha(-1)\\
&\quad= \alpha(v + (-1)) = \alpha\, s(v)
\end{aligned}
$$

이다. 셋째로 $s(a) = s(b)$, 곧 $a + (-1) = b + (-1)$이라 하자. 모든 실수 $c$에서 (K2)와 (K4)에 의해 $(c + (-1)) + 1 = c + ((-1) + 1) = c + 0 = c$이므로 $a = (a + (-1)) + 1 = (b + (-1)) + 1 = b$이다.

**(2)** $u$, $v$, $w$는 실수이고 $\alpha$, $\beta$는 실수이다. 각 법칙은 두 변에 $s$를 적용한 값이 같음을 보이고 (1)의 셋째 사실로 두 변이 같다고 결론한다.

- (V1): $s(u \oplus v) = s(u) + s(v) = s(v) + s(u) = s(v \oplus u)$이다((K1)).
- (V2): $s((u \oplus v) \oplus w) = (s(u) + s(v)) + s(w) = s(u) + (s(v) + s(w)) = s(u \oplus (v \oplus w))$이다((K2)).
- (V3): $s(1) = 1 + (-1) = 0$이다. 따라서 $s(v \oplus 1) = s(v) + 0 = s(v)$((K4))이고 $v \oplus 1 = v$이다. 곧 $1$은 영벡터이다.
- (V4): $z$가 영벡터라 하자. 영벡터의 정의에서 $v = 1$로 두면 $1 \oplus z = 1$이고, 두 변에 $s$를 적용하면 $0 + s(z) = 0$이다. (K1)과 (K4)에 의해 $0 + s(z) = s(z)$이므로 $s(z) = 0 = s(1)$이고 $z = 1$이다. 이제 $v$가 주어지면 $w = (-v) + 2$로 둔다. (K2)와 (K7)의 계산 $2 + (-1) = 1$에 의해 $s(w) = (-v) + 1$이고, (K12)의 (iv)와 (K9)에 의해 $-s(v) = -(v + (-1)) = (-v) + (-(-1)) = (-v) + 1$이다. 따라서 $s(v \oplus w) = s(v) + s(w) = s(v) + (-s(v)) = 0 = s(z)$이고 $v \oplus w = z$이다.
- (V5): $s(1 \odot v) = 1 \cdot s(v) = s(v)$((K1), (K4))이므로 $1 \odot v = v$이다.
- (V6): $s((\alpha\beta) \odot v) = (\alpha\beta)s(v) = \alpha(\beta s(v)) = \alpha\, s(\beta \odot v) = s(\alpha \odot (\beta \odot v))$이다((K2)).
- (V7): $s(\alpha \odot (u \oplus v)) = \alpha(s(u) + s(v)) = \alpha s(u) + \alpha s(v) = s(\alpha \odot u) + s(\alpha \odot v) = s((\alpha \odot u) \oplus (\alpha \odot v))$이다((K3)).
- (V8): $s((\alpha + \beta) \odot v) = (\alpha + \beta)s(v) = \alpha s(v) + \beta s(v) = s(\alpha \odot v) + s(\beta \odot v) = s((\alpha \odot v) \oplus (\beta \odot v))$이다((K12)의 (i)).

(V1)–(V8)이 모두 성립하므로 $V$는 [[vector-space|벡터공간]]이다.

**(3)** (2)의 (V3)과 (V4)에서 보였듯이 영벡터는 $1$뿐이고, $v$의 덧셈 역원은 $(-v) + 2$이다. 예를 들어 $v = 3$이면 덧셈 역원은 $-1$이고, 실제로 $3 \oplus (-1) = (3 + (-1)) + (-1) = 1$이다(수의 계산은 (K7)).
:::

:::exercise[짝함수와 홀함수]
$\mathbb{R}^{\mathbb{R}}$을 [[real-function-space|실숫값 함수의 공간]]에서 $X = \mathbb{R}$로 둔 벡터공간이라 하자. 모든 실수 $t$에서 $f(-t) = f(t)$인 $f \in \mathbb{R}^{\mathbb{R}}$ 전체의 집합을 $E$, 모든 실수 $t$에서 $f(-t) = -f(t)$인 $f \in \mathbb{R}^{\mathbb{R}}$ 전체의 집합을 $O$라 하자.

1. $E$와 $O$가 $\mathbb{R}^{\mathbb{R}}$의 부분공간임을 보여라.
2. $E \cap O = \{o\}$임을 보여라. 여기서 $o$는 영함수이다.
3. $E + O = \mathbb{R}^{\mathbb{R}}$임을 보여라.
4. $E \cup O$는 부분공간이 아님을 보여라.
:::

:::solution
아래에서 $t$는 실수이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]에 의한다. 먼저 작은 사실 하나를 보인다. 실수 $p$, $q$, $r$, $w$에 대하여 $(p + q) + (r + w) = (p + r) + (q + w)$이다. (K2), (K2), (K1), (K2), (K2)를 차례로 쓰면

$$
\begin{aligned}
&(p + q) + (r + w)\\
&\quad= p + (q + (r + w))\\
&\quad= p + ((q + r) + w)\\
&\quad= p + ((r + q) + w)\\
&\quad= p + (r + (q + w))\\
&\quad= (p + r) + (q + w)
\end{aligned}
$$

이기 때문이다. 이것을 (가)라 부른다.

**(1)** [[subspace|부분공간]]의 (S1)–(S3)을 확인한다. [[real-function-space|실숫값 함수의 공간]]의 (1)에 의해 영벡터는 $o$이고 연산은 값마다 계산한다.

$E$: $o(-t) = 0 = o(t)$이므로 $o \in E$이다. $f$, $g \in E$이면 $(f + g)(-t) = f(-t) + g(-t) = f(t) + g(t) = (f + g)(t)$이고, 실수 $\alpha$에 대하여 $(\alpha f)(-t) = \alpha f(-t) = \alpha f(t) = (\alpha f)(t)$이다.

$O$: (K9)에 의해 $-0 = (-1) \cdot 0 = 0$이므로 $o(-t) = 0 = -0 = -o(t)$이고 $o \in O$이다. $f$, $g \in O$이면 (K12)의 (iv)에 의해 $(f + g)(-t) = (-f(t)) + (-g(t)) = -(f(t) + g(t)) = -(f + g)(t)$이고, (K12)의 (ii)에 의해 $(\alpha f)(-t) = \alpha(-f(t)) = -(\alpha f(t)) = -(\alpha f)(t)$이다.

**(2)** (1)에서 $o \in E$이고 $o \in O$이다. 거꾸로 $f \in E \cap O$라 하자. 모든 $t$에서 $f(t) = f(-t) = -f(t)$이므로 $f(t) + f(t) = f(t) + (-f(t)) = 0$이다. (K7)의 $1 + 1 = 2$와 (K12)의 (i), (K1), (K4)에 의해 $2f(t) = 1 f(t) + 1 f(t) = f(t) + f(t) = 0$이고, $2 \ne 0$((K7))이므로 (K10)에 의해 $f(t) = 0$이다. 모든 $t$에서 $f(t) = o(t)$이므로 함수의 같음에 의해 $f = o$이다. 따라서 $E \cap O = \{o\}$이다.

**(3)** $E + O$의 원소는 $\mathbb{R}^{\mathbb{R}}$의 두 원소의 합이므로 $E + O \subseteq \mathbb{R}^{\mathbb{R}}$이다. 거꾸로 $f \in \mathbb{R}^{\mathbb{R}}$라 하자. (K7)에 의해 $2 \ne 0$이므로 $2^{-1}$이 있다. 각 $t$에 실수가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해

$$
\begin{aligned}
g(t) &= 2^{-1}\bigl(f(t) + f(-t)\bigr),\\
h(t) &= 2^{-1}\bigl(f(t) - f(-t)\bigr)
\end{aligned}
$$

인 함수 $g$, $h \in \mathbb{R}^{\mathbb{R}}$이 있다.

$g \in E$: (K9)에 의해 $-(-t) = t$이므로 $g(-t) = 2^{-1}(f(-t) + f(t))$이고, (K1)에 의해 이것은 $g(t)$이다.

$h \in O$: 같은 이유로 $f(-(-t)) = f(t)$이므로 $h(-t) = 2^{-1}(f(-t) + (-f(t)))$이다. (K12)의 (iv)와 (K9), (K1)에 의해 $-(f(t) + (-f(-t))) = (-f(t)) + f(-t) = f(-t) + (-f(t))$이므로, (K12)의 (ii)에 의해 $h(-t) = 2^{-1}\bigl(-(f(t) - f(-t))\bigr) = -h(t)$이다.

$g + h = f$: (K3)에 의해 $(g + h)(t) = 2^{-1}\bigl((f(t) + f(-t)) + (f(t) + (-f(-t)))\bigr)$이다. (가)에 의해 괄호 안은 $(f(t) + f(t)) + (f(-t) + (-f(-t))) = (f(t) + f(t)) + 0 = f(t) + f(t)$이고, (2)에서처럼 이것은 $2f(t)$이다. (K2)와 (K8)의 (iii), (K1), (K4)에 의해 $2^{-1}(2f(t)) = (2^{-1} \cdot 2) f(t) = 1 f(t) = f(t)$이다. 모든 $t$에서 값이 같으므로 $g + h = f$이다.

따라서 $f = g + h$이고 $g \in E$, $h \in O$이므로 [[subspace-intersection-and-sum|부분공간의 교집합과 합]]에서 정한 합의 원소이다. 곧 $\mathbb{R}^{\mathbb{R}} \subseteq E + O$이고, 두 포함에 의해 $E + O = \mathbb{R}^{\mathbb{R}}$이다.

**(4)** $c$를 모든 $t$에서 값이 $1$인 함수, $i_{\mathbb{R}}$를 $\mathbb{R}$ 위의 [[inverse-function|항등함수]](모든 $t$에서 값이 $t$)라 하자.

$c(-t) = 1 = c(t)$이므로 $c \in E$이다. $c \in O$라면 $t = 0$에서 $1 = c(-0) = -c(0) = -1$이고, 그러면 $1 + 1 = 1 + (-1) = 0$이 되어 (K7)의 $1 + 1 = 2 \ne 0$에 어긋난다. 따라서 $c \notin O$이고 $E \not\subseteq O$이다.

$i_{\mathbb{R}}(-t) = -t = -i_{\mathbb{R}}(t)$이므로 $i_{\mathbb{R}} \in O$이다. $i_{\mathbb{R}} \in E$라면 $t = 1$에서 $-1 = i_{\mathbb{R}}(-1) = i_{\mathbb{R}}(1) = 1$이고, 위와 같은 이유로 어긋난다. 따라서 $i_{\mathbb{R}} \notin E$이고 $O \not\subseteq E$이다.

$E$, $O$는 (1)에 의해 부분공간이고 어느 쪽도 다른 쪽에 들어 있지 않으므로, [[union-of-subspaces|부분공간의 합집합]]의 정리에 의해 $E \cup O$는 부분공간이 아니다.
:::

:::exercise[정수 좌표의 점 전체]
$W = \{x \in \mathbb{R}^2 : x_1 \text{과 } x_2 \text{가 모두 정수}\}$라 하자. $W$가 부분공간의 조건 (S1)과 (S2)를 만족하지만 (S3)을 만족하지 않음을 보여라. 따라서 부분공간의 정의에서 (S3)을 뺄 수 없다.
:::

:::solution
[[real-function-space|실숫값 함수의 공간과 ℝⁿ]]에 의해 $\mathbb{R}^2$의 영벡터는 $(0, 0)$이고 덧셈과 스칼라배는 값마다 계산한다.

(S1): $0$은 정수이므로 $(0, 0) \in W$이다.

(S2): $x$, $y \in W$이면 $x + y = (x_1 + y_1, x_2 + y_2)$이다. [[real-number-arithmetic|(K7)]]에 의해 두 정수의 실수로서의 합은 정수로서의 합과 같은 수이고, [[even-and-odd|짝수와 홀수]]의 진술에서 받아들인 대로 정수끼리 더한 결과는 정수이다. 따라서 $x_1 + y_1$과 $x_2 + y_2$는 정수이고 $x + y \in W$이다.

(S3)이 성립하지 않음: (K7)에 의해 $2 \ne 0$이므로 $2^{-1}$이 있다. $x = (1, 0) \in W$이고 $\alpha = 2^{-1}$이면 $\alpha x = (2^{-1} \cdot 1, 2^{-1} \cdot 0) = (2^{-1}, 0)$이다((K4), (K9)). $2^{-1}$이 정수 $n$이라 하자. (K8)의 (iii)에 의해 $2n = 2 \cdot 2^{-1} = 1$이고, (K7)에 의해 이 곱은 정수로서의 곱과 같으므로 정수 $1$은 $1 = 2n$인 정수 $n$을 가져 짝수이다. 한편 $1 = 2 \cdot 0 + 1$이므로 $1$은 홀수이다. 짝수와 홀수의 진술에서 받아들인 대로 둘 다인 정수는 없으므로 모순이다. 따라서 $2^{-1}$은 정수가 아니고 $\alpha x \notin W$이다.

곧 $W$는 (S1), (S2)를 만족하지만 (S3)을 만족하지 않으므로 [[subspace|부분공간]]이 아니다.
:::
