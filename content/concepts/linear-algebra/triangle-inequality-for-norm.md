---
title: 노름의 삼각부등식
title_en: Triangle Inequality for the Norm
aliases: [삼각부등식, 노름의 삼각 부등식, 역삼각부등식, triangle inequality, reverse triangle inequality]
kind: theorem
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: 내적공간에서 ‖x + y‖ ≤ ‖x‖ + ‖y‖ 이고, 등호인 것은 정확히 한 벡터가 다른 벡터의 0 이상인 실수배일 때이다. 이로부터 ‖x − z‖ ≤ ‖x − y‖ + ‖y − z‖, 역삼각부등식 |‖x‖ − ‖y‖| ≤ ‖x − y‖, 유한 합의 노름이 노름의 합 이하라는 것이 나온다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, mathematical-induction, real-function-space, vector-space, vector-space-basic-properties, finite-sum-of-vectors, square-root-exists, inner-product-space, norm-in-inner-product-space, cauchy-schwarz-inequality]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 1절, 1.4 Properties of inner product 의 Lemma 1.8 과 그 증명, p.122; 1.5 Norm. Normed spaces 의 성질 2, p.123
    checked: original
    note: "(1)은 출처 Lemma 1.8(p.122)이고 증명도 같다: ‖x + y‖² = ‖x‖² + ‖y‖² + (x, y) + (y, x) ≤ ‖x‖² + ‖y‖² + 2|(x, y)| ≤ (‖x‖ + ‖y‖)² 에 코시–슈바르츠를 쓴다. 출처는 제곱의 부등식에서 노름의 부등식으로 넘어가는 단계를 적지 않는다. 이 항목은 순서의 성질 (7)로 그 단계를 적었고, 2|(x, y)| 를 거치지 않고 코시–슈바르츠의 (2)의 ⟨x, y⟩ ≤ ‖x‖‖y‖ 를 바로 썼다. 출처 1.5(p.123)는 이 부등식을 노름의 성질 2 로 다시 적는다. (2)의 등호 조건, (4)의 역삼각부등식, (5)의 유한 합은 이 사이트가 진술에 올렸다(Treil 에서 검색어 'reverse' 1건은 행렬식의 전치에 관한 문장이고, 'kxk − kyk'(추출된 ‖x‖ − ‖y‖ 의 꼴) 0건, 'same direction' 1건은 3장 7절 Review exercises 의 회전, 'non-negative multiple'·'nonnegative multiple' 0건이다). 확인 질문 '$\\mathbb{R}$을 표준내적의 내적공간으로 보면 (1)과 (4)는 어떤 부등식이 되는가?'는 Lebl Basic Analysis I 의 1.3절 Proposition 1.3.2 와 Corollary 1.3.3 의 (i)(pp.36–37, 실수의 삼각부등식과 역삼각부등식)과 같은 부등식이다."
  - ref: lebl-basic-analysis
    loc: 7장 1절, Example 7.1.5, p.258
    checked: original
    note: "(3)은 출처 Example 7.1.5(p.258)가 ℝⁿ 의 표준 거리 d(x, y) = √((x₁ − y₁)² + ⋯ + (xₙ − yₙ)²) 의 삼각부등식 d(x, z) ≤ d(x, y) + d(y, z) 를 거리의 제곱을 펼치고 코시–슈바르츠를 써서 보이는 것과 같은 발상이다. 출처는 마지막에 제곱근이 증가함수이므로 부등식이 유지된다고 적는다(p.258). 이 사이트의 선형대수 강의는 거리와 거리공간을 정의하지 않으므로 ‖x − y‖ 를 노름으로만 쓴다. 위상수학 입문 강의는 거리공간과 거리의 삼각부등식을 따로 정의하고, 그 거리공간의 예 항목 (5)는 ℝ × ℝ 의 유클리드 거리 d_E 를 이 식의 n = 2 인 꼴로 준다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(등호 조건의 증명 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[inner-product-space|내적공간]]이고 $\lVert \cdot \rVert$가 [[norm-in-inner-product-space|내적공간의 노름]]이라 하자. $x$, $y$, $z$는 $V$의 임의의 원소이다.

1. (삼각부등식) $\lVert x + y \rVert \le \lVert x \rVert + \lVert y \rVert$이다.
2. (등호) $\lVert x + y \rVert = \lVert x \rVert + \lVert y \rVert$인 것은 정확히 $\langle x, y \rangle = \lVert x \rVert \lVert y \rVert$일 때이고, 또 정확히 $0 \le c$이고 $y = cx$인 실수 $c$가 있거나 $0 \le c$이고 $x = cy$인 실수 $c$가 있을 때이다.
3. (세 벡터의 꼴) $\lVert x - z \rVert \le \lVert x - y \rVert + \lVert y - z \rVert$이다.
4. (역삼각부등식) $\bigl|\lVert x \rVert - \lVert y \rVert\bigr| \le \lVert x - y \rVert$이다. 곧 $\lVert x \rVert - \lVert y \rVert \le \lVert x - y \rVert$이고 $\lVert y \rVert - \lVert x \rVert \le \lVert x - y \rVert$이다.
5. (유한 합) $n \ge 0$이 정수이고 $v_1, \dots, v_n$이 $V$의 [[finite-sum-of-vectors|벡터의 열]]이면 $\lVert v_1 + \cdots + v_n \rVert \le \lVert v_1 \rVert + \cdots + \lVert v_n \rVert$이다. 오른쪽은 $i$번째 항이 $\lVert v_i \rVert$인 길이 $n$인 실수의 열의 합이다.
:::

:::english
Let $V$ be an inner product space and $\lVert \cdot \rVert$ the norm in an inner product space. Let $x$, $y$, $z$ be arbitrary elements of $V$.

1. (Triangle inequality) $\lVert x + y \rVert \le \lVert x \rVert + \lVert y \rVert$.
2. (Equality) $\lVert x + y \rVert = \lVert x \rVert + \lVert y \rVert$ exactly when $\langle x, y \rangle = \lVert x \rVert \lVert y \rVert$, and also exactly when there is a real number $c$ with $0 \le c$ and $y = cx$ or a real number $c$ with $0 \le c$ and $x = cy$.
3. (Form with three vectors) $\lVert x - z \rVert \le \lVert x - y \rVert + \lVert y - z \rVert$.
4. (Reverse triangle inequality) $\bigl|\lVert x \rVert - \lVert y \rVert\bigr| \le \lVert x - y \rVert$; that is, $\lVert x \rVert - \lVert y \rVert \le \lVert x - y \rVert$ and $\lVert y \rVert - \lVert x \rVert \le \lVert x - y \rVert$.
5. (Finite sums) If $n \ge 0$ is an integer and $v_1, \dots, v_n$ is a sequence of vectors in $V$, then $\lVert v_1 + \cdots + v_n \rVert \le \lVert v_1 \rVert + \cdots + \lVert v_n \rVert$. The right-hand side is the sum of the sequence of $n$ real numbers whose $i$-th term is $\lVert v_i \rVert$.
:::

## 직관

$\mathbb{R}^2$에서 $x$와 $y$를 이어 붙인 두 변과 $x + y$인 셋째 변이 삼각형을 이룹니다. 한 꼭짓점에서 다른 꼭짓점으로 곧장 가는 길은 다른 꼭짓점을 거쳐 가는 길보다 길지 않다는 것이 (1)입니다. (3)은 같은 말을 세 점 $x$, $y$, $z$ 사이의 "떨어진 정도" $\lVert x - z \rVert$로 적은 것이고, (4)는 두 변의 길이의 차가 셋째 변의 길이를 넘지 못한다는 것입니다. 이 강의는 거리라는 말을 정의하지 않으므로 $\lVert x - y \rVert$를 늘 노름으로만 씁니다.

증명은 제곱해서 비교합니다. $\lVert x + y \rVert^2 = \lVert x \rVert^2 + 2\langle x, y \rangle + \lVert y \rVert^2$이고 $(\lVert x \rVert + \lVert y \rVert)^2 = \lVert x \rVert^2 + 2\lVert x \rVert \lVert y \rVert + \lVert y \rVert^2$이므로, 두 식의 차이는 가운데 항뿐이고 그것을 비교하는 것이 [[cauchy-schwarz-inequality|코시–슈바르츠 부등식]]입니다. 그래서 등호는 $\langle x, y \rangle = \lVert x \rVert \lVert y \rVert$일 때입니다.

이 등호의 경우는 코시–슈바르츠의 등호의 경우에 들어 있고, 영벡터가 아닌 벡터의 음수배인 경우가 빠집니다. 코시–슈바르츠는 $|\langle x, y \rangle|$에 대한 것이어서 $y = -x$ 같은 음수배에서도 등호이지만, 삼각부등식은 $\langle x, y \rangle$ 자체가 $\lVert x \rVert \lVert y \rVert$와 같아야 하므로 같은 방향(0 이상인 배수)일 때만 등호입니다. 한쪽이 영벡터이면 그 벡터는 다른 벡터의 $0$배이므로 등호입니다.

## 증명

:::idea
양변이 $0$ 이상이므로 제곱을 비교한다. 제곱의 차이는 $2\langle x, y \rangle$와 $2\lVert x \rVert \lVert y \rVert$의 차이이고, 이것은 코시–슈바르츠 부등식으로 정해진다.
:::

:::hint
$(\lVert x \rVert + \lVert y \rVert)^2$를 펼치고 [[norm-in-inner-product-space|노름]]의 (5)와 나란히 놓아 보십시오.
:::

:::hint
(4)는 $x = (x - y) + y$에 (1)을 쓰고, $y$와 $x$의 역할을 바꿔 한 번 더 씁니다.
:::

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (V1)–(V8)은 [[vector-space|벡터공간]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것이고, 순서의 성질은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로, 노름의 성질은 [[norm-in-inner-product-space|내적공간의 노름]]의 번호로, 코시–슈바르츠는 [[cauchy-schwarz-inequality|코시–슈바르츠 부등식]]의 번호로 인용한다. $u = \lVert x \rVert$, $v = \lVert y \rVert$, $p = \langle x, y \rangle$로 둔다. 노름의 (1)에 의해 $0 \le u$, $0 \le v$이고, 노름의 (2)에 의해 $uu = \langle x, x \rangle$, $vv = \langle y, y \rangle$이다.

**(1).** 노름의 (5)에 의해 $\lVert x + y \rVert^2 = uu + 2p + vv$이다. 한편 $c = u + v$로 두면 (K3), (K12)의 (i), (K1), (K2)와 $u v + u v = 2(uv)$((K7)의 $1 + 1 = 2$)에 의해 $cc = uu + 2(uv) + vv$이다. 코시–슈바르츠의 (2)에 의해 $p \le uv$이고, 순서의 성질 (10)에 의해 정수 사이의 부등식 $0 \le 2$를 실수의 부등식으로 쓸 수 있으므로 (4)의 (iii)과 (K1)에 의해 $2p \le 2(uv)$이다. 순서의 성질 (2)의 (i)을 두 번 쓰면 $uu + 2p + vv \le uu + 2(uv) + vv$, 곧 $\lVert x + y \rVert \lVert x + y \rVert \le cc$이다. 순서의 성질 (2)의 (iii)에 의해 $0 \le c$이고 노름의 (1)에 의해 $0 \le \lVert x + y \rVert$이므로, 순서의 성질 (7)의 (iii)에 의해 $\lVert x + y \rVert \le c$이다.

**(2).** 앞 단락과 같이 $0 \le \lVert x + y \rVert$, $0 \le c$이므로 순서의 성질 (7)의 (iv)에 의해 $\lVert x + y \rVert = c$인 것은 정확히 $\lVert x + y \rVert \lVert x + y \rVert = cc$일 때, 곧 $uu + 2p + vv = uu + 2(uv) + vv$일 때이다. 양변에서 $uu$와 $vv$를 빼면((K1), (K2), (K5), (K12)의 (v)), 그리고 $2 \ne 0$((K7))과 (K11)에 의해 이것은 정확히 $p = uv$일 때이다. 첫 문장이 증명되었다.

$p = uv$라 하자. $0 \le uv$이므로 [[absolute-value|절댓값]]의 (1)에 의해 $|p| = p = uv$이고, 코시–슈바르츠의 (3)에 의해 그 (i)이 성립한다. $y = 0_V$이면 (B3)에 의해 $y = 0x$이고 $0 \le 0$이다. $y \ne 0_V$이면 코시–슈바르츠의 (3)의 마지막 문장에 의해 $x = ty$, $t = p \langle y, y \rangle^{-1}$이다. 내적의 조건 (iii)에 의해 $0 < \langle y, y \rangle$이므로 순서의 성질 (6)의 (i)에 의해 $0 < \langle y, y \rangle^{-1}$이고, $0 \le p$이므로 (4)의 (iv)에 의해 $0 \le t$이다.

거꾸로 $0 \le c'$이고 $y = c'x$라 하자. (V5), (V8)에 의해 $x + y = 1x + c'x = (1 + c')x$이다. 순서의 성질 (5)의 (ii)와 (2)의 (iii)에 의해 $0 \le 1 + c'$이므로 절댓값의 (1)에 의해 $|1 + c'| = 1 + c'$이고 $|c'| = c'$이다. 노름의 (3)에 의해 $\lVert x + y \rVert = (1 + c')u = u + c'u = u + |c'|u = u + \lVert c'x \rVert = \lVert x \rVert + \lVert y \rVert$이다((K12)의 (i), (K4), (K1)). $0 \le c'$이고 $x = c'y$이면, (V1)에 의해 $x + y = y + x$이므로 $x$와 $y$의 역할을 바꾼 같은 계산으로 등호가 성립한다.

**(3).** (V1), (V2)와 (B2)의 $(-y) + y = 0_V$, (H0)의 $0_V + w = w$에 의해 $(x - y) + (y - z) = (x + (-y)) + (y + (-z)) = x + (((-y) + y) + (-z)) = x + (-z) = x - z$이다. (1)을 $x - y$와 $y - z$에 쓰면 된다. 여기서 (H0)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것이다.

**(4).** (3)과 같은 계산으로 $x = (x - y) + y$이므로 (1)에 의해 $u \le \lVert x - y \rVert + v$이고, 순서의 성질 (2)의 (ii)에 의해 $u - v \le \lVert x - y \rVert$이다. $x$와 $y$의 역할을 바꾸면 $v - u \le \lVert y - x \rVert$이고, 노름의 (3)에 의해 $\lVert y - x \rVert = \lVert x - y \rVert$이다. 순서의 성질 (3)의 (iii)과 (K12)의 (iv), (K9)에 의해 $v - u \le \lVert x - y \rVert$는 $-\lVert x - y \rVert \le u - v$와 같으므로, 절댓값의 (7)에 의해 $|u - v| \le \lVert x - y \rVert$이다.

**(5).** 각 $i$에 실수 $\lVert v_i \rVert$가 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 $i$번째 항이 $\lVert v_i \rVert$인 열이 있다. $n$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 보인다. $n = 0$이면 왼쪽은 노름의 (1)에 의해 $\lVert 0_V \rVert = 0$이고 오른쪽은 빈 합 $0$이며, 순서의 성질 (1)의 (iv)에 의해 $0 \le 0$이다. 길이 $n$에서 성립한다고 하고 $v_1, \dots, v_{n+1}$이 길이 $n + 1$인 열이라 하자. 합의 재귀 정의에 의해 $v_1 + \cdots + v_{n+1} = s + v_{n+1}$이고 $s = v_1 + \cdots + v_n$이다. (1)에 의해 $\lVert s + v_{n+1} \rVert \le \lVert s \rVert + \lVert v_{n+1} \rVert$이고, 귀납 가정과 순서의 성질 (2)의 (i)에 의해 이것은 $(\lVert v_1 \rVert + \cdots + \lVert v_n \rVert) + \lVert v_{n+1} \rVert$ 이하이며, 합의 재귀 정의에 의해 이 수는 $\lVert v_1 \rVert + \cdots + \lVert v_{n+1} \rVert$이다. 순서의 성질 (1)의 (v)로 두 부등식을 이으면 길이 $n + 1$에서도 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ² 에서 등호가 아닌 경우와 등호인 경우]
$x = (3, 0)$, $y = (0, 4)$이면 $\lVert x \rVert = 3$, $\lVert y \rVert = 4$이고 $x + y = (3, 4)$의 노름은 $5$이므로 $5 < 7$입니다. $\langle x, y \rangle = 0 < 12$이어서 (2)의 등호 조건이 성립하지 않습니다.

$x = (1, 2)$, $y = (2, 4)$이면 $y = 2x$이고 $0 \le 2$이므로 (2)에 의해 등호입니다. 제곱으로 확인하면 $\lVert x \rVert^2 = 5$, $\lVert y \rVert^2 = 20$, $\lVert x + y \rVert^2 = 9 + 36 = 45$이고, [[square-root-exists|제곱근]]의 (2)에 의해 $\lVert x \rVert \lVert y \rVert = \sqrt{5}\sqrt{20} = \sqrt{100} = 10$이므로 $(\lVert x \rVert + \lVert y \rVert)^2 = 5 + 20 + 20 = 45$입니다.
:::

:::counterexample[일차종속이지만 등호가 아닌 예]
$x = (1, 2)$, $y = (-2, -4)$이면 $y = (-2)x$이어서 열 $x, y$는 일차종속이고 코시–슈바르츠의 등호가 성립합니다. 그러나 $\lVert x + y \rVert^2 = \lVert (-1, -2) \rVert^2 = 5$인 반면 $(\lVert x \rVert + \lVert y \rVert)^2 = 5 + 2 \cdot 10 + 20 = 45$이므로 삼각부등식은 등호가 아닙니다. 배수 $-2$가 음수이기 때문이고, 실제로 $\langle x, y \rangle = -10 \ne 10 = \lVert x \rVert \lVert y \rVert$입니다.
:::

## 확인 질문

:::check[내적공간의 벡터 $x$, $y$에서 $\lVert x \rVert = 3$, $\lVert y \rVert = 5$이면 $\lVert x + y \rVert$는 어떤 범위에 있는가?]
(1)에 의해 $\lVert x + y \rVert \le 8$입니다. (4)를 $x$와 $-y$에 쓰면 $x - (-y) = x + y$이고 노름의 (3)에 의해 $\lVert -y \rVert = 5$이므로 $|3 - 5| = 2 \le \lVert x + y \rVert$입니다. 곧 $2 \le \lVert x + y \rVert \le 8$입니다. $y = (5 \cdot 3^{-1})x$이면 (2)에 의해 $8$이 되고, $y = -(5 \cdot 3^{-1})x$이면 노름의 (3)에 의해 $\lVert x + y \rVert = |1 - 5 \cdot 3^{-1}| \cdot 3 = 2$가 됩니다.
:::

:::check[$\mathbb{R}$을 표준내적의 내적공간으로 보면 (1)과 (4)는 어떤 부등식이 되는가?]
노름의 (8)에 의해 $\lVert x \rVert = |x|$이므로 (1)은 $|x + y| \le |x| + |y|$, (4)는 $\bigl||x| - |y|\bigr| \le |x - y|$입니다. 실수의 절댓값에 대한 삼각부등식과 같은 꼴입니다.
:::
