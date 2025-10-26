const projects = [
  {
    "title": "OPSO/락업 세팅 검증 자동 로깅",
    "desc": "압력조정기 OPSO/락업 설정값을 실측 로거와 연동하여 테스트 자동화 및 보고서 자동 생성.",
    "tags": [
      "KGS",
      "OPSO",
      "데이터로깅",
      "Python",
      "보고서자동화"
    ],
    "link": "#"
  },
  {
    "title": "가스계량기 A/S 불량 분석 템플릿",
    "desc": "접수→원인분석→대응까지 일원화한 템플릿으로 재발 방지 및 고객 커뮤니케이션 표준화.",
    "tags": [
      "품질",
      "A/S",
      "템플릿",
      "표준화"
    ],
    "link": "#"
  },
  {
    "title": "품질 데이터 대시보드 (Excel + Python)",
    "desc": "Lot/공정/치수/불량코드를 통합하여 불량 Top-N, 추세, 상관 지표를 시각화.",
    "tags": [
      "Pandas",
      "Excel",
      "시각화",
      "대시보드"
    ],
    "link": "#"
  },
  {
    "title": "AI 보조 검사 체크리스트",
    "desc": "검사자 실수 방지용 체크리스트·가이드 자동 생성 (조건부 서식/스크립트 포함).",
    "tags": [
      "AI",
      "자동화",
      "품질체크"
    ],
    "link": "#"
  }
];

const list = document.getElementById('project-list');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'project-card';
  const title = document.createElement('h3');
  title.textContent = p.title;
  const desc = document.createElement('p');
  desc.textContent = p.desc;
  const tags = document.createElement('div');
  tags.className = 'tags';
  p.tags.forEach(t => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = t;
    tags.appendChild(tag);
  });
  const link = document.createElement('a');
  link.href = p.link;
  link.target = '_blank';
  link.rel = 'noopener';
  link.textContent = '자세히 보기';
  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(tags);
  card.appendChild(link);
  list.appendChild(card);
});

document.getElementById('year').textContent = new Date().getFullYear();
