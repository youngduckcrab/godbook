---
title: 칸토어의 삼분 집합은 영집합이다
title_en: The Cantor Ternary Set Is a Null Set
aliases: [칸토어의 삼분 집합, 칸토어 삼분 집합, Cantor ternary set, middle-thirds Cantor set, Cantor set]
kind: proposition
field: measure-theory
msc: ["28A05", "26A30"]
level: undergrad
summary: "[0, 1] 에서 시작해 단계마다 각 닫힌구간의 왼쪽과 오른쪽 3분의 1 만 남기는 칸토어의 삼분 집합을 왼쪽 끝점의 재귀로 정의하고, 모든 단계의 끝점이 그 원소라는 것, n 단계의 구간의 길이의 합이 (2/3)ⁿ 이라는 것, 영 덮개열이 식으로 정해지는 영집합이라는 것, 길이가 양수인 구간을 포함하지 않는다는 것, 그 밖의 점은 그 밖에 놓인 둘레를 갖는다는 것을 증명한다."
requires: [set, subset, function, recursion-theorem, mathematical-induction, natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, power-of-a-real-number, sequence, limit-of-sequence, geometric-sequence-limit, geometric-series, finite-sum-of-reals, linearity-and-order-of-finite-sums, sequence-of-sets, pairing-of-natural-numbers, extended-nonnegative-reals, series-in-extended-nonnegative-reals, nonnegative-double-series, step-function, null-set-of-reals]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "10.3.2 소절, Example 10.3.8 과 그림 10.9 (p.113); 10.3.4 소절, Exercise 10.3.10, 10.3.11 (p.115–116)"
    checked: original
    note: "출처 Example 10.3.8(p.113)은 [0, 1] 의 수 가운데 3진 전개를 0 과 2 만으로 쓸 수 있는 것 전체를 칸토어 집합 C 라 하고, 첫 k 자리만 그렇게 쓸 수 있는 수 전체를 C_k 로 두어 C 가 C_k 들의 교집합이라고 적은 뒤, (i) C_k 는 유한 개의 닫힌구간의 합집합이고 C_{k−1} 의 각 닫힌구간에서 가운데 3분의 1 을 빼서 얻는다, (ii) C_k 와 C 는 닫혀 있다, (iii) m*(C_k) = (2/3)^k, (iv) 따라서 m*(C) = 0, (v) C 는 [0, 1] 과 일대일 대응한다는 것을 연습문제로 남긴다. Exercise 10.3.10(p.115)은 그 진술들을 a) C_k 는 유한 개의 닫힌구간의 합집합이고 C 는 닫혀 있다, b) m*(C_k) = (2/3)^k, c) m*(C) = 0, d) C 는 [0, 1] 과 일대일 대응한다로 다시 적어 증명하라는 물음이고, Exercise 10.3.11(p.116)은 C 가 구간을 포함하지 않음, 곧 a < b 이면 a < x < b 이고 x ∉ C 인 x 가 있음을 보이라는 물음이다. 이 항목은 3진 전개를 쓰지 않고 n 단계의 2^n 개 닫힌구간의 왼쪽 끝점 u_n(j) 를 재귀로 정해 C_n 과 C 를 정의한다. 출처의 C_k(k ≥ 1)와 이 항목의 C_n 이 같은 집합이라는 것은 이 항목이 증명하지 않는다. (1)의 (ii)는 출처 (i)의 '가운데 3분의 1 을 빼서 얻는다'에 해당하고, (4)는 출처 (iii)과 같은 수 (2/3)^n 을 길이의 합으로 적은 것이며, (5)는 출처 (iv)를 이 강의의 영집합으로 적은 것이고, (6)은 Exercise 10.3.11 의 결론이며, (7)은 출처 (ii)의 'C 는 닫혀 있다'를 여집합의 점의 둘레로 적은 것이다. 출처 (v)(C 는 [0, 1] 과 일대일 대응하고, 곧 가산이 아니다)는 이 항목에 싣지 않았다. 예시 '$C_1$과 $C_2$'의 두 집합은 출처 그림 10.9(p.113)가 그린 C_1, C_2 와 같은 대상이다. 확인 질문 '$C_3$은 길이가 얼마인 닫힌구간 몇 개로 이루어지고, 그 길이의 합은 얼마인가?'의 길이의 합 8/27 은 출처 (iii)의 값 (2/3)^k 의 k = 3 이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(판정의 ⇐ 방향: 조건으로 정한 집합족 𝒦 와 덮개, 셈의 부등식을 통독). 독립 검토 없음."
added: 2026-11-28
---

:::statement
닫힌구간 $[a, b]$와 열린구간 $(\alpha, \beta)$의 기호는 [[interval]]의 것이고 $a < b$, $\alpha < \beta$일 때만 쓴다. $[a, b)$($a \le b$)와 그 길이는 [[step-function|계단함수와 그 적분]]의 것이다. 함수와 함수의 같음은 [[function]]의 것이고, 재귀적으로 정의한 함수는 [[recursion-theorem|재귀 정리]]의 것이다. 거듭제곱 $\left(\tfrac{1}{3}\right)^n$, $2^n$은 [[power-of-a-real-number]]의 것이다. 수열과 그 수렴은 [[sequence]], [[limit-of-sequence]]의 것이고, 실수의 유한 합 $\sum_{j=1}^{N}$은 [[finite-sum-of-reals]]의 것이다. 집합열과 그 교집합 $\bigcap_{n=1}^{\infty}$, 상극한 $\limsup$은 [[sequence-of-sets|집합열]]의 것이고, 영집합, 영 덮개열과 그 총길이는 [[null-set-of-reals|ℝ 의 영집합]]의 것이며, 짝짓기 함수 $\pi$와 $\kappa_1$, $\kappa_2$는 [[pairing-of-natural-numbers|ℕ × ℕ 과 ℕ 의 전단사]]의 것이다.

**왼쪽 끝점.** $\mathbb{N}$에서 $\mathbb{R}$로의 함수 전체의 집합을 $X$라 하자. $u_1 \in X$를 $u_1(1) = 0$이고 $2$ 이상인 모든 자연수 $j$에서 $u_1(j) = \tfrac{2}{3}$인 함수로 둔다. 자연수 $n$과 $v \in X$에 대하여 $g(n, v) \in X$를, 자연수 $j$에서의 값 $g(n, v)(j)$가 $j \le 2^n$이면 $v(j)$이고 $j > 2^n$이면 $v(j - 2^n) + 2\left(\tfrac{1}{3}\right)^{n+1}$인 함수로 둔다. 그러면 재귀 정리에 의해 $u_1$이 위의 함수이고 모든 자연수 $n$에서 $u_{n+1} = g(n, u_n)$인 함수 $\mathbb{N} \to X$, 곧 자연수 $n$마다 $X$의 원소 $u_n$을 정하는 함수가 정확히 하나 있다(아래 증명).

**칸토어의 삼분 집합.** 자연수 $n$과 $1 \le j \le 2^n$인 정수 $j$에 대하여 닫힌구간
$$
J_{n,j} = \left[u_n(j),\ u_n(j) + \left(\tfrac{1}{3}\right)^n\right]
$$
을 $n$**단계의 $j$번째 구간**이라 하고, $1 \le j \le 2^n$이고 $x \in J_{n,j}$인 정수 $j$가 있는 실수 $x$ 전체의 집합을 $C_n$으로 둔다. 모든 자연수 $n$에서 $x \in C_n$인 실수 $x$ 전체의 집합, 곧 $n$번째 항이 $C_n$인 집합열의 교집합
$$
C = \bigcap_{n=1}^{\infty} C_n
$$
을 **칸토어의 삼분 집합**(Cantor ternary set)이라 한다.

다음이 성립한다. 아래에서 $n$은 자연수이고 $j$는 $1 \le j \le 2^n$인 정수이다.

1. (구간의 자리)
   - (i) $0 \le u_n(j)$이고 $u_n(j) + \left(\tfrac{1}{3}\right)^n \le 1$이다. 따라서 $J_{n,j} \subseteq [0, 1]$이고, $C_n \subseteq [0, 1]$, $C \subseteq [0, 1]$이다.
   - (ii) $u_{n+1}(j) = u_n(j)$이고 $u_{n+1}(2^n + j) = u_n(j) + 2\left(\tfrac{1}{3}\right)^{n+1}$이다. 곧 $J_{n+1,j}$와 $J_{n+1, 2^n + j}$는 $J_{n,j}$를 길이가 $\left(\tfrac{1}{3}\right)^{n+1}$인 세 닫힌구간으로 나눈 것 가운데 왼쪽 것과 오른쪽 것이다. 이때 $J_{n+1,j}$의 두 끝점은 $u_n(j)$와 $u_n(j) + \left(\tfrac{1}{3}\right)^{n+1}$이고, $J_{n+1,2^n+j}$의 두 끝점은 $u_n(j) + 2\left(\tfrac{1}{3}\right)^{n+1}$과 $u_n(j) + \left(\tfrac{1}{3}\right)^n$이다. 둘 다 $J_{n,j}$의 부분집합이다.
2. (단계의 포함) 자연수 $m$이 $n \le m$이면 $u_m(j) = u_n(j)$이고 $C_m \subseteq C_n$이다. 또 $C \subseteq C_n$이다.
3. (끝점) $J_{n,j}$의 두 끝점 $u_n(j)$와 $u_n(j) + \left(\tfrac{1}{3}\right)^n$은 $C$의 원소이다. 특히 $0$, $\tfrac{1}{3}$, $\tfrac{2}{3}$, $1$과 모든 자연수 $n$에서의 $\left(\tfrac{1}{3}\right)^n$은 $C$의 원소이고, $C \ne \emptyset$이다.
4. (길이의 합) $n$단계의 구간들의 길이의 합은
   $$
   \sum_{j=1}^{2^n} \left(\tfrac{1}{3}\right)^n = \left(\tfrac{2}{3}\right)^n
   $$
   이고, $n$번째 항이 $\left(\tfrac{2}{3}\right)^n$인 수열은 $0$으로 수렴한다.
5. (영집합) 자연수 $m$마다 $k = \kappa_1(m)$, $i = \kappa_2(m)$으로 두고, $i \le 2^k$이면
   $$
   \begin{gathered}
   c_m = u_k(i), \\
   d_m = u_k(i) + 2\left(\tfrac{1}{3}\right)^k
   \end{gathered}
   $$
   으로, $i > 2^k$이면 $c_m = d_m = 0$으로 정한 실수열의 쌍 $\bigl((c_m), (d_m)\bigr)$은 총길이가 $4$인 $C$의 영 덮개열이다. 따라서 $C$는 영집합이고, $C$의 모든 부분집합도 영집합이다.
6. (구간을 포함하지 않는다) $\alpha < \beta$인 실수 $\alpha$, $\beta$에 대하여 $\alpha \le y < \beta$이고 $y \notin C$인 실수 $y$가 있다. 곧 $[\alpha, \beta)$는 $C$의 부분집합이 아니다. 따라서 닫힌구간 $[\alpha, \beta]$와 열린구간 $(\alpha, \beta)$도 $C$의 부분집합이 아니다.
7. (밖의 점의 둘레) $x$가 $C$의 원소가 아닌 실수이면, 양수 $\delta$가 있어 $|y - x| < \delta$인 모든 실수 $y$가 $C$의 원소가 아니다.
:::

:::english
Closed intervals $[a, b]$ and open intervals $(\alpha, \beta)$ are as in the entry on intervals and are used only when $a < b$, $\alpha < \beta$. The set $[a, b)$ ($a \le b$) and its length are as in the entry on step functions. Functions and their equality are as in the entry on functions, and recursively defined functions are as in the recursion theorem. The powers $\left(\tfrac{1}{3}\right)^n$, $2^n$ are powers of real numbers. Sequences and their convergence and finite sums $\sum_{j=1}^{N}$ of real numbers are as defined earlier. Sequences of sets with their intersection $\bigcap_{n=1}^{\infty}$ and limit superior $\limsup$ are as in the entry on sequences of sets; null sets, null cover sequences and their total length are as in the entry on null sets of real numbers; and the pairing function $\pi$ with $\kappa_1$, $\kappa_2$ is as in the corresponding entry.

**Left endpoints.** Let $X$ be the set of all functions from $\mathbb{N}$ to $\mathbb{R}$. Let $u_1 \in X$ be the function with $u_1(1) = 0$ and $u_1(j) = \tfrac{2}{3}$ for every natural number $j \ge 2$. For a natural number $n$ and $v \in X$, let $g(n, v) \in X$ be the function whose value $g(n, v)(j)$ at a natural number $j$ is $v(j)$ if $j \le 2^n$ and $v(j - 2^n) + 2\left(\tfrac{1}{3}\right)^{n+1}$ if $j > 2^n$. Then by the recursion theorem there is exactly one function $\mathbb{N} \to X$, assigning to each natural number $n$ an element $u_n$ of $X$, such that $u_1$ is the function above and $u_{n+1} = g(n, u_n)$ for every natural number $n$ (proved below).

**The Cantor ternary set.** For a natural number $n$ and an integer $j$ with $1 \le j \le 2^n$, the closed interval
$$
J_{n,j} = \left[u_n(j),\ u_n(j) + \left(\tfrac{1}{3}\right)^n\right]
$$
is called the **$j$th interval of stage $n$**, and $C_n$ denotes the set of all real numbers $x$ for which there is an integer $j$ with $1 \le j \le 2^n$ and $x \in J_{n,j}$. The set of all real numbers $x$ with $x \in C_n$ for every natural number $n$, that is, the intersection of the sequence of sets whose $n$th term is $C_n$,
$$
C = \bigcap_{n=1}^{\infty} C_n,
$$
is called the **Cantor ternary set**.

The following hold. Below, $n$ is a natural number and $j$ is an integer with $1 \le j \le 2^n$.

1. (Position of the intervals)
   - (i) $0 \le u_n(j)$ and $u_n(j) + \left(\tfrac{1}{3}\right)^n \le 1$. Hence $J_{n,j} \subseteq [0, 1]$, and $C_n \subseteq [0, 1]$, $C \subseteq [0, 1]$.
   - (ii) $u_{n+1}(j) = u_n(j)$ and $u_{n+1}(2^n + j) = u_n(j) + 2\left(\tfrac{1}{3}\right)^{n+1}$. That is, $J_{n+1,j}$ and $J_{n+1, 2^n + j}$ are the left and the right ones of the three closed intervals of length $\left(\tfrac{1}{3}\right)^{n+1}$ into which $J_{n,j}$ is divided: the endpoints of $J_{n+1,j}$ are $u_n(j)$ and $u_n(j) + \left(\tfrac{1}{3}\right)^{n+1}$, and those of $J_{n+1,2^n+j}$ are $u_n(j) + 2\left(\tfrac{1}{3}\right)^{n+1}$ and $u_n(j) + \left(\tfrac{1}{3}\right)^n$. Both are subsets of $J_{n,j}$.
2. (Inclusion between stages) If $m$ is a natural number with $n \le m$, then $u_m(j) = u_n(j)$ and $C_m \subseteq C_n$. Moreover $C \subseteq C_n$.
3. (Endpoints) The two endpoints $u_n(j)$ and $u_n(j) + \left(\tfrac{1}{3}\right)^n$ of $J_{n,j}$ belong to $C$. In particular $0$, $\tfrac{1}{3}$, $\tfrac{2}{3}$, $1$ and $\left(\tfrac{1}{3}\right)^n$ for every natural number $n$ belong to $C$, and $C \ne \emptyset$.
4. (Sum of lengths) The sum of the lengths of the intervals of stage $n$ is
   $$
   \sum_{j=1}^{2^n} \left(\tfrac{1}{3}\right)^n = \left(\tfrac{2}{3}\right)^n,
   $$
   and the sequence whose $n$th term is $\left(\tfrac{2}{3}\right)^n$ converges to $0$.
5. (Null set) For each natural number $m$ put $k = \kappa_1(m)$, $i = \kappa_2(m)$, and let
   $$
   \begin{gathered}
   c_m = u_k(i), \\
   d_m = u_k(i) + 2\left(\tfrac{1}{3}\right)^k
   \end{gathered}
   $$
   if $i \le 2^k$, and $c_m = d_m = 0$ if $i > 2^k$. The pair of real sequences $\bigl((c_m), (d_m)\bigr)$ so defined is a null cover sequence of $C$ with total length $4$. Hence $C$ is a null set, and so is every subset of $C$.
6. (No intervals) For real numbers $\alpha < \beta$ there is a real number $y$ with $\alpha \le y < \beta$ and $y \notin C$. That is, $[\alpha, \beta)$ is not a subset of $C$. Hence neither the closed interval $[\alpha, \beta]$ nor the open interval $(\alpha, \beta)$ is a subset of $C$.
7. (Neighbourhoods of outside points) If $x$ is a real number not in $C$, then there is a positive number $\delta$ such that no real number $y$ with $|y - x| < \delta$ belongs to $C$.
:::

## 직관

막대 하나를 세 토막으로 나눠 가운데 토막을 버리고, 남은 두 토막을 다시 각각 세 토막으로 나눠 가운데를 버리는 일을 끝없이 되풀이한다고 합시다. $n$번 되풀이하면 길이가 $\left(\tfrac{1}{3}\right)^n$인 토막이 $2^n$개 남고, 이것이 $n$단계의 구간 $J_{n,1}, \dots, J_{n,2^n}$입니다((1)의 (ii)가 "왼쪽과 오른쪽 토막만 남긴다"는 것입니다). 끝까지 한 번도 버려지지 않는 점, 곧 모든 단계의 어떤 구간에 드는 점 전체가 칸토어의 삼분 집합 $C$입니다. 비유와 다른 점은 토막이 닫힌구간이어서 버리는 가운데 토막에 양 끝점이 들지 않는다는 것입니다. 그래서 각 단계의 끝점은 끝까지 남습니다((3)).

$n$단계의 구간들의 길이의 합은 $\left(\tfrac{2}{3}\right)^n$이고 $n$이 커지면 $0$으로 갑니다((4)). 그래서 $C$는 길이의 합이 얼마든지 작은 구간들로 덮입니다. 이 강의의 영집합은 그런 덮개를 단계마다 따로 갖는 것이 아니라, 총길이가 유한한 칸의 열 하나가 각 점을 끝없이 여러 번 덮을 것을 요구합니다. (5)는 모든 단계의 구간을 한 줄로 늘어놓아 그 열을 만듭니다. $C$의 점은 단계마다 그 단계의 한 구간에 들므로 끝없이 여러 번 덮이고, 길이의 합은 $\sum_{k} 2\left(\tfrac{2}{3}\right)^k = 4$로 유한합니다. 각 칸의 오른쪽을 늘려 길이를 두 배로 잡는 까닭은 칸이 $[c, d)$ 꼴이어서 오른쪽 끝점이 빠지기 때문입니다(아래 반례).

$C$는 영집합이지만 원소가 적은 집합은 아닙니다. 서로 다른 수 $\tfrac{1}{3}, \tfrac{1}{9}, \tfrac{1}{27}, \dots$가 모두 $C$의 원소입니다((3)). 그러면서도 길이가 양수인 구간은 하나도 포함하지 않습니다((6)). 이 항목은 3진 전개를 쓰지 않고 끝점을 재귀로 정합니다. $n + 1$단계의 왼쪽 끝점은 $n$단계의 왼쪽 끝점에 $0$이나 $2\left(\tfrac{1}{3}\right)^{n+1}$을 더한 것입니다. $u_{n+1}(j)$의 번호 $j$가 $2^n$ 이하이면 더하지 않은 것이고, $2^n$보다 크면 $2\left(\tfrac{1}{3}\right)^{n+1}$을 더한 것입니다.

## 증명

:::idea
(1)과 (2)는 재귀식에서 단계에 대한 귀납법으로 나온다. (5)는 $k$단계의 구간을 왼쪽 끝점에서 길이 $2\left(\tfrac{1}{3}\right)^k$인 칸으로 늘려 짝짓기 함수로 늘어놓고, 이중급수의 합과 등비급수로 총길이를 센다. (6)은 (5)와 길이가 양수인 구간이 영집합이 아니라는 것에서, (7)은 한 단계의 구간 $2^n$개를 하나씩 피하는 둘레를 귀납으로 좁혀 얻는다.
:::

:::hint
$C$의 점 $x$와 자연수 $M$이 주어지면 $x \in C_M$이다. $x$가 드는 $M$단계의 구간의 번호를 $i$라 하면, $(M, i)$의 짝짓기 값은 $M$ 이상이다.
:::

:::hint
(7)에서 $x \notin C_n$이면 $x$는 $n$단계의 각 구간의 왼쪽에 있거나 오른쪽에 있다. 구간을 하나씩 더해 가며, 그때까지의 구간을 모두 피하는 둘레의 반지름을 두 수의 최소로 줄인다.
:::

:::proof
실수의 계산과 순서는 [[real-number-arithmetic]], [[real-order-axioms]], [[order-properties-of-reals]]로 다루며, 그 (10)에 의해 정수 사이의 부등식도 실수의 부등식으로 읽는다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7)로 다루고, 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). "거듭제곱 ($k$)", "합 항목 ($k$)", "짝짓기 항목 ($k$)", "영집합 항목 ($k$)"은 각각 [[power-of-a-real-number]], [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]], [[pairing-of-natural-numbers|ℕ × ℕ 과 ℕ 의 전단사]], [[null-set-of-reals|ℝ 의 영집합]]의 번호이다. 귀납법은 [[mathematical-induction|수학적 귀납법]]이고, 시작점이 $1$이 아닌 꼴도 쓴다.

**거듭제곱에 관한 사실.** 다음을 (가)라 부른다. $0$ 이상인 정수 $n$, $m$에 대하여 $2^n$은 자연수이고 $2^{n+1} = 2^n + 2^n$이며, $n \le m$이면 $2^n \le 2^m$이다. 또 $\left(\tfrac{1}{3}\right)^n > 0$이고 $3\left(\tfrac{1}{3}\right)^{n+1} = \left(\tfrac{1}{3}\right)^n$이며, $\left(\tfrac{1}{3}\right)^{n+1} < \left(\tfrac{1}{3}\right)^n$이다.

거듭제곱 (7)에 의해 $2^n$은 자연수이고, 거듭제곱 (1)에 의해 $2^{n+1} = 2^n \cdot 2 = 2^n + 2^n$이다. $n \le m$이면 $m - n$은 $0$ 이상인 정수이고 거듭제곱 (2)의 (i)에 의해 $2^m = 2^n \, 2^{m-n}$이며, 거듭제곱 (6)의 (iv)에 의해 $1 \le 2^{m-n}$이고 (6)의 (i)에 의해 $0 < 2^n$이므로 $2^n \le 2^m$이다. 거듭제곱 (6)의 (i)에 의해 $\left(\tfrac{1}{3}\right)^n > 0$이고, (1)에 의해 $3\left(\tfrac{1}{3}\right)^{n+1} = 3 \cdot \tfrac{1}{3}\left(\tfrac{1}{3}\right)^n = \left(\tfrac{1}{3}\right)^n$이다. 따라서 $\left(\tfrac{1}{3}\right)^n - \left(\tfrac{1}{3}\right)^{n+1} = 2\left(\tfrac{1}{3}\right)^{n+1} > 0$이다.

**재귀 정의.** 자연수 $n$, $v \in X$와 자연수 $j$에 대하여 (Z5)에 의해 $j \le 2^n$이거나 $j > 2^n$ 가운데 정확히 하나가 성립한다. $j > 2^n$이면 (Z1)에 의해 $j \ge 2^n + 1$이므로 $j - 2^n$은 자연수이고 $v(j - 2^n)$이 정해진다. 그래서 위의 식은 각 $j$에서 실수 하나를 정하고, 재귀 정리의 (1)에 의해 $g(n, v)$는 $X$의 원소이며, 다시 그 (1)에 의해 $g$는 $\mathbb{N} \times X$에서 $X$로의 함수이다. $u_1$도 같은 이유로 $X$의 원소이다. 재귀 정리에 의해 $u_1$에서 시작하고 $u_{n+1} = g(n, u_n)$인 함수 $\mathbb{N} \to X$가 정확히 하나 있다.

**(1)** (ii)를 먼저 보인다. $j \le 2^n$이므로 $g$의 정의에 의해 $u_{n+1}(j) = g(n, u_n)(j) = u_n(j)$이다. $2^n + j > 2^n$이고 $(2^n + j) - 2^n = j$이므로 $u_{n+1}(2^n + j) = u_n(j) + 2\left(\tfrac{1}{3}\right)^{n+1}$이다. (가)에 의해 $2^n + j \le 2^n + 2^n = 2^{n+1}$이므로 $J_{n+1, 2^n + j}$가 정해지고, 그 오른쪽 끝점은 (가)에 의해 $u_n(j) + 3\left(\tfrac{1}{3}\right)^{n+1} = u_n(j) + \left(\tfrac{1}{3}\right)^n$이다. 따라서 두 구간의 끝점은 적힌 것과 같다. $u_n(j) \le u_n(j) + 2\left(\tfrac{1}{3}\right)^{n+1}$이고 (가)에 의해 $u_n(j) + \left(\tfrac{1}{3}\right)^{n+1} < u_n(j) + \left(\tfrac{1}{3}\right)^n$이므로 두 구간의 모든 점 $y$는 $u_n(j) \le y \le u_n(j) + \left(\tfrac{1}{3}\right)^n$을 만족해 $J_{n,j}$의 원소이다. 세 닫힌구간 $\left[u_n(j) + (l - 1)\left(\tfrac{1}{3}\right)^{n+1},\ u_n(j) + l\left(\tfrac{1}{3}\right)^{n+1}\right]$($l = 1, 2, 3$)의 길이는 모두 $\left(\tfrac{1}{3}\right)^{n+1}$이고, $l = 1$인 것이 $J_{n+1,j}$, $l = 3$인 것이 $J_{n+1, 2^n + j}$이다.

(i) 자연수 $n$에 대한 명제 $S_n$을 "$1 \le j \le 2^n$인 모든 정수 $j$에서 $0 \le u_n(j)$이고 $u_n(j) + \left(\tfrac{1}{3}\right)^n \le 1$"로 두고 귀납법으로 보인다. $n = 1$이면 $2^1 = 2$이고, $u_1(1) = 0$, $0 + \tfrac{1}{3} \le 1$이며 $u_1(2) = \tfrac{2}{3} \ge 0$, $\tfrac{2}{3} + \tfrac{1}{3} = 1$이다. $S_n$이 참이라 하고 $1 \le j \le 2^{n+1}$이라 하자. $j \le 2^n$이면 (ii)와 귀납 가정, (가)에 의해 $u_{n+1}(j) = u_n(j) \ge 0$이고 $u_{n+1}(j) + \left(\tfrac{1}{3}\right)^{n+1} < u_n(j) + \left(\tfrac{1}{3}\right)^n \le 1$이다. $j > 2^n$이면 $j' = j - 2^n$은 (가)에 의해 $1 \le j' \le 2^n$인 정수이고 $j = 2^n + j'$이므로, (ii)와 귀납 가정에 의해 $u_{n+1}(j) = u_n(j') + 2\left(\tfrac{1}{3}\right)^{n+1} \ge 0$이고 $u_{n+1}(j) + \left(\tfrac{1}{3}\right)^{n+1} = u_n(j') + \left(\tfrac{1}{3}\right)^n \le 1$이다. 따라서 $S_{n+1}$이 참이다.

$y \in J_{n,j}$이면 $0 \le u_n(j) \le y \le u_n(j) + \left(\tfrac{1}{3}\right)^n \le 1$이므로 $y \in [0, 1]$이다. $C_n$의 원소는 어떤 $J_{n,j}$의 원소이므로 $C_n \subseteq [0, 1]$이고, $C$의 원소는 $C_1$의 원소이므로 $C \subseteq [0, 1]$이다.

**(2)** 먼저 $C_{n+1} \subseteq C_n$을 보인다. $x \in C_{n+1}$이면 $1 \le j'' \le 2^{n+1}$이고 $x \in J_{n+1, j''}$인 정수 $j''$이 있다. $j'' \le 2^n$이면 (1)의 (ii)에 의해 $J_{n+1, j''} \subseteq J_{n, j''}$이다. $j'' > 2^n$이면 $j' = j'' - 2^n$은 $1 \le j' \le 2^n$인 정수이고 (1)의 (ii)에 의해 $J_{n+1, j''} = J_{n+1, 2^n + j'} \subseteq J_{n, j'}$이다. 어느 경우에나 $x \in C_n$이다.

이제 $n$을 고정하고, $m \ge n$인 정수 $m$에 대한 명제 "$u_m(j) = u_n(j)$이고 $C_m \subseteq C_n$"을 시작점이 $n$인 귀납법으로 보인다. $m = n$이면 당연하다. $m$에서 참이면, (가)에 의해 $j \le 2^n \le 2^m$이므로 (1)의 (ii)를 $m$에 써서 $u_{m+1}(j) = u_m(j) = u_n(j)$이고, 위에서 보인 것에 의해 $C_{m+1} \subseteq C_m \subseteq C_n$이다. 마지막으로 $x \in C$이면 [[sequence-of-sets|집합열]]의 교집합의 정의에 의해 모든 자연수에서 $x \in C_n$이므로 $C \subseteq C_n$이다.

**(3)** 자연수 $m$을 하나 잡고 두 끝점이 $C_m$의 원소임을 보이면 된다. $m < n$이면 끝점은 $J_{n,j} \subseteq C_n$의 원소이고 (2)에 의해 $C_n \subseteq C_m$이다. 이제 $m \ge n$이라 하자. 왼쪽 끝점은 (2)에 의해 $u_n(j) = u_m(j)$이고, (가)에 의해 $j \le 2^n \le 2^m$이므로 $u_m(j) \in J_{m,j} \subseteq C_m$이다. 오른쪽 끝점 $w = u_n(j) + \left(\tfrac{1}{3}\right)^n$에 대하여, $m \ge n$인 정수 $m$에 대한 명제 "$1 \le j' \le 2^m$이고 $u_m(j') + \left(\tfrac{1}{3}\right)^m = w$인 정수 $j'$이 있다"를 시작점이 $n$인 귀납법으로 보인다. $m = n$이면 $j' = j$이다. $m$에서 그런 $j'$이 있으면 $j'' = 2^m + j'$은 (가)에 의해 $1 \le j'' \le 2^{m+1}$이고, (1)의 (ii)와 (가)에 의해
$$
\begin{aligned}
&u_{m+1}(j'') + \left(\tfrac{1}{3}\right)^{m+1} \\
&\quad = u_m(j') + 3\left(\tfrac{1}{3}\right)^{m+1} \\
&\quad = u_m(j') + \left(\tfrac{1}{3}\right)^m = w
\end{aligned}
$$
이다. 따라서 모든 $m \ge n$에서 $w$는 어떤 $J_{m,j'}$의 오른쪽 끝점이고 $w \in C_m$이다.

$u_1(1) = 0$, $u_1(2) = \tfrac{2}{3}$이고 $J_{1,1} = \left[0, \tfrac{1}{3}\right]$, $J_{1,2} = \left[\tfrac{2}{3}, 1\right]$이므로 $0$, $\tfrac{1}{3}$, $\tfrac{2}{3}$, $1$은 $C$의 원소이다. 모든 자연수 $n$에서 $1 \le 2^1 \le 2^n$이므로 (2)에 의해 $u_n(1) = u_1(1) = 0$이고, $J_{n,1}$의 오른쪽 끝점 $\left(\tfrac{1}{3}\right)^n$은 $C$의 원소이다. $0 \in C$이므로 $C \ne \emptyset$이다.

**(4)** [[linearity-and-order-of-finite-sums|유한 합의 선형성과 순서]]의 (2)에 의해 $\sum_{j=1}^{2^n} \left(\tfrac{1}{3}\right)^n = 2^n\left(\tfrac{1}{3}\right)^n$이고, 거듭제곱 (2)의 (iii)에 의해 이것은 $\left(2 \cdot \tfrac{1}{3}\right)^n = \left(\tfrac{2}{3}\right)^n$이다. $\left|\tfrac{2}{3}\right| < 1$이므로 [[geometric-sequence-limit|등비수열의 극한]]의 (1)에 의해 이 수열은 $0$으로 수렴한다.

**(5)** *쌍이 정해진다.* 자연수 $m$마다 (Z5)에 의해 $i \le 2^k$이거나 $i > 2^k$ 가운데 하나이고, 각 경우의 식이 실수 하나를 정하므로 [[sequence]]의 (1)에 의해 두 실수열이 정해진다. (가)에 의해 $2\left(\tfrac{1}{3}\right)^k > 0$이므로 모든 $m$에서 $c_m \le d_m$이다.

*총길이.* 자연수 $k$, $i$에 대하여 $a_{k,i}$를 $i \le 2^k$이면 $2\left(\tfrac{1}{3}\right)^k$, $i > 2^k$이면 $0$으로 두면, [[nonnegative-double-series|0 이상인 이중급수]]의 뜻으로 $a$를 $\pi$로 한 줄로 늘어놓은 원소열의 $m$번째 항이 $d_m - c_m$이다. 합 항목의 (4)에 의해 $\sum_{i=1}^{\infty} a_{k,i} = \sum_{i=1}^{2^k} 2\left(\tfrac{1}{3}\right)^k$이고, 이것은 유한 합의 선형성과 순서의 (2)와 거듭제곱 (2)의 (iii)에 의해 $2^k \cdot 2\left(\tfrac{1}{3}\right)^k = 2\left(\tfrac{2}{3}\right)^k$이다. 거듭제곱 (1)에 의해 $2\left(\tfrac{2}{3}\right)^k = \tfrac{4}{3}\left(\tfrac{2}{3}\right)^{k-1}$이므로, 이중급수 항목의 (2), [[geometric-series|등비급수]]의 (2)(첫째 항 $\tfrac{4}{3}$, 공비 $\tfrac{2}{3}$)와 합 항목의 (3)의 (i)에 의해
$$
\begin{aligned}
\sum_{m=1}^{\infty} (d_m - c_m) &= \sum_{k=1}^{\infty} \sum_{i=1}^{\infty} a_{k,i} \\
&= \sum_{k=1}^{\infty} 2\left(\tfrac{2}{3}\right)^k \\
&= \frac{4/3}{1 - 2/3} = 4
\end{aligned}
$$
이다.

*덮기.* $x \in C$와 자연수 $M$이 주어졌다고 하자. $x \in C_M$이므로 $1 \le i \le 2^M$이고 $x \in J_{M,i}$인 정수 $i$가 있다. $m = \pi(M, i)$로 두면 짝짓기 항목의 (1)에 의해 $\kappa_1(m) = M$, $\kappa_2(m) = i$이고, $i \le 2^M$이므로 $c_m = u_M(i)$, $d_m = u_M(i) + 2\left(\tfrac{1}{3}\right)^M$이다. (가)에 의해
$$
c_m \le x \le u_M(i) + \left(\tfrac{1}{3}\right)^M < d_m
$$
이므로 $x \in [c_m, d_m)$이고, 짝짓기 항목의 (4)에 의해 $M \le m$이다. [[sequence-of-sets|집합열]]의 (8)에 의해 $x \in \limsup_{m \to \infty} [c_m, d_m)$이다. 따라서 이 쌍은 총길이가 $4 < \infty$인 $C$의 영 덮개열이고 $C$는 영집합이다. 영집합 항목의 (2)에 의해 $C$의 부분집합도 영집합이다.

**(6)** $[\alpha, \beta) \subseteq C$라 하면, 영집합 항목의 (7)에 의해 $[\alpha, \beta)$를 포함하는 $C$는 영집합이 아니므로 (5)와 모순이다. 따라서 $[\alpha, \beta)$의 원소 가운데 $C$의 원소가 아닌 $y$가 있다. $[\alpha, \beta) \subseteq [\alpha, \beta]$이므로 $[\alpha, \beta]$도 $C$의 부분집합이 아니다. $\gamma = \tfrac{\alpha + \beta}{2}$로 두면 $\alpha < \gamma < \beta$이고 $[\gamma, \beta) \subseteq (\alpha, \beta)$이므로, 앞의 것을 $\gamma < \beta$에 쓰면 $(\alpha, \beta)$도 $C$의 부분집합이 아니다.

**(7)** $x \notin C$이므로 교집합의 정의에 의해 $x \notin C_n$인 자연수 $n$이 있다. 이 $n$을 고정한다. $0 \le N \le 2^n$인 정수 $N$에 대한 명제 $R_N$을 "양수 $\delta$가 있어, $|y - x| < \delta$인 모든 실수 $y$와 $1 \le j \le N$인 모든 정수 $j$에서 $y \notin J_{n,j}$"로 두고, $0 \le N < 2^n$이면 $R_N \Rightarrow R_{N+1}$임을 보인다. $R_0$은 $\delta = 1$로 참이다(그런 $j$가 없다).

$R_N$이 참이고 $N < 2^n$이라 하자. $R_N$의 양수를 $\delta$라 하고 $u = u_n(N + 1)$, $h = \left(\tfrac{1}{3}\right)^n$으로 두자. $x \notin C_n$이므로 $x \notin J_{n, N+1}$이고, 따라서 $x < u$이거나 $u + h < x$이다. 앞의 경우 $e = u - x$, 뒤의 경우 $e = x - (u + h)$로 두면 $e > 0$이다. $\delta' = \min\{\delta, e\}$는 [[absolute-value]]의 (10)에 의해 $\delta$와 $e$ 가운데 하나이므로 양수이고, $\delta' \le \delta$, $\delta' \le e$이다. $|y - x| < \delta'$이면 $|y - x| < \delta$이므로 $j \le N$인 $J_{n,j}$에는 $y$가 들지 않는다. 또 절댓값의 (7)에 의해 $x - e < y < x + e$이므로, 앞의 경우 $y < x + e = u$이고 뒤의 경우 $y > x - e = u + h$이어서 $y \notin J_{n, N+1}$이다. 따라서 $R_{N+1}$이 참이다.

귀납법으로 $R_{2^n}$이 참이다. 그 양수 $\delta$에 대하여 $|y - x| < \delta$이면 $y$는 $n$단계의 어느 구간에도 들지 않으므로 $y \notin C_n$이고, (2)에 의해 $C \subseteq C_n$이므로 $y \notin C$이다.
:::

## 예시와 반례

:::example[$C_1$과 $C_2$]
$u_1(1) = 0$, $u_1(2) = \tfrac{2}{3}$이므로 $C_1 = \left[0, \tfrac{1}{3}\right] \cup \left[\tfrac{2}{3}, 1\right]$입니다. (1)의 (ii)에 의해 $u_2(1) = 0$, $u_2(2) = \tfrac{2}{3}$, $u_2(3) = u_1(1) + \tfrac{2}{9} = \tfrac{2}{9}$, $u_2(4) = u_1(2) + \tfrac{2}{9} = \tfrac{8}{9}$이고, 2단계의 네 구간은
$$
\begin{gathered}
J_{2,1} = \left[0, \tfrac{1}{9}\right], \quad J_{2,2} = \left[\tfrac{2}{3}, \tfrac{7}{9}\right], \\
J_{2,3} = \left[\tfrac{2}{9}, \tfrac{1}{3}\right], \quad J_{2,4} = \left[\tfrac{8}{9}, 1\right]
\end{gathered}
$$
입니다. $J_{1,1}$에서 가운데 $\left(\tfrac{1}{9}, \tfrac{2}{9}\right)$가, $J_{1,2}$에서 가운데 $\left(\tfrac{7}{9}, \tfrac{8}{9}\right)$가 빠졌습니다. 번호는 크기순이 아니라 "왼쪽 토막은 같은 번호, 오른쪽 토막은 $2^n$을 더한 번호"를 따릅니다. 길이의 합은 $4 \cdot \tfrac{1}{9} = \tfrac{4}{9} = \left(\tfrac{2}{3}\right)^2$로 (4)와 같습니다.
:::

:::example[$\tfrac{1}{5}$이 빠지는 단계]
$\tfrac{1}{2}$은 $\tfrac{1}{3} < \tfrac{1}{2} < \tfrac{2}{3}$이므로 $C_1$의 원소가 아니고, 따라서 $C$의 원소가 아닙니다. $\tfrac{1}{5}$은 $0 \le \tfrac{1}{5} \le \tfrac{1}{3}$이므로 $C_1$의 원소입니다. 그러나 $\tfrac{1}{9} < \tfrac{1}{5} < \tfrac{2}{9}$이고($5 < 9$이고 $9 < 2 \cdot 5$), $\tfrac{1}{5} < \tfrac{2}{3}$, $\tfrac{1}{5} < \tfrac{8}{9}$이므로 위의 네 구간 어디에도 들지 않습니다. 그래서 $\tfrac{1}{5} \notin C_2$이고 $\tfrac{1}{5} \notin C$입니다. (7)의 둘레도 직접 볼 수 있습니다. $\delta = \min\left\{\tfrac{1}{5} - \tfrac{1}{9}, \tfrac{2}{9} - \tfrac{1}{5}\right\} = \min\left\{\tfrac{4}{45}, \tfrac{1}{45}\right\} = \tfrac{1}{45}$로 두면 $|y - \tfrac{1}{5}| < \delta$인 $y$는 $\tfrac{1}{9} < y < \tfrac{2}{9}$를 만족해 $C_2$에, 따라서 $C$에 들지 않습니다.
:::

:::counterexample[넓히지 않은 칸들이 $1$을 덮지 못하는 예]
(5)에서 칸을 늘리지 않고 $i \le 2^k$일 때 $c_m = u_k(i)$, $d_m = u_k(i) + \left(\tfrac{1}{3}\right)^k$로 두었다고 합시다. 총길이는 $\sum_k \left(\tfrac{2}{3}\right)^k = 2$로 유한합니다. 그러나 (1)의 (i)에 의해 모든 칸에서 $d_m \le 1$이므로 $1 \notin [c_m, d_m)$이고, $i > 2^k$인 칸은 $[0, 0) = \emptyset$입니다. 그래서 $1$은 어느 칸에도 들지 않아 이 열의 상극한의 원소가 아닙니다. (3)에 의해 $1 \in C$이므로 이 열은 $C$의 영 덮개열이 아닙니다.
:::

## 확인 질문

:::check[$C_3$은 길이가 얼마인 닫힌구간 몇 개로 이루어지고, 그 길이의 합은 얼마인가?]
길이가 $\tfrac{1}{27}$인 닫힌구간 $2^3 = 8$개이고, 길이의 합은 (4)에 의해 $\tfrac{8}{27}$입니다. (1)의 (ii)로 계산하면 왼쪽 끝점은 $u_3(1), \dots, u_3(8) = 0, \tfrac{18}{27}, \tfrac{6}{27}, \tfrac{24}{27}, \tfrac{2}{27}, \tfrac{20}{27}, \tfrac{8}{27}, \tfrac{26}{27}$입니다. 앞의 넷은 $u_2$의 값과 같고, 뒤의 넷은 $u_2$의 값에 $\tfrac{2}{27}$을 더한 것입니다.
:::

:::check[$\tfrac{7}{9}$은 $C$의 원소인가?]
그렇습니다. $\tfrac{7}{9}$은 $J_{2,2} = \left[\tfrac{2}{3}, \tfrac{7}{9}\right]$의 오른쪽 끝점이므로 (3)에 의해 $C$의 원소입니다.
:::

:::check[(5)의 영 덮개열의 $10$번째 칸은?]
$\pi(2, 3) = 2^{1}(2 \cdot 3 - 1) = 10$이므로 $\kappa_1(10) = 2$, $\kappa_2(10) = 3$입니다. $3 \le 2^2$이므로 $c_{10} = u_2(3) = \tfrac{2}{9}$, $d_{10} = \tfrac{2}{9} + 2 \cdot \tfrac{1}{9} = \tfrac{4}{9}$이고, $10$번째 칸은 $\left[\tfrac{2}{9}, \tfrac{4}{9}\right)$입니다. 이 칸은 $J_{2,3} = \left[\tfrac{2}{9}, \tfrac{1}{3}\right]$을 포함합니다.
:::
