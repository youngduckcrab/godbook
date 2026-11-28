---
title: 아르첼라의 유계 수렴 정리
title_en: Arzelà's Bounded Convergence Theorem
aliases: [아르첼라 정리, 유계 수렴 정리 (리만 적분), Arzelà's theorem, bounded convergence theorem for Riemann integrals]
kind: theorem
field: measure-theory
msc: ["26A42", "28A25"]
level: undergrad
summary: 닫힌구간 위의 리만 적분가능한 함수열이 한 상수로 고르게 유계이고 모든 점에서 수렴하면 리만 적분의 수열이 수렴하고, 극한함수는 르베그 적분가능하며 그 르베그 적분이 리만 적분의 극한이라는 것을, 표준 표현의 표현족과 지배 수렴 정리로 증명한다. 극한함수가 리만 적분가능하면 리만 적분과 극한의 순서를 바꿀 수 있다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, interval, real-valued-function, riemann-integral, changing-finitely-many-values, dirichlet-function, step-function, lebesgue-integrable-function, null-functions-and-almost-everywhere, riemann-integrable-is-lebesgue-integrable, representation-family, lebesgue-dominated-convergence-theorem]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: "6.2.2 소절, Theorem 6.2.4 앞의 각주 (p.236), Example 6.2.6 (p.238)"
    checked: original
    note: "출처는 Theorem 6.2.4(고르게 수렴하면 적분과 극한의 순서를 바꿀 수 있다) 앞의 각주(p.236)에서, 그 정리는 f 가 적분가능하고 모든 n 에서 ‖f_n‖ ≤ M 인 M 이 있으면 점별 수렴만으로도 성립하지만 그 증명에는 르베그 적분이 필요하다고 적고, 증명하지 않는다. 이 항목의 (1)이 그 진술이다. 이 사이트는 이 정리를 아르첼라의 이름으로 부르는데, 이 이름은 이 강의의 출처들에서 찾은 곳이 없다(검색어 'Arzel', 'bounded convergence', 'uniformly bounded' 로 Lebl 두 권, Blackstone–Mikusiński, Sandoval-Romero 외, Kanovei–Katz 를 찾았다. Lebl II 의 'Arzel' 17건은 모두 아르첼라–아스콜리 정리와 그 차례·색인이고, 'uniformly bounded' 18건은 함수열이나 함수의 고른 유계를 말하는 곳(대부분 11.6절)으로 적분의 극한에 관한 진술이 아니며, Sandoval-Romero 외의 'bounded convergence' 1건은 유한 측도공간의 Corollary 6.15 이다). 확인 질문 '분모가 n! 을 나누는 유리수에서 1 인 함수열의 극한의 적분은?'은 출처 Example 6.2.6(p.238, 기약분수의 분모가 n 이하인 점에서 1 인 함수열이 디리클레 함수로 점별 수렴한다)과 같은 발상이다."
  - ref: sandoval-romero-measure-and-integration
    loc: "6.2절, Corollary 6.15 (p.176)"
    checked: original
    note: "출처 Corollary 6.15(p.176, Bounded convergence theorem)는 유한 측도공간에서 거의 어디서나 수렴하고 한 상수로 눌리는 가측함수열의 적분이 극한의 적분으로 간다는 것을 지배 수렴 정리에서 얻는다. 이 항목의 (2)는 같은 결론을, 측도 대신 이 강의의 르베그 적분과 리만 적분가능한 함수의 표준 표현으로 진술한다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(아르첼라의 출처 주장을 Lebl I 6.2.2 각주와 다섯 출처의 검색으로 대조, 수렴 정리의 예외 집합 가정 꼴). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$[a, b]$, 리만 적분가능과 $\int_a^b$는 [[riemann-integral]]의 것이고, $0$으로 늘인 함수 $\hat{f}$, "$[a, b]$에서 르베그 적분가능", $\int_{[a, b]}$, $\int_{\mathbb{R}}$은 [[lebesgue-integrable-function|르베그 적분가능한 함수와 그 적분]]의 것이며, 표준 표현은 [[riemann-integrable-is-lebesgue-integrable|리만 적분가능한 함수의 르베그 적분]]의 것이다. 아래에서 $a < b$이고, 자연수 $n$마다 리만 적분가능한 $f_n : [a, b] \to \mathbb{R}$가 정해져 있으며, $f : [a, b] \to \mathbb{R}$이고, 실수 $B$가 있어 모든 $n$과 $[a, b]$의 모든 $x$에서 $|f_n(x)| \le B$이고 $(f_n(x))$가 $f(x)$로 수렴한다고 하자.

1. (아르첼라의 유계 수렴 정리) $f$가 리만 적분가능하면 $n$번째 항이 $\int_a^b f_n$인 수열은 $\int_a^b f$로 수렴한다.
2. (극한이 리만 적분가능하지 않아도) $f$는 $[a, b]$에서 르베그 적분가능하고, $n$번째 항이 $\int_a^b f_n$인 수열은 $\int_{[a, b]} f$로 수렴한다. 또 $n$번째 항이 $\int_{\mathbb{R}} |\hat{f_n} - \hat{f}|$인 수열은 $0$으로 수렴한다.
:::

:::english
$[a, b]$, Riemann integrability, and $\int_a^b$ are as in the entry on the Riemann integral; the extension $\hat{f}$ by $0$, "Lebesgue integrable on $[a, b]$", $\int_{[a, b]}$, and $\int_{\mathbb{R}}$ are as in the entry on Lebesgue integrable functions; and standard representations are as in the entry on the Lebesgue integral of a Riemann integrable function. Below, $a < b$, a Riemann integrable $f_n : [a, b] \to \mathbb{R}$ is given for each natural number $n$, $f : [a, b] \to \mathbb{R}$, and there is a real $B$ such that $|f_n(x)| \le B$ and $(f_n(x))$ converges to $f(x)$ for every $n$ and every $x$ in $[a, b]$.

1. (Arzelà's bounded convergence theorem) If $f$ is Riemann integrable, then the sequence whose $n$th term is $\int_a^b f_n$ converges to $\int_a^b f$.
2. (Even if the limit is not Riemann integrable) $f$ is Lebesgue integrable on $[a, b]$, and the sequence whose $n$th term is $\int_a^b f_n$ converges to $\int_{[a, b]} f$. Moreover, the sequence whose $n$th term is $\int_{\mathbb{R}} |\hat{f_n} - \hat{f}|$ converges to $0$.
:::

## 직관

리만 적분만으로는, 리만 적분가능한 함수열이 점마다 수렴할 때 적분의 극한이 극한의 적분이 되려면 보통 고른 수렴을 요구합니다. 이 정리는 함수들이 한 상수 $B$ 아래에 있기만 하면 점별 수렴으로 충분하다는 것입니다. 증명은 리만 적분을 떠나 르베그 적분으로 갑니다. 리만 적분가능한 함수는 르베그 적분가능하고 두 적분이 같으며, 표준 표현이 함수열 전체의 표현족을 식으로 주므로, 지배 수렴 정리를 상수 $B$를 $[a, b]$ 근처에서만 둔 계단함수로 쓰면 됩니다.

비유로는 높이 $B$인 상자 안에서 움직이는 모래 더미입니다. 더미의 모양이 점마다 자리를 잡아 가면, 상자 밖으로 모래가 새어 나갈 곳이 없으므로 부피도 극한 모양의 부피로 갑니다. "상자"가 $[a, b]$와 높이 $B$이고, "새어 나갈 곳이 없다"가 지배 함수의 르베그 적분가능성입니다.

## 증명

:::idea
$0$으로 늘인 함수들은 계단함수 $B\chi_{[a, b+1)}$ 아래에 있고 표준 표현이 표현족을 이룬다. 지배 수렴 정리를 영집합 $Z = \emptyset$으로 쓴다.
:::

:::hint
$[a, b]$ 밖에서는 $\hat{f_n}$과 $\hat{f}$가 모두 $0$이다.
:::

:::proof
아래에서 "리만–르베그 항목"은 [[riemann-integrable-is-lebesgue-integrable|리만 적분가능한 함수의 르베그 적분]], "지배 항목"은 [[lebesgue-dominated-convergence-theorem|르베그 적분의 지배 수렴 정리와 파투 보조정리]]의 번호이다.

**(2)** [[representation-family|표현족과 르베그 적분가능한 함수의 급수]]의 (6)의 (ii)에 의해 $n$번째 항이 $f_n$의 표준 표현인 열은 $(\hat{f_n})$의 표현족이다. $h = B\,\chi_{[a, b+1)}$로 두면 $a \le b + 1$이므로 [[step-function|계단함수 항목]]의 (4)의 (iii), (5)에 의해 $h$는 계단함수이고, [[lebesgue-integrable-function|앞 항목]]의 (7)에 의해 르베그 적분가능하다. 모든 실수 $x$에서 $|\hat{f_n}(x)| \le h(x)$이다: $x \in [a, b]$이면 $x \in [a, b + 1)$이므로 $|\hat{f_n}(x)| = |f_n(x)| \le B = h(x)$이고, 그 밖에서는 $\hat{f_n}(x) = 0 \le h(x)$이다($B \ge |f_1(a)| \ge 0$). 또 모든 $x$에서 $(\hat{f_n}(x))$는 $\hat{f}(x)$로 수렴한다: $[a, b]$에서는 가정이고, 그 밖에서는 모든 항과 $\hat{f}(x)$가 $0$이다. 공집합의 영 덮개열(모든 $l$에서 $c_l = d_l = 0$)을 써서 지배 항목의 (2)의 (i)을 $Z = \emptyset$에 쓰면, $\hat{f}$는 르베그 적분가능하고 $\int_{\mathbb{R}} |\hat{f_n} - \hat{f}| \to 0$, $\int_{\mathbb{R}} \hat{f_n} \to \int_{\mathbb{R}} \hat{f}$이다. 리만–르베그 항목의 (2)에 의해 $\int_{\mathbb{R}} \hat{f_n} = \int_{[a, b]} f_n = \int_a^b f_n$이고, 앞 항목의 정의에 의해 $f$는 $[a, b]$에서 르베그 적분가능하며 $\int_{\mathbb{R}} \hat{f} = \int_{[a, b]} f$이다.

**(1)** (2)와 리만–르베그 항목의 (2)에 의해 $\int_a^b f_n \to \int_{[a, b]} f = \int_a^b f$이다. $\blacksquare$
:::

## 예시와 반례

:::example[왼쪽 끝으로 좁아지는 지시함수]
$[0, 1]$ 위에서 $f_n$을 $\chi_{[0, 1/n)}$의 제한이라 합시다. $\chi_{[0, 1/n)}$은 $[0, 1]$ 밖에서 $0$인 계단함수이므로 [[step-function|계단함수 항목]]의 (4)의 (i)에 의해 $f_n$은 리만 적분가능하고 $\int_0^1 f_n = 1/n$입니다. $x = 0$이면 모든 $f_n(0) = 1$이고, $0 < x \le 1$이면 $1/n \le x$인 $n$부터 $f_n(x) = 0$이므로, 극한은 $0$에서 $1$이고 나머지에서 $0$인 함수 $f$입니다. $f$는 영함수와 한 점에서만 다르므로 리만 적분가능하고 적분이 $0$입니다([[changing-finitely-many-values|유한 개의 값 바꾸기]]). 모든 $|f_n| \le 1$이므로 (1)에 의해 $1/n \to 0$이고, 실제로 그렇습니다. 이 열은 $[0, 1]$에서 고르게 수렴하지 않으므로(모든 $n$에서 $f_n$과 $f$의 차가 $1$인 점 $1/(2n)$이 있다) 고른 수렴에 관한 정리는 쓰이지 않습니다.
:::

:::counterexample[상수로 눌리지 않는 리만 적분가능 함수열의 예]
$2$ 이상인 자연수 $n$마다 $[0, 1]$ 위에서 $f_n$을 $n\,\chi_{[1/n, 2/n)}$의 제한이라 합시다($2/n \le 1$이므로 이 계단함수는 $[0, 1]$ 밖에서 $0$입니다). [[step-function|계단함수 항목]]의 (4)의 (i)에 의해 각 $f_n$은 리만 적분가능하고 $\int_0^1 f_n = 1$이며, 모든 점에서 $0$으로 수렴합니다. 극한은 영함수이고 그 적분은 $0$이므로, 적분의 수열 $1, 1, \dots$은 극한의 적분으로 가지 않습니다. 이 열에서는 모든 $n$에서 $|f_n(x)| \le B$인 상수 $B$가 없습니다. $f_n(1/n) = n$이기 때문입니다.
:::

## 확인 질문

:::check[분모가 n! 을 나누는 유리수에서 1 인 함수열의 극한의 적분은?]
$[0, 1]$ 위에서 $x = k/n!$($0 \le k \le n!$인 정수 $k$)이면 $f_n(x) = 1$, 아니면 $0$으로 둡니다. $f_n$은 영함수와 유한 개의 점에서만 다르므로 리만 적분가능하고 $\int_0^1 f_n = 0$입니다([[changing-finitely-many-values|유한 개의 값 바꾸기]]). $x = p/q$($q$는 자연수)가 유리수이면 $n \ge q$일 때 $q$가 $n!$을 나누므로 $f_n(x) = 1$이고, 무리수이면 모든 $f_n(x) = 0$입니다. 그래서 극한은 $[0, 1]$ 위의 디리클레 함수 $D$이고 모든 $|f_n| \le 1$입니다. $D$는 리만 적분가능하지 않으므로 (1)은 쓰이지 않지만, (2)에 의해 $\int_{[0, 1]} D = \lim 0 = 0$입니다. 이것은 [[null-functions-and-almost-everywhere|거의 영인 함수와 거의 어디서나]]의 (8)과 맞습니다.
:::
