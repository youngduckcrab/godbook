---
title: 0 이상인 함수의 적분
summary: 측도공간 위에서 0 이상인 단순함수의 적분을 표준 표현으로 정의하고, 가측인 [0, ∞] 값 함수의 적분을 그 아래에 있는 단순함수의 적분의 상한으로 정의한 뒤, 단조 수렴 정리, 적분의 덧셈과 항별 적분, 셈측도에 대한 적분과 급수, 파투 보조정리, 마르코프 부등식과 μ-거의 어디서나 같은 함수의 적분을 증명한다.
concepts:
  - integral-of-nonnegative-simple-function
  - integral-of-nonnegative-measurable-function
  - monotone-convergence-theorem-for-integrals
  - additivity-of-nonnegative-integral
  - termwise-integration-of-nonnegative-series
  - integral-with-respect-to-counting-measure
  - fatou-lemma-for-integrals
  - markov-inequality-and-null-integral
---

2단원에서 가측함수와 단순함수를, 3단원에서 측도를 다뤘습니다. 이 단원은 둘을 합쳐 측도공간 위에서 $0$ 이상인 함수를 적분합니다. 값은 1단원의 $[0, \infty]$에서 잽니다. 함수의 값이 $\infty$일 수 있고 측도도 $\infty$일 수 있으므로 적분도 $\infty$일 수 있지만, $[0, \infty]$에서는 상한과 단조증가열의 극한이 늘 정해지므로 적분은 늘 하나의 값으로 정해집니다. 대신 $[0, \infty]$에는 뺄셈이 없어서, 두 적분이 모두 $\infty$이면 그 차를 쓸 수 없습니다.

[[integral-of-nonnegative-simple-function|0 이상인 단순함수의 적분]]은 2단원의 [[simple-function-approximation|표준 표현]]으로 "값 × 그 값을 갖는 점들의 집합의 측도"를 더한 것입니다. $0 \cdot \infty = 0$이 여기서 쓰입니다. 계산할 때는 서로소가 아닌 집합의 지시함수로 쓴 아무 표현에서 "계수 × 측도"를 더해도 같다는 것을 이 항목에서 증명합니다. 이 항목은 또 단순함수 하나가 가측집합마다 그 위의 적분을 주는 측도를 정한다는 것을 증명하는데, 3단원의 [[properties-of-measures|측도의 연속성]]과 함께 단조 수렴 정리의 증명에 쓰입니다.

[[integral-of-nonnegative-measurable-function|0 이상인 가측함수의 적분]]은 가측인 $[0, \infty]$ 값 함수 $f$ 아래에 있는 0 이상인 단순함수의 적분들의 상한입니다. 단순함수에서는 앞 항목의 적분과 같고, 단조성, 가측집합 위의 적분, 실수배, 한 집합 위에서 $\infty$를 포함한 상수인 함수의 적분, 그리고 3단원의 디랙 측도에 대한 적분 $f(p)$가 정의에서 바로 나옵니다. 출처의 강의록은 디랙 측도의 적분을 $f(p)$가 실수인 경우의 논법으로만 증명하는데, 이 항목은 $f(p) = \infty$인 경우를 따로 다룹니다.

정의의 상한은 직접 다루기 어렵습니다. [[monotone-convergence-theorem-for-integrals|적분의 단조 수렴 정리]]는 점마다 단조증가하는 가측함수열의 극한의 적분이 적분들의 극한이라는 것이고, 그래서 0 이상인 가측함수의 적분을 그 함수로 다가가는 단순함수의 아무 증가열로 구할 수 있습니다. 증명에서 출처의 강의록이 $f(x)$와 비교하는 자리를 $f(x) = \infty$인 점에서도 통하도록 단순함수의 값과 비교해 고쳤습니다. [[additivity-of-nonnegative-integral|0 이상인 함수의 적분의 덧셈]]은 단순함수의 덧셈을 표준 근사열과 단조 수렴 정리로 넘겨 두 함수와 유한 개의 함수의 합, 서로소인 두 집합 위의 적분을 다룹니다.

나머지 네 항목은 단조 수렴 정리를 여러 방향으로 씁니다. [[termwise-integration-of-nonnegative-series|0 이상인 함수항 급수의 항별 적분]]은 부분합에 단조 수렴 정리를 써서 급수의 적분이 적분의 합이라는 것을 증명하고, 이것으로 0 이상인 가측함수가 가측집합마다 그 위의 적분을 주는 측도를 정한다는 것을 보입니다. [[integral-with-respect-to-counting-measure|셈측도에 대한 적분과 급수]]는 3단원의 셈측도와 가중 셈측도에 대한 적분이 함숫값과 가중치의 곱의 합이라는 것을 보여, 항이 0 이상인 급수를 적분의 한 경우로 만듭니다. 1단원의 [[nonnegative-double-series|이중급수의 합의 순서 바꾸기]]도 이 두 항목으로 다시 얻을 수 있지만, 이미 증명된 정리이므로 새로 진술하지 않습니다.

[[fatou-lemma-for-integrals|적분의 파투 보조정리]]는 단조가 아닌 함수열에서도 하극한의 적분이 적분들의 하극한 이하라는 것으로, 2단원에서 정의한 $[0, \infty]$의 하극한을 씁니다. 셈측도 위에서 질량이 점점 큰 번호로 옮겨 가는 함수열이 등호가 깨지는 예입니다. [[markov-inequality-and-null-integral|마르코프 부등식과 적분이 0 인 함수]]는 높이가 $t$ 이상인 곳의 측도를 적분으로 막는 부등식에서, 적분이 실수인 함수는 $\mu$-거의 어디서나 실수이고, 적분이 $0$인 것은 함수가 $\mu$-거의 어디서나 $0$인 것과 같으며, $\mu$-거의 어디서나 같은 함수는 적분이 같다는 것을 끌어냅니다. 그래서 단조 수렴 정리도 측도가 0 인 집합 하나 밖에서만 단조증가하는 함수열에 쓸 수 있습니다. 이 단원의 항목들은 읽는 순서에서 앞에 오는 항목만 쓰고, 단순함수의 증가열이 필요한 곳에서는 고르는 일 없이 2단원의 식으로 정한 표준 근사열을 씁니다.
