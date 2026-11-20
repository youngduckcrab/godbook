---
title: 로그의 성질
title_en: Properties of the Logarithm
aliases: [로그 법칙, 로그의 곱셈 법칙, 자연로그의 성질, laws of logarithms, properties of the logarithm, logarithm of a product]
kind: theorem
field: real-analysis
msc: ["26A09"]
level: undergrad
summary: "양의 실수 x, y 에 대하여 ln(xy) = ln x + ln y, ln(x⁻¹) = −ln x 이고, 0 이상인 정수 n 에 대하여 ln(xⁿ) = n ln x, 제곱근에 대하여 ln √x = (ln x)/2 이다. 자연로그는 위로도 아래로도 유계가 아니며, 양의 실수 전체에서 ℝ 로의 전단사이다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, mathematical-induction, injective-surjective-bijective, power-of-a-real-number, square-root-exists, archimedean-property, interval, real-valued-function, bounded-function, continuous-function, derivative, chain-rule, intermediate-value-theorem, natural-logarithm]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.4절(5.4.1 소절 The logarithm) Proposition 5.4.1 의 (iii)(iv)(v)와 증명 (p.207–208)
    checked: original
    note: "출처의 Proposition 5.4.1(5.4.1 소절, p.207, PDF 그림으로 대조)의 (iii)은 L 이 순증가이고 전단사이며 lim_{x→0} L(x) = −∞, lim_{x→∞} L(x) = ∞ 라는 것, (iv)는 L(xy) = L(x) + L(y), (v)는 유리수 q 와 x > 0 에서 L(x^q) = qL(x) 라는 것이다. (1)은 (iv)와 같은 진술이다. 출처는 (iv)를 치환 u = yt 로 ∫_1^x dt/t = ∫_y^{xy} du/u = L(xy) − L(y) 로 증명한다(p.207). 이 항목은 치환 대신 x 를 ln(xy) 로 보내는 함수의 도함수가 x⁻¹ 이라는 것과 자연로그의 (4)로 증명한다. (2)의 첫 등식은 출처 (iii)의 증명 안의 0 = L(x/x) = L(x) + L(1/x)(p.208)와 같다. (3)의 첫 등식은 출처가 (iii)과 (v)의 증명에서 (iv)와 귀납으로 얻는 L(xⁿ) = nL(x)(n ∈ ℕ, p.208)에 n = 0 을 더한 것이고, 둘째 등식은 출처 (v)의 증명의 L(x⁻ⁿ) = −nL(x)(p.208)를 이 사이트의 약속(음의 지수를 쓰지 않는다)에 따라 (x⁻¹)ⁿ 로 쓴 것이다. 출처 연습문제 2.5.16(2.5.7 소절, p.99)의 힌트도 ln(2ⁿ) = n ln 2 를 쓰게 한다. 출처 (v)의 유리수 q 일반은 x^{1/m} 과 유리수 지수의 정의(5.4절 첫머리, p.207)에 기대고, 이 항목은 0 이상인 정수의 두 꼴 (3)과 q = 1/2 인 꼴 (4)만 진술한다. (5)는 출처 (iii)의 두 극한을 극한 기호 없이 K, δ 꼴로 쓴 것이다. 출처는 L(2) ≥ 1/2, L(2ⁿ) = nL(2), 아르키메데스 성질로 L(2ⁿ) > y 인 n 을 잡고, x → 0 쪽은 lim L(x) = lim −L(1/x) = lim −L(x) 로 x → ∞ 쪽에 넘긴다(p.208). 이 항목의 증명도 2ⁿ 과 아르키메데스 성질을 쓰는 같은 발상이고, δ 쪽은 극한을 넘기지 않고 (2⁻¹)^m 으로 직접 잡는다. (6)은 출처 (iii)의 전단사이다. 출처는 y > 0 이면 (1, 2ⁿ) 에서 사잇값 정리로, 음수는 x = 2⁻ⁿ 을 써서 '위와 같이' 얻는다(p.208). 이 항목은 (5)로 얻은 두 점 사이에서 모든 실수 y 를 한 번에 다룬다. 출처 연습문제 5.4.10(5.4.3 소절, p.213)은 L(xy) = L(x) + L(y) 와 L(e) = 1 을 만족하는 연속함수가 ln 하나뿐임을 보이게 한다(이 항목은 그 유일성을 싣지 않는다). 예시 '로그가 10 을 넘는 곳'은 출처 (iii)의 증명에서 L(2ⁿ) > y 인 n 을 잡는 단계를 y = 10 에 쓴 것과 같은 발상이다. 확인 질문 1 이 쓰는 몫과 거듭제곱의 법칙은 출처 연습문제 5.4.2 d)(5.4.3 소절, p.211)가 밑이 b 인 로그에 대해 보이게 하는 log_b(xy) = log_b(x) + log_b(y), log_b(x^y) = y log_b(x) 와 같은 꼴이다. 확인 질문 2 의 존재는 출처 (iii)의 전사를 y = −3 에 쓴 것이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 확인. 경계값에서 거짓이던 예시의 일반 문장 2개와 메모의 부정 주장 2개를 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-20
---

:::statement
$\mathbb{R}_{>0}$과 자연로그 $\ln$은 [[natural-logarithm]]의 것이다. 거듭제곱 $x^n$($n$은 $0$ 이상인 정수)은 [[power-of-a-real-number]]의 것이고, 제곱근 $\sqrt{x}$는 [[square-root-exists]]의 것이며, $x^{-1}$은 [[real-number-arithmetic]]의 역수이다. 위로 유계와 아래로 유계는 [[bounded-function]]의 것이고, 전단사는 [[injective-surjective-bijective|단사·전사·전단사]] 항목의 것이다. 아래에서 $x$, $y$는 $\mathbb{R}_{>0}$의 원소이다. 그러면 $xy$, $x^{-1}$, $xy^{-1}$, $\sqrt{x}$와 $0$ 이상인 정수 $n$에 대한 $x^n$, $(x^{-1})^n$도 $\mathbb{R}_{>0}$의 원소이다(아래 증명).

1. (곱) $\ln(xy) = \ln x + \ln y$이다.
2. (역수와 몫) $\ln(x^{-1}) = -\ln x$이고 $\ln(xy^{-1}) = \ln x - \ln y$이다.
3. ($0$ 이상인 정수 지수) $0$ 이상인 모든 정수 $n$에서 $\ln(x^n) = n \ln x$이고 $\ln\bigl((x^{-1})^n\bigr) = -n \ln x$이다.
4. (제곱근) $\ln(\sqrt{x}) = 2^{-1} \ln x$이다.
5. (위로도 아래로도 유계가 아니다) 모든 실수 $M$에 대하여, 양의 실수 $K$가 있어 $K < x$인 모든 $x \in \mathbb{R}_{>0}$에서 $M < \ln x$이고, 양의 실수 $\delta$가 있어 $x < \delta$인 모든 $x \in \mathbb{R}_{>0}$에서 $\ln x < M$이다. 따라서 $\ln$은 위로 유계가 아니고 아래로 유계도 아니다.
6. (전단사) $\ln : \mathbb{R}_{>0} \to \mathbb{R}$는 전단사이다. 곧 모든 실수 $y$에 대하여 $\ln x = y$인 $x \in \mathbb{R}_{>0}$가 정확히 하나 있다.
:::

:::english
The set $\mathbb{R}_{>0}$ and the natural logarithm $\ln$ are those of the entry on the natural logarithm. The power $x^n$ ($n$ a nonnegative integer) is that of the entry on powers of a real number, the square root $\sqrt{x}$ is that of the entry on the existence of square roots, and $x^{-1}$ is the reciprocal of the entry on real number arithmetic. Bounded above and bounded below are those of the entry on bounded functions, and bijectivity is that of the entry on injective, surjective and bijective functions. Below, $x$ and $y$ are elements of $\mathbb{R}_{>0}$. Then $xy$, $x^{-1}$, $xy^{-1}$, $\sqrt{x}$, and $x^n$, $(x^{-1})^n$ for nonnegative integers $n$ are also elements of $\mathbb{R}_{>0}$ (proved below).

1. (Product) $\ln(xy) = \ln x + \ln y$.
2. (Reciprocal and quotient) $\ln(x^{-1}) = -\ln x$ and $\ln(xy^{-1}) = \ln x - \ln y$.
3. (Nonnegative integer exponents) For every nonnegative integer $n$, $\ln(x^n) = n \ln x$ and $\ln\bigl((x^{-1})^n\bigr) = -n \ln x$.
4. (Square root) $\ln(\sqrt{x}) = 2^{-1} \ln x$.
5. (Unbounded above and below) For every real number $M$, there is a positive real number $K$ such that $M < \ln x$ for all $x \in \mathbb{R}_{>0}$ with $K < x$, and there is a positive real number $\delta$ such that $\ln x < M$ for all $x \in \mathbb{R}_{>0}$ with $x < \delta$. Hence $\ln$ is neither bounded above nor bounded below.
6. (Bijectivity) $\ln : \mathbb{R}_{>0} \to \mathbb{R}$ is bijective. That is, for every real number $y$ there is exactly one $x \in \mathbb{R}_{>0}$ with $\ln x = y$.
:::

## 직관

자연로그는 곱셈을 덧셈으로 바꿉니다. (1)을 넓이로 읽으면 이렇습니다. $1 < x$, $1 < y$일 때 $\ln(xy) - \ln y$는 곡선 $t^{-1}$ 아래 $y$부터 $xy$까지의 넓이입니다. 구간 $[1, x]$를 가로로 $y$배 늘리면 $[y, xy]$가 되고, 그동안 곡선의 높이는 $y$분의 $1$로 줄어드므로 넓이는 그대로 $\ln x$입니다. 이 증명은 넓이를 늘리는 대신 도함수로 같은 것을 봅니다. $x$를 $\ln(xy)$로 보내는 함수의 도함수도 $x^{-1}$이므로, [[natural-logarithm|자연로그]]의 (4)에 의해 이 함수는 $\ln$과 상수만큼 다르고, 그 상수는 $x = 1$에서의 값 $\ln y$입니다.

(1)에서 나머지가 차례로 나옵니다. $x$와 $x^{-1}$을 곱하면 $1$이고 $\ln 1 = 0$이므로 (2)가, 같은 수를 $n$번 곱하면 로그는 $n$번 더해지므로 (3)이, $\sqrt{x}$를 두 번 곱하면 $x$이므로 (4)가 나옵니다. 지수 $n = 0$이면 $x^0 = 1$이므로 (3)의 두 등식은 양쪽이 모두 $0$입니다.

(5)는 로그가 끝없이 커지고 끝없이 작아진다는 것입니다. $\ln 2$가 양수이므로 $2$를 곱할 때마다 로그는 같은 양 $\ln 2$만큼 커지고, 아르키메데스 성질에 의해 그것을 충분히 여러 번 더하면 어떤 수 $M$보다도 커집니다. 거꾸로 $2^{-1}$을 곱할 때마다 $\ln 2$만큼 작아지므로 $0$에 가까운 곳에서 로그는 어떤 수보다도 작아집니다. $M \le 0$이어도 (5)는 그대로 참입니다(그때도 $K$와 $\delta$는 양수로 잡힙니다). (6)은 (5)로 어떤 실수 $y$든 두 값 사이에 끼우고 사잇값 정리를 쓴 것입니다. $y = 0$이면 그 점은 $1$입니다.

## 증명

:::idea
$y$를 고정하고 $x$를 $\ln(xy)$로 보내는 함수를 미분하면 $x^{-1}$이 되므로, 자연로그의 유일성에서 (1)이 나온다. 나머지는 (1)과 순증가, 아르키메데스 성질, 사잇값 정리로 얻는다.
:::

:::hint
$u(x) = yx$로 정한 함수를 $\mathbb{R}_{>0}$에서 $\mathbb{R}_{>0}$로의 함수로 보고 연쇄 법칙을 쓰세요. $(yx)^{-1}\,y$를 정리하면 무엇이 됩니까?
:::

:::hint
(5)에서는 $\ln(2^n) = n \ln 2$와 $0 < \ln 2$를 쓰세요. (6)에서는 (5)로 $\ln a < y < \ln b$인 두 양수 $a$, $b$를 찾은 뒤 $[a, b]$에서 사잇값 정리를 쓰세요.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고 (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (6)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이고, "자연로그 (4)"는 [[natural-logarithm]]의 번호, "거듭제곱 (3)"은 [[power-of-a-real-number]]의 번호이다.

**$\mathbb{R}_{>0}$에 드는 수.** $0 < x$, $0 < y$이면 (W4)에 의해 $0 < xy$이다. [[natural-logarithm]]의 진술에 의해 $x^{-1}$, $y^{-1} \in \mathbb{R}_{>0}$이고, 따라서 $xy^{-1} \in \mathbb{R}_{>0}$이다. 거듭제곱 (6)의 (i)에 의해 $0 < x^n$이고 $0 < (x^{-1})^n$이다. [[square-root-exists]]의 (1)에 의해 $0 < \sqrt{x}$이고 $\sqrt{x}\sqrt{x} = x$이다.

**1의 증명.** $y$를 고정한다. $u(x) = yx$로 정한 함수 $u : \mathbb{R}_{>0} \to \mathbb{R}$는 [[derivative]]의 (1)에 의해(그 항목의 $m$ 자리에 $y$, $k$ 자리에 $0$) 미분가능한 함수이고 모든 $x$에서 $u'(x) = y$이다. 앞 문단에 의해 $u$의 모든 값은 $\mathbb{R}_{>0}$에 속하고, 자연로그 (2)에 의해 $\ln : \mathbb{R}_{>0} \to \mathbb{R}$는 미분가능한 함수이다. [[chain-rule|연쇄 법칙]]의 (3), (2)를 $I_1 = I_2 = \mathbb{R}_{>0}$에 쓰면 $G = \ln \circ u : \mathbb{R}_{>0} \to \mathbb{R}$는 미분가능한 함수이고, 모든 $x$에서
$$
G'(x) = \ln'(u(x))\,u'(x) = (yx)^{-1}\,y
$$
이다. (K12)의 (vi)와 (K1), (K2), (K4)에 의해 $(yx)^{-1}y = x^{-1}(y^{-1}y) = x^{-1}$이다. 자연로그 (4)에 의해 모든 $x$에서 $G(x) = \ln x + G(1)$이고, (K4)에 의해 $G(1) = \ln(y \cdot 1) = \ln y$이다. $G(x) = \ln(yx) = \ln(xy)$((K1))이므로 $\ln(xy) = \ln x + \ln y$이다.

**2의 증명.** (K8)의 (iii)에 의해 $xx^{-1} = 1$이므로, 1과 자연로그 (1)에 의해 $0 = \ln 1 = \ln(xx^{-1}) = \ln x + \ln(x^{-1})$이다. (K8)의 (ii)(덧셈 역원의 유일성)에 의해 $\ln(x^{-1}) = -\ln x$이다. 1을 $x$와 $y^{-1}$에 쓰면 $\ln(xy^{-1}) = \ln x + \ln(y^{-1}) = \ln x + (-\ln y) = \ln x - \ln y$이다.

**3의 증명.** $x \in \mathbb{R}_{>0}$을 고정하고, $0$ 이상인 정수 $n$에 대한 명제 "$\ln(x^n) = n \ln x$"를 시작점이 $0$인 [[mathematical-induction|수학적 귀납법]]으로 보인다. $n = 0$이면 거듭제곱의 정의에 의해 $x^0 = 1$이고 자연로그 (1)과 (K9)에 의해 $\ln(x^0) = 0 = 0 \cdot \ln x$이다. $0$ 이상인 정수 $k$에서 $\ln(x^k) = k \ln x$라 하자. 거듭제곱의 정의에 의해 $x^{k+1} = x^k x$이고 $x^k \in \mathbb{R}_{>0}$이므로, 1과 귀납 가정, (K4), (K12)의 (i)에 의해
$$
\begin{aligned}
\ln(x^{k+1}) &= \ln(x^k) + \ln x \\
&= k \ln x + 1 \cdot \ln x \\
&= (k + 1) \ln x
\end{aligned}
$$
이다. 따라서 $0$ 이상인 모든 정수 $n$에서 $\ln(x^n) = n \ln x$이다.

$x^{-1} \in \mathbb{R}_{>0}$이므로 이 결과를 $x^{-1}$에 쓰고 2와 (K12)의 (ii)를 쓰면 $\ln\bigl((x^{-1})^n\bigr) = n \ln(x^{-1}) = n(-\ln x) = -n \ln x$이다.

**4의 증명.** $\sqrt{x}\sqrt{x} = x$이고 $\sqrt{x} \in \mathbb{R}_{>0}$이므로 1과 (K4), (K7), (K12)의 (i)에 의해 $\ln x = \ln(\sqrt{x}) + \ln(\sqrt{x}) = (1 + 1)\ln(\sqrt{x}) = 2\ln(\sqrt{x})$이다. 양변에 $2^{-1}$을 곱하면 (K2), (K8)의 (iii), (K4)에 의해 $\ln(\sqrt{x}) = 2^{-1} \ln x$이다.

**5의 증명.** $M$을 실수라 하자. 자연로그 (6)에 의해 $0 < \ln 2$이다.

$K$ 쪽: [[archimedean-property|아르키메데스 성질]]의 (2)를 그 항목의 $x$ 자리에 $\ln 2$, $y$ 자리에 $M$을 넣어 쓰면 $M < n \ln 2$인 자연수 $n$이 있다. $K = 2^n$으로 두면 거듭제곱 (6)의 (i)에 의해 $K$는 양의 실수이고, 3에 의해 $\ln K = n \ln 2$이다. $x \in \mathbb{R}_{>0}$이고 $K < x$이면 자연로그 (3)에 의해 $\ln K < \ln x$이므로, 순서 성질 (1)의 (v)에 의해 $M < n \ln 2 = \ln K < \ln x$이다.

$\delta$ 쪽: 아르키메데스 성질의 (2)를 $x$ 자리에 $\ln 2$, $y$ 자리에 $-M$을 넣어 쓰면 $-M < m \ln 2$인 자연수 $m$이 있다. $2 \in \mathbb{R}_{>0}$이므로 $2^{-1} \in \mathbb{R}_{>0}$이고, $\delta = (2^{-1})^m$으로 두면 $\delta$는 양의 실수이며 3에 의해 $\ln \delta = -m \ln 2$이다. 순서 성질 (3)의 (iii)과 (K9)의 $-(-M) = M$에 의해 $-(m \ln 2) < M$이다. $x \in \mathbb{R}_{>0}$이고 $x < \delta$이면 자연로그 (3)에 의해 $\ln x < \ln \delta = -m \ln 2 < M$이다.

위로 유계가 아니라는 것: 실수 $B$가 모든 $x \in \mathbb{R}_{>0}$에서 $\ln x \le B$를 만족한다고 하자. 위의 $K$ 쪽을 $M = B$로 쓰고 $x = K + 1$을 넣자. 순서 성질 (5)의 (ii)와 (2)의 (ii)에 의해 $0 < K < K + 1$이므로 $K + 1 \in \mathbb{R}_{>0}$이고 $B < \ln(K + 1)$인데, 이것은 순서 성질 (1)의 (i)에 의해 $\ln(K + 1) \le B$와 함께 성립하지 않는다. 따라서 [[bounded-function]]의 정의에 의해 $\ln$은 위로 유계가 아니다.

아래로 유계가 아니라는 것: 실수 $B$가 모든 $x \in \mathbb{R}_{>0}$에서 $B \le \ln x$를 만족한다고 하자. 위의 $\delta$ 쪽을 $M = B$로 쓰고 $x = \delta/2$를 넣자. 순서 성질 (8)에 의해 $0 < \delta/2 < \delta$이므로 $\ln(\delta/2) < B$인데, 이것은 $B \le \ln(\delta/2)$와 함께 성립하지 않는다. 따라서 $\ln$은 아래로 유계가 아니다.

**6의 증명.** 단사는 자연로그 (3)이다. 전사를 보이자. $y$를 실수라 하자. 5를 $M = y$로 쓰고 얻은 $K$, $\delta$로 $a = \delta/2$, $b = K + 1$로 두면, 5의 증명에서처럼 $a$, $b \in \mathbb{R}_{>0}$이고 $\ln a < y < \ln b$이다. $b \le a$이면 자연로그 (3)에 의해 $\ln b \le \ln a$인데, 이것은 순서 성질 (1)의 (v)로 얻는 $\ln a < \ln b$와 함께 성립하지 않으므로(순서 성질 (1)의 (i)) 순서 성질 (1)의 (iii)에 의해 $a < b$이다. [[interval]]의 (4)에 의해 $[a, b] \subseteq \mathbb{R}_{>0}$이고, 자연로그 (2)에 의해 $\ln$은 연속함수이므로 $[a, b]$에서 연속이다. [[intermediate-value-theorem|사잇값 정리]]의 (3)과 (1)을 $S = \mathbb{R}_{>0}$, $g = \ln$에 쓰면 $a < c < b$이고 $\ln c = y$인 실수 $c$가 있고, $c \in \mathbb{R}_{>0}$이다. 따라서 $\ln : \mathbb{R}_{>0} \to \mathbb{R}$는 전사이고, 단사이므로 전단사이다. "정확히 하나"는 전사(있다)와 단사(자연로그 (3)의 "$\ln x = \ln x'$이면 $x = x'$")를 합친 것이다. $\blacksquare$
:::

## 예시와 반례

:::example[$\ln 3$의 어림: 곱으로 쪼개기]
[[natural-logarithm|자연로그]]의 (6)을 $x = 3$에 바로 쓰면 $1 - \tfrac{1}{3} < \ln 3 < 3 - 1$, 곧 $\tfrac{2}{3} < \ln 3 < 2$입니다. $3 = 2 \cdot \tfrac{3}{2}$이므로 (1)에 의해 $\ln 3 = \ln 2 + \ln\tfrac{3}{2}$이고, 같은 (6)을 $x = 2$와 $x = \tfrac{3}{2}$에 쓰면 $\tfrac{1}{2} < \ln 2 < 1$, $\tfrac{1}{3} < \ln\tfrac{3}{2} < \tfrac{1}{2}$입니다. [[order-properties-of-reals|순서 성질]]의 (2)의 (iv)로 더하면
$$
\tfrac{5}{6} < \ln 3 < \tfrac{3}{2}
$$
이고, 이것은 바로 쓴 어림보다 양쪽 모두 좁습니다($\tfrac{2}{3} < \tfrac{5}{6}$, $\tfrac{3}{2} < 2$).
:::

:::example[로그가 $10$을 넘는 곳]
(5)의 증명을 $M = 10$으로 따라가 봅니다. 자연로그의 (6)에 의해 $\tfrac{1}{2} < \ln 2$이므로 $20 \ln 2 > 20 \cdot \tfrac{1}{2} = 10$입니다. 따라서 $n = 20$, $K = 2^{20} = 1048576$으로 둘 수 있고, $2^{20} < x$인 모든 양의 실수 $x$에서 $10 < 20 \ln 2 = \ln(2^{20}) < \ln x$입니다. 이 증명은 로그가 $10$을 넘는 곳을 하나 보여 줄 뿐이고, 처음 넘는 점이 어디인지는 말하지 않습니다. 같은 방법으로 $(2^{-1})^{20}$보다 작은 양수 $x$에서는 $\ln x < -10$입니다.
:::

:::counterexample[$x = y = 1$에서 $\ln(x + y)$와 $\ln x + \ln y$가 다른 예]
(1)은 곱에 대한 것이고 합에 대해서는 일반적으로 성립하지 않습니다. $x = y = 1$이면 $\ln(1 + 1) = \ln 2$이고 [[natural-logarithm|자연로그]]의 (6)에 의해 $0 < \ln 2$이지만, $\ln 1 + \ln 1 = 0$입니다. 한편 $x = y = 2$이면 $2 + 2 = 2 \cdot 2$이므로 (1)에 의해 $\ln(2 + 2) = \ln 2 + \ln 2$입니다. 일반적으로 (1)과 자연로그의 (3)에 의해 $\ln(x + y) = \ln x + \ln y$인 것은 정확히 $\ln(x + y) = \ln(xy)$일 때, 곧 정확히 $x + y = xy$일 때입니다.
:::

## 확인 질문

:::check[양의 실수 $x$, $y$에 대하여 $\ln\bigl(x^3 (y^2)^{-1}\bigr)$를 $\ln x$와 $\ln y$로 나타내면?]
$3 \ln x - 2 \ln y$입니다. $x^3$, $y^2$은 양수이므로 (2)의 몫의 꼴에 의해 $\ln\bigl(x^3 (y^2)^{-1}\bigr) = \ln(x^3) - \ln(y^2)$이고, (3)에 의해 $\ln(x^3) = 3 \ln x$, $\ln(y^2) = 2 \ln y$입니다.
:::

:::check[$\ln x = -3$인 양의 실수 $x$가 있는가? 있다면 $1$보다 큰가?]
(6)에 의해 정확히 하나 있습니다. $-3 < 0 = \ln 1$이므로 [[natural-logarithm|자연로그]]의 (3)에 의해 $x < 1$입니다. 더 좁히면, $x \ne 1$이므로 자연로그의 (6)의 왼쪽 부등식 $1 - x^{-1} < \ln x = -3$에서 양변에 $x^{-1} + 3$을 더해 $4 < x^{-1}$이고, [[order-properties-of-reals|순서 성질]]의 (6)의 (ii)와 $(x^{-1})^{-1} = x$에 의해 $x < 4^{-1}$입니다.
:::
