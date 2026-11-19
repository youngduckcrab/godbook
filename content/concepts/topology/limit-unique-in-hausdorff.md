---
title: 하우스도르프 공간에서 극한의 유일성
title_en: Uniqueness of Limits in Hausdorff Spaces
aliases: [극한의 유일성, uniqueness of limits, 위상공간의 극한 기호, lim]
kind: proposition
field: topology
msc: ["54D10", "54A20"]
level: undergrad
summary: 하우스도르프 공간에서 수렴하는 수열의 극한은 하나뿐이므로 그 극한을 lim 기호로 쓴다. T₁ 공간에서는 그렇지 않을 수 있어서, 자연수 위의 여유한 위상에서 n 번째 항이 n 인 수열은 모든 점으로 수렴한다.
requires: [set, set-operations, mathematical-induction, finite-set, adding-or-removing-an-element, natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, limit-is-unique, subsequence, topological-space, topology-examples, neighborhood, hausdorff-space, sequence-in-a-space]
proof: full
sources:
  - ref: fuglede-basic-topology
    loc: "Sequences and convergence 절: Proposition limits-unique-hausdorff 의 앞 문단과 명제, 증명 (content/topological-spaces.tex:719–726)"
    checked: original
    note: "(1)은 출처 Proposition limits-unique-hausdorff(720–723)와 같다. 출처의 증명(724–726)은 서로소인 근방 U, V 와 N_U, N_V 를 잡고 n > max(N_U, N_V) 인 n 을 쓴다. 이 항목은 n = M_U + M_V 를 쓴다. 출처 증명의 첫 문장(725)은 가정을 'x_n → y and x_n → y' 로 적고, 이어서 x 와 y 의 근방 U, V 를 잡는다. 앞 문단(719)은 example-convergence(밀착위상에서는 모든 수열이 모든 점으로 수렴한다)가 극한이 하나가 아닐 수 있음을 보인다고 적는다. (3)의 위상은 hausdorff-space 의 (5)의 여유한 위상이다."
  - ref: lebl-basic-analysis
    loc: "7.3.1절 Definition 7.3.2 (p.274), Proposition 7.3.3 과 그 증명 (p.275)"
    checked: original
    note: "출처 Definition 7.3.2(p.274)는 거리공간에서 극한이 하나라는 것을 증명할 것이라고 적고 극한을 lim 기호로 쓴다. 출처 Proposition 7.3.3(p.275)은 거리공간에서 수렴하는 수열의 극한이 하나라는 것을 거리의 삼각부등식으로 증명한다. 이 항목의 (1)은 그것을 하우스도르프 공간으로 넓힌 꼴이고 증명은 서로소인 두 근방을 쓴다. 예시 '부분수열로 발산을 보이기'의 수열은 출처 Example 2.1.18(p.58)의 0, 1, 0, 1, … 과 같은 꼴이고, 짝수 번째와 홀수 번째 부분수열을 보는 것도 같은 발상이다."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 독립 검토는 거치지 않았다. 자기 검토에서 근거 없이 결론을 내린 확인 질문 1건, 상수 수열에서 거짓이던 반례 제목, 줄 범위와 빠진 근거를 고쳤다."
added: 2026-11-19
---

:::statement
수열, 수렴, 극한, 부분수열, $K$-꼬리는 [[sequence-in-a-space|위상공간의 수열과 수렴]]의 것이고, 하우스도르프 공간, $T_1$ 공간과 여유한 위상 $\mathcal{T}_{\mathrm{cof}}$는 [[hausdorff-space]]의 것이다. 근방은 [[neighborhood]]의 것이다.

1. (극한은 하나뿐이다) $(X, \mathcal{T})$가 하우스도르프 공간이고 $X$의 수열 $(x_n)$이 $p$로 수렴하고 $q$로도 수렴하면 $p = q$이다.
2. (극한의 기호) $(X, \mathcal{T})$가 하우스도르프 공간이고 $X$의 수열 $(x_n)$이 수렴하면, (1)에 의해 그 극한은 하나뿐이다. 그 극한을
   $$
   \lim_{n \to \infty} x_n
   $$
   으로 쓴다. 곧 $p \in X$에 대하여 "$\lim_{n \to \infty} x_n = p$"는 정확히 $(x_n)$이 $p$로 수렴한다는 뜻이다. 하우스도르프가 아닌 공간의 수열과 발산하는 수열에는 이 기호를 쓰지 않는다. 위상을 밝혀야 할 때는 "$(X, \mathcal{T})$에서 $\lim_{n \to \infty} x_n = p$"라 쓴다. 실수열에는 해석학 입문의 [[limit-is-unique|극한의 기호]]도 있다. 이 항목의 기호는 위상의 수렴에 대한 것이고, 두 기호를 섞어 쓰지 않는다. 하우스도르프 공간 $(X, \mathcal{T})$에서 다음이 성립한다.
   - (i) $p \in X$이면 모든 항이 $p$인 상수 수열의 극한은 $p$이다.
   - (ii) $(x_m)$이 수렴하면 그 모든 부분수열 $(x_{n_i})$가 수렴하고 $\lim_{i \to \infty} x_{n_i} = \lim_{m \to \infty} x_m$이다.
   - (iii) $K$가 자연수이면, $(x_n)$이 수렴하는 것은 정확히 그 $K$-꼬리가 수렴할 때이고, 이때 $\lim_{n \to \infty} x_n = \lim_{n \to \infty} x_{n+K}$이다.
3. ($T_1$로는 부족하다) $\mathbb{N}$에 여유한 위상 $\mathcal{T}_{\mathrm{cof}}$를 주면, $n$번째 항이 $n$인 $\mathbb{N}$의 수열은 $\mathbb{N}$의 모든 점으로 수렴한다. $(\mathbb{N}, \mathcal{T}_{\mathrm{cof}})$는 $T_1$ 공간이므로, $T_1$ 공간에서는 수열의 극한이 하나가 아닐 수 있다.
:::

:::english
Sequences, convergence, limits, subsequences and $K$-tails are as in the entry on sequences and convergence in a topological space, and Hausdorff spaces, $T_1$ spaces and the cofinite topology $\mathcal{T}_{\mathrm{cof}}$ are as in the entry on $T_1$ and Hausdorff spaces. Neighborhoods are as in the entry on neighborhoods.

1. (Limits are unique) If $(X, \mathcal{T})$ is a Hausdorff space and a sequence $(x_n)$ in $X$ converges to $p$ and also to $q$, then $p = q$.
2. (Notation for limits) If $(X, \mathcal{T})$ is a Hausdorff space and a sequence $(x_n)$ in $X$ converges, then by (1) it has exactly one limit, which is written
   $$
   \lim_{n \to \infty} x_n.
   $$
   Thus for $p \in X$, "$\lim_{n \to \infty} x_n = p$" means exactly that $(x_n)$ converges to $p$. This symbol is not used for sequences in spaces that are not Hausdorff or for divergent sequences. When the topology must be named we write "$\lim_{n \to \infty} x_n = p$ in $(X, \mathcal{T})$". For sequences of real numbers there is also the symbol for limits of the analysis course; the symbol of this entry refers to topological convergence, and the two symbols are not mixed. In a Hausdorff space $(X, \mathcal{T})$ the following hold.
   - (i) If $p \in X$, the limit of the constant sequence all of whose terms are $p$ is $p$.
   - (ii) If $(x_m)$ converges, then every subsequence $(x_{n_i})$ converges and $\lim_{i \to \infty} x_{n_i} = \lim_{m \to \infty} x_m$.
   - (iii) If $K$ is a natural number, then $(x_n)$ converges exactly when its $K$-tail converges, and in that case $\lim_{n \to \infty} x_n = \lim_{n \to \infty} x_{n+K}$.
3. ($T_1$ is not enough) If $\mathbb{N}$ carries the cofinite topology $\mathcal{T}_{\mathrm{cof}}$, then the sequence in $\mathbb{N}$ whose $n$th term is $n$ converges to every point of $\mathbb{N}$. Since $(\mathbb{N}, \mathcal{T}_{\mathrm{cof}})$ is a $T_1$ space, a sequence in a $T_1$ space may have more than one limit.
:::

## 직관

수열이 $p$와 $q$로 함께 수렴한다면, 어느 번호부터는 항이 모두 $p$의 근방에 들고 또 어느 번호부터는 모두 $q$의 근방에 듭니다. 두 번호보다 큰 번호의 항은 두 근방에 함께 들어야 합니다. 하우스도르프 공간에서 $p \ne q$이면 두 근방을 서로소로 잡을 수 있으므로 그런 항이 있을 수 없고, 그래서 $p = q$입니다. 극한이 하나뿐이어야 "그 극한"을 가리키는 기호 $\lim$을 쓸 수 있습니다.

$T_1$은 이 논증에 모자랍니다. $T_1$에서는 $p$를 품고 $q$를 품지 않는 근방이 있을 뿐, 그 근방이 $q$의 모든 근방과 만날 수 있습니다. (3)의 여유한 위상에서는 공집합이 아닌 열린집합이 유한 개의 점만 빼고 모두 품으므로, $n$번째 항이 $n$인 수열은 어느 근방에서든 결국 빠져나간 점들을 지나쳐 그 근방 안에 머뭅니다. 그래서 어느 점으로나 수렴합니다.

## 증명

:::idea
서로소인 두 근방을 잡고, 두 근방에 대한 번호를 더한 번호의 항이 두 근방에 함께 들어 모순이 됨을 보인다.
:::

:::hint
두 자연수 $M_U$, $M_V$보다 작지 않은 자연수가 필요합니다. 두 수의 최댓값 대신 합 $M_U + M_V$를 써 보세요.
:::

:::hint
(3)에서는 유한한 자연수의 집합의 원소가 모두 어떤 자연수보다 작다는 것을 원소의 개수에 대한 귀납으로 먼저 보입니다.
:::

:::proof
자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술) 정수의 합은 정수이다([[even-and-odd]]). 정수의 부등식은 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z6), (Z7), (L1)을 쓴다. "수열 (3)"처럼 쓴 것은 [[sequence-in-a-space]]의 번호이다.

**(1).** $p \ne q$라고 가정하자. $(X, \mathcal{T})$가 하우스도르프 공간이므로 $U \cap V = \emptyset$인 $p$의 근방 $U$와 $q$의 근방 $V$가 있다. 수렴의 정의에 의해 $n \ge M_U$인 모든 $n$에서 $x_n \in U$인 자연수 $M_U$와, $n \ge M_V$인 모든 $n$에서 $x_n \in V$인 자연수 $M_V$가 있다. $n = M_U + M_V$로 두면 $n$은 정수이고, $0 < M_V$와 (Z7)에 의해 $M_U < n$, $0 < M_U$와 (Z7)에 의해 $M_V < n$이며, $0 < M_U < n$과 (Z6)에 의해 $n$은 자연수이다. 따라서 $x_n \in U$이고 $x_n \in V$, 곧 $x_n \in U \cap V = \emptyset$이 되어 모순이다. 그러므로 $p = q$이다.

**(2).** 기호의 뜻은 (1)로 정해진다. (i) 수열 (1)에 의해 상수 수열은 $p$로 수렴하므로 그 극한은 $p$이다. (ii) $(x_m)$이 $p$로 수렴하면 수열 (3)에 의해 모든 부분수열이 $p$로 수렴하므로 두 극한은 모두 $p$이다. (iii) 수열 (6)에 의해 $(x_n)$이 $p$로 수렴하는 것은 정확히 $K$-꼬리가 $p$로 수렴할 때이다. 따라서 하나가 어떤 점으로 수렴하면 다른 하나도 같은 점으로 수렴하고, 두 극한은 같다.

**(3).** 먼저 다음을 보인다.

(가) $F \subseteq \mathbb{N}$이 유한집합이면, $F$의 모든 원소 $f$에서 $f < M$인 자연수 $M$이 있다.

정수 $k \ge 0$에 대하여 $S_k$를 "원소를 $k$개 갖는 $\mathbb{N}$의 모든 부분집합 $F$에 대하여 그런 자연수 $M$이 있다"라 하고, [[mathematical-induction|수학적 귀납법]]의 시작점이 $0$인 꼴로 보인다. $k = 0$이면 [[finite-set]]의 (F2)에 의해 $F = \emptyset$이므로 $M = 1$이 (확인할 원소가 없어) 조건을 만족한다. $S_k$가 참이고 $F$가 원소를 $k + 1$개 갖는다고 하자. 전단사 $h : \{1, \dots, k+1\} \to F$가 있고 (F1)에 의해 $c = h(k+1)$은 $F$의 원소이다. [[adding-or-removing-an-element]]의 (b)에 의해 $F - \{c\}$는 원소를 $k$개 가지므로, $S_k$에 의해 $F - \{c\}$의 모든 원소가 $M'$보다 작은 자연수 $M'$이 있다. $M = M' + c$로 둔다. $c$와 $M'$은 양의 정수이므로 위의 (1)과 같은 계산으로 $M$은 자연수이고 $M' < M$, $c < M$이다. $F$의 원소 $f$는 $c$이거나 $F - \{c\}$의 원소이다. $f = c$이면 $f < M$이고, $f \in F - \{c\}$이면 $f < M' < M$이므로 (Z6)에 의해 $f < M$이다. 따라서 $S_{k+1}$이 참이다. $F$가 유한집합이면 어떤 정수 $k \ge 0$에 대하여 원소를 $k$개 가지므로 (가)가 성립한다.

이제 $(x_n)$을 $n$번째 항이 $n$인 수열로 둔다($n$은 이미 정해진 $\mathbb{N}$의 원소이므로 수열의 "값으로 정한 수열"에 의해 $\mathbb{N}$의 수열이다). $p \in \mathbb{N}$이고 $U$가 $(\mathbb{N}, \mathcal{T}_{\mathrm{cof}})$에서 $p$의 근방이라 하자. $p \in U$이므로 $U \ne \emptyset$이고, 여유한 위상의 정의에 의해 $F = \mathbb{N} - U$는 유한집합이다. (가)에 의해 $F$의 모든 원소가 $M$보다 작은 자연수 $M$이 있다. $n \ge M$인 자연수 $n$을 잡는다. $n \in F$라면 $n < M$이고 $M \le n$이어서 (L1)에 어긋나므로 $n \notin F$이다. $n \in \mathbb{N}$이므로 $n \in U$, 곧 $x_n \in U$이다. 따라서 $(x_n)$은 $p$로 수렴한다. $p$는 $\mathbb{N}$의 아무 점이었으므로 $(x_n)$은 모든 점으로 수렴한다. [[hausdorff-space]]의 (5)에 의해 $(\mathbb{N}, \mathcal{T}_{\mathrm{cof}})$는 $T_1$ 공간이고, $\mathbb{N}$에는 서로 다른 두 점 $1$, $2$가 있으므로 이 수열의 극한은 하나가 아니다.
:::

## 예시와 반례

:::example[부분수열로 발산을 보이기]
하우스도르프 공간의 수열이 두 부분수열을 가지고 그 둘이 서로 다른 점으로 수렴하면, 원래 수열은 발산합니다. 수렴한다면 (2)의 (ii)에 의해 두 부분수열의 극한이 모두 원래 수열의 극한과 같아야 하기 때문입니다.

$a \ne b$이고 $X = \{a, b\}$에 이산위상을 주면 [[hausdorff-space]]의 (4)에 의해 하우스도르프 공간입니다. $n$이 홀수이면 $x_n = a$, 짝수이면 $x_n = b$인 수열을 봅니다([[even-and-odd]]에 의해 각 $n$마다 값이 하나로 정해진다). $i$에서의 값이 $2i - 1$인 함수와 $2i$인 함수는 자연수 값을 갖고 $i$에서 $i + 1$로 갈 때 값이 $2$씩 커지므로 [[subsequence]]의 (2)에 의해 첨자열입니다. 첫째로 얻은 부분수열은 모든 항이 $a$이고($2i - 1 = 2(i - 1) + 1$은 홀수), 둘째로 얻은 부분수열은 모든 항이 $b$입니다. 두 상수 수열은 각각 $a$와 $b$로 수렴하고 $a \ne b$이므로 $(x_n)$은 발산합니다.
:::

:::counterexample[여유한 위상에서 극한이 여럿인 수열]
(3)의 수열 $1, 2, 3, \dots$이 $1$로도 $2$로도 수렴하는 것을 근방 하나씩으로 보면 이렇습니다. $U = \mathbb{N} - \{2, 3\}$은 여집합 $\{2, 3\}$이 유한집합이므로 열린집합이고 $1$의 근방입니다. $4$ 이상의 모든 $n$에서 $n \in U$입니다. $V = \mathbb{N} - \{1, 5\}$는 $2$의 근방이고, $6$ 이상의 모든 $n$에서 $n \in V$입니다. 어느 근방을 잡아도 빠지는 점은 유한 개이므로 그보다 큰 번호부터는 항이 근방 안에 있습니다. 이 공간은 $T_1$이지만 하우스도르프가 아니어서 (1)을 쓸 수 없습니다.
:::

## 확인 질문

:::check[$\mathbb{N}$에 여유한 위상을 줄 때, 모든 항이 $1$인 상수 수열은 어느 점으로 수렴하는가?]
$1$로만 수렴합니다. [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (1)에 의해 $1$로 수렴합니다. $p \ne 1$이면 $\mathbb{N} - \{1\}$은 여집합 $\{1\}$이 유한집합이므로 열린집합이고 $p$를 원소로 가져 $p$의 근방인데, 이 근방에는 항 $1$이 하나도 들지 않으므로 $p$로는 수렴하지 않습니다. 같은 공간이라도 (3)의 수열과 달리 이 수열의 극한은 하나입니다.
:::

:::check[하우스도르프 공간에서 $(x_n)$이 $p$로 수렴하면, $(x_n)$의 부분수열이 $p$와 다른 점 $q$로 수렴할 수 있는가?]
없습니다. [[sequence-in-a-space|위상공간의 수열과 수렴]]의 (3)에 의해 모든 부분수열은 $p$로 수렴하고, (1)에 의해 그 부분수열의 극한은 하나뿐이므로 $q = p$입니다.
:::
