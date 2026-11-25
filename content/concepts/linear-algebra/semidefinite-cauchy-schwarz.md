---
title: ⟨Bx, x⟩ ≥ 0 인 대칭행렬의 코시–슈바르츠 부등식
title_en: Cauchy–Schwarz Inequality for a Symmetric Matrix with Nonnegative ⟨Bx, x⟩
aliases: [대칭행렬의 코시–슈바르츠 부등식, Cauchy–Schwarz inequality for positive semidefinite matrices]
kind: lemma
field: linear-algebra
msc: ["15A45", "15A63"]
level: undergrad
summary: n × n 대칭행렬 B 가 모든 x 에서 ⟨Bx, x⟩ ≥ 0 이면 ⟨Bx, y⟩² ≤ ⟨Bx, x⟩⟨By, y⟩ 이다. 따라서 ⟨Bx, x⟩ = 0 인 것은 정확히 Bx = 0 일 때이고, ‖Bx‖² ≤ ‖B‖_F ⟨Bx, x⟩ 이다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, power-of-a-real-number, vector-space, vector-space-basic-properties, finite-sum-of-vectors, proof-by-contradiction, matrix, matrix-vector-product, inner-product-space, standard-inner-product, inner-product-examples, norm-in-inner-product-space, cauchy-schwarz-inequality, self-adjoint-map, bound-for-matrix-times-vector]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 1절, 1.4 Properties of inner product 의 Theorem 1.7 과 그 증명, pp.121–122; 6장 3절, 3.1 Positive definite operators. Square roots 의 정의, p.171
    checked: original
    note: "이 부등식은 출처에 정리로 나오지 않는다(source-grep 으로 책 전체에서 'Cauchy' 5건 — 5장 Theorem 1.7, Lemma 1.8 의 증명, 연습문제 1.6 의 두 줄, 6장 4.2 의 한 줄 — 을 모두 읽었고, 'semidefinite' 21건을 모두 읽었으며, '(Ax, y)' 와 '(Bx, y)' 로도 찾았다. 그 가운데 이 부등식을 진술하거나 증명하는 곳은 없다). 진술의 가정 '모든 x 에서 ⟨Bx, x⟩ ≥ 0 인 대칭행렬'은 출처 6장 3.1(p.171)이 positive semidefinite 라고 부르는 자기수반사상의 실수 행렬판이다. 이 사이트는 그 이름을 이 단원에서 쓰지 않는다. (1)의 증명은 출처 Theorem 1.7(pp.121–122)의 실수 경우의 증명과 같은 이차식 논법이다: 0 ≤ (B(x − ty), x − ty) 를 t 에 대한 이차식으로 펼치고 이차식이 가장 작아지는 t 를 넣는다. 출처의 증명에서 y = 0 이면 자명하다고 하는 갈래는 여기서는 ⟨By, y⟩ = 0 인 갈래가 되고, y ≠ 0 이어도 이 갈래가 생기므로 이 항목은 그것을 일차식의 기울기로 따로 증명했다. (2)와 (3)은 이 사이트가 뒤 항목에서 쓰려고 진술에 둔 것이다. 예시 '2 × 2 행렬에서 세 부등식 확인하기'와 '영벡터가 아닌데 ⟨By, y⟩ = 0 인 경우'에서 ⟨Bx, x⟩ 를 제곱의 합으로 써서 0 이상임을 보이는 것은 출처 7장 2절 2.2.1 Diagonalization by completion of squares(pp.201–202)의 완전제곱 만들기와 같은 발상이고, 첫째 예시의 2x₁² + 2x₁x₂ + x₂² 는 그곳의 2x₁² + 2x₁x₂ + 2x₂² 와 마지막 계수만 다르다. 반례 '⟨Bx, x⟩ ≥ 0 이 아니면 깨질 수 있는 예'의 행렬이 주는 함수는 출처 5장 1절 연습문제 1.5 의 a)(p.125) x₁y₁ − x₂y₂ 와 같다. 반례 '대칭이 아니면 깨질 수 있는 예'의 행렬은 출처 5장 6절 연습문제 6.1(p.150)의 둘째 행렬 (0 −1; 1 0) 에 −2 를 곱하고 I₂ 를 더한 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(실고윳값 증명 통독, 따름 부등식의 상수 재확인 — 지휘자 지시의 상수가 틀려 작성자가 바로잡았다). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$n$이 자연수이고 $\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 주며, $B$가 $n \times n$ [[self-adjoint-map|대칭행렬]]이고 모든 $x \in \mathbb{R}^n$에서 $0 \le \langle Bx, x \rangle$라 하자. $Bx$는 [[matrix-vector-product|행렬과 벡터의 곱]], $\lVert \cdot \rVert$는 [[norm-in-inner-product-space|노름]], $\lVert B \rVert_F$는 [[bound-for-matrix-times-vector|행렬과 벡터의 곱의 어림]]의 프로베니우스 노름이고, 실수 $c$의 제곱 $c^2$은 [[power-of-a-real-number|거듭제곱]]으로 $cc$와 같다.

1. (코시–슈바르츠 꼴) 모든 $x, y \in \mathbb{R}^n$에서
   $$
   \langle Bx, y \rangle^2 \le \langle Bx, x \rangle \langle By, y \rangle
   $$
   이다.
2. ($0$이 되는 곳) $x \in \mathbb{R}^n$에 대하여 $\langle Bx, x \rangle = 0$인 것은 정확히 $Bx = 0$일 때이다.
3. (상의 노름의 어림) 모든 $x \in \mathbb{R}^n$에서 $\langle Bx, Bx \rangle \le \lVert B \rVert_F \langle Bx, x \rangle$이다. 곧 $\lVert Bx \rVert^2 \le \lVert B \rVert_F \langle Bx, x \rangle$이다.
:::

:::english
Let $n$ be a natural number, give $\mathbb{R}^n$ the standard inner product, and let $B$ be an $n \times n$ symmetric matrix such that $0 \le \langle Bx, x \rangle$ for every $x \in \mathbb{R}^n$. $Bx$ is the matrix-vector product, $\lVert \cdot \rVert$ is the norm, $\lVert B \rVert_F$ is the Frobenius norm of the entry on the bound for a matrix times a vector, and the square $c^2$ of a real number $c$ is the power, equal to $cc$.

1. (Cauchy–Schwarz form) For all $x, y \in \mathbb{R}^n$,
   $$
   \langle Bx, y \rangle^2 \le \langle Bx, x \rangle \langle By, y \rangle .
   $$
2. (Where it vanishes) For $x \in \mathbb{R}^n$, $\langle Bx, x \rangle = 0$ exactly when $Bx = 0$.
3. (Bound for the norm of the image) For every $x \in \mathbb{R}^n$, $\langle Bx, Bx \rangle \le \lVert B \rVert_F \langle Bx, x \rangle$; that is, $\lVert Bx \rVert^2 \le \lVert B \rVert_F \langle Bx, x \rangle$.
:::

## 직관

$B$가 대칭이고 모든 $x$에서 $\langle Bx, x \rangle \ge 0$이면, $(x, y)$에서의 값이 $\langle Bx, y \rangle$인 함수는 [[inner-product-space|내적]]의 세 조건 가운데 (i) 대칭과 (ii) 선형성을 만족하고, (iii)에서 "$0$이면 영벡터"만 빠진 것입니다. [[cauchy-schwarz-inequality|코시–슈바르츠 부등식]]의 (1)의 증명은 "$0$이면 영벡터"를 한 곳에서만 쓰므로, 같은 이차식 논법이 여기서도 통합니다. 실제로 $B = I_n$이면 $\langle Bx, y \rangle = \langle x, y \rangle$이고 (1)은 코시–슈바르츠 부등식의 제곱 꼴 그대로입니다.

달라지는 곳은 한 군데입니다. 코시–슈바르츠 부등식의 증명은 $y = 0$이면 두 변이 $0$이라고 따로 처리하고, $y \ne 0$이면 $\langle y, y \rangle > 0$으로 나눕니다. 여기서는 $y \ne 0$이어도 $\langle By, y \rangle = 0$일 수 있어서(아래 예시) 나눌 수 없습니다. 이 갈래에서는 이차식이 일차식이 되고, 모든 $t$에서 $0$ 이상인 일차식은 기울기가 $0$이어야 한다는 것으로 $\langle Bx, y \rangle = 0$을 얻습니다.

(2)는 (1)에서 바로 나옵니다. $\langle Bx, x \rangle = 0$이면 모든 $y$에서 $\langle Bx, y \rangle^2 \le 0$이므로 $Bx$는 모든 벡터와 직교하고, 따라서 영벡터입니다. (3)은 (1)에 $y = Bx$를 넣고 [[bound-for-matrix-times-vector|행렬과 벡터의 곱의 어림]]으로 $\langle B(Bx), Bx \rangle$를 어림한 것입니다.

## 증명

:::idea
모든 실수 $t$에서 $0 \le \langle B(x - ty), x - ty \rangle$를 $t$에 대한 식으로 펼친다. $\langle By, y \rangle > 0$이면 이차식이 가장 작아지는 $t$를 넣고, $\langle By, y \rangle = 0$이면 일차식의 기울기가 $0$임을 보인다.
:::

:::hint
$a = \langle By, y \rangle$, $b = \langle Bx, y \rangle$, $c = \langle Bx, x \rangle$로 두면 대칭성 $\langle By, x \rangle = \langle x, By \rangle = \langle Bx, y \rangle$ 덕분에 펼친 식은 $c - 2tb + (tt)a$가 됩니다.
:::

:::hint
$a = 0$이고 $b \ne 0$이면 $2tb = c + 1$이 되는 $t$를 넣어 보세요.
:::

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (V1)–(V8)은 [[vector-space|벡터공간]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것이고, 순서의 성질은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로, 내적의 성질과 조건은 [[inner-product-space|내적과 내적공간]]의 번호로 인용한다. 표준내적은 [[standard-inner-product|ℝⁿ 의 표준내적]]의 (1)에 의해 내적이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 모든 실수 $d$에서 $d^2 = dd$이다.

**(1).** $x, y \in \mathbb{R}^n$을 고정하고 $a = \langle By, y \rangle$, $b = \langle Bx, y \rangle$, $c = \langle Bx, x \rangle$로 둔다. 가정에 의해 $0 \le a$이고 $0 \le c$이다. [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (2)의 (iii)과 내적의 조건 (i)에 의해 $\langle By, x \rangle = \langle y, Bx \rangle = \langle Bx, y \rangle = b$이다.

실수 $t$에 대하여 $x - ty = x + (-t)y$이다((B2)의 뺄셈의 뜻과 (B9)). [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)와 (B9)에 의해 $B(x - ty) = Bx + (-t)(By) = Bx - t(By)$이다. 내적의 (2)(차)를 첫째 자리와 둘째 자리에 쓰고 내적의 (1)을 쓰면
$$
\begin{aligned}
&\langle Bx - t(By), x - ty \rangle \\
&= \bigl(\langle Bx, x \rangle - t\langle Bx, y \rangle\bigr) \\
&\quad - \bigl(t\langle By, x \rangle - t(t\langle By, y \rangle)\bigr) \\
&= c - 2(tb) + (tt)a
\end{aligned}
$$
이다. 마지막 등호는 $\langle By, x \rangle = b$와 (K1), (K2), (K12)의 (iv), (K9), 그리고 (K7)의 $2 = 1 + 1$과 (K12)의 (i)에서 나온다. 가정에 의해 이 값은 $0$ 이상이다. 곧 모든 실수 $t$에서
$$
0 \le c - 2(tb) + (tt)a
$$
이다. 이것을 (가)라 부른다.

$0 \le a$이므로 [[real-order-axioms|실수의 순서]]의 $\le$의 정의에 의해 $0 < a$이거나 $a = 0$이다.

경우 1: $0 < a$. 순서의 성질 (6)의 (i)에 의해 $0 < a^{-1}$이다. (가)에 $t = ba^{-1}$을 넣으면 (K1), (K2), (K8)의 (iii), (K4)에 의해 $tb = (bb)a^{-1}$이고 $(tt)a = (bb)(a^{-1}a^{-1}a) = (bb)a^{-1}$이므로, (가)는 $0 \le c - 2((bb)a^{-1}) + (bb)a^{-1} = c - (bb)a^{-1}$이 된다((K7), (K12)의 (i)). 순서의 성질 (3)의 (i)에 의해 $(bb)a^{-1} \le c$이고, 양변에 $0 < a$를 곱하면 순서의 성질 (6)의 (iv)와 (K2), (K8)의 (iii), (K4), (K1)에 의해 $bb \le ac$이다.

경우 2: $a = 0$. (K9)에 의해 $(tt)a = 0$이므로 (가)는 모든 $t$에서 $0 \le c - 2(tb)$가 된다. $b \ne 0$이라 하자. (K7)에 의해 $2 \ne 0$이므로 (K12)의 (vi)에 의해 $2b \ne 0$이고, $t = (c + 1)(2b)^{-1}$로 두면 (K1), (K2), (K8)의 (iii), (K4)에 의해 $2(tb) = (c + 1)\bigl((2b)^{-1}(2b)\bigr) = c + 1$이다. 그러면 (가)는 $0 \le c - (c + 1) = -1$을 준다((K12)의 (iv), (K2), (K5), (K4)). 그런데 순서의 성질 (5)의 (ii)에 의해 $0 < 1$이고 순서의 성질 (3)의 (ii)에 의해 $-1 < 0$이므로, 순서의 성질 (1)의 (i)에 의해 $0 \le -1$은 성립하지 않는다. 이 모순에 의해([[proof-by-contradiction|귀류법]]) $b = 0$이다. 따라서 (K9)에 의해 $bb = 0 = ac$이다.

두 경우 모두 $bb \le ac$이고, 이것이 $\langle Bx, y \rangle^2 \le \langle Bx, x \rangle \langle By, y \rangle$이다.

**(2).** $Bx = 0$이면 내적의 (2)에 의해 $\langle Bx, x \rangle = \langle 0, x \rangle = 0$이다. 거꾸로 $\langle Bx, x \rangle = 0$이라 하자. $y \in \mathbb{R}^n$이면 (1)과 (K9)에 의해 $\langle Bx, y \rangle^2 \le 0 \cdot \langle By, y \rangle = 0$이고, 순서의 성질 (5)의 (iii)에 의해 $0 \le \langle Bx, y \rangle^2$이므로 순서의 성질 (1)의 (ii)에 의해 $\langle Bx, y \rangle \langle Bx, y \rangle = 0$이다. (K10)에 의해 $\langle Bx, y \rangle = 0$이다. 이것이 모든 $y \in \mathbb{R}^n$에서 성립하므로 내적의 (5)에 의해 $Bx = 0$이다.

**(3).** $x \in \mathbb{R}^n$이고 $z = Bx$라 하자. (1)을 $x$와 $y = z$에 쓰면 $\langle z, z \rangle^2 \le \langle Bx, x \rangle \langle Bz, z \rangle$이다. [[bound-for-matrix-times-vector|행렬과 벡터의 곱의 어림]]의 (3)을 $M = B$에 쓰면 $\langle Bz, z \rangle \le \lVert B \rVert_F \langle z, z \rangle$이고, 양변에 $0 \le \langle Bx, x \rangle$를 곱하면 순서의 성질 (4)의 (iii)에 의해 $\langle Bx, x \rangle \langle Bz, z \rangle \le \langle Bx, x \rangle (\lVert B \rVert_F \langle z, z \rangle)$이다. 순서의 성질 (1)의 (v)와 (K1), (K2)에 의해
$$
\langle z, z \rangle \langle z, z \rangle \le \bigl(\lVert B \rVert_F \langle Bx, x \rangle\bigr) \langle z, z \rangle
$$
이다. 내적의 조건 (iii)에 의해 $0 \le \langle z, z \rangle$이므로 $0 < \langle z, z \rangle$이거나 $\langle z, z \rangle = 0$이다. $0 < \langle z, z \rangle$이면 순서의 성질 (6)의 (iv)에 의해 $\langle z, z \rangle \le \lVert B \rVert_F \langle Bx, x \rangle$이다. $\langle z, z \rangle = 0$이면 [[bound-for-matrix-times-vector|행렬과 벡터의 곱의 어림]]의 (1)의 $0 \le \lVert B \rVert_F$와 가정 $0 \le \langle Bx, x \rangle$, 순서의 성질 (4)의 (iv)에 의해 $\langle z, z \rangle = 0 \le \lVert B \rVert_F \langle Bx, x \rangle$이다. 두 경우 모두 $\langle Bx, Bx \rangle \le \lVert B \rVert_F \langle Bx, x \rangle$이고, [[norm-in-inner-product-space|노름]]의 (2)에 의해 왼쪽은 $\lVert Bx \rVert^2$이다. $\blacksquare$
:::

## 예시와 반례

:::example[2 × 2 행렬에서 세 부등식 확인하기]
$$
B = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}
$$
은 대칭이고, $x = (x_1, x_2)$이면 $Bx = (2x_1 + x_2, x_1 + x_2)$이므로 $\langle Bx, x \rangle = 2x_1^2 + 2x_1 x_2 + x_2^2 = x_1^2 + (x_1 + x_2)^2 \ge 0$입니다. $x = e_1$, $y = e_2$이면 $\langle Be_1, e_2 \rangle = 1$, $\langle Be_1, e_1 \rangle = 2$, $\langle Be_2, e_2 \rangle = 1$이어서 (1)은 $1 \le 2$입니다. (3)을 $x = e_1$에서 보면 $Be_1 = (2, 1)$, $\lVert Be_1 \rVert^2 = 5$이고 $\lVert B \rVert_F^2 = 4 + 1 + 1 + 1 = 7$이므로 오른쪽은 $\sqrt{7} \cdot 2$입니다. $7 \cdot 4 = 28 > 25$이므로 $2\sqrt{7} > 5$이고, 부등식 $5 \le 2\sqrt{7}$이 성립합니다.
:::

:::example[영벡터가 아닌데 ⟨By, y⟩ = 0 인 경우]
$$
B = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}
$$
는 대칭이고 $\langle Bx, x \rangle = x_1^2 + 4x_1 x_2 + 4x_2^2 = (x_1 + 2x_2)^2 \ge 0$입니다. $y = (2, -1)$은 영벡터가 아니지만 $By = (2 - 2, 4 - 4) = 0$이므로 $\langle By, y \rangle = 0$입니다. 증명의 경우 2가 바로 이런 $y$를 다룹니다. (1)에 의해 모든 $x$에서 $\langle Bx, y \rangle^2 \le \langle Bx, x \rangle \cdot 0 = 0$이어야 하고, 실제로 $\langle Bx, y \rangle = \langle x, By \rangle = 0$입니다. (2)도 $\langle By, y \rangle = 0$과 $By = 0$이 함께 성립한다는 것을 보여 줍니다.
:::

:::counterexample[⟨Bx, x⟩ ≥ 0 이 아니면 깨질 수 있는 예]
$$
B = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
$$
은 대칭이지만 $\langle Be_2, e_2 \rangle = -1 < 0$입니다. $x = (1, 1)$, $y = (1, -1)$이면 $Bx = (1, -1) = y$이므로 $\langle Bx, y \rangle = 2$이고, $\langle Bx, x \rangle = 1 - 1 = 0$, $By = (1, 1)$이어서 $\langle By, y \rangle = 0$입니다. (1)의 왼쪽은 $4$이고 오른쪽은 $0$이므로 (1)이 성립하지 않습니다. $x \ne 0$이고 $\langle Bx, x \rangle = 0$인데 $Bx \ne 0$이므로 (2)도 성립하지 않습니다.
:::

:::counterexample[대칭이 아니면 깨질 수 있는 예]
$$
B = \begin{pmatrix} 1 & 2 \\ -2 & 1 \end{pmatrix}
$$
은 대칭이 아니고, $Bx = (x_1 + 2x_2, -2x_1 + x_2)$이므로 $\langle Bx, x \rangle = x_1^2 + 2x_1 x_2 - 2x_1 x_2 + x_2^2 = x_1^2 + x_2^2 \ge 0$입니다. $x = e_1$, $y = e_2$이면 $\langle Be_1, e_2 \rangle = -2$이어서 (1)의 왼쪽은 $4$이고, 오른쪽은 $\langle Be_1, e_1 \rangle \langle Be_2, e_2 \rangle = 1 \cdot 1 = 1$입니다. 증명에서 대칭은 $\langle By, x \rangle = \langle Bx, y \rangle$에만 쓰이는데, 이 $B$에서는 $\langle Be_2, e_1 \rangle = 2 \ne -2$입니다.
:::

## 확인 질문

:::check[$B$가 이 항목의 가정을 만족하고 $\langle Be_1, e_1 \rangle = 0$이면 $B$의 첫째 열에 대하여 무엇을 말할 수 있는가?]
(2)에 의해 $Be_1 = 0$입니다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $Be_1$은 $B$의 첫째 열이므로 첫째 열은 영벡터입니다. $B$가 대칭이므로 첫째 행도 모두 $0$입니다.
:::

:::check[$n = 1$이고 $B = \begin{pmatrix} b \end{pmatrix}$이면 이 항목의 가정은 무엇이 되고, (3)은 어떤 부등식인가?]
$x \in \mathbb{R}^1$의 하나뿐인 값을 $x_1$이라 하면 $\langle Bx, x \rangle = b x_1 x_1$이므로, 가정은 $0 \le b$입니다($x_1 = 1$). $\lVert B \rVert_F^2 = bb$이므로 $\lVert B \rVert_F = b$이고, (3)은 $b b x_1 x_1 \le b \cdot b x_1 x_1$, 곧 등식입니다.
:::
