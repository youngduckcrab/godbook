---
title: 내적공간의 노름
title_en: Norm in an Inner Product Space
aliases: [노름, 벡터의 길이, 단위벡터, 정규화, 극화 항등식, 평행사변형 법칙, norm, unit vector, normalization, polarization identity, parallelogram law]
kind: definition
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: 내적공간의 벡터 x 의 노름 ‖x‖ 는 ⟨x, x⟩ 의 제곱근이다. 노름은 0 이상이고 영벡터에서만 0 이며, ‖αx‖ = |α|‖x‖ 이다. 노름이 1 인 벡터가 단위벡터이고 영벡터가 아닌 벡터는 노름으로 나누어 단위벡터로 만들 수 있다. 합과 차의 노름의 제곱을 펼친 식에서 극화 항등식과 평행사변형 법칙이 나온다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, square-root-exists, absolute-value, power-of-a-real-number, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, subspace, standard-basis, inner-product-space, standard-inner-product]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 1절, 1.1 Inner product and norm in Rn, p.117; 1.3 Inner product spaces 의 마지막 문단, p.119; 1.4 Properties of inner product 의 Lemma 1.9, Lemma 1.10, p.122; 1.5 Norm. Normed spaces 의 첫 문단, p.123; 1절 연습문제 1.4, 1.7, pp.124–125
    checked: original
    note: "출처는 1.3(p.119)에서 내적공간의 노름을 ‖x‖ = √(x, x) 로 정하고, 1.1(p.117)에서 ℝⁿ 의 노름을 √(x₁² + … + xₙ²) 로 먼저 적는다. 출처 1.5(p.123)는 이 노름이 동차성 ‖αv‖ = |α|·‖v‖, 삼각부등식, 0 이상, '‖v‖ = 0 인 것은 정확히 v = 0 일 때'를 만족한다고 적는다. 이 항목의 (1)과 (3)의 증명은 이 사이트가 썼다. 삼각부등식은 이 단원의 다른 항목에 있다. '단위벡터'(unit vector)라는 말은 출처에 나오지 않는다(검색어 'unit vector', 'unit length', 'normalized' 0건, 'norm 1' 2건은 5장 6.2(p.148)의 회전행렬의 열과 7장 4.2(p.211)의 단위구). (4)의 정규화는 출처 3절의 Remark(p.133)가 그람–슈미트 과정에서 '벡터를 각자의 노름으로 나누어 정규화한다'고 말로 적는 것이다. (2)는 이 사이트가 뒤 항목들이 제곱근 없이 계산하도록 진술에 올렸다. (5)는 출처 1절 연습문제 1.4(p.124)의 ‖x ± y‖² = ‖x‖² + ‖y‖² ± 2 Re(x, y) 를 실수에 쓴 것이다. (6)은 출처 Lemma 1.9(p.122)의 실수판이고 출처는 증명을 독자에게 맡긴다. (7)은 출처 Lemma 1.10(p.122)과 연습문제 1.7(p.125)이고 출처는 '직접 계산으로 확인된다'고만 적는다. (6)과 (7)의 증명은 (5)의 두 식을 빼고 더하는 것으로 이 사이트가 썼다. 반례 '성분의 절댓값의 합을 노름으로 주는 내적이 없는 예'는 출처 1.5(pp.123–124)가 p ≠ 2 인 p-노름은 평행사변형 법칙이 깨지므로 어떤 내적에서도 오지 않고 ℝ² 에서 반례를 쉽게 찾을 수 있다고 적는 것과 같은 발상이고, 그 p = 1 인 경우이다. 확인 질문 '내적공간의 벡터 $x$, $y$에서 $\\lVert x \\rVert = 3$, $\\lVert y \\rVert = 4$, $\\langle x, y \\rangle = -2$이면 $\\lVert x - y \\rVert^2$는 무엇인가?'는 출처 1절 연습문제 1.3(p.124)이 ‖u‖, ‖v‖, (u, v) 의 값으로 ‖u + v‖², ‖u − v‖² 를 계산하게 하는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(증명 표본 통독, 출처 검색 표본). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[inner-product-space|내적공간]]이라 하자. $x \in V$이면 내적의 조건 (iii)에 의해 $0 \le \langle x, x \rangle$이므로, [[square-root-exists|제곱근의 존재]]의 (1)에 의해 제곱근 $\sqrt{\langle x, x \rangle}$가 있다. 이 수를 $x$의 **노름**(norm)이라 하고

$$
\lVert x \rVert = \sqrt{\langle x, x \rangle}
$$

로 쓴다. $\lVert x \rVert^2$는 실수 $\lVert x \rVert$의 [[power-of-a-real-number|거듭제곱]]이고, 같은 항목의 (1)에 의해 $\lVert x \rVert \lVert x \rVert$와 같다. 노름 $\lVert \cdot \rVert$는 내적이 정하는 이 수에만 쓴다. 노름이 $1$인 벡터, 곧 $\lVert u \rVert = 1$인 $u \in V$를 **단위벡터**(unit vector)라 한다. 아래에서 $x$, $y$는 $V$의 임의의 원소이고 $\alpha$는 임의의 실수이며, $|\alpha|$는 [[absolute-value|절댓값]]이다. 세 실수의 합 $a + b + c$는 $(a + b) + c$이고, [[real-number-arithmetic|(K2)]]에 의해 $a + (b + c)$와 같다.

1. (0 이상과 영벡터) $0 \le \lVert x \rVert$이다. $\lVert x \rVert = 0$인 것은 정확히 $x = 0_V$일 때이다. $x \ne 0_V$이면 $0 < \lVert x \rVert$이다.
2. (제곱과 비교) $\lVert x \rVert^2 = \langle x, x \rangle$이다. $0 \le c$인 실수 $c$에 대하여 $\lVert x \rVert = c$인 것은 정확히 $\langle x, x \rangle = c^2$일 때이다. $\lVert x \rVert \le \lVert y \rVert$인 것은 정확히 $\langle x, x \rangle \le \langle y, y \rangle$일 때이고, $\lVert x \rVert < \lVert y \rVert$인 것은 정확히 $\langle x, x \rangle < \langle y, y \rangle$일 때이며, $\lVert x \rVert = \lVert y \rVert$인 것은 정확히 $\langle x, x \rangle = \langle y, y \rangle$일 때이다. $W$가 $V$의 [[subspace|부분공간]]이고 $x \in W$이면, [[inner-product-space|내적과 내적공간]]의 (4)의 내적으로 잰 $W$에서의 $x$의 노름은 $V$에서의 $\lVert x \rVert$와 같다.
3. (동차성) $\lVert \alpha x \rVert = |\alpha| \lVert x \rVert$이다. 특히 $\lVert -x \rVert = \lVert x \rVert$이고 $\lVert x - y \rVert = \lVert y - x \rVert$이다.
4. (단위벡터와 정규화) $u \in V$가 단위벡터인 것은 정확히 $\langle u, u \rangle = 1$일 때이다. $0_V$는 단위벡터가 아니다. $x \ne 0_V$이면 $\lVert x \rVert^{-1} x$는 단위벡터이고 $x = \lVert x \rVert (\lVert x \rVert^{-1} x)$이다. $\lVert x \rVert^{-1} x$를 $x$를 **정규화**(normalization)한 벡터라 한다.
5. (합과 차의 노름) $\lVert x + y \rVert^2 = \lVert x \rVert^2 + 2\langle x, y \rangle + \lVert y \rVert^2$이고 $\lVert x - y \rVert^2 = \lVert x \rVert^2 - 2\langle x, y \rangle + \lVert y \rVert^2$이다.
6. (극화 항등식) $\langle x, y \rangle = 4^{-1}\bigl(\lVert x + y \rVert^2 - \lVert x - y \rVert^2\bigr)$이다.
7. (평행사변형 법칙) $\lVert x + y \rVert^2 + \lVert x - y \rVert^2 = 2\bigl(\lVert x \rVert^2 + \lVert y \rVert^2\bigr)$이다.
8. ($\mathbb{R}$과 $\mathbb{R}^n$) [[standard-inner-product|ℝⁿ 의 표준내적]]의 (6)의 내적공간 $\mathbb{R}$에서 모든 실수 $x$의 노름은 $|x|$이다. $n$이 자연수이고 $\mathbb{R}^n$에 표준내적을 주면 $\lVert x \rVert = \sqrt{x_1^2 + \cdots + x_n^2}$이고(근호 안은 $k$번째 항이 $x_k^2$인 열의 합), [[standard-basis|표준기저]]의 $e_k$는 모두 단위벡터이다.
:::

:::english
Let $V$ be an inner product space. If $x \in V$, then $0 \le \langle x, x \rangle$ by condition (iii) for an inner product, so by item (1) of the entry on the existence of square roots there is a square root $\sqrt{\langle x, x \rangle}$. This number is called the **norm** of $x$ and is written

$$
\lVert x \rVert = \sqrt{\langle x, x \rangle} .
$$

$\lVert x \rVert^2$ is the power of the real number $\lVert x \rVert$, and by item (1) of that entry it equals $\lVert x \rVert \lVert x \rVert$. The symbol $\lVert \cdot \rVert$ is used only for this number determined by an inner product. A vector of norm $1$, that is, $u \in V$ with $\lVert u \rVert = 1$, is called a **unit vector**. Below, $x$, $y$ are arbitrary elements of $V$, $\alpha$ is an arbitrary real number, and $|\alpha|$ is its absolute value. A sum $a + b + c$ of three real numbers means $(a + b) + c$, which equals $a + (b + c)$ by (K2).

1. (Nonnegativity and the zero vector) $0 \le \lVert x \rVert$. $\lVert x \rVert = 0$ exactly when $x = 0_V$. If $x \ne 0_V$, then $0 < \lVert x \rVert$.
2. (Squares and comparison) $\lVert x \rVert^2 = \langle x, x \rangle$. For a real number $c$ with $0 \le c$, $\lVert x \rVert = c$ exactly when $\langle x, x \rangle = c^2$. $\lVert x \rVert \le \lVert y \rVert$ exactly when $\langle x, x \rangle \le \langle y, y \rangle$, $\lVert x \rVert < \lVert y \rVert$ exactly when $\langle x, x \rangle < \langle y, y \rangle$, and $\lVert x \rVert = \lVert y \rVert$ exactly when $\langle x, x \rangle = \langle y, y \rangle$. If $W$ is a subspace of $V$ and $x \in W$, then the norm of $x$ in $W$, measured with the inner product of item (4) of the entry on inner product spaces, equals $\lVert x \rVert$ in $V$.
3. (Homogeneity) $\lVert \alpha x \rVert = |\alpha| \lVert x \rVert$. In particular $\lVert -x \rVert = \lVert x \rVert$ and $\lVert x - y \rVert = \lVert y - x \rVert$.
4. (Unit vectors and normalization) $u \in V$ is a unit vector exactly when $\langle u, u \rangle = 1$. $0_V$ is not a unit vector. If $x \ne 0_V$, then $\lVert x \rVert^{-1} x$ is a unit vector and $x = \lVert x \rVert (\lVert x \rVert^{-1} x)$. The vector $\lVert x \rVert^{-1} x$ is called the **normalization** of $x$.
5. (Norm of a sum and a difference) $\lVert x + y \rVert^2 = \lVert x \rVert^2 + 2\langle x, y \rangle + \lVert y \rVert^2$ and $\lVert x - y \rVert^2 = \lVert x \rVert^2 - 2\langle x, y \rangle + \lVert y \rVert^2$.
6. (Polarization identity) $\langle x, y \rangle = 4^{-1}\bigl(\lVert x + y \rVert^2 - \lVert x - y \rVert^2\bigr)$.
7. (Parallelogram law) $\lVert x + y \rVert^2 + \lVert x - y \rVert^2 = 2\bigl(\lVert x \rVert^2 + \lVert y \rVert^2\bigr)$.
8. ($\mathbb{R}$ and $\mathbb{R}^n$) In the inner product space $\mathbb{R}$ of item (6) of the entry on the standard inner product, the norm of every real number $x$ is $|x|$. If $n$ is a natural number and $\mathbb{R}^n$ carries the standard inner product, then $\lVert x \rVert = \sqrt{x_1^2 + \cdots + x_n^2}$ (under the root is the sum of the sequence whose $k$-th term is $x_k^2$), and every $e_k$ of the standard basis is a unit vector.
:::

## 직관

$\mathbb{R}^2$에서 피타고라스 정리로 재는 화살표의 길이 $\sqrt{x_1^2 + x_2^2}$는 자기 자신과의 표준내적의 제곱근입니다. 노름은 이것을 모든 내적공간으로 옮긴 "길이"입니다. 내적이 바뀌면 길이도 바뀝니다. 같은 지도라도 축척이 다르면 같은 두 점 사이의 거리를 다르게 적는 것과 비슷한데, 축척과 달리 내적은 방향마다 다른 비율을 줄 수도 있습니다.

(1)은 길이가 음수가 아니고 영벡터만 길이가 $0$이라는 것으로 내적의 양의 정부호를 그대로 옮긴 것입니다. (3)은 벡터를 $\alpha$배 하면 길이는 $|\alpha|$배가 된다는 것입니다. $\alpha = -1$이면 방향만 뒤집히고 길이는 그대로입니다. 영벡터가 아닌 벡터를 자기 길이로 나누면 길이가 $1$인 벡터가 남는데, 이것이 정규화입니다((4)). 영벡터는 길이가 $0$이라 나눌 수 없고, 어떤 수를 곱해도 영벡터이므로 단위벡터로 만들 수 없습니다.

(5)는 $(a + b)^2 = a^2 + 2ab + b^2$와 같은 모양입니다. 제곱근이 없는 $\lVert x \rVert^2 = \langle x, x \rangle$로 계산하면 내적의 선형성과 대칭만으로 펼쳐집니다. 두 식을 빼면 노름만으로 내적을 되찾는 극화 항등식 (6)이 되고, 더하면 평행사변형 법칙 (7)이 됩니다. $\mathbb{R}^2$에서 $x$와 $y$를 두 변으로 하는 평행사변형의 두 대각선이 $x + y$와 $x - y$이므로, (7)은 "두 대각선의 길이의 제곱의 합은 네 변의 길이의 제곱의 합"이라는 평면기하의 사실입니다. $y = -x$이면 $x + y = 0_V$이고 (7)은 $0 + 4\lVert x \rVert^2 = 2(2\lVert x \rVert^2)$가 되어 여전히 맞습니다.

## 성질의 증명

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (V1)–(V8)은 [[vector-space|벡터공간]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것이다. 순서의 성질은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로, 내적의 성질은 [[inner-product-space|내적과 내적공간]]의 번호로 인용한다. $\le$의 뜻은 [[real-order-axioms|실수의 순서]]의 것이다.

**(1)의 증명.** [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $0 \le \sqrt{\langle x, x \rangle} = \lVert x \rVert$이다. $\lVert x \rVert = 0$이면 $\langle x, x \rangle = \lVert x \rVert \lVert x \rVert = 0 \cdot 0 = 0$이다((K9)). 거꾸로 $\langle x, x \rangle = 0$이면, $s = 0$이 $ss = 0$이고 $0 \le s$를 만족하므로(순서의 성질 (1)의 (iv)) 제곱근의 유일성에 의해 $\lVert x \rVert = 0$이다. 따라서 $\lVert x \rVert = 0$인 것은 정확히 $\langle x, x \rangle = 0$일 때이고, 내적의 조건 (iii)에 의해 정확히 $x = 0_V$일 때이다. $x \ne 0_V$이면 $\lVert x \rVert \ne 0$이고 $0 \le \lVert x \rVert$이므로 $\le$의 뜻에 의해 $0 < \lVert x \rVert$이다.

**(2)의 증명.** [[power-of-a-real-number|실수의 거듭제곱]]의 (1)과 제곱근의 정의에 의해 $\lVert x \rVert^2 = \lVert x \rVert \lVert x \rVert = \langle x, x \rangle$이다. $0 \le c$라 하자. $\lVert x \rVert = c$이면 $c^2 = \lVert x \rVert^2 = \langle x, x \rangle$이다. 거꾸로 $\langle x, x \rangle = c^2 = cc$이면 $c$는 $cc = \langle x, x \rangle$이고 $0 \le c$인 실수이므로 제곱근의 유일성에 의해 $c = \lVert x \rVert$이다.

$a = \lVert x \rVert$, $b = \lVert y \rVert$로 두면 (1)에 의해 $0 \le a$, $0 \le b$이고 $aa = \langle x, x \rangle$, $bb = \langle y, y \rangle$이다. 순서의 성질 (7)의 (ii)와 (iii)에 의해 $a \le b$인 것은 정확히 $aa \le bb$일 때이고, (7)의 (i)과 (iii)에 의해 $a < b$인 것은 정확히 $aa < bb$일 때이다. $a = b$이면 $aa = bb$이고, 거꾸로 $aa = bb$이면 (7)의 (iv)에 의해 $a = b$이다.

$W$의 내적은 $(x, x)$에서 값 $\langle x, x \rangle$를 갖는다(내적의 (4)). 따라서 $W$에서의 노름도 $\sqrt{\langle x, x \rangle} = \lVert x \rVert$이다.

**(3)의 증명.** 내적의 (1)을 두 번 쓰고 (K2)를 쓰면 $\langle \alpha x, \alpha x \rangle = \alpha \langle x, \alpha x \rangle = \alpha(\alpha \langle x, x \rangle) = (\alpha\alpha)\langle x, x \rangle$이다. $c = |\alpha| \lVert x \rVert$로 두자. [[absolute-value|절댓값]]의 (2)와 이 항목의 (1)에 의해 $0 \le |\alpha|$, $0 \le \lVert x \rVert$이므로 순서의 성질 (4)의 (iv)에 의해 $0 \le c$이다. (K1), (K2)와 절댓값의 (5)에 의해 $cc = (|\alpha||\alpha|)(\lVert x \rVert \lVert x \rVert) = (\alpha\alpha)\langle x, x \rangle = \langle \alpha x, \alpha x \rangle$이다. (2)를 $\alpha x$와 $c$에 쓰면 $\lVert \alpha x \rVert = c = |\alpha| \lVert x \rVert$이다.

(B5)에 의해 $-x = (-1)x$이고, 절댓값의 (3)과, $0 \le 1$(순서의 성질 (5)의 (ii))에서 절댓값의 (1)에 의해 $|-1| = |1| = 1$이므로 $\lVert -x \rVert = 1 \cdot \lVert x \rVert = \lVert x \rVert$이다((K4), (K1)). 또 (B10), (B8), (V1)에 의해 $-(x - y) = -(x + (-y)) = (-x) + y = y - x$이므로 $\lVert y - x \rVert = \lVert -(x - y) \rVert = \lVert x - y \rVert$이다.

**(4)의 증명.** 순서의 성질 (5)의 (ii)에 의해 $0 < 1$이고, (K4)에 의해 $1 \cdot 1 = 1$이다. (2)를 $c = 1$에 쓰면 $\lVert u \rVert = 1$인 것은 정확히 $\langle u, u \rangle = 1$일 때이다. (1)에 의해 $\lVert 0_V \rVert = 0$이고 (K4)에 의해 $0 \ne 1$이므로 $0_V$는 단위벡터가 아니다. $x \ne 0_V$라 하고 $c = \lVert x \rVert$로 두자. (1)에 의해 $0 < c$이고, 순서의 성질 (6)의 (i)에 의해 $0 < c^{-1}$이며, 절댓값의 (1)에 의해 $|c^{-1}| = c^{-1}$이다. (3)에 의해 $\lVert c^{-1} x \rVert = c^{-1} c = 1$이다((K1), (K8)). 또 (V6), (V5)에 의해 $c(c^{-1} x) = (c c^{-1}) x = 1x = x$이다.

**(5)의 증명.** $a = \lVert x \rVert^2$, $b = \lVert y \rVert^2$, $p = \langle x, y \rangle$로 두면 (2)에 의해 $a = \langle x, x \rangle$, $b = \langle y, y \rangle$이다. 내적의 (1)을 두 자리에 쓰면

$$
\begin{aligned}
&\langle x + y, x + y \rangle \\
&\quad = \langle x, x + y \rangle + \langle y, x + y \rangle \\
&\quad = (\langle x, x \rangle + \langle x, y \rangle) \\
&\qquad + (\langle y, x \rangle + \langle y, y \rangle)
\end{aligned}
$$

이고 조건 (i)에 의해 $\langle y, x \rangle = p$이므로 이 값은 $(a + p) + (p + b)$이다. (K2)에 의해 이것은 $(a + (p + p)) + b$이고, (K4), (K1), (K12)의 (i), (K7)의 $1 + 1 = 2$에 의해 $p + p = 1p + 1p = (1 + 1)p = 2p$이다. 따라서 (2)에 의해 $\lVert x + y \rVert^2 = a + 2p + b$이다.

이 등식을 $x$와 $-y$에 쓴다. 내적의 (2)에 의해 $\langle x, -y \rangle = -p$이고, (3)과 (2)에 의해 $\lVert -y \rVert^2 = \lVert y \rVert^2 = b$이다. (K12)의 (ii)에 의해 $2(-p) = -(2p)$이므로 $\lVert x - y \rVert^2 = a + (-(2p)) + b = a - 2p + b$이다. 여기서 $x - y = x + (-y)$이다((B2)).

**(6)의 증명.** (5)의 두 식을 빼면, (K1), (K2), (K4), (K9)의 $-(-a) = a$, (K12)의 (iv)와 (v)로 항을 모아 $(a + 2p + b) - (a - 2p + b) = (a - a) + (2p + 2p) + (b - b) = 2p + 2p$이고, (K12)의 (i)과 (K7)의 $2 + 2 = 4$에 의해 이것은 $4p$이다. (K7)에 의해 $4 \ne 0$이므로 (K2)와 (K8)의 역수에 의해 $4^{-1}(4p) = (4^{-1} \cdot 4)p = 1p = p$이다. 따라서 $p = 4^{-1}(\lVert x + y \rVert^2 - \lVert x - y \rVert^2)$이다.

**(7)의 증명.** (5)의 두 식을 더하면 같은 법칙으로 $(a + 2p + b) + (a - 2p + b) = (a + a) + (2p + (-(2p))) + (b + b) = 2a + 0 + 2b$이고(앞의 $p + p = 2p$와 같이 $a + a = 2a$, $b + b = 2b$이다), (K4)와 (K3)에 의해 이것은 $2(a + b)$이다.

**(8)의 증명.** $\mathbb{R}$의 내적은 $(x, y)$에서의 값이 $xy$이다([[standard-inner-product|ℝⁿ 의 표준내적]]의 (6)). 절댓값의 (2)에 의해 $0 \le |x|$이고 절댓값의 (5)에 의해 $|x||x| = xx = \langle x, x \rangle$이므로, 이 항목의 (2)를 $c = |x|$에 쓰면 $\lVert x \rVert = |x|$이다. $\mathbb{R}^n$에서는 표준내적의 (1)에 의해 $\langle x, x \rangle$가 $k$번째 항이 $x_k x_k$인 열의 합이고, 거듭제곱의 (1)에 의해 $x_k x_k = x_k^2$이므로 같은 열의 합으로 첫 식이 성립한다. 표준내적의 (2)에 의해 $\langle e_k, e_k \rangle = 1$이므로 (4)에 의해 $e_k$는 단위벡터이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³ 의 벡터의 노름과 정규화]
$x = (2, -1, 2) \in \mathbb{R}^3$이면 $\langle x, x \rangle = 4 + 1 + 4 = 9$이고, $3 \cdot 3 = 9$이며 $0 \le 3$이므로 (2)에 의해 $\lVert x \rVert = 3$입니다. 정규화한 벡터는 $3^{-1} x = (2 \cdot 3^{-1}, -3^{-1}, 2 \cdot 3^{-1})$이고 (4)에 의해 단위벡터입니다. 직접 계산해도 자기 자신과의 내적은 $4 \cdot 9^{-1} + 9^{-1} + 4 \cdot 9^{-1} = 1$입니다. $-2x = (-4, 2, -4)$의 노름은 (3)에 의해 $|-2| \cdot 3 = 6$이고, 직접 계산해도 $16 + 4 + 16 = 36 = 6 \cdot 6$입니다.
:::

:::example[ℝ² 에서 극화 항등식과 평행사변형 법칙 확인하기]
$x = (1, 2)$, $y = (3, 0)$이면 $x + y = (4, 2)$, $x - y = (-2, 2)$이고 $\lVert x + y \rVert^2 = 16 + 4 = 20$, $\lVert x - y \rVert^2 = 4 + 4 = 8$입니다. 극화 항등식의 오른쪽은 $4^{-1}(20 - 8) = 3$이고, 실제로 $\langle x, y \rangle = 3 + 0 = 3$입니다. $\lVert x \rVert^2 = 5$, $\lVert y \rVert^2 = 9$이므로 평행사변형 법칙의 두 쪽은 $20 + 8 = 28$과 $2(5 + 9) = 28$입니다.
:::

:::counterexample[성분의 절댓값의 합을 노름으로 주는 내적이 없는 예]
$\mathbb{R}^2$의 모든 $x$에서 $\lVert x \rVert = |x_1| + |x_2|$가 되게 하는 $\mathbb{R}^2$ 위의 내적은 없습니다. 그런 내적이 있다면 (7)이 $x = e_1$, $y = e_2$에서 성립해야 합니다. 그런데 $e_1 + e_2 = (1, 1)$과 $e_1 - e_2 = (1, -1)$에서 이 값은 둘 다 $2$이므로 왼쪽은 $2^2 + 2^2 = 8$이고, $e_1$과 $e_2$에서 값이 $1$이므로 오른쪽은 $2(1 + 1) = 4$입니다. $8 \ne 4$이므로 모순입니다. $|x_1| + |x_2|$는 $0$ 이상이고 영벡터에서만 $0$이며 $\alpha$배 하면 $|\alpha|$배가 되어 (1)과 (3)의 꼴은 만족하지만, 평행사변형 법칙을 만족하지 않으므로 어떤 내적의 노름도 아닙니다.
:::

## 확인 질문

:::check[내적공간의 벡터 $x$, $y$에서 $\lVert x \rVert = 3$, $\lVert y \rVert = 4$, $\langle x, y \rangle = -2$이면 $\lVert x - y \rVert^2$는 무엇인가?]
(5)에 의해 $\lVert x - y \rVert^2 = 9 - 2 \cdot (-2) + 16 = 29$입니다.
:::

:::check[내적공간의 벡터 $x$, $y$가 $\lVert x + y \rVert = \lVert x - y \rVert$를 만족하면 $\langle x, y \rangle$는 무엇인가?]
(2)에 의해 두 노름의 제곱도 같으므로 극화 항등식 (6)에 의해 $\langle x, y \rangle = 4^{-1} \cdot 0 = 0$입니다. 예를 들어 $y = 0_V$이면 두 노름이 모두 $\lVert x \rVert$이고 $\langle x, 0_V \rangle = 0$입니다.
:::
