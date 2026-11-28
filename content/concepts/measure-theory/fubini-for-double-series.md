---
title: 절대수렴하는 이중급수의 합의 순서 바꾸기
title_en: Interchanging the Order of Summation for Absolutely Convergent Double Series
aliases: [이중급수의 푸비니 정리, 급수의 푸비니 정리, 절대수렴하는 이중급수, Fubini for double series, Fubini's theorem for sums]
kind: theorem
field: measure-theory
msc: ["40B05", "28A25"]
level: undergrad
summary: 실수의 이중첨수 수열에서 절댓값의 합이 실수이면, 행마다 더한 합과 열마다 더한 합과 아무 전단사로 한 줄로 늘어놓아 더한 합이 모두 절대수렴하고 같은 값이라는 것을, 셈측도에 대한 함수항 급수의 항별 적분과 0 이상인 이중급수의 정리로 증명한다.
requires: [function, injective-surjective-bijective, cartesian-product, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, positive-and-negative-parts, sequence, series-and-partial-sums, sum-of-a-series, finite-sum-of-reals, absolute-convergence, linearity-of-series, comparison-test, geometric-series, power-of-a-real-number, alternating-series-test, harmonic-series-diverges, extended-nonnegative-reals, series-in-extended-nonnegative-reals, nonnegative-double-series, power-set, sigma-algebra, measure-examples, measure-zero-and-almost-everywhere, integral-with-respect-to-counting-measure, integrable-function-for-a-measure, termwise-integration-of-series-for-a-measure]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.6절 More on series, Exercise 2.6.15 (p.112)
    checked: original
    note: "출처 Exercise 2.6.15(Tonelli/Fubini for sums, p.112)는 이중첨수 수열 x_{k,ℓ} 와 전단사 σ : ℕ → ℕ² 에 대하여 i) Σ x_{σ(i)}, ii) 행마다 더한 반복합, iii) 열마다 더한 반복합을 두고, b)(Fubini)에서 i) 이 절대수렴하면 ii) 와 iii) 이 수렴하고 i) 과 같은 수로 수렴함을 보이라는 연습문제이다. 이 항목은 가정을 0 이상인 이중급수의 정리의 (2)의 공통값(|a_{k,l}| 의 합)이 실수라는 꼴로 두었고, 이것은 (3)에 의해 출처의 '한 전단사로 늘어놓은 급수가 절대수렴한다'와 같다. 진술로 올렸으므로 이 연습문제와 겹친다. 출처의 b) 는 ii), iii) 이 수렴하고 i) 과 같은 수로 수렴함을 보이라고 하고, 이 항목은 안쪽 급수와 바깥 급수가 절대수렴한다는 것도 진술에 두었다."
  - ref: sandoval-romero-measure-and-integration
    loc: 5.3절 Convergence theorems, Theorem 5.20 과 Corollary 5.21 (p.139); 6.2절 Corollary 6.16 (p.177–178)
    checked: original
    note: "출처 Corollary 5.21(p.139)은 셈측도에 베포 레비 정리(Theorem 5.20)를 써서 [0, +∞] 값의 이중첨수 수열의 두 반복합이 같다는 것을 얻는다. 이 항목은 같은 생각을 실수 항에 옮겨, 셈측도에 대한 함수항 급수의 항별 적분(출처 Corollary 6.16 에 해당하는 이 사이트의 항목)으로 (1)(2)를 증명했다. 전단사로 늘어놓은 합 (3)은 이 항목이 양의 부분과 음의 부분에 0 이상인 이중급수의 정리를 써서 증명했다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(항별 적분의 예외 집합 E 를 식으로 정한 것, 이중급수 (3) 의 증명 길, 유계 수렴 (3) 의 경계 γ = 0). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$[0, \infty]$의 이중첨수 원소열, 행마다 더한 반복합, 열마다 더한 반복합과 그 정리는 [[nonnegative-double-series|0 이상인 이중급수의 합의 순서 바꾸기]]의 것이다. 급수의 수렴과 합의 기호 $\sum$, 절대수렴은 [[series-and-partial-sums|급수와 부분합]], [[sum-of-a-series|급수의 합의 기호]], [[absolute-convergence|절대수렴]]의 것이다. 전단사는 [[injective-surjective-bijective|단사, 전사, 전단사]]의 것이다.

함수 $a : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$을 **실수의 이중첨수 수열**이라 하고 $a(k, l)$을 $a_{k,l}$로 쓴다. $(k, l)$에서의 값이 $|a_{k,l}|$인 함수는 $[0, \infty]$의 이중첨수 원소열이므로, [[nonnegative-double-series|0 이상인 이중급수의 합의 순서 바꾸기]]의 (2)에 의해 그 행마다 더한 반복합, 열마다 더한 반복합, 한 줄로 늘어놓은 원소열의 합은 $[0, \infty]$의 같은 원소이다. 이것을 $S$라 하고, $S < \infty$라 하자.

1. (행마다 더하기) 모든 자연수 $k$에서 $l$번째 항이 $a_{k,l}$인 수열의 급수는 절대수렴한다. 그 합을 $r_k = \sum_{l=1}^{\infty} a_{k,l}$로 두면, $k$번째 항이 $r_k$인 수열의 급수도 절대수렴한다.
2. (열마다 더하기) 모든 자연수 $l$에서 $k$번째 항이 $a_{k,l}$인 수열의 급수는 절대수렴한다. 그 합을 $c_l = \sum_{k=1}^{\infty} a_{k,l}$로 두면, $l$번째 항이 $c_l$인 수열의 급수도 절대수렴하고
   $$
   \sum_{k=1}^{\infty} r_k = \sum_{l=1}^{\infty} c_l
   $$
   이다. 이 공통의 값을 $T$라 한다.
3. (한 줄로 더하기) $\sigma : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$이 전단사이면, $m$번째 항이 $a_{\sigma(m)}$인 수열의 급수는 절대수렴하고 그 합은 $T$이다.
4. (어림) $|T| \le S$이다.
:::

:::english
The $[0, \infty]$-valued double sequences, the iterated sums by rows and by columns and the theorem about them are as in the entry on interchanging the order of summation for nonnegative double series. Convergence of series, the sum notation $\sum$ and absolute convergence are as in the entries on series and partial sums, on the notation for sums of series and on absolute convergence. Bijections are as in the entry on injective, surjective and bijective functions.

A function $a : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ is called a **real double sequence**, and $a(k, l)$ is written $a_{k,l}$. The function with value $|a_{k,l}|$ at $(k, l)$ is a double sequence in $[0, \infty]$, so by (2) of that entry its iterated sum by rows, its iterated sum by columns and the sum of the sequence listing it in one row are the same element of $[0, \infty]$. Call it $S$, and suppose $S < \infty$.

1. (Summing by rows) For every natural number $k$, the series of the sequence whose $l$-th term is $a_{k,l}$ converges absolutely. Writing its sum $r_k = \sum_{l=1}^{\infty} a_{k,l}$, the series of the sequence whose $k$-th term is $r_k$ also converges absolutely.
2. (Summing by columns) For every natural number $l$, the series of the sequence whose $k$-th term is $a_{k,l}$ converges absolutely. Writing its sum $c_l = \sum_{k=1}^{\infty} a_{k,l}$, the series of the sequence whose $l$-th term is $c_l$ also converges absolutely and
   $$
   \sum_{k=1}^{\infty} r_k = \sum_{l=1}^{\infty} c_l.
   $$
   This common value is called $T$.
3. (Summing in one row) If $\sigma : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ is a bijection, then the series of the sequence whose $m$-th term is $a_{\sigma(m)}$ converges absolutely and its sum is $T$.
4. (Estimate) $|T| \le S$.
:::

## 직관

수를 바둑판에 늘어놓고 모두 더하는 방법은 여럿입니다. 행마다 더한 뒤 그 합을 더할 수도, 열마다 더할 수도, 모든 칸을 한 줄로 세워 차례로 더할 수도 있습니다. 칸의 수가 모두 $0$ 이상이면 [[nonnegative-double-series|0 이상인 이중급수의 합의 순서 바꾸기]]가 말하듯 어느 방법이든 같은 값이 나옵니다($\infty$일 수도 있습니다). 부호가 섞이면 그렇지 않을 수 있습니다(아래 반례). 이 항목은 절댓값을 모두 더한 것 $S$가 실수이면 부호가 섞여도 어느 방법이든 같은 값이 나온다는 것입니다. 급수의 절대수렴이 재배열에 대해 하는 일을 이중첨수에서 하는 셈입니다.

(1)과 (2)의 증명은 이 단원의 생각을 씁니다. $\mathbb{N}$ 위의 셈측도에서 적분은 합이므로, $k$번째 행을 함수 $f_k(l) = a_{k,l}$로 보면 행의 합은 $\int f_k\,d\mu^{\sharp}$이고, 열의 합은 점마다의 합 $\sum_k f_k(l)$입니다. "행의 합을 더한 것 = 열의 합을 더한 것"은 [[termwise-integration-of-series-for-a-measure|함수항 급수의 항별 적분]]의 "적분의 합 = 합의 적분"이 됩니다. 셈측도에서는 측도가 0 인 집합이 공집합뿐이므로 그 항목의 예외 집합이 비고, 모든 열이 절대수렴합니다. (3)은 양의 부분 $a_{k,l}^+$와 음의 부분 $a_{k,l}^-$에 [[nonnegative-double-series|0 이상인 이중급수의 정리]]를 따로 쓰고 빼서 증명합니다. 같은 방법으로 (1)과 (2)도 짧게 증명할 수 있습니다.

급수의 코시 곱과 메르텐스 정리도 두 급수의 항을 바둑판처럼 곱해 늘어놓지만, 그 정리들은 $x_i y_j$를 $i + j$가 같은 대각선마다 묶어 더한 합에 관한 것이고, 칸의 값이 곱의 꼴인 이중첨수 수열만 다룹니다. 이 항목은 아무 이중첨수 수열에서 행·열·한 줄의 합을 비교합니다.

## 증명

:::idea
셈측도 위에서 $f_k(l) = a_{k,l}$로 두고 함수항 급수의 항별 적분을 쓰면 행의 합의 합과 열의 합의 합이 같아진다. 한 줄로 더한 합은 양의 부분과 음의 부분으로 나누어 0 이상인 이중급수의 정리를 쓴다.
:::

:::hint
$\sum_k \int |f_k|\,d\mu^{\sharp}$는 $|a_{k,l}|$의 행마다 더한 반복합, 곧 $S$이다.
:::

:::hint
$0 \le a_{k,l}^+ \le |a_{k,l}|$이므로 $a^+$의 반복합은 $S$ 이하의 실수이다.
:::

:::proof
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$([[sigma-algebra|σ-대수와 가측공간]]의 (5)) 위의 셈측도 $\mu^{\sharp}$([[measure-examples|측도의 예]]의 (4))를 쓴다. [[integrable-function-for-a-measure|μ-적분가능한 함수와 그 적분]]의 성질은 "적분가능성 항목의 (n)"으로, [[nonnegative-double-series|0 이상인 이중급수의 합의 순서 바꾸기]]는 "이중급수 항목의 (n)"으로, [[series-in-extended-nonnegative-reals|확장된 실수의 합]]은 "확장된 실수의 합의 (n)"으로 인용한다.

**(1), (2)** $(k, l)$마다 값이 $a_{k,l}$인 함수 $\mathbb{N} \times \mathbb{N} \to \mathbb{R}$은 $\mathbb{N}$ 위의 실숫값 함수열이고 그 $k$번째 함수를 $f_k$로 쓴다. 곧 $f_k(l) = a_{k,l}$이다. 적분가능성 항목의 (9)의 (ii)에 의해 모든 $f_k$는 가측이다. [[integral-with-respect-to-counting-measure|셈측도에 대한 적분]]의 (2)에 의해 $\int |f_k|\,d\mu^{\sharp} = \sum_{l=1}^{\infty} |a_{k,l}|$이므로, $\sum_{k=1}^{\infty} \int |f_k|\,d\mu^{\sharp}$는 $|a|$의 행마다 더한 반복합 $S$이고 $\infty$보다 작다. 확장된 실수의 합의 (2)에 의해 각 $\int |f_k|\,d\mu^{\sharp} \le S < \infty$이므로 각 $f_k$는 $\mu^{\sharp}$-적분가능하고, 적분가능성 항목의 (9)의 (iii)에 의해 $l$번째 항이 $a_{k,l}$인 수열의 급수는 절대수렴하며 $\int f_k\,d\mu^{\sharp} = r_k$이다.

이제 [[termwise-integration-of-series-for-a-measure|함수항 급수의 항별 적분]]을 이 $(f_k)$에 쓴다(그 항목의 첨자 $j$ 자리에 $k$를 쓴다). 그 항목의 $E$는 측도가 0 인 집합이고, [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 (5)의 (i)에 의해 $\mu^{\sharp}$에서 측도가 0 인 집합은 $\emptyset$뿐이므로 $E = \emptyset$이다. 그래서 그 항목의 (2)에 의해 모든 $l$에서 $k$번째 항이 $f_k(l) = a_{k,l}$인 수열의 급수는 절대수렴하고, 그 항목의 $f$는 모든 $l$에서 $f(l) = c_l$인 $\mu^{\sharp}$-적분가능한 함수이다. 적분가능성 항목의 (9)의 (iii)에 의해 $l$번째 항이 $c_l$인 수열의 급수는 절대수렴하고 $\int f\,d\mu^{\sharp} = \sum_{l=1}^{\infty} c_l$이다. 그 항목의 (3)을 $A = \mathbb{N}$으로 쓰면 $k$번째 항이 $\int f_k\,d\mu^{\sharp} = r_k$인 수열의 급수는 절대수렴하고
$$
\sum_{k=1}^{\infty} r_k = \int f\,d\mu^{\sharp} = \sum_{l=1}^{\infty} c_l
$$
이다. 이것으로 (1)과 (2)가 증명된다.

**(3)** $a_{k,l}^+ = \max\{a_{k,l}, 0\}$, $a_{k,l}^- = \max\{-a_{k,l}, 0\}$으로 두면, [[positive-and-negative-parts|양의 부분과 음의 부분]]의 (1)에 의해 $a_{k,l} = a_{k,l}^+ - a_{k,l}^-$이고 $0 \le a_{k,l}^\pm \le |a_{k,l}|$이다. $a^+$와 $a^-$는 $[0, \infty]$의 이중첨수 원소열이다. 이중급수 항목의 (2)의 공통값을 $a^+$에 대해 $S^+$, $a^-$에 대해 $S^-$라 하자. 이중급수 항목의 (3)에 의해 $S^+ = \sum_{m=1}^{\infty} a_{\sigma(m)}^+$이고 $S = \sum_{m=1}^{\infty} |a_{\sigma(m)}|$이므로, 확장된 실수의 합의 (5)의 비교에 의해 $S^+ \le S < \infty$이다. $S^-$도 같다.

이중급수 항목의 (4)의 (i)을 $a^+$에 쓰면, 모든 $k$에서 $l$번째 항이 $a_{k,l}^+$인 수열의 급수가 수렴하고 그 합 $r_k^+$의 급수도 수렴하여 합이 $S^+$이며, $m$번째 항이 $a_{\sigma(m)}^+$인 수열의 급수가 수렴하고 그 합이 $S^+$이다. $a^-$에 대해서도 같은 것이 $r_k^-$, $S^-$로 성립한다. [[linearity-of-series|급수의 선형성]]의 (4)에 의해 $r_k = r_k^+ - r_k^-$이고, 다시 같은 (4)에 의해
$$
\begin{gathered}
\sum_{k=1}^{\infty} r_k = S^+ - S^-, \\
\sum_{m=1}^{\infty} a_{\sigma(m)} = S^+ - S^-
\end{gathered}
$$
이다. 그래서 $m$번째 항이 $a_{\sigma(m)}$인 수열의 급수는 수렴하고 그 합은 $T$이다. 절대수렴은, $\sum_{m=1}^{\infty} |a_{\sigma(m)}| = S < \infty$이고 확장된 실수의 합의 (3)의 (i)에 의해 $(|a_{\sigma(m)}|)$의 급수가 수렴한다는 것이다.

**(4)** [[absolute-convergence|절대수렴]]의 (2)에 의해 $|T| \le \sum_{k=1}^{\infty} |r_k|$이고 $|r_k| \le \sum_{l=1}^{\infty} |a_{k,l}|$이다. [[comparison-test|비교 판정법]]의 (2)에 의해 $\sum_{k=1}^{\infty} |r_k| \le \sum_{k=1}^{\infty} \sum_{l=1}^{\infty} |a_{k,l}|$이고, 확장된 실수의 합의 (3)의 (i)에 의해 오른쪽은 $S$이다.
:::

## 예시와 반례

:::example[삼각형 모양으로 늘어놓은 부호가 바뀌는 수]
$l \le k$이면 $a_{k,l} = (-1)^k 2^{-(k+l)}$, $l > k$이면 $a_{k,l} = 0$이라 합시다.

- 절댓값: $k$번째 행의 절댓값의 합은 $2^{-k}\sum_{l=1}^{k} 2^{-l} = 2^{-k}(1 - 2^{-k})$이고([[geometric-series|등비급수]]의 (1)), 이것을 $k$에 대해 더하면 등비급수의 (2)와 [[linearity-of-series|급수의 선형성]]의 (4)에 의해 $1 - \tfrac{1}{3} = \tfrac{2}{3}$입니다. 곧 $S = \tfrac{2}{3}$입니다.
- 행마다: $r_k = (-1)^k 2^{-k}(1 - 2^{-k}) = (-\tfrac{1}{2})^k - (-\tfrac{1}{4})^k$이고, 등비급수의 (2)와 급수의 선형성의 (4)에 의해 $\sum_k r_k = -\tfrac{1}{3} - (-\tfrac{1}{5}) = -\tfrac{2}{15}$입니다.
- 열마다: $l$번째 열은 $k < l$에서 $0$이므로 [[sum-of-a-series|급수의 합의 기호]]의 (2), (3)과 (6)의 (iii)에 의해 $c_l = 2^{-l}\sum_{k=l}^{\infty} (-\tfrac{1}{2})^k = 2^{-l} \cdot \tfrac{(-1/2)^l}{3/2} = \tfrac{2}{3}(-\tfrac{1}{4})^l$이고, $\sum_l c_l = \tfrac{2}{3} \cdot (-\tfrac{1}{5}) = -\tfrac{2}{15}$입니다.

두 값이 (2)가 말하는 대로 같고, $|T| = \tfrac{2}{15} \le \tfrac{2}{3} = S$입니다. 행은 유한 합이지만 열은 끝없이 많은 항의 합이어서, 두 계산의 모양이 다릅니다.
:::

:::counterexample[절댓값의 합이 ∞ 이면 두 반복합이 다를 수 있는 예]
$t_k = 1 - 2^{-k}$로 두고, $a_{k,k} = t_k$, $a_{k,k+1} = -t_k$, 나머지 칸은 $0$이라 합시다. $k$번째 행은 두 칸만 $0$이 아니고 합이 $0$이므로 행마다 더한 반복합은 $0$입니다. 첫째 열은 $a_{1,1} = \tfrac{1}{2}$만 $0$이 아니고, $l \ge 2$이면 $l$번째 열은 $a_{l-1,l} = -t_{l-1}$과 $a_{l,l} = t_l$만 $0$이 아니어서 합이 $t_l - t_{l-1} = 2^{-l}$입니다. 열마다 더한 반복합은 $\tfrac{1}{2} + \sum_{l=2}^{\infty} 2^{-l} = 1$입니다([[sum-of-a-series|급수의 합의 기호]]의 (6)의 (iii)). 두 반복합이 $0$과 $1$로 다릅니다. 여기서 $|a_{k,k}| + |a_{k,k+1}| = 2t_k \ge 1$이므로 $|a|$의 행마다 더한 반복합은 $\infty$이고, 이 항목의 가정이 성립하지 않습니다. [[nonnegative-double-series|0 이상인 이중급수의 합의 순서 바꾸기]]의 반례의 높이 $1$을 $t_k$로 바꾼 것입니다.
:::

## 확인 질문

:::check[$a_{k,l} = (-1)^k 2^{-k} 3^{-l}$이면 $T$는 무엇인가?]
$-\tfrac{1}{6}$입니다. [[sum-of-a-series|급수의 합의 기호]]의 (6)의 (iii)에 의해 $\sum_l 3^{-l} = \tfrac{1/3}{2/3} = \tfrac{1}{2}$이므로 [[linearity-of-series|급수의 선형성]]의 (2)에 의해 $r_k = \tfrac{1}{2}(-\tfrac{1}{2})^k$이고, $\sum_k r_k = \tfrac{1}{2} \cdot (-\tfrac{1}{3}) = -\tfrac{1}{6}$입니다. 절댓값으로는 $S = \tfrac{1}{2} \cdot 1 = \tfrac{1}{2}$이 실수이므로 (2), (3)에 의해 열마다 더해도, 아무 전단사로 한 줄로 더해도 $-\tfrac{1}{6}$입니다.
:::

:::check[$S = \infty$인데 두 반복합이 모두 실수이고 같을 수 있는가?]
그럴 수 있습니다. 첫째 열에만 $a_{k,1} = (-1)^k k^{-1}$을 두고 나머지 칸을 $0$으로 두면, $k$번째 행의 합은 $(-1)^k k^{-1}$이고 [[alternating-series-test|교대급수 판정법]]의 (4)에 의해 행의 합들의 급수는 수렴합니다. 첫째 열의 합도 같은 급수이고 다른 열의 합은 $0$이므로 열마다 더한 반복합도 같은 값입니다. 그러나 $|a|$의 첫째 열의 합은 조화급수이므로 [[harmonic-series-diverges|조화급수의 발산]]의 (2)와 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (3)의 (ii)에 의해 $S = \infty$입니다. 이 항목의 가정은 두 반복합이 같기 위한 충분조건일 뿐입니다.
:::
