---
title: 다항식 대입의 예
title_en: Examples of Polynomials of Matrices
aliases: [행렬에 다항식을 대입한 예, 영행렬이 되는 다항식의 예, 사영행렬에 다항식 대입, examples of polynomials of matrices, projection matrix polynomial]
kind: proposition
field: linear-algebra
msc: ["15A54"]
level: undergrad
summary: 실근이 없는 다항식 X² + 1 을 대입하면 영행렬이 되는 행렬, (X − 2)³ 을 대입하면 영행렬이지만 (X − 2)² 을 대입하면 영행렬이 아닌 3 × 3 행렬, 제곱해도 그대로인 행렬에 다항식을 대입한 것의 공식을 계산하고, 대입한 행렬의 고윳값이 원래 행렬의 고윳값에서 오지 않을 수 있다는 것을 보인다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, standard-basis, matrix, matrix-vector-product, matrix-product, eigenvalue-and-eigenvector, eigenvalue-examples, mathematical-induction, power-of-a-real-number, finite-sums-in-a-ring, polynomial-ring, evaluation-homomorphism, polynomials-and-polynomial-functions, power-of-linear-map, polynomial-of-linear-map, polynomial-on-eigenvectors-and-invariant-subspaces]
proof: full
sources:
  - ref: hefferon-linear-algebra
    loc: "5장 Similarity, IV Jordan Form, IV.1 Polynomials of Maps and Matrices 의 Example ex:PolySendRotMatToZ, src/jc/jc4.tex:95–117; IV.1 연습문제, src/jc/jc4.tex:1133–1145, 1444–1480; III Nilpotence, III.1 Self-Composition 의 Example, src/jc/jc3.tex:96–115"
    checked: original
    note: "Hefferon 의 5장은 스칼라를 복소수로 둔다. 이 항목은 실수 행렬만 다룬다. (1)의 J 와 X^2 + 1 은 출처 IV.1 의 ex:PolySendRotMatToZ(jc4.tex:95–117)가 평면의 π/3 회전 T 에서 T^2 − T + I = Z 를 확인하는 것과 같은 발상(회전에 실근이 없는 이차식을 대입하면 영행렬)이다. 이 사이트는 삼각함수를 쓰지 않고 J 를 행렬로 준다. (2)의 C − 2I_3 는 출처 III.1 의 Example(jc3.tex:96–115)이 ℂ^3 위의 shift 변환 (x, y, z) ↦ (0, x, y) 를 거듭 적용해 영사상이 되는 것과 같은 발상이고(출처는 1 을 대각선 아래에, 이 항목은 위에 둔다), C 는 IV.1 연습문제(jc4.tex:1133–1145)가 최소다항식을 묻는, 대각성분이 모두 λ 이고 대각선 옆이 1 인 꼴의 행렬의 3 × 3 판과 같은 꼴이다. (3)의 PP = P 인 행렬은 IV.1 연습문제(jc4.tex:1444–1480)가 사영이라 부르는 t^2 = t 인 변환과 같은 대상이고, 그 풀이는 t^2 − t 가 영사상이 되는 관계라고 적는다."
  - ref: treil-linear-algebra-done-wrong
    loc: "9장 2.2 Spectral Mapping Theorem, Theorem 2.1 과 Remark, p.257; 5장 3절 연습문제 3.10, p.134; 5장 5절 연습문제 5.6, p.146; 4장 2절 연습문제 2.12, p.115"
    checked: original
    note: "(1)의 (ii)는 출처 9장 Theorem 2.1(p.257)이 복소 스칼라에서 σ(p(A)) = p(σ(A)) 라고 진술하는 것이 실수 고윳값만 볼 때는 한쪽 포함만 남는다는 것을 J 와 X^2 로 보인 것이다. 출처 5장 연습문제 3.10(p.134)과 5.6(p.146)은 직교사영의 행렬 P 가 P^2 = P 를 만족한다는 것과 그 거꾸로를 다룬다((3)과 같은 대상의 한 경우). (2)의 C − 2I_3 는 출처 4장 연습문제 2.12(p.115)가 말하는 영이 아닌 멱영행렬의 한 예이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(사영의 다항식 공식과 3 × 3 예의 거듭제곱, 실수에서 한쪽 포함만 성립하는 고윳값의 예). 독립 검토 없음."
added: 2026-11-28
---

:::statement
행렬의 곱과 영행렬 $O$, 단위행렬 $I_n$은 [[matrix|행렬]]과 [[matrix-product|행렬의 곱]]의 것이고, 거듭제곱 $A^k$는 [[power-of-linear-map|선형사상과 행렬의 거듭제곱]], 다항식 $f \in \mathbb{R}[X]$를 대입한 것 $f(A)$는 [[polynomial-of-linear-map|선형사상과 행렬에 다항식 대입하기]]의 것이다. 실수 $c$에 대하여 $f(c)$는 [[evaluation-homomorphism|대입 준동형]]의 대입한 값이고, 고윳값은 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이다.

1. (실근이 없는 다항식) $J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$이라 하자.
   - (i) $J^2 = -I_2$이고 $(X^2 + 1)(J) = O$이다.
   - (ii) $-1$은 $(X^2)(J) = J^2$의 고윳값이다. 그러나 $J$에는 고윳값이 없으므로 $\lambda^2 = -1$인 $J$의 고윳값 $\lambda$는 없다.
2. (거듭제곱해야 영행렬이 되는 행렬) 
   $$
   C = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}
   $$
   이라 하자.
   - (i) $(X - 2)(C) \ne O$, $\bigl((X - 2)^2\bigr)(C) \ne O$이고 $\bigl((X - 2)^3\bigr)(C) = O$이다.
   - (ii) $C$의 고윳값은 정확히 $2$ 하나이다.
3. (제곱해도 그대로인 행렬) $n$이 자연수이고 $P$가 $PP = P$인 $n \times n$ 행렬이라 하자.
   - (i) $k \ge 1$인 모든 정수 $k$에서 $P^k = P$이고, 모든 $f \in \mathbb{R}[X]$에서
     $$
     \begin{aligned}
     f(P) &= f(0)\,(I_n - P) \\
     &\quad + f(1)\,P
     \end{aligned}
     $$
     이다.
   - (ii) $(X^2 - X)(P) = O$이고, $P$의 고윳값은 $0$이나 $1$이다.
   - (iii) $P = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$은 $PP = P$를 만족하고, $f = X^3 - 2X + 1$이면 $f(P) = I_2 - P = \begin{pmatrix} 0 & -1 \\ 0 & 1 \end{pmatrix}$이다.
:::

:::english
The product of matrices, the zero matrix $O$ and the identity matrix $I_n$ are those of the entries on matrices and the matrix product; the powers $A^k$ are those of the entry on powers of linear maps and matrices, and the evaluation $f(A)$ of a polynomial $f \in \mathbb{R}[X]$ is that of the entry on polynomials of linear maps and matrices. For a real number $c$, $f(c)$ is the value of the entry on evaluation homomorphisms, and eigenvalues are those of the entry on eigenvalues and eigenvectors.

1. (A polynomial without real roots) Let $J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$.
   - (i) $J^2 = -I_2$ and $(X^2 + 1)(J) = O$.
   - (ii) $-1$ is an eigenvalue of $(X^2)(J) = J^2$. However, $J$ has no eigenvalues, so there is no eigenvalue $\lambda$ of $J$ with $\lambda^2 = -1$.
2. (A matrix that becomes zero only after a power)
   $$
   C = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}.
   $$
   - (i) $(X - 2)(C) \ne O$, $\bigl((X - 2)^2\bigr)(C) \ne O$, and $\bigl((X - 2)^3\bigr)(C) = O$.
   - (ii) The only eigenvalue of $C$ is $2$.
3. (A matrix equal to its square) Let $n$ be a natural number and $P$ an $n \times n$ matrix with $PP = P$.
   - (i) $P^k = P$ for every integer $k \ge 1$, and for every $f \in \mathbb{R}[X]$
     $$
     \begin{aligned}
     f(P) &= f(0)\,(I_n - P) \\
     &\quad + f(1)\,P.
     \end{aligned}
     $$
   - (ii) $(X^2 - X)(P) = O$, and every eigenvalue of $P$ is $0$ or $1$.
   - (iii) $P = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$ satisfies $PP = P$, and for $f = X^3 - 2X + 1$ we have $f(P) = I_2 - P = \begin{pmatrix} 0 & -1 \\ 0 & 1 \end{pmatrix}$.
:::

## 직관

이 항목의 세 행렬은 다항식을 대입하는 계산이 수에 대입하는 계산과 어디서 같고 어디서 다른지를 보여 줍니다.

(1)의 $J$는 [[eigenvalue-examples|고윳값이 없는 행렬과 대각화할 수 없는 행렬]]의 (1)의 행렬입니다. 실수 중에는 $X^2 + 1$의 근이 없지만, 행렬 중에는 $X^2 + 1$을 대입해 영행렬이 되는 $J$가 있습니다. [[polynomial-on-eigenvectors-and-invariant-subspaces|고유벡터·불변 부분공간과 다항식]]의 (2)에 의해 그런 행렬의 고윳값은 $X^2 + 1$의 근이어야 하므로, 이것은 $J$에 고윳값이 없다는 것과 맞습니다. (ii)는 그 항목의 (1)의 (i)의 거꾸로가 실수에서는 깨질 수 있다는 것을 보입니다. $J^2 = -I_2$의 고윳값 $-1$은 $J$의 어떤 고윳값의 제곱도 아닙니다.

(2)의 $C$에서 $C - 2I_3$은 표준기저를 $e_3 \to e_2 \to e_1 \to 0$으로 한 칸씩 밀어 내는 행렬이라, 세 번 적용해야 모두 영벡터가 됩니다. 실수에서는 $(c - 2)^3 = 0$이면 $c - 2 = 0$이지만, 행렬에서는 $(C - 2I_3)^3 = O$이어도 $C - 2I_3 \ne O$일 수 있습니다.

(3)은 $P^k$가 $k \ge 1$에서 모두 $P$이므로 다항식에 $P$를 대입하면 상수항과 나머지 계수의 합만 남는다는 계산입니다. 상수항은 $f(0)$이고 모든 계수의 합은 $f(1)$이므로 $f(P) = f(0)I_n + (f(1) - f(0))P$이고, 이것을 정리한 것이 (3)의 (i)의 식입니다. $P = O$나 $P = I_n$이어도 이 식은 맞습니다($f(O) = f(0)I_n$, $f(I_n) = f(1)I_n$).

## 증명

:::idea
행렬의 곱은 [[matrix-product|행렬의 곱]]의 (2)로 성분마다 계산하고, 다항식을 대입한 것은 [[polynomial-of-linear-map|선형사상과 행렬에 다항식 대입하기]]의 (6)으로 계수와 거듭제곱의 합이나 일차식들의 곱으로 바꾼다. 고윳값은 [[polynomial-on-eigenvectors-and-invariant-subspaces|고유벡터·불변 부분공간과 다항식]]의 (5)로 다항식의 근으로 좁힌 뒤 고유벡터를 직접 찾는다.
:::

:::proof
"대입의 (n)"은 [[polynomial-of-linear-map|선형사상과 행렬에 다항식 대입하기]]의 (n), "고유벡터와 다항식의 (n)"은 [[polynomial-on-eigenvectors-and-invariant-subspaces|고유벡터·불변 부분공간과 다항식]]의 (n), "거듭제곱의 (n)"은 [[power-of-linear-map|선형사상과 행렬의 거듭제곱]]의 (n)이다. 실수의 계산은 [[real-number-arithmetic]]의 (K…)이다.

**(1).** (i) 행렬의 곱의 (2)로 $JJ$의 성분을 계산하면 $(1,1)$: $0 \cdot 0 + (-1) \cdot 1 = -1$, $(1,2)$: $0 \cdot (-1) + (-1) \cdot 0 = 0$, $(2,1)$: $1 \cdot 0 + 0 \cdot 1 = 0$, $(2,2)$: $1 \cdot (-1) + 0 \cdot 0 = -1$이므로 $JJ = -I_2$이고, 거듭제곱의 (5)의 (ii)에 의해 $J^2 = JJ = -I_2$이다. 대입의 (6)의 (i)에 의해 $(X^2 + 1)(J) = J^2 + I_2 = -I_2 + I_2 = O$이다.

(ii) 대입의 (6)의 (ii)에 의해 $(X^2)(J) = J^2 = -I_2$이다. 모든 $x \in \mathbb{R}^2$에서 $(-I_2)x = -(I_2x) = -x = (-1)x$이므로([[matrix-vector-product|행렬과 벡터의 곱]]의 (3), (4), [[vector-space-basic-properties|(B5)]]), 예컨대 $e_1 \ne 0$은 $-1$에 속하는 $-I_2$의 고유벡터이고 $-1$은 고윳값이다. [[eigenvalue-examples|고윳값이 없는 행렬과 대각화할 수 없는 행렬]]의 (1)에 의해 $J$에는 고윳값이 없다.

**(2).** $Z = C - 2I_3$이라 하면 대입의 (6)의 (ii)에 의해 $(X - 2)(C) = Z = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} \ne O$이고, 대입의 (6)의 (iv)와 거듭제곱의 (5)의 (ii)에 의해 $\bigl((X - 2)^k\bigr)(C) = Z^k$이다. 행렬의 곱의 (2)로 계산하면 $Z$의 $(j, k)$ 성분은 $k = j + 1$일 때만 $1$이므로
$$
\begin{aligned}
Z^2 = ZZ &= \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \ne O, \\
Z^3 = Z^2 Z &= O
\end{aligned}
$$
이다. 예컨대 $Z^2$의 $(1, 3)$ 성분은 $0 \cdot 0 + 1 \cdot 1 + 0 \cdot 0 = 1$이고, $Z^3$의 $(1, 3)$ 성분은 $0 \cdot 0 + 0 \cdot 1 + 1 \cdot 0 = 0$이며, 나머지 성분도 같은 식으로 모두 계산된다.

(ii) $\bigl((X - 2)^3\bigr)(C) = O$이므로 고유벡터와 다항식의 (5)에 의해 $C$의 고윳값 $\lambda$는 $(X - 2)^3$의 근이다. [[evaluation-homomorphism|대입 준동형]]의 (2)에 의해 $(X - 2)^3$에 $\lambda$를 대입한 값은 $(\lambda - 2)^3$이고, [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 이것은 $(\lambda - 2)(\lambda - 2)(\lambda - 2)$이다([[polynomials-and-polynomial-functions|다항식과 다항함수]]의 (5)의 (ii)). 이것이 $0$이면 (K10)을 두 번 써서 $\lambda - 2 = 0$, 곧 $\lambda = 2$이다. 거꾸로 [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $Ce_1$은 $C$의 첫째 열 $(2, 0, 0) = 2e_1$이고 $e_1 \ne 0$이므로 $2$는 $C$의 고윳값이다.

**(3).** (i) $k = 1$이면 거듭제곱의 (5)의 (ii)에 의해 $P^1 = P$이고, $P^k = P$이면 $P^{k+1} = P^k P = PP = P$이다([[mathematical-induction|귀납법]]). $N \ge 1$을 $m > N$에서 $\operatorname{coef}_m(f) = 0$인 정수로 잡고 $a_m = \operatorname{coef}_m(f)$라 하자. 대입의 (6)의 (i)과 [[finite-sums-in-a-ring|환의 유한 합]]의 (2)(첫 항 떼기), (3), 그리고 실수 $\alpha$에 $\alpha P$를 대응시키는 함수가 덧셈군 $(\mathbb{R}, +)$에서 $(M_{n \times n}, +)$로의 준동형이라는 것(벡터공간 $M_{n \times n}$의 (V8))과 그 항목의 (7)에 의해
$$
\begin{aligned}
f(P) &= a_0 I_n + \sum_{m=1}^{N} a_m P \\
&= a_0 I_n + \Bigl(\sum_{m=1}^{N} a_m\Bigr) P
\end{aligned}
$$
이다. 대입 준동형의 정의에 의해 $f(0) = \sum_{m=0}^{N} a_m 0^m = a_0$이고($0^0 = 1$, $m \ge 1$이면 $0^m = 0$. 실수의 거듭제곱의 (2)의 (iv)와 다항식과 다항함수의 (5)의 (ii)) $f(1) = \sum_{m=0}^{N} a_m = a_0 + \sum_{m=1}^{N} a_m$이다($1^m = 1$). 따라서 $\sum_{m=1}^{N} a_m = f(1) - f(0)$이고
$$
\begin{aligned}
f(P) &= f(0) I_n + (f(1) - f(0)) P \\
&= f(0)(I_n - P) + f(1) P
\end{aligned}
$$
이다(벡터공간 $M_{n \times n}$의 계산).

(ii) 대입의 (6)의 (i)에 의해 $(X^2 - X)(P) = P^2 - P = P - P = O$이다. 고유벡터와 다항식의 (5)에 의해 $P$의 고윳값 $\lambda$는 $\lambda^2 - \lambda = \lambda(\lambda - 1) = 0$을 만족하고, (K10)에 의해 $\lambda = 0$이거나 $\lambda = 1$이다.

(iii) 행렬의 곱의 (2)로 $PP$의 성분은 $(1,1)$: $1 \cdot 1 + 1 \cdot 0 = 1$, $(1,2)$: $1 \cdot 1 + 1 \cdot 0 = 1$, $(2,1)$: $0$, $(2,2)$: $0$이므로 $PP = P$이다. $f = X^3 - 2X + 1$이면 $f(0) = 1$, $f(1) = 1 - 2 + 1 = 0$이므로 (i)에 의해 $f(P) = I_2 - P$이다.
:::

## 확인 질문

:::check[$J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$에서 $J^4$와 $J^{4m+1}$($m \ge 0$)은 무엇인가?]
$J^4 = I_2$이고 $J^{4m+1} = J$입니다. (1)의 (i)과 [[power-of-linear-map|선형사상과 행렬의 거듭제곱]]의 (5)의 (ii)에 의해 $J^4 = (J^2)^2 = (-I_2)^2$이고, 그 항목의 (5)의 (iv)를 $c = -1$에 쓰면 $(-I_2)^2 = (-1)^2 I_2 = I_2$입니다. 같은 항목의 (5)의 (ii), (iv)에 의해 $J^{4m} = (J^4)^m = (I_2)^m = I_2$이고 $J^{4m+1} = J^{4m}J = I_2J = J$입니다.
:::

:::check[(3)의 $P = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$에 대하여 $f(P) = O$가 되는 다항식 $f$의 조건은 무엇인가?]
$f(0) = 0$이고 $f(1) = 0$인 것입니다. (3)의 (i)에 의해 $f(P) = f(0)(I_2 - P) + f(1)P = \begin{pmatrix} f(1) & f(1) - f(0) \\ 0 & f(0) \end{pmatrix}$이므로, 이것이 영행렬인 것은 정확히 $f(1) = 0$이고 $f(0) = 0$일 때입니다.
:::
