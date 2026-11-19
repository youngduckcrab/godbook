---
title: 위상공간의 수열과 수렴
title_en: Sequences and Convergence in a Topological Space
aliases: [위상공간의 수열, sequence in a topological space, 수열의 수렴, convergence of a sequence, 극한, limit of a sequence, 위상공간의 부분수열]
kind: definition
field: topology
msc: ["54A20"]
level: undergrad
summary: 집합 X 의 수열은 ℕ 에서 X 로의 함수이고, 위상공간에서 수열이 점 p 로 수렴한다는 것은 p 의 모든 근방에 대해 어떤 번호부터 모든 항이 그 근방에 든다는 것이다. 상수 수열, 위상의 기저로 확인하기, 부분수열, 이산위상과 밀착위상에서의 수렴, 꼬리를 다룬다.
requires: [set, function, function-composition, even-and-odd, prime-number, well-ordering-principle, natural-numbers-are-infinite, recursion-theorem, order-properties-of-reals, archimedean-property, interval, sequence, limit-of-sequence, subsequence, tail-of-a-sequence, topological-space, topology-examples, neighborhood, basis-for-a-topology, basis-of-a-given-topology, comparing-topologies, standard-topology-on-reals, lower-limit-topology]
sources:
  - ref: fuglede-basic-topology
    loc: "Sequences and convergence 절: 정의 (content/topological-spaces.tex:690–692), 정의 뒤의 명제 (694–697), 예 example-convergence 와 그 다음 예 (699–705)"
    checked: original
    note: "출처는 수열을 X 의 점들의 족 {x_n}_{n∈ℕ} 로, 점 x 로의 수렴을 'x 의 모든 근방 U 에 대해 N ∈ ℕ 이 있어 n > N 인 모든 n 에서 x_n ∈ U' 로 정의하고 x_n → x 로 쓴다. 이 항목은 수열을 함수 ℕ → X 로 두고, 수렴을 n ≥ M 꼴로 적으며, 화살표 기호를 쓰지 않는다. 두 꼴은 같은 조건이다. n > N 인 모든 n 에서 성립하면 M = N + 1 로 n ≥ M 인 모든 n 에서 성립하고((Z1)), n ≥ M 인 모든 n 에서 성립하면 N = M 으로 n > N 인 모든 n 에서 성립한다. (1)은 출처 703–705줄의 예(상수 수열은 위상에 관계없이 수렴한다)와 같다. (3)은 출처의 명제(695–697: 부분수열은 수열과 같은 점으로 수렴한다)와 같고, 출처는 이것을 '정의에서 바로 얻는다'고 적는다. 출처는 부분수열을 n₁ < n₂ < … 인 첨자로 적고, 이 항목은 해석학 입문 subsequence 의 첨자열을 쓴다. (4)와 (5)는 출처의 예 example-convergence(699–702: 밀착위상에서는 모든 수열이 모든 점으로 수렴하고, 이산위상에서 x 로 수렴하려면 충분히 큰 n 에서 늘 x 이어야 한다)와 같다. 예시 '원소 둘인 집합 위의 번갈아 나오는 수열'의 밀착위상과 이산위상의 결론은 이 예와 같다."
  - ref: lebl-basic-analysis
    loc: "7.3.1절 Definition 7.3.1, Definition 7.3.2 (p.274), Proposition 7.3.6 (p.275), 7.3.3절 Proposition 7.3.11 (p.276), 7.3.4절 연습문제 7.3.6 (p.277); 2.1절 Example 2.1.3, Example 2.1.4 (p.53), 2.1.3절 Example 2.1.18 (p.58)"
    checked: original
    note: "수열을 함수 x : ℕ → X 로 두고 n 번째 항을 x_n 으로 쓰는 것은 출처 Definition 7.3.1(p.274, 거리공간)의 것이고, '극한'이라는 말은 Definition 7.3.2(p.274)의 것이다. 출처 Proposition 7.3.11(p.276)은 거리공간에서 p 로의 수렴이 'p 의 모든 열린 근방 U 에 대해 M ∈ ℕ 이 있어 n ≥ M 인 모든 n 에서 x_n ∈ U' 와 같다고 증명하고, 이 항목은 이 조건을 위상공간의 수렴의 정의로 삼는다. (3)과 (6)의 한 방향(꼬리가 p 로 수렴하면 수열도 p 로 수렴한다)은 출처 Proposition 7.3.6 의 (i), (ii)(p.275, 거리공간, 증명은 연습문제 7.3.12)를 위상공간에서 적은 것이다. (4)의 둘째 문장은 출처 연습문제 7.3.6(p.277, 이산 거리에서 수렴하는 수열은 어떤 K 부터 x_n = x_K)과 같은 결론이다. (1)은 출처 Example 2.1.3(p.53, 실수의 상수 수열 1, 1, 1, … 은 1 로 수렴한다)을 위상공간으로 옮긴 것이다. 예시 '원소 둘인 집합 위의 번갈아 나오는 수열'의 수열은 출처 Example 2.1.18(p.58)의 0, 1, 0, 1, … 과 같은 꼴이고, 반례 '수렴하는 부분수열이 있어도 수열은 발산할 수 있다'는 그 Example 2.1.18(0, 1, 0, 1, … 은 발산하지만 짝수 번째와 홀수 번째 부분수열은 수렴한다)과 같은 발상이다. 예시 '아래끝 위상에서 0 으로 가는 수열과 가지 않는 수열'의 n 번째 항이 n⁻¹ 인 수열은 출처 Example 2.1.4(p.53)가 ℝ 에서 0 으로 수렴함을 보이는 수열과 같다. 확인 질문 '세 점 위의 상수 수열'의 위상은 topology-examples 의 (8)의 (i)의 것으로, Fuglede 연습문제 1.2(content/exercises.tex:13)의 답에 드는 위상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 거짓이던 직관 문장 1건, 유한집합에서 거짓이던 단원 글 문장, 어긋난 줄 번호와 겹친 글자를 고쳤다."
added: 2026-11-19
---

:::statement
함수와 함수의 같음은 [[function]]의 것이고, 합성은 [[function-composition]]의 것이며, $\mathbb{N}$은 ([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해) 양의 정수의 집합이다. 위상공간과 열린집합은 [[topological-space]]의 것이고, 근방은 [[neighborhood]]의 것이며, 이산위상과 밀착위상은 [[topology-examples]]의 것이고, "위상 $\mathcal{T}$의 기저"는 [[basis-of-a-given-topology]]의 것이다. 첨자열은 [[subsequence]]의 것이다.

**수열.** $X$가 집합일 때 **$X$의 수열**(sequence in $X$)은 함수 $x : \mathbb{N} \to X$이다. 자연수 $n$에서의 값 $x(n)$을 $x_n$으로 쓰고 수열의 $n$번째 **항**(term)이라 하며, 수열 $x$를 $(x_n)$으로 나타낸다. $X = \mathbb{R}$이면 이것은 해석학 입문의 [[sequence|수열]]이다. 두 $X$의 수열 $(x_n)$, $(y_n)$이 같은 것은 정확히 모든 자연수 $n$에서 $x_n = y_n$일 때이다. $X = \emptyset$이면 $X$의 수열은 없다($1 \in \mathbb{N}$에서의 값이 있어야 하기 때문이다).

**값으로 정한 수열.** 각 자연수 $n$마다 $X$의 원소 $r_n$이 [[recursion-theorem|재귀 정리]]의 (1)의 뜻으로 정해져 있으면(식이나 이미 정해진 대상으로 주어져 있으면. 각 $n$마다 여러 후보 가운데 하나를 고르는 것은 들어가지 않는다), 그 (1)에 의해 $\{(n, r_n) : n \in \mathbb{N}\}$은 $X$의 수열이고 $n$번째 항은 $r_n$이다. 이것을 "$n$번째 항이 $r_n$인 수열"이라 부른다. $p \in X$일 때 모든 항이 $p$인 수열을 **상수 수열**(constant sequence)이라 한다.

**수렴.** $(X, \mathcal{T})$가 위상공간이고 $(x_n)$이 $X$의 수열이며 $p \in X$라 하자. $(x_n)$이 $p$로 **수렴한다**(converges to $p$)는 것은 정확히, $p$의 모든 근방 $U$에 대하여 자연수 $M$이 있어 $n \ge M$인 모든 자연수 $n$에서 $x_n \in U$일 때이다. 이때 $p$를 $(x_n)$의 **극한**(limit)이라 한다. $(x_n)$이 **수렴한다**는 것은 정확히 $X$의 어떤 점으로 수렴할 때이고, **발산한다**는 것은 정확히 수렴하지 않을 때이다. 위상을 밝혀야 할 때는 "$(X, \mathcal{T})$에서 $p$로 수렴한다"고 쓴다. 한 수열의 극한은 둘 이상일 수 있으므로(아래 (5)) 이 항목은 극한을 나타내는 기호를 정하지 않는다. 실수의 수열에는 해석학 입문의 [[limit-of-sequence|수렴]]도 정의되어 있다. 이 항목의 "수렴한다", "발산한다", "극한"은 늘 위의 위상의 뜻이고, 두 뜻을 섞어 쓰지 않는다.

다음이 성립한다. 아래에서 $(X, \mathcal{T})$는 위상공간이고, $(x_n)$은 $X$의 수열이며, $p \in X$이다.

1. (상수 수열) 모든 항이 $p$인 상수 수열은 $p$로 수렴한다.
2. (위상의 기저로 확인하기) $\mathcal{C}$가 위상 $\mathcal{T}$의 기저이면, $(x_n)$이 $p$로 수렴하는 것은 정확히 $p \in C$인 모든 $C \in \mathcal{C}$에 대하여 자연수 $M$이 있어 $n \ge M$인 모든 자연수 $n$에서 $x_n \in C$일 때이다.
3. (부분수열) 이 (3)에서는 수열을 $(x_m)$으로 쓰고 글자 $n$을 첨자열의 이름으로 쓴다. $(n_i)$가 첨자열이면 합성 $x \circ n : \mathbb{N} \to X$는 $X$의 수열이고 그 $i$번째 항은 $x_{n_i}$이다. 이 수열을 $(x_{n_i})$로 쓰고 "첨자열 $(n_i)$로 얻은 $(x_m)$의 부분수열"이라 한다. $X$의 수열 $(y_i)$가 $(x_m)$의 **부분수열**(subsequence)인 것은 정확히 어떤 첨자열 $(n_i)$가 있어 모든 자연수 $i$에서 $y_i = x_{n_i}$일 때이다. $X = \mathbb{R}$이면 이것은 [[subsequence]]의 부분수열과 같은 정의이다. $(x_m)$이 $p$로 수렴하면 $(x_m)$의 모든 부분수열이 $p$로 수렴한다.
4. (이산위상) $\mathcal{T}$가 이산위상 $\mathscr{P}(X)$이면, $(x_n)$이 $p$로 수렴하는 것은 정확히 자연수 $M$이 있어 $n \ge M$인 모든 자연수 $n$에서 $x_n = p$일 때이다. 따라서 이때 $(x_n)$이 수렴하는 것은 정확히 자연수 $M$이 있어 $n \ge M$인 모든 자연수 $n$에서 $x_n = x_M$일 때이다.
5. (밀착위상) $\mathcal{T}$가 밀착위상 $\{\emptyset, X\}$이면 $X$의 모든 수열은 $X$의 모든 점으로 수렴한다. 따라서 $X$에 서로 다른 두 점 $a$, $b$가 있으면, 모든 항이 $a$인 상수 수열은 $a$로도 $b$로도 수렴한다.
6. (꼬리) $K$가 자연수이면 자연수 $n$에 대하여 $n + K$는 자연수이므로, $n$번째 항이 $x_{n+K}$인 $X$의 수열이 있다. 이것을 $(x_n)$의 **$K$-꼬리**($K$-tail)라 한다. $X = \mathbb{R}$이면 이것은 [[tail-of-a-sequence]]의 $K$-꼬리와 같은 정의이다. $(x_n)$이 $p$로 수렴하는 것은 정확히 $(x_n)$의 $K$-꼬리가 $p$로 수렴할 때이다. 따라서 $(y_n)$도 $X$의 수열이고 $n \ge K + 1$인 모든 자연수 $n$에서 $x_n = y_n$이면, $(x_n)$이 $p$로 수렴하는 것은 정확히 $(y_n)$이 $p$로 수렴할 때이다.
:::

:::english
Functions and equality of functions are as in the entry on functions, composition is as in the entry on composition, and $\mathbb{N}$ is the set of positive integers (by the statement of the entry on the natural numbers). Topological spaces and open sets are as in the entry on topological spaces, neighborhoods are as in the entry on neighborhoods, the discrete and indiscrete topologies are as in the entry on examples of topologies, and "a basis for the topology $\mathcal{T}$" is as in the entry on bases of a given topology. Index sequences are as in the entry on subsequences.

**Sequences.** For a set $X$, a **sequence in $X$** is a function $x : \mathbb{N} \to X$. The value $x(n)$ at a natural number $n$ is written $x_n$ and called the $n$th **term** of the sequence, and the sequence $x$ is denoted $(x_n)$. When $X = \mathbb{R}$ this is a sequence in the sense of the analysis course. Two sequences $(x_n)$, $(y_n)$ in $X$ are equal exactly when $x_n = y_n$ for every natural number $n$. If $X = \emptyset$, there is no sequence in $X$ (there would have to be a value at $1 \in \mathbb{N}$).

**Sequences given by their values.** If for each natural number $n$ an element $r_n$ of $X$ is determined in the sense of (1) of the recursion theorem (given by a formula or by an already determined object; choosing one of several candidates for each $n$ is not included), then by that (1) the set $\{(n, r_n) : n \in \mathbb{N}\}$ is a sequence in $X$ whose $n$th term is $r_n$. We call it "the sequence whose $n$th term is $r_n$". For $p \in X$, the sequence all of whose terms are $p$ is called a **constant sequence**.

**Convergence.** Let $(X, \mathcal{T})$ be a topological space, $(x_n)$ a sequence in $X$ and $p \in X$. $(x_n)$ **converges to $p$** exactly when for every neighborhood $U$ of $p$ there is a natural number $M$ such that $x_n \in U$ for every natural number $n \ge M$. Then $p$ is called a **limit** of $(x_n)$. $(x_n)$ **converges** exactly when it converges to some point of $X$, and **diverges** exactly when it does not converge. When the topology must be named we say "converges to $p$ in $(X, \mathcal{T})$". Since a sequence may have more than one limit ((5) below), this entry introduces no symbol for limits. For sequences of real numbers, convergence in the sense of the analysis course is also defined; in this entry "converges", "diverges" and "limit" always have the topological meaning above, and the two meanings are not mixed.

The following hold. Below, $(X, \mathcal{T})$ is a topological space, $(x_n)$ is a sequence in $X$ and $p \in X$.

1. (Constant sequences) The constant sequence all of whose terms are $p$ converges to $p$.
2. (Checking with a basis) If $\mathcal{C}$ is a basis for the topology $\mathcal{T}$, then $(x_n)$ converges to $p$ exactly when for every $C \in \mathcal{C}$ with $p \in C$ there is a natural number $M$ such that $x_n \in C$ for every natural number $n \ge M$.
3. (Subsequences) In this (3) the sequence is written $(x_m)$ and the letter $n$ names an index sequence. If $(n_i)$ is an index sequence, then the composition $x \circ n : \mathbb{N} \to X$ is a sequence in $X$ whose $i$th term is $x_{n_i}$. It is written $(x_{n_i})$ and called "the subsequence of $(x_m)$ obtained by the index sequence $(n_i)$". A sequence $(y_i)$ in $X$ is a **subsequence** of $(x_m)$ exactly when there is an index sequence $(n_i)$ with $y_i = x_{n_i}$ for every natural number $i$. When $X = \mathbb{R}$ this is the same definition as that of a subsequence in the entry on subsequences. If $(x_m)$ converges to $p$, then every subsequence of $(x_m)$ converges to $p$.
4. (Discrete topology) If $\mathcal{T}$ is the discrete topology $\mathscr{P}(X)$, then $(x_n)$ converges to $p$ exactly when there is a natural number $M$ such that $x_n = p$ for every natural number $n \ge M$. Hence in this case $(x_n)$ converges exactly when there is a natural number $M$ such that $x_n = x_M$ for every natural number $n \ge M$.
5. (Indiscrete topology) If $\mathcal{T}$ is the indiscrete topology $\{\emptyset, X\}$, then every sequence in $X$ converges to every point of $X$. Hence if $X$ has two distinct points $a$, $b$, the constant sequence all of whose terms are $a$ converges both to $a$ and to $b$.
6. (Tails) If $K$ is a natural number, then $n + K$ is a natural number for every natural number $n$, so there is a sequence in $X$ whose $n$th term is $x_{n+K}$; it is called the **$K$-tail** of $(x_n)$. When $X = \mathbb{R}$ this is the same definition as the $K$-tail in the entry on tails of sequences. $(x_n)$ converges to $p$ exactly when the $K$-tail of $(x_n)$ converges to $p$. Consequently, if $(y_n)$ is also a sequence in $X$ and $x_n = y_n$ for every natural number $n \ge K + 1$, then $(x_n)$ converges to $p$ exactly when $(y_n)$ converges to $p$.
:::

## 직관

해석학 입문에서 실수열이 $L$로 수렴한다는 것은 "$L$ 둘레의 어떤 폭 $\varepsilon$을 잡아도, 어떤 번호부터는 모든 항이 그 폭 안에 든다"는 것이었습니다. 위상공간에는 폭을 재는 거리가 없으므로, 폭 대신 $p$의 근방을 씁니다. "$p$의 어떤 근방을 잡아도 어떤 번호부터는 모든 항이 그 근방 안에 든다"가 이 항목의 수렴입니다. 비유하자면 근방은 $p$ 둘레에 친 울타리이고, 수렴은 어떤 울타리를 쳐도 어느 순번부터 뒤의 항이 모두 그 안에 있다는 것입니다. "어떤 울타리든"이 "$p$의 모든 근방 $U$에 대하여"에, "어느 순번부터 뒤의 항이 모두"가 "자연수 $M$이 있어 $n \ge M$인 모든 $n$에서 $x_n \in U$"에 맞습니다. 울타리마다 그 순번은 달라도 됩니다.

근방이 많을수록 이 조건은 어려워집니다. 이산위상에서는 $\{p\}$ 자체가 근방이어서 결국 항이 모두 $p$가 되어야 하고((4)), 밀착위상에서는 근방이 전체 하나뿐이어서 아무 수열이나 아무 점으로 수렴합니다((5)). 그래서 같은 수열도 위상에 따라 수렴하기도 하고 발산하기도 하며, 극한이 둘 이상일 수도 있습니다. 실수열의 극한은 하나뿐이었다는 해석학 입문의 사실은 위상공간 일반으로 옮겨지지 않습니다.

(2)는 근방을 다 보지 않고 위상의 기저 원소만 보아도 된다는 것입니다. 근방은 언제나 그 점을 품은 기저 원소를 포함하므로, 꼬리가 그 기저 원소에 들면 근방에도 듭니다. (3)과 (6)은 해석학 입문의 [[subsequence|부분수열]]의 (3)과 [[tail-of-a-sequence|수열의 꼬리]]의 (1)을 위상공간으로 옮긴 꼴입니다. (3)의 증명과 (6)의 뒤 방향의 증명은 그 두 항목의 증명에서 "$|x_m - L| < \varepsilon$"을 "$x_m \in U$"로 바꾼 계산입니다.

## 성질의 증명

:::proof
아래에서 자연수는 양의 정수이고, 정수의 합과 차는 정수이다([[even-and-odd]]). 정수의 부등식은 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z6), (Z7)을 쓴다. 근방은 열린집합이다.

먼저 진술의 앞부분에서 쓴 두 사실을 확인한다. (3)의 첨자열 $n : \mathbb{N} \to \mathbb{N}$의 공역 $\mathbb{N}$은 $x$의 정의역이므로 합성 $x \circ n : \mathbb{N} \to X$가 정해지고, 그 $i$에서의 값은 $x(n(i)) = x_{n_i}$이다. (6)에서 $K$와 $n$이 자연수이면 $n + K$는 정수이고, $0 < K$와 (Z7)에 의해 $n < n + K$, $0 < n$과 (Z6)에 의해 $0 < n + K$이므로 자연수이다. 따라서 $x_{n+K}$는 이미 정해진 $X$의 원소이고, [[recursion-theorem|재귀 정리]]의 (1)에 의해 $n$번째 항이 $x_{n+K}$인 수열이 있다.

**(1).** $p$의 근방 $U$를 잡으면 $p \in U$이다. $M = 1$로 두면 $n \ge 1$인 모든 자연수 $n$에서 $x_n = p \in U$이다.

**(2).** $\mathcal{C}$가 위상 $\mathcal{T}$의 기저라 하자. [[basis-of-a-given-topology]]의 (2)에 의해 $\mathcal{C} \subseteq \mathcal{T}$이고, 모든 $U \in \mathcal{T}$와 $U$의 모든 점 $q$에 대하여 $q \in C$이고 $C \subseteq U$인 $C \in \mathcal{C}$가 있다.

$(x_n)$이 $p$로 수렴한다고 하자. $C \in \mathcal{C}$이고 $p \in C$이면 $C \in \mathcal{T}$이므로 $C$는 $p$의 근방이고, 수렴의 정의에 의해 $n \ge M$인 모든 $n$에서 $x_n \in C$인 자연수 $M$이 있다.

거꾸로 진술의 조건이 성립한다고 하자. $p$의 근방 $U$를 잡으면 $U \in \mathcal{T}$이고 $p \in U$이므로, $p \in C$이고 $C \subseteq U$인 $C \in \mathcal{C}$가 있다. 조건에 의해 $n \ge M$인 모든 $n$에서 $x_n \in C$인 자연수 $M$이 있고, 그런 $n$에서 $x_n \in C \subseteq U$이다. 따라서 $(x_n)$은 $p$로 수렴한다.

**(3).** $(x_m)$이 $p$로 수렴하고 $(n_i)$가 첨자열이라 하자. $p$의 근방 $U$를 잡으면 $m \ge M$인 모든 자연수 $m$에서 $x_m \in U$인 자연수 $M$이 있다. $i \ge M$인 자연수 $i$를 잡으면 [[subsequence]]의 (1)에 의해 $n_i \ge M$이므로 $x_{n_i} \in U$이다. 따라서 $(x_{n_i})$는 $p$로 수렴한다. $(y_i)$가 $(x_m)$의 부분수열이면 어떤 첨자열 $(n_i)$에 대하여 모든 $i$에서 $y_i = x_{n_i}$이므로, 같은 $M$이 $(y_i)$에도 들어맞아 $(y_i)$는 $p$로 수렴한다.

**(4).** $\mathcal{T} = \mathscr{P}(X)$라 하자. $(x_n)$이 $p$로 수렴하면, [[neighborhood]]의 (5)에 의해 $\{p\}$는 $p$의 근방이므로 $n \ge M$인 모든 $n$에서 $x_n \in \{p\}$, 곧 $x_n = p$인 자연수 $M$이 있다. 거꾸로 $n \ge M$인 모든 $n$에서 $x_n = p$인 자연수 $M$이 있으면, $p$의 근방 $U$는 $p$를 원소로 가지므로 그런 $n$에서 $x_n = p \in U$이다. 따라서 $(x_n)$은 $p$로 수렴한다.

둘째 문장을 보인다. $(x_n)$이 어떤 점 $p$로 수렴하면 앞 문장의 $M$에 대해 $M \ge M$이므로 $x_M = p$이고, $n \ge M$인 모든 $n$에서 $x_n = p = x_M$이다. 거꾸로 $n \ge M$인 모든 $n$에서 $x_n = x_M$인 자연수 $M$이 있으면 앞 문장을 점 $x_M$에 써서 $(x_n)$이 $x_M$으로 수렴한다.

**(5).** $\mathcal{T} = \{\emptyset, X\}$이고 $(x_n)$이 $X$의 수열, $q$가 $X$의 점이라 하자. [[neighborhood]]의 (5)에 의해 $q$의 근방은 $X$ 하나뿐이다. $M = 1$로 두면 $n \ge 1$인 모든 $n$에서 $x_n \in X$이다. 따라서 $(x_n)$은 $q$로 수렴한다. 둘째 문장은 이것을 상수 수열과 두 점 $a$, $b$에 쓴 것이다.

**(6).** $(z_n)$을 $(x_n)$의 $K$-꼬리라 하자. 모든 자연수 $n$에서 $z_n = x_{n+K}$이다.

$(x_n)$이 $p$로 수렴하면, [[subsequence]]의 (4)에 의해 $i$에서의 값이 $i + K$인 함수 $s : \mathbb{N} \to \mathbb{N}$은 첨자열이다. 모든 $i$에서 $z_i = x_{i+K} = x_{s(i)}$이므로 $(z_n)$은 첨자열 $s$로 얻은 $(x_n)$의 부분수열이고, (3)에 의해 $p$로 수렴한다.

거꾸로 $(z_n)$이 $p$로 수렴한다고 하자. $p$의 근방 $U$를 잡으면 $n \ge M'$인 모든 자연수 $n$에서 $z_n \in U$인 자연수 $M'$이 있다. $M = M' + K$로 두면 위의 계산으로 $M$은 자연수이다. $n \ge M$인 자연수 $n$을 잡고 $j = n - K$로 둔다. $j$는 정수이고, $M' + K \le n$의 양변에서 $K$를 빼면 (Z7)에 의해 $M' \le j$이다. $M'$은 양의 정수이므로 $0 < M' \le j$이고 (Z6)에 의해 $0 < j$, 곧 $j$는 자연수이고 $j \ge M'$이다. 정수의 계산으로 $j + K = n$이므로 $x_n = x_{j+K} = z_j \in U$이다. 따라서 $(x_n)$은 $p$로 수렴한다.

셋째 문장을 보인다. $(x_n)$과 $(y_n)$의 $K$-꼬리를 비교한다. 자연수 $n$에 대하여 (Z1)에 의해 $n \ge 1$이고 (Z7)에 의해 $n + K \ge K + 1$이므로, 가정에 의해 $x_{n+K} = y_{n+K}$이다. 곧 두 $K$-꼬리는 모든 항이 같아 같은 수열이다. 둘째 문장에 의해 $(x_n)$이 $p$로 수렴하는 것은 정확히 이 $K$-꼬리가 $p$로 수렴할 때이고, 이것은 다시 정확히 $(y_n)$이 $p$로 수렴할 때이다.
:::

## 예시와 반례

:::example[원소 둘인 집합 위의 번갈아 나오는 수열]
$a \ne b$이고 $X = \{a, b\}$라 합시다. [[even-and-odd]]에 의해 모든 자연수는 홀수이거나 짝수이고 둘 다는 아니므로, $n$이 홀수이면 $x_n = a$, 짝수이면 $x_n = b$로 정한 $r_n = x_n$은 $n$마다 하나로 정해지고, 진술의 "값으로 정한 수열"에 의해 수열 $(x_n) = (a, b, a, b, \dots)$가 있습니다. 모든 자연수 $M$에 대하여 $M$과 $M + 1$ 가운데 하나는 홀수, 하나는 짝수이므로(정수 $M = 2c$이면 $M + 1 = 2c + 1$, $M = 2c + 1$이면 $M + 1 = 2(c + 1)$), $n \ge M$인 항 가운데 $a$인 것과 $b$인 것이 모두 있습니다. [[topology-examples]]의 (7)의 네 위상에서 이 수열을 봅니다.

- 밀착위상 $\{\emptyset, X\}$: (5)에 의해 $a$로도 $b$로도 수렴합니다.
- $\{\emptyset, \{a\}, X\}$: $b$의 근방은 $X$뿐이므로 $b$로 수렴합니다. $\{a\}$는 $a$의 근방인데, 어느 번호부터도 항이 모두 $\{a\}$에 들지는 않으므로 $a$로는 수렴하지 않습니다.
- $\{\emptyset, \{b\}, X\}$: 같은 까닭으로 $a$로 수렴하고 $b$로는 수렴하지 않습니다.
- 이산위상 $\mathscr{P}(X)$: (4)에 의해 어느 번호부터 항이 모두 $a$이거나 모두 $b$여야 하므로 발산합니다.

같은 수열이 극한을 둘 가지기도, 하나 가지기도, 갖지 않기도 합니다. 수렴은 위상에 달려 있습니다.
:::

:::example[아래끝 위상에서 0 으로 가는 수열과 가지 않는 수열]
$\mathbb{R}_l$에서 $n$번째 항이 $n^{-1}$인 수열은 $0$으로 수렴합니다. [[lower-limit-topology]]의 (1)에 의해 $\mathcal{B}_l$은 위상의 기저이고 $\mathcal{T}_l = \mathcal{T}_{\mathcal{B}_l}$이므로, [[basis-of-a-given-topology]]의 정의에 의해 $\mathcal{B}_l$은 위상 $\mathcal{T}_l$의 기저입니다. 그래서 (2)를 씁니다. $0 \in [a, b)$인 $\mathcal{B}_l$의 원소를 잡으면 $a \le 0 < b$입니다. [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $m \ge M$인 모든 자연수 $m$에서 $m^{-1} < b$인 자연수 $M$이 있고, [[order-properties-of-reals]]의 (10)에 의해 $0 < m^{-1}$이므로 $a \le 0 < m^{-1} < b$이고, 같은 항목의 (1)의 (v)에 의해 $a \le m^{-1} < b$, 곧 $m^{-1} \in [a, b)$입니다.

그러나 $n$번째 항이 $-n^{-1}$인 수열은 $\mathbb{R}_l$에서 $0$으로 수렴하지 않습니다. $[0, 1)$은 $\mathcal{B}_l$의 원소이므로 [[basis-for-a-topology]]의 (2)에 의해 열린집합이고 $0$의 근방인데, [[order-properties-of-reals]]의 (10)에 의해 $0 < n^{-1}$이고 (3)의 (ii)에 의해 모든 항이 $-n^{-1} < 0$이어서 $[0, 1)$에 드는 항이 하나도 없습니다. 보통 위상에서는 $-n^{-1}$도 $0$으로 수렴합니다. [[standard-topology-on-reals]]의 (5)에 의해 열린구간 전체 $\mathcal{J}$가 보통 위상의 기저이므로 (2)를 씁니다. $0 \in (a, b)$이면 $a < 0 < b$이고 [[order-properties-of-reals]]의 (3)의 (ii)에 의해 $0 < -a$입니다. 아르키메데스 성질의 (3)에 의해 $m \ge M$인 모든 자연수 $m$에서 $m^{-1} < -a$인 자연수 $M$이 있고, 그런 $m$에서 [[order-properties-of-reals]]의 (3)의 (iii)에 의해 $a < -m^{-1}$이고, $-m^{-1} < 0 < b$와 그 항목의 (1)의 (v)에 의해 $-m^{-1} < b$이므로 $-m^{-1} \in (a, b)$입니다. 더 섬세한 $\mathbb{R}_l$에는 근방이 더 많아서 수렴하기가 더 어렵습니다.
:::

:::counterexample[수렴하는 부분수열이 있어도 수열은 발산할 수 있다]
(3)의 거꾸로, 곧 "부분수열이 $p$로 수렴하면 수열도 $p$로 수렴한다"는 성립하지 않습니다. 첫째 예시의 $X = \{a, b\}$에 이산위상을 주고 번갈아 나오는 수열 $(x_m)$을 봅니다. $i$에서의 값이 $2i - 1$인 함수 $n$은 자연수 값을 갖고 $n_i < n_{i+1}$이므로 [[subsequence]]의 (2)에 의해 첨자열이며, $n_i = 2(i - 1) + 1$은 홀수이므로 부분수열 $(x_{n_i})$는 모든 항이 $a$인 상수 수열이고 (1)에 의해 $a$로 수렴합니다. 그러나 첫째 예시에서 보았듯이 이산위상에서 $(x_m)$은 발산합니다.
:::

## 확인 질문

:::check[$X = \{1, 2, 3\}$에 위상 $\{\emptyset, \{1\}, \{1, 2\}, X\}$를 주면, 모든 항이 $1$인 상수 수열은 어느 점으로 수렴하는가? 모든 항이 $3$인 상수 수열은?]
모든 항이 $1$인 수열은 $1$, $2$, $3$ 모두로 수렴합니다. $1$의 근방 $\{1\}$, $\{1, 2\}$, $X$, $2$의 근방 $\{1, 2\}$, $X$, $3$의 근방 $X$가 모두 $1$을 원소로 가지므로, 어느 근방에 대해서도 $M = 1$이면 됩니다. 모든 항이 $3$인 수열은 $3$으로만 수렴합니다. $3 \notin \{1\}$이므로 $\{1\}$에 드는 항이 없어 $1$로 수렴하지 않고, $3 \notin \{1, 2\}$이므로 $2$로도 수렴하지 않습니다. $3$으로는 (1)에 의해 수렴합니다.
:::

:::check[$\mathcal{T} \subseteq \mathcal{T}'$인 $X$ 위의 두 위상이 있고 $(x_n)$이 $(X, \mathcal{T}')$에서 $p$로 수렴하면, $(X, \mathcal{T})$에서도 $p$로 수렴하는가? 거꾸로는?]
수렴합니다. $(X, \mathcal{T})$에서 $p$의 근방 $U$는 $\mathcal{T} \subseteq \mathcal{T}'$에 의해 $(X, \mathcal{T}')$에서도 $p$의 근방이므로, $(X, \mathcal{T}')$에서의 수렴이 주는 자연수 $M$이 그대로 들어맞습니다. 거꾸로는 성립하지 않을 수 있습니다. 둘째 예시에서 보통 위상은 $\mathcal{T}_l$에 포함되고([[lower-limit-topology]]의 (2)), $-n^{-1}$은 보통 위상에서 $0$으로 수렴하지만 $\mathbb{R}_l$에서는 수렴하지 않습니다.
:::
