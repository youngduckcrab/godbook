---
title: 그람–슈미트 과정의 예
title_en: Examples of the Gram–Schmidt Process
aliases: [그람-슈미트 과정의 예, 정규직교화의 예, Gram–Schmidt examples]
kind: proposition
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: 표준내적을 준 ℝ³ 의 일차독립인 세 벡터에 그람–슈미트 과정을 끝까지 쓰고, 그 결과로 평면 위로의 직교사영과 평면까지 가장 가까운 거리를 계산한다. 일차종속인 열에서는 셋째 단계에서 영벡터가 나오는 것과, ℝ² 의 같은 두 벡터를 두 순서로 넣으면 결과가 다른 것을 계산으로 보인다.
requires: [real-number-arithmetic, order-properties-of-reals, finite-sum-of-vectors, linear-combination-and-span, linear-independence, standard-inner-product, norm-in-inner-product-space, orthonormal-basis, orthogonal-projection, gram-schmidt-process]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 3절 Orthogonal projection and Gram-Schmidt orthogonalization 의 3.2 An example, pp.132–133; 3절 연습문제 3.1, 3.2, 3.4, 3.5, 3.6, pp.133–134
    checked: original
    note: "(1)은 출처 3.2(pp.132–133)가 ℝ³ 의 세 벡터 (1, 1, 1), (0, 1, 2), (1, 0, 2) 에 과정을 끝까지 쓰는 것과 같은 발상의 계산이고, 출처 연습문제 3.1(p.133)이 ℝ³ 의 세 벡터에 과정을 쓰게 하는 것과 같은 일이다. (2)는 출처 연습문제 3.2(p.133)가 두 벡터에 과정을 쓴 뒤 그 생성 위로의 사영을 다루게 하는 것, 연습문제 3.4–3.6(p.134)이 부분공간까지의 거리와 직교사영을 구하게 하는 것, 4절 연습문제 4.2(p.141)가 열공간 위로의 직교사영을 그람–슈미트로 구하게 하는 것과 같은 발상이다. (3)의 일차종속인 열은 출처 3.1(p.131)의 'x_{r+1} ∉ E_r 이므로 v_{r+1} ≠ 0' 이 깨지는 경우이다. 출처 3.2 뒤의 Remark(p.133)는 v₃ 대신 상수배 (1, −2, 1) 을 써도 된다고 적는다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$\mathbb{R}^2$, $\mathbb{R}^3$에는 [[standard-inner-product|표준내적]]을 주고, $v$, $u$, $c_{k,i}$는 [[gram-schmidt-process|그람–슈미트 과정]]의 (1), (2)의 것이다.

1. ($\mathbb{R}^3$의 세 벡터) $x_1 = (2, 1, 2)$, $x_2 = (0, 3, 3)$, $x_3 = (3, 0, 0)$은 일차독립이고, 과정의 결과는
   - $c_{1,1} = 1$, $c_{2,1} = \tfrac{2}{3}$, $c_{2,2} = -\tfrac{2}{3}$,
   - $v_1 = (2, 1, 2)$, $v_2 = (-2, 2, 1)$, $v_3 = \bigl(\tfrac{1}{3}, \tfrac{2}{3}, -\tfrac{2}{3}\bigr)$,
   - $u_1 = \bigl(\tfrac{2}{3}, \tfrac{1}{3}, \tfrac{2}{3}\bigr)$, $u_2 = \bigl(-\tfrac{2}{3}, \tfrac{2}{3}, \tfrac{1}{3}\bigr)$, $u_3 = v_3$

   이다. $u_1, u_2, u_3$은 $\mathbb{R}^3$의 정규직교 기저이다.
2. (평면으로의 직교사영) (1)의 $E = \operatorname{span}(x_1, x_2)$와 $v = (0, 0, 9)$에 대하여, $v$의 $E$로의 [[orthogonal-projection|직교사영]]은 $(2, 4, 5)$이고, $v - (2, 4, 5) = (-2, -4, 4)$이며 그 노름은 $6$이다. 따라서 $E$의 모든 원소 $x$에서 $6 \le \lVert v - x \rVert$이고, 등호는 정확히 $x = (2, 4, 5)$일 때 성립한다.
3. (일차종속인 열) $x_1 = (1, 2, 0)$, $x_2 = (0, 1, 1)$, $x_3 = (2, 5, 1)$이면 $x_1, x_2$는 일차독립이고 $x_3 = 2x_1 + x_2$이다. 과정의 식으로 $v_1 = (1, 2, 0)$, $v_2 = \bigl(-\tfrac{2}{5}, \tfrac{1}{5}, 1\bigr)$이고, 셋째 단계의 벡터 $x_3 - (c_{2,1} v_1 + c_{2,2} v_2)$는 $c_{2,1} = \tfrac{12}{5}$, $c_{2,2} = 1$로 $(0, 0, 0)$이다.
4. (넣는 순서) $\mathbb{R}^2$에서 열 $(1, 0), (1, 1)$에 과정을 쓰면 $v_1 = (1, 0)$, $v_2 = (0, 1)$, $u_1 = (1, 0)$이다. 같은 두 벡터를 순서를 바꾼 열 $(1, 1), (1, 0)$에 쓰면 $v_1 = (1, 1)$, $v_2 = \bigl(\tfrac{1}{2}, -\tfrac{1}{2}\bigr)$, $u_1 = \lVert (1, 1) \rVert^{-1}(1, 1)$이고, 이 $u_1$의 둘째 성분은 $0$이 아니어서 $(1, 0)$과 다르다.
:::

:::english
Give $\mathbb{R}^2$ and $\mathbb{R}^3$ the standard inner product, and let $v$, $u$, $c_{k,i}$ be as in (1), (2) of the entry on the Gram–Schmidt process.

1. (Three vectors in $\mathbb{R}^3$) $x_1 = (2, 1, 2)$, $x_2 = (0, 3, 3)$, $x_3 = (3, 0, 0)$ are linearly independent, and the result of the process is
   - $c_{1,1} = 1$, $c_{2,1} = \tfrac{2}{3}$, $c_{2,2} = -\tfrac{2}{3}$,
   - $v_1 = (2, 1, 2)$, $v_2 = (-2, 2, 1)$, $v_3 = \bigl(\tfrac{1}{3}, \tfrac{2}{3}, -\tfrac{2}{3}\bigr)$,
   - $u_1 = \bigl(\tfrac{2}{3}, \tfrac{1}{3}, \tfrac{2}{3}\bigr)$, $u_2 = \bigl(-\tfrac{2}{3}, \tfrac{2}{3}, \tfrac{1}{3}\bigr)$, $u_3 = v_3$.

   The sequence $u_1, u_2, u_3$ is an orthonormal basis of $\mathbb{R}^3$.
2. (Orthogonal projection onto a plane) For $E = \operatorname{span}(x_1, x_2)$ from (1) and $v = (0, 0, 9)$, the orthogonal projection of $v$ onto $E$ is $(2, 4, 5)$, $v - (2, 4, 5) = (-2, -4, 4)$, and its norm is $6$. Hence $6 \le \lVert v - x \rVert$ for every element $x$ of $E$, with equality exactly when $x = (2, 4, 5)$.
3. (A linearly dependent sequence) If $x_1 = (1, 2, 0)$, $x_2 = (0, 1, 1)$, $x_3 = (2, 5, 1)$, then $x_1, x_2$ are linearly independent and $x_3 = 2x_1 + x_2$. The formulas of the process give $v_1 = (1, 2, 0)$, $v_2 = \bigl(-\tfrac{2}{5}, \tfrac{1}{5}, 1\bigr)$, and the vector $x_3 - (c_{2,1} v_1 + c_{2,2} v_2)$ of the third step, with $c_{2,1} = \tfrac{12}{5}$ and $c_{2,2} = 1$, is $(0, 0, 0)$.
4. (Order of input) Applying the process to the sequence $(1, 0), (1, 1)$ in $\mathbb{R}^2$ gives $v_1 = (1, 0)$, $v_2 = (0, 1)$, $u_1 = (1, 0)$. Applying it to the sequence $(1, 1), (1, 0)$, with the same two vectors in the other order, gives $v_1 = (1, 1)$, $v_2 = \bigl(\tfrac{1}{2}, -\tfrac{1}{2}\bigr)$, $u_1 = \lVert (1, 1) \rVert^{-1}(1, 1)$; the second component of this $u_1$ is not $0$, so it differs from $(1, 0)$.
:::

## 직관

그람–슈미트 과정은 식이 정해져 있으므로 손으로 끝까지 계산할 수 있습니다. 각 단계에서 할 일은 앞에서 만든 $v_i$와의 내적을 $\langle v_i, v_i \rangle$로 나눈 계수를 구하고, 그 계수로 만든 일차결합을 빼는 것입니다. 계산한 뒤에는 결과가 서로 직교하는지 내적을 다시 계산해 확인할 수 있습니다.

(1)의 벡터는 노름이 깔끔한 정수가 되도록 골랐습니다. (2)는 그 결과의 처음 두 항으로 평면 위로의 직교사영과 평면까지의 가장 짧은 거리를 계산합니다. (3)은 일차독립이라는 가정을 빼면 어디서 과정이 멈추는지, (4)는 같은 벡터라도 넣는 순서에 따라 결과가 달라질 수 있다는 것을 보입니다. 첫째 항은 언제나 $x_1$을 정규화한 것이기 때문입니다.

## 증명

:::proof
분수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]으로 하고, 표준내적은 성분끼리의 곱의 합이다. [[gram-schmidt-process|그람–슈미트 과정]]의 번호는 "과정의 (1)"처럼 쓴다.

**(1).** 일차독립: $a x_1 + b x_2 + c x_3 = (2a + 3c, a + 3b, 2a + 3b) = 0$이면 둘째와 셋째 성분의 차에서 $a = 0$이고, 그러면 $b = 0$, $c = 0$이다. $\langle v_1, v_1 \rangle = 4 + 1 + 4 = 9$, $\langle x_2, v_1 \rangle = 0 + 3 + 6 = 9$이므로 $c_{1,1} = 1$이고 $v_2 = (0, 3, 3) - (2, 1, 2) = (-2, 2, 1)$이다. $\langle v_2, v_2 \rangle = 4 + 4 + 1 = 9$, $\langle x_3, v_1 \rangle = 6$, $\langle x_3, v_2 \rangle = -6$이므로 $c_{2,1} = \tfrac{6}{9} = \tfrac{2}{3}$, $c_{2,2} = -\tfrac{2}{3}$이고
$$
\begin{aligned}
v_3 &= (3, 0, 0) - \tfrac{2}{3}(2, 1, 2) \\
&\quad + \tfrac{2}{3}(-2, 2, 1) \\
&= \bigl(3 - \tfrac{4}{3} - \tfrac{4}{3}, -\tfrac{2}{3} + \tfrac{4}{3}, -\tfrac{4}{3} + \tfrac{2}{3}\bigr) \\
&= \bigl(\tfrac{1}{3}, \tfrac{2}{3}, -\tfrac{2}{3}\bigr)
\end{aligned}
$$
이다. 확인: $\langle v_1, v_2 \rangle = -4 + 2 + 2 = 0$, $\langle v_1, v_3 \rangle = \tfrac{2}{3} + \tfrac{2}{3} - \tfrac{4}{3} = 0$, $\langle v_2, v_3 \rangle = -\tfrac{2}{3} + \tfrac{4}{3} - \tfrac{2}{3} = 0$. $\langle v_3, v_3 \rangle = \tfrac{1 + 4 + 4}{9} = 1$이다. [[norm-in-inner-product-space|내적공간의 노름]]의 (2)와 [[order-properties-of-reals|실수의 순서의 성질]]의 (10)에 의해 $\lVert v_1 \rVert = \lVert v_2 \rVert = 3$, $\lVert v_3 \rVert = 1$이므로 $u_1 = 3^{-1} v_1$, $u_2 = 3^{-1} v_2$, $u_3 = 1^{-1} v_3 = v_3$이다. $u_1, u_2, u_3$은 과정의 (2)에 의해 정규직교 열이고 길이가 $\dim \mathbb{R}^3 = 3$이므로 [[orthonormal-basis|정규직교 기저]]의 (1)에 의해 정규직교 기저이다.

**(2).** 과정의 (2)에 의해 $u_1, u_2$는 정규직교 열이고 그 생성이 $E$이다. $\langle v, u_1 \rangle = 6$, $\langle v, u_2 \rangle = 3$이므로 [[orthogonal-projection|직교사영]]의 (3)에 의해 직교사영은 $6u_1 + 3u_2 = (4, 2, 4) + (-2, 2, 1) = (2, 4, 5)$이다. $v - (2, 4, 5) = (-2, -4, 4)$이고 $\lVert (-2, -4, 4) \rVert^2 = 4 + 16 + 16 = 36$이므로 노름은 $6$이다. 마지막 문장은 직교사영의 (2)이다.

**(3).** $a x_1 + b x_2 = (a, 2a + b, b) = 0$이면 $a = b = 0$이므로 $x_1, x_2$는 일차독립이다. $2x_1 + x_2 = (2, 5, 1) = x_3$이다. $\langle v_1, v_1 \rangle = 5$, $\langle x_2, v_1 \rangle = 2$이므로 $v_2 = (0, 1, 1) - \tfrac{2}{5}(1, 2, 0) = \bigl(-\tfrac{2}{5}, \tfrac{1}{5}, 1\bigr)$이고 $\langle v_2, v_2 \rangle = \tfrac{4 + 1 + 25}{25} = \tfrac{6}{5}$이다. $\langle x_3, v_1 \rangle = 2 + 10 = 12$, $\langle x_3, v_2 \rangle = -\tfrac{4}{5} + 1 + 1 = \tfrac{6}{5}$이므로 $c_{2,1} = \tfrac{12}{5}$, $c_{2,2} = 1$이고
$$
\begin{aligned}
&(2, 5, 1) - \tfrac{12}{5}(1, 2, 0) \\
&\quad - \bigl(-\tfrac{2}{5}, \tfrac{1}{5}, 1\bigr) \\
&= \bigl(2 - \tfrac{12}{5} + \tfrac{2}{5}, \\
&\qquad 5 - \tfrac{24}{5} - \tfrac{1}{5}, 1 - 0 - 1\bigr) \\
&= (0, 0, 0)
\end{aligned}
$$
이다. 과정의 (5)에 의해 미리 알 수 있는 결과이기도 하다($x_3 \in \operatorname{span}(x_1, x_2)$).

**(4).** 첫째 열: $v_1 = (1, 0)$, $\langle (1, 1), v_1 \rangle = 1$, $\langle v_1, v_1 \rangle = 1$이므로 $v_2 = (1, 1) - (1, 0) = (0, 1)$이고, $\lVert v_1 \rVert = 1$이므로 $u_1 = (1, 0)$이다. 둘째 열: $v_1 = (1, 1)$, $\langle (1, 0), v_1 \rangle = 1$, $\langle v_1, v_1 \rangle = 2$이므로 $v_2 = (1, 0) - \tfrac{1}{2}(1, 1) = \bigl(\tfrac{1}{2}, -\tfrac{1}{2}\bigr)$이다. 두 열은 일차독립이다($a(1, 0) + b(1, 1) = (a + b, b) = 0$이면 $a = b = 0$). $u_1 = \lVert (1, 1) \rVert^{-1}(1, 1)$의 둘째 성분은 $\lVert (1, 1) \rVert^{-1}$이고, [[norm-in-inner-product-space|내적공간의 노름]]의 (1)에 의해 $0 < \lVert (1, 1) \rVert$이므로 그 역수는 $0$이 아니다. $\blacksquare$
:::

## 예시와 반례

:::remark[두 결과의 비교]
(4)의 두 결과는 모두 정규직교 열이고, 생성은 둘 다 $\mathbb{R}^2$ 전체입니다. 과정의 (2)가 보장하는 것은 "처음 $k$개의 생성이 $x$의 처음 $k$개의 생성과 같다"는 것이고, 첫째 열에서 $\operatorname{span}(u_1)$은 $(1, 0)$이 생성하는 직선, 둘째 열에서는 $(1, 1)$이 생성하는 직선이어서 서로 다릅니다.
:::

## 확인 질문

:::check[(1)의 결과에서 $x_3 = (3, 0, 0)$을 $u_1, u_2, u_3$의 일차결합으로 쓰면 계수는 무엇인가?]
[[orthonormal-basis|정규직교 기저]]의 (2)에 의해 계수는 $\langle x_3, u_1 \rangle = 2$, $\langle x_3, u_2 \rangle = -2$, $\langle x_3, u_3 \rangle = 1$입니다. 확인하면 $2u_1 - 2u_2 + u_3 = \bigl(\tfrac{4}{3} + \tfrac{4}{3} + \tfrac{1}{3}, \tfrac{2}{3} - \tfrac{4}{3} + \tfrac{2}{3}, \tfrac{4}{3} - \tfrac{2}{3} - \tfrac{2}{3}\bigr) = (3, 0, 0)$입니다.
:::

:::check[(1)의 열에서 $x_1$과 $x_2$의 순서만 바꾸면 결과의 $u_1$은 무엇인가?]
과정의 (1)에 의해 $v_1$은 첫째 자리의 벡터 $(0, 3, 3)$이므로 $u_1 = \lVert (0, 3, 3) \rVert^{-1}(0, 3, 3)$입니다. 이 벡터의 첫째 성분은 $0$이어서, 첫째 성분이 $\tfrac{2}{3}$인 (1)의 $u_1$과 다릅니다.
:::
