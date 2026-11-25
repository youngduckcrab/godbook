---
title: 대칭행렬의 실고윳값
title_en: A Symmetric Matrix Has a Real Eigenvalue
aliases: [대칭행렬은 고윳값을 갖는다, 자기수반사상의 고윳값, 가장 큰 고윳값과 레일리 몫, real symmetric matrix has an eigenvalue, self-adjoint operator has an eigenvalue]
kind: theorem
field: linear-algebra
msc: ["15A18", "15A42"]
level: undergrad
summary: n × n 대칭행렬 A 는 고윳값을 갖는다. 레일리 몫의 값의 집합의 상한이 A 의 가장 큰 고윳값이고 하한이 가장 작은 고윳값이며, 둘 다 그 고유벡터에서 레일리 몫의 값으로 도달된다. 유한차원이고 영공간이 아닌 내적공간 위의 자기수반사상도 고윳값을 갖는다. 복소수 없이 최소상계 성질로 증명한다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, proof-by-contradiction, well-ordering-principle, prime-number, vector-space, vector-space-basic-properties, standard-basis, dimension, linear-map, matrix, matrix-vector-product, matrix-product, invertible-matrix, matrix-in-bases, change-of-basis-and-similarity, eigenvalue-and-eigenvector, real-eigenvalues-2x2, odd-dimension-has-real-eigenvalue, upper-bound-and-supremum, inner-product-space, standard-inner-product, orthonormal-basis, orthonormal-basis-exists, self-adjoint-map, bound-for-matrix-times-vector, rayleigh-quotient, semidefinite-cauchy-schwarz]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 6장 2절 Spectral theorem for self-adjoint and normal operators 의 Theorem 2.1, Theorem 2.2 와 그 증명, 고윳값이 실수라는 독립 증명, pp.166–167; 6장 1절의 Theorem 1.2, p.165; 7장 4절, 4.2 Minimax characterization of eigenvalues 의 Theorem 4.3, Remark 와 Theorem 4.3 의 증명, pp.211–212
    checked: original
    note: "출처 6장 2절 Theorem 2.1(p.166)은 실내적공간이나 복소내적공간 위의 자기수반사상의 고윳값이 모두 실수이고 고유벡터로 된 정규직교 기저가 있다고 진술하고, Theorem 2.2 는 그 행렬판이다. 증명은 출처와 다르다: 출처는 Theorem 1.1(복소 슈어 표현) 또는 Theorem 1.2(실내적공간판, p.165 — '모든 고윳값이 실수'라는 것을 가정으로 둔다)로 상삼각행렬을 얻고 상삼각인 자기수반행렬은 실수 대각행렬이라는 것으로 끝낸다. 이어 같은 쪽에서 Ax = λx 에서 (Ax, x) = λ‖x‖² 와 그 켤레를 비교해 고윳값이 실수임을 따로 보인다(pp.166–167). 곧 출처는 실수 행렬이 고윳값을 갖는다는 것을 복소수에서 고윳값을 얻은 뒤 그것이 실수라는 것으로 보인다. 이 항목은 복소수를 쓰지 않고, 레일리 몫의 값의 집합의 상한 s 를 최소상계 성질로 얻은 뒤 s 가 고윳값이 아니라고 하면 sI − A 가 s 보다 작은 상계를 준다는 귀류법으로 증명한다. (2)와 (3)의 '상한과 하한이 가장 큰 고윳값과 가장 작은 고윳값이고 그 고유벡터에서 도달된다'는 출처 7장 4.2 의 Theorem 4.3(p.211)에서 k = 1 과 k = n 으로 둔 경우의 내용이고, 같은 소절의 Remark(p.211)와 Theorem 4.3 의 증명(p.212)이 '단위구 위의 (Ax, x) 의 최댓값과 최솟값은 가장 큰 고윳값과 가장 작은 고윳값'이라고 적는다. 출처는 그 최댓값의 존재를 콤팩트성으로 설명하고, 고윳값으로의 설명은 대각행렬에서 확인된다고만 한다. (4)의 마지막 문장은 출처 6장 2절 연습문제 2.1 의 h)(p.169)가 참·거짓을 묻는 '정규사상의 고윳값이 모두 1 이면 그 사상은 항등사상이다'와 같은 계열이다(대칭행렬은 그 정규사상의 실수 행렬판에 들고, 이 항목은 고윳값이 c 인 경우로 진술한다). (5)는 출처 Theorem 2.1 의 자기수반사상판의 존재 부분이다. 예시 '2 × 2 대칭행렬의 상한과 하한'의 행렬은 출처 6장 2절 연습문제 2.4, 2.6(pp.169–170)과 같은 '2 × 2 대칭행렬을 직교 대각화하라'는 물음의 계열이고, 출처 7장 2절 2.1 Orthogonal diagonalization 의 Example(p.201)이 2 × 2 대칭행렬 (2 1; 1 2) 를 직교 대각화하는 것과도 같은 계열이다. 반례 '대칭이 아닌 행렬에서 몫의 상한이 고윳값이 아닐 수 있는 예'의 행렬은 출처 5장 6절 연습문제 6.1(p.150)의 둘째 행렬 (0 −1; 1 0) 에 I₂ 를 더한 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(실고윳값 증명 통독, 따름 부등식의 상수 재확인 — 지휘자 지시의 상수가 틀려 작성자가 바로잡았다). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$n$이 자연수이고 $\mathbb{R}^n$에는 [[standard-inner-product|표준내적]]을 주며, $A$가 $n \times n$ [[self-adjoint-map|대칭행렬]]이라 하자. 레일리 몫 $\rho_A$와 그 값의 집합 $\mathcal{R}_A$는 [[rayleigh-quotient|레일리 몫]]의 것이고, 같은 항목의 (3)에 의해 $\sup \mathcal{R}_A$와 $\inf \mathcal{R}_A$가 있다. 고윳값과 고유벡터는 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이고, $\sup$, $\inf$, $\max$, $\min$은 [[upper-bound-and-supremum|상계와 상한]]의 것이다.

1. (고윳값의 존재) $\sup \mathcal{R}_A$는 $A$의 고윳값이다. 특히 $A$는 고윳값을 갖는다.
2. (가장 큰 고윳값) $A$의 모든 고윳값 $\mu$는 $\mu \le \sup \mathcal{R}_A$를 만족한다. 곧 $\sup \mathcal{R}_A$는 $A$의 가장 큰 고윳값이다. 또 $\sup \mathcal{R}_A \in \mathcal{R}_A$이고 $\sup \mathcal{R}_A = \max \mathcal{R}_A$이며, $v$가 $\sup \mathcal{R}_A$에 속하는 $A$의 고유벡터이면 $\rho_A(v) = \sup \mathcal{R}_A$이다.
3. (가장 작은 고윳값) $\inf \mathcal{R}_A$는 $A$의 고윳값이고, $A$의 모든 고윳값 $\mu$는 $\inf \mathcal{R}_A \le \mu$를 만족한다. 곧 $\inf \mathcal{R}_A$는 $A$의 가장 작은 고윳값이다. 또 $\inf \mathcal{R}_A \in \mathcal{R}_A$이고 $\inf \mathcal{R}_A = \min \mathcal{R}_A$이며, $w$가 $\inf \mathcal{R}_A$에 속하는 $A$의 고유벡터이면 $\rho_A(w) = \inf \mathcal{R}_A$이다.
4. (고윳값의 범위와 이차식) $A$의 모든 고윳값 $\mu$는 $\inf \mathcal{R}_A \le \mu \le \sup \mathcal{R}_A$를 만족한다. 모든 $x \in \mathbb{R}^n$에서
   $$
   \begin{aligned}
   (\inf \mathcal{R}_A) \langle x, x \rangle &\le \langle Ax, x \rangle \\
   &\le (\sup \mathcal{R}_A) \langle x, x \rangle
   \end{aligned}
   $$
   이고, $v$가 $\sup \mathcal{R}_A$에 속하는 고유벡터이면 $\langle Av, v \rangle = (\sup \mathcal{R}_A)\langle v, v \rangle$, $w$가 $\inf \mathcal{R}_A$에 속하는 고유벡터이면 $\langle Aw, w \rangle = (\inf \mathcal{R}_A)\langle w, w \rangle$이다. 또 $A$의 고윳값이 하나뿐인 것은 정확히 $A = cI_n$인 실수 $c$가 있을 때이다.
5. (자기수반사상) $V$가 [[dimension|유한차원]]인 [[inner-product-space|내적공간]]이고 $V \ne \{0_V\}$이며 $T : V \to V$가 [[self-adjoint-map|자기수반사상]]이라 하자. $\dim V = d$이고 $\mathcal{B}$가 $V$의 [[orthonormal-basis|정규직교 기저]]이면 $d$는 자연수이고, [[matrix-in-bases|기저에 관한 행렬]] $[T]_{\mathcal{B}}$는 $d \times d$ 대칭행렬이며, 실수 $\lambda$가 $T$의 고윳값인 것은 정확히 $\lambda$가 $[T]_{\mathcal{B}}$의 고윳값일 때이다. 따라서 $T$는 고윳값을 갖고, $T$의 고윳값 가운데 다른 모든 고윳값 이상인 것과 다른 모든 고윳값 이하인 것이 있다. 정규직교 기저는 [[orthonormal-basis-exists|정규직교 기저의 존재와 확장]]의 (1)에 의해 언제나 있다.
:::

:::english
Let $n$ be a natural number, give $\mathbb{R}^n$ the standard inner product, and let $A$ be an $n \times n$ symmetric matrix. The Rayleigh quotient $\rho_A$ and its set of values $\mathcal{R}_A$ are those of the entry on the Rayleigh quotient, and by item (3) of that entry $\sup \mathcal{R}_A$ and $\inf \mathcal{R}_A$ exist. Eigenvalues and eigenvectors are those of the entry on eigenvalues and eigenvectors, and $\sup$, $\inf$, $\max$, $\min$ are those of the entry on upper bounds and suprema.

1. (Existence of an eigenvalue) $\sup \mathcal{R}_A$ is an eigenvalue of $A$. In particular $A$ has an eigenvalue.
2. (Largest eigenvalue) Every eigenvalue $\mu$ of $A$ satisfies $\mu \le \sup \mathcal{R}_A$; that is, $\sup \mathcal{R}_A$ is the largest eigenvalue of $A$. Moreover $\sup \mathcal{R}_A \in \mathcal{R}_A$, $\sup \mathcal{R}_A = \max \mathcal{R}_A$, and if $v$ is an eigenvector of $A$ belonging to $\sup \mathcal{R}_A$, then $\rho_A(v) = \sup \mathcal{R}_A$.
3. (Smallest eigenvalue) $\inf \mathcal{R}_A$ is an eigenvalue of $A$, and every eigenvalue $\mu$ of $A$ satisfies $\inf \mathcal{R}_A \le \mu$; that is, $\inf \mathcal{R}_A$ is the smallest eigenvalue of $A$. Moreover $\inf \mathcal{R}_A \in \mathcal{R}_A$, $\inf \mathcal{R}_A = \min \mathcal{R}_A$, and if $w$ is an eigenvector of $A$ belonging to $\inf \mathcal{R}_A$, then $\rho_A(w) = \inf \mathcal{R}_A$.
4. (Range of the eigenvalues and the quadratic expression) Every eigenvalue $\mu$ of $A$ satisfies $\inf \mathcal{R}_A \le \mu \le \sup \mathcal{R}_A$. For every $x \in \mathbb{R}^n$
   $$
   \begin{aligned}
   (\inf \mathcal{R}_A) \langle x, x \rangle &\le \langle Ax, x \rangle \\
   &\le (\sup \mathcal{R}_A) \langle x, x \rangle ,
   \end{aligned}
   $$
   and if $v$ is an eigenvector belonging to $\sup \mathcal{R}_A$ then $\langle Av, v \rangle = (\sup \mathcal{R}_A)\langle v, v \rangle$, while if $w$ is an eigenvector belonging to $\inf \mathcal{R}_A$ then $\langle Aw, w \rangle = (\inf \mathcal{R}_A)\langle w, w \rangle$. Moreover, $A$ has exactly one eigenvalue exactly when there is a real number $c$ with $A = cI_n$.
5. (Self-adjoint maps) Let $V$ be a finite-dimensional inner product space with $V \ne \{0_V\}$ and $T : V \to V$ a self-adjoint map. If $\dim V = d$ and $\mathcal{B}$ is an orthonormal basis of $V$, then $d$ is a natural number, the matrix $[T]_{\mathcal{B}}$ with respect to the basis is a $d \times d$ symmetric matrix, and a real number $\lambda$ is an eigenvalue of $T$ exactly when $\lambda$ is an eigenvalue of $[T]_{\mathcal{B}}$. Hence $T$ has an eigenvalue, and among the eigenvalues of $T$ there is one that is greater than or equal to all the others and one that is less than or equal to all the others. An orthonormal basis always exists by item (1) of the entry on the existence and extension of orthonormal bases.
:::

## 직관

정사각행렬이 꼭 고윳값을 갖지는 않습니다. 예를 들어 $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$은 $(x_1, x_2)$를 $(-x_2, x_1)$로 보내므로, 영벡터가 아닌 어떤 벡터도 자기 자신의 실수배로 보내지 않습니다. 이 정리는 대칭행렬에서는 그런 일이 없다고 말합니다. 출처는 이것을 복소수에서 고윳값을 찾은 뒤 그 고윳값이 실수라는 것으로 보이지만, 이 사이트에는 복소수가 없으므로 실수의 최소상계 성질로 증명합니다.

착안은 이렇습니다. 레일리 몫 $\rho_A(x)$는 "$A$가 $x$를 $x$ 쪽으로 얼마나 늘이는가"를 잰 수이고, 그 값의 집합은 유계이므로 상한 $s$가 있습니다. 산에서 가장 높은 곳에 서면 어느 쪽으로 한 걸음 옮겨도 높아지지 않듯이, 상한에 해당하는 방향은 $A$가 옆으로 비틀지 않고 제자리로 보내는 방향, 곧 고유벡터의 방향일 것입니다. 다만 비유와 달리 상한이 실제로 어떤 $x$에서 도달되는지는 처음에는 모릅니다(콤팩트성을 쓰지 않으므로). 그래서 증명은 거꾸로 갑니다. $s$가 고윳값이 아니라고 하면 $A - sI_n$이 가역이고, 이때는 [[semidefinite-cauchy-schwarz|⟨Bx, x⟩ ≥ 0 인 대칭행렬의 코시–슈바르츠 부등식]]과 [[bound-for-matrix-times-vector|행렬과 벡터의 곱의 어림]]으로 모든 $x \ne 0$에서 $\rho_A(x) \le s - \varepsilon$인 양수 $\varepsilon$을 찾을 수 있어서 $s$가 가장 작은 상계라는 데 어긋납니다.

(1)의 증명에서 대칭이라는 가정이 쓰이는 곳은 $B = sI_n - A$가 대칭이어서 [[semidefinite-cauchy-schwarz|⟨Bx, x⟩ ≥ 0 인 대칭행렬의 코시–슈바르츠 부등식]]을 쓸 수 있다는 단계입니다. 대칭이 아니면 이 단계가 무너지고, 실제로 결론도 거짓일 수 있습니다(아래 반례).

## 증명

:::idea
$s = \sup \mathcal{R}_A$, $B = sI_n - A$로 둔다. $s$가 고윳값이 아니면 $A - sI_n$의 역행렬 $C$가 있고, 모든 $x$에서 $\langle x, x \rangle \le \lVert C \rVert_F^2 \langle Bx, Bx \rangle \le \lVert C \rVert_F^2 \lVert B \rVert_F \langle Bx, x \rangle$이다. 이 상수가 양수임을 $x = e_1$로 보이면 $s$보다 작은 상계가 나와 모순이다. 하한은 $-A$로 옮긴다.
:::

:::hint
[[rayleigh-quotient|레일리 몫]]의 (3)과 (4)에서 $\langle Bx, x \rangle = s\langle x, x \rangle - \langle Ax, x \rangle \ge 0$입니다. 그러므로 $B$는 [[semidefinite-cauchy-schwarz|⟨Bx, x⟩ ≥ 0 인 대칭행렬의 코시–슈바르츠 부등식]]의 가정을 만족합니다.
:::

:::hint
$x = C\bigl((A - sI_n)x\bigr)$이고 $(A - sI_n)x = -(Bx)$입니다. [[bound-for-matrix-times-vector|행렬과 벡터의 곱의 어림]]의 (2)를 $C$에 쓰면 $\langle x, x \rangle$를 $\langle Bx, Bx \rangle$로 어림할 수 있습니다.
:::

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (V1)–(V8)은 [[vector-space|벡터공간]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것이고, 순서의 성질은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로, 내적의 성질과 조건은 [[inner-product-space|내적과 내적공간]]의 번호로, 레일리 몫의 성질은 [[rayleigh-quotient|레일리 몫]]의 번호로, 고윳값의 성질은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 번호로 인용한다. $s = \sup \mathcal{R}_A$, $t = \inf \mathcal{R}_A$로 둔다.

**(1).** $B = sI_n - A$로 둔다. 레일리 몫의 (4)에 의해 $B$는 대칭이고 모든 $x \in \mathbb{R}^n$에서 $Bx = sx - Ax$, $\langle Bx, x \rangle = s\langle x, x \rangle - \langle Ax, x \rangle$이다. 레일리 몫의 (3)에 의해 $\langle Ax, x \rangle \le s\langle x, x \rangle$이므로 순서의 성질 (3)의 (i)에 의해 $0 \le \langle Bx, x \rangle$이다. 따라서 $B$는 [[semidefinite-cauchy-schwarz|⟨Bx, x⟩ ≥ 0 인 대칭행렬의 코시–슈바르츠 부등식]]의 가정을 만족한다.

$s$가 $A$의 고윳값이 아니라고 하자. 고윳값의 (4)에 의해 $A - sI_n$은 [[invertible-matrix|가역]]이고, 가역행렬의 (1)에 의해 $C(A - sI_n) = I_n$인 $n \times n$ 행렬 $C$가 있다. $x \in \mathbb{R}^n$이라 하자. 고윳값의 정의에 적힌 대로 $A - sI_n = A + (-(sI_n))$이고 (B5)에 의해 $-(sI_n) = (-1)(sI_n)$이므로, [[matrix-vector-product|행렬과 벡터의 곱]]의 (4), (3)과 (B5)에 의해 $(A - sI_n)x = Ax + (-1)(sx) = Ax - sx$이다. 한편 (B10), (B8)과 (V1)에 의해 $-(Bx) = -(sx - Ax) = (-(sx)) + Ax = Ax - sx$이다. 따라서 $(A - sI_n)x = -(Bx)$이다. 행렬과 벡터의 곱의 (3)과 [[matrix-product|행렬의 곱]]의 (1)에 의해
$$
\begin{aligned}
x &= I_n x = \bigl(C(A - sI_n)\bigr)x \\
&= C\bigl(-(Bx)\bigr)
\end{aligned}
$$
이다. [[bound-for-matrix-times-vector|행렬과 벡터의 곱의 어림]]의 (2)를 $M = C$와 $-(Bx)$에 쓰면 $\langle x, x \rangle \le \lVert C \rVert_F^2 \langle -(Bx), -(Bx) \rangle$이고, 내적의 (2)와 (K9)에 의해 $\langle -(Bx), -(Bx) \rangle = -(-\langle Bx, Bx \rangle) = \langle Bx, Bx \rangle$이다. ⟨Bx, x⟩ ≥ 0 인 대칭행렬의 코시–슈바르츠 부등식의 (3)에 의해 $\langle Bx, Bx \rangle \le \lVert B \rVert_F \langle Bx, x \rangle$이다. 순서의 성질 (5)의 (iii)과 [[power-of-a-real-number|거듭제곱]]의 (1)에 의해 $0 \le \lVert C \rVert_F^2$이므로 순서의 성질 (4)의 (iii)과 (1)의 (v), (K2)에 의해 $k = \lVert C \rVert_F^2 \lVert B \rVert_F$로 두면 모든 $x \in \mathbb{R}^n$에서
$$
\langle x, x \rangle \le k \langle Bx, x \rangle
$$
이다. 이것을 (가)라 부른다. 행렬과 벡터의 곱의 어림의 (1)의 $0 \le \lVert B \rVert_F$와 순서의 성질 (4)의 (iv)에 의해 $0 \le k$이다.

$n$은 자연수이므로 [[standard-basis|표준기저]]의 $e_1$이 있고, [[standard-inner-product|ℝⁿ 의 표준내적]]의 (2)에 의해 $\langle e_1, e_1 \rangle = 1$이다. $k = 0$이면 (가)와 (K9)에 의해 $1 \le 0 \cdot \langle Be_1, e_1 \rangle = 0$인데, 순서의 성질 (5)의 (ii)와 (1)의 (i)에 의해 $0 < 1$과 $1 \le 0$은 함께 성립하지 않는다. 따라서 $k \ne 0$이고, $0 \le k$이므로 $0 < k$이며, 순서의 성질 (6)의 (i)에 의해 $0 < k^{-1}$이다.

$x \ne 0$이라 하자. (가)의 양변에 $0 < k^{-1}$을 곱하면 순서의 성질 (4)의 (iii)과 (K1), (K2), (K8)의 (iii), (K4)에 의해 $k^{-1}\langle x, x \rangle \le \langle Bx, x \rangle$이고, 양변에 $0 < \langle x, x \rangle^{-1}$을 곱하면 같은 근거로 $k^{-1} \le \rho_B(x)$이다. 레일리 몫의 (4)에 의해 $\rho_B(x) = s - \rho_A(x)$이므로 $k^{-1} \le s - \rho_A(x)$이고, 순서의 성질 (2)의 (ii)에 의해 $\rho_A(x) \le s - k^{-1}$이다. 따라서 $s - k^{-1}$은 $\mathcal{R}_A$의 상계이다. 그런데 순서의 성질 (3)의 (i)에 의해 $s - (s - k^{-1}) = k^{-1} > 0$이므로 $s - k^{-1} < s$이고, [[upper-bound-and-supremum|상계와 상한]]의 (4)에 의해 $s - k^{-1}$은 $\mathcal{R}_A$의 상계가 아니다. 이 모순에 의해([[proof-by-contradiction|귀류법]]) $s$는 $A$의 고윳값이다.

**(2).** $\mu$가 $A$의 고윳값이면 레일리 몫의 (2)에 의해 $\mu \in \mathcal{R}_A$이고, $s$는 $\mathcal{R}_A$의 상계이므로 $\mu \le s$이다. (1)에 의해 $s$는 고윳값이므로 레일리 몫의 (2)에 의해 $s \in \mathcal{R}_A$이고, 상계와 상한의 (3)에 의해 $s$는 $\mathcal{R}_A$의 최댓값이다. $v$가 $s$에 속하는 고유벡터이면 레일리 몫의 (2)에 의해 $\rho_A(v) = s$이다.

**(3).** 레일리 몫의 (4)에 의해 $-A$는 대칭이고 $\sup \mathcal{R}_{-A} = -t$이다. 실수 $\mu$와 $v \in \mathbb{R}^n$에 대하여, 레일리 몫의 (4)에 의해 $(-A)v = -(Av)$이다. $-(Av) = \mu v$이면 (B8)과 (B9)에 의해 $Av = -(\mu v) = (-\mu)v$이고, 거꾸로 $Av = (-\mu)v$이면 (B9)와 (K9)에 의해 $-(Av) = -((-\mu)v) = (-(-\mu))v = \mu v$이다. 따라서 $(-A)v = \mu v$인 것은 정확히 $Av = (-\mu)v$일 때이다. 따라서 $v$가 $\mu$에 속하는 $-A$의 고유벡터인 것은 정확히 $v$가 $-\mu$에 속하는 $A$의 고유벡터일 때이고, $\mu$가 $-A$의 고윳값인 것은 정확히 $-\mu$가 $A$의 고윳값일 때이다. 이것을 (나)라 부른다.

(1)을 $-A$에 쓰면 $-t$는 $-A$의 고윳값이고, (나)와 (K9)의 $-(-t) = t$에 의해 $t$는 $A$의 고윳값이다. $\mu$가 $A$의 고윳값이면 (나)에 의해 $-\mu$는 $-A$의 고윳값이고, (2)를 $-A$에 쓰면 $-\mu \le -t$이므로 순서의 성질 (3)의 (iii)에 의해 $t \le \mu$이다. 레일리 몫의 (2)에 의해 $t \in \mathcal{R}_A$이므로 상계와 상한의 (3)에 의해 $t$는 $\mathcal{R}_A$의 최솟값이다. $w$가 $t$에 속하는 고유벡터이면 레일리 몫의 (2)에 의해 $\rho_A(w) = t$이다.

**(4).** 첫 문장은 (2)와 (3)이다. 이차식의 부등식은 레일리 몫의 (3)이다. $v$가 $s$에 속하는 고유벡터이면 $Av = sv$이므로 내적의 (1)에 의해 $\langle Av, v \rangle = s\langle v, v \rangle$이고, $w$에 대해서도 같다.

$A$의 고윳값이 하나뿐이라 하자. (2)와 (3)에 의해 $s$와 $t$는 모두 $A$의 고윳값이므로 $s = t$이고, 레일리 몫의 (5)에 의해 $A = cI_n$인 실수 $c$가 있다. 거꾸로 $A = cI_n$이면 레일리 몫의 (5)에 의해 $\mathcal{R}_A = \{c\}$이다. (1)에 의해 $A$는 고윳값을 갖고, 레일리 몫의 (2)에 의해 $A$의 모든 고윳값은 $\mathcal{R}_A$의 원소, 곧 $c$이다. 따라서 $A$의 고윳값은 $c$ 하나뿐이다.

**(5).** $V$는 유한차원이므로 [[dimension|유한차원과 차원]]의 (2)에 의해 $d = \dim V$는 $0$ 이상인 정수이다. 같은 항목의 (3)에 의해 $d = 0$이면 $V = \{0_V\}$이므로, 가정 $V \ne \{0_V\}$에 의해 $d \ne 0$이다. [[well-ordering-principle|정렬 원리]]의 (Z5)와 [[prime-number|소수]]의 (Z1)에 의해 $d \ge 1$이고, 따라서 $d$는 자연수이다. 정규직교 기저 $\mathcal{B}$는 [[orthonormal-basis|정규직교 기저]]의 (1)에 의해 길이가 $d$이고 기저이다. [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (3)에 의해 $[T]_{\mathcal{B}}$는 대칭이다. [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (6)에 의해 실수 $\lambda$가 $T$의 고윳값인 것은 정확히 $\lambda$가 $[T]_{\mathcal{B}}$의 고윳값일 때이다. (1)–(3)을 $d \times d$ 대칭행렬 $[T]_{\mathcal{B}}$에 쓰면 $\sup \mathcal{R}_{[T]_{\mathcal{B}}}$와 $\inf \mathcal{R}_{[T]_{\mathcal{B}}}$는 $[T]_{\mathcal{B}}$의 고윳값, 곧 $T$의 고윳값이고, $T$의 모든 고윳값은 $[T]_{\mathcal{B}}$의 고윳값이므로 이 두 수 사이에 있다. 마지막 문장은 [[orthonormal-basis-exists|정규직교 기저의 존재와 확장]]의 (1)이다. $\blacksquare$
:::

## 예시와 반례

:::example[2 × 2 대칭행렬의 상한과 하한]
$$
A = \begin{pmatrix} 2 & 2 \\ 2 & -1 \end{pmatrix}
$$
은 대칭입니다. [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 (4)로 계산하면 $\operatorname{tr} A = 1$, $\det A = -6$, 판별식 $1 + 24 = 25 > 0$이므로 고윳값은 정확히 $\lambda_1 = 2^{-1}(1 + 5) = 3$과 $\lambda_2 = 2^{-1}(1 - 5) = -2$입니다. (2)와 (3)에 의해 $\sup \mathcal{R}_A = 3$, $\inf \mathcal{R}_A = -2$입니다.

실제로 $v = (2, 1)$이면 $Av = (6, 3) = 3v$이고 $\rho_A(v) = 15 \cdot 5^{-1} = 3$이며, $w = (1, -2)$이면 $Aw = (-2, 4) = -2w$이고 $\rho_A(w) = -10 \cdot 5^{-1} = -2$입니다. 대각성분 $2 = \rho_A(e_1)$과 $-1 = \rho_A(e_2)$는 $-2$와 $3$ 사이에 있고, $\lVert A \rVert_F = \sqrt{13}$은 $3$보다 큽니다($13 > 9$). 또 $\langle v, w \rangle = 2 - 2 = 0$입니다.
:::

:::remark[2 × 2 의 경우와 홀수 크기의 경우]
$n = 2$이면 (1)의 "대칭행렬은 고윳값을 갖는다"는 [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 (5)와 같은 결론이고, $n$이 홀수이면 [[odd-dimension-has-real-eigenvalue|홀수 크기의 행렬은 실고윳값을 갖는다]]의 (4)가 대칭이 아닌 행렬까지 포함해 같은 결론을 줍니다. 두 항목은 판별식과 사잇값 정리를 쓰고, 이 항목은 크기에 상관없이 대칭만으로 고윳값을 얻습니다. $2 \times 2$ 대칭행렬에서 판별식이 양수이면 그 항목의 (4)의 $\lambda_1$은 $\lambda_2$보다 크므로 (2)에 의해 $\lambda_1 = \sup \mathcal{R}_A$이고, 판별식이 $0$이면 그 항목의 (5)에 의해 $A = aI_2$이어서 레일리 몫의 (5)에 의해 $\sup \mathcal{R}_A = \inf \mathcal{R}_A = a$입니다.
:::

:::counterexample[대칭이 아닌 행렬에서 몫의 상한이 고윳값이 아닐 수 있는 예]
$$
A = \begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}
$$
은 대칭이 아닙니다. $x = (x_1, x_2)$이면 $Ax = (x_1 - x_2, x_1 + x_2)$이므로 $\langle Ax, x \rangle = x_1^2 - x_1 x_2 + x_1 x_2 + x_2^2 = \langle x, x \rangle$이고, 모든 $x \ne 0$에서 $\langle Ax, x \rangle \langle x, x \rangle^{-1} = 1$입니다. 이 값들의 상한은 $1$입니다. 그런데 $\operatorname{tr} A = 2$, $\det A = 2$이어서 판별식은 $4 - 8 = -4 < 0$이고, [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 (2)에 의해 $A$에는 고윳값이 없습니다. 증명에서 대칭이 쓰이는 단계는 $B = I_2 - A$에 ⟨Bx, x⟩ ≥ 0 인 대칭행렬의 코시–슈바르츠 부등식을 쓰는 곳인데, 이 $B = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$은 모든 $x$에서 $\langle Bx, x \rangle = 0$이지만 $Be_1 \ne 0$이어서 그 항목의 (2)가 성립하지 않습니다.
:::

## 확인 질문

:::check[$3 \times 3$ 대칭행렬 $A$의 고윳값이 $1$과 $3$뿐이라면, 단위벡터 $u$에서 $\langle Au, u \rangle$가 가질 수 있는 값의 범위는 무엇인가?]
(2)와 (3)에 의해 $\sup \mathcal{R}_A = 3$이고 $\inf \mathcal{R}_A = 1$입니다. [[rayleigh-quotient|레일리 몫]]의 (1)에 의해 $\langle Au, u \rangle \in \mathcal{R}_A$이므로 $1 \le \langle Au, u \rangle \le 3$입니다. 또 (2)와 (3)에 의해 $3$과 $1$은 $\mathcal{R}_A$의 원소이고, 레일리 몫의 (1)에 의해 $\mathcal{R}_A$의 원소는 모두 어떤 단위벡터 $u$에서의 $\langle Au, u \rangle$이므로 두 끝값도 실제로 나옵니다.
:::

:::check[대칭행렬 $A$의 대각성분 가운데 $5$와 $-2$가 있으면 $A$의 가장 큰 고윳값과 가장 작은 고윳값에 대하여 무엇을 말할 수 있는가?]
[[rayleigh-quotient|레일리 몫]]의 (2)에 의해 대각성분은 $\rho_A(e_k)$로 $\mathcal{R}_A$에 들어 있으므로 $5 \le \sup \mathcal{R}_A$이고 $\inf \mathcal{R}_A \le -2$입니다. (2)와 (3)에 의해 가장 큰 고윳값은 $5$ 이상이고 가장 작은 고윳값은 $-2$ 이하입니다.
:::
