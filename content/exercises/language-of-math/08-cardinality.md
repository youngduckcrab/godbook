---
written_by: Claude
status: reviewed
sources:
  - ref: hammack-book-of-proof
    loc: "14.3절, Definition 14.4 뒤의 예 f(n) = n (p.281)"
  - ref: hammack-book-of-proof
    loc: "14.3절, Theorem 14.7 뒤의 사슬 (14.2) (p.282)"
added: 2026-11-26
---

:::exercise[홀짝으로 정한 함수의 칸토어 집합]
자연수 $n$에 대하여 $n$이 홀수이면 $f(n) = \mathbb{N}$, $n$이 짝수이면 $f(n) = \emptyset$으로 정한다.

1. $f$가 $\mathbb{N}$에서 $\mathscr{P}(\mathbb{N})$으로의 함수임을 확인하라.
2. 칸토어 정리의 증명에 나오는 집합 $B = \{x \in \mathbb{N} : x \notin f(x)\}$를 구하고, $B$가 $f$의 값이 아님을 직접 확인하라.
3. $f$는 단사인가?
:::

:::solution
**(1)** [[even-and-odd|짝수와 홀수]]의 진술에서 받아들인 사실에 의해 모든 자연수는 짝수이거나 홀수이고 둘 다는 아니므로, 각 $n \in \mathbb{N}$에 대하여 $f(n)$은 $\mathbb{N}$과 $\emptyset$ 가운데 정확히 하나로 정해진다. $\mathbb{N} \subseteq \mathbb{N}$이고 [[empty-set-is-subset|공집합은 부분집합이라는 정리]]에 의해 $\emptyset \subseteq \mathbb{N}$이므로, [[power-set|멱집합]]의 정의에 의해 두 값은 모두 $\mathscr{P}(\mathbb{N})$의 원소이다. 따라서 $f$는 $\mathbb{N}$에서 $\mathscr{P}(\mathbb{N})$으로의 [[function]]이다.

**(2)** $x \in \mathbb{N}$이 홀수이면 $f(x) = \mathbb{N}$이고 $x \in \mathbb{N}$이므로 $x \in f(x)$, 곧 $x \notin B$이다. $x$가 짝수이면 $f(x) = \emptyset$이고 공집합에는 원소가 없으므로 $x \notin f(x)$, 곧 $x \in B$이다. 모든 자연수는 이 두 경우 가운데 하나이므로 $B = \{x \in \mathbb{N} : x \text{는 짝수}\}$이다.

$f$의 값은 $\mathbb{N}$과 $\emptyset$뿐이다. $1 = 2 \cdot 0 + 1$은 홀수이고, 짝수이면서 홀수인 정수는 없으므로 짝수가 아니다. 따라서 $1 \in \mathbb{N}$이지만 $1 \notin B$이고, $B \ne \mathbb{N}$이다. $2 = 2 \cdot 1$은 짝수인 자연수이므로 $2 \in B$이고, $B \ne \emptyset$이다. 그러므로 $f(n) = B$인 $n \in \mathbb{N}$은 없고, $f : \mathbb{N} \to \mathscr{P}(\mathbb{N})$은 전사가 아니다. 이것은 [[cantors-theorem|칸토어 정리]]의 2가 말하는 대로이다.

**(3)** 단사가 아니다. $3 = 2 \cdot 1 + 1$이므로 $1$과 $3$은 둘 다 홀수이고 $f(1) = f(3) = \mathbb{N}$인데 $1 \ne 3$이다. [[injective-surjective-bijective|단사, 전사, 전단사]]의 단사의 부정에 의해 $f$는 단사가 아니다.
:::

:::exercise[부분집합으로의 포함과 크기 비교]
$A$, $B$가 집합일 때 다음을 증명하라. 크기의 표기는 [[equal-cardinality|크기가 같은 집합]]과 [[comparing-cardinalities|크기의 비교]]의 뜻이다.

1. $A \subseteq B$이면 $|A| \le |B|$이다.
2. $|A| = |B|$이면 $|A| \le |B|$이다.
3. $|\mathbb{Z}| \le |\mathbb{N}|$이다.
:::

:::solution
**(1)** $A \subseteq B$라 하고 $j = \{(a, a) : a \in A\}$로 둔다. $a \in A$이면 $A \subseteq B$이므로 $a \in B$이고, [[cartesian-product|곱집합]]의 정의에 의해 $(a, a) \in A \times B$이다. 따라서 $j \subseteq A \times B$이다. $a \in A$라 하자. (존재) $(a, a) \in j$이고 $a \in B$이다. (유일) $(a, b) \in j$이면 어떤 $x \in A$에 대하여 $(a, b) = (x, x)$이고, 순서쌍의 같음에 의해 $a = x$이고 $b = x$이므로 $b = a$이다. 따라서 [[function]]의 정의에 의해 $j : A \to B$는 함수이고 $j(a) = a$이다. $a, a' \in A$이고 $j(a) = j(a')$이면 $a = j(a) = j(a') = a'$이므로 [[injective-surjective-bijective|단사, 전사, 전단사]]의 단사의 동치 꼴에 의해 $j$는 단사이다. 크기의 비교의 정의에 의해 $|A| \le |B|$이다. $A = \emptyset$이면 $j = \emptyset$이고 위의 논증은 공허하게 성립한다.

**(2)** $|A| = |B|$이면 크기가 같은 집합의 정의에 의해 전단사 $f : A \to B$가 있다. 전단사의 정의에 의해 $f$는 단사이므로 $|A| \le |B|$이다.

**(3)** [[n-and-z-have-equal-cardinality|자연수의 집합과 정수의 집합은 크기가 같다]]에 의해 $|\mathbb{N}| = |\mathbb{Z}|$이고, [[equal-cardinality-is-an-equivalence|크기가 같다는 관계의 세 성질]]의 2(대칭)에 의해 $|\mathbb{Z}| = |\mathbb{N}|$이다. (2)에 의해 $|\mathbb{Z}| \le |\mathbb{N}|$이다.

$\mathbb{Z}$는 $\mathbb{N}$의 부분집합이 아니므로 (3)은 (1)에서 나오지 않는다. $0 \in \mathbb{Z}$이지만 $0$은 양의 정수가 아니어서 $0 \notin \mathbb{N}$이다.
:::

:::exercise[크기 비교의 추이]
$A$, $B$, $C$가 집합일 때 다음을 증명하라.

1. $|A| \le |B|$이고 $|B| \le |C|$이면 $|A| \le |C|$이다.
2. $|A| = |B|$이고 $|B| \le |C|$이면 $|A| \le |C|$이다. 또 $|A| \le |B|$이고 $|B| = |C|$이면 $|A| \le |C|$이다.
:::

:::solution
**(1)** [[comparing-cardinalities|크기의 비교]]의 정의에 의해 단사 $f : A \to B$와 단사 $g : B \to C$가 있다. $f$의 공역과 $g$의 정의역이 $B$로 같으므로 [[function-composition|함수의 합성]] $g \circ f : A \to C$가 정의되고, [[composition-preserves-injectivity-and-surjectivity|합성과 단사, 전사의 관계]]의 1에 의해 $g \circ f$는 단사이다. 따라서 $|A| \le |C|$이다.

**(2)** [[equal-cardinality|크기가 같은 집합]]의 정의에 의해 $|A| = |B|$는 전단사 $A \to B$의 존재이고, [[injective-surjective-bijective|단사, 전사, 전단사]]의 전단사의 정의에 의해 전단사는 단사이므로 $|A| \le |B|$이다. 그러면 $|A| \le |B|$와 $|B| \le |C|$에서 (1)에 의해 $|A| \le |C|$이다. 둘째 주장도 같다. $|B| = |C|$에서 $|B| \le |C|$를 얻고 (1)을 쓴다.
:::

:::exercise[작다와 같다를 섞은 추이]
$A$, $B$, $C$가 집합일 때 다음을 증명하라.

1. $|A| < |B|$이고 $|B| = |C|$이면 $|A| < |C|$이다.
2. $|A| = |B|$이고 $|B| < |C|$이면 $|A| < |C|$이다.
:::

:::solution
[[comparing-cardinalities|크기의 비교]]의 정의에 의해 $|A| < |C|$를 보이려면 단사 $A \to C$가 있음과 전단사 $A \to C$가 없음을 보이면 된다. 세 성질은 [[equal-cardinality-is-an-equivalence|크기가 같다는 관계의 세 성질]]의 1–3을 가리킨다.

**(1)** 단사 $f : A \to B$와 전단사 $g : B \to C$가 있다([[equal-cardinality|크기가 같은 집합]]의 정의). $g$는 단사이므로 [[composition-preserves-injectivity-and-surjectivity|합성과 단사, 전사의 관계]]의 1에 의해 $g \circ f : A \to C$는 단사이다.

전단사 $A \to C$가 없음을 귀류법으로 보인다. 전단사 $h : A \to C$가 있다고 하자. 그러면 $|A| = |C|$이다. $|B| = |C|$에 세 성질의 2(대칭)를 쓰면 $|C| = |B|$이고, $|A| = |C|$와 $|C| = |B|$에 세 성질의 3(추이)을 쓰면 $|A| = |B|$, 곧 전단사 $A \to B$가 있다. 그런데 $|A| < |B|$는 전단사 $A \to B$가 없다는 뜻을 담고 있으므로 모순이다. 따라서 전단사 $A \to C$는 없고 $|A| < |C|$이다.

**(2)** 전단사 $f : A \to B$와 단사 $g : B \to C$가 있다. $f$는 단사이므로 합성과 단사, 전사의 관계의 1에 의해 $g \circ f : A \to C$는 단사이다.

전단사 $h : A \to C$가 있다고 하면 $|A| = |C|$이다. $|A| = |B|$에 대칭을 쓰면 $|B| = |A|$이고, $|B| = |A|$와 $|A| = |C|$에 추이를 쓰면 $|B| = |C|$이다. 이는 $|B| < |C|$에 담긴 "전단사 $B \to C$가 없다"에 어긋난다. 따라서 전단사 $A \to C$는 없고 $|A| < |C|$이다.

두 증명 모두 $|A| = |C|$를 가정한 뒤 크기가 같다는 관계의 대칭과 추이로 가정의 "같지 않다" 쪽에 모순을 만든다.
:::

:::exercise[자연수 집합의 멱집합의 멱집합]
$|\mathbb{N}| < |\mathscr{P}(\mathscr{P}(\mathbb{N}))|$임을 증명하라. 칸토어 정리를 $\mathbb{N}$과 $\mathscr{P}(\mathbb{N})$에 한 번씩 쓰면 $|\mathbb{N}| < |\mathscr{P}(\mathbb{N})|$와 $|\mathscr{P}(\mathbb{N})| < |\mathscr{P}(\mathscr{P}(\mathbb{N}))|$를 얻는다. 이 두 부등식에서 곧바로 결론을 얻으려면 크기의 "작다"가 추이적이라는 사실이 필요한데, 이 문제에서는 그것을 쓰지 않는다. 대신 전단사 $\mathbb{N} \to \mathscr{P}(\mathscr{P}(\mathbb{N}))$가 있다면 $\mathbb{N}$에서 $\mathscr{P}(\mathbb{N})$으로의 전사를 만들 수 있음을 보이는 방법을 써라.
:::

:::solution
[[comparing-cardinalities|크기의 비교]]의 정의에 따라 단사의 존재와 전단사의 부재를 보인다. 멱집합은 [[power-set|멱집합]]의 뜻이다.

**단사의 존재.** [[cantors-theorem|칸토어 정리]]의 1을 집합 $\mathbb{N}$에 쓰면 단사 $u : \mathbb{N} \to \mathscr{P}(\mathbb{N})$가 있고, 집합 $\mathscr{P}(\mathbb{N})$에 쓰면 단사 $v : \mathscr{P}(\mathbb{N}) \to \mathscr{P}(\mathscr{P}(\mathbb{N}))$가 있다. $u$의 공역과 $v$의 정의역이 같으므로 [[composition-preserves-injectivity-and-surjectivity|합성과 단사, 전사의 관계]]의 1에 의해 $v \circ u : \mathbb{N} \to \mathscr{P}(\mathscr{P}(\mathbb{N}))$는 단사이다.

**전단사의 부재.** [[proof-by-contradiction|귀류법]]으로, 전단사 $h : \mathbb{N} \to \mathscr{P}(\mathscr{P}(\mathbb{N}))$가 있다고 가정한다.

함수 $s : \mathscr{P}(\mathscr{P}(\mathbb{N})) \to \mathscr{P}(\mathbb{N})$를 다음과 같이 정한다. $\mathcal{X} \in \mathscr{P}(\mathscr{P}(\mathbb{N}))$, 곧 $\mathcal{X} \subseteq \mathscr{P}(\mathbb{N})$이라 하자. $\mathcal{X} = \{X\}$인 $X \in \mathscr{P}(\mathbb{N})$이 있으면 $s(\mathcal{X}) = X$로, 그런 $X$가 없으면 $s(\mathcal{X}) = \emptyset$으로 둔다.

- 값이 하나로 정해진다: $\mathcal{X} = \{X\} = \{X'\}$이면 $X \in \{X\} = \{X'\}$이고 $\{X'\}$의 원소는 $X'$뿐이므로 $X = X'$이다. 또 각 $\mathcal{X}$는 "그런 $X$가 있다"와 "없다" 가운데 정확히 하나에 속한다.
- 값이 $\mathscr{P}(\mathbb{N})$에 속한다: 첫째 경우 $X \in \mathscr{P}(\mathbb{N})$이고, 둘째 경우 [[empty-set-is-subset|공집합은 부분집합이라는 정리]]에 의해 $\emptyset \subseteq \mathbb{N}$이므로 $\emptyset \in \mathscr{P}(\mathbb{N})$이다.

따라서 $s$는 [[function]]이다. $s : \mathscr{P}(\mathscr{P}(\mathbb{N})) \to \mathscr{P}(\mathbb{N})$는 전사이다. $X \in \mathscr{P}(\mathbb{N})$이면 $\{X\}$의 유일한 원소 $X$가 $\mathscr{P}(\mathbb{N})$에 속하므로 $\{X\} \subseteq \mathscr{P}(\mathbb{N})$, 곧 $\{X\} \in \mathscr{P}(\mathscr{P}(\mathbb{N}))$이고, $s(\{X\}) = X$이기 때문이다.

$h : \mathbb{N} \to \mathscr{P}(\mathscr{P}(\mathbb{N}))$는 전단사이므로 전사이고, $h$의 공역과 $s$의 정의역이 같다. 합성과 단사, 전사의 관계의 2에 의해 $s \circ h : \mathbb{N} \to \mathscr{P}(\mathbb{N})$는 전사이다. 그런데 칸토어 정리의 2에 의해 $\mathbb{N}$에서 $\mathscr{P}(\mathbb{N})$으로의 함수는 모두 전사가 아니다. 모순이므로 전단사 $\mathbb{N} \to \mathscr{P}(\mathscr{P}(\mathbb{N}))$는 없다.

단사는 있고 전단사는 없으므로 $|\mathbb{N}| < |\mathscr{P}(\mathscr{P}(\mathbb{N}))|$이다.
:::

:::exercise[단사를 거꾸로 돌린 전사]
"$|A| \le |B|$이면 $B$에서 $A$로의 전사가 있다"를 생각한다.

1. $A = \emptyset$, $B = \{1\}$이면 이 문장이 거짓임을 보여라.
2. $A \ne \emptyset$이면 이 문장이 참임을 증명하라.
:::

:::solution
**(1)** 공집합 $\emptyset$은 $\emptyset \times \{1\}$의 부분집합이고, $\emptyset$의 원소에 관한 (존재)와 (유일)은 다룰 원소가 없어 공허하게 참이므로 $\emptyset : \emptyset \to \{1\}$은 [[function]]이다. 단사의 조건도 다룰 $a, a'$이 없어 공허하게 참이므로 이 함수는 단사이고, [[comparing-cardinalities|크기의 비교]]의 정의에 의해 $|\emptyset| \le |\{1\}|$이다.

그런데 $\{1\}$에서 $\emptyset$으로의 함수는 하나도 없다. 그런 함수 $g$가 있다면 $1 \in \{1\}$에 대하여 (존재)에 의해 $(1, b) \in g$인 $b \in \emptyset$이 있어야 하는데, 공집합에는 원소가 없기 때문이다. 따라서 $\{1\}$에서 $\emptyset$으로의 전사도 없고, 문장은 이 경우에 거짓이다.

**(2)** $A \ne \emptyset$이고 $|A| \le |B|$라 하자. 단사 $f : A \to B$가 있고, $A$의 원소 $a_0$이 하나 있다. [[image-and-preimage|상과 역상]]의 1에 의해 $f(A) = \{f(a) : a \in A\} \subseteq B$이다. 다음 집합을 정한다.

$$
\begin{aligned}
g = {}&\{(f(a), a) : a \in A\}\\
&\cup \{(b, a_0) : b \in B - f(A)\}
\end{aligned}
$$

첫째 부분의 순서쌍은 $f(a) \in B$, $a \in A$이고 둘째 부분은 $b \in B$, $a_0 \in A$이므로 $g \subseteq B \times A$이다. $b \in B$라 하고, $b \in f(A)$인 경우와 아닌 경우로 나눈다.

- $b \in f(A)$: 상의 정의에 의해 $f(a) = b$인 $a \in A$가 있고 $(b, a) \in g$이다. $(b, x) \in g$라 하자. 이 순서쌍이 둘째 부분에 속하면 $b \in B - f(A)$여서 $b \in f(A)$에 어긋난다. 따라서 첫째 부분에 속하고, 어떤 $a' \in A$에 대하여 $(b, x) = (f(a'), a')$이다. 순서쌍의 같음에 의해 $b = f(a')$이고 $x = a'$이다. $f(a') = b = f(a)$이고 $f$가 단사이므로 [[injective-surjective-bijective|단사, 전사, 전단사]]의 단사의 동치 꼴에 의해 $a' = a$, 곧 $x = a$이다.
- $b \notin f(A)$: $b \in B - f(A)$이므로 $(b, a_0) \in g$이다. $(b, x) \in g$가 첫째 부분에 속하면 $b = f(a')$인 $a' \in A$가 있어 $b \in f(A)$가 되므로 어긋난다. 따라서 둘째 부분에 속하고 $x = a_0$이다.

어느 경우에도 $(b, x) \in g$인 $x \in A$가 정확히 하나 있으므로 $g : B \to A$는 함수이다. 전사임을 보이자. $a \in A$이면 $(f(a), a) \in g$이므로 $g(f(a)) = a$이다. 따라서 $g : B \to A$는 전사이다.

$a_0$은 $f$의 값이 아닌 $B$의 원소에 값을 주는 데 쓰였다. (1)에서는 $A$에 원소가 없어 $a_0$을 잡을 수 없었고, $B$의 원소 $1$에 줄 값이 없었다. $A = B = \emptyset$이면 $\emptyset : \emptyset \to \emptyset$이 전사이므로 문장은 참이다.
:::
