---
title: 교환 보조정리
title_en: Exchange Lemma
aliases: [슈타이니츠 교환 보조정리, 대체 정리, Steinitz exchange lemma, replacement theorem, exchange lemma]
kind: lemma
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 일차독립인 열 w₁, …, wₘ 의 모든 항이 일차독립인 열 b₁, …, bₚ 의 생성에 속하면 m ≤ p 이다. 일차독립인 열의 계수가 하나뿐이라는 것과 실수의 합을 벡터에 곱하는 규칙도 함께 증명한다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, subspace, finite-sum-of-vectors, linear-combination-and-span, linear-independence, mathematical-induction, proof-by-contradiction, negation-of-quantified-statements, well-ordering-principle, prime-number]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "출처에 없음(검색한 범위). 같은 결론을 얻는 곳: 2장 3.1절, Proposition 3.2, p.48과 Proposition 3.3, p.49; 2장 5절, Proposition 5.2, p.54; 서문, p.iv–v"
    checked: original
    note: "이 보조정리는 출처에 없다(책 전체에서 'exchange', 'Steinitz', 'replacement'를 검색했으나 이 보조정리를 가리키는 곳은 없었다. 나오는 것은 대부분 행 연산과 열 연산의 이름이다). '교환 보조정리'라는 이름도 출처에 나오지 않는다. 출처는 Proposition 3.2(p.48)에서 Fⁿ 의 일차독립인 계는 벡터를 n 개보다 많이 가질 수 없다고 하고, 열이 그 벡터들인 행렬의 사다리꼴에서 피벗을 세어 증명한다. Proposition 3.3(p.49, 두 기저의 벡터 수가 같다)과 Proposition 5.2(p.54, 유한차원 공간의 일차독립인 계의 길이는 dim V 이하)는 동형사상으로 Fⁿ 에 옮긴 뒤 Proposition 3.2 를 쓴다. 서문(p.iv–v)에서 저자는 두 기저의 벡터 수가 같다는 사실 등을 2장에서 피벗을 세어 증명한다고 적고, 이런 사실 대부분에 'coordinate free' 증명이 있지만 그 증명들에도 소거와 피벗 세기가 숨어 있다고 보아 행 소거 증명을 택한다고 적는다. 이 사이트는 행 소거를 아직 다루지 않으므로, 이 항목은 피벗을 쓰지 않고 p 에 대한 귀납법으로 직접 증명한다. 진술의 꼴(b 를 일차독립인 열로 두는 것), (X1), (X2)와 증명은 이 사이트가 썼다. 예시와 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이라 하자.

**교환 보조정리.** $p \ge 0$, $m \ge 0$이 정수이고, $b_1, \dots, b_p$가 길이 $p$인 $V$의 [[linear-independence|일차독립]]인 [[finite-sum-of-vectors|벡터의 열]], $w_1, \dots, w_m$이 길이 $m$인 $V$의 일차독립인 벡터의 열이라 하자. 모든 $j \in \{1, \dots, m\}$에서 $w_j \in \operatorname{span}(b_1, \dots, b_p)$이면 $m \le p$이다.

이 보조정리의 증명에 쓰는 다음 두 사실도 성립한다. 증명은 아래에 함께 있다.

- (X1) (일차독립인 열의 계수는 하나뿐이다) $b_1, \dots, b_p$가 길이 $p \ge 0$인 일차독립인 벡터의 열이고, $\alpha_1, \dots, \alpha_p$와 $\beta_1, \dots, \beta_p$가 길이 $p$인 실수의 열이며 $\alpha_1 b_1 + \cdots + \alpha_p b_p = \beta_1 b_1 + \cdots + \beta_p b_p$이면, 모든 $i \in \{1, \dots, p\}$에서 $\alpha_i = \beta_i$이다. 따라서 $x \in \operatorname{span}(b_1, \dots, b_p)$이면 $x = \alpha_1 b_1 + \cdots + \alpha_p b_p$인 길이 $p$인 실수의 열 $\alpha$는 하나뿐이다.
- (X2) (실수의 합을 곱하기) $n \ge 0$이 정수이고 $\mu_1, \dots, \mu_n$이 길이 $n$인 실수의 열, $x \in V$이면
$$(\mu_1 + \cdots + \mu_n)x = \mu_1 x + \cdots + \mu_n x$$
이다. 왼쪽의 $\mu_1 + \cdots + \mu_n$은 실수의 합이고, 오른쪽은 $i$번째 항이 $\mu_i x$인 길이 $n$인 벡터의 열의 합이다.
:::

:::english
Let $V$ be a vector space.

**Exchange lemma.** Let $p \ge 0$ and $m \ge 0$ be integers, let $b_1, \dots, b_p$ be a linearly independent sequence of vectors of $V$ of length $p$, and let $w_1, \dots, w_m$ be a linearly independent sequence of vectors of $V$ of length $m$. If $w_j \in \operatorname{span}(b_1, \dots, b_p)$ for every $j \in \{1, \dots, m\}$, then $m \le p$.

The following two facts, used in the proof of the lemma, also hold. Their proofs are given below together with that of the lemma.

- (X1) (Coefficients with respect to a linearly independent sequence are unique) If $b_1, \dots, b_p$ is a linearly independent sequence of vectors of length $p \ge 0$, and $\alpha_1, \dots, \alpha_p$ and $\beta_1, \dots, \beta_p$ are sequences of real numbers of length $p$ with $\alpha_1 b_1 + \cdots + \alpha_p b_p = \beta_1 b_1 + \cdots + \beta_p b_p$, then $\alpha_i = \beta_i$ for every $i \in \{1, \dots, p\}$. Consequently, if $x \in \operatorname{span}(b_1, \dots, b_p)$, there is only one sequence of real numbers $\alpha$ of length $p$ with $x = \alpha_1 b_1 + \cdots + \alpha_p b_p$.
- (X2) (Multiplying by a sum of real numbers) If $n \ge 0$ is an integer, $\mu_1, \dots, \mu_n$ is a sequence of real numbers of length $n$ and $x \in V$, then
$$(\mu_1 + \cdots + \mu_n)x = \mu_1 x + \cdots + \mu_n x.$$
On the left, $\mu_1 + \cdots + \mu_n$ is the sum of real numbers; on the right is the sum of the sequence of vectors of length $n$ whose $i$-th term is $\mu_i x$.
:::

## 직관

물감에 빗대어 봅시다. 물감 $p$가지가 있고, 어느 것도 나머지를 섞어서 만들 수 없다고 합시다. 이 물감들을 섞어서 새 색을 여러 가지 만들었는데, 그 새 색들 가운데 어느 것도 나머지 새 색을 섞어서 만들 수 없다면 새 색은 몇 가지까지 될 수 있을까요? 보조정리의 답은 "많아야 $p$가지"입니다. 물감은 $b_1, \dots, b_p$, 섞는 일은 일차결합, "어느 것도 나머지를 섞어 만들 수 없다"는 일차독립에 해당합니다. 다만 실제 물감은 빼거나 음수만큼 섞을 수 없으므로, 비유는 계수가 음수일 수 있다는 점에서 맞지 않습니다.

이름의 "교환"은 증명의 한 걸음에서 왔습니다. 증명의 귀납 단계는 물감이 $p + 1$가지 $b_1, \dots, b_{p+1}$인 경우를 봅니다. 마지막 물감 $b_{p+1}$을 어떤 $w_k$가 실제로 쓰고 있으면, 나머지 $w_j$에서 $w_k$의 알맞은 배를 빼서 $b_{p+1}$을 지웁니다. $w_k$ 하나를 내주고 $b_{p+1}$ 하나를 없애는 셈이어서, 길이가 하나씩 줄어든 같은 꼴의 문제가 남고 귀납 가정을 쓸 수 있습니다.

가정마다 쓰이는 곳이 다릅니다. $w$의 일차독립은 기초 단계($w_1 = 0_V$가 될 수 없다)와 귀납 단계에서 새로 만든 열이 일차독립임을 보이는 곳에서 쓰이고, 어느 $w_j$도 $b_{p+1}$을 쓰지 않는 경우에는 귀납 가정에 그대로 넘겨집니다. $b$의 일차독립은 두 곳에서 쓰입니다. 각 $w_j$를 $b$로 쓰는 계수가 (X1)에 의해 하나로 정해져서 "$w_j$에서 $b_{p+1}$의 계수"가 고르지 않고도 정해지는 곳, 그리고 처음 $p$개 $b_1, \dots, b_p$가 다시 일차독립이어서 귀납 가정을 쓸 수 있는 곳입니다. 이 항목은 $b$가 일차독립인 경우만 다룹니다.

## 증명

:::idea
$p$에 대한 귀납법이다. 각 $w_j$를 $(\text{처음 } p\text{개의 일차결합}) + \lambda_j b_{p+1}$로 나눈다. 모든 $\lambda_j$가 $0$이면 바로 귀납 가정을 쓴다. 어떤 $\lambda_k \ne 0$이면 나머지 $w_j$에서 $(\lambda_j \lambda_k^{-1}) w_k$를 빼서 $b_{p+1}$을 지운 길이 $m - 1$인 일차독립인 열을 만든다.
:::

:::hint
귀납 가정은 "모든 $m$과 모든 일차독립인 열 $w$"에 대한 명제여야 합니다. 귀납 단계에서 $w$의 길이가 $m$에서 $m - 1$로 바뀌기 때문입니다.
:::

:::hint
새로 만든 열 $w'$이 일차독립임을 보일 때, $\beta_1 w'_1 + \cdots + \beta_{m-1} w'_{m-1}$을 "$w_k$를 지운 열의 일차결합 $+$ $w_k$의 배"로 정리하면 [[finite-sum-of-vectors|(C5)]]에 의해 $w_1, \dots, w_m$의 일차결합이 됩니다. $w_k$의 배를 한데 모으는 데 (X2)를 씁니다.
:::

:::proof
**(X1)의 증명.** $\alpha_1 b_1 + \cdots + \alpha_p b_p = \beta_1 b_1 + \cdots + \beta_p b_p$라 하자. [[finite-sum-of-vectors|(C6)]]에 의해
$$(\alpha_1 - \beta_1) b_1 + \cdots + (\alpha_p - \beta_p) b_p = (\alpha_1 b_1 + \cdots + \alpha_p b_p) - (\beta_1 b_1 + \cdots + \beta_p b_p)$$
이고, 오른쪽은 같은 벡터의 차이므로 [[vector-space-basic-properties|(B12)]]에 의해 $0_V$이다. $b$가 일차독립이므로 [[linear-independence|일차독립의 정의]]에 의해 모든 $i$에서 $\alpha_i - \beta_i = 0$이고, [[real-number-arithmetic|(K12)]]의 (v)에 의해 $\alpha_i = \beta_i$이다. 둘째 문장: $x \in \operatorname{span}(b_1, \dots, b_p)$이면 [[linear-combination-and-span|생성의 정의]]에 의해 $x$를 나타내는 길이 $p$인 실수의 열이 있고, 그런 열 둘은 방금 보인 것에 의해 모든 자리에서 같으므로 같은 열이다(길이가 같은 두 열은 모든 자리에서 항이 같으면 같다, [[finite-sum-of-vectors]]의 진술).

**(X2)의 증명.** $x \in V$를 고정하고 $n$에 대한 귀납법(시작점 $0$, [[mathematical-induction|수학적 귀납법]])으로 "길이 $n$인 모든 실수의 열 $\mu$에 대하여 $(\mu_1 + \cdots + \mu_n)x = \mu_1 x + \cdots + \mu_n x$"를 보인다.

기초 단계 $n = 0$. 빈 열의 합은 벡터공간 $\mathbb{R}$의 영벡터, 곧 실수 $0$이다([[finite-sum-of-vectors]]의 "실수의 합"). [[vector-space-basic-properties|(B3)]]에 의해 왼쪽은 $0x = 0_V$이다. 오른쪽은 길이 $0$인 벡터의 열의 합이므로 정의에 의해 $0_V$이다.

귀납 단계. $n \ge 0$에서 성립한다고 하고 $\mu_1, \dots, \mu_{n+1}$을 길이 $n + 1$인 실수의 열이라 하자. 합의 재귀 정의(실수의 합)에 의해 $\mu_1 + \cdots + \mu_{n+1} = (\mu_1 + \cdots + \mu_n) + \mu_{n+1}$이고, 여기서 $\mu_1 + \cdots + \mu_n$은 $\mu$의 처음 $n$개의 합이다. 따라서 [[vector-space|(V8)]]과 귀납 가정(처음 $n$개 $\mu_1, \dots, \mu_n$에 쓴다)에 의해
$$(\mu_1 + \cdots + \mu_{n+1})x = (\mu_1 + \cdots + \mu_n)x + \mu_{n+1} x = (\mu_1 x + \cdots + \mu_n x) + \mu_{n+1} x$$
이다. $i$번째 항이 $\mu_i x$인 길이 $n + 1$인 벡터의 열의 처음 $n$개는 $i \le n$에서 항이 $\mu_i x$인 길이 $n$인 열이고, 이것은 $\mu_1, \dots, \mu_n$으로 만든 열 $\mu_1 x, \dots, \mu_n x$와 모든 자리에서 항이 같으므로 같은 열이다. 따라서 합의 재귀 정의에 의해 맨 오른쪽은 $\mu_1 x + \cdots + \mu_{n+1} x$이다. 귀납법의 원리에 의해 모든 $n \ge 0$에서 성립한다.

**교환 보조정리의 증명.** $V$를 고정한다. 정수 $p \ge 0$마다 명제 $S_p$를 다음과 같이 둔다.

> $S_p$: 길이 $p$인 $V$의 모든 일차독립인 벡터의 열 $b_1, \dots, b_p$와 모든 정수 $m \ge 0$과 길이 $m$인 $V$의 모든 일차독립인 벡터의 열 $w_1, \dots, w_m$에 대하여, 모든 $j \in \{1, \dots, m\}$에서 $w_j \in \operatorname{span}(b_1, \dots, b_p)$이면 $m \le p$이다.

시작점이 $0$인 귀납법으로 모든 $p \ge 0$에서 $S_p$를 보이면 보조정리가 증명된다. 정수의 순서는 [[prime-number|(Z1)]], [[well-ordering-principle|(Z5)–(Z7)]], (L1)–(L3)으로 다룬다.

*기초 단계 $p = 0$.* $b$는 빈 열이고 $\operatorname{span}(b) = \{0_V\}$이다([[linear-combination-and-span|생성의 정의]]). $w$가 길이 $m$인 일차독립인 열이고 모든 항이 $\{0_V\}$에 속한다고 하자. $m \ge 1$이라고 가정하면 $1 \in \{1, \dots, m\}$이므로 $w_1 \in \{0_V\}$, 곧 $w_1 = 0_V$이고, [[linear-independence|(I1)]]에 의해 $w$는 일차종속이다. 이는 $w$가 일차독립이라는 가정에 모순이므로([[proof-by-contradiction|귀류법]]) $m \ge 1$이 아니다. (Z5)와 (Z1)에 의해 $m \le 0$이거나 $m \ge 1$이므로 $m \le 0 = p$이다.

*귀납 단계.* $p \ge 0$에서 $S_p$가 참이라 하자. $b_1, \dots, b_{p+1}$이 길이 $p + 1$인 일차독립인 열이고, $m \ge 0$이고 $w_1, \dots, w_m$이 길이 $m$인 일차독립인 열이며, 모든 $j$에서 $w_j \in \operatorname{span}(b_1, \dots, b_{p+1})$이라 하자. $m \le p + 1$을 보인다.

(ㄱ) $b$에서 $(p+1)$번째 항을 [[finite-sum-of-vectors|지운 열]] $c'$은 $c'_i = b_i$ ($1 \le i < p + 1$), $c'_i = b_{i+1}$ ($p + 1 \le i \le p$)로 정한 길이 $p$인 열이다. $i \in \{1, \dots, p\}$이면 (L3)과 (Z6)에 의해 $i \le p < p + 1$이므로 모든 자리에서 첫째 규칙이 쓰이고 $c'_i = b_i$이다. 곧 $c'$은 처음 $p$개 $b_1, \dots, b_p$와 같은 열이다. 따라서 [[linear-independence|(I3)]]에 의해 $b_1, \dots, b_p$는 일차독립이다. $U = \operatorname{span}(b_1, \dots, b_p)$로 두면 [[linear-combination-and-span|(N1)]]에 의해 $U$는 $V$의 [[subspace|부분공간]]이다.

(ㄴ) $m = 0$이면 $0 \le p < p + 1$이므로 (Z6)에 의해 $m \le p + 1$이다. 이제 $m \ge 1$이라 하고 $n = m - 1$로 두면 (Z7)에 의해 $n \ge 0$이고 $m = n + 1$이다.

(ㄷ) 각 $j \in \{1, \dots, m\}$에서 $w_j \in \operatorname{span}(b_1, \dots, b_{p+1})$이므로 $w_j$를 나타내는 길이 $p + 1$인 실수의 열이 있고, $b$가 일차독립이므로 (X1)에 의해 이 열은 하나뿐이다. 이 열을 $\alpha^{(j)}$라 하자. 실수 $\lambda_j = \alpha^{(j)}_{p+1}$이 $j$마다 하나씩 정해지므로 [[real-function-space|(G)]]에 의해 길이 $m$인 실수의 열 $\lambda_1, \dots, \lambda_m$이 있다. 또 $\gamma^{(j)}$를 $\alpha^{(j)}$에서 $(p+1)$번째 항을 지운 열이라 하고 $u_j = \gamma^{(j)}_1 b_1 + \cdots + \gamma^{(j)}_p b_p$로 두자((ㄱ)에 의해 $b$에서 $(p+1)$번째 항을 지운 열은 $b_1, \dots, b_p$이다). [[finite-sum-of-vectors|(C5)]]의 뒷부분($k = p + 1$)에 의해, 그리고 생성의 정의에 의해
$$w_j = u_j + \lambda_j b_{p+1}, \qquad u_j \in U \qquad (j \in \{1, \dots, m\})$$
이다.

(ㄹ) *경우 1: 모든 $j$에서 $\lambda_j = 0$.* 그러면 [[vector-space-basic-properties|(B3)]]에 의해 $\lambda_j b_{p+1} = 0_V$이고, 영벡터의 정의([[vector-space]])에 의해 $w_j = u_j + 0_V = u_j \in U$이다. (ㄱ)에 의해 $b_1, \dots, b_p$는 길이 $p$인 일차독립인 열이므로 $S_p$에 의해 $m \le p$이고, (L3)의 $p < p + 1$과 (Z6)에 의해 $m \le p + 1$이다.

(ㅁ) *경우 2: 어떤 $j$에서 $\lambda_j \ne 0$.* ("모든 $j$에서 $\lambda_j = 0$"의 [[negation-of-quantified-statements|부정]]이다.) 그런 $k \in \{1, \dots, m\}$을 하나 잡는다. $\lambda_k \ne 0$이므로 $\lambda_k^{-1}$이 있다([[real-number-arithmetic|(K8)]]). $c_1, \dots, c_n$을 $w$에서 $k$번째 항을 지운 열이라 하자. $i \in \{1, \dots, n\}$에 대하여 $1 \le i < k$이면 $j(i) = i$, $k \le i \le n$이면 $j(i) = i + 1$로 두면 지운 열의 정의에 의해 $j(i) \in \{1, \dots, m\}$이고 $c_i = w_{j(i)}$이다. 각 $i$에 벡터 $c_i - (\lambda_{j(i)} \lambda_k^{-1}) w_k$가 하나씩 정해지므로 (G)에 의해
$$w'_i = c_i - (\lambda_{j(i)} \lambda_k^{-1}) w_k \qquad (i \in \{1, \dots, n\})$$
인 길이 $n$인 벡터의 열 $w'_1, \dots, w'_n$이 있다.

(ㅁ-1) *모든 $w'_i$가 $U$에 속한다.* $i$를 잡고 $j = j(i)$로 쓰자. (ㄷ)과 (V7), (V6)에 의해
$$(\lambda_j \lambda_k^{-1}) w_k = (\lambda_j \lambda_k^{-1}) u_k + (\lambda_j \lambda_k^{-1})(\lambda_k b_{p+1}) = (\lambda_j \lambda_k^{-1}) u_k + ((\lambda_j \lambda_k^{-1})\lambda_k) b_{p+1}$$
이다. (K2), (K1), $\lambda_k^{-1}$의 정의, (K4)에 의해 $(\lambda_j \lambda_k^{-1})\lambda_k = \lambda_j(\lambda_k \lambda_k^{-1}) = \lambda_j \cdot 1 = \lambda_j$이다. $z = (\lambda_j \lambda_k^{-1}) u_k$, $y = \lambda_j b_{p+1}$로 두면 $(\lambda_j \lambda_k^{-1}) w_k = z + y$이고 $c_i = w_j = u_j + y$이다. 따라서 뺄셈의 뜻 $w'_i = (u_j + y) + (-(z + y))$ ([[vector-space-basic-properties|(B2)]])과 (B10), (V1), (V2), (B2), 영벡터의 정의에 의해
$$w'_i = (u_j + y) + ((-z) + (-y)) = (u_j + y) + ((-y) + (-z)) = (u_j + (y + (-y))) + (-z) = (u_j + 0_V) + (-z) = u_j + (-z)$$
이다(셋째 등호는 (V2)를 두 번 쓴 것이다). $u_j, u_k \in U$이고 $U$가 부분공간이므로 [[subspace|(S3)]]에 의해 $z \in U$, (B5)와 (S3)에 의해 $-z = (-1)z \in U$, (S2)에 의해 $w'_i = u_j + (-z) \in U$이다.

(ㅁ-2) *$w'$은 일차독립이다.* $\beta_1, \dots, \beta_n$이 길이 $n$인 실수의 열이고 $\beta_1 w'_1 + \cdots + \beta_n w'_n = 0_V$라 하자. 각 $i$에서 $\mu_i = \beta_i(-(\lambda_{j(i)} \lambda_k^{-1}))$로 두면 (G)에 의해 실수의 열 $\mu_1, \dots, \mu_n$이 있다. 뺄셈의 뜻 (B2), (V7), (B9), (V6)에 의해
$$\beta_i w'_i = \beta_i c_i + \beta_i\bigl(-((\lambda_{j(i)} \lambda_k^{-1}) w_k)\bigr) = \beta_i c_i + \beta_i\bigl((-(\lambda_{j(i)} \lambda_k^{-1})) w_k\bigr) = \beta_i c_i + \mu_i w_k$$
이다. 따라서 $i$번째 항이 $\beta_i w'_i$인 열과 $i$번째 항이 $\beta_i c_i + \mu_i w_k$인 열은 모든 자리에서 항이 같으므로 같은 열이고, [[finite-sum-of-vectors|(H3)]]과 (X2)($x = w_k$)에 의해
$$0_V = \beta_1 w'_1 + \cdots + \beta_n w'_n = (\beta_1 c_1 + \cdots + \beta_n c_n) + (\mu_1 w_k + \cdots + \mu_n w_k) = (\beta_1 c_1 + \cdots + \beta_n c_n) + \tau w_k$$
이다. 여기서 $\tau = \mu_1 + \cdots + \mu_n$이다. $\alpha$를 $\beta$의 $k$번째 자리에 $\tau$를 끼워 넣은 길이 $n + 1 = m$인 실수의 열이라 하면, (C5)($w$, 그 $k$번째 항을 지운 열 $c$, $\gamma = \beta$, $t = \tau$)에 의해
$$\alpha_1 w_1 + \cdots + \alpha_m w_m = (\beta_1 c_1 + \cdots + \beta_n c_n) + \tau w_k = 0_V$$
이다. $w$가 일차독립이므로 모든 $\alpha_l$이 $0$이다. $i \in \{1, \dots, n\}$을 잡자. $i < k$이면 끼워 넣은 열의 정의에 의해 $\beta_i = \alpha_i = 0$이다. $k \le i \le n$이면 (L3), (Z6), (Z7)에 의해 $k < i + 1 \le n + 1$이므로 $\alpha_{i+1} = \beta_{(i+1)-1} = \beta_i$이고 $\beta_i = 0$이다. 곧 모든 $\beta_i$가 $0$이므로 $w'$은 일차독립이다.

(ㅁ-3) (ㄱ)에 의해 $b_1, \dots, b_p$는 길이 $p$인 일차독립인 열이고, $w'$은 길이 $n \ge 0$인 일차독립인 열이며 (ㅁ-1)에 의해 모든 항이 $U = \operatorname{span}(b_1, \dots, b_p)$에 속한다. $S_p$에 의해 $n \le p$, 곧 $m - 1 \le p$이고 (Z7)에 의해 $m \le p + 1$이다.

경우 1과 경우 2 가운데 하나는 반드시 일어나므로 $m \le p + 1$이고 $S_{p+1}$이 참이다. 시작점이 $0$인 귀납법의 원리에 의해 모든 $p \ge 0$에서 $S_p$가 참이다.
:::

## 예시와 반례

:::example[증명의 한 걸음을 따라가기]
$\mathbb{R}^3$의 벡터 $e_1 = (1, 0, 0)$, $e_2 = (0, 1, 0)$을 $b_1, b_2$로 둡니다. 이 열은 $\alpha e_1 + \beta e_2 = (\alpha, \beta, 0)$이 $(0, 0, 0)$이면 $\alpha = \beta = 0$이므로 일차독립입니다. $w_1 = (1, 1, 0) = 1e_1 + 1e_2$, $w_2 = (1, -1, 0) = 1e_1 + (-1)e_2$로 둡시다. $b$의 길이가 $2$이므로 증명의 귀납 단계에서 $p + 1 = 2$, 곧 $p = 1$이고 마지막 항은 $b_2 = e_2$입니다. $e_2$의 계수는 $\lambda_1 = 1$, $\lambda_2 = -1$입니다. $\lambda_1 \ne 0$이므로 $k = 1$로 잡으면 $w$에서 첫째 항을 지운 열은 $c_1 = w_2$이고
$$w'_1 = w_2 - (\lambda_2 \lambda_1^{-1}) w_1 = (1, -1, 0) - (-1)(1, 1, 0) = (2, 0, 0) = 2e_1$$
입니다. $e_2$가 지워져 $w'_1$은 $\operatorname{span}(e_1)$에 속하고, $w'_1 \ne 0_V$이므로 [[linear-independence|(I4)]]에 의해 길이 $1$인 일차독립인 열입니다. 귀납 가정 $S_1$이 $w'$의 길이에 대하여 $1 \le 1$을 주고, 따라서 $m = 2 \le p + 1 = 2$입니다.
:::

:::example[길이 3은 안 된다]
같은 $b = e_1, e_2$에서 $w_3 = (3, 1, 0)$을 하나 더 붙인 열 $w_1, w_2, w_3$은 모든 항이 $\operatorname{span}(e_1, e_2)$에 속하므로 보조정리에 의해 일차독립일 수 없습니다($3 \le 2$가 아니므로). 실제로 $2w_1 + 1w_2 + (-1)w_3 = (2 + 1 - 3, 2 - 1 - 1, 0) = (0, 0, 0)$이고 계수 $-1$이 $0$이 아닙니다.
:::

:::counterexample[생성에 속한다는 가정이 없으면 깨진다]
$\mathbb{R}^2$에서 $b_1 = e_1 = (1, 0)$ 하나($p = 1$)와 $w = e_1, e_2$($e_2 = (0, 1)$, $m = 2$)를 봅시다. $w$는 $\alpha e_1 + \beta e_2 = (\alpha, \beta)$가 $(0, 0)$이면 $\alpha = \beta = 0$이므로 일차독립이고, $m = 2 > 1 = p$입니다. 보조정리와 어긋나지 않는 까닭은 $w_2 = (0, 1)$이 $\operatorname{span}(e_1) = \{(\alpha, 0) : \alpha \in \mathbb{R}\}$에 속하지 않기 때문입니다($(\alpha, 0) = (0, 1)$이면 둘째 값에서 $0 = 1$이 되어 [[real-number-arithmetic|(K4)]]에 어긋납니다).
:::

:::counterexample[w 가 일차독립이 아니면 길이에 제한이 없다]
$b_1 = e_1 \in \mathbb{R}^2$ 하나($p = 1$)에 대하여 $w = e_1, e_1, e_1$($m = 3$)은 모든 항이 $\operatorname{span}(e_1)$에 속하지만 $3 \le 1$이 아닙니다. 이 열은 같은 벡터가 두 자리에 있으므로 [[linear-independence|(I2)]]에 의해 일차종속이어서 보조정리의 가정을 만족하지 않습니다. 같은 항을 몇 번 되풀이해도 되므로, 일차독립이라는 가정 없이는 $m$을 얼마든지 크게 만들 수 있습니다.
:::

## 확인 질문

:::check[$\mathbb{R}^2$의 벡터 $(1, 2)$에 대하여, 모든 항이 $\operatorname{span}((1, 2))$에 속하는 일차독립인 열의 길이는 얼마까지 될 수 있는가?]
$1$까지입니다. $(1, 2) \ne (0, 0)$이므로 [[linear-independence|(I4)]]에 의해 길이 $1$인 열 $(1, 2)$는 일차독립이고, 보조정리($p = 1$)에 의해 그런 열의 길이는 $1$ 이하입니다. 길이 $1$은 실제로 됩니다. 예컨대 $(1, 2)$ 자신이나 $(3, 6) = 3(1, 2)$ 하나로 이루어진 열이 그렇습니다.
:::

:::check[$\mathbb{R}^2$의 열 $(1, 0), (1, 1)$은 일차독립이다. $a(1, 0) + b(1, 1) = (3, 5)$인 실수 $a$, $b$는 몇 쌍인가?]
한 쌍입니다. 왼쪽은 $(a + b, b)$이므로 $b = 5$, $a = 3 - 5 = -2$가 하나의 답이고, (X1)에 의해 일차독립인 열의 계수는 하나뿐이므로 다른 답은 없습니다. (일차독립: $\alpha(1, 0) + \beta(1, 1) = (\alpha + \beta, \beta) = (0, 0)$이면 $\beta = 0$이고 $\alpha = 0$입니다.)
:::
