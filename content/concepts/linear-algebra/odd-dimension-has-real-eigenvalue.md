---
title: 홀수 크기의 행렬은 실고윳값을 갖는다
title_en: Matrices of Odd Size Have a Real Eigenvalue
aliases: [홀수 차원의 실고윳값, 홀수 차수 다항함수의 근, 다항함수의 연속, odd-dimensional real eigenvalue, odd degree polynomial has a real root]
kind: theorem
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 다항함수는 연속함수이고, 차수가 1 이상인 다항함수의 값은 절댓값이 충분히 큰 x 에서 최고차항과 부호가 같다. 그래서 차수가 홀수인 다항함수는 근을 갖고, n 이 홀수이면 모든 n × n 행렬과 홀수 차원 공간의 모든 선형사상은 고윳값을 갖는다. 짝수 크기에서는 고윳값이 없을 수 있다.
requires: [function, real-number-arithmetic, prime-number, even-and-odd, well-ordering-principle, mathematical-induction, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, power-of-a-real-number, real-valued-function, interval, continuous-function, continuity-of-sum-and-product, power-function-is-continuous, intermediate-value-theorem, vector-space, real-function-space, finite-sum-of-vectors, standard-basis, linear-map, matrix, matrix-vector-product, eigenvalue-and-eigenvector, polynomial-function, coefficients-of-polynomial-function, characteristic-polynomial, eigenvalue-iff-root, characteristic-polynomial-examples]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 1절 Main definitions, 1.4 Complex vs real spaces, p.102; 4장 1절 연습문제 1.1 c), 1.3, p.104; 4장 2절 Diagonalization, 연습문제 2.2, p.114; 6장 5절 Structure of orthogonal matrices, Theorem 5.1 의 증명, pp.188–190"
    checked: original
    note: "출처는 홀수 크기의 실행렬이 실고윳값을 갖는다는 것을 명제로 적지 않는다(책 전체 검색: 'odd' 13건은 3장 연습문제 3.4 의 반대칭 행렬의 행렬식(p.85)과 3장 3절의 치환의 홀짝(pp.88–89), 'real eigenvalue' 14건, 'real root' 0건, 'intermediate value' 1건(7장 p.195 의 det V(t) 의 부호)을 읽었고, 4장 1절·2절의 연습문제를 처음부터 읽었다). 출처 4장 1.4(p.102)는 대수학의 기본정리가 차수 1 이상의 다항식에 복소수 근을 준다고 적고, 실벡터공간에서는 ℝ² 의 회전처럼 실고윳값이 없는 선형사상을 쉽게 만들 수 있다고 적는다. 4장 2절 연습문제 2.2(p.114)는 실행렬의 복소 고윳값 λ 의 켤레도 고윳값임을 보이라고 하고, 6장 5절 Theorem 5.1 의 증명(pp.188–190)은 실계수 다항식의 복소수 근은 켤레와 짝을 이루므로 실행렬의 복소 고윳값은 쌍으로 나뉜다고 적는다. 홀수 크기에서 실고윳값이 남는다는 결론은 이 쌍의 논법에서도 나오지만, 이 사이트는 복소수를 쓰지 않으므로 사잇값 정리로 증명했다. (1)–(4)의 진술과 증명은 이 사이트가 썼고, 다항함수의 연속은 해석학 입문의 power-function-is-continuous 와 continuity-of-sum-and-product 로, 부호의 어림은 ±∞ 의 극한 없이 절댓값의 어림으로 했다. 반례 '고윳값이 없는 2 × 2 행렬과 4 × 4 행렬'의 J 는 출처 1.4 가 드는 회전 R_α 에서 α 를 직각으로 둔 것이고, 4장 1절 연습문제 1.3(p.104)의 회전행렬과 1.1 c)(p.104)가 묻는 '실고윳값이 없는 실정사각행렬'의 한 예이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(새로 쓴 증명 통독, 예의 수치 확인). 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$\mathbb{R}^{\mathbb{R}}$, $t^k$, $\mathcal{P}_m$, 다항함수는 [[polynomial-function|다항함수]]의 것이고, 차수와 최고차계수는 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 것이다. 연속과 연속함수는 [[continuous-function|연속함수]]의 것이고($S = \mathbb{R}$), 순서와 절댓값은 [[real-order-axioms|실수의 순서]]와 [[absolute-value|절댓값]]의 것이며, $x^n$은 [[power-of-a-real-number|실수의 거듭제곱]]의 것이다. 홀수는 [[even-and-odd|짝수와 홀수]]의 것이다.

1. (다항함수의 연속) 모든 다항함수 $f : \mathbb{R} \to \mathbb{R}$는 연속함수이다.
2. (절댓값이 큰 곳에서의 부호) $f$가 영함수가 아닌 다항함수이고 $n = \deg f \ge 1$이며 $c$가 $f$의 최고차계수라 하자. 그러면 $1 \le R$인 실수 $R$이 있어, $R \le |x|$인 모든 실수 $x$에서 $0 < f(x)\,(c\,x^n)$이다. 곧 그런 $x$에서 $0 < c\,x^n$이면 $0 < f(x)$이고, $c\,x^n < 0$이면 $f(x) < 0$이다.
3. (홀수 차수의 다항함수) 차수가 홀수인 다항함수는 근을 갖는다. 곧 $f(x) = 0$인 실수 $x$가 있다.
4. (홀수 크기의 행렬과 선형사상) $n$이 홀수인 자연수이면 모든 $n \times n$ [[matrix|행렬]] $A$는 [[eigenvalue-and-eigenvector|고윳값]]을 갖는다. $V$가 유한차원 [[vector-space|벡터공간]]이고 $\dim V$가 홀수이면 모든 [[linear-map|선형사상]] $T : V \to V$는 고윳값을 갖는다.
:::

:::english
$\mathbb{R}^{\mathbb{R}}$, $t^k$, $\mathcal{P}_m$ and polynomial functions are those of the entry on polynomial functions, and the degree and the leading coefficient are those of the entry on coefficients and degree. Continuity and continuous functions are those of the entry on continuous functions (with $S = \mathbb{R}$), the order and the absolute value are those of the order axioms of the reals and of the entry on absolute value, and $x^n$ is a power of a real number. Odd numbers are those of the entry on even and odd numbers.

1. (Continuity of polynomial functions) Every polynomial function $f : \mathbb{R} \to \mathbb{R}$ is a continuous function.
2. (Sign where the absolute value is large) Let $f$ be a polynomial function that is not the zero function, let $n = \deg f \ge 1$, and let $c$ be the leading coefficient of $f$. Then there is a real number $R$ with $1 \le R$ such that $0 < f(x)\,(c\,x^n)$ for every real number $x$ with $R \le |x|$. That is, for such $x$, if $0 < c\,x^n$ then $0 < f(x)$, and if $c\,x^n < 0$ then $f(x) < 0$.
3. (Polynomial functions of odd degree) A polynomial function of odd degree has a root; that is, there is a real number $x$ with $f(x) = 0$.
4. (Matrices and linear maps of odd size) If $n$ is an odd natural number, then every $n \times n$ matrix $A$ has an eigenvalue. If $V$ is a finite-dimensional vector space and $\dim V$ is odd, then every linear map $T : V \to V$ has an eigenvalue.
:::

## 직관

차수가 홀수인 다항함수의 그래프는 한쪽 끝에서는 아주 높이, 다른 쪽 끝에서는 아주 낮게 갑니다. $x$의 절댓값이 크면 최고차항 $c\,x^n$이 나머지 항들을 모두 합한 것보다 커서 값의 부호를 정하는데, $n$이 홀수이면 $x^n$의 부호가 $x$와 같아서 $x$가 큰 양수일 때와 큰 음수일 때 부호가 반대이기 때문입니다. 연속함수가 음수에서 양수로 가려면 그 사이 어딘가에서 $0$을 지나야 하므로(사잇값 정리) 근이 있습니다.

강을 건너는 길에 비유하면, 출발점이 강의 남쪽 기슭이고 도착점이 북쪽 기슭이며 길이 끊기지 않았다면 길은 어딘가에서 강을 건넙니다. 비유가 맞는 것은 "끊기지 않음"이 연속, "남쪽과 북쪽"이 값의 부호라는 데까지이고, 비유와 달리 이 증명은 건너는 자리가 어디인지 알려 주지 않습니다.

특성다항식 $p_A$의 차수는 $n$이므로 $n$이 홀수이면 $p_A$에 근이 있고, 그 근이 고윳값입니다. 짝수 크기에서는 이 논법이 통하지 않습니다. 최고차항 $x^n$이 양쪽 끝에서 모두 같은 부호이므로 그래프가 $0$을 지나지 않을 수 있고, 실제로 $J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$에는 고윳값이 없습니다.

## 증명

:::idea
다항함수의 연속은 거듭제곱 함수의 연속과 합·상수배의 연속에서 차수에 대한 귀납으로 나온다. 절댓값이 큰 $x$에서는 최고차항이 나머지를 이기므로 부호가 정해지고, 홀수 차수에서는 $R$과 $-R$에서 부호가 반대이므로 사잇값 정리를 쓴다.
:::

:::hint
$g \in \mathcal{P}_{m+1}$은 $g' + a\,t^{m+1}$($g' \in \mathcal{P}_m$) 꼴로 쓸 수 있다. (1)과 (2)의 귀납 단계에서 이것을 쓰라.
:::

:::hint
$|x| \ge 1$이면 $|x|^m \le |x|^{m+1}$이다. 나머지 항들을 $K|x|^{n-1}$로 누르고, $|c|\,|x|^{n-1}|x|$가 그보다 커지는 $|x|$를 찾으라.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 것이고, 실수의 순서의 성질, 절댓값, 삼각부등식, 거듭제곱의 번호는 각각 [[order-properties-of-reals]], [[absolute-value]], [[triangle-inequality]], [[power-of-a-real-number]]의 것이다. $\mathbb{R}^{\mathbb{R}}$의 덧셈, 스칼라배와 [[real-valued-function|실함수]]의 (4)의 $f + g$, $kf$는 모든 $x$에서 값이 같으므로([[real-function-space|실숫값 함수의 공간]]) 실함수의 (2)에 의해 같은 함수이다.

**분해.** $m \ge 0$이 정수이고 $g \in \mathcal{P}_{m+1}$이면, $g = a_0 t^0 + \cdots + a_{m+1} t^{m+1}$인 $0$부터 번호가 붙은 실수의 열이 있다. 합의 정의(끝항을 더하는 규칙, [[finite-sum-of-vectors|벡터의 유한 합]])에 의해 $g = g' + a_{m+1} t^{m+1}$이고 $g' = a_0 t^0 + \cdots + a_m t^m \in \mathcal{P}_m$이다. [[standard-basis|표준기저]]의 (1)에 의해 모든 실수 $x$에서 $g(x) = g'(x) + a_{m+1} x^{m+1}$이다. 이것을 (가)라 부른다.

**(1)의 증명.** $m \ge 0$마다 "$\mathcal{P}_m$의 모든 원소는 연속함수이다"를 $m$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 보인다. [[polynomial-function|다항함수]]의 (4)에 의해 $\mathcal{P}_0$의 원소는 상수함수이고, [[continuous-function|연속함수]]의 (4)에 의해 연속함수이다. $\mathcal{P}_m$에서 성립한다고 하고 $g \in \mathcal{P}_{m+1}$이라 하자. (가)에 의해 $g = g' + a_{m+1} p_{m+1}$이다. 여기서 $p_{m+1}$은 [[power-function-is-continuous|거듭제곱 함수의 연속]]의 (1)의 함수 $x^{m+1}$이고 연속함수이다. [[continuity-of-sum-and-product|연속함수의 합과 곱]]의 (3)에 의해 $a_{m+1} p_{m+1}$은 연속함수이고, 귀납 가정에 의해 $g'$이 연속함수이므로 같은 (3)에 의해 $g$는 연속함수이다. 다항함수는 어떤 $\mathcal{P}_m$의 원소이므로 연속함수이다.

**(2)의 증명.** 먼저 다음 (나)를 $m$에 대한 귀납으로 보인다. (나) $m \ge 0$이 정수이고 $h \in \mathcal{P}_m$이면, $0 \le K$인 실수 $K$가 있어 $1 \le |x|$인 모든 실수 $x$에서 $|h(x)| \le K|x|^m$이다.

$m = 0$이면 $h$는 값이 $a$인 상수함수이고 $K = |a|$로 두면 $0 \le K$(절댓값의 (2))이며, $|x|^0 = 1$이므로 $|h(x)| = |a| = K|x|^0$이다. $m$에서 성립한다고 하고 $h \in \mathcal{P}_{m+1}$이라 하자. (가)에 의해 $h(x) = h'(x) + a x^{m+1}$이고, 귀납 가정에 의해 $h'$에 대한 $K' \ge 0$이 있다. $1 \le |x|$라 하자. 거듭제곱의 (6)의 (i)에 의해 $0 \le |x|^m$이고, 실수의 순서의 성질의 (4)의 (iii)에 의해 $|x|^m \cdot 1 \le |x|^m |x|$, 곧 거듭제곱의 (1)에 의해 $|x|^m \le |x|^{m+1}$이다. 삼각부등식의 (1), 절댓값의 (4), 거듭제곱의 (4)에 의해
$$
\begin{aligned}
|h(x)| &\le |h'(x)| + |a|\,|x|^{m+1} \\
&\le K'|x|^m + |a|\,|x|^{m+1} \\
&\le (K' + |a|)\,|x|^{m+1}
\end{aligned}
$$
이다. 둘째 줄은 귀납 가정이고, 셋째 줄은 $0 \le K'$과 실수의 순서의 성질의 (4)의 (iii), (2)의 (iii), (K3)이다. $K = K' + |a|$로 두면 $0 \le K$이다(순서의 성질의 (2)의 (iii)).

이제 $f$, $n$, $c$를 진술의 것이라 하자. 계수와 차수의 (4)에 의해 $f \in \mathcal{P}_n$이고, 같은 항목의 (2)의 (iii)에 의해 $f$의 표현에서 $t^n$의 계수는 $c$이다. (가)를 $m = n - 1$에 쓰면 모든 $x$에서 $f(x) = h(x) + c\,x^n$이고 $h \in \mathcal{P}_{n-1}$이다. (나)를 $h$와 $m = n - 1$에 써서 $K$를 얻는다. $c \ne 0$이므로 절댓값의 (2)에 의해 $0 < |c|$이고, 순서의 성질의 (6)의 (i)에 의해 $0 < |c|^{-1}$이다. $R = 1 + K|c|^{-1}$로 두면 순서의 성질의 (4)의 (iv)와 (2)에 의해 $1 \le R$이다.

$R \le |x|$라 하자. 그러면 $1 \le |x|$이므로 $|h(x)| \le K|x|^{n-1}$이고, 거듭제곱의 (6)의 (i)에 의해 $0 < |x|^{n-1}$이다(순서의 성질의 (5)의 (ii)로 $0 < 1 \le |x|$). 절댓값의 (4)와 거듭제곱의 (4), (1)에 의해 $|c\,x^n| = |c|\,|x|^{n-1}|x|$이고, $0 < |c|\,|x|^{n-1}$이므로 순서의 성질의 (4)의 (iii)과 (K3), (K6)에 의해
$$
\begin{aligned}
|c\,x^n| &\ge |c|\,|x|^{n-1} R \\
&= |c|\,|x|^{n-1} + K|x|^{n-1} \\
&> K|x|^{n-1} \ge |h(x)|
\end{aligned}
$$
이다(셋째 줄의 $>$는 순서의 성질의 (2)의 (ii)). 따라서 $|h(x)| < |c\,x^n|$이고, 절댓값의 (2)에 의해 $c\,x^n \ne 0$이다.

- $0 < c\,x^n$이면 $|c\,x^n| = c\,x^n$(절댓값의 (1))이고, 절댓값의 (6)에 의해 $-|h(x)| \le h(x)$이므로 $f(x) = c\,x^n + h(x) \ge c\,x^n - |h(x)| > 0$이다(순서의 성질의 (2), (3)의 (i)).
- $c\,x^n < 0$이면 $|c\,x^n| = -c\,x^n$이고, $h(x) \le |h(x)| < -c\,x^n$이므로 $f(x) = c\,x^n + h(x) < 0$이다(순서의 성질의 (2)의 (ii)).

어느 경우든 두 수가 둘 다 양수이거나 둘 다 음수이므로 [[real-order-axioms|(W4)]]와 순서의 성질의 (4)의 (iv)에 의해 $0 < f(x)\,(c\,x^n)$이다.

**(3)의 증명.** $f$를 차수 $n$이 홀수인 다항함수라 하자. 차수는 $0$ 이상인 정수이고, $0 = 2 \cdot 0$이므로 $0$은 짝수이며 짝수이면서 홀수인 정수는 없으므로([[even-and-odd|짝수와 홀수]]) $n \ne 0$이고, [[well-ordering-principle|(Z5)]]와 [[prime-number|(Z1)]]에 의해 $n \ge 1$이다. $c$를 최고차계수, $R$을 (2)의 것이라 하자. $1 \le R$이므로 $0 < R$이고 $|R| = R$, $|-R| = R$이다(절댓값의 (1), (3)). 거듭제곱의 (6)의 (i)에 의해 $0 < R^n$이고, 거듭제곱의 (2)의 (iii)과 (5)에 의해 $(-R)^n = ((-1)R)^n = (-1)^n R^n = -R^n$이다. 따라서 $c(-R)^n = -(c R^n)$이다((K9)).

$0 < c$이면 순서의 성질의 (4)의 (i)에 의해 $0 < cR^n$이고, 같은 (3)의 (ii)에 의해 $c(-R)^n < 0$이다. (2)에 의해 $0 < f(R)$이고 $f(-R) < 0$이다. $c < 0$이면 같은 방법으로 $f(R) < 0 < f(-R)$이다. ($c \ne 0$이므로 실수의 순서의 성질의 (1)과 [[real-order-axioms|(W1)]]에 의해 두 경우 가운데 하나이다.) $-R < R$이므로 $[-R, R]$은 [[interval|구간]]의 닫힌구간이다. (1)에 의해 $f$는 연속함수이므로 [[intermediate-value-theorem|사잇값 정리]]의 (3)과 (1)을 $y = 0$에 쓰면 $-R < x < R$이고 $f(x) = 0$인 실수 $x$가 있다.

**(4)의 증명.** [[characteristic-polynomial|특성다항식]]의 (1)에 의해 $p_A$는 영함수가 아닌 다항함수이고 차수는 홀수 $n$이다. (3)에 의해 $p_A(\lambda) = 0$인 실수 $\lambda$가 있고, [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 $\lambda$는 $A$의 고윳값이다. 선형사상에서는 $n = \dim V$가 홀수이므로 $n \ge 1$이고, 고윳값과 특성다항식의 근의 (6)에 의해 $p_T$는 영함수가 아닌 차수 $n$의 다항함수이며 그 근은 $T$의 고윳값이다. (3)에 의해 근이 있다. $\blacksquare$
:::

## 예시와 반례

:::example[1 × 1 행렬과 3 × 3 행렬의 고윳값]
$n = 1$이면 [[characteristic-polynomial|특성다항식]]의 (4)에 의해 $p_A(x) = a_{1,1} - x$이고, 근 $a_{1,1}$이 고윳값입니다. (4)는 이 경우에 새로운 것을 말하지 않습니다.

$n = 3$이고 $A = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$이라 합시다. (4)에 의해 $A$에는 고윳값이 있습니다. 실제로 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $x = (x_1, x_2, x_3)$에서 $Ax = (x_3, x_1, x_2)$이므로, $v = (1, 1, 1)$에서 $Av = v = 1v$이고 $v \ne 0$입니다. 따라서 $1$이 고윳값입니다. (4)는 어떤 수가 고윳값인지는 알려 주지 않고, 있다는 것만 보장합니다.
:::

:::counterexample[고윳값이 없는 2 × 2 행렬과 4 × 4 행렬]
$J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$에는 [[characteristic-polynomial-examples|특성다항식의 계산 예]]의 (2)에 의해 고윳값이 없습니다. 홀수라는 가정을 빼면 (4)가 거짓이 될 수 있다는 것을 $n = 2$에서 보입니다.

$n = 4$에서도 그런 예가 있습니다.
$$
K = \begin{pmatrix} 0 & -1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & -1 \\ 0 & 0 & 1 & 0 \end{pmatrix}
$$
이라 하면 [[matrix-vector-product|행렬과 벡터의 곱]]의 (1)에 의해 $x = (x_1, x_2, x_3, x_4)$에서 $Kx = (-x_2, x_1, -x_4, x_3)$입니다. 실수 $\lambda$에서 $Kx = \lambda x$라 하면 $-x_2 = \lambda x_1$이고 $x_1 = \lambda x_2$이므로 $x_1 = \lambda(-\lambda x_1) = -\lambda\lambda x_1$, 곧 $(1 + \lambda\lambda)x_1 = 0$입니다. [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (ii), (iii)과 (2)에 의해 $0 < 1 + \lambda\lambda$이므로 [[real-number-arithmetic|(K10)]]에 의해 $x_1 = 0$이고, $-x_2 = \lambda x_1 = \lambda \cdot 0 = 0$이므로 $x_2 = 0$입니다. 같은 계산으로 $x_3 = x_4 = 0$이므로 $x = 0$입니다. 따라서 $K$의 고유벡터는 없고([[eigenvalue-and-eigenvector|고윳값과 고유벡터]]), $K$에는 고윳값이 없습니다.
:::

## 확인 질문

:::check[$5 \times 5$ 행렬 $A$의 특성다항식이 $0$에서 양수이면 $A$의 고윳값에 대해 무엇을 알 수 있는가?]
양수인 고윳값이 있습니다. $p_A$의 최고차계수는 $(-1)^5 = -1$이므로([[characteristic-polynomial|특성다항식]]의 (1)), (2)의 $R$에서 $c\,R^5 = -R^5 < 0$이고 $p_A(R) < 0$입니다. $p_A(0) > 0$이고 $p_A$는 연속함수이므로((1)) [[intermediate-value-theorem|사잇값 정리]]의 (3)과 (1)을 닫힌구간 $[0, R]$에 쓰면 $0 < \lambda < R$이고 $p_A(\lambda) = 0$인 $\lambda$가 있고, [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 $\lambda$는 고윳값입니다.
:::

:::check[$2 \times 2$ 행렬에는 늘 고윳값이 없는가?]
그렇지 않습니다. (4)는 짝수 크기에 대해 아무것도 말하지 않을 뿐입니다. 예컨대 $I_2$에서는 모든 $x \in \mathbb{R}^2$이 $I_2 x = x$이므로([[matrix-vector-product|행렬과 벡터의 곱]]의 (3)) $e_1$이 $1$에 속하는 고유벡터이고 $1$이 고윳값입니다.
:::
