---
title: 실수 집합은 가산 무한이 아니다
title_en: The Real Numbers Are Not Countably Infinite
aliases: [실수는 가산 무한이 아니다, ℝ은 가산 무한이 아니다, 칸토어의 대각선 논법, 대각선 논법, diagonal argument, reals are not countably infinite]
kind: theorem
field: logic-foundations
msc: ["03E10"]
level: intro
summary: 소수 전개에 관한 두 사실을 받아들이고, ℕ에서 ℝ로의 전단사는 존재하지 않으므로 ℝ은 가산 무한이 아님을 보인다. 소수 전개의 대각선을 이용해 어떤 함수 ℕ → ℝ에도 값이 아닌 실수를 만든다.
requires: [set, function, injective-surjective-bijective, equal-cardinality, countably-infinite-set, comparing-cardinalities, proof-by-contradiction, rational-and-irrational-numbers]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 14.1절 Sets with Equal Cardinalities, Theorem 14.2, p.272 (대각선 논법의 설명과 표는 pp.271–272. 소수 표현의 유일성을 쓰는 곳은 14.4절 Theorem 14.11의 증명, p.288)
    checked: original
    note: "출처 Theorem 14.2는 'ℕ에서 ℝ로의 전단사는 존재하지 않는다. 따라서 |ℕ| ≠ |ℝ|이다'라고 진술하고, 증명 대신 'we will reason informally, rather than writing out an exact proof'(p.271)라 밝히며 표를 쓴 비공식 논증을 제시한다. 임의의 f : ℕ → ℝ에 대해 f(n)의 소수 전개를 표로 쓰고, b의 n째 소수 자리를 f(n)의 n째 자리가 0이 아니면 0, 0이면 1로 정해 b가 어떤 f(n)과도 같지 않다고 결론짓는다. 출처는 이 14.1절의 논증에서 한 실수에 소수 전개가 둘일 수 있다는 문제(0.4999… = 0.5000…)를 논하지 않고, f(n)의 어느 전개를 표에 쓰는지도 정하지 않는다. 같은 문제는 14.4절 Theorem 14.11의 증명(p.288)에서 '[0, 1)의 수는 9가 끝없이 이어지지 않는 소수 표현을 유일하게 갖는다'고 말하며 비로소 다룬다. 이 사이트의 증명은 이 점을 메우려고 (D1)과 (D2)라는 받아들이는 사실을 진술에 적고, 모든 f(n)에 대해 9가 끝없이 이어지지 않는 전개를 쓰며, b의 숫자를 0과 1이 아니라 1과 2로 고른다(어느 쪽이든 9가 끝없이 이어지지 않는 전개가 된다). 출처의 증명은 b의 숫자를 0과 1로 고르며, 표에 8.5006…처럼 정수 부분이 있는 수도 소수점 아래 n째 자리를 그대로 쓰므로 그 경우를 나눌 필요가 없었다. 이 사이트는 (D1)을 [0, 1)의 수에 대해서만 받아들이므로 f(n)이 [0, 1)에 속하지 않으면 c_n = 0으로 처리한다. 출처가 Theorem 14.2를 칸토어의 논증이라 밝히는 것(p.271)은 SEP의 서술과 함께 역사와 맥락에 적었다. 예시와 반례, 확인 질문은 이 사이트에서 새로 만들었다."
  - ref: sep-settheory-early
    loc: "1절(Emergence), 1873년 말 데데킨트와의 서신과 1874년 논문을 다루는 단락 / 2절(Consolidation), 칸토어의 1895년과 1897년 논문을 다루는 단락의 끝부분(1892년의 짧은 논문 언급)"
    checked: original
    note: 역사와 맥락 절의 근거. 이 항목의 증명은 이 출처의 것이 아니다.
status: reviewed
review_note: "2026-11-16 독립 검토 4회. 수학적 오류 없음. 증명 가능한 범위로 진술을 좁히고 받아들이는 사실을 명시, 역사 인용과 출처 기록 정정."
added: 2026-11-16
---

:::statement
**이 사이트가 증명 없이 받아들이는 사실.** 실수의 **소수 전개**란 숫자 $0, 1, \dots, 9$의 열 $d_1, d_2, d_3, \dots$로서 $0.d_1 d_2 d_3 \dots$라 쓰는 것이고, 이것이 실수 $x$를 나타낸다는 것은 $x = \frac{d_1}{10} + \frac{d_2}{100} + \frac{d_3}{1000} + \cdots$(무한 합)라는 것이다. 무한 합의 정확한 뜻은 이 강의에서 정의하지 않고 해석학에서 다룬다. 이 항목은 "소수 전개가 실수를 나타낸다"는 말과 아래 (D1), (D2)를 함께 받아들인다. "끝없이 $9$가 이어진다"는 것은 어떤 $N$이 있어 $N$ 이상의 모든 $i$에 대하여 $d_i = 9$라는 뜻이다. 이 사이트는 다음 두 사실을 받아들인다.

- (D1) $0 \le x < 1$인 모든 실수 $x$는 끝없이 $9$가 이어지지 않는 소수 전개를 **정확히 하나** 갖는다. 이것을 $x$의 **표준 전개**라 하고, $x$의 표준 전개의 $n$째 숫자를 $x$의 $n$째 자리 숫자라 한다.
- (D2) 끝없이 $9$가 이어지지 않는 숫자열 $d_1, d_2, d_3, \dots$ ($d_i \in \{0, 1, \dots, 9\}$)는 어떤 실수 $x$($0 \le x < 1$)의 표준 전개이다.

(예를 들어 $\frac{1}{2}$의 표준 전개는 $0.5000\dots$이고 $0.4999\dots$는 같은 수를 나타내지만 표준 전개가 아니다.) 또 자연수는 실수이다.

**정리.** 자연수의 집합 $\mathbb{N}$에서 실수의 집합 $\mathbb{R}$로의 전단사는 존재하지 않는다. 곧 $|\mathbb{N}| \ne |\mathbb{R}|$이고, 따라서 $\mathbb{R}$은 [[countably-infinite-set|가산 무한]]이 아니다. 더 나아가 $|\mathbb{N}| < |\mathbb{R}|$이다. 여기서 전단사는 공역을 $\mathbb{R}$로 밝힌 함수 $\mathbb{N} \to \mathbb{R}$에 대한 것이다.
:::

:::english
**Facts this site accepts without proof.** A **decimal expansion** is a sequence $d_1, d_2, d_3, \dots$ of digits $0, 1, \dots, 9$, written $0.d_1 d_2 d_3 \dots$; it represents the real number $x = \frac{d_1}{10} + \frac{d_2}{100} + \frac{d_3}{1000} + \cdots$ (an infinite sum). The precise meaning of an infinite sum is not defined in this course; it belongs to analysis. This entry accepts the notion "a decimal expansion represents a real number", together with (D1) and (D2) below. We say the expansion "ends in $9$'s" if there is an $N$ such that $d_i = 9$ for all $i \ge N$. This site accepts the following two facts.

- (D1) Every real number $x$ with $0 \le x < 1$ has **exactly one** decimal expansion that does not end in $9$'s. We call it the **standard expansion** of $x$, and its $n$th digit the $n$th digit of $x$.
- (D2) Every sequence of digits $d_1, d_2, d_3, \dots$ ($d_i \in \{0, 1, \dots, 9\}$) that does not end in $9$'s is the standard expansion of some real number $x$ with $0 \le x < 1$.

(For example, the standard expansion of $\frac{1}{2}$ is $0.5000\dots$; $0.4999\dots$ represents the same number but is not a standard expansion.) Also, natural numbers are real numbers.

**Theorem.** There is no bijection from the set $\mathbb{N}$ of natural numbers to the set $\mathbb{R}$ of real numbers. That is, $|\mathbb{N}| \ne |\mathbb{R}|$, and so $\mathbb{R}$ is not countably infinite. Moreover, $|\mathbb{N}| < |\mathbb{R}|$. Here bijectivity refers to functions from $\mathbb{N}$ to $\mathbb{R}$ with $\mathbb{R}$ declared as the codomain.
:::

## 직관

$\mathbb{N}$에서 $\mathbb{R}$로의 함수 $f$는 실수의 목록 $f(1), f(2), f(3), \dots$입니다. 대각선 논법은 이 목록에 없는 실수를 하나 만듭니다. $n$번째 실수 $f(n)$의 소수 $n$째 자리를 보고, 그 자리에서 $f(n)$과 다른 숫자를 골라 $n$째 자리에 쓰면, 새 수는 모든 $n$에 대해 $n$번째 수와 $n$째 자리에서 다릅니다. 따라서 목록의 어느 수와도 같을 수 없습니다. 어떤 목록에도 빠진 실수가 있으므로 목록은 모든 실수를 담지 못하고, 전사가 아닙니다.

일상의 비유로는 시험을 본 응시자들이 번호순으로 줄을 서 있고, 새 답안지를 "$n$번 응시자의 $n$번 문항 답과 반대로" 쓰는 것과 같습니다. 새 답안지는 어느 응시자의 답안지와도 적어도 한 문항에서 다르므로 줄의 누구와도 같지 않습니다. 비유가 놓치는 곳은, 시험 답안은 문항별 답이 다르면 곧 다른 답안지지만 실수는 소수 전개가 다르다고 곧 다른 수가 되지는 않는다는 점입니다.

한 가지 함정은 한 실수가 소수 전개를 둘 가질 수 있다는 점입니다. $0.4999\dots$와 $0.5000\dots$는 같은 수입니다. 자리마다 숫자가 달라도 같은 수일 수 있으므로 "자리에서 다르다"만으로는 "다른 수이다"가 나오지 않습니다. 이 항목은 표준 전개, 곧 $9$가 끝없이 이어지지 않는 전개만 쓰고, 그것이 각 수마다 정확히 하나라는 사실(D1)을 받아들여 이 문제를 피합니다. 새로 만드는 수의 숫자도 $1$과 $2$만 써서 표준 전개가 되게 합니다(D2).

이 정리는 [[countably-infinite-set]]의 정의 아래에서 "$\mathbb{R}$은 가산 무한이 아니다"까지만 말합니다. $\mathbb{R}$이 무한집합이라는 사실은 이 항목이 다루지 않으므로 "비가산"이라는 낱말은 진술에 쓰지 않았습니다. 출처는 $\mathbb{R}$을 비가산이라 부릅니다.

## 증명

:::idea
$f : \mathbb{N} \to \mathbb{R}$가 임의의 함수라 하고 각 $f(n)$의 $n$째 자리 숫자와 다른 숫자만 써서 실수 $b$를 만든다. $b$의 표준 전개는 $n$째 자리에서 $f(n)$의 표준 전개와 다르므로 $b \ne f(n)$이다.
:::

:::hint
$f(n)$이 $0 \le f(n) < 1$이 아니면 표준 전개가 없으므로, 그 경우의 $n$째 자리 숫자는 아무 값으로 정해 두어도 된다. 어차피 $b$는 $0$ 이상 $1$ 미만이다.
:::

:::hint
$b$의 $n$째 숫자를 $f(n)$의 $n$째 숫자와 같지 않게 정하되, $9$를 쓰지 않으면 (D2)로 그런 $b$가 존재한다.
:::

:::proof
$f : \mathbb{N} \to \mathbb{R}$를 임의의 함수라 하자. $f$가 전사가 아님을 보이면 된다.

각 $n \in \mathbb{N}$에 대하여 숫자 $c_n$을 다음과 같이 정한다. $0 \le f(n) < 1$이면 $c_n$은 $f(n)$의 $n$째 자리 숫자이다((D1)에 의해 이것은 하나로 정해진다). $0 \le f(n) < 1$이 아니면 $c_n = 0$이다. 이어서 숫자 $b_n$을 정한다. $c_n \ne 1$이면 $b_n = 1$, $c_n = 1$이면 $b_n = 2$이다. 이렇게 하면 모든 $n$에 대하여 $b_n \in \{1, 2\}$이고 $b_n \ne c_n$이다. ($c_n \ne 1$이면 $b_n = 1 \ne c_n$이고, $c_n = 1$이면 $b_n = 2 \ne 1 = c_n$이다.)

숫자열 $b_1, b_2, b_3, \dots$는 모든 숫자가 $1$ 또는 $2$이므로 $9$가 하나도 없고, 끝없이 $9$가 이어지지 않는다. (D2)에 의해 $0 \le b < 1$인 실수 $b$가 있어 $b$의 표준 전개가 $0.b_1 b_2 b_3 \dots$이다.

이제 모든 $n \in \mathbb{N}$에 대하여 $f(n) \ne b$임을 [[proof-by-contradiction|귀류법]]으로 보인다. $f(n) = b$인 $n$이 있다고 가정한다. $0 \le b < 1$이므로 $0 \le f(n) < 1$이고, 따라서 $c_n$은 $f(n)$의 $n$째 자리 숫자이다. $f(n) = b$이므로 $f(n)$의 표준 전개와 $b$의 표준 전개는 같은 수의 표준 전개이고, (D1)의 유일성에 의해 $f(n)$의 표준 전개는 $0.b_1 b_2 b_3 \dots$이다. 따라서 $f(n)$의 $n$째 자리 숫자는 $b_n$이고, $c_n = b_n$이다. 한편 위에서 $b_n \ne c_n$이었다. $C$를 "$c_n = b_n$"이라 하면 $C$와 $\lnot C$가 모두 성립하는 모순이다. 따라서 가정이 틀렸고 모든 $n \in \mathbb{N}$에 대하여 $f(n) \ne b$이다.

그러므로 $b \in \mathbb{R}$은 어떤 $n$에 대해서도 $f(n)$과 같지 않아 $f$의 값이 아니다. 곧 $f : \mathbb{N} \to \mathbb{R}$는 전사가 아니다. $f$가 임의의 함수였으므로 $\mathbb{N}$에서 $\mathbb{R}$로의 함수는 모두 전사가 아니고, 전단사는 전사이므로 $\mathbb{N}$에서 $\mathbb{R}$로의 전단사는 존재하지 않는다. [[equal-cardinality]]의 정의에 의해 $|\mathbb{N}| \ne |\mathbb{R}|$이고, [[countably-infinite-set]]의 정의에 의해 $\mathbb{R}$은 가산 무한이 아니다.

마지막으로 $h(n) = n$으로 정한 $h : \mathbb{N} \to \mathbb{R}$를 생각한다. 자연수는 실수이므로 이것은 함수이고, $h(a) = h(a')$이면 $a = a'$이므로 단사이다. 따라서 $|\mathbb{N}| \le |\mathbb{R}|$이고, 전단사가 없으므로 [[comparing-cardinalities|크기 비교]]의 정의에 의해 $|\mathbb{N}| < |\mathbb{R}|$이다.
:::

## 예시와 반례

:::example[대각선 수 만들기]
$f(1) = \frac{1}{2}$, $f(2) = \frac{1}{9}$, $f(3) = 3$, $f(4) = 0.7$, $f(5) = 0.12345$이고 $f(6), f(7), \dots$는 어떤 수라 합시다. 표준 전개는 $f(1) = 0.5000\dots$, $f(2) = 0.1111\dots$, $f(4) = 0.7000\dots$, $f(5) = 0.1234500\dots$입니다. $f(3) = 3$은 $0 \le f(3) < 1$이 아니므로 $c_3 = 0$으로 둡니다.

| $n$ | $f(n)$의 표준 전개 | $c_n$ ($n$째 자리) | $b_n$ |
|---|---|---|---|
| 1 | $0.\mathbf{5}000\dots$ | 5 | 1 |
| 2 | $0.1\mathbf{1}11\dots$ | 1 | 2 |
| 3 | 해당 없음 ($f(3) = 3$) | 0 | 1 |
| 4 | $0.700\mathbf{0}\dots$ | 0 | 1 |
| 5 | $0.1234\mathbf{5}00\dots$ | 5 | 1 |

따라서 $b$의 처음 다섯 숫자는 $1, 2, 1, 1, 1$이고 $b = 0.12111\dots$입니다. $b$는 첫째 자리에서 $f(1)$과, 둘째 자리에서 $f(2)$와, 넷째 자리에서 $f(4)$와, 다섯째 자리에서 $f(5)$와 다릅니다. $f(3) = 3$은 $b < 1$이므로 같을 수 없습니다. 여섯째 자리부터는 $f(6), f(7), \dots$에 따라 같은 규칙으로 정해집니다.
:::

:::counterexample[표준 전개가 아닌 전개와 비교하면 실패한다]
$f(1) = \frac{1}{2}$를 $0.4999\dots$로 적었다고 합시다(진술에서 받아들인 대로 $0.4999\dots$와 $0.5000\dots$는 같은 수 $\frac{1}{2}$을 나타냅니다. 고등학교의 등비급수의 합 $9/100 + 9/1000 + \cdots = 1/10$을 받아들이면 확인됩니다). 이 전개의 첫째 자리 숫자는 $4$이므로 첫째 자리를 $5$로 두고 나머지를 $0$으로 둔 $b = 0.5000\dots$는 $f(1)$의 이 전개와 첫째 자리에서 다릅니다. 그런데 $b = \frac{1}{2} = f(1)$입니다. 자리마다 숫자가 다르다는 사실만으로 다른 수라고 결론지을 수 없습니다. 증명이 표준 전개만 쓰고 유일성 (D1)을 인용하는 이유입니다. 증명의 규칙은 $f(1)$의 표준 전개 $0.5000\dots$를 보고 $c_1 = 5$, $b_1 = 1$로 정하므로 $b = 0.1\dots$이고 $b \ne \frac{1}{2}$입니다.
:::

## 역사와 맥락

스탠퍼드 철학 백과사전(SEP)의 집합론 초기 발전 항목은 1873년 말 칸토어가 데데킨트에게 $\mathbb{N}$과 $\mathbb{R}$이 일대일 대응될 수 있는지 물었고, 데데킨트의 답장이 있은 며칠 뒤 칸토어가 $\mathbb{R}$이 $\mathbb{N}$과 일대일 대응된다는 가정이 모순에 이른다는 것을 증명했다고 적습니다. SEP는 이때 칸토어가 볼차노-바이어슈트라스 원리를 썼다고 적고, 이 결과가 1874년 논문에 실렸으며 그 논문이 초한 집합론의 탄생으로 정당하게 여겨진다고 적습니다. 같은 항목은 1892년의 짧은 논문에서 칸토어가 대각선 방법으로 $\mathbb{R}$이 "non-denumerable"(자연수와 일대일 대응될 수 없음)임을 보인 유명한 증명을 소개했다고 적습니다. 출처 Book of Proof는 $|\mathbb{N}| \ne |\mathbb{R}|$을 처음 인식한 사람이 칸토어이고 그가 이 항목의 대각선 논증처럼 전사가 없음을 보이는 논증을 고안했다고 적습니다(p.271).

## 확인 질문

:::check[$f(1) = 0.25$, $f(2) = \frac{1}{3} = 0.3333\dots$, $f(3) = 0.9$일 때 $c_1, c_2, c_3$과 $b_1, b_2, b_3$을 구하라.]
표준 전개는 $f(1) = 0.2500\dots$, $f(2) = 0.3333\dots$, $f(3) = 0.9000\dots$입니다. 첫째 자리는 $2$이므로 $c_1 = 2$이고 $c_1 \ne 1$이므로 $b_1 = 1$입니다. $f(2)$의 둘째 자리는 $3$이므로 $c_2 = 3$이고 $b_2 = 1$입니다. $f(3)$의 셋째 자리는 $0$이므로 $c_3 = 0$이고 $b_3 = 1$입니다. 따라서 $b = 0.111\dots$의 처음 세 숫자는 $1, 1, 1$입니다.
:::

:::check[$f(n) = n$으로 정한 $f : \mathbb{N} \to \mathbb{R}$에 대해 증명의 $b$를 구하고 $b$가 $f$의 값이 아님을 확인하라.]
모든 $n \in \mathbb{N}$에 대하여 $f(n) = n \ge 1$이므로 $0 \le f(n) < 1$이 아니고 $c_n = 0$입니다. 따라서 $b_n = 1$이고 $b = 0.111\dots$입니다. $b < 1$이고 모든 $f(n) \ge 1$이므로 $b \ne f(n)$입니다.
:::
