---
title: 연속함수는 수열의 수렴을 보존한다
title_en: Continuous Maps Preserve Convergence of Sequences
aliases: [연속과 수열, 수열의 연속성, continuity and sequences, sequential continuity]
kind: proposition
field: topology
msc: ["54C05", "54A20"]
level: undergrad
summary: 위상공간 사이의 함수 f 가 점 p 에서 연속이고 수열이 p 로 수렴하면 함숫값의 수열은 f(p) 로 수렴한다. 하우스도르프 공간 사이에서는 lim 과 f 를 바꿀 수 있고, 위상동형사상은 수렴을 양쪽으로 옮긴다. 해석학 입문의 수열과 연속에 관한 정리의 해당 방향을 다시 얻는다.
requires: [even-and-odd, function, function-composition, inverse-function, image-and-preimage, real-valued-function, order-properties-of-reals, basic-limits, sequence, limit-of-sequence, sequences-and-continuity, continuous-function, metric-space-examples, standard-topology-on-reals, topological-space, neighborhood, continuous-map, homeomorphism, continuity-criteria, continuity-agrees-with-analysis, homeomorphism-examples, metric-space-is-hausdorff, sequence-in-a-space, limit-unique-in-hausdorff, convergence-in-metric-spaces]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Sequences and convergence 절: Theorem sequential-continuity 와 그 앞 문단, 증명 (content/topological-spaces.tex:727, 744–756)"
    checked: original
    note: "(2)는 출처 Theorem sequential-continuity 의 첫 문장(746줄: f 가 연속이면 x_n → x 일 때 f(x_n) → f(x))과 같고, 출처의 증명(749줄)도 f⁻¹(U) 가 x 의 근방이라는 것을 쓴다. 이 항목은 한 점에서 연속인 경우((1))로 적는다. 출처는 같은 Theorem 에서 X 가 first countable 이면 거꾸로도 성립한다고 적고, 그 증명(751줄)은 Lemma closure-convergence 의 거꾸로를 쓴다. 이 항목은 그 방향을 싣지 않는다. 출처 751줄은 거꾸로의 가정을 'f(x_n) → x whenever x_n → x' 로 적는다. 앞 문단(727줄)은 ℝⁿ 에서의 수열에 의한 연속의 판정이 일반 위상공간에서는 그대로 성립하지 않는다고 적는다."
  - ref: lebl-basic-analysis
    loc: "7.5.1절 Definition 7.5.1, Proposition 7.5.2 와 그 증명 (p.288), 3.2절 Example 3.2.10 (p.125)"
    checked: original
    note: "(1)은 출처 Proposition 7.5.2(p.288, 거리공간 사이의 f 가 c 에서 연속인 것은 정확히 c 로 수렴하는 모든 수열에서 f(x_n) 이 f(c) 로 수렴할 때)의 한 방향을 위상공간에서 적은 것이다. 출처의 그 방향의 증명은 ε–δ 로 한다. 출처의 거꾸로의 증명은 모든 n ∈ ℕ 에 대해 d_X(x_n, c) < 1/n 이고 d_Y(f(x_n), f(c)) ≥ ε 인 x_n 을 잡는다. 이 항목은 그 방향을 싣지 않는다. 반례 '0 에서 연속이 아닌 계단 함수'는 출처 Example 3.2.10(p.125, x < 0 이면 −1, x ≥ 0 이면 1 인 함수가 0 으로 수렴하는 −1/n 에서 함숫값이 −1 로 수렴해 0 에서 연속이 아님을 보인다)과 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 근거 없이 결론을 내린 확인 질문 1건, 상수 수열에서 거짓이던 반례 제목, 줄 범위와 빠진 근거를 고쳤다."
added: 2026-11-19
---

:::statement
위상공간과 근방은 [[topological-space]], [[neighborhood]]의 것이고, 연속과 "$p$에서 연속"은 [[continuous-map|위상공간 사이의 연속함수]]의 것이며, 위상동형사상은 [[homeomorphism]]의 것이다. 수열과 수렴은 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이고, 극한의 기호는 [[limit-unique-in-hausdorff]]의 것이다. 아래에서 $(X, \mathcal{T}_X)$, $(Y, \mathcal{T}_Y)$는 위상공간이고 $f : X \to Y$는 함수이다.

**함숫값의 수열.** $(x_n)$이 $X$의 수열, 곧 함수 $x : \mathbb{N} \to X$이면 [[function-composition|합성]] $f \circ x : \mathbb{N} \to Y$는 $Y$의 수열이고 그 $n$번째 항은 $f(x_n)$이다. 이 수열을 $(f(x_n))$으로 쓴다. 각 항은 이미 정해진 $f(x_n)$이므로 이 수열을 만드는 데 고르기는 들지 않는다.

1. (한 점에서) $p \in X$이고 $f$가 $p$에서 연속이며 $(x_n)$이 $p$로 수렴하면, $(f(x_n))$은 $f(p)$로 수렴한다.
2. (연속함수) $f$가 연속이면, $X$의 모든 점 $p$와 $p$로 수렴하는 $X$의 모든 수열 $(x_n)$에 대하여 $(f(x_n))$은 $f(p)$로 수렴한다.
3. (극한과 바꾸기) $(X, \mathcal{T}_X)$와 $(Y, \mathcal{T}_Y)$가 하우스도르프 공간이고 $f$가 연속이며 $(x_n)$이 수렴하면, $(f(x_n))$도 수렴하고
   $$
   \lim_{n \to \infty} f(x_n) = f\Bigl(\lim_{n \to \infty} x_n\Bigr)
   $$
   이다.
4. (위상동형사상) $f$가 위상동형사상이면, $X$의 수열 $(x_n)$과 $p \in X$에 대하여 $(x_n)$이 $p$로 수렴하는 것은 정확히 $(f(x_n))$이 $f(p)$로 수렴할 때이다.
:::

:::english
Topological spaces and neighborhoods are as in the entries on topological spaces and neighborhoods, continuity and "continuous at $p$" are as in the entry on continuous maps between topological spaces, and homeomorphisms are as in the entry on homeomorphisms. Sequences and convergence are as in the entry on sequences and convergence in a topological space, and the limit symbol is as in the entry on uniqueness of limits in Hausdorff spaces. Below, $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ are topological spaces and $f : X \to Y$ is a function.

**The sequence of values.** If $(x_n)$ is a sequence in $X$, that is, a function $x : \mathbb{N} \to X$, then the composition $f \circ x : \mathbb{N} \to Y$ is a sequence in $Y$ whose $n$th term is $f(x_n)$. This sequence is written $(f(x_n))$. Each term is the already determined element $f(x_n)$, so no choosing is involved in forming it.

1. (At a point) If $p \in X$, $f$ is continuous at $p$ and $(x_n)$ converges to $p$, then $(f(x_n))$ converges to $f(p)$.
2. (Continuous maps) If $f$ is continuous, then for every point $p$ of $X$ and every sequence $(x_n)$ in $X$ converging to $p$, $(f(x_n))$ converges to $f(p)$.
3. (Interchanging with limits) If $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ are Hausdorff spaces, $f$ is continuous and $(x_n)$ converges, then $(f(x_n))$ converges and
   $$
   \lim_{n \to \infty} f(x_n) = f\Bigl(\lim_{n \to \infty} x_n\Bigr).
   $$
4. (Homeomorphisms) If $f$ is a homeomorphism, then for a sequence $(x_n)$ in $X$ and $p \in X$, $(x_n)$ converges to $p$ exactly when $(f(x_n))$ converges to $f(p)$.
:::

## 직관

$f$가 $p$에서 연속이라는 것은 "$f(p)$ 둘레의 어떤 근방 $V$를 잡아도, $p$ 둘레의 어떤 근방 $U$를 잡으면 $U$의 점은 모두 $V$로 간다"는 것입니다. 수열이 $p$로 수렴하면 어느 번호부터의 항은 모두 $U$ 안에 있고, 그 항들의 값은 모두 $V$ 안에 있습니다. 그래서 값의 수열은 $f(p)$로 수렴합니다. 비유하자면 $f$는 지도를 옮겨 그리는 일이고, 연속은 가까운 동네를 가까운 동네로 옮긴다는 약속입니다. 한 점으로 모여드는 발자국을 옮겨 그리면 그 점의 그림으로 모여듭니다.

거꾸로 "수렴하는 수열마다 값의 수열도 수렴하면 연속이다"는 이 항목에 싣지 않습니다. 해석학 입문의 [[sequences-and-continuity|수열과 연속]]에서와 같은 까닭으로, 거리공간에서의 보통의 증명이 각 자연수 $n$마다 점을 하나씩 고르기 때문입니다.

## 증명

:::idea
$f(p)$의 근방 $V$에 대하여 연속이 주는 $p$의 근방 $U$를 잡고, 수렴이 주는 번호 이후의 항이 $U$에 들어 그 값이 $V$에 든다는 것을 본다.
:::

:::hint
"$p$에서 연속"의 정의에 나오는 열린집합 $U$는 $p$를 원소로 가지므로 $p$의 근방입니다.
:::

:::hint
(4)의 거꾸로에서는 $f$의 역함수 $g$에 (2)를 씁니다. $g$를 $(f(x_n))$에 적용한 수열은 $(x_n)$ 자신입니다.
:::

:::proof
**(1).** $V$가 $Y$에서 $f(p)$의 근방이라 하자. $V$는 $f(p)$를 원소로 갖는 $Y$의 열린집합이므로, $f$가 $p$에서 연속이라는 것의 정의에 의해 $p \in U$이고 $f(U) \subseteq V$인 $X$의 열린집합 $U$가 있다. $U$는 $p$의 근방이므로 $n \ge M$인 모든 $n$에서 $x_n \in U$인 자연수 $M$이 있다. 그런 $n$에서 [[image-and-preimage|상]]의 정의에 의해 $f(x_n) \in f(U) \subseteq V$이다. 따라서 $(f(x_n))$은 $f(p)$로 수렴한다.

**(2).** [[continuity-criteria]]의 (2)에 의해 $f$는 $X$의 모든 점에서 연속이므로 (1)을 쓴다.

**(3).** $p = \lim_{n \to \infty} x_n$으로 두면 [[limit-unique-in-hausdorff]]의 (2)에 의해 $(x_n)$은 $p$로 수렴한다. (2)에 의해 $(f(x_n))$은 $f(p)$로 수렴하고, $(Y, \mathcal{T}_Y)$가 하우스도르프 공간이므로 같은 (2)에 의해 $\lim_{n \to \infty} f(x_n) = f(p)$이다.

**(4).** $f$가 위상동형사상이면 $f$는 연속이므로 (2)에 의해 $(x_n)$이 $p$로 수렴하면 $(f(x_n))$은 $f(p)$로 수렴한다.

거꾸로 $(f(x_n))$이 $f(p)$로 수렴한다고 하자. $g : Y \to X$를 $f$의 역함수라 하면, 위상동형사상의 정의에 의해 $g$는 연속이다. [[inverse-function]]의 등식 $g \circ f = i_X$에 의해 $X$의 모든 점 $u$에서 $g(f(u)) = u$이다. $(f(x_n))$에 (2)를 $g$로 쓰면, $n$번째 항이 $g(f(x_n)) = x_n$인 수열, 곧 $(x_n)$이 $g(f(p)) = p$로 수렴한다. 여기서 두 수열이 같다는 것은 [[function]]의 함수의 같음(모든 $n$에서 값이 같다)에 의한 것이다.
:::

## 예시와 반례

:::example[일차함수와 아래끝 위상]
[[homeomorphism-examples]]의 (1)에 의해 $f(x) = 2x + 1$로 정한 $f : \mathbb{R} \to \mathbb{R}$(보통 위상)은 위상동형사상입니다. (4)에 의해 실수열 $(x_n)$이 $p$로 수렴하는 것은 정확히 $n$번째 항이 $2x_n + 1$인 수열이 $2p + 1$로 수렴할 때입니다. 예컨대 $n$번째 항이 $n^{-1}$인 수열은 [[basic-limits]]의 (2)와 [[convergence-in-metric-spaces]]의 (3)에 의해 $0$으로 수렴하므로, $n$번째 항이 $2n^{-1} + 1$인 수열은 $1$로 수렴합니다.

[[homeomorphism-examples]]의 (5)에 의해 항등함수 $i_{\mathbb{R}} : \mathbb{R}_l \to \mathbb{R}$는 연속입니다. (2)에 의해 $\mathbb{R}_l$에서 $p$로 수렴하는 실수열은 보통 위상에서도 $p$로 수렴합니다.
:::

:::counterexample[0 에서 연속이 아닌 계단 함수]
$x \le 0$이면 $f(x) = 0$, $0 < x$이면 $f(x) = 1$로 정한 실함수 $f : \mathbb{R} \to \mathbb{R}$([[real-valued-function]]의 (1))를 보통 위상에서 봅니다. $n$번째 항이 $n^{-1}$인 수열은 [[basic-limits]]의 (2)와 [[convergence-in-metric-spaces]]의 (3)에 의해 $0$으로 수렴하고, [[order-properties-of-reals]]의 (10)에 의해 $0 < n^{-1}$이므로 모든 항에서 $f(n^{-1}) = 1$입니다. 값의 수열은 모든 항이 $1$인 상수 수열이므로 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (1)에 의해 $1$로 수렴합니다. 보통 위상의 $\mathbb{R}$은 하우스도르프 공간이므로([[metric-space-is-hausdorff|거리공간이 하우스도르프라는 정리]]의 (3)) [[limit-unique-in-hausdorff]]의 (1)에 의해 이 수열은 $1$과 다른 $f(0) = 0$으로 수렴하지 않습니다. (1)의 대우에 의해 $f$는 $0$에서 연속이 아닙니다. 연속이라는 가정을 빼면 (1)의 결론은 깨질 수 있습니다.
:::

:::remark[해석학 입문의 정리를 다시 얻기]
해석학 입문의 [[sequences-and-continuity|수열과 연속]]의 (2)는 이 항목의 (1)에서 다시 나옵니다. $S \subseteq \mathbb{R}$, $f : S \to \mathbb{R}$이고 $f$가 [[continuous-function|연속함수]]의 뜻으로 $c \in S$에서 연속이며, 실수열 $(x_n)$의 모든 항이 $S$에 들고 해석학 입문의 뜻으로 $c$로 수렴한다고 합시다. $S$에 보통 거리의 부분공간 거리 $d_S$를 줍니다([[metric-space-examples]]의 (3)). 모든 항이 $S$에 들므로 [[function]]의 진술에 의해 $(x_n)$은 $S$의 수열이기도 하고, $d_S(x_n, c) = |x_n - c|$이므로 [[convergence-in-metric-spaces]]의 (1)의 조건은 해석학 입문의 수렴의 정의와 같은 문장입니다. 따라서 $(x_n)$은 $(S, d_S)$의 거리위상에서 $c$로 수렴합니다. [[continuity-agrees-with-analysis]]의 (3)에 의해 $f : (S, d_S) \to \mathbb{R}$은 보통 위상에 대해 위상의 뜻으로 $c$에서 연속이므로, (1)에 의해 $(f(x_n))$은 보통 위상의 $\mathbb{R}$에서 $f(c)$로 수렴하고, [[convergence-in-metric-spaces]]의 (3)에 의해 해석학 입문의 뜻으로도 $f(c)$로 수렴합니다.
:::

## 확인 질문

:::check[$f : X \to Y$가 상수함수이고 그 값이 $y_0$이면, $X$의 아무 수열 $(x_n)$에 대해 $(f(x_n))$은 어디로 수렴하는가?]
$y_0$으로 수렴합니다. $(f(x_n))$은 모든 항이 $y_0$인 상수 수열이므로 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (1)에 의해 $y_0$으로 수렴합니다. $(x_n)$이 수렴하지 않아도 그렇습니다. 그래서 (1)의 거꾸로, 곧 "값의 수열이 수렴하면 원래 수열도 수렴한다"는 성립하지 않을 수 있습니다. 예컨대 $X$에 서로 다른 두 점 $a$, $b$가 있고 이산위상을 주면, $n$이 홀수일 때 $a$, 짝수일 때 $b$인 수열은 어느 번호부터도 상수가 아니므로([[even-and-odd]]에 의해 $M$과 $M + 1$ 가운데 하나는 홀수, 하나는 짝수이다) [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (4)에 의해 발산하지만, 그 값의 수열은 수렴합니다.
:::

:::check[$X$에 이산위상을 주면 모든 함수 $f : X \to Y$가 연속이다. 이때 (2)는 무엇을 말하는가?]
[[sequence-in-a-space|위상공간의 수열과 수렴]]의 (4)에 의해 이산위상에서 $(x_n)$이 $p$로 수렴하면 어느 번호 $M$부터 모든 항이 $p$이므로, 그 번호부터 $f(x_n) = f(p)$입니다. (2)는 이런 수열의 값이 $f(p)$로 수렴한다는 것이고, 정의로도 바로 확인됩니다. $f(p)$의 근방은 $f(p)$를 원소로 가지므로 $M$ 이상의 모든 $n$에서 $f(x_n) = f(p)$가 그 근방에 듭니다.
:::
