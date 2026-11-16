// Container directives used in content:
//   :::statement            진술 상자
//   :::english              같은 진술의 영어판 (진술 상자 바로 아래에 붙는다)
//   :::idea                 증명의 핵심 아이디어 (접힘)
//   :::hint                 단계별 힌트 (접힘, 자동 번호)
//   :::proof                전체 증명 (접힘)
//   :::example / :::counterexample / :::remark[제목]
//   :::check[질문]          확인 질문, 본문은 접힌 답
//   :::exercise[제목] / :::solution   연습문제와 접힌 풀이
import { visit } from 'unist-util-visit';

const FOLDS = { idea: '핵심 아이디어', hint: '힌트', proof: '전체 증명', solution: '풀이' };
const BOXES = { statement: '', english: 'English', example: '예시', counterexample: '반례', remark: '참고', exercise: '문제' };

function takeLabel(node) {
  const first = node.children[0];
  if (first?.data?.directiveLabel) {
    node.children.shift();
    return first.children;
  }
  return null;
}
const span = (cls, children) => ({ type: 'paragraph', data: { hProperties: { class: cls } }, children });
const text = (value) => ({ type: 'text', value });

export function remarkBlocks() {
  return (tree, file) => {
    let hint = 0;
    let exercise = 0;
    visit(tree, (node) => {
      if (node.type === 'heading') hint = 0;
      if (node.type !== 'containerDirective') return;
      const name = node.name;
      const label = takeLabel(node);
      node.data ??= {};
      if (name in FOLDS) {
        let title = FOLDS[name];
        if (name === 'hint') title += ` ${++hint}`;
        node.data.hName = 'details';
        node.data.hProperties = { class: `fold fold-${name}` };
        node.children.unshift({ type: 'paragraph', data: { hName: 'summary' }, children: label ? [text(title + ': '), ...label] : [text(title)] });
        if (name === 'proof') node.children.push(span('qed', [text('∎')]));
      } else if (name === 'check') {
        node.data.hName = 'details';
        node.data.hProperties = { class: 'fold fold-check' };
        node.children.unshift({ type: 'paragraph', data: { hName: 'summary' }, children: label ?? [text('확인 질문')] });
      } else if (name in BOXES) {
        let title = BOXES[name];
        if (name === 'exercise') title += ` ${++exercise}`;
        node.data.hName = 'div';
        node.data.hProperties = { class: `box box-${name}` };
        const head = [];
        if (title) head.push(text(title));
        if (label) head.push(...(title ? [text(' · ')] : []), ...label);
        if (head.length) node.children.unshift(span('box-title', head));
      } else {
        file.message(`알 수 없는 블록 :::${name}`, node);
      }
    });
  };
}
