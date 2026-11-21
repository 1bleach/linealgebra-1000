/* ============================================================
   线性代数 · 1000 道最难真题精练
   纯前端刷题软件：无依赖、离线可用（KaTeX 已本地化）
   ============================================================ */
(function () {
  'use strict';

  var BANK = window.LBANK || [];
  var STATE_KEY = 'la_math_state_v1';
  var CHAPTERS = [
    { n: 1,  name: '行列式' },
    { n: 2,  name: '矩阵及其运算' },
    { n: 3,  name: '向量组的线性相关性' },
    { n: 4,  name: '线性方程组' },
    { n: 5,  name: '特征值与特征向量' },
    { n: 6,  name: '相似矩阵与对角化' },
    { n: 7,  name: '二次型与正定性' },
    { n: 8,  name: '线性空间与线性变换' },
    { n: 9,  name: '欧氏空间与正交变换' },
    { n: 10, name: '综合压轴与证明' }
  ];

  var state = {
    ans: {},        // id -> 1 对 / 2 错
    star: {},       // id -> true
    theme: 'dark'
  };
  try {
    var raw = localStorage.getItem(STATE_KEY);
    if (raw) { var s = JSON.parse(raw); state.ans = s.ans || {}; state.star = s.star || {}; state.theme = s.theme || 'dark'; }
  } catch (e) {}

  function save() {
    try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  /* ---------------- 数学公式渲染 ---------------- */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function renderMath(text, soft) {
    // 块级公式 \[...\] 单独成块；其余文本按空行分段，段内 \(...\) 作为行内公式渲染
    // soft=true 时，段内单个换行折叠成空格（题干用）
    var out = '';
    var rest = String(text);
    var re = /\\\[([\s\S]*?)\\\]/g;
    var last = 0, m;
    while ((m = re.exec(rest)) !== null) {
      out += renderInline(rest.slice(last, m.index), soft);
      try {
        out += katex.renderToString(m[1], { displayMode: true, throwOnError: false, strict: false });
      } catch (e) {
        out += '<p>' + esc(m[1]) + '</p>';
      }
      last = m.index + m[0].length;
    }
    out += renderInline(rest.slice(last), soft);
    return out;
  }
  function renderInline(t, soft) {
    // soft：题干模式，所有换行折叠成空格，整段连成一句
    var parts = soft ? [String(t).replace(/\s*\n+\s*/g, ' ')] : String(t).split(/\n{2,}/);
    var html = '';
    parts.forEach(function (p) {
      p = p.trim();
      if (!p) return;
      var buf = '', last = 0, m;
      var re = /\\\(([\s\S]*?)\\\)/g;
      while ((m = re.exec(p)) !== null) {
        buf += esc(p.slice(last, m.index)).replace(/\n/g, soft ? ' ' : '<br>');
        try {
          buf += katex.renderToString(m[1], { displayMode: false, throwOnError: false, strict: false });
        } catch (e) {
          buf += esc(m[1]);
        }
        last = m.index + m[0].length;
      }
      buf += esc(p.slice(last)).replace(/\n/g, soft ? ' ' : '<br>');
      html += '<p>' + buf + '</p>';
    });
    return html;
  }

  /* ---------------- 视图状态 ---------------- */
  var view = {
    ch: 0,          // 0 = 全部章节
    mode: 'all',
    diff: 0,
    type: '',
    keyword: '',
    list: [],       // 当前题目数组
    idx: 0
  };

  var quizStart = Date.now();
  var $ = function (id) { return document.getElementById(id); };

  function chapterName(n) {
    var c = CHAPTERS.filter(function (x) { return x.n === n; })[0];
    return c ? c.name : '其他';
  }

  /* ---------------- 构建题目列表 ---------------- */
  function buildList() {
    var qs = BANK.slice();
    if (view.ch) qs = qs.filter(function (q) { return q.ch === view.ch; });
    if (view.mode === 'wrong') qs = qs.filter(function (q) { return state.ans[q.id] === 2; });
    if (view.mode === 'star') qs = qs.filter(function (q) { return !!state.star[q.id]; });
    if (view.diff) qs = qs.filter(function (q) { return q.diff >= view.diff; });
    if (view.type) qs = qs.filter(function (q) { return q.type === view.type; });
    if (view.keyword) {
      var k = view.keyword.toLowerCase();
      qs = qs.filter(function (q) {
        return (q.q + ' ' + q.a + ' ' + (q.sol || '') + ' ' + (q.tags || '')).toLowerCase().indexOf(k) >= 0;
      });
    }
    if (view.mode === 'random') {
      for (var i = qs.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = qs[i]; qs[i] = qs[j]; qs[j] = t;
      }
    }
    view.list = qs;
    if (view.idx >= qs.length) view.idx = 0;
    render();
  }

  /* ---------------- 渲染 ---------------- */
  function render() {
    var qs = view.list;
    var q = qs[view.idx];

    // 侧栏统计
    var doneCount = 0, rightCount = 0, wrongCount = 0, starCount = 0;
    BANK.forEach(function (x) {
      if (state.ans[x.id]) doneCount++;
      if (state.ans[x.id] === 1) rightCount++;
      if (state.ans[x.id] === 2) wrongCount++;
      if (state.star[x.id]) starCount++;
    });
    $('statDone').textContent = doneCount;
    $('statRight').textContent = rightCount;
    $('statWrong').textContent = wrongCount;
    $('statStar').textContent = starCount;
    $('progText').textContent = doneCount + ' / ' + BANK.length;
    $('progBar').style.width = BANK.length ? (doneCount / BANK.length * 100).toFixed(1) + '%' : '0%';

    // 章节列表
    var chHtml = '<div class="ch-item' + (view.ch === 0 ? ' active' : '') + '" data-ch="0">' +
      '<span class="num">λ</span><span class="nm">全部章节</span><span class="ct">' + BANK.length + '</span></div>';
    CHAPTERS.forEach(function (c) {
      var arr = BANK.filter(function (x) { return x.ch === c.n; });
      var d = arr.filter(function (x) { return !!state.ans[x.id]; }).length;
      chHtml += '<div class="ch-item' + (view.ch === c.n ? ' active' : '') + '" data-ch="' + c.n + '">' +
        '<span class="num">' + c.n + '</span><span class="nm">' + c.name + '</span>' +
        '<span class="ct">' + d + '/' + arr.length + '</span></div>';
    });
    $('chapters').innerHTML = chHtml;

    // 标题栏
    var parts = [];
    parts.push(view.ch ? chapterName(view.ch) : '全部题目');
    if (view.mode === 'wrong') parts.push('错题本');
    if (view.mode === 'star') parts.push('我的收藏');
    if (view.mode === 'random') parts.push('随机');
    if (view.diff) parts.push('难度 ≥ ' + '★'.repeat(view.diff));
    if (view.type) parts.push(view.type + '题');
    if (view.keyword) parts.push('“' + view.keyword + '”');
    $('crumb').textContent = parts.join(' · ');
    $('pos').textContent = qs.length ? (view.idx + 1) + ' / ' + qs.length : '0 / 0';

    // 题目
    if (!q) {
      $('qBody').innerHTML = '<div class="empty">这一组里没有题目。<br>换个筛选条件，或点左侧「全部题目」。</div>';
      $('qCh').textContent = '-'; $('qType').textContent = '-'; $('qDiff').textContent = '-';
      $('qIdx').textContent = '#-'; $('starBtn').classList.remove('on');
      $('answerBlock').classList.add('hidden'); $('solBlock').classList.add('hidden');
      renderDots();
      return;
    }
    $('qCh').textContent = '第' + '一二三四五六七八九十'.charAt(q.ch - 1) + '章 · ' + chapterName(q.ch);
    $('qType').textContent = q.type + '题';
    $('qDiff').textContent = '★'.repeat(q.diff) + '☆'.repeat(5 - q.diff);
    $('qIdx').textContent = '#' + q.id;
    $('starBtn').textContent = state.star[q.id] ? '★' : '☆';
    $('starBtn').classList.toggle('on', !!state.star[q.id]);

    $('qBody').innerHTML = renderMath(q.q, true);
    $('answerBody').innerHTML = renderMath(q.a);
    $('solBody').innerHTML = q.sol ? renderMath(q.sol) : '<p class="dim">（暂无解析）</p>';

    $('answerBlock').classList.add('hidden');
    $('solBlock').classList.add('hidden');
    $('showSolBtn').textContent = '显示解析';

    // 已作答的题目给个提示
    var st = state.ans[q.id];
    $('rightBtn').style.opacity = st === 1 ? 1 : .85;
    $('wrongBtn').style.opacity = st === 2 ? 1 : .85;

    renderDots();
  }

  function renderDots() {
    var n = view.list.length;
    var html = '';
    var max = Math.min(n, 120);
    var start = 0;
    if (n > 120) { start = Math.max(0, Math.min(view.idx - 60, n - 120)); }
    for (var i = start; i < start + max; i++) {
      var q = view.list[i];
      var cls = 'dot';
      if (state.ans[q.id] === 1) cls += ' right';
      else if (state.ans[q.id] === 2) cls += ' wrong';
      if (i === view.idx) cls += ' cur';
      html += '<i class="' + cls + '" data-i="' + i + '"></i>';
    }
    $('dots').innerHTML = html;
  }

  /* ---------------- 交互 ---------------- */
  function go(delta) {
    if (!view.list.length) return;
    view.idx = (view.idx + delta + view.list.length) % view.list.length;
    render();
  }
  function jump(i) {
    if (i >= 0 && i < view.list.length) { view.idx = i; render(); }
  }
  function mark(v) {
    var q = view.list[view.idx];
    if (!q) return;
    state.ans[q.id] = state.ans[q.id] === v ? 0 : v;   // 再点一次取消
    if (!state.ans[q.id]) delete state.ans[q.id];
    save(); render();
    if (state.ans[q.id]) setTimeout(function () { go(1); }, 260);
  }

  $('prevBtn').onclick = function () { go(-1); };
  $('nextBtn').onclick = function () { go(1); };
  $('rightBtn').onclick = function () { mark(1); };
  $('wrongBtn').onclick = function () { mark(2); };
  $('showAnswerBtn').onclick = function () {
    var b = $('answerBlock');
    b.classList.toggle('hidden');
  };
  $('showSolBtn').onclick = function () {
    var b = $('solBlock');
    b.classList.toggle('hidden');
    $('showSolBtn').textContent = b.classList.contains('hidden') ? '显示解析' : '收起解析';
  };
  $('starBtn').onclick = function () {
    var q = view.list[view.idx]; if (!q) return;
    if (state.star[q.id]) delete state.star[q.id]; else state.star[q.id] = true;
    save();
    $('starBtn').textContent = state.star[q.id] ? '★' : '☆';
    $('starBtn').classList.toggle('on', !!state.star[q.id]);
    var sc = 0; BANK.forEach(function (x) { if (state.star[x.id]) sc++; });
    $('statStar').textContent = sc;
  };

  $('chapters').onclick = function (e) {
    var el = e.target.closest('.ch-item'); if (!el) return;
    view.ch = +el.dataset.ch; view.idx = 0; buildList();
    if (window.innerWidth <= 900) { $('sidebar').classList.remove('open'); $('overlay').classList.remove('show'); }
  };
  $('modes').onclick = function (e) {
    var el = e.target.closest('.mode'); if (!el) return;
    view.mode = el.dataset.mode;
    Array.prototype.forEach.call(document.querySelectorAll('.mode'), function (m) { m.classList.remove('active'); });
    el.classList.add('active');
    view.idx = 0; buildList();
  };
  $('diffFilter').onchange = function () { view.diff = +this.value; view.idx = 0; buildList(); };
  $('typeFilter').onchange = function () { view.type = this.value; view.idx = 0; buildList(); };
  var tmr = null;
  $('searchBox').oninput = function () {
    var v = this.value.trim();
    clearTimeout(tmr);
    tmr = setTimeout(function () { view.keyword = v; view.idx = 0; buildList(); }, 180);
  };
  $('dots').onclick = function (e) {
    var el = e.target.closest('.dot'); if (!el) return;
    jump(+el.dataset.i);
  };
  $('themeBtn').onclick = function () {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    save();
  };
  $('resetBtn').onclick = function () {
    if (confirm('确定清空所有做题记录和收藏吗？此操作不可恢复。')) {
      state.ans = {}; state.star = {}; save();
      view.idx = 0; buildList();
    }
  };
  $('menuBtn').onclick = function () {
    $('sidebar').classList.toggle('open');
    $('overlay').classList.toggle('show');
  };
  $('overlay').onclick = function () {
    $('sidebar').classList.remove('open');
    $('overlay').classList.remove('show');
  };

  document.addEventListener('keydown', function (e) {
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (e.key === 'ArrowLeft') { go(-1); e.preventDefault(); }
    else if (e.key === 'ArrowRight') { go(1); e.preventDefault(); }
    else if (e.key === ' ') {
      if ($('answerBlock').classList.contains('hidden') === false) {
        $('answerBlock').classList.add('hidden');
      } else {
        $('answerBlock').classList.remove('hidden');
      }
      e.preventDefault();
    }
    else if (e.key === '1') { mark(1); }
    else if (e.key === '2') { mark(2); }
    else if (e.key === 's' || e.key === 'S') { $('starBtn').click(); }
  });

  // 计时
  setInterval(function () {
    var s = Math.floor((Date.now() - quizStart) / 1000);
    var mm = String(Math.floor(s / 60)).padStart(2, '0');
    var ss = String(s % 60).padStart(2, '0');
    $('timer').textContent = mm + ':' + ss;
  }, 1000);

  /* ---------------- 启动 ---------------- */
  document.documentElement.setAttribute('data-theme', state.theme);
  if (!BANK.length) {
    $('qBody').innerHTML = '<div class="empty">题库加载失败：没有找到任何题目。<br>请确认 data/ 目录下的题库文件完整。</div>';
  }
  buildList();

  // 可选：URL 带 ?id=LA09-01 直接跳到指定题
  var mid = location.search.match(/[?&]id=(LA\d{2}-\d{2,3})/);
  if (mid) {
    for (var i = 0; i < view.list.length; i++) {
      if (view.list[i].id === mid[1]) { view.idx = i; render(); break; }
    }
  }

  // 可选：URL 带 ?show=answer 或 ?show=sol 时自动展开，便于截图/分享
  if (/[?&]show=answer/.test(location.search)) {
    var ab = $('answerBlock');
    if (ab) ab.classList.remove('hidden');
  }
  if (/[?&]show=sol/.test(location.search)) {
    var sb = $('solBlock');
    if (sb) sb.classList.remove('hidden');
  }
})();
