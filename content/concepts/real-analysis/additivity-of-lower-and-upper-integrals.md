---
title: 하적분과 상적분의 구간 덧셈
title_en: Additivity of the Lower and Upper Integrals
aliases: [하적분의 구간 덧셈, 상적분의 구간 덧셈, 다르부 적분의 덧셈, additivity of lower and upper Darboux integrals, additivity of the lower integral, additivity of the upper integral]
kind: lemma
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "a < b < c 이고 f 가 [a, c] 위의 유계함수이면 [a, c] 위의 하적분은 [a, b] 와 [b, c] 위의 하적분의 합이고 상적분도 그렇다. 두 구간의 분할을 이어 붙인 분할의 다르부 합의 쪼개기, 상적분과 하적분의 차의 덧셈, 정의역이 더 큰 함수에 쓰는 꼴을 함께 진술한다."
requires: [set, subset, image-and-preimage, real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum, real-valued-function, bounded-function, interval, partition-of-an-interval, refinement-of-a-partition, darboux-sums, refinement-and-darboux-sums, lower-and-upper-integrals, dirichlet-function]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.2절(5.2.1 소절) Lemma 5.2.1 과 그 증명 (p.191–192), Proposition 5.2.2 의 증명 (p.192); 5.1절(5.1.2 소절) Example 5.1.11 (p.186); 5.1절(5.1.1 소절) Example 5.1.4 (p.183); 5.1절(5.1.4 소절) 연습문제 5.1.2 (p.188); 1.1절(1.1.1 소절) 연습문제 1.1.9 (p.28); 1.2절(1.2.5 소절) 연습문제 1.2.9 (p.35); 5.2절(5.2.3 소절) Lemma 5.2.8 의 증명 (p.196)
    checked: original
    note: "(2)와 (3)은 출처의 Lemma 5.2.1(5.2.1 소절, p.191)이다. 출처의 증명(p.191–192)은 [a, b] 의 분할 P_1 = {x_0, …, x_k} 와 [b, c] 의 분할 P_2 = {x_k, …, x_n} 의 합집합 P 에서 L(P, f) = L(P_1, f) + L(P_2, f) 를 적고, b 를 원소로 갖는 분할만으로 상한을 잡아도 된다는 것을 연습문제 1.1.9(1.1.1 소절, p.28)에, 두 집합의 원소끼리의 합의 집합의 상한이 상한의 합이라는 것을 연습문제 1.2.9(1.2.5 소절, p.35)에 맡긴다. 상적분 쪽은 'Similarly' 로 같은 식을 적고 하한을 잡는다. 이 항목은 원소끼리의 합의 집합을 쓰지 않고, 한쪽 분할을 고정해 상한을 두 번 넘기는 방법으로 증명하며, 상적분 쪽도 하한으로 따로 쓴다(−f 로 넘기지 않는다). b 를 원소로 갖지 않는 분할은 refinement-and-darboux-sums 의 (5)로 다루는데, 이것은 출처의 증명이 Q ∪ {b} 가 Q 의 세분이므로 L(Q, f) ≤ L(Q ∪ {b}, f) 라고 쓰는 단계와 같다. (1)은 출처의 증명의 첫 식을 darboux-sums 의 (7), (8)로 진술에 둔 것이다. (4)는 뒤 항목이 인용하도록 (2)와 (3)에서 바로 얻어 진술에 두었다. (5)는 정의역이 더 큰 함수에 쓰는 꼴로, 출처의 Lemma 5.2.8 의 증명(5.2.3 소절, p.196)이 'Lemma 5.2.1 says that the lower and upper integral are additive' 라고 적고 [a, b] 위의 함수의 하적분을 [a, b] 안의 점 a_{n_k}, b_{n_k} 에서 세 조각으로 나누어 쓰는 것과 같은 쓰임이다. 예시 '디리클레 함수를 1 에서 나누기'의 함수는 출처 Example 5.1.4(5.1.1 소절, p.183)의 디리클레 함수와 같은 함수이고 구간만 [0, 2] 이다. 예시 'b 를 원소로 갖지 않는 분할'의 f(x) = x 는 출처 연습문제 5.1.2(5.1.4 소절, p.188)의 함수와 같은 식이고 구간만 [0, 2] 이다. 확인 질문 '상수함수이면 (2)는'의 상수함수의 하적분은 출처 Example 5.1.11(5.1.2 소절, p.186)의 상수함수의 적분과 같은 계산이고, 확인 질문 '[a, c] 위의 차가 0 이면'은 출처의 Proposition 5.2.2 의 증명(p.192)이 두 조각의 하적분과 상적분이 같다고 결론짓는 논법과 같다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 경계값에서 거짓이던 설명 문장 4건과 출처 메모의 틀린 서술 1건을 고쳤다."
added: 2026-11-20
---

:::statement
$[a, b]$의 분할은 [[partition-of-an-interval]]의 것이고, 이어 붙이기와 나누기는 [[refinement-of-a-partition]]의 것이며, 다르부 합 $L(P, f)$, $U(P, f)$는 [[darboux-sums]]의 것이고, 하적분 $\underline{\int_a^b} f$와 상적분 $\overline{\int_a^b} f$는 [[lower-and-upper-integrals]]의 것이다. 제한은 [[real-valued-function]]의 것이고, 함수의 유계는 [[bounded-function]]의 것이다.

(1)–(4)에서 $a$, $b$, $c$는 $a < b < c$인 실수이고 $f : [a, c] \to \mathbb{R}$는 유계이다. 그러면 제한 $f|_{[a, b]}$와 $f|_{[b, c]}$도 유계이고, [[darboux-sums]]의 (8)과 [[lower-and-upper-integrals]]의 (8)의 약속에 따라 $[a, b]$의 분할 $P_1$에 대한 $L(P_1, f)$, $U(P_1, f)$와 $\underline{\int_a^b} f$, $\overline{\int_a^b} f$는 $f|_{[a, b]}$의 것이며, $[b, c]$ 위의 것은 $f|_{[b, c]}$의 것이다.

1. (분할의 합 쪼개기) $P_1$이 $[a, b]$의 분할이고 $P_2$가 $[b, c]$의 분할이면 $P_1 \cup P_2$는 $[a, c]$의 분할이고
   $$
   \begin{aligned}
   &L(P_1 \cup P_2, f) \\
   &\quad = L(P_1, f) + L(P_2, f), \\
   &U(P_1 \cup P_2, f) \\
   &\quad = U(P_1, f) + U(P_2, f)
   \end{aligned}
   $$
   이다. $P$가 $b$를 원소로 갖는 $[a, c]$의 분할이면 $P \cap [a, b]$와 $P \cap [b, c]$는 각각 $[a, b]$와 $[b, c]$의 분할이고 $L(P, f) = L(P \cap [a, b], f) + L(P \cap [b, c], f)$이며, $U$에 대해서도 같다.
2. (하적분의 덧셈)
   $$
   \underline{\int_a^c} f = \underline{\int_a^b} f + \underline{\int_b^c} f
   $$
   이다.
3. (상적분의 덧셈)
   $$
   \overline{\int_a^c} f = \overline{\int_a^b} f + \overline{\int_b^c} f
   $$
   이다.
4. (차의 덧셈)
   $$
   \begin{aligned}
   &\overline{\int_a^c} f - \underline{\int_a^c} f \\
   &\quad = \left(\overline{\int_a^b} f - \underline{\int_a^b} f\right) \\
   &\qquad + \left(\overline{\int_b^c} f - \underline{\int_b^c} f\right)
   \end{aligned}
   $$
   이고, 이 식에 나오는 세 차는 모두 $0$ 이상이다.
5. (더 큰 정의역) $a < b < c$이고 $[a, c] \subseteq S \subseteq \mathbb{R}$이며 $h : S \to \mathbb{R}$가 $[a, c]$ 위에서 유계라 하자([[darboux-sums]]의 (8)의 뜻, 곧 $h|_{[a, c]}$가 유계). 그러면 $h$는 $[a, b]$와 $[b, c]$ 위에서도 유계이고, (1)–(4)는 $f$를 $h$로 바꾸어도 그대로 성립한다. 여기서 $[a, b]$, $[b, c]$, $[a, c]$ 위의 다르부 합, 하적분, 상적분은 모두 [[darboux-sums]]의 (8)과 [[lower-and-upper-integrals]]의 (8)의 뜻이다.
:::

:::english
Partitions of $[a, b]$ are those of the entry on partitions of an interval; joining and splitting are those of the entry on refinements of a partition; the Darboux sums $L(P, f)$, $U(P, f)$ are those of the entry on Darboux sums; and the lower integral $\underline{\int_a^b} f$ and the upper integral $\overline{\int_a^b} f$ are those of the entry on lower and upper integrals. Restrictions are those of the entry on real-valued functions, and boundedness of functions is that of the entry on bounded functions.

In (1)–(4), $a$, $b$, $c$ are real numbers with $a < b < c$, and $f : [a, c] \to \mathbb{R}$ is bounded. Then the restrictions $f|_{[a, b]}$ and $f|_{[b, c]}$ are bounded as well, and by the conventions in item (8) of the entry on Darboux sums and item (8) of the entry on lower and upper integrals, for a partition $P_1$ of $[a, b]$ the sums $L(P_1, f)$, $U(P_1, f)$ and the integrals $\underline{\int_a^b} f$, $\overline{\int_a^b} f$ are those of $f|_{[a, b]}$, and those over $[b, c]$ are those of $f|_{[b, c]}$.

1. (Splitting the sums of a partition) If $P_1$ is a partition of $[a, b]$ and $P_2$ is a partition of $[b, c]$, then $P_1 \cup P_2$ is a partition of $[a, c]$ and
   $$
   \begin{aligned}
   &L(P_1 \cup P_2, f) \\
   &\quad = L(P_1, f) + L(P_2, f), \\
   &U(P_1 \cup P_2, f) \\
   &\quad = U(P_1, f) + U(P_2, f) .
   \end{aligned}
   $$
   If $P$ is a partition of $[a, c]$ having $b$ as an element, then $P \cap [a, b]$ and $P \cap [b, c]$ are partitions of $[a, b]$ and $[b, c]$, respectively, and $L(P, f) = L(P \cap [a, b], f) + L(P \cap [b, c], f)$; the same holds for $U$.
2. (Additivity of the lower integral)
   $$
   \underline{\int_a^c} f = \underline{\int_a^b} f + \underline{\int_b^c} f .
   $$
3. (Additivity of the upper integral)
   $$
   \overline{\int_a^c} f = \overline{\int_a^b} f + \overline{\int_b^c} f .
   $$
4. (Additivity of the difference)
   $$
   \begin{aligned}
   &\overline{\int_a^c} f - \underline{\int_a^c} f \\
   &\quad = \left(\overline{\int_a^b} f - \underline{\int_a^b} f\right) \\
   &\qquad + \left(\overline{\int_b^c} f - \underline{\int_b^c} f\right),
   \end{aligned}
   $$
   and each of the three differences in this formula is at least $0$.
5. (Larger domain) Let $a < b < c$, let $[a, c] \subseteq S \subseteq \mathbb{R}$, and let $h : S \to \mathbb{R}$ be bounded on $[a, c]$ (in the sense of item (8) of the entry on Darboux sums, that is, $h|_{[a, c]}$ is bounded). Then $h$ is also bounded on $[a, b]$ and on $[b, c]$, and (1)–(4) remain true with $f$ replaced by $h$. Here the Darboux sums, lower integrals, and upper integrals over $[a, b]$, $[b, c]$, and $[a, c]$ are all understood in the sense of item (8) of the entry on Darboux sums and item (8) of the entry on lower and upper integrals.
:::

## 직관

땅 한 필지를 경계선 $b$에서 두 필지로 나누어 따로 재면, 두 넓이의 합이 원래 넓이입니다. $f \ge 0$일 때 하적분은 "그래프 아래로 들어가는 직사각형들의 넓이"로 다가갈 수 있는 끝이므로, 같은 일이 하적분에서도 일어나리라고 짐작할 수 있습니다. 다만 하적분은 넓이 그 자체가 아니라 모든 분할에 대한 상한이므로, 등식 (2)를 보이려면 두 방향의 부등식을 따로 보여야 합니다. 비유의 "경계선에서 나누기"는 분할이 $b$를 점으로 갖는 경우에 해당합니다.

한 방향은 이어 붙이기입니다. $[a, b]$의 분할과 $[b, c]$의 분할을 따로 정해 이어 붙이면 $[a, c]$의 분할이 되고, 하합도 두 하합의 합이 됩니다((1)). 이 합은 $[a, c]$ 위의 하적분을 넘지 않으므로, 두 하적분의 합도 넘지 않습니다. 다른 방향은 나누기입니다. $[a, c]$의 분할이 $b$를 점으로 갖지 않으면 $b$를 더해 줍니다. 점을 더해도 하합은 줄지 않으므로, 그렇게 얻은 분할을 $b$에서 나누어 두 하합의 합으로 보면 됩니다.

상적분은 하한이므로 부등호의 방향이 모두 바뀌지만 같은 두 단계로 됩니다. (4)는 (3)에서 (2)를 뺀 것입니다. 세 차가 모두 $0$ 이상이므로, $[a, c]$ 위의 차가 $0$이면 $[a, b]$ 위의 차와 $[b, c]$ 위의 차도 $0$입니다. 이것이 다음 항목 [[additivity-of-the-integral|적분의 구간 덧셈]]의 핵심입니다.

## 증명

:::idea
하적분은 하합 전체의 상한이다. 이어 붙인 분할로 "두 하합의 합 ≤ 큰 구간의 하적분"을 얻은 뒤 한쪽 분할을 고정하고 상한을 한 번씩 두 번 넘긴다. 거꾸로는 $b$를 더한 세분을 $b$에서 나누어 "큰 구간의 하합 ≤ 두 하적분의 합"을 얻는다.
:::

:::hint
$[b, c]$의 분할 $P_2$를 하나 고정하면, 모든 $[a, b]$의 분할 $P_1$에서 $L(P_1, f) \le \underline{\int_a^c} f - L(P_2, f)$입니다. 오른쪽은 $P_1$에 따라 바뀌지 않는 수입니다.
:::

:::hint
$[a, c]$의 분할 $P$가 $b$를 원소로 갖지 않으면 [[refinement-and-darboux-sums|세분과 다르부 합]]의 (5)가 $P \cup \{b\}$를 거쳐 $L(P, f)$를 두 구간의 하합의 합으로 누릅니다.
:::

:::proof
실수의 계산은 [[real-number-arithmetic]]의 계산 법칙으로 하고, 번호만 쓴 "(1)의 (ii)" 같은 것은 [[order-properties-of-reals]]의 번호이다. "이 항목의 ($n$)"은 위 진술의 번호이다. 상한은 "상계이면서 모든 상계 이하인 수", 하한은 "하계이면서 모든 하계 이상인 수"라는 [[upper-bound-and-supremum]]의 정의로 쓴다.

$f_1 = f|_{[a, b]}$, $f_2 = f|_{[b, c]}$로 쓰자. [[bounded-function]]의 (4)에 의해 둘 다 유계이다. 세 집합
$$
\begin{gathered}
\mathcal{L} = \{L(P, f) : P\text{는 } [a, c]\text{의 분할}\}, \\
\mathcal{L}_1 = \{L(P, f_1) : P\text{는 } [a, b]\text{의 분할}\}, \\
\mathcal{L}_2 = \{L(P, f_2) : P\text{는 } [b, c]\text{의 분할}\}
\end{gathered}
$$
을 [[lower-and-upper-integrals|하적분과 상적분]]의 뜻으로 두고, 상합의 집합 $\mathcal{U}$, $\mathcal{U}_1$, $\mathcal{U}_2$도 같은 뜻으로 둔다. 하적분과 상적분의 정의와 그 항목의 (8)의 약속에 의해
$$
\begin{gathered}
J = \underline{\int_a^c} f = \sup \mathcal{L}, \\
J_1 = \underline{\int_a^b} f = \sup \mathcal{L}_1, \\
J_2 = \underline{\int_b^c} f = \sup \mathcal{L}_2, \\
K = \overline{\int_a^c} f = \inf \mathcal{U}, \\
K_1 = \overline{\int_a^b} f = \inf \mathcal{U}_1, \\
K_2 = \overline{\int_b^c} f = \inf \mathcal{U}_2
\end{gathered}
$$
이다. 또 [[darboux-sums|다르부 하합과 상합]]의 (8)에 의해 $[a, b]$의 분할 $P_1$에서 $L(P_1, f) = L(P_1, f_1)$, $U(P_1, f) = U(P_1, f_1)$이고, $[b, c]$의 분할 $P_2$에서도 $f_2$에 대해 같다.

**이 항목의 (1).** [[refinement-of-a-partition|분할의 세분]]의 (5)의 (i)에 의해 $P_1 \cup P_2$는 $[a, c]$의 분할이다. [[darboux-sums|다르부 하합과 상합]]의 (7)의 (i)에 의해 $L(P_1 \cup P_2, f) = L(P_1, f_1) + L(P_2, f_2)$이고 $U$도 같으며, 위의 (8)의 등식으로 $f_1$, $f_2$를 $f$로 바꾸어 쓸 수 있다. $b \in P$인 경우는 [[refinement-of-a-partition|분할의 세분]]의 (5)의 (ii)에 의해 $P \cap [a, b]$와 $P \cap [b, c]$가 각각 $[a, b]$와 $[b, c]$의 분할이고, [[darboux-sums|다르부 하합과 상합]]의 (7)의 (ii)와 (8)에 의해 등식이 성립한다.

**이 항목의 (2).** 먼저 $J \le J_1 + J_2$를 보인다. $P$를 $[a, c]$의 아무 분할이라 하고 $P' = P \cup \{b\}$로 두자. [[refinement-and-darboux-sums|세분과 다르부 합]]의 (5)에 의해 $P' \cap [a, b]$와 $P' \cap [b, c]$는 각각 $[a, b]$와 $[b, c]$의 분할이고
$$
\begin{aligned}
L(P, f) &\le L(P' \cap [a, b], f_1) \\
&\quad + L(P' \cap [b, c], f_2)
\end{aligned}
$$
이다. [[lower-and-upper-integrals|하적분과 상적분]]의 (2)를 $[a, b]$ 위의 $f_1$과 $[b, c]$ 위의 $f_2$에 쓰면 $L(P' \cap [a, b], f_1) \le J_1$이고 $L(P' \cap [b, c], f_2) \le J_2$이므로, (2)의 (iii)과 (1)의 (v)에 의해 $L(P, f) \le J_1 + J_2$이다. $\mathcal{L}$의 원소는 모두 어떤 분할 $P$에 대한 $L(P, f)$이므로 $J_1 + J_2$는 $\mathcal{L}$의 상계이고, 상한의 정의에 의해 $J \le J_1 + J_2$이다.

다음으로 $J_1 + J_2 \le J$를 보인다. $P_1$을 $[a, b]$의 분할, $P_2$를 $[b, c]$의 분할이라 하자. 이 항목의 (1)에 의해 $P_1 \cup P_2$는 $[a, c]$의 분할이고 $L(P_1, f) + L(P_2, f) = L(P_1 \cup P_2, f)$이며, [[lower-and-upper-integrals|하적분과 상적분]]의 (2)를 $[a, c]$ 위의 $f$와 이 분할에 쓰면 이 값은 $J$ 이하이다. 양변에 $-L(P_2, f)$를 더하면 (2)의 (ii)에 의해
$$
L(P_1, f_1) = L(P_1, f) \le J - L(P_2, f)
$$
이다. 이제 $P_2$를 고정하자. $\mathcal{L}_1$의 원소는 모두 어떤 $P_1$에 대한 $L(P_1, f_1)$이므로 $J - L(P_2, f)$는 $\mathcal{L}_1$의 상계이고, 상한의 정의에 의해 $J_1 \le J - L(P_2, f)$이다. 양변에 $L(P_2, f) - J_1$을 더하면 (2)의 (ii)에 의해 $L(P_2, f_2) = L(P_2, f) \le J - J_1$이다. $P_2$는 $[b, c]$의 아무 분할이었으므로 $J - J_1$은 $\mathcal{L}_2$의 상계이고, 상한의 정의에 의해 $J_2 \le J - J_1$이다. 양변에 $J_1$을 더하면 $J_1 + J_2 \le J$이다.

두 부등식과 (1)의 (ii)에 의해 $J = J_1 + J_2$이다.

**이 항목의 (3).** 먼저 $K_1 + K_2 \le K$를 보인다. $P$를 $[a, c]$의 아무 분할이라 하고 $P' = P \cup \{b\}$로 두자. [[refinement-and-darboux-sums|세분과 다르부 합]]의 (5)에 의해
$$
\begin{aligned}
&U(P' \cap [a, b], f_1) \\
&\quad + U(P' \cap [b, c], f_2) \le U(P, f)
\end{aligned}
$$
이다. [[lower-and-upper-integrals|하적분과 상적분]]의 (2)에 의해 $K_1 \le U(P' \cap [a, b], f_1)$이고 $K_2 \le U(P' \cap [b, c], f_2)$이므로, (2)의 (iii)과 (1)의 (v)에 의해 $K_1 + K_2 \le U(P, f)$이다. 따라서 $K_1 + K_2$는 $\mathcal{U}$의 하계이고, 하한의 정의에 의해 $K_1 + K_2 \le K$이다.

다음으로 $K \le K_1 + K_2$를 보인다. $P_1$을 $[a, b]$의 분할, $P_2$를 $[b, c]$의 분할이라 하자. 이 항목의 (1)과 [[lower-and-upper-integrals|하적분과 상적분]]의 (2)에 의해 $K \le U(P_1 \cup P_2, f) = U(P_1, f) + U(P_2, f)$이고, 양변에 $-U(P_2, f)$를 더하면
$$
\begin{aligned}
K - U(P_2, f) &\le U(P_1, f) \\
&= U(P_1, f_1)
\end{aligned}
$$
이다. $P_2$를 고정하면 $K - U(P_2, f)$는 $\mathcal{U}_1$의 하계이고, 하한의 정의에 의해 $K - U(P_2, f) \le K_1$이다. 양변에 $U(P_2, f) - K_1$을 더하면 $K - K_1 \le U(P_2, f) = U(P_2, f_2)$이다. $P_2$는 아무 분할이었으므로 $K - K_1$은 $\mathcal{U}_2$의 하계이고, 하한의 정의에 의해 $K - K_1 \le K_2$이다. 양변에 $K_1$을 더하면 $K \le K_1 + K_2$이다.

두 부등식과 (1)의 (ii)에 의해 $K = K_1 + K_2$이다.

**이 항목의 (4).** (2)와 (3)에 의해 $K - J = (K_1 + K_2) - (J_1 + J_2)$이고, 계산 법칙으로 이것은 $(K_1 - J_1) + (K_2 - J_2)$와 같다. [[lower-and-upper-integrals|하적분과 상적분]]의 (5)를 $[a, c]$ 위의 $f$, $[a, b]$ 위의 $f_1$, $[b, c]$ 위의 $f_2$에 쓰면 $0 \le K - J$, $0 \le K_1 - J_1$, $0 \le K_2 - J_2$이다.

**이 항목의 (5).** $g = h|_{[a, c]}$로 두면 가정에 의해 $g : [a, c] \to \mathbb{R}$는 유계이다. $[a, b]$의 모든 $x$에서 [[real-valued-function]]의 (6)에 의해 $g|_{[a, b]}(x) = g(x) = h(x) = h|_{[a, b]}(x)$이고, 두 함수의 정의역이 모두 $[a, b]$이므로 그 항목의 (2)에 의해 $g|_{[a, b]} = h|_{[a, b]}$이다. 같은 방법으로 $g|_{[b, c]} = h|_{[b, c]}$이다. [[bounded-function]]의 (4)에 의해 $g|_{[a, b]}$와 $g|_{[b, c]}$는 유계이므로 $h$는 $[a, b]$와 $[b, c]$ 위에서 유계이다. [[darboux-sums|다르부 하합과 상합]]의 (8)과 [[lower-and-upper-integrals|하적분과 상적분]]의 (8)의 약속에 의해, $[a, c]$ 위의 $h$의 다르부 합, 하적분, 상적분은 $g$의 것이고, $[a, b]$ 위의 $h$의 것은 $h|_{[a, b]} = g|_{[a, b]}$의 것, 곧 $[a, b]$ 위의 $g$의 것이며, $[b, c]$ 위에서도 같다. 따라서 (1)–(4)를 유계인 $g : [a, c] \to \mathbb{R}$에 쓴 등식과 부등식이 그대로 $h$에 대한 것이다. $\blacksquare$
:::

## 예시와 반례

:::example[디리클레 함수를 1 에서 나누기]
$D$를 $[0, 2]$ 위의 디리클레 함수([[dirichlet-function]])라 합시다. $[0, 1]$의 각 점 $x$에서 $D|_{[0, 1]}(x)$는 $x$가 유리수이면 $1$, 무리수이면 $0$이므로, $D|_{[0, 1]}$는 $[0, 1]$ 위의 디리클레 함수와 모든 점에서 값이 같고 [[real-valued-function]]의 (2)에 의해 같은 함수입니다. $[1, 2]$에서도 같습니다. [[dirichlet-function]]의 (4)를 세 구간에 쓰면
$$
\begin{gathered}
\underline{\int_0^2} D = 0 = 0 + 0 = \underline{\int_0^1} D + \underline{\int_1^2} D, \\
\overline{\int_0^2} D = 2 = 1 + 1 = \overline{\int_0^1} D + \overline{\int_1^2} D
\end{gathered}
$$
이어서 (2)와 (3)이 맞습니다. 차는 $2 = 1 + 1$로 (4)도 맞습니다. 하적분과 상적분이 다른 함수에서도 두 등식은 각각 성립합니다.
:::

:::example[b 를 원소로 갖지 않는 분할]
$[0, 2]$ 위의 $f(x) = x$와 $b = 1$을 봅니다. $c < d$이고 $[c, d] \subseteq [0, 2]$이면 [[image-and-preimage]]의 상의 정의에 의해 $f([c, d]) = [c, d]$이고, 그 최솟값 $c$와 최댓값 $d$가 하한과 상한입니다([[upper-bound-and-supremum]]의 (2)).

$P = \{0, 2\}$는 $1$을 원소로 갖지 않습니다. $P \cap [0, 1] = \{0\}$은 $[0, 1]$의 분할이 아니므로(원소 $1$이 없다) $P$를 그대로 $1$에서 나눌 수는 없습니다. [[darboux-sums|다르부 하합과 상합]]의 (5)에 의해 $L(P, f) = 0 \cdot 2 = 0$, $U(P, f) = 2 \cdot 2 = 4$입니다. $P' = P \cup \{1\} = \{0, 1, 2\}$를 $1$에서 나누면 $\{0, 1\}$과 $\{1, 2\}$이고
$$
\begin{aligned}
&L(\{0, 1\}, f) + L(\{1, 2\}, f) \\
&\quad = 0 \cdot 1 + 1 \cdot 1 = 1, \\
&U(\{0, 1\}, f) + U(\{1, 2\}, f) \\
&\quad = 1 \cdot 1 + 2 \cdot 1 = 3
\end{aligned}
$$
입니다. $0 < 1$이고 $3 < 4$이므로 [[refinement-and-darboux-sums|세분과 다르부 합]]의 (5)의 두 부등식은 여기서 진짜 부등식입니다. (2)의 증명이 $L(P, f)$를 곧바로 둘로 쪼개지 않고 $P'$을 거쳐 부등식으로 누르는 것은 이 때문입니다. $P$는 $1$에서 나눌 수 없고, $P'$을 거치면 하합 쪽은 커지고 상합 쪽은 작아질 수 있습니다.
:::

## 확인 질문

:::check[$f$가 $[a, c]$ 위의 값이 $k$인 상수함수이면 (2)는 어떤 등식이 되는가?]
$k(c - a) = k(b - a) + k(c - b)$입니다. 제한 $f|_{[a, b]}$와 $f|_{[b, c]}$도 값이 $k$인 상수함수이므로 [[lower-and-upper-integrals|하적분과 상적분]]의 (6)에 의해 세 하적분이 $k(c - a)$, $k(b - a)$, $k(c - b)$이고, 실제로 분배법칙으로 $k(b - a) + k(c - b) = k(c - a)$입니다.
:::

:::check[$[a, c]$ 위에서 $\overline{\int_a^c} f - \underline{\int_a^c} f = 0$이면 $[a, b]$ 위의 차는 얼마인가?]
$0$입니다. (4)에 의해 $0 = x + y$이고 $x = \overline{\int_a^b} f - \underline{\int_a^b} f \ge 0$, $y = \overline{\int_b^c} f - \underline{\int_b^c} f \ge 0$입니다. $x = -y$이고 $0 \le y$이므로 [[order-properties-of-reals]]의 (3)의 (iii)에 의해 $x \le 0$이고, 그 (1)의 (ii)에 의해 $x = 0$입니다. 같은 까닭으로 $y = 0$입니다.
:::
