---
title: 복리의 극한
title_en: Limit of Compound Interest
aliases: [연속 복리, (1 + 1/n)ⁿ 의 극한, (1 + x/n)ⁿ 의 극한, e 의 극한 표현, compound interest limit, limit of (1 + x/n)^n]
kind: theorem
field: real-analysis
msc: ["26A09"]
level: undergrad
summary: "실수 x 에 대하여 n 번째 항이 (1 + x/n)ⁿ 인 수열은 exp(x) 로 수렴한다. 밑 1 + x/n 은 정확히 −x < n 일 때 양수이고, 밑이 0 이하인 항이 있어도 수열은 exp(x) 로 수렴한다. 특히 (1 + 1/n)ⁿ 은 e 로 수렴하고, 모든 자연수 n 에서 (1 + 1/n)ⁿ < e < (1 + 1/n)ⁿ⁺¹ 이다."
requires: [real-number-arithmetic, order-properties-of-reals, prime-number, archimedean-property, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, tail-of-a-sequence, limit-of-sum-and-product, squeeze-lemma, continuous-function, sequences-and-continuity, natural-logarithm, laws-of-logarithm, exponential-function, laws-of-exponential-function, real-power]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.4절(5.4.3 소절 Exercises) 연습문제 5.4.5 와 그 Note (p.212); 5.4.2 소절 e 의 정의 문단 (p.211); 5.4.3 소절 연습문제 5.4.6 a) (p.212)
    checked: original
    note: "(2)는 출처 연습문제 5.4.5(5.4.3 소절, p.212, PDF 그림으로 대조; 'Show eˣ = lim_{n→∞} (1 + x/n)ⁿ. Hint: Take the logarithm.')를 진술로 올린 것이다. 출처의 연습문제는 x 의 범위와 1 + x/n ≤ 0 인 항을 말하지 않는다. 이 항목은 모든 실수 x 에 대해 거듭제곱으로 모든 항을 정하고, 밑이 양수인 n 을 (1)로 밝힌 뒤 꼬리로 넘긴다. 증명은 출처의 힌트대로 로그를 취하고, n ln(1 + x/n) 의 수렴을 자연로그의 어림 1 − t⁻¹ ≤ ln t ≤ t − 1 과 조임 정리로 보인 다음 exp 의 연속으로 돌아온다. 같은 연습문제의 Note(p.212)는 (1 + x/n)ⁿ 을 이율 x 로 1 달러를 맡기고 1 년에 n 번 복리로 계산한 잔고라 하고, eˣ 를 연속 복리의 결과라 적는다. 직관 절의 이자 이야기는 이 Note 와 같은 비유이다. (3)의 e 는 출처 5.4.2 소절(p.211)의 정의 e := exp(1) 이고, (3)은 연습문제 5.4.5 에서 x = 1 인 경우이다. (4)의 증명에 쓰는 어림을 자연수 k 에 대해 쓴 (k + 1)⁻¹ < ln(1 + 1/k) < k⁻¹ 을 k = 1, …, n − 1 에 대해 더하면 출처 연습문제 5.4.6 a)(5.4.3 소절, p.212; n ≥ 2 에서 Σ_{k=2}^{n} 1/k ≤ ln(n) ≤ Σ_{k=1}^{n−1} 1/k)의 부등식이 나온다. 예시 'x = −3 일 때의 앞쪽 항'과 두 확인 질문의 수열은 연습문제 5.4.5 의 수열에 x = −3, −1, 2 를 넣은 것이다. 예시 '(4)에 n = 1, 2, 5 를 넣은 어림'과 반례 '밑이 1 로 수렴해도 거듭제곱의 극한이 1 이 아닐 수 있는 예'의 수열은 같은 연습문제에서 x = 1 인 수열이고, 그 반례의 첫 문장(1 + 1/n 이 1 로 수렴한다)은 출처 Example 2.2.14(2.2.4 소절, p.70; n^{1/n} 의 극한)의 증명 안에 '(n + 1)/n = 1 + 1/n 의 극한은 1' 로 나온다."
status: reviewed
review_note: "2026-11-21 자기 검토(docs/self-review.md)와 지휘자의 확인. 예시의 틀린 문장 1건과 증명의 근거 번호 2건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-21
---

:::statement
수열과 그 항, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 꼬리는 [[tail-of-a-sequence]]의 것이다. 거듭제곱 $a^n$($a$는 실수, $n$은 $0$ 이상인 정수)은 [[power-of-a-real-number]]의 것이다. $\mathbb{R}_{>0}$과 자연로그 $\ln$은 [[natural-logarithm]]의 것이고, 지수함수 $\exp$는 [[exponential-function]]의 것이며, 수 $e = \exp(1)$은 [[real-power]]의 것이다. 아래에서 $x$는 실수이고, 자연수 $n$에 대하여 $x/n$은 $x n^{-1}$이다.

**복리의 수열.** 자연수 $n$마다 $1 + x/n$은 실수이므로 거듭제곱 $(1 + x/n)^n$이 정해지고, [[sequence]]의 (1)에 의해 $n$번째 항이 $(1 + x/n)^n$인 수열이 있다. 밑 $1 + x/n$이 $0$ 이하인 항이 있을 수 있다(아래 (1)).

1. (밑이 양수인 항) 자연수 $n$에 대하여 $0 < 1 + x/n$인 것은 정확히 $-x < n$일 때이다. 따라서 $-1 < x$이면(특히 $0 \le x$이면) 모든 자연수 $n$에서 $0 < 1 + x/n$이다. 또 어느 $x$에서나 $-x < N$인 자연수 $N$이 있고, 그런 $N$ 이상인 모든 자연수 $n$에서 $0 < 1 + x/n$이다. $0 < 1 + x/n$인 자연수 $n$에서는 $(1 + x/n)^n \in \mathbb{R}_{>0}$이고
   $$
   \begin{aligned}
   &\ln\bigl((1 + x/n)^n\bigr) \\
   &\quad = n \ln(1 + x/n), \\
   &(1 + x/n)^n \\
   &\quad = \exp\bigl(n \ln(1 + x/n)\bigr)
   \end{aligned}
   $$
   이다.
2. (복리의 극한) $n$번째 항이 $(1 + x/n)^n$인 수열은 $\exp(x)$로 수렴한다. 곧
   $$
   \lim_{n \to \infty} (1 + x/n)^n = \exp(x)
   $$
   이다. 밑이 $0$ 이하인 항이 있어도((1)에 의해 그런 $n$은 $n \le -x$인 것뿐이다) 그렇다. [[real-power]]의 (5)에 의해 $\exp(x)$는 $e^x$와 같은 수이다.
3. ($e$) $\displaystyle\lim_{n \to \infty} (1 + 1/n)^n = e$이다.
4. ($e$의 어림) 모든 자연수 $n$에서
   $$
   (1 + 1/n)^n < e < (1 + 1/n)^{n+1}
   $$
   이다. 특히 $n = 1$이면 $2 < e < 4$이다.
:::

:::english
Sequences and their terms, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, limits of sequences and uniqueness of limits, and tails are those of the entry on tails of sequences. The power $a^n$ ($a$ real, $n$ a nonnegative integer) is that of the entry on powers of real numbers. $\mathbb{R}_{>0}$ and the natural logarithm $\ln$ are those of the entry on the natural logarithm, the exponential function $\exp$ is that of the entry on the exponential function, and the number $e = \exp(1)$ is that of the entry on real powers. Below, $x$ is a real number, and for a natural number $n$, $x/n$ means $x n^{-1}$.

**The compound interest sequence.** For each natural number $n$, $1 + x/n$ is a real number, so the power $(1 + x/n)^n$ is defined, and by (1) of the entry on sequences there is a sequence whose $n$th term is $(1 + x/n)^n$. Some terms may have a base $1 + x/n$ that is $0$ or less (see (1) below).

1. (Terms with a positive base) For a natural number $n$, we have $0 < 1 + x/n$ exactly when $-x < n$. Hence if $-1 < x$ (in particular if $0 \le x$), then $0 < 1 + x/n$ for every natural number $n$. Moreover, for every $x$ there is a natural number $N$ with $-x < N$, and for such an $N$ we have $0 < 1 + x/n$ for every natural number $n \ge N$. For a natural number $n$ with $0 < 1 + x/n$ we have $(1 + x/n)^n \in \mathbb{R}_{>0}$ and
   $$
   \begin{aligned}
   &\ln\bigl((1 + x/n)^n\bigr) \\
   &\quad = n \ln(1 + x/n), \\
   &(1 + x/n)^n \\
   &\quad = \exp\bigl(n \ln(1 + x/n)\bigr).
   \end{aligned}
   $$
2. (The compound interest limit) The sequence whose $n$th term is $(1 + x/n)^n$ converges to $\exp(x)$; that is,
   $$
   \lim_{n \to \infty} (1 + x/n)^n = \exp(x).
   $$
   This holds even if some terms have a base that is $0$ or less (by (1), this happens only for $n \le -x$). By (5) of the entry on real powers, $\exp(x)$ is the same number as $e^x$.
3. ($e$) $\displaystyle\lim_{n \to \infty} (1 + 1/n)^n = e$.
4. (Bounds for $e$) For every natural number $n$,
   $$
   (1 + 1/n)^n < e < (1 + 1/n)^{n+1}.
   $$
   In particular, for $n = 1$ we get $2 < e < 4$.
:::

## 직관

$1$원을 연이율 $x$로 맡기고(예: $x = 0.05$는 $5\%$), 한 해를 $n$번으로 나눠 매번 그때까지의 잔고의 $x/n$배를 이자로 붙인다고 합시다. 한 번 이자가 붙을 때마다 잔고가 $1 + x/n$배가 되므로 한 해 뒤의 잔고는 $(1 + x/n)^n$입니다. 이자를 붙이는 횟수 $n$을 한없이 늘린 극한이 "연속 복리"이고, (2)는 그 값이 $\exp(x)$라는 것입니다. 비유에서 이율은 $x$, 횟수는 $n$, 잔고는 수열의 항에 해당합니다. 비유가 맞지 않는 곳은 $n \le -x$인 항입니다. 이때 한 번의 이율 $x/n$이 $-1$ 이하여서 한 번에 잔고를 다 잃거나 그보다 더 잃는 셈이고, 잔고가 $0$ 이하가 됩니다. 돈으로는 뜻이 없지만 수열의 항으로는 정해져 있습니다.

밑 $1 + x/n$은 $1$로 다가가지만 지수 $n$은 한없이 커지므로, "밑이 $1$로 가니 극한도 $1$"이라고 할 수 없습니다(아래 반례). 그래서 로그를 취합니다. $\ln$은 $n$제곱을 $n$배로 바꾸어 $n \ln(1 + x/n)$을 남깁니다. [[natural-logarithm|자연로그]]의 어림 $1 - t^{-1} \le \ln t \le t - 1$에 밑이 양수인 $n$에서 $t = 1 + x/n$을 넣고 $n$을 곱하면 이 수가 $x(1 + x/n)^{-1}$과 $x$ 사이에 끼고, 두 끝이 모두 $x$로 수렴합니다. 마지막에 $\exp$로 되돌립니다.

(4)의 두 어림은 $(n + 1)^{-1} < \ln(1 + 1/n) < n^{-1}$에서 나옵니다. [[natural-logarithm|자연로그]]의 (5)와 [[laws-of-logarithm|로그의 성질]]의 (2)에 의해 $\ln(1 + 1/n)$은 $t^{-1}$의 $n$부터 $n + 1$까지의 적분이고, 폭이 $1$인 구간에서 $t^{-1}$이 $(n + 1)^{-1}$과 $n^{-1}$ 사이에 있다는 그림입니다. (4)는 $x = 1$일 때 모든 항이 $e$보다 작다는 것을 말하지만, 항이 $n$에 따라 커진다는 것은 이 항목이 증명하지 않습니다.

## 증명

:::idea
$0 < 1 + x/n$인 꼬리에서 로그를 취하면 $n \ln(1 + x/n)$이 남는다. 자연로그의 어림으로 이 수를 $x(1 + x/n)^{-1}$과 $x$ 사이에 끼우고 조임 정리로 $x$로 보낸 뒤, $\exp$의 연속으로 되돌린다.
:::

:::hint
$t$가 양수이면 $1 - t^{-1} = t^{-1}(t - 1)$입니다. $t = 1 + x/n$이면 $n(t - 1) = x$입니다.
:::

:::hint
앞의 몇 항에서 밑이 $0$ 이하일 수 있으므로, $-x < K$인 자연수 $K$를 잡고 $K$-꼬리를 봅니다. 꼬리의 항은 모두 밑이 양수입니다.
:::

:::proof
"순서 (n)"은 [[order-properties-of-reals]]의 (n)이고 (K…)는 [[real-number-arithmetic]]의 번호이다. "거듭제곱 (n)"은 [[power-of-a-real-number]]의 (n), "자연로그 (n)"은 [[natural-logarithm]]의 (n), "로그 (n)"은 [[laws-of-logarithm|로그의 성질]]의 (n), "지수함수 (n)"은 [[exponential-function]]의 (n), "극한 (n)"은 [[limit-of-sum-and-product|극한의 사칙연산]]의 (n), "꼬리 (n)"은 [[tail-of-a-sequence]]의 (n)이다.

**1의 증명.** $n$을 자연수라 하자. 순서 (10)에 의해 $0 < n$이고 $0 < n^{-1}$이다. (K12)의 (i), (K1), (K2), (K4)와 $n^{-1} n = 1$((K8)의 (iii))에 의해
$$
(1 + x n^{-1})\,n = n + x
$$
이고, (K9)에 의해 $n + x = n - (-x)$이다. 또 이 식의 양변에 $n^{-1}$을 곱하면 같은 법칙들로 $(n + x)\,n^{-1} = 1 + x n^{-1}$이다.

$-x < n$이라 하자. 순서 (3)의 (i)에 의해 $0 < n - (-x) = n + x$이다. 순서 (4)의 (i)로 양변에 양수 $n^{-1}$을 곱하면 (K9)에 의해 $0 = 0 \cdot n^{-1} < (n + x)\,n^{-1} = 1 + x/n$이다. 거꾸로 $0 < 1 + x/n$이라 하자. 순서 (4)의 (i)로 양변에 양수 $n$을 곱하면 $0 < (1 + x/n)\,n = n - (-x)$이고, 순서 (3)의 (i)에 의해 $-x < n$이다.

$-1 < x$라 하자. 자연수는 양의 정수이므로([[archimedean-property]]의 진술 첫 문장) [[prime-number]]의 (Z1)과 순서 (10)에 의해 $1 \le n$이다. 순서 (3)의 (iii)과 (K9)에 의해 $-x < -(-1) = 1$이고, 순서 (1)의 (v)에 의해 $-x < n$이므로 앞 문단에 의해 $0 < 1 + x/n$이다. $0 \le x$이면 순서 (5)의 (ii)와 (3)의 (ii)에 의해 $-1 < 0 \le x$이므로 순서 (1)의 (v)에 의해 $-1 < x$이다.

어느 $x$에서나 [[archimedean-property]]의 (1)을 $t = -x$에 쓰면 $-x < N$인 자연수 $N$이 있다. 그런 $N$과 $N \le n$인 자연수 $n$에 대하여 순서 (1)의 (v)에 의해 $-x < n$이므로 $0 < 1 + x/n$이다.

끝으로 $0 < 1 + x/n$이라 하자. 거듭제곱 (6)의 (i)에 의해 $0 < (1 + x/n)^n$, 곧 $(1 + x/n)^n \in \mathbb{R}_{>0}$이다. $1 + x/n \in \mathbb{R}_{>0}$이고 $n$은 $0$ 이상인 정수이므로 로그 (3)에 의해 $\ln\bigl((1 + x/n)^n\bigr) = n \ln(1 + x/n)$이고, 지수함수 (1)의 $\exp(\ln a) = a$를 $a = (1 + x/n)^n$에 쓰면 $(1 + x/n)^n = \exp\bigl(n \ln(1 + x/n)\bigr)$이다.

**2의 증명.** $n$번째 항이 $(1 + x/n)^n$인 수열을 $(w_n)$이라 하자. 1에 의해 $-x < K$인 자연수 $K$가 있다. 하나를 잡아 고정한다. 자연수 $n$에 대하여 $n + K$는 자연수이고([[tail-of-a-sequence]]의 진술), 순서 (10)과 (2)의 (ii)에 의해 $K = 0 + K < n + K$이므로 순서 (1)의 (v)에 의해 $-x < n + K$이다. 따라서 1에 의해
$$
t_n = 1 + x\,(n + K)^{-1}
$$
은 양수이다. [[sequence]]의 (1)에 의해 $n$번째 항이 각각 $t_n$, $v_n = (n + K)\ln t_n$, $c_n = x\,t_n^{-1}$인 수열 $(t_n)$, $(v_n)$, $(c_n)$이 있다. $(w_n)$의 $K$-꼬리의 $n$번째 항은 $w_{n+K} = t_n^{\,n+K}$이다.

*$v_n$을 끼우기.* 자연수 $n$을 잡는다. 자연로그 (6)을 $t_n$에 쓰면 $1 - t_n^{-1} \le \ln t_n \le t_n - 1$이다. 순서 (10)에 의해 $0 < n + K$이므로 순서 (4)의 (iii)으로 양변에 $n + K$를 곱하면
$$
\begin{aligned}
(n + K)(1 - t_n^{-1}) &\le v_n \\
&\le (n + K)(t_n - 1)
\end{aligned}
$$
이다. (K1), (K2), (K4)와 $1 + (-1) = 0$((K8)의 (ii))에 의해 $t_n - 1 = x\,(n + K)^{-1}$이므로 (K1), (K2), (K8)의 (iii), (K4)에 의해 $(n + K)(t_n - 1) = x$이다. 또 $t_n \ne 0$이므로 (K3), (K4), (K12)의 (ii)와 $t_n^{-1} t_n = 1$에 의해 $1 - t_n^{-1} = t_n^{-1}(t_n - 1)$이고, 따라서 (K1), (K2)에 의해 $(n + K)(1 - t_n^{-1}) = t_n^{-1}\,(n + K)(t_n - 1) = t_n^{-1} x = c_n$이다. 곧 모든 자연수 $n$에서
$$
c_n \le v_n \le x
$$
이다. 이 부등식은 $x$의 부호를 묻지 않는다. 자연로그 (6)이 모든 양수에서 성립하고, 곱한 수 $n + K$는 언제나 양수이기 때문이다.

*$(c_n)$의 극한.* $n$번째 항이 $n^{-1}$인 수열은 [[basic-limits]]의 (2)에 의해 $0$으로 수렴하고, 그 $K$-꼬리의 $n$번째 항은 $(n + K)^{-1}$이므로 꼬리 (1)에 의해 $n$번째 항이 $(n + K)^{-1}$인 수열도 $0$으로 수렴한다. 극한 (5)에 의해 $n$번째 항이 $x\,(n + K)^{-1}$인 수열은 $x \cdot 0 = 0$으로, $(t_n)$은 $1 + 0 = 1$로 수렴한다((K9), (K4)). 모든 $n$에서 $t_n \ne 0$이고 $1 \ne 0$이므로 극한 (4)에 의해 $n$번째 항이 $t_n^{-1}$인 수열은 $1^{-1} = 1$로 수렴하고, 극한 (5)에 의해 $(c_n)$은 $x \cdot 1 = x$로 수렴한다. 모든 항이 $x$인 상수 수열은 [[basic-limits]]의 (1)에 의해 $x$로 수렴한다. [[squeeze-lemma|조임 정리]]의 (1)에 의해 $(v_n)$은 수렴하고 $\lim_{n \to \infty} v_n = x$이다.

*$\exp$로 되돌리기.* 지수함수 (2)에 의해 $\exp$는 $\mathbb{R}$ 위의 연속함수이므로 [[continuous-function]]의 연속함수의 정의에 의해 $x$에서 연속이다. $(v_n)$의 항은 모두 $\mathbb{R}$에 속하고 $x$로 수렴하므로, [[sequences-and-continuity|수열로 본 극한과 연속]]의 (2)를 $S = \mathbb{R}$, $f = \exp$, $c = x$에 쓰면 $n$번째 항이 $\exp(v_n)$인 수열은 $\exp(x)$로 수렴한다. 한편 자연수 $n$마다 $m = n + K$는 $0 < 1 + x/m$인 자연수이므로 1의 둘째 식에 의해
$$
\begin{aligned}
w_{n+K} &= \exp\bigl(m \ln(1 + x/m)\bigr) \\
&= \exp(v_n)
\end{aligned}
$$
이다. [[sequence]]의 진술(두 수열은 모든 항이 같을 때 같다)에 의해 $(w_n)$의 $K$-꼬리는 $n$번째 항이 $\exp(v_n)$인 수열과 같고, 따라서 $\exp(x)$로 수렴한다. 꼬리 (1)에 의해 $(w_n)$은 $\exp(x)$로 수렴하고, [[limit-is-unique]]의 기호로 $\lim_{n \to \infty} (1 + x/n)^n = \exp(x)$이다. 밑이 $0$ 이하인 항 $w_n$($n \le K$인 것 가운데 있을 수 있다)은 이 논증에 쓰이지 않았다. 마지막 문장은 [[real-power]]의 (5)이다.

**3의 증명.** (K1), (K4)에 의해 $1/n = 1 \cdot n^{-1} = n^{-1}$이므로, $n$번째 항이 $(1 + 1/n)^n$인 수열은 2에서 $x = 1$인 수열이다. 2에 의해 그 극한은 $\exp(1)$이고, [[real-power]]의 정의에 의해 $\exp(1) = e$이다.

**4의 증명.** $n$을 자연수라 하고 $s = 1 + 1/n$으로 두자. 순서 (5)의 (ii)에 의해 $0 \le 1$이므로 1에 의해 $0 < s$이다. 순서 (10)에 의해 $0 < n^{-1}$이므로 순서 (2)의 (ii)에 의해 $1 < s$이고, 순서 (1)의 (i)에 의해 $s \ne 1$이다. 자연로그 (6)에 의해
$$
1 - s^{-1} < \ln s < s - 1
$$
이다. (K1), (K2), (K4)와 (K8)의 (ii)에 의해 $s - 1 = n^{-1}$이다. 2의 증명과 같은 계산으로 $1 - s^{-1} = s^{-1}(s - 1) = s^{-1} n^{-1}$이고, (K12)의 (vi)에 의해 $s^{-1} n^{-1} = (sn)^{-1}$이며, 1의 증명의 식에 의해 $sn = n + 1$이다. 따라서 $(n + 1)^{-1} < \ln s < n^{-1}$이다.

순서 (10)에 의해 $0 < n$이고 $0 < n + 1$이므로, 순서 (4)의 (i)로 오른쪽 부등식에 $n$을, 왼쪽 부등식에 $n + 1$을 곱하면 (K8)의 (iii)에 의해
$$
n \ln s < 1 < (n + 1) \ln s
$$
이다. $n$과 $n + 1$은 $0$ 이상인 정수이고 $s \in \mathbb{R}_{>0}$이므로 로그 (3)에 의해 $n \ln s = \ln(s^n)$, $(n + 1)\ln s = \ln(s^{n+1})$이다. [[real-power]]의 (5)에 의해 $e \in \mathbb{R}_{>0}$이고 $\ln e = 1$이다. 거듭제곱 (6)의 (i)에 의해 $s^n$, $s^{n+1}$도 $\mathbb{R}_{>0}$의 원소이므로, $\ln(s^n) < \ln e < \ln(s^{n+1})$에 자연로그 (3)의 "$x < y$인 것은 정확히 $\ln x < \ln y$일 때"를 두 번 쓰면 $s^n < e < s^{n+1}$이다.

$n = 1$이면 (K4)와 (K8)의 (iii)에 의해 $1^{-1} = 1$이므로 $s = 1 + 1 = 2$이고, 거듭제곱 (1)에 의해 $2^1 = 2$, $2^2 = 2 \cdot 2 = 4$이다. 따라서 $2 < e < 4$이다. $\blacksquare$
:::

## 예시와 반례

:::example[$x = -3$일 때의 앞쪽 항]
$x = -3$이면 (1)에 의해 $0 < 1 + (-3)/n$인 것은 정확히 $3 < n$일 때입니다. 처음 네 항은 다음과 같습니다.

- $n = 1$: 밑은 $1 - 3 = -2$이고 항은 $(-2)^1 = -2$입니다.
- $n = 2$: 밑은 $1 - \tfrac{3}{2} = -\tfrac{1}{2}$이고 항은 $(-\tfrac{1}{2})^2 = \tfrac{1}{4}$입니다.
- $n = 3$: 밑은 $1 - 1 = 0$이고 항은 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iv)에 의해 $0^3 = 0$입니다.
- $n = 4$: 밑은 $1 - \tfrac{3}{4} = \tfrac{1}{4}$이고 항은 $(\tfrac{1}{4})^4 = \tfrac{1}{256}$입니다.

밑이 음수인 항의 부호는 지수의 홀짝에 따라 바뀝니다. $b$가 양수이면 (K9)와 거듭제곱의 (2)의 (iii)에 의해 $(-b)^n = (-1)^n b^n$이고, 거듭제곱의 (6)의 (i)에 의해 $0 < b^n$입니다. 거듭제곱의 (5)에 의해 $n$이 짝수이면 이 수는 $b^n$이어서 양수이고, 홀수이면 $-b^n$이어서 [[order-properties-of-reals|순서 성질]]의 (3)의 (ii)에 의해 음수입니다. 위의 $n = 1$과 $n = 2$가 그 예입니다. 밑이 $0$ 이하인 처음 세 항($n = 1, 2, 3$)이 어떤 값이든 (2)에 의해 수열은 양수 $\exp(-3)$으로 수렴합니다. 극한은 $4$번째 항부터의 꼬리만으로 정해지기 때문입니다.
:::

:::example[(4)에 $n = 1, 2, 5$를 넣은 어림]
$n = 1$이면 $2 < e < 4$입니다. $n = 2$이면 $(\tfrac{3}{2})^2 = \tfrac{9}{4}$이고 $(\tfrac{3}{2})^3 = \tfrac{27}{8}$이므로 $\tfrac{9}{4} < e < \tfrac{27}{8}$입니다. $n = 5$이면 $6^5 = 7776$, $5^5 = 3125$, $6^6 = 46656$, $5^6 = 15625$이므로([[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iii)과 (3)에 의해 $(\tfrac{6}{5})^k = 6^k (5^k)^{-1}$)
$$
\begin{aligned}
\frac{7776}{3125} &< e \\
&< \frac{46656}{15625}
\end{aligned}
$$
입니다. [[real-power|양수의 실수 거듭제곱]]의 (8)의 두 어림 $\tfrac{9}{4} < e$와 $e < (\tfrac{6}{5})^6$은 각각 $n = 2$의 왼쪽 어림, $n = 5$의 오른쪽 어림과 같은 부등식입니다. (4)의 $n = 1$의 왼쪽 $2 < e$와 $n = 5$의 오른쪽 $e < (\tfrac{6}{5})^6$에 그 항목의 (8)의 $(\tfrac{6}{5})^6 < 3$을 이으면 $2 < e < 3$을 다시 얻습니다.
:::

:::counterexample[밑이 $1$로 수렴해도 거듭제곱의 극한이 $1$이 아닐 수 있는 예]
$n$번째 항이 $1 + 1/n$인 수열은 [[basic-limits]]의 (2)와 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 $1$로 수렴합니다. $0$ 이상인 정수 $k$를 고정하면 극한의 사칙연산의 (6)과 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iv)에 의해 $n$번째 항이 $(1 + 1/n)^k$인 수열은 $1^k = 1$로 수렴합니다. 그러나 지수가 $n$과 함께 커지는 $(1 + 1/n)^n$은 (3)에 의해 $e$로 수렴하고, (4)에 의해 $2 < e$이므로 $e \ne 1$입니다. 극한의 사칙연산의 (6)은 지수가 $n$에 따라 바뀌는 수열에는 쓸 수 없습니다. 한편 $x = 0$이면 밑이 늘 $1$이고 모든 항이 $1$이어서 극한도 $\exp(0) = 1$이므로, 밑이 $1$로 수렴할 때 거듭제곱의 극한이 $1$인 경우도 있습니다.
:::

## 확인 질문

:::check[$n$번째 항이 $(1 - 1/n)^n$인 수열의 첫째 항과 극한은?]
(K9)와 (K12)에 의해 $1 - 1/n = 1 + (-1)/n$이므로 이것은 $x = -1$인 수열입니다. 첫째 항은 밑이 $1 - 1 = 0$이어서 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (iv)에 의해 $0^1 = 0$이고, (1)에 의해 $n \ge 2$인 항은 밑이 양수입니다. (2)에 의해 극한은 $\exp(-1)$이고, [[laws-of-exponential-function|지수함수의 덧셈 법칙]]의 (2)에 의해 $\exp(-1) = \exp(1)^{-1} = e^{-1}$입니다. 첫째 항이 $0$인 것은 극한에 상관이 없습니다.
:::

:::check[$(1 + 2/n)^n$과 $(1 + 1/n)^{2n}$을 $n$번째 항으로 하는 두 수열의 극한은 같은가?]
같습니다. 첫째 수열은 (2)에 의해 $\exp(2)$로 수렴합니다. 둘째 수열은 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (ii)에 의해 $(1 + 1/n)^{2n} = \bigl((1 + 1/n)^n\bigr)^2$이므로, (3)과 [[limit-of-sum-and-product|극한의 사칙연산]]의 (6)에 의해 $e$의 제곱 $\exp(1)^2$으로 수렴합니다. [[laws-of-exponential-function|지수함수의 덧셈 법칙]]의 (3)에 의해 $\exp(1)^2 = \exp(2 \cdot 1) = \exp(2)$입니다.
:::
