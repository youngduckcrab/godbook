---
title: 르베그 적분의 지배 수렴 정리와 파투 보조정리
title_en: The Dominated Convergence Theorem and Fatou's Lemma for the Lebesgue Integral
aliases: [르베그 적분의 지배 수렴 정리, 르베그 적분의 파투 보조정리, 지배 수렴 정리 (르베그 적분), 파투 보조정리 (르베그 적분), dominated convergence theorem for the Lebesgue integral, Fatou's lemma for the Lebesgue integral]
kind: theorem
field: measure-theory
msc: ["28A25", "26A42"]
level: undergrad
summary: 표현족이 주어진 0 이상인 르베그 적분가능 함수열이 주어진 영집합 밖에서 수렴하고 적분이 위로 유계이면 극한이 르베그 적분가능하고 그 적분이 적분의 하극한 이하라는 파투 보조정리를 꼬리의 하한과 단조 수렴 정리로 증명하고, 이것으로 한 영집합 밖에서 모든 항이 르베그 적분가능한 함수 하나로 눌리는 수렴열의 적분이 극한의 적분으로 간다는 지배 수렴 정리를 증명한다.
requires: [recursion-theorem, real-number-arithmetic, order-properties-of-reals, absolute-value, triangle-inequality, upper-bound-and-supremum, infimum-exists, sequence, limit-of-sequence, limit-is-unique, convergent-sequence-is-bounded, limits-preserve-inequalities, limit-superior-and-inferior, comparison-with-null-sequence, real-valued-function, step-function, null-set-of-reals, lebesgue-integrable-function, properties-of-the-lebesgue-integral, null-functions-and-almost-everywhere, representation-family, lebesgue-monotone-convergence-theorem]
proof: full
sources:
  - ref: blackstone-mikusinski-daniell-integral
    loc: "6절 Theorem 6.4, Theorem 6.5 (p.14–15)"
    checked: original
    note: "출처 Theorem 6.5(p.15, Fatou's Lemma)는 0 이상인 U 의 함수열이 ∫f_n ≤ M 이고 거의 어디서나 f 로 수렴하면 f ∈ U 이고 ∫f ≤ M 이라는 것이다. 출처의 증명은 φ_{n,k} = f_n ∧ ⋯ ∧ f_{n+k} 에 단조 수렴 정리를 두 번 쓴다. 이 항목의 (1)은 같은 길이고, 결론을 ∫g ≤ (∫f_n 의 하극한)으로 진술하며, 극한을 꼬리의 하한으로 점마다 정한다(단조 수렴 정리가 0 이상인 감소열에서 모든 점의 극한을 주기 때문에 출처의 'a.e.' 가 필요 없다). 출처 Theorem 6.4(p.14–15, Dominated Convergence Theorem)의 증명은 g_{m,n} = max{|f_m|, …, |f_{m+n}|} 와 단조 수렴 정리로 f = 0 인 경우(Case 1)를 보이고, Case 2 에서 '모든 증가하는 첨자열 (p_n) 에 대하여' Case 1 을 써서 코시 열임을 보인 뒤 Theorem 6.1, 6.2 를 쓴다. 이 항목의 (2)는 그 길 대신 파투 보조정리를 max{h + f_n, 0} 과 max{2h − |f_n − g|, 0} 에 쓴다. 출처의 가정은 거의 어디서나의 수렴과 모든 n 에서의 |f_n| ≤ h 이다. 이 항목은 수렴과 누름을 한 영집합 Z 밖에서 모든 n 에 대해 가정한다."
  - ref: sandoval-romero-measure-and-integration
    loc: "6.2절, Theorem 6.13 (p.174–175), Example 6.14 (p.175); 6.4절, Exercise 6.27 (p.188)"
    checked: original
    note: "출처 Theorem 6.13(p.174–175)은 측도공간에서의 지배 수렴 정리이고, 증명은 예외 집합들을 모은 영집합 밖에서 함수를 0 으로 바꾼 뒤 파투 보조정리를 f_k + g 와 g − f_k 에 한 번씩 쓴다. 이 항목의 (2)는 파투 보조정리를 쓰는 같은 발상을 이 강의의 르베그 적분에 옮긴 것이고, h + f_n 과 2h − |f_n − g| 에 쓴다. 반례 '지배 함수가 없는 계단함수열의 예'는 출처 Example 6.14(p.175, kχ_{[0, 2/k]} 를 누르는 적분가능한 함수가 없다)와 출처 Exercise 6.27 (a)(p.188, kχ_{[0, 1/k]} 에 지배 수렴 정리를 쓸 수 있는지 묻는다)와 같은 발상이다. 확인 질문 '파투 보조정리에서 0 이상이라는 가정을 빼면 어떤 열에서 결론이 깨지는가?'의 열 −χ_{[n, n+1)} 은 출처 Exercise 6.27 (b)(p.188)의 χ_{[k, k+1)} 에 −1 을 곱한 것이다."
  - ref: lebl-basic-analysis
    loc: "6.2.2 소절, Example 6.2.3 (p.236)"
    checked: original
    note: "출처 Example 6.2.3(p.236)은 [0, 1] 위에서 0 < x < 1/n 이면 n − n²x, 나머지에서 0 인 함수열이 점마다 0 으로 가지만 적분은 0 으로 가지 않는 예이다. 반례 '지배 함수가 없는 계단함수열의 예'는 같은 결론(점마다 0 으로 가지만 적분이 0 으로 가지 않는다)을 계단함수로 보인다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(아르첼라의 출처 주장을 Lebl I 6.2.2 각주와 다섯 출처의 검색으로 대조, 수렴 정리의 예외 집합 가정 꼴). 독립 검토 없음."
added: 2026-11-28
---

:::statement
르베그 적분가능, 표현, $\int_{\mathbb{R}}$은 [[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]]의 것이고, 최소의 표현식은 [[properties-of-the-lebesgue-integral|르베그 적분의 선형성·단조성·절댓값]]의 (4)의 것이다. 표현족은 [[representation-family|표현족과 르베그 적분가능한 함수의 급수]]의 것이고, 영집합과 영 덮개열은 [[null-set-of-reals|ℝ 의 영집합]], 지우는 열은 [[null-functions-and-almost-everywhere|거의 영인 함수와 거의 어디서나]]의 것이다. 유계인 실수열의 하극한 $\liminf$는 [[limit-superior-and-inferior|상극한과 하극한]]의 것이다. 아래에서 $(f_n)$은 $\mathbb{R}$에서 $\mathbb{R}$로의 사상의 열이고 $(\Phi_n)$은 그 표현족이다.

**유한 개의 최소.** 자연수 $n$, $k$에 대하여 함수 $\varphi_{n,k}$와 계단함수의 열 $R_{n,k}$를 $k$에 관한 재귀로 정한다. $\varphi_{n,1} = f_n$, $R_{n,1} = \Phi_n$이고, $\varphi_{n,k+1} = \min\{\varphi_{n,k}, f_{n+k}\}$이며, $R_{n,k+1}$은 르베그 적분의 선형성·단조성·절댓값의 (4)의 최소의 표현식을 $R_{n,k}$와 $\Phi_{n+k}$에 쓴 것이다.

1. (파투 보조정리) 모든 $n$과 모든 실수 $x$에서 $0 \le f_n(x)$이고, 어떤 실수 $M$이 있어 모든 $n$에서 $\int_{\mathbb{R}} f_n \le M$이라 하자. $Z \subseteq \mathbb{R}$와 그 영 덮개열 $\bigl((c_l), (d_l)\bigr)$이 주어져 있고, $g : \mathbb{R} \to \mathbb{R}$가 $Z$ 밖의 모든 $x$에서 $(f_n(x))$가 $g(x)$로 수렴한다고 하자.
   - (i) 모든 $n$, $k$에서 $R_{n,k}$는 $\varphi_{n,k}$의 표현이고, 모든 $x$에서 $\varphi_{n,k}(x)$는 $f_n(x), \dots, f_{n+k-1}(x)$ 가운데 가장 작은 값이다.
   - (ii) 자연수 $n$과 실수 $x$에 대하여 $\eta_n(x) = \inf\{f_m(x) : m \in \mathbb{N},\ m \ge n\}$이 정해진다. 함수 $\eta_n$은 르베그 적분가능하고, $(\varphi_{n,k})_k$와 표현족 $(R_{n,k})_k$에 [[lebesgue-monotone-convergence-theorem|르베그 적분의 단조 수렴 정리]]의 (2)를 쓴 표현이 그 표현이며, 모든 $x$에서 $(\varphi_{n,k}(x))_k$는 $\eta_n(x)$로 수렴한다. 모든 $n$과 $x$에서 $\eta_n(x) \le \eta_{n+1}(x)$이고, $m \ge n$이면 $\int_{\mathbb{R}} \eta_n \le \int_{\mathbb{R}} f_m$이다.
   - (iii) $g$는 르베그 적분가능하고
     $$
     \int_{\mathbb{R}} g \le \liminf_{n \to \infty} \int_{\mathbb{R}} f_n \le M
     $$
     이다. (ii)에서 $n$번째 항이 $\eta_n$의 표현인 표현족에 단조 수렴 정리의 (1)을 쓴 표현과, $\bigl((c_l), (d_l)\bigr)$로 만든 지우는 열을 번갈아 늘어놓은 것이 $g$의 표현이다. $Z$ 밖의 모든 $x$에서 $0 \le g(x)$이다.
   - (iv) $Z$가 영집합이라는 것만 주어져도 $g$는 르베그 적분가능하고 (iii)의 부등식이 성립한다.
2. (지배 수렴 정리) $h : \mathbb{R} \to \mathbb{R}$가 르베그 적분가능하고, $Z \subseteq \mathbb{R}$와 그 영 덮개열이 주어져 있으며, $g : \mathbb{R} \to \mathbb{R}$가 $Z$ 밖의 모든 $x$와 모든 $n$에서 $|f_n(x)| \le h(x)$이고 $(f_n(x))$가 $g(x)$로 수렴한다고 하자.
   - (i) $g$는 르베그 적분가능하고, $n$번째 항이 $\int_{\mathbb{R}} |f_n - g|$인 수열은 $0$으로 수렴하며, $n$번째 항이 $\int_{\mathbb{R}} f_n$인 수열은 $\int_{\mathbb{R}} g$로 수렴한다. $g$의 표현은 $(\Phi_n)$, $h$의 한 표현, $Z$의 영 덮개열로부터 (1)의 (iii)과 성질 항목의 (1)의 식으로 정해진다.
   - (ii) $(f_n(x))$가 수렴하는 점에서 그 극한, 아닌 점에서 $0$으로 정한 함수 $g^*$는 $Z$ 밖에서 $g$와 같으므로, (i)의 결론이 $g^*$에 대해서도 성립한다.
   - (iii) $Z$가 영집합이라는 것만 주어져도 (i)의 앞 문장이 성립한다.
3. (표현족을 가정하지 않아도 되는 경우) $(f_n)$이 계단함수의 열이거나, $a < b$이고 리만 적분가능한 $u_n : [a, b] \to \mathbb{R}$들을 $0$으로 늘인 함수의 열이면, 표현족과 급수의 (6)의 표현족으로 (1)과 (2)가 성립한다.
:::

:::english
Lebesgue integrability, representations, and $\int_{\mathbb{R}}$ are as in the entry on Lebesgue integrable functions, and the formula for the representation of a minimum is that of item (4) of the entry on properties of the Lebesgue integral. Representation families are as in the entry on representation families, null sets and null cover sequences are as in the entry on null sets of real numbers, and cancelling sequences are as in the entry on null functions. The limit inferior $\liminf$ of a bounded real sequence is as in the entry on limits superior and inferior. Below, $(f_n)$ is a sequence of maps from $\mathbb{R}$ to $\mathbb{R}$ and $(\Phi_n)$ is a representation family of it.

**Minima of finitely many.** For natural numbers $n$, $k$ we define a function $\varphi_{n,k}$ and a sequence of step functions $R_{n,k}$ by recursion on $k$: $\varphi_{n,1} = f_n$, $R_{n,1} = \Phi_n$, $\varphi_{n,k+1} = \min\{\varphi_{n,k}, f_{n+k}\}$, and $R_{n,k+1}$ is the formula for the representation of a minimum in item (4) of the entry on properties of the Lebesgue integral applied to $R_{n,k}$ and $\Phi_{n+k}$.

1. (Fatou's lemma) Suppose $0 \le f_n(x)$ for every $n$ and every real $x$, and there is a real $M$ with $\int_{\mathbb{R}} f_n \le M$ for every $n$. Let $Z \subseteq \mathbb{R}$ with a null cover sequence $\bigl((c_l), (d_l)\bigr)$ be given, and let $g : \mathbb{R} \to \mathbb{R}$ be such that $(f_n(x))$ converges to $g(x)$ for every $x$ outside $Z$.
   - (i) For all $n$, $k$, $R_{n,k}$ is a representation of $\varphi_{n,k}$, and for every $x$, $\varphi_{n,k}(x)$ is the least of $f_n(x), \dots, f_{n+k-1}(x)$.
   - (ii) For a natural number $n$ and a real $x$, $\eta_n(x) = \inf\{f_m(x) : m \in \mathbb{N},\ m \ge n\}$ is defined. The function $\eta_n$ is Lebesgue integrable, a representation of it is the one obtained by applying item (2) of the monotone convergence theorem for the Lebesgue integral to $(\varphi_{n,k})_k$ with the representation family $(R_{n,k})_k$, and $(\varphi_{n,k}(x))_k$ converges to $\eta_n(x)$ for every $x$. For every $n$ and $x$, $\eta_n(x) \le \eta_{n+1}(x)$, and if $m \ge n$, then $\int_{\mathbb{R}} \eta_n \le \int_{\mathbb{R}} f_m$.
   - (iii) $g$ is Lebesgue integrable and
     $$
     \int_{\mathbb{R}} g \le \liminf_{n \to \infty} \int_{\mathbb{R}} f_n \le M.
     $$
     A representation of $g$ is obtained by alternating the representation given by item (1) of the monotone convergence theorem applied to the representation family of (ii) whose $n$th term is the representation of $\eta_n$ with the cancelling sequence made from $\bigl((c_l), (d_l)\bigr)$. $0 \le g(x)$ for every $x$ outside $Z$.
   - (iv) Even if it is only given that $Z$ is a null set, $g$ is Lebesgue integrable and the inequality of (iii) holds.
2. (Dominated convergence theorem) Let $h : \mathbb{R} \to \mathbb{R}$ be Lebesgue integrable, let $Z \subseteq \mathbb{R}$ with a null cover sequence be given, and let $g : \mathbb{R} \to \mathbb{R}$ be such that $|f_n(x)| \le h(x)$ and $(f_n(x))$ converges to $g(x)$ for every $x$ outside $Z$ and every $n$.
   - (i) $g$ is Lebesgue integrable, the sequence whose $n$th term is $\int_{\mathbb{R}} |f_n - g|$ converges to $0$, and the sequence whose $n$th term is $\int_{\mathbb{R}} f_n$ converges to $\int_{\mathbb{R}} g$. A representation of $g$ is determined from $(\Phi_n)$, a representation of $h$, and the null cover sequence of $Z$ by the formulas of (1)(iii) and of item (1) of the entry on properties.
   - (ii) The function $g^*$ equal to the limit of $(f_n(x))$ at points where it converges and to $0$ elsewhere equals $g$ outside $Z$, so the conclusions of (i) hold for $g^*$ as well.
   - (iii) Even if it is only given that $Z$ is a null set, the first sentence of (i) holds.
3. (Cases needing no assumed representation family) If $(f_n)$ is a sequence of step functions, or if $a < b$ and $(f_n)$ is the sequence of extensions by zero of Riemann integrable $u_n : [a, b] \to \mathbb{R}$, then (1) and (2) hold with the representation family of item (6) of the entry on representation families.
:::

## 직관

파투 보조정리는 "0 이상인 함수열에서는 극한의 적분이 적분의 극한보다 클 수 없다"는 것입니다. 적분이 극한에서 사라질 수는 있지만(아래 반례처럼 혹이 점점 좁고 높아지며 한쪽으로 달아날 때) 새로 생기지는 않습니다. 증명은 $f_n, f_{n+1}, \dots$의 하한 $\eta_n$을 씁니다. $\eta_n$은 $n$에 따라 증가하므로 단조 수렴 정리가 쓰이고, $\eta_n \le f_m$($m \ge n$)이므로 적분이 $f_m$의 적분을 넘지 않습니다.

지배 수렴 정리는 함수열이 르베그 적분가능한 함수 하나 $h$ 아래에 갇혀 있으면 적분이 사라질 수도 없다는 것입니다. $h$가 있으면 달아나는 혹이 생길 수 없어서, 파투 보조정리를 $2h - |f_n - g|$에 쓰면 $\int_{\mathbb{R}} |f_n - g|$가 $0$으로 갑니다. 비유로는 천장 $h$가 있는 방에서 물건들이 움직일 때, 천장 아래 공간의 부피가 유한하면 물건이 모두 사라지는 일은 없습니다. "천장"이 $h$이고 "부피가 유한하다"가 $h$의 르베그 적분가능성입니다.

가정의 "영집합 밖에서"는 모든 $n$에 대해 같은 영집합 $Z$ 하나입니다. $n$마다 다른 영집합이 주어지면 그것들을 하나로 모으는 데 덮개를 끝없이 많이 골라야 하므로, 이 강의는 그 꼴을 진술하지 않습니다.

## 증명

:::idea
꼬리의 하한 $\eta_n$은 0 이상인 유한 최소들의 감소열의 극한이므로 모든 점에서 정해지고, $\eta_n$의 증가열에 단조 수렴 정리를 쓰면 파투 보조정리가 나온다. 지배 수렴 정리는 $\max\{h + f_n, 0\}$에 파투를 써서 $g$의 적분가능성을, $\max\{2h - |f_n - g|, 0\}$에 써서 $\int_{\mathbb{R}} |f_n - g| \to 0$을 얻는다.
:::

:::hint
$\int_{\mathbb{R}} |f_n - g|$가 $0$으로 가지 않으면, 어떤 양수 $\varepsilon$에 대해 끝없이 많은 $n$에서 $\int_{\mathbb{R}} (2h - |f_n - g|) \le 2\int_{\mathbb{R}} h - \varepsilon$이다.
:::

:::proof
아래에서 "성질 항목"은 [[properties-of-the-lebesgue-integral|르베그 적분의 선형성·단조성·절댓값]], "단조 항목"은 [[lebesgue-monotone-convergence-theorem|르베그 적분의 단조 수렴 정리]], "영인 함수 항목"은 [[null-functions-and-almost-everywhere|거의 영인 함수와 거의 어디서나]], "하극한 항목"은 [[limit-superior-and-inferior|상극한과 하극한]]의 번호이다. 함수의 같음은 [[real-valued-function]]의 (2)로 확인한다. $\varphi_{n,k}$와 $R_{n,k}$는 $n$마다 [[recursion-theorem|재귀 정리]]로 하나씩 정해지고, 쓰는 식은 $f_{n+k}$, $\Phi_{n+k}$와 앞의 값만으로 정해진다.

**(1)** (i) $k$에 관한 귀납법. $k = 1$이면 정의이다. $k$에서 성립하면 성질 항목의 (4)에 의해 $R_{n,k+1}$은 $\min\{\varphi_{n,k}, f_{n+k}\} = \varphi_{n,k+1}$의 표현이다. 값: [[absolute-value]]의 (10)에 의해 $\varphi_{n,k+1}(x)$는 $\varphi_{n,k}(x)$와 $f_{n+k}(x)$ 가운데 작은 것이므로, 귀납 가정과 함께 $f_n(x), \dots, f_{n+k}(x)$ 가운데 하나이고 그 모두 이하이다.

(ii) 집합 $\{f_m(x) : m \ge n\}$은 공집합이 아니고 $0$이 하계이므로 [[infimum-exists|하한의 존재]]의 (4)에 의해 하한을 가지며 [[upper-bound-and-supremum]]의 (1)에 의해 하나로 정해진다. $n$을 고정하자. (i)에 의해 $\varphi_{n,k+1}(x) \le \varphi_{n,k}(x)$이고 $0 \le \varphi_{n,k}(x)$이며, 성질 항목의 (2)에 의해 $0 \le \int_{\mathbb{R}} \varphi_{n,k}$이다. 단조 항목의 (2)를 $(\varphi_{n,k})_k$, 표현족 $(R_{n,k})_k$, $M = 0$에 쓰면, 모든 $x$에서 $(\varphi_{n,k}(x))_k$는 $0$을 하계로 가지므로 극한 $H_n(x)$를 갖고, $H_n$은 르베그 적분가능하며 진술의 표현을 갖는다. $H_n(x) = \eta_n(x)$임을 보인다. (i)에 의해 각 $\varphi_{n,k}(x)$는 어떤 $f_m(x)$($m \ge n$)이므로 $\eta_n(x) \le \varphi_{n,k}(x)$이고, [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 $\eta_n(x) \le H_n(x)$이다. 양수 $\varepsilon$이 주어지면 하한의 정의에 의해 $f_m(x) < \eta_n(x) + \varepsilon$인 $m \ge n$이 있고([[upper-bound-and-supremum]]의 (4)), $k \ge m - n + 1$이면 (i)에 의해 $\varphi_{n,k}(x) \le f_m(x)$이므로 $H_n(x) \le \eta_n(x) + \varepsilon$이다. [[order-properties-of-reals|실수의 순서의 성질]]의 (9)에 의해 $H_n(x) = \eta_n(x)$이다.

$\{f_m(x) : m \ge n + 1\} \subseteq \{f_m(x) : m \ge n\}$이므로 $\eta_n(x) \le \eta_{n+1}(x)$이다. $m \ge n$이면 $\eta_n(x) \le f_m(x)$이므로 성질 항목의 (2)에 의해 $\int_{\mathbb{R}} \eta_n \le \int_{\mathbb{R}} f_m$이다.

(iii) $0 \le \int_{\mathbb{R}} f_n \le M$이므로 $(\int_{\mathbb{R}} f_n)$은 유계이고 하극한이 정해진다. $b_n = \inf\{\int_{\mathbb{R}} f_m : m \ge n\}$이라 하면 (ii)에 의해 $\int_{\mathbb{R}} \eta_n$은 이 집합의 하계이므로 $\int_{\mathbb{R}} \eta_n \le b_n \le M$이다. (ii)에 의해 $(\eta_n)$은 표현족이 식으로 주어진 증가열이고 적분이 $M$ 이하이므로, 단조 항목의 (1)에 의해 $(\eta_n(x))$가 위로 유계인 점에서 극한, 아닌 점에서 $0$인 함수 $H$가 르베그 적분가능하고 $\int_{\mathbb{R}} H = \lim_n \int_{\mathbb{R}} \eta_n$이다. 극한과 부등식의 (1)과 하극한 항목의 정의에 의해 $\int_{\mathbb{R}} H \le \lim_n b_n = \liminf_n \int_{\mathbb{R}} f_n$이고, 모든 $n$에서 $b_n \le M$이므로 극한과 부등식의 (3)에 의해 이것은 $M$ 이하이다.

$x \notin Z$라 하자. 양수 $\varepsilon$에 대하여 $m \ge N$이면 $g(x) - \varepsilon/2 < f_m(x) < g(x) + \varepsilon/2$인 $N$이 있다([[limit-of-sequence|수열의 극한]]의 (1)). $n \ge N$이면 $g(x) - \varepsilon/2$는 $\{f_m(x) : m \ge n\}$의 하계이므로 $g(x) - \varepsilon/2 \le \eta_n(x) \le f_n(x) < g(x) + \varepsilon/2$이고, $|\eta_n(x) - g(x)| < \varepsilon$이다. 따라서 $(\eta_n(x))$는 $g(x)$로 수렴하고, [[convergent-sequence-is-bounded|수렴하는 수열은 유계]]이므로 위로 유계이며, $H(x) = g(x)$이다([[limit-is-unique|극한의 유일성]]). 곧 $Z$ 밖에서 $g = H$이므로, 영인 함수 항목의 (1)의 (ii)에 의해 $g$는 르베그 적분가능하고 진술의 열이 그 표현이며 $\int_{\mathbb{R}} g = \int_{\mathbb{R}} H$이다. 모든 $f_m(x) \ge 0$이므로 극한과 부등식의 (3)에 의해 $Z$ 밖에서 $0 \le g(x)$이다.

(iv) $Z$의 영 덮개열이 있으므로 그 하나로 (iii)을 쓴다.

**(2)** $h$의 표현 하나를 $\Psi$라 하자. $Z$ 밖의 모든 $x$와 $n$에서 $-h(x) \le f_n(x) \le h(x)$이다([[absolute-value]]의 (7)). 극한과 부등식의 (3)에 의해 $Z$ 밖에서 $|g(x)| \le h(x)$이고, 특히 $0 \le h(x)$이다.

*$g$의 적분가능성.* $v_n = \max\{h + f_n, 0\}$으로 두면 성질 항목의 (1), (4)와 [[lebesgue-integrable-function|앞 항목]]의 (7)(영함수의 표현)에 의해 $v_n$은 $\Psi$와 $\Phi_n$의 식으로 정해진 표현을 갖고, 모든 점에서 $0 \le v_n(x)$이다. $Z$ 밖에서는 $h(x) + f_n(x) \ge 0$이므로 $v_n(x) = h(x) + f_n(x)$이고, 이것은 $h(x) + g(x)$로 수렴한다. 또 $Z$ 밖에서 $v_n(x) \le 2h(x)$이므로 영인 함수 항목의 (5)의 (iii)과 성질 항목의 (1)에 의해 $\int_{\mathbb{R}} v_n \le 2\int_{\mathbb{R}} h$이다. (1)의 (iii)을 $(v_n)$과 $h + g$에 쓰면 $h + g$는 르베그 적분가능하고, 성질 항목의 (1)에 의해 $g = (h + g) - h$도 그렇다. $g$의 표현을 $\Gamma$라 하자(위의 식으로 정해진다).

*$\int_{\mathbb{R}} |f_n - g| \to 0$.* $a_n = \int_{\mathbb{R}} |f_n - g|$로 두면 성질 항목의 (2)에 의해 $0 \le a_n$이다. $u_n = \max\{2h - |f_n - g|, 0\}$으로 두면 성질 항목의 (1), (3), (4)에 의해 $u_n$은 $\Psi$, $\Phi_n$, $\Gamma$의 식으로 정해진 표현을 갖고 $0 \le u_n(x)$이다. $Z$ 밖에서는 [[triangle-inequality|삼각부등식]]의 (3)에 의해 $|f_n(x) - g(x)| \le |f_n(x)| + |g(x)| \le 2h(x)$이므로 $u_n(x) = 2h(x) - |f_n(x) - g(x)|$이고, 이것은 $2h(x)$로 수렴하며($|f_n(x) - g(x)| \to 0$), $u_n(x) \le 2h(x)$이다. 영인 함수 항목의 (5)의 (i), (iii)과 성질 항목의 (1)에 의해 $\int_{\mathbb{R}} u_n = 2\int_{\mathbb{R}} h - a_n \le 2\int_{\mathbb{R}} h$이다. (1)의 (iii)을 $(u_n)$과 $2h$에 쓰면
$$
2\int_{\mathbb{R}} h \le \liminf_{n \to \infty} \int_{\mathbb{R}} u_n
$$
이다. $(a_n)$이 $0$으로 수렴하지 않는다고 하자. 수열의 극한의 (2)에 의해 어떤 양수 $\varepsilon$이 있어, 모든 자연수 $N$에 대하여 $n \ge N$이고 $a_n \ge \varepsilon$인 $n$이 있다. 그러면 $\{\int_{\mathbb{R}} u_m : m \ge N\}$의 하한은 $\int_{\mathbb{R}} u_n = 2\int_{\mathbb{R}} h - a_n \le 2\int_{\mathbb{R}} h - \varepsilon$ 이하이다. 이것이 모든 $N$에서 성립하므로 하극한 항목의 (4)(하극한은 그 하한들의 상한)에 의해 $\liminf_n \int_{\mathbb{R}} u_n \le 2\int_{\mathbb{R}} h - \varepsilon < 2\int_{\mathbb{R}} h$이고, 위 부등식과 모순이다. 따라서 $(a_n)$은 $0$으로 수렴한다.

*적분의 수렴.* 성질 항목의 (3)의 (iv)에 의해 $|\int_{\mathbb{R}} f_n - \int_{\mathbb{R}} g| \le a_n$이므로 [[comparison-with-null-sequence|0 으로 가는 수열과의 비교]]의 (3)에 의해 $\int_{\mathbb{R}} f_n \to \int_{\mathbb{R}} g$이다.

(ii) [[limit-is-unique|극한의 유일성]]에 의해 $g^*$는 정해지고, $Z$ 밖에서 $(f_n(x))$는 $g(x)$로 수렴하므로 $g^*(x) = g(x)$이다. 가정이 $g^*$에 대해서도 성립하므로 (i)을 쓴다.

(iii) $Z$의 영 덮개열 하나로 (i)을 쓴다.

**(3)** [[representation-family|표현족과 르베그 적분가능한 함수의 급수]]의 (6)의 (i), (ii)이다. $\blacksquare$
:::

## 예시와 반례

:::example[한 점에서만 커지는 열]
$f_n = \chi_{[0, 1)} + n\,\chi_{\{1/2\}}$이라 합시다. $Z = \{1/2\}$는 영집합이고, 그 영 덮개열 하나로 만든 지우는 열을 $\Xi$라 하면 $\operatorname{alt}\bigl((\chi_{[0, 1)}, 0, 0, \dots), \Xi\bigr)$가 모든 $n$에서 $f_n$의 표현이므로 표현족이 식으로 주어집니다. $Z$ 밖에서는 모든 $n$에서 $f_n = \chi_{[0, 1)}$이므로 $h = \chi_{[0, 1)}$이 지배 함수이고 극한은 $g = \chi_{[0, 1)}$입니다. (2)에 의해 $\int_{\mathbb{R}} f_n \to 1$이고, 실제로 모든 $\int_{\mathbb{R}} f_n = 1$입니다. 점 $1/2$에서 $(f_n(1/2))$는 수렴하지 않지만 가정은 $Z$ 밖에서만 묻습니다.
:::

:::counterexample[지배 함수가 없는 계단함수열의 예]
$f_n = n\,\chi_{[1/n, 2/n)}$이라 합시다. $x \le 0$이면 모든 항이 $0$이고, $x > 0$이면 $2/n \le x$인 $n$부터 $f_n(x) = 0$이므로 모든 점에서 $0$으로 수렴합니다. 그러나 $\int_{\mathbb{R}} f_n = n \cdot (1/n) = 1$입니다. 파투 보조정리는 $\int_{\mathbb{R}} 0 = 0 \le 1$을 말할 뿐이고 등호는 아닙니다. 모든 점에서 $|f_n(x)| \le h(x)$인 르베그 적분가능한 $h$가 있다면 (2)에 의해 $\int_{\mathbb{R}} f_n \to 0$이어야 하므로, 그런 $h$는 없습니다.
:::

## 확인 질문

:::check[파투 보조정리에서 0 이상이라는 가정을 빼면 어떤 열에서 결론이 깨지는가?]
예를 들어 $f_n = -\chi_{[n, n+1)}$입니다. 모든 점에서 $0$으로 수렴하므로 극한은 영함수이고 적분은 $0$이지만, 모든 $n$에서 $\int_{\mathbb{R}} f_n = -1$이어서 하극한은 $-1$입니다. $0 \le -1$은 거짓입니다. 증명에서는 $0$ 이상이라는 가정이 $\eta_n$이 모든 점에서 정해지게 하고(하한의 존재), 단조 수렴 정리의 (2)를 쓰는 곳에 쓰입니다.
:::

:::check[0 이상 1 + 1/n 미만에서 1 이고 나머지에서 0 인 함수열의 극한과 그 적분은?]
이 열은 $f_n = \chi_{[0, 1 + 1/n)}$입니다. $x < 0$이면 모든 항이 $0$입니다. $0 \le x \le 1$이면 모든 $n$에서 $x < 1 + 1/n$이므로 값이 $1$입니다. $x > 1$이면 $1/n \le x - 1$인 $n$부터 $0$입니다. 그래서 극한은 $\chi_{[0, 1]}$이고, $h = \chi_{[0, 2)}$가 모든 항을 누르므로 (2)에 의해 $\int_{\mathbb{R}} f_n = 1 + 1/n$은 $\int_{\mathbb{R}} \chi_{[0, 1]} = 1$로 갑니다.
:::
