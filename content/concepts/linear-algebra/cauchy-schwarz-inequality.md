---
title: 코시–슈바르츠 부등식
title_en: Cauchy–Schwarz Inequality
aliases: [코시 슈바르츠 부등식, 슈바르츠 부등식, 코시–부냐콥스키–슈바르츠 부등식, Cauchy–Schwarz inequality, Schwarz inequality]
kind: theorem
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: 내적공간의 두 벡터 x, y 에 대해 ⟨x, y⟩² ≤ ⟨x, x⟩⟨y, y⟩ 이고 |⟨x, y⟩| ≤ ‖x‖‖y‖ 이다. 등호인 것은 정확히 x, y 가 일차종속일 때, 곧 한쪽이 다른 쪽의 실수배일 때이다. ℝⁿ 에서는 성분의 곱의 합의 제곱이 제곱의 합의 곱 이하라는 부등식이 된다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, vector-space, vector-space-basic-properties, finite-sum-of-vectors, linear-independence, inner-product-space, standard-inner-product, inner-product-examples, norm-in-inner-product-space]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 1절, 1.4 Properties of inner product 의 Theorem 1.7 과 그 증명, pp.121–122; 1절 연습문제 1.6, p.125
    checked: original
    note: "(2)는 출처 Theorem 1.7(p.121)이고, 증명은 출처의 실수 경우와 같은 길이다: y = 0 이면 자명하다고 하고, y ≠ 0 이면 0 ≤ ‖x − ty‖² = ‖x‖² − 2t(x, y) + t²‖y‖² 에 t = (x, y)/‖y‖² 를 넣는다. 출처의 각주는 이 t 가 이차식이 가장 작아지는 점이고 미분으로 구할 수 있다고 적는데, 증명에는 미분을 쓰지 않는다. 출처는 그 뒤 ‖x‖² − (x, y)²/‖y‖² ≥ 0 에서 절댓값 꼴로 넘어가는 단계를 적지 않는다. 이 항목은 그 중간식을 (1)의 제곱 꼴로 진술에 올리고, 절댓값 꼴은 제곱근 없이 순서의 성질 (7)로 옮겼다. 복소수 경우의 두 증명(pp.121–122)은 쓰지 않았다. (3)은 출처 1절 연습문제 1.6(p.125)의 '|(x, y)| = ‖x‖·‖y‖ 인 것은 정확히 한 벡터가 다른 벡터의 배수일 때'를 일차종속으로 적은 것이다. 출처는 증명을 연습문제로 두고 '코시–슈바르츠의 증명을 분석하라'는 힌트를 준다. 이 항목은 증명의 (나)로 그 분석을 했다. 출처 2장 7.3(p.65)은 '두 벡터가 일차종속인 것은 정확히 한쪽이 다른 쪽의 배수일 때'라고 괄호 안에 적는다. (3)의 둘째 문장과 같은 내용이다. 반례 '내적이 아닌 x₁y₁ − x₂y₂ 에서 깨지는 예'의 함수는 출처 1절 연습문제 1.5 의 a)(p.125)와 같은 함수이다. 확인 질문 '$m \\times n$ 행렬 $A$, $B$의 대각합에 대하여 $(\\operatorname{tr}(A^T B))^2$과 $\\operatorname{tr}(A^T A)\\operatorname{tr}(B^T B)$ 사이에는 어떤 부등식이 성립하는가?'는 출처 Example 1.3(p.120)의 프로베니우스 내적에 이 정리를 쓴 것이고, 출처 6장 4.2(p.182)가 '연산자 노름이 프로베니우스 노름 이하라는 것은 코시–슈바르츠로 직접 증명할 수 있다'고 적는 것과 같은 계열이다."
  - ref: lebl-basic-analysis
    loc: 7장 1절, Lemma 7.1.4 와 그 증명, pp.257–258
    checked: original
    note: "(4)는 출처 Lemma 7.1.4(p.257)와 같은 부등식이다. 출처는 ℝⁿ 을 곱집합 ℝ × ⋯ × ℝ 로 두고, 증명(p.258)은 이중 합 Σ_k Σ_ℓ (x_k y_ℓ − x_ℓ y_k)² ≥ 0 을 펼친다. 이 사이트는 Σ 와 이중 합의 전개를 쓰지 않으므로 Treil 의 이차식 논법으로 일반 내적공간에서 증명하고 (4)를 그 특수한 경우로 얻었다. 출처의 각주는 이 부등식을 Cauchy–Bunyakovsky–Schwarz 부등식이라고도 부른다고 적는다. 출처 7장 연습문제 7.1.13 의 a)(p.263)는 같은 부등식을 제곱합이 수렴하는 수열에 대해 증명하라고 한다. 위상수학 입문 강의의 거리공간의 예 항목 (6)은 이 부등식의 n = 2 인 경우를 ℝ × ℝ 의 순서쌍에 대해 a₁b₁ + a₂b₂ ≤ |a₁b₁ + a₂b₂| ≤ √(a₁² + a₂²)√(b₁² + b₂²) 꼴로 진술한다(ℝ² 와 ℝ × ℝ 는 이 사이트에서 다른 집합이다)."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(등호 조건의 증명 통독). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[inner-product-space|내적공간]]이고 $x$, $y \in V$라 하자. $\lVert \cdot \rVert$는 [[norm-in-inner-product-space|내적공간의 노름]]이고, $|\cdot|$은 [[absolute-value|절댓값]]이며, 실수 $c$의 제곱 $c^2$은 [[power-of-a-real-number|거듭제곱]]으로 $cc$와 같다.

1. (제곱 꼴) $\langle x, y \rangle^2 \le \langle x, x \rangle \langle y, y \rangle$이다.
2. (절댓값 꼴) $|\langle x, y \rangle| \le \lVert x \rVert \lVert y \rVert$이다. 곧 $-\lVert x \rVert \lVert y \rVert \le \langle x, y \rangle \le \lVert x \rVert \lVert y \rVert$이다.
3. (등호) 다음 세 조건은 서로 같다. 곧 하나가 성립하는 것은 정확히 다른 둘이 성립할 때이다.
   - (i) $\langle x, y \rangle^2 = \langle x, x \rangle \langle y, y \rangle$이다.
   - (ii) $|\langle x, y \rangle| = \lVert x \rVert \lVert y \rVert$이다.
   - (iii) 길이 $2$인 열 $x, y$가 [[linear-independence|일차종속]]이다.

   또 (iii)이 성립하는 것은 정확히 $x = \alpha y$인 실수 $\alpha$가 있거나 $y = \beta x$인 실수 $\beta$가 있을 때이다. $y \ne 0_V$이고 (i)이 성립하면 $x = \bigl(\langle x, y \rangle \langle y, y \rangle^{-1}\bigr) y$이다.
4. ($\mathbb{R}^n$의 성분 꼴) $n$이 자연수이고 $x, y \in \mathbb{R}^n$이며 $x_k = x(k)$, $y_k = y(k)$이면, [[standard-inner-product|표준내적]]에 대한 (1)은
   $$
   \begin{aligned}
   &(x_1 y_1 + \cdots + x_n y_n)^2 \\
   &\quad \le (x_1^2 + \cdots + x_n^2) \\
   &\qquad \cdot (y_1^2 + \cdots + y_n^2)
   \end{aligned}
   $$
   이다. 괄호 안은 $k$번째 항이 각각 $x_k y_k$, $x_k^2$, $y_k^2$인 길이 $n$인 실수의 열의 합이다.
5. ($\mathbb{R}$) 표준내적의 (6)의 내적공간 $\mathbb{R}$에서는 모든 실수 $x$, $y$에 대하여 (2)가 등식 $|xy| = |x||y|$이고, 길이 $2$인 열 $x, y$는 언제나 일차종속이다.
:::

:::english
Let $V$ be an inner product space and $x$, $y \in V$. $\lVert \cdot \rVert$ is the norm in an inner product space, $|\cdot|$ is the absolute value, and the square $c^2$ of a real number $c$ is the power, equal to $cc$.

1. (Squared form) $\langle x, y \rangle^2 \le \langle x, x \rangle \langle y, y \rangle$.
2. (Absolute value form) $|\langle x, y \rangle| \le \lVert x \rVert \lVert y \rVert$; that is, $-\lVert x \rVert \lVert y \rVert \le \langle x, y \rangle \le \lVert x \rVert \lVert y \rVert$.
3. (Equality) The following three conditions are equivalent; that is, any one of them holds exactly when the other two hold.
   - (i) $\langle x, y \rangle^2 = \langle x, x \rangle \langle y, y \rangle$.
   - (ii) $|\langle x, y \rangle| = \lVert x \rVert \lVert y \rVert$.
   - (iii) The sequence $x, y$ of length $2$ is linearly dependent.

   Moreover, (iii) holds exactly when there is a real number $\alpha$ with $x = \alpha y$ or a real number $\beta$ with $y = \beta x$. If $y \ne 0_V$ and (i) holds, then $x = \bigl(\langle x, y \rangle \langle y, y \rangle^{-1}\bigr) y$.
4. (Coordinate form in $\mathbb{R}^n$) If $n$ is a natural number, $x, y \in \mathbb{R}^n$, $x_k = x(k)$ and $y_k = y(k)$, then (1) for the standard inner product reads
   $$
   \begin{aligned}
   &(x_1 y_1 + \cdots + x_n y_n)^2 \\
   &\quad \le (x_1^2 + \cdots + x_n^2) \\
   &\qquad \cdot (y_1^2 + \cdots + y_n^2) .
   \end{aligned}
   $$
   Inside the parentheses are the sums of the sequences of $n$ real numbers whose $k$-th terms are $x_k y_k$, $x_k^2$ and $y_k^2$, respectively.
5. ($\mathbb{R}$) In the inner product space $\mathbb{R}$ of item (6) of the entry on the standard inner product, for all real numbers $x$, $y$ inequality (2) is the equality $|xy| = |x||y|$, and the sequence $x, y$ of length $2$ is always linearly dependent.
:::

## 직관

$\mathbb{R}^2$에서 두 화살표의 점곱은 "길이 × 길이 × 사잇각의 코사인"으로 배웠을 것입니다. 코사인은 $-1$과 $1$ 사이에 있으므로 점곱의 절댓값은 두 길이의 곱을 넘지 못합니다. 코시–슈바르츠 부등식은 각도라는 말 없이 이것을 모든 내적공간에서 증명합니다. 이 사이트에는 삼각함수가 없으므로 각도는 쓰지 않고, 거꾸로 이 부등식이 있어야 $\langle x, y \rangle$를 $\lVert x \rVert \lVert y \rVert$로 나눈 값이 $-1$과 $1$ 사이에 있다고 말할 수 있습니다.

증명은 이차식 하나로 합니다. $y \ne 0_V$이면 모든 실수 $t$에서 $\lVert x - ty \rVert^2 \ge 0$이고, 이 값은 $t$에 대한 이차식 $\langle x, x \rangle - 2t\langle x, y \rangle + t^2 \langle y, y \rangle$입니다. 이 이차식이 가장 작아지는 $t = \langle x, y \rangle \langle y, y \rangle^{-1}$을 넣으면 부등식이 바로 나옵니다. $y = 0_V$이면 이 $t$를 정할 수 없으므로 따로 봅니다. 이때는 두 변이 모두 $0$입니다.

$y \ne 0_V$이면 등호는 $\lVert x - ty \rVert = 0$, 곧 $x = ty$일 때만 나옵니다. 그래서 등호는 한 벡터가 다른 벡터의 실수배일 때, 곧 두 벡터가 같은 직선 위에 있을 때입니다. "실수배"에는 음수배도 들어가므로 $y = -x$에서도 등호입니다(그때 $x \ne 0_V$이면 $\langle x, y \rangle$는 음수입니다). 한쪽이 영벡터이면 그 벡터는 다른 벡터의 $0$배이므로 이것도 등호의 경우입니다.

## 증명

:::idea
$y \ne 0_V$이면 $0 \le \lVert x - ty \rVert^2$를 $t$에 대한 이차식으로 펼치고 $t = \langle x, y \rangle \langle y, y \rangle^{-1}$을 넣는다. $y = 0_V$이면 두 변이 $0$이다.
:::

:::hint
$\langle x, y \rangle = p$, $\langle x, x \rangle = a$, $\langle y, y \rangle = q$로 두면 [[norm-in-inner-product-space|노름]]의 (5)와 (2)에서 $\lVert x - ty \rVert^2 = a - 2tp + (tt)q$가 됩니다.
:::

:::hint
(2)는 양변이 $0$ 이상이므로 양변을 제곱한 (1)과 같은 말입니다. (3)에서 일차종속이면 한쪽이 다른 쪽의 실수배가 되는데, 어느 쪽인지는 일차결합에서 $0$이 아닌 계수가 어디 있느냐로 정해집니다.
:::

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (V1)–(V8)은 [[vector-space|벡터공간]]의 것, (B1)–(B12)는 [[vector-space-basic-properties|벡터공간의 기본 성질]]의 것이고, 순서의 성질은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로, 내적의 성질과 조건은 [[inner-product-space|내적과 내적공간]]의 번호로, 노름의 성질은 [[norm-in-inner-product-space|내적공간의 노름]]의 번호로 인용한다. $p = \langle x, y \rangle$, $a = \langle x, x \rangle$, $q = \langle y, y \rangle$로 둔다. [[power-of-a-real-number|실수의 거듭제곱]]의 (1)에 의해 $p^2 = pp$이다. 내적의 조건 (iii)에 의해 $0 \le a$, $0 \le q$이다.

**이차식.** 모든 실수 $t$에서 노름의 (5)와 (2)에 의해 $\langle x - ty, x - ty \rangle = a - 2\langle x, ty \rangle + \langle ty, ty \rangle$이다. 내적의 (1)에 의해 $\langle x, ty \rangle = tp$이고, 내적의 (1)을 두 번 쓰고 (K2)를 쓰면 $\langle ty, ty \rangle = t(tq) = (tt)q$이다. 따라서
$$
\langle x - ty, x - ty \rangle = a - 2(tp) + (tt)q
$$
이고, 내적의 조건 (iii)에 의해 이 값은 $0$ 이상이다. 이것을 (가)라 부른다.

**(1)과 (3)의 마지막 문장.** $y = 0_V$이면 내적의 (2)에 의해 $p = \langle x, 0_V \rangle = 0$이고 $q = 0$이므로, (K9)에 의해 $p^2 = 0 = aq$이다. 따라서 (1)이 등호로 성립한다.

$y \ne 0_V$라 하자. 내적의 조건 (iii)에 의해 $q \ne 0$이고 $0 \le q$이므로 $0 < q$이고, 순서의 성질 (6)의 (i)에 의해 $0 < q^{-1}$이다. $t = pq^{-1}$로 두면 (K1), (K2), (K8)에 의해 $tp = (pp)q^{-1}$이고 $(tt)q = (pp)(q^{-1}q^{-1}q) = (pp)q^{-1}$이다. (K7)의 $2 = 1 + 1$과 (K12)의 (i)로 계산하면 (가)의 값은 $a - 2((pp)q^{-1}) + (pp)q^{-1} = a - (pp)q^{-1}$이다. 따라서 $0 \le a - (pp)q^{-1}$이고, 순서의 성질 (3)의 (i)에 의해 $(pp)q^{-1} \le a$이다. 양변에 $0 < q$를 곱하면 순서의 성질 (6)의 (iv)에 의해 $pp \le aq$이고, 이것이 (1)이다. 같은 (6)의 (iv)와 (K11)에 의해 $pp = aq$인 것은 정확히 $(pp)q^{-1} = a$일 때, 곧 (가)의 값 $\langle x - ty, x - ty \rangle$가 $0$일 때이고, 내적의 조건 (iii)과 (B12)에 의해 이것은 정확히 $x = ty$일 때이다. 이것이 (3)의 마지막 문장이고, 이 단락의 결론을 (나)라 부른다: $y \ne 0_V$이면 "$pp = aq$인 것은 정확히 $x = (pq^{-1})y$일 때"이다.

**(2).** 절댓값의 (2)와 노름의 (1)에 의해 $0 \le |p|$, $0 \le \lVert x \rVert \lVert y \rVert$이다(순서의 성질 (4)의 (iv)). [[absolute-value|절댓값]]의 (5)에 의해 $|p||p| = pp$이고, (K1), (K2)와 노름의 (2)에 의해 $(\lVert x \rVert \lVert y \rVert)(\lVert x \rVert \lVert y \rVert) = (\lVert x \rVert \lVert x \rVert)(\lVert y \rVert \lVert y \rVert) = aq$이다. 순서의 성질 (7)의 (ii)와 (iii)에 의해 $|p| \le \lVert x \rVert \lVert y \rVert$인 것은 정확히 $pp \le aq$일 때이고, (1)에 의해 이것은 성립한다. 절댓값의 (7)에 의해 둘째 문장이 성립한다.

**(3).** (i)과 (ii): 앞 단락의 두 등식과 순서의 성질 (7)의 (iv)에 의해 $|p| = \lVert x \rVert \lVert y \rVert$이면 $pp = aq$이고, 거꾸로 $pp = aq$이면 두 수가 $0$ 이상이므로 같은 (7)의 (iv)에 의해 $|p| = \lVert x \rVert \lVert y \rVert$이다.

(i)이면 (iii): $y = 0_V$이면 [[linear-independence|일차독립과 일차종속]]의 (I1)에 의해 열 $x, y$는 일차종속이다. $y \ne 0_V$이면 (나)에 의해 $x = ty$ ($t = pq^{-1}$)이다. 계수의 열 $1, -t$에 대하여 [[finite-sum-of-vectors|벡터의 유한 합]]의 (H0)에 의해 그 일차결합은 $1x + (-t)y = x - ty$이고((V5), (B9)), (B12)에 의해 $0_V$이다. $1 \ne 0$((K4))이므로 일차종속의 정의에 의해 열 $x, y$는 일차종속이다.

(iii)이면 (i): 일차종속의 정의에 의해 $\alpha x + \beta y = 0_V$이고 $\alpha$, $\beta$ 가운데 $0$이 아닌 것이 있는 실수 $\alpha$, $\beta$가 있다((H0)에 의해 길이 $2$인 열의 일차결합은 $\alpha x + \beta y$이다). $\alpha \ne 0$이면 $\gamma = -(\alpha^{-1}\beta)$로 두어 $x = \gamma y$이다. 실제로 (B2)에 의해 $\alpha x = -(\beta y)$이고, 양변에 $\alpha^{-1}$을 곱하면 (V6), (V5), (K8), (B9)에 의해 $x = \alpha^{-1}(-(\beta y)) = \gamma y$이다. 그러면 내적의 (1)에 의해 $p = \langle \gamma y, y \rangle = \gamma q$이고 $a = \langle \gamma y, \gamma y \rangle = (\gamma\gamma)q$이므로, (K1), (K2)에 의해 $pp = (\gamma\gamma)(qq) = aq$이다. $\alpha = 0$이면 $\beta \ne 0$이고, (B3)에 의해 $0x = 0_V$이며 (H0)의 마지막 문장에 의해 $0_V + \beta y = \beta y$이므로 $\beta y = 0_V$이다. 따라서 (B6)에 의해 $y = 0_V$이고, 위의 $y = 0_V$인 경우에 의해 $pp = aq$이다.

(iii)의 다른 꼴: (iii)이면 위의 갈래에서 $\alpha \ne 0$일 때 $x = \gamma y$이고, $\alpha = 0$일 때 $y = 0_V$이므로 (B3)에 의해 $y = 0x$이다. 거꾸로 $x = \alpha y$이면 계수의 열 $1, -\alpha$로, $y = \beta x$이면 계수의 열 $-\beta, 1$로 위와 같이 $0_V$가 되는 일차결합에 $0$이 아닌 계수 $1$이 있으므로 (iii)이다.

**(4).** [[standard-inner-product|ℝⁿ 의 표준내적]]의 (1)에 의해 그 내적은 내적이고 $\langle x, x \rangle$는 $k$번째 항이 $x_k x_k$인 열의 합이다. 거듭제곱의 (1)에 의해 $x_k x_k = x_k^2$이므로 같은 열의 합에 의해 $\langle x, x \rangle = x_1^2 + \cdots + x_n^2$이고, $\langle y, y \rangle$도 같다. $\langle x, y \rangle = x_1 y_1 + \cdots + x_n y_n$은 표준내적의 정의이다. (1)을 쓰면 된다.

**(5).** 표준내적의 (6)에 의해 $\mathbb{R}$의 내적은 $(x, y)$에서의 값이 $xy$이고, 노름의 (8)에 의해 $\lVert x \rVert = |x|$이다. 절댓값의 (4)에 의해 $|xy| = |x||y|$이므로 (2)는 등식이다. 그러면 (3)의 (ii)가 성립하므로 (iii)도 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³ 에서 등호가 아닌 경우와 등호인 경우]
$x = (1, 2, 2)$, $y = (3, 0, -4)$이면 $\langle x, y \rangle = 3 + 0 - 8 = -5$, $\langle x, x \rangle = 9$, $\langle y, y \rangle = 25$입니다. $(-5)^2 = 25 \le 9 \cdot 25 = 225$이고, $\lVert x \rVert = 3$, $\lVert y \rVert = 5$이므로 절댓값 꼴은 $5 \le 15$입니다. 등호가 아니므로 (3)에 의해 $x, y$는 일차독립입니다.

$u = (2, -1, 3)$, $v = (-4, 2, -6)$이면 $v = (-2)u$입니다. $\langle u, v \rangle = -8 - 2 - 18 = -28$, $\langle u, u \rangle = 14$, $\langle v, v \rangle = 56$이고 $(-28)^2 = 784 = 14 \cdot 56$이어서 (1)이 등호입니다. 내적은 음수이지만 등호이고, (3)의 마지막 문장의 계수는 $\langle v, u \rangle \langle u, u \rangle^{-1} = -28 \cdot 14^{-1} = -2$로 실제 배수와 같습니다.
:::

:::counterexample[내적이 아닌 x₁y₁ − x₂y₂ 에서 깨지는 예]
코시–슈바르츠 부등식은 내적의 조건 (iii)을 씁니다. [[inner-product-examples|내적의 예]]의 (4)의 함수 $g(x, y) = x_1 y_1 - x_2 y_2$는 조건 (i), (ii)를 만족하지만 내적이 아닙니다. $x = (2, 1)$, $y = (1, 1)$이면 $g(x, y) = 2 - 1 = 1$, $g(x, x) = 4 - 1 = 3$, $g(y, y) = 1 - 1 = 0$이어서 $g(x, y)^2 = 1 > 0 = g(x, x) g(y, y)$입니다. 증명의 (가)에서 $0$ 이상이라는 근거가 사라지기 때문입니다.
:::

## 확인 질문

:::check[내적공간의 벡터 $x$, $y$에서 $\lVert x \rVert = 1$, $\lVert y \rVert = 2$이면 $\langle x, y \rangle = 3$일 수 있는가?]
없습니다. (2)에 의해 $|\langle x, y \rangle| \le 1 \cdot 2 = 2$인데 $|3| = 3 > 2$입니다.
:::

:::check[$m \times n$ 행렬 $A$, $B$의 대각합에 대하여 $(\operatorname{tr}(A^T B))^2$과 $\operatorname{tr}(A^T A)\operatorname{tr}(B^T B)$ 사이에는 어떤 부등식이 성립하는가?]
[[inner-product-examples|내적의 예]]의 (2)에 의해 $\operatorname{tr}(A^T B)$는 $M_{m \times n}$ 위의 내적(프로베니우스 내적)이므로, (1)을 그 내적에 쓰면 $(\operatorname{tr}(A^T B))^2 \le \operatorname{tr}(A^T A)\operatorname{tr}(B^T B)$입니다. 등호인 것은 (3)에 의해 정확히 한 행렬이 다른 행렬의 실수배일 때입니다.
:::
