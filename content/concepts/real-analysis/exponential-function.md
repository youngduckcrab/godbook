---
title: 지수함수
title_en: Exponential Function
aliases: [exp, 자연지수함수, exponential function, exponential]
kind: definition
field: real-analysis
msc: ["26A09"]
level: undergrad
summary: "자연로그 ln 은 양의 실수 전체에서 실수 전체로의 전단사이므로 역함수를 갖는다. 이 역함수 exp 를 지수함수라 한다. exp(0) = 1 이고 exp 는 양수 값만 갖는 순증가인 연속함수이며, 미분가능하고 도함수가 자기 자신이다. exp 는 위로 유계가 아니고 하한이 0 이며, exp(x)exp(−x) = 1 이고, 도함수가 자기 자신이고 0 에서 1 인 함수는 exp 하나뿐이다."
requires: [inverse-function, injective-surjective-bijective, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, interval, real-valued-function, bounded-function, continuous-function, derivative, derivative-rules, chain-rule, derivative-and-monotonicity, continuously-differentiable, inverse-of-strictly-monotone-function, derivative-of-inverse-function, natural-logarithm, laws-of-logarithm]
sources:
  - ref: lebl-basic-analysis
    loc: 5.4절(5.4.2 소절 The exponential) Proposition 5.4.2 의 (i)–(iii)과 증명, 유일성의 증명, exp 의 정의와 각주, Figure 5.7 (p.209–210); Remark 5.4.4, 5.4.5 (p.211); 5.4.3 소절 연습문제 5.4.10 (p.213); 3.5절(3.5.3 소절) Example 3.5.9 (p.147)
    checked: original
    note: "출처 Proposition 5.4.2(p.209)는 (i) E(0) = 1, (ii) E 는 미분가능하고 E′ = E, (iii) E 는 순증가인 전단사이고 x → −∞ 에서 0, x → ∞ 에서 ∞ 로 가는 함수 E : ℝ → (0, ∞) 가 정확히 하나 있다고 하고, 증명(p.209–210)에서 E 를 L = ln 의 역함수로 두고 (ii)를 Lemma 4.4.1 로 얻는다. 그 뒤 exp(x) := E(x) 로 정의한다(p.210). 이 항목은 거꾸로 exp 를 ln 의 역함수로 먼저 정의하고 (1)–(5)를 증명한다. 출처는 E 를 쓰지만 이 사이트는 처음부터 exp 로 쓴다. 출처는 L 이 Lemma 4.4.1 의 가정을 만족한다고만 적는데, 이 항목은 '역함수의 미분' (2)의 가정(ℝ_{>0} 과 ℝ 가 구간, ln 이 순증가인 전사, ln′(x) = x⁻¹ ≠ 0)을 하나씩 확인한다. 출처는 순증가를 E′ = E > 0 에서 얻고, 이 항목은 '순단조함수의 역함수' (2)로 ln 의 순증가에서 얻는다. (4)는 출처 (iii)의 두 극한을 이 사이트에 없는 무한대에서의 극한 대신 '모든 M 에 대하여 K 가 있다' 꼴로 쓴 것이고, 증명은 출처와 같이 exp(x₀) = M 인 x₀(여기서는 ln M)을 쓴다. (5)의 유일성은 출처의 증명(F(x)E(−x) 의 도함수가 0)과 같은 길이고, 출처의 각주(p.210)가 말하는 대로 F 의 공역을 ℝ 로 두어도 된다. exp(x)exp(−x) = 1 은 출처의 증명 안에 있는 것을 진술로 올렸다. 출처 Remark 5.4.4(p.211)는 E′ = E, E(0) = 1 의 해로 정의하는 길(Example 6.3.3)과 거듭제곱급수로 정의하는 길(Example 6.2.14)이 있다고 적고, Remark 5.4.5 는 유일성이 지수법칙에서도 나온다고 하며 연습문제를 보라고 적는다(연습문제 5.4.10(p.213)이 그것을 묻는다). 예시 '두 길로 구한 exp(−ln 2)'의 두 번째 길은 (5)를 쓰는 것이다. 반례 '0 에서의 값을 빼면'의 함수 2exp 와 0 은 출처 증명에서 (i)이 쓰이는 단계(F(0)E(−0) = 1)와 같은 점을 보인다. (4)의 둘째 문장은 출처 Example 3.5.9(3.5.3 소절, p.147; e^{−x²+x} 의 x → ∞ 극한을 구하며 y → −∞ 에서 eʸ 가 0 으로 간다는 것에 기대고, 그것은 지수함수를 정의할 때 증명한다고 적는다)가 기대는 사실을 이 사이트의 꼴로 쓴 것이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 확인. 틀린 위치 2건, 경계 경우에서 맞지 않던 설명 문장 2건, 겹치는 글자 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-20
---

:::statement
$\mathbb{R}_{>0}$과 자연로그 $\ln$은 [[natural-logarithm]]의 것이고, 순증가는 [[derivative-and-monotonicity|도함수와 증가·감소]] 항목의 것이며, 역함수는 [[inverse-function]]의 것이다. 미분가능, 미분계수, 도함수는 [[derivative]]의 것이고, 연속과 연속함수는 [[continuous-function]]의 것이며, 연속미분가능은 [[continuously-differentiable]]의 것이다. 위로 유계는 [[bounded-function]]의 것이고, 하한은 [[upper-bound-and-supremum]]의 것이다.

**지수함수.** [[laws-of-logarithm|로그의 성질]]의 (6)에 의해 $\ln : \mathbb{R}_{>0} \to \mathbb{R}$는 전단사이므로 역함수 $\mathbb{R} \to \mathbb{R}_{>0}$를 갖는다. 이 역함수를 $\exp : \mathbb{R} \to \mathbb{R}_{>0}$로 쓰고 **지수함수**(exponential function)라 한다. 실수 $x$에서의 값은 $\exp(x)$로 쓴다. $\mathbb{R}_{>0} \subseteq \mathbb{R}$이므로 $\exp$는 $\mathbb{R}$ 위의 실함수이기도 하고, 연속과 미분은 이 실함수로서의 것이다.

다음이 성립한다. 아래에서 $x$, $y$는 실수이다.

1. (역함수) $a \in \mathbb{R}_{>0}$에 대하여 $\exp(y) = a$인 것은 정확히 $\ln a = y$일 때이다. 따라서 모든 $a \in \mathbb{R}_{>0}$에서 $\exp(\ln a) = a$이고, 모든 실수 $y$에서 $\ln(\exp(y)) = y$이며 $0 < \exp(y)$이다. 특히 $\exp(0) = 1$이다.
2. (순증가와 연속) $\exp$는 순증가인 연속함수이다. $x < y$인 것은 정확히 $\exp(x) < \exp(y)$일 때이고, $x \le y$인 것은 정확히 $\exp(x) \le \exp(y)$일 때이다.
3. (도함수) $\exp$는 미분가능한 함수이고 모든 실수 $x$에서 $\exp'(x) = \exp(x)$이다. 곧 $\exp' = \exp$이다. 따라서 $\exp$는 연속미분가능하다.
4. (위로 유계가 아니고 하한은 $0$) 모든 실수 $M$에 대하여 실수 $K$가 있어, $K < x$인 모든 실수 $x$에서 $M < \exp(x)$이다. 모든 양의 실수 $\varepsilon$에 대하여 실수 $K$가 있어, $x < K$인 모든 실수 $x$에서 $\exp(x) < \varepsilon$이다. 따라서 $\exp$는 위로 유계가 아니고, 집합 $\exp(\mathbb{R})$의 하한은 $0$이며, $0$은 $\exp$의 값이 아니다.
5. (유일성) 모든 실수 $x$에서 $\exp(x)\exp(-x) = 1$이다. 또 $F : \mathbb{R} \to \mathbb{R}$가 미분가능한 함수이고 모든 실수 $x$에서 $F'(x) = F(x)$이며 $F(0) = 1$이면 $F = \exp$이다.
:::

:::english
$\mathbb{R}_{>0}$ and the natural logarithm $\ln$ are those of the entry on the natural logarithm; strictly increasing is that of the entry on derivatives and monotonicity; inverse functions are those of the entry on inverse functions. Differentiability, derivatives at a point and derivative functions are those of the entry on derivatives; continuity and continuous functions are those of the entry on continuous functions; continuous differentiability is that of the entry on continuously differentiable functions. Bounded above is that of the entry on bounded functions, and the infimum is that of the entry on upper bounds and suprema.

**Exponential function.** By (6) of the entry on the laws of logarithm, $\ln : \mathbb{R}_{>0} \to \mathbb{R}$ is a bijection, so it has an inverse function $\mathbb{R} \to \mathbb{R}_{>0}$. We write this inverse function as $\exp : \mathbb{R} \to \mathbb{R}_{>0}$ and call it the **exponential function**. Its value at a real number $x$ is written $\exp(x)$. Since $\mathbb{R}_{>0} \subseteq \mathbb{R}$, $\exp$ is also a real-valued function on $\mathbb{R}$, and continuity and differentiation refer to this real-valued function.

The following hold. Below, $x$ and $y$ are real numbers.

1. (Inverse function) For $a \in \mathbb{R}_{>0}$, $\exp(y) = a$ precisely when $\ln a = y$. Hence $\exp(\ln a) = a$ for all $a \in \mathbb{R}_{>0}$, and $\ln(\exp(y)) = y$ and $0 < \exp(y)$ for all real $y$. In particular, $\exp(0) = 1$.
2. (Strictly increasing and continuous) $\exp$ is a strictly increasing continuous function. $x < y$ precisely when $\exp(x) < \exp(y)$, and $x \le y$ precisely when $\exp(x) \le \exp(y)$.
3. (Derivative) $\exp$ is a differentiable function and $\exp'(x) = \exp(x)$ for every real $x$; that is, $\exp' = \exp$. Hence $\exp$ is continuously differentiable.
4. (Not bounded above, infimum $0$) For every real number $M$ there is a real number $K$ such that $M < \exp(x)$ for every real $x$ with $K < x$. For every positive real number $\varepsilon$ there is a real number $K$ such that $\exp(x) < \varepsilon$ for every real $x$ with $x < K$. Hence $\exp$ is not bounded above, the infimum of the set $\exp(\mathbb{R})$ is $0$, and $0$ is not a value of $\exp$.
5. (Uniqueness) $\exp(x)\exp(-x) = 1$ for every real $x$. Moreover, if $F : \mathbb{R} \to \mathbb{R}$ is a differentiable function with $F'(x) = F(x)$ for every real $x$ and $F(0) = 1$, then $F = \exp$.
:::

## 직관

자연로그는 곱셈의 세계($\mathbb{R}_{>0}$)를 덧셈의 세계($\mathbb{R}$)로 옮기는 자와 같습니다. 눈금 $y$를 읽으면 그 눈금이 가리키는 양수 $a$를 돌려주는 것이 지수함수입니다. 자의 눈금이 겹치지 않고(단사) 모든 실수가 눈금으로 쓰이므로(전사) 거꾸로 읽는 일이 언제나 한 가지로 정해집니다. 그래서 지수함수는 실수 전체에서 정의되고 값은 언제나 양수입니다.

$\ln$의 기울기는 $x$에서 $x^{-1}$입니다. 그래프를 대각선에 대해 뒤집으면 기울기는 역수가 되므로, $\exp$의 그래프의 높이가 $a$인 곳의 기울기는 $(a^{-1})^{-1} = a$, 곧 높이 자신입니다. (3)이 이것이고, [[derivative-of-inverse-function|역함수의 미분]]의 (2)가 정확한 근거입니다. (5)는 "기울기가 늘 높이와 같고 $0$에서 높이가 $1$"이라는 두 조건만으로 함수가 하나로 정해진다는 것입니다.

(4)는 $\exp$가 오른쪽으로 갈수록 어떤 수든 넘어서고, 왼쪽으로 갈수록 $0$에 얼마든지 가까워지지만 $0$이 되지는 않는다는 것입니다. 이 사이트에는 무한대에서의 극한이 없으므로 "모든 $M$에 대하여 그보다 오른쪽에서는 $M$을 넘는 $K$가 있다"는 꼴로 적습니다.

## 성질의 증명

:::proof
"자연로그 (n)"은 [[natural-logarithm]]의 (n), "로그 (n)"은 [[laws-of-logarithm|로그의 성질]]의 (n), "역함수 (n)"은 [[inverse-of-strictly-monotone-function|순단조함수의 역함수]]의 (n), "순서 (n)"은 [[order-properties-of-reals]]의 (n)이고, (K…)는 [[real-number-arithmetic]]의 번호이다.

**정의가 뜻을 갖는 것과 1.** 자연로그 (3)에 의해 $\ln$은 순증가이고, 로그 (6)에 의해 $\ln : \mathbb{R}_{>0} \to \mathbb{R}$는 전사이다. 역함수 (2)를 $S = \mathbb{R}_{>0}$, $T = \mathbb{R}$에 쓰면 $\ln : \mathbb{R}_{>0} \to \mathbb{R}$의 역함수 $\exp : \mathbb{R} \to \mathbb{R}_{>0}$가 있고, 실수 $y$와 $a \in \mathbb{R}_{>0}$에 대하여 $\exp(y) = a$인 것은 정확히 $\ln a = y$일 때이며, $\exp$는 순증가이다. (이것은 [[inverse-function]]의 정의의 역함수와 같은 것이고, 역함수가 있다는 것은 로그 (6)의 전단사와도 맞는다.) $a \in \mathbb{R}_{>0}$에서 $y = \ln a$로 두면 $\exp(\ln a) = a$이다. 실수 $y$에서 $a = \exp(y)$로 두면 $a \in \mathbb{R}_{>0}$, 곧 $0 < \exp(y)$이고 $\ln(\exp(y)) = y$이다. 자연로그 (1)에 의해 $\ln 1 = 0$이므로 $\exp(0) = 1$이다.

**2의 증명.** $\exp$가 순증가라는 것은 1의 증명에서 보였다. $\mathbb{R}_{>0}$은 구간이고([[natural-logarithm]]의 진술) $\ln$은 순증가이므로 역함수 (3)에 의해 $\exp : \mathbb{R} \to \mathbb{R}_{>0}$는 연속함수이다. 두 "정확히" 문장은 역함수 (1)을 순증가인 $\exp$에 쓴 것이다.

**3의 증명.** [[derivative-of-inverse-function|역함수의 미분]]의 (2)를 $I = \mathbb{R}_{>0}$, $J = \mathbb{R}$, $f = \ln$에 쓴다. $I$는 구간이고 $J$는 [[interval]]의 (2)에 의해 구간이며, $\ln : I \to J$는 순증가(순단조)인 전사이다. 자연로그 (2)에 의해 $\ln$은 미분가능한 함수이고 $\ln'(a) = a^{-1}$이며, $a \in \mathbb{R}_{>0}$이면 $a^{-1} \in \mathbb{R}_{>0}$([[natural-logarithm]]의 진술)이므로 $a^{-1} \ne 0$이다. 따라서 $\exp$는 미분가능한 함수이고 모든 실수 $x$에서
$$
\begin{aligned}
\exp'(x) &= \ln'(\exp(x))^{-1} \\
&= \bigl(\exp(x)^{-1}\bigr)^{-1}
\end{aligned}
$$
이다. $\exp(x)^{-1}\exp(x) = 1$이므로((K1)과 역수의 정의) (K8)의 (iii)(역수의 유일성)에 의해 $\exp(x)$는 $\exp(x)^{-1}$의 역수이다. 곧 $\bigl(\exp(x)^{-1}\bigr)^{-1} = \exp(x)$이고 $\exp'(x) = \exp(x)$이다. 자연로그 (2)에 의해 $\ln$은 연속미분가능하므로, 역함수의 미분의 (2)의 뒷부분에 의해 $\exp$도 연속미분가능하다.

**4의 증명.** 실수 $M$이 주어졌다고 하자. $M \le 0$이면 $K = 0$으로 둔다. 그러면 모든 실수 $x$에서 1에 의해 $M \le 0 < \exp(x)$이다. $0 < M$이면 $M \in \mathbb{R}_{>0}$이므로 $K = \ln M$으로 둔다. $K < x$이면 2와 1에 의해 $M = \exp(\ln M) < \exp(x)$이다. 양의 실수 $\varepsilon$이 주어지면 $K = \ln \varepsilon$으로 두고, $x < K$이면 같은 방식으로 $\exp(x) < \exp(\ln \varepsilon) = \varepsilon$이다.

$\exp$가 위로 유계라고 하자. 곧 어떤 실수 $B$가 있어 모든 실수 $x$에서 $\exp(x) \le B$이다([[bounded-function]]의 정의). 앞 문단을 $M = B$에 쓴 $K$에 대하여 $x = K + 1$로 두면 $K < x$이므로(순서 (2)의 (ii)와 (5)의 (ii)) $B < \exp(x)$이고, 이것은 $\exp(x) \le B$와 함께 성립하지 않는다(순서 (1)의 (i)). 따라서 $\exp$는 위로 유계가 아니다.

$E = \exp(\mathbb{R})$로 두자. 1에 의해 $E$의 모든 원소는 양수이므로 $0$은 $E$의 하계이다. $c$가 $E$의 하계이고 $0 < c$라 하면, 앞 문단을 $\varepsilon = c$에 쓴 $K$에 대하여 $x = K - 1$에서 $\exp(x) < c$인데 $\exp(x) \in E$이므로 $c \le \exp(x)$이어서 모순이다. 따라서 $E$의 모든 하계 $c$는 $c \le 0$이고(순서 (1)의 (iii)), [[upper-bound-and-supremum]]의 정의에 의해 $0$은 $E$의 하한이다. 1에 의해 $\exp$의 값은 모두 양수이므로 $0$은 $\exp$의 값이 아니다.

**5의 증명.** $m(x) = -x$로 정한 $m : \mathbb{R} \to \mathbb{R}$는 [[derivative]]의 (1)에 의해 미분가능하고 $m'(x) = -1$이다. $u = \exp \circ m$, 곧 $u(x) = \exp(-x)$로 두면, 3과 [[chain-rule|연쇄 법칙]]의 (2)에 의해 $u$는 미분가능하고 $u'(x) = \exp'(-x)\cdot(-1) = -\exp(-x)$이다((K9)).

$F : \mathbb{R} \to \mathbb{R}$가 미분가능한 함수이고 모든 $x$에서 $F'(x) = F(x)$라 하자. $H = Fu$, 곧 $H(x) = F(x)\exp(-x)$로 두면 [[derivative-rules|미분의 규칙]]의 (6)에 의해 $H$는 미분가능하고
$$
\begin{aligned}
H'(x) &= F(x)\,u'(x) \\
&\quad + F'(x)\,u(x) \\
&= -F(x)\exp(-x) \\
&\quad + F(x)\exp(-x) \\
&= 0
\end{aligned}
$$
이다((K1), (K9)와 (K8)의 (ii)). $\mathbb{R}$은 구간이므로([[interval]]의 (2)) [[derivative-and-monotonicity|도함수와 증가·감소]]의 (1)에 의해 $H$는 상수함수이고, 모든 $x$에서 $H(x) = H(0) = F(0)\exp(0) = F(0)$이다(1).

$F = \exp$로 두면 3에 의해 가정이 성립하고 $F(0) = \exp(0) = 1$이므로, 모든 $x$에서 $\exp(x)\exp(-x) = 1$이다. 이제 $F(0) = 1$이라 하면 모든 $x$에서 $F(x)\exp(-x) = 1 = \exp(x)\exp(-x)$이다. 1에 의해 $\exp(-x) \ne 0$이므로 (K1)과 (K11)에 의해 $F(x) = \exp(x)$이고, [[real-valued-function]]의 (2)에 의해 $F = \exp$이다. $\blacksquare$
:::

## 예시와 반례

:::example[두 길로 구한 $\exp(-\ln 2)$]
$2 \in \mathbb{R}_{>0}$이므로 (1)에 의해 $\exp(\ln 2) = 2$입니다. 이제 $\exp(-\ln 2)$를 두 가지로 구해 봅니다.

- [[laws-of-logarithm|로그의 성질]]의 (2)에 의해 $\ln(2^{-1}) = -\ln 2$이고 $2^{-1} \in \mathbb{R}_{>0}$이므로, (1)에 의해 $\exp(-\ln 2) = 2^{-1}$입니다.
- (5)를 $x = \ln 2$에 쓰면 $\exp(\ln 2)\exp(-\ln 2) = 1$, 곧 $2\exp(-\ln 2) = 1$이므로 [[real-number-arithmetic]]의 (K8)의 (iii)에 의해 $\exp(-\ln 2) = 2^{-1}$입니다.

두 길의 답이 같습니다. [[natural-logarithm|자연로그]]의 (6)에 의해 $2^{-1} < \ln 2 < 1$이므로, (2)에 의해 $\exp(2^{-1}) < \exp(\ln 2) = 2 < \exp(1)$이기도 합니다.
:::

:::counterexample[$0$에서의 값을 빼면]
(5)의 조건 "$F(0) = 1$"을 빼면 함수가 하나로 정해지지 않습니다. $F = 2\exp$, 곧 $F(x) = 2\exp(x)$로 정한 $F : \mathbb{R} \to \mathbb{R}$는 [[derivative-rules|미분의 규칙]]의 (6)에 의해 미분가능하고 $F'(x) = 2\exp(x) = F(x)$이지만 $F(0) = 2$이므로 $\exp$가 아닙니다. 모든 점에서 값이 $0$인 상수함수도 [[derivative]]의 (1)에 의해 도함수가 자기 자신($0$)과 같지만 $\exp$가 아닙니다. 증명에서 $F(0) = 1$은 $F(x)\exp(-x)$의 일정한 값이 $1$이라는 것을 정하는 데 쓰입니다.
:::

## 확인 질문

:::check[$\exp(x) = 1$인 실수 $x$는 몇 개인가?]
하나, $x = 0$뿐입니다. (1)에 의해 $\exp(x) = 1$인 것은 정확히 $\ln 1 = x$일 때이고, [[natural-logarithm|자연로그]]의 (1)에 의해 $\ln 1 = 0$입니다.
:::

:::check[$h(x) = \exp(2x + 1)$로 정한 $h : \mathbb{R} \to \mathbb{R}$의 $0$에서의 미분계수는?]
$2\exp(1)$입니다. $g(x) = 2x + 1$로 정한 $g : \mathbb{R} \to \mathbb{R}$는 [[derivative]]의 (1)에 의해 미분가능하고 $g'(x) = 2$이며, $h = \exp \circ g$입니다. (3)과 [[chain-rule|연쇄 법칙]]의 (1)에 의해 $h'(0) = \exp'(g(0))\,g'(0) = \exp(1) \cdot 2$입니다.
:::
