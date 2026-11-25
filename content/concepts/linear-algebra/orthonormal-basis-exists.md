---
title: 정규직교 기저의 존재와 확장
title_en: Existence and Extension of Orthonormal Bases
aliases: [정규직교 기저의 존재, 정규직교 기저로 늘리기, 유한차원 부분공간으로의 직교사영, existence of orthonormal bases, extending an orthonormal sequence to an orthonormal basis]
kind: corollary
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: 유한차원 내적공간에는 정규직교 기저가 있고, 모든 정규직교 열은 정규직교 기저로 늘릴 수 있다. 내적공간의 유한차원 부분공간에도 정규직교 기저가 있고 그것은 전체 공간의 정규직교 열이다. 따라서 유한차원 부분공간으로의 직교사영은 전체 공간이 무한차원이어도 모든 벡터에 있고, 그것을 값으로 하는 사상은 선형이다.
requires: [subspace, basis-iff-independent-and-spanning, finite-sum-of-vectors, linear-combination-and-span, dimension, dimension-of-subspace, extension-to-a-basis, inner-product-space, orthonormal-list, orthonormal-basis, orthogonal-projection, gram-schmidt-process]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 2절 2.1 Orthogonal and orthonormal bases 의 Remark 2.8 뒤 문단, p.128; 3절 3.3 Orthogonal complement 의 첫 문단, p.133; 3절 연습문제 3.3, pp.133–134; 6장 3절 3.4 Matrix representation of the Schmidt decomposition. Singular value decomposition, p.176
    checked: original
    note: "(1)은 출처 2.1(p.128)이 'Section 3 에서 보이듯이 모든 유한차원 내적공간에는 정규직교 기저가 있다'고 적는 것이다. 이 항목은 기저에 그람–슈미트 과정을 써서 증명했다. (2)는 출처 3절 연습문제 3.3(pp.133–134)이 직교하는 system 을 ℝ³ 의 직교 기저로 늘리게 하고 'ℝⁿ 이나 ℂⁿ 의 일반적인 경우에 어떻게 늘리는지 설명할 수 있는가'라고 묻는 것이다. 출처 6장 3절 3.4(p.176)는 v₁, …, v_r 을 정규직교 기저로 늘리려면 Ker V* 의 정규직교 기저를 찾아 덧붙이면 되고, 임의의 기저에서 그람–슈미트로 정규직교 기저를 얻을 수 있다고 적는다. 이 항목은 기저로 늘린 뒤 그람–슈미트 과정을 쓰고, 앞부분이 바뀌지 않는다는 것(그람–슈미트 과정의 (4))으로 증명했다. (3)과 (4)는 출처 3절 3.3(p.133)이 '직교사영의 정의에 의해 내적공간의 모든 벡터가 v = v₁ + v₂ (v₁ ∈ E, v₂ ⊥ E) 로 한 가지로 쓰인다'고 적을 때 쓰는 직교사영의 존재를, 부분공간 E 가 유한차원이라는 가정을 밝혀 진술한 것이다. (4)의 증명의 길(직교 기저를 그람–슈미트로 얻고 그 식으로 직교사영을 쓴다)은 출처 3절의 머리말(p.129)이 '먼저 유일성을 보이고 사영을 찾는 방법을 보여 존재를 증명한다'고 적고 Proposition 3.3(p.130)과 3.1(p.131)로 잇는 것, 4절 4.1.1(p.137)이 'Ran A 의 기저만 알면 그람–슈미트로 직교 기저를 얻어야 한다'고 적는 것과 같다. 예시 'ℝ³ 의 단위벡터 하나를 정규직교 기저로 늘리기'는 출처 3절 연습문제 3.3(pp.133–134)이 ℝ³ 의 직교하는 system 을 직교 기저로 늘리게 하는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(예의 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[inner-product-space|내적공간]]이라 하자. 정규직교 열과 정규직교 기저는 [[orthonormal-list|직교하는 열과 정규직교 열]]과 [[orthonormal-basis|정규직교 기저]]의 것이고, 직교사영과 $\operatorname{proj}_E$는 [[orthogonal-projection|직교사영]]의 것이다. 부분공간을 내적공간으로 볼 때는 [[inner-product-space|내적과 내적공간]]의 (4)의 내적을 쓰고, 부분공간의 유한차원과 차원은 [[dimension-of-subspace|부분공간의 차원]]에서처럼 제한한 연산의 벡터공간으로서 말한다.

1. (존재) $V$가 [[dimension|유한차원]]이고 $\dim V = d$이면 $V$에는 길이 $d$인 정규직교 기저가 있다. $d = 0$이면 그것은 빈 열이다.
2. (정규직교 기저로 늘리기) $V$가 유한차원이고 $\dim V = d$이며 $u_1, \dots, u_r$이 $V$의 정규직교 열이라 하자. 그러면 $r \le d$이고, 길이 $d - r$인 $V$의 벡터의 열 $y_1, \dots, y_{d-r}$이 있어서 $u$와 $y$를 [[extension-to-a-basis|이어 붙인 열]] $u_1, \dots, u_r, y_1, \dots, y_{d-r}$이 $V$의 정규직교 기저이다. ($r = d$이면 $y$는 빈 열이고 $u$ 자신이 정규직교 기저이다.)
3. (유한차원 부분공간의 정규직교 기저) $E$가 $V$의 부분공간이고 유한차원이며 $\dim E = e$라 하자($V$는 유한차원이 아니어도 된다). 그러면 내적공간 $E$에는 길이 $e$인 정규직교 기저 $b_1, \dots, b_e$가 있고, 그런 열은 모두 $V$의 정규직교 열이며 $\operatorname{span}(b_1, \dots, b_e) = E$이다([[linear-combination-and-span|생성]]). $V$가 유한차원이면 $V$의 모든 부분공간이 유한차원이므로 모든 부분공간에 정규직교 기저가 있다.
4. (유한차원 부분공간으로의 직교사영) $E$가 $V$의 유한차원 부분공간이면 모든 $v \in V$에 $v$의 $E$로의 직교사영이 있다. 따라서 [[orthogonal-projection|직교사영]]의 (4)의 사상 $\operatorname{proj}_E : V \to V$가 정해지고, 그것은 선형사상이며 상이 $E$이고, $\operatorname{proj}_E v = v$인 것은 정확히 $v \in E$일 때이다. $b_1, \dots, b_e$가 (3)의 열, 곧 $V$의 정규직교 열이고 $\operatorname{span}(b_1, \dots, b_e) = E$이면 모든 $v \in V$에서
   $$
   \begin{aligned}
   \operatorname{proj}_E v &= \langle v, b_1 \rangle b_1 + \cdots \\
   &\quad + \langle v, b_e \rangle b_e
   \end{aligned}
   $$
   이다. $V$가 유한차원이면 이것이 $V$의 모든 부분공간 $E$에 대하여 성립한다.
:::

:::english
Let $V$ be an inner product space. Orthonormal sequences and orthonormal bases are those of the entries on orthogonal and orthonormal sequences and on orthonormal bases, and orthogonal projections and $\operatorname{proj}_E$ are those of the entry on orthogonal projections. A subspace regarded as an inner product space carries the inner product of item (4) of the entry on inner product spaces, and finite-dimensionality and the dimension of a subspace refer, as in the entry on dimensions of subspaces, to the vector space with the restricted operations.

1. (Existence) If $V$ is finite-dimensional and $\dim V = d$, then $V$ has an orthonormal basis of length $d$. If $d = 0$, it is the empty sequence.
2. (Extending to an orthonormal basis) Let $V$ be finite-dimensional with $\dim V = d$, and let $u_1, \dots, u_r$ be an orthonormal sequence in $V$. Then $r \le d$, and there is a sequence $y_1, \dots, y_{d-r}$ of vectors in $V$ of length $d - r$ such that the concatenation $u_1, \dots, u_r, y_1, \dots, y_{d-r}$ of $u$ and $y$ is an orthonormal basis of $V$. (If $r = d$, then $y$ is the empty sequence and $u$ itself is an orthonormal basis.)
3. (Orthonormal bases of finite-dimensional subspaces) Let $E$ be a finite-dimensional subspace of $V$ with $\dim E = e$ ($V$ need not be finite-dimensional). Then the inner product space $E$ has an orthonormal basis $b_1, \dots, b_e$ of length $e$, and every such sequence is an orthonormal sequence in $V$ with $\operatorname{span}(b_1, \dots, b_e) = E$. If $V$ is finite-dimensional, every subspace of $V$ is finite-dimensional, so every subspace has an orthonormal basis.
4. (Orthogonal projection onto a finite-dimensional subspace) If $E$ is a finite-dimensional subspace of $V$, then every $v \in V$ has an orthogonal projection onto $E$. Hence the map $\operatorname{proj}_E : V \to V$ of item (4) of the entry on orthogonal projections is defined; it is a linear map with range $E$, and $\operatorname{proj}_E v = v$ exactly when $v \in E$. If $b_1, \dots, b_e$ is a sequence as in (3), that is, an orthonormal sequence in $V$ with $\operatorname{span}(b_1, \dots, b_e) = E$, then for every $v \in V$
   $$
   \begin{aligned}
   \operatorname{proj}_E v &= \langle v, b_1 \rangle b_1 + \cdots \\
   &\quad + \langle v, b_e \rangle b_e.
   \end{aligned}
   $$
   If $V$ is finite-dimensional, this holds for every subspace $E$ of $V$.
:::

## 직관

정규직교 기저가 있으면 좌표가 내적이고 내적이 좌표의 표준내적이어서 계산이 쉬워진다는 것을 앞에서 보았습니다. 이 항목은 유한차원이면 그런 기저가 언제나 있다는 것을 보입니다. 아무 기저나 잡아 그람–슈미트 과정을 쓰면 됩니다. 과정은 생성을 바꾸지 않으므로 결과는 공간 전체를 생성하고, 정규직교 열은 일차독립이므로 기저입니다.

이미 정규직교 열이 있을 때는 그것을 먼저 기저로 늘린 뒤 과정을 씁니다. 과정은 이미 정규직교인 앞부분을 바꾸지 않으므로, 결과는 처음 열을 앞부분으로 갖는 정규직교 기저입니다. 비유하면 이미 직각으로 맞춰 놓은 자 몇 개는 그대로 두고, 남은 방향의 자만 새로 맞추는 것입니다.

(3)과 (4)에서 유한차원이어야 하는 것은 부분공간 $E$뿐입니다. $E$에 정규직교 기저가 있으면 직교사영의 식이 그 기저로 쓰이므로, 전체 공간 $V$가 무한차원이어도 모든 벡터의 $E$로의 직교사영이 있습니다.

## 증명

:::idea
기저(또는 정규직교 열을 늘린 기저)에 그람–슈미트 과정을 쓰면 길이가 차원과 같은 정규직교 열이 나오고, 그것은 정규직교 기저이다. 부분공간에는 이것을 부분공간에 쓴다.
:::

:::hint
[[orthonormal-basis|정규직교 기저]]의 (1)에 의해, 차원이 $d$인 공간에서 길이 $d$인 정규직교 열은 정규직교 기저입니다.
:::

:::hint
늘리기에서는 [[extension-to-a-basis|일차독립인 열을 기저로 늘리기]]의 (2)로 먼저 기저를 만들고, [[gram-schmidt-process|그람–슈미트 과정]]의 (4)로 앞부분이 그대로 남는다는 것을 씁니다.
:::

:::proof
**(1)의 증명.** [[dimension|차원]]의 (2)에 의해 $V$에는 길이 $d$인 기저 $x_1, \dots, x_d$가 있고, [[basis-iff-independent-and-spanning|기저는 일차독립이고 생성하는 열이다]]에 의해 이 열은 일차독립이다. 그람–슈미트 과정의 (2)에 의해 길이 $d$인 정규직교 열 $u_1, \dots, u_d$가 있다. [[orthonormal-basis|정규직교 기저]]의 (1)에 의해 이 열은 $V$의 정규직교 기저이다. $d = 0$이면 같은 항목의 (1)에 의해 정규직교 기저는 빈 열이다.

**(2)의 증명.** [[orthonormal-list|직교하는 열과 정규직교 열]]의 (2)에 의해 $u$는 일차독립이다. [[extension-to-a-basis|일차독립인 열을 기저로 늘리기]]의 (2)에 의해 $r \le d$이고, 길이 $d - r$인 열 $x_1, \dots, x_{d-r}$이 있어 $u$와 $x$를 이어 붙인 열 $c$가 $V$의 기저이므로 일차독립이다. $c$에 그람–슈미트 과정을 쓴 정규직교 열을 $u'_1, \dots, u'_d$라 하자. $c$의 처음 $r$개는 정규직교 열 $u$이므로 그람–슈미트 과정의 (4)에 의해 모든 $i \le r$에서 $u'_i = u_i$이다. $1 \le j \le d - r$에서 $y_j = u'_{r+j}$로 두면, $u'$과 $u$, $y$를 이어 붙인 열은 길이가 $d$로 같고 모든 자리의 항이 같으므로 같은 열이다. $u'$은 길이 $d$인 정규직교 열이므로 정규직교 기저의 (1)에 의해 $V$의 정규직교 기저이다.

**(3)의 증명.** [[inner-product-space|내적과 내적공간]]의 (4)에 의해 $E$는 내적공간이고, 유한차원이며 $\dim E = e$이므로 (1)을 내적공간 $E$에 쓰면 길이 $e$인 정규직교 기저가 있다. 정규직교 기저의 (6)에 의해 내적공간 $E$의 정규직교 기저는 모두 $V$의 정규직교 열이고 그 생성이 $E$이다. $V$가 유한차원이면 [[dimension-of-subspace|부분공간의 차원]]의 (1)에 의해 $V$의 모든 부분공간이 유한차원이다.

**(4)의 증명.** (3)에 의해 $V$의 정규직교 열 $b_1, \dots, b_e$로서 생성이 $E$인 것이 있다. [[orthogonal-projection|직교사영]]의 (3)에 의해 모든 $v \in V$에 $E$로의 직교사영이 있고, 그것은 $\langle v, b_1 \rangle b_1 + \cdots + \langle v, b_e \rangle b_e$이다. 이 식은 $V$의 정규직교 열이고 생성이 $E$인 어느 열에서나 같은 항목의 (3)에 의해 성립한다. 직교사영의 (4)에 의해 $\operatorname{proj}_E$는 선형사상이고 상이 $E$이며 $\operatorname{proj}_E v = v$인 것은 정확히 $v \in E$일 때이다. $V$가 유한차원이면 (3)의 마지막 문장에 의해 모든 부분공간이 유한차원이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³ 의 단위벡터 하나를 정규직교 기저로 늘리기]
표준내적을 준 $\mathbb{R}^3$에서 $u_1 = \bigl(\tfrac{2}{3}, \tfrac{2}{3}, \tfrac{1}{3}\bigr)$은 $\langle u_1, u_1 \rangle = \tfrac{4 + 4 + 1}{9} = 1$이므로 길이 $1$인 정규직교 열입니다. (2)의 증명을 따라 $u_1, e_1, e_2$를 기저로 잡습니다($a u_1 + b e_1 + c e_2 = 0$이면 셋째 성분에서 $a = 0$, 이어서 $b = c = 0$). 과정을 쓰면 $v_1 = u_1$이고 $\langle e_1, u_1 \rangle = \tfrac{2}{3}$이므로
$$
v_2 = e_1 - \tfrac{2}{3} u_1 = \bigl(\tfrac{5}{9}, -\tfrac{4}{9}, -\tfrac{2}{9}\bigr)
$$
입니다. $\langle v_2, v_2 \rangle = \tfrac{25 + 16 + 4}{81} = \tfrac{5}{9}$입니다. 셋째 단계에서 $\langle e_2, u_1 \rangle = \tfrac{2}{3}$, $\langle e_2, v_2 \rangle = -\tfrac{4}{9}$이므로 $c_{2,1} = \tfrac{2}{3}$, $c_{2,2} = -\tfrac{4}{9} \cdot \tfrac{9}{5} = -\tfrac{4}{5}$이고
$$
\begin{aligned}
v_3 &= e_2 - \tfrac{2}{3} u_1 + \tfrac{4}{5} v_2 \\
&= \bigl(0, \tfrac{1}{5}, -\tfrac{2}{5}\bigr)
\end{aligned}
$$
입니다. 성분마다 $0 - \tfrac{4}{9} + \tfrac{4}{9} = 0$, $1 - \tfrac{4}{9} - \tfrac{16}{45} = \tfrac{9}{45} = \tfrac{1}{5}$, $0 - \tfrac{2}{9} - \tfrac{8}{45} = -\tfrac{18}{45} = -\tfrac{2}{5}$입니다. $\langle v_3, u_1 \rangle = 0 + \tfrac{2}{15} - \tfrac{2}{15} = 0$이고 $\langle v_3, v_2 \rangle = 0 - \tfrac{4}{45} + \tfrac{4}{45} = 0$입니다. 정규화하면 $u_1$은 그대로이고, 나머지 둘은 $v_2$, $v_3$을 각자의 노름으로 나눈 벡터입니다.
:::

:::counterexample[늘린 기저를 정규화만 하면 정규직교 기저가 아닐 수 있는 예]
위의 예시에서 기저 $u_1, e_1, e_2$의 항은 모두 이미 단위벡터이므로 정규화해도 바뀌지 않지만, $\langle u_1, e_1 \rangle = \tfrac{2}{3} \ne 0$이어서 정규직교 열이 아닙니다. (2)의 증명이 기저로 늘린 뒤 정규화만 하지 않고 그람–슈미트 과정을 쓰는 것은 이 때문입니다.
:::

## 확인 질문

:::check[차원이 $3$인 내적공간 $V$에서 정규직교 열 $u_1, u_2$를 정규직교 기저로 늘리려면 몇 개의 벡터를 덧붙이는가?]
(2)에 의해 길이 $d - r = 3 - 2 = 1$인 열, 곧 벡터 하나를 덧붙입니다.
:::

:::check[$E = \{0_V\}$이면 (3)과 (4)의 열 $b$와 $\operatorname{proj}_E$는 무엇인가?]
$\dim E = 0$이므로 (1)에 의해 $E$의 정규직교 기저는 빈 열입니다. (4)의 식은 빈 합 $0_V$이므로 $\operatorname{proj}_E$는 모든 값이 $0_V$인 함수이고, [[orthogonal-projection|직교사영]]의 (6)과 같습니다.
:::
