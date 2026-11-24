---
title: 행렬식 함수의 유일성
title_en: Uniqueness of the Determinant Function
aliases: [행렬식의 유일성, uniqueness of the determinant]
kind: theorem
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 같은 크기의 두 행렬식 함수는 같다. 더 넓게, 각 행에 대해 선형이고 같은 두 행에서 0 인 함수는 단위행렬에서의 값과 행렬식 함수의 곱이다. 행렬식 함수의 값이 0 이 아닌 것은 정확히 행 소거로 얻은 기약 사다리꼴이 단위행렬일 때이다.
requires: [function, well-ordering-principle, real-number-arithmetic, real-function-space, matrix, echelon-form, elementary-matrix, row-equivalence, row-reduction, determinant-function, determinant-function-and-row-operations]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "3장 3절 첫머리, p.78; 3.1 Basic properties, p.79; 3.4 Computing the determinant, p.82; 4절 Formal definition. Existence and uniqueness of the determinant, pp.86–89"
    checked: original
    note: "출처는 3절 첫머리(p.78)에서 행렬식이 있고 하나뿐임을 4절에서 보이겠다고 적고, 3.1절(p.79)에서 세 기본 성질이 행렬식을 완전히 정한다고 적는다. 4절(pp.86–89)은 첫째 열부터 차례로 각 열의 선형성으로 펼쳐 nⁿ 개의 항을 얻고, 두 첨자가 같은 항을 지운 뒤 남은 항을 치환으로 써서, 기본 성질을 만족하려면 det A 가 식 (4.2)(치환에 대한 합)이어야 한다고 결론짓는다. 그 과정에서 치환의 부호가 잘 정해진다는 것은 조합론의 잘 알려진 사실이라 하고, 역순쌍의 수로 다시 정의한 뒤 이웃한 두 원소의 맞바꿈이 역순쌍의 수를 하나 바꾼다고 적는다(p.88). 이 항목은 치환을 쓰지 않고 행 소거로 증명한다. 출처의 3.4절(p.82)은 열 소거로 행렬식을 계산하는 방법을 적은 뒤, 서로 다른 열 연산의 순서가 같은 답을 준다는 것을 보이지 않았으므로 이 계산 결과를 정의로 삼을 수 없다고 적는다. 이 항목의 (1)은 행 소거의 순서와 상관없이 값이 하나로 정해진다는 것을, 행렬식 함수가 하나뿐이라는 꼴로 보인 것이다. 출처의 3.4절(p.82)은 Aᵀ 의 사다리꼴이 모든 열(행)에 피벗을 갖지 않으면 A 가 가역이 아니어서 det A = 0 이라고 적는다. (3)은 이것을 가역성 없이 사다리꼴의 말로 적은 것이다. (2)는 조건 (iii)이 없는 함수에 대한 꼴이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 뒤 항목을 인용하던 확인 질문 1건, 틀린 근거 번호 1건, 출처의 말을 틀리게 옮긴 메모 1건, 조건이 빠진 설명 문장 3건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수라 하자. [[determinant-function|행렬식 함수]]와 그 조건 (i)–(iii)은 그 항목에서 정한 $n \times n$의 것이고, 기본행렬의 곱은 [[row-equivalence|행 동치]] 항목에서 사슬로 정한 것이며, 기약 사다리꼴과 영행은 [[echelon-form|사다리꼴]] 항목의 것이다.

1. (유일성) $\Delta$와 $\Delta'$이 둘 다 $n \times n$ 행렬식 함수이면 $\Delta = \Delta'$이다. 곧 모든 $A \in M_{n \times n}$에서 $\Delta(A) = \Delta'(A)$이다.
2. (조건 (iii)이 없을 때) 함수 $\Delta : M_{n \times n} \to \mathbb{R}$가 조건 (i)과 (ii)를 만족하고 $\Delta_0$이 $n \times n$ 행렬식 함수이면, 모든 $A \in M_{n \times n}$에서 $\Delta(A) = \Delta(I_n)\,\Delta_0(A)$이다.
3. (값이 $0$이 아닐 조건) $\Delta$가 $n \times n$ 행렬식 함수이고, $A \in M_{n \times n}$와 $n \times n$ 기본행렬의 곱 $E$에 대하여 $EA$가 기약 사다리꼴이라 하자([[row-reduction|행 소거]]의 (2)에 의해 이런 $E$가 있다).
   - (a) $EA = I_n$이면 $\Delta(E) \ne 0$이고 $\Delta(A) = \Delta(E)^{-1}$이다. 특히 $\Delta(A) \ne 0$이다.
   - (b) $EA \ne I_n$이면 $EA$의 $n$번째 행은 영행이고 $\Delta(A) = 0$이다.

   따라서 $\Delta(A) \ne 0$인 것은 정확히 $EA = I_n$일 때이다.
:::

:::english
Let $n$ be a natural number. Determinant functions and their conditions (i)–(iii) are the $n \times n$ ones from the entry on determinant functions, products of elementary matrices are defined by chains as in the entry on row equivalence, and reduced echelon forms and zero rows are as in the entry on echelon forms.

1. (Uniqueness) If $\Delta$ and $\Delta'$ are both $n \times n$ determinant functions, then $\Delta = \Delta'$; that is, $\Delta(A) = \Delta'(A)$ for every $A \in M_{n \times n}$.
2. (Without condition (iii)) If a function $\Delta : M_{n \times n} \to \mathbb{R}$ satisfies conditions (i) and (ii) and $\Delta_0$ is an $n \times n$ determinant function, then $\Delta(A) = \Delta(I_n)\,\Delta_0(A)$ for every $A \in M_{n \times n}$.
3. (When the value is nonzero) Let $\Delta$ be an $n \times n$ determinant function, and let $A \in M_{n \times n}$ and a product $E$ of $n \times n$ elementary matrices be such that $EA$ is in reduced echelon form (by (2) of the entry on row reduction such an $E$ exists).
   - (a) If $EA = I_n$, then $\Delta(E) \ne 0$ and $\Delta(A) = \Delta(E)^{-1}$. In particular $\Delta(A) \ne 0$.
   - (b) If $EA \ne I_n$, then the $n$-th row of $EA$ is a zero row and $\Delta(A) = 0$.

   Hence $\Delta(A) \ne 0$ exactly when $EA = I_n$.
:::

## 직관

행렬식 함수의 세 조건은 기본 행 연산을 했을 때 값이 어떻게 바뀌는지를 정해 줍니다([[determinant-function-and-row-operations|행 연산과 행렬식 함수]]). 그런데 모든 정사각행렬은 행 연산으로 기약 사다리꼴에 닿고, 정사각인 기약 사다리꼴은 단위행렬이거나 마지막 행이 영행입니다. 단위행렬에서는 값이 $1$이고 영행이 있으면 값이 $0$이므로, 끝에서의 값이 정해져 있습니다. 끝에서의 값과 지나온 행 연산이 바꾼 비율이 모두 정해져 있으니 처음 행렬에서의 값도 정해집니다. 그래서 행렬식 함수는 많아야 하나입니다.

여기서 중요한 것은 행 연산이 값을 바꾸는 비율이 어느 행렬식 함수인지에 기대지 않는다는 점입니다. 두 행렬식 함수에 같은 행 연산을 하면 같은 비율로 바뀌고 같은 끝값에 닿으므로, 처음 값도 같습니다. 행 소거의 순서는 여러 가지일 수 있지만, 어떤 순서를 고르든 이 논증은 두 함수의 값이 같다는 것만 보이므로 순서가 결과를 바꿀 걱정이 없습니다.

(2)는 조건 (iii)을 빼면 무엇이 남는지를 말합니다. 행렬식 함수 $\Delta_0$이 하나 있으면, (i)과 (ii)만 만족하는 함수는 $\Delta_0$을 단위행렬에서의 값 $\Delta(I_n)$배 한 것입니다. 특히 $\Delta(I_n) = 0$이면 영함수입니다.

## 증명

:::idea
행 소거로 $EA$를 기약 사다리꼴로 만들면, 행렬식 함수마다 같은 $0$이 아닌 수 $c$로 $\Delta(EA) = c\,\Delta(A)$이고 $\Delta(EA)$는 $1$ 또는 $0$으로 정해진다. (2)는 $\Delta$에 행렬식 함수의 배를 더해 (iii)을 맞춘 뒤 (1)을 쓴다.
:::

:::hint
$n \times n$ 기약 사다리꼴의 피벗의 개수 $r$이 $n$이면 무엇이고, $r < n$이면 어느 행이 영행입니까?
:::

:::hint
(2)에서 $\Delta(A) + (1 - \Delta(I_n))\,\Delta_0(A)$로 정한 함수가 세 조건을 모두 만족하는지 확인해 보세요.
:::

:::proof
[[determinant-function-and-row-operations|행 연산과 행렬식 함수]]의 번호는 "행 연산의 (n)"으로 인용한다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로 인용한다.

**보조 사실.** $A \in M_{n \times n}$이고 $E$가 $n \times n$ 기본행렬의 곱이며 $U = EA$가 기약 사다리꼴이라 하자. 그러면 $U = I_n$이거나 $U$의 $n$번째 행이 영행이다. 실제로 $U$의 피벗의 개수를 $r$이라 하면 [[echelon-form|사다리꼴]]의 정의에 의해 $0 \le r \le n$이고, [[well-ordering-principle|정렬 원리]] 항목의 (Z5)에 의해 $r = n$이거나 $r < n$이다. $r = n$이면 사다리꼴의 (5)에 의해 $U = I_n$이다. $r < n$이면 $r < n \le n$이므로 사다리꼴의 조건 (다)에 의해 $U$의 $n$번째 행은 영행이다.

**(1)의 증명.** $A \in M_{n \times n}$을 잡는다. [[row-reduction|행 소거]]의 (2)에 의해 $EA$가 기약 사다리꼴인 $n \times n$ 기본행렬의 곱 $E$가 있다. $U = EA$라 하자. 행 연산의 (5)에 의해 $0$이 아닌 실수 $c$가 있어, 모든 행렬식 함수에서, 특히 $\Delta$와 $\Delta'$ 둘 다에서 $\Delta(U) = c\,\Delta(A)$이고 $\Delta'(U) = c\,\Delta'(A)$이다. 보조 사실에 의해 두 경우가 있다. $U = I_n$이면 조건 (iii)에 의해 $\Delta(U) = 1 = \Delta'(U)$이다. $U$의 $n$번째 행이 영행이면 행 연산의 (6)에 의해 $\Delta(U) = 0 = \Delta'(U)$이다. 어느 경우든 $c\,\Delta(A) = \Delta(U) = \Delta'(U) = c\,\Delta'(A)$이고, $c \ne 0$이므로 (K11)에 의해 $\Delta(A) = \Delta'(A)$이다. $\Delta$와 $\Delta'$은 정의역이 같은 $M_{n \times n}$인 함수이고 모든 원소에서 값이 같으므로 [[function|함수]]의 같음에 의해 $\Delta = \Delta'$이다.

**(2)의 증명.** $\gamma = 1 - \Delta(I_n)$이라 하고, $A \in M_{n \times n}$마다 실수 $\Delta(A) + \gamma\,\Delta_0(A)$가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $A$를 이 값으로 보내는 함수 $\Delta'' : M_{n \times n} \to \mathbb{R}$가 있다. $\Delta''$이 행렬식 함수임을 보인다.

- (i): $p$, $\alpha$, $\beta$와 $A$, $B$, $C$가 조건 (i)의 가정을 만족하면, $\Delta$와 $\Delta_0$이 (i)을 만족하므로 $\Delta(C) = \alpha\Delta(A) + \beta\Delta(B)$, $\Delta_0(C) = \alpha\Delta_0(A) + \beta\Delta_0(B)$이다. (K1)–(K3)에 의해
$$
\begin{aligned}
\Delta''(C) &= \alpha\Delta(A) + \beta\Delta(B) \\
&\quad + \gamma(\alpha\Delta_0(A) + \beta\Delta_0(B)) \\
&= \alpha\Delta''(A) + \beta\Delta''(B)
\end{aligned}
$$
이다.
- (ii): $A$의 서로 다른 두 행이 같으면 $\Delta(A) = 0$, $\Delta_0(A) = 0$이므로 (K9)와 (K4)에 의해 $\Delta''(A) = 0 + \gamma \cdot 0 = 0$이다.
- (iii): $\Delta_0(I_n) = 1$이므로 (K4), (K1), (K2), (K5)와 뺄셈의 정의에 의해 $\Delta''(I_n) = \Delta(I_n) + (1 - \Delta(I_n)) = 1$이다.

따라서 $\Delta''$은 행렬식 함수이고, (1)에 의해 $\Delta'' = \Delta_0$이다. 모든 $A$에서 $\Delta(A) + \gamma\,\Delta_0(A) = \Delta_0(A)$이다. 양변에서 $\gamma\,\Delta_0(A)$를 빼면 (K12)의 (i)과 (K4)에 의해 $\Delta(A) = \Delta_0(A) - \gamma\,\Delta_0(A) = (1 - \gamma)\,\Delta_0(A)$이고, $1 - \gamma = 1 - (1 - \Delta(I_n)) = \Delta(I_n)$이므로((K12)의 (iv), (K9)) $\Delta(A) = \Delta(I_n)\,\Delta_0(A)$이다.

**(3)의 증명.** 행 연산의 (5)에 의해 $0$이 아닌 실수 $c$가 있어 $\Delta(EA) = c\,\Delta(A)$이고 $\Delta(E) = c$이다.

(a) $EA = I_n$이면 조건 (iii)에 의해 $c\,\Delta(A) = \Delta(I_n) = 1$이다. $c = \Delta(E) \ne 0$이고, (K8)의 (iii)에 의해 $cx = 1$인 실수 $x$는 $c^{-1}$ 하나뿐이므로 $\Delta(A) = c^{-1} = \Delta(E)^{-1}$이다. $\Delta(A) = 0$이면 (K9)에 의해 $c\,\Delta(A) = 0 \ne 1$((K4))이 되어 어긋나므로 $\Delta(A) \ne 0$이다.

(b) $EA \ne I_n$이면 보조 사실에 의해 $EA$의 $n$번째 행은 영행이고, 행 연산의 (6)에 의해 $\Delta(A) = 0$이다.

(a)와 (b)에서, $EA = I_n$이면 $\Delta(A) \ne 0$이고 $EA \ne I_n$이면 $\Delta(A) = 0$이므로, $\Delta(A) \ne 0$인 것은 정확히 $EA = I_n$일 때이다. $\blacksquare$
:::

## 예시와 반례

:::example[행렬식 함수의 두 배]
$n = 2$이고 $\Delta_0$이 $2 \times 2$ 행렬식 함수라 합시다. $A$를 $2\,\Delta_0(A)$로 보내는 함수 $\Delta$는 (i)과 (ii)를 만족하지만 $\Delta(I_2) = 2$이므로 행렬식 함수가 아닙니다. (2)는 이것이 $\Delta(I_2)\,\Delta_0 = 2\,\Delta_0$이라는 것과 맞습니다. 거꾸로 (i)과 (ii)를 만족하는 $2 \times 2$ 함수가 $\Delta(I_2) = 2$이면, (2)에 의해 그 함수는 반드시 $2\,\Delta_0$입니다.
:::

:::example[행 소거로 값을 읽는 2 × 2 행렬]
$A = \begin{pmatrix} 0 & 3 \\ 2 & 4 \end{pmatrix}$에 행 맞바꾸기와 상수배와 행 더하기를 차례로 하면

$$
\begin{aligned}
A_1 &= P_{1,2}A = \begin{pmatrix} 2 & 4 \\ 0 & 3 \end{pmatrix}, \\
A_2 &= D_2(3^{-1})D_1(2^{-1})A_1 \\
&= \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}, \\
R_{1,2}(-2)A_2 &= I_2
\end{aligned}
$$

입니다. $E = R_{1,2}(-2)D_2(3^{-1})D_1(2^{-1})P_{1,2}$라 하면 $E$는 기본행렬의 곱이고 $EA = I_2$이므로 (3)의 (a)에 의해 $\Delta(A) = \Delta(E)^{-1}$입니다. [[determinant-function-and-row-operations|행 연산과 행렬식 함수]]의 (4)를 바깥의 기본행렬부터 차례로 쓰면 $\Delta(E) = 1 \cdot 3^{-1} \cdot 2^{-1} \cdot \Delta(P_{1,2}) = 6^{-1} \cdot (-1) = -6^{-1}$이고, $(-6^{-1})(-6) = 1$이므로 $\Delta(A) = -6$입니다.
:::

:::example[행 소거가 피벗 하나에서 멈추는 2 × 2 행렬]
$A = \begin{pmatrix} 1 & -2 \\ -3 & 6 \end{pmatrix}$에 $R_{2,1}(3)$을 곱하면 $\begin{pmatrix} 1 & -2 \\ 0 & 0 \end{pmatrix}$이고 이것은 피벗이 하나인 기약 사다리꼴입니다. $I_2$가 아니므로 (3)의 (b)에 의해 모든 행렬식 함수에서 $\Delta(A) = 0$입니다. 둘째 행이 첫째 행의 $-3$배라는 것이 이렇게 드러납니다.
:::

## 확인 질문

:::check[$3 \times 3$ 행렬식 함수 $\Delta_0$이 있다고 하자. 조건 (i)과 (ii)를 만족하고 $\Delta(I_3) = 0$인 함수 $\Delta$는 무엇인가?]
(2)에 의해 모든 $A$에서 $\Delta(A) = 0 \cdot \Delta_0(A) = 0$이므로 $\Delta$는 영함수입니다. 거꾸로 영함수는 (i)과 (ii)를 만족하므로, 그런 함수는 영함수 하나뿐입니다.
:::

:::check[$A$에 기본행렬의 곱 $E$를 곱해 $I_n$을 얻었고 $\Delta(E) = 5$이면 $\Delta(A)$는 무엇인가?]
(3)의 (a)에 의해 $\Delta(A) = \Delta(E)^{-1} = 5^{-1}$입니다. 같은 $A$에서 $E'A = I_n$인 다른 기본행렬의 곱 $E'$을 써도 (3)의 (a)에 의해 $\Delta(E')^{-1} = \Delta(A) = 5^{-1}$이므로 $\Delta(E') = 5$입니다. 행 소거를 어떻게 골랐는지는 값에 영향을 주지 않습니다.
:::
