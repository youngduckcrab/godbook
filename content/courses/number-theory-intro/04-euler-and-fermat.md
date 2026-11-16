---
title: 오일러 정리와 페르마의 소정리
summary: 유한 곱의 조작 세 가지를 갖추고, 법과 서로소인 나머지를 세어 오일러 피 함수를 정의한 뒤, 오일러 정리와 소수 법의 페르마의 소정리를 증명한다.
concepts:
  - finite-product-of-products
  - rearranging-a-finite-product
  - product-over-a-finite-set
  - euler-phi-function
  - coprime-to-modulus
  - multiplication-permutes-reduced-residues
  - euler-theorem
  - fermats-little-theorem
---

이 단원은 "수학의 언어"의 9단원(유한집합과 세기)을 먼저 읽었다고 가정합니다. 법 $n$과 서로소인 나머지가 몇 개인지 세려면 "원소를 $k$개 갖는다"가 무엇을 뜻하는지와, 그 $k$가 하나로 정해진다는 것이 필요하기 때문입니다. 앞 단원에서는 합동의 계산, 소거 법칙, 역원을 증명했습니다. 이 단원의 목표는 그 도구로 "$n$과 서로소인 $x$의 $\varphi(n)$제곱은 $1$과 합동이다"를 증명하는 것입니다. $\varphi(n)$은 이 단원에서 정의합니다.

앞의 세 항목은 곱에 관한 준비입니다. [[finite-product-of-products|항끼리 곱한 열의 곱]]은 모든 항에 같은 수 $x$를 곱한 열의 곱이 $x$의 거듭제곱과 원래 곱의 곱이라고 말합니다. [[rearranging-a-finite-product|유한 곱의 재배열]]은 곱하는 순서를 바꿔도 곱이 같다고 말하고, [[product-over-a-finite-set|유한집합 위의 곱]]은 이를 이용해 정수의 집합 위의 곱이 나열 방식과 무관하게 정해진다고 말합니다. 첫 두 개는 오일러 정리의 증명에서 직접 쓰이고, 집합 위의 곱은 5단원의 윌슨 정리에서 쓰입니다.

그다음 세 항목이 이 단원의 중심입니다. [[euler-phi-function|오일러 피 함수]]는 $1$부터 $n$까지 $n$과 서로소인 수를 세어 $\varphi(n)$으로 정의하고, $\varphi(n) \ge 1$과 소수에서의 값 $\varphi(p) = p - 1$을 증명합니다. [[coprime-to-modulus|법과 서로소인 수의 성질]]은 서로소라는 성질이 합동과 곱에서 보존되고 나머지를 취해도 유지된다는 것을, [[multiplication-permutes-reduced-residues|법과 서로소인 수를 곱한 나머지의 재배열]]은 $n$과 서로소인 $x$를 곱하면 $n$과 서로소인 나머지들이 서로 자리만 바꾼다는 것을 보입니다. 이 마지막 사실은 세기 대신 앞 단원의 역원으로 증명합니다.

[[euler-theorem|오일러 정리]]는 이 재료를 조립합니다. 서로소인 나머지를 모두 곱한 것과 거기에 $x$를 곱해 나머지를 취한 것을 모두 곱한 것이 합동이고, 왼쪽에 $x$가 $\varphi(n)$번 묶여 나오며, 남은 곱이 법과 서로소이므로 소거하면 $x^{\varphi(n)} \equiv 1$이 됩니다. [[fermats-little-theorem|페르마의 소정리]]는 법이 소수일 때 $\varphi(p) = p - 1$을 대입한 경우이고, $p$로 나누어떨어지는 수까지 포함하는 $a^p \equiv a$ 꼴도 증명합니다. 소수 판정에 쓰는 이야기나 그 역은 이 단원에서 다루지 않습니다. 이 단원에서 새로 받아들인 사실은 없습니다.
