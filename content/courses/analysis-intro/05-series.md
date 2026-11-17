---
title: 급수
summary: 수열의 부분합 수열을 재귀 정리로 정의해 급수의 수렴과 합을 부분합 수열의 극한으로 정하고, 급수의 선형성과 꼬리, 등비급수, 항이 0 으로 수렴한다는 필요조건, 조화급수의 발산, 비교 판정법, 코시 판정법, 절대수렴, 비 판정법, 교대급수 판정법을 증명한다.
concepts:
  - series-and-partial-sums
  - linearity-of-series
  - tail-of-a-series
  - geometric-series
  - terms-of-convergent-series-tend-to-zero
  - harmonic-series-diverges
  - comparison-test
  - cauchy-criterion-for-series
  - absolute-convergence
  - ratio-test-for-series
  - alternating-series-test
---

수열의 항을 차례로 더해 가면 새 수열이 생깁니다. 이 단원은 그 수열, 곧 부분합 수열이 수렴하는지를 다룹니다. "무한히 많은 수를 더한다"는 말은 그대로는 뜻이 없으므로, 이 강의는 급수를 따로 정의하지 않고 급수에 관한 모든 말을 부분합 수열에 관한 말로 바꾸어 씁니다. 그래서 이 단원에서 쓰는 도구는 모두 앞 단원들의 것, 곧 수열의 극한과 그 성질입니다.

[[series-and-partial-sums|급수와 부분합]]은 3단원 "극한의 성질"의 [[recursion-theorem|재귀 정리]]로 부분합 수열을 정의합니다. 이 강의에는 임의의 개수의 실수를 더하는 법이 없기 때문입니다. 같은 항목에서 "이 식이 부분합이다"를 알아보는 법과, 부분합의 차, 항의 부호·경계·절댓값과 부분합의 관계 같은 기본 계산을 함께 증명해 둡니다.

[[linearity-of-series|급수의 선형성]]과 [[tail-of-a-series|급수의 꼬리]]는 급수를 다루는 기본 규칙입니다. 앞의 것은 상수배와 항끼리의 합·차가 부분합과 합에 그대로 옮겨 간다는 것이고, 뒤의 것은 처음 몇 개의 항을 떼어 내도 수렴 여부는 그대로이고 합은 떼어 낸 몫만큼 달라진다는 것입니다. 2단원의 [[tail-of-a-sequence|수열의 꼬리]]를 부분합 수열에 쓴 결과이지만, 수열의 꼬리와 달리 합은 바뀔 수 있습니다.

[[geometric-series|등비급수]]는 부분합과 합을 식으로 구할 수 있는 급수의 대표적인 예이고, 3단원의 [[geometric-sequence-limit|등비수열의 극한]]으로 그 합을 얻습니다. 마지막 [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]는 급수가 발산함을 보이는 간단한 방법 하나를 주고, 첫째 항이 $0$이 아니고 공비의 절댓값이 $1$ 이상인 등비급수가 발산함을 보입니다. 항이 $0$으로 수렴해도 급수가 발산할 수 있다는 것도 같은 항목에서 보입니다. 항이 $0$으로 가는 것은 급수가 수렴하기 위한 필요조건일 뿐입니다.

후반은 급수가 수렴하는지를 판정하는 방법들입니다. [[harmonic-series-diverges|조화급수의 발산]]은 항이 $0$으로 수렴해도 급수가 발산하는 예이고, 4단원의 [[subsequence|부분수열]]을 써서 증명합니다. [[comparison-test|비교 판정법]]은 항이 $0$ 이상인 급수를 합을 아는 급수와 비교합니다. 비교할 대상으로 앞뒤 항이 지워지는 급수와 자연수 $p$에 대한 $(n^p)^{-1}$의 급수를 함께 다룹니다.

[[cauchy-criterion-for-series|급수의 코시 판정법]]은 4단원의 [[cauchy-iff-convergent|코시 수열은 수렴한다]]는 정리를 부분합 수열에 쓴 것으로, 합이 될 수를 모르는 채 수렴을 보이게 해 줍니다. 이것으로 [[absolute-convergence|절대수렴]]하는 급수가 수렴한다는 것을 증명합니다. [[ratio-test-for-series|급수의 비 판정법]]은 3단원의 [[ratio-test-for-sequences|수열의 비 판정법]]으로 항을 등비급수의 항과 비교해 절대수렴을 얻습니다. 마지막 [[alternating-series-test|교대급수 판정법]]은 절대수렴하지 않는 급수의 수렴을 보이는 방법이고, 조화급수의 항에 부호를 번갈아 붙인 급수가 조건수렴함을 보입니다.

근 판정법, 급수의 재배열, 급수끼리의 곱, 거듭제곱급수는 이 강의에서 다루지 않습니다.
