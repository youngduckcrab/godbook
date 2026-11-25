---
title: 행렬과 벡터의 곱의 어림
title_en: Bound for a Matrix Times a Vector
aliases: [프로베니우스 노름, 힐베르트–슈미트 노름, Frobenius norm, Hilbert–Schmidt norm]
kind: proposition
field: linear-algebra
msc: ["15A60"]
level: undergrad
summary: m × n 행렬 M 의 프로베니우스 노름 ‖M‖_F 는 tr(MᵀM) 의 제곱근, 곧 모든 성분의 제곱의 합의 제곱근이다. 모든 x 에서 ‖Mx‖ ≤ ‖M‖_F ‖x‖ 이고 |⟨Mx, y⟩| ≤ ‖M‖_F ‖x‖ ‖y‖ 이며, 정사각행렬이면 |⟨Mz, z⟩| ≤ ‖M‖_F ⟨z, z⟩ 이다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, square-root-exists, absolute-value, power-of-a-real-number, real-function-space, finite-sum-of-vectors, matrix, matrix-vector-product, transpose, trace, geometric-at-most-algebraic, inner-product-space, standard-inner-product, inner-product-examples, norm-in-inner-product-space, cauchy-schwarz-inequality]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 6장 4절, 4.2 Operator norm of a linear transformation, p.182; 5장 1절, 1.3 Inner product spaces 의 Example 1.3, p.120; 5장 6절 연습문제 6.6, p.150
    checked: original
    note: "출처 6장 4.2(p.182)는 프로베니우스 노름(Hilbert-Schmidt norm)을 ‖A‖₂² = trace(A*A) 로 적고, 작용소 노름 ‖A‖ 가 이 노름 이하라는 것을 특잇값 분해와 '대각합은 고윳값의 합'으로 보인 뒤 '이 사실은 코시–슈바르츠 부등식으로 직접 증명할 수도 있고 그런 증명을 싣는 교재가 있다'고 적는다. 출처는 그 직접 증명을 싣지 않는다. 이 항목의 (2)는 작용소 노름을 쓰지 않고 그 직접 증명의 결론인 부등식 ‖Mx‖ ≤ ‖M‖_F ‖x‖ 를 진술한 것이고, 증명은 행마다 코시–슈바르츠 부등식을 쓰는 길로 이 사이트가 썼다. 같은 쪽의 작용소 노름의 성질 '‖Ax‖ ≤ ‖A‖·‖x‖' 와 꼴이 같다. 출처는 작용소 노름의 기호로 ‖A‖ 를, 프로베니우스 노름의 기호로 ‖A‖₂ 를 쓰는데, 이 사이트는 ‖·‖ 를 내적이 정하는 노름에만 쓰므로 ‖M‖_F 로 쓴다. (1)의 '성분의 제곱을 모두 더한 것'은 출처 Example 1.3(p.120)이 프로베니우스 내적 trace(B*A) 를 성분의 곱의 합으로 적은 것의 실수판이고, 출처 5장 6절 연습문제 6.6 의 b)(p.150)도 trace(A*A) 를 성분의 절댓값의 제곱의 합으로 쓴다. ‖Mᵀ‖_F = ‖M‖_F 와 (3)은 이 사이트가 뒤 항목에서 쓰려고 진술에 둔 것이다. 예시 '한 행짜리 행렬에서 등호가 되는 경우'는 출처 6장 4.2 가 '작용소 노름은 ‖Ax‖ ≤ C‖x‖ 인 가장 작은 C' 라고 적는 것과 같은 물음을 한 행짜리 행렬에서 본 것이다. 출처 6장 3절 연습문제 3.11(p.179)은 작용소 노름이 프로베니우스 노름과 같은 것이 정확히 계수가 1 일 때라고 증명하라고 한다. 반례 '‖Mx‖ 가 ‖M‖_F ‖x‖ 에 닿지 않는 I₂'는 그 연습문제의 '계수가 1 이 아니면 다르다'는 쪽을 I₂ 에서 본 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(실고윳값 증명 통독, 따름 부등식의 상수 재확인 — 지휘자 지시의 상수가 틀려 작성자가 바로잡았다). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$m$, $n$이 자연수이고 $M$이 $m \times n$ [[matrix|행렬]]이라 하자. 성분 $m_{j,k}$, $k$번째 열 $\mathbf{m}_k \in \mathbb{R}^m$, $j$번째 행은 [[matrix|행렬]]의 것이고, $M^T$는 [[transpose|전치행렬]], $Mx$는 [[matrix-vector-product|행렬과 벡터의 곱]], $\operatorname{tr}$은 [[trace|대각합]]이다. $\mathbb{R}^n$과 $\mathbb{R}^m$에는 [[standard-inner-product|표준내적]]을 주고, $\lVert \cdot \rVert$는 그 내적이 정하는 [[norm-in-inner-product-space|노름]]이며, $|\cdot|$은 [[absolute-value|절댓값]], 실수 $c$의 제곱 $c^2$은 [[power-of-a-real-number|거듭제곱]]으로 $cc$와 같다. $j \in \{1, \dots, m\}$에 대하여 $r_j \in \mathbb{R}^n$을 $M$의 $j$번째 행, 곧 $k$에서의 값이 $m_{j,k}$인 $\mathbb{R}^n$의 원소로 둔다.

[[inner-product-examples|내적의 예]]의 (2)에 의해 $\operatorname{tr}(M^T M)$은 $M_{m \times n}$ 위의 프로베니우스 내적으로 잰 $M$과 $M$의 내적이므로, 내적의 조건 (iii)에 의해 $0 \le \operatorname{tr}(M^T M)$이다. 그 제곱근([[square-root-exists|제곱근의 존재]]의 (1))

$$
\lVert M \rVert_F = \sqrt{\operatorname{tr}(M^T M)}
$$

을 $M$의 **프로베니우스 노름**(Frobenius norm)이라 한다. 곧 $\lVert M \rVert_F$는 $M_{m \times n}$을 프로베니우스 내적으로 내적공간으로 볼 때 그 내적이 정하는 $M$의 노름이다. 아래에서 $\lVert M \rVert_F^2$은 실수 $\lVert M \rVert_F$의 제곱이다.

1. (성분의 제곱의 합) 다음이 성립한다.
   $$
   \begin{aligned}
   \lVert M \rVert_F^2 &= \operatorname{tr}(M^T M) \\
   &= \langle \mathbf{m}_1, \mathbf{m}_1 \rangle + \cdots \\
   &\quad + \langle \mathbf{m}_n, \mathbf{m}_n \rangle \\
   &= \langle r_1, r_1 \rangle + \cdots \\
   &\quad + \langle r_m, r_m \rangle
   \end{aligned}
   $$
   오른쪽의 첫째 합은 $k$번째 항이 $\mathbb{R}^m$의 표준내적 $\langle \mathbf{m}_k, \mathbf{m}_k \rangle$인 길이 $n$인 실수의 열의 합이고, 둘째 합은 $j$번째 항이 $\mathbb{R}^n$의 표준내적 $\langle r_j, r_j \rangle$인 길이 $m$인 실수의 열의 합이다. 또 $0 \le \lVert M \rVert_F$이고, $\lVert M \rVert_F = 0$인 것은 정확히 $M$이 영행렬일 때이며, 모든 실수 $\alpha$에서 $\lVert \alpha M \rVert_F = |\alpha| \lVert M \rVert_F$이고, $\lVert M^T \rVert_F = \lVert M \rVert_F$이다.
2. (곱의 노름의 어림) 모든 $x \in \mathbb{R}^n$과 $j \in \{1, \dots, m\}$에서 $Mx$의 $j$에서의 값은 $\langle r_j, x \rangle$이고, $\langle Mx, Mx \rangle$는 $j$번째 항이 $\langle r_j, x \rangle^2$인 길이 $m$인 실수의 열의 합이며,
   $$
   \langle Mx, Mx \rangle \le \lVert M \rVert_F^2 \langle x, x \rangle
   $$
   이다. 곧 $\lVert Mx \rVert^2 \le \lVert M \rVert_F^2 \lVert x \rVert^2$이고 $\lVert Mx \rVert \le \lVert M \rVert_F \lVert x \rVert$이다.
3. (내적의 어림) 모든 $x \in \mathbb{R}^n$과 $y \in \mathbb{R}^m$에서 $|\langle Mx, y \rangle| \le \lVert M \rVert_F \lVert x \rVert \lVert y \rVert$이다. $m = n$이면 모든 $z \in \mathbb{R}^n$에서
   $$
   |\langle Mz, z \rangle| \le \lVert M \rVert_F \langle z, z \rangle
   $$
   이고, 곧 $-\lVert M \rVert_F \langle z, z \rangle \le \langle Mz, z \rangle \le \lVert M \rVert_F \langle z, z \rangle$이다.
:::

:::english
Let $m$, $n$ be natural numbers and $M$ an $m \times n$ matrix. The entries $m_{j,k}$, the $k$-th column $\mathbf{m}_k \in \mathbb{R}^m$ and the $j$-th row are those of the entry on matrices; $M^T$ is the transpose, $Mx$ the matrix-vector product, and $\operatorname{tr}$ the trace. $\mathbb{R}^n$ and $\mathbb{R}^m$ carry the standard inner product, $\lVert \cdot \rVert$ is the norm it determines, $|\cdot|$ is the absolute value, and the square $c^2$ of a real number $c$ is the power, equal to $cc$. For $j \in \{1, \dots, m\}$ let $r_j \in \mathbb{R}^n$ be the $j$-th row of $M$, that is, the element of $\mathbb{R}^n$ whose value at $k$ is $m_{j,k}$.

By item (2) of the entry on examples of inner products, $\operatorname{tr}(M^T M)$ is the inner product of $M$ with itself for the Frobenius inner product on $M_{m \times n}$, so $0 \le \operatorname{tr}(M^T M)$ by condition (iii) of inner products. Its square root

$$
\lVert M \rVert_F = \sqrt{\operatorname{tr}(M^T M)}
$$

is called the **Frobenius norm** of $M$. Thus $\lVert M \rVert_F$ is the norm of $M$ determined by the Frobenius inner product when $M_{m \times n}$ is regarded as an inner product space with it. Below, $\lVert M \rVert_F^2$ is the square of the real number $\lVert M \rVert_F$.

1. (Sum of squares of the entries) The following hold.
   $$
   \begin{aligned}
   \lVert M \rVert_F^2 &= \operatorname{tr}(M^T M) \\
   &= \langle \mathbf{m}_1, \mathbf{m}_1 \rangle + \cdots \\
   &\quad + \langle \mathbf{m}_n, \mathbf{m}_n \rangle \\
   &= \langle r_1, r_1 \rangle + \cdots \\
   &\quad + \langle r_m, r_m \rangle
   \end{aligned}
   $$
   The first sum on the right is the sum of the sequence of $n$ real numbers whose $k$-th term is the standard inner product $\langle \mathbf{m}_k, \mathbf{m}_k \rangle$ in $\mathbb{R}^m$, and the second is the sum of the sequence of $m$ real numbers whose $j$-th term is the standard inner product $\langle r_j, r_j \rangle$ in $\mathbb{R}^n$. Moreover $0 \le \lVert M \rVert_F$, $\lVert M \rVert_F = 0$ exactly when $M$ is the zero matrix, $\lVert \alpha M \rVert_F = |\alpha| \lVert M \rVert_F$ for every real number $\alpha$, and $\lVert M^T \rVert_F = \lVert M \rVert_F$.
2. (Bound for the norm of a product) For all $x \in \mathbb{R}^n$ and $j \in \{1, \dots, m\}$ the value of $Mx$ at $j$ is $\langle r_j, x \rangle$, $\langle Mx, Mx \rangle$ is the sum of the sequence of $m$ real numbers whose $j$-th term is $\langle r_j, x \rangle^2$, and
   $$
   \langle Mx, Mx \rangle \le \lVert M \rVert_F^2 \langle x, x \rangle .
   $$
   That is, $\lVert Mx \rVert^2 \le \lVert M \rVert_F^2 \lVert x \rVert^2$ and $\lVert Mx \rVert \le \lVert M \rVert_F \lVert x \rVert$.
3. (Bound for inner products) For all $x \in \mathbb{R}^n$ and $y \in \mathbb{R}^m$, $|\langle Mx, y \rangle| \le \lVert M \rVert_F \lVert x \rVert \lVert y \rVert$. If $m = n$, then for every $z \in \mathbb{R}^n$
   $$
   |\langle Mz, z \rangle| \le \lVert M \rVert_F \langle z, z \rangle ,
   $$
   that is, $-\lVert M \rVert_F \langle z, z \rangle \le \langle Mz, z \rangle \le \lVert M \rVert_F \langle z, z \rangle$.
:::

## 직관

행렬 $M$을 곱하면 벡터의 길이가 바뀔 수 있습니다. 길이가 얼마나 커질 수 있는지를 성분만 보고 어림하는 것이 이 항목입니다. 손전등에 비유하면, $\lVert x \rVert$는 들어오는 빛의 세기이고 $\lVert M \rVert_F$는 손전등의 "최대 증폭 한도"를 넉넉하게 잡은 값입니다. 나가는 빛 $\lVert Mx \rVert$는 이 한도를 곱한 값을 넘지 못합니다. 비유가 정의와 맞아떨어지는 곳은 "모든 $x$에 대하여 같은 수 $\lVert M \rVert_F$ 하나로" 어림한다는 점입니다. 다만 이 한도는 넉넉한 값이어서, 실제로 그만큼 커지는 $x$가 없을 수도 있습니다(아래 반례).

$Mx$의 $j$번째 값은 $M$의 $j$번째 행과 $x$의 내적입니다. 행마다 [[cauchy-schwarz-inequality|코시–슈바르츠 부등식]]을 쓰면 그 값의 제곱은 "행의 길이의 제곱 × $x$의 길이의 제곱" 이하이고, 이것을 모든 행에 대하여 더하면 행의 길이의 제곱의 합, 곧 모든 성분의 제곱의 합 $\lVert M \rVert_F^2$이 나옵니다. $m = 1$이면 행이 하나뿐이어서 (2)는 코시–슈바르츠 부등식 그 자체입니다.

(3)의 정사각행렬 꼴 $|\langle Mz, z \rangle| \le \lVert M \rVert_F \langle z, z \rangle$은 이 단원의 다음 항목들에서 $\langle Az, z \rangle$를 $\langle z, z \rangle$로 나눈 값이 유계라는 것을 보이는 데 쓰입니다.

## 증명

:::idea
$Mx$의 각 값은 행과 $x$의 내적이므로 행마다 코시–슈바르츠 부등식의 제곱 꼴을 쓰고, 항마다 비교한 합으로 더한다. (3)은 코시–슈바르츠 부등식의 절댓값 꼴에 (2)를 붙인 것이다.
:::

:::hint
[[standard-inner-product|ℝⁿ 의 표준내적]]의 (3)이 $(Mx)_j = \langle r_j, x \rangle$를 줍니다. 그러면 $\langle Mx, Mx \rangle$는 $\langle r_j, x \rangle^2$들의 합입니다.
:::

:::hint
$\langle r_j, x \rangle^2 \le \langle r_j, r_j \rangle \langle x, x \rangle$를 $j$마다 쓰고 [[geometric-at-most-algebraic|기하적 중복도는 대수적 중복도 이하]]의 (1)로 더합니다. 오른쪽의 합에서 $\langle x, x \rangle$를 묶어 내면 (1)의 마지막 등호의 오른쪽, 곧 행들의 내적의 합이 나옵니다.
:::

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것이고, 순서의 성질은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로, 내적의 성질과 조건은 [[inner-product-space|내적과 내적공간]]의 번호로, 노름의 성질은 [[norm-in-inner-product-space|내적공간의 노름]]의 번호로 인용한다. 표준내적의 (1)–(3)은 [[standard-inner-product|ℝⁿ 의 표준내적]]의 번호이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 모든 실수 $c$에서 $c^2 = cc$이다. 실수의 열의 합은 [[finite-sum-of-vectors|벡터의 유한 합]]을 벡터공간 $\mathbb{R}$([[real-function-space|실숫값 함수의 공간]]의 (2), 스칼라배는 실수의 곱)에 쓴 것이고, 같은 열의 합은 같다.

**(1).** [[inner-product-examples|내적의 예]]의 (2)를 $A = B = M$에 쓰면, $\operatorname{tr}(M^T M)$은 $k$번째 항이 $\langle \mathbf{m}_k, \mathbf{m}_k \rangle$인 길이 $n$인 열의 합이고, 또 $j$번째 항이 $m_{j,1} m_{j,1} + \cdots + m_{j,n} m_{j,n}$인 길이 $m$인 열의 합이다. 표준내적의 정의에 의해 $\langle r_j, r_j \rangle$는 $k$번째 항이 $r_j(k) r_j(k) = m_{j,k} m_{j,k}$인 길이 $n$인 열의 합이므로 $\langle r_j, r_j \rangle = m_{j,1} m_{j,1} + \cdots + m_{j,n} m_{j,n}$이다. 따라서 둘째 꼴의 열은 $j$번째 항이 $\langle r_j, r_j \rangle$인 열과 같은 열이고, 그 합이 (1)의 마지막 등호의 오른쪽이다. 제곱근의 정의([[square-root-exists|제곱근의 존재]]의 (1))에 의해 $\lVert M \rVert_F \lVert M \rVert_F = \operatorname{tr}(M^T M)$이므로 (1)의 첫째 등호가 성립한다.

$\lVert M \rVert_F$는 내적공간 $M_{m \times n}$(프로베니우스 내적)에서 $M$의 노름 $\sqrt{\langle M, M \rangle}$과 같은 수이다. 노름의 (1)에 의해 $0 \le \lVert M \rVert_F$이고, $\lVert M \rVert_F = 0$인 것은 정확히 $M$이 $M_{m \times n}$의 영벡터, 곧 ([[matrix|행렬]]의 (1)에 의해) 영행렬일 때이다. $\alpha M$은 [[matrix|행렬]]의 (1)의 벡터공간 $M_{m \times n}$에서의 스칼라배이므로 노름의 (3)에 의해 $\lVert \alpha M \rVert_F = |\alpha| \lVert M \rVert_F$이다.

$M^T$는 $n \times m$ 행렬이고 [[transpose|전치행렬]]의 (2)에 의해 그 $j$번째 열은 $M$의 $j$번째 행 $r_j$이다. 위의 첫째와 둘째 등호를 $M^T$에 쓰면 $\lVert M^T \rVert_F \lVert M^T \rVert_F$는 $j$번째 항이 $\langle r_j, r_j \rangle$인 길이 $m$인 열의 합이고, 이것은 $M$에 대한 마지막 등호에 의해 $\lVert M \rVert_F \lVert M \rVert_F$와 같다. 두 수는 $0$ 이상이므로 순서의 성질 (7)의 (iv)에 의해 $\lVert M^T \rVert_F = \lVert M \rVert_F$이다.

**(2).** 표준내적의 (3)에 의해 모든 $j$에서 $Mx$의 $j$에서의 값은 $\langle r_j, x \rangle$이다. 표준내적의 정의에 의해 $\langle Mx, Mx \rangle$는 $j$번째 항이 $\langle r_j, x \rangle \langle r_j, x \rangle = \langle r_j, x \rangle^2$인 길이 $m$인 열의 합이다. [[cauchy-schwarz-inequality|코시–슈바르츠 부등식]]의 (1)을 내적공간 $\mathbb{R}^n$에서 $r_j$와 $x$에 쓰면 모든 $j$에서
$$
\langle r_j, x \rangle^2 \le \langle r_j, r_j \rangle \langle x, x \rangle
$$
이다. [[geometric-at-most-algebraic|기하적 중복도는 대수적 중복도 이하]]의 (1)(항마다 비교한 합)에 의해 $\langle Mx, Mx \rangle$는 $j$번째 항이 $\langle r_j, r_j \rangle \langle x, x \rangle$인 길이 $m$인 열의 합 이하이다. (K1)에 의해 이 열은 $j$번째 항이 $\langle x, x \rangle \langle r_j, r_j \rangle$인 열과 같고, 벡터의 유한 합의 (H4)를 $\mathbb{R}$에서 스칼라 $\langle x, x \rangle$로 쓰면 그 합은 $\langle x, x \rangle(\langle r_1, r_1 \rangle + \cdots + \langle r_m, r_m \rangle)$이다. (1)과 (K1)에 의해 이것은 $\lVert M \rVert_F^2 \langle x, x \rangle$이다. 이것으로 부등식이 성립한다.

노름의 (2)에 의해 $\langle Mx, Mx \rangle = \lVert Mx \rVert^2$이고 $\langle x, x \rangle = \lVert x \rVert^2$이므로 $\lVert Mx \rVert^2 \le \lVert M \rVert_F^2 \lVert x \rVert^2$이다. (K1), (K2)와 거듭제곱의 (1)에 의해 오른쪽은 $(\lVert M \rVert_F \lVert x \rVert)(\lVert M \rVert_F \lVert x \rVert)$이고, 왼쪽은 $\lVert Mx \rVert \lVert Mx \rVert$이다. 노름의 (1)과 (1)의 $0 \le \lVert M \rVert_F$, 순서의 성질 (4)의 (iv)에 의해 $\lVert Mx \rVert$와 $\lVert M \rVert_F \lVert x \rVert$는 $0$ 이상이므로, 순서의 성질 (7)의 (iii)에 의해 $\lVert Mx \rVert \le \lVert M \rVert_F \lVert x \rVert$이다.

**(3).** 코시–슈바르츠 부등식의 (2)를 내적공간 $\mathbb{R}^m$에서 $Mx$와 $y$에 쓰면 $|\langle Mx, y \rangle| \le \lVert Mx \rVert \lVert y \rVert$이다. (2)의 $\lVert Mx \rVert \le \lVert M \rVert_F \lVert x \rVert$의 양변에 $0 \le \lVert y \rVert$(노름의 (1))를 곱하면 순서의 성질 (4)의 (iii)에 의해 $\lVert Mx \rVert \lVert y \rVert \le (\lVert M \rVert_F \lVert x \rVert) \lVert y \rVert$이고, 순서의 성질 (1)의 (v)에 의해 $|\langle Mx, y \rangle| \le \lVert M \rVert_F \lVert x \rVert \lVert y \rVert$이다(세 수의 곱은 (K2)에 의해 괄호를 어떻게 쳐도 같다).

$m = n$이고 $z \in \mathbb{R}^n$이면 이것을 $x = y = z$에 쓴다. (K2)와 노름의 (2), 거듭제곱의 (1)에 의해 $\lVert M \rVert_F \lVert z \rVert \lVert z \rVert = \lVert M \rVert_F (\lVert z \rVert \lVert z \rVert) = \lVert M \rVert_F \langle z, z \rangle$이므로 $|\langle Mz, z \rangle| \le \lVert M \rVert_F \langle z, z \rangle$이다. [[absolute-value|절댓값]]의 (7)에 의해 이것은 $-\lVert M \rVert_F \langle z, z \rangle \le \langle Mz, z \rangle \le \lVert M \rVert_F \langle z, z \rangle$과 같다. $\blacksquare$
:::

## 예시와 반례

:::example[2 × 3 행렬에서 어림 확인하기]
$$
M = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & -1 \end{pmatrix}
$$
의 행은 $r_1 = (1, 2, 0)$, $r_2 = (0, 1, -1)$이고, (1)에 의해 $\lVert M \rVert_F^2 = \langle r_1, r_1 \rangle + \langle r_2, r_2 \rangle = 5 + 2 = 7$입니다. 열로 더해도 $\langle \mathbf{m}_1, \mathbf{m}_1 \rangle + \langle \mathbf{m}_2, \mathbf{m}_2 \rangle + \langle \mathbf{m}_3, \mathbf{m}_3 \rangle = 1 + 5 + 1 = 7$입니다.

$x = (1, 1, 1)$이면 $Mx = (\langle r_1, x \rangle, \langle r_2, x \rangle) = (3, 0)$이므로 $\langle Mx, Mx \rangle = 9$이고, $\lVert M \rVert_F^2 \langle x, x \rangle = 7 \cdot 3 = 21$입니다. (2)대로 $9 \le 21$입니다. $x = (1, 2, 0) = r_1$이면 $Mx = (5, 2)$, $\langle Mx, Mx \rangle = 29$이고 $7 \cdot 5 = 35$이므로 $29 \le 35$입니다.
:::

:::example[한 행짜리 행렬에서 등호가 되는 경우]
$m = 1$이고 $M = \begin{pmatrix} 2 & -1 & 2 \end{pmatrix}$이면 행은 $r_1 = (2, -1, 2)$ 하나이고 $\lVert M \rVert_F^2 = 9$, $\lVert M \rVert_F = 3$입니다. $Mx$의 하나뿐인 값은 $\langle r_1, x \rangle$이므로 (2)는 $\langle r_1, x \rangle^2 \le \langle r_1, r_1 \rangle \langle x, x \rangle$, 곧 코시–슈바르츠 부등식의 (1) 그 자체입니다. $x = r_1$이면 $\langle r_1, x \rangle = 9$이고 $\lVert Mx \rVert = 9 = 3 \cdot 3 = \lVert M \rVert_F \lVert x \rVert$이어서 등호입니다.
:::

:::counterexample[‖Mx‖ 가 ‖M‖_F ‖x‖ 에 닿지 않는 I₂]
$M = I_2$이면 열이 $e_1$, $e_2$이므로 (1)에 의해 $\lVert I_2 \rVert_F^2 = \langle e_1, e_1 \rangle + \langle e_2, e_2 \rangle = 2$, $\lVert I_2 \rVert_F = \sqrt{2}$입니다. 그런데 모든 $x$에서 $I_2 x = x$이므로 $\lVert I_2 x \rVert = \lVert x \rVert$이고, $x \ne 0$이면 $\lVert x \rVert < \sqrt{2} \lVert x \rVert$입니다. 곧 $I_2$에서는 영벡터가 아닌 어떤 $x$에서도 (2)가 등호가 아닙니다. (2)의 $\lVert M \rVert_F$는 "$\lVert Mx \rVert \le C \lVert x \rVert$가 모든 $x$에서 성립하는 가장 작은 $C$"가 아닐 수 있습니다.
:::

## 확인 질문

:::check[$3 \times 3$ 행렬 $M$의 모든 성분의 절댓값이 $1$ 이하이면 $\lVert Mx \rVert$와 $\lVert x \rVert$ 사이에 어떤 부등식이 성립하는가?]
$\lVert Mx \rVert \le 3 \lVert x \rVert$입니다. 각 성분에서 $m_{j,k} m_{j,k} = |m_{j,k}||m_{j,k}| \le 1$이므로 (1)에 의해 $\lVert M \rVert_F^2$은 $1$ 이하인 아홉 수의 합이고 $9$ 이하입니다. 따라서 $\lVert M \rVert_F \le 3$이고, (2)에 의해 $\lVert Mx \rVert \le \lVert M \rVert_F \lVert x \rVert \le 3 \lVert x \rVert$입니다.
:::

:::check[$m \times n$ 행렬 $M$의 성분 가운데 $(j, k)$ 성분 $c$만 $0$이 아니면 $\lVert M \rVert_F$는 무엇이고, (2)가 등호가 되는 영벡터가 아닌 $x$가 있는가?]
(1)에 의해 $\lVert M \rVert_F^2 = cc$이므로 $\lVert M \rVert_F = |c|$입니다. $Mx$는 $j$에서의 값이 $c x_k$이고 나머지 값이 $0$이므로 $\lVert Mx \rVert = |c||x_k|$입니다. $x = e_k$이면 $\lVert Mx \rVert = |c| = \lVert M \rVert_F \lVert e_k \rVert$이어서 등호입니다.
:::
